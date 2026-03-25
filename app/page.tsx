import Link from "next/link";
import SkillsPreview from "@/components/SkillsPreview";
import SkillsRoadmapPreview from "@/components/SkillsRoadmapPreview";
import TrendingBlogs from "@/components/TrendingBlogs";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Career guidance for students worldwide 🌍
        </div>
        <h1 className="mx-auto mt-4 max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Career Tests, Study Abroad Guides, and Future-Ready Skills in One Place
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
          Helping students choose the right path in India and abroad. Explore free career tests,
          global education guidance, practical resources, and in-demand skills for the future.
        </p>

        <p className="mt-4 text-sm font-medium text-green-600 sm:text-base">
          ✔️ Free career tests &nbsp; ✔️ Global guidance &nbsp; ✔️ Skills for modern careers
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tests"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            Start Free Career Test 🚀
          </Link>
          <Link
            href="/study-abroad"
            className="w-full rounded-xl border border-gray-300 px-6 py-3 text-center font-medium text-slate-700 hover:bg-gray-50 sm:w-auto"
          >
            Explore Study Abroad
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Career Tests",
            desc: "Choose a test, answer questions, and get instant score-based guidance.",
          },
          {
            title: "Global Careers",
            desc: "Explore career directions beyond local boundaries and plan with a wider perspective.",
          },
          {
            title: "Study Abroad",
            desc: "Compare the USA, Canada, UK, Australia, and Europe in one platform.",
          },
          {
            title: "Future Skills",
            desc: "Build AI, Python, and other practical skills that support global opportunities.",
          },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="font-semibold text-gray-900">{x.title}</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">{x.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Global Expansion
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Study abroad and global career planning
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore destination-wise guidance, compare costs, review common exams, understand work options,
            and make smarter decisions about studying in the USA, Canada, UK, Australia, or Europe.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/study-abroad" className="inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              View Study Abroad Guides
            </Link>
            <Link href="/international-students" className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50">
              International Students Guide
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Trusted Guidance
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Professional, practical, student-friendly</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Nishaglobal Education focuses on clear, simple guidance that helps students and families understand options before making major academic decisions.
            Our approach is practical, easy to read, and designed for both local and global career planning.
          </p>
          <div className="mt-5">
            <Link href="/about" className="inline-flex rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-50">
              Read About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">What you can do on this website</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Take free student-friendly career tests",
            "Read practical study abroad country guides",
            "Compare career and skill-building paths",
            "Access resources and contact for general questions",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <SkillsPreview />
      <SkillsRoadmapPreview />
      <TrendingBlogs
  title="Latest Career and Study Abroad Articles"
  limit={3}
/>
    </div>
  );
}
