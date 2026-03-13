export default function DetailView({ title, subtitle, onBack, children }) {
  return (
    <section className="view view--detail">
      <div className="detailTop">
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          style={{
            width: "46px",
            height: "46px",
            minWidth: "46px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            color: "#F1F5F9",
            fontSize: "22px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          ←
        </button>

        <div className="detailMeta">
          <div className="detailTitle">{title}</div>
          <div className="detailSub">{subtitle}</div>
        </div>
      </div>

      <div>{children}</div>
    </section>
  );
}