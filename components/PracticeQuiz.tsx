"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { GovPracticeSet, GovPracticeCategory } from "@/data/practiceTests";

type Props = {
  categorySlug: string;
  categoryTitle: string;
  set: GovPracticeSet;
  categoryData?: GovPracticeCategory;
};

export default function PracticeQuiz({
  categorySlug,
  categoryTitle,
  set,
  categoryData,
}: Props) {
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [navigatorPage, setNavigatorPage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const [language, setLanguage] = useState<"en" | "hi" | "both">("en");

  const otherLiveSets =
    categoryData?.sets.filter((s) => s.isLive && s.slug !== set.slug) || [];

  const questions = useMemo(() => set.questions || [], [set.questions]);
  const total = questions.length;
  const isLongQuiz = total > 40;
  const navigatorSize = isLongQuiz ? 25 : total;
  const totalNavigatorPages = Math.max(1, Math.ceil(total / navigatorSize));
  const reviewPageSize = 20;
  const totalReviewPages = Math.max(1, Math.ceil(total / reviewPageSize));
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === total;

  const currentQuestion = questions[currentQuestionIndex];

  const currentNavigatorQuestions = useMemo(() => {
    const start = (navigatorPage - 1) * navigatorSize;
    return questions.slice(start, start + navigatorSize);
  }, [navigatorPage, navigatorSize, questions]);

  const currentReviewQuestions = useMemo(() => {
    const start = (reviewPage - 1) * reviewPageSize;
    return questions.slice(start, start + reviewPageSize);
  }, [questions, reviewPage]);

  const result = useMemo(() => {
    if (!submitted) return null;

    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correct) correct += 1;
    }

    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { correct, percent };
  }, [submitted, answers, questions, total]);

  const handleAnswer = (questionId: string, answer: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (allAnswered) setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentQuestionIndex(0);
    setNavigatorPage(1);
    setReviewPage(1);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    const page = Math.floor(index / navigatorSize) + 1;
    setNavigatorPage(page);
  };

  const renderQuestionText = (q: (typeof questions)[number]) => {
    if (language === "hi") return q.hi;
    if (language === "both") return `${q.text} (${q.hi})`;
    return q.text;
  };

  const renderOptionText = (opt: (typeof currentQuestion.options)[number]) => {
    if (language === "hi") return opt.hi;
    if (language === "both") return `${opt.text} (${opt.hi})`;
    return opt.text;
  };

  const renderExplanation = (q: (typeof questions)[number]) => {
    if (language === "hi") return q.explanationHi;
    if (language === "both") return `${q.explanation} (${q.explanationHi})`;
    return q.explanation;
  };

  if (!questions.length) {
    return (
      <div className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm">
        <p className="text-center text-slate-300">
          No questions available for this set.
        </p>
      </div>
    );
  }

  if (submitted && result) {
    return (
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 text-center shadow-sm sm:p-8">
          <span className="inline-flex rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-sm font-semibold text-slate-300">
            Quiz Complete
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Your Score: {result.percent}%
          </h2>

          <p className="mt-3 text-lg text-slate-300">
            You scored {result.correct} out of {total}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleRetry} className="site-btn-primary px-6 py-3">
              Retry Quiz
            </button>

            <Link
              href={`/practice-tests/${categorySlug}`}
              className="site-btn-secondary px-6 py-3 text-center"
            >
              Back to {categoryTitle} Practice
            </Link>

            <Link href="/practice-tests" className="site-btn-secondary px-6 py-3 text-center">
              All Practice Tests
            </Link>
          </div>

          {otherLiveSets.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Try Another Set</h3>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {otherLiveSets.slice(0, 3).map((otherSet) => (
                  <Link
                    key={otherSet.slug}
                    href={`/practice-tests/${categorySlug}/${otherSet.slug}`}
                    className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-blue-500 hover:text-blue-200"
                  >
                    {otherSet.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold text-white">Review Answers</h3>

          {isLongQuiz && (
            <div className="mt-5 rounded-2xl border border-slate-700 bg-[#0b1220] p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-300">
                  Reviewing questions {(reviewPage - 1) * reviewPageSize + 1} to{" "}
                  {Math.min(reviewPage * reviewPageSize, total)} of {total}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setReviewPage(Math.max(1, reviewPage - 1))}
                    disabled={reviewPage === 1}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
                  >
                    Previous Page
                  </button>

                  <span className="text-sm font-medium text-slate-300">
                    Page {reviewPage} of {totalReviewPages}
                  </span>

                  <button
                    onClick={() =>
                      setReviewPage(Math.min(totalReviewPages, reviewPage + 1))
                    }
                    disabled={reviewPage === totalReviewPages}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 space-y-4">
            {currentReviewQuestions.map((q, index) => {
              const userAnswer = answers[q.id];
              const questionNumber = (reviewPage - 1) * reviewPageSize + index + 1;

              return (
                <div
                  key={q.id}
                  className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm"
                >
                  <h4 className="font-semibold text-white">Question {questionNumber}</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    {renderQuestionText(q)}
                  </p>

                  <div className="mt-4 space-y-2">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`rounded-xl border p-3 text-sm leading-7 ${
                          opt.id === q.correct
                            ? "border-slate-700 bg-emerald-950/40 text-slate-300"
                            : opt.id === userAnswer
                              ? "border-slate-700 bg-rose-950/40 text-slate-300"
                              : "border-slate-700 bg-slate-800/70 text-slate-300"
                        }`}
                      >
                        <span className="font-semibold">{opt.id}.</span>{" "}
                        {language === "hi"
                          ? opt.hi
                          : language === "en"
                            ? opt.text
                            : `${opt.text} (${opt.hi})`}
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 rounded-2xl border border-blue-500 bg-blue-950/40 p-4 text-sm leading-7 text-blue-100">
                    <strong className="text-white">Explanation:</strong>{" "}
                    {renderExplanation(q)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
              Practice Quiz
            </span>

            <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {set.title} - {categoryTitle}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
                Question {currentQuestionIndex + 1} of {total}
              </span>

              <span className="rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-slate-300">
                Answered: {answeredCount}/{total}
              </span>

              {isLongQuiz && (
                <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
                  Navigator Page: {navigatorPage}/{totalNavigatorPages}
                </span>
              )}
            </div>
          </div>

          {set.bilingual && (
            <div className="flex flex-wrap gap-2">
              {[
                ["en", "English"],
                ["hi", "Hindi"],
                ["both", "Both"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setLanguage(value as "en" | "hi" | "both")}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                    language === value
                      ? "bg-blue-600 text-white"
                      : "border border-slate-700 bg-slate-800/70 text-slate-300 hover:border-blue-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-white">
          Question {currentQuestionIndex + 1}
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          {renderQuestionText(currentQuestion)}
        </p>

        <div className="mt-6 space-y-3">
      {currentQuestion.options.map((opt) => (
  <button
    key={opt.id}
    onClick={() => handleAnswer(currentQuestion.id, opt.id)}
    aria-pressed={answers[currentQuestion.id] === opt.id}
    className={`w-full rounded-2xl border p-4 text-left text-sm leading-7 transition sm:text-base ${
      answers[currentQuestion.id] === opt.id
        ? "border-blue-500 bg-blue-50 text-slate-900 ring-2 ring-blue-200 shadow-sm"
        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-slate-900"
    }`}
  >
    <span className="font-semibold">{opt.id}.</span>{" "}
    <span className="text-inherit">{renderOptionText(opt)}</span>
    {answers[currentQuestion.id] === opt.id && (
      <span className="ml-2 inline-flex items-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
        Selected
      </span>
    )}
  </button>
))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button
            onClick={() => jumpToQuestion(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {currentNavigatorQuestions.map((question, localIndex) => {
              const index = (navigatorPage - 1) * navigatorSize + localIndex;

              return (
                <button
                  key={index}
                  onClick={() => jumpToQuestion(index)}
                  className={`h-9 w-9 rounded-full text-sm font-semibold ${
                    index === currentQuestionIndex
                      ? "bg-blue-600 text-white"
                      : answers[question.id]
                        ? "bg-emerald-600 text-white"
                        : "border border-slate-700 bg-slate-800 text-slate-300"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => jumpToQuestion(Math.min(total - 1, currentQuestionIndex + 1))}
            disabled={currentQuestionIndex === total - 1}
            className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      {isLongQuiz && (
        <section className="rounded-2xl border border-slate-700 bg-[#111827] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">
              Showing question buttons {(navigatorPage - 1) * navigatorSize + 1} to{" "}
              {Math.min(navigatorPage * navigatorSize, total)}.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setNavigatorPage(Math.max(1, navigatorPage - 1))}
                disabled={navigatorPage === 1}
                className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
              >
                Prev Buttons
              </button>

              <span className="text-sm font-medium text-slate-300">
                Page {navigatorPage} of {totalNavigatorPages}
              </span>

              <button
                onClick={() =>
                  setNavigatorPage(Math.min(totalNavigatorPages, navigatorPage + 1))
                }
                disabled={navigatorPage === totalNavigatorPages}
                className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-1 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:opacity-50"
              >
                Next Buttons
              </button>
            </div>
          </div>
        </section>
      )}

      {allAnswered && (
        <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 text-center shadow-sm">
          <p className="text-slate-300">All questions answered. Ready to submit?</p>

          <button
            onClick={handleSubmit}
            className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Submit Quiz
          </button>
        </section>
      )}
    </div>
  );
}