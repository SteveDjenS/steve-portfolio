import { useState } from "react";

const initialForm = { name: "", role: "", quote: "", website: "" };

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/testimonials`
  : "/api/testimonials";

export default function TestimonialForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ maxWidth: 520 }}>
      {/* Honeypot anti-spam : champ caché, un humain ne le remplit jamais */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
        aria-hidden="true"
      />

      <label htmlFor="testimonial-name">Nom</label>
      <input
        id="testimonial-name"
        name="name"
        type="text"
        required
        maxLength={200}
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <label htmlFor="testimonial-role">Relation (optionnel)</label>
      <input
        id="testimonial-role"
        name="role"
        type="text"
        placeholder="ex : client Build Africa Group, recruteur Upwork..."
        maxLength={200}
        value={form.role}
        onChange={handleChange}
        style={inputStyle}
      />

      <label htmlFor="testimonial-quote">Ton avis</label>
      <textarea
        id="testimonial-quote"
        name="quote"
        required
        rows={4}
        maxLength={1000}
        value={form.quote}
        onChange={handleChange}
        style={{ ...inputStyle, resize: "vertical" }}
      />

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Envoyer mon avis"}
      </button>

      {status === "success" && (
        <p style={{ color: "var(--color-green)", marginTop: 12 }}>
          Merci ! Ton avis sera publié après vérification.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "var(--color-danger)", marginTop: 12 }}>{errorMsg}</p>
      )}
    </form>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "6px 0 18px",
  padding: "10px 12px",
  background: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius)",
  color: "var(--color-text)",
  fontFamily: "var(--font-body)",
};
