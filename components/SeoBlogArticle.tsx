import Link from "next/link";

type QAItem = {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
};

type SectionItem = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  qaItems?: QAItem[];
};

type TrustInfo = {
  author?: string;
  reviewedBy?: string;
  lastUpdated?: string;
  disclaimer?: string;
};

type SeoBlogArticleProps = {
  badge: string;
  title: string;
  intro: string;
  sections: SectionItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimaryHref: string;
  ctaPrimaryLabel: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  trustInfo?: TrustInfo;
  faqs?: { question: string; answer: string }[];
};

export default function SeoBlogArticle({
  badge,
  title,
  intro,
  sections,
  ctaTitle,
  ctaText,
  ctaPrimaryHref,
  ctaPrimaryLabel,
  ctaSecondaryHref,
  ctaSecondaryLabel,
  trustInfo,
  faqs,
}: SeoBlogArticleProps) {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {badge}
        </div>

        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {intro}
        </p>
      </section>

      <article className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              {section.heading}
            </h2>

            {section.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-base leading-7 text-slate-600"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.qaItems && (
              <div className="mt-6 space-y-5">
                {section.qaItems.map((item, index) => (
                  <div
                    key={`${section.heading}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.question}
                    </h3>

                    {item.options && (
                      <div className="mt-4 grid gap-2">
                        {item.options.map((option) => (
                          <div
                            key={option}
                            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="mt-4 text-sm">
                      <span className="font-semibold text-slate-900">
                        Answer:
                      </span>{" "}
                      <span className="text-slate-700">{item.answer}</span>
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      <span className="font-semibold text-slate-900">
                        Explanation:
                      </span>{" "}
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </article>

      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{ctaTitle}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          {ctaText}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={ctaPrimaryHref}
            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            {ctaPrimaryLabel}
          </Link>

          {ctaSecondaryHref && ctaSecondaryLabel && (
            <Link
              href={ctaSecondaryHref}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
            >
              {ctaSecondaryLabel}
            </Link>
          )}
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {trustInfo && (
        <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Trust &amp; Transparency</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            {trustInfo.author && <p><span className="font-semibold">Author:</span> {trustInfo.author}</p>}
            {trustInfo.reviewedBy && <p><span className="font-semibold">Reviewed by:</span> {trustInfo.reviewedBy}</p>}
            {trustInfo.lastUpdated && <p><span className="font-semibold">Last updated:</span> {trustInfo.lastUpdated}</p>}
            {trustInfo.disclaimer && (
              <p className="mt-2 border-t border-amber-200 pt-3 italic text-slate-600">{trustInfo.disclaimer}</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}