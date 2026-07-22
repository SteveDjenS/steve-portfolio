import { education } from "../data/education";
import TimelineItem from "../components/TimelineItem";

export default function Education() {
  return (
    <section className="section">
      <h1 className="section-title glow">Parcours académique</h1>
      <p className="section-subtitle">Mon cursus en mathématiques et physique.</p>

      <div className="grid" style={{ maxWidth: 720 }}>
        {education.map((entry) => (
          <TimelineItem key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}
