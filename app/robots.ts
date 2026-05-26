import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://onestepstronger.co.uk/sitemap.xml",
    host: "https://onestepstronger.co.uk",
  };
}
