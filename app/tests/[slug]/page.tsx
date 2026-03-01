import Link from "next/link";
import { getTestBySlug } from "@/data/tests";
import { notFound } from "next/navigation";

export default async function StreamDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const test = getTestBySlug(slug);

  if (!test) return notFound();

  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <div className="text-4xl">{test.icon}</div>
        <h1 className="mt-2 text-2xl font-bold">{test.title}</h1>
        <p className="mt-3 text-gray-600">{test.summary}</p>

        <h3 className="mt-6 font-semibold">Skills Required</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {test.bestFor.map((b) => (
            <span key={b} className="rounded-full bg-gray-100 px-3 py-1 text-xs">
              {b}
            </span>
          ))}
        </div>

        <h3 className="mt-6 font-semibold">What you will get</h3>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          <li>Score in percentage</li>
          <li>Score-based recommendation</li>
          <li>Next 6-month action plan</li>
          <li>Backup stream suggestions</li>
        </ul>
      </div>

      <aside className="rounded-2xl bg-white p-6 shadow-sm h-fit md:sticky md:top-24">
        <p className="text-sm text-gray-600">Test Info</p>
        <div className="mt-2 space-y-1 text-sm">
          <p>✅ Questions: {test.questions.length}</p>
          <p>⏱️ Time: ~{test.durationMin} minutes</p>
          <p>📌 Result: Instant</p>
        </div>

        <Link
          href={`/tests/${test.slug}/start`}
          className="mt-5 inline-block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-white hover:bg-blue-700"
        >
          Start Test
        </Link>
      </aside>
    </div>
  );
}
