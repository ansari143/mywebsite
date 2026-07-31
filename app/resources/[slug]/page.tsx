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
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/practice-tests",
  },
};

export default function PracticeTestsHubPage() {
  const govSlugs = ["ctet", "ssc", "railway"];

  const generalCategories = practiceCategories.filter(
    (category) => !govSlugs.includes(category.slug)
  );

  const govCategories = practiceCategories.filter((category) =>
    govSlugs.includes(category.slug)
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
        className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5"
      >
        <h3 className="text-xl font-bold text-white">{category.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {category.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
            {count} practice set{count > 1 ? "s" : ""}
          </span>

          <span className="rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-slate-300">
            Instant feedback
          </span>
        </div>

        <div className="mt-6">
          <Link
            href={`/practice-tests/${category.slug}`}
            className="site-btn-primary px-5 py-3 text-center"
          >
            Explore {category.shortTitle}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="site-page">
      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Practice Zone
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Practice Tests: Master Exams with Targeted Preparation
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          Access original practice question sets with instant scoring, detailed explanations,
          and performance analytics. Focus your preparation on specific exam patterns and
          question types.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">
              Who These Practice Tests Are For
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Students preparing for competitive exams, test-takers seeking realistic practice,
              and learners who want detailed feedback on their performance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">
              Who Should Consider Alternatives
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Learners seeking full video courses or complete study materials should combine
              these tests with structured lessons and official resources.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
          {["100% Free", "Original Questions", "Instant Scoring", "Detailed Explanations"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Practice Test Methodology
        </h2>

        <p className="mt-3 text-slate-300">
          Our practice tests mirror exam-style conditions with original questions,
          accurate timing, and answer explanations. Each test helps identify improvement areas.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["📝", "Exam-Accurate", "Questions match real exam patterns and difficulty."],
            ["⏱️", "Timed Practice", "Experience real exam time pressure and pacing."],
            ["📊", "Instant Results", "Immediate scoring with detailed performance breakdown."],
            ["💡", "Smart Explanations", "Learn from mistakes with clear solution walkthroughs."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5 text-center"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Available Practice Categories
        </h2>

        <p className="mt-2 text-slate-300">
          Choose from comprehensive practice test collections covering major competitive
          exams. Each category includes question sets with different difficulty levels.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {generalCategories.map(renderCard)}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <span className="inline-flex rounded-full border border-amber-500 bg-amber-950/60 px-3 py-1 text-sm font-semibold text-amber-200">
          Government Jobs
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Government Jobs Practice Tests
        </h2>

        <p className="mt-2 text-slate-300">
          Bilingual practice sets for CTET, SSC, and Railway recruitment exams with
          full-length mocks, instant scoring, and Hindi-English support.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {govCategories.map(renderCard)}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Practice Test Categories Comparison
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="site-table">
            <thead>
              <tr>
                {["Exam Type", "Question Format", "Duration", "Best For"].map((header) => (
                  <th key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ["IELTS", "Reading, Listening, Writing, Speaking", "2.5-3 hours", "Study abroad applicants"],
                ["TOEFL iBT", "Reading, Listening, Speaking, Writing, Integrated Tasks", "About 2 hours", "University-focused English proficiency candidates"],
                ["Engineering Entrance", "MCQs in Physics, Chemistry, Math", "3 hours", "Engineering aspirants"],
                ["CTET", "MCQs in Child Development, Teaching", "2.5 hours", "Teaching certification candidates"],
                ["SSC Exams", "MCQs in General Knowledge, Reasoning", "1-2 hours", "Government job aspirants"],
                ["Medical NEET", "MCQs in Physics, Chemistry, Biology", "3 hours", "Medical aspirants"],
                ["Aviation Careers", "Role-wise MCQs and interview scenarios", "15-20 min per set", "Cabin crew, ground, and support staff aspirants"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={cell}>
                      {index === 0 ? (
                        <strong className="text-slate-900">{cell}</strong>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-3">
          {[
            [
              "Are these official practice tests?",
              "No, these are original practice tests designed to simulate exam conditions. They help you prepare but are not affiliated with official exam bodies.",
            ],
            [
              "Can I review my answers after submitting?",
              "Yes, after completing any test, you can review all questions with correct answers, explanations, and your performance analysis.",
            ],
            [
              "How often are new tests added?",
              "We regularly add new question sets based on the latest exam patterns. Check back frequently for updated content.",
            ],
            [
              "Are practice tests available in multiple languages?",
              "English is the primary language. Some government exam categories include bilingual support for regional language speakers.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-white">
                {q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Start Your Practice Journey
        </h2>

        <p className="mt-4 text-slate-300">
          Choose your exam category and begin practicing with confidence. Regular practice
          with detailed feedback is the key to exam success.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/practice-tests/ielts"
            className="site-btn-primary px-5 py-3 text-center text-sm"
          >
            Practice IELTS Tests
          </Link>

          <Link
            href="/practice-tests/toefl"
            className="site-btn-secondary px-5 py-3 text-center text-sm"
          >
            Practice TOEFL Tests
          </Link>

          <Link
            href="/practice-tests/engineering-entrance"
            className="site-btn-secondary px-5 py-3 text-center text-sm"
          >
            Try Engineering Entrance
          </Link>
        </div>
      </section>
    </div>
  );
}