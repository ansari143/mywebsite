export const metadata = {
  title: "AI Engineer Learning Roadmap | Nishaglobal Education",
  description:
    "Phase-wise AI Engineer roadmap with exact Udemy course links from beginner foundations to advanced LLM engineering and final portfolio delivery.",
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/skills/ai-roadmap",
  },
};

const weeklyTimeline = [
  {
    phase: "Phase 1: Programming and AI Foundations",
    week: "Week 1-2",
    title: "Full Stack Generative and Agentic AI with Python",
    link: "https://www.udemy.com/course/full-stack-ai-with-python/",
    skills: ["Python", "APIs", "Git & GitHub", "OpenAI APIs", "AI Fundamentals"],
  },
  {
    phase: "Phase 1: Programming and AI Foundations",
    week: "Week 3-4",
    title: "AI Engineer Course 2025: Complete AI Engineer Bootcamp",
    link: "https://www.udemy.com/course/ai-engineer-course/",
    skills: ["Prompt Engineering", "LLM Fundamentals", "Embeddings", "Vector Databases", "AI Application Development"],
  },
  {
    phase: "Phase 2: RAG Engineering",
    week: "Week 5",
    title: "Gen AI RAG Application Development",
    link: "https://www.udemy.com/course/gen-ai-rag-application-development/",
    skills: ["RAG", "Semantic Search", "Embeddings", "ChromaDB", "Pinecone"],
  },
  {
    phase: "Phase 2: RAG Engineering",
    week: "Week 6",
    title: "Full Stack AI Mastery: Python, React, FastAPI & LangChain",
    link: "https://www.udemy.com/course/full-stack-ai-mastery/",
    skills: ["React", "FastAPI", "LangChain", "Full Stack AI Apps", "AI Deployment"],
  },
  {
    phase: "Phase 3: LangChain and Agentic AI",
    week: "Week 7-8",
    title: "LangChain - Develop LLM powered applications with LangChain",
    link: "https://www.udemy.com/course/langchain/",
    skills: ["Chains", "Memory", "Tools", "Agents", "Retrieval Systems"],
  },
  {
    phase: "Phase 3: LangChain and Agentic AI",
    week: "Week 9",
    title: "Agentic AI Engineering with LangChain & LangGraph",
    link: "https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/",
    skills: ["Agentic AI", "Multi-Agent Systems", "Tool Calling", "Structured Outputs", "Autonomous Agents"],
  },
  {
    phase: "Phase 4: Advanced LLM Engineering",
    week: "Week 10",
    title: "Master LLM Engineering",
    link: "https://www.udemy.com/course/master-llm-engineering/",
    skills: ["Production LLM Systems", "Evaluation", "Monitoring", "Optimization", "Enterprise AI"],
  },
  {
    phase: "Phase 4: Advanced LLM Engineering",
    week: "Week 11-12",
    title: "Complete Agentic AI Bootcamp with LangGraph and LangChain",
    link: "https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/",
    skills: ["LangGraph", "Agent Workflows", "Human-in-the-Loop", "State Management", "Multi-Agent Orchestration"],
  },
  {
    phase: "Phase 5: Final Project",
    week: "Week 13-14",
    title: "Enterprise AI Assistant Portfolio Build",
    link: "",
    skills: [
      "React Frontend",
      "FastAPI Backend",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Database",
      "OpenAI Models",
      "Authentication",
      "Deployment",
      "Document Upload",
      "Chat Interface",
    ],
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
            AI Engineer Roadmap (Beginner to Advanced)
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Follow this phase-wise AI Engineering roadmap with exact Udemy course links.
            It starts with programming and AI fundamentals, moves into RAG and
            agentic systems, and ends with an enterprise-level final portfolio project.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">Phase 1: Foundations</div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800">Phase 2-3: Build & Agents</div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-800">Phase 4-5: Advanced + Project</div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Week 1 to Week 14 Timeline</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Follow each milestone in order. Complete one card before moving to the next.
        </p>

        <div className="relative mt-6 space-y-4">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-300 sm:block" aria-hidden="true" />

          {weeklyTimeline.map((item, index) => (
            <article
              key={`${item.week}-${item.title}`}
              className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:pl-12"
            >
              <div className="absolute left-3 top-6 hidden h-4 w-4 rounded-full border-2 border-indigo-600 bg-white sm:block" aria-hidden="true" />

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                  Step {index + 1}
                </span>
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                  {item.phase}
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  {item.week}
                </span>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="mt-2 block text-base font-semibold text-indigo-700 hover:underline"
                >
                  {item.title}
                </a>
              ) : (
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
              )}

              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={`${item.title}-${skill}`}
                    className="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-xs font-semibold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Learning Advice
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          Focus on one phase at a time and complete the linked course projects.
          Keep weekly notes on what you built, what failed, and what you improved.
          This creates portfolio proof, not just course completion certificates.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-700">
          Use this roadmap for educational guidance only. Final hiring outcomes depend on your project quality, interview performance, and market demand.
        </p>
      </section>
    </div>
  );
}