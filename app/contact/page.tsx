export const metadata = {
  title: "Contact | Nishaglobal Education",
  description:
    "Contact Nishaglobal Education for career guidance, educational resources, and skill learning support.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    email: "nishaglobaleducation@gmail.com",
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Contact Nishaglobal Education
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Contact Us
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            If you have questions about career guidance, stream selection,
            educational resources, aviation careers, or high-demand skills,
            feel free to contact us. You can also reach out for college suggestions, institute questions, admission planning, or collaboration and advertisement enquiries.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Send Your Message
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Students, parents, and learners can use this form to ask career and
            learning related questions.
          </p>

          <form
            action="https://formspree.io/f/xwvrrzwj"
            method="POST"
            className="mt-6 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="After 10th Guidance">After 10th Guidance</option>
                <option value="After 12th Guidance">After 12th Guidance</option>
                <option value="Aviation Career">Aviation Career</option>
                <option value="College / Institute Guidance">College / Institute Guidance</option>
                <option value="Admission and Eligibility Question">Admission and Eligibility Question</option>
                <option value="High-Demand Skills">High-Demand Skills</option>
                <option value="Advertisement / Sponsored Listing">Advertisement / Sponsored Listing</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your question here..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
              className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Contact Email
            </h2>
            <a
              href="mailto:nishaglobaleducation@gmail.com"
              className="mt-3 block text-sm font-medium text-blue-700 hover:underline"
            >
              nishaglobaleducation@gmail.com
            </a>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You can also contact us directly by email for guidance,
              questions, or collaboration.
            </p>
          </section>

          <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Good Questions to Ask
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
              <li>• Which stream is best after 10th?</li>
              <li>• What can I do after 12th Science or Commerce?</li>
              <li>• How do I start an aviation career?</li>
              <li>• Which high-demand skills should I learn first?</li>
              <li>• How should I use career test results?</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Note
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              The guidance shared through this website is for educational and
              informational purposes only. Final academic or career decisions
              should be taken after discussing with parents, teachers, or
              qualified counselors.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}