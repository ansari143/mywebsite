import Link from "next/link";
import { resourcePages } from "@/data/resourcePages";
import { countryResourcesWithTopics } from "@/data/countryResources";

export const metadata = {
  title: "Career Resources by Country and Topic | Nishaglobal Education",
  description:
    "Explore country-based and topic-based career guidance resources for students, including India, USA, Canada, UK, Australia, and Europe.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/resources",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const cardGradients = [
  "from-blue-50 to-indigo-50",
  "from-emerald-50 to-teal-50",
  "from-amber-50 to-orange-50",
  "from-rose-50 to-pink-50",
  "from-violet-50 to-purple-50",
  "from-cyan-50 to-sky-50",
  "from-lime-50 to-green-50",
  "from-fuchsia-50 to-pink-50",
  "from-slate-50 to-gray-100",
  "from-yellow-50 to-amber-50",
];

export default function ResourcesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nishaglobaleducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://nishaglobaleducation.com/resources",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    description:
      "Career guidance platform for students worldwide with country-based resources, study abroad planning, global careers, and practical skill guidance.",
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Country-Based Resource Library
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career Resources: Country-Specific Guidance for Global Students
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Navigate international education and career opportunities with targeted resources organized by destination country. Whether you&apos;re exploring study abroad options or planning your professional path, find practical insights tailored to specific markets and requirements.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Who This Resource Hub Is For</h3>
              <p className="mt-2 text-gray-600">
                Students researching specific countries for education or work, parents seeking location-specific guidance, and professionals planning international career moves. Ideal for those who want detailed, country-focused information rather than generic global advice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Who Should Look Elsewhere</h3>
              <p className="mt-2 text-gray-600">
                Those seeking quick overviews or basic information. This hub is designed for in-depth research, so if you need surface-level answers, start with our main career guides instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">Resource Organization Strategy</h2>
        <p className="mt-3 text-gray-600">
          Our resources follow user search patterns: most students start with country intent (&quot;study in Canada&quot; or &quot;jobs in Australia&quot;), then explore specific topics. This structure provides faster access to relevant information and better supports informed decision-making.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-4">
            <h3 className="font-semibold text-gray-900">Country-First Approach</h3>
            <p className="mt-2 text-sm text-gray-600">
              Start with destination-specific hubs covering education systems, visa requirements, job markets, and cultural insights.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4">
            <h3 className="font-semibold text-gray-900">Topic-Deep Dives</h3>
            <p className="mt-2 text-sm text-gray-600">
              Explore specialized guides on scholarships, entrance exams, career planning, and skill development.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Explore by Country</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              Country-specific resources provide localized insights on education systems, immigration policies, job markets, and cultural adaptation. Each hub includes practical guides for students and professionals.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {countryResourcesWithTopics.map((item, index) => (
            <Link
              key={item.slug}
              href={`/resources/country/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cardGradients[index % cardGradients.length]}`} />

              <div className={`inline-flex rounded-xl bg-gradient-to-br ${cardGradients[index % cardGradients.length]} px-3 py-2 text-sm font-semibold text-gray-700`}>
                {item.flag} {item.name}
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900 transition group-hover:text-blue-700">
                {item.heroTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.popularTopics.slice(0, 3).map((topic) => (
                  <span key={topic.slug} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
                    {topic.label}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-700">
                Open country hub
                <span className="ml-1 transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Specialized Topic Guides</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Deep-dive resources covering essential topics for career planning, academic success, and international opportunities. These guides provide practical frameworks and actionable advice.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resourcePages.map((item, index) => (
            <Link
              key={item.slug}
              href={`/resources/${item.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cardGradients[(index + 3) % cardGradients.length]}`} />

              <div className={`inline-flex rounded-xl bg-gradient-to-br ${cardGradients[(index + 3) % cardGradients.length]} px-3 py-2 text-sm font-semibold text-gray-700`}>
                Topic Guide
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900 transition group-hover:text-blue-700">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>

              <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-700">
                Read guide
                <span className="ml-1 transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-blue-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">How to Use These Resources Effectively</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</div>
            <div>
              <h3 className="font-semibold text-gray-900">Start with Your Target Country</h3>
              <p className="mt-1 text-sm text-gray-600">Choose 2-3 countries that match your academic profile and career goals, then explore their specific requirements and opportunities.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</div>
            <div>
              <h3 className="font-semibold text-gray-900">Cross-Reference with Topic Guides</h3>
              <p className="mt-1 text-sm text-gray-600">Use specialized guides to understand broader concepts like entrance exams, scholarships, or career planning alongside country-specific information.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</div>
            <div>
              <h3 className="font-semibold text-gray-900">Create a Personal Action Plan</h3>
              <p className="mt-1 text-sm text-gray-600">Document key deadlines, requirements, and next steps for each country you&apos;re considering to stay organized throughout your research process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">How often is the information updated?</h3>
            <p className="mt-2 text-sm text-gray-600">Country resources are reviewed quarterly, with major policy changes updated immediately. Topic guides are refreshed annually or when significant developments occur in the field.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">Can I contribute to these resources?</h3>
            <p className="mt-2 text-sm text-gray-600">We welcome feedback from students and educators. Contact us with suggestions for new topics or corrections to existing information.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">Are these resources free to use?</h3>
            <p className="mt-2 text-sm text-gray-600">Yes, all resources are completely free. We believe in providing accessible educational guidance to help students make informed decisions about their future.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Ready to Start Your Research?</h2>
        <p className="mt-4 text-slate-700">
          Choose your target country or explore a specific topic to begin building your international education and career plan.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/study-abroad"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Explore Study Abroad Options
          </Link>
          <Link
            href="/tests"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Career Assessment
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">Educational Disclaimer</h2>
        <div className="mt-3 space-y-3 text-sm leading-7 text-gray-600">
          <p>
            Nishaglobal Education provides educational and informational content to help students and parents understand career options, academic pathways, entrance exams, scholarships, stream selection, global education planning, and practical next steps.
          </p>
          <p>
            Eligibility criteria, age limits, admission rules, scholarship availability, fee ranges, visa rules, exam patterns, and educational policies may change over time.
          </p>
          <p>
            Users should always verify important information from official sources, including government departments, embassies, universities, colleges, scholarship portals, and examination authorities, before making final academic or career decisions.
          </p>
          <p>
            Nishaglobal Education is an independent educational guidance platform and is not affiliated with or endorsed by any government body, university, board, embassy, or examination authority unless explicitly stated.
          </p>
        </div>
      </section>
    </div>
  );
}
