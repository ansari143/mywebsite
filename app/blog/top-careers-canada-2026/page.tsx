import Link from "next/link";

export const metadata = {
  title: "Top Careers in Canada for International Students | Nishaglobal Education",
  description:
    "Explore top careers in Canada for international students across technology, healthcare, business, public services, and skilled sectors.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/top-careers-canada-2026",
  },
};

export default function TopCareersCanadaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <article className="space-y-6">
        <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          Canada Careers
        </div>

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Top Careers in Canada for International Students
        </h1>

        <p className="text-slate-600 leading-7">
          Canada is a strong destination for students who want quality education,
          career opportunities, multicultural cities, and a practical learning
          environment. The right course can improve both job prospects and
          long-term career growth.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">
          Career Areas with Strong Potential
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 leading-7">
          <li>Software Development and IT</li>
          <li>Data Analytics and AI-related roles</li>
          <li>Nursing and Healthcare Support</li>
          <li>Business Analytics and Finance</li>
          <li>Supply Chain and Logistics</li>
          <li>Construction and Skilled Technical Fields</li>
          <li>Project Coordination and Operations</li>
          <li>Hospitality and Customer-Focused Service Roles</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">
          Why Canada Attracts Students
        </h2>
        <p className="text-slate-700 leading-7">
          Canada is often attractive because students can combine education with
          practical exposure, multicultural support, and long-term career
          planning. However, course choice, province, and local demand matter a lot.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">
          Smart Planning Tip
        </h2>
        <p className="text-slate-700 leading-7">
          Students should not choose a course only because it looks popular.
          They should compare province, tuition, job demand, and future career fit
          before applying.
        </p>
      </article>

      <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Explore More</h2>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/study-in-canada"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Study in Canada Guide
          </Link>
          <Link
            href="/tests"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Free Career Test
          </Link>
        </div>
      </section>
    </main>
  );
}