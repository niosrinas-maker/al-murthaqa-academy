// ============================================================
//  EDIT THESE VALUES BEFORE GOING LIVE
// ============================================================
export const CONFIG = {
  // Razorpay Key ID (public key). Set in .env as VITE_RAZORPAY_KEY_ID
  RAZORPAY_KEY_ID:
    import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_TxUf1yhPXgoVtV",

  // Course fee in rupees
  FEE_RUPEES: 500,

  // Google Apps Script Web App URL (ends with /exec)
  APPS_SCRIPT_URL:
    import.meta.env.VITE_APPS_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbwMXDVBiOm9P2knIguuPDfV1hjrZmGnxKQ6ETnMe_aBnxF1JOXF9dwSr3d7Vw6f7SOIsQ/exec",

  // Admin WhatsApp number: 10 digits only, WITHOUT +91 (the code adds 91)
  ADMIN_PHONE: import.meta.env.VITE_ADMIN_PHONE || "7736844171",

  // Team portal PIN. MUST match TEAM_PIN inside apps-script/Code.gs
  TEAM_PIN: import.meta.env.VITE_TEAM_PIN || "1234",
};
