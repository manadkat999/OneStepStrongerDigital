import { WHY_DIGITAL_STATS } from "@/app/lib/data";
import AnimatedNumber from "@/app/components/ui/AnimatedNumber";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Card from "@/app/components/ui/Card";
import { SectionLabel } from "@/app/components/ui/Badge";

export default function WhyDigital() {
  return (
    <Section id="why-digital" className="bg-gradient-to-b from-[#F8F9FF] via-[#F3F4F6] to-[#F8F9FF]">
      <Container>
        <RevealOnScroll className="text-center mb-16">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
            Your Customers Are Searching.{" "}
            <span className="gradient-text">Are You Showing Up?</span>
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-lg">
            A strong online presence isn&apos;t optional for small businesses anymore — it&apos;s the difference between a full calendar and an empty one.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {WHY_DIGITAL_STATS.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 90}>
              <Card className="h-full flex flex-col gap-4 group">
                <AnimatedNumber
                  to={s.value}
                  suffix={s.suffix}
                  className={`text-5xl font-black tracking-tight ${s.accent === "orange" ? "text-[#6366F1]" : "text-[#1D4ED8]"}`}
                />
                <p className="text-white text-sm font-medium leading-snug flex-1">{s.label}</p>
                <p className="text-[#374151] text-xs">Source: {s.source}</p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        {/* Pull quote */}
        <RevealOnScroll>
          <div className="relative card-glow rounded-2xl p-10 md:p-14 text-center overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#22C55E]/4" />
            <div className="relative z-10">
              <span className="text-6xl text-[#6366F1]/20 font-serif leading-none">&ldquo;</span>
              <p className="text-xl md:text-2xl font-medium text-[#1E1B4B] leading-relaxed -mt-4 mb-5">
                Businesses with websites are{" "}
                <span className="text-[#6366F1] font-bold">2.8× more likely to grow revenues</span>{" "}
                than those without — and small businesses with a strong online presence grow{" "}
                <span className="text-[#1D4ED8] font-bold">40% faster</span>.
              </p>
              <p className="text-[#374151] text-sm">Google & Deloitte Connected Small Businesses Report</p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
