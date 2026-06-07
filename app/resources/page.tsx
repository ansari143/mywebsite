import Link from "next/link";
import { resourcePages } from "@/data/resourcePages";
import { countryResourcesWithTopics } from "@/data/countryResources";

export const metadata = {
  title: "Global Career Resources by Country and Topic | Nishaglobal Education",
  description:
    "Browse global career resources by country and topic, including study abroad planning, scholarships, exams, and practical decision guides.",
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/resources",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nishaglobaleducation.com" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.nishaglobaleducation.com/resources" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://www.nishaglobaleducation.com",
    description:
      "Career guidance platform for students worldwide with country-based resources, study abroad planning, global careers, and practical skill guidance.",
  };

  return (
    <div className="site-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Country-Based Resource Library
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Career Resources: Country-Specific Guidance for Global Students
        </h1>

        <p className="mt-3 text-sm font-semibold text-slate-300">Updated: June 2026</p>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          Navigate international education and career opportunities with targeted resources organized
          by destination country. Explore study abroad options, scholarships, exams, job markets, and
          practical decision guides across the USA, Canada, UK, Australia, Europe, Mexico, and more.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who This Resource Hub Is For</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Students researching countries for education or work, parents seeking location-specific
              guidance, and professionals planning international career moves.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
            <h2 className="text-lg font-semibold text-white">Who Should Look Elsewhere</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Those seeking only quick overviews may prefer the main career guides first. This hub is
              designed for deeper country and topic research.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Resource Organization Strategy</h2>
        <p className="mt-3 text-slate-300">
          Most students start with country intent, then explore specific topics. This structure helps
          users reach relevant guidance faster.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Country-First Approach", "Start with destination-specific hubs covering education systems, visa requirements, job markets, and cultural insights."],
            ["Topic-Deep Dives", "Explore specialized guides on scholarships, entrance exams, career planning, and skill development."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Explore by Country</h2>
        <p className="mt-2 text-slate-300">
          Country-specific resources provide localized insights on education systems, immigration
          policies, job markets, and cultural adaptation.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {countryResourcesWithTopics.map((item) => (
            <Link
              key={item.slug}
              href={`/resources/country/${item.slug}`}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="inline-flex rounded-xl border border-blue-500 bg-blue-950/50 px-3 py-2 text-sm font-semibold text-blue-200">
                {item.flag} {item.name}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
                {item.heroTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.popularTopics.slice(0, 3).map((topic) => (
                  <span key={topic.slug} className="rounded-full border border-slate-600 bg-[#0b1220] px-3 py-1 text-xs text-slate-300">
                    {topic.label}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex text-sm font-semibold text-blue-300">
                Open country hub →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Specialized Topic Guides</h2>
        <p className="mt-2 text-slate-300">
          Deep-dive resources covering career planning, academic success, exams, scholarships, and
          international opportunities.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resourcePages.map((item) => (
            <Link
              key={item.slug}
              href={`/resources/${item.slug}`}
              className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="inline-flex rounded-xl border border-slate-700 bg-emerald-950/40 px-3 py-2 text-sm font-semibold text-slate-300">
                Topic Guide
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>

              <span className="mt-5 inline-flex text-sm font-semibold text-blue-300">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">How to Use These Resources Effectively</h2>

        <div className="mt-6 space-y-4">
          {[
            ["1", "Start with Your Target Country", "Choose 2–3 countries that match your academic profile and career goals, then explore specific requirements."],
            ["2", "Cross-Reference with Topic Guides", "Use topic guides to understand entrance exams, scholarships, career planning, and skill development."],
            ["3", "Create a Personal Action Plan", "Document deadlines, requirements, and next steps for each country you are considering."],
          ].map(([step, title, desc]) => (
            <div key={step} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["How often is the information updated?", "Country resources are reviewed quarterly, with major policy changes updated as needed."],
            ["Can I contribute to these resources?", "We welcome feedback from students and educators. Contact us with suggestions for new topics or corrections."],
            ["Are these resources free to use?", "Yes, all resources are completely free and designed to help students make informed decisions."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5">
              <h3 className="text-base font-semibold text-white">{q}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Ready to Start Your Research?</h2>
        <p className="mt-4 text-slate-300">
          Choose your target country or explore a specific topic to begin building your international
          education and career plan.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/study-abroad" className="site-btn-primary px-5 py-3 text-center">
            Explore Study Abroad Options
          </Link>
          <Link href="/tests" className="site-btn-secondary px-5 py-3 text-center">
            Take Career Assessment
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-white">Educational Disclaimer</h2>

        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
          <p>
            Nishaglobal Education provides educational and informational content to help students and
            parents understand career options, academic pathways, entrance exams, scholarships, stream
            selection, global education planning, and practical next steps.
          </p>
          <p>
            Eligibility criteria, age limits, admission rules, scholarship availability, fee ranges,
            visa rules, exam patterns, and educational policies may change over time.
          </p>
          <p>
            Users should always verify important information from official sources, including
            government departments, embassies, universities, colleges, scholarship portals, and
            examination authorities.
          </p>
          <p>
            Nishaglobal Education is an independent educational guidance platform and is not affiliated
            with or endorsed by any government body, university, board, embassy, or examination authority
            unless explicitly stated.
          </p>
        </div>
      </section>
    </div>
  );
}