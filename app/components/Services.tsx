"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />,
    title: "Local SEO",
    description: "Appear at the top of Google Maps and local search results when customers in your neighborhood search for what you offer. Be the obvious choice in your community.",
    tags: ["Google Business", "Maps Ranking", "Local Citations"],
    accent: "orange",
    best: true,
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
    title: "Technical SEO",
    description: "Fix the hidden issues slowing your site down and keeping Google from ranking you. Fast, crawlable, and properly structured - so nothing gets in the way of customers finding you.",
    tags: ["Site Speed", "Core Web Vitals", "Crawl Fixes"],
    accent: "blue",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />,
    title: "Keyword Strategy",
    description: "Find exactly what your future customers are typing into Google, then build a plan to show up for those searches. No guesswork - pure data.",
    tags: ["Search Intent", "Competitor Gaps", "Opportunity Mapping"],
    accent: "orange",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />,
    title: "Content That Converts",
    description: "Words that build trust and rank. We create content that answers the questions your customers are already asking - positioning your business as the local expert.",
    tags: ["Blog & FAQs", "Service Pages", "Local Authority"],
    accent: "blue",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />,
    title: "Reputation & Reviews",
    description: "97% of consumers read online reviews before choosing a local business. We help you earn more 5-star reviews and manage your reputation across every platform.",
    tags: ["Review Generation", "Google Reviews", "Reputation Mgmt"],
    accent: "orange",
  },
  {
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
      </>
    ),
    title: "Plain-English Reporting",
    description: "No confusing dashboards. Every month, you get a simple report showing what improved, how many new customers came from search, and what we're doing next.",
    tags: ["Monthly Reports", "ROI Tracking", "Clear Metrics"],
    accent: "blue",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isOrange = service.accent === "orange";

  return (
    <div
      ref={ref}
      className={`reveal card-glow rounded-2xl p-7 flex flex-col group relative overflow-hidden ${
        service.best ? "border-orange-500/30" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {service.best && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
          isOrange ? "bg-orange-500/15 group-hover:bg-orange-500/25" : "bg-blue-500/15 group-hover:bg-blue-500/25"
        }`}
      >
        <svg
          className={`w-6 h-6 ${isOrange ? "text-orange-400" : "text-blue-400"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
        >
          {service.icon}
        </svg>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              isOrange
                ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
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
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="reveal text-center mb-16">
          <span className="inline-block text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Everything Your Business Needs to{" "}
            <span className="gradient-text">Show Up Online</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From getting found on Google Maps to building long-term organic traffic - we cover every angle of your digital presence, so you don&apos;t have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2">
            Get Your Free SEO Analysis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
