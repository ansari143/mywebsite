import Link from "next/link";
import { getTestBySlug } from "@/data/tests";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    return {
      title: "Test Not Found | Nishaglobal Education",
      description: "The requested test could not be found.",
      robots: "noindex",
    };
  }

  return {
    title: `Start ${test.title} | Nishaglobal Education`,
    description: `Begin ${test.title} and get instant score-based guidance with practical next steps.`,
    robots: "noindex,follow",
  };
}

export default async function StartPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) return notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Free career test • instant guidance
        </div>

        <div className="mt-4 flex items-start gap-4">
          <div className="text-4xl">{test.icon}</div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{test.title}</h1>
            <p className="mt-3 text-gray-600">{test.summary}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Questions</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{test.questions.length}</p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Estimated time</p>
            <p className="mt-1 text-lg font-bold text-slate-900">~{test.durationMin} min</p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Result style</p>
            <p className="mt-1 text-lg font-bold text-slate-900">Score + roadmap</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Before you begin</h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>• Answer honestly for the most useful guidance.</li>
          <li>• Choose the best answer from A, B, C, or D for each question.</li>
          <li>• You will get instant score-based guidance, topic-wise strengths, and practical next steps.</li>
          <li>• The result is educational guidance only, not a final admission or career decision.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {test.bestFor.map((item) => (
            <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/tests/${test.slug}/quiz`}
            className="w-full rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            Begin Test
          </Link>
          <Link
            href="/tests"
            className="w-full rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto"
          >
            Back to All Tests
          </Link>
        </div>
      </section>
    </div>
  );
}
