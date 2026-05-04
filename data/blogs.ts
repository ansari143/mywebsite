export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "list-of-engineering-entrance-exams-india",
    title: "List of Engineering Entrance Exams in India 2026",
    description:
      "Complete list of engineering entrance exams in India with official links, comparison tables, FAQs, and preparation strategy.",
    category: "Engineering Exams",
    href: "/blog/list-of-engineering-entrance-exams-india",
  },
  {
    slug: "ielts-practice-questions-with-answers",
    title: "Free IELTS Practice Questions with Answers",
    description:
      "Practice IELTS grammar, reading, and vocabulary with explanation-based questions and clear answers.",
    category: "IELTS Practice",
    href: "/blog/ielts-practice-questions-with-answers",
  }
];