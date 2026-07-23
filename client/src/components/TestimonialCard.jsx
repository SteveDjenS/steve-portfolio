export default function TestimonialCard({ testimonial }) {
  const { quote, name, role } = testimonial;

  return (
    <article className="card" style={styles.card}>
      <p style={styles.quote}>&ldquo;{quote}&rdquo;</p>
      <p style={styles.name}>{name}</p>
      <p style={styles.role}>{role}</p>
    </article>
  );
}

const styles = {
  card: {
    borderLeft: "3px solid var(--color-green)",
  },
  quote: {
    color: "var(--color-text)",
    fontStyle: "italic",
    marginBottom: 16,
  },
  name: {
    fontFamily: "var(--font-mono)",
    color: "var(--color-green)",
    margin: 0,
    fontSize: "0.9rem",
  },
  role: {
    fontFamily: "var(--font-mono)",
    color: "var(--color-text-dim)",
    fontSize: "0.8rem",
    margin: 0,
  },
};
