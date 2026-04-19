import Link from "next/link";

export const metadata = {
  title: "Jobs That Will Stay Strong Even in the AI Era | Nishaglobal Education",
  description:
    "Explore future-proof jobs that are expected to remain valuable as AI changes industries. Learn which skills and career paths protect your long-term employability.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/future-proof-jobs-ai-era",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const faqs = [
  {
    q: "Will AI replace most jobs in the next 10 years?",
    a: "AI will automate specific tasks, not entire jobs in most cases. Roles requiring judgment, empathy, creativity, physical presence, or cross-domain thinking are harder to automate fully. The bigger shift is that AI will change what tasks people spend their time on inside most jobs, making adaptability and upskilling more important than avoiding technology.",
  },
  {
    q: "What skills should students build to stay relevant in an AI-driven world?",
    a: "Focus on combining domain expertise with technology fluency. Being able to use AI tools effectively in your field matters more than fearing them. Critical thinking, communication, problem framing, and cross-functional collaboration are increasingly valuable. Practical technical skills like data literacy, prompt engineering, and understanding AI outputs also help.",
  },
  {
    q: "Are healthcare careers safe from AI disruption?",
    a: "Healthcare involves diagnosis support, patient interaction, empathy, physical care, and ethical judgment. AI is entering medical imaging and data analysis, but the direct patient relationship, clinical decision-making in complex cases, and hands-on care roles are expected to remain primarily human-led. The demand for nurses, therapists, specialists, and care workers continues to grow globally.",
  },
  {
    q: "Is it still worth studying engineering in an AI era?",
    a: "Yes. Engineering involves infrastructure design, physical systems, safety-critical decisions, and multi-disciplinary problem solving that require qualified professionals. AI tools are being used by engineers, not replacing them. Civil, mechanical, electrical, chemical, and computer engineers remain in demand. Adding AI and data literacy to an engineering education strengthens the value further.",
  },
  {
    q: "Which student strategy is best for AI-era career planning?",
    a: "Choose a field you have genuine strength in and care about. Then layer in technology awareness on top of that domain knowledge. Students who deeply understand one field and can also work with modern tools are more resilient than students who only learn tools without domain depth. Build real projects, not just theoretical knowledge.",
  },
];

export default function FutureProofJobsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700">
          Future Careers
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Jobs That Will Stay Strong Even in the AI Era
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          AI is changing the way people work, but it is not making all careers obsolete. Many roles depend on human judgment,
          trust, creativity, empathy, technical depth, and real-world responsibility in ways that remain hard to automate fully.
          This guide explains which careers are resilient and why, so students can plan their paths with confidence.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Careers with strong long-term resilience</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Healthcare professionals", "Doctors, nurses, therapists, allied health workers. Patient care, empathy, physical examination, and ethical decisions are central to these roles and deeply human."],
            ["Skilled engineers", "Civil, electrical, mechanical, chemical, and software engineers design, build, and maintain systems. AI assists but doesn't replace the judgment, licensing, and accountability required."],
            ["Cybersecurity professionals", "Protecting systems from human adversaries requires adaptive thinking. As AI-based attacks grow, so does demand for skilled defenders."],
            ["AI and data specialists", "The people building, training, auditing, and deploying AI systems are in high demand. These roles require both technical skill and domain context."],
            ["Teachers and learning designers", "Education involves motivation, relationship, personalized coaching, and role modeling. AI tools supplement but don't replace the human connection at the core of learning."],
            ["Therapists, counselors, and care workers", "Mental health, rehabilitation, elderly care, and social work depend on trust, presence, and empathy that remain uniquely human."],
            ["Product managers and strategic decision-makers", "Defining what to build, for whom, and why requires business judgment, stakeholder management, and context that AI cannot own independently."],
            ["Creative strategists and brand storytellers", "Deep cultural understanding, original concept development, and purposeful communication are human strengths that creative AI tools extend rather than replace."],
          ].map(([role, reason]) => (
            <div key={role} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{role}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Why these roles remain strong</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          The strongest careers in the AI era share common traits: they require human accountability, contextual judgment,
          physical presence, or cross-domain reasoning that AI cannot yet replicate reliably on its own. They also tend to
          involve ongoing ethical responsibility, relationship-building, or legal licensing that adds a layer of protection.
        </p>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Students who understand these principles can make smarter career decisions rather than reacting to short-term hype
          or fear. Most careers are not disappearing; they are transforming. The question is whether you are adapting with them.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Practical student strategy for AI-era planning</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["Build domain depth first", "Choose a field based on your genuine strengths, not just what sounds resilient. Deep domain knowledge is your primary career asset."],
            ["Add AI and tool fluency on top", "Learn to use AI tools in your specific field: healthcare AI tools, engineering simulation software, data analytics platforms, or design AI systems."],
            ["Build projects, not just certificates", "Employers and graduate programs value demonstrated work. Build something real with your knowledge, even at a beginner level."],
            ["Stay adaptable and keep learning", "The specific tools will change. Your ability to learn new tools quickly, while retaining judgment, is your long-term edge."],
          ].map(([step, desc]) => (
            <div key={step} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{step}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Important note</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Career trends evolve. This article reflects patterns observed up to April 2026 and is intended for educational
          guidance only. Always verify industry demand, salary data, and job availability from official labor market sources
          before making major career or education decisions.
        </p>
        <p className="mt-2 text-sm text-slate-500">Last reviewed: April 2026 Â· Author: Nishaglobal Education editorial team</p>
      </section>

      <section className="rounded-3xl border border-rose-100 bg-rose-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Explore more</h2>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/skills" className="rounded-xl bg-rose-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-rose-700">
            Explore Future-Ready Skills
          </Link>
          <Link href="/global-careers" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Global Careers Guide
          </Link>
          <Link href="/tests" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Take Free Career Test
          </Link>
        </div>
      </section>
    </div>
  );
}
