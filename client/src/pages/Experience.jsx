import { experience } from "../data/experience";
import TimelineItem from "../components/TimelineItem";

export default function Experience() {
  return (
    <section className="section">
      <h1 className="section-title glow">Expériences</h1>
      <p className="section-subtitle">Stages, missions freelance et projets professionnels.</p>

      <div className="grid" style={{ maxWidth: 720 }}>
        {experience.map((entry) => (
          <TimelineItem key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}
