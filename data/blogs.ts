export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  // ✅ NEW SEO PRACTICE BLOGS (ADD AT TOP FOR PRIORITY)
  {
    slug: "ielts-practice-questions-with-answers",
    title: "Free IELTS Practice Questions with Answers",
    description:
      "Practice IELTS grammar, reading, and vocabulary with explanation-based questions and clear answers.",
    category: "IELTS Practice",
    href: "/blog/ielts-practice-questions-with-answers",
  },
  {
    slug: "ielts-grammar-practice-for-beginners",
    title: "IELTS Grammar Practice for Beginners",
    description:
      "Improve IELTS grammar with beginner-friendly practice questions, answers, and explanations.",
    category: "IELTS Grammar",
    href: "/blog/ielts-grammar-practice-for-beginners",
  },
  {
    slug: "toefl-practice-questions-with-answers",
    title: "Free TOEFL Practice Questions with Answers",
    description:
      "Practice TOEFL reading, listening, and integrated task questions with explanation-based answers.",
    category: "TOEFL Practice",
    href: "/blog/toefl-practice-questions-with-answers",
  },
  {
    slug: "toefl-speaking-writing-practice-for-beginners",
    title: "TOEFL Speaking and Writing Practice for Beginners",
    description:
      "Improve TOEFL speaking and writing with beginner-friendly structure, sample prompts, and correction strategy.",
    category: "TOEFL Strategy",
    href: "/blog/toefl-speaking-writing-practice-for-beginners",
  },
  {
    slug: "engineering-entrance-questions-with-answers",
    title: "Engineering Entrance Questions with Answers",
    description:
      "Practice engineering entrance questions for math, physics, chemistry, and logic with explanations.",
    category: "Engineering Practice",
    href: "/blog/engineering-entrance-questions-with-answers",
  },
  {
    slug: "beginner-engineering-practice-math-physics-chemistry",
    title: "Beginner Math Physics Chemistry Practice for Engineering",
    description:
      "Build strong engineering basics with practice questions in math, physics, and chemistry.",
    category: "Engineering Foundation",
    href: "/blog/beginner-engineering-practice-math-physics-chemistry",
  },

  // ✅ EXISTING BLOGS
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