import { VALUES, INDUSTRIES } from "@/app/lib/data";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Card from "@/app/components/ui/Card";
import { SectionLabel } from "@/app/components/ui/Badge";

const Check = () => (
  <svg className="w-4 h-4 text-[#1C1917] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const aboveStats = [
  { value: "2025", label: "Founded" },
  { value: "UK",   label: "Based" },
  { value: "48hr", label: "Consultation Delivery" },
  { value: "90-Day", label: "Results Guarantee" },
];

const capabilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    title: "SEO & Digital Marketing",
    desc: "Getting your business found on Google — local SEO, technical SEO, content, link building, and plain-English reporting.",
    color: "#1C1917",
    bg: "#F5F5F4",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Professional Graphic Design",
    desc: "Logos, brand identities, social media assets, print materials and more — designs that look sharp, feel consistent, and make people trust you on sight.",
    color: "#44403C",
    bg: "#EFEEEC",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Bespoke App Development",
    desc: "Got an idea for a web or mobile app? We build it from scratch, tailored exactly to what your business needs. Every project is quoted individually — no templates, no shortcuts.",
    color: "#78716C",
    bg: "#F5F5F4",
  },
];

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-[#F5F5F4] via-[#EFEEEC] to-[#F5F5F4]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F5F5F4] blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            A small team that backs{" "}
            <span className="gradient-text">small businesses.</span>
          </h2>
          <p className="text-[#1C1917] text-xl max-w-3xl mx-auto leading-relaxed">
            Between us we&apos;ve got backgrounds in web development, graphic design, copywriting, app development, and digital marketing. We&apos;re not a big agency — and that&apos;s the point. We came together because we kept seeing the same thing: decent, hard-working businesses getting buried online while their flashier competitors hoovered up all the traffic.
          </p>
        </RevealOnScroll>

        {/* Capabilities strip */}
        <RevealOnScroll className="mb-16">
          <div className="grid md:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="card-glow rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.bg, color: c.color }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-light text-[#1C1917] text-base mb-1.5">{c.title}</h3>
                  <p className="text-[#57534E] text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-[#E7E5E4]">
                  <a href="#contact" className="text-xs font-semibold transition-colors" style={{ color: c.color }}>
                    Get a quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Values */}
          <RevealOnScroll>
            <h3 className="text-2xl font-light text-[#1C1917] mb-7">What We Stand For</h3>
            <div className="space-y-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1C1917]/12 border border-[#1C1917]/20 flex items-center justify-center flex-shrink-0">
                    <Check />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C1917] text-sm mb-0.5">{v.title}</p>
                    <p className="text-[#57534E] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div className="mt-10">
              <p className="text-[#57534E] text-xs font-semibold tracking-widest uppercase mb-3">Industries we serve</p>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((ind) => (
                  <span key={ind} className="text-xs px-3 py-1.5 rounded-full bg-[#F5F5F4] border border-[#E7E5E4] text-[#1C1917] hover:border-[#1C1917]/25 hover:text-[#1C1917] transition-colors cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Story + stats */}
          <RevealOnScroll delay={150}>
            <Card className="mb-5">
              <h3 className="text-lg font-light text-[#1C1917] mb-3">Our Story</h3>
              <p className="text-[#57534E] text-sm leading-relaxed mb-3">
                We&apos;re a group of people who met through different corners of the industry and realised we were all frustrated by the same thing. The businesses that actually put in the work — the ones worth finding — kept losing out to whoever had the bigger budget.
              </p>
              <p className="text-[#57534E] text-sm leading-relaxed mb-3">
                So we started One Step Stronger Digital. Not to be the biggest agency, but to be a useful one. We do SEO, graphic design, and bespoke app development — all under one roof, all done properly.
              </p>
              <p className="text-[#57534E] text-sm leading-relaxed">
                We take on clients we believe in, do the work without shortcuts, and tell you exactly what we&apos;re doing without the usual smoke and mirrors.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4 mb-5">
              {aboveStats.map((s) => (
                <div key={s.label} className="card-glow rounded-xl p-5 text-center">
                  <p className="text-2xl font-light gradient-text mb-0.5">{s.value}</p>
                  <p className="text-[#57534E] text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <Card accent="orange" padding="md">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-[#F5F5F4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1C1917]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1C1917] text-sm mb-1">Our 90-Day Promise</p>
                  <p className="text-[#57534E] text-sm leading-relaxed">
                    If we don&apos;t show measurable improvement in your online visibility within 90 days, you don&apos;t pay for month three. Simple as that.
                  </p>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
