import { useMemo, useState } from "react";
import { normalizeText, tokenize } from "./search-utils";

function looksLikeErrorCode(query) {
  const raw = String(query || "").trim();
  const compact = raw.replace(/\s+/g, "");

  if (!compact) return false;

  return (
    /^[A-Za-z]{2,}\d{2,}[A-Za-z0-9-]*$/.test(compact) ||
    /^[A-Za-z]+\d+[A-Za-z0-9-]*$/.test(compact) ||
    /^[A-Za-z0-9-]{5,}$/.test(compact)
  );
}

function isRecoveryBridge(entry) {
  return (
    entry?.entryType === "recovery-bridge" ||
    String(entry?.id || "").endsWith("-search")
  );
}

function hasRecoveryIntent(query) {
  const q = normalizeText(query);
  if (!q) return false;

  const flags = [
    "auto load",
    "autoload",
    "recovery",
    "manual",
    "during load",
    "table lifted",
    "clamp wont turn green",
    "carriage wont move",
    "vacuum wont make during load",
    "lock in",
    "lock out",
  ];

  return flags.some((flag) => q.includes(normalizeText(flag)));
}

function isBroadQuery(query) {
  const q = normalizeText(query);
  const words = tokenize(q);

  if (words.length !== 1) return false;

  const broadTerms = new Set([
    "core",
    "machine",
    "fault",
    "issue",
    "problem",
    "error",
    "robot",
    "screen",
    "pressure",
    "vacuum",
  ]);

  return broadTerms.has(words[0]);
}

function scoreIssueEntry(query, entry) {
  const q = normalizeText(query);
  if (!q) {
    return {
      entry,
      score: 0,
      exact: false,
      exactTrigger: false,
      exactTitle: false,
      exactSymptom: false,
      isRecovery: isRecoveryBridge(entry),
    };
  }

  const title = normalizeText(entry.title);
  const symptom = normalizeText(entry.symptom);
  const triggers = (entry.triggers || []).map(normalizeText);
  const causes = normalizeText((entry.likelyCauses || []).join(" "));
  const checks = normalizeText((entry.firstChecks || []).join(" "));
  const relatedLabels = normalizeText(
    (entry.relatedPages || []).map((page) => page.label).join(" ")
  );

  const recovery = isRecoveryBridge(entry);
  const recoveryIntent = hasRecoveryIntent(q);
  const broadQuery = isBroadQuery(q);

  let score = 0;
  let exactTrigger = false;
  let exactTitle = false;
  let exactSymptom = false;

  if (title === q) {
    score += 420;
    exactTitle = true;
  }

  if (symptom === q) {
    score += 340;
    exactSymptom = true;
  }

  for (const trigger of triggers) {
    if (!trigger) continue;

    if (trigger === q) {
      score += 560;
      exactTrigger = true;
    } else if (trigger.includes(q)) {
      score += 230;
    } else if (q.includes(trigger) && trigger.length > 4) {
      score += 170;
    }
  }

  if (title.includes(q)) score += 260;
  if (symptom.includes(q)) score += 190;
  if (causes.includes(q)) score += 65;
  if (checks.includes(q)) score += 55;
  if (relatedLabels.includes(q)) score += 15;

  const words = tokenize(q);
  for (const word of words) {
    if (!word) continue;
    if (title.includes(word)) score += 34;
    if (symptom.includes(word)) score += 24;
    if (triggers.some((trigger) => trigger.includes(word))) score += 28;
    if (causes.includes(word)) score += 8;
    if (checks.includes(word)) score += 6;
  }

  if (recovery) {
    score -= 120;

    if (recoveryIntent) score += 160;
    if (exactTrigger) score += 120;
    if (exactTitle) score += 80;

    if (!recoveryIntent && !exactTrigger && !exactTitle) {
      score -= 80;
    }
  } else {
    score += 20;
  }

  if (broadQuery) {
    if (title.includes("robot")) score -= 120;
    if (title.includes("camera")) score -= 90;
    if (title.includes("pickoff")) score -= 90;
    if (title.includes("heater")) score -= 70;
    if (title.includes("dosing pump")) score -= 70;
    if (recovery) score -= 100;
  }

  if (entry.priority === "high") score += 10;
  if (entry.priority === "medium") score += 4;

  return {
    entry,
    score,
    exact: exactTrigger || exactTitle || exactSymptom,
    exactTrigger,
    exactTitle,
    exactSymptom,
    isRecovery: recovery,
  };
}

