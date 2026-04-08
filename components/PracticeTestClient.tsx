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

  const total = set.questions.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === total;

  const result = useMemo(() => {
    let correct = 0;

    const topicMap: Record<
      string,
      { correct: number; total: number; percent: number }
    > = {};

    for (const q of set.questions) {
      if (!topicMap[q.topic]) {
        topicMap[q.topic] = { correct: 0, total: 0, percent: 0 };
      }

      topicMap[q.topic].total += 1;

      if (answers[q.id] === q.correctAnswer) {
        correct += 1;
        topicMap[q.topic].correct += 1;
      }
    }

    Object.keys(topicMap).forEach((key) => {
      const item = topicMap[key];
      item.percent = Math.round((item.correct / item.total) * 100);
    });

    const percent = total ? Math.round((correct / total) * 100) : 0;

    let label = "Needs Improvement";
    let message =
      "Review the explanations carefully and repeat the topics where your score is lower.";

    if (percent >= 80) {
      label = "Strong Performance";
      message =
        "You have a strong foundation here. Move to the next practice set and keep building consistency.";
    } else if (percent >= 60) {
      label = "Good Start";
      message =
        "You understand several basics well. Keep improving weak topics and practice regularly.";
    }

    return {
      correct,
      percent,
      label,
      message,
      topicMap,
    };
  }, [answers, set.questions, total]);

  const strongestTopics = Object.entries(result.topicMap)
    .sort((a, b) => b[1].percent - a[1].percent)
    .slice(0, 3);

  const weakTopics = Object.entries(result.topicMap)
    .sort((a, b) => a[1].percent - b[1].percent)
    .slice(0, 3);

  const handleSelect = (questionId: string, optionId: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Free practice test • English only
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          {set.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {set.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {set.questionCount} Questions
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            ~{set.estimatedMinutes} min
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 capitalize">
            {set.level}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            {set.examType}
          </span>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Your progress</h2>
            <p className="mt-1 text-sm text-slate-600">
              Answer all questions, then submit to see your score and explanations.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
            Answered: {answeredCount}/{total}
          </div>
        </div>
      </section>

      <div className="space-y-5">
        {set.questions.map((q, index) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <section
              key={q.id}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    Question {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {q.question}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                    {q.topic}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                    {q.difficulty}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {q.options.map((opt) => {
                  const active = userAnswer === opt.id;
                  const showCorrect = submitted && opt.id === q.correctAnswer;
                  const showWrong = submitted && active && opt.id !== q.correctAnswer;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={[
                        "rounded-2xl border p-4 text-left transition",
                        active ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:bg-gray-50",
                        showCorrect ? "border-green-500 bg-green-50" : "",
                        showWrong ? "border-red-500 bg-red-50" : "",
                      ].join(" ")}
                    >
                      <span className="font-semibold">{opt.id}.</span>{" "}
                      <span>{opt.text}</span>
                      {submitted && showCorrect && (
                        <span className="ml-2 font-semibold text-green-700">
                          ✓ Correct
                        </span>
                      )}
                      {submitted && showWrong && (
                        <span className="ml-2 font-semibold text-red-700">
                          ✗ Your choice
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Explanation
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {q.explanation}
                  </p>
                  <p className="mt-3 text-sm">
                    <span className="font-semibold text-slate-900">
                      Correct answer:
                    </span>{" "}
                    <span className="text-slate-700">{q.correctAnswer}</span>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold text-slate-900">
                      Result:
                    </span>{" "}
                    <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </p>
                </div>
              )}
            </section>
          );
        })}
      </div>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={!allAnswered}
            className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Submit Practice Test
          </button>

          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="w-full rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 sm:w-auto"
          >
            Reset Answers
          </button>
        </div>

        {!allAnswered && (
          <p className="mt-3 text-sm text-amber-700">
            Please answer all questions before submitting.
          </p>
        )}
      </section>

      {submitted && (
        <>
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  {result.label}
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Your practice result
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {result.message}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Score
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {result.percent}%
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Correct
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {result.correct}/{total}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Strongest topics</h3>
              <div className="mt-4 space-y-4">
                {strongestTopics.map(([topic, value]) => (
                  <div key={topic}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium capitalize text-slate-800">
                        {topic}
                      </span>
                      <span className="text-slate-600">{value.percent}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${value.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Topics to improve</h3>
              <div className="mt-4 space-y-4">
                {weakTopics.map(([topic, value]) => (
                  <div key={topic}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium capitalize text-slate-800">
                        {topic}
                      </span>
                      <span className="text-slate-600">{value.percent}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
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

          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Turn practice into career guidance
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              Practice tests help you improve performance, but your main website
              strength is career guidance. Use that advantage and move students from
              practice into your free stream selection tools.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={set.category === "engineering-entrance" ? "/tests/engineering" : "/study-abroad"}
                className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                {set.category === "engineering-entrance"
                  ? "Take Engineering Career Test"
                  : "Explore Study Abroad Pages"}
              </Link>

              <Link
                href="/tests"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50"
              >
                View All Career Tests
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}