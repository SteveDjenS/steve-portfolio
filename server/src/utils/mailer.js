import nodemailer from "nodemailer";

const smtpConfigured = Boolean(
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
);

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

export async function sendContactEmail({ name, email, message }) {
  if (!transporter) {
    console.log("[contact] SMTP non configuré — message reçu :");
    console.log({ name, email, message, receivedAt: new Date().toISOString() });
    return { delivered: false, reason: "smtp_not_configured" };
  }

  await transporter.sendMail({
    from: `"Portfolio - ${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.CONTACT_TO_EMAIL,
    subject: `Nouveau message de ${name} via le portfolio`,
    text: message,
    html: `<p><strong>De :</strong> ${name} (${email})</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  return { delivered: true };
}
