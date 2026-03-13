import { useState } from "react";

export default function ChecklistView({ sections = [] }) {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (rowKey) => {
    setOpenRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  return (
    <div className="stack">
      {sections.map((section) => (
        <div key={section.label} className="card">
          <div className="sectionLabel">{section.label}</div>

          <div className="stepsWrap">
            {section.items.map((item, index) => {
              const rowKey = `${section.label}-${index}`;

              if (typeof item === "string") {
                return (
                  <div key={rowKey} className="stepRow">
                    <div className="stepNum">{index + 1}</div>
                    <div className="stepText">{item}</div>
                  </div>
                );
              }

              if (item?.type === "steps") {
                const isOpen = Boolean(openRows[rowKey]);

                return (
                  <div
                    key={rowKey}
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleRow(rowKey)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "12px",
                        background: "transparent",
                        border: "none",
                        color: "inherit",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div className="stepNum">{index + 1}</div>

                      <div style={{ flex: 1 }}>
                        <div className="stepText">{item.label}</div>
                        <div
                          style={{
                            marginTop: "4px",
                            fontSize: "12px",
                            opacity: 0.75,
                          }}
                        >
                          {item.hint || "Tap to view steps"}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "14px",
                          opacity: 0.8,
                          paddingTop: "2px",
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 12px 12px 52px",
                          display: "grid",
                          gap: "10px",
                        }}
                      >
                        {item.steps?.map((step, stepIndex) => (
                          <div
                            key={`${rowKey}-step-${stepIndex}`}
                            className="stepRow"
                            style={{ margin: 0 }}
                          >
                            <div className="stepNum">{stepIndex + 1}</div>
                            <div className="stepText">{step}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}