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
  const isEngineering = category === "engineering-entrance";

  if (!categoryData && !govCategoryData) return notFound();

  const isGov = !!govCategoryData;
  const data = govCategoryData || categoryData!;

  const engineeringFaqs = [
    {
      q: "Which exam should I prepare for first: JEE Main, JEE Advanced, or state CET exams?",
      a: "Start with JEE Main level fundamentals because it builds core PCM confidence. Move to JEE Advanced after you can consistently solve moderate JEE Main problems. Choose COMEDK, WBJEE, or KCET practice in parallel if those exams match your target colleges and state preferences.",
    },
    {
      q: "How should I use these practice sets if I am in Class 11 or Class 12?",
      a: "Use a three-phase cycle: foundation practice first, exam-specific sets second, and timed revision rounds third. Focus on accuracy in the first two weeks, then increase speed while keeping an error notebook for repeated weak areas.",
    },
    {
      q: "How often should I take practice tests each week?",
      a: "For most students, 4 to 6 short sessions per week works well: two concept sessions, two timed sessions, and one or two revision sessions. Keep at least one day for analysis so mistakes become learning points.",
    },
    {
      q: "Are these official exam papers?",
      a: "No. These are original, pattern-based practice questions created for learning and self-assessment. Always verify final exam rules, syllabus, and notices from official exam websites.",
    },
    {
      q: "What score should I target before moving to harder sets?",
      a: "A practical benchmark is 70%+ accuracy in beginner sets and 60%+ in timed exam-style sets before increasing difficulty. If accuracy drops below this, return to topic-wise practice for one week.",
    },
    {
      q: "I am weak in one subject. Should I still do mixed sets?",
      a: "Yes, but keep the ratio balanced. Spend around 60% of practice time on your weak subject and 40% on mixed sets to maintain overall exam rhythm and confidence.",
    },
  ];

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
        {isEngineering && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This page is designed for students who want practical engineering entrance preparation without guesswork.
              You can start from beginner-level mixed questions, then move into exam-specific tracks like JEE Main,
              JEE Advanced, COMEDK, WBJEE, and KCET.
            </p>
            <p>
              Every practice set is built for step-by-step learning: attempt, review explanations, and identify your weak
              topics before taking the next set. This approach helps you improve consistency, not just one-time scores.
            </p>
          </div>
        )}
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

      {isEngineering && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>Class 11-12 students preparing for PCM-based engineering entrance exams.</li>
              <li>Drop-year aspirants who need structured revision with short timed practice.</li>
              <li>Students who want explanation-based learning before full-length mocks.</li>
              <li>Beginners who are not sure which exam path to prioritize yet.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Students looking only for official previous-year papers in raw PDF format.</li>
              <li>Aspirants who already score high and need only advanced full-length mocks.</li>
              <li>Learners who are not ready to review mistakes after every practice round.</li>
              <li>Students aiming for non-PCM career tracks that need different test patterns.</li>
            </ul>
          </div>
        </section>
      )}

      {isEngineering && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Foundation (Week 1-2)</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Start with beginner sets to stabilize algebra, arithmetic speed, mechanics basics, and chemistry fundamentals.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Exam Track (Week 3-6)</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pick your target exam track and solve exam-style sets regularly. Track accuracy separately for each subject.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Timed Rounds (Week 7-8)</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Attempt sets under strict time limits. Build decision speed: skip, solve, review, and attempt strategy.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Revision Loop (Ongoing)</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Maintain an error log by topic. Re-attempt weak-topic sets after 3-5 days to convert mistakes into retention.
              </p>
            </div>
          </div>
        </section>
      )}

      {isEngineering && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            COMEDK Full-Length Pattern
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How to use the 180-question COMEDK sets</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            The COMEDK track on this page now follows a full-length practice pattern with 180 original questions in each set:
            60 Mathematics, 60 Physics, and 60 Chemistry. This is useful for students who want realistic stamina practice,
            balanced subject switching, and a better idea of how accuracy changes over a longer paper.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">60 Mathematics</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use this block to test algebra, geometry, trigonometry, coordinate geometry, and speed-based calculation control.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">60 Physics</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus on formula recall, units, direct application, and quick interpretation of mechanics, optics, and electricity questions.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">60 Chemistry</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Treat this section as a mix of concept recall and elimination strategy across physical, organic, and inorganic chemistry.
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-white p-5 text-sm leading-7 text-slate-700">
            <p>
              A practical way to use these sets is to first complete them in timed pages, then review results subject by subject.
              If your Mathematics score drops because of speed, train shorter math rounds separately. If Chemistry accuracy drops,
              revise factual weak spots before starting the next full-length set.
            </p>
            <p className="mt-3">
              These are original pattern-based practice sets, not official COMEDK papers. Use them for learning, timing practice,
              and weakness analysis alongside official syllabus and exam notices.
            </p>
          </div>
        </section>
      )}

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

      {isEngineering && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {engineeringFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isEngineering && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              Practice questions are original and created for educational self-assessment. They are not official question papers.
            </p>
            <p>
              Exam pattern references are reviewed periodically, and students should still verify final details from official
              exam portals before making application or preparation decisions.
            </p>
            <p>
              Last reviewed: April 2026. If you find a pattern mismatch, contact us and we will update it.
            </p>
          </div>
        </section>
      )}

      {categoryData && !isGov && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Next step after practice
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Practice improves performance and confidence. Career guidance helps students choose the
            right direction. Use both together on Nishaglobal Education.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={categoryData.ctaHref}
              className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              {categoryData.ctaLabel}
            </Link>
            {isEngineering && (
              <>
                <Link
                  href="/study-abroad"
                  className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Explore Study Abroad Paths
                </Link>
                <Link
                  href="/resources"
                  className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Browse Student Resources
                </Link>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}