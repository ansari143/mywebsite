export const metadata = {
  title: "Privacy Policy | Nishaglobal Education",
  description:
    "Privacy Policy for Nishaglobal Education covering data collection, usage, cookies, and user rights for our global career guidance platform.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/privacy-policy",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy Policy for Nishaglobal Education covering data collection, usage, cookies, and user rights for our global career guidance platform.",
    url: "https://www.nishaglobaleducation.com/privacy-policy",
    isPartOf: {
      "@type": "WebSite",
      name: "Nishaglobal Education",
      url: "https://www.nishaglobaleducation.com",
    },
  };

  return (
    <div className="site-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
        <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
          Legal & Privacy
        </span>

        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
          Nishaglobal Education respects your privacy and is committed to protecting your information.
          This Privacy Policy explains what data may be collected, how it is used, and how it is handled
          across our global education platform.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Information We May Collect</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          We may collect limited information when you use our website, including:
        </p>

        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300 sm:text-base md:grid-cols-2">
          {[
            "Device type, browser, and operating system",
            "General location, such as country-level location, not exact location",
            "Pages visited, time spent, and website interaction",
            "Information submitted through contact forms, such as name, email, and message",
            "Educational preferences, such as interests, career choices, or test responses",
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">How We Use Information</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Collected information may be used to:
        </p>

        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300 sm:text-base md:grid-cols-2">
          {[
            "Provide career guidance and study abroad information",
            "Respond to user enquiries and support requests",
            "Improve website performance, content, and user experience",
            "Understand audience behavior and usage trends",
            "Ensure platform security and prevent misuse",
          ].map((item) => (
            <li key={item} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-2xl border border-emerald-700 bg-emerald-950/40 p-4 text-sm leading-7 text-slate-300 sm:text-base">
          We do not sell or rent personal data submitted through this website.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Career Tests and Educational Inputs</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          When you use career tests or tools on this website, your inputs are used only to generate
          general guidance and recommendations. These results are for informational purposes only and
          do not represent professional advice, official evaluation, or guaranteed outcomes.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Cookies, Analytics, and Tracking</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This website may use cookies and similar technologies to improve functionality, analyze usage,
          and enhance user experience.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
          You can control or disable cookies through your browser settings at any time.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">
          Google AdSense and Third-Party Advertising
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Nishaglobal Education may display advertisements through Google AdSense or similar platforms.
          These services may use cookies, including DoubleClick cookies, to serve ads based on your visits
          to this and other websites.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Users may opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-300 hover:text-blue-200 hover:underline"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Third-party services such as analytics providers and advertising partners operate under their own
          privacy policies. We encourage users to review those policies separately.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Global Users</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Our platform is accessible worldwide. By using this website, you understand that your information
          may be processed in accordance with this policy, regardless of your country of residence.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">External Links</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This website may contain links to external websites, including universities, official portals,
          and third-party platforms. We are not responsible for the privacy practices or content of these websites.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Children and Student Use</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Some content is designed for students. Users should avoid submitting sensitive personal data.
          Parents or guardians are encouraged to guide younger users when using the platform.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Data Security</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          We take reasonable steps to protect user data. However, no internet-based system is completely secure.
          Users should avoid sharing highly sensitive information unless required through official and secure channels.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Policy Updates</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          This Privacy Policy may be updated from time to time to reflect changes in services,
          legal requirements, or platform functionality. Continued use of the website indicates acceptance of updates.
        </p>
      </section>

      <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">Contact</h2>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          For privacy-related questions or requests, please contact us via:
        </p>

        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
          <li className="rounded-2xl border border-amber-800 bg-[#0b1220] p-4">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline"
              href="mailto:nishaglobaleducation@gmail.com"
            >
              nishaglobaleducation@gmail.com
            </a>
          </li>

          <li className="rounded-2xl border border-amber-800 bg-[#0b1220] p-4">
            <span className="font-semibold text-white">Contact Page:</span>{" "}
            <a
              className="font-semibold text-blue-300 hover:text-blue-200 hover:underline"
              href="/contact"
            >
              /contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}