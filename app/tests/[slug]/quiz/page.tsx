"use client";

import { useMemo, useState } from "react";
import { getTestBySlug } from "@/data/tests";
import { useRouter, useParams  } from "next/navigation";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function QuizPage() {
const socialLinks = [
  {
    name: "Facebook",
    handle: "NishaGlobal Education",
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
  const router = useRouter();

  const params = useParams();

  const slug = params.slug as string;

  const test = useMemo(() => getTestBySlug(slug), [slug]);

  const questions = test?.questions ?? [];
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
 const [lang, setLang] = useState<"EN" | "HI" | "BOTH">("EN");
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
    if (!answers[qq.id]) missing.push(i + 1); // question number (1-based)
  });
  return missing;
};
const submit = () => {
  const missing = getMissingQuestionNumbers();

  // ✅ if any missing, show popup with numbers
  if (missing.length > 0) {
    setMissingNums(missing);
    setShowMissing(true);
    return;
  }

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
      <div className="grid gap-6">
    {/* ✅ Sticky Follow Header */}
    <div className="sticky top-0 z-50 -mx-4 sm:-mx-6 lg:mx-0">
      <div className="bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">🎓 Nishaglobal Education</p>
              <p className="text-xs text-gray-600">
                Follow for career guidance, mock tests & education videos
              </p>
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
        className="flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-2 hover:bg-gray-100 transition"
      >
        <Icon className={`text-lg ${s.color}`} />

        <div className="leading-tight">
          <div className="text-xs font-semibold whitespace-nowrap">
            {s.name}
          </div>
        </div>
      </a>
    );
  })}
</div>
          </div>
        </div>
      </div>
    </div>
    </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-gray-600">
            {test.title} • Question {index + 1}/{questions.length}
          </p>
          <p className="text-sm text-gray-600">
            Answered: {Object.keys(answers).length}/{questions.length}
          </p>
        </div>
        <div className="mt-3 inline-flex rounded-xl border bg-white p-1">
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
        <h2 className="mt-4 text-lg font-semibold">
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
        "rounded-xl border p-4 text-left hover:bg-gray-50 active:scale-[0.99] transition",
        selected === opt.id ? "border-blue-600 bg-blue-50" : "",
      ].join(" ")}
    >
      <span className="font-semibold mr-2">{opt.id}.</span>
     <div className="inline-flex flex-col">
  {(lang === "EN" || lang === "BOTH") && <span>{opt.text}</span>}
  {(lang === "HI" || lang === "BOTH") && opt.hi && (
    <span className="text-sm text-gray-600 mt-1">{opt.hi}</span>
  )}
</div>
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
      {showMissing && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    {/* overlay */}
    <button
      type="button"
      onClick={() => setShowMissing(false)}
      className="absolute inset-0 bg-black/40"
      aria-label="Close"
    />

    {/* modal */}
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
                setIndex(n - 1);        // ✅ jump to that question
                setShowMissing(false);  // ✅ close popup
              }}
              className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
            >
              Q{n}
            </button>
          ))}
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Tip: Tap any question number above to jump directly to it.
        </p>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
