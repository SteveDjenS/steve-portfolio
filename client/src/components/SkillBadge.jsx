export default function SkillBadge({ group }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: "1.05rem" }}>{group.category}</h3>
      <div>
        {group.items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
