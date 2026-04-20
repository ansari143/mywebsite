import Link from "next/link";
import { getTestBySlug } from "@/data/tests";
import { tests } from "@/data/tests";
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
    title: `${test.title} | Nishaglobal Education`,
    description: `${test.summary} Take this free test with ${test.questions.length} questions and get instant score-based guidance with next-step actions.`,
    alternates: {
      canonical: `https://nishaglobaleducation.com/tests/${test.slug}`,
    },
  };
}

export default async function StreamDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const test = getTestBySlug(slug);

  if (!test) return notFound();

  const relatedTests = tests.filter((item) => item.slug !== test.slug).slice(0, 3);

  const testFaqs = [
    {
      q: "Who should take this test?",
      a: "Students who want practical clarity before choosing a stream or career path should take this test. It helps identify fit areas and weak-fit areas so decisions are based on evidence, not guesswork.",
    },
    {
      q: "Is this an official government or board exam?",
      a: "No. This is an original educational assessment created for guidance and planning. It is useful for self-evaluation, but final academic or career decisions should be verified with official institutions.",
    },
    {
      q: "How should I use my score after completing the test?",
      a: "Use your score as a starting signal. Review your strongest and weakest topics, compare with backup paths, and follow a 90-day action plan before making final stream or course choices.",
    },
    {
      q: "Can I retake this test?",
      a: "Yes. Retaking after focused practice can show whether your understanding and confidence have improved. Compare both attempts and track topic-level changes, not just total percentage.",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Free career assessment
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

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>Students unsure which stream or career path fits their strengths.</li>
            <li>Learners who want data-backed guidance before spending on courses.</li>
            <li>Parents who want a structured discussion starter with their child.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
            <li>Users expecting guaranteed admissions, jobs, or salary outcomes.</li>
            <li>People looking for licensed counselling instead of educational guidance.</li>
            <li>Learners unwilling to review mistakes after seeing the result.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Step-by-step roadmap after this test</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 1: Take the test honestly</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Avoid random guessing. Realistic answers create a more reliable profile.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 2: Review score + topic pattern</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Focus on strong and weak themes instead of only total percentage.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 3: Compare backup paths</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Check alternate streams so you do not lock into one option too early.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 4: Follow 90-day actions</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Use small weekly goals to improve weak areas before final decisions.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <div className="text-4xl">{test.icon}</div>
        <h2 className="mt-2 text-2xl font-bold">Test overview</h2>
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

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {testFaqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">Compare with related tests</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {relatedTests.map((item) => (
            <Link
              key={item.slug}
              href={`/tests/${item.slug}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">View details →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
