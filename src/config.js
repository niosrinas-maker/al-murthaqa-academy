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
    "https://script.google.com/macros/s/AKfycbzJIe8Go8Dgdnpc-BMcHcwdgzW4thLSPReXusVipDAw6w9ntFVvJViR7B2QR1-lCjVwLw/exec",

  // Admin WhatsApp number: 10 digits only, WITHOUT +91 (the code adds 91)
  ADMIN_PHONE: "7736844171",

  // Team portal PIN. MUST match TEAM_PIN inside apps-script/Code.gs
  TEAM_PIN: "1234",
};
