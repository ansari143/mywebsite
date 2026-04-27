import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeTestClient from "@/components/PracticeTestClient";
import PracticeQuiz from "@/components/PracticeQuiz";
import { getPracticeSetBySlug, getGovPracticeSet, getGovPracticeCategoryBySlug } from "@/data/practiceTests";
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
        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm text-center">
            <h1 className="text-2xl font-bold text-slate-900">{govSet.title}</h1>
            <p className="mt-2 text-sm text-slate-600">{govSet.titleHi}</p>
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
          options: q.options.map((opt) => ({ id: opt.id, text: opt.text })),
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

      return <PracticeTestClient set={mappedMedicalSet} />;
    }

    return <PracticeQuiz categorySlug={category} categoryTitle={category} set={govSet} categoryData={categoryData} />;
  }

  if (set) {
    return <PracticeTestClient set={set} />;
  }

  return notFound();
}