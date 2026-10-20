import { addRow } from "../../lib/sheet";

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

  try {
    await addRow("Contact", [
      new Date().toISOString(),
      name,
      email,
      subject,
      message,
    ]);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err.message);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
