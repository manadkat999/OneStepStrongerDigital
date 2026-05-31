import { VALUES, INDUSTRIES } from "@/app/lib/data";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Card from "@/app/components/ui/Card";
import { SectionLabel } from "@/app/components/ui/Badge";

const Check = () => (
  <svg className="w-4 h-4 text-[#6366F1] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const aboveStats = [
  { value: "2025", label: "Founded" },
  { value: "UK",   label: "Based" },
  { value: "48hr", label: "Audit Delivery" },
  { value: "90-Day", label: "Results Guarantee" },
];

export default function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-[#F8F9FF] via-[#F3F4F6] to-[#EEF2FF]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF2FF] blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            A small team that backs{" "}
            <span className="gradient-text">small businesses.</span>
          </h2>
          <p className="text-[#1E1B4B] text-xl max-w-3xl mx-auto leading-relaxed">
            Between us we&apos;ve got backgrounds in web development, copywriting, design, and digital marketing. We&apos;re not a big agency. We came together because we kept seeing the same thing — decent, hard-working businesses getting buried online while their flashier competitors hoovered up all the traffic.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Values */}
          <RevealOnScroll>
            <h3 className="text-2xl font-black text-[#1E1B4B] mb-7">What We Stand For</h3>
            <div className="space-y-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6366F1]/12 border border-[#6366F1]/20 flex items-center justify-center flex-shrink-0">
                    <Check />
                  </div>
                  <div>
                    <p className="font-bold text-[#1E1B4B] text-sm mb-0.5">{v.title}</p>
                    <p className="text-[#4B5563] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div className="mt-10">
              <p className="text-[#9CA3AF] text-xs font-semibold tracking-widest uppercase mb-3">Industries we serve</p>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((ind) => (
                  <span key={ind} className="text-xs px-3 py-1.5 rounded-full bg-[#EEF2FF] border border-[#E5E7EB] text-[#1E1B4B] hover:border-[#6366F1]/25 hover:text-[#6366F1] transition-colors cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Story + stats */}
          <RevealOnScroll delay={150}>
            <Card className="mb-5">
              <h3 className="text-lg font-black text-[#1E1B4B] mb-3">Our Story</h3>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-3">
                We&apos;re a group of people who met through different corners of the industry and realised we were all frustrated by the same thing. The businesses that actually put in the work — the ones worth finding — kept losing out to whoever had the bigger budget.
              </p>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                So we started One Step Stronger Digital. Not to be the biggest agency, but to be a useful one. We take on clients we believe in, do the work properly, and tell you exactly what we&apos;re doing without the usual smoke and mirrors.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4 mb-5">
              {aboveStats.map((s) => (
                <div key={s.label} className="card-glow rounded-xl p-5 text-center">
                  <p className="text-2xl font-black gradient-text mb-0.5">{s.value}</p>
                  <p className="text-[#4B5563] text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <Card accent="orange" padding="md">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1E1B4B] text-sm mb-1">Our 90-Day Promise</p>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
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
