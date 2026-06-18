// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Clients", href: "#results" },
  { label: "About", href: "#about" },
] as const;

// ─── Why Digital Stats ────────────────────────────────────────────────────────
export const WHY_DIGITAL_STATS = [
  {
    value: 80,
    suffix: "%",
    label: "of consumers search online for local businesses every week",
    source: "BrightLocal, 2026",
    accent: "orange" as const,
  },
  {
    value: 27,
    suffix: "%",
    label: "of small businesses still don't have a website - invisible to customers",
    source: "SCORE, 2025",
    accent: "blue" as const,
  },
  {
    value: 76,
    suffix: "%",
    label: "of people who find a local business online visit within 24 hours",
    source: "Google, 2024",
    accent: "orange" as const,
  },
  {
    value: 40,
    suffix: "%",
    label: "faster revenue growth for small businesses with a strong online presence",
    source: "Google & Deloitte, 2024",
    accent: "blue" as const,
  },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "local-seo",
    icon: "map-pin",
    title: "Local SEO",
    description:
      "When someone nearby searches for what you do, you want to be the first name they see - not your competitor down the road. We sort your local presence so that actually happens.",
    tags: ["Google Business Profile", "Maps Ranking", "Local Citations"],
    featured: true,
    accent: "orange" as const,
    metric: { label: "The goal for every client", value: "Top 3" },
  },
  {
    id: "technical-seo",
    icon: "wrench",
    title: "Technical SEO",
    description:
      "There are often technical reasons a site doesn't rank well that have nothing to do with content - speed issues, crawl errors, broken structure. We find them and fix them.",
    tags: ["Site Speed", "Core Web Vitals", "Schema Markup"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Target page speed grade", value: "A+" },
  },
  {
    id: "content",
    icon: "document",
    title: "Content That Converts",
    description:
      "Good content does two things: it helps people find you, and it gives them a reason to get in touch. We write pages optimised for search engines and LLMs, so your business shows up wherever people are looking.",
    tags: ["Service Pages", "Blog & FAQ", "EEAT"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Content pieces per month", value: "4–8" },
  },
  {
    id: "keywords",
    icon: "search",
    title: "Keyword Strategy",
    description:
      "We look at what people in your market are actually typing into Google, find where you're missing out, and build a plan around that.",
    tags: ["Search Intent", "Competitor Gaps", "Opportunity Mapping"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Opportunities identified per consultation", value: "50+" },
  },
  {
    id: "reviews",
    icon: "star",
    title: "Reputation & Reviews",
    description:
      "Most people check reviews before they call anyone. We help you get more of the good ones, respond to the awkward ones, and make sure your reputation is working for you.",
    tags: ["Review Generation", "Response Strategy", "Reputation Mgmt"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Consumers who read reviews first", value: "97%" },
  },
  {
    id: "analytics",
    icon: "chart",
    title: "Clear Monthly Reporting",
    description:
      "Once a month, you get a clear update on what's changed, what we're doing next, and how many people found you through search.",
    tags: ["Monthly Reports", "ROI Tracking", "Clear Metrics"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Reporting frequency", value: "Monthly" },
  },
  {
    id: "graphic-design",
    icon: "palette",
    title: "Professional Graphic Design",
    description:
      "First impressions matter. Whether it's a logo, brand identity, social media assets, or print materials - we create designs that look professional, feel consistent, and make your business stand out.",
    tags: ["Logo & Branding", "Social Media Assets", "Print Materials"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Turnaround on most projects", value: "5–7 days" },
  },
  {
    id: "bespoke-apps",
    icon: "code",
    title: "Bespoke App Development",
    description:
      "Got an idea for an app or a tool your business needs? We build custom web and mobile applications tailored exactly to your requirements. Every project is quoted individually - no off-the-shelf solutions, just something built for you.",
    tags: ["Web Apps", "Mobile Apps", "Custom Quoting"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Every build is", value: "Bespoke" },
  },
] as const;

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Free Digital Presence Analysis",
    description:
      "We do a full analysis of your online visibility - website health, local rankings, competitors, and missed opportunities. No sales pitch. Just the honest truth about where you stand.",
    detail: "Delivered in 48 hours",
    accent: "orange" as const,
  },
  {
    number: "02",
    title: "A Plan Built for Your Business",
    description:
      "We build a strategy around your specific goals, market, and budget - whether you're a candle maker, an app founder, or a growing local firm.",
    detail: "Custom to your goals",
    accent: "blue" as const,
  },
  {
    number: "03",
    title: "We Grow. You Run Your Business.",
    description:
      "We handle everything - rankings, content, reviews - and send a clear monthly update. You focus on serving customers while we grow your visibility.",
    detail: "Month-over-month results",
    accent: "orange" as const,
  },
] as const;

// ─── Clients ──────────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "We pour every candle by hand in our London studio - but reaching the right customers online felt out of reach. One Step Stronger Digital is building our search presence so that people looking for premium home fragrance find Casa Nochi first.",
    name: "Pavel & Milayde",
    role: "Co-Founders, Casa Nochi",
    initials: "CN",
    color: "#1C1917",
    result: "Home Fragrance SEO",
    industry: "Luxury Candles",
  },
  {
    quote:
      "We're launching something completely new in London's nightlife scene. Before we go live, One Step Stronger Digital is laying the SEO foundations to make sure MYSOVA shows up wherever London's nightlife crowd is searching.",
    name: "MYSOVA Team",
    role: "MYSOVA - London Nightlife App",
    initials: "MY",
    color: "#44403C",
    result: "App Launch SEO",
    industry: "Entertainment & Nightlife",
  },
] as const;

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "Free", label: "SEO Analysis" },
  { value: "48hr", label: "Turnaround" },
  { value: "Month-to-Month", label: "Flexible Contracts" },
] as const;

// ─── About ────────────────────────────────────────────────────────────────────
export const VALUES = [
  {
    title: "We're on your side",
    desc: "Big brands can afford to throw money at Google Ads and SEO and still come out ahead. We help the businesses that can't do that compete anyway.",
  },
  {
    title: "We play the long game",
    desc: "Quick wins are nice, but rankings built properly stick around. We focus on work that keeps paying off months down the line.",
  },
  {
    title: "No lock-ins",
    desc: "We don't tie anyone into long contracts. If we're doing good work, you'll stay because you want to - not because you have to.",
  },
] as const;

export const INDUSTRIES = [
  "Restaurants & Cafés",
  "E-commerce & Retail",
  "Apps & Tech Startups",
  "Law Firms",
  "Trades & Contractors",
  "Health & Wellness",
  "Real Estate",
  "Salons & Spas",
  "Home Services",
  "Accountants",
  "Fitness Studios",
  "Luxury & Lifestyle",
] as const;

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  Services: [
    "Local SEO",
    "Technical SEO",
    "Content Marketing",
    "Reputation & Reviews",
    "Keyword Strategy",
    "SEO Reporting",
    "Graphic Design",
    "Bespoke App Development",
  ],
  Company: ["About Us", "Our Mission", "Case Studies", "Blog"],
  Resources: [
    "Free SEO Analysis",
    "Small Business Guide",
    "Local SEO Checklist",
    "FAQ",
  ],
} as const;

export const SOCIAL_LINKS = [
  { name: "Twitter / X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
] as const;
