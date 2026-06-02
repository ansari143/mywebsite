import type { MetadataRoute } from "next";
import { resourcePages } from "@/data/resourcePages";
import { countryResourcesWithTopics, isCountryUsingDefaultTopics } from "@/data/countryResources";
import { practiceCategories, govPracticeCategories } from "@/data/practiceTests";
import { getIndexableBlogPosts } from "@/data/blogs";
import { tests } from "@/data/tests";
import { skillsPages } from "@/data/skillsPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nishaglobaleducation.com";

  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/editorial-policy",
    "/resources",
    "/skills",
    "/skills/ai-roadmap",
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
  const countryRoutes = countryResourcesWithTopics.flatMap((country) => {
    const routes = isCountryUsingDefaultTopics(country.slug)
      ? []
      : [`/resources/country/${country.slug}`];
    if (!isCountryUsingDefaultTopics(country.slug)) {
      routes.push(...country.topics.map((topic) => `/resources/country/${country.slug}/${topic.slug}`));
    }
    return routes;
  });

  const blogRoutes = getIndexableBlogPosts().map((post) => `/blog/${post.slug}`);
  const testRoutes = tests.map((test) => `/tests/${test.slug}`);
  const skillRoutes = skillsPages.map((skill) => `/skills/${skill.slug}`);

  const routePriority = (route: string) => {
    if (route === "") return 1;

    if (["/blog", "/resources", "/study-abroad", "/tests", "/skills"].includes(route)) {
      return 0.9;
    }

    if (route.startsWith("/blog/") || route.startsWith("/study-in-") || route.startsWith("/resources/country/")) {
      return 0.85;
    }

    if (route.startsWith("/practice-tests/")) {
      const depth = route.split("/").filter(Boolean).length;
      return depth >= 3 ? 0.6 : 0.7;
    }

    if (route.startsWith("/tests/")) {
      return 0.8;
    }

    return 0.75;
  };

  const routeFrequency = (route: string): MetadataRoute.Sitemap[number]["changeFrequency"] => {
    if (route === "") return "weekly";
    if (route.startsWith("/blog") || route.startsWith("/resources")) return "weekly";
    if (route.startsWith("/study-") || route.startsWith("/skills")) return "monthly";
    if (route.startsWith("/practice-tests") || route.startsWith("/tests")) return "monthly";
    return "monthly";
  };

  return [...staticRoutes, ...resourceRoutes, ...countryRoutes, ...practiceRoutes, ...govSetRoutes, ...blogRoutes, ...testRoutes, ...skillRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: routeFrequency(route),
    priority: routePriority(route),
  }));
}
