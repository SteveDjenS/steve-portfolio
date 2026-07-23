import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="section">
      <h1 className="section-title glow">Services</h1>
      <p className="section-subtitle">
        Les prestations que je peux prendre en charge, seul ou en équipe.
      </p>

      <div className="grid grid-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
