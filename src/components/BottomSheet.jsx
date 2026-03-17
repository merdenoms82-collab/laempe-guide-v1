export default function BottomSheet({ open, title, content, onClose }) {
  if (!open) return null;

  const sections = String(content || "")
    .split("\n\n")
    .filter(Boolean);

  const what = sections[0] || "";
  const increase = sections.find((s) => s.startsWith("Increasing it:"));
  const decrease = sections.find((s) => s.startsWith("Decreasing it:"));
  const note = sections.find((s) => s.startsWith("Note:"));

  const isParameterStyle = Boolean(increase || decrease || note);
  const topLabel = note ? "Why it matters" : "What it does";
  const topContent = note ? note.replace("Note: ", "") : what;

  return (
    <>
      <div
        className={`sheet-overlay ${open ? "active" : ""}`}
        onClick={onClose}
      />

      <div
        className={`bottom-sheet ${open ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="sheet-handle" />

        <div className="sheet-title">{title}</div>

        {topContent && (
          <div className="sheet-section">
            {isParameterStyle && (
              <div className="sheet-label">{topLabel}</div>
            )}
            <div className="sheet-content">{topContent}</div>
          </div>
        )}

        {isParameterStyle && (increase || decrease) && (
          <>
            <div className="sheet-divider" />

            <div className="effect-row">
              <div className="effect-box increase">
                <div className="effect-arrow">↑</div>
                <div className="effect-label">Increasing it</div>
                <div className="sheet-content">
                  {increase ? increase.replace("Increasing it: ", "") : "—"}
                </div>
              </div>

              <div className="effect-box decrease">
                <div className="effect-arrow">↓</div>
                <div className="effect-label">Decreasing it</div>
                <div className="sheet-content">
                  {decrease ? decrease.replace("Decreasing it: ", "") : "—"}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}