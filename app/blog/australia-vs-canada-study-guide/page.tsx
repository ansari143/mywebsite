import Link from "next/link";

export const metadata = {
  title: "Study in Australia vs Canada for International Students | Nishaglobal Education",
  description:
    "Compare Australia and Canada for international students on cost, lifestyle, post-study work rights, PR pathways, and career planning.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/australia-vs-canada-study-guide",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const faqs = [
  {
    q: "Which country is cheaper for international students: Australia or Canada?",
    a: "Canada is generally slightly more affordable, especially for tuition. Average tuition in Canada ranges from CAD 20,000 to 35,000 per year, while Australia typically ranges from AUD 25,000 to 45,000. Living costs vary by city in both countries. Toronto and Sydney are expensive; smaller cities in both countries are more affordable.",
  },
  {
    q: "Which country has better post-study work rights?",
    a: "Both countries offer strong post-study work permits. Canada's PGWP can be up to 3 years depending on program length. Australia's Temporary Graduate Visa (subclass 485) ranges from 2 to 6 years depending on your qualification level and the state. Both are strong options for students who want work experience after graduation.",
  },
  {
    q: "Is PR easier in Australia or Canada?",
    a: "Both countries offer pathways to permanent residency, but the process differs. Canada's Express Entry system is points-based and can be faster for skilled workers with Canadian work experience. Australia's points-based SkillSelect system can also lead to PR, but state nomination requirements add an extra step. Neither is simple; both require planning.",
  },
  {
    q: "Which country is better for technology and IT careers?",
    a: "Both have strong IT sectors. Canada, particularly cities like Toronto, Vancouver, and Ottawa, has a thriving tech ecosystem with major employers and strong demand. Australia's tech sector in Sydney and Melbourne is also growing strongly. Canada may have a slight edge in sheer volume of IT opportunities, but Australia offers competitive salaries.",
  },
  {
    q: "How do I choose between Australia and Canada for my specific situation?",
    a: "Start with your course and career goal first. Then compare which country has more demand in that field. Consider your budget, preferred climate, desired city size, part-time work access during study, and long-term plans. Visit official government and university websites before finalizing any decision.",
  },
  {
    q: "Can I work while studying in both countries?",
    a: "Yes. In Canada, international students on a valid study permit can work up to 24 hours per week off-campus during semesters and full-time during scheduled breaks. In Australia, students are typically allowed to work up to 48 hours per fortnight during semesters. Both allow full-time work during official holidays.",
  },
];

export default function AustraliaVsCanadaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          Student Comparison Guide
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Study in Australia vs Canada: A Practical Comparison for International Students
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Australia and Canada are two of the most popular destinations for international students. Both offer English-language
          education, multicultural environments, and strong post-study work pathways. But the right choice depends on your field,
          budget, career goal, and long-term plan. This guide helps you compare them honestly.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Side-by-side comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Factor</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Australia 🇦🇺</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Canada 🇨🇦</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Average tuition/year", "AUD 25,000–45,000", "CAD 20,000–35,000"],
                ["Post-study work visa", "2–6 years (subclass 485)", "Up to 3 years (PGWP)"],
                ["Part-time work during study", "48 hrs/fortnight", "24 hrs/week"],
                ["PR pathway", "State-based SkillSelect", "Express Entry (federal)"],
                ["Climate", "Mostly warm/coastal", "Cold winters, warmer summers"],
                ["Top cities", "Sydney, Melbourne, Brisbane", "Toronto, Vancouver, Ottawa"],
                ["Healthcare during study", "OSHC required", "Varies by province"],
                ["IELTS requirement", "Typically 6.0–6.5", "Typically 6.0–6.5"],
              ].map(([factor, aus, can]) => (
                <tr key={factor} className="border-b border-slate-200">
                  <td className="border-r border-slate-200 px-4 py-3 font-medium text-slate-800">{factor}</td>
                  <td className="border-r border-slate-200 px-4 py-3 text-slate-700">{aus}</td>
                  <td className="px-4 py-3 text-slate-700">{can}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">Australia may suit you better if…</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>You are in healthcare, hospitality, applied sciences, or vocational training.</li>
            <li>You prefer warmer weather and coastal lifestyle.</li>
            <li>You want a longer post-study visa based on your qualification level.</li>
            <li>You are interested in Melbourne or Sydney university environments.</li>
            <li>You want practical work-integrated learning in your course.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">Canada may suit you better if…</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li>You are targeting tech, analytics, business, or public systems careers.</li>
            <li>You want federal PR pathways through Express Entry after graduation.</li>
            <li>You prefer slightly lower tuition and strong co-op programs.</li>
            <li>You are comfortable with cold winters and prefer North American settings.</li>
            <li>You want access to a large multicultural tech ecosystem.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How to make the final decision</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Step 1: Lock in your career goal", "Decide what field or role you want. Then check job market demand in that field separately for each country."],
            ["Step 2: Compare real tuition costs", "Look at specific universities and programs, not just averages. Include health insurance, city living costs, and visa fees."],
            ["Step 3: Check post-study options", "Read about the PGWP for Canada and the 485 visa for Australia on official government websites before applying."],
            ["Step 4: Consider personal factors", "Climate preference, family connections, language communities, and mental health support all matter for a multi-year decision."],
          ].map(([step, desc]) => (
            <div key={step} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{step}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Important note</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Visa rules, work rights, tuition fees, and PR policies change frequently. Always check official government immigration
          websites for Australia (immi.homeaffairs.gov.au) and Canada (canada.ca/immigration) before making any application decisions.
          This article is for educational guidance only.
        </p>
        <p className="mt-2 text-sm text-slate-500">Last reviewed: April 2026 · Author: Nishaglobal Education editorial team</p>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Explore deeper guides</h2>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/study-in-australia" className="rounded-xl bg-amber-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-amber-700">
            Study in Australia Guide
          </Link>
          <Link href="/study-in-canada" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50">
            Study in Canada Guide
          </Link>
          <Link href="/tests" className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50">
            Take Free Career Test
          </Link>
        </div>
      </section>
    </div>
  );
}