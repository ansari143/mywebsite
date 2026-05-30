import type { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";
import { BLOG_CATEGORIES, type BlogCategory } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog for Study in USA, USA Careers, Scholarships, and Student Guidance",
  description:
    "Explore USA-focused blogs on study in USA planning, international students, AI careers, scholarships, high paying jobs, entrance exams, and practical career roadmaps.",
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
    title: "Nishaglobal Education Blog",
    description:
      "Professional blog hub for USA careers, study in USA, AI and tech careers, scholarships, and entrance exam guidance.",
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
    title: "Nishaglobal Education Blog",
    description:
      "Read practical USA-focused blogs on careers, scholarships, study abroad, and student success.",
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
    <main className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogIndexClient initialQuery={initialQuery} initialCategory={initialCategory} />
    </main>
  );
}
