import TrustComponent from "@/components/TrustComponent";

const heroClass =
  "rounded-3xl border border-slate-700 bg-gradient-to-br from-[#071226] via-[#0B1730] to-[#112240] p-6 shadow-sm sm:p-8 lg:p-10";

const sectionClass =
  "rounded-3xl border border-slate-700 bg-gradient-to-br from-[#0B1730] to-[#16213E] p-6 shadow-sm sm:p-8";

const cardClass =
  "rounded-2xl border border-slate-700 bg-[#15233d] p-5";

export const metadata = {
  title: "Contact | Nishaglobal Education",
  description:
    "Contact Nishaglobal Education for global career guidance, study abroad support, educational resources, skill learning, partnerships, and collaboration enquiries.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nishaglobaleducation.com/contact",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://www.nishaglobaleducation.com",
    email: "nishaglobaleducation@gmail.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "nishaglobaleducation@gmail.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "nishaglobaleducation@gmail.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <div className="site-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className={heroClass}>
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
            Contact Nishaglobal Education
          </div>

          <h1 className="mt-4 text-2xl font-bold text-white sm:text-4xl">
            Contact Us for Career Guidance, Study Abroad Support, and Global Opportunities
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            Nishaglobal Education supports students, parents, and learners who
            are exploring career options worldwide. You can contact us for
            stream selection after 10th or 12th, study abroad guidance, global
            career pathways, skill learning, scholarships, admissions, aviation
            careers, resource support, collaborations, and advertising
            enquiries.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            We aim to make career guidance simple, practical, and globally
            relevant for students planning their future in countries such as the
            USA, Canada, the UK, Australia, Europe, and Mexico.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-white">How we support you</h2>
        <p className="mt-3 text-sm leading-7 text-slate-200">
          Our team reviews messages from students and parents, and we respond within 3 working days. We do not share your personal details without consent.
        </p>
        <TrustComponent
          author="Nishaglobal Education support team"
          reviewedBy="Student success and education advisors"
          lastUpdated="April 2026"
          disclaimer="We provide informational guidance only. Always verify admissions, visa, scholarship, and career decisions with official sources."
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className={sectionClass}>
          <h2 className="text-xl font-semibold text-white">
            Send Your Message
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-300">
            Use this form if you need guidance about careers, study abroad,
            global skills, scholarships, admissions, country-specific education
            options, or partnership opportunities.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-200">
            Please do not share sensitive personal documents here. Provide enough detail for us to understand your goals, and we will reply with helpful next steps.
          </p>

          <form
            action="https://formspree.io/f/xwvrrzwj"
            method="POST"
            className="mt-6 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="Your country"
                  className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="userType"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  I Am
                </label>
                <select
                  id="userType"
                  name="userType"
                  className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                  <option value="Teacher / Counselor">Teacher / Counselor</option>
                  <option value="Institution / College">Institution / College</option>
                  <option value="Brand / Advertiser">Brand / Advertiser</option>
                  <option value="Partner / Collaborator">Partner / Collaborator</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="After 10th Guidance">After 10th Guidance</option>
                <option value="After 12th Guidance">After 12th Guidance</option>
                <option value="Study Abroad Guidance">Study Abroad Guidance</option>
                <option value="Study in USA">Study in USA</option>
                <option value="Study in Canada">Study in Canada</option>
                <option value="Study in UK">Study in UK</option>
                <option value="Study in Australia">Study in Australia</option>
                <option value="Study in Europe">Study in Europe</option>
                <option value="International Student Support">
                  International Student Support
                </option>
                <option value="Scholarship Guidance">Scholarship Guidance</option>
                <option value="Visa and Admission Questions">
                  Visa and Admission Questions
                </option>
                <option value="Aviation Career">Aviation Career</option>
                <option value="College / Institute Guidance">
                  College / Institute Guidance
                </option>
                <option value="High-Demand Skills">High-Demand Skills</option>
                <option value="Remote Work / Global Skills">
                  Remote Work / Global Skills
                </option>
                <option value="Advertisement / Sponsored Listing">
                  Advertisement / Sponsored Listing
                </option>
                <option value="Collaboration">Collaboration</option>
                <option value="Partnership">Partnership</option>
                <option value="Media / Press Enquiry">Media / Press Enquiry</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Write your question here. You can include your class, stream, country of interest, preferred course, or the type of guidance you need."
                className="w-full rounded-xl border border-slate-600 bg-[#15233d] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                required
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission - Nishaglobal Education"
            />

            <button
              type="submit"
              className="site-btn-primary px-5 py-3"
            >
              Send Message
            </button>
          </form>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-slate-700 bg-[#15233d] p-6">
            <h2 className="text-lg font-semibold text-white">
              Contact Email
            </h2>
            <a
              href="mailto:nishaglobaleducation@gmail.com"
              className="mt-3 block text-sm font-medium text-blue-700 hover:underline"
            >
              nishaglobaleducation@gmail.com
            </a>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Contact us directly for career support, study abroad questions,
              collaborations, partnerships, or educational enquiries.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-700 bg-[#15233d] p-6">
            <h2 className="text-lg font-semibold text-slate-300">
              What You Can Contact Us About
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
              <li>• Stream selection after 10th or 12th</li>
              <li>• Study abroad options by country</li>
              <li>• Scholarships and admission guidance</li>
              <li>• Global career paths and job direction</li>
              <li>• Aviation, nursing, engineering, commerce, and more</li>
              <li>• High-demand skills and future-ready learning</li>
              <li>• Partnerships, advertising, and collaboration</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-purple-100 bg-purple-50 p-6">
            <h2 className="text-lg font-semibold text-black">
              Popular Countries
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-black-300">
              <li>• USA</li>
              <li>• Canada</li>
              <li>• UK</li>
              <li>• Australia</li>
              <li>• Europe</li>
              <li>• Mexico</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-black">
              Before You Message
            </h2>
            <p className="mt-3 text-sm leading-7 text-black-300">
              To help us understand your question better, you can mention your
              current class or qualification, country of interest, preferred
              course or career, and the guidance you need.
            </p>
          </section>

          <section className="rounded-3xl border border-gray-200 bg-[#15233d] p-6">
            <h2 className="text-lg font-semibold text-white">
              Important Note
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Nishaglobal Education provides educational and informational
              guidance only. We do not guarantee admission, visa approval,
              scholarships, job placement, or immigration outcomes. Users should
              always verify final details through official institutions,
              embassies, universities, or authorized sources before making
              decisions.
            </p>
          </section>
          <section className="rounded-3xl border border-indigo-100 bg-[#15233d] p-6">
  <h2 className="text-lg font-semibold text-white">
    Explore Important Pages
  </h2>

  <p className="mt-2 text-sm text-slate-300">
    You can also explore these pages for detailed guidance before contacting us.
  </p>

  <ul className="mt-4 space-y-3 text-sm font-medium text-indigo-700">
    <li>
      <a href="/study-in-usa" className="hover:underline">
        🌎 Study in USA Guide
      </a>
    </li>
    <li>
      <a href="/study-in-canada" className="hover:underline">
        🍁 Study in Canada Guide
      </a>
    </li>
    <li>
      <a href="/global-careers" className="hover:underline">
        💼 Global Career Opportunities
      </a>
    </li>
    <li>
      <a href="/international-students" className="hover:underline">
        🎓 International Students Guide
      </a>
    </li>
    <li>
      <a href="/privacy-policy" className="hover:underline">
        🔐 Privacy Policy
      </a>
    </li>
    <li>
      <a href="/disclaimer" className="hover:underline">
        ⚠️ Disclaimer
      </a>
    </li>
  </ul>
</section>
        </aside>
      </div>
    </div>
  );
}