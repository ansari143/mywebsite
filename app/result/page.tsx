"use client";

import Link from "next/link";
import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react";
import { tests } from "@/data/tests";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { QRCodeSVG as QRCode } from "qrcode.react";

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
      message:
        "Excellent alignment! You can confidently pursue this stream and aim for top performance with consistency.",
      badge: "bg-purple-100 text-purple-800",
    };
  }
  if (percent >= 80) {
    return {
      label: "Strong Match",
      message:
        "Definitely take this stream to build your career. Your aptitude looks strong—stay consistent and go advanced.",
      badge: "bg-blue-100 text-blue-800",
    };
  }
  if (percent >= 70) {
    return {
      label: "Good Potential",
      message:
        "You must try this stream with proper planning and dedication. Make a study plan and practice regularly.",
      badge: "bg-green-100 text-green-800",
    };
  }
  if (percent >= 60) {
    return {
      label: "Possible With Effort",
      message:
        "You can take this stream, but you need more hardworking and strong fundamentals. Start with basics and improve step-by-step.",
      badge: "bg-yellow-100 text-yellow-800",
    };
  }
  return {
    label: "Needs Rethink",
    message:
      "This stream may not be the best fit right now. Consider exploring other streams and improving core basics.",
    badge: "bg-red-100 text-red-800",
  };
}

export default function ResultPage() {
  const [data, setData] = useState<ResultPayload | null>(null);

  // ✅ optional student name (persist in sessionStorage)
  const [studentName, setStudentName] = useState("");

  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("nge_result");
    if (raw) setData(JSON.parse(raw));

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

  const backup = useMemo(() => {
    if (!data) return [];
    return tests.filter((t) => t.slug !== data.slug).slice(0, 2);
  }, [data]);

  const downloadPDF = async () => {
    if (!certRef.current || !data) return;

    await new Promise((r) => setTimeout(r, 50));

    const canvas = await html2canvas(certRef.current, {
  scale: 2,
  useCORS: true,
  backgroundColor: "#ffffff",
  scrollY: -window.scrollY, // ✅ prevents weird offset crop
});

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // multi-page if needed
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
    pdf.save(`Nishaglobal-Education-${safeTitle}-${safeName}-Certificate.pdf`);
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

  const issuedOn = new Date().toLocaleString();
  const qrValue = "https://youtube.com/@nishaglobaleducation"; 

  return (
    <div className="space-y-6">
      {/* ✅ Actions + Name input (NOT printed) */}
      <div className="no-print rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-md">
            <label className="text-sm font-semibold">Student Name (optional)</label>
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Type student name to print on certificate"
              className="mt-2 w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">
              This name will appear on the certificate + downloaded PDF.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={downloadPDF}
              className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Download Certificate (PDF)
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-xl border px-4 py-2 hover:bg-gray-50"
            >
              Print
            </button>
          </div>
        </div>
      </div>

      {/* ✅ CERTIFICATE (This is what prints / becomes PDF) */}
      <div
  ref={certRef}
  className="relative bg-white shadow-sm overflow-hidden pt-10"
  style={{
    border: "8px solid #D4AF37",
    borderRadius: "16px",
  }}
>
        {/* Logo Header */}
{/* Top Logo (safe area) */}
{/* Top Logo (use plain img for PDF capture) */}
<div className="relative flex justify-center items-center h-[170px] pt-4">
  <img
    src="/logo.png"
    alt="Nishaglobal Education"
    width={140}
    height={140}
    style={{ width: 140, height: 140, objectFit: "contain" }}
  />
</div>
        {/* Header strip */}
        <div className="px-6 sm:px-10 py-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600">Nishaglobal Education</p>
              <h1 className="text-2xl sm:text-3xl font-bold">Certificate of Assessment</h1>
              <p className="mt-1 text-sm text-gray-600">
                Career guidance • Mock tests • Education videos
              </p>
            </div>

            <div className="text-right">
              <div className={`inline-flex rounded-full px-3 py-1 text-sm ${g.badge}`}>
                {g.label}
              </div>
              <p className="mt-2 text-xs text-gray-600">Issued on: {issuedOn}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-10 py-8">
          <p className="text-sm text-gray-600">This certificate is presented to</p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">
            {studentName?.trim() ? studentName.trim() : "Student"}
          </h2>

          <p className="mt-4 text-gray-700">
            for completing the assessment:
          </p>
          <p className="mt-1 font-semibold text-gray-900">{data.title}</p>

          {/* Score Box */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <p className="text-xs text-gray-600">Score</p>
              <p className="mt-1 text-3xl font-bold">{data.percent}%</p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="text-xs text-gray-600">Correct Answers</p>
              <p className="mt-1 text-3xl font-bold">
                {data.correct}/{data.total}
              </p>
            </div>

            <div className="rounded-2xl border p-4">
              <p className="text-xs text-gray-600">Stream</p>
              <p className="mt-1 text-lg font-semibold">
                {currentTest?.title ?? "—"}
              </p>
            </div>
          </div>

          {/* Guidance */}
          <div className="mt-6 rounded-2xl border bg-gray-50 p-5">
            <p className="font-semibold">Personal Guidance</p>
            <p className="mt-2 text-gray-700">{g.message}</p>

            <h3 className="mt-4 font-semibold">Recommended Next Steps (6 months)</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
              <li>Month 1–2: Strengthen basics + daily revision</li>
              <li>Month 3–4: Weekly mock tests + improve weak topics</li>
              <li>Month 5–6: Advanced practice + entrance exam planning</li>
            </ol>
          </div>

          {/* Signature row */}
         {/* Signature row + QR */}
<div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
  <div>
    <div className="h-[1px] w-56 bg-gray-300" />
    <p className="mt-2 text-sm font-semibold">Nishaglobal Education</p>
    <p className="text-xs text-gray-600">Assessment Team</p>
  </div>

  <div className="flex items-end gap-6">
    <div className="text-right text-sm text-gray-600">
      <p>Certificate ID:</p>
      <p className="font-semibold text-gray-900">
        NGE-{data.slug.toUpperCase()}-{data.total}-{data.correct}
      </p>
      <p className="mt-1 text-xs text-gray-500">Scan to follow & watch more videos</p>
    </div>

    <div className="rounded-2xl border bg-white p-3">
      <QRCode value={qrValue} size={86} />
    </div>
  </div>
</div>

          {/* Footer */}
          <div className="mt-8 border-t pt-4 text-xs text-gray-500">
            Note: This certificate is for guidance purposes and supports career decision-making.
          </div>
        </div>
      </div>

      {/* Navigation cards (NOT printed) */}
      <div className="no-print rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">Next Actions</h2>
            <p className="mt-1 text-sm text-gray-600">
              Explore more tests and get better guidance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
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
      </div>

      <div className="no-print rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
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