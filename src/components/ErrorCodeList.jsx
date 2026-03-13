function groupByArea(items) {
  const map = new Map();

  for (const item of items) {
    if (!map.has(item.area)) {
      map.set(item.area, []);
    }
    map.get(item.area).push(item);
  }

  return Array.from(map.entries()).map(([area, codes]) => ({ area, codes }));
}

export default function ErrorCodeList({ items }) {
  const groups = groupByArea(items);

  return (
    <div className="stack">
      {groups.map((group) => (
        <div key={group.area} className="card">
          <div className="sectionLabel">{group.area}</div>

          <div className="stack" style={{ marginTop: "12px" }}>
            {group.codes.map((item) => (
              <div key={item.code} className="card">
                <h3>{item.code}</h3>
                <p>{item.message}</p>

                <div style={{ marginTop: "10px" }}>
                  <strong>Status:</strong>{" "}
                  <span style={{ color: "rgba(255,255,255,0.82)" }}>{item.status}</span>
                </div>

                {item.firstChecks?.length > 0 && (
                  <div style={{ marginTop: "10px" }}>
                    <strong>First checks:</strong>
                    <ul style={{ margin: "6px 0 0 18px" }}>
                      {item.firstChecks.map((check, index) => (
                        <li key={`${item.code}-check-${index}`}>{check}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.whenCallMaint && (
                  <div style={{ marginTop: "10px" }}>
                    <strong>When to call maintenance:</strong>
                    <p style={{ marginTop: "6px" }}>{item.whenCallMaint}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}