import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="site-container py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Nishaglobal Education</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Learn AI skills for every career role with career guidance for students worldwide, including free career tests,
              global education guidance, practical resources, and future-ready skills.
            </p>
            <a
              href="mailto:nishaglobaleducation@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
            >
              <FaEnvelope /> nishaglobaleducation@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Explore</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-700">Home</Link>
              <Link href="/tests" className="hover:text-blue-700">Career Tests</Link>
              <Link href="/global-careers" className="hover:text-blue-700">Global Careers</Link>
              <Link href="/study-abroad" className="hover:text-blue-700">Study Abroad</Link>
              <Link href="/international-students" className="hover:text-blue-700">International Students</Link>
              <Link href="/skills" className="hover:text-blue-700">Skills</Link>
              <Link href="/blog" className="font-medium text-blue-700 hover:text-blue-800">
    Blog
  </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Guides & Policies</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/blog" className="hover:text-blue-700">Blog</Link>
              <Link href="/study-in-usa" className="hover:text-blue-700">Study in USA</Link>
              <Link href="/blog?category=USA%20Careers" className="hover:text-blue-700">USA Careers</Link>
              <Link href="/blog?category=AI%20%26%20Tech%20Careers" className="hover:text-blue-700">AI Careers</Link>
              <Link href="/blog?category=Scholarships" className="hover:text-blue-700">Scholarships</Link>
              <Link href="/tests" className="hover:text-blue-700">Career Tests</Link>
              <Link href="/practice-tests" className="hover:text-blue-700">Practice Tests</Link>
              <Link href="/editorial-policy" className="hover:text-blue-700">Editorial Policy</Link>
              <Link href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-blue-700">Terms</Link>
              <Link href="/disclaimer" className="hover:text-blue-700">Disclaimer</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Get Support</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reach out for guidance related to tests, resources, and study planning.
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href="mailto:nishaglobaleducation@gmail.com" className="flex items-center gap-2 hover:text-blue-700">
                <FaEnvelope /> nishaglobaleducation@gmail.com
              </a>
              <Link href="/contact" className="hover:text-blue-700">Go to Contact Page</Link>
            </div>
          </div>
        </div>


        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">Need help after taking a test?</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Use the contact page to ask questions, explore resources, or continue with country guides and blogs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="site-btn-primary">Contact Us</Link>
              <Link href="/resources" className="site-btn-secondary">Browse Resources</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Important:</span>{" "}
            The tests, resources, country guides, and skill content on this website are for educational and informational purposes only.
            Final decisions related to admissions, fees, scholarships, visas, work rights, or institutions should always be verified from official sources.
          </p>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
