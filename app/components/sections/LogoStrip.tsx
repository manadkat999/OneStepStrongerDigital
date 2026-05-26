import { LOGO_STRIP_ITEMS } from "@/app/lib/data";
import Container from "@/app/components/ui/Container";

export default function LogoStrip() {
  const doubled = [...LOGO_STRIP_ITEMS, ...LOGO_STRIP_ITEMS];

  return (
    <div className="relative py-10 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <Container className="mb-3 text-center">
        <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase">
          Trusted by local businesses across the US
        </p>
      </Container>

      <div className="flex animate-marquee gap-5 w-max">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white/4 border border-white/7 rounded-full px-4 py-2 flex-shrink-0 hover:border-orange-500/25 transition-colors duration-300"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500/60 to-orange-600/40 flex-shrink-0" />
            <span className="text-gray-300 text-sm font-medium whitespace-nowrap">{item.name}</span>
            <span className="text-gray-600 text-xs whitespace-nowrap hidden sm:block">· {item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
