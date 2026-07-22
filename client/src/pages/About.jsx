export default function About() {
  return (
    <section className="section">
      <h1 className="section-title glow">À propos</h1>
      <p className="section-subtitle">
        Qui je suis, et ce qui m'anime entre code et sciences.
      </p>

      <div className="card" style={{ maxWidth: 720 }}>
        <p>
          Je m'appelle Steve. Je suis développeur full-stack web &amp; mobile, avec une
          expérience solide sur WordPress (thèmes et plugins sur mesure pour des clients).
        </p>
        <p>
          En parallèle, je suis étudiant en 3e année de licence mathématiques &amp;
          physique — une double casquette qui m'apporte une rigueur d'analyse et une
          approche méthodique que j'applique directement à la façon dont je conçois et
          construis des applications.
        </p>
        <p>
          J'aime particulièrement les projets qui mêlent les deux mondes : visualisation
          de données, simulations scientifiques interactives, ou simplement du code propre
          et bien pensé.
        </p>
      </div>
    </section>
  );
}
