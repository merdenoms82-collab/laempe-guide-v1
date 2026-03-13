import { CORES } from "../data/cores";

export default function CoreReferenceMenu({ onNavigate }) {
  return (
    <div className="screens-list">
      {CORES.map((core) => (
        <button
          key={core.id}
          type="button"
          className="screen-item"
          onClick={() => onNavigate(`loadbox/core-reference/${core.id}`)}
        >
          <div className="screen-icon">📘</div>
          <div className="screen-info">
            <div className="screen-name">{core.title}</div>
            <div className="screen-desc">{core.machineName}</div>
          </div>
          <div className="screen-arrow">›</div>
        </button>
      ))}
    </div>
  );
}