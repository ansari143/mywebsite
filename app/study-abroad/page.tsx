import Link from "next/link";

export const metadata = {
  title: "Study Abroad | Nishaglobal Education",
  description:
    "Explore study abroad options with country guides for the USA, Canada, UK, Australia, and Europe, plus scholarships, exams, and planning tips.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-abroad",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

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
    for: "Students seeking affordable education and cultural diversity with EU citizenship benefits.",
    avoid: "Those requiring extensive English-language support or preferring North American accreditation.",
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
          Use this section to compare study destinations based on your academic goals, budget, and career plans. Each country has specific strengths and requirements that may or may not align with your situation.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Who This Guide Is For</h2>
          <p className="mt-2 text-slate-700">
            Students researching specific countries for their study needs, those comparing practical factors like costs and work rights, and individuals seeking realistic assessments of international education options.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid This Path</h2>
          <p className="mt-2 text-slate-700">
            Students who are not prepared for the additional costs and complexities of international study, those who prefer local education systems, or individuals facing visa restrictions that limit their options.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/international-students" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            International Student Guide
          </Link>
          <Link href="/global-careers" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Explore Global Careers
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Quick Country Comparison</h2>
        <p className="mt-2 text-slate-700">Overview of key factors for top study destinations:</p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-2 text-left">Country</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Avg. Tuition (USD/year)</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Degree Duration</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Post-Study Work</th>
                <th className="border border-slate-300 px-4 py-2 text-left">English Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">USA</td>
                <td className="border border-slate-300 px-4 py-2">$25,000-50,000</td>
                <td className="border border-slate-300 px-4 py-2">4 years (Bachelor)</td>
                <td className="border border-slate-300 px-4 py-2">1-3 years OPT</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Canada</td>
                <td className="border border-slate-300 px-4 py-2">$15,000-30,000</td>
                <td className="border border-slate-300 px-4 py-2">4 years (Bachelor)</td>
                <td className="border border-slate-300 px-4 py-2">1-3 years</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">UK</td>
                <td className="border border-slate-300 px-4 py-2">$20,000-35,000</td>
                <td className="border border-slate-300 px-4 py-2">3 years (Bachelor)</td>
                <td className="border border-slate-300 px-4 py-2">2-5 years</td>
                <td className="border border-slate-300 px-4 py-2">IELTS</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Australia</td>
                <td className="border border-slate-300 px-4 py-2">$20,000-40,000</td>
                <td className="border border-slate-300 px-4 py-2">3 years (Bachelor)</td>
                <td className="border border-slate-300 px-4 py-2">2-4 years</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS/PTE</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">Europe</td>
                <td className="border border-slate-300 px-4 py-2">$8,000-20,000</td>
                <td className="border border-slate-300 px-4 py-2">3-4 years (Bachelor)</td>
                <td className="border border-slate-300 px-4 py-2">6-18 months</td>
                <td className="border border-slate-300 px-4 py-2">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">*Approximate figures; check official sources for current rates and requirements.</p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Roadmap for Studying Abroad</h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">1. Define Your Goals and Budget</h3>
            <p className="mt-2 text-slate-700">Clarify why you&apos;re studying abroad: career advancement, cultural experience, or academic excellence. Set a realistic budget including tuition, living costs, and emergencies.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">2. Research Destinations Thoroughly</h3>
            <p className="mt-2 text-slate-700">Compare rankings, courses, costs, and post-study options. Visit university websites, read student reviews, and check visa policies.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">3. Prepare Academic and Language Requirements</h3>
            <p className="mt-2 text-slate-700">Gather transcripts, take standardized tests (SAT, IELTS), and write personal statements. Start early as scores take time.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">4. Secure Funding and Scholarships</h3>
            <p className="mt-2 text-slate-700">Apply for university scholarships, government grants, and external funding. Explore education loans if needed.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">5. Apply and Obtain Visa</h3>
            <p className="mt-2 text-slate-700">Submit applications to multiple universities, accept offers, and apply for student visas. Provide all required documents promptly.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">6. Plan Arrival and Integration</h3>
            <p className="mt-2 text-slate-700">Arrange accommodation, health insurance, and orientation. Connect with international student communities for support.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
            <div className="mt-4 space-y-2">
              <p className="text-xs text-green-700"><strong>For:</strong> {item.for}</p>
              <p className="text-xs text-red-700"><strong>Avoid if:</strong> {item.avoid}</p>
            </div>
            <span className="mt-5 inline-flex text-sm font-semibold text-blue-700">Read full guide →</span>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">Which country might suit my field?</h3>
            <p className="mt-1 text-slate-700">Consider USA for research-intensive programs, UK for shorter business-focused degrees, Canada for co-op opportunities, Australia for vocational healthcare training. Check specific university offerings in your area of interest.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What are the typical costs?</h3>
            <p className="mt-1 text-slate-700">Annual expenses vary widely: Europe ($8,000-20,000), Canada ($15,000-30,000), UK ($20,000-35,000), Australia ($20,000-40,000), USA ($25,000-50,000). Include living costs, which can add 30-50% to tuition.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Can I work while studying?</h3>
            <p className="mt-1 text-slate-700">Most countries allow part-time work (10-20 hours/week) during terms. Check specific visa conditions and restrictions in your chosen destination.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Are scholarships available?</h3>
            <p className="mt-1 text-slate-700">Some universities offer merit-based aid, but most international students fund their own education. Government scholarships are competitive and limited.</p>
          </div>
        </div>
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
