import Link from "next/link";

export const metadata = {
  title: "International Students Guide | Nishaglobal Education",
  description:
    "A practical guide for international students covering study abroad planning, scholarships, visa preparation, work while studying, and common mistakes to avoid.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/international-students",
  },
};

export default function InternationalStudentsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
          International Students
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Step-by-Step Guide for International Students
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          Studying abroad involves significant planning and financial commitment. This guide breaks down the process into manageable steps to help you assess requirements, avoid common pitfalls, and make informed decisions.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Who This Guide Is For</h2>
          <p className="mt-2 text-slate-700">
            Students researching the practical aspects of international education, those preparing documentation and applications, and individuals assessing whether the investment aligns with their goals.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid This Path</h2>
          <p className="mt-2 text-slate-700">
            Students who prefer local education due to family commitments, financial constraints, or lack of readiness for cultural adaptation. Those in regulated fields requiring immediate local licensing may find domestic options more practical.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">6-Step Roadmap to Studying Abroad</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "1. Self-Assessment and Goal Setting",
              desc: "Evaluate your academic background, career goals, budget, and personal circumstances. Ask: What skills do I want to develop? How much can I afford? Am I prepared for cultural changes?",
              example: "A student aiming for tech careers might prioritize countries with strong computer science programs like Canada or Australia.",
            },
            {
              title: "2. Research and Compare Destinations",
              desc: "Compare factors like tuition costs, living expenses, post-study work options, safety, and quality of education. Use official government websites and student forums for accurate information.",
              example: "UK offers shorter 3-year degrees with potential for global recognition, while USA provides flexible curricula but higher costs.",
            },
            {
              title: "3. Prepare Required Exams and Documents",
              desc: "Take English proficiency tests (IELTS/TOEFL), academic exams (SAT/GRE), and gather transcripts, recommendations, and financial proofs. Start early as scores take time to process.",
              example: "An engineering student might need TOEFL for USA admission and GRE for graduate programs.",
            },
            {
              title: "4. Budget Planning and Funding",
              desc: "Calculate total costs including tuition, housing, food, insurance, and emergencies. Explore scholarships, education loans, and part-time work options.",
              example: "Canadian universities offer affordable tuition (~$15,000-25,000 CAD/year) compared to USA (~$30,000-50,000 USD/year), with work permits allowing income generation.",
            },
            {
              title: "5. Visa Application and Legal Preparation",
              desc: "Understand visa requirements, timelines, and rejection reasons. Consult immigration experts and embassy guidelines. Prepare for interviews and biometric submissions.",
              example: "Australian student visas require health insurance and proof of funds (~$20,000 AUD/year), with strict rules against working more than 40 hours/fortnight.",
            },
            {
              title: "6. Pre-Departure and Arrival Planning",
              desc: "Arrange housing, open bank accounts, understand healthcare systems, and plan for initial settling. Connect with alumni networks for practical tips.",
              example: "European students benefit from Erasmus+ for affordable housing, while USA students should research on-campus dorms vs. off-campus apartments.",
            },
          ].map((item, index) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-700">{item.desc}</p>
              <p className="mt-3 text-sm text-slate-600"><strong>Example:</strong> {item.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Destination Comparison Table</h2>
        <p className="mt-2 text-slate-700">Quick overview of key factors for popular study destinations:</p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-2 text-left">Aspect</th>
                <th className="border border-slate-300 px-4 py-2 text-left">USA</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Canada</th>
                <th className="border border-slate-300 px-4 py-2 text-left">UK</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Australia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">Avg. Tuition (USD/year)</td>
                <td className="border border-slate-300 px-4 py-2">$25,000-50,000</td>
                <td className="border border-slate-300 px-4 py-2">$15,000-30,000</td>
                <td className="border border-slate-300 px-4 py-2">$20,000-35,000</td>
                <td className="border border-slate-300 px-4 py-2">$20,000-40,000</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Post-Study Work (years)</td>
                <td className="border border-slate-300 px-4 py-2">1-3 (OPT)</td>
                <td className="border border-slate-300 px-4 py-2">1-3</td>
                <td className="border border-slate-300 px-4 py-2">2-5</td>
                <td className="border border-slate-300 px-4 py-2">2-4</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">English Requirement</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS</td>
                <td className="border border-slate-300 px-4 py-2">IELTS</td>
                <td className="border border-slate-300 px-4 py-2">TOEFL/IELTS/PTE</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">PR Pathway</td>
                <td className="border border-slate-300 px-4 py-2">Complex</td>
                <td className="border border-slate-300 px-4 py-2">Express Entry</td>
                <td className="border border-slate-300 px-4 py-2">Points-tested</td>
                <td className="border border-slate-300 px-4 py-2">Points-tested</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">*Figures are approximate and can vary by institution and currency fluctuations. Always check official sources.</p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">Can I work while studying abroad?</h3>
            <p className="mt-1 text-slate-700">Yes, most countries allow part-time work (10-20 hours/week) during studies and full-time during breaks. Canada and Australia offer generous work permits post-graduation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">How much money do I need to show for visa?</h3>
            <p className="mt-1 text-slate-700">Requirements vary: USA (~$20,000/year), Canada (~$10,000 CAD + tuition), UK (~£9,000-12,000/year), Australia (~$20,000 AUD/year). Include all expenses.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What if my visa gets rejected?</h3>
            <p className="mt-1 text-slate-700">Common reasons include insufficient funds or unclear study plans. Reapply with stronger documentation. Some countries allow appeals or reapplication after addressing issues.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Are scholarships available for international students?</h3>
            <p className="mt-1 text-slate-700">Yes, many universities offer merit-based scholarships (up to 50% tuition). Government scholarships like Chevening (UK) or Endeavour (Australia) are competitive but valuable.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Choosing a country only by social media hype",
            "Ignoring full cost of living and hidden expenses",
            "Applying without checking official eligibility",
            "Assuming all countries have the same work or PR pathways",
            "Not reviewing licensing rules for regulated professions",
            "Relying on unofficial promises of guaranteed admission or visa",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/study-abroad" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            Explore Country Guides
          </Link>
          <Link href="/tests" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Take Free Career Test
          </Link>
        </div>
      </section>
    </div>
  );
}
