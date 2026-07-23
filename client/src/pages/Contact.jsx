import ContactForm from "../components/ContactForm";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function Contact() {
  return (
    <section className="section">
      <h1 className="section-title glow">Contact</h1>
      <p className="section-subtitle">
        Une question, une opportunité, un projet ? Écris-moi.
      </p>

      <ContactForm />

      {testimonials.length > 0 ? (
        <div style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: 24 }}>Ce qu'on dit de moi</h2>
          <div className="grid grid-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
