"use client";

import { useMemo, useState } from "react";
import { getTestBySlug } from "@/data/tests";
import { useRouter, useParams } from "next/navigation";

export default function QuizPage() {
  const [showMissing, setShowMissing] = useState(false);
  const [missingNums, setMissingNums] = useState<number[]>([]);
  const [lang, setLang] = useState<"EN" | "HI" | "BOTH">("EN");

  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const test = useMemo(() => getTestBySlug(slug), [slug]);
  const questions = test?.questions ?? [];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});

  if (!test || questions.length === 0) {
    return (
      <div className="site-page">
        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 text-white shadow-sm sm:p-8">
          Test not found.
        </section>
      </div>
    );
  }

  const q = questions[index];
  const selected = answers[q.id];
  const answeredCount = Object.keys(answers).length;
  const total = questions.length;
  const allAnswered = answeredCount === total;

  const onSelect = (opt: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [q.id]: opt }));
  };

  const getMissingQuestionNumbers = () => {
    const missing: number[] = [];
    questions.forEach((qq, i) => {
      if (!answers[qq.id]) missing.push(i + 1);
    });
    return missing;
  };

  const submit = () => {
    const missing = getMissingQuestionNumbers();

    if (missing.length > 0) {
      setMissingNums(missing);
      setShowMissing(true);
      return;
    }

    let correct = 0;

    const topicScores: Record<
      string,
      { correct: number; total: number; percent: number }
    > = {};

    for (const ques of questions) {
      const topic = ques.topic || "overall";

      if (!topicScores[topic]) {
        topicScores[topic] = { correct: 0, total: 0, percent: 0 };
      }

      topicScores[topic].total += 1;

      if (answers[ques.id] === ques.correct) {
        correct += 1;
        topicScores[topic].correct += 1;
      }
    }

    Object.keys(topicScores).forEach((topic) => {
      const entry = topicScores[topic];
      entry.percent = Math.round((entry.correct / entry.total) * 100);
    });

    const percent = Math.round((correct / total) * 100);

    const questionDetails = questions.map((ques) => ({
      id: ques.id,
      text: ques.text,
      hi: ques.hi,
      topic: ques.topic,
      options: ques.options,
      userAnswer: answers[ques.id],
      correctAnswer: ques.correct,
      isCorrect: answers[ques.id] === ques.correct,
    }));

    sessionStorage.setItem(
      "nge_result",
      JSON.stringify({
        slug: test.slug,
        title: test.title,
        percent,
        correct,
        total,
        topicScores,
        attemptedOn: new Date().toISOString(),
      })
    );

    sessionStorage.setItem("nge_result_details", JSON.stringify(questionDetails));

    router.push("/result");
  };

  return (
    <div className="site-page">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-3xl border border-slate-700 bg-gradient-to-br from-[#071226] via-[#0B1730] to-[#112240] p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="border-b border-slate-700 pb-4">
            <p className="text-sm font-semibold text-white">🎓 Nishaglobal Education</p>
            <p className="mt-1 text-xs text-slate-300">
              Career guidance, mock tests, global student planning
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-white">
              {test.title} • Question {index + 1}/{questions.length}
            </p>

            <p className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-sm font-semibold text-blue-200">
              Answered: {answeredCount}/{questions.length}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-xl border border-slate-600 bg-[#15233d] p-1">
              {(["EN", "HI", "BOTH"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={[
                    "rounded-lg px-3 py-1 text-sm font-semibold transition",
                    lang === l
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white",
                  ].join(" ")}
                  type="button"
                >
                  {l === "EN" ? "English" : l === "HI" ? "Hindi" : "Both"}
                </button>
              ))}
            </div>

            <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200">
              Instant result with topic-wise analysis
            </span>
          </div>

          <h2 className="mt-6 text-xl font-bold leading-8 text-white">
            {(lang === "EN" || lang === "BOTH") && <div>{q.text}</div>}

            {(lang === "HI" || lang === "BOTH") && q.hi && (
              <div className="mt-2 text-base font-medium leading-8 text-slate-200">
                {q.hi}
              </div>
            )}
          </h2>

          <div className="mt-6 grid gap-3">
            {q.options.map((opt) => {
              const active = selected === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onSelect(opt.id)}
                  className={[
                    "rounded-2xl border p-4 text-left text-sm leading-7 transition active:scale-[0.99] sm:text-base",
                    active
                      ? "border-blue-500 bg-gradient-to-r from-blue-900/70 to-indigo-900/70 text-white"
                      : "border-slate-600 bg-[#15233d] text-slate-200 hover:border-blue-500 hover:bg-slate-800 hover:text-white",
                  ].join(" ")}
                >
                  <span className="mr-2 font-bold">{opt.id}.</span>

                  <span className="inline-flex flex-col">
                    {(lang === "EN" || lang === "BOTH") && (
                      <span>{opt.text}</span>
                    )}

                    {(lang === "HI" || lang === "BOTH") && opt.hi && (
                      <span
                        className={[
                          "mt-1 text-sm",
                          active ? "text-blue-900" : "text-slate-300",
                        ].join(" ")}
                      >
                        {opt.hi}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-2 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              type="button"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
              disabled={index === questions.length - 1}
              className="site-btn-primary w-full px-4 py-2 sm:w-auto"
            >
              Next
            </button>

            <button
              type="button"
              onClick={submit}
              className="w-full rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </section>

        <aside className="h-fit space-y-6 rounded-3xl border border-slate-700 bg-gradient-to-br from-[#071226] via-[#0B1730] to-[#112240] p-6 shadow-sm lg:sticky lg:top-24">
          <div>
            <p className="font-semibold text-white">Question palette</p>

            <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-5">
              {questions.map((qq, i) => {
                const done = answers[qq.id] != null;
                const active = i === index;

                return (
                  <button
                    key={qq.id}
                    onClick={() => setIndex(i)}
                    type="button"
                    className={[
                      "rounded-lg border py-2 text-xs font-semibold transition",
                      done
                        ? "border-emerald-500 bg-emerald-950/40 text-emerald-200"
                        : "border-slate-600 bg-[#15233d] text-slate-300 hover:border-blue-500 hover:text-white",
                      active ? "ring-2 ring-blue-500" : "",
                    ].join(" ")}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-blue-500 bg-blue-950/30 p-4 text-sm leading-7 text-slate-200">
            Your result page will show score, stronger topics, areas to improve,
            action plan, and backup stream suggestions.
          </div>

          <div className="rounded-2xl border border-amber-700 bg-amber-950/40 p-4 text-sm leading-7 text-slate-200">
            Guidance only: final stream or course decisions should always be verified
            with parents, teachers, counselors, and official sources.
          </div>
        </aside>
      </div>

      {showMissing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setShowMissing(false)}
            className="absolute inset-0 bg-black/60"
            aria-label="Close"
          />

          <div className="relative w-full max-w-lg rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">
                  ⚠️ Incomplete Quiz
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  You have not attempted the following questions. Please attempt
                  them before submitting.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowMissing(false)}
                className="rounded-lg border border-slate-600 bg-[#15233d] px-3 py-1 text-sm font-semibold text-slate-200 hover:border-blue-500 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {missingNums.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setIndex(n - 1);
                    setShowMissing(false);
                  }}
                  className="rounded-lg border border-amber-600 bg-amber-950/40 px-3 py-2 text-sm font-semibold text-amber-200 hover:border-amber-400"
                >
                  Question {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}