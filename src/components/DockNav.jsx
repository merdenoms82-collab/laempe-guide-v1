import useHashRoute from "../features/navigation/useHashRoute";

export default function DockNav({ onNavigate }) {
  const { route } = useHashRoute();

  const activeKey =
    route === "home"
      ? "home"
      : route.startsWith("screens")
      ? "screens"
      : route.startsWith("mixer")
      ? "mixer"
      : route.startsWith("troubleshooting")
      ? "fix"
      : "";

  return (
    <nav className="dock" aria-label="Primary">
      <button
        type="button"
        className={`dockBtn ${activeKey === "home" ? "is-active" : ""}`}
        onClick={() => onNavigate("home")}
      >
        <div className="dockBtn__icon">🏠</div>
        <div className="dockBtn__label">Home</div>
      </button>

      <button
        type="button"
        className={`dockBtn ${activeKey === "screens" ? "is-active" : ""}`}
        onClick={() => onNavigate("screens")}
      >
        <div className="dockBtn__icon">🖥️</div>
        <div className="dockBtn__label">Screens</div>
      </button>

      <button
        type="button"
        className={`dockBtn ${activeKey === "mixer" ? "is-active" : ""}`}
        onClick={() => onNavigate("mixer")}
      >
        <div className="dockBtn__icon">🌀</div>
        <div className="dockBtn__label">Mixer</div>
      </button>

      <button
        type="button"
        className={`dockBtn ${activeKey === "fix" ? "is-active" : ""}`}
        onClick={() => onNavigate("troubleshooting")}
      >
        <div className="dockBtn__icon">🧰</div>
        <div className="dockBtn__label">Fix</div>
      </button>
    </nav>
  );
}