export const metadata = {
  title: "Terms & Conditions | Nishaglobal Education",
  description:
    "Terms and Conditions for using the Nishaglobal Education website, including career tests, educational resources, and contact submissions.",
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
      "Terms and Conditions for using the Nishaglobal Education website, including career tests, educational resources, and contact submissions.",
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

      <p className="mt-2 text-sm text-slate-500">Last updated: March 2026</p>

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          Welcome to Nishaglobal Education. By accessing or using this website,
          you agree to these Terms & Conditions.
        </p>

        <h2 className="font-semibold text-slate-900">Use of Website</h2>
        <p>
          This website provides educational information, career guidance
          resources, stream suggestions, quizzes, and learning-related content
          for general informational use. You agree to use the website lawfully
          and responsibly.
        </p>

        <h2 className="font-semibold text-slate-900">Career Tests and Guidance</h2>
        <p>
          Career tests, result pages, stream suggestions, and resource notes are
          guidance tools only. They do not constitute guaranteed admission,
          guaranteed eligibility, guaranteed selection, guaranteed placement, or
          professional counselling advice.
        </p>

        <h2 className="font-semibold text-slate-900">Content Accuracy and Updates</h2>
        <p>
          We aim to keep information useful and practical, but educational
          policies, entrance rules, fee ranges, age limits, counselling systems,
          institution details, placement trends, and abroad pathways may change
          over time. Users must verify important details from official sources
          before making decisions or payments.
        </p>

        <h2 className="font-semibold text-slate-900">Featured Listings, Ads, and Sponsored Content</h2>
        <p>
          From time to time, the website may display featured colleges,
          institutes, courses, products, collaborations, advertisements, or
          sponsored educational content. Such content should be treated as
          informational or promotional in nature and not as a guarantee of
          admission, job, rank, visa, or outcome.
        </p>

        <h2 className="font-semibold text-slate-900">Intellectual Property</h2>
        <p>
          Unless otherwise stated, text, layout, branding, tests, resource
          content, graphics, and educational materials on this website belong to
          Nishaglobal Education. Content should not be copied, reproduced,
          republished, or redistributed without permission.
        </p>

        <h2 className="font-semibold text-slate-900">User Submissions</h2>
        <p>
          By submitting a message, enquiry, or form through the website, you
          confirm that the information provided is accurate to the best of your
          knowledge and does not violate any law or third-party rights.
        </p>

        <h2 className="font-semibold text-slate-900">External Links</h2>
        <p>
          This website may contain links to external websites, official portals,
          or third-party services. We are not responsible for their content,
          admission processes, privacy practices, products, or policies.
        </p>

        <h2 className="font-semibold text-slate-900">Limitation of Liability</h2>
        <p>
          Nishaglobal Education is not responsible for losses, dissatisfaction,
          enrolment outcomes, payment disputes, admission results, recruitment
          results, or career decisions made on the basis of website content,
          third-party claims, or partner representations.
        </p>

        <h2 className="font-semibold text-slate-900">Changes to Terms</h2>
        <p>
          These Terms & Conditions may be updated from time to time. Continued
          use of the website after updates indicates acceptance of the revised
          terms.
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
