import Link from "next/link";
import { tests } from "@/data/tests";

export default function TestsHub() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Free Career Tests</h2>
      <p className="mt-2 text-gray-600">
        Select a stream and start your free 50-question career test.
      </p>

      <div className="mt-3 text-sm font-medium text-green-600">
        ✔️ 100% Free &nbsp; ✔️ 50 Questions &nbsp; ✔️ Instant Guidance
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t) => (
          <div
            key={t.slug}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="text-3xl">{t.icon}</div>

            <h3 className="mt-2 font-semibold">{t.title}</h3>

            <p className="mt-2 text-sm text-gray-600">{t.summary}</p>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600">
              {t.bestFor.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/tests/${t.slug}`}
                className="w-full rounded-xl border px-4 py-2 text-center hover:bg-gray-50 sm:w-auto"
              >
                View Details
              </Link>
              <Link
                href={`/tests/${t.slug}/start`}
                className="w-full rounded-xl bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700 sm:w-auto"
              >
                Start Free Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}