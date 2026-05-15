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
    slug: "how-to-prepare-for-campus-placement-during-engineering",
    title: "How to Prepare for Campus Placement During Engineering",
    description:
      "Practical campus placement guidance for engineering students with semester-wise planning, aptitude, coding, resume, and interview strategy.",
    category: "Engineering Placement",
    href: "/blog/how-to-prepare-for-campus-placement-during-engineering",
  },
  {
    slug: "off-campus-placement-guide-for-engineering-students",
    title: "Off-Campus Placement Guide for Engineering Students",
    description:
      "What engineering students should do if not placed in college, including resume fixes, referrals, job channels, and recovery strategy.",
    category: "Off-Campus Jobs",
    href: "/blog/off-campus-placement-guide-for-engineering-students",
  },
  {
    slug: "global-job-search-guide-for-engineering-students",
    title: "Global Job Search Guide for Engineering Students",
    description:
      "Detailed guidance for engineering students targeting jobs abroad or remote global roles with country, portfolio, and visa planning advice.",
    category: "Global Careers",
    href: "/blog/global-job-search-guide-for-engineering-students",
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