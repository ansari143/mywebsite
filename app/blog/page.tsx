import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export const metadata = {
  title: "Blog | Nishaglobal Education",
  description:
    "Explore career, study abroad, and future-ready skills articles from Nishaglobal Education.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog",
  },
};

const blogTopics = [
  "Careers after 10th and 12th",
  "Study abroad comparisons",
  "International student planning",
  "High paying global careers",
  "Future-ready skills and AI-era jobs",
];

export default function BlogIndexPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nishaglobal Education Blog",
    description:
      "Career, study abroad, and future-ready skills articles from Nishaglobal Education.",
    url: "https://nishaglobaleducation.com/blog",
    hasPart: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://nishaglobaleducation.com${post.href}`,
      about: post.category,
    })),
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Nishaglobal Education Blog
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Career, Study Abroad, and Future Skills Blog</h1>

        <p className="mt-4 max-w-3xl text-slate-600 leading-7">
          Explore practical articles that support Indian students and global students with country comparisons, job planning, academic choices, and modern skills.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {blogTopics.map((topic) => (
            <span key={topic} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((blog) => (
          <Link key={blog.href} href={blog.href} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              {blog.category}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{blog.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{blog.description}</p>
            <span className="mt-5 inline-block text-sm font-medium text-blue-700">Read article →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
