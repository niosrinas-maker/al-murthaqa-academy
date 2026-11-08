import { CONFIG } from "../config";

export function buildWhatsAppMessage({
  form,
  paymentMethod = "upi",
  kind = "public",
  source = "Public Website",
}) {
  const fee = CONFIG.FEE_RUPEES;
  const isUPI = paymentMethod === "upi";

  const paymentStatus = isUPI
    ? "Payment Status: Direct UPI Transfer"
    : "Payment Status: Paid Cash Directly";

  const sourceLine =
    kind.startsWith("team") || source !== "Public Website"
      ? `\n• Registration Mode: ${source || "Ground Team"}`
      : "";

  return `*Al Murthaqa Quran Academy - Registration Confirmation*
----------------------------------------
• Name: ${form.name}
• WhatsApp Number: +91 ${form.phone}
• Gender: ${form.gender}
• Age: ${form.age}
• Place: ${form.place}
• Programme: Quran Tilawah Programme (2 Months)
• Focus: Surah Al-Fatihah & Short Surahs
• Fee: ₹${fee}
• ${paymentStatus}${sourceLine}
----------------------------------------
Please verify and confirm my admission to the programme.`;
}

export function openWhatsApp(message) {
  const phone = (CONFIG.ADMIN_PHONE || "7736844171").replace(/\D/g, "").slice(-10);
  const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  // Same-tab redirect works reliably on mobile browsers without popup blocking
  window.location.href = url;
}
