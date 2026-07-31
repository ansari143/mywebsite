import Link from "next/link";

export interface CareerGuideSection {
  type:
    | "overview"
    | "eligibility"
    | "skills"
    | "who-should-choose"
    | "who-should-avoid"
    | "roadmap"
    | "costs-exams"
    | "faq"
    | "cta";
  title?: string;
  content?: string;
  items?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  roadmap?: {
    step: string;
    title: string;
    description: string;
    example?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta?: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

export interface CareerGuide {
  slug: string;
  title: string;
  description: string;
  badge: string;
  intro: string;
  sections: CareerGuideSection[];
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
}

interface CareerGuideTemplateProps {
  guide: CareerGuide;
}

export default function CareerGuideTemplate({ guide }: CareerGuideTemplateProps) {
  const chooseSection = guide.sections.find((s) => s.type === "who-should-choose");
  const avoidSection = guide.sections.find((s) => s.type === "who-should-avoid");
  const faqSection = guide.sections.find((s) => s.type === "faq");
  const ctaSection = guide.sections.find((s) => s.type === "cta");

  const faqSchema = faqSection?.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSection.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="site-page">
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {guide.badge}
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {guide.title}
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
          {guide.intro}
        </p>

        {(chooseSection || avoidSection) && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {chooseSection && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Who Should Choose This Path</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{chooseSection.content}</p>
              </div>
            )}

            {avoidSection && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid This Path</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{avoidSection.content}</p>
              </div>
            )}
          </div>
        )}
      </section>

      {guide.sections
        .filter((section) => !["overview", "who-should-choose", "who-should-avoid", "faq", "cta"].includes(section.type))
        .map((section, index) => (
          <section key={`${section.type}-${index}`} className="site-section">
            {section.title && <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>}

            {section.content && <p className="mt-4 text-base leading-8 text-slate-600">{section.content}</p>}

            {section.items && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.items.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                      <p className="text-sm leading-7 text-slate-600 sm:text-base">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      {section.table.headers.map((header, i) => (
                        <th key={i} className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {section.table.rows.map((row, i) => (
                      <tr key={i} className="odd:bg-white even:bg-slate-50/70">
                        {row.map((cell, j) => (
                          <td key={`${cell}-${j}`} className="border border-slate-200 px-4 py-3 text-slate-600">
                            {j === 0 ? <strong className="text-slate-900">{cell}</strong> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.roadmap && (
              <div className="mt-6 space-y-4">
                {section.roadmap.map((step, i) => (
                  <div key={`${step.step}-${i}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {step.step}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{step.description}</p>

                        {step.example && (
                          <p className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm leading-7 text-blue-700">
                            <strong>Example:</strong> {step.example}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

      {faqSection?.faqs && (
        <section className="site-section">
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqSection.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {ctaSection?.cta && (
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Next Steps</h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Ready to take action? Here are your best next steps based on your interests and goals.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaSection.cta.primary.href} className="site-btn-primary px-5 py-3 text-center">
              {ctaSection.cta.primary.text}
            </Link>

            {ctaSection.cta.secondary && (
              <Link href={ctaSection.cta.secondary.href} className="site-btn-secondary px-5 py-3 text-center">
                {ctaSection.cta.secondary.text}
              </Link>
            )}
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important Note</h2>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          This guide is designed for educational purposes only. Career requirements, job markets, salary ranges, and industry trends can change. Always verify current information from official sources and consider consulting with career advisors or industry professionals before making major decisions.
        </p>
      </section>
    </div>
  );
}