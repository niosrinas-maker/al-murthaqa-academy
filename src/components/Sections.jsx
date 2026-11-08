import { CONFIG } from "../config";
import {
  BookOpen,
  Heart,
  Sun,
  Layers,
  ShieldCheck,
  BookmarkCheck,
  Volume2,
  Video,
  UserCheck,
  TrendingUp,
  Clock,
  Globe,
  Headphones,
  Languages,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Calendar,
} from "lucide-react";

// ============================================================
// 3. ABOUT THE PROGRAMME SECTION
// ============================================================
export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 lg:py-28">
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-950 ring-1 ring-gold-500/40">
          <Sparkles className="h-3.5 w-3.5 text-gold-600" />
          Al Murthaqa Quran Academy
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
          About the Programme
        </h2>
        <p className="mt-2 text-lg sm:text-xl font-medium text-emerald-800">
          ഖുർആൻ പാരായണത്തിൽ കൂടുതൽ കൃത്യതയിലേക്ക്
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left Decorative Feature Card */}
        <div className="lg:col-span-5">
          <div className="pattern-star relative overflow-hidden rounded-3xl p-8 text-white shadow-2xl shadow-emerald-950/20 ring-1 ring-gold-500/40">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/50 bg-emerald-950/80 font-arabic text-2xl text-gold-300 shadow-inner">
                  المرتقى
                </span>
                <span className="rounded-full bg-gold-400/20 px-3 py-1 text-xs font-semibold text-gold-300">
                  1-Year Systematic Course
                </span>
              </div>

              <div className="border-y border-gold-500/25 py-6 text-center">
                <p className="font-arabic text-3xl leading-relaxed text-gold-300 drop-shadow">
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </p>
                <p className="mt-2 text-xs text-emerald-100/75 italic">
                  "And recite the Qur'an with measured recitation." (Al-Muzzammil: 4)
                </p>
              </div>

              <ul className="space-y-3 text-sm text-emerald-100/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                  <span>100% Online &amp; Flexible Learning</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                  <span>Dedicated Personal Mentor for Every Student</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                  <span>Separate Batches for Brothers &amp; Sisters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Malayalam Description & Benefits */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-xl shadow-emerald-900/5 sm:p-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-emerald-950 leading-snug">
              സൂറത്തുകളുടെ ഉച്ചാരണവും തജ്വീദും മെച്ചപ്പെടുത്താൻ സമഗ്രമായ അവസരം
            </h3>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink/80">
              Quran Tilawah Programme ഒരു വർഷം നീണ്ടുനിൽക്കുന്ന ക്രമബദ്ധമായ ഖുർആൻ പാരായണ പരിശീലനപദ്ധതിയാണ്. ഖുർആൻ പാരായണം കൂടുതൽ കൃത്യമായി പഠിക്കാനും സാധാരണ പാരായണം ചെയ്യുന്ന സൂറത്തുകളുടെ ഉച്ചാരണവും തജ്വീദും മെച്ചപ്പെടുത്താനും ആഗ്രഹിക്കുന്ന പൊതുജനങ്ങൾക്കായാണ് ഈ കോഴ്സ് രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. വിദ്യാർഥികൾ Recorded Video Lessons കാണുകയും നിശ്ചയിച്ച Mentor-ന് പാരായണം ഓതി കേൾപ്പിക്കുകയും ചെയ്യുന്നു. Mentor ആവശ്യമായ correction നൽകുകയും പഠനപുരോഗതി നിരീക്ഷിക്കുകയും ചെയ്യുന്നു.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-900/10">
              <div className="rounded-xl bg-emerald-50/70 p-4 text-center border border-emerald-900/10">
                <Clock className="h-6 w-6 text-emerald-800 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">One Year</h4>
                <p className="text-xs text-ink/70 mt-0.5">ക്രമബദ്ധമായ പഠനം</p>
              </div>

              <div className="rounded-xl bg-gold-300/15 p-4 text-center border border-gold-500/20">
                <Headphones className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">Personal Mentor</h4>
                <p className="text-xs text-ink/70 mt-0.5">ഓഡിയോ തിരുത്തലുകൾ</p>
              </div>

              <div className="rounded-xl bg-emerald-50/70 p-4 text-center border border-emerald-900/10">
                <Globe className="h-6 w-6 text-emerald-800 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">Flexible Online</h4>
                <p className="text-xs text-ink/70 mt-0.5">സൗകര്യപ്രദമായ സമയം</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 4. COURSE HIGHLIGHTS (10 GRID CARDS)
