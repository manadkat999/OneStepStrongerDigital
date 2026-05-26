"use client";
import { useEffect, useRef } from "react";
import { HERO_STATS } from "@/app/lib/data";
import Button from "@/app/components/ui/Button";
import Badge from "@/app/components/ui/Badge";
import Container from "@/app/components/ui/Container";

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const avatars = [
  { i: "RL", c: "#f97316" }, { i: "MT", c: "#3b82f6" }, { i: "SK", c: "#10b981" },
  { i: "JW", c: "#8b5cf6" }, { i: "PC", c: "#f97316" },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      card.style.transform = `translate(${(e.clientX - left - width / 2) * 0.012}px, ${(e.clientY - top - height / 2) * 0.012}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden grid-bg noise">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/7 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/8 blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Copy ── */}
          <div>
            <div className="animate-fade-up mb-7">
              <Badge dot variant="orange">
                Helping 150+ small businesses get found online
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-[4.25rem] font-black leading-[1.04] tracking-tight mb-6 animate-fade-up delay-100">
              Every Great{" "}
              <span className="gradient-text">Small Business</span>
              <br className="hidden sm:block" /> Deserves to Be Found.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              You&apos;ve built something worth finding. We make sure the right customers — the ones actively searching in your community — discover you first, every time.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <Button variant="primary" size="lg" href="#contact" icon={<ArrowRight />}>
                Get Free Presence Audit
              </Button>
              <Button variant="secondary" size="lg" href="#services">
                See How We Help
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-11 flex items-center gap-4 animate-fade-up delay-400">
              <div className="flex -space-x-2.5">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#080808] flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: a.c }}
                  >
                    {a.i}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-orange-400 text-sm">★★★★★</span>
                <p className="text-gray-500 text-xs mt-0.5">Trusted by restaurants, contractors, clinics & more</p>
              </div>
            </div>
          </div>

          {/* ── Dashboard card ── */}
          <div ref={cardRef} className="hidden lg:block animate-float">
            <div className="relative max-w-sm mx-auto">
              {/* Main card */}
              <div className="card-glow rounded-2xl p-7 hover:!transform-none">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/6">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-orange-500/30">OS</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Digital Presence Report</p>
                    <p className="text-gray-500 text-xs">Rosa&apos;s Artisan Bakery · Live</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-xs text-green-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Live
                  </span>
                </div>

                {[
                  { label: "Visibility Score", before: 28, after: 91, color: "#f97316" },
                  { label: "Local Rank",       before: 15, after: 96, color: "#3b82f6" },
                  { label: "Review Score",     before: 52, after: 88, color: "#10b981" },
                ].map((m) => (
                  <div key={m.label} className="mb-4">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-400 text-xs">{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.after}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${m.after}%`, background: m.color }} />
                    </div>
                  </div>
                ))}

                <div className="mt-5 grid grid-cols-3 gap-2.5 pt-4 border-t border-white/6">
                  {[
                    { v: "#1",    l: "Maps Rank",   c: "text-orange-400" },
                    { v: "+340%", l: "Traffic",      c: "text-blue-400"   },
                    { v: "4.9★",  l: "Rating",       c: "text-green-400"  },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/3 rounded-xl p-2.5 text-center">
                      <p className={`text-base font-black ${s.c}`}>{s.v}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-5 card-glow rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 w-52 shadow-xl animate-fade-up delay-500">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">New customer found you</p>
                  <p className="text-gray-400 text-xs">via &quot;bakery near me&quot; · just now</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-5 card-glow rounded-xl px-3.5 py-2.5 w-44 shadow-xl animate-fade-up delay-600">
                <p className="text-gray-500 text-xs mb-0.5">Now ranking</p>
                <p className="text-white text-xs font-bold">&quot;best bakery chicago&quot;</p>
                <p className="text-orange-400 text-xs font-bold mt-0.5">#1 · Google Maps ↑5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-500">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
