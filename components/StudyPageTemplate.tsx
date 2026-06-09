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
    <div className="site-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#071226] via-[#0B1730] to-[#112240] p-6 shadow-sm sm:p-8 lg:p-10 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="inline-flex rounded-full border border-blue-100 bg-[#15233d] px-3 py-1 text-sm font-medium text-blue-700">
          Study Abroad Guide
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {guide.title} {guide.flag}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-white sm:text-lg">
          {guide.intro}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/global-careers"
            className="site-btn-primary px-5 py-3 text-center"
          >
            Explore Global Careers
          </Link>
          <Link
            href="/tests"
            className="site-btn-secondary px-5 py-3 text-center"
          >
            Take Free Career Test
          </Link>
        </div>
      </section>

      {(guide.whoShouldChoose?.length || guide.whoShouldAvoid?.length) && (
        <section className="grid gap-6 lg:grid-cols-2">
          {guide.whoShouldChoose?.length ? (
            <div className="site-section p-6">
              <h2 className="text-2xl font-bold text-white">Who Should Choose {guide.country}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
                {guide.whoShouldChoose.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {guide.whoShouldAvoid?.length ? (
            <div className="site-section p-6">
              <h2 className="text-2xl font-bold text-white">Who Should Avoid This Path</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
                {guide.whoShouldAvoid.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Eligibility</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.eligibility.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Required Exams</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
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
        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Estimated Cost</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-white sm:text-base">
            <p>
              <span className="font-semibold text-white">Tuition:</span> {guide.tuition}
            </p>
            <p>
              <span className="font-semibold text-white">Living:</span> {guide.living}
            </p>
            <p>
              Costs vary by city, course type, and institution. Always check the official university website before applying.
            </p>
          </div>
        </div>

        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Scholarship Options</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.scholarships.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guide.commonMistakes?.length ? (
        <section className="site-section">
          <h2 className="text-2xl font-bold text-white">Common Mistakes Students Make</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.commonMistakes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {guide.realExamples?.length ? (
        <section className="site-section">
          <h2 className="text-2xl font-bold text-white">Real Student Planning Examples</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {guide.realExamples.map((item) => (
              <article key={item.scenario} className="site-card">
                <h3 className="text-base font-semibold text-white">Scenario</h3>
                <p className="mt-2 text-sm leading-7 text-white">{item.scenario}</p>
                <h4 className="mt-4 text-sm font-semibold text-white">Takeaway</h4>
                <p className="mt-1 text-sm leading-7 text-white">{item.takeaway}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="site-section p-6 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">Top Courses</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {guide.topCourses.map((course) => (
              <div
                key={course}
                className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 text-sm font-medium leading-7 text-white"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Example Universities</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.universities.map((uni) => (
              <li key={uni}>{uni}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">Work While Studying</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.work.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-section p-6">
          <h2 className="text-2xl font-bold text-white">PR and Settlement Perspective</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white sm:text-base">
            {guide.settlement.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-section">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {guide.faqs.map((faq) => (
            <div key={faq.question} className="site-card">
              <h3 className="text-base font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-white sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
{guide.relatedBlogs && guide.relatedBlogs.length > 0 && (
  <section className="site-section">
    <h2 className="text-2xl font-bold text-white">
      Related Articles
    </h2>

    <div className="mt-5 grid gap-4 sm:grid-cols-2">
      {guide.relatedBlogs.map((blog, index) => (
        <Link
          key={index}
          href={blog.link}
          className="site-card p-4 transition hover:shadow-md"
        >
          <h3 className="text-base font-semibold text-white">
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

      <section className="site-section-accent-amber">
        <h2 className="text-2xl font-bold text-white">Important Note</h2>
        <p className="mt-4 text-sm leading-7 text-white sm:text-base">
          This page is designed for educational guidance only. Admission rules, visa requirements, work rights, tuition fees,
          immigration pathways, and licensing requirements can change. Always verify final details from official government,
          embassy, university, and regulator sources before making decisions.
        </p>
      </section>
    </div>
  );
}
