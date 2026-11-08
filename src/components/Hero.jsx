import { CONFIG } from "../config";

// The mihrab-style arch is the one distinctive element on the page.
function MihrabArch() {
  return (
    <div className="relative mx-auto w-64 sm:w-72 lg:w-80" aria-hidden="true">
      <svg viewBox="0 0 320 420" className="w-full drop-shadow-2xl">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E3C77E" />
            <stop offset="1" stopColor="#A8832F" />
          </linearGradient>
        </defs>
        <path d="M10 410V170C10 80 80 12 160 6c80 6 150 74 150 164v240z" fill="none" stroke="url(#gold)" strokeWidth="3" />
        <path d="M30 410V172C30 92 90 34 160 28c70 6 130 64 130 144v238z" fill="#06281F" stroke="#C8A24A" strokeOpacity=".45" strokeWidth="1.2" />
        <path d="M50 410V176C50 106 100 56 160 50c60 6 110 56 110 126v234z" fill="none" stroke="#C8A24A" strokeOpacity=".25" />
        <path d="M160 70l7 14 15-5-5 15 14 7-14 7 5 15-15-5-7 14-7-14-15 5 5-15-14-7 14-7-5-15 15 5z" fill="url(#gold)" />
      </svg>
      <div className="absolute inset-x-0 top-[44%] px-8 text-center">
        <p className="font-arabic text-[1.65rem] leading-[1.9] text-gold-300 sm:text-3xl">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="pattern-star relative overflow-hidden text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500 font-arabic text-xl text-gold-300">
            م
          </span>
          <span className="font-display text-lg font-bold tracking-wide">Al Murthaqa Quran Academy</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-emerald-100/90 font-medium">
          <a href="#about" className="hover:text-gold-300 transition-colors">About</a>
          <a href="#highlights" className="hover:text-gold-300 transition-colors">Highlights</a>
          <a href="#method" className="hover:text-gold-300 transition-colors">Method</a>
          <a href="#details" className="hover:text-gold-300 transition-colors">Details</a>
        </div>
        <a href="#register" className="hidden rounded-full border border-gold-500/60 px-5 py-2 text-sm text-gold-300 hover:bg-gold-500/10 sm:block">
          Register — ₹{CONFIG.FEE_RUPEES}
        </a>
      </nav>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.25fr_1fr] lg:pb-28 lg:pt-16">
        <div>
          <p className="mb-5 inline-block rounded-full bg-gold-500/15 px-4 py-1.5 text-sm text-gold-300 ring-1 ring-gold-500/40">
            Quran Tilawah Programme
          </p>
          <h1 className="font-display text-3xl font-bold leading-[1.3] sm:text-5xl sm:leading-[1.25] lg:text-6xl">
            Towards Pure Recitation, <span className="text-gold-300">Through Systematic Learning.</span>
          </h1>
          <p className="mt-3 text-sm font-medium text-gold-300/90 sm:text-base">
            ശുദ്ധമായ പാരായണത്തിലേക്ക്, ക്രമബദ്ധമായ പഠനത്തിലൂടെ
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-emerald-100/90">
            A One-Year Quran Recitation &amp; Correction Programme. Recorded Classes. Personal Mentor Correction.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-lg font-bold text-emerald-950 shadow-xl shadow-black/30 transition hover:brightness-110"
            >
              Register Now - ₹{CONFIG.FEE_RUPEES}
            </a>
            <span className="text-sm text-emerald-100/70">Language: Malayalam · 1 year</span>
          </div>
        </div>
        <MihrabArch />
      </div>
    </header>
  );
}
