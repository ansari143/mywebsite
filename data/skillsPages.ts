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
    title: "AI Agents for Beginners",
    description:
      "Learn AI agents in simple language with examples, diagrams, and beginner-friendly code.",
    intro:
      "AI agents are systems where AI can do more than answer one question. They can think in steps, use tools, collect information, and then give a final answer. This page explains the concept in very simple language.",
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
      }
    ]
  },
  {
    slug: "langchain",
    title: "LangChain for Beginners",
    description:
      "Learn LangChain in simple language with diagrams, examples, and easy starter code.",
    intro:
      "LangChain is a framework that helps developers build AI applications using prompts, language models, tools, and memory. It makes AI app development easier and more organized.",
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
      }
    ]
  },
  {
    slug: "langgraph",
    title: "LangGraph for Beginners",
    description:
      "Understand LangGraph in simple language with diagrams, workflow ideas, and beginner code.",
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
      }
    ]
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering for Beginners",
    description:
      "Learn prompt engineering in simple language with examples, prompt structure, and Python snippets.",
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
      }
    ]
  },
  {
    slug: "python-concepts",
    title: "Python Concepts for AI Beginners",
    description:
      "Learn simple Python concepts for AI development with beginner-friendly examples and code.",
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
      }
    ]
  },
  {
  slug: "langsmith-langfuse",
  title: "LangSmith and Langfuse for AI Monitoring",
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
    }
  ]
},
];