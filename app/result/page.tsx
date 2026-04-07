"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { tests } from "@/data/tests";
import { testInsights } from "@/data/testInsights";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { QRCodeSVG as QRCode } from "qrcode.react";

type ResultPayload = {
  slug: string;
  title: string;
  percent: number;
  correct: number;
  total: number;
  topicScores?: Record<string, { correct: number; total: number; percent: number }>;
  attemptedOn?: string;
};

type QuestionDetail = {
  id: string;
  text: string;
  hi?: string;
  topic?: string;
  options: { id: "A" | "B" | "C" | "D"; text: string; hi?: string }[];
  userAnswer: "A" | "B" | "C" | "D";
  correctAnswer: "A" | "B" | "C" | "D";
  isCorrect: boolean;
};

function guidance(percent: number) {
  if (percent >= 90) {
    return {
      label: "Excellent Match",
      message:
        "Excellent alignment. This stream looks strongly suitable for your current interest pattern and aptitude score.",
      badge: "bg-purple-100 text-purple-800",
      border: "border-purple-200",
    };
  }
  if (percent >= 80) {
    return {
      label: "Strong Match",
      message:
        "You have a strong foundation for this path. With focused effort, this stream can become a very good long-term option.",
      badge: "bg-blue-100 text-blue-800",
      border: "border-blue-200",
    };
  }
  if (percent >= 70) {
    return {
      label: "Good Potential",
      message:
        "You show positive potential here. Strengthen your basics and explore the pathway before finalizing your decision.",
      badge: "bg-green-100 text-green-800",
      border: "border-green-200",
    };
  }
  if (percent >= 60) {
    return {
      label: "Possible With Effort",
      message:
        "This path is possible, but it needs stronger fundamentals, more consistency, and careful planning before committing.",
      badge: "bg-yellow-100 text-yellow-800",
      border: "border-yellow-200",
    };
  }
  return {
    label: "Explore Alternatives",
    message:
      "This result suggests you should compare backup options as well. Use the guidance below to choose a more natural-fit direction.",
    badge: "bg-red-100 text-red-800",
    border: "border-red-200",
  };
}

function readinessBand(percent: number) {
  if (percent >= 85) return "Ready to move ahead confidently";
  if (percent >= 70) return "Promising, but still needs planning";
  if (percent >= 60) return "Needs stronger basics before final decision";
  return "Better to compare other pathways first";
}

