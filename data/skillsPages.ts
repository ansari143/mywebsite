export type SkillPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  badge: string;
  sections: {
    title: string;
    content: string[];
    diagram?: string[];
    code?: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export const skillsPages: SkillPage[] = [
  {
    slug: "ai-agents",
    title: "AI Agents: Beginner to Advanced",
    description:
      "Learn AI agents from beginner to advanced level with practical architecture patterns, workflows, and project guidance.",
    intro:
      "AI agents are systems where AI can do more than answer one question. They can think in steps, use tools, collect information, and then give a final answer. This page starts with basics and then moves into intermediate and advanced implementation paths.",
    badge: "Trending Skill",
    sections: [
      {
        title: "What Is an AI Agent?",
        content: [
          "An AI agent is a system where AI can understand a task, think about the next step, use a tool if needed, and then complete the task.",
          "A normal chatbot mostly gives one direct answer. An AI agent can work step by step.",
          "For example, if a user asks for weather, an AI agent can call a weather API, read live data, and then answer correctly."
        ],
        diagram: [
          "User Question",
          "      ↓",
          "   AI Model",
          "      ↓",
          " Understand Task",
          "      ↓",
          " Use Tool / API",
          "      ↓",
          " Get Result",
          "      ↓",
          " Final Answer",
        ],
      },
      {
        title: "Where AI Agents Are Used",
        content: [
          "AI agents are used in customer support, research assistants, coding tools, business automation, and task management systems.",
          "They are useful when the task needs multiple steps instead of a single reply."
        ],
      },
      {
        title: "Simple Example Code",
        content: [
          "This example only shows the basic idea of sending a question to a model. In real agent systems, more tool logic is added."
        ],
        code: `from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI()

question = "What is the capital of France?"
response = llm.predict(question)

print(response)`,
      },
      {
        title: "Intermediate Path: Tool-Using Agent Design",
        content: [
          "At intermediate level, focus on designing agents that can decide when to call tools like search, calculator, or APIs.",
          "You should learn prompt routing, basic memory usage, retry handling, and fallback responses when tools fail.",
          "A good intermediate milestone is building one agent that solves a real workflow such as study planning, FAQ support, or research summarization."
        ],
      },
      {
        title: "Advanced Path: Multi-Agent and Reliability",
        content: [
          "Advanced work includes multi-agent orchestration, role-based agents, and evaluation loops to measure quality over time.",
          "You should add guardrails, hallucination checks, and observability traces to debug failures and improve responses.",
          "Production-ready agents prioritize reliability, cost control, latency, and user safety instead of only raw output quality."
        ],
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner: Build a single-step assistant that answers one domain of questions clearly.",
          "Intermediate: Build a tool-using agent that selects APIs based on user intent and handles tool errors.",
          "Advanced: Build a multi-agent workflow with evaluation metrics, logs, and quality score tracking."
        ],
      },
    ],
    faq: [
      {
        question: "What is the difference between a chatbot and an AI agent?",
        answer:
          "A chatbot usually gives one direct answer, while an AI agent can think in steps, use tools, and complete a task."
      },
      {
        question: "Do AI agents always use tools?",
        answer:
          "Not always, but many useful AI agents use tools like APIs, search, calculators, or databases."
      },
      {
        question: "How do I move from beginner to intermediate agent building?",
        answer:
          "Move after you can build a clean single-agent workflow, explain each prompt step, and handle basic errors. Then add tool routing and memory in small increments."
      },
      {
        question: "What defines advanced AI agent work?",
        answer:
          "Advanced work focuses on reliability and scale: multi-agent coordination, guardrails, observability, evaluation metrics, and production debugging."
      }
    ]
  },
  {
    slug: "langchain",
    title: "LangChain: Beginner to Advanced",
    description:
      "Learn LangChain from beginner to advanced level with practical chains, tools, retrieval, and architecture guidance.",
    intro:
      "LangChain is a framework that helps developers build AI applications using prompts, language models, tools, and memory. This page covers beginner basics and then expands into intermediate and advanced usage.",
    badge: "Framework",
    sections: [
      {
        title: "What Is LangChain?",
        content: [
          "LangChain helps connect prompts, AI models, tools, databases, and memory in one workflow.",
          "Instead of writing everything manually, developers can use LangChain components to build AI systems faster.",
          "It is useful when you want to create chatbots, assistants, document tools, or workflow-based AI apps."
        ],
        diagram: [
          "User Question",
          "      ↓",
          "    Prompt",
          "      ↓",
          "   LLM Model",
          "      ↓",
          " Tool / Memory / Database",
          "      ↓",
          "  Final Answer",
        ],
      },
      {
        title: "Why LangChain Is Useful",
        content: [
          "It helps organize prompts and model calls in a cleaner way.",
          "It also makes it easier to add tools, memory, and structured chains to your app."
        ],
      },
      {
        title: "Simple LangChain Example",
        content: [
          "This example shows a small prompt chain that explains a topic in simple language."
        ],
        code: `from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain

prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} in simple language."
)

llm = ChatOpenAI()
chain = LLMChain(llm=llm, prompt=prompt)

result = chain.run("Artificial Intelligence")
print(result)`,
      },
      {
        title: "Intermediate Path: Chains, Tools, and Retrieval",
        content: [
          "At intermediate level, combine prompt templates, retrievers, and tools to solve multi-step user requests.",
          "Practice creating reusable chains, document Q&A flows, and structured output formatting for downstream applications.",
          "You should also learn how to test chain outputs against known examples before deployment."
        ],
      },
      {
        title: "Advanced Path: Architecture and Performance",
        content: [
          "Advanced LangChain usage includes modular architecture, token/cost optimization, and robust fallback strategies.",
          "You should implement evaluation pipelines, latency checks, and failure analytics to improve reliability.",
          "Production systems require strong versioning of prompts and components so updates do not break existing flows."
        ],
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner: One simple prompt chain with clean input and output formatting.",
          "Intermediate: Retrieval-based Q&A app with tool integration and response grounding.",
          "Advanced: Multi-module LangChain system with evaluation dashboards and cost controls."
        ],
      },
    ],
    faq: [
      {
        question: "Is LangChain used only for chatbots?",
        answer:
          "No. LangChain can also be used for agents, document apps, search workflows, and many other AI applications."
      },
      {
        question: "Do I need Python before learning LangChain?",
        answer:
          "Yes, basic Python is very helpful before starting LangChain."
      },
      {
        question: "When should I move to advanced LangChain topics?",
        answer:
          "Move when you can independently build a retrieval or tool-based app, debug errors, and explain how each component affects final output quality."
      }
    ]
  },
  {
    slug: "langgraph",
    title: "LangGraph: Beginner to Advanced",
    description:
      "Understand LangGraph from beginner to advanced level with workflow design, state handling, and reliability patterns.",
    intro:
      "LangGraph is used to build advanced AI workflows. It is especially useful when your AI system needs multiple steps, branching, retries, or state-based decision making.",
    badge: "Workflow",
    sections: [
      {
        title: "What Is LangGraph?",
        content: [
          "LangGraph helps build workflows where each step is connected like a graph.",
          "A node is one step. An edge is the connection from one step to another.",
          "It is useful when one simple chain is not enough."
        ],
        diagram: [
          "         Start",
          "           ↓",
          "   Understand Question",
          "           ↓",
          "     ┌─────┴─────┐",
          "     ↓           ↓",
          " Search Tool   Database",
          "     ↓           ↓",
          "     └─────┬─────┘",
          "           ↓",
          "       Reasoning",
          "           ↓",
          "      Final Answer",
        ],
      },
      {
        title: "Why LangGraph Is Important",
        content: [
          "Some AI tasks need retries, loops, branching, or multi-step logic.",
          "LangGraph makes these flows easier to manage than a simple chain."
        ],
      },
      {
        title: "Simple LangGraph Example",
        content: [
          "This example shows a very small workflow with two connected steps."
        ],
        code: `from langgraph.graph import StateGraph

graph = StateGraph()

def step1(state):
    return "Step 1 processed"

def step2(state):
    return "Step 2 processed"

graph.add_node("step1", step1)
graph.add_node("step2", step2)

graph.set_entry_point("step1")
graph.add_edge("step1", "step2")

workflow = graph.compile()`,
      },
      {
        title: "Intermediate Path: State and Branching",
        content: [
          "At intermediate level, focus on conditional branches, shared state objects, and retry paths for unstable tool outputs.",
          "You should design graph transitions that remain readable and predictable when adding new steps.",
          "A strong intermediate milestone is building one workflow with at least two branch conditions and one recovery path."
        ],
      },
      {
        title: "Advanced Path: Orchestration at Scale",
        content: [
          "Advanced LangGraph usage includes multi-agent orchestration, fallback subgraphs, and runtime observability integration.",
          "You should monitor failure hotspots, state drift, and latency bottlenecks to maintain quality at higher load.",
          "Production graph architecture requires clear guardrails for invalid states and safe handling of external tool failures."
        ],
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner: Two-step graph that transforms user input into one final response.",
          "Intermediate: Branching workflow with conditional routing and retry handling.",
          "Advanced: Multi-agent graph with observability traces and evaluation checkpoints."
        ],
      },
    ],
    faq: [
      {
        question: "What is a node in LangGraph?",
        answer:
          "A node is one step or function inside the workflow."
      },
      {
        question: "When should I learn LangGraph?",
        answer:
          "After you understand Python, prompts, and basic LangChain concepts."
      },
      {
        question: "Why do advanced teams prefer graph workflows?",
        answer:
          "Graph workflows are easier to scale for complex logic because branching, retries, and state transitions are explicit and easier to debug."
      }
    ]
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering: Beginner to Advanced",
    description:
      "Learn prompt engineering from beginner to advanced level with practical patterns, evaluation methods, and failure reduction strategies.",
    intro:
      "Prompt engineering means writing better instructions for AI models. Clear prompts usually give better results. This is one of the most important beginner skills in AI.",
    badge: "Essential",
    sections: [
      {
        title: "What Is Prompt Engineering?",
        content: [
          "Prompt engineering is the skill of writing input instructions in a clear and useful way.",
          "The better the prompt, the better the AI output is likely to be.",
          "A weak prompt often gives a vague answer. A strong prompt gives a focused answer."
        ],
      },
      {
        title: "Simple Prompt Structure",
        content: [
          "A strong prompt usually includes role, instruction, context, and expected output format.",
          "For example, instead of saying 'Tell me about Python', you can say 'Explain Python in simple language for beginners and give 3 examples.'"
        ],
        diagram: [
          "Role",
          "  +",
          "Instruction",
          "  +",
          "Context",
          "  +",
          "Output Format",
        ],
      },
      {
        title: "Python Example",
        content: [
          "This example shows a better structured prompt."
        ],
        code: `prompt = """
You are a teacher.

Explain Artificial Intelligence in simple language.
Give 3 real world examples.
Use short paragraphs.
"""

response = llm.predict(prompt)

print(response)`,
      },
      {
        title: "Intermediate Path: Prompt Patterns and Testing",
        content: [
          "At intermediate level, practice role prompts, few-shot examples, output schemas, and constraint-based instructions.",
          "You should compare prompt versions against the same test inputs and track which version gives more reliable outputs.",
          "A practical intermediate milestone is creating a prompt library for one use case such as support, learning, or content workflows."
        ],
      },
      {
        title: "Advanced Path: Evaluation and Robustness",
        content: [
          "Advanced prompt engineering focuses on robustness: handling ambiguity, reducing hallucinations, and controlling tone/format consistency.",
          "You should run prompt evaluations with score criteria such as factuality, completeness, safety, and latency.",
          "Production teams treat prompts like versioned assets and test them before rollout to avoid regressions."
        ],
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner: Build a small prompt that explains one topic clearly in a fixed format.",
          "Intermediate: Create prompt templates with examples and schema-based outputs.",
          "Advanced: Build a prompt evaluation suite with pass/fail criteria and change logs."
        ],
      },
    ],
    faq: [
      {
        question: "Why is prompt engineering important?",
        answer:
          "Because a better prompt usually gives a better and more useful AI response."
      },
      {
        question: "Do beginners need prompt engineering?",
        answer:
          "Yes. It is one of the first important skills in practical AI work."
      },
      {
        question: "How do I know if a prompt is production-ready?",
        answer:
          "A production-ready prompt gives consistent output quality across diverse test cases, handles edge cases, and has measurable evaluation criteria."
      }
    ]
  },
  {
    slug: "python-concepts",
    title: "Python for AI: Beginner to Advanced",
    description:
      "Learn Python for AI from beginner to advanced level with practical coding patterns, debugging habits, and project milestones.",
    intro:
      "Python is one of the most important programming languages for AI development. It is simple to read, easy to start, and widely used in automation, APIs, data work, and AI systems.",
    badge: "Foundation",
    sections: [
      {
        title: "Why Python Matters",
        content: [
          "Python is beginner-friendly and has simple syntax.",
          "It is widely used in AI, machine learning, automation, scripting, APIs, and backend development.",
          "If you want to build AI tools, Python is one of the best starting points."
        ],
        diagram: [
          "Data / Input",
          "    ↓",
          " Python Code",
          "    ↓",
          " AI Logic / Model",
          "    ↓",
          " Prediction / Output",
        ],
      },
      {
        title: "Simple Example 1",
        content: [
          "This example prints a message."
        ],
        code: `name = "Nisha"
print("Hello", name)`,
      },
      {
        title: "Simple Example 2",
        content: [
          "This example shows a small function."
        ],
        code: `def add(a, b):
    return a + b

print(add(5, 3))`,
      },
      {
        title: "Intermediate Path: Data Handling and APIs",
        content: [
          "At intermediate level, focus on file handling, JSON parsing, APIs, and reusable function design.",
          "You should write modular scripts and validate inputs/outputs to reduce bugs in AI workflows.",
          "A strong intermediate milestone is building one script that fetches data, processes it, and stores clean outputs."
        ],
      },
      {
        title: "Advanced Path: Architecture and Performance",
        content: [
          "Advanced Python for AI includes package structure, asynchronous patterns, testing, profiling, and optimization.",
          "You should write maintainable code with clear logging and error handling for production environments.",
          "Production-level Python work values readability and reliability more than clever one-line solutions."
        ],
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner: Build simple scripts with conditions, loops, and functions.",
          "Intermediate: Build API-based data pipeline script with validation and clean output formatting.",
          "Advanced: Build package-style Python project with tests, logs, and performance improvements."
        ],
      },
    ],
    faq: [
      {
        question: "Is Python hard for beginners?",
        answer:
          "No. Python is considered one of the easiest languages for beginners."
      },
      {
        question: "Should I learn Python before AI frameworks?",
        answer:
          "Yes. Basic Python should come first because most AI tools use it."
      },
      {
        question: "What separates intermediate and advanced Python?",
        answer:
          "Intermediate Python focuses on practical scripting and APIs, while advanced Python focuses on architecture, testing, optimization, and production reliability."
      }
    ]
  },
  {
  slug: "langsmith-langfuse",
  title: "LangSmith and Langfuse: Beginner to Advanced Monitoring",
  description:
    "Learn how to debug, monitor, and improve AI agents using LangSmith and Langfuse observability tools.",
  intro:
    "When building AI agents or LLM applications, it is important to understand how the system behaves. LangSmith and Langfuse are tools used to monitor prompts, trace workflows, debug errors, and evaluate AI responses. They help developers improve reliability and performance of AI applications.",
  badge: "Observability",
  sections: [
    {
      title: "Why Monitoring AI Systems Is Important",
      content: [
        "AI systems often involve multiple steps such as prompt creation, tool calls, database queries, and reasoning chains.",
        "Without monitoring tools, it becomes difficult to understand why the AI produced a certain response.",
        "Observability platforms like LangSmith and Langfuse allow developers to track each step of an AI workflow."
      ],
      diagram: [
        "User Question",
        "      ↓",
        "    Prompt",
        "      ↓",
        "   LLM Model",
        "      ↓",
        " Tool / API Call",
        "      ↓",
        " LangSmith / Langfuse Trace",
        "      ↓",
        " Debug + Improve Prompt",
        "      ↓",
        " Better Final Answer"
      ]
    },

    {
      title: "What Is LangSmith?",
      content: [
        "LangSmith is a platform built by the LangChain team to help developers debug and evaluate LLM applications.",
        "It records every step of the chain or agent workflow, allowing developers to inspect prompts, outputs, and reasoning.",
        "This helps identify prompt issues, tool failures, and performance problems."
      ]
    },

    {
      title: "What Is Langfuse?",
      content: [
        "Langfuse is an open-source observability tool for LLM applications.",
        "It helps track prompts, responses, token usage, latency, and workflow traces.",
        "Developers can monitor production AI systems and understand how users interact with their models."
      ]
    },

    {
      title: "Simple Example Code",
      content: [
        "This simplified example shows how LangChain applications can send traces to observability platforms."
      ],
      code: `from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI()

question = "Explain AI agents in simple language"

response = llm.predict(question)

print(response)`
    },
    {
      title: "Intermediate Path: Practical Trace Analysis",
      content: [
        "At intermediate level, focus on reading traces, identifying failure points, and improving prompts based on evidence.",
        "Track token usage, latency spikes, and tool error frequency to understand where quality drops.",
        "A useful intermediate milestone is creating a weekly review process for trace-based improvements."
      ]
    },
    {
      title: "Advanced Path: Evaluation and Governance",
      content: [
        "Advanced observability includes automated evaluations, alert thresholds, and quality dashboards for production monitoring.",
        "You should define success metrics such as response accuracy, completion rate, and cost per task.",
        "Strong teams combine observability with release governance so prompt or workflow changes are validated before rollout."
      ]
    },
    {
      title: "Project Milestones by Level",
      content: [
        "Beginner: Capture basic traces and review prompt-response pairs.",
        "Intermediate: Build dashboard views for latency, token usage, and common failure types.",
        "Advanced: Run automated evaluation pipeline with quality alerts and rollback triggers."
      ]
    }
  ],

  faq: [
    {
      question: "Do beginners need LangSmith or Langfuse?",
      answer:
        "Beginners do not need them immediately. They become important when building larger AI applications and agents."
    },
    {
      question: "What is observability in AI systems?",
      answer:
        "Observability means monitoring and understanding how an AI system behaves internally, including prompts, outputs, and workflow steps."
    },
    {
      question: "When should a team adopt advanced observability?",
      answer:
        "Adopt advanced observability when workflows affect real users, costs increase, or multiple team members ship prompt and logic updates regularly."
    }
  ]
},
];