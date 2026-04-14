import Link from "next/link";
import type { Metadata } from "next";
import SkillsPreview from "@/components/SkillsPreview";
import SkillsRoadmapPreview from "@/components/SkillsRoadmapPreview";
import TrendingBlogs from "@/components/TrendingBlogs";

export const metadata: Metadata = {
  title: "Career Guidance for Global Students",
  description:
    "Free career tests, study abroad guides, blogs, and future-ready skill resources for students in India and worldwide.",
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const keyJourneys = [
  {
    title: "Students in India",
    description:
      "Get stream selection help after 10th and 12th, compare options, and explore exam-focused guidance. Best for: Those prioritizing local education, JEE/NEET prep, or affordable pathways. Avoid if: You're certain about studying abroad without considering Indian options first.",
    href: "/resources/country/india",
    cta: "Explore India Guides",
  },
  {
    title: "International Students",
    description:
      "Understand study abroad routes, student planning, scholarships, and country comparisons in one place. Best for: Students exploring global opportunities, visa processes, or work-study balances. Avoid if: You prefer staying in India and don't need international insights.",
    href: "/international-students",
    cta: "View International Guide",
  },
  {
    title: "Parents and Families",
    description:
      "Use simple, practical pages to discuss careers, education costs, pathways, and long-term planning together. Best for: Families seeking joint decision-making tools, cost comparisons, and real student stories. Avoid if: You're a student making independent choices.",
    href: "/about",
    cta: "See How We Help",
  },
];

const popularRoutes = [
  {
    title: "Engineering Career Test",
    description: "For students who enjoy math, logic, technology, and problem solving.",
    href: "/tests/engineering",
  },
  {
    title: "Medical Career Test",
    description: "For students interested in biology, healthcare, and helping people.",
    href: "/tests/medical",
  },
  {
    title: "Government Job Test",
    description: "For students exploring discipline, consistency, reasoning, and public sector goals.",
    href: "/tests/government",
  },
  {
    title: "Aviation Career Test",
    description: "For students curious about airline, airport, cabin crew, and aviation-related roles.",
    href: "/tests/aviation",
  },
];

const destinations = [
  {
    name: "USA",
    flag: "🇺🇸",
    href: "/resources/country/usa",
    text: "STEM powerhouse with 3-year OPT work permits; average tuition $30k/year; universities like MIT for innovation and research internships.",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    href: "/resources/country/canada",
    text: "Affordable education with post-grad work visas; average cost $20k/year; strong in healthcare and engineering with pathways to PR.",
  },
  {
    name: "UK",
    flag: "🇬🇧",
    href: "/resources/country/uk",
    text: "1-year degrees save time and money; average $25k/year; Russell Group universities offer global networking and shorter study periods.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    href: "/resources/country/australia",
    text: "Balanced lifestyle with 2-year post-study work; average $25k/year; practical education in business, IT, and vocational courses.",
  },
  {
    name: "Europe",
    flag: "🇪🇺",
    href: "/resources/country/europe",
    text: "Diverse options from Germany (free tuition) to Netherlands; average $10-20k/year; English-taught programs in tech, design, and sciences.",
  },
  {
    name: "India",
    flag: "🇮🇳",
    href: "/resources/country/india",
    text: "Local expertise for IITs, NITs, and medical colleges; affordable at $5-10k/year; strong foundation for competitive exams and career starts.",
  },
];

const faqs = [
  {
    question: "Who is Nishaglobal Education for?",
    answer:
      "Nishaglobal Education is designed for students in India and worldwide who need simple career guidance, study abroad direction, educational resources, and future-ready skills content. It's especially helpful for those after 10th, 12th, or graduation exploring options.",
  },
  {
    question: "What can students do on this website?",
    answer:
      "Students can take free career tests, read stream and country guides, explore blogs, compare educational pathways, and learn practical skills that support modern careers. Everything is tailored for Indian students with global perspectives.",
  },
  {
    question: "Are the tests and guides only for Indian students?",
    answer:
      "No. The platform supports Indian students while also building global guidance for international students who want to compare destinations, careers, and next steps. We bridge local and international education.",
  },
  {
    question: "How accurate are the career tests?",
    answer:
      "Our tests are based on real career data and student feedback, providing personalized insights rather than generic results. They're a starting point—combine with guides and official resources for best decisions.",
  },
  {
    question: "Is all the advice on this site free?",
    answer:
      "Yes, all tests, guides, blogs, and basic skills content are completely free. We focus on accessible education without hidden costs.",
  },
  {
    question: "How do I get personalized guidance?",
    answer:
      "Use our contact form for specific questions. We provide free initial advice and can point you to trusted counselors or institutions for deeper support.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 text-center shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-700">
          India + Global student guidance 🌍
        </div>

        <h1 className="mx-auto mt-4 max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Choose the right career path after 10th, 12th, or graduation — with guidance that fits India and the world
        </h1>

        <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-600 sm:text-lg">
          Unlike generic sites, Nishaglobal combines India&apos;s education system with global options, offering free tests, practical guides, and real student examples. Whether you&apos;re choosing a stream after 10th, preparing for JEE, or planning study abroad, get trustworthy guidance that saves time and reduces confusion.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Free career tests</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">India-focused guidance</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Global study options</span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">Practice + tests + skills</span>
        </div>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/tests"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            Start Free Career Test
          </Link>
          <Link
            href="/study-abroad"
            className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-medium text-slate-700 hover:bg-gray-50 sm:w-auto"
          >
            Explore Study Abroad
          </Link>
          <Link
            href="/blog"
            className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-center font-medium text-slate-700 hover:bg-gray-50 sm:w-auto"
          >
            Read Latest Blogs
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Career Tests",
            desc: "Answer 10 quick questions in your interest area and get a personalized report with matching careers, average salaries, required exams, and practical next steps.",
          },
          {
            title: "Country Guides",
            desc: "Compare study costs, visa processes, top universities, and student life in the USA, Canada, UK, Australia, Europe, and India with real examples and checklists.",
          },
          {
            title: "Career Blogs",
            desc: "Read practical articles like 'JEE vs NEET: Which is Right for You?' or 'How Indian Students Succeed in Canadian Universities' with actionable tips.",
          },
          {
            title: "Future Skills",
            desc: "Learn in-demand skills like AI basics, Python programming, and data analysis through beginner-friendly tutorials and projects that boost employability.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="font-semibold text-gray-900">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {keyJourneys.map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
            <Link
              href={item.href}
              className="mt-5 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {item.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Popular student routes
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Start with the most searched tests on your platform
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {popularRoutes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-700">
                  Open test →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Practice Tests Section
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Practice Tests to build real confidence
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                Students can now practice IELTS and engineering entrance questions with instant scoring,
                detailed explanations, and topic-wise improvement tracking.
              </p>
            </div>

            <Link
              href="/practice-tests"
              className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              View All Practice Tests
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/practice-tests/ielts"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-lg font-semibold text-slate-900">
                IELTS Practice Tests
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Improve grammar, vocabulary, reading, and speaking with structured IELTS practice sets.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">
                Start IELTS practice →
              </span>
            </Link>

            <Link
              href="/practice-tests/engineering-entrance"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-lg font-semibold text-slate-900">
                Engineering Entrance Practice
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Practice math, physics, chemistry, and logical reasoning questions designed for beginners.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">
                Start engineering practice →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          How students should use the website
        </div>
        <div className="mt-6">
          <ol className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">Step 1:</span> Take a test based on your interest.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Step 2:</span> Read the matching stream or country guide.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Step 3:</span> Use blogs and skills pages to plan your next move.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Step 4:</span> Verify final admissions, exams, visa, and fee details from official sources.
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Important:</span> The website should guide students clearly, but final career and study decisions should always be cross-checked with official sources, institutions, and exam authorities.
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Explore by destination</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Choose your study destination based on budget, career goals, and lifestyle. Each guide includes visa timelines, scholarship tips, and success stories from Indian students who&apos;ve studied there.
            </p>
          </div>
          <Link
            href="/global-careers"
            className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            View Global Careers
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <span>{item.flag}</span>
                <span>{item.name}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              <span className="mt-3 inline-block text-sm font-medium text-blue-700">Explore guide →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
              Integrated learning path
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              From career test to job-ready: Your complete guidance roadmap
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Start with a test, explore country options, read targeted blogs, and build skills—all in one connected experience designed for real student journeys.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/resources"
              className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Browse Resources
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact for Guidance
            </Link>
          </div>
        </div>
      </section>

      <SkillsPreview />
      <SkillsRoadmapPreview />
      <TrendingBlogs title="Latest Career and Study Abroad Articles" limit={3} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
