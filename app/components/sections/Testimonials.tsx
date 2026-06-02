"use client";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/app/lib/data";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import { SectionLabel } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#6366F1]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = (next: number) => {
    setActive(next);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5500);
  };

  useEffect(() => {
    restart(0);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <Section id="results" className="bg-[#F8F9FF]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <SectionLabel>Who We Work With</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
            Businesses We&apos;re{" "}
            <span className="gradient-text">Proud to Back</span>
          </h2>
          <p className="text-[#4B5563] max-w-xl mx-auto">
            From luxury candle makers to app startups — we work with small businesses building something real, and help them get found online.
          </p>
        </RevealOnScroll>

        {/* Featured card */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="card-glow rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-0.5 rounded-full transition-all duration-500" style={{ background: t.color }} />

            <span className="inline-block bg-[#F3F4F6] border border-[#E0E7FF] rounded-full px-3 py-1 text-[#4B5563] text-xs mb-5">
              {t.industry}
            </span>

            <blockquote key={active} className="text-xl md:text-2xl font-medium text-[#1E1B4B] leading-relaxed mb-8 animate-fade-up">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: t.color }}>
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-[#4B5563] text-xs">{t.role}</p>
              </div>
              <div className="ml-3 pl-4 border-l border-gray-700">
                <p className="text-2xl font-black" style={{ color: t.color }}>{t.result}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => restart(i)}
                className={cn("h-1.5 rounded-full transition-all duration-300", i === active ? "w-7 bg-[#6366F1]" : "w-2 bg-gray-700 hover:bg-gray-500")}
              />
            ))}
          </div>
        </div>

        {/* Selector cards */}
        <div className="grid grid-cols-2 max-w-sm mx-auto gap-3">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={i}
              onClick={() => restart(i)}
              className={cn(
                "card-glow rounded-xl p-4 text-left transition-all duration-300",
                i === active && "border-[#6366F1]/40 shadow-lg shadow-orange-500/8"
              )}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2.5 flex-shrink-0" style={{ background: item.color }}>
                {item.initials}
              </div>
              <p className="text-white text-xs font-semibold leading-tight">{item.name.split(" ")[0]}</p>
              <p className="text-[#374151] text-xs mt-0.5">{item.industry}</p>
              <p className="text-xs font-bold mt-1.5" style={{ color: item.color }}>{item.result}</p>
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}
