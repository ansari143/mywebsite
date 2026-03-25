import Link from "next/link";

export const metadata = {
  title: "Study Abroad | Nishaglobal Education",
  description:
    "Explore study abroad options with country guides for the USA, Canada, UK, Australia, and Europe, plus scholarships, exams, and planning tips.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-abroad",
  },
};

const destinations = [
  {
    href: "/study-in-usa",
    title: "Study in USA 🇺🇸",
    desc: "Top universities, broad course choice, research opportunities, and strong global career exposure.",
  },
  {
    href: "/study-in-canada",
    title: "Study in Canada 🇨🇦",
    desc: "Student-friendly environment, practical programs, and strong post-study work appeal.",
  },
  {
    href: "/study-in-uk",
    title: "Study in UK 🇬🇧",
    desc: "Globally respected universities, shorter degrees, and strong business and research ecosystem.",
  },
  {
    href: "/study-in-australia",
    title: "Study in Australia 🇦🇺",
    desc: "Great campus life, practical learning, and strong demand in healthcare, tech, and business.",
  },
  {
    href: "/study-in-europe",
    title: "Study in Europe 🇪🇺",
    desc: "Affordable options in selected countries, diverse cultures, and excellent academic variety.",
  },
];

export default function StudyAbroadPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-700">
          Global Education
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Study Abroad Guidance for Students Worldwide
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          Explore destination-wise guidance for international education, including eligibility, exams, costs,
          scholarships, work opportunities, and planning tips. This section is designed to help students compare
          major study destinations in a clear and practical way.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/international-students" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            International Student Guide
          </Link>
          <Link href="/global-careers" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Explore Global Careers
          </Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-blue-700">Read full guide →</span>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Compare costs",
            desc: "Review tuition and living expenses before selecting a country.",
          },
          {
            title: "Understand exams",
            desc: "Know which English and admission tests may apply to your target course.",
          },
          {
            title: "Plan outcomes",
            desc: "Compare work options, long-term pathways, and skills needed for global employability.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
