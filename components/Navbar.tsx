"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <nav className="hidden md:flex gap-6 text-sm">
          <Link className="hover:text-blue-600" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-600" href="/tests">
            Career Tests
          </Link>
          <Link className="hover:text-blue-600" href="/resources">
            Resources
          </Link>
          <Link className="hover:text-blue-600" href="/skills">
            High-Demand Skills
          </Link>
        </nav>

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
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} href="/tests">
              Career Tests
            </Link>
            <Link onClick={() => setOpen(false)} href="/resources">
              Resources
            </Link>
            <Link onClick={() => setOpen(false)} href="/skills">
              High-Demand Skills
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}