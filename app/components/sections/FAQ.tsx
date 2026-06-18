"use client";
import { useState } from "react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import { SectionLabel } from "@/app/components/ui/Badge";

const FAQS = [
  {
    q: "How long does SEO take to show results?",
    a: "Most clients start to see meaningful improvements within 3–6 months. Local SEO can move faster — sometimes within 8–12 weeks. We'll be honest with you about what to expect for your specific market from the very first consultation.",
  },
  {
    q: "Do you lock clients into long contracts?",
    a: "No. After any initial commitment period (our founding offer requires 6 months), all plans move to month-to-month. You stay because the work delivers — not because you're stuck.",
  },
  {
    q: "How does the free consultation work?",
    a: "We do a full analysis of your online presence — local rankings, website health, competitor gaps, and missed opportunities. You get a clear report within 48 hours. No sales pressure, no obligation.",
  },
  {
    q: "Do you work with any type of business?",
    a: "We specialise in UK small businesses across a wide range of industries — from trades and restaurants to law firms and tech startups. If you serve customers in a specific area or niche, we can help you get found by them.",
  },
  {
    q: "What does your monthly reporting look like?",
    a: "Once a month you receive a clear summary of what's changed, what we did, and what's coming next — including keyword rankings, traffic changes, and notable wins. No dashboards to log into, no complicated reports to decode.",
  },
  {
    q: "Can you guarantee specific rankings?",
    a: "No honest agency can — search engines are outside anyone's full control. What we do promise is transparent, ethical work focused on long-term visibility. If we don't show measurable improvement in your online presence within 90 days, you don't pay for month three.",
  },
  {
    q: "Do I need a website before you can help with SEO?",
    a: "Not necessarily. We can work with an existing site or build you one from scratch. If your current site is holding your SEO back, we'll tell you — and we can fix it.",
  },
];

const PlusIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#1C1917]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-[#F5F5F4]">
      <Container size="md">
        <RevealOnScroll className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight text-[#1C1917]">
            Questions we get{" "}
            <span className="gradient-text italic font-normal">all the time.</span>
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto">
            Straight answers to the things most small business owners want to know before getting started.
          </p>
        </RevealOnScroll>

        <div className="space-y-3 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <div className="card-glow rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-[#1C1917] text-base leading-snug">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F4] border border-[#1C1917]/20 flex items-center justify-center transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    <PlusIcon />
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[#57534E] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
