export default function ErrorCodeDetail({ item }) {
  return (
    <div className="stack">
      <div className="card">
        <h3>{item.code}</h3>
        <p><strong>Area:</strong> {item.area}</p>
        <p style={{ marginTop: "8px" }}>{item.message}</p>
      </div>

      <div className="card">
        <h3>What it means</h3>
        <p>{item.operatorMeaning || item.message}</p>
      </div>

      <div className="card">
        <h3>Try this first</h3>
        <ul>
          {(item.firstChecks || []).map((check, index) => (
            <li key={`${item.code}-check-${index}`}>{check}</li>
          ))}
        </ul>
      </div>

      <div className="card card--warn">
        <h3>When to stop and escalate</h3>
        <p>{item.whenCallMaint}</p>
      </div>

      <div className="card">
        <h3>Status</h3>
        <p>{item.status}</p>
      </div>
    </div>
  );
}