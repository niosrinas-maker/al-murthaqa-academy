import { CONFIG } from "../config";

let scriptPromise = null;

function loadRazorpayScript() {
  if (window.Razorpay) return Promise.resolve(true);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => {
      scriptPromise = null;
      resolve(false);
    };
    document.body.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Opens Razorpay Checkout.
 * Resolves  -> { razorpay_payment_id, ... } on success
 * Rejects   -> Error with message "DISMISSED" or the failure description
 */
export async function payWithRazorpay({ name, phone }) {
  if (!CONFIG.RAZORPAY_KEY_ID || CONFIG.RAZORPAY_KEY_ID.includes("YOUR_KEY_ID_HERE")) {
    throw new Error(
      "Razorpay Key ID is not configured. Please add your VITE_RAZORPAY_KEY_ID into the .env file or src/config.js."
    );
  }

  const loaded = await loadRazorpayScript();
  if (!loaded) throw new Error("Could not load Razorpay. Check your internet connection and try again.");

  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: CONFIG.RAZORPAY_KEY_ID,
      amount: CONFIG.FEE_RUPEES * 100, // paise
      currency: "INR",
      name: "Al Murthaqa Quran Academy",
      description: "Quran Tilawah Programme",
      prefill: { name, contact: phone },
      notes: { programme: "Quran Tilawah Programme" },
      theme: { color: "#0B3B2E" },
      handler: (response) => resolve(response),
      modal: { ondismiss: () => reject(new Error("DISMISSED")) },
    });

    rzp.on("payment.failed", (resp) => {
      reject(new Error(resp?.error?.description || "Payment failed. Please try again."));
    });

    rzp.open();
  });
}
