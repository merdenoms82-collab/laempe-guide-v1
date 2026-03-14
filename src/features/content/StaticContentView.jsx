import { FEEDBACK_URL } from "../../data/feedback";

const WARNING_HEADINGS = new Set(["WARNING", "IMPORTANT", "REFERENCE ONLY"]);

function isNumberedLine(line) {
  return /^\d+\.\s+/.test(line);
}

function stripNumber(line) {
  return line.replace(/^\d+\.\s+/, "").trim();
}

function parseBody(body) {
  const groups = String(body || "")
    .split(/\n\s*\n/)
    .map((group) =>
      group
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    )
    .filter((group) => group.length > 0);

  return groups.map((group, index) => {
    const [first, ...rest] = group;

    if (WARNING_HEADINGS.has(first.toUpperCase())) {
      return {
        id: `warning-${index}`,
        type: "warning",
        heading: first.toUpperCase(),
        paragraphs: rest,
      };
    }

    if (rest.length > 0 && rest.every(isNumberedLine)) {
      return {
        id: `steps-${index}`,
        type: "steps",
        heading: first,
        items: rest.map(stripNumber),
      };
    }

    return {
      id: `text-${index}`,
      type: "text",
      heading: first,
      paragraphs: rest,
    };
  });
}

function WarningCard({ heading, paragraphs }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(125, 28, 28, 0.28) 0%, rgba(18, 24, 38, 1) 55%, rgba(10, 15, 26, 1) 100%)",
        border: "1px solid rgba(239, 68, 68, 0.35)",
        borderLeft: "6px solid #DC2626",
        borderRadius: "16px",
        padding: "18px 20px",
      }}
    >
      <div
        className="sectionLabel"
        style={{
          color: "#E5E7EB",
          marginBottom: "14px",
        }}
      >
        {heading}
      </div>

      <div
        style={{
          display: "grid",
          gap: "14px",
          color: "#E5E7EB",
          lineHeight: 1.7,
        }}
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${heading}-${index}`}
            style={{
              margin: 0,
              color: index === 0 ? "#F8FAFC" : "#D1D5DB",
              fontWeight: index === 0 ? 600 : 500,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function StepsCard({ heading, items }) {
  return (
    <div className="card">
      <div className="sectionLabel">{heading}</div>

      <div className="stepsWrap">
        {items.map((item, index) => (
          <div key={`${heading}-${index}`} className="stepRow">
            <div className="stepNum">{index + 1}</div>
            <div className="stepText">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextCard({ heading, paragraphs }) {
  return (
    <div className="card">
      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#F1F5F9",
          marginBottom: paragraphs.length ? "12px" : "0",
        }}
      >
        {heading}
      </div>

      {paragraphs.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "12px",
            color: "#9CA3AF",
            lineHeight: 1.7,
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={`${heading}-${index}`} style={{ margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StaticContentView({
  title,
  body = "Content placeholder.",
  actionLabel,
  onAction,
}) {
  const isFeedbackPage = title === "Operator Feedback";
  const sections = parseBody(body);

  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      {actionLabel && onAction && (
        <button
          type="button"
          className="card"
          onClick={onAction}
          style={{
            textAlign: "left",
            cursor: "pointer",
            color: "inherit",
          }}
        >
          <h3 style={{ marginBottom: "6px" }}>{actionLabel}</h3>
          <p style={{ margin: 0 }}>Open related safety reference</p>
        </button>
      )}

      {sections.map((section) => {
        if (section.type === "warning") {
          return (
            <WarningCard
              key={section.id}
              heading={section.heading}
              paragraphs={section.paragraphs}
            />
          );
        }

        if (section.type === "steps") {
          return (
            <StepsCard
              key={section.id}
              heading={section.heading}
              items={section.items}
            />
          );
        }

        return (
          <TextCard
            key={section.id}
            heading={section.heading}
            paragraphs={section.paragraphs}
          />
        );
      })}

      {isFeedbackPage && (
        <a
          href={FEEDBACK_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#1A2235",
            color: "#F1F5F9",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "14px 16px",
            textDecoration: "none",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Open Feedback Form
        </a>
      )}
    </div>
  );
}