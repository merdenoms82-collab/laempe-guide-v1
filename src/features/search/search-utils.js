export function normalizeText(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenize(s) {
  const t = normalizeText(s);
  return t ? t.split(" ").filter(Boolean) : [];
}

export function editDistance(a, b) {
  a = normalizeText(a);
  b = normalizeText(b);

  if (!a || !b) return 999;

  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i += 1) dp[i][0] = i;
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

export function tokenOverlapScore(query, text) {
  const q = tokenize(query);
  const tokens = new Set(tokenize(text));
  let score = 0;

  for (const w of q) {
    if (tokens.has(w)) {
      score += 3;
    } else {
      for (const tk of tokens) {
        if (tk.startsWith(w) && w.length >= 3) {
          score += 1;
          break;
        }
      }
    }
  }

  return score;
}

export function scoreKBEntry(query, entry) {
  const q = normalizeText(query);
  if (!q) return 0;

  let score = 0;
  let hasRealTextMatch = false;

  const titleN = normalizeText(entry.title);
  const triggers = entry.triggers || [];
  const trigText = triggers.join(" ");

  if (titleN === q) {
    score += 200;
    hasRealTextMatch = true;
  }

  if (titleN.includes(q)) {
    score += 120;
    hasRealTextMatch = true;
  }

  for (const t of triggers) {
    const nt = normalizeText(t);
    if (!nt) continue;

    if (nt === q) {
      score += 160;
      hasRealTextMatch = true;
    }

    if (nt.includes(q) || q.includes(nt)) {
      score += 90;
      hasRealTextMatch = true;
    }

    if (q.length <= 18 && nt.length <= 18) {
      const d = editDistance(q, nt);
      if (d <= 2) {
        score += 60 - d * 10;
        hasRealTextMatch = true;
      }
    }
  }

  const hay = `${entry.title} ${trigText} ${entry.symptom || ""}`;
  const overlap = tokenOverlapScore(query, hay);

  if (overlap > 0) {
    score += overlap * 6;
    hasRealTextMatch = true;
  }

  if (!hasRealTextMatch) {
    return 0;
  }

  const priorityBoost =
    entry.priority === "high" ? 20 :
    entry.priority === "medium" ? 10 :
    entry.priority === "low" ? 5 : 0;

  score += priorityBoost;

  return score;
}

export function matchKB(query, entries, { limit = 5, minScore = 70 } = {}) {
  return entries
    .map((entry) => ({ entry, score: scoreKBEntry(query, entry) }))
    .filter((item) => item.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

const SEARCH_PAGES = [
  {
    id: "screens",
    title: "Control Screens",
    text: "control screens pneu sand lg gassing machine shot parameters parameter status reference",
  },
  {
    id: "screens/gassing",
    title: "Gassing Parameters",
    text: "gassing gas exhaust pre heating curing soft cores gas pressure gassing time",
  },
  {
    id: "screens/machine",
    title: "Machine Shot Parameters",
    text: "machine shot parameters shooting pressure shooting time number of shots exhaust time",
  },
  {
    id: "mixer",
    title: "Sand Mixer",
    text: "sand mixer overview settings checks cleaning mixer state sand demand release",
  },
  {
    id: "checklists",
    title: "Shift Checklists",
    text: "start of shift end of shift checklist operator checks handoff clean machine",
  },
  {
    id: "loadbox",
    title: "Corebox Setup",
    text: "corebox setup changeover hooks transport hooks manual load automatic loading",
  },
  {
    id: "safety",
    title: "Emergency & Safety",
    text: "emergency safety critical procedures approved warning",
  },
];

export function scorePage(query, page) {
  const q = normalizeText(query);
  if (!q) return 0;

  let score = 0;
  const titleN = normalizeText(page.title);
  const textN = normalizeText(page.text);

  if (titleN === q) score += 160;
  if (titleN.includes(q)) score += 100;
  if (textN.includes(q)) score += 60;

  score += tokenOverlapScore(query, `${page.title} ${page.text}`) * 5;

  if (q.length <= 18) {
    const d = editDistance(q, titleN);
    if (d <= 2) score += 40 - d * 10;
  }

  return score;
}

export function matchPages(query, { limit = 4, minScore = 25 } = {}) {
  return SEARCH_PAGES
    .map((page) => ({ page, score: scorePage(query, page) }))
    .filter((item) => item.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}