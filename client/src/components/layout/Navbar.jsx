import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "accueil" },
  { to: "/a-propos", label: "a-propos" },
  { to: "/competences", label: "competences" },
  { to: "/services", label: "services" },
  { to: "/projets", label: "projets" },
  { to: "/parcours", label: "parcours" },
  { to: "/experiences", label: "experiences" },
  { to: "/certifications", label: "certifications" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.logo} onClick={close}>
          steve@portfolio<span style={{ color: "var(--color-text)" }}>:~$</span>
          <span style={styles.cursor}>_</span>
        </NavLink>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={`navbar-links${open ? " navbar-links-open" : ""}`} style={styles.list}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={close}
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
            <a
              href={`${import.meta.env.BASE_URL}CV_Steve_Le_Helbo_Djenonkar.pdf`}
              download
              style={styles.cvLink}
              onClick={close}
            >
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
    zIndex: 20,
    background: "rgba(5, 7, 10, 0.85)",
    backdropFilter: "blur(6px)",
    borderBottom: "1px solid var(--color-border)",
  },
  nav: {
    position: "relative",
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    height: "var(--nav-height)",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    gap: 14,
    margin: 0,
    padding: 0,
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
