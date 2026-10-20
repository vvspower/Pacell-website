// Paste this into the Apps Script editor of your Google Sheet
// (Extensions > Apps Script). See README.md in this folder.

const SECRET = "PASTE_THE_SAME_SECRET_AS_GOOGLE_SHEET_SECRET";

// The long ID in the sheet's URL: docs.google.com/spreadsheets/d/<THIS PART>/edit
const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID";

const TABS = {
  Newsletter: ["Email", "Subscribed at"],
  Contact: ["Received at", "Name", "Email", "Subject", "Message"],
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return reply({ ok: false, error: "Unauthorized" });

    const headers = TABS[data.tab];
    if (!headers) return reply({ ok: false, error: "Unknown tab" });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const ss = SpreadsheetApp.openById(SHEET_ID);
      let sheet = ss.getSheetByName(data.tab);
      if (!sheet) sheet = ss.insertSheet(data.tab);
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(headers);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
        sheet.setFrozenRows(1);
      }

      // Newsletter: skip emails that are already on the list.
      if (data.tab === "Newsletter" && sheet.getLastRow() > 1) {
        const emails = sheet
          .getRange(2, 1, sheet.getLastRow() - 1, 1)
          .getValues()
          .flat()
          .map((v) => String(v).toLowerCase());
        if (emails.includes(String(data.values[0]).toLowerCase())) {
          return reply({ ok: true, duplicate: true });
        }
      }

      // Text format stops Sheets from treating "=..." in a message as a formula.
      const row = sheet.getLastRow() + 1;
      const range = sheet.getRange(row, 1, 1, data.values.length);
      range.setNumberFormat("@").setValues([data.values]);
    } finally {
      lock.releaseLock();
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
