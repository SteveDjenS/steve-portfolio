export default function ProjectCard({ project }) {
  const { title, description, stack, image, link } = project;

  return (
    <article className="card" style={styles.card}>
      {image ? (
        <a
          href={link || undefined}
          target={link ? "_blank" : undefined}
          rel={link ? "noreferrer" : undefined}
          className="cert-image-link"
          style={styles.imageLink}
        >
          <img
            src={image}
            alt={`Aperçu du projet : ${title}`}
            className="cert-image"
            style={styles.image}
            loading="lazy"
          />
          {link ? (
            <span className="cert-overlay" style={styles.overlay}>
              Voir le site ↗
            </span>
          ) : null}
        </a>
      ) : null}
      <div style={styles.body}>
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
      </div>
    </article>
  );
}

const styles = {
  card: {
    padding: 0,
    overflow: "hidden",
  },
  imageLink: {
    position: "relative",
    display: "block",
    lineHeight: 0,
  },
  image: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    objectPosition: "top",
    display: "block",
    borderBottom: "1px solid var(--color-border)",
    transition: "transform 0.3s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    color: "var(--color-green)",
    background: "rgba(5, 7, 10, 0.75)",
    opacity: 0,
    transition: "opacity 0.2s ease",
  },
  body: {
    padding: "24px",
  },
};
