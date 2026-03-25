import Link from "next/link";

export const metadata = {
  title: "International Students Guide | Nishaglobal Education",
  description:
    "A practical guide for international students covering study abroad planning, scholarships, visa preparation, work while studying, and common mistakes to avoid.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/international-students",
  },
};

export default function InternationalStudentsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          International Students
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Step-by-Step Guide for International Students
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          Planning to study abroad can feel overwhelming. This page simplifies the journey into practical steps so students can compare destinations,
          prepare documents, understand costs, and make better academic decisions.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "1. Choose your destination",
            desc: "Compare country, course structure, language, career outcomes, work opportunities, and affordability before selecting a destination.",
          },
          {
            title: "2. Shortlist courses and universities",
            desc: "Create a balanced list of dream, target, and safe options based on academics, budget, and future goals.",
          },
          {
            title: "3. Prepare exams and documents",
            desc: "Common requirements include English tests, transcripts, statement of purpose, recommendations, passport, and financial documents.",
          },
          {
            title: "4. Understand scholarships and budget",
            desc: "Estimate tuition, accommodation, transport, health insurance, food, and emergency expenses before applying.",
          },
          {
            title: "5. Review visa basics carefully",
            desc: "Every destination has different rules. Students should check embassy, immigration, and university guidance before filing any application.",
          },
          {
            title: "6. Prepare for life after admission",
            desc: "Plan housing, local transportation, banking, part-time work rules, and long-term career goals before departure.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Choosing a country only by social media hype",
            "Ignoring full cost of living and hidden expenses",
            "Applying without checking official eligibility",
            "Assuming all countries have the same work or PR pathways",
            "Not reviewing licensing rules for regulated professions",
            "Relying on unofficial promises of guaranteed admission or visa",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/study-abroad" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            Explore Country Guides
          </Link>
          <Link href="/tests" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Take Free Career Test
          </Link>
        </div>
      </section>
    </div>
  );
}
