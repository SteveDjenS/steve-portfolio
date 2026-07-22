import { skillGroups } from "../data/skills";
import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  return (
    <section className="section">
      <h1 className="section-title glow">Compétences</h1>
      <p className="section-subtitle">Technologies et outils avec lesquels je travaille.</p>

      <div className="grid grid-3">
        {skillGroups.map((group) => (
          <SkillBadge key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}
