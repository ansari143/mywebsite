import Link from "next/link";

export const metadata = {
  title: "High Paying Jobs | Nishaglobal Education",
  description:
    "Explore high paying job categories, future-proof career directions, and global salary-oriented pathways for students and learners.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/high-paying-jobs",
  },
};

export default function HighPayingJobsPage() {
  const jobs = [
    {
      title: "Software Engineer",
      desc: "Developing and maintaining software systems for technology companies.",
      avgSalary: "$100,000-150,000 USD/year",
      skills: "Programming (Python, JavaScript), algorithms, system design",
      entryPath: "Bachelor's in CS, coding bootcamps, self-taught with projects",
      avoid: "Those who prefer creative work over logical problem-solving or dislike continuous learning.",
    },
    {
      title: "Data Scientist",
      desc: "Analyzing complex data sets to inform business decisions.",
      avgSalary: "$110,000-140,000 USD/year",
      skills: "Statistics, machine learning, Python/R, data visualization",
      entryPath: "Degree in math/stats/CS, online courses, internships",
      avoid: "Individuals who struggle with advanced mathematics or prefer roles with clear right/wrong answers.",
    },
    {
      title: "Nurse and Healthcare Professional",
      desc: "Providing patient care in hospitals and clinics.",
      avgSalary: "$70,000-90,000 USD/year",
      skills: "Clinical skills, patient care, medical knowledge",
      entryPath: "Nursing degree, licensure exams, clinical experience",
      avoid: "Those uncomfortable with shift work, emotional demands, or physical requirements of healthcare roles.",
    },
    {
      title: "Cybersecurity Specialist",
      desc: "Protecting computer systems and networks from digital threats.",
      avgSalary: "$120,000-160,000 USD/year",
      skills: "Network security, ethical hacking, compliance frameworks",
      entryPath: "IT degree, certifications (CISSP, CEH), security roles",
      avoid: "People who prefer predictable work or are uncomfortable with high-stakes security responsibilities.",
    },
    {
      title: "Product Manager",
      desc: "Overseeing product development from concept to launch.",
      avgSalary: "$130,000-170,000 USD/year",
      skills: "Product strategy, analytics, stakeholder management",
      entryPath: "Business/tech degree, PM courses, junior PM roles",
      avoid: "Those who dislike ambiguity, frequent changes, or extensive cross-team coordination.",
    },
    {
      title: "Financial Analyst and Consultant",
      desc: "Analyzing financial data and providing strategic advice.",
      avgSalary: "$80,000-120,000 USD/year",
      skills: "Financial modeling, Excel, market analysis",
      entryPath: "Finance degree, CFA certification, analyst positions",
      avoid: "Individuals who find financial concepts challenging or prefer creative rather than analytical work.",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          Career Insights
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          High Paying Jobs Students Should Know About
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          This page outlines careers that typically offer above-average compensation. Consider whether the required skills, work demands, and entry barriers align with your interests and circumstances.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Who This Guide Is For</h2>
          <p className="mt-2 text-slate-700">
            Students researching salary potential in different fields, those considering specialized training for high-demand roles, and individuals assessing whether premium compensation justifies the career requirements.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-slate-900">Who Should Avoid These Careers</h2>
          <p className="mt-2 text-slate-700">
            Those who prioritize work-life balance over high earnings, individuals uncomfortable with ongoing skill development, or students in fields where salaries remain modest despite other rewards.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">High-Paying Career Options</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-4 py-2 text-left">Job Title</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Description</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Avg. Salary</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Key Skills</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Entry Path</th>
                <th className="border border-slate-300 px-4 py-2 text-left">Consider Avoiding If</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.title} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-300 px-4 py-2 font-semibold">{job.title}</td>
                  <td className="border border-slate-300 px-4 py-2">{job.desc}</td>
                  <td className="border border-slate-300 px-4 py-2">{job.avgSalary}</td>
                  <td className="border border-slate-300 px-4 py-2">{job.skills}</td>
                  <td className="border border-slate-300 px-4 py-2">{job.entryPath}</td>
                  <td className="border border-slate-300 px-4 py-2">{job.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">*Salaries vary by location, experience, and company. US averages shown; global figures may differ.</p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Roadmap to High-Paying Careers</h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">1. Identify Your Interests and Strengths</h3>
            <p className="mt-2 text-slate-700">Take career assessments, reflect on subjects you enjoy, and consider work environments that suit you. For example, if you like problem-solving, tech roles might fit better than finance.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">2. Build Foundational Skills</h3>
            <p className="mt-2 text-slate-700">Pursue relevant education or certifications. A computer science degree for software engineering, or CFA for finance. Online platforms like Coursera offer affordable paths.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">3. Gain Practical Experience</h3>
            <p className="mt-2 text-slate-700">Start with internships, freelance projects, or entry-level roles. Build a portfolio: GitHub for coders, case studies for consultants.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">4. Network and Seek Opportunities</h3>
            <p className="mt-2 text-slate-700">Attend industry events, join LinkedIn groups, and connect with professionals. Many high-paying roles are filled through referrals.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">5. Commit to Continuous Learning</h3>
            <p className="mt-2 text-slate-700">Stay updated with industry trends. High-paying fields evolve quickly; invest in ongoing education to remain competitive.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-900">Do these roles always require advanced degrees?</h3>
            <p className="mt-1 text-slate-700">Not necessarily. Many positions prioritize demonstrated skills over formal education. Coding bootcamps work for software roles, while healthcare requires specific licensure.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">How stable are these careers long-term?</h3>
            <p className="mt-1 text-slate-700">Demand exists in growing sectors, but all fields evolve. Stay current through continuous learning; technology changes rapidly while healthcare needs remain consistent.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">What&apos;s the typical timeline to reach these salary levels?</h3>
            <p className="mt-1 text-slate-700">Usually 3-7 years depending on field and starting point. Entry-level positions pay less initially, with progression through experience and specialization.</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Can someone switch careers into these fields?</h3>
            <p className="mt-1 text-slate-700">Yes, though it requires commitment. Self-study, certifications, and entry-level roles can bridge gaps, but expect to start at lower compensation while building experience.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Next Steps</h2>
        <p className="mt-2 text-slate-700">Ready to explore high-paying careers? Start by assessing your skills and interests.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/tests" className="rounded-xl bg-amber-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-amber-700">
            Take Career Assessment
          </Link>
          <Link href="/skills" className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Explore Skill Development
          </Link>
        </div>
      </section>
    </div>
  );
}
