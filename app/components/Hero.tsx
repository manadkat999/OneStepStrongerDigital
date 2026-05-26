"use client";
import { useEffect, useRef } from "react";

const socialProof = [
  { initials: "RL", color: "#f97316", business: "Rosa's Bakery" },
  { initials: "MT", color: "#3b82f6", business: "Metro Plumbing" },
  { initials: "SK", color: "#10b981", business: "Sharma Dental" },
  { initials: "JW", color: "#8b5cf6", business: "JW Auto Repair" },
  { initials: "PC", color: "#f97316", business: "Patel Law Group" },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.015}px, ${y * 0.015}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden grid-bg noise"
    >
      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/7 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-orange flex-shrink-0" />
              <span className="text-orange-400 text-xs font-semibold tracking-wide">
                Helping 150+ small businesses get found online
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in-up delay-100">
              Every Great
              <br />
              <span className="gradient-text">Small Business</span>
              <br />
              Deserves to Be Found.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
              You&apos;ve built something worth finding. We make sure the right customers — the ones in your community actively searching for what you offer — can find you first.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#contact"
                className="btn-primary px-8 py-4 rounded-xl font-bold text-base inline-flex items-center gap-2"
              >
                Get Your Free Presence Audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#services" className="btn-secondary px-8 py-4 rounded-xl font-bold text-base">
                See How We Help
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-5 animate-fade-in-up delay-400">
              <div className="flex -space-x-3">
                {socialProof.map((s, i) => (
                  <div
                    key={i}
                    title={s.business}
                    className="w-9 h-9 rounded-full border-2 border-[#080808] flex items-center justify-center text-xs font-bold text-white cursor-default"
                    style={{ background: s.color }}
                  >
                    {s.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-orange-400 text-sm mb-0.5">{"★★★★★"}</div>
                <p className="text-gray-400 text-xs">
                  Trusted by restaurants, contractors, clinics & more
                </p>
              </div>
            </div>
          </div>

          {/* Right: floating card */}
          <div ref={cardRef} className="relative hidden lg:flex justify-center items-center animate-float">
            <div className="relative w-80">
              {/* Main card */}
              <div className="card-glow rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 text-white font-black text-xs">
                    OS
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Digital Presence Score</p>
                    <p className="text-gray-400 text-xs">Updated live</p>
                  </div>
                </div>

                {/* Score bar */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-xs">Before working with us</span>
                    <span className="text-red-400 text-xs font-bold">31 / 100</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[31%] bg-red-500/60 rounded-full" />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-xs">After 6 months</span>
                    <span className="text-orange-400 text-xs font-bold">89 / 100</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[89%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  {[
                    { label: "Local Rank", value: "#1", color: "text-orange-400" },
                    { label: "Monthly Visits", value: "+340%", color: "text-blue-400" },
                    { label: "New Leads", value: "12/mo", color: "text-green-400" },
                    { label: "Reviews", value: "4.9 ★", color: "text-orange-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/3 rounded-lg p-2.5">
                      <p className={`text-sm font-black ${m.color}`}>{m.value}</p>
                      <p className="text-gray-500 text-xs">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-5 -right-6 card-glow rounded-xl px-4 py-2.5 flex items-center gap-2.5 w-52">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold">New customer found you!</p>
                  <p className="text-gray-400 text-xs">Via Google Search · just now</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-6 card-glow rounded-xl px-4 py-2.5 w-48">
                <p className="text-gray-400 text-xs mb-1">Ranking for</p>
                <p className="text-white text-xs font-semibold">&quot;plumber near me&quot;</p>
                <p className="text-orange-400 text-xs font-bold mt-1">#1 on Google Maps ↑</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust stats */}
        <div className="mt-24 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
          {[
            { value: "150+", label: "Small Businesses Served" },
            { value: "4.9★", label: "Average Client Rating" },
            { value: "6 yrs", label: "In Business" },
            { value: "No lock-in", label: "Month-to-Month Plans" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
