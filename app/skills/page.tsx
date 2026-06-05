import type { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  adsenseDisclaimer,
  aiCareerRoadmaps,
  faqItems,
  seoContentSections,
} from "@/data/aiCareerRoadmaps";

const pageUrl = "https://www.nishaglobaleducation.com/skills";

const SkillsRoadmapPortal = dynamic(() => import("@/components/SkillsRoadmapPortal"), {
  ssr: true,
  loading: () => (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600">
      Loading AI Skills Roadmap...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "AI Skills Roadmap for Every Career Role | Nishaglobal Education",
  description:
    "Explore AI skills roadmaps for developers, QA, DevOps, PM, BA, and more with clear steps, projects, and role-based learning paths.",
  keywords: [
    "AI Skills",
    "AI Engineer Roadmap",
    "AI Learning Path",
    "LangChain Course",
    "LangGraph Course",
    "AI Developer Roadmap",
    "AI QA Roadmap",
    "AI DevOps Roadmap",
    "AI Project Manager",
    "AI Product Manager",
    "AI Business Analyst",
    "Agentic AI",
    "RAG Learning Path",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Skills Roadmap for Every Career Role",
    description:
      "Explore AI skills roadmaps with role-based steps, projects, and practical learning paths for technical and non-technical professionals.",
    url: pageUrl,
    siteName: "Nishaglobal Education",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Skills Roadmap for Every Career Role",
    description:
      "Explore AI skills roadmaps with practical steps and guided next moves for every career role.",
  },
  alternates: {
    canonical: pageUrl,
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function SkillsPage() {
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
        name: "AI Skills Roadmap",
        item: pageUrl,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Skills Roadmap for Developers, QA, DevOps, PM, BA",
    url: pageUrl,
    description:
      "Step-by-step AI skills roadmaps for developers, QA engineers, DevOps engineers, project managers, business analysts, scrum masters, delivery managers, TPMs, and product managers.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Nishaglobal Education",
      url: "https://www.nishaglobaleducation.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-8 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            AI skills guidance for students and professionals
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI Skills Roadmap for Developers, QA, DevOps, PM, BA
          </h1>

          <p className="text-sm font-medium text-slate-500">Updated: June 2026</p>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Use this page if you want a practical path into AI-driven work. It is built for developers, testers, operations teams, analysts, and managers who need role-based learning instead of generic AI course lists.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Who should choose this</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                People who want a clear roadmap for AI Engineer, AI QA, AI DevOps, AI PM, AI BA, Scrum Master, Delivery Manager, TPM, or Product Manager paths.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Who should avoid this</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                People looking for a short course catalog without role context, project checkpoints, or a structured transition plan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">How to use it</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Pick your current role, open the matching roadmap, read the guidance section, and follow the practice projects and FAQ before moving to the next stage.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-slate-700">
            The page also includes FAQs, internal guidance, and role-specific learning steps so search engines can understand the topic clearly and users can scan the page quickly.
          </div>
        </div>
      </section>

      <SkillsRoadmapPortal
        roadmaps={aiCareerRoadmaps}
        seoSections={seoContentSections}
        faqItems={faqItems}
        disclaimer={adsenseDisclaimer}
      />
    </div>
  );
}
