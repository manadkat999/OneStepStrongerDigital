export default function MarqueeStrip() {
  const items = [
    "🏆 90-Day Results Guarantee",
    "📈 Local SEO Specialists",
    "🎨 Professional Graphic Design",
    "💻 Bespoke App Development",
    "🔍 Technical SEO",
    "📊 Plain-English Reporting",
    "🤝 No Long-Term Contracts",
    "⚡ Free 48-Hour Consultation",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#1E1B4B] py-4 border-y border-[#6366F1]/20">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-white/80 text-sm font-medium whitespace-nowrap px-8"
          >
            {item}
            <span className="text-[#6366F1] ml-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
