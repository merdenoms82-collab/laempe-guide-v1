export default function ScreenList({
  onOpenSheet,
  onOpenGassing,
  onOpenMachine,
}) {
  return (
    <div className="screens-list">
      <button type="button" className="screen-item" onClick={onOpenGassing}>
        <div className="screen-icon">🧪</div>
        <div className="screen-info">
          <div className="screen-name">Gassing Parameters</div>
          <div className="screen-desc">Open parameter reference</div>
        </div>
        <div className="screen-arrow">›</div>
      </button>

      <button type="button" className="screen-item" onClick={onOpenMachine}>
        <div className="screen-icon">⚙️</div>
        <div className="screen-info">
          <div className="screen-name">Machine Shot Parameters</div>
          <div className="screen-desc">Open machine parameter reference</div>
        </div>
        <div className="screen-arrow">›</div>
      </button>

      <button
        type="button"
        className="screen-item"
        onClick={() => onOpenSheet("pneu")}
      >
        <div className="screen-icon">🔧</div>
        <div className="screen-info">
          <div className="screen-name">PNEU</div>
          <div className="screen-desc">Pneumatic status and sensor reference</div>
        </div>
        <div className="screen-arrow">›</div>
      </button>

      <button
        type="button"
        className="screen-item"
        onClick={() => onOpenSheet("sand")}
      >
        <div className="screen-icon">🪣</div>
        <div className="screen-info">
          <div className="screen-name">SAND</div>
          <div className="screen-desc">Sand demand and mixer state reference</div>
        </div>
        <div className="screen-arrow">›</div>
      </button>

      <button
        type="button"
        className="screen-item"
        onClick={() => onOpenSheet("lg")}
      >
        <div className="screen-icon">📺</div>
        <div className="screen-info">
          <div className="screen-name">LG</div>
          <div className="screen-desc">LG screen reference</div>
        </div>
        <div className="screen-arrow">›</div>
      </button>
    </div>
  );
}