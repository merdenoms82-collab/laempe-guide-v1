export default function SafetyMenu({ onNavigate }) {
  return (
    <div className="stack">
      <button
        type="button"
        className="card"
        onClick={() => onNavigate("safety/box-changes-and-cleaning")}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Box Changes and Cleaning</h3>
        <p>LOTO reference</p>
      </button>

      <button
        type="button"
        className="card"
        onClick={() => onNavigate("safety/laempe-cleaning-safety")}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Laempe Cleaning Safety</h3>
        <p>Detailed cleaning safety reference</p>
      </button>

      <button
        type="button"
        className="card"
        onClick={() => onNavigate("safety/corebox-loading-safety")}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Corebox Loading Safety</h3>
        <p>Detailed loading safety reference</p>
      </button>

      <button
        type="button"
        className="card"
        onClick={() => onNavigate("safety/corebox-removal-safety")}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Corebox Removal Safety</h3>
        <p>Detailed removal safety reference</p>
      </button>

      <button
        type="button"
        className="card"
        onClick={() => onNavigate("safety/repairs-and-preventive-maintenance")}
        style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
      >
        <h3>Repairs and Preventive Maintenance</h3>
        <p>LOTO reference</p>
      </button>
    </div>
  );
}