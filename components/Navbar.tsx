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
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
            <span className="block text-lg font-semibold text-slate-900">
              Nishaglobal Education
            </span>
            <span className="block text-xs text-slate-500">
              Career guidance for students in India and worldwide
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex gap-5 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className="text-slate-700 hover:text-blue-600"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/tests"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Free Test
          </Link>
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
            <Link
              href="/tests"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-2 text-center font-semibold text-white"
            >
              Start Free Career Test
            </Link>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="text-slate-700"
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