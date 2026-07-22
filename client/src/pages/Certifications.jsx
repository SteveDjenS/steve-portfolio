import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

export default function Certifications() {
  return (
    <section className="section">
      <h1 className="section-title glow">Certifications</h1>
      <p className="section-subtitle">
        {certifications.length} certifications obtenues — clique sur une carte pour voir le
        PDF original.
      </p>

      <div className="grid grid-3">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </section>
  );
}
