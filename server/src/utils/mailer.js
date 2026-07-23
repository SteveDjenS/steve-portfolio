const resendConfigured = Boolean(process.env.RESEND_API_KEY);

async function sendEmail({ subject, text, html, replyTo }) {
  if (!resendConfigured) {
    console.log(`[mail] RESEND_API_KEY non configuré — email non envoyé (${subject})`);
    console.log({ subject, text, receivedAt: new Date().toISOString() });
    return { delivered: false, reason: "resend_not_configured" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Resend API error ${res.status}: ${errBody}`);
  }

  return { delivered: true };
}

export async function sendContactEmail({ name, email, message }) {
  return sendEmail({
    subject: `Nouveau message de ${name} via le portfolio`,
    text: message,
    html: `<p><strong>De :</strong> ${name} (${email})</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    replyTo: email,
  });
}

export async function sendTestimonialEmail({ name, role, quote }) {
  return sendEmail({
    subject: `Nouvel avis proposé par ${name} sur le portfolio`,
    text: `"${quote}"\n\n— ${name}${role ? `, ${role}` : ""}\n\nCet avis n'est pas encore publié. Ajoute-le dans client/src/data/testimonials.js si tu valides.`,
    html: `<p><strong>Nouvel avis à valider (non publié) :</strong></p><blockquote>${quote.replace(/\n/g, "<br/>")}</blockquote><p>— ${name}${role ? `, ${role}` : ""}</p>`,
  });
}
