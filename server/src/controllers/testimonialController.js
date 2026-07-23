import { sendTestimonialEmail } from "../utils/mailer.js";

export async function postTestimonial(req, res) {
  const { name, role, quote, website } = req.body ?? {};

  // Champ honeypot : invisible pour un humain, souvent rempli par les bots.
  if (website) {
    return res.status(200).json({ ok: true, delivered: false });
  }

  if (!name || !quote) {
    return res.status(400).json({ error: "Nom et avis sont requis." });
  }
  if (quote.length > 1000) {
    return res.status(400).json({ error: "Avis trop long (1000 caractères max)." });
  }
  if (name.length > 200 || (role && role.length > 200)) {
    return res.status(400).json({ error: "Champ trop long." });
  }

  try {
    const result = await sendTestimonialEmail({ name, role, quote });
    return res.status(200).json({ ok: true, delivered: result.delivered });
  } catch (err) {
    console.error("[testimonial] échec d'envoi :", err);
    return res.status(502).json({ error: "Échec de l'envoi. Réessaie plus tard." });
  }
}
