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
    ["Software Engineer", "High demand in technology, product, SaaS, and platform companies globally."],
    ["Data Scientist", "Strong demand across finance, retail, healthcare, and AI-driven organizations."],
    ["Nurse and Healthcare Professional", "Stable global opportunity, especially where healthcare systems face staffing shortages."],
    ["Cybersecurity Specialist", "Growing demand as organizations strengthen digital security and compliance."],
    ["Product Manager", "High-value role blending technology, strategy, customer needs, and execution."],
    ["Financial Analyst and Consultant", "Important for business growth, investment, reporting, and strategic planning."],
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
          High-paying careers usually combine strong demand, specialized skills, and long-term relevance. Students should look beyond salary alone and consider entry path,
          global demand, regulation, growth potential, and personal fit.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {jobs.map(([title, desc]) => (
          <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
