export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} SteveDjens — construit avec React &amp; Node.js
      </p>
      <a
        href="https://www.linkedin.com/in/djenonkar-steve-le-helbo-22089a299/"
        target="_blank"
        rel="noreferrer"
        style={styles.linkedin}
      >
        LinkedIn
      </a>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: "1px solid var(--color-border)",
    padding: "24px",
    textAlign: "center",
    color: "var(--color-text-dim)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  linkedin: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.8rem",
    color: "var(--color-green)",
    textDecoration: "none",
  },
};
