import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const BASE_URL = "https://onestepstronger.co.uk";
const BUSINESS_NAME = "One Step Stronger Digital";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // e.g. G-XXXXXXXXXX

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BUSINESS_NAME} | SEO Agency for Small Businesses`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "One Step Stronger Digital helps UK small businesses get found on Google. Expert local SEO, technical SEO, and content marketing that turns searches into real customers. Free 48-hour audit.",
  keywords: [
    "One Step Stronger Digital",
    "SEO agency UK",
    "local SEO for small business UK",
    "small business SEO",
    "digital marketing agency UK",
    "Google rankings UK",
    "local search optimisation UK",
    "affordable SEO UK",
    "SEO for small business",
    "small business online presence UK",
    "technical SEO agency",
    "content marketing UK",
    "Google Business Profile optimisation",
  ],
  authors: [{ name: BUSINESS_NAME, url: BASE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: BASE_URL,
  },
  // Google Search Console verification — add NEXT_PUBLIC_GSC_VERIFICATION to Vercel env vars
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | SEO Agency for Small Businesses`,
    description:
      "One Step Stronger Digital helps UK small businesses get found on Google. Expert local SEO, technical SEO, and content marketing that turns searches into real customers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — SEO & Digital Presence for Small Businesses`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onestepstronger",
    creator: "@onestepstronger",
    title: `${BUSINESS_NAME} | SEO Agency for Small Businesses`,
    description:
      "One Step Stronger Digital helps UK small businesses get found on Google. Expert SEO and local search optimisation that drives real customers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS_NAME,
      alternateName: "One Step Stronger Digital",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      description:
        "UK SEO agency helping small businesses get found on Google through local SEO, technical SEO, content marketing, and plain-English reporting.",
      email: "hello@onestepstronger.co.uk",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      sameAs: [
        "https://twitter.com/onestepstronger",
        "https://www.linkedin.com/company/onestepstrongerdigital",
        "https://www.instagram.com/onestepstrongerdigital",
      ],
      foundingDate: "2025",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: BUSINESS_NAME,
      description: "SEO agency for small businesses in the UK",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: BUSINESS_NAME,
      url: BASE_URL,
      image: `${BASE_URL}/og-image.png`,
      priceRange: "££",
      serviceType: "SEO Agency",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      description:
        "Expert SEO services for UK small businesses: local SEO, technical SEO, content marketing, link building, and plain-English reporting.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keyword Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reputation Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Analytics & Reporting" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does SEO take to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most clients see measurable improvements in online visibility within 90 days. Significant ranking gains typically occur within 3–6 months depending on competition and starting point.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we work exclusively with small and growing businesses. Every client gets the same dedicated attention regardless of budget size.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the free SEO audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our free 48-hour audit covers technical SEO health, local search visibility, keyword opportunities, competitor analysis, and a custom growth roadmap — with no obligation.",
          },
        },
        {
          "@type": "Question",
          name: "Are there long-term contracts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We operate on a month-to-month basis. We also offer a 90-day results guarantee — if you don't see measurable improvement, you don't pay for month three.",
          },
        },
        {
          "@type": "Question",
          name: "How much does SEO cost for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our plans start at £495/month for a Starter package and go up to £995/month for our full-service Growth plan. We also offer a free 48-hour audit with no commitment.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#080808] text-white antialiased">
        {children}

        {/* Google Analytics — add NEXT_PUBLIC_GA_ID to Vercel env vars */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
