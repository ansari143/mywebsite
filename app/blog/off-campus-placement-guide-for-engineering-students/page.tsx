import type { Metadata } from "next";
import Link from "next/link";
import TrustComponent from "@/components/TrustComponent";

export const metadata: Metadata = {
  title: "Off-Campus Placement Guide for Engineering Students | Nishaglobal Education",
  description:
    "Detailed off-campus placement guidance for engineering students in India: what to do if not placed in college, how to apply smartly, build proof of skills, and recover from rejection.",
  alternates: {
    canonical:
      "https://www.nishaglobaleducation.com/blog/off-campus-placement-guide-for-engineering-students",
  },
  openGraph: {
    title: "Off-Campus Placement Guide for Engineering Students",
    description:
      "What engineering students should do if not placed on campus: resume strategy, job search channels, referrals, internships, and realistic next steps.",
    url: "https://www.nishaglobaleducation.com/blog/off-campus-placement-guide-for-engineering-students",
    type: "article",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const faqs = [
  {
    q: "Can I still get a job if I missed campus placement?",
    a: "Yes. Many engineers start through off-campus hiring, internships, support roles, startups, contract jobs, and referrals. Missing campus placement is a setback, not the end of your options.",
  },
  {
    q: "How long does off-campus job search usually take?",
    a: "It varies by market, skills, location, and role. Some students convert within weeks, while others need several months of consistent applications and upskilling.",
  },
  {
    q: "Should I take a low-paying first job?",
    a: "Sometimes yes, if the role gives real experience, learning, and a path to a stronger switch. Students should judge role quality, not only starting salary.",
  },
  {
    q: "Are certifications enough without projects?",
    a: "Usually no. Certifications help, but recruiters trust proof of work more. Projects, internships, freelance work, or hands-on labs improve credibility.",
  },
];

export default function OffCampusPlacementGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "Off-Campus Placement Guide for Engineering Students",
        description:
          "Detailed off-campus placement guidance for engineering students in India: what to do if not placed in college, how to apply smartly, build proof of skills, and recover from rejection.",
        url: "https://www.nishaglobaleducation.com/blog/off-campus-placement-guide-for-engineering-students",
        author: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
        publisher: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
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

      <section className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-orange-100 bg-white px-3 py-1 text-sm font-medium text-orange-700">
          Off-campus engineering jobs
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Off-Campus Placement Guide for Engineering Students
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
          Not getting placed in college can feel personal, but it is usually a market and preparation problem, not a permanent verdict on your career. Students who recover well do three things: they stop waiting for campus systems to save them, they build evidence that they can do the job, and they apply in a focused way instead of spamming the same resume everywhere.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-950">Who should read this first</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>Final-year students with no offer yet.</li>
            <li>Recent graduates still searching after campus season.</li>
            <li>Students from lower-visibility colleges who need non-campus routes.</li>
            <li>Parents who want a practical recovery plan after rejection.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-xl font-bold text-rose-950">What to avoid immediately</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
            <li>Doing nothing for weeks after one rejection cycle.</li>
            <li>Collecting random certifications without improving real skills.</li>
            <li>Using fake experience or inflated resumes.</li>
            <li>Applying to roles with no relation to your profile or basics.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">First principle: off-campus hiring rewards proof, not only potential</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            On campus, a company may interview students partly because the college already filtered the batch. Off campus, you have to earn attention. That means your resume, portfolio, GitHub, LinkedIn, internship work, project depth, and referrals matter more.
          </p>
          <p>
            The goal is not to look impressive with keywords. The goal is to reduce recruiter risk. A recruiter should be able to see what role you want, what skills you have, what evidence supports those skills, and why you are interview-ready.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">What to do in the first 30 days if you are unplaced</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Week 1: Reset your documents</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Rewrite your resume for one target role, not all roles.</li>
              <li>Clean your LinkedIn headline, summary, and project section.</li>
              <li>Create a tracker for applications, referrals, tests, and outcomes.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Week 2: Build proof</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Finish one project that solves a real problem and can be demoed.</li>
              <li>Publish the code, screenshots, or explanation if relevant.</li>
              <li>Revise fundamentals expected for your role.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Week 3: Open job channels</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Apply through company career pages, LinkedIn Jobs, Naukri, Indeed, and startup job boards.</li>
              <li>Message alumni and seniors with a clear, respectful referral request.</li>
              <li>Search for internship-to-full-time and trainee roles, not only high-salary openings.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Week 4: Tighten interview readiness</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Practice five mock interviews and record weak answers.</li>
              <li>Revise your project explanations until they are simple and confident.</li>
              <li>Review rejection patterns and fix the one that repeats most.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Best off-campus channels for engineering students in India</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Channel</th>
                <th className="px-4 py-3 font-semibold">Why it matters</th>
                <th className="px-4 py-3 font-semibold">How to use it well</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Company career pages</td>
                <td className="px-4 py-3 text-slate-600">Direct applications avoid noise from reposted jobs.</td>
                <td className="px-4 py-3 text-slate-600">Track target companies weekly and apply early.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">LinkedIn</td>
                <td className="px-4 py-3 text-slate-600">Useful for jobs, networking, and recruiter visibility.</td>
                <td className="px-4 py-3 text-slate-600">Post credible project work and send thoughtful referral requests.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Naukri and Indeed</td>
                <td className="px-4 py-3 text-slate-600">Large volume, especially for entry-level and support roles.</td>
                <td className="px-4 py-3 text-slate-600">Use role filters carefully and refresh profile keywords honestly.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Alumni and seniors</td>
                <td className="px-4 py-3 text-slate-600">Referrals can improve response rates.</td>
                <td className="px-4 py-3 text-slate-600">Ask only after your resume and profile are ready.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Startups and internships</td>
                <td className="px-4 py-3 text-slate-600">Faster entry for students who need experience.</td>
                <td className="px-4 py-3 text-slate-600">Evaluate mentorship, work quality, and conversion potential.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How to make your profile stronger without wasting time</h2>
        <div className="mt-4 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
          <div>
            <h3 className="font-bold text-slate-900">Choose one job family</h3>
            <p className="mt-2">
              Pick a lane such as software developer, data analyst, QA engineer, embedded systems trainee, design engineer, or support engineer. A focused profile is easier to explain and easier to match with openings.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Build one interview-worthy project</h3>
            <p className="mt-2">
              Recruiters do not need ten shallow mini-projects. They need evidence that you can define a problem, make decisions, use tools correctly, and explain results.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Use internships and freelance work strategically</h3>
            <p className="mt-2">
              A small but real work experience can be more useful than another generic certificate. If you take a freelance or internship role, document outcomes and what you learned.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Keep applying, but review pattern failures</h3>
            <p className="mt-2">
              If you get no calls, the issue is usually resume, targeting, or visibility. If you get calls but fail tests, the issue is skill depth or speed. If you clear tests but fail interviews, the issue is explanation, confidence, or fundamentals.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-amber-950">What not to believe</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900 sm:text-base">
          <li>One certificate will fix an empty profile.</li>
          <li>If campus placement failed, career growth is over.</li>
          <li>Only top colleges can produce good off-campus outcomes.</li>
          <li>The first job must be perfect or it is useless.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Trust and verification note</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Job openings, fresher hiring patterns, salary ranges, and recruitment tests change quickly. Students should verify job descriptions, compensation, work location, bond terms, and company legitimacy from official employer pages before accepting any opportunity.
        </p>
        <div className="mt-5">
          <TrustComponent
            author="Nishaglobal Education editorial team"
            reviewedBy="Education advisors and early-career job guidance reviewers"
            lastUpdated="May 2026"
            disclaimer="This guide is educational and practical, but it is not a guarantee of job selection. Always confirm company details, role terms, and payment requests through official employer sources."
          />
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 sm:text-base">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-orange-200 bg-orange-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-orange-950">Next step</h2>
        <p className="mt-3 text-sm leading-7 text-orange-900 sm:text-base">
          If you are currently unplaced, do not try to fix everything at once. Pick one role, rebuild one strong resume, finish one credible project, and send targeted applications daily for the next month.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/blog/how-to-prepare-for-campus-placement-during-engineering" className="rounded-xl bg-orange-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700">
            Read Campus Placement Guide
          </Link>
          <Link href="/blog/global-job-search-guide-for-engineering-students" className="rounded-xl border border-orange-200 bg-white px-5 py-3 text-center text-sm font-semibold text-orange-700 hover:bg-orange-100">
            Read Global Job Search Guide
          </Link>
        </div>
      </section>
    </main>
  );
}
