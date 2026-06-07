import Link from "next/link";
import { notFound } from "next/navigation";
import {
  countryResourcesWithTopics,
  getCountryResource,
  isCountryUsingDefaultTopics,
} from "@/data/countryResources";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  return countryResourcesWithTopics.map((country) => ({
    country: country.slug,
  }));
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
    robots: isCountryUsingDefaultTopics(item.slug) ? "noindex,follow" : undefined,
    alternates: {
      canonical: `https://www.nishaglobaleducation.com/resources/country/${item.slug}`,
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
        item: "https://www.nishaglobaleducation.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://www.nishaglobaleducation.com/resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${item.name} Resources`,
        item: `https://www.nishaglobaleducation.com/resources/country/${item.slug}`,
      },
    ],
  };

  return (
    <div className="site-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <Link
          href="/resources"
          className="inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200 hover:underline"
        >
          ← Back to Resources
        </Link>

        <div className="mt-5 max-w-4xl">
          <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
            {item.flag} {item.name} Resource Hub
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {item.heroTitle}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            {item.description}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        <div className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-white">Overview</h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
            {item.overview.map((paragraph) => (
              <p key={paragraph} className="text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-white">
            Why students explore {item.name}
          </h2>

          <ul className="mt-5 space-y-3 text-sm leading-7 sm:text-base">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4"
              >
                <div className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-slate-300">{highlight}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Popular resource topics
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Use country-specific pages so visitors can find study, visa,
              scholarship, and work guidance faster.
            </p>
          </div>

          <Link
            href="/study-abroad"
            className="text-sm font-semibold text-blue-300 hover:text-blue-200 hover:underline"
          >
            Explore full study abroad section →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {item.popularTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/resources/country/${item.slug}/${topic.slug}`}
              className="rounded-2xl border border-slate-700 bg-[#0b1220] p-5 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-lg font-semibold text-white">
                {topic.label}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                {topic.short}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-300">
                Open guide →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-white">Important note</h2>

        <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
          <p>
            Country requirements can change. Tuition, visa rules, scholarships,
            work rights, living costs, and program eligibility should always be
            verified from official university, embassy, government, or
            examination sources.
          </p>

          <p>
            Nishaglobal Education provides educational guidance to help students
            compare options more clearly. It does not provide admission
            guarantees or visa approvals.
          </p>
        </div>
      </section>
    </div>
  );
}