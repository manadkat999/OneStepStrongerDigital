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
    sitemap: "https://onestepstrongermedia.com/sitemap.xml",
    host: "https://onestepstrongermedia.com",
  };
}
