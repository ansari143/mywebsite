import Link from "next/link";

export const metadata = {
  title: "High-Demand Skills | Nisha Global Education",
  description:
    "Explore high-demand future skills including AI agents, LangChain, LangGraph, LangSmith, Langfuse, prompt engineering, and Python concepts.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/skills",
  },
};

const skills = [
  {
    title: "AI Agents",
    description:
      "Learn the foundations of AI agent development, including workflows, reasoning patterns, tool usage, and real-world automation concepts.",
    badge: "Trending Skill",
  },
  {
    title: "LangChain",
    description:
      "Understand LangChain basics for building LLM-powered applications, chaining prompts, connecting tools, and creating smart AI workflows.",
    badge: "LLM Framework",
  },
  {
    title: "LangGraph",
    description:
      "Explore graph-based AI workflows using LangGraph for multi-step reasoning, retries, branching logic, and advanced agent orchestration.",
    badge: "Advanced Workflow",
  },
  {
    title: "LangSmith / Langfuse",
    description:
      "Discover observability, tracing, debugging, evaluation, and monitoring concepts for AI applications and agent systems.",
    badge: "Observability",
  },
  {
    title: "Prompt Engineering",
    description:
      "Learn how better prompts improve AI output quality through clear instructions, role prompting, structured output, and reasoning guidance.",
    badge: "Core Skill",
  },
  {
    title: "Python Concepts",
    description:
      "Build strong Python fundamentals for AI, automation, backend logic, APIs, data handling, and practical development projects.",
    badge: "Foundation",
  },
];

const gradientClasses = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-amber-50 to-orange-50",
  "from-rose-50 to-pink-50",
  "from-violet-50 to-purple-50",
  "from-cyan-50 to-sky-50",
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

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "High-Demand Skills",
    url: "https://nishaglobaleducation.com/skills",
    description:
      "High-demand skills resources for students and learners including AI agents, LangChain, LangGraph, LangSmith, Langfuse, prompt engineering, and Python concepts.",
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Future-Ready Learning
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            High-Demand Skills
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore modern high-demand skills that are shaping future careers in
            technology and AI. This section will help students and learners
            understand important concepts in AI agent development, prompt
            engineering, Python, and advanced AI frameworks.
          </p>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                gradientClasses[index % gradientClasses.length]
              }`}
            />

            <div
              className={`inline-flex rounded-xl bg-gradient-to-br px-3 py-2 text-sm font-semibold text-gray-700 ${gradientClasses[index % gradientClasses.length]}`}
            >
              {skill.badge}
            </div>

            <h2 className="mt-4 text-lg font-semibold leading-7 text-gray-900">
              {skill.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {skill.description}
            </p>

            <div className="mt-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Coming Soon
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-900">
            What will be added here
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Detailed guides, beginner-friendly explanations, roadmap content,
            learning suggestions, and skill-based career direction will be
            added soon for students and learners who want to build modern tech
            and AI capabilities.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              AI Agents
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              LangChain
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              LangGraph
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              LangSmith / Langfuse
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              Prompt Engineering
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              Python Concepts
            </span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-900">
            Explore Career Guidance Too
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            While this section focuses on high-demand skills, you can also
            explore career guidance resources and student career tests to make
            smarter academic and future planning decisions.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/resources"
              className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200 hover:bg-blue-100"
            >
              Explore Resources
            </Link>
            <Link
              href="/tests"
              className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Take Career Test
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}