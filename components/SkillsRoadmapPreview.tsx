import Link from "next/link";

const roadmapSteps = [
  {
    step: "01",
    title: "Python Basics",
    description:
      "Start with variables, functions, loops, conditions, and small logic building.",
    href: "/skills/python-concepts",
  },
  {
    step: "02",
    title: "Prompt Engineering",
    description:
      "Learn how to give clear instructions so AI produces better output.",
    href: "/skills/prompt-engineering",
  },
  {
    step: "03",
    title: "LangChain",
    description:
      "Understand prompts, chains, tools, memory, and LLM app workflows.",
    href: "/skills/langchain",
  },
  {
    step: "04",
    title: "AI Agents",
    description:
      "See how AI can think step by step, use tools, and complete tasks.",
    href: "/skills/ai-agents",
  },
  {
    step: "05",
    title: "LangGraph",
    description:
      "Build advanced multi-step workflows with branching and retries.",
    href: "/skills/langgraph",
  },
  {
  step: "06",
  title: "LangSmith / Langfuse",
  description:
    "Learn monitoring, tracing, and debugging for AI applications.",
  href: "/skills/langsmith-langfuse",
},
];

export default function SkillsRoadmapPreview() {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
          Beginner Roadmap
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Start Here: AI Skills Learning Roadmap
        </h2>

        <p className="mt-3 text-base leading-7 text-slate-600">
          If you are new to AI and modern tech skills, follow this simple order.
          Start with Python first, then learn prompts, frameworks, and agent
          workflows step by step.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        {roadmapSteps.map((item, index) => (
          <Link
            key={item.step}
            href={item.href}
            className="group relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                {item.step}
              </div>

              {index < roadmapSteps.length - 1 && (
                <span className="hidden text-slate-300 lg:block">→</span>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-violet-700">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>

            <div className="mt-4 text-sm font-medium text-violet-700">
              Learn more →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">
        <p className="text-sm leading-7 text-slate-700">
          <span className="font-semibold text-slate-900">Simple advice:</span>{" "}
          Do not try to learn everything together. First build your Python base,
          then learn how prompts work, then move into LangChain, AI agents, and
          advanced workflows.
        </p>
      </div>
    </section>
  );
}