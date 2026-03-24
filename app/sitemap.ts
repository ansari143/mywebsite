import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nishaglobaleducation.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/resources",
    "/skills",
    "/skills/ai-roadmap",
    "/terms-and-conditions",
    "/tests",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