// ============================================================
const HIGHLIGHTS = [
  {
    num: "01",
    title: "Surah Al-Fatihah",
    desc: "ഉമ്മുൽ ഖുർആൻ — ശരിയായ മഖ്‌റജുകളോടും തജ്‌വീദ് നിയമങ്ങളോടും കൂടി പൂർണ്ണമായി ഓതി പഠിക്കുന്നു.",
    icon: BookOpen,
  },
  {
    num: "02",
    title: "Surah Yaseen",
    desc: "ഖൽബുൽ ഖുർആൻ — ഓരോ ആയത്തുകളുടെയും നിർത്തുസ്ഥാനങ്ങളും തജ്‌വീദും മനസ്സിരുത്തി പരിശീലിക്കുന്നു.",
    icon: Heart,
  },
  {
    num: "03",
    title: "Surah Ar-Rahman",
    desc: "ദിവ്യകാരുണ്യത്തിന്റെ സൂറത്ത് — മനോഹരമായ പാരായണ ശൈലിയും ശരിയായ ഉച്ചാരണവും സ്വായത്തമാക്കാം.",
    icon: Sun,
  },
  {
    num: "04",
    title: "Surah Al-Waqi'ah",
    desc: "അനുഗ്രഹീത സൂറത്ത് — നിത്യജീവിതത്തിൽ സാധാരണ തെറ്റുകളില്ലാതെ തുടർച്ചയായി ഓതാൻ സഹായിക്കുന്നു.",
    icon: Layers,
  },
  {
    num: "05",
    title: "Surah Al-Mulk",
    desc: "ഖബ്റിലെ കാവൽ — കൃത്യമായ വഖ്ഫുകളും അക്ഷരസ്ഫുടതയും പാലിച്ച് പാരായണം അഭ്യസിക്കുന്നു.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Selected Short Surahs",
    desc: "നിസ്കാരങ്ങളിൽ പതിവായി ഓതുന്ന ജുസ്ഉ അമ്മയിലെ പ്രധാന ചെറു സൂറത്തുകൾ കൃത്യതയോടെ പഠിക്കുന്നു.",
    icon: BookmarkCheck,
  },
  {
    num: "07",
    title: "Essential Tajweed",
    desc: "നൂൻ സാകിന, മീം സാകിന, മദ്ദ്, ഖൽഖല, ഗുന്ന തുടങ്ങി അവശ്യം അറിഞ്ഞിരിക്കേണ്ട എല്ലാ നിയമങ്ങളും.",
    icon: Volume2,
  },
  {
    num: "08",
    title: "Recorded Video Classes",
    desc: "ഏത് തിരക്കിലും സ്വന്തം സൗകര്യപ്രദമായ സമയത്ത് എത്ര തവണയും റിവൈസ് ചെയ്ത് കണ്ടുപഠിക്കാം.",
    icon: Video,
  },
  {
    num: "09",
    title: "Personal Mentor Correction",
    desc: "ഓതി കേൾപ്പിക്കുന്ന ഓരോ ഭാഗവും വ്യക്തിഗത മെന്റർ ശ്രദ്ധിച്ച് കേട്ട് ശബ്ദസന്ദേശത്തിലൂടെ തിരുത്തുന്നു.",
    icon: UserCheck,
  },
  {
    num: "10",
    title: "Weekly Practice & Progress",
    desc: "ആഴ്ചതോറുമുള്ള ചിട്ടയായ പരിശീലനവും വ്യക്തിഗത പുരോഗതി രേഖപ്പെടുത്തി അടുത്ത പാഠത്തിലേക്ക് മുന്നേറ്റവും.",
    icon: TrendingUp,
  },
];

