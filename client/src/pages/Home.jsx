import { Link } from "react-router-dom";
import MatrixRain from "../components/MatrixRain";

export default function Home() {
  return (
    <section style={styles.hero}>
      <MatrixRain className="matrix-canvas" />
      <div style={styles.overlay} />
      <div style={styles.content}>
        <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-green)" }}>
          {"> "}whoami
        </p>
        <h1 className="glow" style={styles.title}>
          Steve Le-Helbo Djenonkar
        </h1>
        <p style={styles.subtitle}>
          Développeur full-stack web &amp; mobile, WordPress — étudiant en 3e année de
          mathématiques &amp; physique.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link to="/projets" className="btn">
            Voir mes projets
          </Link>
          <Link to="/contact" className="btn" style={{ borderColor: "var(--color-text-dim)", color: "var(--color-text)" }}>
            Me contacter
          </Link>
          <a
            href="/CV_Steve_Le_Helbo_Djenonkar.pdf"
            download
            className="btn"
            style={{ borderColor: "var(--color-text-dim)", color: "var(--color-text)" }}
          >
            Télécharger mon CV
          </a>
          <a
            href="https://www.linkedin.com/in/djenonkar-steve-le-helbo-22089a299/"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{ borderColor: "var(--color-text-dim)", color: "var(--color-text)" }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "calc(100vh - var(--nav-height))",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(5,7,10,0.3) 0%, rgba(5,7,10,0.85) 80%)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    padding: "24px",
  },
  title: {
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    margin: "8px 0 16px",
  },
  subtitle: {
    color: "var(--color-text)",
    maxWidth: 560,
    fontSize: "1.1rem",
    marginBottom: 32,
  },
};
