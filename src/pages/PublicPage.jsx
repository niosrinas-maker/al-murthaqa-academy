import { CONFIG } from "../config";
import Hero from "../components/Hero";
import {
  About,
  CourseHighlights,
  LearningMethod,
  CourseDetailsCard,
  Footer,
} from "../components/Sections";
import RegistrationForm from "../components/RegistrationForm";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function PublicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* About the Programme */}
      <About />

      {/* Course Highlights (10 Grid Cards) */}
      <CourseHighlights />

      {/* Learning Method Timeline (5-Step) */}
      <LearningMethod />

      {/* Course Details Card (Fee ₹500 Prominently Highlighted) */}
      <CourseDetailsCard />

      {/* Registration Section with Payment Method Options */}
      <section id="register" className="mx-auto max-w-5xl px-5 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <span className="inline-block rounded-full bg-emerald-900/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
              Enrollment
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-snug text-emerald-950 sm:text-4xl">
              Register for the Programme
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/75">
              വിവരങ്ങൾ പൂരിപ്പിച്ച് Direct UPI (GPay/PhonePe) വഴിയോ നേരിട്ടോ (Cash) ഫീസ് അടച്ച് രജിസ്ട്രേഷൻ പൂർത്തിയാക്കുക. തുടർന്ന് അഡ്മിഷൻ സ്ഥിരീകരണത്തിനായി വാട്സ്ആപ്പിലേക്ക് റീഡയറക്ട് ചെയ്യപ്പെടും.
            </p>

            <dl className="mt-8 divide-y divide-emerald-900/10 rounded-2xl border border-emerald-900/10 bg-white shadow-sm overflow-hidden">
              {[
                ["Course Fee / ഫീസ്", `₹${CONFIG.FEE_RUPEES} (ഒരു വർഷത്തേക്ക്)`],
                ["Duration / കാലാവധി", "One Year (ഒരു വർഷം)"],
                ["Mode / രീതി", "Online (സൗകര്യപ്രദമായ സമയം)"],
                ["Classes / ക്ലാസുകൾ", "Weekly Recorded Videos"],
                ["Correction / തിരുത്തൽ", "Personal Mentor Audio Feedback"],
                ["Batches / ബാച്ചുകൾ", "Separate Male & Female Batches"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center px-5 py-3.5 text-sm">
                  <dt className="text-ink/70 font-medium">{k}</dt>
                  <dd className="font-bold text-emerald-950">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-gold-500/40 bg-white p-6 shadow-2xl shadow-emerald-900/10 sm:p-8">
            <RegistrationForm mode="public" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
