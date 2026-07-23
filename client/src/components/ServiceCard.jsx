export default function ServiceCard({ service }) {
  const { title, description } = service;

  return (
    <article className="card">
      <h3 style={{ fontSize: "1.05rem" }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </article>
  );
}
