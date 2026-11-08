/**
 * Al Murthaqa Quran Academy - Registration backend
 * Paste this whole file into Extensions > Apps Script of your Google Sheet.
 */

// ---------- SETTINGS (edit these) ----------
const SHEET_NAME = "Registrations";
const TEAM_PIN = "1234"; // MUST match TEAM_PIN in src/config.js
// -------------------------------------------

const HEADERS = [
  "Timestamp",
  "Student ID",
  "Full Name",
  "WhatsApp",
  "Gender",
  "Age",
  "Place",
  "Payment Mode",
  "Status",
  "Razorpay Payment ID",
  "Registered Via",
  "Amount (INR)",
];

/** Receives registrations from the website (POST). */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000); // avoid two simultaneous writes clashing

    const data = JSON.parse(e.postData.contents);

    // 1) Basic validation
    if (!data.name || !data.phone || !data.gender || !data.age || !data.place) {
      return json({ ok: false, error: "Missing fields" });
    }

    // 2) Team submissions must carry the right PIN (checked on the server too)
    if (data.source === "Ground Team" && String(data.pin) !== String(TEAM_PIN)) {
      return json({ ok: false, error: "Invalid team PIN" });
    }

    const sheet = getSheet();

    // 3) Ignore duplicate submissions of the same Razorpay payment
    if (data.paymentId) {
      const ids = sheet.getRange(2, 10, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
      if (ids.indexOf(data.paymentId) !== -1) {
        return json({ ok: true, duplicate: true });
      }
    }

    // 4) Append the row
    const studentId = "AMQ-" + String(sheet.getLastRow()).padStart(4, "0"); // row 2 -> AMQ-0001
    sheet.appendRow([
      new Date(),
      studentId,
      safe(data.name),
      safe("'" + data.phone), // leading ' keeps it as text
      safe(data.gender),
      Number(data.age),
      safe(data.place),
      safe(data.paymentMode),
      safe(data.status),
      safe(data.paymentId),
      safe(data.source),
      Number(data.amount) || 500,
    ]);

    return json({ ok: true, studentId: studentId });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Opening the Web App URL in a browser shows this - handy for testing. */
function doGet() {
  return json({ ok: true, message: "Al Murthaqa registration endpoint is running." });
}

// ---------- helpers ----------
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet
      .getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#0B3B2E")
      .setFontColor("#E3C77E");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** Stops spreadsheet formula injection (cells starting with = + - @). */
function safe(value) {
  const s = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run this once from the editor to authorise the script and create the header row. */
function setup() {
  getSheet();
}
