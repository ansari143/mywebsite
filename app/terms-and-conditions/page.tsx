export const metadata = {
  title: "About Us | Nishaglobal Education",
  description:
  "Nishaglobal Education is a global career guidance platform helping students choose the right career, explore study abroad options, take career tests, and learn future-ready skills like AI, data, and technology.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/about",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nishaglobal Education",
    url: "https://nishaglobaleducation.com/about",
    description:
  "Nishaglobal Education is a global career guidance platform helping students choose the right career, explore study abroad options, take career tests, and learn future-ready skills like AI, data, and technology.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
      logo: "https://nishaglobaleducation.com/logo.png",
      email: "nishaglobaleducation@gmail.com",
       sameAs: [
      "https://www.facebook.com/global.nisha",
      "https://instagram.com/nisha.global",
      "https://www.youtube.com/@NishaglobalEducation",
      "https://www.facebook.com/profile.php?id=61588627138300",
      "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
    ],
    },
  };

  return (

<div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">

  <p>
    By accessing or using Nishaglobal Education, you agree to these Terms & Conditions.
    If you do not agree with any part of these terms, please discontinue use of the website.
  </p>

  <h2 className="font-semibold text-slate-900">Purpose of the Website</h2>
  <p>
    Nishaglobal Education is a global career guidance platform providing career tests,
    study abroad information, educational resources, blog articles, and skill-based content.
    The platform is designed for informational and educational purposes only.
  </p>

  <h2 className="font-semibold text-slate-900">No Professional Advice</h2>
  <p>
    The content provided on this website does not constitute professional, legal, financial,
    immigration, or academic counseling advice. Users should always verify information
    from official sources or consult qualified professionals before making decisions.
  </p>

  <h2 className="font-semibold text-slate-900">No Guarantee of Outcome</h2>
  <p>
    All content including career tests, recommendations, country guides, eligibility criteria,
    fee estimates, salary examples, scholarships, and blog content is provided for guidance only.
  </p>

  <ul className="list-disc ml-6">
    <li>Admission to any institution</li>
    <li>Visa approval or immigration outcomes</li>
    <li>Scholarships or financial aid</li>
    <li>Job placement or salary levels</li>
    <li>Licensing or certification success</li>
  </ul>

  <h2 className="font-semibold text-slate-900">User Responsibility</h2>
  <p>
    Users are responsible for verifying all critical information through official sources
    such as universities, government websites, embassies, and authorized institutions
    before making academic, financial, or career decisions.
  </p>

  <h2 className="font-semibold text-slate-900">Use of Career Tests and Content</h2>
  <p>
    Career tests and recommendations are designed to provide general insights based on user input.
    These results are not definitive evaluations and should not be treated as guaranteed outcomes.
  </p>

  <h2 className="font-semibold text-slate-900">Blog and Content Usage</h2>
  <p>
    Blog articles, guides, and educational content are intended to provide general awareness.
    Content may not always reflect the latest policy changes or personal circumstances.
  </p>

  <h2 className="font-semibold text-slate-900">User Conduct</h2>
  <p>
    Users agree not to misuse the website, attempt unauthorized access, submit false information,
    or engage in activities that may harm the platform or other users.
  </p>

  <h2 className="font-semibold text-slate-900">Global Use</h2>
  <p>
    This website is accessible worldwide. Users are responsible for complying with local laws,
    regulations, and eligibility requirements in their respective countries.
  </p>

  <h2 className="font-semibold text-slate-900">Contact and Communication</h2>
  <p>
    When you submit information through forms or email, you agree that we may use your details
    to respond to enquiries or provide guidance. This does not establish any formal advisory,
    consulting, or contractual relationship.
  </p>

  <h2 className="font-semibold text-slate-900">Accuracy of Information</h2>
  <p>
    While we aim to provide accurate and useful information, requirements, fees, visa rules,
    and career opportunities may change over time. We do not guarantee completeness or accuracy at all times.
  </p>

  <h2 className="font-semibold text-slate-900">Advertisements and Third-Party Content</h2>
  <p>
    The website may display advertisements or sponsored content (including Google AdSense).
    These do not represent endorsements, guarantees, or official partnerships unless explicitly stated.
  </p>

  <h2 className="font-semibold text-slate-900">Intellectual Property</h2>
  <p>
    All content including text, design, branding, and educational materials belongs to Nishaglobal Education.
    Unauthorized reproduction, distribution, or copying is prohibited.
  </p>

  <h2 className="font-semibold text-slate-900">External Links</h2>
  <p>
    The website may include links to external websites. We are not responsible for the content,
    policies, or services of third-party platforms.
  </p>

  <h2 className="font-semibold text-slate-900">Limitation of Liability</h2>
  <p>
    Nishaglobal Education is not liable for any direct or indirect loss resulting from
    reliance on website content, including but not limited to application outcomes,
    visa decisions, financial losses, or third-party actions.
  </p>

  <h2 className="font-semibold text-slate-900">Changes to Terms</h2>
  <p>
    These Terms & Conditions may be updated periodically. Continued use of the website
    indicates acceptance of any updates.
  </p>

  <h2 className="font-semibold text-slate-900">Contact</h2>
  <p>
    For any questions regarding these terms, please contact:
    <a className="ml-1 font-medium text-blue-700 hover:underline" href="mailto:nishaglobaleducation@gmail.com">
      nishaglobaleducation@gmail.com
    </a>
    or visit
    <a className="ml-1 font-medium text-blue-700 hover:underline" href="/contact">
      /contact
    </a>
  </p>

</div>
  );
}