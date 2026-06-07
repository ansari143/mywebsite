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
  getToeflPracticeGroups,
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
      alternates: {
        canonical: `https://www.nishaglobaleducation.com/practice-tests/${category}/${setId}`,
      },
    };
  }

  if (set) {
    if (category === "engineering-entrance") {
      return {
        title: `${set.title} - Engineering Entrance Practice`,
        description: `Practice ${set.questionCount} questions for ${set.examType}. Prepare with original questions and detailed solutions.`,
        alternates: {
          canonical: `https://www.nishaglobaleducation.com/practice-tests/${category}/${setId}`,
        },
      };
    }
    return {
      title: set.seoTitle,
      description: set.seoDescription,
      keywords: set.keywords,
      alternates: {
        canonical: `https://www.nishaglobaleducation.com/practice-tests/${category}/${setId}`,
      },
    };
  }

  return { title: "Practice Test" };
}

function HeroSection({
  badge,
  title,
  description,
  tags = [],
}: {
  badge: string;
  title: string;
  description: string;
  tags?: string[];
}) {
  return (
    <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8 lg:p-10">
      <span className="inline-flex rounded-full border border-blue-500 bg-blue-950/60 px-3 py-1 text-sm font-semibold text-blue-200">
        {badge}
      </span>

      <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>

      <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-500 bg-blue-950/50 px-3 py-1 text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value?: string | number | null;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4 text-sm">
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-1 text-slate-300">{value ?? "N/A"}</div>
    </div>
  );
}

