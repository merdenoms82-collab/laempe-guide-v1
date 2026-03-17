const MIXER_MENU = [
  {
    id: "mixer/overview",
    title: "Mixer Overview",
    subtitle: "Purpose and basic workflow",
  },
  {
    id: "mixer/settings",
    title: "Mixer Settings",
    subtitle: "Adjustable settings reference",
  },
  {
    id: "mixer/checks",
    title: "Mixer Checks",
    subtitle: "Operator checks and verification",
  },
  {
    id: "mixer/cleaning",
    title: "Mixer Cleaning",
    subtitle: "End-of-shift cleaning steps",
  },
];

export default function MixerMenu({ onSelect }) {
  return (
    <div className="menu-list">
      {MIXER_MENU.map((item) => (
        <button
          key={item.id}
          type="button"
          className="menu-card"
          onClick={() => onSelect(item.id)}
        >
          <div className="menu-card-title">{item.title}</div>
          <div className="menu-card-subtitle">{item.subtitle}</div>
        </button>
      ))}
    </div>
  );
}