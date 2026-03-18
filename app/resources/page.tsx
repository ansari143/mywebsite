import Link from "next/link";
import { resourcePages } from "@/data/resourcePages";

export const metadata = {
  title: "Career Resources for Students After 10th and 12th | Nisha Global Education",
  description:
    "Explore English career guidance resources for Indian students after 10th and 12th including stream selection, exam basics, scholarships, and career planning.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/resources",
  },
};

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
    name: "Nisha Global Education",
    url: "https://nishaglobaleducation.com",
    description:
      "Career guidance platform for Indian students after 10th and 12th with stream comparison, entrance exam guides, and planning support.",
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Student Career Resources
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources for Smart Career Decisions
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore practical career guidance resources for students after 10th
            and 12th. Learn about stream selection, entrance exam basics,
            scholarships, fee ranges, colleges, and long-term career planning
            in one place.
          </p>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {resourcePages.map((item, index) => (
          <Link
            key={item.slug}
            href={`/resources/${item.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                cardGradients[index % cardGradients.length]
              }`}
            />

            <div
              className={`inline-flex rounded-xl bg-gradient-to-br ${
                cardGradients[index % cardGradients.length]
              } px-3 py-2 text-sm font-semibold text-gray-700`}
            >
              Resource Guide
            </div>

            <h2 className="mt-4 text-lg font-semibold leading-7 text-gray-900 transition group-hover:text-blue-700">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {item.description}
            </p>

            <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-700">
              Read guide
              <span className="ml-1 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">Disclaimer</h2>
        <div className="mt-3 space-y-3 text-sm leading-7 text-gray-600">
          <p>
            Nisha Global Education provides educational and informational
            content to help students and parents understand career options,
            academic pathways, entrance exams, scholarships, stream
            selection, and practical planning after 10th and 12th.
          </p>
          <p>
            We try to keep information accurate and useful, but eligibility
            criteria, age limits, admission rules, scholarship availability, fee
            ranges, exam patterns, and educational policies may change over
            time.
          </p>
          <p>
            Users should always verify important information from official
            sources, including government departments, education boards,
            universities, colleges, scholarship portals, and examination
            authorities, before making final academic or career decisions.
          </p>
          <p>
            Nisha Global Education is an independent educational guidance
            platform and is not affiliated with or endorsed by any government
            body, university, board, or examination authority unless explicitly
            stated. Promotional or featured listings, when published, should be
            treated as labeled informational content and not as admission
            guarantees.
          </p>
        </div>
      </section>
    </div>
  );
}