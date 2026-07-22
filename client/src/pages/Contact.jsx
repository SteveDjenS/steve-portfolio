import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="section">
      <h1 className="section-title glow">Contact</h1>
      <p className="section-subtitle">
        Une question, une opportunité, un projet ? Écris-moi.
      </p>

      <ContactForm />
    </section>
  );
}
