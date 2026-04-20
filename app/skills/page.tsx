import Link from "next/link";
import { skillsPages } from "@/data/skillsPages";

export const metadata = {
  title: "High-Demand Skills | Nisha Global Education",
  description:
    "Explore beginner, intermediate, and advanced pathways for modern AI and technology skills, including Python, prompt engineering, LangChain, AI agents, and practical project roadmaps.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/skills",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const gradients = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-amber-50 to-orange-50",
  "from-rose-50 to-pink-50",
  "from-violet-50 to-purple-50",
];

const levelTracks = [
  {
    level: "Beginner",
    duration: "0-6 weeks",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-800",
    whoFor:
      "Students starting from zero in coding or AI concepts, including school and college learners.",
    avoid:
      "People looking for fast interview prep without learning foundations.",
    outcomes: [
      "Write basic Python and understand core syntax.",
      "Use prompt engineering for reliable AI outputs.",
      "Read and modify small code examples safely.",
    ],
    links: [
      { label: "Python Concepts", href: "/skills/python-concepts" },
      { label: "Prompt Engineering", href: "/skills/prompt-engineering" },
      { label: "AI Roadmap", href: "/skills/ai-roadmap" },
    ],
  },
  {
    level: "Intermediate",
    duration: "6-16 weeks",
    badgeClass: "border-blue-200 bg-blue-50 text-blue-800",
    whoFor:
      "Learners who know basics and want to build complete AI features with frameworks and tools.",
    avoid:
      "Those who are still uncomfortable with Python basics and debugging simple scripts.",
    outcomes: [
      "Build LangChain pipelines with prompts, tools, and retrieval.",
      "Create agent-style flows for task automation.",
      "Deploy one portfolio-ready mini project.",
    ],
    links: [
      { label: "LangChain", href: "/skills/langchain" },
      { label: "AI Agents", href: "/skills/ai-agents" },
      { label: "LangGraph", href: "/skills/langgraph" },
    ],
  },
  {
    level: "Advanced",
    duration: "16+ weeks",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-800",
    whoFor:
      "Learners building production-ready workflows with observability, quality checks, and performance optimization.",
    avoid:
      "Students expecting advanced architecture outcomes without regular project practice.",
    outcomes: [
      "Design multi-step graph workflows and fallback strategies.",
      "Add monitoring, tracing, and evaluation with observability tools.",
      "Ship 2-3 advanced projects with measurable impact.",
    ],
    links: [
      { label: "LangGraph", href: "/skills/langgraph" },
      { label: "LangSmith / Langfuse", href: "/skills/langsmith-langfuse" },
      { label: "Career Tests", href: "/tests" },
    ],
  },
];

const ninetyDayPlan = [
  {
    phase: "Days 1-30",
    focus: "Foundation",
    actions:
      "Finish Python and prompt basics, then create one simple Q&A tool with clear prompts and error handling.",
  },
  {
    phase: "Days 31-60",
    focus: "Application",
    actions:
      "Build one LangChain or agent project with tool usage, then document your architecture and failure cases.",
  },
  {
    phase: "Days 61-90",
    focus: "Production Mindset",
    actions:
      "Add LangGraph flow control and observability, then publish a portfolio case study with screenshots and metrics.",
  },
];

const projectIdeasByLevel = [
  {
    level: "Beginner",
    idea: "Career FAQ assistant",
    stack: "Python + prompt templates",
    value:
      "Shows you can structure prompts, format responses, and handle basic user intent clearly.",
  },
  {
    level: "Intermediate",
    idea: "Study planner with tool calls",
    stack: "LangChain + API/tool integration",
    value:
      "Shows chaining, external tools, and practical workflow design beyond one-shot answers.",
  },
  {
    level: "Advanced",
    idea: "Multi-agent learning workflow",
    stack: "LangGraph + LangSmith/Langfuse",
    value:
      "Shows orchestration, monitoring, and evaluation quality expected in real AI product environments.",
  },
];

