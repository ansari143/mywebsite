import Link from "next/link";
import { notFound } from "next/navigation";
import { resourcePages } from "@/data/resourcePages";
import { streamResourceDetails } from "@/data/streamResourceDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return resourcePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = resourcePages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Resource Not Found | Nisha Global Education",
      description: "The requested resource page could not be found.",
    };
  }

  return {
    title: `${page.title} | Nisha Global Education`,
    description: page.description,
    alternates: {
      canonical: `https://nishaglobaleducation.com/resources/${page.slug}`,
    },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = resourcePages.find((item) => item.slug === slug);

  if (!page) return notFound();

  const streamDetail = page.resourceDetailKey
    ? streamResourceDetails[page.resourceDetailKey]
    : null;

  const faqSchema = page.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nishaglobaleducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://nishaglobaleducation.com/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://nishaglobaleducation.com/resources/${page.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <Link
            href="/resources"
            className="inline-flex text-sm font-medium text-blue-700 hover:underline"
          >
            ← Back to Resources
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {page.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            {page.intro}
          </p>
        </div>
      </section>

      {streamDetail && (
        <section className="space-y-6 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold text-blue-700">
              {streamDetail.label} Resource Snapshot
            </span>
            <span className="text-sm text-gray-600">
              Practical planning details students and parents usually ask for
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {streamDetail.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {fact.label}
                </div>
                <div className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-gray-700 leading-7">
                {section.content.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </section>
          ))}

          {streamDetail && (
            <>
              <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Eligibility</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.eligibility} />
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">10th / 12th Percentage Guidance</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.percentageGuidance} />
                  </div>
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Age Limit and Entrance Exams</h2>
                  <div className="mt-4 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Age limit</h3>
                      <div className="mt-3">
                        <BulletList items={streamDetail.ageLimit} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Entrance exams</h3>
                      <div className="mt-3">
                        <BulletList items={streamDetail.entranceExams} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Course Length and Fee Structure</h2>
                  <div className="mt-4 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Length of course</h3>
                      <div className="mt-3">
                        <BulletList items={streamDetail.courseLength} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Fee structure range</h3>
                      <div className="mt-3">
                        <BulletList items={streamDetail.feeStructure} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Recommended Colleges and Institutes</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.topColleges} />
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Online vs Offline Availability</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.onlineOffline} />
                  </div>
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Abroad Opportunities</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.abroadOpportunities} />
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Placement Preparation</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.placementPreparation} />
                  </div>
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">How to Improve Job Chances</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.jobSuggestions} />
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Advertisement and Sponsored Content</h2>
                  <div className="mt-4">
                    <BulletList items={streamDetail.advertisementNote} />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-xl font-semibold text-gray-900">Need More Help?</h2>
                <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
                  If you still have questions about eligibility, fees, colleges, institutes, or the right path for your profile, use the Contact section and mention your class, stream, marks, and goal so you can get more relevant guidance.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Contact for Guidance
                  </Link>
                  <Link
                    href="/tests"
                    className="inline-flex rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    Take Free Career Test
                  </Link>
                </div>
              </section>
            </>
          )}

          {page.faq && (
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-5">
                {page.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-7">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Disclaimer</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-gray-600">
              <p>
                This content is provided for educational and informational purposes only.
              </p>
              <p>
                Eligibility, age rules, entrance exams, fee structure, counselling, admissions, and placement trends may change over time and may differ across states, institutes, and categories.
              </p>
              {streamDetail && <p>{streamDetail.officialNote}</p>}
              <p>
                Students and parents should always verify final details from official boards, examination authorities, universities, colleges, regulators, and government portals before making academic, payment, or career decisions.
              </p>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Related Guides
            </h2>

            <div className="mt-4 grid gap-3">
              {resourcePages
                .filter((item) => item.slug !== page.slug)
                .slice(0, 18)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/resources/${item.slug}`}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </section>

          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Need Career Guidance?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore career paths, stream comparisons, fee ranges, entrance exam basics, and planning support to make a smarter decision after 10th or 12th.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/tests"
                className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Take Career Test
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
              >
                Ask a Question
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">For Institutes and Advertisers</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Colleges, coaching institutes, and educational partners can connect through the Contact section for transparent featured listings, sponsored content, or collaboration enquiries.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
