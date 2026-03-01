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
    handle: "@nisha.global",
    url: "https://instagram.com/nisha.global",
    icon: FaInstagram,
    color: "text-pink-600",
  },
  {
    name: "Facebook Page",
    handle: "NishaGlobal Education",
    url: "https://www.facebook.com/profile.php?id=61588627138300",
    icon: FaFacebook,
    color: "text-blue-700",
  },
  {
    name: "YouTube",
    handle: "NishaGlobal Education",
    url: "https://youtube.com/@SDigital-Tips",
    icon: FaYoutube,
    color: "text-red-600",
  },
] as const;
  const router = useRouter();

  const params = useParams();

  const slug = params.slug as string;

  const test = useMemo(() => getTestBySlug(slug), [slug]);

  const questions = test?.questions ?? [];
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
 const [lang, setLang] = useState<"EN" | "HI" | "BOTH">("BOTH");
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

 const submit = () => {
  const total = questions.length;

  // ✅ validation: must answer all questions
  if (Object.keys(answers).length !== total) {
    alert(`Please answer all ${total} questions before submitting.`);
    return;
  }

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

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2 hover:bg-gray-100 transition"
                  >
                    <Icon className={`text-lg ${s.color}`} />
                    <div className="leading-tight">
                      <div className="text-xs font-semibold">{s.name}</div>
                      <div className="text-[11px] text-gray-600">{s.handle}</div>
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
  disabled={!allAnswered}
  className={[
    "w-full sm:w-auto rounded-xl px-4 py-2 text-white",
    allAnswered ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed",
  ].join(" ")}
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
