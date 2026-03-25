import Link from "next/link";
import { notFound } from "next/navigation";
import { countryResourcesWithTopics, getCountryResource } from "@/data/countryResources";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  return countryResourcesWithTopics.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { country } = await params;
  const item = getCountryResource(country);

  if (!item) {
    return {
      title: "Country Resources Not Found | Nishaglobal Education",
      description: "The requested country resource page could not be found.",
    };
  }

  return {
    title: `${item.name} Resources | Nishaglobal Education`,
    description: item.description,
    alternates: {
      canonical: `https://nishaglobaleducation.com/resources/country/${item.slug}`,
    },
  };
}

export default async function CountryResourcePage({ params }: Props) {
  const { country } = await params;
  const item = getCountryResource(country);

  if (!item) return notFound();

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
      {
        "@type": "ListItem",
        position: 3,
        name: `${item.name} Resources`,
        item: `https://nishaglobaleducation.com/resources/country/${item.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/resources" className="inline-flex text-sm font-medium text-blue-700 hover:underline">
          ← Back to Resources
        </Link>

        <div className="mt-4 max-w-4xl space-y-4">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {item.flag} {item.name} Resource Hub
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {item.heroTitle}
          </h1>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            {item.description}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-gray-700 sm:text-base">
            {item.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-900">Why students explore {item.name}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Popular resource topics</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              Use country-specific pages so visitors can find study, visa, scholarship, and work guidance faster.
            </p>
          </div>
          <Link href="/study-abroad" className="text-sm font-medium text-blue-700 hover:underline">
            Explore full study abroad section →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {item.popularTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/resources/country/${item.slug}/${topic.slug}`}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{topic.label}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{topic.short}</p>
              <div className="mt-4 text-sm font-medium text-blue-700">Open guide →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">Important note</h2>
        <div className="mt-3 space-y-3 text-sm leading-7 text-gray-700">
          <p>
            Country requirements can change. Tuition, visa rules, scholarships, work rights, living costs, and program eligibility should always be verified from official university, embassy, government, or examination sources.
          </p>
          <p>
            Nishaglobal Education provides educational guidance to help students compare options more clearly. It does not provide admission guarantees or visa approvals.
          </p>
        </div>
      </section>
    </div>
  );
}
