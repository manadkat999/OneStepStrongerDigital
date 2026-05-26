"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Before One Step Stronger, my bakery was invisible online. Within 4 months we were the top result for 'bakery near me' and I had to hire two more staff to keep up with new orders. I wish I'd done this years ago.",
    name: "Rosa Lombardi",
    role: "Owner, Rosa's Artisan Bakery",
    initials: "RL",
    color: "#f97316",
    result: "+180% Walk-ins",
    type: "Bakery & Restaurant",
  },
  {
    quote: "As a plumber, I was getting all my work from word of mouth. One Step Stronger got us ranked #1 on Google Maps for three cities. Now 60% of new jobs come through Google. It completely changed our business.",
    name: "Marcus Thompson",
    role: "Owner, Metro Plumbing Co.",
    initials: "MT",
    color: "#3b82f6",
    result: "#1 Google Maps",
    type: "Home Services",
  },
  {
    quote: "My dental practice was struggling to attract new patients post-COVID. The team built our online presence from scratch — reviews, local SEO, content — and we're fully booked three weeks out now.",
    name: "Dr. Sunita Kapoor",
    role: "Principal Dentist, Bright Smiles Dental",
    initials: "SK",
    color: "#10b981",
    result: "Fully Booked",
    type: "Healthcare",
  },
  {
    quote: "I was skeptical about SEO — thought it was just for big companies. They showed me how many people search for auto repair in my town every month and were never finding me. That changed everything.",
    name: "James Whitfield",
    role: "Owner, JW Auto & Tire",
    initials: "JW",
    color: "#8b5cf6",
    result: "3x More Calls",
    type: "Auto Services",
  },
  {
    quote: "The reporting is what sold me. Every month I get a simple breakdown — no tech jargon — showing exactly how many people found my law firm through Google. The ROI is crystal clear.",
    name: "Patricia Chen",
    role: "Principal Attorney, Chen Law Group",
    initials: "PC",
    color: "#f97316",
    result: "4.8x ROI",
    type: "Professional Services",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const handleDot = (i: number) => {
    setActive(i);
    startInterval();
  };

  const t = testimonials[active];

  return (
    <section id="results" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="inline-block text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Real Businesses. Real Results.
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Small Businesses We&apos;ve{" "}
            <span className="gradient-text">Helped Grow</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From corner bakeries to multi-location service businesses — here&apos;s what happens when great local businesses get found online.
          </p>
        </div>

        {/* Featured */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="card-glow rounded-3xl p-10 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full transition-all duration-500"
              style={{ background: t.color }}
            />

            {/* Business type chip */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-5">
              <span className="text-gray-400 text-xs">{t.type}</span>
            </div>

            <div className="flex justify-center">
              <Stars />
            </div>

            <blockquote key={active} className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8 animate-fade-in-up">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
              <div className="ml-4 pl-4 border-l border-gray-700">
                <p className="text-2xl font-black" style={{ color: t.color }}>{t.result}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-orange-500" : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`card-glow rounded-xl p-4 text-left transition-all duration-300 ${
                i === active ? "border-orange-500/50 shadow-orange-500/10 shadow-lg" : ""
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <p className="text-white text-xs font-bold leading-tight">{t.name.split(" ")[0]}</p>
              <p className="text-gray-500 text-xs">{t.type}</p>
              <p className="text-xs font-bold mt-1" style={{ color: t.color }}>{t.result}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
