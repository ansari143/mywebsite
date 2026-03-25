import Link from "next/link";

export const metadata = {
  title: "Jobs That Will Stay Strong Even in the AI Era | Nishaglobal Education",
  description:
    "Explore future-proof jobs that are expected to remain valuable even as AI changes industries and work patterns.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/future-proof-jobs-ai-era",
  },
};

export default function FutureProofJobsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <article className="space-y-6">
        <div className="inline-flex rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700">
          Future Careers
        </div>

        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Jobs That Will Stay Strong Even in the AI Era
        </h1>

        <p className="text-slate-600 leading-7">
          AI is changing the way people work, but it does not mean every job will
          disappear. Some careers will remain strong because they depend on human
          judgment, trust, creativity, technical depth, empathy, or real-world
          responsibility.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">
          Jobs Likely to Stay Strong
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 leading-7">
          <li>Doctors, nurses, and healthcare professionals</li>
          <li>Skilled engineers and infrastructure specialists</li>
          <li>Cybersecurity professionals</li>
          <li>AI engineers and data specialists</li>
          <li>Teachers, trainers, and learning designers</li>
          <li>Therapists, counselors, and care-focused roles</li>
          <li>Product managers and decision-oriented business roles</li>
          <li>Creative strategists and brand storytellers</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">
          Why These Roles Matter
        </h2>
        <p className="text-slate-700 leading-7">
          The strongest jobs in the AI era usually combine human value with
          technology awareness. Students who build communication, adaptability,
          problem-solving, and digital skills will be in a better position.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">
          Best Student Strategy
        </h2>
        <p className="text-slate-700 leading-7">
          Do not fear AI. Learn how to work with it. Future-ready students will
          combine domain knowledge with tools, creativity, and strong judgment.
        </p>
      </article>

      <section className="rounded-3xl border border-rose-100 bg-rose-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Explore More</h2>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/skills"
            className="rounded-xl bg-rose-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-rose-700"
          >
            Explore Skills
          </Link>
          <Link
            href="/tests"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Free Career Test
          </Link>
        </div>
      </section>
    </main>
  );
}