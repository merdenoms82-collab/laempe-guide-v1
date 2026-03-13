export default function AutoRecoveryMenu({ onNavigate }) {
  const items = [
    {
      key: "loadbox/auto-recovery/table-lifted-auto-stopped",
      icon: "⬆️",
      title: "Table lifted but auto stopped",
      sub: "Auto stopped before gas carriage position completed",
    },
    {
      key: "loadbox/auto-recovery/vacuum-wont-make",
      icon: "🌀",
      title: "Vacuum won't make",
      sub: "Recovery steps when cope eject / vacuum does not make",
    },
    {
      key: "loadbox/auto-recovery/carriage-wont-move",
      icon: "↔️",
      title: "Carriage won't move",
      sub: "Placeholder for now",
    },
    {
      key: "loadbox/auto-recovery/pneu-error-during-load",
      icon: "⚠️",
      title: "PNEU error during load",
      sub: "Placeholder for now",
    },
    {
      key: "loadbox/auto-recovery/clamp-wont-turn-green",
      icon: "🔒",
      title: "Clamp won't turn green",
      sub: "Placeholder for now",
    },
  ];

  return (
    <div className="screens-list">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className="screen-item"
          onClick={() => onNavigate(item.key)}
        >
          <div className="screen-icon">{item.icon}</div>
          <div className="screen-info">
            <div className="screen-name">{item.title}</div>
            <div className="screen-desc">{item.sub}</div>
          </div>
          <div className="screen-arrow">›</div>
        </button>
      ))}
    </div>
  );
}