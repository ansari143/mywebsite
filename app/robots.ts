import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nishaglobaleducation.com/sitemap.xml",
    host: "https://nishaglobaleducation.com",
  };
}
