import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getLatestBlogs } from "@/data/blogs";

type TrendingBlogsProps = {
  title?: string;
  limit?: number;
};

export default function TrendingBlogs({
  title = "Trending Blog Articles",
  limit = 3,
}: TrendingBlogsProps) {
  const posts = getLatestBlogs(limit);

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Blog
          </div>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
            Read practical articles on global careers, study abroad, and future-ready opportunities.
          </p>
        </div>

        <Link
          href="/blog"
          className="hidden rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:inline-block"
        >
          View All
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-5 sm:hidden">
        <Link
          href="/blog"
          className="inline-block rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
}