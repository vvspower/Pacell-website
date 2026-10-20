// Sends a row to the Google Sheet through the Apps Script web app described
// in google-sheets/README.md. Rows land on the named tab ("Newsletter" or
// "Contact") of a sheet that lives in Google Drive.
export async function addRow(tab, values) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEET_SECRET;

  if (!url || !secret) {
    throw new Error("Google Sheet is not configured.");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ secret, tab, values }),
    cache: "no-store",
  });

  const data = await res.json();
  if (!data.ok) {
    throw new Error(data.error || "Google Sheet rejected the row.");
  }
  return data;
}
