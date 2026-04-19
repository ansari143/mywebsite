import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export const metadata = {
  title: "Blog | Nishaglobal Education",
  description:
    "Explore career, study abroad, IELTS, engineering practice, and future-ready skills articles from Nishaglobal Education.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const blogTopics = [
  "Careers after 10th and 12th",
  "Study abroad comparisons",
  "International student planning",
  "High paying global careers",
  "Future-ready skills and AI-era jobs",
  "IELTS practice and grammar",
  "Engineering entrance preparation",
];

const seoPracticeBlogs = [
  {
    title: "Free IELTS Practice Questions with Answers",
    href: "/blog/ielts-practice-questions-with-answers",
    description:
      "Practice IELTS grammar, reading, and vocabulary with explanation-based sample questions.",
    category: "IELTS Practice",
  },
  {
    title: "IELTS Grammar Practice for Beginners",
    href: "/blog/ielts-grammar-practice-for-beginners",
    description:
      "A beginner-friendly IELTS grammar article with answers and simple explanations.",
    category: "IELTS Grammar",
  },
  {
    title: "Engineering Entrance Questions with Answers",
    href: "/blog/engineering-entrance-questions-with-answers",
    description:
      "Start engineering entrance preparation with sample math, physics, chemistry, and logic questions.",
    category: "Engineering Practice",
  },
  {
    title: "Beginner Math Physics Chemistry Practice for Engineering",
    href: "/blog/beginner-engineering-practice-math-physics-chemistry",
    description:
      "Build engineering basics with explanation-based questions across core foundation subjects.",
    category: "Engineering Foundation",
  },
];

export default function BlogIndexPage() {
  const allBlogPosts = Array.from(
    new Map([...seoPracticeBlogs, ...blogPosts].map((post) => [post.href, post])).values()
  );
  const featuredPracticeHrefs = new Set(seoPracticeBlogs.map((item) => item.href));
  const remainingBlogPosts = allBlogPosts.filter(
    (post) => !featuredPracticeHrefs.has(post.href)
  );

  const blogFaqs = [
    {
      q: "Who should use this blog regularly?",
      a: "Students in Classes 10 to 12, college applicants, IELTS candidates, and parents who want practical guidance for career and study decisions should use this blog weekly. The content is designed for action, not just reading.",
    },
    {
      q: "How is this blog different from generic career content sites?",
      a: "Articles here focus on real decision points: what to choose, what to avoid, what steps to follow, and where to practice next. Each topic is connected to tools on Nishaglobal Education so students can move from reading to action.",
    },
    {
      q: "Are the practice-related posts official exam papers?",
      a: "No. Practice-oriented posts are original educational content built to train concepts and exam judgment. Always verify final syllabus and format updates from official exam websites.",
    },
    {
      q: "How should parents use these articles?",
      a: "Parents can use country comparison, course selection, and career trend articles to discuss realistic options with their child, then shortlist practical next steps such as tests, skills, and budget planning.",
    },
    {
      q: "How often is this page reviewed?",
      a: "The blog hub is reviewed regularly to improve clarity, remove repetitive low-value content, and prioritize updated student-helpful guides.",
    },
  ];

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nishaglobal Education Blog",
    description:
      "Career, study abroad, IELTS, engineering preparation, and future-ready skills articles from Nishaglobal Education.",
    url: "https://nishaglobaleducation.com/blog",
    hasPart: allBlogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://nishaglobaleducation.com${post.href}`,
      about: post.category,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Nishaglobal Education Blog
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Career, Study Abroad, Practice Tests, and Future Skills Blog
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Explore practical articles that support Indian students and global
          students with career guidance, study abroad planning, IELTS practice,
          engineering entrance basics, country comparisons, and modern skills.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {blogTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">Who should choose this blog</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>Students confused between multiple career and study-abroad options.</li>
            <li>IELTS and engineering aspirants who need beginner-friendly preparation guidance.</li>
            <li>Parents comparing countries, course value, and long-term job outcomes.</li>
            <li>Learners who prefer step-by-step advice over motivational generic content.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
            <li>Readers looking only for copied official PDFs or paper dumps.</li>
            <li>Users expecting one-click shortcuts without practice or planning.</li>
            <li>Students who want only advanced mock tests and no concept-level support.</li>
            <li>People not yet ready to compare options using budget, goals, and timelines.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">How to use this blog effectively</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 1: Pick your goal first</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Choose one track: study abroad, career direction, IELTS improvement, or engineering entrance preparation.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 2: Read comparison and caution points</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Use country and course comparisons to identify trade-offs before making a final decision.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 3: Practice with feedback loops</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Move from article guidance to practice sets and track weak topics instead of only counting scores.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Step 4: Convert reading into weekly actions</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Build a weekly plan with two learning sessions, two practice sessions, and one review day.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Practice and exam preparation
        </div>

        <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          New IELTS and Engineering preparation articles
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          These explanation-based articles are designed to guide students from
          Google search into our practice and career guidance system.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {seoPracticeBlogs.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="inline-flex rounded-full border border-blue-100 bg-white px-2.5 py-1 text-xs font-medium text-blue-700">
                {item.category}
              </span>
              <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {remainingBlogPosts.map((blog) => (
          <Link
            key={blog.href}
            href={blog.href}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              {blog.category}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              {blog.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {blog.description}
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-blue-700">
              Read article →
            </span>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Start by your current goal</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
          If you are not sure what to read first, use this practical path so you do not waste time on random content.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Goal: Study abroad decision</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Start with country comparison and course-outcome articles, then move to student resources and scholarship planning.
            </p>
            <Link href="/study-abroad" className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Explore study abroad guidance →
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Goal: Exam preparation</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Read the IELTS and engineering preparation blogs first, then switch to topic-wise and exam-wise practice tests.
            </p>
            <Link href="/practice-tests" className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Go to practice tests →
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Goal: Career direction</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Use high-paying career and future skills content to shortlist realistic pathways based on strengths and market demand.
            </p>
            <Link href="/global-careers" className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Explore global careers →
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-5">
            <p className="text-sm font-semibold text-slate-900">Goal: Parent-supported planning</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Review costs, timelines, and career outcomes together, then use resources to create a realistic family plan.
            </p>
            <Link href="/resources" className="mt-4 inline-block text-sm font-semibold text-blue-700">
              Browse student resources →
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {blogFaqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="text-xl font-bold text-blue-950">Content quality and trust note</h2>
        <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
          <p>
            Blog content is created for educational guidance with practical student and parent decision support.
          </p>
          <p>
            We avoid low-value filler, repeated text, and copy-like summaries. Articles are updated when guidance needs correction or expansion.
          </p>
          <p>
            Last reviewed: April 2026.
          </p>
        </div>
      </section>
    </main>
  );
}