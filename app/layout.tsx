import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const BASE_URL = "https://onestepstrongermedia.com";

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "One Step Stronger Media | SEO for Small Businesses",
    template: "%s | One Step Stronger Media",
  },
  description:
    "We help small businesses build a powerful online presence. Expert SEO, local search optimization, and content strategy that turns searches into real customers.",
  keywords: [
    "SEO for small business",
    "local SEO agency",
    "small business digital marketing",
    "online presence for small business",
    "Google rankings small business",
    "local search optimization",
    "affordable SEO",
    "small business website traffic",
  ],
  authors: [{ name: "One Step Stronger Media", url: BASE_URL }],
  creator: "One Step Stronger Media",
  publisher: "One Step Stronger Media",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "One Step Stronger Media",
    title: "One Step Stronger Media | SEO for Small Businesses",
    description:
      "We help small businesses build a powerful online presence. Expert SEO, local search optimization, and content strategy that turns searches into real customers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "One Step Stronger Media — SEO & Digital Presence for Small Businesses",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onestepstronger",
    creator: "@onestepstronger",
    title: "One Step Stronger Media | SEO for Small Businesses",
    description:
      "We help small businesses build a powerful online presence. Expert SEO and local search optimization that drives real customers.",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
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
      name: "One Step Stronger Media",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "SEO and digital marketing agency dedicated to helping small businesses build a powerful, lasting online presence.",
      email: "hello@onestepstrongermedia.com",
      telephone: "+13125550100",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/onestepstronger",
        "https://www.linkedin.com/company/onestepstrongermedia",
        "https://www.instagram.com/onestepstrongermedia",
      ],
      foundingDate: "2019",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "One Step Stronger Media",
      description: "SEO for small businesses",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "One Step Stronger Media",
      url: BASE_URL,
      image: `${BASE_URL}/og-image.png`,
      priceRange: "$$",
      serviceType: "SEO Agency",
      areaServed: { "@type": "Country", name: "United States" },
      description:
        "Expert SEO services for small businesses: technical SEO, local search, content marketing, link building, and analytics.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Link Building" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keyword Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Analytics" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  );
}