export default function SkillsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nishaglobaleducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "High-Demand Skills",
        item: "https://nishaglobaleducation.com/skills",
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Future-Ready Learning
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            High-Demand Skills
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn modern tech skills using clear, simple language. Explore
            beginner, intermediate, and advanced pathways for AI agents,
            LangChain, LangGraph, prompt engineering, Python concepts, and AI
            monitoring tools.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">Who this page is for</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Students, parents, and beginners who want a clear path into AI and modern tech skills without jargon. Ideal if you want practical skills that connect to real career opportunities.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">Who should avoid this path</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If you only need surface-level career advice or want academic theory without practical application, this page is not the best fit.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">How to use this guide</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              First choose your current level, then follow the matching pathway. Build one project per phase and move forward only after you can explain and debug your own work.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Choose your learning level</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Pick the track that matches your current skill level. Avoid jumping ahead too early, because weak foundations usually slow down intermediate and advanced progress.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {levelTracks.map((track) => (
            <article key={track.level} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${track.badgeClass}`}>
                {track.level} • {track.duration}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">Who should choose this</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{track.whoFor}</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">Who should avoid this</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{track.avoid}</p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">Expected outcomes</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                {track.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {track.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">90-day progression roadmap</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {ninetyDayPlan.map((phase) => (
            <div key={phase.phase} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{phase.phase}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{phase.focus}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{phase.actions}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Why these skills matter today</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Practical career value</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              These skills connect directly to roles in AI, software, analytics, and digital design that are hiring now.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Low barrier to start</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              You can begin with Python and prompt engineering before moving into tools like LangChain and AI agents.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Project-ready skills</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Learning these skills in order helps you build portfolio work that colleges and employers recognize.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Link
          href="/skills/ai-roadmap"
          className="group block rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8"
        >
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
              Learning Guide
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl group-hover:text-indigo-700">
              AI Engineer Learning Roadmap
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              Follow a clear step-by-step path to learn Python, Prompt
              Engineering, LangChain, AI Agents, LangGraph, and LangSmith /
              Langfuse. This roadmap helps beginners understand what to learn
              first and how the full AI stack connects.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Python",
                "Prompt Engineering",
                "LangChain",
                "AI Agents",
                "LangGraph",
                "LangSmith / Langfuse",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-indigo-100 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 text-sm font-semibold text-indigo-700">
              View roadmap →
            </div>
          </div>
        </Link>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillsPages.map((skill, index) => (
          <Link
            key={skill.slug}
            href={`/skills/${skill.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div
              className={`inline-flex rounded-xl bg-gradient-to-br px-3 py-2 text-sm font-semibold text-slate-700 ${
                gradients[index % gradients.length]
              }`}
            >
              {skill.badge}
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-700">
              {skill.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {skill.description}
            </p>

            <div className="mt-4 text-sm font-medium text-blue-700">
              Read guide →
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Real project ideas by level</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Use these examples to convert theory into outcomes you can show in interviews, internships, and academic portfolios.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Level</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Project Idea</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Suggested Stack</th>
                <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {projectIdeasByLevel.map((item) => (
                <tr key={item.level} className="border-b border-slate-200">
                  <td className="border-r border-slate-200 px-4 py-3 font-medium text-slate-800">{item.level}</td>
                  <td className="border-r border-slate-200 px-4 py-3 text-slate-700">{item.idea}</td>
                  <td className="border-r border-slate-200 px-4 py-3 text-slate-700">{item.stack}</td>
                  <td className="px-4 py-3 text-slate-700">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">Is prior coding experience required?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              No. We designed these guides for beginners, starting with Python concepts and moving step-by-step into modern AI tools.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">How do I choose the right skill first?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Start with the AI roadmap for a complete path. If you already know your interest, begin with the skill guide that matches that goal.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">What can I do after learning these skills?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              You can build projects for college applications, internships, freelance work, and roles in AI, software, automation, or digital marketing.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">Do you support intermediate and advanced learners now?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Yes. This page now includes level-based tracks with clear outcomes, project goals, and progression guidance for beginner, intermediate, and advanced learners.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">How do I know when to move from intermediate to advanced?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Move ahead when you can build and debug a complete workflow with tools, explain your architecture decisions, and track quality with observability metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900">Ready to commit to a practical learning path?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Start at your current level and move forward with project evidence. Beginner, intermediate, and advanced tracks are designed to help you learn in sequence and avoid random learning.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/skills/ai-roadmap"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Follow the AI Roadmap
            </Link>
            <Link
              href="/tests"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Take a Career Test
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Best Learning Order
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {[
            "Python Concepts",
            "Prompt Engineering",
            "LangChain",
            "AI Agents",
            "LangGraph",
            "LangSmith / Langfuse",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          Start with Python basics, then move on to prompt engineering, LangChain, AI agents, advanced workflows with LangGraph, and monitoring with LangSmith or Langfuse.
        </p>
      </section>
    </div>
  );
}