import { addRow } from "../../lib/sheet";
import { sendContactEmail } from "../../lib/mail";

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request) {
  let name, email, subject, message;

  try {
    const body = await request.json();
    name = clean(body?.name, 200);
    email = clean(body?.email, 200);
    subject = clean(body?.subject, 200);
    message = clean(body?.message, 5000);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 400 },
    );
  }

  // Save to the sheet and email the owner. The visitor sees an error only if
  // both fail, so a message is never lost silently.
  const [saved, emailed] = await Promise.allSettled([
    addRow("Contact", [new Date().toISOString(), name, email, subject, message]),
    sendContactEmail({ name, email, subject, message }),
  ]);

  if (saved.status === "rejected") console.error("[contact:sheet]", saved.reason?.message);
  if (emailed.status === "rejected") console.error("[contact:email]", emailed.reason?.message);

  if (saved.status === "rejected" && emailed.status === "rejected") {
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
