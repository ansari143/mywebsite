import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/result",
          "/tests/*/start",
          "/tests/*/quiz",
          "/practice-tests/*/*/start",
        ],
      },
    ],
    sitemap: "https://www.nishaglobaleducation.com/sitemap.xml",
    host: "https://www.nishaglobaleducation.com",
  };
}
