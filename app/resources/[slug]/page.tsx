import Link from "next/link";
import { notFound } from "next/navigation";
import { resourcePages } from "@/data/resourcePages";

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

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = resourcePages.find((item) => item.slug === slug);

  if (!page) return notFound();

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
                This content is provided for educational and informational
                purposes only.
              </p>
              <p>
                Entrance exams, eligibility rules, admission processes,
                scholarship availability, and academic policies may change over
                time.
              </p>
              <p>
                Students and parents should always verify final details from
                official boards, universities, examination authorities, and
                government portals before making academic or career decisions.
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
                .slice(0, 8)
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
              Explore career paths, stream comparisons, and exam basics to make
              a smarter decision after 10th or 12th.
            </p>
            <Link
              href="/tests"
              className="mt-4 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Take Career Test
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}