export default function ChecklistView({ sections = [] }) {
  return (
    <div className="stack">
      {sections.map((section) => (
        <div key={section.label} className="card">
          <div className="sectionLabel">{section.label}</div>

          <div className="stepsWrap">
            {section.items.map((item, index) => (
              <div key={`${section.label}-${index}-${item}`} className="stepRow">
                <div className="stepNum">{index + 1}</div>
                <div className="stepText">{item}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}