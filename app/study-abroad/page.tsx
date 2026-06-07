import Link from "next/link";

export const metadata = {
  title: "Study Abroad Guidance by Country | Nishaglobal Education",
  description:
    "Compare study abroad destinations with country guides, scholarship tips, exam requirements, and step-by-step planning for students worldwide.",
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/study-abroad",
  },
};

const destinations = [
  {
    href: "/study-in-usa",
    title: "Study in USA 🇺🇸",
    desc: "Research-focused programs, flexible curricula, and extensive networking opportunities in major industries.",
    for: "Students pursuing advanced research or specialized fields with access to cutting-edge facilities.",
    avoid: "Those concerned about high costs or preferring structured, shorter degree programs.",
  },
  {
    href: "/study-in-canada",
    title: "Study in Canada 🇨🇦",
    desc: "Balanced tuition costs, co-op programs, and pathways to permanent residency through work experience.",
    for: "Students seeking practical work experience and long-term settlement options in North America.",
    avoid: "Those who prefer warmer climates or need immediate high-paying job opportunities.",
  },
  {
    href: "/study-in-uk",
    title: "Study in UK 🇬🇧",
    desc: "One-year master's programs, strong emphasis on employability skills, and access to European job markets.",
    for: "Students wanting accelerated postgraduate education and European work opportunities.",
    avoid: "Those on tight budgets or preferring longer, more affordable degree options.",
  },
  {
    href: "/study-in-australia",
    title: "Study in Australia 🇦🇺",
    desc: "Industry-aligned courses, post-study work rights, and strong support for international students.",
    for: "Students in vocational fields seeking practical training and work experience in a supportive environment.",
    avoid: "Those prioritizing cost savings or needing extensive research facilities.",
  },
  {
    href: "/study-in-europe",
    title: "Study in Europe 🇪🇺",
    desc: "Low-cost education in countries like Germany and Netherlands, multicultural exposure, and EU-wide mobility.",
    for: "Students seeking affordable education and cultural diversity with EU mobility benefits.",
    avoid: "Those requiring extensive English-language support or preferring North American accreditation.",
  },
];

const roadmap = [
  ["1. Define Your Goals and Budget", "Clarify why you are studying abroad: career advancement, cultural experience, or academic excellence. Set a realistic budget including tuition, living costs, and emergencies."],
  ["2. Research Destinations Thoroughly", "Compare rankings, courses, costs, and post-study options. Visit university websites, read student reviews, and check visa policies."],
  ["3. Prepare Academic and Language Requirements", "Gather transcripts, take standardized tests such as IELTS, TOEFL, SAT, GRE, or GMAT, and prepare personal statements."],
  ["4. Secure Funding and Scholarships", "Apply for university scholarships, government grants, and external funding. Explore education loans if needed."],
  ["5. Apply and Obtain Visa", "Submit applications to multiple universities, accept offers, and apply for student visas with complete documents."],
  ["6. Plan Arrival and Integration", "Arrange accommodation, health insurance, orientation, and connect with international student communities for support."],
];

const faqs = [
  ["Which country might suit my field?", "Consider USA for research-intensive programs, UK for shorter business-focused degrees, Canada for co-op opportunities, Australia for vocational healthcare training, and Europe for affordable study options."],
  ["What are the typical costs?", "Annual expenses vary widely. Europe can be more affordable, while USA, UK, Canada, and Australia may require higher tuition and living budgets."],
  ["Can I work while studying?", "Most countries allow part-time work during studies, but rules depend on your visa type and destination country."],
  ["Are scholarships available?", "Some universities offer merit-based aid, but scholarships are competitive. Students should apply early and prepare strong academic documents."],
];

export default function StudyAbroadPage() {
  return (
    <div className="site-page">
      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Global Education
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Study Abroad Guidance for Students Worldwide
        </h1>

        <p className="mt-3 text-sm font-semibold text-slate-300">Updated: June 2026</p>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          Use this section to compare study destinations based on your academic goals,
          budget, and career plans. Each country has specific strengths and requirements
          that may or may not align with your situation.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who This Guide Is For</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Students researching specific countries, comparing practical factors like costs
              and work rights, and seeking realistic international education options.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who Should Avoid This Path</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Students who are not prepared for additional costs, visa complexity, or
              international study planning should explore local education options first.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/international-students" className="site-btn-primary text-center">
            International Student Guide
          </Link>
          <Link href="/global-careers" className="site-btn-secondary text-center">
            Explore Global Careers
          </Link>
          <Link href="/skills" className="site-btn-secondary text-center">
            Explore AI Skills
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Quick Country Comparison</h2>
        <p className="mt-2 text-slate-300">Overview of key factors for top study destinations.</p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-800">
                <th className="border border-slate-700 px-4 py-3 text-left font-semibold text-white">Country</th>
                <th className="border border-slate-700 px-4 py-3 text-left font-semibold text-white">Avg. Tuition</th>
                <th className="border border-slate-700 px-4 py-3 text-left font-semibold text-white">Degree Duration</th>
                <th className="border border-slate-700 px-4 py-3 text-left font-semibold text-white">Post-Study Work</th>
                <th className="border border-slate-700 px-4 py-3 text-left font-semibold text-white">English Requirement</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["USA", "$25,000-50,000/year", "4 years Bachelor", "1-3 years OPT", "TOEFL/IELTS"],
                ["Canada", "$15,000-30,000/year", "4 years Bachelor", "1-3 years", "TOEFL/IELTS"],
                ["UK", "$20,000-35,000/year", "3 years Bachelor", "2-5 years", "IELTS"],
                ["Australia", "$20,000-40,000/year", "3 years Bachelor", "2-4 years", "TOEFL/IELTS/PTE"],
                ["Europe", "$8,000-20,000/year", "3-4 years Bachelor", "6-18 months", "Varies"],
              ].map((row) => (
                <tr key={row[0]} className="odd:bg-[#0b1220] even:bg-slate-800/60">
                  {row.map((cell, index) => (
                    <td key={cell} className="border border-slate-700 px-4 py-3 text-slate-300">
                      {index === 0 ? <strong className="text-white">{cell}</strong> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-300">
          *Approximate figures; check official sources for current rates and requirements.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Roadmap for Studying Abroad</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {roadmap.map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Country Study Guides</h2>
        <p className="mt-2 text-slate-300">
          Explore detailed study abroad guidance by destination.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>

              <div className="mt-4 space-y-2">
                <p className="text-xs leading-6 text-slate-300">
                  <strong>For:</strong> {item.for}
                </p>
                <p className="text-xs leading-6 text-slate-300">
                  <strong>Avoid if:</strong> {item.avoid}
                </p>
              </div>

              <span className="mt-5 inline-flex text-sm font-semibold text-blue-300">
                Read full guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Important Study Abroad Checklist</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Compare costs", "Review tuition and living expenses before selecting a country."],
            ["Understand exams", "Know which English and admission tests may apply to your target course."],
            ["Plan outcomes", "Compare work options, long-term pathways, and skills needed for global employability."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-amber-800 bg-[#0b1220] p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">{q}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

