export default function BottomSheet({ open, title, content, onClose }) {
  if (!open) return null;

  const sections = String(content || "")
    .split("\n\n")
    .filter(Boolean);

  const what = sections[0] || "";
  const increase = sections.find((s) => s.startsWith("Increasing it:"));
  const decrease = sections.find((s) => s.startsWith("Decreasing it:"));
  const note = sections.find((s) => s.startsWith("Note:"));

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

        {what && (
          <div className="sheet-section">
            <div className="sheet-label">What it does</div>
            <div className="sheet-content">{what}</div>
          </div>
        )}

        {(increase || decrease) && (
          <>
            <div className="sheet-divider" />

            <div className="effect-row">
              {increase && (
                <div className="effect-box increase">
                  <div className="effect-arrow">↑</div>
                  <div className="effect-label">Increasing it</div>
                  <div className="sheet-content">
                    {increase.replace("Increasing it: ", "")}
                  </div>
                </div>
              )}

              {decrease && (
                <div className="effect-box decrease">
                  <div className="effect-arrow">↓</div>
                  <div className="effect-label">Decreasing it</div>
                  <div className="sheet-content">
                    {decrease.replace("Decreasing it: ", "")}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {note && (
          <>
            <div className="sheet-divider" />
            <div className="sheet-section">
              <div className="sheet-label">Why it matters</div>
              <div className="sheet-content">{note.replace("Note: ", "")}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}