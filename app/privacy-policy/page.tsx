export const metadata = {
  title: "Privacy Policy",
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

      <p className="mt-2 text-sm text-slate-500">Last updated: March 24, 2026</p>

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
          contact pages, career guidance requests, or advertisement enquiries,
          we may receive personal information such as your name, email address,
          class, marks, stream interest, subject, or message that you choose to
          share.
        </p>

        <h2 className="font-semibold text-slate-900">How We Use Information</h2>
        <p>
          Information may be used to respond to questions, improve educational
          content, understand which resources users find helpful, maintain site
          security and performance, and review collaboration or sponsored
          listing enquiries. We do not sell personal information submitted
          through the website.
        </p>

        <h2 className="font-semibold text-slate-900">Career Tests and Guidance Data</h2>
        <p>
          If you use a career test or similar tool, your answers and result data
          may be processed to show score-based guidance. Such guidance is meant
          for educational support only and should not be treated as an official
          academic recommendation, permanent personal profile, or guaranteed
          outcome.
        </p>

        <h2 className="font-semibold text-slate-900">Cookies, Analytics, and Advertising</h2>
        <p>
          This website may use cookies or similar technologies to remember basic
          preferences, understand traffic, improve performance, and support
          website analytics. We may also use advertising services, including
          Google AdSense or similar providers, which may use cookies to serve
          ads based on user visits. Third-party vendors may use cookies to show
          personalized or non-personalized ads according to their own policies
          and user settings.
        </p>

        <h2 className="font-semibold text-slate-900">Third-Party Services and Links</h2>
        <p>
          We may use third-party tools such as form handlers, analytics
          providers, embedded content, advertisement partners, and outbound
          links to official resources or external websites. We are not
          responsible for the privacy practices, content, or policies of those
          third-party websites and services.
        </p>

        <h2 className="font-semibold text-slate-900">Data Security</h2>
        <p>
          We take reasonable steps to protect information shared with us.
          However, no website, online transmission, or storage method can be
          guaranteed to be completely secure.
        </p>

        <h2 className="font-semibold text-slate-900">Children and Student Users</h2>
        <p>
          Our content is intended for students, parents, and general users. We
          do not knowingly request highly sensitive personal information from
          minors. Students should avoid sharing unnecessary sensitive personal
          data through forms, comments, or messages.
        </p>

        <h2 className="font-semibold text-slate-900">Your Choices</h2>
        <p>
          You may choose not to submit personal information through forms or
          emails. You can also manage cookie preferences through your browser
          settings, although doing so may affect parts of the website
          experience.
        </p>

        <h2 className="font-semibold text-slate-900">Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically to reflect website,
          legal, advertising, or operational changes. Continued use of the
          website indicates acceptance of the updated policy.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have privacy-related questions, you may contact Nishaglobal
          Education through the Contact page or email us at
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
