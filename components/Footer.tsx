import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const socialLinks = {
     youtube: "https://www.youtube.com/@NishaglobalEducation",
    instagram: "https://www.instagram.com/nisha.global",
    facebook: "https://www.facebook.com/global.nisha",
    linkedin: "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
  };

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Nishaglobal Education
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Career guidance, educational resources, and future-ready skill
              learning for students after 10th and 12th.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/tests" className="hover:text-blue-600">
                Career Tests
              </Link>
              <Link href="/resources" className="hover:text-blue-600">
                Resources
              </Link>
              <Link href="/skills" className="hover:text-blue-600">
                Skills
              </Link>
              <Link href="/skills/ai-roadmap" className="hover:text-blue-600">
                AI Roadmap
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Policies
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/disclaimer" className="hover:text-blue-600">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-blue-600">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Follow Us
            </h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Follow Nishaglobal Education for career tips, resources, and
              future-ready skills.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">Disclaimer:</span>{" "}
            The quizzes, resources, and skill guides provided on this website
            are for general educational and informational purposes only. Results
            and guidance are indicative and should not be treated as final
            career, educational, or professional advice. Users should verify
            important information from official sources and consult parents,
            teachers, or qualified counselors before making final decisions.
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-slate-500">
          © 2026 Nishaglobal Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}