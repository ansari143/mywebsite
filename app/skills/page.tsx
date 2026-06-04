import type { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  adsenseDisclaimer,
  aiCareerRoadmaps,
  faqItems,
  seoContentSections,
} from "@/data/aiCareerRoadmaps";

const SkillsRoadmapPortal = dynamic(() => import("@/components/SkillsRoadmapPortal"), {
  ssr: true,
  loading: () => (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600">
      Loading AI Skills Roadmap...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "AI Skills Roadmap | AI Engineer, QA, DevOps, PM, BA Learning Paths",
  description:
    "Explore step-by-step AI learning roadmaps for developers, QA engineers, DevOps engineers, project managers, business analysts, scrum masters, delivery managers, TPMs and product managers.",
  keywords: [
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
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/skills",
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
        name: "AI Skills Roadmap: Traditional Career to AI-Driven Career",
        item: "https://www.nishaglobaleducation.com/skills",
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SkillsRoadmapPortal
        roadmaps={aiCareerRoadmaps}
        seoSections={seoContentSections}
        faqItems={faqItems}
        disclaimer={adsenseDisclaimer}
      />
    </div>
  );
}