function matchIssues(query, issues) {
  const q = query.trim();
  if (!q) return [];

  return issues
    .map((entry) => scoreIssueEntry(q, entry))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function scoreErrorCodeEntry(query, item) {
  const q = normalizeText(query);
  if (!q) {
    return { item, score: 0, exact: false, exactCode: false };
  }

  const code = normalizeText(item.code);
  const hay = normalizeText(
    `${item.code} ${item.area} ${item.message} ${item.operatorMeaning || ""} ${item.status} ${(item.firstChecks || []).join(" ")} ${item.whenCallMaint || ""}`
  );

  let score = 0;
  let exactCode = false;

  if (code === q) {
    score += 700;
    exactCode = true;
  }

  if (code.includes(q)) score += 360;
  if (hay.includes(q)) score += 120;

  const words = tokenize(q);
  for (const word of words) {
    if (!word) continue;
    if (code.includes(word)) score += 55;
    if (hay.includes(word)) score += 18;
  }

  return {
    item,
    score,
    exact: exactCode,
    exactCode,
  };
}

function matchErrorCodes(query, codes) {
  if (!looksLikeErrorCode(query)) return [];

  const q = normalizeText(query);
  if (!q) return [];

  return codes
    .map((item) => scoreErrorCodeEntry(q, item))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function chooseTopResult(issueMatch, codeMatch) {
  if (!issueMatch && !codeMatch) return { type: "none", value: null };

  if (issueMatch && !codeMatch) return { type: "issue", value: issueMatch };
  if (!issueMatch && codeMatch) return { type: "code", value: codeMatch };

  if (codeMatch.exact && !issueMatch.exact) {
    return { type: "code", value: codeMatch };
  }

  if (issueMatch.exact && !codeMatch.exact) {
    return { type: "issue", value: issueMatch };
  }

  if (codeMatch.score >= issueMatch.score + 80) {
    return { type: "code", value: codeMatch };
  }

  return { type: "issue", value: issueMatch };
}

function buildQuickHelper({ topChoice, query }) {
  if (!query.trim()) {
    return {
      title: "Search Helper",
      summary: "Type a symptom, machine message, or exact error code.",
      firstChecks: [
        "Try a symptom like vacuum, shot not full, or light curtain.",
        "Use an exact code only if you have one.",
        "Use short phrases first.",
      ],
      escalate: "Open troubleshooting or the error code page if needed.",
      type: "empty",
      isRecovery: false,
    };
  }

  if (topChoice.type === "issue" && topChoice.value) {
    const match = topChoice.value;
    const issue = match.entry;

    return {
      title: issue.title,
      summary: issue.symptom || "Closest troubleshooting match found.",
      firstChecks: (issue.firstChecks || []).slice(0, 4),
      escalate:
        issue.whenCallMaint ||
        "Call maintenance if the condition repeats or cannot be cleared safely.",
      type: "issue",
      isRecovery: match.isRecovery,
    };
  }

  if (topChoice.type === "code" && topChoice.value) {
    const code = topChoice.value.item;

    return {
      title: code.code,
      summary:
        code.operatorMeaning || code.message || "Closest error code match found.",
      firstChecks: (code.firstChecks || []).slice(0, 4),
      escalate:
        code.whenCallMaint ||
        "Call maintenance if the code repeats or blocks production.",
      type: "code",
      isRecovery: false,
    };
  }

  return {
    title: "No strong match found",
    summary: `No clear match was found for "${query}".`,
    firstChecks: [
      "Try a shorter symptom or simpler wording.",
      "Try the exact code only if you have one.",
      "Try related terms like vacuum, clamp, carriage, or light curtain.",
    ],
    escalate: "If the machine is unsafe or repeatedly faulting, stop and escalate.",
    type: "none",
    isRecovery: false,
  };
}

function collectRelatedPages(entry, limit = 3) {
  const seen = new Set();
  const pages = [];

  for (const page of entry?.relatedPages || []) {
    if (!page?.route || seen.has(page.route)) continue;
    seen.add(page.route);
    pages.push(page);
    if (pages.length >= limit) break;
  }

  return pages;
}

function SearchResultCard({
  heading,
  summary,
  checks = [],
  escalate,
  footer,
  footerTone = "tile--blue",
  footerIcon = "🧭",
  onFooterClick,
  onHeaderClick,
}) {
  return (
    <div className="stack">
      <button
        type="button"
        className="card card--tip"
        onClick={onHeaderClick}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Closest Match — {heading}</h3>
        <p>{summary}</p>
      </button>

      <div className="card">
        <h3>Try this first</h3>
        <ul>
          {checks.map((item, index) => (
            <li key={`${heading}-check-${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card card--warn">
        <h3>When to stop and escalate</h3>
        <p>{escalate}</p>
      </div>

      {footer && (
        <button
          className={`tile ${footerTone}`}
          type="button"
          onClick={onFooterClick}
          style={{ minHeight: "84px", width: "100%", textAlign: "left" }}
        >
          <div className="tile__icon">{footerIcon}</div>
          <div className="tile__title">{footer.title}</div>
          <div className="tile__sub">{footer.sub}</div>
        </button>
      )}
    </div>
  );
}

export default function SearchView({
  issues,
  errorCodes = [],
  onOpenIssue,
  onOpenErrorCode,
  onOpenPage,
}) {
  const [query, setQuery] = useState("");

  const issueMatches = useMemo(() => matchIssues(query, issues), [issues, query]);

  const codeMatches = useMemo(() => {
    return matchErrorCodes(query, errorCodes);
  }, [query, errorCodes]);

  const topIssueMatch = issueMatches[0] || null;
  const topCodeMatch = codeMatches[0] || null;

  const topChoice = useMemo(() => {
    return chooseTopResult(topIssueMatch, topCodeMatch);
  }, [topIssueMatch, topCodeMatch]);

  const helper = useMemo(() => {
    return buildQuickHelper({ topChoice, query });
  }, [topChoice, query]);

  const topIssue =
    topChoice.type === "issue" ? topChoice.value?.entry || null : null;
  const topCode =
    topChoice.type === "code" ? topChoice.value?.item || null : null;

  const showRelatedTroubleshooting = useMemo(() => {
    if (!topIssueMatch || topChoice.type !== "issue") return false;
    if (topIssueMatch.isRecovery) return false;
    if (topIssueMatch.exact && topIssueMatch.score >= 500) return false;
    return issueMatches.length > 1;
  }, [issueMatches.length, topChoice.type, topIssueMatch]);

  const relatedIssueMatches = useMemo(() => {
    if (!showRelatedTroubleshooting) return [];
    return issueMatches.slice(1, 3);
  }, [issueMatches, showRelatedTroubleshooting]);

  const relatedPages = useMemo(() => {
    if (!topIssue) return [];
    if (topChoice.value?.isRecovery) return [];
    if (topChoice.value?.exact && topChoice.value?.score >= 500) return [];
    return collectRelatedPages(topIssue, 3);
  }, [topChoice, topIssue]);

  return (
    <div className="stack">
      <div className="searchBar">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search symptoms, messages, or exact error codes..."
          aria-label="Search documentation"
        />
      </div>

      {helper.type === "issue" && topIssue && (
        <SearchResultCard
          heading={topIssue.title}
          summary={topIssue.symptom || "Closest troubleshooting match found."}
          checks={(topIssue.firstChecks || []).slice(0, 4)}
          escalate={
            topIssue.whenCallMaint ||
            "Call maintenance if the condition repeats or cannot be cleared safely."
          }
          footer={{
            title: topChoice.value?.isRecovery
              ? "Open Auto Load Recovery"
              : "Open Full Troubleshooting",
            sub: topIssue.title,
          }}
          footerTone="tile--blue"
          footerIcon={topChoice.value?.isRecovery ? "↪" : "🧭"}
          onHeaderClick={() => onOpenIssue(topIssue.id)}
          onFooterClick={() => onOpenIssue(topIssue.id)}
        />
      )}

      {helper.type === "code" && topCode && (
        <SearchResultCard
          heading={topCode.code}
          summary={topCode.operatorMeaning || topCode.message}
          checks={(topCode.firstChecks || []).slice(0, 4)}
          escalate={
            topCode.whenCallMaint ||
            "Call maintenance if the code repeats or blocks production."
          }
          footer={{
            title: "Open Full Error Code Detail",
            sub: topCode.code,
          }}
          footerTone="tile--violet"
          footerIcon="📟"
          onHeaderClick={() => onOpenErrorCode(topCode.id)}
          onFooterClick={() => onOpenErrorCode(topCode.id)}
        />
      )}

      {helper.type === "empty" && (
        <>
          <div className="card card--tip">
            <h3>Search Helper</h3>
            <p>{helper.summary}</p>
          </div>

          <div className="card">
            <h3>Try this first</h3>
            <ul>
              {helper.firstChecks.map((item, index) => (
                <li key={`helper-check-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {helper.type === "none" && (
        <>
          <div className="card card--tip">
            <h3>No strong match found</h3>
            <p>{helper.summary}</p>
          </div>

          <div className="card">
            <h3>Try this first</h3>
            <ul>
              {helper.firstChecks.map((item, index) => (
                <li key={`helper-none-${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card card--warn">
            <h3>When to stop and escalate</h3>
            <p>{helper.escalate}</p>
          </div>
        </>
      )}

      {relatedIssueMatches.length > 0 && (
        <div className="card">
          <h3>Related Troubleshooting</h3>
          <div className="stack" style={{ marginTop: "12px" }}>
            {relatedIssueMatches.map(({ entry }) => (
              <button
                key={entry.id}
                type="button"
                className="card"
                onClick={() => onOpenIssue(entry.id)}
                style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
              >
                <h3>{entry.title}</h3>
                <p>{entry.symptom}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {relatedPages.length > 0 && (
        <div className="card">
          <h3>Related Pages</h3>
          <div className="stack" style={{ marginTop: "12px" }}>
            {relatedPages.map((page) => (
              <button
                key={page.route}
                type="button"
                className="card"
                onClick={() => onOpenPage(page.route)}
                style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
              >
                <h3>{page.label}</h3>
                <p>{page.route}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}