function parseSections(title, body) {
  const text = String(body || "").trim();
  if (!text) return [];

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const sections = [];
  let current = null;

  const pushCurrent = () => {
    if (current) sections.push(current);
    current = null;
  };

  const isHeadingLine = (line) => {
    const normalized = line.toUpperCase();

    if (
      normalized.includes("AUTOMATIC COREBOX LOADING") ||
      normalized.includes("MANUAL COREBOX LOAD") ||
      normalized.includes("HIGH-RISK MISTAKES") ||
      normalized.includes("COMMON COREBOX ISSUES")
    ) {
      return true;
    }

    return [
      "SUMMARY",
      "STEPS",
      "OPERATOR NOTES",
      "RETURN TO SERVICE",
      "WARNING",
    ].includes(normalized);
  };

  const isWarnHeading = (line) => {
    const normalized = line.toUpperCase();
    return normalized === "WARNING" || normalized.includes("HIGH-RISK MISTAKES");
  };

  for (const line of lines) {
    const numberedMatch = line.match(/^(\d+)\.\s*(.*)$/);

    if (isHeadingLine(line)) {
      pushCurrent();
      current = {
        kind: isWarnHeading(line) ? "warn" : "normal",
        heading: line,
        items: [],
        notes: [],
      };
      continue;
    }

    if (!current) {
      current = {
        kind: "normal",
        heading: title,
        items: [],
        notes: [],
      };
    }

    if (numberedMatch) {
      current.items.push({
        number: numberedMatch[1],
        text: numberedMatch[2],
      });
    } else {
      current.notes.push(line);
    }
  }

  pushCurrent();
  return sections;
}

export default function StaticContentView({
  title,
  body = "Content placeholder.",
}) {
  const sections = parseSections(title, body);

  return (
    <div className="stack">
      {sections.map((section, index) => (
        <div
          key={`${section.heading}-${index}`}
          className={`card ${section.kind === "warn" ? "card--warn" : ""}`}
        >
          <div className="sectionLabel">{section.heading}</div>

          {section.notes.length > 0 && (
            <div
              style={{
                display: "grid",
                gap: "10px",
                marginBottom: section.items.length ? "14px" : 0,
              }}
            >
              {section.notes.map((note, noteIndex) => (
                <p key={`${section.heading}-note-${noteIndex}`}>{note}</p>
              ))}
            </div>
          )}

          {section.items.length > 0 && (
            <div className="stepsWrap">
              {section.items.map((item) => (
                <div
                  key={`${section.heading}-${item.number}`}
                  className="stepRow"
                >
                  <div className="stepNum">{item.number}</div>
                  <div className="stepText">{item.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}