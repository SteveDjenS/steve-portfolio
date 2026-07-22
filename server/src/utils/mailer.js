const resendConfigured = Boolean(process.env.RESEND_API_KEY);

export async function sendContactEmail({ name, email, message }) {
  if (!resendConfigured) {
    console.log("[contact] RESEND_API_KEY non configuré — message reçu :");
    console.log({ name, email, message, receivedAt: new Date().toISOString() });
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
      reply_to: email,
      subject: `Nouveau message de ${name} via le portfolio`,
      text: message,
      html: `<p><strong>De :</strong> ${name} (${email})</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Resend API error ${res.status}: ${errBody}`);
  }

  return { delivered: true };
}
