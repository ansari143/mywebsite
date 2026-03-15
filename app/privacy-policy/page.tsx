export const metadata = {
  title: "Privacy Policy | Nishaglobal Education",
  description:
    "Privacy Policy for Nishaglobal Education covering website usage, cookies, analytics, and user information protection.",
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
      "Privacy Policy for Nishaglobal Education covering website usage, cookies, analytics, and user information protection.",
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

      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          Nishaglobal Education respects your privacy and is committed to
          protecting any information you share while using this website.
        </p>

        <h2 className="font-semibold text-slate-900">
          Information We Collect
        </h2>
        <p>
          We may collect limited non-personal information such as browser type,
          device type, pages visited, and general usage statistics to improve
          the website experience. If you voluntarily submit information, for
          example through forms or feedback, it will only be used to respond to
          your request.
        </p>

        <h2 className="font-semibold text-slate-900">Use of Information</h2>
        <p>
          The information collected is used only for improving website
          performance, understanding visitor behavior, and enhancing
          educational content and career guidance resources.
        </p>

        <h2 className="font-semibold text-slate-900">Cookies</h2>
        <p>
          This website may use cookies or similar technologies to improve user
          experience and analyze website traffic. You can disable cookies in
          your browser settings if you prefer.
        </p>

        <h2 className="font-semibold text-slate-900">Third-Party Services</h2>
        <p>
          We may use third-party services such as analytics tools to understand
          website usage and improve performance. These services may collect
          anonymous usage data according to their own privacy policies.
        </p>

        <h2 className="font-semibold text-slate-900">Data Security</h2>
        <p>
          We take reasonable measures to protect website information. However,
          no online platform can guarantee complete security of data
          transmission over the internet.
        </p>

        <h2 className="font-semibold text-slate-900">Children’s Information</h2>
        <p>
          This website is intended for students and general users. We do not
          knowingly collect sensitive personal information from minors.
        </p>

        <h2 className="font-semibold text-slate-900">External Links</h2>
        <p>
          Our website may contain links to external websites for educational
          resources or official information. We are not responsible for the
          privacy practices or content of those external websites.
        </p>

        <h2 className="font-semibold text-slate-900">Policy Updates</h2>
        <p>
          This Privacy Policy may be updated periodically to reflect changes in
          the website or legal requirements. Continued use of the website
          indicates acceptance of the updated policy.
        </p>

        <h2 className="font-semibold text-slate-900">Contact</h2>
        <p>
          If you have any questions regarding this Privacy Policy, you may
          contact the Nishaglobal Education team through the website.
        </p>

        <p className="pt-4 text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </p>
      </div>
    </div>
  );
}