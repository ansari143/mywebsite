import type { Metadata } from "next";
import Link from "next/link";
import TrustComponent from "@/components/TrustComponent";

export const metadata: Metadata = {
  title: "How to Prepare for Campus Placement During Engineering | Nishaglobal Education",
  description:
    "A practical campus placement guide for engineering students in India with semester-wise preparation, resume strategy, coding plan, interview roadmap, and realistic placement advice.",
  alternates: {
    canonical:
      "https://www.nishaglobaleducation.com/blog/how-to-prepare-for-campus-placement-during-engineering",
  },
  openGraph: {
    title: "How to Prepare for Campus Placement During Engineering",
    description:
      "Step-by-step campus placement preparation for engineering students with coding, aptitude, projects, resume, and interview strategy.",
    url: "https://www.nishaglobaleducation.com/blog/how-to-prepare-for-campus-placement-during-engineering",
    type: "article",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const faqs = [
  {
    q: "When should engineering students start campus placement preparation?",
    a: "Most students should start serious preparation by the second year or early third year. Waiting until the final placement semester usually creates unnecessary pressure.",
  },
  {
    q: "Is coding required for every engineering campus placement?",
    a: "No, but basic problem solving, communication, and role-specific fundamentals are required in most hiring processes. For software roles, coding is usually essential.",
  },
  {
    q: "Can average students still get placed on campus?",
    a: "Yes. Many students with average marks get placed by building consistent skills, preparing for aptitude and interviews, and applying strategically to matching roles.",
  },
  {
    q: "How many projects should a student keep on a resume?",
    a: "Usually 2 to 4 solid projects are better than a long list of weak or copied projects. Recruiters care more about clarity, ownership, and practical understanding.",
  },
];

export default function CampusPlacementGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "How to Prepare for Campus Placement During Engineering",
        description:
          "A practical campus placement guide for engineering students in India with semester-wise preparation, resume strategy, coding plan, interview roadmap, and realistic placement advice.",
        url: "https://www.nishaglobaleducation.com/blog/how-to-prepare-for-campus-placement-during-engineering",
        author: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
        publisher: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
        mainEntityOfPage:
          "https://www.nishaglobaleducation.com/blog/how-to-prepare-for-campus-placement-during-engineering",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-[#15233d] px-3 py-1 text-sm font-medium text-blue-700">
          Engineering placement guide
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          How to Prepare for Campus Placement During Engineering
        </h1>
        <p className="mt-4 text-base leading-7 text-white sm:text-lg">
          Campus placement preparation is not a one-month activity. Students who usually perform best build their profile over time: they keep marks under control, learn role-relevant skills, practice aptitude and interviews, and avoid copying projects. This guide is for engineering students in India who want a high-probability placement strategy based on consistent preparation rather than luck.
        </p>
        <p className="mt-4 text-sm leading-7 text-white sm:text-base">
          No preparation plan can guarantee a job in every market, but students can sharply improve their chances by preparing early, targeting the right roles, and improving after every rejection.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-[#15233d] p-6">
          <h2 className="text-xl font-bold text-emerald-950">Who should follow this guide</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>Second-year, third-year, and final-year engineering students targeting campus placements.</li>
            <li>Students from CS, IT, ECE, EEE, Mechanical, Civil, and related branches.</li>
            <li>Students who want a realistic semester-by-semester roadmap.</li>
            <li>Parents trying to understand what matters beyond marks.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-[#15233d] p-6">
          <h2 className="text-xl font-bold text-rose-950">Who should avoid weak shortcuts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
            <li>Students depending only on last-minute placement coaching.</li>
            <li>Students copying projects from GitHub without understanding them.</li>
            <li>Students applying to every role without checking eligibility and fit.</li>
            <li>Students ignoring communication and interview practice.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">The core rule: build for placement before placement season starts</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-white sm:text-base">
          <p>
            Many students make the same mistake. They spend most of engineering without a clear direction, then try to fix everything in the final semester. That usually leads to weak resumes, poor aptitude performance, interview anxiety, and random applications. The stronger approach is to build placement readiness in layers.
          </p>
          <p>
            Layer one is eligibility: attendance, backlog control, and minimum academic score. Layer two is skill readiness: branch fundamentals, coding or technical tools, and communication. Layer three is proof of work: projects, internships, clubs, competitions, or research exposure. Layer four is interview performance: aptitude speed, mock interviews, and company-specific preparation.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Semester-wise roadmap</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-[#15233d] p-5">
            <h3 className="font-bold text-white">First year</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white">
              <li>Learn how placement works in your college: cutoff, branches, top recruiters, salary bands, and rejection rules.</li>
              <li>Build study discipline and avoid backlogs.</li>
              <li>Improve English communication and presentation comfort.</li>
              <li>Explore one technical track without rushing to master everything.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <h3 className="font-bold text-white">Second year</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white">
              <li>Choose a realistic role path such as software, data, core engineering, analytics, testing, or operations.</li>
              <li>Start aptitude, logical reasoning, and quantitative practice every week.</li>
              <li>Build one meaningful project with clear ownership.</li>
              <li>Join hackathons, labs, or technical clubs if they give real output.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <h3 className="font-bold text-white">Third year</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white">
              <li>Prepare seriously for coding rounds, technical interviews, and resume shortlisting.</li>
              <li>Get one internship, training outcome, or advanced project if possible.</li>
              <li>Start mock interviews and group discussion practice.</li>
              <li>Build a clean LinkedIn profile and connect with alumni.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <h3 className="font-bold text-white">Final year before drives</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-white">
              <li>Keep a shortlist of companies by role, eligibility, and salary.</li>
              <li>Revise projects and fundamentals until you can explain them clearly.</li>
              <li>Practice company-level tests under time pressure.</li>
              <li>Prepare answers for HR questions, failures, strengths, and mobility.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">What companies usually check on campus</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-[#15233d] text-left text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Stage</th>
                <th className="px-4 py-3 font-semibold">What gets evaluated</th>
                <th className="px-4 py-3 font-semibold">What students should do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-[#15233d]">
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Eligibility screen</td>
                <td className="px-4 py-3 text-white">CGPA, backlogs, branch, passing year, sometimes Class 10 and 12 marks</td>
                <td className="px-4 py-3 text-white">Know your eligibility early and avoid hidden disqualification risks.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Aptitude round</td>
                <td className="px-4 py-3 text-white">Quantitative ability, reasoning, verbal ability, speed, accuracy</td>
                <td className="px-4 py-3 text-white">Practice timed sets weekly and review mistakes by topic.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">Technical round</td>
                <td className="px-4 py-3 text-white">Coding, branch fundamentals, tools, projects, debugging, application logic</td>
                <td className="px-4 py-3 text-white">Revise fundamentals and learn to explain your own work simply.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-white">HR or managerial round</td>
                <td className="px-4 py-3 text-white">Communication, motivation, integrity, teamwork, flexibility</td>
                <td className="px-4 py-3 text-white">Practice concise, truthful answers and avoid scripted exaggeration.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">High-probability preparation areas</h2>
        <div className="mt-4 space-y-5 text-sm leading-7 text-white sm:text-base">
          <div>
            <h3 className="font-bold text-white">1. Resume that can survive shortlisting</h3>
            <p className="mt-2">
              Keep it honest, compact, and role-focused. A campus resume should not read like a copy-paste template full of buzzwords. Projects, internship work, certifications, and achievements should connect to the role you want.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">2. Aptitude consistency</h3>
            <p className="mt-2">
              Aptitude eliminates large numbers of students early. Even technically strong students lose opportunities because they ignore time pressure. Practice percentages, ratios, speed-distance, probability, logic puzzles, and verbal basics until your speed becomes dependable.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">3. Technical depth in one clear lane</h3>
            <p className="mt-2">
              A software candidate should know programming, data structures, DBMS, OOP, OS, and project design at an interview level. A core engineering candidate should know branch concepts, industrial applications, and practical problem solving. One clear lane is better than weak preparation across ten lanes.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white">4. Interview communication</h3>
            <p className="mt-2">
              Interviewers are not only checking knowledge. They also watch clarity, honesty, listening, structure, and calmness. Students improve faster when they record mock answers and notice filler words, weak structure, or vague examples.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-amber-950">Mistakes that quietly reduce placement chances</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900 sm:text-base">
          <li>Keeping unresolved backlogs until placement season.</li>
          <li>Using a fake internship or copied project that collapses in interviews.</li>
          <li>Preparing coding only and ignoring aptitude or communication.</li>
          <li>Applying to roles that do not match your basics.</li>
          <li>Taking rejection personally instead of reviewing what failed.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Trust and verification note</h2>
        <p className="mt-3 text-sm leading-7 text-white sm:text-base">
          Placement eligibility rules, company test patterns, salary bands, and recruitment cycles vary by college and employer. Students should verify campus policy, recruiter eligibility, and offer terms directly from their training and placement cell or the employer before making decisions.
        </p>
        <div className="mt-5">
          <TrustComponent
            author="Nishaglobal Education editorial team"
            reviewedBy="Education advisors and placement guidance reviewers"
            lastUpdated="May 2026"
            disclaimer="This guide is for educational planning only. Final placement criteria, recruiter requirements, and offer decisions should always be confirmed with official college and employer sources."
          />
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Simple weekly plan students can actually follow</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-[#15233d] p-5">
            <p className="text-sm font-semibold text-white">Three technical sessions</p>
            <p className="mt-2 text-sm leading-7 text-white">
              One for fundamentals, one for practice, and one for project work or revision.
            </p>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <p className="text-sm font-semibold text-white">Two aptitude sessions</p>
            <p className="mt-2 text-sm leading-7 text-white">
              One speed round and one analysis round where you classify mistakes by topic.
            </p>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <p className="text-sm font-semibold text-white">One communication session</p>
            <p className="mt-2 text-sm leading-7 text-white">
              Practice introduction, project explanation, and HR answers out loud.
            </p>
          </div>
          <div className="rounded-2xl bg-[#15233d] p-5">
            <p className="text-sm font-semibold text-white">One review session</p>
            <p className="mt-2 text-sm leading-7 text-white">
              Update resume, track company timelines, and fix one weak area from the week.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-[#15233d] p-4">
              <summary className="cursor-pointer text-sm font-semibold text-white sm:text-base">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-white sm:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Next step</h2>
        <p className="mt-3 text-sm leading-7 text-blue-900 sm:text-base">
          If your college placement season is already close, start with resume cleanup, aptitude practice, project revision, and five mock HR answers this week. Small disciplined improvements usually outperform panic preparation.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/blog/off-campus-placement-guide-for-engineering-students" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            Read Off-Campus Strategy
          </Link>
          <Link href="/blog/global-job-search-guide-for-engineering-students" className="rounded-xl border border-blue-200 bg-[#15233d] px-5 py-3 text-center text-sm font-semibold text-blue-700 hover:bg-[#15233d]">
            Read Global Job Search Guide
          </Link>
        </div>
      </section>
    </main>
  );
}
