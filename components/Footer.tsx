import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = {
    youtube: "https://www.youtube.com/@NishaglobalEducation",
    instagram: "https://www.instagram.com/nisha.global",
    facebookProfile: "https://www.facebook.com/global.nisha",
    facebookPage: "https://www.facebook.com/profile.php?id=61588627138300",
    linkedin: "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
  };

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Nishaglobal Education</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Career guidance for students worldwide, including free career tests,
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
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/tests" className="hover:text-blue-600">Career Tests</Link>
              <Link href="/global-careers" className="hover:text-blue-600">Global Careers</Link>
              <Link href="/study-abroad" className="hover:text-blue-600">Study Abroad</Link>
              <Link href="/international-students" className="hover:text-blue-600">International Students</Link>
              <Link href="/skills" className="hover:text-blue-600">Skills</Link>
              <Link href="/blog" className="hover:text-blue-600 font-medium text-blue-700">
    Blog
  </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Guides & Policies</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/resources/country/usa" className="hover:text-blue-600">USA Resources</Link>
              <Link href="/resources/country/canada" className="hover:text-blue-600">Canada Resources</Link>
              <Link href="/resources/country/india" className="hover:text-blue-600">India Resources</Link>
              <Link href="/high-paying-jobs" className="hover:text-blue-600">High Paying Jobs</Link>
              <Link href="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
              <Link href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Follow Us</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Follow Nishaglobal Education for career tips, global study guidance,
              and future-ready skills.
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600">
                <FaYoutube /> YouTube Channel
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
                <FaInstagram /> Instagram
              </a>
              <a href={socialLinks.facebookPage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaFacebookF /> Facebook Page
              </a>
              <a href={socialLinks.facebookProfile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaFacebookF /> Facebook Profile
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-700">
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Important:</span>{" "}
            The tests, resources, country guides, and skill content on this website are for educational and informational purposes only.
            Final decisions related to admissions, fees, scholarships, visas, work rights, or institutions should always be verified from official sources.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
