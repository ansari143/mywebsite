"use client";

import { useMemo, useState } from "react";
import { getTestBySlug } from "@/data/tests";
import { useRouter, useParams } from "next/navigation";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function QuizPage() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/global.nisha",
      icon: FaFacebook,
      color: "text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nisha.global",
      icon: FaInstagram,
      color: "text-pink-600",
    },
    {
      name: "Facebook Page",
      url: "https://www.facebook.com/profile.php?id=61588627138300",
      icon: FaFacebook,
      color: "text-blue-700",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@NishaglobalEducation",
      icon: FaYoutube,
      color: "text-red-600",
    },
  ] as const;

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

  if (!test) {
    return <div className="rounded-2xl bg-white p-8 shadow-sm">Test not found.</div>;
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
    const topicScores: Record<string, { correct: number; total: number; percent: number }> = {};

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
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="sticky top-0 z-20 -mx-4 border-b bg-white/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:mx-0 lg:rounded-t-2xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">🎓 Nishaglobal Education</p>
              <p className="text-xs text-gray-600">Career guidance, mock tests, global student planning</p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-2 transition hover:bg-gray-100"
                  >
                    <Icon className={`text-lg ${s.color}`} />
                    <div className="leading-tight">
                      <div className="text-xs font-semibold whitespace-nowrap">{s.name}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            {test.title} • Question {index + 1}/{questions.length}
          </p>
          <p className="text-sm text-gray-600">Answered: {answeredCount}/{questions.length}</p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="inline-flex rounded-xl border bg-white p-1">
            {(["EN", "HI", "BOTH"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={[
                  "rounded-lg px-3 py-1 text-sm transition",
                  lang === l ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-50",
                ].join(" ")}
                type="button"
              >
                {l === "EN" ? "English" : l === "HI" ? "Hindi" : "Both"}
              </button>
            ))}
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Instant result with topic-wise analysis
          </span>
        </div>

        <h2 className="mt-5 text-lg font-semibold text-slate-900">
          {(lang === "EN" || lang === "BOTH") && <div>{q.text}</div>}
          {(lang === "HI" || lang === "BOTH") && q.hi && (
            <div className="mt-1 text-base font-normal text-gray-700">{q.hi}</div>
          )}
        </h2>

        <div className="mt-4 grid gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={[
                "rounded-xl border p-4 text-left transition hover:bg-gray-50 active:scale-[0.99]",
                selected === opt.id ? "border-blue-600 bg-blue-50" : "border-gray-200",
              ].join(" ")}
            >
              <span className="mr-2 font-semibold">{opt.id}.</span>
              <div className="inline-flex flex-col">
                {(lang === "EN" || lang === "BOTH") && <span>{opt.text}</span>}
                {(lang === "HI" || lang === "BOTH") && opt.hi && (
                  <span className="mt-1 text-sm text-gray-600">{opt.hi}</span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="w-full rounded-xl border px-4 py-2 disabled:opacity-50 sm:w-auto"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
            disabled={index === questions.length - 1}
            className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Next
          </button>

          <button
            type="button"
            onClick={submit}
            className={`w-full rounded-xl px-4 py-2 text-white transition sm:w-auto ${
              allAnswered ? "bg-green-600 hover:bg-green-700" : "bg-green-400 hover:bg-green-500"
            }`}
          >
            Submit
          </button>
        </div>
      </div>

      <aside className="space-y-6 rounded-2xl bg-white p-6 shadow-sm h-fit lg:sticky lg:top-24">
        <div>
          <p className="font-semibold text-slate-900">Question palette</p>
          <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-5">
            {questions.map((qq, i) => {
              const done = answers[qq.id] != null;
              const active = i === index;
              return (
                <button
                  key={qq.id}
                  onClick={() => setIndex(i)}
                  className={[
                    "rounded-lg border py-2 text-xs",
                    done ? "border-green-400 bg-green-50" : "bg-white",
                    active ? "ring-2 ring-blue-500" : "",
                  ].join(" ")}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-slate-700">
          Your result page will show score, stronger topics, areas to improve, action plan, and backup stream suggestions.
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
          Guidance only: final stream or course decisions should always be verified with parents, teachers, counselors, and official sources.
        </div>
      </aside>

      {showMissing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setShowMissing(false)}
            className="absolute inset-0 bg-black/40"
            aria-label="Close"
          />

          <div className="relative w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-red-600">⚠️ Incomplete Quiz</p>
                <p className="mt-1 text-sm text-gray-700">
                  You have not attempted the following question(s). Please attempt them before submitting.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowMissing(false)}
                className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {missingNums.map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setIndex(n - 1);
                      setShowMissing(false);
                    }}
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    Q{n}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-xs text-gray-500">Tap any question number above to jump directly to it.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
