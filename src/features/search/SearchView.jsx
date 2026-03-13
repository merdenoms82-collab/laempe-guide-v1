import { useMemo, useState } from "react";
import { matchKB } from "./search-utils";

function collectRelatedPages(matches) {
  const seen = new Set();
  const pages = [];

  for (const { entry } of matches) {
    for (const page of entry.relatedPages || []) {
      if (!page?.route || seen.has(page.route)) continue;
      seen.add(page.route);
      pages.push(page);
    }
  }

  return pages;
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchErrorCodes(query, codes) {
  const q = normalizeText(query);
  if (!q) return [];

  return codes
    .map((item) => {
      const hay = normalizeText(
        `${item.code} ${item.area} ${item.message} ${item.operatorMeaning || ""} ${item.status} ${(item.firstChecks || []).join(" ")} ${item.whenCallMaint || ""}`
      );

      let score = 0;

      if (normalizeText(item.code) === q) score += 300;
      if (normalizeText(item.code).includes(q)) score += 220;
      if (hay.includes(q)) score += 100;

      const words = q.split(" ");
      for (const word of words) {
        if (word && hay.includes(word)) score += 20;
      }

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

function buildQuickHelper({ topIssue, topCode, query }) {
  if (!query.trim()) {
    return {
      title: "Search Helper",
      summary: "Type a symptom, machine message, or error code.",
      firstChecks: [
        "Try a symptom like vacuum, gas smell, or light curtain.",
        "Try an error code like MCT0326.",
        "Use short phrases first.",
      ],
      escalate: "Open the full troubleshooting or error code page if needed.",
      type: "empty",
    };
  }

  if (topIssue) {
    return {
      title: topIssue.title,
      summary: topIssue.symptom || "Closest troubleshooting match found.",
      firstChecks: (topIssue.firstChecks || []).slice(0, 4),
      escalate:
        topIssue.whenCallMaint ||
        "Call maintenance if the condition repeats or cannot be cleared safely.",
      type: "issue",
    };
  }

  if (topCode) {
    return {
      title: topCode.code,
      summary:
        topCode.operatorMeaning || topCode.message || "Closest error code match found.",
      firstChecks: (topCode.firstChecks || []).slice(0, 4),
      escalate:
        topCode.whenCallMaint ||
        "Call maintenance if the code repeats or blocks production.",
      type: "code",
    };
  }

  return {
    title: "No strong match found",
    summary: `No clear match was found for "${query}".`,
    firstChecks: [
      "Try a shorter symptom or simpler wording.",
      "Try the exact code if you have one.",
      "Try related terms like vacuum, carriage, table, or light curtain.",
    ],
    escalate: "If the machine is unsafe or repeatedly faulting, stop and escalate.",
    type: "none",
  };
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

  const issueMatches = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];
    return matchKB(trimmed, issues, { limit: 3, minScore: 70 });
  }, [issues, query]);

  const codeMatches = useMemo(() => {
    return matchErrorCodes(query, errorCodes);
  }, [query, errorCodes]);

  const relatedPages = useMemo(
    () => collectRelatedPages(issueMatches),
    [issueMatches]
  );

  const topIssue = issueMatches[0]?.entry || null;
  const topCode = codeMatches[0]?.item || null;

  const helper = useMemo(() => {
    return buildQuickHelper({ topIssue, topCode, query });
  }, [topIssue, topCode, query]);

  return (
    <div className="stack">
      <div className="searchBar">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search symptoms, messages, or error codes..."
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
            title: "Open Full Troubleshooting",
            sub: topIssue.title,
          }}
          footerTone="tile--blue"
          footerIcon="🧭"
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
            title: "Browse All Error Codes",
            sub: topCode.code,
          }}
          footerTone="tile--violet"
          footerIcon="📟"
          onHeaderClick={() => onOpenErrorCode(topCode.id)}
          onFooterClick={() => onOpenPage("troubleshooting/error-codes")}
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

      {issueMatches.length > 1 && (
        <div className="card">
          <h3>Related Troubleshooting</h3>
          <div className="stack" style={{ marginTop: "12px" }}>
            {issueMatches.slice(1).map(({ entry }) => (
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

      {helper.type !== "code" && topCode && (
        <div className="card">
          <h3>Closest Related Error Code</h3>
          <div className="stack" style={{ marginTop: "12px" }}>
            <button
              type="button"
              className="card"
              onClick={() => onOpenErrorCode(topCode.id)}
              style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
            >
              <h3>{topCode.code}</h3>
              <p><strong>Area:</strong> {topCode.area}</p>
              <p style={{ marginTop: "6px" }}>
                {topCode.operatorMeaning || topCode.message}
              </p>
            </button>

            <button
              type="button"
              className="tile tile--violet"
              onClick={() => onOpenPage("troubleshooting/error-codes")}
              style={{ minHeight: "84px", width: "100%", textAlign: "left" }}
            >
              <div className="tile__icon">📟</div>
              <div className="tile__title">Open Error Code Lookup</div>
              <div className="tile__sub">Browse all captured codes</div>
            </button>
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