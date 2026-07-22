import { sendContactEmail } from "../utils/mailer.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function postContact(req, res) {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
  }
  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Adresse email invalide." });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message trop long." });
  }

  try {
    const result = await sendContactEmail({ name, email, message });
    return res.status(200).json({ ok: true, delivered: result.delivered });
  } catch (err) {
    console.error("[contact] échec d'envoi :", err);
    return res.status(502).json({ error: "Échec de l'envoi du message. Réessaie plus tard." });
  }
}
