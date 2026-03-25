import Link from "next/link";
import { notFound } from "next/navigation";
import { countryResourcesWithTopics, getCountryTopic } from "@/data/countryResources";

type Props = {
  params: Promise<{ country: string; topic: string }>;
};

export async function generateStaticParams() {
  return countryResourcesWithTopics.flatMap((country) =>
    country.topics.map((topic) => ({
      country: country.slug,
      topic: topic.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { country, topic } = await params;
  const data = getCountryTopic(country, topic);

  if (!data) {
    return {
      title: "Resource Topic Not Found | Nishaglobal Education",
      description: "The requested resource topic could not be found.",
    };
  }

  return {
    title: `${data.topic.title} | Nishaglobal Education`,
    description: data.topic.description,
    alternates: {
      canonical: `https://nishaglobaleducation.com/resources/country/${data.country.slug}/${data.topic.slug}`,
    },
  };
}

export default async function CountryTopicPage({ params }: Props) {
  const { country, topic } = await params;
  const data = getCountryTopic(country, topic);

  if (!data) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.topic.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        name: `${data.country.name} Resources`,
        item: `https://nishaglobaleducation.com/resources/country/${data.country.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: data.topic.title,
        item: `https://nishaglobaleducation.com/resources/country/${data.country.slug}/${data.topic.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <Link href="/resources" className="text-blue-700 hover:underline">Resources</Link>
          <span className="text-gray-400">/</span>
          <Link href={`/resources/country/${data.country.slug}`} className="text-blue-700 hover:underline">{data.country.name}</Link>
        </div>

        <div className="mt-4 max-w-4xl space-y-4">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {data.country.flag} {data.country.name}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.topic.title}</h1>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">{data.topic.intro}</p>
        </div>
      </section>

      <section className="space-y-6">
        {data.topic.sections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
              {section.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-gray-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {data.topic.faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700 sm:text-base">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">Continue exploring</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
          <Link href={`/resources/country/${data.country.slug}`} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-100">
            {data.country.name} resource hub
          </Link>
          <Link href="/global-careers" className="rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-100">
            Global careers
          </Link>
          <Link href="/tests" className="rounded-full border border-blue-200 bg-white px-4 py-2 text-blue-700 hover:bg-blue-100">
            Free career tests
          </Link>
        </div>
      </section>
    </div>
  );
}
