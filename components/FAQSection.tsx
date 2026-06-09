import type { BlogFaq } from "@/data/blogs";

type FAQSectionProps = {
  faqs: BlogFaq[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="mt-4 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-slate-200 bg-[#15233d] p-4">
            <summary className="cursor-pointer text-sm font-semibold text-white sm:text-base">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-white sm:text-base">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
