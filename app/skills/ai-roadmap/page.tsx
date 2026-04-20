import Link from "next/link";

export const metadata = {
  title: "AI Engineer Learning Roadmap | Nishaglobal Education",
  description:
    "Step-by-step beginner to advanced roadmap to learn AI development including Python, prompt engineering, LangChain, AI agents, LangGraph, and observability tools.",
};

const roadmap = [
  {
    step: "01",
    title: "Python Fundamentals",
    description:
      "Start with Python basics such as variables, functions, loops, conditions, and simple logic building. Python is the foundation of most AI development.",
    link: "/skills/python-concepts",
  },
  {
    step: "02",
    title: "Prompt Engineering",
    description:
      "Learn how to write clear prompts for AI models. Good prompts improve reasoning, structure, and quality of responses.",
    link: "/skills/prompt-engineering",
  },
  {
    step: "03",
    title: "LangChain Framework",
    description:
      "Understand prompts, chains, tools, memory, and how to build AI applications using LangChain.",
    link: "/skills/langchain",
  },
  {
    step: "04",
    title: "AI Agents",
    description:
      "AI agents allow models to reason step-by-step and interact with tools, APIs, and external data sources.",
    link: "/skills/ai-agents",
  },
  {
    step: "05",
    title: "LangGraph Workflows",
    description:
      "Build advanced AI workflows with branching logic, retries, and multi-step reasoning using graph architecture.",
    link: "/skills/langgraph",
  },
  {
    step: "06",
    title: "LangSmith / Langfuse Monitoring",
    description:
      "Monitor prompts, traces, token usage, and debugging of AI workflows using observability tools.",
    link: "/skills/langsmith-langfuse",
  },
];

const roadmapPhases = [
  {
    phase: "Beginner Phase",
    duration: "Weeks 1-6",
    focus: "Foundations and clarity",
    includes: "Python fundamentals, structured prompts, and simple mini-projects.",
  },
  {
    phase: "Intermediate Phase",
    duration: "Weeks 7-16",
    focus: "Application and integration",
    includes: "LangChain pipelines, AI agents, tool usage, and API-based workflows.",
  },
  {
    phase: "Advanced Phase",
    duration: "Weeks 17+",
    focus: "Architecture and reliability",
    includes: "LangGraph orchestration, observability, evaluation loops, and production mindset.",
  },
];

export default function AIRoadmapPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
            AI Career Guide
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            AI Engineer Learning Roadmap
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600">
            If you want to build AI applications or become an AI developer,
            follow this clear roadmap. Start with Python fundamentals and move
            step-by-step toward AI agents, workflows, and monitoring tools.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">Beginner track</div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800">Intermediate track</div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-800">Advanced track</div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Beginner to advanced phase plan</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {roadmapPhases.map((item) => (
            <div key={item.phase} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.phase}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.duration}</p>
              <p className="mt-3 text-sm font-medium text-slate-800">{item.focus}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.includes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {roadmap.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
              {item.step}
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              {item.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>

            <Link
              href={item.link}
              className="mt-4 inline-block text-sm font-semibold text-indigo-700 hover:underline"
            >
              Learn this skill →
            </Link>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Learning Advice
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          Do not try to learn everything at once. Focus on one step at a time.
          Start with Python basics, then understand prompts, and gradually move
          into frameworks like LangChain and LangGraph. Build small projects to
          gain practical experience.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          Use this roadmap for educational guidance only. Final hiring outcomes depend on your project quality, interview performance, and market demand.
        </p>
      </section>
    </div>
  );
}