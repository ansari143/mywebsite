import Link from "next/link";
import type { Metadata } from "next";
import { tests } from "@/data/tests";

export const metadata: Metadata = {
  title: "Free Career Tests | Find Your Best Academic and Career Path | Nishaglobal Education",
  description:
    "Take free career tests for engineering, medical, government jobs, aviation, and more. Get instant scores, topic-wise insights, and personalized guidance to choose the right stream.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/tests",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function TestsHub() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Free Career Assessment Tools
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Career Tests: Discover Your Academic and Professional Path</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Take scientifically-designed career assessments to identify your strengths, interests, and ideal academic streams. Get personalized recommendations for courses, careers, and skill development paths.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Who These Tests Are For</h3>
            <p className="mt-2 text-slate-600">
              Students choosing academic streams, graduates planning career transitions, and professionals seeking skill development. Perfect for those who want data-driven insights into their aptitudes and preferences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Who Should Consider Other Options</h3>
            <p className="mt-2 text-slate-600">
              Those seeking immediate career counseling or therapy. These assessments provide guidance but are not substitutes for professional advice from career counselors or psychologists.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">100% free</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">50 questions</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Instant score</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Topic-wise guidance</span>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How Career Assessments Work</h2>
        <p className="mt-3 text-slate-600">
          Our tests combine psychometric principles with career research to provide actionable insights. Each assessment takes 10-15 minutes and generates a detailed report with recommendations.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">📊</div>
            <h3 className="mt-2 font-semibold text-slate-900">Interest Analysis</h3>
            <p className="mt-1 text-sm text-slate-600">
              Identify subjects and activities that energize you most.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">🎯</div>
            <h3 className="mt-2 font-semibold text-slate-900">Aptitude Assessment</h3>
            <p className="mt-1 text-sm text-slate-600">
              Evaluate your natural abilities in different academic areas.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">🚀</div>
            <h3 className="mt-2 font-semibold text-slate-900">Career Matching</h3>
            <p className="mt-1 text-sm text-slate-600">
              Connect your profile to suitable academic and professional paths.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Available Career Assessments</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Choose from specialized tests designed for different stages of career planning. Each test provides detailed insights and next-step recommendations.
          </p>
        </div>

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
      </section>

      <section className="rounded-3xl border border-gray-200 bg-blue-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Test Comparison Guide</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Test Type</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Best For</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Duration</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Key Insights</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Stream Selector</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Class 10-12 students</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">10 min</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Science/Commerce/Arts recommendations</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Career Assessment</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Graduates & professionals</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">15 min</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Industry & role matching</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Skill Evaluation</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Skill development planning</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">12 min</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Strengths & improvement areas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">Are these tests scientifically valid?</h3>
            <p className="mt-2 text-sm text-slate-600">Our assessments are based on established career development theories and psychometric principles. While not clinical instruments, they provide reliable indicators for career exploration.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">Can I retake the tests?</h3>
            <p className="mt-2 text-sm text-slate-600">Yes, you can retake any test after 30 days. This allows you to track changes in your interests and aptitudes over time.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">How do I interpret my results?</h3>
            <p className="mt-2 text-sm text-slate-600">Each test provides a detailed report with scores, explanations, and recommendations. Higher scores indicate stronger alignment with those areas.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">Are the results stored or shared?</h3>
            <p className="mt-2 text-sm text-slate-600">Results are stored securely for your access only. We never share individual test data with third parties without your explicit consent.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Ready to Discover Your Path?</h2>
        <p className="mt-4 text-slate-700">
          Take the first step towards your ideal career with our free assessments. Choose the test that matches your current stage and goals.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tests/stream-selector/start"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Start Stream Selector Test
          </Link>
          <Link
            href="/tests/career-assessment/start"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Career Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
