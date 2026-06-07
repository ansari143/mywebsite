"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PracticeSet } from "@/data/practiceTests";

type Props = {
  set: PracticeSet;
};

export default function PracticeTestClient({ set }: Props) {
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const total = set.questions.length;
  const isLongTest = total >= 120;
  const questionsPerPage = isLongTest ? 20 : total;
  const totalPages = Math.ceil(total / questionsPerPage);
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === total;

  const pageQuestions = useMemo(() => {
    if (!isLongTest) return set.questions;

    const startIndex = (currentPage - 1) * questionsPerPage;
    return set.questions.slice(startIndex, startIndex + questionsPerPage);
  }, [currentPage, isLongTest, questionsPerPage, set.questions]);

  const pageAnsweredCount = useMemo(
    () => pageQuestions.filter((question) => answers[question.id]).length,
    [answers, pageQuestions]
  );

  const subjectJumpLinks = useMemo(() => {
    if (!isLongTest) {
      return [] as Array<{ label: string; page: number; range: string }>;
    }

    const links: Array<{ label: string; page: number; range: string }> = [];
    const seen = new Set<string>();

    set.questions.forEach((question, index) => {
      let label = "";

      if (question.id.includes("-math-")) label = "Mathematics";
      else if (question.id.includes("-phys-")) label = "Physics";
      else if (question.id.includes("-chem-")) label = "Chemistry";

      if (!label || seen.has(label)) return;

      seen.add(label);

      const page = Math.floor(index / questionsPerPage) + 1;
      const startQuestion = index + 1;
      const endQuestion = Math.min(index + 60, total);

      links.push({
        label,
        page,
        range: `Q${startQuestion}-${endQuestion}`,
      });
    });

    return links;
  }, [isLongTest, questionsPerPage, set.questions, total]);

  const visiblePages = useMemo(() => {
    if (!isLongTest) return [];

    const pages = new Set<number>();
    pages.add(1);
    pages.add(totalPages);

    for (let p = currentPage - 1; p <= currentPage + 1; p += 1) {
      if (p >= 1 && p <= totalPages) pages.add(p);
    }

    return Array.from(pages).sort((a, b) => a - b);
  }, [currentPage, isLongTest, totalPages]);

  const result = useMemo(() => {
    const correct = set.questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;

    const percent = total ? Math.round((correct / total) * 100) : 0;

    let label = "Keep Practicing";
    let message =
      "Review the explanations carefully and retry weak topics before moving ahead.";

    if (percent >= 80) {
      label = "Excellent";
      message =
        "Great performance. Continue with higher difficulty sets or full mock tests.";
    } else if (percent >= 60) {
      label = "Good Progress";
      message =
        "You are building confidence. Review weak areas and attempt one more practice round.";
    }

    return { correct, percent, label, message };
  }, [answers, set.questions, total]);

  const topicStats = useMemo(() => {
    const stats: Record<string, { total: number; correct: number; percent: number }> =
      {};

    set.questions.forEach((q) => {
      if (!stats[q.topic]) {
        stats[q.topic] = { total: 0, correct: 0, percent: 0 };
      }

      stats[q.topic].total += 1;

      if (answers[q.id] === q.correctAnswer) {
        stats[q.topic].correct += 1;
      }
    });

    Object.keys(stats).forEach((topic) => {
      const value = stats[topic];
      value.percent = value.total
        ? Math.round((value.correct / value.total) * 100)
        : 0;
    });

    return stats;
  }, [answers, set.questions]);

  const strongestTopics = Object.entries(topicStats)
    .sort((a, b) => b[1].percent - a[1].percent)
    .slice(0, 3);

  const weakTopics = Object.entries(topicStats)
    .sort((a, b) => a[1].percent - b[1].percent)
    .slice(0, 3);

  const handleSelect = (questionId: string, answerId: "A" | "B" | "C" | "D") => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="site-page">
      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Free practice test • English only
        </div>

        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {set.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          {set.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-300">
          <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
            {set.questionCount} Questions
          </span>
          <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
            ~{set.estimatedMinutes} min
          </span>
          <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200 capitalize">
            {set.level}
          </span>
          <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
            {set.examType}
          </span>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Your progress</h2>
            <p className="mt-1 text-sm text-slate-300">
              Answer all questions, then submit to see your score and explanations.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-medium text-slate-300">
            Answered: {answeredCount}/{total}
          </div>
        </div>

        {isLongTest && (
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Long-test navigation
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Use subject jump links or page buttons to move through the
                    paper without losing answers.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-[#0b1220] px-4 py-2 text-sm font-medium text-slate-300">
                  Page {currentPage} of {totalPages} • {pageAnsweredCount}/
                  {pageQuestions.length} answered on this page
                </div>
              </div>

              {subjectJumpLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {subjectJumpLinks.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => goToPage(item.page)}
                      className={[
                        "rounded-full border px-4 py-2 text-sm font-semibold transition",
                        currentPage === item.page
                          ? "border-blue-500 bg-blue-600 text-white"
                          : "border-slate-700 bg-[#0b1220] text-slate-300 hover:border-blue-500 hover:bg-slate-800/70",
                      ].join(" ")}
                    >
                      {item.label} • {item.range}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => goToPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous Page
                </button>

                {visiblePages.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={[
                      "rounded-xl border px-4 py-2 text-sm font-semibold transition",
                      currentPage === page
                        ? "border-blue-500 bg-blue-600 text-white"
                        : "border-slate-700 bg-[#0b1220] text-slate-300 hover:border-blue-500 hover:bg-slate-800/70",
                    ].join(" ")}
                  >
                    Page {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next Page
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="space-y-5">
        {pageQuestions.map((q, index) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          const questionNumber = isLongTest
            ? (currentPage - 1) * questionsPerPage + index + 1
            : index + 1;

          return (
            <section
              key={q.id}
              className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-300">
                    Question {questionNumber}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {q.question}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
                  <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
                    {q.topic}
                  </span>
                  <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
                    {q.difficulty}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {q.options.map((opt) => {
                  const active = userAnswer === opt.id;
                  const showCorrect = submitted && opt.id === q.correctAnswer;
                  const showWrong =
                    submitted && active && opt.id !== q.correctAnswer;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={[
                        "rounded-2xl border p-4 text-left text-sm leading-7 transition sm:text-base",
                        active
                          ? "border-blue-400 bg-blue-50 text-blue-950"
                          : "border-slate-700 bg-[#0b1220] text-slate-300 hover:border-blue-500 hover:bg-slate-800/70 hover:text-white",
                        showCorrect
                          ? "border-slate-700 bg-emerald-950/40 text-slate-300"
                          : "",
                        showWrong
                          ? "border-slate-700 bg-rose-950/40 text-slate-300"
                          : "",
                      ].join(" ")}
                    >
                      <span className="font-semibold">{opt.id}.</span>{" "}
                      <span>{opt.text}</span>

                      {submitted && showCorrect && (
                        <span className="ml-2 font-semibold text-slate-300">
                          ✓ Correct
                        </span>
                      )}

                      {submitted && showWrong && (
                        <span className="ml-2 font-semibold text-slate-300">
                          ✗ Your choice
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-2xl border border-blue-500 bg-blue-950/30 p-4">
                  <p className="text-sm font-semibold text-white">
                    Explanation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {q.explanation}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    <span className="font-semibold text-white">
                      Correct answer:
                    </span>{" "}
                    {q.correctAnswer}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    <span className="font-semibold text-white">Result:</span>{" "}
                    <span className={isCorrect ? "text-slate-300" : "text-slate-300"}>
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {isLongTest && (
        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Your progress</h2>
              <p className="mt-1 text-sm text-slate-300">
                Answer all questions, then submit to see your score and explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm font-medium text-slate-300">
              Answered: {answeredCount}/{total}
            </div>
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="site-btn-primary w-full px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Submit Practice Test
          </button>

          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setCurrentPage(1);
            }}
            className="site-btn-secondary w-full px-5 py-3 sm:w-auto"
          >
            Reset Answers
          </button>
        </div>

        {isLongTest && !allAnswered && (
          <p className="mt-3 text-sm text-slate-300">
            You can move page by page while your answers stay saved. Submission remains
            available after all {total} questions are answered.
          </p>
        )}

        {!allAnswered && (
          <p className="mt-3 text-sm text-amber-300">
            Please answer all questions before submitting.
          </p>
        )}
      </section>

      {submitted && (
        <>
          <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-sm font-semibold text-blue-200">
                  {result.label}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  Your practice result
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  {result.message}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-300">
                    Score
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    {result.percent}%
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-300">
                    Correct
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    {result.correct}/{total}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-700 bg-[#111827] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-white">
                Strongest topics
              </h3>

              <div className="mt-4 space-y-4">
                {strongestTopics.map(([topic, value]) => (
                  <div key={topic}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium capitalize text-slate-300">
                        {topic}
                      </span>
                      <span className="text-slate-300">{value.percent}%</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-700">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${value.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-700 bg-[#111827] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-white">
                Topics to improve
              </h3>

              <div className="mt-4 space-y-4">
                {weakTopics.map(([topic, value]) => (
                  <div key={topic}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium capitalize text-slate-300">
                        {topic}
                      </span>
                      <span className="text-slate-300">{value.percent}%</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-700">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: `${value.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-blue-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-white">
              Turn practice into career guidance
            </h3>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
              Practice tests help you improve performance, but career guidance helps
              students choose the right direction. Use both together on Nishaglobal
              Education.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={
                  set.category === "engineering-entrance"
                    ? "/tests/engineering"
                    : "/study-abroad"
                }
                className="site-btn-primary px-5 py-3 text-center"
              >
                {set.category === "engineering-entrance"
                  ? "Take Engineering Career Test"
                  : "Explore Study Abroad Pages"}
              </Link>

              <Link href="/tests" className="site-btn-secondary px-5 py-3 text-center">
                View All Career Tests
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}