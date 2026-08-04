import type { Metadata } from "next";
import Link from "next/link";
import BlogIndexClient from "./BlogIndexClient";
import { BLOG_CATEGORIES, type BlogCategory } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Career and Study Abroad Blog | AI Skills, Scholarships, and Student Guidance",
  description:
    "Read practical articles on AI skills, global careers, scholarships, study abroad planning, and student success roadmaps.",
  keywords: [
    "USA careers",
    "study in USA",
    "international students",
    "AI careers",
    "scholarships",
    "high paying jobs",
    "student guidance",
    "career roadmap",
  ],
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/blog",
  },
  openGraph: {
    title: "Career and Study Abroad Blog",
    description:
      "Practical blog hub for AI skills, global careers, scholarships, and study abroad guidance.",
    url: "https://www.nishaglobaleducation.com/blog",
    siteName: "Nishaglobal Education",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.nishaglobaleducation.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Nishaglobal Education Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career and Study Abroad Blog",
    description:
      "Read practical blogs on AI careers, scholarships, study abroad planning, and student success.",
    images: ["https://www.nishaglobaleducation.com/logo.png"],
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

type BlogIndexPageProps = {
  searchParams: Promise<{ query?: string; category?: string }>;
};

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialQuery = resolvedSearchParams.query ?? "";
  const rawCategory = resolvedSearchParams.category;
  const initialCategory: "All" | BlogCategory =
    rawCategory && BLOG_CATEGORIES.includes(rawCategory as BlogCategory)
      ? (rawCategory as BlogCategory)
      : "All";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nishaglobal Education Blog",
    url: "https://www.nishaglobaleducation.com/blog",
    description:
      "Blog hub for USA careers, study in USA, AI careers, scholarships, and student guidance.",
    inLanguage: "en-US",
  };

  return (
    <main className="site-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="site-section bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Latest Career and Study Abroad Articles
            </h1>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              Updated weekly with practical guidance on AI skills, scholarships, global careers, and study abroad strategy.
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600">Updated: June 2026</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/skills" className="site-btn-primary">
              Explore AI Skills
            </Link>
            <Link href="/tests" className="site-btn-secondary">
              Start Free Career Test
            </Link>
          </div>
        </div>
      </section>

      <BlogIndexClient initialQuery={initialQuery} initialCategory={initialCategory} />
    </main>
  );
}
