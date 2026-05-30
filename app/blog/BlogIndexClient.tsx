"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import {
  BLOG_CATEGORIES,
  blogPosts,
  getFeaturedBlogs,
  getLatestBlogs,
  getPopularUSABlogs,
  type BlogCategory,
} from "@/data/blogs";

type BlogIndexClientProps = {
  initialQuery?: string;
  initialCategory?: "All" | BlogCategory;
};

export default function BlogIndexClient({
  initialQuery = "",
  initialCategory = "All",
}: BlogIndexClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>(initialCategory);

  const featured = useMemo(() => getFeaturedBlogs().slice(0, 1), []);
  const latest = useMemo(() => getLatestBlogs(6), []);
  const popularUSA = useMemo(() => getPopularUSABlogs().slice(0, 6), []);

  const filteredPosts = useMemo(() => {
    const cleaned = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const categoryMatch = activeCategory === "All" || post.category === activeCategory;
      const queryMatch =
        !cleaned ||
        post.title.toLowerCase().includes(cleaned) ||
        post.description.toLowerCase().includes(cleaned) ||
        post.keywords.some((keyword) => keyword.toLowerCase().includes(cleaned));

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8">
        <p className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-semibold text-blue-700">
          Nishaglobal Education Blog
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Study in USA, USA Careers, AI Careers, Scholarships, and Student Guidance
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Read practical guides built for students, parents, and international learners. Every blog is designed to help you make better decisions with real steps, clear comparisons, and action-ready roadmaps.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/tests" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Career Tests
          </Link>
          <Link href="/resources" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Resources
          </Link>
          <Link href="/practice-tests" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Practice Tests
          </Link>
          <Link href="/study-abroad" className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Study Abroad
          </Link>
        </div>
      </section>

      {featured.map((post) => (
        <section key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800">
                Featured Blog
              </p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/blog/${post.slug}`} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Read Featured Guide
                </Link>
                <Link href="/tests" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Take a Free Career Test
                </Link>
              </div>
            </div>
            <BlogCard post={post} />
          </div>
        </section>
      ))}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Find the right blog quickly</h2>
        <div className="mt-5 grid gap-4">
          <label className="text-sm font-semibold text-slate-700" htmlFor="blog-search">
            Search blogs by title, topic, or keyword
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search: study in USA, AI careers, scholarships, SAT, IELTS..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none ring-blue-500 placeholder:text-slate-400 focus:ring-2"
          />
          <CategoryFilter
            categories={[...BLOG_CATEGORIES]}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">Latest Blogs</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((post) => (
            <BlogCard key={`latest-${post.slug}`} post={post} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">Popular in USA</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {popularUSA.map((post) => (
            <BlogCard key={`usa-${post.slug}`} post={post} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">Browse all blogs</h2>
        <p className="mt-2 text-sm text-slate-600">
          Showing {filteredPosts.length} of {blogPosts.length} articles.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
