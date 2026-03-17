const MIXER_ITEMS = [
  {
    key: "mixer/overview",
    icon: "🌀",
    title: "Mixer Overview",
    sub: "Purpose and basic workflow",
  },
  {
    key: "mixer/settings",
    icon: "⚙️",
    title: "Mixer Settings",
    sub: "Adjustable settings reference",
  },
  {
    key: "mixer/checks",
    icon: "✅",
    title: "Mixer Checks",
    sub: "Operator checks and verification",
  },
  {
    key: "mixer/cleaning",
    icon: "🧽",
    title: "Mixer Cleaning",
    sub: "End-of-shift cleaning steps",
  },
];

export default function MixerMenu({ onNavigate }) {
  return (
    <div className="screens-list">
      {MIXER_ITEMS.map((item) => (
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