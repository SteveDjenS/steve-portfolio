export default function ProjectCard({ project }) {
  const { title, description, stack, link } = project;

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          Voir le projet →
        </a>
      ) : null}
    </article>
  );
}
