import Link from "next/link";

const skills = [
  {
    title: "AI Agents",
    description:
      "Learn how AI agents think step by step, use tools, and solve real tasks.",
    href: "/skills/ai-agents",
    badge: "Trending",
  },
  {
    title: "LangChain",
    description:
      "Understand prompts, chains, tools, memory, and building LLM apps.",
    href: "/skills/langchain",
    badge: "Framework",
  },
  {
    title: "LangGraph",
    description:
      "Create advanced AI workflows with branching, retries, and reasoning.",
    href: "/skills/langgraph",
    badge: "Workflow",
  },
  {
    title: "Prompt Engineering",
    description:
      "Learn how better prompts produce better AI answers and outputs.",
    href: "/skills/prompt-engineering",
    badge: "Essential",
  },
  {
    title: "Python Concepts",
    description:
      "Build Python basics for AI development, automation, and backend logic.",
    href: "/skills/python-concepts",
    badge: "Foundation",
  },
  {
    title: "Explore All Skills",
    description:
      "View all high-demand skill guides and start learning step by step.",
    href: "/skills",
    badge: "Explore",
  },
  {
  title: "LangSmith / Langfuse",
  description:
    "Monitor and debug AI agents with observability tools used in production AI systems.",
  href: "/skills/langsmith-langfuse",
  badge: "Monitoring",
},
];

const gradients = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-amber-50 to-orange-50",
  "from-rose-50 to-pink-50",
  "from-violet-50 to-purple-50",
  "from-cyan-50 to-sky-50",
];

export default function SkillsPreview() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Future-Ready Skills
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            High-Demand Tech Skills
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Explore beginner-friendly guides on AI agents, LangChain, LangGraph,
            prompt engineering, and Python concepts. These modern skills are
            useful for AI projects, automation, and future tech careers.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <Link
            key={skill.title}
            href={skill.href}
            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div
              className={`inline-flex rounded-xl bg-gradient-to-br px-3 py-2 text-sm font-semibold text-slate-700 ${
                gradients[index % gradients.length]
              }`}
            >
              {skill.badge}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-blue-700">
              {skill.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {skill.description}
            </p>

            <div className="mt-4 text-sm font-medium text-blue-700">
              Explore →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}