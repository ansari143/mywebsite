import type { Metadata } from "next";
import Link from "next/link";
import {
  heroClass,
  sectionClass,
  cardClass,
  amberClass,
} from "@/lib/theme";

export const metadata: Metadata = {
  title: "Editorial Policy | Nishaglobal Education",
  description:
    "How Nishaglobal Education plans, reviews, updates, and corrects educational content for students and parents.",
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/editorial-policy",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const principles = [
  {
    title: "Student-first usefulness",
    detail:
      "Every important guide must help a student make a decision, not just read information. We prioritize practical next steps, trade-offs, and real planning constraints.",
  },
  {
    title: "Original and specific content",
    detail:
      "We avoid generic filler and repeated paragraphs across pages. Country guides and career guidance content are written with destination-specific and context-specific advice.",
  },
  {
    title: "Clear limitations",
    detail:
      "We explain where guidance ends and official rules begin. Admissions, visa, and legal outcomes are never guaranteed and must be verified from official sources.",
  },
  {
    title: "Continuous updates",
    detail:
      "Pages are reviewed on a schedule and updated when major policy changes affect students. We improve older content when it becomes too broad or outdated.",
  },
];

const qualityChecklist = [
  "Who should choose this path and who should avoid it",
  "Step-by-step roadmap with realistic sequence",
  "Cost and timeline context with practical ranges",
  "Typical mistakes and how to avoid them",
  "FAQs based on recurring student questions",
  "Clear CTA to related tools, guides, or support",
];

const updateWorkflow = [
  {
    step: "Research and source validation",
    text:
      "Writers collect baseline information from official university pages, government portals, and trusted public references before drafting.",
  },
  {
    step: "Draft with decision focus",
    text:
      "Drafts are structured to answer practical student questions, including budget, eligibility, pathway risk, and alternatives.",
  },
  {
    step: "Editorial review",
    text:
      "Content is reviewed for clarity, factual consistency, repetition, and low-value patterns such as generic language without actionable depth.",
  },
  {
    step: "Publish and monitor",
    text:
      "Published pages are monitored for freshness, broken references, and user feedback. Weak sections are rewritten instead of padded.",
  },
  {
    step: "Correction and revision",
    text:
      "If we identify inaccuracies or outdated guidance, we update the page and revise sections that may mislead students.",
  },
];

export default function EditorialPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Editorial Policy",
    description:
      "Editorial standards and quality process for Nishaglobal Education content.",
    url: "https://www.nishaglobaleducation.com/editorial-policy",
    isPartOf: {
      "@type": "WebSite",
      name: "Nishaglobal Education",
      url: "https://www.nishaglobaleducation.com",
    },
  };

  return (
    <div className="space-y-8 dark:[&_.border-gray-200]:border-slate-700 dark:[&_.border-slate-200]:border-slate-700 dark:[&_.bg-white]:bg-slate-900 dark:[&_.bg-slate-50]:bg-slate-800 dark:[&_.text-slate-900]:text-slate-100 dark:[&_.text-slate-700]:text-slate-300 dark:[&_.text-slate-600]:text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Trust and Quality
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Editorial Policy
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          This policy explains how Nishaglobal Education creates, reviews, and updates content for students and parents. Our goal is to publish practical educational guidance that is clear, original, and decision-friendly.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {principles.map((item) => (
          <article key={item.title} className={sectionClass}>
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Minimum Content Standard for Core Guides</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
          {qualityChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How Content Is Updated</h2>
        <div className="mt-6 space-y-4">
          {updateWorkflow.map((item, index) => (
            <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                {index + 1}. {item.step}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Corrections and Feedback</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          If you find outdated information, factual errors, or unclear guidance, contact us and mention the page URL plus the issue. We review correction requests and update content where needed.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="site-btn-primary px-5 py-3 text-center"
          >
            Report a Content Issue
          </Link>
          <Link
            href="/about"
            className="site-btn-secondary px-5 py-3 text-center"
          >
            Learn About Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}