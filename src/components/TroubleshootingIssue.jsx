export default function TroubleshootingIssue({ issue }) {
  return (
    <div className="stack">
      <div className="card">
        <h3>Symptom</h3>
        <p>{issue.symptom}</p>
      </div>

      <div className="card">
        <h3>First Checks</h3>
        <ul>
          {issue.firstChecks.map((item, index) => (
            <li key={`${index}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Next Steps</h3>
        <ul>
          {issue.nextSteps.map((item, index) => (
            <li key={`${index}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Likely Causes</h3>
        <ul>
          {issue.likelyCauses.map((item, index) => (
            <li key={`${index}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card card--warn">
        <h3>When To Call Maintenance</h3>
        <p>{issue.whenCallMaint}</p>
      </div>

      <div className="card card--tip">
        <h3>Safety Notes</h3>
        <ul>
          {issue.safetyNotes.map((item, index) => (
            <li key={`${index}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}