import nodemailer from "nodemailer";

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

// Emails the site owner when someone fills in the contact form. Sent through
// the SMTP login of a mailbox on evercrestpublishingcompany.com; replying to
// the email goes straight to the visitor.
export async function sendContactEmail({ name, email, subject, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    throw new Error("Email is not configured.");
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Website Contact Form" <${process.env.CONTACT_FROM_EMAIL || SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
    subject: `New message: ${subject || "Contact form"}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br>
<strong>Email:</strong> ${escapeHtml(email)}<br>
<strong>Subject:</strong> ${escapeHtml(subject)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });
}
