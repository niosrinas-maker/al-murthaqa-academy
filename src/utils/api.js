import { CONFIG } from "../config";

/**
 * Sends one registration row to the Google Apps Script Web App.
 *
 * Why "no-cors" + "text/plain"?
 * Apps Script web apps do not answer CORS preflight requests. A simple
 * text/plain POST in no-cors mode is delivered normally; the browser just
 * cannot read the reply (it is "opaque"). The data still lands in the sheet.
 */
export async function saveToSheet(payload) {
  if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.startsWith("PASTE_")) {
    throw new Error("APPS_SCRIPT_URL is not configured in src/config.js");
  }

  return await fetch(CONFIG.APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    keepalive: true,
  });
}
