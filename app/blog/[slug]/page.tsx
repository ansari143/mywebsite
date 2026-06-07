import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CTABox from "@/components/CTABox";
import FAQSection from "@/components/FAQSection";
import RelatedBlogs from "@/components/RelatedBlogs";
import { blogPosts, getBlogBySlug, isIndexableBlog } from "@/data/blogs";

type BlogPageParams = {
  params: Promise<{ slug: string }>;
};

function slugToId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

function getCategoryInternalLink(category: string) {
  if (category === "AI & Tech Careers") {
    return "/skills";
  }

  if (category === "Study in USA") {
    return "/study-abroad";
  }

  if (category === "Entrance Exams") {
    return "/practice-tests";
  }

  if (category === "USA Careers" || category === "Career Guidance") {
    return "/tests";
  }

  if (category === "Scholarships") {
    return "/resources";
  }

  return "/blog";
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Nishaglobal Education",
      description: "The requested blog article could not be found.",
    };
  }

  const canonicalUrl = `https://www.nishaglobaleducation.com/blog/${post.slug}`;
  const shouldIndex = isIndexableBlog(post.slug);

  return {
    title: `${post.title} | Nishaglobal Education`,
    description: post.description,
    keywords: post.keywords,
    robots: shouldIndex ? undefined : "noindex,follow",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: "Nishaglobal Education",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: "https://www.nishaglobaleducation.com/logo.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://www.nishaglobaleducation.com/logo.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageParams) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const tocItems = [
    { label: "Introduction", id: "introduction" },
    { label: "Who this guide is for", id: "who-this-guide-is-for" },
    { label: "Who should avoid this", id: "who-should-avoid-this" },
    ...post.content.mainExplanation.map((section) => ({
      label: section.heading,
      id: slugToId(section.heading),
    })),
    { label: "Step-by-step guidance", id: "step-by-step-guidance" },
    post.content.comparisonTable
      ? { label: post.content.comparisonTable.title, id: "comparison-table" }
      : null,
    { label: "Common mistakes", id: "common-mistakes" },
    { label: "Final tips", id: "final-tips" },
    { label: "FAQs", id: "faqs" },
  ].filter((item): item is { label: string; id: string } => item !== null);

  const internalDestination = getCategoryInternalLink(post.category);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nishaglobal Education",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nishaglobaleducation.com/logo.png",
      },
    },
    image: "https://www.nishaglobaleducation.com/logo.png",
    mainEntityOfPage: `https://www.nishaglobaleducation.com/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nishaglobaleducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.nishaglobaleducation.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.nishaglobaleducation.com/blog/${post.slug}`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nishaglobal Education",
    url: "https://www.nishaglobaleducation.com",
    email: "nishaglobaleducation@gmail.com",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nishaglobal Education",
    url: "https://www.nishaglobaleducation.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.nishaglobaleducation.com/blog?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="space-y-8 dark:[&_.border-gray-200]:border-slate-700 dark:[&_.border-slate-200]:border-slate-700 dark:[&_.bg-white]:bg-slate-900 dark:[&_.bg-slate-50]:bg-slate-800 dark:[&_.bg-emerald-50]:bg-emerald-900/20 dark:[&_.bg-rose-50]:bg-rose-900/20 dark:[&_.text-slate-900]:text-slate-100 dark:[&_.text-slate-700]:text-slate-300 dark:[&_.text-slate-600]:text-slate-300 dark:[&_.text-slate-300]:text-slate-300 dark:[&_.text-emerald-900]:text-slate-300 dark:[&_.text-rose-900]:text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {post.content.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <article className="space-y-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {post.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{post.description}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
            <span>Author: {post.author}</span>
            <span>Updated: {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Table of Contents</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-semibold text-blue-700 hover:underline">
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section id="introduction" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            {post.content.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div id="who-this-guide-is-for" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who this guide is for</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900 sm:text-base">
              {post.content.whoThisGuideIsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div id="who-should-avoid-this" className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900 sm:text-base">
              {post.content.whoShouldAvoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {post.content.mainExplanation.map((section) => (
          <section key={section.heading} id={slugToId(section.heading)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section id="step-by-step-guidance" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step guidance</h2>
          <div className="mt-5 space-y-3">
            {post.content.stepByStepGuidance.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {post.content.comparisonTable && (
          <section id="comparison-table" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">{post.content.comparisonTable.title}</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    {post.content.comparisonTable.headers.map((header) => (
                      <th key={header} className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {post.content.comparisonTable.rows.map((row, rowIndex) => (
                    <tr key={`${row[0]}-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className="border border-slate-200 px-4 py-3 text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <section id="common-mistakes" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Common mistakes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {post.content.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </section>

        <section id="final-tips" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Final tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {post.content.finalTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
            Continue your next step from this guide: <Link href={internalDestination} className="font-semibold text-blue-700 hover:underline">open the related action page</Link>.
          </p>
        </section>

        <div id="faqs">
          <FAQSection faqs={post.content.faqs} />
        </div>

        <CTABox
          title="Take your next step now"
          description="Use these actions to convert reading into progress. Every path below connects to practical tools and guides on Nishaglobal Education."
          links={[
            { href: "/tests", label: "Take a Free Career Test" },
            { href: "/study-abroad", label: "Explore Study Abroad Guides" },
            { href: "/practice-tests", label: "Practice Entrance Tests" },
            { href: "/blog", label: "Read More Career Blogs" },
          ]}
        />

        <RelatedBlogs slugs={post.relatedSlugs ?? []} />

        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm dark:border-amber-700 dark:bg-amber-950/30">
          <h2 className="text-xl font-bold text-slate-900">Content trust note</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            This article is for educational guidance and student planning support. Verify final admission, fee, scholarship, and visa decisions from official sources before taking action.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/about" className="text-blue-700 hover:underline">About Nishaglobal Education</Link>
            <Link href="/contact" className="text-blue-700 hover:underline">Contact our team</Link>
            <Link href="/disclaimer" className="text-blue-700 hover:underline">Read full disclaimer</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
