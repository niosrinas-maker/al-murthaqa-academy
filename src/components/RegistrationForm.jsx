import { useState } from "react";
import { CONFIG } from "../config";
import { saveToSheet } from "../utils/api";
import { payWithRazorpay } from "../utils/razorpay";
import { buildWhatsAppMessage, openWhatsApp, getWhatsAppUrl } from "../utils/whatsapp";
import {
  CreditCard,
  Banknote,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ExternalLink,
  Lock,
  Smartphone,
} from "lucide-react";

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
 * 1. "Pay via Razorpay" (Online: UPI, GPay, PhonePe, Cards, NetBanking)
 * 2. "Pay Cash Directly" (Direct Cash Collection)
 */
export default function RegistrationForm({ mode = "public", pin = "" }) {
  const isTeam = mode === "team";
  const [form, setForm] = useState(EMPTY);
  const [paymentMethod, setPaymentMethod] = useState("razorpay"); // "razorpay" | "cash"
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null); // { type: "error" | "info" | "loading" | "success", text, whatsappUrl }

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

    const isRazorpay = paymentMethod === "razorpay";
    setBusy(true);

    try {
      let paymentId = "";
      let paymentMode = "";
      let paymentStatus = "";

      if (isRazorpay) {
        setNotice({
          type: "loading",
          text: "Razorpay Checkout വിൻഡോ തുറക്കുന്നു... ദയവായി കാത്തിരിക്കുക (Opening Razorpay Checkout...)",
        });

        // 1) Open Razorpay Checkout modal with prefilled details
        let rzpResponse;
        try {
          rzpResponse = await payWithRazorpay({
            name: clean.name,
            phone: clean.phone,
          });
        } catch (rzpErr) {
          if (rzpErr.message === "DISMISSED") {
            setNotice({
              type: "info",
              text: "പേയ്‌മെന്റ് റദ്ദാക്കി. തയ്യാറാകുമ്പോൾ താഴെ 'Pay via Razorpay' വീണ്ടും ക്ലിക്ക് ചെയ്യുക. (Payment was cancelled.)",
            });
          } else {
            setNotice({
              type: "error",
              text: rzpErr.message || "Payment failed. Please try again.",
            });
          }
          setBusy(false);
          return;
        }

        paymentId = rzpResponse?.razorpay_payment_id || `pay_${Date.now()}`;
        paymentMode = "Razorpay (Online Payment)";
        paymentStatus = "Paid (Razorpay)";
      } else {
        // Cash payment (e.g. Ground Team)
        paymentId = `CASH_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        paymentMode = "Pay Cash Directly";
        paymentStatus = "Paid Cash Directly";
      }

      // 2) Saving to Google Sheet
      setNotice({
        type: "loading",
        text: "പേയ്‌മെന്റ് വിജയകരം! രജിസ്ട്രേഷൻ വിവരങ്ങൾ ഷീറ്റിലേക്ക് രേഖപ്പെടുത്തുന്നു... (Payment successful! Saving to Google Sheet...)",
      });

      const kind = isRazorpay
        ? isTeam ? "team-razorpay" : "public-razorpay"
        : isTeam ? "team-cash" : "public-cash";

      const payload = {
        ...clean,
        paymentMode,
        status: paymentStatus,
        paymentId,
        source: isTeam ? "Ground Team" : "Public Website",
        pin: isTeam ? pin : "",
        amount: CONFIG.FEE_RUPEES,
      };

      // 3) AWAIT the Google Sheet fetch request
      await saveToSheet(payload);

      // Save a local backup in browser for safety
      try {
        const backup = JSON.parse(localStorage.getItem("amqa_registrations") || "[]");
        backup.push({ ...payload, at: new Date().toISOString() });
        localStorage.setItem("amqa_registrations", JSON.stringify(backup));
      } catch (backupErr) {
        console.warn("Local backup failed:", backupErr);
      }

      // 4) ONLY trigger WhatsApp redirect AFTER the Google Sheet submission successfully completes!
      const whatsappMsg = buildWhatsAppMessage({
        form: clean,
        paymentMethod,
        paymentId,
        kind,
        source: isTeam ? "Ground Team" : "Public Website",
      });
      const whatsappUrl = getWhatsAppUrl(whatsappMsg);

      setNotice({
        type: "success",
        text: `രജിസ്ട്രേഷനും പേയ്‌മെന്റും വിജയകരമായി പൂർത്തിയായി! (Payment ID: ${paymentId}). വാട്സ്ആപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യുന്നു...`,
        whatsappUrl,
      });

      // Brief delay to ensure network finishes flushing and user sees success state
      setTimeout(() => {
        openWhatsApp(whatsappMsg);
      }, 1500);
    } catch (err) {
      console.error("Submission failed:", err);
      // Keep local backup so user data is preserved
      try {
        const backup = JSON.parse(localStorage.getItem("amqa_unsaved") || "[]");
        backup.push({ ...clean, paymentMethod, at: new Date().toISOString() });
        localStorage.setItem("amqa_unsaved", JSON.stringify(backup));
      } catch (backupErr) {
        console.warn("Local unsaved backup failed:", backupErr);
      }

      setNotice({
        type: "error",
        text: "രജിസ്ട്രേഷൻ വിവരങ്ങൾ ഷീറ്റിലേക്ക് രേഖപ്പെടുത്താൻ സാധിച്ചില്ല. ദയവായി സഹായത്തിനായി വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുക. (Failed to save data. Please contact support.)",
      });
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

      {/* Payment Options */}
      <fieldset className="pt-2">
        <legend className="mb-2 block text-sm font-semibold text-emerald-900">
          Payment Method / ഫീസ് അടക്കുന്ന രീതി
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Option 1: Pay Online via Razorpay */}
          <label
            className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border-2 p-4 transition-all duration-200 ${
              paymentMethod === "razorpay"
                ? "border-gold-600 bg-gold-300/15 shadow-md ring-1 ring-gold-600"
                : "border-emerald-900/15 bg-white hover:border-gold-500/40"
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="razorpay"
              checked={paymentMethod === "razorpay"}
              onChange={() => setPaymentMethod("razorpay")}
              className="sr-only"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      paymentMethod === "razorpay"
                        ? "bg-gold-500 text-emerald-950"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-950 block">Pay via Razorpay</span>
                    <span className="text-[11px] font-medium text-emerald-800">ഓൺലൈൻ പേയ്‌മെന്റ്</span>
                  </div>
                </div>
                {paymentMethod === "razorpay" && (
                  <CheckCircle2 className="h-5 w-5 text-gold-600" />
                )}
              </div>
              <p className="mt-2 text-xs text-ink/70 leading-relaxed">
                UPI (GPay, PhonePe, Paytm), Cards &amp; NetBanking.
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between pt-2 border-t border-emerald-900/10 text-xs font-semibold text-emerald-800">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700">
                <Lock className="h-3 w-3" /> 100% Secure
              </span>
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

        {/* Dynamic Styled Info Box for Option 1: Razorpay Online Payment */}
        {paymentMethod === "razorpay" && (
          <div className="mt-4 rounded-xl border border-gold-500/40 bg-gold-300/15 p-4 text-emerald-950 shadow-sm transition-all sm:p-5">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-gold-300 shadow-sm mt-0.5">
                <Lock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Razorpay Secure Checkout (₹{CONFIG.FEE_RUPEES})
                </span>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-emerald-950">
                  താഴെയുള്ള <strong>"Pay via Razorpay"</strong> ബട്ടൺ അമർത്തുമ്പോൾ Razorpay Checkout വിൻഡോ തുറക്കും. Google Pay, PhonePe, Paytm, മറ്റ് UPI ആപ്പുകൾ, Debit/Credit Card, NetBanking എന്നിവ വഴി സുരക്ഷിതമായി ഫീസ് അടക്കാം.
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
          className={`rounded-xl p-4 text-sm font-medium transition-all ${
            notice.type === "error"
              ? "bg-red-50 text-red-900 border border-red-200"
              : notice.type === "loading"
              ? "bg-amber-50 text-amber-900 border border-amber-300"
              : "bg-emerald-50 text-emerald-950 border border-emerald-300"
          }`}
        >
          <div className="flex items-start gap-2.5">
            {notice.type === "loading" && (
              <Loader2 className="h-5 w-5 animate-spin text-amber-700 shrink-0 mt-0.5" />
            )}
            {notice.type === "error" && (
              <AlertCircle className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
            )}
            {notice.type === "success" && (
              <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <p className="leading-relaxed">{notice.text}</p>
              {notice.whatsappUrl && (
                <a
                  href={notice.whatsappUrl}
                  className="mt-2 inline-flex items-center gap-1.5 font-bold text-emerald-900 underline underline-offset-4 hover:text-emerald-700"
                >
                  <span>വാട്സ്ആപ്പ് തുറക്കാൻ ഇവിടെ അമർത്തുക (Click to open WhatsApp)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-950 to-emerald-900 px-6 py-4 text-base sm:text-lg font-bold text-gold-300 shadow-xl shadow-emerald-950/25 transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 active:scale-[0.99] border border-gold-500/30"
      >
        <span className="flex items-center justify-center gap-2.5">
          {busy ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin text-gold-300" />
              <span>പ്രോസസ്സ് ചെയ്യുന്നു... ദയവായി കാത്തിരിക്കുക (Processing...)</span>
            </>
          ) : paymentMethod === "razorpay" ? (
            <>
              <Lock className="h-5 w-5 text-gold-400" />
              <span>Pay via Razorpay — ₹{CONFIG.FEE_RUPEES}</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-5 w-5 text-gold-400" />
              <span>Submit Registration (Cash) — ₹{CONFIG.FEE_RUPEES}</span>
            </>
          )}
        </span>
      </button>

      <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-ink/65">
        <ShieldCheck className="h-4 w-4 text-emerald-700" />
        <span>
          ഫോം സമർപ്പിച്ച ശേഷം അഡ്മിഷൻ സ്ഥിരീകരണത്തിനായി വാട്സ്ആപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യപ്പെടും.
        </span>
      </div>

      <p className="text-center text-[11px] text-ink/50 pt-0.5">
        By submitting, you agree to our{" "}
        <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-900">
          Terms &amp; Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-900">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
