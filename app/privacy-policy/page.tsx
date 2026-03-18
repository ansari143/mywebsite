export const metadata = {
  title: "Privacy Policy | Nishaglobal Education",
  description:
    "Privacy Policy for Nishaglobal Education covering website usage, forms, analytics, cookies, and user information protection.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy Policy for Nishaglobal Education covering website usage, forms, analytics, cookies, and user information protection.",
    url: "https://nishaglobaleducation.com/privacy-policy",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Privacy Policy
      </h1>

      <p className="mt-2 text-sm text-slate-500">Last updated: March 2026</p>

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          Nishaglobal Education respects your privacy and is committed to
          protecting information shared while using this website.
        </p>

        <h2 className="font-semibold text-slate-900">Information We Collect</h2>
        <p>
          We may collect limited information such as browser type, device type,
          pages visited, referral source, and general usage statistics to
          improve the website experience. If you submit details through forms,
          contact pages, or career guidance requests, we may receive personal
          information such as your name, email address, subject, message, class,
          marks, stream interest, or similar information you choose to share.
        </p>

        <h2 className="font-semibold text-slate-900">How We Use Information</h2>
        <p>
          Information may be used to respond to your questions, improve career
          guidance content, understand what resources users need most, maintain
          site performance, and review collaboration or advertisement enquiries.
          We do not sell personal information submitted through the website.
        </p>

        <h2 className="font-semibold text-slate-900">Career Test and Form Data</h2>
        <p>
          If you use a career test or contact form, any information you provide
          is used only for educational guidance, website improvement, or to
          reply to your request. Test results should be treated as guidance and
          not as a permanent personal profile.
        </p>

        <h2 className="font-semibold text-slate-900">Cookies and Analytics</h2>
        <p>
          This website may use cookies or similar technologies to remember basic
          preferences, understand traffic, and improve performance. Analytics or
          third-party tools may collect non-sensitive usage information in
          accordance with their own policies.
        </p>

        <h2 className="font-semibold text-slate-900">Third-Party Services and Links</h2>
        <p>
          We may use third-party form handlers, analytics providers, embedded
          tools, or outbound links to official resources and external websites.
          We are not responsible for the privacy practices, content, or payment
          systems of third-party websites.
        </p>

        <h2 className="font-semibold text-slate-900">Data Security</h2>
        <p>
          We take reasonable steps to protect information shared with us.
          However, no website, transmission method, or storage system can be
          guaranteed to be completely secure.
        </p>

        <h2 className="font-semibold text-slate-900">Children and Student Users</h2>
        <p>
          Our content is intended for students, parents, and general users. We
          do not knowingly request highly sensitive personal information from
          minors. Students should avoid sharing unnecessary sensitive personal
          data in public forms or messages.
        </p>

        <h2 className="font-semibold text-slate-900">Advertising and Sponsored Enquiries</h2>
        <p>
          If a user or institution contacts us regarding collaboration,
          sponsorship, featured listing, or advertisement, the submitted
          information may be used to evaluate and respond to that enquiry.
        </p>

        <h2 className="font-semibold text-slate-900">Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically to reflect website,
          legal, or operational changes. Continued use of the website indicates
          acceptance of the updated policy.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have privacy-related questions, you may contact Nishaglobal
          Education through the Contact page or the published email address.
        </p>

        <p className="pt-4 text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </p>
      </div>
    </div>
  );
}
