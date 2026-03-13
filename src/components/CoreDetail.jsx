function SettingRows({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div style={{ marginTop: "10px", display: "grid", gap: "10px" }}>
        {items.map((item) => (
          <div
            key={item.label}
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr auto auto",
              gap: "10px",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "8px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.92)", fontSize: "14px" }}>
              {item.label}
            </div>

            <div
              style={{
                color: "#60A5FA",
                fontWeight: 700,
                fontSize: "14px",
                textAlign: "right",
              }}
            >
              {item.saved}
            </div>

            <div
              style={{
                color: "#22C55E",
                fontWeight: 700,
                fontSize: "14px",
                textAlign: "right",
              }}
            >
              {item.floor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoreDetail({ core }) {
  return (
    <div className="stack">
      <div className="card">
        <h3>{core.title}</h3>
        <p><strong>Machine Name:</strong> {core.machineName}</p>
        <p style={{ marginTop: "8px" }}>
          <span style={{ color: "#60A5FA", fontWeight: 700 }}>Blue = Saved</span>
          {"  •  "}
          <span style={{ color: "#22C55E", fontWeight: 700 }}>Green = Floor</span>
        </p>
      </div>

      <div className="card">
        <h3>Stacking</h3>
        <ul>
          {core.stacking.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Common Problems</h3>
        <ul>
          {core.commonProblems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card card--tip">
        <h3>Best Fix</h3>
        <ul>
          {core.bestFix.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <SettingRows title="Gassing Settings" items={core.gassingSettings} />
      <SettingRows title="Shot Settings" items={core.shotSettings} />
    </div>
  );
}