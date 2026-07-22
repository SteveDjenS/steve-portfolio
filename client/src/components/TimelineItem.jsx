export default function TimelineItem({ entry }) {
  const { period, title, place, description } = entry;

  return (
    <div className="card" style={{ borderLeft: "3px solid var(--color-green)" }}>
      <span className="tag">{period}</span>
      <h3 style={{ marginTop: 12 }}>{title}</h3>
      {place ? <p style={{ color: "var(--color-green)", margin: "0 0 8px" }}>{place}</p> : null}
      <p>{description}</p>
    </div>
  );
}
