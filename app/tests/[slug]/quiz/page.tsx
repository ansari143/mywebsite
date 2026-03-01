"use client";

import { useMemo, useState } from "react";
import { getTestBySlug } from "@/data/tests";
import { useRouter, useParams  } from "next/navigation";

export default function QuizPage() {
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

  const onSelect = (opt: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [q.id]: opt }));
  };

  const submit = () => {
    const total = questions.length;
    let correct = 0;
    for (const ques of questions) {
      if (answers[ques.id] === ques.correct) correct++;
    }
    const percent = Math.round((correct / total) * 100);

    sessionStorage.setItem(
      "nge_result",
      JSON.stringify({ slug: test.slug, title: test.title, percent, correct, total })
    );
    router.push("/result");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-gray-600">
            {test.title} • Question {index + 1}/{questions.length}
          </p>
          <p className="text-sm text-gray-600">
            Answered: {Object.keys(answers).length}/{questions.length}
          </p>
        </div>

        <h2 className="mt-4 text-lg font-semibold">{q.text}</h2>

        <div className="mt-4 grid gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={[
                "rounded-xl border p-4 text-left hover:bg-gray-50 active:scale-[0.99] transition",
                selected === opt.id ? "border-blue-600 bg-blue-50" : "",
              ].join(" ")}
            >
              <span className="font-semibold mr-2">{opt.id}.</span>
              {opt.text}
            </button>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="w-full sm:w-auto rounded-xl border px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          {index < questions.length - 1 ? (
            <button
              onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="w-full sm:w-auto rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submit}
              className="w-full sm:w-auto rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      <aside className="rounded-2xl bg-white p-6 shadow-sm h-fit lg:sticky lg:top-24">
        <p className="font-semibold">Question Palette</p>

        <div className="mt-3 grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2">
          {questions.map((qq, i) => {
            const done = answers[qq.id] != null;
            const active = i === index;
            return (
              <button
                key={qq.id}
                onClick={() => setIndex(i)}
                className={[
                  "rounded-lg border py-2 text-xs",
                  done ? "bg-green-50 border-green-400" : "bg-white",
                  active ? "ring-2 ring-blue-500" : "",
                ].join(" ")}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
