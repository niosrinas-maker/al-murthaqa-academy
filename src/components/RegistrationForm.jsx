import { useState } from "react";
import { CONFIG } from "../config";
import { saveToSheet } from "../utils/api";
import { buildWhatsAppMessage, openWhatsApp } from "../utils/whatsapp";
import { Smartphone, Banknote, ShieldCheck, CheckCircle2 } from "lucide-react";

const EMPTY = { name: "", phone: "", gender: "", age: "", place: "" };

const inputCls =
  "w-full rounded-xl border border-emerald-900/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-all focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-emerald-900">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-600 font-medium">{error}</span>}
    </label>
  );
}

/**
 * RegistrationForm
 * Two direct payment options (No Razorpay gateway):
 * 1. "Direct UPI / GPay"
 * 2. "Pay Cash Directly" (നേരിട്ട് പണം നൽകുക)
 */
export default function RegistrationForm({ mode = "public", pin = "" }) {
  const isTeam = mode === "team";
  const [form, setForm] = useState(EMPTY);
  const [paymentMethod, setPaymentMethod] = useState("upi"); // "upi" | "cash"
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null); // { type: "error" | "info", text }

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  function validate() {
    const er = {};
    if (form.name.trim().length < 3) er.name = "Enter the full name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      er.phone = "Enter a valid 10-digit WhatsApp number (without +91).";
    if (!form.gender) er.gender = "Select a gender.";
    const age = Number(form.age);
    if (!age || age < 5 || age > 100) er.age = "Enter a valid age (5-100).";
    if (form.place.trim().length < 2) er.place = "Enter the place.";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setNotice(null);
    if (!validate()) return;

    const clean = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      gender: form.gender,
      age: form.age,
      place: form.place.trim(),
    };

    const isUPI = paymentMethod === "upi";
    setBusy(true);

    try {
      // 1) Prepare sheet payload (Bypasses payment gateway directly)
      const kind = isUPI
        ? isTeam ? "team-upi" : "public-upi"
        : isTeam ? "team-cash" : "public-cash";

      const payload = {
        ...clean,
        paymentMode: isUPI ? "Direct UPI / GPay" : "Pay Cash Directly",
        status: isUPI ? "Direct UPI Transfer" : "Paid Cash Directly",
        paymentId: isUPI ? "UPI_7736844171" : "CASH_DIRECT",
        source: isTeam ? "Ground Team" : "Public Website",
        pin: isTeam ? pin : "",
        amount: CONFIG.FEE_RUPEES,
      };

      // 2) Save to Google Sheet
      try {
        await saveToSheet(payload);
      } catch (saveErr) {
        // Keep local backup in browser so registration is never lost
        const backup = JSON.parse(localStorage.getItem("amqa_unsaved") || "[]");
        backup.push({ ...payload, at: new Date().toISOString() });
        localStorage.setItem("amqa_unsaved", JSON.stringify(backup));
        console.error("Sheet save failed:", saveErr);
      }

      // 3) Open WhatsApp with confirmation
      setNotice({
        type: "info",
        text: "Registration submitted successfully! Opening WhatsApp…",
      });

      const whatsappMsg = buildWhatsAppMessage({
        form: clean,
        paymentMethod,
        kind,
        source: isTeam ? "Ground Team" : "Public Website",
      });

      openWhatsApp(whatsappMsg);
    } catch (err) {
      setNotice({ type: "error", text: err.message || "An unexpected error occurred." });
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Full name / വിദ്യാർത്ഥിയുടെ പേര്" error={errors.name}>
        <input
          className={inputCls}
          value={form.name}
          onChange={set("name")}
          placeholder="e.g. Muhammed Ali"
          autoComplete="name"
        />
      </Field>

      <Field label="WhatsApp number / വാട്സ്ആപ്പ് നമ്പർ" error={errors.phone}>
        <div className="flex">
          <span className="flex items-center rounded-l-xl border border-r-0 border-emerald-900/20 bg-emerald-50 px-3.5 text-sm font-semibold text-emerald-900">
            +91
          </span>
          <input
            className={`${inputCls} rounded-l-none`}
            value={form.phone}
            onChange={set("phone")}
            placeholder="10-digit mobile number"
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel-national"
          />
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Gender / ലിംഗം" error={errors.gender}>
          <select className={inputCls} value={form.gender} onChange={set("gender")}>
            <option value="">Select Gender</option>
            <option value="Male">Male (ആൺ ബാച്ച്)</option>
            <option value="Female">Female (പെൺ ബാച്ച്)</option>
          </select>
        </Field>
        <Field label="Age / പ്രായം" error={errors.age}>
          <input
            className={inputCls}
            value={form.age}
            onChange={set("age")}
            placeholder="Age in years"
            inputMode="numeric"
            maxLength={3}
          />
        </Field>
      </div>

      <Field label="Place / സ്ഥലം" error={errors.place}>
        <input
          className={inputCls}
          value={form.place}
          onChange={set("place")}
          placeholder="Town, City, or Village"
          autoComplete="address-level2"
        />
      </Field>

      {/* Exactly TWO Payment Options */}
      <fieldset className="pt-2">
        <legend className="mb-2 block text-sm font-semibold text-emerald-900">
          Payment Method / ഫീസ് അടക്കുന്ന രീതി
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Option 1: Direct UPI / GPay */}
          <label
            className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border-2 p-4 transition-all duration-200 ${
              paymentMethod === "upi"
                ? "border-gold-600 bg-gold-300/15 shadow-md ring-1 ring-gold-600"
                : "border-emerald-900/15 bg-white hover:border-gold-500/40"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
              className="sr-only"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      paymentMethod === "upi"
                        ? "bg-gold-500 text-emerald-950"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-emerald-950">Direct UPI / GPay</span>
                </div>
                {paymentMethod === "upi" && (
                  <CheckCircle2 className="h-5 w-5 text-gold-600" />
                )}
              </div>
              <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                GPay, PhonePe, Paytm വഴി നേരിട്ട് ഫീസ് അടക്കാം.
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-emerald-900/10 text-xs font-semibold text-emerald-800">
              <span>UPI Transfer</span>
              <span className="text-emerald-950 font-bold">₹{CONFIG.FEE_RUPEES}</span>
            </div>
          </label>

          {/* Option 2: Pay Cash Directly (നേരിട്ട് പണം നൽകുക) */}
          <label
            className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border-2 p-4 transition-all duration-200 ${
              paymentMethod === "cash"
                ? "border-emerald-800 bg-emerald-50/90 shadow-md ring-1 ring-emerald-800"
                : "border-emerald-900/15 bg-white hover:border-emerald-900/30"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="sr-only"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      paymentMethod === "cash"
                        ? "bg-emerald-900 text-gold-300"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <Banknote className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-950 block">Pay Cash Directly</span>
                    <span className="text-[11px] font-medium text-emerald-800">നേരിട്ട് പണം നൽകുക</span>
                  </div>
                </div>
                {paymentMethod === "cash" && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-800" />
                )}
              </div>
              <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                അഡ്മിഷൻ ഫീസ് നേരിട്ട് നൽകി രജിസ്ട്രേഷൻ സ്ഥിരീകരിക്കാം.
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-emerald-900/10 text-xs font-semibold text-emerald-800">
              <span>Cash Payment</span>
              <span className="text-emerald-950 font-bold">₹{CONFIG.FEE_RUPEES}</span>
            </div>
          </label>
        </div>

        {/* Dynamic Styled Info Box for Option 1: Direct UPI / GPay */}
        {paymentMethod === "upi" && (
          <div className="mt-4 rounded-xl border border-gold-500/40 bg-gold-300/15 p-4 text-emerald-950 shadow-sm transition-all sm:p-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-gold-300 shadow-sm mt-0.5">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Direct UPI / GPay Instructions
                </span>
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-950">
                  പണമടക്കേണ്ട UPI നമ്പർ: 7736844171 (GPay / PhonePe / Paytm). അഡ്മിഷൻ ഫീസ് (₹500) ഈ നമ്പറിലേക്ക് അയച്ച ശേഷം താഴെ Submit ബട്ടൺ അമർത്തുക.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Styled Info Box for Option 2: Pay Cash Directly */}
        {paymentMethod === "cash" && (
          <div className="mt-4 rounded-xl border border-emerald-800/30 bg-emerald-50/80 p-4 text-emerald-950 shadow-sm transition-all sm:p-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-900 text-gold-300 shadow-sm mt-0.5">
                <Banknote className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Cash Payment Instructions
                </span>
                <p className="text-sm sm:text-base font-semibold leading-relaxed text-emerald-950">
                  അഡ്മിഷൻ ഫീസ് (₹500) നേരിട്ട് നൽകിയ ശേഷം താഴെ Submit ബട്ടൺ അമർത്തുക.
                </p>
              </div>
            </div>
          </div>
        )}
      </fieldset>

      {notice && (
        <div
          role="status"
          className={`rounded-xl p-4 text-sm font-medium ${
            notice.type === "error"
              ? "bg-red-50 text-red-800 border border-red-200"
              : "bg-emerald-50 text-emerald-900 border border-emerald-200"
          }`}
        >
          {notice.text}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="group relative w-full overflow-hidden rounded-xl bg-emerald-900 px-6 py-4 text-base sm:text-lg font-bold text-gold-300 shadow-xl shadow-emerald-900/25 transition-all duration-300 hover:bg-emerald-800 hover:shadow-emerald-900/40 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
      >
        <span className="flex items-center justify-center gap-2">
          {busy ? "Submitting registration…" : `Submit Registration — ₹${CONFIG.FEE_RUPEES}`}
        </span>
      </button>

      <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-ink/65">
        <ShieldCheck className="h-4 w-4 text-emerald-700" />
        <span>
          ഫോം സമർപ്പിച്ച ശേഷം അഡ്മിഷൻ സ്ഥിരീകരണത്തിനായി വാട്സ്ആപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യപ്പെടും.
        </span>
      </div>
    </form>
  );
}
