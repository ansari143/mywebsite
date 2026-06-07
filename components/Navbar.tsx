"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tests", label: "Career Tests" },
    { href: "/practice-tests", label: "Practice Tests" },
    { href: "/global-careers", label: "Global Careers" },
    { href: "/study-abroad", label: "Study Abroad" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Blog" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-950/90">
      <div className="site-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Nishaglobal Education Logo"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
          <div className="hidden sm:block">
            <span className="block text-lg font-semibold text-slate-900 dark:text-slate-100">
              Nishaglobal Education
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-300">
              Learn AI skills for every career role with career guidance for students worldwide
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex gap-5 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/tests"
            className="site-btn-primary"
          >
            Free Test
          </Link>
        </div>

        <button
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 md:hidden dark:border-slate-600 dark:text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-700 dark:bg-slate-900">
          <div className="site-container flex flex-col gap-3 py-3 text-sm">
            <Link
              href="/tests"
              onClick={() => setOpen(false)}
              className="site-btn-primary text-center"
            >
              Start Free Career Test
            </Link>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="text-slate-700 dark:text-slate-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}