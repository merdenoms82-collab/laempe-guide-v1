export default function ParameterGrid({ items, onOpenItem }) {
  return (
    <div className="paramGrid">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className="paramItem"
          onClick={() => onOpenItem(item)}
        >
          <div className="paramItem__name">{item.name}</div>
          <div className="paramItem__desc">{item.what || item.note || ""}</div>
        </button>
      ))}
    </div>
  );
}