function getPriorityLabel(priority) {
  if (priority === "high") return "High";
  if (priority === "medium") return "Medium";
  return "Reference";
}

function getPriorityClass(priority) {
  if (priority === "high") return "statusChip statusChip--high";
  if (priority === "medium") return "statusChip statusChip--medium";
  return "statusChip statusChip--neutral";
}

export default function TroubleshootingList({ issues, onOpenIssue }) {
  return (
    <div className="stack">
      {issues.map((issue) => (
        <button
          key={issue.id}
          type="button"
          className="card issueCard"
          onClick={() => onOpenIssue(issue.id)}
          style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
        >
          <div className="issueCard__top">
            <h3>{issue.title}</h3>
            <div className={getPriorityClass(issue.priority)}>
              {getPriorityLabel(issue.priority)}
            </div>
          </div>

          <p>{issue.symptom}</p>

          <div className="issueCard__footer">
            <div className="issueCard__hint">Open troubleshooting</div>
            <div className="issueCard__arrow">›</div>
          </div>
        </button>
      ))}
    </div>
  );
}