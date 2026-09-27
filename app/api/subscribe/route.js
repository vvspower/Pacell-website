import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

// Subscribers land in a CSV at the project root so it can be opened
// directly in Excel. Note: this only persists on a server with a writable
// disk — on a serverless host the file is wiped between deployments.
const DATA_DIR = path.join(process.cwd(), "data");
const CSV_PATH = path.join(DATA_DIR, "subscribers.csv");
const HEADER = "email,subscribed_at\n";

// Wrap in quotes and escape any embedded quotes, so a stray comma can't
// shift the columns in Excel.
function csvCell(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

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
    await mkdir(DATA_DIR, { recursive: true });

    let existing = "";
    try {
      existing = await readFile(CSV_PATH, "utf8");
    } catch {
      // First subscriber — the file doesn't exist yet.
    }

    if (!existing) {
      await appendFile(CSV_PATH, HEADER, "utf8");
    } else if (
      existing
        .split("\n")
        .some((line) => line.toLowerCase().startsWith(csvCell(email.toLowerCase())))
    ) {
      // Already subscribed; treat it as success rather than an error.
      return Response.json({ ok: true, alreadySubscribed: true });
    }

    await appendFile(
      CSV_PATH,
      `${csvCell(email)},${csvCell(new Date().toISOString())}\n`,
      "utf8",
    );

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 },
    );
  }
}
