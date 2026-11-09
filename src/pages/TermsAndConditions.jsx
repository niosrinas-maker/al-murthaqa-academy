import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, CheckCircle2, Phone, Mail, MapPin, RefreshCw, Truck, CreditCard } from "lucide-react";
import { CONFIG } from "../config";

export default function TermsAndConditions() {
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
            <Scale className="h-3.5 w-3.5 text-gold-600" />
            Terms of Service
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-ink/70">
            Last Updated: November 2026 · Al Murthaqa Quran Academy (المرتقى)
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
        </div>

        {/* Terms Body */}
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-ink/85">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                1
              </span>
              Agreement to Terms
            </h2>
            <p>
              These Terms &amp; Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Student," "User," or "You"), and <strong>Al Murthaqa Quran Academy</strong> ("Academy," "We," "Us," or "Our"), concerning your access to and use of our website, courses, and educational services.
            </p>
            <p>
              By accessing the website or registering for the <strong>Quran Tilawah Programme</strong>, you acknowledge that you have read, understood, and agreed to be bound by all of these terms. If you do not agree with all of these terms, you are prohibited from using the service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                2
              </span>
              Description of Educational Services
            </h2>
            <p>
              Al Murthaqa Quran Academy provides online Quran recitation and meaning instruction via the <strong>Quran Tilawah Programme</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li><strong>Course Duration:</strong> 2 Months (2 മാസം).</li>
              <li><strong>Syllabus Focus:</strong> Surah Al-Fatihah and Selected Short Surahs (ഫാത്തിഹയും ചെറിയ സൂറത്തുകളും).</li>
              <li><strong>Learning Outcome:</strong> Perfect recitation with Tajweed rules and word-by-word meaning comprehension (ഫാത്തിഹയുടെയും ചെറിയ സൂറത്തുകളുടെയും അർത്ഥം മനസ്സിലാക്കി, പൂർണ്ണ തഹ്ഖീഖോടെയുള്ള പാരായണ പഠനം).</li>
              <li><strong>Pedagogy:</strong> Recorded video lessons, weekly practice, and dedicated personal mentor audio evaluation (Dedicated Mentoring / കൃത്യമായ മെന്ററിങ്).</li>
              <li><strong>Medium of Instruction:</strong> Malayalam.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                3
              </span>
              Registration &amp; Student Information
            </h2>
            <p>
              To register for the course, students must provide accurate, current, and complete personal details (Full Name, WhatsApp Number, Gender, Age, and Location). Students are responsible for maintaining the accuracy of their contact information to ensure uninterrupted course delivery and mentor communication.
            </p>
            <p>
              Students will be assigned to separate male and female batches to respect personal privacy and convenience.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                4
              </span>
              Course Fees &amp; Payment Terms
            </h2>
            <div className="flex items-start gap-3 rounded-xl bg-gold-400/10 p-4 border border-gold-500/30 text-emerald-950">
              <CreditCard className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Course Admission Fee: ₹{CONFIG.FEE_RUPEES} (All-Inclusive for 2 Months)</p>
                <p className="text-xs text-ink/75 mt-0.5">
                  Includes full access to recorded video lessons, dedicated mentoring, and audio evaluations.
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>
                All course fees are payable in Indian Rupees (INR) via our authorized payment channels: online payment gateway (<strong>Razorpay</strong>), Direct UPI (GPay/PhonePe/Paytm), or authorized cash collection.
              </li>
              <li>
                Admission is considered confirmed only upon successful verification of the course fee receipt.
              </li>
              <li>
                Prices are subject to revision at the sole discretion of the academy; however, enrolled students will not be subject to fee adjustments during their active cohort.
              </li>
            </ul>
          </section>

          {/* Section 5: Delivery & Fulfillment */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                5
              </span>
              Service Delivery &amp; Digital Fulfillment Policy
            </h2>
            <p>
              As an online educational academy, our services are delivered electronically:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>
                <strong>No Physical Shipping:</strong> There are no tangible physical goods delivered. All educational resources are delivered digitally.
              </li>
              <li>
                <strong>Access Timeline:</strong> Upon successful submission and payment verification, access instructions, lesson links, and mentor assignment details are provided via WhatsApp or email within <strong>24 to 48 hours</strong> prior to batch commencement.
              </li>
              <li>
                In the event of delay in receiving access details, students may contact support immediately at <strong>+91 {CONFIG.ADMIN_PHONE || "7736844171"}</strong>.
              </li>
            </ul>
          </section>

          {/* Section 6: Cancellation & Refund Policy */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                6
              </span>
              Cancellation &amp; Refund Policy
            </h2>
            <p>
              We strive to provide the highest standard of Quranic education and mentorship. Please review our refund policy carefully:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>
                <strong>Cancellation Before Batch Start:</strong> If a student requests cancellation at least <strong>48 hours prior</strong> to the scheduled commencement of the course batch, a full refund will be processed after deducting statutory payment gateway processing charges.
              </li>
              <li>
                <strong>Post-Commencement:</strong> Once course access credentials/video lessons have been distributed or the cohort has commenced, fees are generally non-refundable due to limited batch capacities and allocated mentor slots.
              </li>
              <li>
                <strong>Duplicate Payments:</strong> In the rare event of accidental duplicate payments for the same registration, the excess payment will be refunded in full.
              </li>
              <li>
                <strong>Refund Processing Timeline:</strong> Approved refunds will be initiated to the student's original payment source (bank account/UPI/card via Razorpay) within <strong>5 to 7 working days</strong>.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                7
              </span>
              Student Code of Conduct &amp; Ethics
            </h2>
            <p>
              Quranic study requires sincerity, respect, and discipline. Students are expected to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-ink/80">
              <li>Communicate respectfully and cordially with mentors and fellow students at all times.</li>
              <li>Submit recitation recordings promptly according to the designated schedule.</li>
              <li>Refrain from sharing offensive, political, sectarian, or irrelevant messages in academy groups or direct mentor channels.</li>
            </ul>
            <p>
              The Academy reserves the right to terminate access without refund for any student found violating ethical guidelines or engaging in harassment.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                8
              </span>
              Intellectual Property Rights
            </h2>
            <p>
              All video lessons, curriculum design, audio notes, graphics, and instructional materials provided under the Quran Tilawah Programme are the proprietary intellectual property of <strong>Al Murthaqa Quran Academy</strong>. Materials are licensed strictly for the student's personal, non-commercial educational use. Reproducing, republishing, selling, or publicly distributing course materials without prior written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                9
              </span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in the state of <strong>Kerala, India</strong>.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 pt-4 border-t border-emerald-900/10">
            <h2 className="font-display text-xl font-bold text-emerald-950 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/20 text-xs font-bold text-emerald-900">
                10
              </span>
              Contact Information
            </h2>
            <p>
              For any questions regarding these Terms &amp; Conditions, cancellation inquiries, or assistance, please reach out to us:
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

