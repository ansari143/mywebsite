export const metadata = {
  title: "Privacy Policy | Nishaglobal Education",
  description:
    "Privacy Policy for Nishaglobal Education covering data collection, usage, cookies, and user rights for our global career guidance platform.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/privacy-policy",
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
    url: "https://nishaglobaleducation.com/privacy-policy",
    isPartOf: {
      "@type": "WebSite",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
    },
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
  <p>
    Nishaglobal Education respects your privacy and is committed to protecting your information.
    This Privacy Policy explains what data may be collected, how it is used, and how it is handled
    across our global education platform.
  </p>

  <h2 className="font-semibold text-slate-900">Information We May Collect</h2>
  <p>
    We may collect limited information when you use our website, including:
  </p>
  <ul className="list-disc ml-6">
    <li>Device type, browser, and operating system</li>
    <li>General location (country-level, not exact location)</li>
    <li>Pages visited, time spent, and website interaction</li>
    <li>Information submitted through contact forms (name, email, message)</li>
    <li>Educational preferences (such as interests, career choices, or test responses)</li>
  </ul>

  <h2 className="font-semibold text-slate-900">How We Use Information</h2>
  <p>Collected information may be used to:</p>
  <ul className="list-disc ml-6">
    <li>Provide career guidance and study abroad information</li>
    <li>Respond to user enquiries and support requests</li>
    <li>Improve website performance, content, and user experience</li>
    <li>Understand audience behavior and usage trends</li>
    <li>Ensure platform security and prevent misuse</li>
  </ul>

  <p>
    We do not sell or rent personal data submitted through this website.
  </p>

  <h2 className="font-semibold text-slate-900">Career Tests and Educational Inputs</h2>
  <p>
    When you use career tests or tools on this website, your inputs are used only to generate
    general guidance and recommendations. These results are for informational purposes only and
    do not represent professional advice, official evaluation, or guaranteed outcomes.
  </p>

  <h2 className="font-semibold text-slate-900">Cookies, Analytics, and Tracking</h2>
  <p>
    This website may use cookies and similar technologies to improve functionality,
    analyze usage, and enhance user experience.
  </p>
  <p>
    You can control or disable cookies through your browser settings at any time.
  </p>

  <h2 className="font-semibold text-slate-900">Google AdSense and Third-Party Advertising</h2>
  <p>
    Nishaglobal Education may display advertisements through Google AdSense or similar platforms.
    These services may use cookies (including DoubleClick cookies) to serve ads based on your visits
    to this and other websites.
  </p>

  <p>
    Users may opt out of personalized advertising by visiting:
    <a
      href="https://adssettings.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 font-medium text-blue-700 hover:underline"
    >
      Google Ads Settings
    </a>
  </p>

  <p>
    Third-party services such as analytics providers and advertising partners operate under their own
    privacy policies. We encourage users to review those policies separately.
  </p>

  <h2 className="font-semibold text-slate-900">Global Users</h2>
  <p>
    Our platform is accessible worldwide. By using this website, you understand that your information
    may be processed in accordance with this policy, regardless of your country of residence.
  </p>

  <h2 className="font-semibold text-slate-900">External Links</h2>
  <p>
    This website may contain links to external websites, including universities, official portals,
    and third-party platforms. We are not responsible for the privacy practices or content of these websites.
  </p>

  <h2 className="font-semibold text-slate-900">Children and Student Use</h2>
  <p>
    Some content is designed for students. Users should avoid submitting sensitive personal data.
    Parents or guardians are encouraged to guide younger users when using the platform.
  </p>

  <h2 className="font-semibold text-slate-900">Data Security</h2>
  <p>
    We take reasonable steps to protect user data. However, no internet-based system is completely secure.
    Users should avoid sharing highly sensitive information unless required through official and secure channels.
  </p>

  <h2 className="font-semibold text-slate-900">Policy Updates</h2>
  <p>
    This Privacy Policy may be updated from time to time to reflect changes in services,
    legal requirements, or platform functionality. Continued use of the website indicates acceptance of updates.
  </p>

  <h2 className="font-semibold text-slate-900">Contact</h2>
  <p>
    For privacy-related questions or requests, please contact us via:
  </p>

  <ul className="list-disc ml-6">
    <li>
      Email:
      <a
        className="ml-1 font-medium text-blue-700 hover:underline"
        href="mailto:nishaglobaleducation@gmail.com"
      >
        nishaglobaleducation@gmail.com
      </a>
    </li>
    <li>
      Contact Page:
      <a
        className="ml-1 font-medium text-blue-700 hover:underline"
        href="/contact"
      >
        /contact
      </a>
    </li>
  </ul>
      </div>
    </div>
  );
}













