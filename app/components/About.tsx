"use client";
import { useEffect, useRef } from "react";

const values = [
  {
    title: "We Root for the Underdog",
    desc: "Big brands have massive marketing budgets. We level the playing field for small businesses with expert SEO that punches above its weight.",
  },
  {
    title: "No Jargon. Ever.",
    desc: "You'll always know exactly what we're doing and why. If we can't explain it in plain English, we won't do it.",
  },
  {
    title: "Long-Term Thinking",
    desc: "We build real, lasting visibility — not quick tricks that disappear. Your SEO compounds every month, like interest in a savings account.",
  },
  {
    title: "Your Success is Our Success",
    desc: "Month-to-month contracts only. We keep your business because we earn it — not because you're locked in.",
  },
];

const industries = [
  "Restaurants & Cafés", "Plumbers & Electricians", "Dental & Medical",
  "Law Firms", "Auto Repair", "Retail Boutiques",
  "Real Estate", "Salons & Spas", "Contractors",
];

export default function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current, missionRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#080808]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Mission statement */}
        <div ref={missionRef} className="reveal text-center mb-20">
          <span className="inline-block text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Built to Champion{" "}
            <span className="gradient-text">Small Business</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We started One Step Stronger Media because we saw too many incredible small businesses being invisible online — while big chains with mediocre products dominated search results. That&apos;s not right. We&apos;re here to fix it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: values */}
          <div ref={leftRef} className="reveal animate-fade-in-left">
            <h3 className="text-2xl font-black mb-8 text-white">What We Stand For</h3>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div className="mt-10">
              <p className="text-gray-400 text-sm mb-4">Industries we serve:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-orange-500/30 hover:text-orange-400 transition-colors duration-200"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: team + story */}
          <div ref={rightRef} className="reveal animate-fade-in-right space-y-6">
            {/* Story card */}
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-xl font-black mb-4 text-white">Our Story</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Founded in Chicago in 2019 by a team of SEOs who spent years at enterprise agencies watching small business clients get deprioritised. They had the smallest budgets but needed the most help.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                So we built the agency we always wished existed — one that treats every small business like its most important client. Today we work exclusively with small and growing businesses across the United States.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2019", label: "Founded in Chicago" },
                { value: "20+", label: "Dedicated specialists" },
                { value: "150+", label: "Small businesses served" },
                { value: "9+", label: "Industries covered" },
              ].map((s) => (
                <div key={s.label} className="card-glow rounded-xl p-5 text-center">
                  <p className="text-2xl font-black gradient-text mb-1">{s.value}</p>
                  <p className="text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div className="card-glow rounded-2xl p-6 border-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Our Promise</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    If we don&apos;t show measurable improvement in your online visibility within 90 days, you don&apos;t pay for month three. Simple as that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
