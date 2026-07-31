import Link from "next/link";
import type { Metadata } from "next";
import { tests } from "@/data/tests";

export const metadata: Metadata = {
  title: "Free Career Tests | Find Your Best Academic and Career Path | Nishaglobal Education",
  description:
    "Take free career tests for engineering, medical, government jobs, aviation, and more. Get instant scores, topic-wise insights, and personalized guidance to choose the right stream.",
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/tests",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const steps = [
  ["📊", "Interest Analysis", "Identify subjects and activities that energize you most."],
  ["🎯", "Aptitude Assessment", "Evaluate your natural abilities in different academic areas."],
  ["🚀", "Career Matching", "Connect your profile to suitable academic and professional paths."],
];

const comparisonRows = [
  ["Stream Selector", "Class 10-12 students", "10 min", "Science / Commerce / Arts recommendations"],
  ["Career Assessment", "Graduates & professionals", "15 min", "Industry & role matching"],
  ["Skill Evaluation", "Skill development planning", "12 min", "Strengths & improvement areas"],
];

const faqs = [
  [
    "Are these tests scientifically valid?",
    "Our assessments are based on established career development theories and psychometric principles. They are useful for career exploration but are not clinical instruments.",
  ],
  [
    "Can I retake the tests?",
    "Yes, you can retake tests to track changes in your interests, confidence, and career direction over time.",
  ],
  [
    "How do I interpret my results?",
    "Each test gives scores, explanations, and recommendations. Higher scores indicate stronger alignment with those areas.",
  ],
  [
    "Are the results stored or shared?",
    "Results should be used only for your personal guidance. Individual test data should not be shared without consent.",
  ],
];

export default function TestsHub() {
  return (
    <div className="site-page">
      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Free Career Assessment Tools
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Career Tests: Discover Your Academic and Professional Path
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          Take career assessments to identify your strengths, interests, and ideal academic streams.
          Get personalized recommendations for courses, careers, and skill development paths.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who These Tests Are For</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Students choosing academic streams, graduates planning career transitions, and
              professionals seeking skill development or career direction.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who Should Consider Other Options</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              These tests provide guidance only. They are not a substitute for professional career
              counselling, therapy, or psychological assessment.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
          {["100% Free", "50 Questions", "Instant Score", "Topic-wise Guidance"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">How Career Assessments Work</h2>
        <p className="mt-3 text-slate-300">
          Our tests combine career research with practical guidance to provide clear next-step
          recommendations. Each assessment is designed to help users make better academic and
          professional decisions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5 text-center">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Available Career Assessments</h2>
        <p className="mt-2 text-slate-300">
          Choose from specialized tests designed for different stages of career planning. Each test
          provides clear insights and next-step recommendations.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map((t) => (
            <div key={t.slug} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <div className="text-3xl">{t.icon}</div>

              <h3 className="mt-3 text-xl font-bold text-white">{t.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">{t.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {t.bestFor.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href={`/tests/${t.slug}`} className="site-btn-secondary w-full text-center sm:w-auto">
                  View Details
                </Link>
                <Link href={`/tests/${t.slug}/start`} className="site-btn-primary w-full text-center sm:w-auto">
                  Start Free Test
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Test Comparison Guide</h2>

        <div className="mt-6 overflow-x-auto">
          <table className="site-table">
            <thead>
              <tr>
                <th>Test Type</th>
                <th>Best For</th>
                <th>Duration</th>
                <th>Key Insights</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 0 ? <strong className="text-slate-900">{cell}</strong> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <h3 className="text-base font-semibold text-white">{q}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Ready to Discover Your Path?</h2>
        <p className="mt-4 text-slate-300">
          Take the first step toward your ideal career with our free assessments. Choose the test
          that matches your current stage and goals.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/tests/engineering/start" className="site-btn-primary text-center">
            Start Engineering Test
          </Link>
          <Link href="/tests/medical/start" className="site-btn-secondary text-center">
            Take Medical Career Test
          </Link>
        </div>
      </section>
    </div>
  );
}