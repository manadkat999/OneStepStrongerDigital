import React from "react";
import { SERVICES } from "@/app/lib/data";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { SectionLabel } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

const Icons: Record<string, React.ReactNode> = {
  "map-pin": (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  wrench: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  document: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  search: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  link: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  ),
  star: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  ),
  chart: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  palette: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  code: (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
};

// Bento layout: 3-column grid on lg
// Row 1: [Featured Local SEO - 2 cols] [Tech SEO - 1 col]
// Row 2: [Content - 1 col] [Keywords - 1 col] [Links - 1 col]
// Row 3: [Analytics - 2 cols] [Reviews - 1 col]

const bentoLayout: Record<string, string> = {
  "local-seo":      "lg:col-span-2",
  "technical-seo":  "lg:col-span-1",
  "content":        "lg:col-span-1",
  "keywords":       "lg:col-span-1",
  "reviews":        "lg:col-span-1",
  "analytics":      "lg:col-span-2",
  "graphic-design": "lg:col-span-1",
  "bespoke-apps":   "lg:col-span-3",
};

export default function ServicesBento() {
  return (
    <Section id="services" className="bg-[#EFEEEC]">
      <Container>
        <RevealOnScroll className="text-center mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight text-[#1C1917]">
            Everything Your Business Needs to{" "}
            <span className="gradient-text">Show Up Online</span>
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto">
            From Google Maps to long-term organic traffic - we cover every angle of your digital presence.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const isIndigo = service.accent === "orange"; // map old "orange" to indigo
            const isFeatured = service.featured;

            return (
              <RevealOnScroll
                key={service.id}
                delay={i * 60}
                className={cn(bentoLayout[service.id])}
              >
                <div
                  className={cn(
                    "card-glow rounded-2xl flex flex-col h-full group transition-all duration-300",
                    isFeatured ? "p-8 lg:p-10" : "p-7",
                    isFeatured && "border-[#1C1917]/25 ring-1 ring-[#1C1917]/10"
                  )}
                >
                  {isFeatured && (
                    <span className="self-start mb-4 text-[10px] uppercase tracking-[0.15em] bg-[#1C1917] text-white font-medium px-3 py-1 rounded-full shadow-sm shadow-stone-900/20">
                      Most Popular
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={cn(
                      "rounded-xl flex items-center justify-center mb-5 flex-shrink-0 transition-colors duration-300",
                      isFeatured ? "w-14 h-14" : "w-11 h-11",
                      isIndigo
                        ? "bg-[#F5F5F4] group-hover:bg-[#E7E5E4]"
                        : "bg-[#F5F5F4] group-hover:bg-[#E7E5E4]"
                    )}
                  >
                    <div className={cn(isFeatured ? "w-7 h-7" : "w-5 h-5", isIndigo ? "text-[#1C1917]" : "text-[#1C1917]")}>
                      {Icons[service.icon]}
                    </div>
                  </div>

                  <h3 className={cn("font-light text-[#1C1917] mb-2", isFeatured ? "text-2xl" : "text-lg")}>
                    {service.title}
                  </h3>
                  <p className={cn("text-[#57534E] leading-relaxed flex-1", isFeatured ? "text-base" : "text-sm")}>
                    {service.description}
                  </p>

                  {/* Metric callout */}
                  <div className={cn(
                    "mt-5 flex items-center gap-2",
                    isFeatured ? "p-4 rounded-xl" : "pt-4 border-t border-[#E7E5E4]",
                    isFeatured && (isIndigo ? "bg-[#F5F5F4]" : "bg-[#F5F5F4]")
                  )}>
                    <span className={cn("font-light", isFeatured ? "text-2xl" : "text-xl", isIndigo ? "text-[#1C1917]" : "text-[#1C1917]")}>
                      {service.metric.value}
                    </span>
                    <span className="text-[#57534E] text-xs font-medium">{service.metric.label}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "text-xs px-2.5 py-1 rounded-full border font-medium",
                          isIndigo
                            ? "bg-[#F5F5F4] text-[#0C0A09] border-[#1C1917]/20"
                            : "bg-[#F5F5F4] text-[#44403C] border-[#1C1917]/25"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            Get Your Free SEO Analysis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
