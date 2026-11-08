// ============================================================
//  EDIT THESE VALUES BEFORE GOING LIVE
// ============================================================
export const CONFIG = {
  // Razorpay -> Dashboard -> Settings -> API Keys (use the TEST key while testing)
  RAZORPAY_KEY_ID: "rzp_test_TxUf1yhPXgoVtV",

  // Course fee in rupees
  FEE_RUPEES: 500,

  // Google Apps Script Web App URL (ends with /exec) - see README for how to get it
  APPS_SCRIPT_URL:
    "https://script.google.com/macros/s/AKfycbwMXDVBiOm9P2knIguuPDfV1hjrZmGnxKQ6ETnMe_aBnxF1JOXF9dwSr3d7Vw6f7SOIsQ/exec",

  // Admin WhatsApp number: 10 digits only, WITHOUT +91 (the code adds 91)
  ADMIN_PHONE: "7736844171",

  // Team portal PIN. MUST match TEAM_PIN inside apps-script/Code.gs
  TEAM_PIN: "1234",
};
