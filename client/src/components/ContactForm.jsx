import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
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
      const res = await fetch("/api/contact", {
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
      <label htmlFor="name">Nom</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        value={form.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        value={form.message}
        onChange={handleChange}
        style={{ ...inputStyle, resize: "vertical" }}
      />

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p style={{ color: "var(--color-green)", marginTop: 12 }}>
          Message envoyé, merci ! Je te réponds au plus vite.
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
