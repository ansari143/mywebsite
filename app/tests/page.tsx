import Link from "next/link";
import { tests } from "@/data/tests";

export default function TestsHub() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Career Tests</h2>
      <p className="mt-2 text-gray-600">Select a stream and start your 50-question mock test.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t) => (
          <div key={t.slug} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-3xl">{t.icon}</div>
            <h3 className="mt-2 font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{t.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {t.bestFor.map((b) => (
                <span key={b} className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/tests/${t.slug}`}
                className="w-full sm:w-auto rounded-xl border px-4 py-2 text-center hover:bg-gray-50"
              >
                View
              </Link>
              <Link
                href={`/tests/${t.slug}/start`}
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
              >
                Start
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
