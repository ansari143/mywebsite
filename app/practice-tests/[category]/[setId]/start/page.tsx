import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeTestClient from "@/components/PracticeTestClient";
import PracticeQuiz from "@/components/PracticeQuiz";
import {
  getPracticeSetBySlug,
  getGovPracticeSet,
  getGovPracticeCategoryBySlug,
} from "@/data/practiceTests";
import type { PracticeSet } from "@/data/practiceTests";

type Props = {
  params: Promise<{ category: string; setId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, setId } = await params;
  const set = getPracticeSetBySlug(setId);
  const govSet = getGovPracticeSet(category, setId);

  if (govSet) {
    if (!govSet.isLive) {
      return {
        title: `${govSet.title} - Coming Soon`,
        description: `Practice set for ${govSet.title} is under development.`,
        robots: "noindex",
      };
    }

    return {
      title: govSet.title,
      description: `Practice ${govSet.title} with ${govSet.questionCount} questions.`,
    };
  }

  if (set) {
    return {
      title: `Start ${set.title}`,
      description: `Begin your ${set.examType} practice test with ${set.questionCount} questions.`,
      robots: "noindex,follow",
    };
  }

  return {
    title: "Practice Test",
  };
}

export default async function PracticeSetStartPage({ params }: Props) {
  const { category, setId } = await params;
  const set = getPracticeSetBySlug(setId);
  const govSet = getGovPracticeSet(category, setId);
  const categoryData = getGovPracticeCategoryBySlug(category);
  const isMedical = category === "medical";

  if (!set && !govSet) return notFound();

  if (govSet) {
    if (!govSet.isLive) {
      return (
        <div className="site-page">
          <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 text-center shadow-sm sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-amber-500 bg-amber-950/60 px-3 py-1 text-sm font-semibold text-amber-200">
              Coming Soon
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {govSet.title}
            </h1>

            <p className="mt-2 text-sm font-semibold text-slate-300">
              {govSet.titleHi}
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              This practice set is currently under development. The structure is ready,
              but the question bank is not added yet.
            </p>

            <div className="mt-6">
              <Link
                href={`/practice-tests/${category}`}
                className="site-btn-primary px-6 py-3 text-center"
              >
                Back to {category} Practice
              </Link>
            </div>
          </section>
        </div>
      );
    }

    if (isMedical) {
      const mappedMedicalSet: PracticeSet = {
        id: `medical-${govSet.slug}`,
        slug: govSet.slug,
        category,
        title: govSet.title,
        description: `Practice ${govSet.questionCount} NEET questions in ${govSet.chapter}.`,
        examType: "Medical NEET",
        level:
          govSet.difficulty === "Easy"
            ? "beginner"
            : govSet.difficulty === "Medium"
              ? "intermediate"
              : "advanced",
        questionCount: govSet.questionCount,
        estimatedMinutes: govSet.durationMin,
        seoTitle: govSet.title,
        seoDescription: `Practice ${govSet.title} with ${govSet.questionCount} NEET questions and explanations.`,
        keywords: ["neet practice", "medical neet mock", "neet questions"],
        intro: "English-only NEET practice set.",
        questions: (govSet.questions || []).map((q) => ({
          id: q.id,
          question: q.text,
          options: q.options.map((opt) => ({
            id: opt.id,
            text: opt.text,
          })),
          correctAnswer: q.correct,
          explanation: q.explanation,
          topic: q.chapter,
          difficulty:
            govSet.difficulty === "Easy"
              ? "easy"
              : govSet.difficulty === "Medium"
                ? "medium"
                : "hard",
        })),
      };

      return (
        <div className="site-page">
          <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
              Medical NEET Practice
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {mappedMedicalSet.title}
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
              {mappedMedicalSet.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
                {mappedMedicalSet.questionCount} Questions
              </span>
              <span className="rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-slate-300">
                {mappedMedicalSet.estimatedMinutes} Minutes
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
                {mappedMedicalSet.level}
              </span>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
            <PracticeTestClient set={mappedMedicalSet} />
          </section>
        </div>
      );
    }

    return (
      <div className="site-page">
        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
            Practice Test
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {govSet.title}
          </h1>

          {govSet.titleHi && (
            <p className="mt-2 text-sm font-semibold text-slate-300">
              {govSet.titleHi}
            </p>
          )}

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Practice {govSet.title} with {govSet.questionCount} questions and
            instant feedback.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
              {govSet.questionCount} Questions
            </span>
            <span className="rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-slate-300">
              {govSet.durationMin} Minutes
            </span>
            {govSet.difficulty && (
              <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
                {govSet.difficulty}
              </span>
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <PracticeQuiz
            categorySlug={category}
            categoryTitle={category}
            set={govSet}
            categoryData={categoryData}
          />
        </section>
      </div>
    );
  }

  if (set) {
    return (
      <div className="site-page">
        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
            {set.examType}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {set.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            {set.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200">
              {set.questionCount} Questions
            </span>
            <span className="rounded-full border border-slate-700 bg-emerald-950/40 px-3 py-1 text-slate-300">
              {set.estimatedMinutes} Minutes
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
              {set.level}
            </span>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <PracticeTestClient set={set} />
        </section>
      </div>
    );
  }

  return notFound();
}