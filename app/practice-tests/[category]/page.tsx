import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPracticeCategory,
  getPracticeSetsByCategory,
} from "@/data/practiceTests";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getPracticeCategory(category);

  if (!categoryData) {
    return {
      title: "Practice Tests",
    };
  }

  return {
    title: categoryData.title,
    description: categoryData.description,
  };
}

export default async function PracticeCategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = getPracticeCategory(category);
  const sets = getPracticeSetsByCategory(category);

  if (!categoryData) return notFound();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {categoryData.shortTitle} practice
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          {categoryData.heroTitle}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {categoryData.heroText}
        </p>
      </section>

      <section className="grid gap-4">
        {sets.map((set) => (
          <div
            key={set.slug}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-slate-900">
                  {set.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {set.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    {set.questionCount} Questions
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    ~{set.estimatedMinutes} min
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 capitalize">
                    {set.level}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={`/practice-tests/${set.category}/${set.slug}`}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Start Practice Test
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Next step after practice
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Practice improves performance. Career guidance helps students choose the
          right direction. Use both together on Nishaglobal Education.
        </p>

        <div className="mt-6">
          <Link
            href={categoryData.ctaHref}
            className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            {categoryData.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}