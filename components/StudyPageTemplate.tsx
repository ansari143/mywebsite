import Link from "next/link";
import type { CountryGuide } from "@/data/studyAbroad";

export default function StudyPageTemplate({ guide }: { guide: CountryGuide }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-700">
          Study Abroad Guide
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {guide.title} {guide.flag}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
          {guide.intro}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/global-careers"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Explore Global Careers
          </Link>
          <Link
            href="/tests"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Free Career Test
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Eligibility</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.eligibility.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Required Exams</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.exams.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Estimated Cost</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              <span className="font-semibold text-slate-900">Tuition:</span> {guide.tuition}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Living:</span> {guide.living}
            </p>
            <p>
              Costs vary by city, course type, and institution. Always check the official university website before applying.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Scholarship Options</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.scholarships.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900">Top Courses</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {guide.topCourses.map((course) => (
              <div
                key={course}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-7 text-slate-700"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Example Universities</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.universities.map((uni) => (
              <li key={uni}>{uni}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Work While Studying</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.work.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">PR and Settlement Perspective</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {guide.settlement.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {guide.faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
{guide.relatedBlogs && guide.relatedBlogs.length > 0 && (
  <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
    <h2 className="text-2xl font-bold text-slate-900">
      Related Articles
    </h2>

    <div className="mt-5 grid gap-4 sm:grid-cols-2">
      {guide.relatedBlogs.map((blog, index) => (
        <Link
          key={index}
          href={blog.link}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md"
        >
          <h3 className="text-base font-semibold text-slate-900">
            {blog.title}
          </h3>
          <span className="mt-2 inline-block text-sm text-blue-700">
            Read article →
          </span>
        </Link>
      ))}
    </div>
  </section>
)}

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important Note</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          This page is designed for educational guidance only. Admission rules, visa requirements, work rights, tuition fees,
          immigration pathways, and licensing requirements can change. Always verify final details from official government,
          embassy, university, and regulator sources before making decisions.
        </p>
      </section>
    </div>
  );
}
