import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { CONFIG } from "../config";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-ink font-body flex flex-col">
      {/* Header Bar */}
      <header className="pattern-star bg-emerald-950 text-white border-b border-gold-500/20 sticky top-0 z-30 shadow-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-400 font-arabic text-base text-gold-300">
              م
            </span>
            <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white">
              Al Murthaqa Quran Academy
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 mx-auto w-full max-w-4xl px-5 py-12 sm:py-16">
        {/* Page Title Card */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
            <Shield className="h-3.5 w-3.5 text-gold-600" />
            Legal &amp; Compliance
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-ink/70">
            Last Updated: November 2026 · Al Murthaqa Quran Academy (المرتقى)
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
        </div>

        {/* Policy Body */}
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-ink/85">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                1
              </span>
              Introduction
            </h2>
            <p>
              Welcome to <strong>Al Murthaqa Quran Academy</strong> ("we," "our," or "us"). We are committed to protecting the privacy, security, and personal data of our students and visitors. This Privacy Policy describes how we collect, store, handle, and protect your information when you register for and participate in the <strong>Quran Tilawah Programme</strong> through our website and connected communication channels.
            </p>
            <p>
              By accessing our website or enrolling in our courses, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                2
              </span>
              Information We Collect
            </h2>
            <p>When you register for our programme, we may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li><strong>Student Name:</strong> To create and manage your student profile and academic record.</li>
              <li><strong>WhatsApp Number:</strong> For course communication, sharing recorded class links, dedicated mentoring feedback, and administrative notices.</li>
              <li><strong>Gender:</strong> To allocate you to our separate Brother / Sister mentoring batches in accordance with academy guidelines.</li>
              <li><strong>Age:</strong> To calibrate lesson pace and feedback appropriately.</li>
              <li><strong>Place / Location:</strong> Town or city for regional student administration.</li>
              <li><strong>Payment &amp; Transaction Details:</strong> Payment mode, transaction reference ID, and date/time of payment for receipt generation. <em>Note: We do NOT store your bank account passwords, card CVVs, or UPI PINs.</em></li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                3
              </span>
              How We Use Your Information
            </h2>
            <p>We use the information collected solely for educational, administrative, and communication purposes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>To confirm your admission to the 2-Month Quran Tilawah Programme.</li>
              <li>To deliver recorded video lessons and assign you to a dedicated personal mentor.</li>
              <li>To send you audio corrections, recitation assessments, and progress reviews.</li>
              <li>To provide customer support and answer your questions via WhatsApp or phone.</li>
              <li>To comply with legal and financial record-keeping obligations in India.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                4
              </span>
              Payment Processing &amp; Third-Party Services
            </h2>
            <p>
              We integrate authorized, PCI-DSS compliant third-party payment gateways (such as <strong>Razorpay</strong> and bank UPI services) to facilitate safe transactions:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>
                <strong>Payment Gateway:</strong> When you make an online payment via Razorpay, your payment details are processed directly by Razorpay under their strict industry-standard security protocols. Please review Razorpay's Privacy Policy at <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">razorpay.com</a>.
              </li>
              <li>
                <strong>Google Workspace &amp; Apps Script:</strong> We utilize secure Google Cloud infrastructure for internal student enrolment registry and attendance records.
              </li>
              <li>
                <strong>WhatsApp / Meta:</strong> Course mentoring audio exchanges take place over end-to-end encrypted WhatsApp messaging.
              </li>
            </ul>
            <p className="font-medium text-emerald-950">
              We never sell, trade, rent, or lease your personal information to third parties or marketing brokers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                5
              </span>
              Data Security &amp; Retention
            </h2>
            <p>
              We employ strict technical and organizational safeguards to prevent unauthorized access, alteration, or disclosure of your personal information. Your registration records are retained for the duration of the course and for legitimate administrative purposes, after which they are securely archived or deleted upon request.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                6
              </span>
              Student Rights
            </h2>
            <p>Under applicable Indian laws and academy policies, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or updating of any incomplete or inaccurate details.</li>
              <li>Opt out of non-essential promotional messages at any time.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                7
              </span>
              Updates to This Policy
            </h2>
            <p>
              We reserve the right to modify or update this Privacy Policy at our discretion to reflect regulatory changes or service enhancements. Any modifications will become effective immediately upon posting to this page with an updated "Last Updated" date.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                8
              </span>
              Contact Us &amp; Grievances
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our administrative team:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 rounded-xl bg-emerald-50/70 p-4 border border-emerald-900/10 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>
                  <strong>Helpline / WhatsApp:</strong> +91 {CONFIG.ADMIN_PHONE || "7736844171"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>
                  <strong>Email:</strong> support@almurthaqa.com
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:col-span-2">
                <MapPin className="h-4 w-4 text-emerald-800 shrink-0" />
                <span>
                  <strong>Academy:</strong> Al Murthaqa Quran Academy, Kerala, India
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-2.5 text-sm font-semibold text-gold-300 hover:bg-emerald-800 shadow-md transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Main Website</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 py-8 text-center text-xs text-emerald-100/60 border-t border-gold-500/20">
        <p>© {new Date().getFullYear()} Al Murthaqa Quran Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

