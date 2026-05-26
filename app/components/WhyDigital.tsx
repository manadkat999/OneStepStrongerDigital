"use client";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "80%",
    label: "of consumers search online for local businesses every single week",
    source: "BrightLocal, 2026",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    ),
    color: "orange",
  },
  {
    value: "27%",
    label: "of small businesses still don't have a website — losing customers daily",
    source: "SCORE, 2025",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
    ),
    color: "blue",
  },
  {
    value: "76%",
    label: "of people who search for a local business visit it within 24 hours",
    source: "Google, 2024",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    ),
    color: "orange",
  },
  {
    value: "40%",
    label: "faster revenue growth for small businesses with a strong online presence",
    source: "Google & Deloitte, 2024",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    ),
    color: "blue",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isOrange = stat.color === "orange";

  return (
    <div
      ref={ref}
      className="reveal card-glow rounded-2xl p-8 flex flex-col gap-5"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between">
        <div
          className={`text-5xl font-black tracking-tight ${
            isOrange ? "text-orange-500" : "text-blue-400"
          }`}
        >
          {stat.value}
        </div>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isOrange ? "bg-orange-500/15" : "bg-blue-500/15"
          }`}
        >
          <svg
            className={`w-5 h-5 ${isOrange ? "text-orange-400" : "text-blue-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            {stat.icon}
          </svg>
        </div>
      </div>
      <p className="text-white font-medium leading-snug">{stat.label}</p>
      <p className="text-gray-500 text-xs mt-auto">Source: {stat.source}</p>
    </div>
  );
}

export default function WhyDigital() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#080808]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="inline-block text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Why It Matters
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Your Customers Are Searching.{" "}
            <span className="gradient-text">Are You Showing Up?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A strong online presence isn&apos;t a luxury for small businesses — it&apos;s the difference between a full calendar and an empty one. Here&apos;s what the data says.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <StatCard key={s.value} stat={s} index={i} />
          ))}
        </div>

        {/* Pull quote */}
        <div className="reveal max-w-3xl mx-auto text-center card-glow rounded-2xl p-10">
          <div className="text-5xl text-orange-500/30 font-serif leading-none mb-4">&ldquo;</div>
          <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
            Businesses with websites are{" "}
            <span className="text-orange-400 font-bold">2.8× more likely to grow revenues</span>{" "}
            than those without — and small businesses with strong online presence grow{" "}
            <span className="text-blue-400 font-bold">40% faster</span>.
          </p>
          <p className="text-gray-500 text-sm">Google & Deloitte Connected Small Businesses Report</p>
        </div>
      </div>
    </section>
  );
}
