export default function CertificationCard({ certification }) {
  const { title, issuer, date, duration, image, pdf } = certification;

  return (
    <article className="card" style={styles.card}>
      <a href={pdf} target="_blank" rel="noreferrer" className="cert-image-link" style={styles.imageLink}>
        <img
          src={image}
          alt={`Certificat : ${title}`}
          className="cert-image"
          style={styles.image}
          loading="lazy"
        />
        <span className="cert-overlay" style={styles.overlay}>
          Voir le PDF ↗
        </span>
      </a>
      <div style={styles.body}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.issuer}>{issuer}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span className="tag">{date}</span>
          {duration ? <span className="tag">{duration}</span> : null}
        </div>
      </div>
    </article>
  );
}

const styles = {
  card: {
    padding: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  imageLink: {
    position: "relative",
    display: "block",
    lineHeight: 0,
  },
  image: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
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
    padding: "18px 20px 20px",
  },
  title: {
    fontSize: "1rem",
    marginBottom: 4,
  },
  issuer: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.8rem",
    color: "var(--color-green)",
    marginBottom: 12,
  },
};
