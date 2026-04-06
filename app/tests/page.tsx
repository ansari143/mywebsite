import Link from "next/link";
import { tests } from "@/data/tests";

export default function TestsHub() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Free stream selection tools
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Career Tests for students in India and worldwide</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Start with a free test, get an instant score, review stronger topics, compare backup streams, and continue with blogs, guides, and study abroad pages.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">100% free</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">50 questions</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Instant score</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Topic-wise guidance</span>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t) => (
          <div key={t.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">{t.icon}</div>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">{t.title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{t.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-600">
              {t.bestFor.map((b) => (
                <span key={b} className="rounded-full bg-slate-100 px-3 py-1">{b}</span>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href={`/tests/${t.slug}`} className="w-full rounded-xl border px-4 py-2 text-center hover:bg-gray-50 sm:w-auto">
                View Details
              </Link>
              <Link href={`/tests/${t.slug}/start`} className="w-full rounded-xl bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700 sm:w-auto">
                Start Free Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
