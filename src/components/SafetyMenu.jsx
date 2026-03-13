const SAFETY_ITEMS = [
  {
    key: "safety/box-changes-and-cleaning",
    icon: "🔒",
    title: "Box Changes and Cleaning",
    sub: "LOTO reference",
  },
  {
    key: "safety/repairs-and-preventive-maintenance",
    icon: "🛠️",
    title: "Repairs and Preventive Maintenance",
    sub: "LOTO reference",
  },
];

export default function SafetyMenu({ onNavigate }) {
  return (
    <div className="screens-list">
      {SAFETY_ITEMS.map((item) => (
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