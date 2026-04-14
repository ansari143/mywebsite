import Link from "next/link";

export interface CareerGuideSection {
  type: 'overview' | 'eligibility' | 'skills' | 'who-should-choose' | 'who-should-avoid' | 'roadmap' | 'costs-exams' | 'faq' | 'cta';
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
  const faqSection = guide.sections.find(s => s.type === 'faq');
  const faqSchema = faqSection?.faqs ? {
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
  } : null;

  return (
    <div className="space-y-8">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Overview Section */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-sky-100 bg-white px-3 py-1 text-sm font-medium text-sky-700">
          {guide.badge}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          {guide.intro}
        </p>

        {/* Who Should Choose / Avoid */}
        {guide.sections.find(s => s.type === 'who-should-choose') && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900">Who Should Choose This Path</h2>
            <p className="mt-2 text-slate-700">
              {guide.sections.find(s => s.type === 'who-should-choose')?.content}
            </p>
          </div>
        )}

        {guide.sections.find(s => s.type === 'who-should-avoid') && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid This Path</h2>
            <p className="mt-2 text-slate-700">
              {guide.sections.find(s => s.type === 'who-should-avoid')?.content}
            </p>
          </div>
        )}
      </section>

      {/* Dynamic Sections */}
      {guide.sections
        .filter(section => !['overview', 'who-should-choose', 'who-should-avoid', 'faq', 'cta'].includes(section.type))
        .map((section, index) => (
          <section key={index} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            {section.title && (
              <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
            )}

            {/* Content */}
            {section.content && (
              <p className="mt-4 text-slate-700">{section.content}</p>
            )}

            {/* Items List */}
            {section.items && (
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Table */}
            {section.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border border-slate-200 text-sm">
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
                      <tr key={i} className="border-b border-slate-200">
                        {row.map((cell, j) => (
                          <td key={j} className="border-r border-slate-200 px-4 py-3 text-slate-700 last:border-r-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Roadmap */}
            {section.roadmap && (
              <div className="mt-6 space-y-6">
                {section.roadmap.map((step, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-slate-700">{step.description}</p>
                        {step.example && (
                          <p className="mt-2 text-sm text-slate-600 italic">
                            Example: {step.example}
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

      {/* FAQ Section */}
      {faqSection?.faqs && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {faqSection.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {guide.sections.find(s => s.type === 'cta')?.cta && (
        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Next Steps</h2>
          <p className="mt-4 text-slate-700">
            Ready to take action? Here are your best next steps based on your interests and goals.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={guide.sections.find(s => s.type === 'cta')!.cta!.primary.href}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              {guide.sections.find(s => s.type === 'cta')!.cta!.primary.text}
            </Link>
            {guide.sections.find(s => s.type === 'cta')!.cta!.secondary && (
              <Link
                href={guide.sections.find(s => s.type === 'cta')!.cta!.secondary!.href}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {guide.sections.find(s => s.type === 'cta')!.cta!.secondary!.text}
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important Note</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          This guide is designed for educational purposes only. Career requirements, job markets, salary ranges, and industry trends can change.
          Always verify current information from official sources and consider consulting with career advisors or industry professionals before making major decisions.
        </p>
      </section>
    </div>
  );
}