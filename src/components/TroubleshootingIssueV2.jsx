function MaintBriefing({ fm }) {
  return (
    <div className="maintBriefing">
      <div className="maintBriefing__row">
        <span className="maintBriefing__label">System</span>
        <span className="maintBriefing__value">{fm.system}</span>
      </div>
      <div className="maintBriefing__row">
        <span className="maintBriefing__label">Check first</span>
        <span className="maintBriefing__value">{fm.check}</span>
      </div>
      <div className="maintBriefing__row">
        <span className="maintBriefing__label">Likely part</span>
        <span className="maintBriefing__value">{fm.likelyPart}</span>
      </div>
      <div className="maintBriefing__row">
        <span className="maintBriefing__label">Note</span>
        <span className="maintBriefing__value">{fm.note}</span>
      </div>
    </div>
  );
}

export default function TroubleshootingIssueV2({ issue }) {
  const operatorChecks = (issue.checks || []).filter((c) => c.tag === "operator");
  const maintenanceChecks = (issue.checks || []).filter((c) => c.tag === "maintenance");

  if (issue.allMaintenance) {
    return (
      <div className="stack">
        <div className="card">
          <h3>Symptom</h3>
          <p>{issue.symptom}</p>
        </div>

        <div className="card card--warn">
          <h3>This is a maintenance job</h3>
          <p>
            There is no operator action for this fault. Call maintenance and
            hand them this briefing.
          </p>
        </div>

        {issue.checks.map((check, i) => (
          <div key={i} className="card card--amber">
            <div className="maintCheck__cause">{check.cause}</div>
            <MaintBriefing fm={check.forMaintenance} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="stack">
      <div className="card">
        <h3>Symptom</h3>
        <p>{issue.symptom}</p>
      </div>

      {operatorChecks.length > 0 && (
        <div className="card card--tip">
          <h3>Operator checks</h3>
          <div className="checksTable">
            {operatorChecks.map((check, i) => (
              <div key={i} className="checkRow">
                <div className="checkRow__cause">{check.cause}</div>
                <div className="checkRow__action">{check.action}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {maintenanceChecks.map((check, i) => (
        <div key={i} className="card card--amber">
          <div className="maintCheck__header">
            <span className="maintCheck__cause">{check.cause}</span>
            <span className="statusChip statusChip--maint">Call maintenance</span>
          </div>
          <MaintBriefing fm={check.forMaintenance} />
        </div>
      ))}
    </div>
  );
}
