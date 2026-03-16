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
    <div className="card card--warn">
      <div className="sectionLabel">{heading}</div>
      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${heading}-${index}`}
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.92)",
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
      <div className="sectionLabel">{heading}</div>

      {paragraphs.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={`${heading}-${index}`}
              style={{
                margin: 0,
              }}
            >
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
    <div className="stack">
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
          className="tile tile--blue"
          style={{
            minHeight: "90px",
            textDecoration: "none",
          }}
        >
          <div className="tile__icon">📝</div>
          <div className="tile__title">Open Feedback Form</div>
          <div className="tile__sub">Submit corrections and suggestions</div>
        </a>
      )}
    </div>
  );
}