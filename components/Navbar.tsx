"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const socialLinks = {
    youtube: "https://www.youtube.com/@NishaglobalEducation",
    instagram: "https://www.instagram.com/nisha.global",
    facebook: "https://www.facebook.com/global.nisha",
    linkedin: "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/tests", label: "Career Tests" },
    { href: "/resources", label: "Resources" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Nishaglobal Education Logo"
            width={50}
            height={50}
            priority
          />
          <span className="hidden text-lg font-semibold sm:block">
            Nishaglobal Education
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((item) => (
              <Link key={item.href} className="hover:text-blue-600" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 border-l pl-4 text-gray-500">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition hover:text-red-600"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-pink-600"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition hover:text-blue-600"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-sky-700"
            >
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </div>

        <button
          className="rounded-lg border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-sm">
            {navLinks.map((item) => (
              <Link key={item.href} onClick={() => setOpen(false)} href={item.href}>
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-4 border-t pt-3 text-gray-500">
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition hover:text-red-600"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:text-pink-600"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:text-blue-600"
              >
                <FaFacebookF size={17} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-sky-700"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
