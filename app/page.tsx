import Link from "next/link";
import Image from "next/image";
import SkillsPreview from "@/components/SkillsPreview";
import SkillsRoadmapPreview from "@/components/SkillsRoadmapPreview";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <Image
          src="/logo.png"
          alt="Nishaglobal Education"
          width={120}
          height={120}
          className="mx-auto mb-4"
          priority
        />

        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Choose the Right Stream After 10th — with Smart Career Tests
        </h1>

        <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 sm:text-base">
          Engineering, Medical, Government Jobs, Teacher, Aviation, Nursing,
          BCom and more. Take a 50-question test and get score-based guidance
          with practical next steps.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tests"
            className="w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-white hover:bg-blue-700 sm:w-auto"
          >
            Start Career Test
          </Link>
          <Link
            href="/resources"
            className="w-full rounded-xl border px-5 py-3 text-center hover:bg-gray-50 sm:w-auto"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "1) Choose Test",
            desc: "Pick your career or stream test from the test hub.",
          },
          {
            title: "2) Answer 50 Questions",
            desc: "Complete a simple and mobile-friendly MCQ-based quiz.",
          },
          {
            title: "3) Get Guidance",
            desc: "See your score, recommendation, and useful next steps.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="font-semibold text-gray-900">{x.title}</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">{x.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Career Guidance
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Student Resources
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore practical guides for stream selection, entrance exam basics,
            scholarships, aviation careers, and career planning after 10th and
            12th.
          </p>

          <div className="mt-5">
            <Link
              href="/resources"
              className="inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      <SkillsPreview />

      <SkillsRoadmapPreview />
    </div>
  );
}