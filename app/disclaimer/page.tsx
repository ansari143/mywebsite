export const metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for Nishaglobal Education covering career tests, study abroad guidance, educational content, advertisements, and informational use for global users.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    description:
      "Disclaimer for Nishaglobal Education covering career tests, study abroad guidance, educational content, advertisements, and informational use for global users.",
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
          The career tests, stream suggestions, quizzes, study abroad guides, global career content,
          educational resources, articles, and skill-based guidance published on Nishaglobal Education
          are provided for general informational and educational purposes only.
        </p>

        <p>
          Any test result, score-based suggestion, eligibility summary, fee range, salary example,
          college or university reference, scholarship mention, work opportunity, or immigration pathway
          discussed on this website is intended to support early-stage planning and awareness.
        </p>

        <p>
          This information should not be considered official advice, professional counselling,
          or a guarantee of admission, visa approval, job placement, scholarship, income, licensing,
          or long-term settlement.
        </p>

        <h2 className="font-semibold text-slate-900">No Professional or Legal Advice</h2>
        <p>
          Nishaglobal Education does not provide legal, immigration, financial, or licensed career counselling services.
          Users should consult qualified professionals or official authorities for decisions related to admissions,
          visas, immigration, finances, or employment.
        </p>

        <h2 className="font-semibold text-slate-900">Changing Policies and Information</h2>
        <p>
          Educational rules, visa procedures, immigration pathways, work regulations, tuition fees,
          scholarship criteria, and institutional policies may change over time.
          Information on this website may not always reflect the latest official updates.
        </p>

        <h2 className="font-semibold text-slate-900">No Affiliation</h2>
        <p>
          Nishaglobal Education is an independent educational guidance platform.
          We are not affiliated with any government body, immigration authority, examination board,
          university, recruiter, airline, hospital, or training institute unless explicitly stated.
        </p>

        <h2 className="font-semibold text-slate-900">Third-Party Content and Advertisements</h2>
        <p>
          The website may display advertisements, sponsored content, affiliate links,
          or partner listings. These are provided for informational or promotional purposes only.
          We do not guarantee or endorse the services, admissions, outcomes, or claims made by third parties.
        </p>

        <h2 className="font-semibold text-slate-900">User Responsibility</h2>
        <p>
          Users are responsible for verifying all critical information directly from official sources
          such as government portals, embassies, universities, regulatory bodies, and authorized institutions
          before making academic, financial, travel, or career decisions.
        </p>

        <h2 className="font-semibold text-slate-900">Global Use</h2>
        <p>
          This website is accessible worldwide. Users from different countries should ensure that
          they comply with their local laws, regulations, and requirements when using this platform
          or acting on its content.
        </p>

        <h2 className="font-semibold text-slate-900">Limitation of Liability</h2>
        <p>
          Nishaglobal Education is not responsible for any direct or indirect loss, including but not limited to
          admission rejection, visa denial, financial loss, incorrect decisions, or third-party actions,
          resulting from the use of website content or reliance on provided information.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have questions regarding this Disclaimer, please contact
          <a
            className="ml-1 font-medium text-blue-700 hover:underline"
            href="mailto:nishaglobaleducation@gmail.com"
          >
            nishaglobaleducation@gmail.com
          </a>
          or visit
          <a
            className="ml-1 font-medium text-blue-700 hover:underline"
            href="/contact"
          >
            /contact
          </a>
          .
        </p>
      </div>
    </div>
  );
}