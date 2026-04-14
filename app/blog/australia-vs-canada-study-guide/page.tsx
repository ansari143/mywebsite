import Link from "next/link";

export const metadata = {
  title: "Study in Australia vs Canada for International Students | Nishaglobal Education",
  description:
    "Compare Australia and Canada for international students on cost, lifestyle, work opportunities, and study planning.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/australia-vs-canada-study-guide",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function AustraliaVsCanadaPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <article className="space-y-6">
        <div className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          Student Comparison Guide
        </div>

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Study in Australia vs Canada for International Students
        </h1>

        <p className="text-slate-600 leading-7">
          Australia and Canada are both popular destinations for international
          students. Both offer English-language education, multicultural cities,
          and strong student communities, but each has different strengths.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">
          Australia May Be Stronger For
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 leading-7">
          <li>Students interested in healthcare, hospitality, and applied fields</li>
          <li>Those who prefer warmer climate and coastal lifestyle</li>
          <li>Students comparing city-based lifestyle and campus experience</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">
          Canada May Be Stronger For
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 leading-7">
          <li>Students comparing long-term career pathways carefully</li>
          <li>Those interested in technology, analytics, business, and public systems</li>
          <li>Students seeking broad multicultural academic environments</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">
          What Should Students Compare?
        </h2>
        <p className="text-slate-700 leading-7">
          Compare tuition, living costs, city fit, course quality, part-time work
          options, post-study possibilities, weather, and lifestyle before making
          a decision. There is no single best country for everyone.
        </p>
      </article>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Explore More</h2>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/study-in-australia"
            className="rounded-xl bg-amber-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-amber-700"
          >
            Study in Australia
          </Link>
          <Link
            href="/study-in-canada"
            className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50"
          >
            Study in Canada
          </Link>
        </div>
      </section>
    </main>
  );
}