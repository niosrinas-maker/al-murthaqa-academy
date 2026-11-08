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
                  2-Month Systematic Course
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
                  <span>ഫാത്തിഹയും ചെറിയ സൂറത്തുകളും — അർത്ഥവും തഹ്ഖീഖും</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                  <span>Dedicated Mentoring (കൃത്യമായ മെന്ററിങ്)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-300" />
                  <span>100% Online &amp; Flexible Learning (2 Months)</span>
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
              ഫാത്തിഹയുടെയും ചെറിയ സൂറത്തുകളുടെയും അർത്ഥം മനസ്സിലാക്കി, പൂർണ്ണ തഹ്ഖീഖോടെയുള്ള പാരായണ പഠനം.
            </h3>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink/80">
              Al Murthaqa Quran Academy അവതരിപ്പിക്കുന്ന Quran Tilawah Programme 2 മാസം (2 Months) നീണ്ടുനിൽക്കുന്ന ക്രമബദ്ധമായ ഖുർആൻ പാരായണ പരിശീലനപദ്ധതിയാണ്. ഫാത്തിഹയുടെയും ചെറിയ സൂറത്തുകളുടെയും അർത്ഥം മനസ്സിലാക്കി, പൂർണ്ണ തഹ്ഖീഖോടെയുള്ള പാരായണ പഠനമാണ് ഈ കോഴ്സിലൂടെ ലക്ഷ്യമിടുന്നത്. നിത്യജീവിതത്തിലും നിസ്കാരങ്ങളിലും നാം പതിവായി ഓതുന്ന സൂറത്തുകളുടെ കൃത്യമായ ഉച്ചാരണവും തജ്‌വീദ് നിയമങ്ങളും അർത്ഥസാരവും ഗ്രഹിക്കാൻ ആഗ്രഹിക്കുന്ന പൊതുജനങ്ങൾക്കായാണ് ഈ കോഴ്സ് രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. വിദ്യാർത്ഥികൾ Recorded Video Lessons കാണുകയും നിശ്ചയിച്ച Mentor-ന് പാരായണം ഓതി കേൾപ്പിക്കുകയും ചെയ്യുന്നു. Dedicated Mentoring (കൃത്യമായ മെന്ററിങ്) ഉറപ്പുവരുത്തി വ്യക്തിഗതമായി ആവശ്യമായ തിരുത്തലുകൾ നൽകുകയും പഠനപുരോഗതി നിരന്തരം വിലയിരുത്തുകയും ചെയ്യുന്നു.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-900/10">
              <div className="rounded-xl bg-emerald-50/70 p-4 text-center border border-emerald-900/10">
                <Clock className="h-6 w-6 text-emerald-800 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">2 Months</h4>
                <p className="text-xs text-ink/70 mt-0.5">2 മാസം · ക്രമബദ്ധമായ പഠനം</p>
              </div>

              <div className="rounded-xl bg-gold-300/15 p-4 text-center border border-gold-500/20">
                <Headphones className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">Dedicated Mentoring</h4>
                <p className="text-xs text-ink/70 mt-0.5">കൃത്യമായ മെന്ററിങ്</p>
              </div>

              <div className="rounded-xl bg-emerald-50/70 p-4 text-center border border-emerald-900/10">
                <BookOpen className="h-6 w-6 text-emerald-800 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-sm">തഹ്ഖീഖും അർത്ഥവും</h4>
                <p className="text-xs text-ink/70 mt-0.5">ഫാത്തിഹ &amp; ചെറു സൂറത്തുകൾ</p>
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
    title: "Short Surahs",
    desc: "നിസ്കാരങ്ങളിൽ പതിവായി ഓതുന്ന ജുസ്ഉ അമ്മയിലെ പ്രധാന ചെറു സൂറത്തുകൾ കൃത്യതയോടെ പഠിക്കുന്നു.",
    icon: BookmarkCheck,
  },
  {
    num: "03",
    title: "സൂറത്തുകളുടെ അർത്ഥം",
    desc: "ഫാത്തിഹയുടെയും ചെറിയ സൂറത്തുകളുടെയും ലളിതമായ അർത്ഥം മനസ്സിലാക്കി ഈമാനിക ഉണർവോടെയുള്ള പഠനം.",
    icon: Heart,
  },
  {
    num: "04",
    title: "പൂർണ്ണ തഹ്ഖീഖ് പാരായണം",
    desc: "ഓരോ അക്ഷരവും സൂക്ഷ്മമായി ഉച്ചരിച്ച്, മഖ്‌റജും സിഫാത്തുകളും കൃത്യമായി പാലിച്ച് സാവധാനത്തിലുള്ള പാരായണം.",
    icon: Sun,
  },
  {
    num: "05",
    title: "Dedicated Mentoring",
    desc: "കൃത്യമായ മെന്ററിങ് — ഓരോ വിദ്യാർത്ഥിക്കും നിശ്ചയിക്കപ്പെട്ട വ്യക്തിഗത മെന്ററുടെ തുടർച്ചയായ മേൽനോട്ടവും തിരുത്തലുകളും.",
    icon: UserCheck,
  },
  {
    num: "06",
    title: "Essential Tajweed",
    desc: "നൂൻ സാകിന, മീം സാകിന, മദ്ദ്, ഖൽഖല, ഗുന്ന തുടങ്ങി അവശ്യം അറിഞ്ഞിരിക്കേണ്ട എല്ലാ നിയമങ്ങളും.",
    icon: Volume2,
  },
  {
    num: "07",
    title: "Recorded Video Classes",
    desc: "ഏത് തിരക്കിലും സ്വന്തം സൗകര്യപ്രദമായ സമയത്ത് എത്ര തവണയും റിവൈസ് ചെയ്ത് കണ്ടുപഠിക്കാം.",
    icon: Video,
  },
  {
    num: "08",
    title: "Personal Audio Feedback",
    desc: "ഓതി കേൾപ്പിക്കുന്ന ഓരോ ഭാഗവും മെന്റർ ശ്രദ്ധിച്ച് കേട്ട് ശബ്ദസന്ദേശത്തിലൂടെ വ്യക്തിഗതമായി തിരുത്തുന്നു.",
    icon: Headphones,
  },
  {
    num: "09",
    title: "2 Months Duration",
    desc: "2 മാസം കൊണ്ട് ഫാത്തിഹയും ചെറു സൂറത്തുകളും തികഞ്ഞ കൃത്യതയോടെ ഓതാൻ പ്രാപ്തരാക്കുന്ന ചിട്ടയായ സിലബസ്.",
    icon: Clock,
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
            ഫാത്തിഹയും ചെറിയ സൂറത്തുകളും അർത്ഥമറിഞ്ഞ് പൂർണ്ണ തഹ്ഖീഖോടെ പഠിക്കുന്നതിനുള്ള 10 പ്രധാന സവിശേഷതകൾ
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
    ml: "Recorded Class കാണുക",
    desc: "ഫാത്തിഹയുടെയും ചെറു സൂറത്തുകളുടെയും തജ്‌വീദും അർത്ഥവും വിശദീകരിക്കുന്ന റെക്കോർഡഡ് ക്ലാസ് നിങ്ങളുടെ സൗകര്യപ്രദമായ സമയത്ത് കാണുക.",
    icon: Video,
  },
  {
    step: "Step 2",
    en: "Practice",
    ml: "തഹ്ഖീഖോടെ പരിശീലിക്കുക",
    desc: "ക്ലാസിൽ വിശദീകരിച്ച തഹ്ഖീഖ് നിയമങ്ങളും അർത്ഥസാരവും മനസ്സിലാക്കി സ്വയം ആവർത്തിച്ചു പാരായണം ചെയ്ത് പരിശീലിക്കുക.",
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
    ml: "Dedicated Mentoring വഴി തിരുത്തുക",
    desc: "മെന്റർ നൽകുന്ന കൃത്യമായ വോയ്‌സ് ഫീഡ്‌ബാക്ക് കേട്ട് പാരായണത്തിലെ സൂക്ഷ്മമായ തെറ്റുകൾ കൃത്യമായി തിരുത്തുക.",
    icon: CheckCircle2,
  },
  {
    step: "Step 5",
    en: "Progress",
    ml: "പഠനപുരോഗതി നേടി അടുത്ത സൂറത്തിലേക്ക്",
    desc: "പൂർണ്ണ തഹ്ഖീഖോടെയുള്ള പാരായണം ഉറപ്പുവരുത്തി മെന്ററുടെ അംഗീകാരത്തോടെ അടുത്ത സൂറത്തിലേക്ക് ആത്മവിശ്വാസത്തോടെ മുന്നേറുക.",
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
    { label: "Syllabus", value: "ഫാത്തിഹയും ചെറിയ സൂറത്തുകളും", icon: BookOpen },
    { label: "Duration", value: "2 Months (2 മാസം)", icon: Clock },
    { label: "Learning Outcome", value: "പൂർണ്ണ തഹ്ഖീഖും അർത്ഥ പഠനവും", icon: Sparkles },
    { label: "Mentoring", value: "Dedicated Mentoring (കൃത്യമായ മെന്ററിങ്)", icon: UserCheck },
    { label: "Mode", value: "Online (Flexible Timings)", icon: Globe },
    { label: "Language", value: "Malayalam", icon: Languages },
    { label: "Batch", value: "Separate Male & Female Batches", icon: Users },
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
                2 മാസത്തെ സമ്പൂർണ്ണ ഖുർആൻ പരിശീലന വിവരങ്ങൾ
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
                All-Inclusive Course Fee
              </span>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-emerald-100/70">
                One-Time Course Fee / കോഴ്സ് ഫീസ്
              </p>

              {/* Extremely Prominent ₹500 Fee */}
              <div className="my-3 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-gold-300 drop-shadow-[0_2px_10px_rgba(227,199,126,0.3)]">
                  ₹{CONFIG.FEE_RUPEES}
                </span>
                <span className="text-sm font-medium text-emerald-100/80">/ 2 Months</span>
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed max-w-xs mx-auto">
                2 മാസത്തെ സമ്പൂർണ്ണ റെക്കോർഡഡ് ക്ലാസുകളും കൃത്യമായ മെന്ററിങ്ങും (Dedicated Mentoring) വ്യക്തിഗത പരിശോധനയും അടക്കം.
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
          <span>Duration: 2 Months (2 മാസം)</span>
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
