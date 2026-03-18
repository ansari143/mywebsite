export const metadata = {
  title: "Disclaimer | Nishaglobal Education",
  description: "Disclaimer for Nishaglobal Education website.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    description: "Disclaimer for Nishaglobal Education website.",
    url: "https://nishaglobaleducation.com/disclaimer",
    isPartOf: {
      "@type": "WebSite",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
    },
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }}
      />

      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Disclaimer
      </h1>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          The career tests, stream suggestions, quizzes, resources, and skill
          guides published on Nishaglobal Education are intended for general
          educational and informational purposes only.
        </p>

        <p>
          Test results, stream suggestions, eligibility notes, age limits, fee
          ranges, college examples, placement tips, and abroad guidance are
          designed to help students and parents do initial planning. They are
          not a substitute for official notifications, admission bulletins,
          regulator guidelines, counselling authorities, or professional
          academic advice.
        </p>

        <p>
          We try to present useful and practical information, but educational
          rules, entrance patterns, reservation policies, counselling systems,
          fee structures, placement trends, licensing requirements, and study
          pathways may change over time and may differ by institute, state,
          country, category, and admission year.
        </p>

        <p>
          Any college, institute, coaching, or course examples mentioned on the
          website are shared for guidance and discovery purposes. Their mention
          does not mean endorsement, guaranteed admission, guaranteed job,
          guaranteed visa, or guaranteed placement unless expressly stated.
        </p>

        <p>
          Any featured, sponsored, partner, or advertisement content will be
          intended as labeled promotional content. Users should perform their
          own due diligence before making any payment, enrolment, or career
          decision.
        </p>

        <p>
          Users should always verify important details from official sources and
          discuss major academic or career decisions with parents, teachers,
          qualified counsellors, or the relevant institution.
        </p>

        <p>
          Nishaglobal Education is an independent guidance platform and is not
          affiliated with any government body, examination authority,
          university, airline, hospital, recruiter, or training institute
          unless explicitly stated.
        </p>
      </div>
    </div>
  );
}
