import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="section">
      <h1 className="section-title glow">Projets</h1>
      <p className="section-subtitle">
        Une sélection de projets web, mobile et WordPress.
      </p>

      <div className="grid grid-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
