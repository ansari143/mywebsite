import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPracticeCategory,
  getPracticeSetsByCategory,
  getGovPracticeCategoryBySlug,
  getEngineeringPracticeGroups,
  getIeltsPracticeGroups,
  getToeflPracticeGroups,
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
  const isToefl = category === "toefl";
  const isCtet = category === "ctet";
  const isSsc = category === "ssc";
  const isRailway = category === "railway";
  const isMedical = category === "medical";
  const isAviation = category === "aviation";

  if (!categoryData && !govCategoryData) return notFound();

  const isGov = !!govCategoryData;
  const data = govCategoryData || categoryData!;
  const nonGovSets = !isGov ? getPracticeSetsByCategory(category) : [];
  const languageTestGroups = isIelts
    ? getIeltsPracticeGroups()
    : isToefl
      ? getToeflPracticeGroups()
      : [];
  const ieltsFoundationSets = (isIelts || isToefl)
    ? nonGovSets.filter((set) => !set.practiceGroup)
    : [];
  const sortBySetNumber = (a: { slug: string }, b: { slug: string }) => {
    const aNum = Number(a.slug.split("-").pop() || 0);
    const bNum = Number(b.slug.split("-").pop() || 0);
    return aNum - bNum;
  };
  const aviationPracticeGroups = isAviation
    ? [
        {
          examType: "Aviation Cabin Crew",
          title: "Cabin Crew Practice Tests",
          description:
            "Passenger service, safety awareness, communication etiquette, and interview scenario practice for cabin crew roles. 5 sets from beginner to advanced.",
          sets: nonGovSets
            .filter((set) => set.examType === "Aviation Cabin Crew")
            .sort(sortBySetNumber),
        },
        {
          examType: "Aviation Ground Staff",
          title: "Ground Staff Practice Tests",
          description:
            "Check-in flow, documentation, queue management, baggage basics, and service desk communication for ground staff roles. 5 sets from beginner to advanced.",
          sets: nonGovSets
            .filter((set) => set.examType === "Aviation Ground Staff")
            .sort(sortBySetNumber),
        },
        {
          examType: "Airport Support Staff",
          title: "Airport Support Staff Practice Tests",
          description:
            "Shift discipline, safety reporting, escalation judgment, and operational teamwork for support staff roles. 5 sets from beginner to advanced.",
          sets: nonGovSets
            .filter((set) => set.examType === "Airport Support Staff")
            .sort(sortBySetNumber),
        },
        {
          examType: "Aviation English",
          title: "Aviation English Communication Practice Tests",
          description:
            "Spoken clarity, interview grammar, polite service phrases, and role-based scenario responses. 5 sets from beginner to advanced.",
          sets: nonGovSets
            .filter((set) => set.examType === "Aviation English")
            .sort(sortBySetNumber),
        },
      ].filter((group) => group.sets.length > 0)
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

  const wbjeeFaqs = [
    {
      q: "How many questions are there in the WBJEE full-length mocks on this page?",
      a: "Each WBJEE full-length mock here contains 155 questions in practical paper-style flow: Mathematics-heavy Paper 1 plus Physics/Chemistry sections for Paper 2.",
    },
    {
      q: "How should I use WBJEE Set 1 to Set 5 effectively?",
      a: "Follow sequence order: Set 1 and Set 2 for speed and concept base, Set 3 and Set 4 for exam pressure simulation, and Set 5 for final high-difficulty revision.",
    },
    {
      q: "What timing should I follow for WBJEE full mocks?",
      a: "Use a full 240-minute simulation if you are practicing both papers in one sitting. You can also split practice into Paper 1 and Paper 2 blocks as per your weekly plan.",
    },
    {
      q: "Are these official WBJEE previous-year papers?",
      a: "No. These are original pattern-based practice sets for self-assessment. Always cross-check final syllabus, question pattern categories, and updates from official WBJEEB notices.",
    },
  ];

  const jeeAdvancedFaqs = [
    {
      q: "How many questions are in each JEE Advanced full-length mock here?",
      a: "Each JEE Advanced full-length mock here uses a pattern-based 36-question structure: 12 Mathematics, 12 Physics, and 12 Chemistry for practical two-paper strategy practice.",
    },
    {
      q: "How should I attempt JEE Advanced Set 1 through Set 5?",
      a: "Start with Set 1 and Set 2 for foundational depth and timing awareness, progress to Set 3 and Set 4 for full-difficulty simulation, and complete Set 5 as a high-pressure final revision checkpoint.",
    },
    {
      q: "What is the recommended time allocation for JEE Advanced practice?",
      a: "Allocate a full 4 hours (240 minutes) for both papers combined. Paper 1 typically takes 90-120 minutes and Paper 2 takes 90-120 minutes. You can also split them across different days as per your weekly plan.",
    },
    {
      q: "Are these official JEE Advanced previous papers?",
      a: "No. These are original, pattern-based practice tests for self-assessment and exam strategy. Always verify final exam patterns, syllabus updates, and official notices from JEE Advanced's official portal.",
    },
  ];

    const jeeMainFaqs = [
      {
        q: "How many questions are in each JEE Main full-length mock here?",
        a: "Each JEE Main full-length mock contains 90 official-pattern questions: 30 Mathematics, 30 Physics, and 30 Chemistry, reflecting the standard computer-based exam format.",
      },
      {
        q: "How should I use JEE Main Set 1 through Set 5 in my preparation?",
        a: "Start with Set 1 and Set 2 for speed and confidence building, then move to Set 3 and Set 4 for exam-pressure practice, and complete Set 5 as your final high-difficulty revision mock.",
      },
      {
        q: "What timing should I follow for JEE Main full-length mocks?",
        a: "Allocate exactly 180 minutes (3 hours) for each full mock to match the official exam duration. Practice time management so you can attempt all 90 questions with proper verification and not rush.",
      },
      {
        q: "Are these official JEE Main previous-year papers?",
        a: "No. These are original, pattern-based practice tests designed for self-assessment and strategy refinement. Always verify final syllabus, exam patterns, and official notices from the JEE Main official website.",
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

  const toeflFaqs = [
    {
      q: "Which TOEFL section should I improve first if my score is stuck?",
      a: "Start with your weakest section from your latest mock result. For many students, Listening and Speaking improvement gives the fastest overall score gain because those sections affect both direct and integrated task performance.",
    },
    {
      q: "How should I practice TOEFL integrated tasks effectively?",
      a: "Use a three-step method: capture key points from each source, map how they connect (support/challenge), then respond with structure. Do not copy text; summarize relationships clearly in your own words.",
    },
    {
      q: "Are these TOEFL sets official ETS questions?",
      a: "No. These are original, exam-pattern-based practice sets for learning and self-assessment. Always verify current TOEFL iBT format and official score-use rules from ETS before test booking.",
    },
    {
      q: "How many TOEFL practice sessions should I run weekly?",
      a: "A practical plan is 4 to 6 sessions per week: two section-focused sessions, one integrated-task session, one full timed mini-mock, and one review-focused correction session.",
    },
    {
      q: "What is a practical readiness benchmark before exam booking?",
      a: "Aim for consistent mock performance near your target score range across multiple attempts, not one isolated high score. Stability in Reading, Listening, Speaking, and Writing together is the best readiness signal.",
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

  const medicalFaqs = [
    {
      q: "Are these NEET questions official previous-year papers?",
      a: "No. These are original English-only practice questions designed in official-style pattern flow for self-assessment. They are not copied official previous-year papers.",
    },
    {
      q: "What pattern do these NEET full mocks follow?",
      a: "Each full mock follows practical NEET-style distribution: Physics 45, Chemistry 45, Biology 90, with 180 total questions and 180 minutes timing for full-paper practice.",
    },
    {
      q: "How should I attempt these NEET sets weekly?",
      a: "Use a repeatable cycle: one full timed mock, one detailed analysis day, and targeted revision of weak Biology, Physics, and Chemistry areas before the next full mock.",
    },
    {
      q: "Where should I verify final NEET rules and notices?",
      a: "Verify the latest syllabus, bulletin, language policy, and exam notices from official portals: neet.nta.nic.in and nta.ac.in before final exam decisions.",
    },
  ];

  const aviationFaqs = [
    {
      q: "How should I choose between cabin crew, ground staff, and support staff roles?",
      a: "Choose based on your strengths: cabin crew is communication and service heavy, ground staff is process and passenger-flow focused, and support staff is operations discipline with safety-first execution.",
    },
    {
      q: "Where should I apply for aviation jobs officially?",
      a: "Use official recruitment channels only: airline career pages, airport operator websites, and recognized public sector portals where applicable. Avoid unofficial agents and verify every opening directly from the employer website.",
    },
    {
      q: "What should I prepare before aviation interviews?",
      a: "Prepare role-specific scenarios, communication clarity, customer handling responses, and operational discipline examples. Also keep your documents, resume, and role understanding ready.",
    },
    {
      q: "Are these official aviation exam papers?",
      a: "No. These are original practice sets designed for job-readiness and interview preparation. They are not official airline or airport authority exam papers.",
    },
  ];

  const aviationEnglishGuidance = [
    {
      role: "Cabin Crew English Focus",
      points: [
        "Practice polite passenger greetings, reassurance lines, and safety-instruction phrasing.",
        "Train short, clear answers for interview questions like 'Why cabin crew?' and 'How do you handle difficult passengers?'.",
        "Record your voice daily for 3-5 minutes to improve pace, pronunciation clarity, and confidence.",
      ],
    },
    {
      role: "Ground Staff English Focus",
      points: [
        "Practice check-in and delay-update language using simple and accurate sentence structures.",
        "Prepare role phrases: document verification requests, queue guidance, and escalation updates.",
        "Use scenario drills where you explain process steps politely under time pressure.",
      ],
    },
    {
      role: "Support Staff English Focus",
      points: [
        "Build practical reporting English: issue summary, time-stamp language, and escalation statements.",
        "Practice team handover phrases for pending tasks, risks, and action ownership.",
        "Train interview storytelling with situation-action-result format for reliability-focused questions.",
      ],
    },
  ];

  const aviationInterviewQa = {
    cabinCrew: [
      {
        q: "Why do you want to become cabin crew?",
        a: "I want to work in a role where service quality and safety discipline go together. I enjoy helping people in high-pressure environments, and I have been practicing communication, grooming standards, and scenario-based responses to be ready for this responsibility.",
      },
      {
        q: "How will you handle an upset passenger during delay?",
        a: "I would first acknowledge the passenger's concern calmly, share only verified updates, and explain the next steps clearly. My goal is to reduce anxiety through respectful communication and consistent follow-up.",
      },
    ],
    groundStaff: [
      {
        q: "What is your approach when check-in counters become crowded?",
        a: "I prioritize flow control by giving clear instructions, coordinating with nearby desks, and keeping passengers informed. This helps maintain both service quality and operational discipline.",
      },
      {
        q: "How do you respond if a document does not match requirements?",
        a: "I stay polite, explain the requirement clearly, and follow verification protocol. If needed, I escalate to the appropriate supervisor so the decision remains compliant and transparent.",
      },
    ],
    supportStaff: [
      {
        q: "How do you handle operational mistakes in your shift?",
        a: "I report the issue early, correct it through the proper process, and document preventive steps to avoid repeat errors. I focus on accountability rather than blame.",
      },
      {
        q: "What does safety-first behavior mean in support operations?",
        a: "It means following SOP strictly, communicating risks on time, and escalating quickly when required. Consistent discipline and teamwork are essential for reliable airport operations.",
      },
    ],
  };

  const aviationSpokenEnglish14DayPlan = [
    { day: "Day 1", focus: "Self-introduction basics", task: "Record a 60-90 second introduction with role target and strengths." },
    { day: "Day 2", focus: "Polite greeting language", task: "Practice 15 service greetings and 10 polite requests aloud." },
    { day: "Day 3", focus: "Clear sentence control", task: "Answer 8 interview questions in short, structured sentences." },
    { day: "Day 4", focus: "Passenger empathy phrases", task: "Practice calm responses for delay and complaint situations." },
    { day: "Day 5", focus: "Role vocabulary", task: "Revise 30 role words (cabin, check-in, support ops) and use each in a sentence." },
    { day: "Day 6", focus: "Scenario speaking", task: "Solve 5 role scenarios using situation-action-result format." },
    { day: "Day 7", focus: "Week 1 mock", task: "Do one full mock interview round and review filler words." },
    { day: "Day 8", focus: "Confidence and tone", task: "Re-record top 10 answers with slower pace and clear pronunciation." },
    { day: "Day 9", focus: "Escalation language", task: "Practice factual escalation statements with time and action details." },
    { day: "Day 10", focus: "Service recovery language", task: "Train apology and solution statements for difficult passengers." },
    { day: "Day 11", focus: "Company-fit answers", task: "Prepare 5 answers for why this airline/airport and role fit." },
    { day: "Day 12", focus: "Pressure handling", task: "Do rapid-fire Q&A: 20 questions in 20 minutes with concise replies." },
    { day: "Day 13", focus: "Final correction day", task: "Fix weak answers and remove vague lines from your response bank." },
    { day: "Day 14", focus: "Final interview simulation", task: "Run a full dress rehearsal with greeting, scenarios, and closing." },
  ];

  const aviationOfficialLinks = [
    {
      name: "IndiGo Careers",
      href: "https://www.goindigo.in/careers.html",
      type: "Airline",
      note: "Cabin crew, airport operations, and support roles.",
    },
    {
      name: "Air India Careers",
      href: "https://careers.airindia.com/",
      type: "Airline",
      note: "Check current airline openings and eligibility notes.",
    },
    {
      name: "Air India Careers Portal",
      href: "https://careers.airindia.com/",
      type: "Airline",
      note: "Current merged hiring portal for Air India group roles.",
    },
    {
      name: "Akasa Air Careers",
      href: "https://www.akasaair.com/careers",
      type: "Airline",
      note: "Operational and customer-facing role opportunities.",
    },
    {
      name: "AAI Careers",
      href: "https://www.aai.aero/en/careers",
      type: "Airport Operator",
      note: "Airport Authority of India official recruitment updates.",
    },
    {
      name: "GMR Airports Careers",
      href: "https://careers.gmrgroup.in/",
      type: "Airport Operator",
      note: "Airport operations and support hiring by GMR.",
    },
    {
      name: "Adani Airports Careers",
      href: "https://careers.adani.com/",
      type: "Airport Operator",
      note: "Search by airport operations and customer service roles.",
    },
    {
      name: "DGCA India",
      href: "https://www.dgca.gov.in/",
      type: "Regulator",
      note: "Civil aviation rules, circulars, and regulatory notices.",
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
        {isToefl && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This TOEFL page is organized section-wise for students targeting university admissions where academic English performance matters.
              You can practice Reading, Listening, Speaking, Writing, and integrated tasks in a structured path instead of random question solving.
            </p>
            <p>
              Start with your weakest section first, then move to integrated-skill practice. Each set is designed for attempt-review-repeat learning
              so score stability improves across all TOEFL iBT task types.
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
        {isMedical && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This Medical NEET page is built for practical full-paper preparation in English with
              official-style section balance. Based on the current official NEET ecosystem, the exam is conducted
              by NTA as a common and uniform entrance test for undergraduate medical pathways.
            </p>
            <p>
              Use these sets to train full-paper timing discipline, not just topic practice. Attempt under timer,
              review mistakes deeply, and convert weak areas into revision targets before the next mock.
            </p>
          </div>
        )}
        {isAviation && (
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-700">
            <p>
              This Aviation page is organized role-wise so candidates can prepare without confusion: Cabin Crew,
              Ground Staff, and Airport Support Staff each need different skills and interview patterns.
            </p>
            <p>
              Use this page for practical preparation: pick your role track first, follow application guidance,
              practice scenario-based questions, and train communication plus operational discipline before interviews.
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

      {isToefl && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>Students applying to universities that accept TOEFL iBT for English proficiency proof.</li>
              <li>Learners needing structured section practice in Reading, Listening, Speaking, and Writing.</li>
              <li>Candidates struggling with integrated tasks where multi-source response quality is tested.</li>
              <li>Students who want explanation-based practice before taking full timed mock simulations.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Candidates who want only official ETS content and no original practice material.</li>
              <li>Learners expecting speaking and writing score evaluation without human review.</li>
              <li>Users who skip post-test analysis and focus only on one-time raw scores.</li>
              <li>Students not yet clear whether target universities prefer TOEFL, IELTS, or both.</li>
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

      {isToefl && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step TOEFL practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Set your target score and timeline</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Start with your university requirement and build a weekly practice plan based on time left before test date.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Fix section weaknesses first</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use section-specific sets to improve weak areas before jumping to full integrated-task rounds.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Add integrated-skill simulations</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Practice read-listen-speak and read-listen-write combinations to build real TOEFL response readiness.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Review by error pattern</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Classify mistakes into comprehension gaps, structure gaps, and timing issues to improve faster.
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

      {isToefl && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            TOEFL iBT Format At A Glance
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How these TOEFL practice tests map to real exam needs</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            TOEFL iBT evaluates academic English through Reading, Listening, Speaking, and Writing, with strong emphasis on integrated skills.
            This page separates those practice tracks so students can improve section scores while also building cross-skill response quality.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Reading</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Academic passage logic, inference quality, and evidence-based answer accuracy.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Listening</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Lecture and conversation comprehension with note-based decision control.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Speaking</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Independent and integrated response structure under strict time limits.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Writing</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Integrated writing and academic discussion strategy with coherence focus.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Integrated Skills</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Read-listen-speak and read-listen-write performance for score stability.</p>
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

      {isMedical && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>NEET aspirants who want full-length mock discipline before exam day.</li>
              <li>Students preparing for MBBS, BDS, BAMS, BHMS, and related UG medical admissions.</li>
              <li>Learners who need balanced practice across Physics, Chemistry, and Biology.</li>
              <li>Repeat aspirants focusing on speed, accuracy, and better question selection under pressure.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Students looking only for copied official previous-year papers.</li>
              <li>Learners who skip analysis and only attempt mock after mock without review.</li>
              <li>Candidates expecting coaching-style lectures inside this test page.</li>
              <li>Users not yet ready for full 180-minute paper stamina.</li>
            </ul>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-emerald-900">Who should choose this</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
              <li>Candidates preparing for cabin crew interviews and service scenarios.</li>
              <li>Aspirants targeting airport ground operations and check-in assistance roles.</li>
              <li>Applicants for support and operations-assistant style airport positions.</li>
              <li>Beginners who want structured role-wise preparation instead of random job advice.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-rose-900">Who should avoid this format</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
              <li>Users expecting guaranteed placement shortcuts.</li>
              <li>Candidates relying only on unofficial agent claims.</li>
              <li>Learners who do not want interview scenario practice.</li>
              <li>Applicants looking only for pilot licensing exam preparation.</li>
            </ul>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            Aviation Role Tracks
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Choose your role path clearly</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Aviation hiring is not one single profile. Role clarity improves preparation quality and interview confidence.
            Start with the correct path below and use the matching practice set first.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Cabin Crew</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Passenger service, communication, safety awareness, and high-pressure behavior handling.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Ground Staff</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Check-in process discipline, passenger support, queue control, and documentation awareness.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Support Staff</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Operational support, shift discipline, reporting quality, and safety-first teamwork.</p>
            </div>
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

      {isMedical && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step NEET practice roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Build baseline with Set 1</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Take the first full mock in strict 180 minutes to measure current balance across Physics, Chemistry, and Biology.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Diagnose weak blocks</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Separate mistakes into concept errors, calculation errors, and time-pressure errors for targeted weekly correction.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Rebuild and retest</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Revise weak chapters for 3-5 days, then attempt the next full mock under exact timer conditions.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Lock exam-day strategy</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Finalize attempt order, question-skip rules, and review window so your score stays stable across all 5 sets.
              </p>
            </div>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Step-by-step aviation preparation roadmap</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Pick role target first</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Decide whether you are applying for cabin crew, ground staff, or support staff. Your preparation strategy should match role demands.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Apply through official channels</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Track openings from official airline and airport operator career pages. Verify recruitment notices directly before sharing documents.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Practice interview scenarios</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Train role-specific situations: passenger conflict, delay handling, teamwork pressure, and safety communication.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Build a repeat routine</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use weekly rounds: one practice set, one mock interview round, one feedback session, and one targeted improvement cycle.
              </p>
            </div>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">How to apply and prepare interviews</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Official application checklist</p>
              <p className="mt-2">Use official employer websites, keep updated resume, valid ID documents, educational records, and role-focused profile summary ready.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Mock interview checklist</p>
              <p className="mt-2">Practice self-introduction, role motivation, customer-handling scenarios, teamwork examples, and calm responses under pressure.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Role-specific practice tips</p>
              <p className="mt-2">Cabin crew: service language and confidence. Ground staff: process clarity and queue handling. Support staff: discipline, reporting, and safety focus.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">Avoid common mistakes</p>
              <p className="mt-2">Avoid fake recruiters, avoid unclear role applications, and avoid generic interview answers without real examples.</p>
            </div>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">English practice guidance for aviation roles</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Strong English communication improves interview confidence and on-duty performance across cabin crew,
            ground staff, and support operations. Use the dedicated Aviation English practice set plus these role-focused drills.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {aviationEnglishGuidance.map((item) => (
              <div key={item.role} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.role}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-medium text-emerald-700">
            Aviation English Roadmap
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Set 1 to Set 5 progression with score benchmarks</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Follow this order strictly so your language foundation, scenario quality, and interview confidence improve step by step.
            Move to the next set only when you hit the benchmark score in your current set.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1: Aviation English Set 1</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus: basic service phrases, interview grammar, and polite communication lines.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-800">Benchmark to move up: 70% or above</p>
              <Link
                href="/practice-tests/aviation/aviation-english-communication-practice-set-1"
                className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Set 1
              </Link>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2: Aviation English Set 2</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus: intermediate grammar control, scenario responses, and stronger interview answer quality.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-800">Benchmark to move up: 75% or above</p>
              <Link
                href="/practice-tests/aviation/aviation-english-communication-practice-set-2"
                className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Set 2
              </Link>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Step 3: Aviation English Set 3</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus: advanced spoken scenarios, escalation language, and final-round interview communication.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-800">Benchmark to move up: 80% or above</p>
              <Link
                href="/practice-tests/aviation/aviation-english-communication-practice-set-3"
                className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Set 3
              </Link>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Step 4: Aviation English Set 4</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus: advanced policy language, escalation clarity, and multi-step spoken scenario control.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-800">Benchmark to move up: 82% or above</p>
              <Link
                href="/practice-tests/aviation/aviation-english-communication-practice-set-4"
                className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Set 4
              </Link>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Step 5: Aviation English Set 5</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focus: final interview mastery with high-pressure communication and consistent response quality.
              </p>
              <p className="mt-2 text-sm font-medium text-emerald-800">Final readiness target: 85% or above</p>
              <Link
                href="/practice-tests/aviation/aviation-english-communication-practice-set-5"
                className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start Set 5
              </Link>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700">
            If your score is below the benchmark, repeat the same set after 48 hours and correct weak answer patterns before progressing.
          </p>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            Spoken English 14-Day Routine
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Daily spoken English plan for aviation interviews</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Follow this day-wise routine to improve clarity, confidence, and interview response quality for cabin crew,
            ground staff, and support staff roles.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aviationSpokenEnglish14DayPlan.map((item) => (
              <div key={item.day} className="rounded-2xl border border-sky-100 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{item.day}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{item.focus}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.task}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Mock interview questions with sample answers</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Practice these answers in your own words. Keep replies specific, honest, and role-focused rather than memorized scripts.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Cabin Crew Interview Q&A</p>
              <div className="mt-3 space-y-3">
                {aviationInterviewQa.cabinCrew.map((item) => (
                  <div key={item.q} className="rounded-xl bg-white p-3">
                    <p className="text-sm font-semibold text-slate-900">Q: {item.q}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Ground Staff Interview Q&A</p>
              <div className="mt-3 space-y-3">
                {aviationInterviewQa.groundStaff.map((item) => (
                  <div key={item.q} className="rounded-xl bg-white p-3">
                    <p className="text-sm font-semibold text-slate-900">Q: {item.q}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Support Staff Interview Q&A</p>
              <div className="mt-3 space-y-3">
                {aviationInterviewQa.supportStaff.map((item) => (
                  <div key={item.q} className="rounded-xl bg-white p-3">
                    <p className="text-sm font-semibold text-slate-900">Q: {item.q}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">A: {item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            Official Links
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Verified aviation career and authority links</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            Apply only through verified employer portals and check official authority notices before sharing documents or paying any fee.
            These links are provided to help candidates avoid unofficial channels.
          </p>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
            <p>
              Compliance note: This page is informational only. We are not affiliated with these employers or authorities,
              we do not charge recruitment fees, and we do not guarantee selection or interview calls.
            </p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {aviationOfficialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="rounded-2xl border border-sky-100 bg-white p-4 transition hover:border-sky-300 hover:shadow-sm"
              >
                <div className="inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {item.type}
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">{item.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.note}</p>
                <p className="mt-3 text-sm font-medium text-blue-700">Open official page</p>
              </a>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-white p-5 text-sm leading-7 text-slate-700">
            <p className="font-semibold text-slate-900">Safe-application reminder</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Always verify the final job post on the employer domain before applying.</li>
              <li>Do not pay money to unofficial agents for interview or joining promises.</li>
              <li>Read eligibility, age, and document rules directly from the official listing.</li>
            </ul>
            <p className="mt-3">
              Editorial review status: links were manually reviewed in April 2026 and may change as employers update their career portals.
            </p>
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

      {isMedical && (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            NEET Official-Style Mock Pattern
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">How these Medical NEET mocks map to real exam preparation</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
            NEET UG is conducted by NTA as a common and uniform entrance route for undergraduate medical admissions.
            These mocks are original practice sets designed to follow practical full-paper pattern flow for better speed,
            stamina, and subject balance.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Physics</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">45 questions for formula application, concept clarity, and calculation control.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Chemistry</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">45 questions covering physical, organic, and inorganic decision-making speed.</p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Biology</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">90 questions to strengthen high-weight retention, elimination, and accuracy.</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-sky-100 bg-white p-5 text-sm leading-7 text-slate-700">
            <p>
              Recommended attempt structure: one full mock each week with one full analysis day. Keep a chapter-wise error log,
              then use targeted revision before moving to the next set.
            </p>
            <p className="mt-3">
              These are not official papers. For final exam rules, language options, and latest notices, always verify with
              official portals such as neet.nta.nic.in and nta.ac.in.
            </p>
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
                  {!isMedical && <div className="text-sm text-slate-600">{chap.hi}</div>}
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
                      {set.bilingual && <p className="mt-1 text-sm text-slate-600">{set.titleHi}</p>}
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
                        {set.bilingual && (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                            Bilingual
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <Link
                        href={`/practice-tests/${category}/${set.slug}`}
                        className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
                      >
                        {isRailway ? "Start Railway Mock" : isMedical ? "Start NEET Mock" : isAviation ? "Start Aviation Practice" : "Start Practice Test"}
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
                          {set.bilingual && <p className="mt-1 text-sm text-slate-600">{set.titleHi}</p>}
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

                {group.examSlug === "wbjee" && (
                  <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">WBJEE quick FAQs</h3>
                    <div className="mt-4 space-y-3">
                      {wbjeeFaqs.map((faq) => (
                        <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {group.examSlug === "jee-advanced" && (
                  <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">JEE Advanced quick FAQs</h3>
                    <div className="mt-4 space-y-3">
                      {jeeAdvancedFaqs.map((faq) => (
                        <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {group.examSlug === "jee-main" && (
                  <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">JEE Main quick FAQs</h3>
                    <div className="mt-4 space-y-3">
                      {jeeMainFaqs.map((faq) => (
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
          ) : isIelts || isToefl ? (
            <>
              {languageTestGroups.map((group) => (
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
                    {isIelts
                      ? "These shorter sets are useful before moving into section-based IELTS practice if you still need grammar, vocabulary, and short reading confidence."
                      : "These shorter sets are useful before moving into section-based TOEFL practice if you still need grammar, vocabulary, and short reading confidence."}
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
          ) : isAviation ? (
            <>
              {aviationPracticeGroups.map((group) => (
                <div key={group.examType} className="space-y-4">
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                      {group.examType}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900">{group.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {group.sets.map((set) => (
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
                              Start Aviation Practice
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            nonGovSets.map((set) => (
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
                      {isAviation ? "Start Aviation Practice" : "Start Practice Test"}
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

      {isToefl && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {toeflFaqs.map((faq) => (
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

      {isMedical && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {medicalFaqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.q}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
            {aviationFaqs.map((faq) => (
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

      {isToefl && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              TOEFL practice questions on this page are original and created for educational self-assessment. They are not official ETS materials.
            </p>
            <p>
              Section-wise and integrated-task sets are designed for realistic skill building, but speaking and writing score quality still benefits from human feedback.
            </p>
            <p>
              Last reviewed: April 2026. Candidates should verify the latest TOEFL iBT format, scoring guidance, and score-use policies from ETS before booking the exam.
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

      {isMedical && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              Medical NEET questions on this page are original bilingual practice content created for educational self-assessment.
            </p>
            <p>
              These mocks follow official-style pattern structure for preparation quality. They are not affiliated with NTA and are not copied official previous-year papers.
            </p>
            <p>
              Final exam rules, language options, and notices should always be verified from official portals such as neet.nta.nic.in and nta.ac.in.
            </p>
            <p>
              Last reviewed: April 2026.
            </p>
          </div>
        </section>
      )}

      {isAviation && (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-950">Content trust and update policy</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-blue-900">
            <p>
              Aviation content on this page is original job-readiness guidance and role-based practice material.
            </p>
            <p>
              This content is not affiliated with any specific airline or airport recruiter and does not guarantee hiring outcomes.
            </p>
            <p>
              Candidates should verify final vacancies and eligibility only from official recruitment portals of airlines, airport operators, and relevant authorities.
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
            {isToefl && (
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