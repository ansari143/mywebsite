import Link from "next/link";

export const metadata = {
  title: "Global Careers | Nishaglobal Education",
  description:
    "Explore global career pathways in technology, healthcare, business, creative industries, and public service, with future-focused guidance for students.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/global-careers",
  },
};

export default function GlobalCareersPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-sky-100 bg-white px-3 py-1 text-sm font-medium text-sky-700">
          Global Careers
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore Career Paths for a Global Future
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          Nishaglobal Education is expanding from stream-based guidance to a broader global career model. This section helps students discover high-growth industries,
          compare skill requirements, and think beyond local job markets.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: "Technology and AI",
            desc: "Software engineering, data analytics, artificial intelligence, cybersecurity, cloud, automation, and product roles.",
          },
          {
            title: "Healthcare and Life Sciences",
            desc: "Nursing, public health, allied health, healthcare administration, biomedical pathways, and regulated clinical professions.",
          },
          {
            title: "Business and Finance",
            desc: "Accounting, marketing, finance, consulting, operations, supply chain, and entrepreneurship.",
          },
          {
            title: "Creative and Media Careers",
            desc: "Design, digital content, communications, branding, visual storytelling, animation, and production.",
          },
          {
            title: "Education and Public Service",
            desc: "Teaching, policy, public administration, training, and social impact careers.",
          },
          {
            title: "Remote and Freelance Opportunities",
            desc: "Location-flexible work in tech, design, content, support, and online business services.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Best next steps</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Take a career test to identify strengths and interest areas.",
            "Explore skill-building through AI, Python, data, and future-ready learning paths.",
            "Compare countries and industries before deciding on study or work direction.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/study-abroad" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            Study Abroad Options
          </Link>
          <Link href="/skills" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Explore Skills
          </Link>
        </div>
      </section>
    </div>
  );
}
