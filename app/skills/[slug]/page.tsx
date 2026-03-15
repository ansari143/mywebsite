import Link from "next/link";
import { notFound } from "next/navigation";
import { skillsPages } from "@/data/skillsPages";

type Props = {
  params: Promise<{ slug: string }>;
};

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-slate-100">
      <code>{code}</code>
    </pre>
  );
}

function DiagramBlock({ lines }: { lines: string[] }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-slate-800">
      <code>{lines.join("\n")}</code>
    </pre>
  );
}

export async function generateStaticParams() {
  return skillsPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = skillsPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Skill Not Found | Nisha Global Education",
      description: "The requested skill page could not be found.",
    };
  }

  return {
    title: `${page.title} | Nisha Global Education`,
    description: page.description,
    alternates: {
      canonical: `https://nishaglobaleducation.com/skills/${page.slug}`,
    },
  };
}

export default async function SkillDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = skillsPages.find((item) => item.slug === slug);

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

  return (
    <div className="space-y-8">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          href="/skills"
          className="inline-flex text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to Skills
        </Link>

        <div className="mt-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {page.badge}
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {page.title}
        </h1>

        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
          {page.intro}
        </p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-6">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4 text-slate-700 leading-7">
                {section.content.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {section.diagram && (
                <div className="mt-6">
                  <DiagramBlock lines={section.diagram} />
                </div>
              )}

              {section.code && (
                <div className="mt-6">
                  <CodeBlock code={section.code} />
                </div>
              )}
            </section>
          ))}

          {page.faq && (
            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-5 space-y-4">
                {page.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-gray-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-7">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
          <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Related Skills
            </h2>

            <div className="mt-4 grid gap-3">
              {skillsPages
                .filter((item) => item.slug !== page.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/skills/${item.slug}`}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </section>

          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              Good Beginner Path
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Start with Python concepts first, then move to prompt engineering,
              LangChain, AI agents, and LangGraph.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}