"use client";
import { useEffect, useRef } from "react";
import { HERO_STATS } from "@/app/lib/data";
import Container from "@/app/components/ui/Container";

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ShieldCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      card.style.transform = `translate(${(e.clientX - left - width / 2) * 0.01}px, ${(e.clientY - top - height / 2) * 0.01}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden dot-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-green-400/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Copy ── */}
          <div>
            {/* Trust badge */}
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#6366F1]/20 text-[#4F46E5] text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              UK Digital Agency · Free 48-Hour Audit
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-[4rem] font-black leading-[1.08] tracking-tight mb-6 animate-fade-up delay-100 text-[#1E1B4B]">
              Your Business Deserves to{" "}
              <span className="gradient-text">Be Found First.</span>
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              We help UK small businesses get to the top of Google — with expert SEO, professional design, and bespoke digital solutions. No jargon. No lock-ins. Real results.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold"
              >
                Get Your Free Audit
                <ArrowRight />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold border-2 border-[#6366F1]/25 text-[#4F46E5] hover:bg-[#EEF2FF] hover:border-[#6366F1]/50 transition-all duration-200 cursor-pointer"
              >
                Our Services
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-2.5 animate-fade-up delay-400">
              {[
                { label: "90-day results guarantee" },
                { label: "Free 48-hour audit" },
                { label: "No long-term contracts" },
              ].map((t) => (
                <span
                  key={t.label}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#16A34A] bg-[#F0FDF4] border border-[#22C55E]/25 rounded-full px-3.5 py-1.5"
                >
                  <ShieldCheck />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Dashboard card ── */}
          <div ref={cardRef} className="hidden lg:block animate-float">
            <div className="relative max-w-sm mx-auto">
              {/* Main card */}
              <div className="card-glow rounded-2xl p-7 hover:!transform-none">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#E5E7EB]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center text-white font-black text-xs shadow-lg shadow-indigo-500/30">OS</div>
                  <div>
                    <p className="text-[#1E1B4B] font-semibold text-sm">Digital Presence Report</p>
                    <p className="text-[#9CA3AF] text-xs">Rosa&apos;s Artisan Bakery · Example</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-xs text-[#22C55E] font-semibold bg-[#F0FDF4] px-2 py-1 rounded-full border border-[#22C55E]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />Live
                  </span>
                </div>

                {[
                  { label: "Visibility Score", after: 91, color: "#6366F1" },
                  { label: "Local Rank",       after: 96, color: "#22C55E" },
                  { label: "Review Score",     after: 88, color: "#818CF8" },
                ].map((m) => (
                  <div key={m.label} className="mb-4">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#4B5563] text-xs font-medium">{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.after}%</span>
                    </div>
                    <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${m.after}%`, background: m.color }} />
                    </div>
                  </div>
                ))}

                <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E7EB]">
                  {[
                    { v: "#1",    l: "Maps Rank",   c: "#6366F1" },
                    { v: "+340%", l: "Traffic",      c: "#22C55E" },
                    { v: "4.9★",  l: "Rating",       c: "#818CF8" },
                  ].map((s) => (
                    <div key={s.l} className="bg-[#F8F9FF] rounded-xl p-2.5 text-center border border-[#E5E7EB]">
                      <p className="text-base font-black" style={{ color: s.c }}>{s.v}</p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification — top right */}
              <div className="absolute -top-5 -right-5 card-glow rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 w-52 shadow-xl animate-fade-up delay-500">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[#1E1B4B] text-xs font-semibold leading-tight">New customer found you</p>
                  <p className="text-[#9CA3AF] text-xs">via &quot;bakery near me&quot; · just now</p>
                </div>
              </div>

              {/* Floating ranking tag — bottom left */}
              <div className="absolute -bottom-5 -left-5 card-glow rounded-xl px-3.5 py-2.5 w-44 shadow-xl animate-fade-up delay-600">
                <p className="text-[#9CA3AF] text-xs mb-0.5">Now ranking</p>
                <p className="text-[#1E1B4B] text-xs font-bold">&quot;best bakery london&quot;</p>
                <p className="text-[#6366F1] text-xs font-bold mt-0.5">#1 · Google Maps ↑5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-8 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-500">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-[#9CA3AF] text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8F9FF] to-transparent pointer-events-none" />
    </section>
  );
}