export default async function PracticeSetPage({ params }: Props) {
  const { category, setId } = await params;
  const set = getPracticeSetBySlug(setId);
  const govSet = getGovPracticeSet(category, setId);
  const categoryData = getGovPracticeCategoryBySlug(category);

  if (!set && !govSet) return notFound();

  if (category === "engineering-entrance" && set) {
    const groups = getEngineeringPracticeGroups();
    const group = groups.find((g) => g.examName === set.examType);
    const rules = getEngineeringExamRules().find((r) => r.examName === set.examType);

    if (!group) return notFound();

    return (
      <div className="site-page">
        <HeroSection
          badge={group.shortName}
          title={set.title}
          description={set.description}
          tags={[set.examType]}
        />

        {rules && (
          <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-white">Exam Pattern & Rules</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <StatCard title="Total Questions" value={rules.totalQuestions} />
              <StatCard title="Total Marks" value={rules.totalMarks} />
              <StatCard title="Duration" value={rules.duration} />
              <StatCard title="Marking" value={rules.marking} />
            </div>

            <div className="mt-5 rounded-2xl border border-slate-700 bg-[#0b1220] p-5 text-sm leading-7 text-slate-300">
              <p>
                <strong className="text-white">Negative Marking:</strong>{" "}
                {rules.negativeMarking}
              </p>
              {rules.note && (
                <p className="mt-2">
                  <strong className="text-white">Note:</strong> {rules.note}
                </p>
              )}
            </div>
          </section>
        )}

        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-white">Practice Set Details</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <StatCard title="Questions" value={set.questionCount} />
            <StatCard title="Estimated Time" value={`${set.estimatedMinutes} minutes`} />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href={`/practice-tests/${category}/${setId}/start`}
              className="site-btn-primary px-6 py-3 text-center"
            >
              Start Practice Test
            </Link>
          </div>
        </section>

        {group.disclaimer && (
          <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-5 text-sm leading-7 text-slate-300">
            <span className="font-semibold text-white">Disclaimer:</span>{" "}
            {group.disclaimer}
          </section>
        )}
      </div>
    );
  }

  if ((category === "ielts" || category === "toefl") && set) {
    const isIelts = category === "ielts";
    const examLabel = isIelts ? "IELTS" : "TOEFL iBT";
    const group = (isIelts ? getIeltsPracticeGroups() : getToeflPracticeGroups()).find(
      (item) => item.key === set.practiceGroup
    );

    return (
      <div className="site-page">
        <HeroSection
          badge={set.sectionLabel || `${examLabel} Practice`}
          title={set.title}
          description={set.description}
          tags={[examLabel, set.level]}
        />

        {group && (
          <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-white">
              How this practice matches real {examLabel} use
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <StatCard title="Real-test format" value={group.format} />
              <StatCard title="Real-test timing" value={group.duration} />
              <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4 text-sm sm:col-span-2">
                <div className="font-semibold text-white">Best for</div>
                <div className="mt-1 text-slate-300">{group.bestFor}</div>
              </div>
            </div>

            <p className="mt-5 rounded-2xl border border-slate-700 bg-[#0b1220] p-5 text-sm leading-7 text-slate-300">
              {group.note}
            </p>
          </section>
        )}

        <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-white">How to use this practice set</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "1. Attempt seriously",
                "Use realistic timing, avoid random guessing, and finish the set as one focused session.",
              ],
              [
                "2. Review by skill gap",
                "Separate vocabulary gaps, concentration errors, weak task strategy, and careless mistakes instead of looking only at score.",
              ],
              [
                "3. Repeat with purpose",
                `After review, move to the next related ${examLabel} section or repeat weak-question types until your accuracy becomes stable.`,
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5"
              >
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-white">Practice set details</h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <StatCard title="Questions" value={set.questionCount} />
            <StatCard title="Estimated Time" value={`${set.estimatedMinutes} minutes`} />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href={`/practice-tests/${category}/${setId}/start`}
              className="site-btn-primary px-6 py-3 text-center"
            >
              Start Practice Test
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-5 text-sm leading-7 text-slate-300">
          <span className="font-semibold text-white">Important note:</span>{" "}
          {isIelts
            ? "These are original IELTS-style practice questions for self-assessment. They are not official IELTS materials. Writing and speaking improvement still benefits from teacher review, examiner-style feedback, or recorded practice."
            : "These are original TOEFL-style practice questions for self-assessment. They are not official ETS materials. Speaking and writing improvement still benefits from mentor feedback, rubric-based review, or recorded response analysis."}
        </section>
      </div>
    );
  }

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

            <p className="mt-2 text-slate-300">{govSet.titleHi}</p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              This practice set is currently under development. The structure is ready,
              but question bank is not added yet.
            </p>

            <Link
              href={`/practice-tests/${category}`}
              className="mt-6 inline-flex site-btn-primary px-6 py-3 text-center"
            >
              Back to {category} Practice
            </Link>
          </section>
        </div>
      );
    }

    if (category === "medical") {
      const isFullMock = govSet.slug.includes("neet-ug-full-mock-");
      const medicalRuleSummary = isFullMock
        ? {
            totalQuestions: 180,
            totalMarks: 720,
            duration: "180 minutes",
            marking: "+4 for correct, -1 for incorrect, 0 for unattempted",
            note: "Full mock follows NEET-style distribution: Physics 45, Chemistry 45, Biology 90.",
          }
        : {
            totalQuestions: govSet.questionCount,
            totalMarks: govSet.questionCount * 4,
            duration: `${govSet.durationMin} minutes`,
            marking: "+4 for correct, -1 for incorrect, 0 for unattempted",
            note: `Subject-wise practice set focused on ${govSet.chapter}.`,
          };

      return (
        <div className="site-page">
          <HeroSection
            badge="Medical NEET"
            title={govSet.title}
            description={`Practice ${govSet.questionCount} NEET questions in English with explanation-based learning and exam-style pacing.`}
            tags={["English Only", govSet.chapter]}
          />

          <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-white">Exam Pattern & Rules</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <StatCard title="Total Questions" value={medicalRuleSummary.totalQuestions} />
              <StatCard title="Total Marks" value={medicalRuleSummary.totalMarks} />
              <StatCard title="Duration" value={medicalRuleSummary.duration} />
              <StatCard title="Marking" value={medicalRuleSummary.marking} />
            </div>

            <div className="mt-5 rounded-2xl border border-slate-700 bg-[#0b1220] p-5 text-sm leading-7 text-slate-300">
              <p>
                <strong className="text-white">Negative Marking:</strong> Included in the above pattern.
              </p>
              <p className="mt-2">
                <strong className="text-white">Note:</strong> {medicalRuleSummary.note}
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-700 bg-[#0b1220] p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-white">Practice Set Details</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <StatCard title="Questions" value={govSet.questionCount} />
              <StatCard title="Estimated Time" value={`${govSet.durationMin} minutes`} />
            </div>

            <div className="mt-6 flex justify-center">
              <Link
                href={`/practice-tests/${category}/${setId}/start`}
                className="site-btn-primary px-6 py-3 text-center"
              >
                Start Practice Test
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-amber-700 bg-amber-950/40 p-5 text-sm leading-7 text-slate-300">
            <span className="font-semibold text-white">Disclaimer:</span> These are original
            NEET-style practice questions for self-assessment and preparation support. They are not
            official previous-year papers.
          </section>
        </div>
      );
    }

    return (
      <div className="site-page">
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
        <section className="rounded-3xl border border-slate-700 bg-[#111827] p-6 shadow-sm sm:p-8">
          <PracticeTestClient set={set} />
        </section>
      </div>
    );
  }

  return notFound();
}