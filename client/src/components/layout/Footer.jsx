export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} SteveDjens — construit avec React &amp; Node.js
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: "1px solid var(--color-border)",
    padding: "24px",
    textAlign: "center",
    color: "var(--color-text-dim)",
  },
};
