import { addRow } from "../../lib/sheet";

export async function POST(request) {
  let email;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    // The sheet script skips emails that are already listed.
    const result = await addRow("Newsletter", [email, new Date().toISOString()]);
    return Response.json({ ok: true, alreadySubscribed: Boolean(result.duplicate) });
  } catch (err) {
    console.error("[subscribe]", err.message);
    return Response.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 },
    );
  }
}
