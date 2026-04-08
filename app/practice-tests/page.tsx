import Link from "next/link";
import type { Metadata } from "next";
import { practiceCategories, practiceSets } from "@/data/practiceTests";

export const metadata: Metadata = {
  title: "Practice Tests",
  description:
    "Free English-only practice tests for IELTS and engineering entrance preparation with answers and explanations.",
};

export default function PracticeTestsHubPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          Practice zone
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Practice Tests for IELTS and Engineering Entrance
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Practice original English-only question sets with instant scoring,
          answers, and short explanations. Use this section to build confidence,
          then move into your full career guidance pages.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">100% free</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            English only
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            Instant score
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1">
            Answer explanations
          </span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {practiceCategories.map((category) => {
          const count = practiceSets.filter(
            (item) => item.category === category.slug
          ).length;

          return (
            <div
              key={category.slug}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {category.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  {count} practice set{count > 1 ? "s" : ""}
                </span>
              </div>

              <div className="mt-6">
                <Link
                  href={`/practice-tests/${category.slug}`}
                  className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Explore {category.shortTitle}
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}