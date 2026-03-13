export default function TroubleshootingList({ issues, onOpenIssue }) {
  return (
    <div className="stack">
      {issues.map((issue) => (
        <button
          key={issue.id}
          type="button"
          className="card"
          onClick={() => onOpenIssue(issue.id)}
          style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
        >
          <h3>{issue.title}</h3>
          <p>{issue.symptom}</p>
        </button>
      ))}
    </div>
  );
}