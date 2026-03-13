const HOME_MODULES = [
  {
    key: "basics",
    color: "tile--blue",
    icon: "⚙️",
    title: "Machine Operation",
    sub: "Start • Run • Shutdown",
  },
  {
    key: "screens",
    color: "tile--violet",
    icon: "🖥️",
    title: "Control Screens",
    sub: "Parameter & status reference",
  },
  {
    key: "mixer",
    color: "tile--teal",
    icon: "🌀",
    title: "Sand Mixer",
    sub: "Mixer settings & checks",
  },
  {
    key: "loadbox",
    color: "tile--amber",
    icon: "🧩",
    title: "Corebox Setup",
    sub: "Changeover & configuration",
  },
  {
    key: "troubleshooting",
    color: "tile--orange",
    icon: "🧰",
    title: "Troubleshooting",
    sub: "Symptoms → checks",
  },
  {
    key: "checklists",
    color: "tile--green",
    icon: "📋",
    title: "Shift Checklists",
    sub: "Start & end of shift",
  },
  {
    key: "safety",
    color: "tile--red",
    icon: "⚠️",
    title: "Emergency & Safety",
    sub: "Critical procedures only",
  },
  {
    key: "feedback",
    color: "tile--blue",
    icon: "📝",
    title: "Operator Feedback",
    sub: "Submit improvement input",
  },
];

export default function HomeGrid({ onNavigate }) {
  return (
    <section className="view view--home">
      <div className="hero">
        <div className="hero__left">
          <div className="hero__tag">REFERENCE TOOL</div>
          <div className="hero__title">Operational Reference Modules</div>
          <div className="hero__sub">
            Structured guidance for operators and trainers.
          </div>
        </div>

        <div className="hero__right">
          <div className="heroPill">Offline Ready</div>
          <div className="heroPill">No Login</div>
        </div>
      </div>

      <div className="tiles2">
        {HOME_MODULES.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`tile ${item.color}`}
            onClick={() => onNavigate(item.key)}
          >
            <div className="tile__icon">{item.icon}</div>
            <div className="tile__title">{item.title}</div>
            <div className="tile__sub">{item.sub}</div>
          </button>
        ))}
      </div>
    </section>
  );
}