import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPracticeCategory,
  getPracticeSetsByCategory,
  getGovPracticeCategoryBySlug,
  getEngineeringPracticeGroups,
  getIeltsPracticeGroups,
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
  const isIelts = category === "ielts";
  const isCtet = category === "ctet";
  const isSsc = category === "ssc";
  const isRailway = category === "railway";

  if (!categoryData && !govCategoryData) return notFound();

  const isGov = !!govCategoryData;
  const data = govCategoryData || categoryData!;
  const ieltsGroups = isIelts ? getIeltsPracticeGroups() : [];
  const ieltsFoundationSets = isIelts
    ? getPracticeSetsByCategory(category).filter((set) => !set.practiceGroup)
    : [];
  const railwayTrackOrder = [
    "RRB Group D CBT",
    "RRB NTPC CBT-1",
    "RRB ALP/Technician CBT-1",
    "RRB Ticket Clerk / TT CBT",
  ];
  const railwayLiveSets = isRailway && govCategoryData
    ? [...govCategoryData.sets.filter((set) => set.isLive)].sort((a, b) => {
        const chapterA = railwayTrackOrder.findIndex((track) => a.title.includes(track));
        const chapterB = railwayTrackOrder.findIndex((track) => b.title.includes(track));
        const safeA = chapterA === -1 ? 999 : chapterA;
        const safeB = chapterB === -1 ? 999 : chapterB;
        if (safeA !== safeB) return safeA - safeB;

        const aNumber = Number(a.slug.split("-").pop() || 0);
        const bNumber = Number(b.slug.split("-").pop() || 0);
        return aNumber - bNumber;
      })
    : [];

  const engineeringFaqs = [
    {
      q: "Which exam should I prepare for first: JEE Main, JEE Advanced, or state CET exams?",
      a: "Follow the sequence on this page: COMEDK, KCET, WBJEE, JEE Main, and then JEE Advanced. This flow helps many students build speed and confidence first, then move to tougher national-level pressure and problem depth.",
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

  const kcetFaqs = [
    {
      q: "How many questions are there in the KCET full-length mocks on this page?",
      a: "Each KCET full-length mock on this page has 180 questions, aligned with the practical exam-style distribution across Mathematics, Physics, and Chemistry.",
    },
    {
      q: "What is the best order to attempt KCET practice sets?",
      a: "Start with Set 1 and Set 2 for baseline speed and formula recall, then move to Set 3 and Set 4 for mixed-pressure practice, and finish with Set 5 as the hardest revision checkpoint.",
    },
    {
      q: "Should I practice chapter-wise first or directly solve full KCET mocks?",
      a: "If your fundamentals are weak, do short chapter revisions first. If your basics are stable, start full-length mocks directly and use post-test analysis to identify weak chapters.",
    },
    {
      q: "Are these official KCET previous-year papers?",
      a: "No. These are original pattern-based practice tests created for self-assessment. Always verify latest notices, syllabus details, and exam rules from official KEA updates.",
    },
  ];

  const ieltsFaqs = [
    {
      q: "Which IELTS practice track should I choose first: Academic or General Training?",
      a: "Choose Academic if you are applying to universities, colleges, or academic pathway programs. Choose General Training if you are preparing for work, migration, or practical everyday English requirements. Listening and Speaking matter to both groups, so those tracks are useful for everyone.",
    },
    {
      q: "Can students, employees, and immigrants all use this page?",
      a: "Yes. Students can focus on Academic Reading, Writing, and Speaking. Employees and migration applicants can focus on General Training Reading, Writing strategy, Speaking, and Listening. The page is structured so each user group can choose the right section instead of guessing.",
    },
    {
      q: "Do these tests match the real IELTS exactly?",
      a: "They are original, exam-pattern-based practice tests. Listening and reading sets are closer to real section counts and timing. Writing and speaking sets use objective practice because real IELTS Writing and Speaking still require human evaluation for full band scoring.",
    },
    {
      q: "How should I use these practice tests every week?",
      a: "A practical weekly plan is two skill-building sessions, one timed reading or listening session, one writing or speaking strategy session, and one review day. If you are weak in one skill, give that area two sessions instead of one.",
    },
    {
      q: "What score goal should I set before moving to harder IELTS sets?",
      a: "For objective practice on this page, aim for around 70% accuracy in foundation sets and at least 75% in your target skill area before moving into stricter timed practice. For band targets, combine these tests with real writing and speaking feedback.",
    },
  ];

  const ctetFaqs = [
    {
      q: "How many questions are there in CTET Paper I?",
      a: "CTET Paper I has 150 questions with 150 marks and 150 minutes duration. This page includes full-length bilingual mocks with the same total question count for realistic practice.",
    },
    {
      q: "Is there negative marking in CTET?",
      a: "No, CTET does not use negative marking in the standard pattern. You should still avoid random guessing and use elimination with concept clarity.",
    },
    {
      q: "Which sections should I prioritize first?",
      a: "Start with Child Development and Pedagogy plus your weaker language section, then Mathematics and EVS. Use full-length mocks after topic-wise confidence becomes stable.",
    },
    {
      q: "Are these official CTET papers?",
      a: "No. These are original bilingual practice questions designed for self-assessment. Always verify final syllabus and notices from the official CBSE CTET portal.",
    },
  ];

  const sscFaqs = [
    {
      q: "What full-length SSC formats are available on this page?",
      a: "This page includes three major full-length tracks: SSC Tier I (100 questions, 60 minutes), SSC CHSL (100 questions, 60 minutes), and SSC Tier II (150 questions, 120 minutes).",
    },
    {
      q: "Which sections are covered in these SSC full-length tests?",
      a: "Reasoning, Quantitative Aptitude, English, and General Awareness are covered. Tier I and CHSL mocks use a 25-25-25-25 section split, while Tier II uses a longer, advanced paper structure.",
    },
    {
      q: "Should I start from topic-wise sets or full mocks?",
      a: "Start with topic-wise sets if your fundamentals are weak, then move to full-length mocks. If you already have base preparation, alternate full mocks with targeted revision rounds.",
    },
    {
      q: "Are these official previous-year SSC papers?",
      a: "No. These are original bilingual practice sets created for realistic pattern-based self-assessment. Always check official SSC notifications for final rules and syllabus updates.",
    },
  ];

  const railwayFaqs = [
    {
      q: "Which Railway exam patterns are available on this page?",
      a: "This page includes four official-style tracks with full-length mocks: RRB Group D CBT (100 questions, 90 minutes), RRB NTPC CBT-1 (100 questions, 90 minutes), RRB ALP/Technician CBT-1 (75 questions, 60 minutes), and RRB Ticket Clerk/TT pattern (100 questions, 90 minutes).",
    },
    {
      q: "How many mocks are available per Railway pattern?",
      a: "Each major pattern includes 5 full-length bilingual practice mocks, so you can build speed and consistency through repeated timed rounds instead of one-time attempts.",
    },
    {
      q: "Should I start with Group D, NTPC, ALP, or TT mocks first?",
      a: "Start with the pattern closest to your target post. If you are unsure, begin with Group D or NTPC to stabilize fundamentals, then move to ALP/Technician and TT tracks for pattern-specific preparation.",
    },
    {
      q: "Are these official Railway previous-year papers?",
      a: "No. These are original bilingual practice sets created for realistic pattern-based self-assessment. Always verify latest syllabus, normalization rules, and notices from the official RRB websites.",
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
              You can start from beginner-level mixed questions, then move into exam-specific tracks in this order:
              COMEDK, KCET, WBJEE, JEE Main, and JEE Advanced.
            </p>
            <p>
              Every practice set is built for step-by-step learning: attempt, review explanations, and identify your weak
              topics before taking the next set. This approach helps you improve consistency, not just one-time scores.
            </p>
          </div>
        )}
        {isIelts && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This IELTS page is structured for three major user groups: students preparing for study abroad,
              employees aiming for work-related English proof, and immigrants preparing for migration pathways.
              Instead of one thin mixed page, you can now choose section-based tracks that match the real IELTS structure more closely.
            </p>
            <p>
              Start with the correct route first: Academic Reading for study-focused goals, General Training Reading for
              work or migration goals, and Listening, Writing, and Speaking practice for all candidate types. Every set is designed
              for attempt-review-repeat learning so you improve accuracy, confidence, and exam judgment together.
            </p>
          </div>
        )}
        {isCtet && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This CTET page is built for practical teacher exam preparation in both English and Hindi.
              You can begin with chapter-wise sets and then shift to full-length Paper I mocks with 150 questions,
              150 marks, and 150-minute timing for realistic exam rhythm.
            </p>
            <p>
              Use the attempt-review-repeat cycle after every set. Focus first on concept gaps,
              then on speed and section balancing so your final mock accuracy becomes consistent.
            </p>
          </div>
        )}
        {isSsc && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This SSC page is designed for serious government exam preparation with bilingual support.
              You can begin with section-wise foundational sets and then move to full-length Tier I, CHSL,
              and Tier II mocks for realistic exam pacing.
            </p>
            <p>
              Follow a simple cycle: attempt, analyze, and revise. Improve accuracy in Reasoning and Quant first,
              then strengthen English and General Awareness consistency across weekly timed rounds in all three tracks.
            </p>
          </div>
        )}
        {isRailway && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This Railway page is built for practical RRB preparation with bilingual support and full-length
              official-style tracks. You can practice Group D, NTPC CBT-1, ALP/Technician CBT-1, and
              Ticket Clerk/TT patterns with realistic time limits.
            </p>
            <p>
              Follow a simple loop: attempt under timer, analyze errors by section, and re-attempt weak areas.
              This gives better score stability than random topic hopping before the exam.
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

      {isIelts && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>Students preparing for study abroad admissions and university English requirements.</li>
              <li>Working professionals who need IELTS for jobs, licensing, or relocation plans.</li>
              <li>Immigration applicants preparing for General Training and practical English use cases.</li>
              <li>Learners who want explanation-based practice before full mock testing or paid coaching.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Candidates who want only official Cambridge books or copyrighted past papers.</li>
              <li>Learners expecting live speaking evaluation or scored essay correction on this page alone.</li>
              <li>Users who want shortcuts without reviewing explanations and recurring mistakes.</li>
              <li>People who still have not decided whether they need IELTS Academic or General Training.</li>
            </ul>
          </div>
        </section>
      )}

      {isIelts && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step IELTS practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Choose the correct exam route</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pick Academic if your goal is university or higher education. Pick General Training if your goal is work,
                migration, or practical English proof.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Build one skill at a time</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Start with Listening or Reading sets to improve objective accuracy first. Then add Writing strategy and Speaking confidence practice.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Add timed rounds</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use 40-question listening and reading sets under realistic timing. Track careless errors separately from vocabulary or comprehension gaps.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Review by skill, not only score</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                After every set, ask whether the mistake came from weak vocabulary, slow reading, poor concentration, weak task structure, or short spoken answers.
              </p>
            </div>
          </div>
        </section>
      )}

      {isIelts && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            IELTS Format At A Glance
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How these IELTS practice tests map to real exam needs</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            IELTS has four core skill areas: Listening, Reading, Writing, and Speaking. Academic and General Training candidates share
            Listening and Speaking, while Reading and Writing expectations differ depending on the route. This page separates those paths
            so students, employees, and immigrants can practice with more purpose.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Listening</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">40 transcript-based questions to train detail capture, focus, and answer checking.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Academic Reading</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">For study abroad applicants who need stronger passage analysis and academic vocabulary control.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">General Reading</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">For employees and immigrants handling notices, workplace messages, and practical English texts.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Writing and Speaking</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Objective strategy practice to improve structure, fluency habits, and common band-limiting decisions.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Choose IELTS Academic if</p>
              <p className="mt-2">You are applying to universities, colleges, or student pathways and need stronger academic reading and writing support.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Choose IELTS General Training if</p>
              <p className="mt-2">You are preparing for migration, work-related English proof, or practical everyday reading tasks instead of academic passages.</p>
            </div>
          </div>
        </section>
      )}

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

      {isCtet && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>First-time CTET candidates who need clear bilingual concept building.</li>
              <li>Repeat aspirants who want full-length 150-question practice with review.</li>
              <li>Teacher education students preparing pedagogy plus school-subject sections.</li>
              <li>Working learners who need short chapter rounds before full mocks.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Candidates looking only for copied official previous-year question papers.</li>
              <li>Learners who skip explanation review and depend only on score checking.</li>
              <li>Students preparing a different teacher recruitment exam pattern only.</li>
              <li>Users expecting one-click shortcuts without section-wise practice discipline.</li>
            </ul>
          </div>
        </section>
      )}

      {isSsc && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>SSC aspirants preparing for Tier I objective papers with strict timing.</li>
              <li>Students who need bilingual practice in English and Hindi for concept clarity.</li>
              <li>Candidates who want section-wise basics before full-length mock pressure.</li>
              <li>Repeat aspirants focusing on speed, accuracy, and error reduction.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Candidates looking only for copied official previous-year SSC papers.</li>
              <li>Learners who skip explanation review and only chase mock scores.</li>
              <li>Students preparing subjective/descriptive-only exam formats.</li>
              <li>Users expecting instant shortcuts without planned revision cycles.</li>
            </ul>
          </div>
        </section>
      )}

      {isRailway && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>RRB aspirants targeting Group D, NTPC, ALP/Technician, or TT/Ticket Clerk posts.</li>
              <li>Candidates who want bilingual practice with realistic exam timing pressure.</li>
              <li>Students who need repeated full-length mocks instead of only short chapter tests.</li>
              <li>Repeat aspirants focusing on speed, accuracy, and negative-marking control.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Candidates looking only for copied official previous-year Railway question papers.</li>
              <li>Users who skip answer analysis and only attempt mocks without review.</li>
              <li>Students preparing only descriptive or interview-only stages at this moment.</li>
              <li>Learners expecting shortcut preparation without section-wise discipline.</li>
            </ul>
          </div>
        </section>
      )}

      {isSsc && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step SSC practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Build section basics</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Start with topic-wise Reasoning, Quant, English, and GA sets to stabilize fundamentals and remove frequent conceptual mistakes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Add timed full mocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Attempt Tier I and CHSL mocks (100 questions in 60 minutes), then progress to Tier II mocks (150 questions in 120 minutes).
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Analyze by section</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Separate mistakes into concept errors, calculation errors, and careless marking errors for targeted weekly correction.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Repeat revision loop</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Re-attempt weak areas after 3-5 days and retake one full mock every week to track score stability.
              </p>
            </div>
          </div>
        </section>
      )}

      {isRailway && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step Railway practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Pick your target pattern</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Choose Group D, NTPC, ALP/Technician, or Ticket Clerk/TT based on your target recruitment notice and post preference.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Start with timed full mocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Attempt full papers under exact pattern timing (60 or 90 minutes) to build exam pacing and section switching skill.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Analyze section error types</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Separate errors into concept gaps, calculation mistakes, and time-pressure mistakes so your revision remains focused.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Repeat weak sections weekly</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Re-attempt one mock from the same track every week and track whether accuracy holds under timer pressure.
              </p>
            </div>
          </div>
        </section>
      )}

      {isSsc && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            SSC Tier I, CHSL, and Tier II Patterns
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How to use SSC full-length mocks effectively</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            This page now includes three practical SSC tracks: Tier I, CHSL, and Tier II. Use Tier I and CHSL for speed-based
            60-minute rounds, then use Tier II for longer-duration stamina and advanced section balancing.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Tier I Full Mocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">100 questions in 60 minutes with balanced objective section coverage.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">CHSL Full Mocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">100 questions in 60 minutes to improve accuracy with CHSL-style pacing.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Tier II Full Mocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">150 questions in 120 minutes for advanced practice and exam stamina.</p>
            </div>
          </div>
        </section>
      )}

      {isRailway && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            Railway Official-Style Mock Patterns
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How these Railway tracks map to real exam practice</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            This page includes four practical Railway mock tracks. Use the track that matches your post target,
            and solve each mock under strict timing so your speed and decision quality improve together.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            Recommended attempt order: Group D, NTPC CBT-1, ALP/Technician CBT-1, then Ticket Clerk/TT.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">RRB Group D CBT</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">100 questions in 90 minutes with balanced math, reasoning, science, and GA coverage.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">RRB NTPC CBT-1</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">100 questions in 90 minutes focused on mathematics, reasoning, and general awareness.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">RRB ALP/Technician CBT-1</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">75 questions in 60 minutes to train fast decision-making and section balance.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">RRB Ticket Clerk / TT</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">100 questions in 90 minutes following practical NTPC-style objective structure.</p>
            </div>
          </div>
        </section>
      )}

      {isCtet && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            CTET Paper I Pattern
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How to use CTET full-length mocks on this page</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Full-length CTET Paper I practice is most useful when attempted with exam-like timing.
            Follow a clear order: topic strengthening first, mixed full mock second, and targeted revision third.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">150 Questions</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Matches CTET Paper I total question count so stamina and focus can be trained realistically.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">150 Minutes</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Attempt under one sitting to improve time distribution across CDP, languages, mathematics, and EVS.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Bilingual Support</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Practice in English, Hindi, or both so concept understanding improves without language confusion.
              </p>
            </div>
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
              {(isRailway ? railwayLiveSets : govCategoryData.sets.filter((s) => s.isLive)).map((set) => (
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
                        {isRailway ? "Start Railway Mock" : "Start Practice Test"}
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

                {group.examSlug === "kcet" && (
                  <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">KCET quick FAQs</h3>
                    <div className="mt-4 space-y-3">
                      {kcetFaqs.map((faq) => (
                        <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

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
          ) : isIelts ? (
            <>
              {ieltsGroups.map((group) => (
                <div key={group.key} className="space-y-6">
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                          {group.shortName}
                        </div>
                        <h3 className="mt-4 text-2xl font-bold text-slate-900">{group.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                            <div className="font-semibold text-slate-900">Real-test format</div>
                            <div className="mt-1">{group.format}</div>
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                            <div className="font-semibold text-slate-900">Real-test timing</div>
                            <div className="mt-1">{group.duration}</div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{group.bestFor}</p>
                        <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">{group.note}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {group.sets.map((set) => (
                      <div
                        key={set.slug}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-3xl">
                            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                              {set.sectionLabel || set.examType}
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
                    ))}
                  </div>
                </div>
              ))}

              {ieltsFoundationSets.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Foundation English Basics</h3>
                  <p className="text-sm leading-7 text-slate-600">
                    These shorter sets are useful before moving into section-based IELTS practice if you still need grammar,
                    vocabulary, and short reading confidence.
                  </p>
                  <div className="grid gap-4">
                    {ieltsFoundationSets.map((set) => (
                      <div
                        key={set.slug}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-3xl">
                            <h4 className="text-2xl font-bold text-slate-900">{set.title}</h4>
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
                              Start Foundation Set
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
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

      {isIelts && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {ieltsFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isCtet && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {ctetFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isSsc && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {sscFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isRailway && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {railwayFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isCtet && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              CTET questions on this page are original bilingual practice content for educational self-assessment.
            </p>
            <p>
              Pattern references are updated periodically, but candidates should always cross-check latest notices from official CTET sources.
            </p>
            <p>
              Last reviewed: April 2026.
            </p>
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

      {isIelts && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              IELTS practice questions on this page are original and created for educational self-assessment. They are not official IELTS or Cambridge materials.
            </p>
            <p>
              Listening and reading sets are designed to be closer to real section counts and timing, but writing and speaking still need human feedback for full band evaluation.
            </p>
            <p>
              Last reviewed: April 2026. Candidates should still verify the latest format and score-use rules from British Council or IDP IELTS before booking the exam.
            </p>
          </div>
        </section>
      )}

      {isSsc && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              SSC questions on this page are original bilingual practice content for educational self-assessment and exam readiness.
            </p>
            <p>
              Full-length sets follow practical SSC Tier I, CHSL, and Tier II patterns used for preparation (100Q/60 min for Tier I and CHSL, 150Q/120 min for Tier II), but candidates should verify latest notices from official SSC sources.
            </p>
            <p>
              Last reviewed: April 2026.
            </p>
          </div>
        </section>
      )}

      {isRailway && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              Railway questions on this page are original bilingual practice content for educational self-assessment.
            </p>
            <p>
              Full-length tracks are built on practical official-style patterns for RRB Group D, NTPC CBT-1, ALP/Technician CBT-1, and Ticket Clerk/TT. Candidates should still verify final notifications from official RRB zones.
            </p>
            <p>
              Last reviewed: April 2026.
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
            {isIelts && (
              <>
                <Link
                  href="/global-careers"
                  className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Explore Global Careers
                </Link>
                <Link
                  href="/resources"
                  className="inline-block rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Browse Visa And Study Resources
                </Link>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}