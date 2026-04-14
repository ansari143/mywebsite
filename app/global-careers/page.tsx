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
          This section provides practical information about careers that operate across borders. Consider your willingness to relocate, learn new languages, and adapt to different work cultures before pursuing these paths.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Who This Guide Is For</h2>
          <p className="mt-2 text-slate-700">
            Students considering careers that involve international work, those building skills for remote or multinational companies, and individuals assessing whether global mobility fits their lifestyle.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid Global Careers</h2>
          <p className="mt-2 text-slate-700">
            Those tied to local industries with limited international demand, individuals preferring stable domestic roles, or students in highly regulated fields requiring local licensure without global equivalents.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Global Career Pathways</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "Technology and AI",
              desc: "Software engineering, data analytics, artificial intelligence, cybersecurity, cloud, automation, and product roles.",
              globalDemand: "Strong in major tech centers requiring visa sponsorship for most roles",
              skills: "Programming languages, AI frameworks, cloud platforms",
              example: "Remote developers from Eastern Europe working for Silicon Valley startups.",
              avoid: "Those uncomfortable with continuous technology changes or preferring stable, location-bound work.",
            },
            {
              title: "Healthcare and Life Sciences",
              desc: "Nursing, public health, allied health, healthcare administration, biomedical pathways, and regulated clinical professions.",
              globalDemand: "High in countries with staffing shortages, requiring local licensure",
              skills: "Medical training, language proficiency, cultural adaptation",
              example: "Healthcare workers from India filling roles in Canadian hospitals through official programs.",
              avoid: "Individuals not willing to complete additional licensing exams in destination countries.",
            },
            {
              title: "Business and Finance",
              desc: "Accounting, marketing, finance, consulting, operations, supply chain, and entrepreneurship.",
              globalDemand: "Present in multinational companies with frequent travel requirements",
              skills: "Financial modeling, cross-cultural communication, project management",
              example: "Finance professionals working on international mergers from London offices.",
              avoid: "Those who prefer predictable schedules or are uncomfortable with business travel.",
            },
            {
              title: "Creative and Media Careers",
              desc: "Design, digital content, communications, branding, visual storytelling, animation, and production.",
              globalDemand: "Growing through remote collaboration platforms",
              skills: "Digital design tools, content creation, client management",
              example: "Freelance designers from Southeast Asia working for European agencies.",
              avoid: "Individuals who need in-person collaboration or prefer traditional office environments.",
            },
            {
              title: "Education and Public Service",
              desc: "Teaching, policy, public administration, training, and social impact careers.",
              globalDemand: "Limited to international organizations and expatriate communities",
              skills: "Teaching certifications, policy knowledge, language skills",
              example: "Teachers working at international schools in the Middle East.",
              avoid: "Those seeking high salaries or requiring extensive local network connections.",
            },
            {
              title: "Remote and Freelance Opportunities",
              desc: "Location-flexible work in tech, design, content, support, and online business services.",
              globalDemand: "Increasing but competitive with variable income stability",
              skills: "Self-management, online collaboration tools, time zone coordination",
              example: "Virtual assistants from Philippines supporting US businesses.",
              avoid: "People who need structured work environments or prefer team-based office settings.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-700">{item.desc}</p>
              <p className="mt-3 text-sm text-slate-600"><strong>Global Demand:</strong> {item.globalDemand}</p>
              <p className="mt-1 text-sm text-slate-600"><strong>Key Skills:</strong> {item.skills}</p>
              <p className="mt-1 text-sm text-slate-600"><strong>Example:</strong> {item.example}</p>
              <p className="mt-1 text-sm text-red-600"><strong>Consider avoiding if:</strong> {item.avoid}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Industry Comparison Table</h2>
        <p className="mt-2 text-slate-700">Compare growth, salary potential, and work-life balance across sectors:</p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-2 text-left">Industry</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Avg. Global Salary (USD)</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Growth Rate</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Work-Life Balance</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Remote Potential</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">Technology & AI</td>
                <td className="border border-slate-300 px-4 py-2">$80,000-150,000</td>
                <td className="border border-slate-300 px-4 py-2">High (8-10%)</td>
                <td className="border border-slate-300 px-4 py-2">Variable</td>
                <td className="border border-slate-300 px-4 py-2">High</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Healthcare</td>
                <td className="border border-slate-300 px-4 py-2">$50,000-100,000</td>
                <td className="border border-slate-300 px-4 py-2">Medium (3-5%)</td>
                <td className="border border-slate-300 px-4 py-2">Challenging</td>
                <td className="border border-slate-300 px-4 py-2">Low</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">Business & Finance</td>
                <td className="border border-slate-300 px-4 py-2">$60,000-120,000</td>
                <td className="border border-slate-300 px-4 py-2">Medium (4-6%)</td>
                <td className="border border-slate-300 px-4 py-2">Demanding</td>
                <td className="border border-slate-300 px-4 py-2">Medium</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-300 px-4 py-2 font-semibold">Creative & Media</td>
                <td className="border border-slate-300 px-4 py-2">$40,000-90,000</td>
                <td className="border border-slate-300 px-4 py-2">Medium-High (5-7%)</td>
                <td className="border border-slate-300 px-4 py-2">Flexible</td>
                <td className="border border-slate-300 px-4 py-2">High</td>
              </tr>
              <tr>
                <td className="border border-slate-300 px-4 py-2 font-semibold">Education & Public Service</td>
                <td className="border border-slate-300 px-4 py-2">$40,000-70,000</td>
                <td className="border border-slate-300 px-4 py-2">Low (2-4%)</td>
                <td className="border border-slate-300 px-4 py-2">Good</td>
                <td className="border border-slate-300 px-4 py-2">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">*Figures based on global averages; actual salaries vary by role, location, and experience.</p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Roadmap to Global Career Success</h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">1. Assess Your Global Readiness</h3>
            <p className="mt-2 text-slate-700">Evaluate language skills, cultural adaptability, and willingness to relocate. Consider visa requirements and family implications.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">2. Choose Transferable Skills</h3>
            <p className="mt-2 text-slate-700">Focus on skills valued worldwide: digital literacy, communication, problem-solving. Learn English if not native.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">3. Build International Experience</h3>
            <p className="mt-2 text-slate-700">Start with virtual internships, online collaborations, or short-term projects. Network on platforms like LinkedIn.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">4. Research Global Job Markets</h3>
            <p className="mt-2 text-slate-700">Study demand in target countries, salary conversions, and cost of living. Use sites like Glassdoor or Indeed for insights.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">5. Plan Your Move Strategically</h3>
            <p className="mt-2 text-slate-700">Secure work visas, understand tax implications, and plan for healthcare. Consider starting with remote work before relocating.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">How do I find international job opportunities?</h3>
            <p className="mt-1 text-slate-700">Search on platforms like LinkedIn, Indeed, or Glassdoor with location filters. Attend industry conferences and connect with professionals in your target countries.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What visa options exist for skilled workers?</h3>
            <p className="mt-1 text-slate-700">Options include work permits (H-1B in US, Skilled Worker in UK), points-tested systems (Express Entry in Canada), or freelancer visas. Requirements vary by country and occupation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Can remote work support a global career?</h3>
            <p className="mt-1 text-slate-700">Yes for some roles in tech, design, and consulting. However, many positions still require physical presence, and you&apos;ll need to handle tax obligations in multiple jurisdictions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What challenges should I expect in international work?</h3>
            <p className="mt-1 text-slate-700">Cultural adaptation, language barriers, visa complexities, and maintaining work-life balance across time zones. Network building takes longer in new countries.</p>
          </div>
        </div>
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
