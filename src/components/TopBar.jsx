export default function TopBar({ onOpenSearch }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand__eyebrow">OPERATOR HUB</div>
        <div className="brand__titleRow">
          <div className="brand__title">Laempe Reference Guide</div>
          <div className="brandPill">Offline Ready</div>
        </div>
        <div className="brand__subtitle">
          Fast operator reference for floor use
        </div>
      </div>

      <button
        className="iconBtn iconBtn--search"
        type="button"
        onClick={onOpenSearch}
        aria-label="Open search"
        title="Search"
      >
        🔎
      </button>
    </header>
  );
}