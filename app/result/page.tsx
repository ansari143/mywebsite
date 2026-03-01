"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { tests } from "@/data/tests";

type ResultPayload = {
  slug: string;
  title: string;
  percent: number;
  correct: number;
  total: number;
};

function guidance(percent: number) {
  if (percent >= 90) {
    return {
      label: "Excellent Match",
      message: "Excellent alignment! You can confidently pursue this stream and aim for top performance with consistency.",
      color: "bg-purple-100 text-purple-800",
    };
  }
  if (percent >= 80) {
    return {
      label: "Strong Match",
      message: "Definitely take this stream to build your career. Your aptitude looks strong—stay consistent and go advanced.",
      color: "bg-blue-100 text-blue-800",
    };
  }
  if (percent >= 70) {
    return {
      label: "Good Potential",
      message: "You must try this stream with proper planning and dedication. Make a study plan and practice regularly.",
      color: "bg-green-100 text-green-800",
    };
  }
  if (percent >= 60) {
    return {
      label: "Possible With Effort",
      message: "You can take this stream, but you need more hardworking and strong fundamentals. Start with basics and improve step-by-step.",
      color: "bg-yellow-100 text-yellow-800",
    };
  }
  return {
    label: "Needs Rethink",
    message: "This stream may not be the best fit right now. Consider exploring other streams and improving core basics.",
    color: "bg-red-100 text-red-800",
  };
}

export default function ResultPage() {
  const [data, setData] = useState<ResultPayload | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("nge_result");
    if (raw) setData(JSON.parse(raw));
  }, []);

  if (!data) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="font-semibold">No result found.</p>
        <p className="mt-2 text-gray-600">Please take a test first.</p>
        <Link className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2 text-white" href="/tests">
          Go to Tests
        </Link>
      </div>
    );
  }

  const g = guidance(data.percent);
  const currentTest = tests.find((t) => t.slug === data.slug);
  const backup = tests.filter((t) => t.slug !== data.slug).slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold">Your Result</h1>
        <p className="mt-2 text-gray-600">{data.title}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-4xl font-bold">{data.percent}%</span>
          <span className={`rounded-full px-3 py-1 text-sm ${g.color}`}>{g.label}</span>
          <span className="text-sm text-gray-600">
            Correct: {data.correct}/{data.total}
          </span>
        </div>

        <p className="mt-4 text-gray-800">{g.message}</p>

        <h3 className="mt-6 font-semibold">Recommended Next Steps (6 months)</h3>
        <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
          <li>Month 1–2: Strengthen basics + daily revision</li>
          <li>Month 3–4: Weekly mock tests + improve weak topics</li>
          <li>Month 5–6: Advanced practice + entrance exam planning</li>
        </ol>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/tests" className="w-full sm:w-auto rounded-xl border px-4 py-2 text-center hover:bg-gray-50">
            Take Another Test
          </Link>
          {currentTest && (
            <Link
              href={`/tests/${currentTest.slug}`}
              className="w-full sm:w-auto rounded-xl bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
            >
              View Stream Details
            </Link>
          )}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold">Backup Streams (Optional)</h2>
        <p className="mt-2 text-gray-600">You may also explore these options based on interest.</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {backup.map((b) => (
            <div key={b.slug} className="rounded-2xl border p-6">
              <div className="text-3xl">{b.icon}</div>
              <p className="mt-2 font-semibold">{b.title}</p>
              <p className="mt-2 text-sm text-gray-600">{b.summary}</p>
              <Link
                className="mt-4 inline-block w-full sm:w-auto rounded-xl bg-gray-900 px-4 py-2 text-center text-white"
                href={`/tests/${b.slug}`}
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
