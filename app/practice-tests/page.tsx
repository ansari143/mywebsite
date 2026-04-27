import Link from "next/link";
import type { Metadata } from "next";
import {
  practiceCategories,
  practiceSets,
  govPracticeCategories,
} from "@/data/practiceTests";

export const metadata: Metadata = {
  title:
    "Free Practice Tests for Engineering Entrance, IELTS, TOEFL, CTET, SSC, Railway, Medical NEET and Aviation Careers",
  description:
    "Take free original practice tests with instant scoring and explanations for JEE Main, JEE Advanced, COMEDK, WBJEE, KCET, IELTS, TOEFL, CTET, SSC, Railway, Medical NEET, and Aviation career roles.",
};

export default function PracticeTestsHubPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Practice Zone
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Practice Tests: Master Exams with Targeted Preparation
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Access original practice question sets with instant scoring, detailed explanations, and performance analytics. Focus your preparation on specific exam patterns and question types.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Who These Practice Tests Are For</h3>
            <p className="mt-2 text-slate-600">
              Students preparing for competitive exams, test-takers seeking realistic practice, and learners who want detailed feedback on their performance. Ideal for those who benefit from structured, exam-specific preparation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Who Should Consider Alternatives</h3>
            <p className="mt-2 text-slate-600">
              Those seeking comprehensive study materials or video lessons. These tests focus on practice questions and explanations rather than full course content.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">100% free</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Original questions</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Instant scoring</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Detailed explanations</span>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Practice Test Methodology</h2>
        <p className="mt-3 text-slate-600">
          Our practice tests mirror actual exam conditions with original questions, accurate timing, and comprehensive answer explanations. Each test includes performance analysis to help you identify improvement areas.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">📝</div>
            <h3 className="mt-2 font-semibold text-slate-900">Exam-Accurate</h3>
            <p className="mt-1 text-sm text-slate-600">
              Questions match real exam patterns and difficulty.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">⏱️</div>
            <h3 className="mt-2 font-semibold text-slate-900">Timed Practice</h3>
            <p className="mt-1 text-sm text-slate-600">
              Experience real exam time pressure and pacing.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">📊</div>
            <h3 className="mt-2 font-semibold text-slate-900">Instant Results</h3>
            <p className="mt-1 text-sm text-slate-600">
              Immediate scoring with detailed performance breakdown.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <div className="text-2xl">💡</div>
            <h3 className="mt-2 font-semibold text-slate-900">Smart Explanations</h3>
            <p className="mt-1 text-sm text-slate-600">
              Learn from mistakes with clear solution walkthroughs.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Available Practice Categories</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Choose from comprehensive practice test collections covering major competitive exams. Each category includes multiple question sets with varying difficulty levels.
          </p>
        </div>

        {(() => {
          const govSlugs = ["ctet", "ssc", "railway"];
          const generalCategories = practiceCategories.filter(
            (c) => !govSlugs.includes(c.slug)
          );
          const govCategories = practiceCategories.filter((c) =>
            govSlugs.includes(c.slug)
          );

          const renderCard = (category: (typeof practiceCategories)[number]) => {
            const govCategory = govPracticeCategories.find(
              (item) => item.slug === category.slug
            );
            const count = govCategory
              ? govCategory.sets.filter((set) => set.isLive).length
              : practiceSets.filter((item) => item.category === category.slug).length;

            return (
              <div
                key={category.slug}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    {count} practice set{count > 1 ? "s" : ""}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                    Instant feedback
                  </span>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/practice-tests/${category.slug}`}
                    className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    Explore {category.shortTitle}
                  </Link>
                </div>
              </div>
            );
          };

          return (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {generalCategories.map(renderCard)}
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <div className="inline-flex rounded-full border border-amber-300 bg-white px-3 py-1 text-sm font-medium text-amber-800">
                  Government Jobs
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Government Jobs Practice Tests
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Bilingual practice sets for CTET, SSC, and Railway recruitment exams with full-length mocks, instant scoring, and Hindi–English support.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {govCategories.map(renderCard)}
                </div>
              </div>
            </>
          );
        })()}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-blue-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Practice Test Categories Comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Exam Type</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Question Format</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Duration</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">IELTS</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Reading, Listening, Writing, Speaking</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">2.5-3 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Study abroad applicants</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">TOEFL iBT</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Reading, Listening, Speaking, Writing, Integrated Tasks</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">About 2 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">University-focused English proficiency candidates</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Engineering Entrance</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">MCQs in Physics, Chemistry, Math</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">3 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Engineering aspirants</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">CTET</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">MCQs in Child Development, Teaching</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">2.5 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Teaching certification candidates</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">SSC Exams</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">MCQs in General Knowledge, Reasoning</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">1-2 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Government job aspirants</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Medical NEET</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">MCQs in Physics, Chemistry, Biology</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">3 hours</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Medical aspirants</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Aviation Careers</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Role-wise MCQs and interview scenarios</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">15-20 min per set</td>
                <td className="border-r border-slate-200 px-4 py-3 text-slate-700">Cabin crew, ground, and support staff aspirants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">Are these official practice tests?</summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">No, these are original practice tests designed to simulate exam conditions. They help you prepare but are not affiliated with official exam bodies.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">Can I review my answers after submitting?</summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">Yes, after completing any test, you can review all questions with correct answers, explanations, and your performance analysis.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">How often are new tests added?</summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">We regularly add new question sets based on the latest exam patterns. Check back frequently for updated content.</p>
          </details>
          <details className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">Are practice tests available in multiple languages?</summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">English is the primary language. Some government exam categories include bilingual support for regional language speakers.</p>
          </details>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Start Your Practice Journey</h2>
        <p className="mt-4 text-slate-700">
          Choose your exam category and begin practicing with confidence. Regular practice with detailed feedback is the key to exam success.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/practice-tests/ielts"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Practice IELTS Tests
          </Link>
          <Link
            href="/practice-tests/toefl"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Practice TOEFL Tests
          </Link>
          <Link
            href="/practice-tests/engineering-entrance"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Try Engineering Entrance
          </Link>
        </div>
      </section>
    </div>
  );
}