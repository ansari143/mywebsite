import Link from "next/link";

export const metadata = {
  title: "AI Engineer Learning Roadmap | Nishaglobal Education",
  description:
    "Step-by-step roadmap to learn AI development including Python, prompt engineering, LangChain, AI agents, LangGraph, and observability tools.",
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
            follow this simple roadmap. Start with Python fundamentals and move
            step-by-step toward AI agents, workflows, and monitoring tools.
          </p>
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
          into frameworks like LangChain and LangGraph. Practice small projects
          to build real experience.
        </p>
      </section>
    </div>
  );
}