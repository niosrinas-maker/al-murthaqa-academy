import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, BookOpen, Atom, Compass, Globe } from "lucide-react";

export default function SplashScreen({ onEnter }) {
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onEnter) onEnter();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Al Murthaqa Quran Academy"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#031711] via-[#06281F] to-[#041a13] px-4 text-white transition-all duration-700 ease-out ${
        isClosing ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Cosmic Starfield & Nebula Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-gold-500/15 blur-[90px]" />

        {/* Ambient floating scientific/celestial particles */}
        <div className="stars-layer absolute inset-0 opacity-40">
          <span className="absolute top-[12%] left-[18%] h-1 w-1 rounded-full bg-gold-300 animate-ping" />
          <span className="absolute top-[28%] right-[22%] h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
          <span className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-emerald-300 animate-pulse" />
          <span className="absolute bottom-[25%] right-[15%] h-2 w-2 rounded-full bg-gold-400/60 animate-ping" />
          <span className="absolute top-[45%] left-[10%] h-1 w-1 rounded-full bg-gold-200" />
          <span className="absolute top-[60%] right-[12%] h-1.5 w-1.5 rounded-full bg-emerald-200" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        {/* Animated Quran & Science Emblem */}
        <div className="relative mb-6 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
          {/* Outer Orbital Rings representing Science, Cosmos & Atomic Structure */}
          <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-[spin_24s_linear_infinite]" />
          
          <div className="absolute inset-4 rounded-full border border-dashed border-emerald-400/25 animate-[spin_18s_linear_infinite_reverse]" />

          {/* Elliptical Orbits with orbiting electron/celestial bodies */}
          <div className="absolute inset-2 rounded-full border border-gold-400/30 rotate-[35deg] animate-[spin_16s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-300 shadow-[0_0_12px_#E3C77E]" />
          </div>

          <div className="absolute inset-2 rounded-full border border-emerald-300/30 -rotate-[45deg] animate-[spin_20s_linear_infinite_reverse]">
            <span className="absolute top-1/2 -left-1.5 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </div>

          <div className="absolute inset-6 rounded-full border border-gold-300/20 rotate-[110deg] animate-[spin_14s_linear_infinite]">
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-200 shadow-[0_0_8px_#E3C77E]" />
          </div>

          {/* Central Sacred Quran Emblem with Radiant Glow */}
          <div className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-950 via-[#0a3528] to-[#041a13] p-1 shadow-2xl shadow-gold-500/20 ring-2 ring-gold-400/50">
            {/* Inner radiant backdrop */}
            <div className="absolute inset-1 rounded-full bg-emerald-900/40 backdrop-blur-sm" />

            {/* Glowing Holy Book Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center text-gold-300">
              <svg viewBox="0 0 64 64" className="h-16 w-16 drop-shadow-[0_0_15px_rgba(227,199,126,0.5)]" fill="none">
                <path
                  d="M32 18C26 13 16 13 8 16V49C16 46 26 46 32 50C38 46 48 46 56 49V16C48 13 38 13 32 18Z"
                  stroke="url(#quran-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#06281F"
                  fillOpacity="0.85"
                />
                <path
                  d="M32 18V50"
                  stroke="url(#quran-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 25C19 23 26 23 30 26M13 33C19 31 26 31 30 34M13 41C19 39 26 39 30 42"
                  stroke="#E3C77E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
                <path
                  d="M51 25C45 23 38 23 34 26M51 33C45 31 38 31 34 34M51 41C45 39 38 39 34 42"
                  stroke="#E3C77E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
                <circle cx="32" cy="11" r="2.5" fill="#E3C77E" />
                <defs>
                  <linearGradient id="quran-gold" x1="8" y1="13" x2="56" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5E4B2" />
                    <stop offset="0.5" stopColor="#C8A24A" />
                    <stop offset="1" stopColor="#8E6A1E" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-arabic text-xs tracking-widest text-gold-300 mt-1">الْقُرْآن</span>
            </div>
          </div>

          {/* Scientific knowledge tags around the orbit */}
          <div className="absolute -top-1 flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[10px] font-medium text-emerald-200 border border-emerald-500/30 backdrop-blur-md">
            <Atom className="h-3 w-3 text-gold-300" />
            <span>Cosmos &amp; Creation</span>
          </div>
          <div className="absolute -bottom-1 flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[10px] font-medium text-gold-200 border border-gold-500/30 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-gold-300" />
            <span>Divine Revelation</span>
          </div>
        </div>

        {/* Quranic Verse on Science & Knowledge */}
        <p className="font-arabic text-xl sm:text-2xl leading-loose text-gold-300 drop-shadow">
          سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ
        </p>
        <p className="mt-1 text-xs sm:text-sm font-medium tracking-wide text-emerald-200/80 italic">
          "We will show them Our signs in the horizons and within themselves..." (Fussilat 41:53)
        </p>

        {/* Academy Branding */}
        <div className="mt-5 space-y-1">
          <span className="inline-block rounded-full bg-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold-300 ring-1 ring-gold-400/40">
            Al Murthaqa Quran Academy
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white pt-2">
            Quran &amp; Science: The Depth of Knowledge
          </h1>
          <p className="font-body text-sm sm:text-base text-emerald-100/80 max-w-md mx-auto pt-1">
            ശുദ്ധമായ ഖുർആൻ പാരായണവും ദിവ്യജ്ഞാനത്തിന്റെ ആഴങ്ങളും ചിട്ടയായ പരിശീലനത്തിലൂടെ സ്വായത്തമാക്കാം.
          </p>
        </div>

        {/* Enter Academy / Bismillah Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-3.5 text-base sm:text-lg font-bold text-emerald-950 shadow-[0_0_25px_rgba(200,162,74,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(200,162,74,0.6)] focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-emerald-950 active:scale-95"
          >
            <span className="font-arabic text-lg sm:text-xl font-bold">بِسْمِ ٱللَّهِ</span>
            <span>Enter Academy</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <button
          onClick={handleEnter}
          className="mt-4 text-xs text-emerald-200/60 hover:text-gold-300 transition-colors underline underline-offset-4"
        >
          Skip to website →
        </button>
      </div>
    </div>
  );
}

