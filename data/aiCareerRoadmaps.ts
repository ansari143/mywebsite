export type ResourceProvider = "Udemy" | "LinkedIn Learning";

export type RoadmapResource = {
  title: string;
  provider: ResourceProvider;
  level: "Beginner" | "Intermediate" | "Advanced";
  url: string;
};

export type RoadmapStep = {
  step: number;
  phase: string;
  skillArea: string;
  whatYouLearn: string;
  whyItMatters: string;
  recommendedResource: string;
};

export type Certification = {
  name: string;
  description: string;
};

export type SkillLevel = {
  label: "Beginner" | "Intermediate" | "Advanced";
  percentage: number;
  estimatedDuration: string;
};

export type CareerRoadmap = {
  id: string;
  category: "Engineering" | "Quality" | "Operations" | "Management" | "Analysis" | "Product";
  currentRole: string;
  futureRole: string;
  careerOverview: string;
  skillsNeeded: string[];
  learningTimeline: string;
  toolsUsed: string[];
  recommendedCertifications: Certification[];
  skillLevels: SkillLevel[];
  practiceProjects: string[];
  roadmapSteps: RoadmapStep[];
  resources: Record<ResourceProvider, RoadmapResource[]>;
};

const roleResources: Record<string, Record<ResourceProvider, RoadmapResource[]>> = {
  "ai-engineer": {
    Udemy: [
      { title: "Complete Python Bootcamp", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/complete-python-bootcamp/" },
      { title: "The Complete Web Development Bootcamp", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
      { title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/" },
    ],
    "LinkedIn Learning": [
      { title: "Python Essential Training", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/python-essential-training-18764650" },
      { title: "React.js Essential Training", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/react-js-essential-training" },
      { title: "Generative AI: Working with Large Language Models", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/generative-ai-working-with-large-language-models" },
    ],
  },
  "ai-qa": {
    Udemy: [
      { title: "Selenium WebDriver with Java - Basics to Advanced", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/selenium-webdriver-java-testng-framework/" },
      { title: "REST API Testing with Rest Assured", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/rest-api-testing-rest-assured-java/" },
      { title: "Playwright JS/TS Automation Testing from Scratch & Framework", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/playwright-tutorials-automation-testing/" },
    ],
    "LinkedIn Learning": [
      { title: "Test Automation Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/test-automation-foundations" },
      { title: "Selenium Essential Training", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/selenium-essential-training" },
      { title: "Software Testing Foundations: Test Management", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/software-testing-foundations-test-management" },
    ],
  },
  "ai-devops": {
    Udemy: [
      { title: "Docker and Kubernetes: The Complete Guide", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" },
      { title: "Learn Kubernetes for Beginners", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/learn-kubernetes/" },
      { title: "DevOps Beginners to Advanced with Projects", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/devops-beginners-to-advanced-with-projects/" },
    ],
    "LinkedIn Learning": [
      { title: "DevOps Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/devops-foundations" },
      { title: "Learning Docker", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/learning-docker-2" },
      { title: "Learning Kubernetes", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/learning-kubernetes" },
    ],
  },
  "ai-pm": {
    Udemy: [
      { title: "PMP Exam Prep Seminar", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/pmp-pmbok6-35-pdus/" },
      { title: "Agile Crash Course: Agile Project Management", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/agile-crash-course-agile-project-management-agile-delivery/" },
      { title: "Jira for Beginners: Project Management Course", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/jira-for-beginners-project-management-course/" },
    ],
    "LinkedIn Learning": [
      { title: "Project Management Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/project-management-foundations-4" },
      { title: "Agile Foundations", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/agile-foundations" },
      { title: "Jira Software Essential Training", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/jira-software-essential-training" },
    ],
  },
  "ai-ba": {
    Udemy: [
      { title: "Business Analysis Fundamentals", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/business-analysis-fundamentals/" },
      { title: "SQL for Data Analysis", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/sql-for-data-analysis-with-google-bigquery/" },
      { title: "Requirements Elicitation and Analysis", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/requirements-elicitation-and-analysis/" },
    ],
    "LinkedIn Learning": [
      { title: "Business Analysis Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/business-analysis-foundations" },
      { title: "Learning SQL Programming", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/learning-sql-programming" },
      { title: "Requirements Elicitation for Business Analysts", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/requirements-elicitation-for-business-analysts" },
    ],
  },
  "ai-scrum-master": {
    Udemy: [
      { title: "Scrum Certification Prep + Scrum Master + Agile Scrum", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/scrum-certification/" },
      { title: "Agile Scrum Master Certification", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/agile-scrum-master-certification/" },
      { title: "Scrum Master Certification Prep and Practice", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/scrum-master-certification-preparation-mock-exams/" },
    ],
    "LinkedIn Learning": [
      { title: "Scrum: The Basics", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/scrum-the-basics" },
      { title: "Agile Foundations", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/agile-foundations" },
      { title: "Leading Agile Teams", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/leading-agile-teams" },
    ],
  },
  "ai-delivery-manager": {
    Udemy: [
      { title: "Program Management Fundamentals", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/program-management-fundamentals/" },
      { title: "Project Portfolio Management Foundations", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/project-portfolio-management-foundations/" },
      { title: "Power BI A-Z: Hands-On Power BI Training", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/" },
    ],
    "LinkedIn Learning": [
      { title: "Program Management Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/program-management-foundations" },
      { title: "Managing Projects", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/managing-projects" },
      { title: "Power BI Essential Training", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/power-bi-essential-training" },
    ],
  },
  "ai-tpm": {
    Udemy: [
      { title: "Technical Program Management", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/technical-program-management/" },
      { title: "System Design Interview Prep", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/system-design-interview-prep/" },
      { title: "Software Architecture and System Design", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems/" },
    ],
    "LinkedIn Learning": [
      { title: "Technical Program Management Foundations", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/technical-program-management-foundations" },
      { title: "Software Architecture Foundations", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/software-architecture-foundations" },
      { title: "Cloud Architecture: Core Concepts", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/cloud-architecture-core-concepts" },
    ],
  },
  "ai-product-manager": {
    Udemy: [
      { title: "Become a Product Manager", provider: "Udemy", level: "Beginner", url: "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/" },
      { title: "Product Management 101", provider: "Udemy", level: "Intermediate", url: "https://www.udemy.com/course/product-management-101/" },
      { title: "Advanced Product Management", provider: "Udemy", level: "Advanced", url: "https://www.udemy.com/course/advanced-product-management-vision-strategy-metrics-innovation/" },
    ],
    "LinkedIn Learning": [
      { title: "Product Management First Steps", provider: "LinkedIn Learning", level: "Beginner", url: "https://www.linkedin.com/learning/product-management-first-steps" },
      { title: "Building a Product Roadmap", provider: "LinkedIn Learning", level: "Intermediate", url: "https://www.linkedin.com/learning/product-management-building-a-product-roadmap" },
      { title: "Product Management: Building a Product Strategy", provider: "LinkedIn Learning", level: "Advanced", url: "https://www.linkedin.com/learning/product-management-building-a-product-strategy" },
    ],
  },
};

export const aiCareerRoadmaps: CareerRoadmap[] = [
  {
    id: "ai-engineer",
    category: "Engineering",
    currentRole: "Traditional Developer",
    futureRole: "AI Engineer / AI-Driven Developer",
    careerOverview:
      "This pathway helps developers blend software engineering fundamentals with applied AI implementation. The focus is not just on model usage, but on building dependable products that combine APIs, data, orchestration, testing, and deployment discipline.",
    skillsNeeded: [
      "Python fundamentals to advanced scripting",
      "JavaScript, Node.js, and React",
      "REST APIs, SQL, and NoSQL",
      "Prompt engineering and LLM API usage",
      "LangChain, LangGraph, RAG, vector databases",
      "Agentic workflows and production deployment",
    ],
    learningTimeline: "14-week structured roadmap with progressive project checkpoints",
    toolsUsed: ["Python", "Node.js", "React", "FastAPI", "PostgreSQL", "LangChain", "LangGraph", "Docker"],
    recommendedCertifications: [
      { name: "Microsoft AI Fundamentals", description: "Builds core AI vocabulary and practical understanding for early-stage learners." },
      { name: "Azure AI Engineer Associate", description: "Useful for professionals implementing cloud-first AI services." },
      { name: "AWS AI Practitioner", description: "Introduces cloud AI capabilities and responsible implementation basics." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 33, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 66, estimatedDuration: "4 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "3 Months" },
    ],
    practiceProjects: ["Career chatbot", "RAG knowledge assistant", "AI agent workflow", "React + FastAPI AI app"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Python Fundamentals", whatYouLearn: "Variables, loops, functions, modules", whyItMatters: "Python is the core scripting language for AI workflows.", recommendedResource: "Python fundamentals course" },
      { step: 2, phase: "Week 3", skillArea: "APIs and JSON", whatYouLearn: "Request handling, JSON parsing, REST concepts", whyItMatters: "AI apps depend on API integrations and structured responses.", recommendedResource: "REST API basics track" },
      { step: 3, phase: "Week 4", skillArea: "SQL Databases", whatYouLearn: "Query writing, relational modeling, joins", whyItMatters: "Many AI products need clean data retrieval and validation.", recommendedResource: "SQL for developers" },
      { step: 4, phase: "Week 5", skillArea: "Git and GitHub", whatYouLearn: "Version control, branching, pull requests", whyItMatters: "Team collaboration and release quality depend on version control.", recommendedResource: "Git workflow essentials" },
      { step: 5, phase: "Week 6", skillArea: "FastAPI", whatYouLearn: "Backend endpoint development and service design", whyItMatters: "Production AI products need reliable backend layers.", recommendedResource: "FastAPI practical guide" },
      { step: 6, phase: "Week 7", skillArea: "React", whatYouLearn: "Reusable UI components and client integration", whyItMatters: "AI features need clear interfaces for end users.", recommendedResource: "React fundamentals path" },
      { step: 7, phase: "Week 8", skillArea: "Prompt Engineering", whatYouLearn: "Prompt structure, evaluation, and guardrails", whyItMatters: "Prompt quality influences output reliability and cost.", recommendedResource: "Prompt engineering roadmap" },
      { step: 8, phase: "Week 9", skillArea: "LangChain", whatYouLearn: "Chains, tools, retrievers, and orchestration", whyItMatters: "LangChain accelerates practical AI workflow building.", recommendedResource: "LangChain starter path" },
      { step: 9, phase: "Week 10", skillArea: "RAG", whatYouLearn: "Document chunking, embedding, retrieval flow", whyItMatters: "RAG improves grounded and context-aware responses.", recommendedResource: "RAG architecture guide" },
      { step: 10, phase: "Week 11", skillArea: "Agentic AI", whatYouLearn: "Task decomposition, tool usage, fallback logic", whyItMatters: "Agentic design supports workflow automation at scale.", recommendedResource: "Agentic AI patterns" },
      { step: 11, phase: "Week 12", skillArea: "LangGraph", whatYouLearn: "Stateful graph orchestration and control flow", whyItMatters: "Complex use cases need robust multi-step orchestration.", recommendedResource: "LangGraph deep dive" },
      { step: 12, phase: "Week 13", skillArea: "Cloud Deployment", whatYouLearn: "Containerization, environment setup, release process", whyItMatters: "Deployment skill bridges prototypes and real usage.", recommendedResource: "Cloud AI deployment basics" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "End-to-end AI app implementation", whyItMatters: "Portfolio evidence helps communicate applied capability.", recommendedResource: "Project checklist template" },
    ],
    resources: roleResources["ai-engineer"],
  },
  {
    id: "ai-qa",
    category: "Quality",
    currentRole: "QA Engineer",
    futureRole: "AI-Driven QA Engineer",
    careerOverview:
      "This track helps QA professionals evolve from manual execution to intelligent quality engineering by combining automation, AI-assisted test design, risk prioritization, and release confidence reporting.",
    skillsNeeded: [
      "Manual and automation testing foundations",
      "Playwright or Selenium implementation",
      "API testing and SQL validation",
      "AI-assisted test case generation",
      "AI-powered bug summarization and triage",
      "CI/CD quality gates and reporting",
    ],
    learningTimeline: "14-week quality transformation roadmap",
    toolsUsed: ["Playwright", "Selenium", "Postman", "SQL", "GitHub Actions", "AI QA assistants"],
    recommendedCertifications: [
      { name: "ISTQB Foundation", description: "Provides testing structure and terminology for quality workflows." },
      { name: "Microsoft AI Fundamentals", description: "Builds understanding of practical AI capabilities for QA automation." },
      { name: "Certified Agile Tester", description: "Helps QA align test practices with fast delivery cycles." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "4 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "3 Months" },
    ],
    practiceProjects: ["AI test case generator", "Playwright regression suite", "Bug triage assistant", "Quality dashboard"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Testing Fundamentals", whatYouLearn: "Test plans, test cases, defect lifecycle", whyItMatters: "Core quality principles remain essential in AI-supported testing.", recommendedResource: "Software testing fundamentals" },
      { step: 2, phase: "Week 3", skillArea: "Risk-based Testing", whatYouLearn: "Critical path and risk prioritization", whyItMatters: "AI tools are most useful when aligned to risk impact.", recommendedResource: "Risk testing handbook" },
      { step: 3, phase: "Week 4", skillArea: "API Testing", whatYouLearn: "Request validation and payload checks", whyItMatters: "Modern products rely on API reliability across services.", recommendedResource: "API testing starter" },
      { step: 4, phase: "Week 5", skillArea: "SQL Validation", whatYouLearn: "Data verification queries and integrity checks", whyItMatters: "Data quality affects functional and AI behavior.", recommendedResource: "SQL for QA" },
      { step: 5, phase: "Week 6", skillArea: "Playwright Basics", whatYouLearn: "UI automation and assertions", whyItMatters: "Automation reduces repetitive execution overhead.", recommendedResource: "Playwright quickstart" },
      { step: 6, phase: "Week 7", skillArea: "Selenium Patterns", whatYouLearn: "Cross-browser automation structure", whyItMatters: "Legacy and enterprise suites still use Selenium patterns.", recommendedResource: "Selenium applied path" },
      { step: 7, phase: "Week 8", skillArea: "AI Test Design", whatYouLearn: "Prompt-driven test idea generation", whyItMatters: "AI expands coverage ideas faster than manual brainstorming.", recommendedResource: "AI in QA workshop" },
      { step: 8, phase: "Week 9", skillArea: "Bug Summaries", whatYouLearn: "AI-assisted bug rewriting and impact description", whyItMatters: "Clear defects accelerate developer resolution.", recommendedResource: "Bug reporting excellence" },
      { step: 9, phase: "Week 10", skillArea: "Test Data with AI", whatYouLearn: "Synthetic data scenarios and edge cases", whyItMatters: "Good test data improves confidence and reduces blind spots.", recommendedResource: "Test data strategy" },
      { step: 10, phase: "Week 11", skillArea: "CI/CD Integration", whatYouLearn: "Automated checks in pipelines", whyItMatters: "Frequent releases require automated quality gates.", recommendedResource: "CI testing basics" },
      { step: 11, phase: "Week 12", skillArea: "Flaky Test Control", whatYouLearn: "Stabilization and retry strategy", whyItMatters: "Reliable automation quality is more important than raw test volume.", recommendedResource: "Automation stability guide" },
      { step: 12, phase: "Week 13", skillArea: "Quality Metrics", whatYouLearn: "Coverage trends and defect leakage analysis", whyItMatters: "Measurement supports better release decisions.", recommendedResource: "QA metrics dashboard" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio QA Project", whatYouLearn: "AI-assisted test automation project", whyItMatters: "Practical artifacts demonstrate applied capability.", recommendedResource: "QA portfolio template" },
    ],
    resources: roleResources["ai-qa"],
  },
  {
    id: "ai-devops",
    category: "Operations",
    currentRole: "DevOps Engineer",
    futureRole: "AI-Driven DevOps Engineer",
    careerOverview:
      "This pathway focuses on bringing AI support into release pipelines, monitoring, incident response, and infrastructure decision-making. It combines DevOps fundamentals with AIOps concepts to improve reliability and speed.",
    skillsNeeded: [
      "Linux and shell fundamentals",
      "Docker and Kubernetes basics",
      "CI/CD with GitHub Actions",
      "Cloud fundamentals in AWS, Azure, or GCP",
      "Observability and log analysis",
      "AIOps and AI-assisted incident workflows",
    ],
    learningTimeline: "14-week operations modernization roadmap",
    toolsUsed: ["Linux", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    recommendedCertifications: [
      { name: "AWS AI Practitioner", description: "Introduces AI service capabilities in cloud-native environments." },
      { name: "Azure AI Fundamentals", description: "Builds AI concepts that can be integrated with DevOps workflows." },
      { name: "Certified Kubernetes Application Developer", description: "Strengthens container orchestration and deployment confidence." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 35, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 70, estimatedDuration: "6 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "3 Months" },
    ],
    practiceProjects: ["Kubernetes deployment", "AIOps monitoring dashboard", "AI incident triage bot", "Infrastructure drift checker"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Linux Core", whatYouLearn: "Shell scripting, permissions, process control", whyItMatters: "Linux fluency is foundational for DevOps reliability.", recommendedResource: "Linux admin fundamentals" },
      { step: 2, phase: "Week 3", skillArea: "Git Workflows", whatYouLearn: "Branch strategy and release tagging", whyItMatters: "Version hygiene improves repeatable deployment.", recommendedResource: "GitOps starter" },
      { step: 3, phase: "Week 4", skillArea: "Cloud Basics", whatYouLearn: "Core services and architecture choices", whyItMatters: "Cloud context is needed for scalable AI operations.", recommendedResource: "Cloud essentials" },
      { step: 4, phase: "Week 5", skillArea: "Docker", whatYouLearn: "Image creation and container runtime", whyItMatters: "Container consistency improves deployment reliability.", recommendedResource: "Docker practical path" },
      { step: 5, phase: "Week 6", skillArea: "CI/CD", whatYouLearn: "Pipeline stages and quality gates", whyItMatters: "Automation reduces manual release risk.", recommendedResource: "GitHub Actions guide" },
      { step: 6, phase: "Week 7", skillArea: "Kubernetes", whatYouLearn: "Pods, services, scaling, config", whyItMatters: "Orchestration is key for modern workloads.", recommendedResource: "K8s essentials" },
      { step: 7, phase: "Week 8", skillArea: "Infrastructure as Code", whatYouLearn: "Declarative provisioning patterns", whyItMatters: "IaC improves repeatability and governance.", recommendedResource: "Terraform basics" },
      { step: 8, phase: "Week 9", skillArea: "Monitoring", whatYouLearn: "Metrics, alerts, SLO concepts", whyItMatters: "Observability enables proactive operations.", recommendedResource: "Prometheus and Grafana" },
      { step: 9, phase: "Week 10", skillArea: "Log Intelligence", whatYouLearn: "Log parsing and anomaly checks", whyItMatters: "Log quality improves incident diagnostics.", recommendedResource: "Log analysis toolkit" },
      { step: 10, phase: "Week 11", skillArea: "AI-assisted Deployment", whatYouLearn: "Release notes, risk prediction prompts", whyItMatters: "AI can support safer release planning.", recommendedResource: "AI DevOps playbook" },
      { step: 11, phase: "Week 12", skillArea: "AIOps Basics", whatYouLearn: "Event correlation and incident suggestions", whyItMatters: "AIOps supports faster root-cause exploration.", recommendedResource: "AIOps intro" },
      { step: 12, phase: "Week 13", skillArea: "Incident Response", whatYouLearn: "Runbooks and postmortem structure", whyItMatters: "Operational maturity requires repeatable response patterns.", recommendedResource: "SRE incident guide" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-supported DevOps dashboard", whyItMatters: "Portfolio projects demonstrate practical transition readiness.", recommendedResource: "Ops project checklist" },
    ],
    resources: roleResources["ai-devops"],
  },
  {
    id: "ai-pm",
    category: "Management",
    currentRole: "Project Manager",
    futureRole: "AI-Driven Project Manager",
    careerOverview:
      "Project managers can use AI to accelerate planning, summarize meetings, track risks, and communicate progress with stronger consistency. This roadmap emphasizes decision quality, not automation hype.",
    skillsNeeded: [
      "Agile and project planning basics",
      "Risk and stakeholder management",
      "AI-assisted summarization and reporting",
      "Task prioritization with AI support",
      "Productivity workflow design",
      "Dashboard interpretation and communication",
    ],
    learningTimeline: "14-week roadmap for AI-supported project execution",
    toolsUsed: ["Jira", "Confluence", "Notion", "Sheets", "Meeting transcription tools", "AI copilots"],
    recommendedCertifications: [
      { name: "PMI CAPM", description: "Supports foundational project management discipline." },
      { name: "PMI PMP", description: "Strengthens enterprise project leadership capabilities." },
      { name: "Microsoft AI Fundamentals", description: "Provides practical AI literacy for project decision-making." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "4 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "6 Months" },
    ],
    practiceProjects: ["AI meeting summary workflow", "Risk tracker assistant", "Weekly PM dashboard", "Prioritization co-pilot"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Agile Foundations", whatYouLearn: "Sprint cycles and backlog basics", whyItMatters: "AI use must align with delivery frameworks.", recommendedResource: "Agile PM fundamentals" },
      { step: 2, phase: "Week 3", skillArea: "Project Planning", whatYouLearn: "Scope, timeline, milestone mapping", whyItMatters: "Solid planning supports meaningful AI augmentation.", recommendedResource: "Planning workshop" },
      { step: 3, phase: "Week 4", skillArea: "Risk Management", whatYouLearn: "Risk registers and mitigation planning", whyItMatters: "Risk visibility improves delivery predictability.", recommendedResource: "Risk management guide" },
      { step: 4, phase: "Week 5", skillArea: "Stakeholder Communication", whatYouLearn: "Status communication structures", whyItMatters: "Clear communication builds stakeholder trust.", recommendedResource: "Executive communication path" },
      { step: 5, phase: "Week 6", skillArea: "AI Meeting Notes", whatYouLearn: "Summaries, action extraction, follow-ups", whyItMatters: "Meeting efficiency improves team focus.", recommendedResource: "AI productivity templates" },
      { step: 6, phase: "Week 7", skillArea: "AI Reporting", whatYouLearn: "Progress narrative and trend analysis", whyItMatters: "Reporting quality supports better decisions.", recommendedResource: "Project reporting with AI" },
      { step: 7, phase: "Week 8", skillArea: "Task Prioritization", whatYouLearn: "Scoring tasks with constraints", whyItMatters: "Prioritization prevents delivery drift.", recommendedResource: "Prioritization frameworks" },
      { step: 8, phase: "Week 9", skillArea: "Prompt Design for PM", whatYouLearn: "Role-specific prompt patterns", whyItMatters: "Prompt clarity improves AI output relevance.", recommendedResource: "PM prompt handbook" },
      { step: 9, phase: "Week 10", skillArea: "Delivery Metrics", whatYouLearn: "Velocity, cycle time, blockers", whyItMatters: "Metric interpretation guides realistic decisions.", recommendedResource: "Agile metrics guide" },
      { step: 10, phase: "Week 11", skillArea: "AI Dashboarding", whatYouLearn: "Auto summaries and trend visuals", whyItMatters: "Dashboards help identify priorities quickly.", recommendedResource: "Dashboard design basics" },
      { step: 11, phase: "Week 12", skillArea: "Cross-team Coordination", whatYouLearn: "Dependencies and communication rhythms", whyItMatters: "AI tools support but do not replace team alignment.", recommendedResource: "Cross-functional PM playbook" },
      { step: 12, phase: "Week 13", skillArea: "Governance and Ethics", whatYouLearn: "Data privacy and quality checks", whyItMatters: "Responsible AI use protects teams and customers.", recommendedResource: "Responsible AI primer" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-assisted PM operations setup", whyItMatters: "Portfolio artifacts show practical execution maturity.", recommendedResource: "PM portfolio template" },
    ],
    resources: roleResources["ai-pm"],
  },
  {
    id: "ai-ba",
    category: "Analysis",
    currentRole: "Business Analyst",
    futureRole: "AI-Driven Business Analyst",
    careerOverview:
      "Business analysts can increase impact by using AI for faster requirement drafting, process summarization, and insight generation while keeping business context and decision accuracy at the center.",
    skillsNeeded: [
      "Requirement discovery and user stories",
      "Process mapping and gap analysis",
      "SQL and analytics basics",
      "AI-assisted documentation workflows",
      "Prompt writing for BA tasks",
      "Structured stakeholder validation",
    ],
    learningTimeline: "14-week analytics and AI documentation roadmap",
    toolsUsed: ["Excel", "SQL", "Miro", "Jira", "Confluence", "AI documentation tools"],
    recommendedCertifications: [
      { name: "ECBA", description: "Introduces BA frameworks and stakeholder-oriented analysis." },
      { name: "Google Data Analytics", description: "Builds data interpretation capabilities for informed recommendations." },
      { name: "Microsoft AI Fundamentals", description: "Strengthens understanding of practical AI support tools." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "4 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "3 Months" },
    ],
    practiceProjects: ["AI requirement summarizer", "User story quality checker", "Process map generator", "Stakeholder Q&A assistant"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Requirement Basics", whatYouLearn: "Requirement types and traceability", whyItMatters: "Clear requirements reduce delivery rework.", recommendedResource: "BA basics course" },
      { step: 2, phase: "Week 3", skillArea: "User Stories", whatYouLearn: "Story structure and acceptance criteria", whyItMatters: "Good stories align product and delivery teams.", recommendedResource: "User story workshop" },
      { step: 3, phase: "Week 4", skillArea: "Process Mapping", whatYouLearn: "Current-state and future-state mapping", whyItMatters: "Process visibility supports better prioritization.", recommendedResource: "Process mapping toolkit" },
      { step: 4, phase: "Week 5", skillArea: "SQL Basics", whatYouLearn: "Basic querying and result interpretation", whyItMatters: "BAs need evidence-backed recommendations.", recommendedResource: "SQL fundamentals" },
      { step: 5, phase: "Week 6", skillArea: "Data Analysis", whatYouLearn: "Simple trend and anomaly interpretation", whyItMatters: "Data context improves requirement quality.", recommendedResource: "Data literacy path" },
      { step: 6, phase: "Week 7", skillArea: "AI Documentation", whatYouLearn: "Drafting BRD and summary structures", whyItMatters: "AI can accelerate documentation cycles.", recommendedResource: "AI docs workflow" },
      { step: 7, phase: "Week 8", skillArea: "Prompt Patterns", whatYouLearn: "Prompt templates for BA outputs", whyItMatters: "Prompt quality shapes consistency and accuracy.", recommendedResource: "Prompt writing for analysts" },
      { step: 8, phase: "Week 9", skillArea: "Requirement Analysis with AI", whatYouLearn: "Gap detection and ambiguity checks", whyItMatters: "AI can surface hidden requirement risks.", recommendedResource: "Requirement QA guide" },
      { step: 9, phase: "Week 10", skillArea: "Stakeholder Review", whatYouLearn: "Feedback loops and sign-off process", whyItMatters: "Human validation remains essential.", recommendedResource: "Stakeholder facilitation" },
      { step: 10, phase: "Week 11", skillArea: "Backlog Structuring", whatYouLearn: "Prioritization and dependency mapping", whyItMatters: "Structured backlogs improve delivery outcomes.", recommendedResource: "Backlog management basics" },
      { step: 11, phase: "Week 12", skillArea: "Metrics for BA", whatYouLearn: "Outcome and adoption measurements", whyItMatters: "Metrics connect analysis to business value.", recommendedResource: "Business metrics primer" },
      { step: 12, phase: "Week 13", skillArea: "Responsible AI Use", whatYouLearn: "Validation, bias checks, data sensitivity", whyItMatters: "Responsible usage protects decisions and users.", recommendedResource: "Responsible AI checklist" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-assisted BA workflow package", whyItMatters: "Demonstrates transition readiness with practical outputs.", recommendedResource: "BA portfolio blueprint" },
    ],
    resources: roleResources["ai-ba"],
  },
  {
    id: "ai-scrum-master",
    category: "Management",
    currentRole: "Scrum Master",
    futureRole: "AI-Driven Scrum Master",
    careerOverview:
      "Scrum Masters can use AI to reduce ceremony overhead, identify blocker patterns, and improve retrospective quality. This roadmap maintains people-first facilitation while adding data-informed support.",
    skillsNeeded: [
      "Scrum framework and facilitation",
      "Sprint planning and retrospective design",
      "Agile metrics interpretation",
      "AI meeting summaries and blocker insights",
      "Prompt design for sprint reporting",
      "Team health and delivery coaching",
    ],
    learningTimeline: "14-week agile facilitation enhancement roadmap",
    toolsUsed: ["Jira", "Confluence", "Miro", "Meeting assistants", "AI copilots", "Dashboard tools"],
    recommendedCertifications: [
      { name: "Professional Scrum Master", description: "Reinforces facilitation and Scrum leadership foundations." },
      { name: "SAFe Scrum Master", description: "Useful for scaled agile contexts." },
      { name: "Microsoft AI Fundamentals", description: "Builds baseline AI literacy for workflow augmentation." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "4 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "3 Months" },
    ],
    practiceProjects: ["AI sprint summary bot", "Blocker trend board", "Retrospective insights report", "Team health dashboard"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Scrum Core", whatYouLearn: "Roles, events, and artifacts", whyItMatters: "Strong Scrum fundamentals guide tool usage decisions.", recommendedResource: "Scrum essentials" },
      { step: 2, phase: "Week 3", skillArea: "Sprint Planning", whatYouLearn: "Scope balancing and commitment framing", whyItMatters: "Better planning reduces spillover and stress.", recommendedResource: "Sprint planning playbook" },
      { step: 3, phase: "Week 4", skillArea: "Retrospectives", whatYouLearn: "Facilitation formats and action planning", whyItMatters: "Retrospectives drive continuous improvement.", recommendedResource: "Retro facilitation toolkit" },
      { step: 4, phase: "Week 5", skillArea: "Agile Metrics", whatYouLearn: "Velocity, throughput, cycle trends", whyItMatters: "Metrics can highlight hidden process issues.", recommendedResource: "Agile metrics primer" },
      { step: 5, phase: "Week 6", skillArea: "AI Meeting Notes", whatYouLearn: "Summary workflows and action extraction", whyItMatters: "Saves time and improves follow-up quality.", recommendedResource: "AI meeting assistant guide" },
      { step: 6, phase: "Week 7", skillArea: "Blocker Intelligence", whatYouLearn: "Pattern detection in blockers", whyItMatters: "Earlier issue detection improves sprint stability.", recommendedResource: "Blocker tracking handbook" },
      { step: 7, phase: "Week 8", skillArea: "Sprint Reporting", whatYouLearn: "Concise reporting with AI support", whyItMatters: "Clear reporting improves stakeholder confidence.", recommendedResource: "Sprint report templates" },
      { step: 8, phase: "Week 9", skillArea: "Prompting for Scrum", whatYouLearn: "Role-specific prompts and boundaries", whyItMatters: "Prompt structure controls output usefulness.", recommendedResource: "Scrum prompting guide" },
      { step: 9, phase: "Week 10", skillArea: "Coaching with Data", whatYouLearn: "Using insights for team coaching", whyItMatters: "Data-informed coaching improves team growth.", recommendedResource: "Agile coaching resources" },
      { step: 10, phase: "Week 11", skillArea: "Cross-team Coordination", whatYouLearn: "Dependency communication patterns", whyItMatters: "Dependency management improves delivery flow.", recommendedResource: "Scaled agile communication" },
      { step: 11, phase: "Week 12", skillArea: "AI Governance", whatYouLearn: "Privacy and decision transparency", whyItMatters: "Responsible usage builds trust and compliance.", recommendedResource: "Responsible AI checklist" },
      { step: 12, phase: "Week 13", skillArea: "Team Ritual Optimization", whatYouLearn: "Ceremony efficiency improvements", whyItMatters: "Lean ceremonies improve focus and output.", recommendedResource: "Agile rituals optimization" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-supported Scrum operations package", whyItMatters: "Demonstrates practical capability to future teams.", recommendedResource: "Scrum portfolio template" },
    ],
    resources: roleResources["ai-scrum-master"],
  },
  {
    id: "ai-delivery-manager",
    category: "Management",
    currentRole: "Delivery Manager",
    futureRole: "AI-Driven Delivery Manager",
    careerOverview:
      "Delivery managers can use AI to improve planning visibility, detect schedule risk earlier, and generate clearer status communication for clients and internal stakeholders.",
    skillsNeeded: [
      "Delivery planning and resource balancing",
      "Risk tracking and mitigation planning",
      "Client communication and reporting",
      "AI status summary workflows",
      "Dashboard interpretation",
      "Insight-driven delivery governance",
    ],
    learningTimeline: "14-week delivery optimization roadmap",
    toolsUsed: ["Project dashboards", "Jira", "Sheets", "BI tools", "AI copilots", "Communication platforms"],
    recommendedCertifications: [
      { name: "PMI PMP", description: "Strengthens delivery governance and planning competency." },
      { name: "PRINCE2 Foundation", description: "Useful for structured delivery governance in enterprise contexts." },
      { name: "Microsoft AI Fundamentals", description: "Introduces AI support patterns for delivery operations." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "6 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "6 Months" },
    ],
    practiceProjects: ["AI delivery status reporter", "Resource heatmap dashboard", "Risk predictor sheet", "Client update assistant"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Delivery Fundamentals", whatYouLearn: "Planning and scope tracking", whyItMatters: "Foundational delivery control drives predictable outcomes.", recommendedResource: "Delivery management basics" },
      { step: 2, phase: "Week 3", skillArea: "Resource Planning", whatYouLearn: "Capacity mapping and utilization", whyItMatters: "Resource balance supports realistic commitments.", recommendedResource: "Capacity planning guide" },
      { step: 3, phase: "Week 4", skillArea: "Risk Tracking", whatYouLearn: "Risk logs and trigger indicators", whyItMatters: "Early risk detection reduces escalation.", recommendedResource: "Delivery risk playbook" },
      { step: 4, phase: "Week 5", skillArea: "Client Communication", whatYouLearn: "Clear status framing and expectations", whyItMatters: "Communication clarity strengthens trust.", recommendedResource: "Client reporting templates" },
      { step: 5, phase: "Week 6", skillArea: "AI Status Reports", whatYouLearn: "Summary generation with quality checks", whyItMatters: "AI can save time when outputs are validated.", recommendedResource: "AI reporting workflow" },
      { step: 6, phase: "Week 7", skillArea: "Delivery Dashboards", whatYouLearn: "KPI selection and trend interpretation", whyItMatters: "Dashboards support proactive management.", recommendedResource: "Dashboard design path" },
      { step: 7, phase: "Week 8", skillArea: "Prompting for Delivery", whatYouLearn: "Role-specific prompt templates", whyItMatters: "Prompt discipline improves report consistency.", recommendedResource: "Prompt templates for managers" },
      { step: 8, phase: "Week 9", skillArea: "Dependency Analysis", whatYouLearn: "Cross-team dependency mapping", whyItMatters: "Dependencies drive many delivery delays.", recommendedResource: "Dependency management toolkit" },
      { step: 9, phase: "Week 10", skillArea: "Forecasting", whatYouLearn: "Trend-based delivery forecasting", whyItMatters: "Forecasting improves decision timing.", recommendedResource: "Forecasting fundamentals" },
      { step: 10, phase: "Week 11", skillArea: "AI Insight Review", whatYouLearn: "Validate AI-generated suggestions", whyItMatters: "Human review prevents misleading recommendations.", recommendedResource: "AI output validation guide" },
      { step: 11, phase: "Week 12", skillArea: "Escalation Strategy", whatYouLearn: "Escalation paths and decision records", whyItMatters: "Escalation readiness reduces project disruption.", recommendedResource: "Escalation best practices" },
      { step: 12, phase: "Week 13", skillArea: "Governance Rhythm", whatYouLearn: "Cadence for reviews and corrective action", whyItMatters: "Consistent governance sustains delivery quality.", recommendedResource: "Delivery governance checklist" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-supported delivery operations board", whyItMatters: "Shows practical readiness for modern delivery roles.", recommendedResource: "Delivery portfolio template" },
    ],
    resources: roleResources["ai-delivery-manager"],
  },
  {
    id: "ai-tpm",
    category: "Management",
    currentRole: "Technical Project Manager",
    futureRole: "AI-Driven Technical Project Manager",
    careerOverview:
      "TPMs can improve execution quality by combining technical understanding with AI-assisted documentation, architecture notes, risk tracking, and delivery communication across engineering and business teams.",
    skillsNeeded: [
      "Technical planning and lifecycle awareness",
      "API and cloud fundamentals",
      "AI-assisted architecture documentation",
      "Risk tracking and dependency visibility",
      "Cross-team technical communication",
      "Structured reporting and governance",
    ],
    learningTimeline: "14-week roadmap for technical delivery modernization",
    toolsUsed: ["Jira", "Confluence", "Architecture docs", "Cloud consoles", "AI copilots", "Diagramming tools"],
    recommendedCertifications: [
      { name: "PMI PMP", description: "Builds strong project delivery governance fundamentals." },
      { name: "Azure Fundamentals", description: "Supports cloud literacy for technical planning discussions." },
      { name: "AWS Cloud Practitioner", description: "Strengthens cloud architecture awareness and terminology." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "6 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "6 Months" },
    ],
    practiceProjects: ["Architecture note generator", "Technical risk tracker", "API dependency map", "TPM reporting dashboard"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Technical Planning", whatYouLearn: "Scope decomposition and milestones", whyItMatters: "Technical planning clarity reduces execution ambiguity.", recommendedResource: "TPM fundamentals" },
      { step: 2, phase: "Week 3", skillArea: "SDLC Fundamentals", whatYouLearn: "Design to release lifecycle", whyItMatters: "Lifecycle understanding improves planning realism.", recommendedResource: "SDLC practical guide" },
      { step: 3, phase: "Week 4", skillArea: "API Basics", whatYouLearn: "Endpoint concepts and integrations", whyItMatters: "TPMs need API literacy for coordination decisions.", recommendedResource: "API essentials" },
      { step: 4, phase: "Week 5", skillArea: "Cloud Basics", whatYouLearn: "Core cloud services and constraints", whyItMatters: "Cloud context affects timelines and architecture choices.", recommendedResource: "Cloud for TPMs" },
      { step: 5, phase: "Week 6", skillArea: "Architecture Notes", whatYouLearn: "AI-assisted design summaries", whyItMatters: "Clear architecture notes improve cross-team alignment.", recommendedResource: "Architecture documentation path" },
      { step: 6, phase: "Week 7", skillArea: "Risk Tracking", whatYouLearn: "Technical risk mapping and mitigation", whyItMatters: "Technical risks require early visibility.", recommendedResource: "Risk mapping toolkit" },
      { step: 7, phase: "Week 8", skillArea: "Prompting for TPM", whatYouLearn: "Prompt templates for technical reports", whyItMatters: "Prompt consistency improves output quality.", recommendedResource: "TPM prompt library" },
      { step: 8, phase: "Week 9", skillArea: "Dependency Management", whatYouLearn: "Service and team dependency mapping", whyItMatters: "Dependencies are frequent delivery blockers.", recommendedResource: "Dependency planning guide" },
      { step: 9, phase: "Week 10", skillArea: "Technical Reporting", whatYouLearn: "Status framing for technical and non-technical stakeholders", whyItMatters: "Dual-audience reporting improves decision speed.", recommendedResource: "Technical communication patterns" },
      { step: 10, phase: "Week 11", skillArea: "Change Management", whatYouLearn: "Impact analysis and change control", whyItMatters: "Change control prevents planning instability.", recommendedResource: "Change governance basics" },
      { step: 11, phase: "Week 12", skillArea: "Release Readiness", whatYouLearn: "Launch checklists and go-live criteria", whyItMatters: "Readiness discipline reduces avoidable incidents.", recommendedResource: "Release readiness checklist" },
      { step: 12, phase: "Week 13", skillArea: "AI Governance", whatYouLearn: "Data handling and responsible usage checks", whyItMatters: "Responsible AI usage protects credibility and users.", recommendedResource: "AI governance primer" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-supported TPM operating model", whyItMatters: "Portfolio evidence demonstrates role transition capability.", recommendedResource: "TPM portfolio template" },
    ],
    resources: roleResources["ai-tpm"],
  },
  {
    id: "ai-product-manager",
    category: "Product",
    currentRole: "Product Manager",
    futureRole: "AI-Driven Product Manager",
    careerOverview:
      "Product managers can integrate AI into discovery, prioritization, PRD writing, experimentation, and analytics interpretation. The focus is on outcome quality, user value, and responsible execution.",
    skillsNeeded: [
      "Product strategy and problem framing",
      "Market and user research",
      "Roadmapping and prioritization",
      "AI-assisted PRD and user story drafting",
      "AI competitor and trend analysis",
      "Analytics interpretation and iteration",
    ],
    learningTimeline: "14-week AI product leadership roadmap",
    toolsUsed: ["Product analytics tools", "Docs platforms", "Roadmap tools", "AI copilots", "Research tools"],
    recommendedCertifications: [
      { name: "Certified Scrum Product Owner", description: "Strengthens product ownership and backlog decision practices." },
      { name: "Google Data Analytics", description: "Supports metrics-driven product decision-making." },
      { name: "Microsoft AI Fundamentals", description: "Provides practical AI literacy for product planning." },
    ],
    skillLevels: [
      { label: "Beginner", percentage: 30, estimatedDuration: "2 Weeks" },
      { label: "Intermediate", percentage: 65, estimatedDuration: "6 Weeks" },
      { label: "Advanced", percentage: 100, estimatedDuration: "6 Months" },
    ],
    practiceProjects: ["AI PRD assistant", "Competitor analysis dashboard", "User insight summarizer", "Experiment tracking board"],
    roadmapSteps: [
      { step: 1, phase: "Week 1-2", skillArea: "Product Strategy", whatYouLearn: "Problem framing and value hypotheses", whyItMatters: "Strong strategy guides responsible AI usage.", recommendedResource: "Product strategy fundamentals" },
      { step: 2, phase: "Week 3", skillArea: "Market Research", whatYouLearn: "Segment analysis and opportunity mapping", whyItMatters: "Research improves roadmap confidence.", recommendedResource: "Market research playbook" },
      { step: 3, phase: "Week 4", skillArea: "User Research", whatYouLearn: "Interview synthesis and need mapping", whyItMatters: "User insight prevents feature-first decisions.", recommendedResource: "User research toolkit" },
      { step: 4, phase: "Week 5", skillArea: "Roadmapping", whatYouLearn: "Outcome-based roadmap design", whyItMatters: "Roadmaps align teams around priorities.", recommendedResource: "Roadmapping basics" },
      { step: 5, phase: "Week 6", skillArea: "Prioritization", whatYouLearn: "Impact, effort, and risk balancing", whyItMatters: "Prioritization ensures focus on high-value work.", recommendedResource: "Prioritization frameworks" },
      { step: 6, phase: "Week 7", skillArea: "AI Competitor Analysis", whatYouLearn: "AI-assisted market signal review", whyItMatters: "Faster competitive awareness supports better decisions.", recommendedResource: "Competitive analysis methods" },
      { step: 7, phase: "Week 8", skillArea: "AI PRD Creation", whatYouLearn: "Drafting structured PRDs with validation", whyItMatters: "AI can accelerate docs with human quality checks.", recommendedResource: "PRD writing templates" },
      { step: 8, phase: "Week 9", skillArea: "AI User Stories", whatYouLearn: "Story drafting and acceptance criteria refinement", whyItMatters: "Story quality improves delivery outcomes.", recommendedResource: "Story quality checklist" },
      { step: 9, phase: "Week 10", skillArea: "Analytics Insights", whatYouLearn: "Metric interpretation and opportunity spotting", whyItMatters: "Data-informed iteration improves product fit.", recommendedResource: "Product analytics intro" },
      { step: 10, phase: "Week 11", skillArea: "Experiment Design", whatYouLearn: "Hypothesis testing and experiment plans", whyItMatters: "Experiments reduce decision bias.", recommendedResource: "Experimentation playbook" },
      { step: 11, phase: "Week 12", skillArea: "Cross-functional Execution", whatYouLearn: "Alignment across design, engineering, and GTM", whyItMatters: "Execution quality depends on cross-team clarity.", recommendedResource: "Cross-functional product leadership" },
      { step: 12, phase: "Week 13", skillArea: "Responsible AI in Product", whatYouLearn: "Risk review and user trust practices", whyItMatters: "Responsible products sustain long-term value.", recommendedResource: "Responsible AI for PMs" },
      { step: 13, phase: "Week 14", skillArea: "Portfolio Project", whatYouLearn: "AI-enhanced product planning package", whyItMatters: "Portfolio artifacts communicate readiness and thinking quality.", recommendedResource: "PM portfolio guide" },
    ],
    resources: roleResources["ai-product-manager"],
  },
];

export const seoContentSections = [
  {
    id: "what-is-ai-driven-career",
    title: "What Is an AI-Driven Career?",
    paragraphs: [
      "An AI-driven career does not mean replacing your profession with a fully automated workflow. It means learning how to combine your role expertise with practical AI tools so you can work with better clarity, speed, and consistency. A developer can use AI to accelerate prototyping and debugging. A business analyst can use AI to structure documentation drafts. A project manager can use AI to summarize meetings and identify delivery patterns. In each case, the professional still makes decisions, validates quality, and remains accountable for outcomes. AI acts as a support layer, not as a complete substitute for role judgment.",
      "The most important idea is role-first adoption. Start by identifying repetitive tasks in your current workflow, then map those tasks to appropriate AI capabilities. For example, if your team spends long hours producing recurring reports, an AI-assisted reporting pattern can reduce manual formatting effort. If you frequently review stakeholder notes, summarization and action extraction can save time. If your role depends on structured decision-making, AI can help surface options faster. This role-first method prevents random tool usage and keeps learning focused on practical value.",
    ],
  },
  {
    id: "why-learn-ai-skills",
    title: "Why Professionals Should Learn AI Skills",
    paragraphs: [
      "Professionals who learn AI skills improve adaptability. Technology platforms, customer expectations, and delivery methods continue to change. Teams increasingly value people who can evaluate AI outputs, ask better questions, and convert raw suggestions into reliable actions. Learning AI skills can help you communicate more effectively with technical teams, interpret automated insights responsibly, and design workflows that reduce repetitive effort. This is useful in engineering, testing, product, operations, and management environments.",
      "AI literacy also helps professionals avoid common mistakes. Many teams adopt tools too quickly without quality guardrails, resulting in inaccurate outputs and rework. When you understand prompt clarity, data quality constraints, and validation techniques, you can use AI in a controlled way. This does not guarantee any specific career outcome, but it improves your ability to contribute to modern teams. Strong contributors are usually people who combine domain knowledge, communication skill, and technical awareness. AI literacy strengthens that combination when applied thoughtfully.",
    ],
  },
  {
    id: "future-of-ai-careers",
    title: "Future of AI Careers",
    paragraphs: [
      "The future of AI careers is likely to be hybrid, not binary. Traditional roles are not disappearing overnight. Instead, role expectations are expanding. A QA engineer may need to design AI-assisted test plans. A DevOps engineer may need to interpret anomaly alerts generated by AI tooling. A product manager may need to evaluate AI-assisted market summaries and feature proposals. The future belongs to professionals who can connect domain context with intelligent tooling while maintaining quality and ethics.",
      "Another major shift is the rise of workflow literacy. Teams are moving beyond one-off prompts and toward repeatable systems. This means professionals should learn not only how to ask AI for output, but also how to design sequences: input collection, prompt templates, review checkpoints, approval flows, and documentation standards. Roles that can design and maintain reliable workflows will continue to be valuable because businesses need predictable operations, not just isolated experiments. Reliable workflows require a clear process owner, measurable outcomes, and responsible usage rules.",
    ],
  },
  {
    id: "benefits-of-learning-ai",
    title: "Benefits of Learning AI Skills",
    paragraphs: [
      "Learning AI skills can provide several practical benefits. First, it can improve productivity when applied to repetitive tasks such as summarization, formatting, categorization, and early-stage analysis. Second, it can improve decision quality by helping you compare alternatives and generate structured viewpoints before discussion. Third, it can improve communication quality when you use AI to draft clearer updates, meeting notes, or documentation that you later review and refine. These benefits are most visible when teams use AI with clear standards.",
      "There are also long-term learning benefits. As you practice AI-assisted workflows, you build better problem decomposition habits. You begin to define inputs clearly, specify expected output format, and measure whether the result is useful. These habits are transferable across projects and roles. Even when tools change, the ability to frame problems, validate outputs, and communicate tradeoffs remains highly relevant. This is why AI learning should be approached as capability building, not just tool familiarity.",
    ],
  },
  {
    id: "choose-right-roadmap",
    title: "How to Choose the Right Roadmap",
    paragraphs: [
      "Choosing the right roadmap starts with your current role responsibilities. If you work mainly on software delivery, the AI Engineer or AI DevOps pathways may be more relevant. If you focus on quality outcomes, the AI QA route can offer a stronger transition. If your daily work centers on planning, communication, and decision support, the AI PM, AI BA, AI Scrum Master, or AI Delivery Manager pathways may fit better. Product-focused professionals may benefit from the AI Product Manager path, especially for research, prioritization, and documentation workflows.",
      "After identifying a role direction, assess your current baseline in coding, tools, and process knowledge. Beginners should start with fundamentals and avoid rushing into advanced frameworks. Intermediate learners can add AI workflow patterns and practical project tasks. Advanced learners can focus on governance, metrics, and production-level reliability. This staged approach helps you avoid skill gaps and builds confidence through incremental progress. The best roadmap is the one you can follow consistently with realistic time commitments and regular practice.",
    ],
  },
  {
    id: "beginner-vs-intermediate",
    title: "Beginner vs Intermediate Paths",
    paragraphs: [
      "Beginner paths focus on core language, process, and role foundations. For technical tracks, this usually means basic coding, API understanding, and version control. For non-coding tracks, it means fundamentals of planning, analysis, communication, and documentation quality. At this stage, AI usage should be simple: generate summaries, draft checklists, and compare options. The goal is to understand where AI helps and where manual review is still essential.",
      "Intermediate paths introduce workflow depth. Learners begin building repeatable systems with clear input rules, output formats, and quality checks. Technical learners may explore orchestration, retrieval, testing, and deployment patterns. Management and analysis learners may design AI-assisted reporting systems, structured review loops, and role-specific prompt libraries. The key difference is reliability: beginners experiment with tools, while intermediate learners design stable workflows that teams can reuse.",
    ],
  },
  {
    id: "career-transition-guidance",
    title: "Career Transition Guidance",
    paragraphs: [
      "Career transitions are more sustainable when approached as a staged upgrade rather than a complete identity reset. Start by integrating AI into your current responsibilities, then expand scope gradually. For example, a QA engineer can first automate test documentation with AI, then move into AI-assisted test generation, and later contribute to quality intelligence dashboards. A project manager can begin with AI meeting summaries, then build risk reporting workflows, and eventually shape program-level insight systems.",
      "Build proof of capability through practical artifacts. Instead of listing only course completions, show examples of workflows you designed: templates, dashboards, checklists, and mini projects. Keep a short write-up for each artifact describing the problem, your approach, validation method, and lessons learned. This demonstrates applied thinking and accountability. Transition readiness is often evaluated by evidence of practical problem-solving, not by tool names alone. Consistency, clarity, and responsible implementation matter across all AI-driven career pathways.",
    ],
  },
];

export const faqItems = [
  {
    question: "Can beginners learn AI?",
    answer:
      "Yes. Beginners can start with role-specific fundamentals and gradually adopt AI workflows through guided practice.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "Coding is useful for technical tracks, but non-coding roles can still benefit from AI through documentation, analysis, reporting, and planning workflows.",
  },
  {
    question: "Which AI roadmap is best for non-coders?",
    answer:
      "AI-driven pathways for Project Manager, Business Analyst, Scrum Master, Delivery Manager, and Product Manager are strong starting options for non-coding professionals.",
  },
  {
    question: "Will AI replace jobs?",
    answer:
      "AI is changing tasks and expectations across roles. Professionals who build AI-assisted skills can adapt more effectively to evolving workflows.",
  },
  {
    question: "How long does it take to become AI-ready?",
    answer:
      "Timeframes vary by role, baseline skills, and learning consistency. A structured roadmap with regular project practice can help accelerate readiness.",
  },
  {
    question: "Which certifications are valuable?",
    answer:
      "Valuable certifications depend on your role path. Foundation AI certifications, cloud AI certifications, and role-specific management or analytics credentials can all be useful.",
  },
];

export const adsenseDisclaimer =
  "This roadmap is intended for educational guidance only. Course content, pricing, certifications, and career outcomes may vary. Please research carefully before enrolling in any course.";
