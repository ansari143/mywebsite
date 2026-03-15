export const metadata = {
  title: "Terms & Conditions | Nishaglobal Education",
  description:
    "Terms and Conditions for using the Nishaglobal Education website, including career tests, educational resources, and skill learning guides.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/terms-and-conditions",
  },
};

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    description:
      "Terms and Conditions for using the Nishaglobal Education website, including career tests, educational resources, and skill learning guides.",
    url: "https://nishaglobaleducation.com/terms-and-conditions",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Terms & Conditions
      </h1>

      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          Welcome to Nishaglobal Education. By accessing and using this website,
          you agree to the following terms and conditions.
        </p>

        <h2 className="font-semibold text-slate-900">Use of Website</h2>
        <p>
          This website provides educational information, career guidance
          resources, quizzes, and skill learning materials intended for general
          informational purposes.
        </p>

        <h2 className="font-semibold text-slate-900">
          Career Tests and Guidance
        </h2>
        <p>
          The career tests and recommendations available on this platform are
          designed to provide guidance only. They should not be considered final
          career advice. Important academic or career decisions should be
          discussed with parents, teachers, or professional counselors.
        </p>

        <h2 className="font-semibold text-slate-900">Content Accuracy</h2>
        <p>
          We strive to provide accurate and updated information. However,
          educational policies, admission rules, exam patterns, course
          availability, career opportunities, and technology tools may change
          over time. Users should verify important details from official sources
          before making decisions.
        </p>

        <h2 className="font-semibold text-slate-900">Intellectual Property</h2>
        <p>
          All content on this website including text, guides, graphics, and
          materials is the property of Nishaglobal Education unless otherwise
          stated. Content should not be copied, reproduced, or redistributed
          without permission.
        </p>

        <h2 className="font-semibold text-slate-900">External Links</h2>
        <p>
          Our website may contain links to external websites for educational
          resources or reference information. We are not responsible for the
          accuracy, policies, or practices of third-party websites.
        </p>

        <h2 className="font-semibold text-slate-900">User Responsibility</h2>
        <p>
          Users are responsible for how they use the information provided on
          this website. Nishaglobal Education is not responsible for decisions
          made based on the content available on this platform.
        </p>

        <h2 className="font-semibold text-slate-900">Changes to Terms</h2>
        <p>
          These Terms & Conditions may be updated periodically. Continued use of
          the website after updates indicates acceptance of the revised terms.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have questions regarding these terms, you may contact the
          Nishaglobal Education team through the website.
        </p>

        <p className="pt-4 text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </p>
      </div>
    </div>
  );
}