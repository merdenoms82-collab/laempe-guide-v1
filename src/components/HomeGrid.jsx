const S = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.5,
  strokeLinecap: "round", strokeLinejoin: "round",
};

const HOME_MODULES = [
  {
    key: "basics",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <path d="M12 2v10"/>
        <path d="M6.343 5.657a8 8 0 1 0 11.314 0"/>
      </svg>
    ),
    title: "Machine Operation",
    sub: "Start • Run • Shutdown",
  },
  {
    key: "screens",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="20" y2="18"/>
        <circle cx="9" cy="6" r="2"/>
        <circle cx="15" cy="12" r="2"/>
        <circle cx="9" cy="18" r="2"/>
      </svg>
    ),
    title: "Control Screens",
    sub: "Parameter & status reference",
  },
  {
    key: "mixer",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
        <path d="M8 16H3v5"/>
      </svg>
    ),
    title: "Sand Mixer",
    sub: "Mixer settings & checks",
  },
  {
    key: "loadbox",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.29 7 12 12 20.71 7"/>
        <line x1="12" y1="22" x2="12" y2="12"/>
      </svg>
    ),
    title: "Corebox Setup",
    sub: "Changeover & configuration",
  },
  {
    key: "troubleshooting",
    color: "tile--caution",
    icon: (
      <svg {...S}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Troubleshooting",
    sub: "Symptoms → checks",
  },
  {
    key: "checklists",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: "Shift Checklists",
    sub: "Start & end of shift",
  },
  {
    key: "safety",
    color: "tile--danger",
    icon: (
      <svg {...S}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Emergency & Safety",
    sub: "Critical procedures only",
  },
  {
    key: "feedback",
    color: "tile--blue",
    icon: (
      <svg {...S}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
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
        {HOME_MODULES.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className={`tile ${item.color}`}
            style={{ animationDelay: `${100 + index * 55}ms` }}
            onClick={() => onNavigate(item.key)}
          >
            <div
              className="tile__iconWrap"
              style={{ animationDelay: `${160 + index * 55}ms` }}
            >
              {item.icon}
            </div>
            <div className="tile__title">{item.title}</div>
            <div className="tile__sub">{item.sub}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
