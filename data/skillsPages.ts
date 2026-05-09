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
  // ─────────────────────────────────────────────────────────────────
  // AI AGENTS
  // ─────────────────────────────────────────────────────────────────
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
        title: "Intermediate: Tool-Calling Agents",
        content: [
          "A tool-calling agent decides, at runtime, which tool to use based on the user request. You define tools as Python functions and attach them to the agent.",
          "The agent reads the user question, chooses a tool (like search, calculator, or an API), calls it, reads the result, and forms a final answer.",
          "This is the most common real-world agent pattern. Below is a working example using LangChain's tool decorator."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.agents import tool, initialize_agent, AgentType

# Define a custom tool the agent can call
@tool
def get_word_count(text: str) -> str:
    """Returns the word count of the given text."""
    count = len(text.split())
    return f"The text has {count} words."

@tool
def reverse_text(text: str) -> str:
    """Reverses the given text."""
    return text[::-1]

# Create the language model
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Initialize the agent with tools
agent = initialize_agent(
    tools=[get_word_count, reverse_text],
    llm=llm,
    agent=AgentType.OPENAI_FUNCTIONS,
    verbose=True
)

# Run the agent
result = agent.run("How many words are in 'The quick brown fox'?")
print(result)`,
      },
      {
        title: "Intermediate: Adding Memory to an Agent",
        content: [
          "Without memory, every agent call is stateless — the agent forgets the previous question. Memory lets the agent remember the conversation.",
          "There are two common memory types: ConversationBufferMemory (keeps all messages) and ConversationSummaryMemory (keeps a summary to save tokens).",
          "Here is how to attach memory to an agent conversation chain."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

# Create the memory object
memory = ConversationBufferMemory()

# Create LLM
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Create conversation chain with memory
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

# First turn
response1 = conversation.predict(input="My name is Arjun.")
print("Turn 1:", response1)

# Second turn — agent should remember the name
response2 = conversation.predict(input="What is my name?")
print("Turn 2:", response2)`,
      },
      {
        title: "Intermediate: Handling Tool Failures Gracefully",
        content: [
          "Tools can fail. An API might be down, a search might return no results, or a database query might time out. A production agent must handle these failures without crashing.",
          "The best practice is to wrap each tool in try/except and return a clear error string so the agent can decide what to do next.",
          "This pattern prevents the whole agent from stopping just because one tool had an error."
        ],
        code: `from langchain.agents import tool

@tool
def fetch_stock_price(ticker: str) -> str:
    """Fetches the current stock price for a given ticker symbol."""
    try:
        # Simulating an API call that might fail
        import random
        if random.random() < 0.3:
            raise ConnectionError("API timeout")

        price = round(random.uniform(100, 500), 2)
        return f"The price of {ticker} is \${price}"

    except ConnectionError as e:
        return f"Could not fetch price for {ticker}: {str(e)}. Please try again."
    except Exception as e:
        return f"Unexpected error: {str(e)}"

# Test the tool
print(fetch_stock_price.run("AAPL"))`,
      },
      {
        title: "Intermediate: Structuring Agent System Prompts",
        content: [
          "The system prompt is what tells the agent who it is and how it should behave. A weak system prompt produces inconsistent answers.",
          "A good system prompt defines: the agent role, its goal, tone, constraints (what it should not do), and the output format expected.",
          "Below is a template system prompt pattern used in production agents."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage

SYSTEM_PROMPT = """
You are an AI study assistant named StudyBot.

Your job is:
- Answer student questions clearly and accurately
- Give examples whenever possible
- Keep answers under 150 words

Rules:
- Do not provide answers to exam questions directly
- Always encourage the student to think first
- If unsure, say "I'm not certain, please verify this"

Output format:
- Use bullet points for lists
- Use plain language (no jargon unless explained)
"""

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.2)

messages = [
    SystemMessage(content=SYSTEM_PROMPT),
    HumanMessage(content="What is machine learning?")
]

response = llm(messages)
print(response.content)`,
      },
      {
        title: "Advanced: Building a Multi-Agent System",
        content: [
          "In a multi-agent system, different agents handle different responsibilities. One agent might research, another might write, and a third might review quality.",
          "Each agent has its own tools, memory, and instructions. A coordinator (also called an orchestrator) decides which agent to call.",
          "This pattern is used in production systems where tasks are too complex for a single agent to handle reliably."
        ],
        diagram: [
          "User Request",
          "      ↓",
          " Orchestrator Agent",
          "   /      |      \\",
          "  ↓       ↓       ↓",
          "Research  Writer  Reviewer",
          "Agent    Agent    Agent",
          "  \\       |       /",
          "   ↓      ↓      ↓",
          "   Orchestrator merges",
          "      ↓",
          "  Final Response",
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.agents import tool, initialize_agent, AgentType

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# --- Research Agent ---
@tool
def research_topic(query: str) -> str:
    """Researches a topic and returns key facts."""
    # In real use, this would call a search API
    return f"Key facts about '{query}': It is widely used, growing fast, and important for modern AI."

research_agent = initialize_agent(
    tools=[research_topic],
    llm=llm,
    agent=AgentType.OPENAI_FUNCTIONS,
    verbose=False
)

# --- Writer Agent ---
@tool
def format_summary(facts: str) -> str:
    """Formats raw facts into a clean readable summary."""
    return f"Summary: {facts.strip()} This is a great area to explore further."

writer_agent = initialize_agent(
    tools=[format_summary],
    llm=llm,
    agent=AgentType.OPENAI_FUNCTIONS,
    verbose=False
)

# --- Orchestrator ---
def orchestrate(user_query: str):
    print("Step 1: Researching...")
    facts = research_agent.run(user_query)

    print("Step 2: Writing summary...")
    final = writer_agent.run(facts)

    print("\\nFinal Output:")
    print(final)

orchestrate("AI agents in education")`,
      },
      {
        title: "Advanced: Agent Evaluation and Quality Scoring",
        content: [
          "Evaluation means checking if your agent is actually giving correct, relevant, and safe answers. Without evaluation, you are shipping code you cannot measure.",
          "A basic evaluation pipeline: define test questions, run the agent, compare output against expected criteria, and track scores over time.",
          "You can use LangSmith's evaluation features or write your own grading functions."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Define test cases
test_cases = [
    {
        "question": "What is supervised learning?",
        "must_contain": ["label", "training", "predict"],
    },
    {
        "question": "Name two Python AI libraries.",
        "must_contain": ["tensorflow", "pytorch", "scikit", "keras"],
    },
]

def evaluate_agent(test_cases):
    results = []
    for case in test_cases:
        response = llm([HumanMessage(content=case["question"])]).content.lower()

        # Check if response contains expected keywords
        hits = [kw for kw in case["must_contain"] if kw in response]
        score = len(hits) / len(case["must_contain"])

        results.append({
            "question": case["question"],
            "score": round(score * 100),
            "found_keywords": hits,
            "response_preview": response[:100]
        })

    return results

results = evaluate_agent(test_cases)
for r in results:
    print(f"Q: {r['question']}")
    print(f"   Score: {r['score']}%  |  Keywords found: {r['found_keywords']}")
    print()`,
      },
      {
        title: "Advanced: Adding Guardrails and Safety Checks",
        content: [
          "Guardrails prevent agents from responding to harmful, off-topic, or unsafe inputs. This is critical before deploying any agent to real users.",
          "The simplest guardrail is a pre-check function that scans input for prohibited content before sending it to the model.",
          "More advanced guardrails use a separate small model or rule set to classify intent, then block or redirect dangerous requests."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# List of blocked topics for this education assistant
BLOCKED_KEYWORDS = ["hack", "exploit", "weapon", "illegal", "cheat exam"]

SAFE_SYSTEM_PROMPT = """
You are a student study assistant. Only answer questions about education,
study skills, science, math, history, and general knowledge.
If asked about anything else, politely decline and redirect.
"""

def input_guardrail(user_input: str) -> bool:
    """Returns True if input is safe, False if it should be blocked."""
    lower = user_input.lower()
    for keyword in BLOCKED_KEYWORDS:
        if keyword in lower:
            return False
    return True

def safe_agent_response(user_input: str) -> str:
    # Step 1: Pre-filter input
    if not input_guardrail(user_input):
        return "I'm only able to help with educational topics. Please ask something related to studying."

    # Step 2: Run agent with safe system prompt
    messages = [
        SystemMessage(content=SAFE_SYSTEM_PROMPT),
        HumanMessage(content=user_input)
    ]
    response = llm(messages)
    return response.content

# Test safe and unsafe inputs
print(safe_agent_response("Explain photosynthesis"))
print("---")
print(safe_agent_response("How do I hack a website?"))`,
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner Project: Build a single-tool agent that answers questions about one topic (e.g., a study assistant that looks up definitions).",
          "Intermediate Project: Build a multi-tool agent that can search, calculate, and summarize — then wraps responses in consistent format with memory for multi-turn chat.",
          "Advanced Project: Build a multi-agent pipeline where a researcher, writer, and reviewer each have defined roles, all connected by an orchestrator that tracks evaluation scores per session."
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
        title: "Intermediate: LCEL — LangChain Expression Language",
        content: [
          "LCEL is the modern way to build chains in LangChain. It uses the pipe operator | to chain components together cleanly.",
          "The basic pattern is: prompt | model | output_parser. Each step transforms data and passes it to the next.",
          "LCEL supports streaming, batching, and async calls — all critical for production performance."
        ],
        code: `from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser

# Step 1: Define a prompt template
prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in 3 bullet points for a beginner."
)

# Step 2: Create the LLM
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Step 3: Create an output parser
parser = StrOutputParser()

# Step 4: Build the chain using LCEL pipe syntax
chain = prompt | llm | parser

# Step 5: Run the chain
result = chain.invoke({"topic": "neural networks"})
print(result)

# You can also stream results token by token:
# for chunk in chain.stream({"topic": "neural networks"}):
#     print(chunk, end="", flush=True)`,
      },
      {
        title: "Intermediate: Retrieval-Augmented Generation (RAG)",
        content: [
          "RAG means giving the model access to your own documents so it can answer questions based on real data, not just training knowledge.",
          "The flow: load your documents → split them into chunks → embed chunks into a vector store → retrieve relevant chunks per question → send chunks + question to the model.",
          "This is one of the most widely used LangChain patterns in real applications."
        ],
        diagram: [
          "Your Documents (PDF, text)",
          "         ↓",
          "   Text Splitter",
          "         ↓",
          "   Embeddings Model",
          "         ↓",
          "   Vector Store (FAISS)",
          "         ↓ (on user query)",
          "   Similarity Search",
          "         ↓",
          "   Relevant Chunks",
          "         ↓",
          "  Prompt + LLM Answer",
        ],
        code: `from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

# Step 1: Load your document
loader = TextLoader("my_study_notes.txt")
documents = loader.load()

# Step 2: Split into small chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(documents)

# Step 3: Create embeddings and store in FAISS vector database
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(chunks, embeddings)

# Step 4: Create a retriever from the vector store
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

# Step 5: Build the RAG chain
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

# Step 6: Ask a question
result = qa_chain({"query": "What are the main topics covered in chapter 2?"})
print("Answer:", result["result"])
print("Sources:", [doc.metadata for doc in result["source_documents"]])`,
      },
      {
        title: "Intermediate: Memory Types in LangChain",
        content: [
          "Memory allows your chain to remember past turns in a conversation. LangChain offers several memory types depending on your use case.",
          "ConversationBufferMemory keeps every message. ConversationSummaryMemory keeps a summary (saves tokens for long chats). ConversationWindowMemory keeps the last N messages.",
          "Use buffer memory for short sessions. Use summary memory for long sessions where token costs matter."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import (
    ConversationBufferMemory,
    ConversationSummaryMemory,
    ConversationBufferWindowMemory
)

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Option 1: Buffer Memory — stores all messages
buffer_memory = ConversationBufferMemory()

# Option 2: Window Memory — stores only last 3 exchanges
window_memory = ConversationBufferWindowMemory(k=3)

# Option 3: Summary Memory — keeps a running summary (good for long chats)
summary_memory = ConversationSummaryMemory(llm=llm)

# Build a conversation chain with window memory
chain = ConversationChain(llm=llm, memory=window_memory, verbose=True)

# Simulate a multi-turn conversation
chain.predict(input="I am studying for a biology exam.")
chain.predict(input="Tell me about cell division.")
chain.predict(input="What did I say I was studying?")  # Should remember

# Print current memory state
print(chain.memory.load_memory_variables({}))`,
      },
      {
        title: "Intermediate: Custom Tools and Structured Outputs",
        content: [
          "Custom tools allow your chain to call any Python function — including APIs, databases, or calculations. Structured output parsing ensures the model returns clean JSON or typed data.",
          "Using Pydantic models with structured output parsers makes downstream processing reliable and avoids string parsing bugs.",
          "This pattern is essential for apps where the chain output feeds into other systems."
        ],
        code: `from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from typing import List

# Define the expected output shape using Pydantic
class StudyPlan(BaseModel):
    subject: str = Field(description="The subject being studied")
    topics: List[str] = Field(description="List of key topics to cover")
    daily_hours: int = Field(description="Recommended hours per day")
    weeks_needed: int = Field(description="Estimated weeks to complete")

# Create a parser for this model
parser = PydanticOutputParser(pydantic_object=StudyPlan)

# Build a prompt that includes format instructions
prompt = ChatPromptTemplate.from_template(
    """Create a structured study plan for: {subject}
    
    {format_instructions}"""
)

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Build the chain
chain = prompt | llm | parser

# Run with format instructions
result = chain.invoke({
    "subject": "Python programming for beginners",
    "format_instructions": parser.get_format_instructions()
})

# Access structured fields
print(f"Subject: {result.subject}")
print(f"Topics: {result.topics}")
print(f"Daily hours: {result.daily_hours}")
print(f"Weeks needed: {result.weeks_needed}")`,
      },
      {
        title: "Advanced: Production Chain Architecture",
        content: [
          "A production LangChain system separates concerns: prompt definitions, chain logic, tool definitions, memory management, and API layer are all in separate modules.",
          "This makes testing, updating, and debugging much easier. You can update a prompt without touching the chain logic.",
          "Below is the recommended folder structure for a production LangChain project."
        ],
        diagram: [
          "project/",
          "  ├── chains/",
          "  │     ├── qa_chain.py       ← RAG chain definition",
          "  │     ├── summary_chain.py  ← summarization chain",
          "  │     └── base.py           ← shared LLM config",
          "  ├── prompts/",
          "  │     ├── qa_prompts.py     ← prompt templates",
          "  │     └── system_prompts.py ← system messages",
          "  ├── tools/",
          "  │     ├── search_tool.py    ← search API wrapper",
          "  │     └── calc_tool.py      ← calculator tool",
          "  ├── memory/",
          "  │     └── session_memory.py ← memory factory",
          "  ├── evaluation/",
          "  │     └── run_eval.py       ← evaluation runner",
          "  └── api/",
          "        └── main.py           ← FastAPI endpoint",
        ],
        code: `# chains/base.py — shared LLM config for all chains
from langchain.chat_models import ChatOpenAI
from functools import lru_cache

@lru_cache(maxsize=1)
def get_llm(model: str = "gpt-3.5-turbo", temperature: float = 0.0):
    """Single cached LLM instance reused across chains."""
    return ChatOpenAI(model=model, temperature=temperature)

# ---

# chains/qa_chain.py — RAG Q&A chain
from langchain.chains import RetrievalQA
from .base import get_llm

def build_qa_chain(retriever):
    return RetrievalQA.from_chain_type(
        llm=get_llm(),
        retriever=retriever,
        return_source_documents=True
    )

# ---

# api/main.py — FastAPI wrapper
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    question: str
    session_id: str

@app.post("/ask")
async def ask(request: QueryRequest):
    try:
        chain = build_qa_chain(retriever=get_retriever())
        result = chain({"query": request.question})
        return {"answer": result["result"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`,
      },
      {
        title: "Advanced: Evaluating LangChain Outputs",
        content: [
          "Evaluation means running your chain against test cases and scoring how well it performs. LangChain provides a built-in evaluator module for this.",
          "You can evaluate: factual correctness, relevance to the question, conciseness, and safety. Each dimension gets a score.",
          "Run evaluations before every deployment to catch regressions when prompts or models are updated."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.evaluation import load_evaluator
from langchain.evaluation.schema import EvaluatorType

llm = ChatOpenAI(model="gpt-4", temperature=0)

# Load a criteria-based evaluator
evaluator = load_evaluator(
    EvaluatorType.CRITERIA,
    llm=llm,
    criteria="relevance"
)

# Define test cases
test_cases = [
    {
        "input": "What is photosynthesis?",
        "output": "Photosynthesis is the process by which plants use sunlight, water, and CO2 to produce glucose and oxygen.",
        "reference": "Photosynthesis converts light energy into chemical energy in plants."
    },
    {
        "input": "What is Newton's second law?",
        "output": "Force equals mass times acceleration (F = ma).",
        "reference": "Newton's second law states F = ma."
    }
]

# Run evaluation on each test case
for case in test_cases:
    result = evaluator.evaluate_strings(
        prediction=case["output"],
        input=case["input"],
        reference=case["reference"]
    )
    print(f"Q: {case['input']}")
    print(f"   Score: {result['score']} | Reason: {result['reasoning'][:80]}")
    print()`,
      },
      {
        title: "Advanced: Async Chains for Performance",
        content: [
          "Synchronous chains process one request at a time. For high-traffic applications, async chains let you handle many requests simultaneously.",
          "LangChain supports async with arun(), ainvoke(), and astream() methods. Combine with Python asyncio and FastAPI for full async performance.",
          "Async is critical when your chain calls multiple tools or APIs — you can run them in parallel instead of waiting for each one."
        ],
        code: `import asyncio
from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
parser = StrOutputParser()

explain_prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in one paragraph for a high school student."
)

chain = explain_prompt | llm | parser

# Async function to process one topic
async def explain_topic(topic: str) -> str:
    result = await chain.ainvoke({"topic": topic})
    return f"{topic}: {result[:80]}..."

# Process multiple topics in parallel
async def explain_all(topics: list) -> list:
    tasks = [explain_topic(topic) for topic in topics]
    results = await asyncio.gather(*tasks)
    return results

# Run the async pipeline
topics = ["gravity", "photosynthesis", "machine learning"]
results = asyncio.run(explain_all(topics))

for r in results:
    print(r)
    print()`,
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner Project: One LCEL prompt chain that takes a topic and returns a simple structured explanation. Deploy it as a Python script.",
          "Intermediate Project: RAG-based document Q&A app. Load your own text files, embed them, and answer questions based only on your documents. Add a conversation window memory.",
          "Advanced Project: Full production LangChain system with modular folder structure, async FastAPI endpoint, Pydantic-typed outputs, and automated evaluation that runs before each deployment."
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
        title: "Intermediate: State Management in LangGraph",
        content: [
          "Every node in a LangGraph workflow reads from and writes to a shared state object. The state is the single source of truth for the entire workflow.",
          "You define state using TypedDict. Each node receives the current state and returns an updated version of it.",
          "Good state design is the foundation of any reliable LangGraph workflow."
        ],
        code: `from typing import TypedDict, Optional
from langgraph.graph import StateGraph, END

# Define the shared state structure
class ResearchState(TypedDict):
    question: str
    research_result: Optional[str]
    final_answer: Optional[str]
    error: Optional[str]

# Node 1: Simulates research
def do_research(state: ResearchState) -> ResearchState:
    question = state["question"]
    # Simulate research (in real app, call a search API here)
    result = f"Research findings on '{question}': This topic has significant recent developments."
    return {**state, "research_result": result}

# Node 2: Write a final answer from research
def write_answer(state: ResearchState) -> ResearchState:
    research = state["research_result"]
    answer = f"Based on research: {research}. Therefore, this is a well-documented area."
    return {**state, "final_answer": answer}

# Build the graph
graph = StateGraph(ResearchState)
graph.add_node("research", do_research)
graph.add_node("answer", write_answer)

graph.set_entry_point("research")
graph.add_edge("research", "answer")
graph.add_edge("answer", END)

workflow = graph.compile()

# Run the workflow
output = workflow.invoke({"question": "What is prompt engineering?"})
print("Final Answer:", output["final_answer"])`,
      },
      {
        title: "Intermediate: Conditional Branching in Workflows",
        content: [
          "Conditional edges let your workflow make decisions. Based on the current state, the graph can take different paths.",
          "For example: if research found results, go to the writer; if it failed, go to a fallback node.",
          "This is how real AI workflows handle different outcomes without crashing."
        ],
        code: `from typing import TypedDict, Optional, Literal
from langgraph.graph import StateGraph, END

class TaskState(TypedDict):
    query: str
    search_result: Optional[str]
    answer: Optional[str]
    status: str  # "success" or "failed"

# Simulate a search that sometimes fails
def search_node(state: TaskState) -> TaskState:
    import random
    if random.random() > 0.3:  # 70% success rate
        return {**state, "search_result": f"Found data for: {state['query']}", "status": "success"}
    else:
        return {**state, "search_result": None, "status": "failed"}

# Write answer when search succeeds
def answer_node(state: TaskState) -> TaskState:
    answer = f"Answer based on search: {state['search_result']}"
    return {**state, "answer": answer}

# Fallback when search fails
def fallback_node(state: TaskState) -> TaskState:
    answer = "I could not find specific data. Here is a general answer based on my knowledge."
    return {**state, "answer": answer}

# Routing function — decides next node based on state
def route_after_search(state: TaskState) -> Literal["answer", "fallback"]:
    if state["status"] == "success":
        return "answer"
    return "fallback"

# Build the graph with conditional routing
graph = StateGraph(TaskState)
graph.add_node("search", search_node)
graph.add_node("answer", answer_node)
graph.add_node("fallback", fallback_node)

graph.set_entry_point("search")
graph.add_conditional_edges("search", route_after_search, {
    "answer": "answer",
    "fallback": "fallback"
})
graph.add_edge("answer", END)
graph.add_edge("fallback", END)

workflow = graph.compile()
result = workflow.invoke({"query": "Latest AI research", "status": "pending"})
print("Answer:", result["answer"])`,
      },
      {
        title: "Intermediate: Adding Retry Logic to Nodes",
        content: [
          "When a node calls an external API or tool, it can fail. Retry logic wraps the node function to try again if it gets a transient error.",
          "A good retry pattern: try up to 3 times, wait briefly between tries, and after max retries set an error in state for the routing logic to handle.",
          "This prevents flaky external services from breaking your entire workflow."
        ],
        code: `import time
from typing import TypedDict, Optional
from langgraph.graph import StateGraph, END

class ApiState(TypedDict):
    query: str
    api_result: Optional[str]
    retries: int
    error: Optional[str]

def call_external_api(query: str) -> str:
    """Simulates an external API call that might fail."""
    import random
    if random.random() < 0.5:
        raise ConnectionError("API temporarily unavailable")
    return f"API response for: {query}"

def api_node_with_retry(state: ApiState) -> ApiState:
    max_retries = 3
    retries = state.get("retries", 0)

    for attempt in range(max_retries):
        try:
            result = call_external_api(state["query"])
            return {**state, "api_result": result, "error": None, "retries": attempt + 1}
        except ConnectionError as e:
            if attempt < max_retries - 1:
                time.sleep(0.5)  # brief wait before retry
                continue
            # All retries exhausted
            return {**state, "api_result": None, "error": str(e), "retries": max_retries}

def success_node(state: ApiState) -> ApiState:
    print(f"Success after {state['retries']} attempt(s):", state["api_result"])
    return state

def error_node(state: ApiState) -> ApiState:
    print(f"Failed after {state['retries']} retries. Error:", state["error"])
    return state

def route(state: ApiState):
    return "success" if state["api_result"] else "error"

graph = StateGraph(ApiState)
graph.add_node("api_call", api_node_with_retry)
graph.add_node("success", success_node)
graph.add_node("error", error_node)
graph.set_entry_point("api_call")
graph.add_conditional_edges("api_call", route, {"success": "success", "error": "error"})
graph.add_edge("success", END)
graph.add_edge("error", END)

workflow = graph.compile()
workflow.invoke({"query": "student grades", "retries": 0})`,
      },
      {
        title: "Advanced: Multi-Agent Graph Orchestration",
        content: [
          "In advanced LangGraph applications, different agents handle specialized tasks. The graph connects them so output from one agent flows as input to the next.",
          "You can define subgraphs — a complete graph that itself acts as one node in a larger graph. This allows nested, modular architectures.",
          "Multi-agent graphs are used in production for complex tasks like automated research → writing → review pipelines."
        ],
        code: `from typing import TypedDict, Optional
from langgraph.graph import StateGraph, END
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.3)

class PipelineState(TypedDict):
    topic: str
    research: Optional[str]
    draft: Optional[str]
    reviewed: Optional[str]

# Agent 1: Research Agent
def research_agent(state: PipelineState) -> PipelineState:
    messages = [
        SystemMessage(content="You are a research assistant. Find 3 key facts."),
        HumanMessage(content=f"Research this topic: {state['topic']}")
    ]
    result = llm(messages).content
    return {**state, "research": result}

# Agent 2: Writer Agent
def writer_agent(state: PipelineState) -> PipelineState:
    messages = [
        SystemMessage(content="You are a writer. Write a clear 2-paragraph summary."),
        HumanMessage(content=f"Using these facts, write a summary:\\n{state['research']}")
    ]
    result = llm(messages).content
    return {**state, "draft": result}

# Agent 3: Reviewer Agent
def reviewer_agent(state: PipelineState) -> PipelineState:
    messages = [
        SystemMessage(content="You are an editor. Improve clarity and fix any issues. Return the final version."),
        HumanMessage(content=f"Review this draft:\\n{state['draft']}")
    ]
    result = llm(messages).content
    return {**state, "reviewed": result}

# Build the multi-agent graph
graph = StateGraph(PipelineState)
graph.add_node("research", research_agent)
graph.add_node("write", writer_agent)
graph.add_node("review", reviewer_agent)

graph.set_entry_point("research")
graph.add_edge("research", "write")
graph.add_edge("write", "review")
graph.add_edge("review", END)

pipeline = graph.compile()
output = pipeline.invoke({"topic": "Benefits of AI in education"})
print("Final Reviewed Output:\\n", output["reviewed"])`,
      },
      {
        title: "Advanced: Human-in-the-Loop Workflows",
        content: [
          "Some workflows need a human to approve or modify a result before the process continues. LangGraph supports interrupt points for this pattern.",
          "You set a breakpoint at a specific node. The graph pauses, sends its current state to the user, waits for a human response, then continues.",
          "This is critical for applications where AI-generated content must be reviewed before being published or acted upon."
        ],
        code: `from typing import TypedDict, Optional
from langgraph.graph import StateGraph, END

class ReviewState(TypedDict):
    draft: str
    human_feedback: Optional[str]
    final_output: Optional[str]

# Node 1: Generate a draft
def generate_draft(state: ReviewState) -> ReviewState:
    # In real app, this calls an LLM
    draft = "AI is transforming how students learn by personalizing content delivery."
    return {**state, "draft": draft}

# Node 2: Human review step (interrupt point)
def human_review(state: ReviewState) -> ReviewState:
    # In a real app with LangGraph interrupt, this would pause and send state to UI.
    # For demonstration, we simulate human input.
    print("\\n--- HUMAN REVIEW REQUIRED ---")
    print("Draft to review:", state["draft"])
    
    # Simulate human feedback (in production, this comes from a UI)
    feedback = input("Enter feedback (or press Enter to approve): ").strip()
    if not feedback:
        feedback = "APPROVED"
    return {**state, "human_feedback": feedback}

# Node 3: Finalize based on feedback
def finalize(state: ReviewState) -> ReviewState:
    if state["human_feedback"] == "APPROVED":
        return {**state, "final_output": state["draft"]}
    else:
        # In real app, re-run LLM with feedback here
        revised = f"Revised based on feedback '{state['human_feedback']}': {state['draft']} [revised]"
        return {**state, "final_output": revised}

graph = StateGraph(ReviewState)
graph.add_node("generate", generate_draft)
graph.add_node("review", human_review)
graph.add_node("finalize", finalize)

graph.set_entry_point("generate")
graph.add_edge("generate", "review")
graph.add_edge("review", "finalize")
graph.add_edge("finalize", END)

workflow = graph.compile()
result = workflow.invoke({"draft": ""})
print("\\nFinal Output:", result["final_output"])`,
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner Project: Build a two-node graph — one node processes input, another formats the output. Test with 5 different inputs.",
          "Intermediate Project: Build a research workflow with conditional routing: search node → if search succeeds go to writer, if it fails go to fallback → both paths merge at a final formatter node.",
          "Advanced Project: Build a full multi-agent pipeline (researcher → writer → reviewer) with human-in-the-loop review at the writer stage and retry logic on the research node."
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
        title: "Intermediate: Few-Shot Prompting",
        content: [
          "Few-shot prompting means giving the model 2-5 examples of what you want before the actual question. This dramatically improves consistency and output format.",
          "The model learns from your examples and applies the same pattern to the new input. This works better than long instructions for formatting tasks.",
          "Use few-shot prompting when you need the model to follow a very specific output structure."
        ],
        code: `from langchain.prompts import FewShotPromptTemplate, PromptTemplate
from langchain.chat_models import ChatOpenAI

# Define example question → answer pairs
examples = [
    {"question": "What is photosynthesis?", "answer": "Photosynthesis is the process by which plants use sunlight to make food from water and carbon dioxide."},
    {"question": "What is gravity?", "answer": "Gravity is the force that pulls objects toward each other. On Earth, it pulls us toward the ground."},
    {"question": "What is democracy?", "answer": "Democracy is a system of government where citizens vote to choose their leaders and make decisions."},
]

# Template for each example
example_template = PromptTemplate(
    input_variables=["question", "answer"],
    template="Question: {question}\\nAnswer: {answer}"
)

# Build the few-shot prompt template
few_shot_prompt = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_template,
    prefix="Answer each question in one clear sentence, in simple language.",
    suffix="Question: {input}\\nAnswer:",
    input_variables=["input"]
)

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
chain = few_shot_prompt | llm

# Test with a new question
result = chain.invoke({"input": "What is artificial intelligence?"})
print(result.content)`,
      },
      {
        title: "Intermediate: Chain-of-Thought Prompting",
        content: [
          "Chain-of-Thought (CoT) prompting tells the model to show its reasoning step by step before giving a final answer. This significantly improves accuracy on complex problems.",
          "Simply adding 'Think step by step before answering' to your prompt is the simplest form of CoT. More advanced versions provide example reasoning chains.",
          "CoT is especially powerful for math, logic, multi-step analysis, and decision-making tasks."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Without CoT — direct answer (often less accurate for complex questions)
basic_prompt = "A student studied 2 hours on Monday, 3 hours on Tuesday, and 1.5 hours on Wednesday. If their goal is 10 hours per week, how many more hours do they need to study?"

# With CoT — ask model to reason step by step
cot_prompt = """A student studied 2 hours on Monday, 3 hours on Tuesday, and 1.5 hours on Wednesday.
Their goal is 10 hours per week.
How many more hours do they need to study?

Think through this step by step:
1. First, calculate the total hours studied so far.
2. Then subtract from the weekly goal.
3. State the final answer clearly."""

# Compare responses
print("Without CoT:")
print(llm([HumanMessage(content=basic_prompt)]).content)

print("\\nWith Chain-of-Thought:")
print(llm([HumanMessage(content=cot_prompt)]).content)`,
      },
      {
        title: "Intermediate: Controlling Output Format",
        content: [
          "For applications that need structured data, you must instruct the model to return output in a specific format like JSON, numbered lists, or a table.",
          "The more explicit your format instructions, the more reliable the output. Always include an example of the expected format.",
          "Combine format instructions with a parser to automatically convert the model's text output into Python objects."
        ],
        code: `from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.output_parsers import CommaSeparatedListOutputParser, StructuredOutputParser, ResponseSchema

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Example 1: Get a comma-separated list
list_parser = CommaSeparatedListOutputParser()
list_prompt = ChatPromptTemplate.from_template(
    "List 5 careers in data science. {format_instructions}"
)

list_chain = list_prompt | llm | list_parser
careers = list_chain.invoke({
    "format_instructions": list_parser.get_format_instructions()
})
print("Career list:", careers)

# Example 2: Get structured JSON with multiple fields
response_schemas = [
    ResponseSchema(name="topic", description="The topic name"),
    ResponseSchema(name="difficulty", description="beginner, intermediate, or advanced"),
    ResponseSchema(name="resources", description="comma-separated list of 3 learning resources"),
]

structured_parser = StructuredOutputParser.from_response_schemas(response_schemas)
structured_prompt = ChatPromptTemplate.from_template(
    "Give me study information about: {subject}\\n{format_instructions}"
)

chain = structured_prompt | llm | structured_parser
info = chain.invoke({
    "subject": "machine learning",
    "format_instructions": structured_parser.get_format_instructions()
})

print("\\nStructured Output:")
print(f"Topic: {info['topic']}")
print(f"Difficulty: {info['difficulty']}")
print(f"Resources: {info['resources']}")`,
      },
      {
        title: "Intermediate: Role-Based and Persona Prompting",
        content: [
          "Assigning a role to the model changes how it responds. A 'teacher explaining to a 10-year-old' gives very different output from 'a university professor'.",
          "Role prompting is also used to constrain behavior: 'You are a support agent who only discusses product features. Do not answer questions about competitors.'",
          "Combine role, constraints, tone, and audience in the system message for the most consistent results."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.3)

# The same question asked with 3 different personas
question = "Explain how computers work."

personas = [
    {
        "name": "Simple Teacher",
        "system": "You are a friendly teacher explaining things to a curious 10-year-old. Use simple words, short sentences, and fun comparisons."
    },
    {
        "name": "Technical Expert",
        "system": "You are a computer science professor. Use precise technical terminology and give a detailed technical explanation."
    },
    {
        "name": "Career Counselor",
        "system": "You are a career counselor helping students decide if computer science is right for them. Focus on practical implications and career relevance."
    }
]

for persona in personas:
    messages = [
        SystemMessage(content=persona["system"]),
        HumanMessage(content=question)
    ]
    response = llm(messages).content
    print(f"--- {persona['name']} ---")
    print(response[:200] + "...")
    print()`,
      },
      {
        title: "Advanced: Building a Prompt Evaluation Suite",
        content: [
          "A prompt evaluation suite is a set of test cases that you run against your prompts to measure quality before deploying changes.",
          "Define test cases with: input, expected keywords or themes, and optionally a reference answer. Score each response against criteria.",
          "Run evaluations on every prompt change. Track scores over time in a log file. Never deploy a prompt that reduces your baseline score."
        ],
        code: `import json
from datetime import datetime
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

SYSTEM_PROMPT = """You are a helpful study assistant. Answer clearly and accurately."""

# Define test suite
TEST_CASES = [
    {
        "id": "TC001",
        "input": "What is the speed of light?",
        "must_contain": ["299", "million", "m/s", "kilometer"],
        "must_not_contain": ["slow", "unknown"],
        "min_words": 10,
        "max_words": 80
    },
    {
        "id": "TC002",
        "input": "Name three programming languages.",
        "must_contain_any": ["python", "java", "javascript", "c++", "ruby", "go", "rust"],
        "must_not_contain": ["math", "painting"],
        "min_count": 3  # Must mention at least 3 items
    },
    {
        "id": "TC003",
        "input": "Is Python or Java better?",
        "must_contain": ["depends", "use case"],  # Should give nuanced answer
        "must_not_contain": ["always", "definitely better"],
        "min_words": 20
    }
]

def evaluate_response(response: str, test_case: dict) -> dict:
    response_lower = response.lower()
    issues = []

    if "must_contain" in test_case:
        for kw in test_case["must_contain"]:
            if kw.lower() not in response_lower:
                issues.append(f"Missing keyword: {kw}")

    if "must_contain_any" in test_case:
        found = any(kw.lower() in response_lower for kw in test_case["must_contain_any"])
        if not found:
            issues.append("None of the expected keywords found")

    if "must_not_contain" in test_case:
        for kw in test_case["must_not_contain"]:
            if kw.lower() in response_lower:
                issues.append(f"Should not contain: {kw}")

    word_count = len(response.split())
    if "min_words" in test_case and word_count < test_case["min_words"]:
        issues.append(f"Too short: {word_count} words (min {test_case['min_words']})")
    if "max_words" in test_case and word_count > test_case["max_words"]:
        issues.append(f"Too long: {word_count} words (max {test_case['max_words']})")

    passed = len(issues) == 0
    return {"passed": passed, "issues": issues, "word_count": word_count}

# Run all test cases
results = []
for tc in TEST_CASES:
    messages = [
        SystemMessage(content=SYSTEM_PROMPT),
        HumanMessage(content=tc["input"])
    ]
    response = llm(messages).content
    evaluation = evaluate_response(response, tc)
    
    status = "PASS" if evaluation["passed"] else "FAIL"
    results.append({"id": tc["id"], "status": status, "issues": evaluation["issues"]})
    print(f"{tc['id']}: {status} | Issues: {evaluation['issues'] or 'None'}")

# Summary
passed = sum(1 for r in results if r["status"] == "PASS")
print(f"\\nTotal: {passed}/{len(results)} passed — {round(passed/len(results)*100)}% pass rate")

# Save results log
log = {"timestamp": datetime.now().isoformat(), "results": results}
with open("eval_log.json", "a") as f:
    f.write(json.dumps(log) + "\\n")`,
      },
      {
        title: "Advanced: Reducing Hallucinations with Grounding Prompts",
        content: [
          "Hallucination is when the model confidently states false information. It is one of the biggest reliability risks in production AI applications.",
          "Grounding techniques: provide factual context in the prompt, instruct the model to cite sources, ask it to say 'I don't know' instead of guessing, and use RAG to anchor responses to real documents.",
          "Always test your prompts with trick questions and edge cases to see how the model handles uncertainty before deploying."
        ],
        code: `from langchain.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Anti-hallucination system prompt — key strategies built in
ANTI_HALLUCINATION_PROMPT = """
You are a factual study assistant. You follow these rules strictly:

1. ONLY state facts you are confident about
2. If you are unsure, say "I'm not certain, but..." and clearly mark it as uncertain
3. If you don't know something, say "I don't have reliable information on that."
4. NEVER invent statistics, dates, names, or specific numbers
5. If asked for a specific number or fact you're unsure of, say "Please verify this with an authoritative source."
6. Keep responses grounded — only answer what is asked
"""

def safe_answer(question: str) -> str:
    messages = [
        SystemMessage(content=ANTI_HALLUCINATION_PROMPT),
        HumanMessage(content=question)
    ]
    return llm(messages).content

# Test with ambiguous and uncertain questions
test_questions = [
    "What is the exact population of Mars?",         # Should admit it's 0 / uncertain
    "Who won the Nobel Prize in Physics in 2019?",    # Model may or may not know
    "What is 2 + 2?",                                 # Confident, factual
    "What will the stock market do tomorrow?",        # Should refuse to predict
]

for q in test_questions:
    print(f"Q: {q}")
    print(f"A: {safe_answer(q)[:150]}")
    print()`,
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner Project: Build a prompt template library for 3 use cases (study helper, explainer, quiz maker). Test each with 5 different inputs and compare output quality.",
          "Intermediate Project: Create a few-shot prompt system with 5 examples for a specific domain (e.g., explaining science topics). Add CoT for complex questions and structured output parsing for consistent formatting.",
          "Advanced Project: Build a complete prompt evaluation suite with 20+ test cases. Track pass rates across prompt versions. Write a before/after comparison report showing how prompt improvements changed scores."
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
        title: "Intermediate: Working with APIs Using Requests",
        content: [
          "Most AI applications call external APIs — for data, search, translation, and more. The requests library is the standard way to do HTTP calls in Python.",
          "You will use GET requests to fetch data and POST requests to send data. Always check the response status code and handle errors properly.",
          "Below is a practical example of fetching live data from a public API and processing the result."
        ],
        code: `import requests
import json

# Fetch data from a public API (JSONPlaceholder is a free test API)
def fetch_user_posts(user_id: int) -> list:
    """Fetches posts for a given user from a REST API."""
    url = f"https://jsonplaceholder.typicode.com/posts"
    
    try:
        # Make GET request with query parameters
        response = requests.get(url, params={"userId": user_id}, timeout=10)
        
        # Always check status code before using data
        response.raise_for_status()  # raises error for 4xx/5xx
        
        posts = response.json()
        return posts
        
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to API")
        return []
    except requests.exceptions.Timeout:
        print("Error: Request timed out")
        return []
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
        return []

# Process the results
posts = fetch_user_posts(user_id=1)

print(f"Found {len(posts)} posts for user 1")
for post in posts[:3]:  # Show first 3
    print(f"  - {post['title'][:50]}")

# POST request example: send data to an API
def create_post(title: str, body: str, user_id: int) -> dict:
    """Creates a new post via POST request."""
    url = "https://jsonplaceholder.typicode.com/posts"
    
    payload = {
        "title": title,
        "body": body,
        "userId": user_id
    }
    
    response = requests.post(url, json=payload, timeout=10)
    response.raise_for_status()
    return response.json()

new_post = create_post("My Study Notes", "Today I learned about Python APIs.", user_id=1)
print("\\nCreated post with ID:", new_post.get("id"))`,
      },
      {
        title: "Intermediate: File Handling and JSON Parsing",
        content: [
          "AI applications regularly read from files (config, data) and write to files (logs, outputs, datasets). Python makes file handling simple with built-in open().",
          "JSON is the most common format for storing structured data. Python's json module converts between JSON strings and Python dictionaries in one line.",
          "Always use context managers (with open(...)) to ensure files are properly closed even if an error occurs."
        ],
        code: `import json
import csv
from pathlib import Path

# ── JSON: Read and Write ──

def save_results(data: list, filepath: str):
    """Saves a list of dictionaries to a JSON file."""
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(data)} records to {filepath}")

def load_results(filepath: str) -> list:
    """Loads JSON data from a file. Returns empty list if file not found."""
    path = Path(filepath)
    if not path.exists():
        print(f"File not found: {filepath}")
        return []
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)

# Example usage
student_data = [
    {"name": "Arjun", "score": 85, "subject": "Math"},
    {"name": "Priya", "score": 92, "subject": "Science"},
    {"name": "Ravi",  "score": 78, "subject": "English"},
]

save_results(student_data, "students.json")
loaded = load_results("students.json")
print("Loaded:", loaded[0])

# ── CSV: Read and Write ──

def save_to_csv(data: list, filepath: str):
    """Saves a list of dicts to CSV."""
    if not data:
        return
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)
    print(f"CSV saved: {filepath}")

def read_csv(filepath: str) -> list:
    """Reads a CSV into a list of dicts."""
    with open(filepath, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f))

save_to_csv(student_data, "students.csv")
rows = read_csv("students.csv")
print("CSV row 1:", rows[0])

# ── Text files: Append logging ──

def log_event(message: str, logfile: str = "app.log"):
    """Appends a log message with timestamp."""
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(logfile, "a", encoding="utf-8") as f:
        f.write(f"[{timestamp}] {message}\\n")

log_event("Application started")
log_event("Loaded 3 student records")`,
      },
      {
        title: "Intermediate: List Comprehension and Data Transformation",
        content: [
          "List comprehension is a compact, readable way to transform lists in Python. It replaces multi-line for loops with a single expression.",
          "It is heavily used in data processing, AI preprocessing, and filtering operations. Mastering it makes your code faster and more Pythonic.",
          "You can also use dict comprehension and set comprehension using the same pattern."
        ],
        code: `# ── List Comprehension Basics ──

# Traditional way
scores = [45, 78, 92, 63, 88, 55, 70]
passing = []
for s in scores:
    if s >= 60:
        passing.append(s)

# List comprehension — same result, one line
passing = [s for s in scores if s >= 60]
print("Passing scores:", passing)

# Transform and filter in one step
percentages = [f"{s}%" for s in scores if s >= 60]
print("Percentages:", percentages)

# ── Working with lists of dicts (common in AI/data work) ──

students = [
    {"name": "Arjun", "score": 85, "grade": "B"},
    {"name": "Priya", "score": 92, "grade": "A"},
    {"name": "Ravi",  "score": 55, "grade": "F"},
    {"name": "Meera", "score": 78, "grade": "C"},
]

# Get names of students who passed
passed_names = [s["name"] for s in students if s["score"] >= 60]
print("Passed:", passed_names)

# Normalize all scores to 0-1 range
max_score = max(s["score"] for s in students)
normalized = [{**s, "normalized": round(s["score"] / max_score, 2)} for s in students]
print("Normalized:", normalized)

# ── Dict comprehension ──
name_to_score = {s["name"]: s["score"] for s in students}
print("Name map:", name_to_score)

# ── Sorting ──
by_score = sorted(students, key=lambda s: s["score"], reverse=True)
print("Top scorer:", by_score[0]["name"])

# ── Grouping by grade ──
from collections import defaultdict
by_grade = defaultdict(list)
for s in students:
    by_grade[s["grade"]].append(s["name"])

print("By grade:", dict(by_grade))`,
      },
      {
        title: "Intermediate: Error Handling and Logging",
        content: [
          "Production Python code must handle errors gracefully. Uncaught exceptions crash programs and confuse users. Proper error handling keeps your application running and provides useful feedback.",
          "Python's logging module is much better than print() for applications. You can control log levels (DEBUG, INFO, WARNING, ERROR), output to files, and format log messages consistently.",
          "Use specific exception types (not bare except:) so you know exactly what went wrong."
        ],
        code: `import logging
from pathlib import Path

# ── Set up logging (do this once at app startup) ──
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(),                          # Print to console
        logging.FileHandler("app.log", encoding="utf-8") # Write to file
    ]
)
logger = logging.getLogger("StudyApp")

# ── Error handling patterns ──

def load_config(filepath: str) -> dict:
    """Load config file with proper error handling."""
    import json
    path = Path(filepath)
    
    if not path.exists():
        logger.warning(f"Config file not found: {filepath}. Using defaults.")
        return {"model": "gpt-3.5-turbo", "temperature": 0}
    
    try:
        with open(path, "r") as f:
            config = json.load(f)
        logger.info(f"Config loaded from {filepath}")
        return config
        
    except json.JSONDecodeError as e:
        logger.error(f"Config file is invalid JSON: {e}")
        raise ValueError(f"Cannot parse config: {filepath}") from e
    
    except PermissionError:
        logger.error(f"No permission to read: {filepath}")
        raise

def process_student_score(raw_score: str) -> float:
    """Convert a raw score string to float. Handle bad input."""
    try:
        score = float(raw_score)
        
        if not (0 <= score <= 100):
            raise ValueError(f"Score must be 0-100, got {score}")
        
        logger.debug(f"Processed score: {score}")
        return score
        
    except ValueError as e:
        logger.warning(f"Invalid score '{raw_score}': {e}")
        return 0.0  # Return safe default instead of crashing

# Test error handling
config = load_config("config.json")  # File doesn't exist → returns defaults
print("Config:", config)

for raw in ["85", "99.5", "abc", "150", "-5"]:
    score = process_student_score(raw)
    print(f"  '{raw}' → {score}")`,
      },
      {
        title: "Advanced: Async Python for AI Applications",
        content: [
          "Async Python allows your program to handle multiple operations at the same time without blocking. This is critical for AI apps that call APIs, databases, and models concurrently.",
          "The key words are async def (define an async function) and await (wait for an async operation to complete). asyncio.gather() runs multiple tasks in parallel.",
          "A FastAPI + asyncio combination is the most popular way to build production AI API backends in Python."
        ],
        code: `import asyncio
import aiohttp  # pip install aiohttp — for async HTTP requests
from typing import Optional

# ── Async API calls in parallel ──

async def fetch_topic_info(session: aiohttp.ClientSession, topic: str) -> dict:
    """Async HTTP fetch — does not block while waiting for response."""
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{topic}"
    
    try:
        async with session.get(url, timeout=aiohttp.ClientTimeout(total=5)) as response:
            if response.status == 200:
                data = await response.json()
                return {"topic": topic, "summary": data.get("extract", "")[:100]}
            return {"topic": topic, "summary": "Not found"}
    except Exception as e:
        return {"topic": topic, "error": str(e)}

async def fetch_all_topics(topics: list) -> list:
    """Fetch all topics in parallel — much faster than sequential."""
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_topic_info(session, topic) for topic in topics]
        results = await asyncio.gather(*tasks, return_exceptions=True)
    return results

# ── Async with LangChain ──

async def run_parallel_chains(queries: list) -> list:
    """Run multiple LangChain chains concurrently."""
    from langchain.chat_models import ChatOpenAI
    from langchain.schema import HumanMessage
    
    llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
    
    async def single_query(q: str) -> str:
        response = await llm.apredict(q)
        return response
    
    tasks = [single_query(q) for q in queries]
    return await asyncio.gather(*tasks)

# Run async functions
topics = ["Python", "Machine_learning", "Artificial_intelligence"]
results = asyncio.run(fetch_all_topics(topics))
for r in results:
    print(f"{r.get('topic')}: {r.get('summary', r.get('error', ''))[:60]}")`,
      },
      {
        title: "Advanced: Writing Testable Python for AI Apps",
        content: [
          "Testing is non-negotiable in production code. Untested code breaks in unpredictable ways. pytest is the standard Python testing framework.",
          "For AI functions that call LLMs, you use mocking to replace the real API call with a controlled fake response. This keeps tests fast and free.",
          "Write unit tests for each function. Write integration tests for multi-step workflows. Run tests before every git push."
        ],
        code: `# study_utils.py — the module we are testing

def calculate_grade(score: float) -> str:
    """Convert a numeric score to a letter grade."""
    if score < 0 or score > 100:
        raise ValueError(f"Score must be 0-100, got {score}")
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

def summarize_class(scores: list) -> dict:
    """Calculate class statistics."""
    if not scores:
        return {"count": 0, "average": 0, "highest": 0, "passing_rate": 0}
    
    passing = [s for s in scores if s >= 60]
    return {
        "count": len(scores),
        "average": round(sum(scores) / len(scores), 1),
        "highest": max(scores),
        "passing_rate": round(len(passing) / len(scores) * 100, 1)
    }

# ---

# test_study_utils.py — the test file (run with: pytest test_study_utils.py -v)
import pytest
from unittest.mock import patch, MagicMock

# Import the functions to test
# from study_utils import calculate_grade, summarize_class

class TestCalculateGrade:
    def test_a_grade(self):
        assert calculate_grade(95) == "A"
        assert calculate_grade(90) == "A"

    def test_b_grade(self):
        assert calculate_grade(85) == "B"
        assert calculate_grade(80) == "B"

    def test_f_grade(self):
        assert calculate_grade(55) == "F"
        assert calculate_grade(0) == "F"

    def test_invalid_score_raises_error(self):
        with pytest.raises(ValueError):
            calculate_grade(150)

        with pytest.raises(ValueError):
            calculate_grade(-5)

class TestSummarizeClass:
    def test_normal_class(self):
        scores = [85, 92, 78, 55, 67]
        result = summarize_class(scores)
        assert result["count"] == 5
        assert result["average"] == 75.4
        assert result["passing_rate"] == 80.0

    def test_empty_class(self):
        result = summarize_class([])
        assert result["count"] == 0
        assert result["average"] == 0

    def test_all_failing(self):
        result = summarize_class([40, 30, 20])
        assert result["passing_rate"] == 0.0

# Mocking an LLM call in tests
class TestAIFunctions:
    @patch("langchain.chat_models.ChatOpenAI")
    def test_ai_response(self, MockLLM):
        # Set up the mock to return a fixed response
        mock_instance = MockLLM.return_value
        mock_instance.predict.return_value = "Photosynthesis converts light to energy."

        # Your function that uses the LLM
        result = mock_instance.predict("What is photosynthesis?")
        
        assert "photosynthesis" in result.lower()
        assert len(result) > 0
        mock_instance.predict.assert_called_once()`,
      },
      {
        title: "Project Milestones by Level",
        content: [
          "Beginner Project: Build a student grade calculator script that reads scores from a text file, calculates averages, assigns letter grades, and saves results to a new file.",
          "Intermediate Project: Build an async study resource fetcher that calls 3 different APIs in parallel, combines the results into a structured JSON report, and logs all errors to a file. Include input validation and exception handling.",
          "Advanced Project: Build a complete Python package with modules for data loading, processing, and reporting. Include a pytest test suite with 15+ tests and mock LLM calls. Add logging throughout and structure the project for easy pip installation."
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
      title: "Intermediate: Setting Up LangSmith Tracing",
      content: [
        "LangSmith traces every step of your LangChain application automatically once you set the environment variables. No code changes needed — it just works.",
        "Each trace shows: the full prompt sent to the model, token counts, latency, tool calls, intermediate steps, and the final output.",
        "This is the fastest way to understand why your agent gave a wrong or unexpected answer."
      ],
      code: `import os
from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser

# ── Step 1: Set LangSmith environment variables ──
# (Set these in your .env file or terminal before running)
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_PROJECT"] = "StudyAssistant-Dev"
os.environ["LANGCHAIN_API_KEY"] = "your-langsmith-api-key"  # From smith.langchain.com
os.environ["OPENAI_API_KEY"] = "your-openai-api-key"

# ── Step 2: Build a chain as normal — LangSmith traces automatically ──
prompt = ChatPromptTemplate.from_template(
    "You are a study assistant. Explain {topic} clearly in 3 bullet points."
)

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
parser = StrOutputParser()

chain = prompt | llm | parser

# ── Step 3: Run the chain ──
result = chain.invoke({"topic": "neural networks"})
print(result)

# After running, go to https://smith.langchain.com to see:
# - The full prompt that was sent
# - The model's token usage and cost
# - Latency for each step
# - The exact output at each stage of the chain

# ── Tagging runs for easier filtering ──
from langchain.callbacks import LangChainTracer

tracer = LangChainTracer(project_name="StudyAssistant-Dev")

# Run with metadata tags for filtering in the UI
result = chain.invoke(
    {"topic": "photosynthesis"},
    config={
        "callbacks": [tracer],
        "tags": ["science", "beginner"],
        "metadata": {"user_id": "student_42", "session": "session_001"}
    }
)
print(result)`,
    },
    {
      title: "Intermediate: Setting Up Langfuse Tracing",
      content: [
        "Langfuse is an open-source alternative to LangSmith. It can be self-hosted or used as a cloud service. It supports LangChain, OpenAI SDK, and custom integrations.",
        "The Langfuse Python SDK wraps your LLM calls and sends trace data to your Langfuse dashboard automatically.",
        "Use Langfuse when you need more control over your data, lower cost, or want to self-host your observability infrastructure."
      ],
      code: `from langfuse import Langfuse
from langfuse.callback import CallbackHandler
from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser
import os

# ── Step 1: Initialize Langfuse client ──
# Get keys from https://cloud.langfuse.com (or your self-hosted instance)
langfuse = Langfuse(
    public_key=os.environ.get("LANGFUSE_PUBLIC_KEY"),
    secret_key=os.environ.get("LANGFUSE_SECRET_KEY"),
    host="https://cloud.langfuse.com"  # or your self-hosted URL
)

# ── Step 2: Create a callback handler for LangChain ──
langfuse_handler = CallbackHandler(
    public_key=os.environ.get("LANGFUSE_PUBLIC_KEY"),
    secret_key=os.environ.get("LANGFUSE_SECRET_KEY"),
    session_id="student-session-001",
    user_id="student-42",
    trace_name="study-question"
)

# ── Step 3: Build chain as normal ──
prompt = ChatPromptTemplate.from_template("Explain {topic} simply.")
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
chain = prompt | llm | StrOutputParser()

# ── Step 4: Run with Langfuse callback ──
result = chain.invoke(
    {"topic": "machine learning"},
    config={"callbacks": [langfuse_handler]}
)
print(result)

# ── Step 5: Log custom events (scores, user feedback) ──
# After the chain runs, you can log a quality score
trace = langfuse.trace(name="study-response")
trace.score(name="user-rating", value=0.9, comment="Clear and helpful")

# Flush to ensure all data is sent
langfuse.flush()`,
    },
    {
      title: "Intermediate: Analyzing Traces to Improve Prompts",
      content: [
        "Once traces are flowing into LangSmith or Langfuse, the real work begins: reading them to find problems and improve your system.",
        "Look for: prompts that produce vague answers, tool calls that return errors, high-latency steps, and responses where the model repeated itself or went off-topic.",
        "This systematic trace review process is how experienced teams continuously improve their AI applications."
      ],
      diagram: [
        "Weekly Trace Review Process",
        "",
        "1. Filter traces by low quality score or user complaints",
        "2. Open each trace and read the full prompt sent to model",
        "3. Identify: Was the prompt clear? Did tools work?",
        "4. Find the most common failure pattern this week",
        "5. Update the prompt or tool to fix the root cause",
        "6. Re-run test cases with new prompt",
        "7. Deploy if test scores improve",
        "8. Monitor next week's traces for regression",
      ],
      code: `from langfuse import Langfuse
from datetime import datetime, timedelta

langfuse = Langfuse(
    public_key="your-public-key",
    secret_key="your-secret-key"
)

# ── Fetch recent traces for analysis ──
def get_low_quality_traces(min_score: float = 0.6, days_back: int = 7):
    """Find traces with quality scores below threshold."""
    
    # Get traces from the past week
    traces = langfuse.get_traces(
        limit=100,
        from_timestamp=datetime.now() - timedelta(days=days_back)
    )
    
    low_quality = []
    for trace in traces.data:
        scores = [s.value for s in (trace.scores or []) if s.name == "quality"]
        if scores and min(scores) < min_score:
            low_quality.append({
                "id": trace.id,
                "name": trace.name,
                "score": min(scores),
                "input": str(trace.input)[:100],
                "output": str(trace.output)[:100],
                "latency_ms": trace.latency
            })
    
    return sorted(low_quality, key=lambda x: x["score"])

# ── Analyze latency hotspots ──
def find_slow_traces(max_latency_ms: int = 3000):
    """Find traces where latency is too high."""
    traces = langfuse.get_traces(limit=50)
    
    slow = [
        {"id": t.id, "latency_ms": t.latency, "name": t.name}
        for t in traces.data
        if t.latency and t.latency > max_latency_ms
    ]
    return sorted(slow, key=lambda x: x["latency_ms"], reverse=True)

# Run analysis
print("Low quality traces:")
low_q = get_low_quality_traces(min_score=0.7)
for t in low_q[:5]:
    print(f"  [{t['score']:.1f}] {t['name']}: {t['input'][:50]}")`,
    },
    {
      title: "Advanced: Automated Evaluation with LangSmith",
      content: [
        "Instead of manually reviewing traces, you can set up automated evaluators that score every response automatically using an LLM-as-judge pattern.",
        "Define evaluation criteria (correctness, helpfulness, safety). An evaluator LLM reads the question and response, then scores it 0-1 against each criterion.",
        "Run the evaluator on datasets. Compare scores before and after prompt changes to track improvement objectively."
      ],
      code: `from langsmith import Client
from langsmith.evaluation import evaluate, LangChainStringEvaluator
from langchain.prompts import ChatPromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.schema.output_parser import StrOutputParser

client = Client()
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# ── Step 1: Create a dataset of test cases in LangSmith ──
dataset_name = "StudyAssistant-EvalSet"

# Only create dataset if it doesn't already exist
if not any(d.name == dataset_name for d in client.list_datasets()):
    dataset = client.create_dataset(
        dataset_name=dataset_name,
        description="Evaluation set for study assistant prompts"
    )
    
    # Add test cases (input + expected reference output)
    examples = [
        {
            "inputs": {"topic": "photosynthesis"},
            "outputs": {"answer": "Photosynthesis uses sunlight, water, CO2 to make glucose and oxygen in plants."}
        },
        {
            "inputs": {"topic": "Newton's laws"},
            "outputs": {"answer": "Newton's three laws describe inertia, force=mass*acceleration, and action-reaction."}
        },
        {
            "inputs": {"topic": "DNA"},
            "outputs": {"answer": "DNA stores genetic information using base pairs A-T and C-G in a double helix."}
        }
    ]
    client.create_examples(dataset_id=dataset.id, examples=examples)
    print(f"Created dataset with {len(examples)} examples")

# ── Step 2: Define your chain to evaluate ──
chain_prompt = ChatPromptTemplate.from_template(
    "You are a science tutor. Explain {topic} clearly in 2-3 sentences."
)
chain = chain_prompt | llm | StrOutputParser()

def run_chain(inputs: dict) -> dict:
    result = chain.invoke(inputs)
    return {"answer": result}

# ── Step 3: Set up evaluators ──
evaluators = [
    LangChainStringEvaluator("cot_qa"),          # Correctness evaluator
    LangChainStringEvaluator("criteria", config={"criteria": "helpfulness"}),
    LangChainStringEvaluator("criteria", config={"criteria": "conciseness"}),
]

# ── Step 4: Run the evaluation ──
eval_results = evaluate(
    run_chain,
    data=dataset_name,
    evaluators=evaluators,
    experiment_prefix="science-tutor-v1",
    metadata={"model": "gpt-3.5-turbo", "prompt_version": "v1"}
)

print("Evaluation complete. View results at https://smith.langchain.com")`,
    },
    {
      title: "Advanced: Cost Monitoring and Budget Controls",
      content: [
        "Every LLM API call costs money. Without monitoring, costs can spike unexpectedly as your application scales or if a bug causes infinite retry loops.",
        "Track token usage per user session, per feature, and per model. Set soft and hard limits. Alert when costs exceed thresholds.",
        "Langfuse and LangSmith both show token usage per trace. You can also track costs in your own database for more granular control."
      ],
      code: `import os
from langfuse import Langfuse
from datetime import datetime, timedelta
from collections import defaultdict

langfuse = Langfuse(
    public_key=os.environ.get("LANGFUSE_PUBLIC_KEY"),
    secret_key=os.environ.get("LANGFUSE_SECRET_KEY")
)

# Token cost estimates ($ per 1000 tokens, adjust to current pricing)
COST_PER_1K = {
    "gpt-3.5-turbo": {"input": 0.0005, "output": 0.0015},
    "gpt-4": {"input": 0.03, "output": 0.06},
    "gpt-4-turbo": {"input": 0.01, "output": 0.03},
}

def estimate_cost(model: str, input_tokens: int, output_tokens: int) -> float:
    """Calculate estimated cost in USD for a single call."""
    if model not in COST_PER_1K:
        return 0.0
    rates = COST_PER_1K[model]
    cost = (input_tokens / 1000 * rates["input"]) + (output_tokens / 1000 * rates["output"])
    return round(cost, 6)

def get_daily_cost_report(days_back: int = 7):
    """Generate a cost breakdown report by day and model."""
    traces = langfuse.get_traces(
        limit=500,
        from_timestamp=datetime.now() - timedelta(days=days_back)
    )
    
    daily_costs = defaultdict(lambda: defaultdict(float))
    total_tokens = defaultdict(int)
    
    for trace in traces.data:
        if not trace.usage:
            continue
        
        day = trace.start_time.strftime("%Y-%m-%d")
        model = getattr(trace.usage, "model", "unknown")
        input_t = getattr(trace.usage, "input", 0) or 0
        output_t = getattr(trace.usage, "output", 0) or 0
        
        cost = estimate_cost(model, input_t, output_t)
        daily_costs[day][model] += cost
        total_tokens[model] += (input_t + output_t)
    
    # Print report
    print("=== Daily Cost Report ===")
    grand_total = 0
    for day in sorted(daily_costs.keys()):
        day_total = sum(daily_costs[day].values())
        grand_total += day_total
        print(f"{day}: \${day_total:.4f}")
        for model, cost in daily_costs[day].items():
            print(f"   {model}: \${cost:.4f}")
    
    print(f"\\nGrand Total ({days_back}d): \${grand_total:.4f}")
    
    # Budget alert
    DAILY_BUDGET = 1.00  # $1 per day threshold
    if grand_total / days_back > DAILY_BUDGET:
        print(f"WARNING: Average daily cost \${grand_total/days_back:.4f} exceeds \${DAILY_BUDGET} budget!")
    
    return daily_costs

get_daily_cost_report(days_back=7)`,
    },
    {
      title: "Project Milestones by Level",
      content: [
        "Beginner Project: Set up LangSmith on a simple LangChain app. Run it 20 times with different inputs. Review the traces and write down 3 observations about prompt quality or latency.",
        "Intermediate Project: Set up Langfuse on a RAG application. Add user session IDs and question tags to every trace. Build a weekly trace review habit: each Friday, find the 3 lowest-quality traces and update the prompt to fix the root cause.",
        "Advanced Project: Build an automated evaluation pipeline with 30+ test cases in a LangSmith dataset. Run it before every prompt deployment. Set budget alerts in Langfuse. Create a dashboard showing weekly average quality score, average latency, and daily cost trend."
      ],
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
  // ─────────────────────────────────────────────────────────────────
  // iOS MOBILE APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "ios-mobile-app-development",
    title: "iOS App Development from Scratch: Beginner to Advanced",
    description:
      "Learn iOS app development from beginner to advanced. Master Swift, SwiftUI, networking, Core Data, and App Store deployment in a structured, step-by-step roadmap.",
    intro:
      "iOS app development means building applications for iPhones, iPads, and Apple Watch. This skill page guides you from zero knowledge through publishing your first app to the App Store. You'll learn Swift (Apple's programming language), build user interfaces with SwiftUI, work with APIs, store data locally, and navigate the entire app submission process.",
    badge: "Mobile Platform",
    sections: [
      {
        title: "Why Learn iOS Development?",
        content: [
          "iOS apps run on over 2 billion Apple devices worldwide. Developers with iOS skills are in high demand and command competitive salaries ($100k–$180k+ depending on experience and location).",
          "Apple's ecosystem is cohesive and well-documented. Learning iOS gives you immediate access to tools, frameworks, and communities that support quality app development.",
          "iOS users typically spend more time and money on apps compared to other platforms, making iOS a valuable market for indie developers and startups."
        ],
      },
      {
        title: "Beginner: Foundations (Weeks 1–4)",
        content: [
          "Duration: 4 weeks | Time commitment: 15–20 hours/week",
          "Goal: Build your first app that displays text, buttons, and handles user input.",
          "",
          "═══ STEP 1: GET A MAC (Requirement) ═══",
          "",
          "Important: You MUST have a Mac (MacBook, iMac, or Mac Mini) to develop iOS apps. You cannot use Windows or Linux.",
          "",
          "Why? Xcode (Apple's development tool) only runs on macOS. This is a hard requirement.",
          "",
          "If you don't have a Mac:",
          "• Option A: Borrow a Mac from a friend or family member",
          "• Option B: Rent a Mac in the cloud (~$10–30/month) from MacStadium, MacInCloud, or similar",
          "• Option C: Buy a Mac (prices start ~$1000 for Mac Mini, ~$1500 for MacBook Air)",
          "",
          "Once you have a Mac, continue with the steps below.",
          "",
          "═══ STEP 2: INSTALL XCODE (2–4 hours) ═══",
          "",
          "What is Xcode? Apple's official tool for building iOS apps. It includes an editor, debugger, and simulator (fake iPhone).",
          "",
          "2a) Download Xcode from the App Store:",
          "• Click the Apple logo (top-left corner) → 'App Store'",
          "• Search for 'Xcode'",
          "• Click 'Get' → 'Install' (or 'Open' if already installed)",
          "• Enter your Apple ID password when prompted",
          "",
          "2b) Wait for Installation:",
          "• Xcode is large (~15 GB), so download on strong internet (30 min – 2 hours)",
          "• Don't close the Mac or App Store during installation",
          "",
          "2c) Verify Installation:",
          "• Open Spotlight: Press Cmd + Space",
          "• Type 'Xcode' and press Enter",
          "• Xcode should open showing a Welcome screen",
          "• This means installation was successful",
          "",
          "2d) Accept the License:",
          "• Xcode might ask you to accept its license",
          "• Click 'Agree' button",
          "",
          "═══ STEP 3: CREATE YOUR APPLE DEVELOPER ACCOUNT (5 minutes) ═══",
          "",
          "Why? You need an account to publish apps to the App Store (later). It's free to start.",
          "",
          "3a) Create Account (Free):",
          "• Go to https://developer.apple.com",
          "• Click 'Account' (top-right)",
          "• Click 'Create Apple ID'",
          "• Fill in your details (email, password, name, country)",
          "• Click 'Continue'",
          "",
          "3b) Set Up in Xcode:",
          "• Open Xcode",
          "• Click 'Xcode' → 'Settings' (top-left menu)",
          "• Click 'Accounts' tab",
          "• Click '+' button at bottom-left",
          "• Select 'Apple ID' and enter your new account details",
          "• Click 'Sign In'",
          "",
          "═══ STEP 4: CREATE YOUR FIRST PROJECT (15 minutes) ═══",
          "",
          "4a) Start a New Project:",
          "• Open Xcode",
          "• Click 'Create a new Xcode project'",
          "• Select 'iOS' tab at top",
          "• Choose 'App' template",
          "• Click 'Next'",
          "",
          "4b) Configure Your Project:",
          "• Product Name: 'MyFirstApp'",
          "• Team: Select your name (from the Apple ID you just added)",
          "• Organization Identifier: 'com.myname' (e.g., com.arjun)",
          "• Language: 'Swift'",
          "• Interface: 'SwiftUI' (this is the modern UI framework)",
          "• Click 'Next'",
          "",
          "4c) Save Your Project:",
          "• Choose where to save (Desktop or Documents folder)",
          "• Uncheck 'Create Git repository' (for now)",
          "• Click 'Create'",
          "",
          "4d) Understand Your Project Layout:",
          "• MyFirstAppApp.swift — Starts your app",
          "• ContentView.swift — The main screen code",
          "• Assets.xcassets — Images and colors for your app",
          "• Preview Canvas (right side) — Shows how your app looks LIVE as you code",
          "",
          "═══ STEP 5: SET UP THE iOS SIMULATOR (Virtual iPhone) (10 minutes) ═══",
          "",
          "What is the Simulator? A fake iPhone running on your Mac. Test your app here before publishing.",
          "",
          "5a) Select a Simulator Device:",
          "• At top of Xcode, find the device dropdown",
          "• Click it and select 'iPhone 15 Pro'",
          "",
          "5b) Start the Simulator:",
          "• Click the Play button (▶) at top-left of Xcode",
          "• Wait 1–2 minutes for the simulator to boot",
          "• A fake iPhone will open in a new window",
          "",
          "5c) Your First App Runs!:",
          "• The simulator shows the default 'Hello, world!' app",
          "• This proves everything is working",
          "",
          "═══ STEP 6: LEARN SWIFT BASICS (Week 1: 5–7 hours) ═══",
          "",
          "Swift is Apple's programming language. These are the basics:",
          "",
          "Concept 1: Constants & Variables (storing data)",
          "let name = 'Arjun'  — Can't change after creation",
          "var age = 25  — Can change",
          "var height: Double = 5.9  — Explicitly say data type",
          "",
          "Concept 2: Data Types",
          "String — Text: 'Hello'",
          "Int — Whole numbers: 42",
          "Double — Decimals: 3.14",
          "Bool — True/False",
          "Array — List: [1, 2, 3]",
          "Dictionary — Key-value pairs: ['name': 'Arjun', 'age': 25]",
          "",
          "Concept 3: Functions (reusable code blocks)",
          "func greet(name: String) -> String {",
          "    return 'Hello, \(name)!'",
          "}",
          "let message = greet(name: 'Arjun')  // Result: 'Hello, Arjun!'",
          "",
          "Concept 4: Control Flow (making decisions)",
          "if age >= 18 {",
          "    print('You can vote')",
          "} else {",
          "    print('Too young to vote')",
          "}",
          "",
          "Concept 5: Optionals (handling missing data)",
          "var phone: String? = nil  — Can be empty",
          "var email: String = 'user@example.com'  — Must have value",
          "if let p = phone { print(p) }  — Safely check if phone exists",
          "",
          "Concept 6: Loops (repeat actions)",
          "for i in 1...5 {  // i = 1, 2, 3, 4, 5",
          "    print(i)",
          "}",
          "",
          "═══ STEP 7: LEARN SWIFTUI BASICS (Week 2: 5–7 hours) ═══",
          "",
          "SwiftUI is how you build the visual parts of your app (buttons, text, colors, layout).",
          "",
          "Concept 1: Views (UI building blocks)",
          "struct ContentView: View {",
          "    var body: some View {",
          "        Text('Hello, iOS!')  // Displays text",
          "    }",
          "}",
          "Every screen in your app is a 'View'.",
          "",
          "Concept 2: Stacking Views (Layout)",
          "VStack {  // Vertical (top to bottom)",
          "    Text('First')",
          "    Text('Second')",
          "}",
          "HStack {  // Horizontal (left to right)",
          "    Text('Left')",
          "    Text('Right')",
          "}",
          "ZStack {  // Layered (on top of each other)",
          "    Color.blue",
          "    Text('On top of blue')",
          "}",
          "",
          "Concept 3: UI Elements",
          "Text('Hello')  — Display text",
          "TextField('Placeholder', text: \\$variable)  — Text input",
          "Button('Click me') { doSomething() }  — Clickable button",
          "Image('imageName')  — Display a picture",
          "",
          "Concept 4: Modifiers (styling & positioning)",
          "Text('Hello')",
          "    .font(.title)            // Large text",
          "    .foregroundColor(.blue)  // Blue text",
          "    .padding(16)             // Spacing around text",
          "    .background(Color.gray)  // Gray background",
          "",
          "Concept 5: State (making UI interactive)",
          "@State var count = 0",
          "Button('Increment') { count += 1 }",
          "Text('Count: \\(count)')  — Shows updated count",
          "When count changes, the screen updates automatically.",
          "",
          "═══ STEP 8: BUILD YOUR FIRST APP - COUNTER APP (Weeks 3–4: 8–10 hours) ═══",
          "",
          "Project: A simple counter app that:",
          "• Shows a number on screen",
          "• Has a '+' button to increase the number",
          "• Has a '−' button to decrease the number",
          "• Has a 'Reset' button to set number back to 0",
          "",
          "Step-by-step guide:",
          "",
          "8a) Replace Default Code:",
          "• Open ContentView.swift",
          "• Delete everything inside the struct ContentView: View { }",
          "• Copy the Calculator App code provided below",
          "• The Preview will update LIVE on the right side",
          "",
          "8b) Understand the Code (line by line):",
          "@State var firstNumber: String = ''  — Store first number as text",
          "@State var secondNumber: String = ''  — Store second number as text",
          "@State var result: String = ''  — Store result",
          "VStack(spacing: 16) { }  — Stack items vertically with 16pt spacing",
          "TextField(...)  — Text input field",
          ".keyboardType(.decimalPad)  — Show number keyboard",
          "HStack { }  — Stack buttons horizontally",
          "Button('+') { performAdd() }  — Button that runs performAdd() when tapped",
          "guard let n1 = Double(firstNumber)  — Convert text to number safely",
          "result = String(n1 + n2)  — Calculate and show result",
          "",
          "8c) Run on Simulator:",
          "• Make sure simulator shows iPhone 15 Pro",
          "• Click the Play button (▶) at top-left",
          "• Wait 30 seconds for build to complete",
          "• Calculator app should appear on fake iPhone",
          "• Try entering numbers and clicking operators",
          "",
          "8d) Test All Features:",
          "• Click '+' button: Does result show correctly?",
          "• Click '−' button: Does it subtract?",
          "• Click '×' button: Does it multiply?",
          "• Click '÷' button: Does it divide? (Try dividing by zero - should show error)",
          "• Try with decimals (3.14 × 2 = 6.28)",
          "",
          "8e) Common Mistakes to Avoid:",
          "• Forgetting to use @State for variables that change",
          "• Using = instead of == in if statements",
          "• Forgetting $ when binding to TextField (should be \\$firstNumber, not firstNumber)",
          "• App crashes: Check the console at bottom for error messages",
          "",
          "═══ UNDERSTANDING COMPILATION & PREVIEW ═══",
          "",
          "As you type code, Xcode compiles it (converts to runnable code):",
          "• Green checkmark ✓ = No errors, app will run",
          "• Red X = Syntax error, fix before running",
          "• Yellow warning ⚠ = Not an error, but potential issue",
          "",
          "The Preview Canvas (right side) updates LIVE:",
          "• As you change code, preview updates automatically",
          "• Click 'Resume' if preview stops updating",
          "• This is a fast way to see your changes without running the full simulator",
          "",
          "═══ TROUBLESHOOTING FOR BEGINNERS ═══",
          "",
          "Problem: Simulator won't start / takes forever",
          "Solution: Close simulator. Restart Xcode. Try again. (First run takes 2–3 min)",
          "",
          "Problem: 'Cannot find 'ContentView' in scope' error",
          "Solution: You may have deleted important code. Click Edit → Undo recent changes",
          "",
          "Problem: Red error line in preview",
          "Solution: Click the small error icon 🔴 in preview. Xcode suggests a fix. Click 'Fix'",
          "",
          "Problem: App looks tiny / text unreadable",
          "Solution: Add .font(.headline) or .font(.title) to Text to make it bigger",
          "",
          "Problem: Button doesn't respond when clicked",
          "Solution: Make sure @State variables are used. Check that Button has onClick = { } handler",
          "",
          "═══ WHAT YOU'VE LEARNED (Beginner Summary) ═══",
          "",
          "✓ How to download and install Xcode on Mac",
          "✓ How to create a new iOS project from scratch",
          "✓ How to use the iOS Simulator (virtual iPhone)",
          "✓ Basic Swift syntax (variables, functions, control flow)",
          "✓ How to design UI with SwiftUI",
          "✓ How to make UI elements interactive (buttons, state management)",
          "✓ How to run and test your app",
          "✓ How to read compiler errors and fix them",
          "",
          "Next: Move to Intermediate to learn navigation between screens, APIs, and Core Data persistence.",
          ""
        ],
        code: `import SwiftUI

struct ContentView: View {
    @State var firstNumber: String = ""
    @State var secondNumber: String = ""
    @State var result: String = ""

    var body: some View {
        VStack(spacing: 16) {
            Text("Simple Calculator")
                .font(.title)
                .fontWeight(.bold)

            TextField("Enter first number", text: $firstNumber)
                .textFieldStyle(.roundedBorder)
                .keyboardType(.decimalPad)

            TextField("Enter second number", text: $secondNumber)
                .textFieldStyle(.roundedBorder)
                .keyboardType(.decimalPad)

            HStack(spacing: 8) {
                Button("+") { performAdd() }
                    .buttonStyle(.borderedProminent)
                Button("−") { performSubtract() }
                    .buttonStyle(.borderedProminent)
                Button("×") { performMultiply() }
                    .buttonStyle(.borderedProminent)
                Button("÷") { performDivide() }
                    .buttonStyle(.borderedProminent)
            }

            if !result.isEmpty {
                Text("Result: \(result)")
                    .font(.headline)
                    .foregroundColor(.green)
            }

            Spacer()
        }
        .padding()
    }

    func performAdd() {
        guard let n1 = Double(firstNumber),
              let n2 = Double(secondNumber) else { return }
        result = String(n1 + n2)
    }

    func performSubtract() {
        guard let n1 = Double(firstNumber),
              let n2 = Double(secondNumber) else { return }
        result = String(n1 - n2)
    }

    func performMultiply() {
        guard let n1 = Double(firstNumber),
              let n2 = Double(secondNumber) else { return }
        result = String(n1 * n2)
    }

    func performDivide() {
        guard let n1 = Double(firstNumber),
              let n2 = Double(secondNumber), n2 != 0 else {
            result = "Error: Cannot divide by zero"
            return
        }
        result = String(n1 / n2)
    }
}`,
      },
      {
        title: "Intermediate: Building Real Apps (Weeks 5–12)",
        content: [
          "Duration: 8 weeks | Time commitment: 20–25 hours/week",
          "Goal: Build a multi-screen app with data persistence, networking, and polished UI.",
          "",
          "Step 5: Master navigation and data flow.",
          "• Learn NavigationStack (iOS 16+) to navigate between screens.",
          "• Understand @ObservedObject and @EnvironmentObject for passing data between views.",
          "• Build a simple multi-screen app: Home screen → Detail screen → Settings screen.",
          "",
          "Step 6: Connect to APIs.",
          "• Learn URLSession for making HTTP requests.",
          "• Fetch live data from a public API (e.g., OpenWeatherMap for weather, REST countries for global data).",
          "• Decode JSON responses into Swift structs using Codable.",
          "• Handle errors gracefully (network failures, invalid data).",
          "• Display fetched data in your app UI.",
          "",
          "Step 7: Store data locally with Core Data.",
          "• Core Data is Apple's framework for persisting app data to the device.",
          "• Learn to create data models, save records, fetch records, update and delete records.",
          "• Example: A to-do app that saves tasks even after the app closes.",
          "",
          "Step 8: Polish the UI and user experience.",
          "• Learn layout techniques: padding, spacing, alignment, Geometry Reader for responsive design.",
          "• Use system colors and fonts that follow Apple's Human Interface Guidelines (HIG).",
          "• Add animations: fade-in, slide, scale transitions.",
          "• Test on multiple screen sizes (iPhone 14 mini, iPhone 14, iPhone 14 Pro Max).",
          "",
          "Step 9: Intermediate mini-project.",
          "• Project: Weather Forecast App.",
          "• Features:",
          "  - Search for a city and fetch weather data from OpenWeatherMap API.",
          "  - Display current temperature, conditions, humidity, wind speed.",
          "  - Save favorite cities using Core Data.",
          "  - Show a list of saved favorites with one-tap access.",
          "  - Use appropriate icons and colors based on weather conditions.",
          "  - Handle errors (city not found, network timeout) gracefully.",
          ""
        ],
        code: `import SwiftUI

struct ContentView: View {
    @StateObject var viewModel = WeatherViewModel()
    @State var city: String = ""

    var body: some View {
        NavigationStack {
            VStack(spacing: 16) {
                HStack {
                    TextField("Enter city name", text: $city)
                        .textFieldStyle(.roundedBorder)
                    Button("Search") {
                        viewModel.fetchWeather(for: city)
                    }
                    .buttonStyle(.borderedProminent)
                }
                .padding()

                if let weather = viewModel.weather {
                    VStack(alignment: .leading, spacing: 12) {
                        Text(weather.city)
                            .font(.title)
                            .fontWeight(.bold)
                        Text("Temperature: \(String(format: "%.1f", weather.temperature))°C")
                        Text("Condition: \(weather.condition)")
                        Text("Humidity: \(weather.humidity)%")
                        Text("Wind Speed: \(weather.windSpeed) m/s")
                    }
                    .padding()
                    .background(Color(.systemGray6))
                    .cornerRadius(8)
                }

                if let error = viewModel.errorMessage {
                    Text("Error: \(error)")
                        .foregroundColor(.red)
                }

                Spacer()
            }
            .padding()
            .navigationTitle("Weather Forecast")
        }
    }
}

// ViewModel for managing state and API calls
class WeatherViewModel: ObservableObject {
    @Published var weather: Weather?
    @Published var errorMessage: String?

    func fetchWeather(for city: String) {
        let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=\(city)&units=metric&appid=YOUR_API_KEY"
        
        guard let url = URL(string: apiURL.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "") else {
            errorMessage = "Invalid URL"
            return
        }

        URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                DispatchQueue.main.async {
                    self.errorMessage = error.localizedDescription
                }
                return
            }

            guard let data = data else {
                DispatchQueue.main.async {
                    self.errorMessage = "No data received"
                }
                return
            }

            do {
                let decoder = JSONDecoder()
                let weatherResponse = try decoder.decode(WeatherResponse.self, from: data)
                DispatchQueue.main.async {
                    self.weather = Weather(
                        city: weatherResponse.name,
                        temperature: weatherResponse.main.temp,
                        condition: weatherResponse.weather.first?.main ?? "Unknown",
                        humidity: weatherResponse.main.humidity,
                        windSpeed: weatherResponse.wind.speed
                    )
                    self.errorMessage = nil
                }
            } catch {
                DispatchQueue.main.async {
                    self.errorMessage = "Failed to decode response"
                }
            }
        }.resume()
    }
}

struct Weather {
    let city: String
    let temperature: Double
    let condition: String
    let humidity: Int
    let windSpeed: Double
}

// JSON Models
struct WeatherResponse: Codable {
    let name: String
    let main: MainWeather
    let weather: [WeatherCondition]
    let wind: Wind
}

struct MainWeather: Codable {
    let temp: Double
    let humidity: Int
}

struct WeatherCondition: Codable {
    let main: String
}

struct Wind: Codable {
    let speed: Double
}`,
      },
      {
        title: "Advanced: Production Apps & App Store (Weeks 13–16)",
        content: [
          "Duration: 4 weeks | Time commitment: 25–30 hours/week",
          "Goal: Build a portfolio-quality app and publish it to the App Store.",
          "",
          "Step 10: Advanced architecture patterns.",
          "• Learn MVVM (Model-View-ViewModel) architecture for scalable, testable code.",
          "• Understand dependency injection for flexible, modular code.",
          "• Learn async/await patterns for cleaner asynchronous code (async-let for parallel tasks).",
          "• Write unit tests using XCTest framework.",
          "",
          "Step 11: Advanced networking and data persistence.",
          "• Implement authentication (OAuth, JWT tokens).",
          "• Handle complex API workflows (pagination, retries, caching).",
          "• Learn CloudKit for syncing user data across devices.",
          "• Optimize database queries and understand N+1 query problems.",
          "",
          "Step 12: Advanced UI and animations.",
          "• Learn Canvas API for custom drawing.",
          "• Create advanced animations with motion, spring effects.",
          "• Implement gesture recognition (tap, swipe, pinch, drag).",
          "• Learn accessibility best practices (VoiceOver, dynamic type sizes).",
          "",
          "Step 13: Prepare for App Store submission.",
          "• Follow App Store Review Guidelines (content, functionality, design).",
          "• Create app icons, screenshots, and app preview videos.",
          "• Write compelling app descriptions and privacy policies.",
          "• Set up app categories, keywords, and pricing.",
          "• Understand TestFlight beta testing and review process.",
          "",
          "Step 14: Advanced mini-project.",
          "• Project: Social Photo Sharing App.",
          "• Features:",
          "  - User authentication (sign up, login, logout).",
          "  - Upload photos to a backend server (Firebase or your own server).",
          "  - Display a feed of all user photos with pagination.",
          "  - Like/unlike and comment on photos.",
          "  - User profiles showing all photos uploaded by a user.",
          "  - Core Data caching for offline viewing.",
          "  - Push notifications for new comments.",
          "  - Clean MVVM architecture with unit tests.",
          "• Polish: Smooth animations, error handling, loading states, empty states.",
          ""
        ],
        code: `import SwiftUI

// MVVM Architecture Example: Photo Feed
@MainActor
class PhotoFeedViewModel: ObservableObject {
    @Published var photos: [Photo] = []
    @Published var isLoading = false
    @Published var errorMessage: String?

    private let apiService: APIService
    private var currentPage = 1

    init(apiService: APIService = .shared) {
        self.apiService = apiService
    }

    func loadPhotos() {
        isLoading = true
        Task {
            do {
                let newPhotos = try await apiService.fetchPhotos(page: currentPage)
                photos.append(contentsOf: newPhotos)
                currentPage += 1
                isLoading = false
            } catch {
                errorMessage = error.localizedDescription
                isLoading = false
            }
        }
    }

    func likePhoto(_ photo: Photo) {
        Task {
            do {
                try await apiService.likePhoto(id: photo.id)
                if let index = photos.firstIndex(where: { $0.id == photo.id }) {
                    photos[index].isLiked = true
                    photos[index].likes += 1
                }
            } catch {
                errorMessage = "Failed to like photo"
            }
        }
    }
}

struct Photo: Codable, Identifiable {
    let id: String
    let username: String
    let imageURL: URL
    let caption: String
    let createdAt: Date
    var isLiked: Bool = false
    var likes: Int = 0

    enum CodingKeys: String, CodingKey {
        case id, username, imageURL = "image_url", caption
        case createdAt = "created_at"
        case isLiked = "is_liked"
        case likes
    }
}

struct PhotoFeedView: View {
    @StateObject var viewModel = PhotoFeedViewModel()

    var body: some View {
        NavigationStack {
            ZStack {
                if viewModel.photos.isEmpty && !viewModel.isLoading {
                    VStack {
                        Image(systemName: "photo.badge.exclamationmark")
                            .font(.system(size: 40))
                            .foregroundColor(.gray)
                        Text("No photos yet")
                    }
                } else {
                    ScrollView {
                        LazyVStack(spacing: 16) {
                            ForEach(viewModel.photos) { photo in
                                PhotoCard(photo: photo, onLike: {
                                    viewModel.likePhoto(photo)
                                })
                            }
                            
                            if viewModel.isLoading {
                                ProgressView()
                                    .padding()
                            }
                        }
                        .padding()
                    }
                    .onAppear { viewModel.loadPhotos() }
                }

                if let error = viewModel.errorMessage {
                    VStack {
                        Text("Error: \(error)")
                            .foregroundColor(.red)
                        Button("Retry") {
                            viewModel.errorMessage = nil
                            viewModel.loadPhotos()
                        }
                        .buttonStyle(.bordered)
                    }
                    .padding()
                    .background(Color(.systemRed).opacity(0.1))
                    .cornerRadius(8)
                }
            }
            .navigationTitle("Photo Feed")
        }
    }
}

struct PhotoCard: View {
    let photo: Photo
    let onLike: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Circle()
                    .fill(Color.blue.opacity(0.5))
                    .frame(width: 40, height: 40)
                    .overlay(Text(photo.username.prefix(1)).font(.bold))
                
                VStack(alignment: .leading) {
                    Text(photo.username).fontWeight(.bold)
                    Text(photo.createdAt.formatted(date: .abbreviated, time: .shortened))
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                Spacer()
            }

            AsyncImage(url: photo.imageURL) { phase in
                switch phase {
                case .empty:
                    ProgressView()
                        .frame(height: 200)
                case .success(let image):
                    image
                        .resizable()
                        .scaledToFill()
                        .frame(height: 200)
                        .clipped()
                case .failure:
                    Color.gray.frame(height: 200)
                @unknown default:
                    EmptyView()
                }
            }
            .cornerRadius(8)

            Text(photo.caption)
            
            HStack(spacing: 16) {
                Button(action: onLike) {
                    Image(systemName: photo.isLiked ? "heart.fill" : "heart")
                        .foregroundColor(photo.isLiked ? .red : .gray)
                }
                
                Text("\(photo.likes) likes")
                    .font(.caption)
                    .foregroundColor(.gray)
                
                Spacer()
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(8)
    }
}

// API Service Example
class APIService {
    static let shared = APIService()
    private let baseURL = "https://api.photoshare.example.com"

    func fetchPhotos(page: Int) async throws -> [Photo] {
        let url = URL(string: "\(baseURL)/photos?page=\(page)")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode([Photo].self, from: data)
    }

    func likePhoto(id: String) async throws {
        var request = URLRequest(url: URL(string: "\(baseURL)/photos/\(id)/like")!)
        request.httpMethod = "POST"
        request.setValue("Bearer \(getAuthToken())", forHTTPHeaderField: "Authorization")
        let _ = try await URLSession.shared.data(for: request)
    }

    private func getAuthToken() -> String {
        // Retrieve from Keychain or UserDefaults
        return UserDefaults.standard.string(forKey: "auth_token") ?? ""
    }
}`,
      },
      {
        title: "Key Technologies & Tools",
        content: [
          "Xcode: Apple's integrated development environment (IDE) for all app development.",
          "Swift: Apple's modern programming language (simpler and safer than older Objective-C).",
          "SwiftUI: Modern declarative UI framework for building interfaces with code.",
          "Core Data: Apple's framework for persisting data locally on the device.",
          "URLSession: Built-in networking framework for making HTTP requests to APIs.",
          "CloudKit: iCloud-based backend for syncing data across user devices.",
          "TestFlight: Apple's beta testing platform before App Store release.",
          "Xcode UI Preview: Real-time preview of your UI changes without running simulator.",
          "Git/GitHub: Version control to manage code and collaborate with other developers.",
        ],
      },
      {
        title: "Common Beginner Mistakes to Avoid",
        content: [
          "1. Ignoring SwiftUI documentation and learning old UIKit instead. Focus on SwiftUI for new projects.",
          "2. Building the entire app in one giant file. Split into separate files and use reusable components early.",
          "3. Not handling errors in networking code. Always handle connection failures, timeouts, and invalid data.",
          "4. Forgetting to ask for user permissions. Apps need explicit user permission for camera, location, contacts, calendar, etc.",
          "5. Submitting to App Store without testing on real devices. Simulator behavior differs from real iPhones.",
          "6. Hardcoding API keys and secrets. Always store sensitive data in Keychain or use backend services.",
          "7. Not following Apple's Human Interface Guidelines (HIG). Apps that don't follow HIG get rejected during review.",
          "8. Building on simulator only. Test on actual devices (iPhone, iPad) before submission.",
        ],
      },
      {
        title: "Project Roadmap by Level",
        content: [
          "Beginner Projects:",
          "• Simple Calculator (arithmetic operations).",
          "• To-Do List (add, delete, mark complete with Core Data storage).",
          "• Color Mixer (interactive RGB color picker).",
          "",
          "Intermediate Projects:",
          "• Weather Forecast App (API integration, location services).",
          "• Recipe Browser (search recipes, display details, save favorites).",
          "• Quote of the Day (fetch and display daily quotes with social sharing).",
          "",
          "Advanced Projects:",
          "• Social Photo Sharing App (authentication, backend API, real-time updates).",
          "• Fitness Tracker (HealthKit integration, location tracking, cloud sync).",
          "• Real-time Chat App (WebSocket or Firebase for messaging, push notifications).",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need a Mac to develop iOS apps?",
        answer:
          "Yes, you need a Mac with Xcode installed. You cannot develop iOS apps on Windows or Linux. However, you can use services like MacStadium or rent a Mac in the cloud."
      },
      {
        question: "Can I develop iOS apps without paying the $99 Developer fee?",
        answer:
          "Yes. You can develop and test apps on the Simulator for free. The $99/year fee is only required to deploy apps to real devices and publish on the App Store. It renews annually."
      },
      {
        question: "Is Swift hard to learn?",
        answer:
          "Swift is considered beginner-friendly compared to older languages. If you know basic programming concepts, you can start building apps within weeks. SwiftUI makes UI development even more approachable."
      },
      {
        question: "How long does it take to publish on the App Store?",
        answer:
          "After submitting, Apple typically reviews your app within 24–48 hours. If approved, it appears in the App Store within minutes. Rejections usually have clear reasons and can be resubmitted quickly."
      },
      {
        question: "What is TestFlight and why do I need it?",
        answer:
          "TestFlight is Apple's beta testing platform. You can invite up to 10,000 users to test your app before it goes live on the App Store. It catches bugs and gathers feedback early."
      },
      {
        question: "Can I publish my iOS app for free, or do I need to charge?",
        answer:
          "iOS apps can be completely free. You can also charge upfront, offer in-app purchases, or use ad-based monetization. Apple takes a 30% cut of paid app sales and in-app purchases."
      },
      {
        question: "What should my first iOS app be?",
        answer:
          "Start small: a calculator, to-do list, or habit tracker. These teach you SwiftUI basics without overwhelming complexity. Publish it to the App Store to build your portfolio."
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────────
  // ANDROID MOBILE APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "android-mobile-app-development",
    title: "Android App Development from Scratch: Beginner to Advanced",
    description:
      "Learn Android app development from beginner to advanced. Master Kotlin, Jetpack Compose, APIs, Room database, and Google Play Store publishing in a complete roadmap.",
    intro:
      "Android is the world's most popular mobile operating system, powering over 3 billion devices. This page guides you from zero knowledge through publishing your first app on Google Play Store. You'll learn Kotlin (Google's recommended programming language for Android), build modern UIs with Jetpack Compose, work with APIs, persist data with Room database, and navigate the entire app submission process.",
    badge: "Mobile Platform",
    sections: [
      {
        title: "Why Learn Android Development?",
        content: [
          "Android dominates global mobile market share (70%+) across smartphones, tablets, and wearables. Developers skilled in Android face strong job demand and competitive compensation ($90k–$170k+ depending on experience).",
          "Google provides excellent documentation, tools, and libraries. Android Studio (the IDE) is free, powerful, and constantly updated with modern development patterns.",
          "Android's open ecosystem attracts independent developers and startups. Google Play Store is more permissive than Apple App Store, making it easier to publish and experiment.",
          "Learning Android teaches you patterns (dependency injection, reactive programming, architecture) that transfer to backend and web development."
        ],
      },
      {
        title: "Beginner: Foundations (Weeks 1–4)",
        content: [
          "Duration: 4 weeks | Time commitment: 15–20 hours/week",
          "Goal: Build your first app that displays text, buttons, and responds to user interaction.",
          "",
          "═══ STEP 1: INSTALL ANDROID STUDIO (2–3 hours) ═══",
          "",
          "What is Android Studio? It's a free tool made by Google that lets you write and test Android apps on your computer.",
          "",
          "1a) Download Android Studio:",
          "• Go to https://developer.android.com/studio",
          "• Click 'Download Android Studio' button",
          "• Choose your operating system (Windows, Mac, or Linux)",
          "• The file is ~1–2 GB, so download on a good internet connection",
          "",
          "1b) Install Android Studio:",
          "• Run the downloaded installer (.exe on Windows, .dmg on Mac)",
          "• Follow the setup wizard (click 'Next' on most screens)",
          "• When asked about components to install: SELECT ALL (SDK tools, emulator, platform tools)",
          "• This takes 10–15 minutes",
          "",
          "1c) Verify the Installation:",
          "• Open Android Studio after installation completes",
          "• You should see the 'Welcome' screen with options to create a new project",
          "• This means installation was successful",
          "",
          "1d) What's inside Android Studio? (Overview of the tool)",
          "• Text Editor: Where you write code (left side)",
          "• Design Preview: Shows how your app looks (right side)",
          "• Build Tools: Hidden button in bottom toolbar to compile your code",
          "• Emulator: A fake phone that runs inside your computer (like a virtual machine)",
          "",
          "═══ STEP 2: CREATE YOUR FIRST PROJECT (20 minutes) ═══",
          "",
          "2a) Start a New Project:",
          "• Open Android Studio",
          "• Click 'New Project'",
          "• Select 'Empty Activity' template (simplest option)",
          "• Click 'Next'",
          "",
          "2b) Name Your Project:",
          "• Project Name: 'MyFirstApp'",
          "• Save Location: Leave as default",
          "• Package Name: Leave as default (com.example.myfirstapp)",
          "• Language: Choose 'Kotlin' (Google's recommended language for Android)",
          "• Click 'Finish'",
          "",
          "2c) Wait for the Project to Build:",
          "• Android Studio will download and install more files (~5–10 minutes)",
          "• You'll see a progress bar at the bottom. Don't close it.",
          "• Once done, you'll see code on the left side (that's your Kotlin code)",
          "",
          "2d) Understand Your Project Structure:",
          "• app/src/main/kotlin/ — Your Kotlin code goes here",
          "• app/src/main/AndroidManifest.xml — Tells Android about your app (name, permissions, etc.)",
          "• build.gradle — Lists what libraries your app needs",
          "• res/drawable, res/values — Images and colors for your app",
          "",
          "═══ STEP 3: SET UP THE EMULATOR (Virtual Phone) (15 minutes) ═══",
          "",
          "What is the Emulator? A fake phone running inside your computer. You test your app here before publishing.",
          "",
          "3a) Create a Virtual Device:",
          "• In Android Studio, click 'Tools' → 'Device Manager'",
          "• Click '+ Create Device'",
          "• Select 'Pixel 4' (a standard smartphone size)",
          "• Click 'Next'",
          "• Select 'API Level 34' (the latest stable Android version)",
          "• Click 'Next' and then 'Finish'",
          "",
          "3b) Start the Emulator:",
          "• In Device Manager, find 'Pixel 4 API 34'",
          "• Click the Play button (▶) on the right",
          "• A fake phone will open in a new window (~2–3 minutes to start)",
          "• Let it fully boot (you'll see the Android home screen)",
          "",
          "═══ STEP 4: LEARN KOTLIN BASICS (Week 1: 5–7 hours) ═══",
          "",
          "Kotlin is the language you'll use to program Android. It's beginner-friendly if you learn these basics:",
          "",
          "Concept 1: Variables (storing information)",
          "• val myAge = 25  — Can't change after creation",
          "• var myName = 'Arjun'  — Can change (use for changing values)",
          "• String, Int, Double, Boolean are data types (what kind of information)",
          "",
          "Concept 2: Functions (reusable blocks of code)",
          "fun greet(name: String) {",
          "    println('Hello, \$name!')",
          "}",
          "This function takes a name and prints a greeting.",
          "",
          "Concept 3: if/else statements (making decisions)",
          "if (age >= 18) {",
          "    println('You can vote')",
          "} else {",
          "    println('You cannot vote')",
          "}",
          "",
          "Concept 4: Collections (storing lists of things)",
          "val fruits = listOf('Apple', 'Banana', 'Orange')  — Read-only list",
          "val colors = mutableListOf('Red', 'Blue')  — Can add/remove items",
          "colors.add('Green')  — Add item",
          "",
          "Concept 5: Null Safety (handling missing data)",
          "var phone: String? = null  — Can be null (nothing)",
          "var name: String = 'Arjun'  — Must have a value",
          "val phoneLength = phone?.length  — Safely check if phone exists",
          "",
          "═══ STEP 5: LEARN JETPACK COMPOSE (Week 2: 5–7 hours) ═══",
          "",
          "Jetpack Compose is how you build the visual part of your app (buttons, text, colors, layout).",
          "",
          "Concept 1: Composables (building blocks for UI)",
          "@Composable",
          "fun MyApp() {",
          "    Text('Hello, Android!')",
          "}",
          "The @Composable decorator tells Android 'this is UI code'.",
          "",
          "Concept 2: Layouts (arranging UI elements)",
          "Column — Stacks items vertically (top to bottom)",
          "Row — Arranges items horizontally (left to right)",
          "Box — Overlays items on top of each other",
          "",
          "Concept 3: Common UI Components",
          "• Text('Hello') — Displays text",
          "• Button(onClick = { }) { Text('Click me') } — Clickable button",
          "• TextField(value, onValueChange) — Text input box",
          "• Image(painter, contentDescription) — Display a picture",
          "",
          "Concept 4: State Management (making UI react to changes)",
          "var count = remember { mutableStateOf(0) }",
          "Button(onClick = { count.value++ }) { Text('Clicks: \${count.value}') }",
          "When count changes, the button text updates automatically.",
          "",
          "Concept 5: Modifiers (styling UI elements)",
          "Text(",
          "    'Hello',",
          "    modifier = Modifier",
          "        .padding(16.dp)        // Add spacing around text",
          "        .background(Color.Blue) // Blue background",
          "        .fillMaxWidth()         // Use full width of screen",
          ")",
          "",
          "═══ STEP 6: BUILD YOUR FIRST APP - COUNTER APP (Weeks 3–4: 8–10 hours) ═══",
          "",
          "Project: A simple counter app that:",
          "• Shows a number on screen",
          "• Has a + button to increase the number",
          "• Has a − button to decrease the number",
          "• Has a Reset button to set number back to 0",
          "",
          "Step-by-step guide to building it:",
          "",
          "6a) Replace the default code:",
          "• Open MainActivity.kt",
          "• Delete all the existing code inside the @Composable fun MainActivity() { } function",
          "• Copy the Counter App code (provided below)",
          "",
          "6b) Understand what the code does (line by line):",
          "var count = remember { mutableStateOf(0) } — Create a variable 'count' that starts at 0",
          "Column { } — Stack all UI elements vertically",
          "Text('Counter App') — Display title",
          "Text(count.toString()) — Show the counter number",
          "Button(onClick = { count-- }) { } — When clicked, decrease count by 1",
          "Button(onClick = { count++ }) { } — When clicked, increase count by 1",
          "Button(onClick = { count = 0 }) { } — When clicked, reset to 0",
          "",
          "6c) Test the app on the Emulator:",
          "• In Android Studio, click the green ▶ (Run) button at the top",
          "• Choose the emulator device you created",
          "• Wait 2–3 minutes for the app to build and run",
          "• You should see your Counter App appear on the fake phone",
          "• Click the buttons and watch the number change",
          "",
          "6d) Common mistakes to avoid:",
          "• Forgetting @Composable decorator above your function",
          "• Using var instead of remember { mutableStateOf() } for state",
          "• Forgetting to set onClick behavior on buttons",
          "• App is slow / crashes: Check the Logcat (Messages) tab at bottom for errors",
          "",
          "═══ TROUBLESHOOTING FOR BEGINNERS ═══",
          "",
          "Problem: 'Cannot run application. No module selected'",
          "Solution: Right-click the 'app' folder → Select 'Run'",
          "",
          "Problem: Emulator takes forever to start",
          "Solution: This is normal first time (~5–10 min). Close it and click Run again (faster 2nd time)",
          "",
          "Problem: Code has red underlines (errors)",
          "Solution: Click the lightbulb icon 💡 that appears, select 'Import' to fix automatically",
          "",
          "Problem: App looks ugly / text is too small",
          "Solution: Use Modifier.padding() and Modifier.fontSize() to adjust",
          "",
          "═══ WHAT YOU'VE LEARNED (Beginner Summary) ═══",
          "",
          "✓ How to download and install Android Studio",
          "✓ How to create a new project from scratch",
          "✓ How to use the Android Emulator (virtual phone)",
          "✓ Basic Kotlin syntax (variables, functions, if/else)",
          "✓ How to design UI with Jetpack Compose",
          "✓ How to make UI elements interactive (buttons that do things)",
          "✓ How to run your app and test it",
          "",
          "Next: Move to Intermediate to learn navigation, APIs, and databases.",
          ""
        ],
        code: `import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*

@Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Counter App",
            style = MaterialTheme.typography.headlineLarge,
            modifier = Modifier.padding(bottom = 24.dp)
        )

        Text(
            text = count.toString(),
            style = MaterialTheme.typography.displayMedium,
            modifier = Modifier.padding(bottom = 32.dp)
        )

        Row(
            modifier = Modifier.padding(bottom = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Button(
                onClick = { count-- },
                modifier = Modifier.weight(1f)
            ) {
                Text("−")
            }

            Button(
                onClick = { count++ },
                modifier = Modifier.weight(1f)
            ) {
                Text("+")
            }
        }

        Button(
            onClick = { count = 0 },
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 32.dp)
        ) {
            Text("Reset")
        }
    }
}`,
      },
      {
        title: "Intermediate: Building Real Apps (Weeks 5–12)",
        content: [
          "Duration: 8 weeks | Time commitment: 20–25 hours/week",
          "Goal: Build a multi-screen app with data persistence, networking, and polished UI.",
          "",
          "Step 5: Master navigation between screens.",
          "• Learn Jetpack Navigation component for managing screen transitions.",
          "• Understand navigation graph: define routes, pass arguments between screens.",
          "• Build a multi-screen app: Home → Detail → Settings.",
          "",
          "Step 6: Connect to APIs and handle networking.",
          "• Learn Retrofit library for clean, type-safe HTTP requests.",
          "• Understand JSON serialization with Gson or Kotlinx Serialization.",
          "• Fetch data from public APIs (e.g., OpenWeatherMap, REST Countries).",
          "• Handle errors: network timeouts, invalid responses, server errors.",
          "• Use coroutines for asynchronous tasks without blocking UI.",
          "",
          "Step 7: Persist data locally with Room database.",
          "• Room is Google's abstraction layer over SQLite for type-safe database access.",
          "• Create Entity classes (data models), DAOs (database operations), and Database class.",
          "• Save, query, update, and delete records.",
          "• Example: A to-do app that saves tasks even after closing.",
          "",
          "Step 8: Polish UI and user experience.",
          "• Learn Material 3 design system for modern, accessible UI.",
          "• Use padding, spacing, shapes, colors following Material 3 guidelines.",
          "• Add animations: fade, slide, scale transitions using transitions API.",
          "• Test on multiple screen sizes: small phones, tablets, foldables.",
          "",
          "Step 9: Intermediate mini-project.",
          "• Project: Weather Forecast App.",
          "• Features:",
          "  - Search for city name and fetch weather from OpenWeatherMap API.",
          "  - Display current temp, condition, humidity, wind speed.",
          "  - Save favorite cities to Room database.",
          "  - Show list of saved favorites with quick access.",
          "  - Use appropriate icons and colors for weather conditions.",
          "  - Handle errors and loading states.",
          ""
        ],
        code: `import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlin.math.roundToInt

@Composable
fun WeatherScreen(viewModel: WeatherViewModel = viewModel()) {
    val weather by viewModel.weather.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    val errorMessage by viewModel.errorMessage.collectAsState()
    var cityInput by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Search Bar
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            TextField(
                value = cityInput,
                onValueChange = { cityInput = it },
                label = { Text("Enter city") },
                modifier = Modifier.weight(1f)
            )
            Button(onClick = { viewModel.fetchWeather(cityInput) }) {
                Text("Search")
            }
        }

        // Loading Indicator
        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.padding(24.dp))
        }

        // Error Message
        errorMessage?.let {
            Text(
                text = "Error: \$it",
                color = MaterialTheme.colorScheme.error,
                modifier = Modifier.padding(bottom = 16.dp)
            )
        }

        // Weather Info
        weather?.let { w ->
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp)
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = w.city,
                        style = MaterialTheme.typography.headlineMedium,
                        modifier = Modifier.padding(bottom = 12.dp)
                    )
                    Text("\${w.temperature.roundToInt()}°C")
                    Text(w.condition)
                    Text("Humidity: \${w.humidity}%")
                    Text("Wind: \${w.windSpeed} m/s")
                }
            }
        }

        Spacer(modifier = Modifier.weight(1f))
    }
}

// ViewModel handling business logic
class WeatherViewModel : ViewModel() {
    private val _weather = MutableStateFlow<Weather?>(null)
    val weather = _weather.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading = _isLoading.asStateFlow()

    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage = _errorMessage.asStateFlow()

    fun fetchWeather(city: String) {
        viewModelScope.launch {
            _isLoading.value = true
            try {
                val response = RetrofitClient.apiService.getWeather(city)
                _weather.value = Weather(
                    city = response.name,
                    temperature = response.main.temp,
                    condition = response.weather.firstOrNull()?.main ?: "Unknown",
                    humidity = response.main.humidity,
                    windSpeed = response.wind.speed
                )
                _errorMessage.value = null
            } catch (e: Exception) {
                _errorMessage.value = e.message
            } finally {
                _isLoading.value = false
            }
        }
    }
}

data class Weather(
    val city: String,
    val temperature: Double,
    val condition: String,
    val humidity: Int,
    val windSpeed: Double
)

// Retrofit setup
interface WeatherApi {
    @GET("weather")
    suspend fun getWeather(
        @Query("q") city: String,
        @Query("units") units: String = "metric",
        @Query("appid") apiKey: String = "YOUR_API_KEY"
    ): WeatherResponse
}

data class WeatherResponse(
    val name: String,
    val main: MainWeather,
    val weather: List<WeatherCondition>,
    val wind: Wind
)

data class MainWeather(val temp: Double, val humidity: Int)
data class WeatherCondition(val main: String)
data class Wind(val speed: Double)

object RetrofitClient {
    val apiService: WeatherApi by lazy {
        Retrofit.Builder()
            .baseUrl("https://api.openweathermap.org/data/2.5/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(WeatherApi::class.java)
    }
}`,
      },
      {
        title: "Advanced: Production Apps & Google Play (Weeks 13–16)",
        content: [
          "Duration: 4 weeks | Time commitment: 25–30 hours/week",
          "Goal: Build a portfolio-quality app and publish it on Google Play Store.",
          "",
          "Step 10: Advanced architecture patterns.",
          "• Learn MVVM (Model-View-ViewModel) using Jetpack libraries.",
          "• Understand dependency injection with Hilt framework.",
          "• Learn coroutines and Flow for reactive, non-blocking code.",
          "• Write unit tests using JUnit and Mockk.",
          "• Write UI tests using Compose Testing.",
          "",
          "Step 11: Advanced networking and data persistence.",
          "• Implement user authentication (OAuth, JWT tokens).",
          "• Handle complex API workflows (pagination, retry logic, caching).",
          "• Learn data sync between local database and remote server.",
          "• Optimize queries and understand best practices for Room.",
          "• Use DataStore for app preferences (replaces SharedPreferences).",
          "",
          "Step 12: Advanced UI and animations.",
          "• Master Jetpack Compose modifiers and layout system.",
          "• Create complex animations with AnimatedVisibility, animateAsState.",
          "• Handle gestures: click, swipe, pinch, long-press.",
          "• Learn accessibility: content descriptions, semantic properties.",
          "• Follow Material 3 design guidelines for modern look.",
          "",
          "Step 13: Prepare for Google Play submission.",
          "• Follow Google Play app policies (content, functionality, behavior).",
          "• Create app icon, screenshots, and promotional graphics.",
          "• Write app description, privacy policy, and release notes.",
          "• Set up app categories, target audience, content rating.",
          "• Understand Google Play's app review process (usually 1–4 hours).",
          "",
          "Step 14: Advanced mini-project.",
          "• Project: Social Photo Sharing App.",
          "• Features:",
          "  - Firebase Authentication (email, Google sign-in).",
          "  - Upload photos to Firebase Storage and Firestore.",
          "  - Display feed with infinite scroll pagination.",
          "  - Like, comment, follow users.",
          "  - Room database for offline caching.",
          "  - Cloud Firestore for real-time updates.",
          "  - Push notifications using Firebase Cloud Messaging.",
          "  - Complete MVVM architecture with Hilt and Unit tests.",
          "• Polish: Smooth animations, proper error handling, loading states.",
          ""
        ],
        code: `import androidx.hilt.navigation.compose.hiltViewModel
import androidx.lifecycle.ViewModel
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject

// MVVM Architecture with Hilt: Photo Feed
@HiltViewModel
class PhotoFeedViewModel @Inject constructor(
    private val photoRepository: PhotoRepository
) : ViewModel() {
    private val _photos = MutableStateFlow<List<Photo>>(emptyList())
    val photos = _photos.asStateFlow()

    private val _isLoading = MutableStateFlow(false)
    val isLoading = _isLoading.asStateFlow()

    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage = _errorMessage.asStateFlow()

    fun loadPhotos() {
        viewModelScope.launch {
            _isLoading.value = true
            try {
                val result = photoRepository.fetchPhotos()
                _photos.value = result
            } catch (e: Exception) {
                _errorMessage.value = e.message
            } finally {
                _isLoading.value = false
            }
        }
    }

    fun likePhoto(photoId: String) {
        viewModelScope.launch {
            try {
                photoRepository.likePhoto(photoId)
                val updated = _photos.value.map { photo ->
                    if (photo.id == photoId) {
                        photo.copy(isLiked = true, likes = photo.likes + 1)
                    } else photo
                }
                _photos.value = updated
            } catch (e: Exception) {
                _errorMessage.value = "Failed to like photo"
            }
        }
    }
}

@Composable
fun PhotoFeedScreen(viewModel: PhotoFeedViewModel = hiltViewModel()) {
    val photos by viewModel.photos.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    val errorMessage by viewModel.errorMessage.collectAsState()

    LaunchedEffect(Unit) {
        viewModel.loadPhotos()
    }

    Box(modifier = Modifier.fillMaxSize()) {
        if (photos.isEmpty() && !isLoading) {
            Text("No photos", modifier = Modifier.align(Alignment.Center))
        } else {
            LazyColumn {
                items(photos) { photo ->
                    PhotoCard(
                        photo = photo,
                        onLike = { viewModel.likePhoto(photo.id) }
                    )
                }
            }
        }

        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.Center))
        }

        errorMessage?.let {
            Text(
                text = "Error: $it",
                color = Color.Red,
                modifier = Modifier
                    .align(Alignment.TopCenter)
                    .padding(16.dp)
            )
        }
    }
}

@Composable
fun PhotoCard(photo: Photo, onLike: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    modifier = Modifier
                        .size(40.dp)
                        .clip(CircleShape),
                    color = MaterialTheme.colorScheme.primary
                ) {}
                
                Column(modifier = Modifier.padding(start = 8.dp)) {
                    Text(photo.username, fontWeight = FontWeight.Bold)
                    Text(
                        photo.createdAt,
                        style = MaterialTheme.typography.labelSmall,
                        color = Color.Gray
                    )
                }
            }

            AsyncImage(
                model = photo.imageUrl,
                contentDescription = photo.caption,
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(300.dp)
                    .clip(RoundedCornerShape(8.dp)),
            )

            Text(
                photo.caption,
                modifier = Modifier.padding(top = 8.dp)
            )

            Row(
                modifier = Modifier
                    .padding(top = 8.dp)
                    .fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = onLike) {
                    Icon(
                        imageVector = if (photo.isLiked)
                            Icons.Filled.Favorite else Icons.Outlined.Favorite,
                        contentDescription = "Like",
                        tint = if (photo.isLiked) Color.Red else Color.Gray
                    )
                }
                Text("\${photo.likes} likes")
            }
        }
    }
}

@Entity(tableName = "photos")
data class Photo(
    @PrimaryKey val id: String,
    val username: String,
    val imageUrl: String,
    val caption: String,
    val createdAt: String,
    val isLiked: Boolean = false,
    val likes: Int = 0
)

// Repository pattern
class PhotoRepository(
    private val photoDao: PhotoDao,
    private val apiService: PhotoApiService
) {
    suspend fun fetchPhotos(): List<Photo> {
        return try {
            val photos = apiService.getPhotos()
            photoDao.insertPhotos(photos)
            photos
        } catch (e: Exception) {
            photoDao.getAllPhotos()
        }
    }

    suspend fun likePhoto(photoId: String) {
        apiService.likePhoto(photoId)
    }
}

@Dao
interface PhotoDao {
    @Query("SELECT * FROM photos ORDER BY createdAt DESC")
    suspend fun getAllPhotos(): List<Photo>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertPhotos(photos: List<Photo>)
}

interface PhotoApiService {
    @GET("photos")
    suspend fun getPhotos(): List<Photo>

    @POST("photos/{id}/like")
    suspend fun likePhoto(@Path("id") photoId: String)
}

// Hilt Module
@Module
@InstallIn(SingletonComponent::class)
object RepositoryModule {
    @Provides
    @Singleton
    fun providePhotoRepository(
        photoDao: PhotoDao,
        apiService: PhotoApiService
    ): PhotoRepository = PhotoRepository(photoDao, apiService)
}`,
      },
      {
        title: "Key Technologies & Tools",
        content: [
          "Android Studio: Google's official IDE (free, includes emulator and tools).",
          "Kotlin: Google's recommended language for Android (modern, concise, null-safe).",
          "Jetpack Compose: Modern declarative UI toolkit (replaces older XML-based layouts).",
          "Room: Type-safe database abstraction for SQLite persistence.",
          "Retrofit: Type-safe HTTP client for API calls.",
          "Hilt: Dependency injection framework for cleaner architecture.",
          "Jetpack Navigation: Component for managing screen transitions.",
          "Flow & Coroutines: Reactive programming for async tasks without blocking UI.",
          "Firebase: Backend services (Authentication, Firestore, Cloud Storage, Messaging).",
          "Google Play Store: Distribution platform for publishing apps.",
        ],
      },
      {
        title: "Common Beginner Mistakes to Avoid",
        content: [
          "1. Building UI with old XML layouts instead of Jetpack Compose. Compose is the modern standard.",
          "2. Performing network calls on the main thread. Always use coroutines or async/await.",
          "3. Not handling permissions. Apps need user permission for camera, location, contacts, etc.",
          "4. Ignoring lifecycle: Activities and Fragments have lifecycles. Don't leak resources.",
          "5. Hardcoding API keys. Store sensitive data securely or use backend.",
          "6. Not testing on real devices. Emulator behavior differs from actual Android phones.",
          "7. Submitting without privacy policy and clear app description. Google Play requires these.",
          "8. Ignoring Material 3 design guidelines. Apps not following Material Design get rejected.",
          "9. Not handling the back button. Implement proper back navigation.",
          "10. Building everything in one massive Activity/Screen file. Split into reusable components.",
        ],
      },
      {
        title: "Project Roadmap by Level",
        content: [
          "Beginner Projects:",
          "• Counter App (increment/decrement buttons, state management).",
          "• To-Do List (add tasks, mark done, delete with Room database).",
          "• Color Mixer (RGB sliders for interactive color selection).",
          "",
          "Intermediate Projects:",
          "• Weather Forecast App (Retrofit API calls, Compose UI, error handling).",
          "• Movie Browser (search movies, display details, save favorites).",
          "• Quote of the Day (daily quotes display, share feature, local caching).",
          "",
          "Advanced Projects:",
          "• Social Photo Sharing (Firebase auth, photo upload, real-time feed, MVVM + Hilt).",
          "• Fitness Tracker (Google Fit integration, workout logging, cloud sync).",
          "• Chat Application (Firebase Firestore real-time messaging, push notifications).",
        ],
      },
    ],
    faq: [
      {
        question: "Can I develop Android apps on Windows or Mac?",
        answer:
          "Yes! Android Studio works on Windows, Mac, and Linux. You can develop Android apps on any operating system."
      },
      {
        question: "Do I need to pay to publish on Google Play Store?",
        answer:
          "Yes, a one-time $25 fee is required to set up a Google Play Developer Account. After that, you can publish unlimited apps for free. There are no recurring fees."
      },
      {
        question: "Is Kotlin hard to learn?",
        answer:
          "Kotlin is beginner-friendly and often easier than Java. It has cleaner syntax, built-in null safety, and excellent documentation. If you know basic programming, you can start building apps within weeks."
      },
      {
        question: "How long does it take Google to review my app?",
        answer:
          "Google Play review is usually fast, taking 1–4 hours. If approved, your app appears in the store within minutes. If rejected, the reason is clearly stated and you can resubmit quickly."
      },
      {
        question: "What is the difference between Jetpack Compose and XML layouts?",
        answer:
          "Compose is modern, declarative, and code-based. XML is older, imperative, and separated from code. Compose is Google's recommended approach for new projects and is easier to learn."
      },
      {
        question: "Can I build cross-platform apps with Android?",
        answer:
          "Android specifically targets Android devices. For cross-platform (Android + iOS) development, consider React Native, Flutter, or Kotlin Multiplatform Mobile (KMM)."
      },
      {
        question: "What should my first Android app be?",
        answer:
          "Start small: a counter, to-do list, or simple note app. These teach Compose and state management basics. Publish it to Google Play to build your portfolio."
      }
    ]
  },
];