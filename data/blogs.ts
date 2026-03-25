export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "top-careers-usa-2026",
    title: "Top 10 High Paying Careers in USA 2026",
    description:
      "Explore some of the most in-demand and high-paying careers in the USA for students and professionals.",
    category: "USA Careers",
    href: "/blog/top-careers-usa-2026",
  },
  {
    slug: "top-careers-canada-2026",
    title: "Top Careers in Canada for International Students",
    description:
      "Discover strong career options in Canada for international students across tech, healthcare, business, and skilled fields.",
    category: "Canada Careers",
    href: "/blog/top-careers-canada-2026",
  },
  {
    slug: "best-courses-uk-global-jobs",
    title: "Best Courses in UK for Global Job Opportunities",
    description:
      "Learn which courses in the UK can create strong international career opportunities after graduation.",
    category: "UK Courses",
    href: "/blog/best-courses-uk-global-jobs",
  },
  {
    slug: "australia-vs-canada-study-guide",
    title: "Study in Australia vs Canada for International Students",
    description:
      "Compare Australia and Canada on cost, work opportunities, lifestyle, and long-term student value.",
    category: "Comparison Guide",
    href: "/blog/australia-vs-canada-study-guide",
  },
  {
    slug: "future-proof-jobs-ai-era",
    title: "Jobs That Will Stay Strong Even in the AI Era",
    description:
      "Explore careers that are expected to stay valuable even as AI changes the job market.",
    category: "Future Careers",
    href: "/blog/future-proof-jobs-ai-era",
  },
];