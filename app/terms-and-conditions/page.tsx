export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Nishaglobal Education covering website use, educational content, user responsibility, advertisements, and external links.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    description:
      "Terms and Conditions for Nishaglobal Education covering website use, educational content, user responsibility, advertisements, and external links.",
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

      <p className="mt-2 text-sm text-slate-500">Last updated: March 24, 2026</p>

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          By accessing or using Nishaglobal Education, you agree to these Terms
          & Conditions. If you do not agree, please do not use the website.
        </p>

        <h2 className="font-semibold text-slate-900">Purpose of the Website</h2>
        <p>
          Nishaglobal Education publishes career guidance, educational
          resources, career tests, and skills-related content for informational
          and educational purposes. The website is designed to help students and
          parents explore options after 10th and 12th.
        </p>

        <h2 className="font-semibold text-slate-900">No Guarantee of Outcome</h2>
        <p>
          Career tests, articles, score-based suggestions, eligibility notes,
          fee ranges, college examples, institution examples, placement
          information, and abroad opportunities are intended to support initial
          planning only. They do not guarantee admission, scholarships, jobs,
          ranks, salaries, visas, licensing, or placement.
        </p>

        <h2 className="font-semibold text-slate-900">User Responsibility</h2>
        <p>
          You agree to use the website lawfully and responsibly. You are
          responsible for verifying important details from official sources
          before making decisions related to education, counselling, admission,
          payments, travel, training, employment, or visas.
        </p>

        <h2 className="font-semibold text-slate-900">Accuracy of Information</h2>
        <p>
          We try to keep content practical and useful, but educational rules,
          age limits, reservation policies, counselling systems, institution
          details, admission processes, fee structures, and entrance exam
          requirements may change over time. Content may not always reflect the
          latest official update at every moment.
        </p>

        <h2 className="font-semibold text-slate-900">Advertisements and Sponsored Content</h2>
        <p>
          The website may display advertisements, sponsored content, partner
          listings, or affiliate-style promotional placements in the future.
          Such content should be treated as informational or promotional in
          nature and not as a personal recommendation or guaranteed result.
        </p>

        <h2 className="font-semibold text-slate-900">Intellectual Property</h2>
        <p>
          Unless otherwise stated, the website content, branding, text, tests,
          educational materials, graphics, and layout belong to Nishaglobal
          Education. Content should not be copied, reproduced, republished, or
          redistributed without permission.
        </p>

        <h2 className="font-semibold text-slate-900">External Links</h2>
        <p>
          This website may link to third-party websites, official portals,
          colleges, exam authorities, social media pages, or other resources.
          We are not responsible for their content, services, admissions,
          payment systems, policies, or privacy practices.
        </p>

        <h2 className="font-semibold text-slate-900">Limitation of Liability</h2>
        <p>
          Nishaglobal Education is not responsible for losses, dissatisfaction,
          rejected applications, failed admissions, payment disputes,
          recruitment outcomes, or decisions made on the basis of website
          content, advertisements, or third-party claims.
        </p>

        <h2 className="font-semibold text-slate-900">Changes to These Terms</h2>
        <p>
          These Terms & Conditions may be updated from time to time. Continued
          use of the website after changes are posted indicates acceptance of
          the revised terms.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have questions regarding these terms, please contact
          Nishaglobal Education through the Contact page or email
          {" "}
          <a className="font-medium text-blue-700 hover:underline" href="mailto:nishaglobaleducation@gmail.com">
            nishaglobaleducation@gmail.com
          </a>
          .
        </p>

        <p className="pt-4 text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </p>
      </div>
    </div>
  );
}
