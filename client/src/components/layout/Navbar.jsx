import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "accueil" },
  { to: "/a-propos", label: "a-propos" },
  { to: "/competences", label: "competences" },
  { to: "/projets", label: "projets" },
  { to: "/parcours", label: "parcours" },
  { to: "/experiences", label: "experiences" },
  { to: "/certifications", label: "certifications" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.logo}>
          steve@portfolio<span style={{ color: "var(--color-text)" }}>:~$</span>
          <span style={styles.cursor}>_</span>
        </NavLink>
        <ul style={styles.list}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  ...styles.link,
                  ...(isActive ? styles.linkActive : {}),
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="/CV_Steve_Le_Helbo_Djenonkar.pdf" download style={styles.cvLink}>
              cv ↓
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(5, 7, 10, 0.85)",
    backdropFilter: "blur(6px)",
    borderBottom: "1px solid var(--color-border)",
  },
  nav: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    height: "var(--nav-height)",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },
  logo: {
    fontFamily: "var(--font-mono)",
    color: "var(--color-green)",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "1rem",
  },
  cursor: {
    animation: "blink 1s steps(1) infinite",
    marginLeft: 2,
  },
  list: {
    listStyle: "none",
    display: "flex",
    gap: 20,
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },
  link: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    color: "var(--color-text-dim)",
    textDecoration: "none",
  },
  linkActive: {
    color: "var(--color-green)",
  },
  cvLink: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    color: "var(--color-green)",
    border: "1px solid var(--color-green-dim)",
    borderRadius: "999px",
    padding: "4px 12px",
    textDecoration: "none",
  },
};
