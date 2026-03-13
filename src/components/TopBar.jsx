export default function TopBar({ onOpenSearch }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand__title">Laempe Reference Guide</div>
        <div className="brand__subtitle">
          Touch Panel Training Reference • Version 0.1 (Pilot)
        </div>
      </div>

      <button
        className="iconBtn"
        type="button"
        onClick={onOpenSearch}
        aria-label="Open search"
      >
        🔎
      </button>
    </header>
  );
}