export default function ResultPage() {
  const [data, setData] = useState<ResultPayload | null>(null);
  const [questionDetails, setQuestionDetails] = useState<QuestionDetail[]>([]);
  const [studentName, setStudentName] = useState("");
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("nge_result");
    if (raw) setData(JSON.parse(raw));

    const detailsRaw = sessionStorage.getItem("nge_result_details");
    if (detailsRaw) setQuestionDetails(JSON.parse(detailsRaw));

    const savedName = sessionStorage.getItem("nge_student_name");
    if (savedName) setStudentName(savedName);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("nge_student_name", studentName);
  }, [studentName]);

  const g = useMemo(() => guidance(data?.percent ?? 0), [data?.percent]);

  const currentTest = useMemo(() => {
    if (!data) return null;
    return tests.find((t) => t.slug === data.slug) ?? null;
  }, [data]);

  const insight = currentTest ? testInsights[currentTest.slug] : null;

  const strongestTopics = useMemo(() => {
    if (!data?.topicScores) return [];
    return Object.entries(data.topicScores)
      .sort((a, b) => b[1].percent - a[1].percent)
      .slice(0, 3);
  }, [data?.topicScores]);

  const growthTopics = useMemo(() => {
    if (!data?.topicScores) return [];
    return Object.entries(data.topicScores)
      .sort((a, b) => a[1].percent - b[1].percent)
      .slice(0, 3);
  }, [data?.topicScores]);

  const wrongQuestions = useMemo(() => {
    return questionDetails.filter(q => !q.isCorrect);
  }, [questionDetails]);

  const backup = useMemo(() => {
    if (!currentTest || !insight) return tests.filter((t) => t.slug !== data?.slug).slice(0, 3);
    const ordered = insight.backupSlugs
      .map((slug) => tests.find((t) => t.slug === slug))
      .filter(Boolean);
    return ordered.slice(0, 3);
  }, [currentTest, insight, data?.slug]);

  const downloadPDF = async () => {
    if (!certRef.current || !data) return;

    await new Promise((resolve) => setTimeout(resolve, 50));

    const canvas = await html2canvas(certRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
      let y = 0;
      let remaining = imgHeight;
      pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      remaining -= pdfHeight;

      while (remaining > 0) {
        pdf.addPage();
        y -= pdfHeight;
        pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
        remaining -= pdfHeight;
      }
    }

    const safeTitle = (data.title || "Result").replace(/[^a-z0-9]+/gi, "-");
    const safeName = (studentName || "Student").replace(/[^a-z0-9]+/gi, "-");
    pdf.save(`Nishaglobal-Education-${safeTitle}-${safeName}-Result.pdf`);
  };

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

  const issuedOn = data.attemptedOn ? new Date(data.attemptedOn).toLocaleString() : new Date().toLocaleString();
  const qrValue = "https://www.youtube.com/@NishaglobalEducation";

  return (
    <div className="space-y-6">
      <section className={`rounded-3xl border bg-white p-6 shadow-sm sm:p-8 ${g.border}`}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${g.badge}`}>
              {g.label}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {data.title} Result
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {g.message}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">Score: {data.percent}%</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">Correct: {data.correct}/{data.total}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">Readiness: {readinessBand(data.percent)}</span>
            </div>
          </div>

          <div className="grid min-w-[240px] gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Best fit stream</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{currentTest?.title}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Student-friendly takeaway</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {data.percent >= 80
                  ? "You can move ahead with confidence and now focus on pathway planning."
                  : data.percent >= 70
                  ? "You should explore this stream seriously and strengthen your basics."
                  : "Compare this result with backup options before making your final decision."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <div className="space-y-6">
          {insight && (
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Why this stream may fit you</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                {insight.whyItFits.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm font-semibold text-blue-800">Subjects / strengths to focus on</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {insight.schoolFocus.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-sm font-semibold text-emerald-800">Possible career directions</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {insight.careers.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900">Performance breakdown</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Instant guidance dashboard
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-800">Strongest areas</p>
                <div className="mt-3 space-y-3">
                  {strongestTopics.length > 0 ? (
                    strongestTopics.map(([topic, value]) => (
                      <div key={topic}>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="font-medium capitalize text-slate-800">{topic}</span>
                          <span className="text-slate-600">{value.percent}%</span>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white">
                          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${value.percent}%` }} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-600">Topic-wise scores will appear here once the quiz stores detailed breakdowns.</p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-800">Areas to improve</p>
                <div className="mt-3 space-y-3">
                  {growthTopics.length > 0 ? (
                    growthTopics.map(([topic, value]) => (
                      <div key={topic}>
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="font-medium capitalize text-slate-800">{topic}</span>
                          <span className="text-slate-600">{value.percent}%</span>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white">
                          <div className="h-full rounded-full bg-amber-500" style={{ width: `${value.percent}%` }} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-600">Once topic-level scoring is available, this section highlights where more practice is needed.</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {wrongQuestions.length > 0 && (
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Review Incorrect Answers</h2>
              <div className="mt-5 space-y-6">
                {wrongQuestions.map((q, index) => (
                  <div key={q.id} className="rounded-2xl border border-red-200 bg-red-50 p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{q.text}</p>
                        {q.hi && <p className="mt-1 text-sm text-gray-700">{q.hi}</p>}
                        <div className="mt-4 grid gap-2">
                          {q.options.map((opt) => {
                            const isUser = opt.id === q.userAnswer;
                            const isCorrect = opt.id === q.correctAnswer;
                            return (
                              <div
                                key={opt.id}
                                className={`rounded-lg border p-3 ${
                                  isCorrect ? "border-green-500 bg-green-100" :
                                  isUser ? "border-red-500 bg-red-100" :
                                  "border-gray-200 bg-white"
                                }`}
                              >
                                <span className="font-semibold">{opt.id}.</span> {opt.text}
                                {opt.hi && <div className="mt-1 text-sm text-gray-600">{opt.hi}</div>}
                                {isCorrect && <span className="ml-2 text-green-700 font-semibold">✓ Correct</span>}
                                {isUser && !isCorrect && <span className="ml-2 text-red-700 font-semibold">✗ Your choice</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {insight && (
            <section className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Next 90 days action plan</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {insight.next90Days.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Backup streams to compare</h2>
                <div className="mt-4 space-y-3">
                  {backup.map((item) => (
                    <Link key={item?.slug} href={`/tests/${item?.slug}`} className="block rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-slate-50">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item?.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-900">{item?.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{item?.summary}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {insight && (
            <section className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">India pathway guidance</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {insight.indiaPathway.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Global / study abroad pathway</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {insight.globalPathway.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-slate-900">Save or share your result</h2>
            <div className="mt-4 space-y-3">
              <div>
                <label className="text-sm font-semibold text-slate-700">Student name (optional)</label>
                <input
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Type a name for the PDF"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none ring-0 focus:border-blue-500"
                />
              </div>
              <button onClick={downloadPDF} className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
                Download PDF Result
              </button>
              <button onClick={() => window.print()} className="w-full rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                Print Result
              </button>
              <Link href="/tests" className="block w-full rounded-xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-700 hover:bg-slate-50">
                Take Another Test
              </Link>
            </div>

            {insight && (
              <>
                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-900">Helpful next pages</p>
                  <div className="mt-3 space-y-2">
                    {insight.resources.map((item) => (
                      <Link key={item.href} href={item.href} className="block rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-900">Related blog reads</p>
                  <div className="mt-3 space-y-2">
                    {insight.blogs.map((item) => (
                      <Link key={item.href} href={item.href} className="block rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
              This result is for guidance purposes only. Final academic and career decisions should be verified with parents, teachers, counselors, institutions, and official sources.
            </div>
          </section>
        </aside>
      </section>

      <div
        ref={certRef}
        className="overflow-hidden rounded-[20px] bg-white shadow-sm"
        style={{ border: "8px solid #D4AF37" }}
      >
        <div className="flex justify-center pt-8">
          <img src="/logo.png" alt="Nishaglobal Education" width={120} height={120} style={{ objectFit: "contain" }} />
        </div>
        <div className="mt-4 border-y bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-6 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-gray-600">Nishaglobal Education</p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Certificate of Assessment</h2>
              <p className="mt-1 text-sm text-gray-600">Career guidance • mock test • student planning</p>
            </div>
            <div className={`inline-flex h-fit rounded-full px-3 py-1 text-sm font-semibold ${g.badge}`}>
              {g.label}
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10">
          <p className="text-sm text-gray-600">Presented to</p>
          <h3 className="mt-2 text-3xl font-extrabold text-slate-900">{studentName?.trim() ? studentName.trim() : "Student"}</h3>
          <p className="mt-4 text-gray-700">for completing the assessment:</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{data.title}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Score</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{data.percent}%</p>
            </div>
            <div className="rounded-2xl border p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Correct answers</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">{data.correct}/{data.total}</p>
            </div>
            <div className="rounded-2xl border p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Readiness</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">{readinessBand(data.percent)}</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            {g.message}
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">Issued on</p>
              <p className="mt-1 font-medium text-slate-900">{issuedOn}</p>
            </div>
            <div className="text-center">
              <QRCode value={qrValue} size={84} />
              <p className="mt-2 text-xs text-gray-500">Nishaglobal Education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
