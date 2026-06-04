"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Free Digital Presence Consultation",
    description:
      "We do a complete analysis of your online visibility — website health, local search rankings, competitors, and missed opportunities. No jargon. No sales pressure. Just an honest picture of where you stand.",
    detail: "Delivered in 48 hours",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    ),
  },
  {
    number: "02",
    title: "A Plan Built for Your Business",
    description:
      "No cookie-cutter packages. We build a strategy around your specific goals, your market, and your customers — whether you're a solo plumber, a boutique café, or a growing law firm.",
    detail: "Custom to your goals",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    ),
  },
  {
    number: "03",
    title: "We Grow. You Run Your Business.",
    description:
      "We handle everything — rankings, content, local listings, backlinks — and report back in plain English. You focus on serving your customers while we grow your visibility month over month.",
    detail: "Month-over-month results",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    ),
  },
];

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = [titleRef.current, ...stepRefs.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-20">
          <span className="inline-block text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Simple Process.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We made the process as simple as possible — because you have a business to run.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-orange-500/30 via-blue-500/30 to-orange-500/30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[i] = el; }}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number bubble */}
              <div className="relative mb-8">
                <div
                  className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center border relative z-10 transition-all duration-300 group-hover:scale-105 ${
                    i === 1
                      ? "bg-orange-500/15 border-orange-500/40 shadow-lg shadow-orange-500/15"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <svg
                    className={`w-8 h-8 mb-1 ${i === 1 ? "text-orange-400" : "text-gray-400"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    {step.icon}
                  </svg>
                  <span className={`text-xs font-black tracking-widest ${i === 1 ? "text-orange-500" : "text-gray-500"}`}>
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{step.description}</p>

              <div
                className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  i === 1
                    ? "bg-orange-500/15 text-orange-400 border border-orange-500/25"
                    : "bg-white/5 text-gray-400 border border-white/10"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
            Start with Your Free Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <p className="mt-3 text-gray-600 text-sm">Free. No commitment. Results in 48 hours.</p>
        </div>
      </div>
    </section>
  );
}
