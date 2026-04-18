import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPracticeCategory,
  getPracticeSetsByCategory,
  getGovPracticeCategoryBySlug,
  getEngineeringPracticeGroups,
} from "@/data/practiceTests";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getPracticeCategory(category);
  const govCategoryData = getGovPracticeCategoryBySlug(category);

  const data = govCategoryData || categoryData;

  if (!data) {
    return {
      title: "Practice Tests",
    };
  }

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function PracticeCategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = getPracticeCategory(category);
  const govCategoryData = getGovPracticeCategoryBySlug(category);

  if (!categoryData && !govCategoryData) return notFound();

  const isGov = !!govCategoryData;
  const data = govCategoryData || categoryData!;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {data.title} practice
        </div>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {data.description}
        </p>
        {isGov && (
          <div className="mt-4 flex flex-wrap gap-2">
            {govCategoryData!.audience.map((aud) => (
              <span key={aud} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {aud}
              </span>
            ))}
          </div>
        )}
      </section>

      {isGov && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Chapters Covered</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {govCategoryData.chapters.map((chap) => (
              <div key={chap.name} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
                <span className="text-2xl">{govCategoryData.icon}</span>
                <div>
                  <div className="font-medium text-slate-900">{chap.name}</div>
                  <div className="text-sm text-slate-600">{chap.hi}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          {isGov ? "Live Practice Sets" : "Practice Sets"}
        </h2>
        <div className="grid gap-4">
          {isGov ? (
            <>
              {govCategoryData.sets.filter(s => s.isLive).map((set) => (
                <div
                  key={set.slug}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {set.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{set.titleHi}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Practice {set.questionCount} questions in {set.chapter}.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                        <span className="rounded-full bg-slate-100 px-3 py-1">
                          {set.questionCount} Questions
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1">
                          ~{set.durationMin} min
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 capitalize">
                          {set.difficulty}
                        </span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                          Bilingual
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <Link
                        href={`/practice-tests/${category}/${set.slug}`}
                        className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                      >
                        Start Practice Test
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {govCategoryData.sets.filter(s => !s.isLive).length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-slate-900">Planned Next</h3>
                  {govCategoryData.sets.filter(s => !s.isLive).map((set) => (
                    <div
                      key={set.slug}
                      className="rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 p-6"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                          <h3 className="text-2xl font-bold text-slate-700">
                            {set.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">{set.titleHi}</p>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            Coming soon - {set.questionCount} questions in {set.chapter}.
                          </p>
                        </div>
                        <div className="rounded-xl bg-gray-300 px-5 py-3 text-center font-semibold text-gray-600">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : category === "engineering-entrance" ? (
            getEngineeringPracticeGroups().map((group) => (
              <div key={group.examSlug} className="space-y-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                        {group.shortName}
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-slate-900">
                        {group.examName}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {group.officialBody} • {group.mode}
                      </p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                          <div className="font-semibold text-slate-900">Duration</div>
                          <div className="mt-1">{group.duration}</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                          <div className="font-semibold text-slate-900">Subjects</div>
                          <div className="mt-1">{group.subjects.join(", ")}</div>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-slate-600">
                        {group.totalQuestions && (
                          <p>{group.totalQuestions} total questions.</p>
                        )}
                        {group.totalMarks && (
                          <p>{group.totalMarks} total marks.</p>
                        )}
                        <p>{group.marking}</p>
                        <p>{group.negativeMarking}</p>
                      </div>
                      {group.note && (
                        <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                          {group.note}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <a
                        href={group.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                      >
                        Visit Official Website
                      </a>
                    </div>
                  </div>
                  {group.disclaimer && (
                    <div className="mt-5 rounded-3xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
                      <span className="font-semibold">Disclaimer:</span> {group.disclaimer}
                    </div>
                  )}
                </div>

                <div className="grid gap-4">
                  {group.sets.length > 0 ? (
                    group.sets.map((set) => (
                      <div
                        key={set.slug}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-3xl">
                            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                              {set.sectionLabel || set.examName || set.examType}
                            </span>
                            <h4 className="mt-4 text-2xl font-bold text-slate-900">{set.title}</h4>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{set.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                              <span className="rounded-full bg-slate-100 px-3 py-1">{set.questionCount} Questions</span>
                              <span className="rounded-full bg-slate-100 px-3 py-1">~{set.estimatedMinutes} min</span>
                              <span className="rounded-full bg-slate-100 px-3 py-1 capitalize">{set.level}</span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Link
                              href={`/practice-tests/${set.category}/${set.slug}`}
                              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                            >
                              View Practice Set
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6 text-slate-600">
                      No live practice sets are available yet for this exam group.
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            getPracticeSetsByCategory(category).map((set) => (
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
            ))
          )}
        </div>
      </section>

      {categoryData && !isGov && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Next step after practice
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Practice improves performance and confidence. Career guidance helps students choose the
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
      )}
    </div>
  );
}