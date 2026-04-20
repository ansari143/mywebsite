import type { MetadataRoute } from "next";
import { resourcePages } from "@/data/resourcePages";
import { countryResourcesWithTopics } from "@/data/countryResources";
import { practiceCategories, govPracticeCategories } from "@/data/practiceTests";
import { blogPosts } from "@/data/blogs";
import { tests } from "@/data/tests";
import { skillsPages } from "@/data/skillsPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nishaglobaleducation.com";

  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/resources",
    "/skills",
    "/skills/ai-roadmap",
    "/terms-and-conditions",
    "/tests",
    "/global-careers",
    "/study-abroad",
    "/international-students",
    "/high-paying-jobs",
    "/study-in-usa",
    "/study-in-canada",
    "/study-in-uk",
    "/study-in-australia",
    "/study-in-europe",
    "/practice-tests",
  ];

  const practiceRoutes = practiceCategories.map((cat) => `/practice-tests/${cat.slug}`);
  const govSetRoutes = govPracticeCategories.flatMap((cat) =>
    cat.sets.filter((set) => set.isLive).map((set) => `/practice-tests/${cat.slug}/${set.slug}`)
  );

  const resourceRoutes = resourcePages.map((page) => `/resources/${page.slug}`);
  const countryRoutes = countryResourcesWithTopics.flatMap((country) => [
    `/resources/country/${country.slug}`,
    ...country.topics.map((topic) => `/resources/country/${country.slug}/${topic.slug}`),
  ]);

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const testRoutes = tests.map((test) => `/tests/${test.slug}`);
  const skillRoutes = skillsPages.map((skill) => `/skills/${skill.slug}`);

  return [...staticRoutes, ...resourceRoutes, ...countryRoutes, ...practiceRoutes, ...govSetRoutes, ...blogRoutes, ...testRoutes, ...skillRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
