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
    <div className="space-y-8 dark:[&_.border-gray-200]:border-slate-700 dark:[&_.border-slate-200]:border-slate-700 dark:[&_.bg-[#15233d]]:bg-slate-900 dark:[&_.bg-[#15233d]]:bg-slate-800 dark:[&_.text-white]:text-slate-100 dark:[&_.text-white]:text-slate-300 dark:[&_.text-white]:text-slate-300">
      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-[#15233d] px-3 py-1 text-sm font-medium text-blue-700">
          {badge}
        </div>

        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-white">
          {intro}
        </p>
      </section>

      <article className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-2xl font-bold text-white">
              {section.heading}
            </h2>

            {section.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-base leading-7 text-white"
              >
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-4 space-y-3 text-base leading-7 text-white">
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
                    className="rounded-2xl border border-slate-200 bg-[#15233d] p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.question}
                    </h3>

                    {item.options && (
                      <div className="mt-4 grid gap-2">
                        {item.options.map((option) => (
                          <div
                            key={option}
                            className="rounded-xl border border-slate-200 bg-[#15233d] px-4 py-3 text-sm text-white"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="mt-4 text-sm">
                      <span className="font-semibold text-white">
                        Answer:
                      </span>{" "}
                      <span className="text-white">{item.answer}</span>
                    </p>

                    <p className="mt-2 text-sm leading-7 text-white">
                      <span className="font-semibold text-white">
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

      <section className="rounded-3xl border border-blue-100 bg-[#15233d] p-6 shadow-sm sm:p-8 dark:border-blue-700 dark:bg-blue-900/30">
        <h2 className="text-2xl font-bold text-white">{ctaTitle}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-white">
          {ctaText}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={ctaPrimaryHref}
            className="site-btn-primary px-5 py-3 text-center"
          >
            {ctaPrimaryLabel}
          </Link>

          {ctaSecondaryHref && ctaSecondaryLabel && (
            <Link
              href={ctaSecondaryHref}
              className="site-btn-secondary px-5 py-3 text-center"
            >
              {ctaSecondaryLabel}
            </Link>
          )}
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-[#15233d] p-4">
                <summary className="cursor-pointer text-sm font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {trustInfo && (
        <section className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/30 p-4 text-sm leading-7 text-white">
          <h2 className="text-xl font-bold text-black">Trust &amp; Transparency</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-white">
            {trustInfo.author && <p><span className="font-semibold">Author:</span> {trustInfo.author}</p>}
            {trustInfo.reviewedBy && <p><span className="font-semibold">Reviewed by:</span> {trustInfo.reviewedBy}</p>}
            {trustInfo.lastUpdated && <p><span className="font-semibold">Last updated:</span> {trustInfo.lastUpdated}</p>}
            {trustInfo.disclaimer && (
              <p className="mt-2 border-t border-amber-200 pt-3 italic text-black">{trustInfo.disclaimer}</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}