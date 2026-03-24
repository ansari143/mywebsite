import Link from "next/link";
import SkillsPreview from "@/components/SkillsPreview";
import SkillsRoadmapPreview from "@/components/SkillsRoadmapPreview";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8 lg:p-10">
        <h1 className="mx-auto max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Choose the Right Stream After 10th — Take a Free Career Test
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
          Engineering, Medical, Government Jobs, Teacher, Aviation, Nursing,
          BCom and more. Take a{" "}
          <span className="font-semibold text-slate-900">
            free 50-question test
          </span>{" "}
          and get{" "}
          <span className="font-semibold text-slate-900">
            score-based guidance
          </span>{" "}
          with practical next steps.
        </p>

        <p className="mt-4 text-sm font-medium text-green-600 sm:text-base">
          ✔️ 100% Free &nbsp; ✔️ 50 Questions &nbsp; ✔️ Instant Result
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tests"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            Start Free Career Test 🚀
          </Link>
          <Link
            href="/resources"
            className="w-full rounded-xl border border-gray-300 px-6 py-3 text-center font-medium text-slate-700 hover:bg-gray-50 sm:w-auto"
          >
            Explore Resources
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "1) Choose Test",
            desc: "Pick your stream and start your free career test.",
          },
          {
            title: "2) Answer 50 Questions",
            desc: "Complete a simple, fast, and mobile-friendly MCQ test.",
          },
          {
            title: "3) Get Instant Guidance",
            desc: "See your score, best-fit stream, and clear next steps.",
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

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Career Guidance
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Student Resources
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore practical guides for stream selection, entrance exams,
            scholarships, aviation careers, and planning after 10th and 12th.
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

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            About Us
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Why students trust Nishaglobal Education</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We focus on simple, practical, and educational guidance for
            students exploring career options after 10th and 12th. Our content
            is designed to help users understand choices more clearly before
            making important academic decisions.
          </p>
          <div className="mt-5">
            <Link
              href="/about"
              className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50"
            >
              Read About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Why this website is useful</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Free student-friendly career tests",
            "Simple and practical guidance",
            "Educational resources for planning",
            "Contact support for general questions",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <SkillsPreview />
      <SkillsRoadmapPreview />
    </div>
  );
}
