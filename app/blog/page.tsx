import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export const metadata = {
  title: "Blog | Nishaglobal Education",
  description:
    "Explore career, study abroad, IELTS, engineering practice, and future-ready skills articles from Nishaglobal Education.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const blogTopics = [
  "Careers after 10th and 12th",
  "Study abroad comparisons",
  "International student planning",
  "High paying global careers",
  "Future-ready skills and AI-era jobs",
  "IELTS practice and grammar",
  "Engineering entrance preparation",
];

const seoPracticeBlogs = [
  {
    title: "Free IELTS Practice Questions with Answers",
    href: "/blog/ielts-practice-questions-with-answers",
    description:
      "Practice IELTS grammar, reading, and vocabulary with explanation-based sample questions.",
    category: "IELTS Practice",
  },
  {
    title: "IELTS Grammar Practice for Beginners",
    href: "/blog/ielts-grammar-practice-for-beginners",
    description:
      "A beginner-friendly IELTS grammar article with answers and simple explanations.",
    category: "IELTS Grammar",
  },
  {
    title: "Engineering Entrance Questions with Answers",
    href: "/blog/engineering-entrance-questions-with-answers",
    description:
      "Start engineering entrance preparation with sample math, physics, chemistry, and logic questions.",
    category: "Engineering Practice",
  },
  {
    title: "Beginner Math Physics Chemistry Practice for Engineering",
    href: "/blog/beginner-engineering-practice-math-physics-chemistry",
    description:
      "Build engineering basics with explanation-based questions across core foundation subjects.",
    category: "Engineering Foundation",
  },
];

export default function BlogIndexPage() {
  const allBlogPosts = [...seoPracticeBlogs, ...blogPosts];

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nishaglobal Education Blog",
    description:
      "Career, study abroad, IELTS, engineering preparation, and future-ready skills articles from Nishaglobal Education.",
    url: "https://nishaglobaleducation.com/blog",
    hasPart: allBlogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://nishaglobaleducation.com${post.href}`,
      about: post.category,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Nishaglobal Education Blog
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Career, Study Abroad, Practice Tests, and Future Skills Blog
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore practical articles that support Indian students and global
          students with career guidance, study abroad planning, IELTS practice,
          engineering entrance basics, country comparisons, and modern skills.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {blogTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Practice and exam preparation
        </div>

        <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          New IELTS and Engineering preparation articles
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          These explanation-based articles are designed to guide students from
          Google search into our practice and career guidance system.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {seoPracticeBlogs.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-white px-2.5 py-1 text-xs font-medium text-blue-700">
                {item.category}
              </span>
              <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((blog) => (
          <Link
            key={blog.href}
            href={blog.href}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              {blog.category}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              {blog.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {blog.description}
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-blue-700">
              Read article →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}