export function CourseHighlights() {
  return (
    <section id="highlights" className="bg-emerald-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-900/10 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-900">
            Comprehensive Syllabus
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Course Highlights
          </h2>
          <p className="mt-2 text-base sm:text-lg text-ink/75">
            ഖുർആൻ തിലാവത്ത് പ്രോഗ്രാമിലൂടെ നിങ്ങൾ കൈവരിക്കുന്ന 10 പ്രധാന സവിശേഷതകൾ
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
        </div>

        {/* 10-Card Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/60 hover:shadow-xl hover:shadow-emerald-950/10"
              >
                {/* Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-gold-600 bg-gold-300/20 px-2.5 py-1 rounded-full">
                      {item.num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-gold-300 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-emerald-950">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-emerald-950 group-hover:text-emerald-800">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink/70">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-900/5 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Tilawah Focus</span>
                  <Sparkles className="h-3 w-3 text-gold-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 5. LEARNING METHOD TIMELINE (HORIZONTAL DESKTOP / VERTICAL MOBILE)
// ============================================================
const TIMELINE_STEPS = [
  {
    step: "Step 1",
    en: "Watch",
    ml: "Weekly Recorded Class കാണുക",
    desc: "ആഴ്ചതോറുമുള്ള പുതിയ റെക്കോർഡഡ് വീഡിയോ ക്ലാസ് നിങ്ങളുടെ സൗകര്യപ്രദമായ സമയത്ത് ശ്രദ്ധാപൂർവ്വം കാണുക.",
    icon: Video,
  },
  {
    step: "Step 2",
    en: "Practice",
    ml: "പഠിച്ച ഭാഗം പരിശീലിക്കുക",
    desc: "ക്ലാസിൽ വിശദീകരിച്ച തജ്‌വീദ് നിയമങ്ങളും ഉച്ചാരണ ശൈലിയും സ്വയം ആവർത്തിച്ചു പാരായണം ചെയ്ത് പരിശീലിക്കുക.",
    icon: BookOpen,
  },
  {
    step: "Step 3",
    en: "Recite",
    ml: "നിശ്ചയിച്ച Mentor-ന് ഓതി കേൾപ്പിക്കുക",
    desc: "പരിശീലിച്ച ഭാഗം നിങ്ങളുടെ ശബ്ദത്തിൽ റെക്കോർഡ് ചെയ്ത് നിശ്ചയിക്കപ്പെട്ട വ്യക്തിഗത മെന്റർക്ക് അയച്ചുകൊടുക്കുക.",
    icon: Volume2,
  },
  {
    step: "Step 4",
    en: "Correct",
    ml: "Mentor-ന്റെ feedback അനുസരിച്ച് തെറ്റുകൾ തിരുത്തുക",
    desc: "മെന്റർ നൽകുന്ന വിശദമായ വോയ്‌സ് ഫീഡ്‌ബാക്ക് കേട്ട് പാരായണത്തിലെ സൂക്ഷ്മമായ തെറ്റുകൾ കൃത്യമായി തിരുത്തുക.",
    icon: CheckCircle2,
  },
  {
    step: "Step 5",
    en: "Progress",
    ml: "പഠനപുരോഗതി രേഖപ്പെടുത്തി അടുത്ത പാഠത്തിലേക്ക് മുന്നേറുക",
    desc: "ശരിയായ പാരായണം പൂർത്തിയാക്കി മെന്ററുടെ അംഗീകാരം നേടി അടുത്ത സിലബസ് പാഠത്തിലേക്ക് ആത്മവിശ്വാസത്തോടെ മുന്നേറുക.",
    icon: TrendingUp,
  },
];

export function LearningMethod() {
  return (
    <section id="method" className="pattern-star relative py-20 lg:py-28 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block rounded-full bg-gold-500/20 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-gold-400/40">
            Systematic Pedagogy
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our 5-Step Learning Method
          </h2>
          <p className="mt-2 text-base sm:text-lg text-emerald-100/80">
            പഠനരീതി 5 ലളിതമായ ഘട്ടങ്ങളിലൂടെ
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-1 bg-gradient-to-r from-gold-500/20 via-gold-400 to-gold-500/20 z-0" />

          {/* Mobile Connecting Line (Vertical) */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[31px] w-1 bg-gradient-to-b from-gold-500/30 via-gold-400 to-gold-500/30 z-0" />

          {/* 5 Steps Grid / List */}
          <div className="grid gap-8 lg:grid-cols-5 relative z-10">
            {TIMELINE_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-5 lg:gap-0"
                >
                  {/* Step Node Circle */}
                  <div className="relative shrink-0 mb-0 lg:mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400 bg-emerald-950 text-gold-300 shadow-xl shadow-black/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-emerald-950 group-hover:border-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -bottom-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 font-mono text-xs font-bold text-emerald-950 ring-2 ring-emerald-950">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Step Content Card */}
                  <div className="flex-1 rounded-2xl bg-emerald-900/60 p-5 lg:p-4 border border-emerald-700/40 backdrop-blur-sm transition-all duration-300 group-hover:border-gold-400/50 group-hover:bg-emerald-900/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      {item.step} — {item.en}
                    </span>
                    <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white">
                      {item.ml}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-100/75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 6. COURSE DETAILS CARD (PROMINENT FEE & ENROLLMENT CTA)
// ============================================================
export function CourseDetailsCard() {
  const details = [
    { label: "Course", value: "Quran Tilawah Programme", icon: GraduationCap },
    { label: "Duration", value: "One Year", icon: Clock },
    { label: "Mode", value: "Online (Flexible Timings)", icon: Globe },
    { label: "Learning Method", value: "Recorded Lessons + Mentor Correction", icon: Headphones },
    { label: "Language", value: "Malayalam", icon: Languages },
    { label: "Batch", value: "Male Batch & Female Batch", icon: Users },
  ];

  return (
    <section id="details" className="mx-auto max-w-5xl px-5 py-20 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border-2 border-gold-500/50 bg-gradient-to-b from-white to-emerald-50/50 p-8 shadow-2xl shadow-emerald-950/10 sm:p-12 lg:p-14">
        {/* Decorative corner ornament */}
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gold-400/15 blur-2xl pointer-events-none" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Details Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block rounded-full bg-emerald-900/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900">
                Key Information
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950">
                Programme Specifications
              </h2>
              <p className="mt-1 text-sm sm:text-base text-ink/75">
                ഒരു വർഷത്തെ സമ്പൂർണ്ണ ഖുർആൻ പരിശീലന വിവരങ്ങൾ
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3.5 rounded-xl border border-emerald-900/10 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-ink/60 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="block font-semibold text-emerald-950 text-sm sm:text-base mt-0.5">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Highly Prominent Fee Showcase & CTA */}
          <div className="lg:col-span-5">
            <div className="pattern-star relative rounded-2xl p-8 text-center text-white shadow-xl ring-2 ring-gold-400/50">
              <span className="inline-block rounded-full bg-gold-400/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-300">
                All-Inclusive Annual Fee
              </span>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-emerald-100/70">
                One-Time Course Fee / കോഴ്സ് ഫീസ്
              </p>

              {/* Extremely Prominent ₹500 Fee */}
              <div className="my-3 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-gold-300 drop-shadow-[0_2px_10px_rgba(227,199,126,0.3)]">
                  ₹{CONFIG.FEE_RUPEES}
                </span>
                <span className="text-sm font-medium text-emerald-100/80">/ 1 Year</span>
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed max-w-xs mx-auto">
                ഒരു വർഷത്തെ സമ്പൂർണ്ണ റെക്കോർഡഡ് ക്ലാസുകളും വ്യക്തിഗത മെന്റർ പരിശോധനയും അടക്കം.
              </p>

              {/* CTA Button */}
              <a
                href="#register"
                className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-6 py-4 text-base sm:text-lg font-bold text-emerald-950 shadow-xl shadow-black/30 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]"
              >
                <span>Join the Programme — ₹{CONFIG.FEE_RUPEES}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-emerald-100/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold-400" />
                <span>Direct UPI (GPay/PhonePe) &amp; Cash Payment Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
export function Footer() {
  return (
    <footer className="bg-emerald-950 py-12 text-center text-sm text-emerald-100/70 border-t border-gold-500/20">
      <div className="mx-auto max-w-6xl px-5 space-y-4">
        <p className="font-arabic text-3xl text-gold-300">المرتقى</p>
        <p className="font-display font-bold text-white text-lg">Al Murthaqa Quran Academy</p>
        <p className="text-sm max-w-md mx-auto text-emerald-100/80">
          Quran Tilawah Programme · Towards Pure Recitation, Through Systematic Learning
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs text-emerald-100/60">
          <span>Fee: ₹{CONFIG.FEE_RUPEES}</span>
          <span>Duration: 1 Year</span>
          <span>Language: Malayalam</span>
          <span>Helpline: +91 7736844171</span>
        </div>
        <p className="pt-4 text-xs text-emerald-100/40">
          © {new Date().getFullYear()} Al Murthaqa Quran Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
