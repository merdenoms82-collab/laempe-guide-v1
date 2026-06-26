export default function TopBar({ onOpenSearch }) {
  return (
    <header className="topbar">
      <div className="brand__mark">L</div>

      <div className="brand">
        <div className="brand__eyebrow">Operator Hub</div>
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
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </header>
  );
}
