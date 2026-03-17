export default function CoreboxMenu({ onNavigate }) {
  const items = [
    {
      key: "loadbox/core-reference",
      icon: "📘",
      title: "Core Reference",
      sub: "Weights, stacking, problems, and floor settings",
    },
    {
      key: "loadbox/parameter-guide",
      icon: "🧠",
      title: "Parameter Guide",
      sub: "What machine and gassing settings actually do",
    },
    {
      key: "loadbox/load-unload/automatic",
      icon: "🤖",
      title: "Auto Load",
      sub: "Standard automatic loading steps",
    },
    {
      key: "loadbox/auto-recovery",
      icon: "🛠️",
      title: "Auto Load Recovery (Manual)",
      sub: "Pick the machine state and recover from there",
    },
    {
      key: "loadbox/common-issues",
      icon: "🧩",
      title: "Common Corebox Issues",
      sub: "General reference",
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