import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeTestClient from "@/components/PracticeTestClient";
import PracticeQuiz from "@/components/PracticeQuiz";
import {
  getGovPracticeSet,
  getPracticeSetBySlug,
  getGovPracticeCategoryBySlug,
  getEngineeringExamRules,
  getEngineeringPracticeGroups,
  getIeltsPracticeGroups,
} from "@/data/practiceTests";

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
    if (category === "engineering-entrance") {
      return {
        title: `${set.title} - Engineering Entrance Practice`,
        description: `Practice ${set.questionCount} questions for ${set.examType}. Prepare with original questions and detailed solutions.`,
      };
    }
    return {
      title: set.seoTitle,
      description: set.seoDescription,
      keywords: set.keywords,
    };
  }

  return {
    title: "Practice Test",
  };
}

export default async function PracticeSetPage({ params }: Props) {
  const { category, setId } = await params;
  const set = getPracticeSetBySlug(setId);
  const govSet = getGovPracticeSet(category, setId);
  const categoryData = getGovPracticeCategoryBySlug(category);

  if (!set && !govSet) return notFound();

  if (category === "engineering-entrance" && set) {
    const groups = getEngineeringPracticeGroups();
    const group = groups.find(g => g.examName === set.examType);
    const rules = getEngineeringExamRules().find(r => r.examName === set.examType);

    if (!group) return notFound();

    return (
      <div className="space-y-8">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
            {group.shortName}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {set.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {set.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              {set.examType}
            </span>
          </div>
        </section>

        {rules && (
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Exam Pattern & Rules</h2>
            <div className="mt-4 space-y-4">
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Total Questions</div>
                  <div className="mt-1">{rules.totalQuestions}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Total Marks</div>
                  <div className="mt-1">{rules.totalMarks}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Duration</div>
                  <div className="mt-1">{rules.duration}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-semibold text-slate-900">Marking</div>
                  <div className="mt-1">{rules.marking}</div>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                <p><strong>Negative Marking:</strong> {rules.negativeMarking}</p>
                {rules.note && (
                  <p className="mt-2"><strong>Note:</strong> {rules.note}</p>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Practice Set Details</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Questions</div>
              <div className="mt-1">{set.questionCount}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Estimated Time</div>
              <div className="mt-1">{set.estimatedMinutes} minutes</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href={`/practice-tests/${category}/${setId}/start`}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Start Practice Test
            </Link>
          </div>
        </section>

        {group.disclaimer && (
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
            <span className="font-semibold">Disclaimer:</span> {group.disclaimer}
          </div>
        )}
      </div>
    );
  }

  if (category === "ielts" && set) {
    const group = getIeltsPracticeGroups().find(
      (item) => item.key === set.practiceGroup
    );

    return (
      <div className="space-y-8">
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
            {set.sectionLabel || "IELTS Practice"}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {set.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {set.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              IELTS
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 capitalize">
              {set.level}
            </span>
          </div>
        </section>

        {group && (
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">How this practice matches real IELTS use</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Real-test format</div>
                <div className="mt-1">{group.format}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Real-test timing</div>
                <div className="mt-1">{group.duration}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:col-span-2">
                <div className="font-semibold text-slate-900">Best for</div>
                <div className="mt-1">{group.bestFor}</div>
              </div>
            </div>
            <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              {group.note}
            </p>
          </section>
        )}

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">How to use this practice set</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-slate-900">1. Attempt seriously</p>
              <p className="mt-2">Use realistic timing, avoid random guessing, and finish the set as one focused session.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-slate-900">2. Review by skill gap</p>
              <p className="mt-2">Separate vocabulary gaps, concentration errors, weak task strategy, and careless mistakes instead of looking only at score.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              <p className="font-semibold text-slate-900">3. Repeat with purpose</p>
              <p className="mt-2">After review, move to the next related IELTS section or repeat weak-question types until your accuracy becomes stable.</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Practice set details</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Questions</div>
              <div className="mt-1">{set.questionCount}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">Estimated Time</div>
              <div className="mt-1">{set.estimatedMinutes} minutes</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href={`/practice-tests/${category}/${setId}/start`}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Start Practice Test
            </Link>
          </div>
        </section>

        <div className="rounded-3xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          <span className="font-semibold">Important note:</span> These are original IELTS-style practice questions for self-assessment. They are not official IELTS materials. Writing and speaking improvement still benefits from teacher review, examiner-style feedback, or recorded practice.
        </div>
      </div>
    );
  }

  if (govSet) {
    if (!govSet.isLive) {
      return (
        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm text-center">
            <h1 className="text-2xl font-bold text-slate-900">{govSet.title}</h1>
            <p className="mt-2 text-slate-600">{govSet.titleHi}</p>
            <p className="mt-4 text-slate-600">
              This practice set is currently under development. The structure is ready, but question bank is not added yet.
            </p>
            <Link
              href={`/practice-tests/${category}`}
              className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Back to {category} Practice
            </Link>
          </div>
        </div>
      );
    }
    return <PracticeQuiz categorySlug={category} categoryTitle={category} set={govSet} categoryData={categoryData} />;
  }

  if (set) {
    return <PracticeTestClient set={set} />;
  }

  return notFound();
}