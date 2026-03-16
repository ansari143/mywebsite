import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
              <Link href="/contact" className="hover:text-blue-600">
  Contact
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

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">

  <a
    href={socialLinks.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-red-600"
  >
    <FaYoutube /> YouTube Channel
  </a>

  <a
    href={socialLinks.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-pink-600"
  >
    <FaInstagram /> Instagram
  </a>

  <a
    href={socialLinks.facebookPage}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-600"
  >
    <FaFacebookF /> Facebook Page
  </a>

  <a
    href={socialLinks.facebookProfile}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-600"
  >
    <FaFacebookF /> Facebook Profile
  </a>

  <a
    href={socialLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-sky-700"
  >
    <FaLinkedinIn /> LinkedIn
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