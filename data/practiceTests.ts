export type PracticeCategory = "ielts" | "toefl" | "engineering-entrance" | "ctet" | "ssc" | "railway" | "medical" | "aviation";

export type PracticeOption = {
  id: "A" | "B" | "C" | "D";
  text: string;
  hi?: string;
};

export type PracticeQuestion = {
  id: string;
  question: string;
  options: PracticeOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  hi?: string;
  explanationHi?: string;
  chapter?: string;
  chapterHi?: string;
};

export type PracticeSet = {
  id: string;
  slug: string;
  category: string;
  practiceGroup?: string;
  title: string;
  description: string;
  examType: string;
  examSlug?: "jee-main" | "jee-advanced" | "comedk" | "wbjee" | "kcet";
  examName?: string;
  sectionLabel?: string;
  level: "beginner" | "intermediate" | "advanced";
  questionCount: number;
  estimatedMinutes: number;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  questions: PracticeQuestion[];
  titleHi?: string;
  chapter?: string;
  chapterHi?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  durationMin?: number;
  bilingual?: boolean;
  isOriginal?: boolean;
  isLive?: boolean;
};

type IeltsPracticeGroupKey =
  | "ielts-listening"
  | "ielts-academic-reading"
  | "ielts-general-reading"
  | "ielts-writing"
  | "ielts-speaking";

type ToeflPracticeGroupKey =
  | "toefl-reading"
  | "toefl-listening"
  | "toefl-speaking"
  | "toefl-writing"
  | "toefl-integrated";

export type ExamRule = {
  examSlug: "jee-main" | "jee-advanced" | "comedk" | "wbjee" | "kcet";
  examName: string;
  shortName: string;
  officialBody: string;
  officialUrl: string;
  mode: string;
  duration: string;
  totalQuestions?: number;
  totalMarks?: number;
  subjects: string[];
  marking: string;
  negativeMarking: string;
  languages?: string[];
  note?: string;
  disclaimer?: string;
};

export type PracticeCategoryMeta = {
  slug: PracticeCategory;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroText: string;
  ctaHref: string;
  ctaLabel: string;
};

const ieltsPracticeGroupMeta = [
  {
    key: "ielts-listening" as const,
    title: "Listening Practice",
    shortName: "Listening",
    description:
      "Transcript-based listening practice for section flow, detail capture, note completion, and distractor control.",
    duration: "About 30 minutes in the real IELTS Listening test, plus answer transfer on paper.",
    format: "40 questions across 4 sections",
    bestFor:
      "All IELTS candidates including students, employees, and immigrants because Listening is common to Academic and General Training.",
    note:
      "These practice sets use transcript-style prompts instead of live audio, so they train comprehension strategy and detail accuracy rather than accent exposure alone.",
  },
  {
    key: "ielts-academic-reading" as const,
    title: "Academic Reading Practice",
    shortName: "Academic Reading",
    description:
      "Academic reading sets for students targeting university admission and applicants who need stronger passage analysis under time pressure.",
    duration: "60 minutes in the real IELTS Academic Reading test.",
    format: "40 questions from 3 longer passages",
    bestFor:
      "Students preparing for study abroad applications, pathway programs, and academic admissions.",
    note:
      "This site uses objective question types to strengthen skimming, scanning, vocabulary in context, and evidence-based answer selection.",
  },
  {
    key: "ielts-general-reading" as const,
    title: "General Training Reading Practice",
    shortName: "General Reading",
    description:
      "General Training reading sets built around notices, workplace messages, service information, and practical everyday English.",
    duration: "60 minutes in the real IELTS General Training Reading test.",
    format: "40 questions from social, workplace, and general interest texts",
    bestFor:
      "Employees, job-seekers, and migration applicants preparing for IELTS General Training.",
    note:
      "Use these sets to improve fast information retrieval, instruction-reading, and practical English accuracy in work and migration contexts.",
  },
  {
    key: "ielts-writing" as const,
    title: "Writing Strategy Practice",
    shortName: "Writing",
    description:
      "Objective writing-preparation sets that help learners understand structure, task response, coherence, overview writing, and band-relevant planning.",
    duration: "60 minutes in the real IELTS Writing test.",
    format: "2 tasks in the real exam; these practice sets use objective checks for planning and scoring logic",
    bestFor:
      "Students, working professionals, and immigrants who need clearer task structure before full written practice with teacher feedback.",
    note:
      "These are not a replacement for real written evaluation. They are designed to improve planning quality and reduce common task mistakes.",
  },
  {
    key: "ielts-speaking" as const,
    title: "Speaking Confidence Practice",
    shortName: "Speaking",
    description:
      "Speaking-preparation sets for Part 1, cue-card planning, follow-up ideas, fluency habits, and score-limiting mistakes.",
    duration: "11 to 14 minutes in the real IELTS Speaking test.",
    format: "3 speaking parts in a live examiner interview; these sets use objective prompts to train response quality",
    bestFor:
      "Candidates who freeze during interviews, give short answers, or need better structure for common speaking topics.",
    note:
      "Use these sets with voice practice. Objective questions help you understand what a strong spoken response should include.",
  },
];

const toeflPracticeGroupMeta = [
  {
    key: "toefl-reading" as const,
    title: "TOEFL Reading Practice",
    shortName: "Reading",
    description:
      "TOEFL iBT reading practice focused on passage logic, inference, vocabulary in context, and evidence-based answer choice.",
    duration: "About 35 minutes in the TOEFL iBT Reading section.",
    format: "20 questions from 2 academic passages (practice-style)",
    bestFor:
      "Students preparing for university-focused English tests and needing stronger academic reading speed and accuracy.",
    note:
      "These are original practice sets designed to improve skill readiness. Always verify current ETS format before exam booking.",
  },
  {
    key: "toefl-listening" as const,
    title: "TOEFL Listening Practice",
    shortName: "Listening",
    description:
      "TOEFL-style listening practice for lectures and campus conversations, with detail tracking and speaker-intent questions.",
    duration: "About 36 minutes in the TOEFL iBT Listening section.",
    format: "28 questions from lectures and conversations (practice-style)",
    bestFor:
      "Learners who miss detail while listening, confuse speaker purpose, or struggle with note-based answering under time pressure.",
    note:
      "This set uses transcript-style prompts for focused comprehension training and answer strategy improvement.",
  },
  {
    key: "toefl-speaking" as const,
    title: "TOEFL Speaking Practice",
    shortName: "Speaking",
    description:
      "TOEFL speaking strategy practice for independent and integrated tasks with structure, clarity, and timed response flow.",
    duration: "About 16 minutes in the TOEFL iBT Speaking section.",
    format: "4 speaking tasks in the real test; objective strategy practice here",
    bestFor:
      "Students who need stronger speaking structure, concise delivery, and better integration of reading/listening points in responses.",
    note:
      "Use these sets with voice recording to improve content quality, fluency control, and response organization.",
  },
  {
    key: "toefl-writing" as const,
    title: "TOEFL Writing Practice",
    shortName: "Writing",
    description:
      "TOEFL writing strategy practice for integrated and academic discussion tasks, coherence, support quality, and grammar accuracy.",
    duration: "About 29 minutes in the TOEFL iBT Writing section.",
    format: "2 writing tasks in the real test; objective strategy practice here",
    bestFor:
      "Candidates who write generic answers, miss evidence usage, or need clearer organization and argument support.",
    note:
      "These questions train writing decisions and structure awareness before full written response evaluation.",
  },
  {
    key: "toefl-integrated" as const,
    title: "TOEFL Integrated Skills Practice",
    shortName: "Integrated Skills",
    description:
      "Cross-skill TOEFL practice combining reading, listening, speaking, and writing decision logic in exam-like scenarios.",
    duration: "Varies by task; built for mixed timed strategy practice.",
    format: "Integrated scenario questions across multiple TOEFL task types",
    bestFor:
      "Students targeting balanced score improvement across all sections, especially integrated task performance.",
    note:
      "Integrated skill quality strongly affects score consistency, so regular mixed-task practice is essential.",
  },
];

// New types for government job practice tests
export type GovPracticeOption = {
  id: "A" | "B" | "C" | "D";
  text: string;
  hi: string;
};

export type GovPracticeQuestion = {
  id: string;
  chapter: string;
  chapterHi: string;
  text: string;
  hi: string;
  options: GovPracticeOption[];
  correct: "A" | "B" | "C" | "D";
  explanation: string;
  explanationHi: string;
};

export type GovPracticeSet = {
  slug: string;
  title: string;
  titleHi: string;
  chapter: string;
  chapterHi: string;
  difficulty: "Easy" | "Medium" | "Hard";
  durationMin: number;
  questionCount: number;
  bilingual: boolean;
  isLive: boolean;
  questions?: GovPracticeQuestion[];
};

export type GovPracticeCategory = {
  slug: string;
  title: string;
  titleHi: string;
  icon: string;
  description: string;
  descriptionHi: string;
  audience: string[];
  chapters: { name: string; hi: string }[];
  sets: GovPracticeSet[];
};

function createQuestion(
  id: string,
  question: string,
  options: [string, string, string, string],
  correctAnswer: "A" | "B" | "C" | "D",
  explanation: string,
  topic: string,
  difficulty: "easy" | "medium" | "hard"
): PracticeQuestion {
  return {
    id,
    question,
    options: [
      { id: "A", text: options[0] },
      { id: "B", text: options[1] },
      { id: "C", text: options[2] },
      { id: "D", text: options[3] },
    ],
    correctAnswer,
    explanation,
    topic,
    difficulty,
  };
}

function createGovQuestion(
  id: string,
  chapter: string,
  chapterHi: string,
  text: string,
  hi: string,
  options: [string, string, string, string, string, string, string, string], // 4 options en + 4 hi
  correct: "A" | "B" | "C" | "D",
  explanation: string,
  explanationHi: string
): GovPracticeQuestion {
  return {
    id,
    chapter,
    chapterHi,
    text,
    hi,
    options: [
      { id: "A", text: options[0], hi: options[4] },
      { id: "B", text: options[1], hi: options[5] },
      { id: "C", text: options[2], hi: options[6] },
      { id: "D", text: options[3], hi: options[7] },
    ],
    correct,
    explanation,
    explanationHi,
  };
}

function createGeneratedQuestion(
  id: string,
  question: string,
  correctText: string,
  distractors: [string, string, string],
  explanation: string,
  topic: string,
  difficulty: "easy" | "medium" | "hard",
  seed: number
): PracticeQuestion {
  const correctIndex = seed % 4;
  const options: string[] = [];
  let distractorIndex = 0;

  for (let index = 0; index < 4; index += 1) {
    if (index === correctIndex) {
      options.push(correctText);
    } else {
      options.push(distractors[distractorIndex]);
      distractorIndex += 1;
    }
  }

  const optionIds: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  return createQuestion(
    id,
    question,
    options as [string, string, string, string],
    optionIds[correctIndex],
    explanation,
    topic,
    difficulty
  );
}

function formatValue(value: number) {
  if (Number.isInteger(value)) {
    return `${value}`;
  }

  return value.toFixed(2).replace(/\.00$/, "").replace(/0$/, "");
}

type BilingualChoice = {
  en: string;
  hi: string;
};

function createSeededGovQuestion(
  id: string,
  chapter: string,
  chapterHi: string,
  text: string,
  hi: string,
  correctChoice: BilingualChoice,
  distractors: [BilingualChoice, BilingualChoice, BilingualChoice],
  explanation: string,
  explanationHi: string,
  seed: number
): GovPracticeQuestion {
  const allChoices = [correctChoice, ...distractors];
  const correctIndex = seed % 4;
  const arranged: BilingualChoice[] = [];
  let distractorIndex = 1;

  for (let index = 0; index < 4; index += 1) {
    if (index === correctIndex) {
      arranged.push(allChoices[0]);
    } else {
      arranged.push(allChoices[distractorIndex]);
      distractorIndex += 1;
    }
  }

  const optionIds: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  return createGovQuestion(
    id,
    chapter,
    chapterHi,
    text,
    hi,
    [
      arranged[0].en,
      arranged[1].en,
      arranged[2].en,
      arranged[3].en,
      arranged[0].hi,
      arranged[1].hi,
      arranged[2].hi,
      arranged[3].hi,
    ],
    optionIds[correctIndex],
    explanation,
    explanationHi
  );
}

function createCtetCdpQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 200 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      const age = 7 + ((setNumber + qNo) % 4);
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        `A ${age}-year-old child can conserve quantity and classify objects. This mostly matches which Piaget stage?`,
        `${age} वर्ष का बच्चा मात्रा संरक्षण और वर्गीकरण कर सकता है। यह मुख्य रूप से पियाजे के किस चरण से मेल खाता है?`,
        { en: "Concrete operational stage", hi: "ठोस संक्रियात्मक चरण" },
        [
          { en: "Sensorimotor stage", hi: "संवेदी-प्रेरक चरण" },
          { en: "Preoperational stage", hi: "पूर्व-संक्रियात्मक चरण" },
          { en: "Formal operational stage", hi: "औपचारिक संक्रियात्मक चरण" },
        ],
        "Children in this age range usually begin concrete logical operations such as conservation and classification.",
        "इस आयु में बच्चे संरक्षण और वर्गीकरण जैसी ठोस तार्किक संक्रियाएं करने लगते हैं।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Which classroom strategy best supports inclusive education?",
        "समावेशी शिक्षा को सबसे बेहतर कौन सी कक्षा रणनीति समर्थन करती है?",
        { en: "Differentiated instruction with multiple learning supports", hi: "विभेदित शिक्षण और बहु-स्तरीय सीखने का समर्थन" },
        [
          { en: "Same worksheet and same pace for all learners", hi: "सभी बच्चों के लिए एक ही वर्कशीट और एक ही गति" },
          { en: "Teaching only high scorers separately", hi: "केवल उच्च अंक वाले बच्चों को अलग से पढ़ाना" },
          { en: "Reducing interaction among mixed-ability students", hi: "विभिन्न क्षमता वाले छात्रों की सहभागिता कम करना" },
        ],
        "Inclusive classrooms use flexible teaching methods and supports based on learner needs.",
        "समावेशी कक्षा में बच्चों की जरूरत के अनुसार लचीली पद्धतियां और सहायता दी जाती हैं।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Formative assessment is mainly used to:",
        "रचनात्मक मूल्यांकन (Formative Assessment) का मुख्य उद्देश्य क्या है?",
        { en: "Improve ongoing learning through feedback", hi: "फीडबैक के माध्यम से सीखने में निरंतर सुधार करना" },
        [
          { en: "Rank students publicly at the end of term", hi: "सत्र अंत में छात्रों की सार्वजनिक रैंकिंग करना" },
          { en: "Replace all classroom teaching", hi: "पूरे कक्षा शिक्षण को बदल देना" },
          { en: "Conduct only memory-based testing", hi: "केवल रटने आधारित परीक्षण करना" },
        ],
        "Formative assessment provides feedback during learning, not only at the end.",
        "रचनात्मक मूल्यांकन सीखने की प्रक्रिया के दौरान सुधार हेतु फीडबैक देता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "A child learns a behavior by watching the teacher demonstrate it. This is:",
        "एक बच्चा शिक्षक को देखकर किसी व्यवहार को सीखता है। यह क्या कहलाता है?",
        { en: "Observational learning", hi: "अवलोकनात्मक अधिगम" },
        [
          { en: "Classical conditioning", hi: "शास्त्रीय अनुबंधन" },
          { en: "Trial and error only", hi: "केवल प्रयास और त्रुटि" },
          { en: "Rote learning", hi: "रटकर सीखना" },
        ],
        "Bandura emphasized learning through observation and imitation.",
        "बंडूरा ने अवलोकन और अनुकरण द्वारा सीखने पर जोर दिया।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "The best first response to a slow learner in a mixed classroom is:",
        "मिश्रित क्षमता वाली कक्षा में धीमी गति से सीखने वाले छात्र के लिए पहली उपयुक्त प्रतिक्रिया क्या होनी चाहिए?",
        { en: "Diagnostic support and remedial teaching", hi: "नैदानिक सहायता और उपचारात्मक शिक्षण" },
        [
          { en: "Seat the child at the back and ignore", hi: "बच्चे को पीछे बैठाकर नजरअंदाज करना" },
          { en: "Frequent punishment for low scores", hi: "कम अंकों पर बार-बार दंड देना" },
          { en: "Remove the child from class tasks", hi: "बच्चे को कक्षा कार्यों से अलग कर देना" },
        ],
        "Identify learning gaps first, then provide structured remedial support.",
        "पहले सीखने की कमी पहचानें, फिर योजनाबद्ध उपचारात्मक सहायता दें।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p1-set${setNumber}-cdp-${qNo}`,
      "Child Development and Pedagogy",
      "बच्चों का विकास और शिक्षाशास्त्र",
      "Which classroom climate most improves student motivation?",
      "कौन सा कक्षा वातावरण विद्यार्थियों की प्रेरणा को सबसे अधिक बढ़ाता है?",
      { en: "Supportive and fear-free learning environment", hi: "सहायक और भय-मुक्त सीखने का वातावरण" },
      [
        { en: "Strict silence and no questioning", hi: "कठोर चुप्पी और प्रश्न न पूछने देना" },
        { en: "Only marks-focused interaction", hi: "केवल अंकों पर आधारित संवाद" },
        { en: "Teacher-centered one-way lecturing", hi: "एकतरफा शिक्षक-केंद्रित व्याख्यान" },
      ],
      "Motivation rises when learners feel safe, respected, and encouraged to participate.",
      "जब शिक्षार्थी सुरक्षित, सम्मानित और सहभागी महसूस करते हैं, तो प्रेरणा बढ़ती है।",
      seed
    );
  });
}

function createCtetEnglishQuestions(setNumber: number): GovPracticeQuestion[] {
  const verbSubjects = [
    { en: "She", hi: "She" },
    { en: "Rohan", hi: "Rohan" },
    { en: "The teacher", hi: "The teacher" },
    { en: "My sister", hi: "My sister" },
  ];

  const synonyms = [
    { word: "begin", answer: "start", wrong: ["stop", "close", "finish"], hi: "शुरू करना" },
    { word: "rapid", answer: "fast", wrong: ["slow", "weak", "quiet"], hi: "तेज" },
    { word: "correct", answer: "right", wrong: ["wrong", "late", "dim"], hi: "सही" },
  ] as const;

  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 300 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      const subject = verbSubjects[index % verbSubjects.length];
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        `Choose the correct verb: '${subject.en} _____ to school every day.'`,
        `सही क्रिया चुनें: '${subject.en} _____ to school every day.'`,
        { en: "goes", hi: "goes" },
        [
          { en: "go", hi: "go" },
          { en: "going", hi: "going" },
          { en: "gone", hi: "gone" },
        ],
        "For third-person singular subjects, use 'goes' in simple present.",
        "Third-person singular subject के साथ simple present में 'goes' प्रयोग होता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Choose the correct article: 'He is ___ honest student.'",
        "सही article चुनें: 'He is ___ honest student.'",
        { en: "an", hi: "an" },
        [
          { en: "a", hi: "a" },
          { en: "the", hi: "the" },
          { en: "no article", hi: "कोई article नहीं" },
        ],
        "'Honest' starts with a vowel sound, so 'an' is correct.",
        "'honest' स्वर ध्वनि से शुरू होता है, इसलिए 'an' सही है।",
        seed
      );
    }

    if (pattern === 2) {
      const item = synonyms[index % synonyms.length];
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        `Choose the synonym of '${item.word}'.`,
        `'${item.word}' का समानार्थी चुनें।`,
        { en: item.answer, hi: item.hi },
        [
          { en: item.wrong[0], hi: item.wrong[0] },
          { en: item.wrong[1], hi: item.wrong[1] },
          { en: item.wrong[2], hi: item.wrong[2] },
        ],
        `The closest meaning of '${item.word}' is '${item.answer}'.`,
        `'${item.word}' का सबसे निकट अर्थ '${item.answer}' है।`,
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Choose the antonym of 'generous'.",
        "'generous' का विलोम चुनें।",
        { en: "selfish", hi: "स्वार्थी" },
        [
          { en: "kind", hi: "दयालु" },
          { en: "helpful", hi: "सहायक" },
          { en: "gentle", hi: "मृदु" },
        ],
        "'Selfish' is opposite in meaning to 'generous'.",
        "'Selfish', 'generous' का विपरीत अर्थ देता है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Fill in the blank: 'The books are ___ the table.'",
        "रिक्त स्थान भरें: 'The books are ___ the table.'",
        { en: "on", hi: "on" },
        [
          { en: "in", hi: "in" },
          { en: "at", hi: "at" },
          { en: "for", hi: "for" },
        ],
        "For surface placement, the correct preposition is 'on'.",
        "किसी सतह पर होने के लिए सही preposition 'on' है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p1-set${setNumber}-eng-${qNo}`,
      "Language I (English)",
      "भाषा I (अंग्रेजी)",
      "Read: 'Rina completed her homework before dinner.' What did Rina complete?",
      "पढ़ें: 'Rina completed her homework before dinner.' रिना ने क्या पूरा किया?",
      { en: "Her homework", hi: "अपना गृहकार्य" },
      [
        { en: "Her lunch", hi: "अपना भोजन" },
        { en: "Her exam", hi: "अपनी परीक्षा" },
        { en: "Her holiday", hi: "अपनी छुट्टी" },
      ],
      "The sentence directly states that she completed homework.",
      "वाक्य में स्पष्ट है कि उसने गृहकार्य पूरा किया।",
      seed
    );
  });
}

function createCtetHindiQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 400 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'राम बाजार गया' वाक्य में क्रिया कौन सी है?",
        "'राम बाजार गया' वाक्य में क्रिया कौन सी है?",
        { en: "गया", hi: "गया" },
        [
          { en: "राम", hi: "राम" },
          { en: "बाजार", hi: "बाजार" },
          { en: "में", hi: "में" },
        ],
        "'गया' कार्य को बताता है, इसलिए यह क्रिया है।",
        "'गया' कार्य को बताता है, इसलिए यह क्रिया है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'सुंदर फूल' में 'सुंदर' किस प्रकार का शब्द है?",
        "'सुंदर फूल' में 'सुंदर' किस प्रकार का शब्द है?",
        { en: "विशेषण", hi: "विशेषण" },
        [
          { en: "संज्ञा", hi: "संज्ञा" },
          { en: "क्रिया", hi: "क्रिया" },
          { en: "सर्वनाम", hi: "सर्वनाम" },
        ],
        "जो शब्द संज्ञा का गुण बताए, वह विशेषण कहलाता है।",
        "जो शब्द संज्ञा का गुण बताए, वह विशेषण कहलाता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'पानी' का पर्यायवाची क्या है?",
        "'पानी' का पर्यायवाची क्या है?",
        { en: "जल", hi: "जल" },
        [
          { en: "अग्नि", hi: "अग्नि" },
          { en: "धरा", hi: "धरा" },
          { en: "आकाश", hi: "आकाश" },
        ],
        "'जल' और 'पानी' समानार्थी शब्द हैं।",
        "'जल' और 'पानी' समानार्थी शब्द हैं।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'अच्छा' का विलोम क्या है?",
        "'अच्छा' का विलोम क्या है?",
        { en: "बुरा", hi: "बुरा" },
        [
          { en: "सुंदर", hi: "सुंदर" },
          { en: "तेज", hi: "तेज" },
          { en: "लंबा", hi: "लंबा" },
        ],
        "'अच्छा' का विपरीत अर्थ 'बुरा' है।",
        "'अच्छा' का विपरीत अर्थ 'बुरा' है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'मैं, हम, वह' किस प्रकार के शब्द हैं?",
        "'मैं, हम, वह' किस प्रकार के शब्द हैं?",
        { en: "सर्वनाम", hi: "सर्वनाम" },
        [
          { en: "संज्ञा", hi: "संज्ञा" },
          { en: "विशेषण", hi: "विशेषण" },
          { en: "क्रिया", hi: "क्रिया" },
        ],
        "ये संज्ञा के स्थान पर आते हैं, इसलिए सर्वनाम हैं।",
        "ये संज्ञा के स्थान पर आते हैं, इसलिए सर्वनाम हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p1-set${setNumber}-hin-${qNo}`,
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "सही वाक्य चुनें।",
      "सही वाक्य चुनें।",
      { en: "बच्चे मैदान में खेलते हैं।", hi: "बच्चे मैदान में खेलते हैं।" },
      [
        { en: "बच्चे मैदान में खेलता है।", hi: "बच्चे मैदान में खेलता है।" },
        { en: "बच्चे मैदान में खेलते है।", hi: "बच्चे मैदान में खेलते है।" },
        { en: "बच्चे मैदान में खेलती हैं।", hi: "बच्चे मैदान में खेलती हैं।" },
      ],
      "कर्ता और क्रिया में वचन-संगति होनी चाहिए।",
      "कर्ता और क्रिया में वचन-संगति होनी चाहिए।",
      seed
    );
  });
}

function createCtetMathQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 500 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      const a = 12 + setNumber + qNo;
      const b = 8 + (qNo % 7);
      const answer = a + b;
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `What is ${a} + ${b}?`,
        `${a} + ${b} कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 1}`, hi: `${answer - 1}` },
          { en: `${answer + 1}`, hi: `${answer + 1}` },
          { en: `${answer + 2}`, hi: `${answer + 2}` },
        ],
        `Adding ${a} and ${b} gives ${answer}.`,
        `${a} और ${b} का योग ${answer} है।`,
        seed
      );
    }

    if (pattern === 1) {
      const a = 70 + setNumber * 3 + qNo;
      const b = 20 + (qNo % 9);
      const answer = a - b;
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `What is ${a} - ${b}?`,
        `${a} - ${b} कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 2}`, hi: `${answer - 2}` },
          { en: `${answer + 2}`, hi: `${answer + 2}` },
          { en: `${answer + 4}`, hi: `${answer + 4}` },
        ],
        `Subtract ${b} from ${a} to get ${answer}.`,
        `${a} में से ${b} घटाने पर ${answer} मिलता है।`,
        seed
      );
    }

    if (pattern === 2) {
      const a = 6 + (qNo % 5);
      const b = 4 + (setNumber % 3);
      const answer = a * b;
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `Find the product: ${a} × ${b}`,
        `गुणनफल ज्ञात करें: ${a} × ${b}`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - b}`, hi: `${answer - b}` },
          { en: `${answer + b}`, hi: `${answer + b}` },
          { en: `${answer + 2}`, hi: `${answer + 2}` },
        ],
        `${a} multiplied by ${b} equals ${answer}.`,
        `${a} को ${b} से गुणा करने पर ${answer} मिलता है।`,
        seed
      );
    }

    if (pattern === 3) {
      const numerator = 2 + (qNo % 4);
      const denominator = 5;
      const ofValue = 10 * (setNumber + 2);
      const answer = (numerator * ofValue) / denominator;
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `What is ${numerator}/${denominator} of ${ofValue}?`,
        `${ofValue} का ${numerator}/${denominator} कितना होगा?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 2}`, hi: `${answer - 2}` },
          { en: `${answer + 2}`, hi: `${answer + 2}` },
          { en: `${answer + 5}`, hi: `${answer + 5}` },
        ],
        `(${numerator}/${denominator}) × ${ofValue} = ${answer}.`,
        `(${numerator}/${denominator}) × ${ofValue} = ${answer}।`,
        seed
      );
    }

    if (pattern === 4) {
      const side = 5 + (qNo % 6);
      const answer = side * 4;
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `Perimeter of a square with side ${side} cm is:`,
        `${side} सेमी भुजा वाले वर्ग का परिमाप है:`,
        { en: `${answer} cm`, hi: `${answer} सेमी` },
        [
          { en: `${side * 2} cm`, hi: `${side * 2} सेमी` },
          { en: `${side * 3} cm`, hi: `${side * 3} सेमी` },
          { en: `${side * side} cm`, hi: `${side * side} सेमी` },
        ],
        "Perimeter of a square = 4 × side.",
        "वर्ग का परिमाप = 4 × भुजा।",
        seed
      );
    }

    const startMinute = 10 + (qNo % 40);
    const addMinute = 15;
    const answerMinute = (startMinute + addMinute) % 60;
    const answerHour = answerMinute < startMinute ? 4 : 3;

    return createSeededGovQuestion(
      `ctet-p1-set${setNumber}-math-${qNo}`,
      "Mathematics",
      "गणित",
      `If the time is 3:${startMinute.toString().padStart(2, "0")} PM, what will it be after 15 minutes?`,
      `यदि समय 3:${startMinute.toString().padStart(2, "0")} PM है, तो 15 मिनट बाद समय क्या होगा?`,
      {
        en: `${answerHour}:${answerMinute.toString().padStart(2, "0")} PM`,
        hi: `${answerHour}:${answerMinute.toString().padStart(2, "0")} PM`,
      },
      [
        {
          en: `3:${((startMinute + 10) % 60).toString().padStart(2, "0")} PM`,
          hi: `3:${((startMinute + 10) % 60).toString().padStart(2, "0")} PM`,
        },
        {
          en: `3:${((startMinute + 20) % 60).toString().padStart(2, "0")} PM`,
          hi: `3:${((startMinute + 20) % 60).toString().padStart(2, "0")} PM`,
        },
        {
          en: `4:${((startMinute + 5) % 60).toString().padStart(2, "0")} PM`,
          hi: `4:${((startMinute + 5) % 60).toString().padStart(2, "0")} PM`,
        },
      ],
      "Add 15 minutes carefully, including hour change if minutes cross 60.",
      "15 मिनट जोड़ते समय 60 पार होने पर घंटे का परिवर्तन ध्यान रखें।",
      seed
    );
  });
}

function createCtetEvsQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 600 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-evs-${qNo}`,
        "Environmental Studies",
        "पर्यावरण अध्ययन",
        "Plants prepare food mainly through:",
        "पौधे भोजन मुख्य रूप से किस प्रक्रिया से बनाते हैं?",
        { en: "Photosynthesis", hi: "प्रकाश संश्लेषण" },
        [
          { en: "Respiration", hi: "श्वसन" },
          { en: "Digestion", hi: "पाचन" },
          { en: "Excretion", hi: "उत्सर्जन" },
        ],
        "Food preparation in green plants is called photosynthesis.",
        "हरे पौधों में भोजन बनाने की प्रक्रिया को प्रकाश संश्लेषण कहते हैं।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-evs-${qNo}`,
        "Environmental Studies",
        "पर्यावरण अध्ययन",
        "Which source gives us potable water after treatment?",
        "उपचार (treatment) के बाद पीने योग्य पानी किस स्रोत से मिलता है?",
        { en: "River water", hi: "नदी का पानी" },
        [
          { en: "Plastic waste", hi: "प्लास्टिक कचरा" },
          { en: "Smoke", hi: "धुआं" },
          { en: "Dry sand", hi: "सूखी रेत" },
        ],
        "River water is a major freshwater source and can be treated for drinking.",
        "नदी का पानी मीठे जल का प्रमुख स्रोत है और उपचार के बाद पीने योग्य बनता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-evs-${qNo}`,
        "Environmental Studies",
        "पर्यावरण अध्ययन",
        "Which organ is primarily responsible for breathing in humans?",
        "मनुष्य में श्वसन के लिए मुख्य रूप से कौन सा अंग जिम्मेदार है?",
        { en: "Lungs", hi: "फेफड़े" },
        [
          { en: "Liver", hi: "यकृत" },
          { en: "Kidney", hi: "गुर्दा" },
          { en: "Pancreas", hi: "अग्न्याशय" },
        ],
        "Lungs exchange oxygen and carbon dioxide in respiration.",
        "श्वसन में ऑक्सीजन और कार्बन डाइऑक्साइड का आदान-प्रदान फेफड़ों में होता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-evs-${qNo}`,
        "Environmental Studies",
        "पर्यावरण अध्ययन",
        "The sun rises in the:",
        "सूर्य किस दिशा में उगता है?",
        { en: "East", hi: "पूर्व" },
        [
          { en: "West", hi: "पश्चिम" },
          { en: "North", hi: "उत्तर" },
          { en: "South", hi: "दक्षिण" },
        ],
        "The sun appears to rise in the east due to Earth's rotation.",
        "पृथ्वी के घूर्णन के कारण सूर्य पूर्व दिशा में उगता हुआ दिखाई देता है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p1-set${setNumber}-evs-${qNo}`,
        "Environmental Studies",
        "पर्यावरण अध्ययन",
        "Which one is a renewable natural resource?",
        "निम्न में से कौन सा नवीकरणीय प्राकृतिक संसाधन है?",
        { en: "Sunlight", hi: "सूर्य प्रकाश" },
        [
          { en: "Coal", hi: "कोयला" },
          { en: "Petroleum", hi: "पेट्रोलियम" },
          { en: "Natural gas", hi: "प्राकृतिक गैस" },
        ],
        "Sunlight is replenished naturally and is renewable.",
        "सूर्य प्रकाश प्राकृतिक रूप से लगातार उपलब्ध होता है, इसलिए यह नवीकरणीय है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p1-set${setNumber}-evs-${qNo}`,
      "Environmental Studies",
      "पर्यावरण अध्ययन",
      "Best household practice to reduce water wastage is:",
      "घर में पानी की बर्बादी कम करने का सर्वोत्तम तरीका क्या है?",
      { en: "Turn off taps when not in use", hi: "उपयोग न होने पर नल बंद रखना" },
      [
        { en: "Keep tap open while brushing", hi: "ब्रश करते समय नल खुला रखना" },
        { en: "Wash vehicles daily with pipe", hi: "वाहन रोज पाइप से धोना" },
        { en: "Ignore leaking pipes", hi: "लीक पाइपों को नजरअंदाज करना" },
      ],
      "Closing taps and preventing leaks are simple water conservation steps.",
      "नल बंद रखना और रिसाव रोकना जल संरक्षण के सरल उपाय हैं।",
      seed
    );
  });
}

function generateCtetFullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createCtetCdpQuestions(setNumber),
      ...createCtetEnglishQuestions(setNumber),
      ...createCtetHindiQuestions(setNumber),
      ...createCtetMathQuestions(setNumber),
      ...createCtetEvsQuestions(setNumber),
    ];

    return {
      slug: `ctet-paper-1-full-mock-${setNumber}`,
      title: `CTET Paper I Full Mock Test ${setNumber}`,
      titleHi: `CTET पेपर I फुल मॉक टेस्ट ${setNumber}`,
      chapter: "Full Syllabus (CDP, Language I, Language II, Mathematics, EVS)",
      chapterHi: "पूर्ण पाठ्यक्रम (CDP, भाषा I, भाषा II, गणित, EVS)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 150,
      questionCount: 150,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

// ===== CTET PAPER II GENERATORS (Classes VI-VIII) =====

function createCtetP2CdpQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 700 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      const age = 11 + ((setNumber + qNo) % 3);
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        `An adolescent aged ${age} years is most likely to be in ${age > 12 ? "Erikson's" : "Freud's"} stage of:`,
        `${age} वर्ष का किशोर ${age > 12 ? "एरिकसन के" : "फ्रायड के"} किस अवस्था में होगा?`,
        { en: age > 12 ? "Identity vs. Role confusion" : "Competence and skill development", hi: age > 12 ? "पहचान बनाम भूमिका संभ्रम" : "योग्यता और कौशल विकास" },
        [
          { en: "Trust vs. Mistrust", hi: "विश्वास बनाम अविश्वास" },
          { en: "Autonomy vs. Shame", hi: "स्वायत्तता बनाम शर्म" },
          { en: "Initiative vs. Guilt", hi: "पहल बनाम अपराध बोध" },
        ],
        "Adolescence (12-18) involves identity formation as per Erikson.",
        "किशोरावस्था (12-18) में एरिकसन के अनुसार पहचान का निर्माण होता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Multiple intelligences theory suggests that intelligence is:",
        "बहु-बुद्धिमत्ता सिद्धांत सुझाता है कि बुद्धिमत्ता है:",
        { en: "A single, fixed capacity measured by IQ", hi: "एक एकल, निश्चित क्षमता जिसे IQ द्वारा मापा जाता है" },
        [
          { en: "Multiple, diverse, and culturally influenced", hi: "बहुविध, विविध और सांस्कृतिक रूप से प्रभावित" },
          { en: "Only determined by genetics", hi: "केवल आनुवंशिकी द्वारा निर्धारित" },
          { en: "Unchangeable after age 10", hi: "10 साल की उम्र के बाद अपरिवर्तनीय" },
        ],
        "Gardner's multiple intelligences include linguistic, logical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, and naturalistic.",
        "गार्डनर की बहु-बुद्धिमत्ता में भाषाई, तार्किक, स्थानिक, शारीरिक-गतिविधि, संगीतात्मक, अंतर्व्यक्तिगत, अंतरंग और प्राकृतिक शामिल हैं।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Metacognition refers to the ability to:",
        "मेटाकॉग्निशन किसकी क्षमता को संदर्भित करता है?",
        { en: "Think about one's own thinking and learning processes", hi: "अपनी सोच और सीखने की प्रक्रियाओं के बारे में सोचना" },
        [
          { en: "Memorize facts quickly", hi: "तथ्यों को जल्दी याद रखना" },
          { en: "Follow instructions exactly", hi: "निर्देशों का सटीकता से पालन करना" },
          { en: "Compete with peers", hi: "साथियों के साथ प्रतिस्पर्धा करना" },
        ],
        "Metacognition is 'thinking about thinking' and helps learners monitor and regulate their learning.",
        "मेटाकॉग्निशन 'सोच के बारे में सोच' है और शिक्षार्थियों को अपनी सीख की निगरानी और नियमन करने में मदद करती है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Which learning style is preferred by kinesthetic learners?",
        "कौन सी सीखने की शैली kinesthetic सीखने वाले पसंद करते हैं?",
        { en: "Hands-on activities and movement-based learning", hi: "व्यावहारिक गतिविधियां और आंदोलन-आधारित सीखना" },
        [
          { en: "Reading textbooks silently", hi: "पाठ्यपुस्तकें शांति से पढ़ना" },
          { en: "Listening to lectures", hi: "व्याख्यान सुनना" },
          { en: "Watching videos passively", hi: "वीडियो निष्क्रिय रूप से देखना" },
        ],
        "Kinesthetic learners learn best through physical movement, hands-on practice, and touch.",
        "Kinesthetic सीखने वाले शारीरिक गति, व्यावहारिक अभ्यास और स्पर्श से सर्वोत्तम रूप से सीखते हैं।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-cdp-${qNo}`,
        "Child Development and Pedagogy",
        "बच्चों का विकास और शिक्षाशास्त्र",
        "Problem-solving skills are best developed through:",
        "समस्या-समाधान कौशल सर्वोत्तम रूप से कैसे विकसित होता है?",
        { en: "Open-ended tasks and projects where learners explore and innovate", hi: "खुले-अंत वाले कार्य और परियोजनाएं जहां सीखने वाले अन्वेषण और नवाचार करते हैं" },
        [
          { en: "Memorizing step-by-step solutions", hi: "चरण-दर-चरण समाधान याद रखना" },
          { en: "Following textbook answers exactly", hi: "पाठ्यपुस्तक के उत्तरों का बिल्कुल पालन करना" },
          { en: "Passive listening to explanations", hi: "व्याख्याओं को निष्क्रिय रूप से सुनना" },
        ],
        "Learners develop problem-solving by engaging in authentic, complex tasks that require experimentation and reflection.",
        "सीखने वाले प्रयोग और चिंतन की आवश्यकता वाले प्रामाणिक, जटिल कार्यों में भाग लेकर समस्या-समाधान विकसित करते हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p2-set${setNumber}-cdp-${qNo}`,
      "Child Development and Pedagogy",
      "बच्चों का विकास और शिक्षाशास्त्र",
      "How does scaffolding support learners in peer collaboration?",
      "Scaffolding कैसे सहकर्मी सहयोग में सीखने वालों का समर्थन करता है?",
      { en: "Provides temporary support that is gradually removed as competence grows", hi: "अस्थायी समर्थन प्रदान करता है जो योग्यता बढ़ने के साथ धीरे-धीरे हटाया जाता है" },
      [
        { en: "Allows students to work entirely independently", hi: "छात्रों को पूरी तरह स्वतंत्र रूप से काम करने देता है" },
        { en: "Eliminates all peer interaction", hi: "सभी सहकर्मी संपर्क को समाप्त करता है" },
        { en: "Prevents mistakes by giving ready-made answers", hi: "तैयार-निर्मित उत्तर देकर गलतियों को रोकता है" },
      ],
      "Scaffolding is a support system that enables learners to reach higher levels of competence with guidance that fades away as they become more capable.",
      "Scaffolding एक समर्थन प्रणाली है जो सीखने वालों को मार्गदर्शन के साथ उच्च योग्यता के स्तर तक पहुंचने में सक्षम बनाती है जो वे अधिक सक्षम होने के साथ गायब हो जाते हैं।",
      seed
    );
  });
}

function createCtetP2EnglishQuestions(setNumber: number): GovPracticeQuestion[] {
  const complexTopics = [
    { topic: "Modal verbs", en: "can, must, should", hi: "can, must, should" },
    { topic: "Passive voice", en: "complex sentences", hi: "जटिल वाक्य" },
    { topic: "Conditional clauses", en: "if-then patterns", hi: "यदि-तो पैटर्न" },
  ];

  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 800 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Choose the correct modal verb: 'You _____ help others even when tired.'",
        "सही modal verb चुनें: 'You _____ help others even when tired.'",
        { en: "should", hi: "should" },
        [
          { en: "might", hi: "might" },
          { en: "could", hi: "could" },
          { en: "would", hi: "would" },
        ],
        "'Should' expresses moral obligation or strong advice.",
        "'Should' नैतिक दायित्व या मजबूत सलाह व्यक्त करता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Convert to passive voice: 'The teacher will mark the papers.'",
        "Passive voice में बदलें: 'The teacher will mark the papers.'",
        { en: "The papers will be marked by the teacher.", hi: "The papers will be marked by the teacher." },
        [
          { en: "The papers will mark by the teacher.", hi: "The papers will mark by the teacher." },
          { en: "The papers are marked by the teacher.", hi: "The papers are marked by the teacher." },
          { en: "The papers have been marked by the teacher.", hi: "The papers have been marked by the teacher." },
        ],
        "Future tense passive uses 'will be + past participle'.",
        "भविष्य काल passive में 'will be + past participle' का प्रयोग होता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Fill in the conditional: 'If she studies hard, she _____ pass the exam.'",
        "Conditional भरें: 'If she studies hard, she _____ pass the exam.'",
        { en: "will pass", hi: "will pass" },
        [
          { en: "would pass", hi: "would pass" },
          { en: "passed", hi: "passed" },
          { en: "passes", hi: "passes" },
        ],
        "Real condition (probable future) uses: If + present, + will + infinitive.",
        "Real condition (probable future) में: If + present, + will + infinitive का प्रयोग होता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Identify the literary device in: 'The stage was silent as a tomb.'",
        "साहित्यिक उपकरण की पहचान करें: 'The stage was silent as a tomb.'",
        { en: "Simile", hi: "उपमा" },
        [
          { en: "Metaphor", hi: "रूपक" },
          { en: "Personification", hi: "मानवीकरण" },
          { en: "Alliteration", hi: "अनुप्रास" },
        ],
        "Simile compares two things using 'as...as' or 'like'.",
        "Simile 'as...as' या 'like' का प्रयोग करके दो चीजों की तुलना करता है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-eng-${qNo}`,
        "Language I (English)",
        "भाषा I (अंग्रेजी)",
        "Which is the correct use of 'affect' vs 'effect'?",
        "'Affect' vs 'effect' का सही प्रयोग कौन सा है?",
        { en: "The weather affects my mood; the effect is clear.", hi: "The weather affects my mood; the effect is clear." },
        [
          { en: "The weather effects my mood; the affect is clear.", hi: "The weather effects my mood; the affect is clear." },
          { en: "The weather effect my mood; the affect is clear.", hi: "The weather effect my mood; the affect is clear." },
          { en: "The weathers affect my mood; the effects is clear.", hi: "The weathers affect my mood; the effects is clear." },
        ],
        "Affect (verb) = to influence; Effect (noun) = result.",
        "Affect (क्रिया) = प्रभाव डालना; Effect (संज्ञा) = परिणाम।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p2-set${setNumber}-eng-${qNo}`,
      "Language I (English)",
      "भाषा I (अंग्रेजी)",
      "Read the passage: 'Books are a treasure of knowledge. They transport us to new worlds.' What does 'transport' mean here?",
      "परिच्छेद पढ़ें: 'Books are a treasure of knowledge. They transport us to new worlds.' यहां 'transport' का अर्थ क्या है?",
      { en: "To carry or move mentally", hi: "मानसिक रूप से ले जाना या स्थानांतरित करना" },
      [
        { en: "To physically travel", hi: "शारीरिक रूप से यात्रा करना" },
        { en: "To transform into something else", hi: "किसी और चीज़ में बदलना" },
        { en: "To express emotional feelings", hi: "भावनात्मक भावनाओं को व्यक्त करना" },
      ],
      "In context, 'transport' means to take mentally or imaginatively to another place.",
      "संदर्भ में, 'transport' का अर्थ मानसिक रूप से या कल्पनात्मक रूप से दूसरी जगह ले जाना है।",
      seed
    );
  });
}

function createCtetP2HindiQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 900 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'पक्षी आकाश में उड़ते हैं' - इस वाक्य में 'पक्षी' क्या है?",
        "'पक्षी आकाश में उड़ते हैं' - इस वाक्य में 'पक्षी' क्या है?",
        { en: "कर्ता", hi: "कर्ता" },
        [
          { en: "कर्म", hi: "कर्म" },
          { en: "करण", hi: "करण" },
          { en: "अधिकरण", hi: "अधिकरण" },
        ],
        "जो शब्द वाक्य में क्रिया करता है, वह कर्ता कहलाता है।",
        "जो शब्द वाक्य में क्रिया करता है, वह कर्ता कहलाता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'साहित्य' का पर्यायवाची कौन सा है?",
        "'साहित्य' का पर्यायवाची कौन सा है?",
        { en: "वाङ्मय", hi: "वाङ्मय" },
        [
          { en: "विज्ञान", hi: "विज्ञान" },
          { en: "कला", hi: "कला" },
          { en: "भाषा", hi: "भाषा" },
        ],
        "'वाङ्मय' और 'साहित्य' समानार्थी शब्द हैं।",
        "'वाङ्मय' और 'साहित्य' समानार्थी शब्द हैं।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'प्रकाश' का विलोम क्या है?",
        "'प्रकाश' का विलोम क्या है?",
        { en: "अंधकार", hi: "अंधकार" },
        [
          { en: "सूर्य", hi: "सूर्य" },
          { en: "चाँद", hi: "चाँद" },
          { en: "तारा", hi: "तारा" },
        ],
        "'अंधकार' 'प्रकाश' का विपरीत अर्थ देता है।",
        "'अंधकार' 'प्रकाश' का विपरीत अर्थ देता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "'राष्ट्रगान' शब्द किन दो शब्दों से मिलकर बना है?",
        "'राष्ट्रगान' शब्द किन दो शब्दों से मिलकर बना है?",
        { en: "राष्ट्र + गान", hi: "राष्ट्र + गान" },
        [
          { en: "रा + ष्ट्रगान", hi: "रा + ष्ट्रगान" },
          { en: "राष्ट् + रगान", hi: "राष्ट् + रगान" },
          { en: "राष्ट्र + ग + आन", hi: "राष्ट्र + ग + आन" },
        ],
        "समास विच्छेद में राष्ट्र + गान = राष्ट्रगान।",
        "समास विच्छेद में राष्ट्र + गान = राष्ट्रगान।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-hin-${qNo}`,
        "Language II (Hindi)",
        "भाषा II (हिंदी)",
        "निम्नलिखित में मुहावरा कौन सा है?",
        "निम्नलिखित में मुहावरा कौन सा है?",
        { en: "दिल तोड़ना", hi: "दिल तोड़ना" },
        [
          { en: "हृदय टूटना", hi: "हृदय टूटना" },
          { en: "चिंतित होना", hi: "चिंतित होना" },
          { en: "दु:खी होना", hi: "दु:खी होना" },
        ],
        "'दिल तोड़ना' एक मुहावरा है जिसका अर्थ किसी को कष्ट पहुंचाना है।",
        "'दिल तोड़ना' एक मुहावरा है जिसका अर्थ किसी को कष्ट पहुंचाना है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p2-set${setNumber}-hin-${qNo}`,
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'माता का प्रेम अतुलनीय है' - यह वाक्य किस काल में है?",
      "'माता का प्रेम अतुलनीय है' - यह वाक्य किस काल में है?",
      { en: "वर्तमान काल", hi: "वर्तमान काल" },
      [
        { en: "भूत काल", hi: "भूत काल" },
        { en: "भविष्य काल", hi: "भविष्य काल" },
        { en: "सामान्य भविष्य काल", hi: "सामान्य भविष्य काल" },
      ],
      "'है' क्रिया वर्तमान काल को दर्शाती है।",
      "'है' क्रिया वर्तमान काल को दर्शाती है।",
      seed
    );
  });
}

function createCtetP2ScienceQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1000 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-sci-${qNo}`,
        "Science",
        "विज्ञान",
        "Light travels in straight lines. This property is called:",
        "प्रकाश सीधी रेखा में चलता है। इस गुण को कहते हैं:",
        { en: "Rectilinear propagation", hi: "सरल रेखीय प्रसार" },
        [
          { en: "Refraction", hi: "अपवर्तन" },
          { en: "Diffraction", hi: "विवर्तन" },
          { en: "Reflection", hi: "परावर्तन" },
        ],
        "Light travels in straight paths called rays; this is rectilinear propagation.",
        "प्रकाश सीधी पथों में यात्रा करता है जिन्हें किरणें कहते हैं; यह सरल रेखीय प्रसार है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-sci-${qNo}`,
        "Science",
        "विज्ञान",
        "Electric current is the flow of:",
        "विद्युत करंट किसका प्रवाह है?",
        { en: "Electrons", hi: "इलेक्ट्रॉन" },
        [
          { en: "Protons", hi: "प्रोटॉन" },
          { en: "Neutrons", hi: "न्यूट्रॉन" },
          { en: "Atoms", hi: "परमाणु" },
        ],
        "Electric current is the movement of electrons through a conductor.",
        "विद्युत करंट एक चालक के माध्यम से इलेक्ट्रॉनों की गति है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-sci-${qNo}`,
        "Science",
        "विज्ञान",
        "Which organelle is called the powerhouse of the cell?",
        "कौन सी कोशिका अंगिका को कोशिका का शक्तिघर कहा जाता है?",
        { en: "Mitochondria", hi: "माइटोकॉन्ड्रिया" },
        [
          { en: "Ribosome", hi: "राइबोसोम" },
          { en: "Nucleus", hi: "केंद्रक" },
          { en: "Vacuole", hi: "रिक्तिका" },
        ],
        "Mitochondria produces ATP (energy) and is called the powerhouse of the cell.",
        "माइटोकॉन्ड्रिया ATP (ऊर्जा) का उत्पादन करता है और कोशिका का शक्तिघर कहा जाता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-sci-${qNo}`,
        "Science",
        "विज्ञान",
        "The process of water changing from liquid to gas is called:",
        "पानी के तरल से गैस में बदलने की प्रक्रिया को कहते हैं:",
        { en: "Evaporation", hi: "वाष्पीकरण" },
        [
          { en: "Condensation", hi: "संघनन" },
          { en: "Sublimation", hi: "उर्ध्वपातन" },
          { en: "Fusion", hi: "गलन" },
        ],
        "Evaporation is the conversion of liquid water to water vapor at the surface.",
        "वाष्पीकरण सतह पर तरल पानी को जल वाष्प में बदलना है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-sci-${qNo}`,
        "Science",
        "विज्ञान",
        "Which is an example of a non-renewable resource?",
        "निम्नलिखित में से कौन सा गैर-नवीकरणीय संसाधन का उदाहरण है?",
        { en: "Fossil fuels (Coal, Oil, Gas)", hi: "जीवाश्म ईंधन (कोयला, तेल, गैस)" },
        [
          { en: "Solar energy", hi: "सौर ऊर्जा" },
          { en: "Wind power", hi: "पवन शक्ति" },
          { en: "Hydroelectric power", hi: "जलविद्युत शक्ति" },
        ],
        "Fossil fuels take millions of years to form and are non-renewable.",
        "जीवाश्म ईंधन बनने में लाखों साल लगते हैं और गैर-नवीकरणीय हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p2-set${setNumber}-sci-${qNo}`,
      "Science",
      "विज्ञान",
      "What is the SI unit of pressure?",
      "दबाव की SI इकाई क्या है?",
      { en: "Pascal", hi: "पास्कल" },
      [
        { en: "Newton", hi: "न्यूटन" },
        { en: "Joule", hi: "जूल" },
        { en: "Watt", hi: "वाट" },
      ],
      "Pressure = Force/Area, and the SI unit is Pascal (Pa).",
      "दबाव = बल/क्षेत्र, और SI इकाई पास्कल (Pa) है।",
      seed
    );
  });
}

function createCtetP2SocialStudiesQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 30 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1100 + qNo;
    const pattern = index % 6;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-ss-${qNo}`,
        "Social Studies",
        "सामाजिक अध्ययन",
        "The equator divides the Earth into:",
        "भूमध्य रेखा पृथ्वी को किन भागों में विभाजित करती है?",
        { en: "Northern and Southern hemispheres", hi: "उत्तरी और दक्षिणी गोलार्ध" },
        [
          { en: "Eastern and Western hemispheres", hi: "पूर्वी और पश्चिमी गोलार्ध" },
          { en: "Tropics", hi: "उष्णकटिबंधीय क्षेत्र" },
          { en: "Continents", hi: "महाद्वीप" },
        ],
        "The equator is an imaginary line that divides Earth into Northern and Southern hemispheres.",
        "भूमध्य रेखा एक काल्पनिक रेखा है जो पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-ss-${qNo}`,
        "Social Studies",
        "सामाजिक अध्ययन",
        "The Constitution of India was adopted on:",
        "भारत का संविधान कब अपनाया गया?",
        { en: "26 January 1950", hi: "26 जनवरी 1950" },
        [
          { en: "15 August 1947", hi: "15 अगस्त 1947" },
          { en: "2 October 1869", hi: "2 अक्टूबर 1869" },
          { en: "1 January 1950", hi: "1 जनवरी 1950" },
        ],
        "The Constitution came into effect on 26 January 1950, marking India as a republic.",
        "संविधान 26 जनवरी 1950 को प्रभावी हुआ, जिससे भारत गणराज्य बना।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-ss-${qNo}`,
        "Social Studies",
        "सामाजिक अध्ययन",
        "The Prime Minister of India heads which branch of government?",
        "भारत का प्रधानमंत्री सरकार की कौन सी शाखा का नेतृत्व करता है?",
        { en: "Executive", hi: "कार्यपालिका" },
        [
          { en: "Legislative", hi: "विधायिका" },
          { en: "Judicial", hi: "न्यायपालिका" },
          { en: "Military", hi: "सैन्य" },
        ],
        "The PM heads the executive branch responsible for implementing laws.",
        "पीएम कार्यपालिका शाखा का नेतृत्व करता है जो कानूनों को लागू करने के लिए जिम्मेदार है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-ss-${qNo}`,
        "Social Studies",
        "सामाजिक अध्ययन",
        "Which non-metal is found in liquid state at room temperature?",
        "कौन सी अधातु कमरे के तापमान पर तरल अवस्था में पाई जाती है?",
        { en: "Bromine", hi: "ब्रोमीन" },
        [
          { en: "Sulfur", hi: "गंधक" },
          { en: "Phosphorus", hi: "फॉस्फोरस" },
          { en: "Iodine", hi: "आयोडीन" },
        ],
        "Bromine is the only non-metal that is liquid at room temperature (25°C).",
        "ब्रोमीन एकमात्र अधातु है जो कमरे के तापमान (25°C) पर तरल होती है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ctet-p2-set${setNumber}-ss-${qNo}`,
        "Social Studies",
        "सामाजिक अध्ययन",
        "The Mauryan Empire was founded by:",
        "मौर्य साम्राज्य की स्थापना किसने की?",
        { en: "Chandragupta Maurya", hi: "चंद्रगुप्त मौर्य" },
        [
          { en: "Ashoka", hi: "अशोक" },
          { en: "Bindusara", hi: "बिंदुसार" },
          { en: "Samprati", hi: "संप्रति" },
        ],
        "Chandragupta Maurya founded the Mauryan Empire around 322 BCE.",
        "चंद्रगुप्त मौर्य ने 322 ईसा पूर्व के आसपास मौर्य साम्राज्य की स्थापना की।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ctet-p2-set${setNumber}-ss-${qNo}`,
      "Social Studies",
      "सामाजिक अध्ययन",
      "Democracy means 'government of, by and for the _____':",
      "लोकतंत्र का अर्थ है '_____ की, _____ द्वारा और _____ के लिए सरकार':",
      { en: "people", hi: "लोग" },
      [
        { en: "army", hi: "सेना" },
        { en: "rich", hi: "अमीर" },
        { en: "king", hi: "राजा" },
      ],
      "Democracy is a government where power lies with the people.",
      "लोकतंत्र एक ऐसी सरकार है जहां शक्ति लोगों के पास है।",
      seed
    );
  });
}

function generateCtetP2FullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createCtetP2CdpQuestions(setNumber),
      ...createCtetP2EnglishQuestions(setNumber),
      ...createCtetP2HindiQuestions(setNumber),
      ...createCtetP2ScienceQuestions(setNumber),
      ...createCtetP2SocialStudiesQuestions(setNumber),
    ];

    return {
      slug: `ctet-paper-2-full-mock-${setNumber}`,
      title: `CTET Paper II Full Mock Test ${setNumber}`,
      titleHi: `CTET पेपर II फुल मॉक टेस्ट ${setNumber}`,
      chapter: "Full Syllabus (CDP, Language I, Language II, Science, Social Studies)",
      chapterHi: "पूर्ण पाठ्यक्रम (CDP, भाषा I, भाषा II, विज्ञान, सामाजिक अध्ययन)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 150,
      questionCount: 150,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

function createSscReasoningQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1200 + qNo;
    const pattern = index % 7;

    if (pattern === 0) {
      const start = 4 + setNumber + qNo;
      const answer = start + 15;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        `Find the next number in series: ${start}, ${start + 3}, ${start + 6}, ${start + 9}, ?`,
        `श्रृंखला में अगली संख्या ज्ञात करें: ${start}, ${start + 3}, ${start + 6}, ${start + 9}, ?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 3}`, hi: `${answer - 3}` },
          { en: `${answer + 3}`, hi: `${answer + 3}` },
          { en: `${answer + 6}`, hi: `${answer + 6}` },
        ],
        "The pattern increases by 3 each step.",
        "प्रत्येक चरण में 3 की वृद्धि हो रही है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Book : Read :: Food : ?",
        "Book : Read :: Food : ?",
        { en: "Eat", hi: "खाना" },
        [
          { en: "Write", hi: "लिखना" },
          { en: "Cook", hi: "पकाना" },
          { en: "Buy", hi: "खरीदना" },
        ],
        "A book is read; food is eaten.",
        "पुस्तक पढ़ी जाती है; भोजन खाया जाता है।",
        seed
      );
    }

    if (pattern === 2) {
      const ageA = 18 + ((setNumber + qNo) % 5);
      const ageB = ageA + 4;
      const answer = ageB - ageA;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        `Riya is ${ageA} years old and Neha is ${ageB} years old. What is the age difference?`,
        `रिया ${ageA} वर्ष की है और नेहा ${ageB} वर्ष की है। आयु का अंतर कितना है?`,
        { en: `${answer} years`, hi: `${answer} वर्ष` },
        [
          { en: `${answer + 1} years`, hi: `${answer + 1} वर्ष` },
          { en: `${answer + 2} years`, hi: `${answer + 2} वर्ष` },
          { en: `${answer - 1} years`, hi: `${answer - 1} वर्ष` },
        ],
        "Subtract the smaller age from the larger age.",
        "बड़ी आयु में से छोटी आयु घटाएं।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Choose the odd one out.",
        "विषम पद चुनें।",
        { en: "Car", hi: "कार" },
        [
          { en: "Triangle", hi: "त्रिभुज" },
          { en: "Square", hi: "वर्ग" },
          { en: "Circle", hi: "वृत्त" },
        ],
        "Triangle, square, and circle are geometric shapes, while car is a vehicle.",
        "त्रिभुज, वर्ग और वृत्त ज्यामितीय आकृतियां हैं, जबकि कार एक वाहन है।",
        seed
      );
    }

    if (pattern === 4) {
      const relations = [
        { q: "A is mother of B, B is mother of C. What is A to C?", qHi: "A, B की माता है, B, C की माता है। A, C से क्या है?", ans: "Grandmother", ansHi: "दादी", wrong: ["Mother", "Sister", "Aunt"] as [string, string, string], wrongHi: ["माता", "बहन", "आंटी"] as [string, string, string] },
        { q: "M is brother of N, N is brother of O. If P is sister of O, what is M to P?", qHi: "M, N का भाई है, N, O का भाई है। यदि P, O की बहन है, तो M, P से क्या है?", ans: "Brother", ansHi: "भाई", wrong: ["Sister", "Cousin", "Uncle"] as [string, string, string], wrongHi: ["बहन", "चचेरा भाई", "चाचा"] as [string, string, string] },
        { q: "X is wife of Y, Y is father of Z. What is X to Z?", qHi: "X, Y की पत्नी है, Y, Z का पिता है। X, Z से क्या है?", ans: "Mother", ansHi: "माता", wrong: ["Grandmother", "Sister", "Wife"] as [string, string, string], wrongHi: ["दादी", "बहन", "पत्नी"] as [string, string, string] },
      ];
      const rel = relations[qNo % relations.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        rel.q,
        rel.qHi,
        { en: rel.ans, hi: rel.ansHi },
        [
          { en: rel.wrong[0], hi: rel.wrongHi[0] },
          { en: rel.wrong[1], hi: rel.wrongHi[1] },
          { en: rel.wrong[2], hi: rel.wrongHi[2] },
        ],
        "Trace family relationships step by step.",
        "परिवार के रिश्ते को चरण दर चरण समझें।",
        seed
      );
    }

    if (pattern === 5) {
      const directions = [
        { q: "P goes 5 km North, then 3 km East. How far is P from starting point?", qHi: "P 5 किमी उत्तर में जाता है, फिर 3 किमी पूर्व में। P शुरुआत से कितना दूर है?", ans: "√34 km", ansHi: "√34 किमी", wrong: ["8 km", "√40 km", "2 km"] as [string, string, string], wrongHi: ["8 किमी", "√40 किमी", "2 किमी"] as [string, string, string] },
      ];
      const dir = directions[qNo % directions.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        dir.q,
        dir.qHi,
        { en: dir.ans, hi: dir.ansHi },
        [
          { en: dir.wrong[0], hi: dir.wrongHi[0] },
          { en: dir.wrong[1], hi: dir.wrongHi[1] },
          { en: dir.wrong[2], hi: dir.wrongHi[2] },
        ],
        "Use Pythagoras theorem for net displacement.",
        "शुद्ध विस्थापन के लिए पाइथागोरस प्रमेय का प्रयोग करें।",
        seed
      );
    }

    if (pattern === 6) {
      const logics = [
        { q: "All cats are animals. Some animals are wild. Therefore:", qHi: "सभी बिल्लियां जानवर हैं। कुछ जानवर जंगली हैं। इसलिए:", ans: "Some cats may be wild", ansHi: "कुछ बिल्लियां जंगली हो सकती हैं", wrong: ["All cats are wild", "No cat is wild", "Cannot be determined"] as [string, string, string], wrongHi: ["सभी बिल्लियां जंगली हैं", "कोई बिल्ली जंगली नहीं है", "निर्धारित नहीं किया जा सकता"] as [string, string, string] },
      ];
      const logic = logics[qNo % logics.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        logic.q,
        logic.qHi,
        { en: logic.ans, hi: logic.ansHi },
        [
          { en: logic.wrong[0], hi: logic.wrongHi[0] },
          { en: logic.wrong[1], hi: logic.wrongHi[1] },
          { en: logic.wrong[2], hi: logic.wrongHi[2] },
        ],
        "Apply logical rules for valid conclusions.",
        "मान्य निष्कर्षों के लिए तार्किक नियम लागू करें।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier1-set${setNumber}-reason-${qNo}`,
      "Reasoning",
      "तर्क",
      "If all roses are flowers and some flowers are red, then:",
      "यदि सभी गुलाब फूल हैं और कुछ फूल लाल हैं, तो:",
      { en: "Some roses may be red", hi: "कुछ गुलाब लाल हो सकते हैं" },
      [
        { en: "All roses are red", hi: "सभी गुलाब लाल हैं" },
        { en: "No rose is red", hi: "कोई गुलाब लाल नहीं है" },
        { en: "All red things are roses", hi: "सभी लाल वस्तुएं गुलाब हैं" },
      ],
      "Only a possibility can be concluded, not a definite all-or-none statement.",
      "यहां केवल संभावना निकाली जा सकती है, निश्चित निष्कर्ष नहीं।",
      seed
    );
  });
}

function createSscQuantQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1300 + qNo;
    const pattern = index % 7;

    if (pattern === 0) {
      const base = 120 + setNumber * 10 + qNo;
      const percent = 20;
      const answer = (base * percent) / 100;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `What is ${percent}% of ${base}?`,
        `${base} का ${percent}% कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 2}`, hi: `${answer - 2}` },
          { en: `${answer + 2}`, hi: `${answer + 2}` },
          { en: `${answer + 4}`, hi: `${answer + 4}` },
        ],
        "Percentage value = (percent/100) x number.",
        "प्रतिशत मान = (प्रतिशत/100) x संख्या।",
        seed
      );
    }

    if (pattern === 1) {
      const a = 30 + setNumber + qNo;
      const b = 15 + (qNo % 8);
      const answer = a - b;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Find: ${a} - ${b}`,
        `ज्ञात करें: ${a} - ${b}`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 1}`, hi: `${answer - 1}` },
          { en: `${answer + 1}`, hi: `${answer + 1}` },
          { en: `${answer + 3}`, hi: `${answer + 3}` },
        ],
        "Subtract directly.",
        "सीधा घटाव करें।",
        seed
      );
    }

    if (pattern === 2) {
      const speed = 40 + (qNo % 10);
      const time = 2 + (setNumber % 3);
      const answer = speed * time;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `A train moves at ${speed} km/h for ${time} hours. Distance covered is:`,
        `एक ट्रेन ${speed} किमी/घंटा की गति से ${time} घंटे चलती है। तय दूरी होगी:`,
        { en: `${answer} km`, hi: `${answer} किमी` },
        [
          { en: `${answer - speed} km`, hi: `${answer - speed} किमी` },
          { en: `${answer + speed} km`, hi: `${answer + speed} किमी` },
          { en: `${answer + 10} km`, hi: `${answer + 10} किमी` },
        ],
        "Distance = Speed x Time.",
        "दूरी = गति x समय।",
        seed
      );
    }

    if (pattern === 3) {
      const numerator = 3 + (qNo % 3);
      const denominator = 5;
      const value = 50 + setNumber * 10;
      const answer = (numerator * value) / denominator;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `What is ${numerator}/${denominator} of ${value}?`,
        `${value} का ${numerator}/${denominator} कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer - 5}`, hi: `${answer - 5}` },
          { en: `${answer + 5}`, hi: `${answer + 5}` },
          { en: `${answer + 10}`, hi: `${answer + 10}` },
        ],
        "Fraction of a number = (numerator/denominator) x number.",
        "किसी संख्या का भिन्न = (अंश/हर) x संख्या।",
        seed
      );
    }

    if (pattern === 4) {
      const cp = 100 + setNumber * 10 + qNo;
      const sp = cp + 20;
      const profit = sp - cp;
      const profitPercent = (profit / cp) * 100;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `An article is bought for Rs. ${cp} and sold for Rs. ${sp}. Profit percent is:`,
        `एक वस्तु Rs. ${cp} में खरीदी जाती है और Rs. ${sp} में बेची जाती है। लाभ प्रतिशत है:`,
        { en: `${profitPercent.toFixed(1)}%`, hi: `${profitPercent.toFixed(1)}%` },
        [
          { en: `${(profitPercent - 5).toFixed(1)}%`, hi: `${(profitPercent - 5).toFixed(1)}%` },
          { en: `${(profitPercent + 5).toFixed(1)}%`, hi: `${(profitPercent + 5).toFixed(1)}%` },
          { en: `${(profitPercent + 10).toFixed(1)}%`, hi: `${(profitPercent + 10).toFixed(1)}%` },
        ],
        `Profit % = [(SP - CP) / CP] × 100.`,
        `लाभ % = [(विक्रय - लागत) / लागत] × 100।`,
        seed
      );
    }

    if (pattern === 5) {
      const principal = 1000 + setNumber * 100 + qNo * 10;
      const rate = 8;
      const time = 2;
      const si = (principal * rate * time) / 100;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Simple Interest on Rs. ${principal} at ${rate}% per annum for ${time} years:`,
        `Rs. ${principal} पर ${rate}% प्रति वर्ष ${time} वर्षों के लिए साधारण ब्याज:`,
        { en: `Rs. ${si}`, hi: `Rs. ${si}` },
        [
          { en: `Rs. ${si - 100}`, hi: `Rs. ${si - 100}` },
          { en: `Rs. ${si + 100}`, hi: `Rs. ${si + 100}` },
          { en: `Rs. ${si + 200}`, hi: `Rs. ${si + 200}` },
        ],
        `SI = (P × R × T) / 100.`,
        `SI = (मूलधन × दर × समय) / 100।`,
        seed
      );
    }

    if (pattern === 6) {
      const total = 150 + qNo * 5;
      const boys = 90 + qNo;
      const girls = total - boys;
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `In a school, total students are ${total}. Boys are ${boys}. Girls are:`,
        `एक स्कूल में कुल छात्र ${total} हैं। लड़के ${boys} हैं। लड़कियां हैं:`,
        { en: `${girls}`, hi: `${girls}` },
        [
          { en: `${girls - 1}`, hi: `${girls - 1}` },
          { en: `${girls + 1}`, hi: `${girls + 1}` },
          { en: `${girls + 5}`, hi: `${girls + 5}` },
        ],
        "Girls = Total - Boys.",
        "लड़कियां = कुल - लड़के।",
        seed
      );
    }

    const n = 9 + (qNo % 8);
    const answer = n * n;
    return createSeededGovQuestion(
      `ssc-tier1-set${setNumber}-quant-${qNo}`,
      "Quantitative Aptitude",
      "मात्रात्मक योग्यता",
      `What is the square of ${n}?`,
      `${n} का वर्ग कितना है?`,
      { en: `${answer}`, hi: `${answer}` },
      [
        { en: `${answer - n}`, hi: `${answer - n}` },
        { en: `${answer + n}`, hi: `${answer + n}` },
        { en: `${answer + 1}`, hi: `${answer + 1}` },
      ],
      `Square means ${n} x ${n} = ${answer}.`,
      `वर्ग का अर्थ ${n} x ${n} = ${answer} है।`,
      seed
    );
  });
}

function createSscEnglishQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1400 + qNo;
    const pattern = index % 7;

    if (pattern === 0) {
      const synonyms = [
        { word: "rapid", ans: "fast", wrong: ["slow", "late", "soft"] as [string, string, string], hi: "तेज" },
        { word: "ancient", ans: "old", wrong: ["new", "fresh", "future"] as [string, string, string], hi: "पुराना" },
        { word: "brave", ans: "courageous", wrong: ["weak", "afraid", "silent"] as [string, string, string], hi: "साहसी" },
        { word: "benevolent", ans: "kind", wrong: ["cruel", "angry", "proud"] as [string, string, string], hi: "दयालु" },
        { word: "resilient", ans: "strong", wrong: ["weak", "fragile", "delicate"] as [string, string, string], hi: "मजबूत" },
      ];
      const syn = synonyms[qNo % synonyms.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        `Find the synonym of '${syn.word}':`,
        `'${syn.word}' का पर्यायवाची चुनें:`,
        { en: syn.ans, hi: syn.hi },
        [
          { en: syn.wrong[0], hi: syn.wrong[0] },
          { en: syn.wrong[1], hi: syn.wrong[1] },
          { en: syn.wrong[2], hi: syn.wrong[2] },
        ],
        `The closest meaning of '${syn.word}' is '${syn.ans}'.`,
        `'${syn.word}' का निकटतम अर्थ '${syn.ans}' है।`,
        seed
      );
    }

    if (pattern === 1) {
      const synonyms2 = [
        { word: "diligent", ans: "hardworking", wrong: ["lazy", "smart", "careful"] as [string, string, string], hi: "मेहनती" },
        { word: "obsolete", ans: "outdated", wrong: ["modern", "useful", "expensive"] as [string, string, string], hi: "पुरातन" },
        { word: "enigma", ans: "mystery", wrong: ["problem", "secret", "puzzle"] as [string, string, string], hi: "रहस्य" },
      ];
      const item = synonyms2[qNo % synonyms2.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        `Choose the synonym of '${item.word}'.`,
        `'${item.word}' का समानार्थी चुनें।`,
        { en: item.ans, hi: item.hi },
        [
          { en: item.wrong[0], hi: item.wrong[0] },
          { en: item.wrong[1], hi: item.wrong[1] },
          { en: item.wrong[2], hi: item.wrong[2] },
        ],
        `The closest meaning of '${item.word}' is '${item.ans}'.`,
        `'${item.word}' का निकटतम अर्थ '${item.ans}' है।`,
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the antonym of 'increase'.",
        "'increase' का विलोम चुनें।",
        { en: "decrease", hi: "घटना" },
        [
          { en: "raise", hi: "बढ़ाना" },
          { en: "expand", hi: "फैलाना" },
          { en: "improve", hi: "सुधारना" },
        ],
        "'Decrease' is opposite in meaning to 'increase'.",
        "'decrease', 'increase' का विपरीत अर्थ देता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Fill in the blank: 'He has lived here ___ 2019.'",
        "रिक्त स्थान भरें: 'He has lived here ___ 2019.'",
        { en: "since", hi: "since" },
        [
          { en: "for", hi: "for" },
          { en: "from", hi: "from" },
          { en: "by", hi: "by" },
        ],
        "'Since' is used with a point of time.",
        "'Since' का प्रयोग समय बिंदु के साथ होता है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the correct form: He _____ to the gym every day.",
        "सही रूप चुनें: He _____ to the gym every day.",
        { en: "goes", hi: "जाता है" },
        [
          { en: "go", hi: "जाना" },
          { en: "gone", hi: "गया है" },
          { en: "going", hi: "जा रहा है" },
        ],
        "Third person singular present uses 'goes' (not 'go').",
        "तीसरे व्यक्ति की एकवचन में 'goes' का प्रयोग होता है।",
        seed
      );
    }

    if (pattern === 5) {
      const prepositions = [
        { q: "The book is _____ the table.", qHi: "किताब मेज _____ है।", ans: "on", ansHi: "पर", wrong: ["in", "at", "by"] as [string, string, string], wrongHi: ["में", "पर", "द्वारा"] as [string, string, string] },
        { q: "She is interested _____ music.", qHi: "वह संगीत _____ रुचि रखती है।", ans: "in", ansHi: "में", wrong: ["on", "at", "by"] as [string, string, string], wrongHi: ["पर", "पर", "द्वारा"] as [string, string, string] },
      ];
      const prep = prepositions[qNo % prepositions.length];
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        prep.q,
        prep.qHi,
        { en: prep.ans, hi: prep.ansHi },
        [
          { en: prep.wrong[0], hi: prep.wrongHi[0] },
          { en: prep.wrong[1], hi: prep.wrongHi[1] },
          { en: prep.wrong[2], hi: prep.wrongHi[2] },
        ],
        "Learn common preposition usage patterns.",
        "सामान्य पूर्वसर्ग उपयोग पैटर्न सीखें।",
        seed
      );
    }

    if (pattern === 6) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the correctly punctuated sentence.",
        "सही विराम चिह्न वाला वाक्य चुनें।",
        { en: "Let's eat, children.", hi: "Let's eat, children." },
        [
          { en: "Lets eat children.", hi: "Lets eat children." },
          { en: "Lets eat, children.", hi: "Lets eat, children." },
          { en: "Let's eat children.", hi: "Let's eat children." },
        ],
        "Apostrophe in let's and comma before children make it correct.",
        "Let's में apostrophe और children से पहले comma इसे सही बनाते हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier1-set${setNumber}-eng-${qNo}`,
      "English",
      "अंग्रेजी",
      "Choose the antonym of 'bright':",
      "'bright' का विलोम शब्द चुनें:",
      { en: "dim", hi: "मद्धिम" },
      [
        { en: "light", hi: "प्रकाश" },
        { en: "shiny", hi: "चमकदार" },
        { en: "clear", hi: "स्पष्ट" },
      ],
      "Antonym means opposite meaning.",
      "विलोम का अर्थ है विपरीत अर्थ।",
      seed
    );
  });
}

function createSscGaQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1500 + qNo;
    const pattern = index % 7;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which is the capital of India?",
        "भारत की राजधानी कौन सी है?",
        { en: "New Delhi", hi: "नई दिल्ली" },
        [
          { en: "Mumbai", hi: "मुंबई" },
          { en: "Kolkata", hi: "कोलकाता" },
          { en: "Chennai", hi: "चेन्नई" },
        ],
        "New Delhi is the capital city of India.",
        "नई दिल्ली भारत की राजधानी है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Indian Constitution came into effect on:",
        "भारतीय संविधान लागू हुआ:",
        { en: "26 January 1950", hi: "26 जनवरी 1950" },
        [
          { en: "15 August 1947", hi: "15 अगस्त 1947" },
          { en: "2 October 1947", hi: "2 अक्टूबर 1947" },
          { en: "26 November 1949", hi: "26 नवंबर 1949" },
        ],
        "Constitution came into force on Republic Day, 26 January 1950.",
        "संविधान गणतंत्र दिवस 26 जनवरी 1950 को लागू हुआ।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Largest planet in the solar system is:",
        "सौर मंडल का सबसे बड़ा ग्रह है:",
        { en: "Jupiter", hi: "बृहस्पति" },
        [
          { en: "Mars", hi: "मंगल" },
          { en: "Earth", hi: "पृथ्वी" },
          { en: "Venus", hi: "शुक्र" },
        ],
        "Jupiter is the largest planet in our solar system.",
        "बृहस्पति हमारे सौर मंडल का सबसे बड़ा ग्रह है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which Indian river is known as the 'Sorrow of Bihar' in geography questions?",
        "किस भारतीय नदी को भूगोल में 'बिहार का शोक' कहा जाता है?",
        { en: "Kosi", hi: "कोसी" },
        [
          { en: "Yamuna", hi: "यमुना" },
          { en: "Godavari", hi: "गोदावरी" },
          { en: "Narmada", hi: "नर्मदा" },
        ],
        "Kosi is often called the Sorrow of Bihar due to frequent flooding.",
        "कोसी नदी को बार-बार बाढ़ के कारण बिहार का शोक कहा जाता है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which article of the Indian Constitution defines Fundamental Rights?",
        "भारतीय संविधान का कौन सा अनुच्छेद मौलिक अधिकारों को परिभाषित करता है?",
        { en: "Article 12-35", hi: "अनुच्छेद 12-35" },
        [
          { en: "Article 1-11", hi: "अनुच्छेद 1-11" },
          { en: "Article 36-51", hi: "अनुच्छेद 36-51" },
          { en: "Article 52-61", hi: "अनुच्छेद 52-61" },
        ],
        "Articles 12-35 of the Constitution cover Fundamental Rights.",
        "संविधान के अनुच्छेद 12-35 मौलिक अधिकारों को कवर करते हैं।",
        seed
      );
    }

    if (pattern === 5) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Who is known as the 'Father of the Nation' in India?",
        "भारत में 'राष्ट्र के पिता' के रूप में जाने जाते हैं:",
        { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
        [
          { en: "Jawaharlal Nehru", hi: "जवाहरलाल नेहरू" },
          { en: "Sardar Patel", hi: "सरदार पटेल" },
          { en: "Dr. B.R. Ambedkar", hi: "डॉ. बी.आर. अंबेडकर" },
        ],
        "Mahatma Gandhi is called the Father of the Nation for his role in independence.",
        "महात्मा गांधी को स्वतंत्रता में उनकी भूमिका के लिए राष्ट्र के पिता कहा जाता है।",
        seed
      );
    }

    if (pattern === 6) {
      return createSeededGovQuestion(
        `ssc-tier1-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "What is the currency of Japan?",
        "जापान की मुद्रा क्या है?",
        { en: "Yen", hi: "येन" },
        [
          { en: "Won", hi: "वॉन" },
          { en: "Peso", hi: "पेसो" },
          { en: "Baht", hi: "बाहत" },
        ],
        "Japan's currency is the Japanese Yen (¥).",
        "जापान की मुद्रा जापानी येन (¥) है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier1-set${setNumber}-ga-${qNo}`,
      "General Awareness",
      "सामान्य ज्ञान",
      "Who wrote the national song 'Vande Mataram'?",
      "राष्ट्रीय गीत 'वंदे मातरम्' किसने लिखा?",
      { en: "Bankim Chandra Chattopadhyay", hi: "बंकिम चंद्र चट्टोपाध्याय" },
      [
        { en: "Rabindranath Tagore", hi: "रवींद्रनाथ टैगोर" },
        { en: "Subramania Bharati", hi: "सुब्रमण्यम भारती" },
        { en: "Sarojini Naidu", hi: "सरोजिनी नायडू" },
      ],
      "Vande Mataram was written by Bankim Chandra Chattopadhyay.",
      "वंदे मातरम् बंकिम चंद्र चट्टोपाध्याय ने लिखा था।",
      seed
    );
  });
}

function generateSscFullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createSscReasoningQuestions(setNumber),
      ...createSscQuantQuestions(setNumber),
      ...createSscEnglishQuestions(setNumber),
      ...createSscGaQuestions(setNumber),
    ];

    return {
      slug: `ssc-tier-1-full-mock-${setNumber}`,
      title: `SSC Tier I Full Mock Test ${setNumber}`,
      titleHi: `SSC टियर I फुल मॉक टेस्ट ${setNumber}`,
      chapter: "Full Syllabus (Reasoning, Quantitative Aptitude, English, General Awareness)",
      chapterHi: "पूर्ण पाठ्यक्रम (तर्क, मात्रात्मक योग्यता, अंग्रेजी, सामान्य ज्ञान)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 60,
      questionCount: 100,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

function createSscChslReasoningQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 25 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1600 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      const base = 5 + setNumber + qNo;
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        `Find the missing term: ${base}, ${base + 2}, ${base + 6}, ${base + 12}, ?`,
        `लुप्त पद ज्ञात करें: ${base}, ${base + 2}, ${base + 6}, ${base + 12}, ?`,
        { en: `${base + 20}`, hi: `${base + 20}` },
        [
          { en: `${base + 18}`, hi: `${base + 18}` },
          { en: `${base + 22}`, hi: `${base + 22}` },
          { en: `${base + 24}`, hi: `${base + 24}` },
        ],
        "Differences are +2, +4, +6, so next is +8.",
        "अंतर +2, +4, +6 है, इसलिए अगला +8 होगा।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Clock : Time :: Thermometer : ?",
        "Clock : Time :: Thermometer : ?",
        { en: "Temperature", hi: "तापमान" },
        [
          { en: "Pressure", hi: "दाब" },
          { en: "Humidity", hi: "आर्द्रता" },
          { en: "Volume", hi: "आयतन" },
        ],
        "Clock measures time, thermometer measures temperature.",
        "घड़ी समय मापती है, थर्मामीटर तापमान मापता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "If A = 1, B = 2, ... then value of CAB is:",
        "यदि A = 1, B = 2, ... तो CAB का मान है:",
        { en: "6", hi: "6" },
        [
          { en: "5", hi: "5" },
          { en: "7", hi: "7" },
          { en: "8", hi: "8" },
        ],
        "C + A + B = 3 + 1 + 2 = 6.",
        "C + A + B = 3 + 1 + 2 = 6।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Choose the odd pair.",
        "विषम युग्म चुनें।",
        { en: "Pen : Ink", hi: "पेन : स्याही" },
        [
          { en: "Car : Petrol", hi: "कार : पेट्रोल" },
          { en: "Body : Blood", hi: "शरीर : रक्त" },
          { en: "Lamp : Electricity", hi: "लैंप : बिजली" },
        ],
        "Pen uses ink as writing medium, unlike energy/fluid source relation in others.",
        "पेन-स्याही संबंध अन्य ऊर्जा/प्रवाहक संबंधों से अलग है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-chsl-set${setNumber}-reason-${qNo}`,
      "Reasoning",
      "तर्क",
      "A is taller than B, B is taller than C. Then:",
      "A, B से लंबा है और B, C से लंबा है। तब:",
      { en: "A is taller than C", hi: "A, C से लंबा है" },
      [
        { en: "C is taller than A", hi: "C, A से लंबा है" },
        { en: "A and C are equal", hi: "A और C बराबर हैं" },
        { en: "Cannot be determined", hi: "निर्धारित नहीं किया जा सकता" },
      ],
      "By transitive comparison, A must be taller than C.",
      "संक्रमण नियम के अनुसार A, C से लंबा होगा।",
      seed
    );
  });
}

function createSscChslQuantQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 25 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1700 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      const a = 24 + setNumber + qNo;
      const b = 6 + (qNo % 7);
      const answer = a / b;
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Find: ${a} / ${b}`,
        `ज्ञात करें: ${a} / ${b}`,
        { en: `${Math.floor(answer)}`, hi: `${Math.floor(answer)}` },
        [
          { en: `${Math.floor(answer) + 1}`, hi: `${Math.floor(answer) + 1}` },
          { en: `${Math.floor(answer) + 2}`, hi: `${Math.floor(answer) + 2}` },
          { en: `${Math.floor(answer) - 1}`, hi: `${Math.floor(answer) - 1}` },
        ],
        "Perform direct division and choose the integer result.",
        "सीधा भाग करके पूर्णांक परिणाम चुनें।",
        seed
      );
    }

    if (pattern === 1) {
      const principal = 800 + setNumber * 100 + qNo * 5;
      const rate = 10;
      const time = 2;
      const si = (principal * rate * time) / 100;
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Simple interest on Rs. ${principal} at ${rate}% p.a. for ${time} years is:`,
        `Rs. ${principal} पर ${rate}% वार्षिक दर से ${time} वर्ष का साधारण ब्याज है:`,
        { en: `${si}`, hi: `${si}` },
        [
          { en: `${si + 10}`, hi: `${si + 10}` },
          { en: `${si - 10}`, hi: `${si - 10}` },
          { en: `${principal * rate / 100}`, hi: `${principal * rate / 100}` },
        ],
        "SI = (P x R x T)/100.",
        "साधारण ब्याज = (P x R x T)/100।",
        seed
      );
    }

    if (pattern === 2) {
      const cp = 200 + setNumber * 20 + qNo;
      const sp = cp + 40;
      const profit = sp - cp;
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `If cost price is Rs. ${cp} and selling price is Rs. ${sp}, profit is:`,
        `यदि क्रय मूल्य Rs. ${cp} और विक्रय मूल्य Rs. ${sp} है, तो लाभ है:`,
        { en: `Rs. ${profit}`, hi: `Rs. ${profit}` },
        [
          { en: `Rs. ${profit + 10}`, hi: `Rs. ${profit + 10}` },
          { en: `Rs. ${profit - 10}`, hi: `Rs. ${profit - 10}` },
          { en: `Rs. ${sp}`, hi: `Rs. ${sp}` },
        ],
        "Profit = SP - CP.",
        "लाभ = विक्रय मूल्य - क्रय मूल्य।",
        seed
      );
    }

    if (pattern === 3) {
      const total = 70 + setNumber * 5 + qNo;
      const part = 35;
      const answer = (part * total) / 100;
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `What is ${part}% of ${total}?`,
        `${total} का ${part}% कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer + 1}`, hi: `${answer + 1}` },
          { en: `${answer - 1}`, hi: `${answer - 1}` },
          { en: `${answer + 3}`, hi: `${answer + 3}` },
        ],
        "Percentage of a number = (percentage/100) x number.",
        "प्रतिशत मान = (प्रतिशत/100) x संख्या।",
        seed
      );
    }

    const hcfA = 18 + (qNo % 4) * 6;
    const hcfB = 30 + (qNo % 3) * 6;
    return createSeededGovQuestion(
      `ssc-chsl-set${setNumber}-quant-${qNo}`,
      "Quantitative Aptitude",
      "मात्रात्मक योग्यता",
      `HCF of ${hcfA} and ${hcfB} is:`,
      `${hcfA} और ${hcfB} का HCF है:`,
      { en: "6", hi: "6" },
      [
        { en: "3", hi: "3" },
        { en: "9", hi: "9" },
        { en: "12", hi: "12" },
      ],
      "Greatest common divisor of these values is 6.",
      "इन संख्याओं का महत्तम समापवर्तक 6 है।",
      seed
    );
  });
}

function createSscChslEnglishQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 25 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1800 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the correctly spelt word.",
        "सही वर्तनी वाला शब्द चुनें।",
        { en: "Environment", hi: "Environment" },
        [
          { en: "Enviroment", hi: "Enviroment" },
          { en: "Envirnoment", hi: "Envirnoment" },
          { en: "Enviornment", hi: "Enviornment" },
        ],
        "'Environment' is the correct spelling.",
        "'Environment' सही वर्तनी है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the synonym of 'assist'.",
        "'assist' का समानार्थी शब्द चुनें।",
        { en: "help", hi: "मदद करना" },
        [
          { en: "refuse", hi: "इंकार करना" },
          { en: "delay", hi: "देरी करना" },
          { en: "hide", hi: "छिपाना" },
        ],
        "'Help' is closest in meaning to 'assist'.",
        "'Help', 'assist' का निकटतम अर्थ है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the antonym of 'temporary'.",
        "'temporary' का विलोम शब्द चुनें।",
        { en: "permanent", hi: "स्थायी" },
        [
          { en: "short", hi: "छोटा" },
          { en: "brief", hi: "संक्षिप्त" },
          { en: "fragile", hi: "नाजुक" },
        ],
        "'Permanent' is opposite in meaning to 'temporary'.",
        "'Permanent', 'temporary' का विपरीत अर्थ है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Fill in the blank: She is good ___ mathematics.",
        "रिक्त स्थान भरें: She is good ___ mathematics.",
        { en: "at", hi: "at" },
        [
          { en: "in", hi: "in" },
          { en: "on", hi: "on" },
          { en: "for", hi: "for" },
        ],
        "The correct preposition is 'good at'.",
        "सही preposition 'good at' है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-chsl-set${setNumber}-eng-${qNo}`,
      "English",
      "अंग्रेजी",
      "Choose the correct one-word substitution: 'A person who speaks many languages'.",
      "एक शब्द चुनें: 'A person who speaks many languages'.",
      { en: "Polyglot", hi: "बहुभाषी" },
      [
        { en: "Scholar", hi: "विद्वान" },
        { en: "Orator", hi: "वक्ता" },
        { en: "Poet", hi: "कवि" },
      ],
      "A person who speaks many languages is called a polyglot.",
      "जो व्यक्ति कई भाषाएं बोलता है उसे polyglot कहते हैं।",
      seed
    );
  });
}

function createSscChslGaQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 25 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 1900 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Who is known as the Father of the Indian Constitution?",
        "भारतीय संविधान के जनक किसे कहा जाता है?",
        { en: "Dr. B. R. Ambedkar", hi: "डॉ. बी. आर. अंबेडकर" },
        [
          { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
          { en: "Jawaharlal Nehru", hi: "जवाहरलाल नेहरू" },
          { en: "Sardar Patel", hi: "सरदार पटेल" },
        ],
        "Dr. B. R. Ambedkar chaired the drafting committee.",
        "डॉ. बी. आर. अंबेडकर ने प्रारूप समिति की अध्यक्षता की थी।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which planet is called the Red Planet?",
        "किस ग्रह को लाल ग्रह कहा जाता है?",
        { en: "Mars", hi: "मंगल" },
        [
          { en: "Venus", hi: "शुक्र" },
          { en: "Saturn", hi: "शनि" },
          { en: "Mercury", hi: "बुध" },
        ],
        "Mars appears reddish due to iron oxide on its surface.",
        "मंगल ग्रह की सतह पर आयरन ऑक्साइड के कारण वह लाल दिखता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "The national currency of Japan is:",
        "जापान की राष्ट्रीय मुद्रा है:",
        { en: "Yen", hi: "येन" },
        [
          { en: "Won", hi: "वोन" },
          { en: "Dollar", hi: "डॉलर" },
          { en: "Euro", hi: "यूरो" },
        ],
        "Japan uses Yen as its currency.",
        "जापान की मुद्रा येन है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-chsl-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which gas is essential for human respiration?",
        "मानव श्वसन के लिए कौन सी गैस आवश्यक है?",
        { en: "Oxygen", hi: "ऑक्सीजन" },
        [
          { en: "Nitrogen", hi: "नाइट्रोजन" },
          { en: "Hydrogen", hi: "हाइड्रोजन" },
          { en: "Helium", hi: "हीलियम" },
        ],
        "Humans inhale oxygen for respiration.",
        "मनुष्य श्वसन के लिए ऑक्सीजन लेते हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-chsl-set${setNumber}-ga-${qNo}`,
      "General Awareness",
      "सामान्य ज्ञान",
      "Which movement was started by Mahatma Gandhi in 1942?",
      "1942 में महात्मा गांधी ने कौन सा आंदोलन शुरू किया?",
      { en: "Quit India Movement", hi: "भारत छोड़ो आंदोलन" },
      [
        { en: "Non-Cooperation Movement", hi: "असहयोग आंदोलन" },
        { en: "Swadeshi Movement", hi: "स्वदेशी आंदोलन" },
        { en: "Khilafat Movement", hi: "खिलाफत आंदोलन" },
      ],
      "The Quit India Movement was launched in August 1942.",
      "भारत छोड़ो आंदोलन अगस्त 1942 में शुरू हुआ था।",
      seed
    );
  });
}

function generateSscChslFullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createSscChslReasoningQuestions(setNumber),
      ...createSscChslQuantQuestions(setNumber),
      ...createSscChslEnglishQuestions(setNumber),
      ...createSscChslGaQuestions(setNumber),
    ];

    return {
      slug: `ssc-chsl-full-mock-${setNumber}`,
      title: `SSC CHSL Full Mock Test ${setNumber}`,
      titleHi: `SSC CHSL फुल मॉक टेस्ट ${setNumber}`,
      chapter: "CHSL Pattern (Reasoning, Quantitative Aptitude, English, General Awareness)",
      chapterHi: "CHSL पैटर्न (तर्क, मात्रात्मक योग्यता, अंग्रेजी, सामान्य ज्ञान)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 60,
      questionCount: 100,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

function createSscTier2QuantQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 40 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2000 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      const a = 120 + setNumber * 4 + qNo;
      const b = 45 + (qNo % 12);
      const answer = a - b;
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Evaluate: ${a} - ${b}`,
        `हल करें: ${a} - ${b}`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer + 2}`, hi: `${answer + 2}` },
          { en: `${answer - 2}`, hi: `${answer - 2}` },
          { en: `${answer + 4}`, hi: `${answer + 4}` },
        ],
        "Use direct subtraction.",
        "सीधा घटाव करें।",
        seed
      );
    }

    if (pattern === 1) {
      const base = 240 + setNumber * 8 + qNo;
      const percent = 25;
      const answer = (base * percent) / 100;
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `What is ${percent}% of ${base}?`,
        `${base} का ${percent}% कितना है?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer + 3}`, hi: `${answer + 3}` },
          { en: `${answer - 3}`, hi: `${answer - 3}` },
          { en: `${answer + 6}`, hi: `${answer + 6}` },
        ],
        "Percentage = (percent/100) x number.",
        "प्रतिशत = (प्रतिशत/100) x संख्या।",
        seed
      );
    }

    if (pattern === 2) {
      const principal = 1500 + setNumber * 100 + qNo * 10;
      const rate = 8;
      const time = 2;
      const answer = (principal * rate * time) / 100;
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `Simple interest on Rs. ${principal} at ${rate}% p.a. for ${time} years is:`,
        `Rs. ${principal} पर ${rate}% वार्षिक दर से ${time} वर्ष का साधारण ब्याज है:`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer + 20}`, hi: `${answer + 20}` },
          { en: `${answer - 20}`, hi: `${answer - 20}` },
          { en: `${(principal * rate) / 100}`, hi: `${(principal * rate) / 100}` },
        ],
        "Use SI = (P x R x T)/100.",
        "SI = (P x R x T)/100 का प्रयोग करें।",
        seed
      );
    }

    if (pattern === 3) {
      const speed = 35 + (qNo % 15);
      const time = 3;
      const answer = speed * time;
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-quant-${qNo}`,
        "Quantitative Aptitude",
        "मात्रात्मक योग्यता",
        `At ${speed} km/h for ${time} hours, distance covered is:`,
        `${speed} किमी/घंटा की गति से ${time} घंटे में तय दूरी है:`,
        { en: `${answer} km`, hi: `${answer} किमी` },
        [
          { en: `${answer + 10} km`, hi: `${answer + 10} किमी` },
          { en: `${answer - 10} km`, hi: `${answer - 10} किमी` },
          { en: `${answer + 5} km`, hi: `${answer + 5} किमी` },
        ],
        "Distance = Speed x Time.",
        "दूरी = गति x समय।",
        seed
      );
    }

    const n = 15 + (qNo % 10);
    const answer = n * n;
    return createSeededGovQuestion(
      `ssc-tier2-set${setNumber}-quant-${qNo}`,
      "Quantitative Aptitude",
      "मात्रात्मक योग्यता",
      `Square of ${n} is:`,
      `${n} का वर्ग है:`,
      { en: `${answer}`, hi: `${answer}` },
      [
        { en: `${answer + n}`, hi: `${answer + n}` },
        { en: `${answer - n}`, hi: `${answer - n}` },
        { en: `${answer + 1}`, hi: `${answer + 1}` },
      ],
      `Square means ${n} x ${n}.`,
      `वर्ग का अर्थ ${n} x ${n} होता है।`,
      seed
    );
  });
}

function createSscTier2EnglishQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 40 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2100 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the synonym of 'abundant'.",
        "'abundant' का समानार्थी चुनें।",
        { en: "plentiful", hi: "प्रचुर" },
        [
          { en: "scarce", hi: "दुर्लभ" },
          { en: "minimal", hi: "न्यूनतम" },
          { en: "empty", hi: "खाली" },
        ],
        "'Plentiful' is closest in meaning to 'abundant'.",
        "'plentiful' का अर्थ 'abundant' के सबसे निकट है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the antonym of 'transparent'.",
        "'transparent' का विलोम चुनें।",
        { en: "opaque", hi: "अपारदर्शी" },
        [
          { en: "clear", hi: "स्पष्ट" },
          { en: "visible", hi: "दृश्य" },
          { en: "bright", hi: "उज्ज्वल" },
        ],
        "'Opaque' is opposite in meaning to 'transparent'.",
        "'opaque' का अर्थ 'transparent' का विपरीत है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Choose the correct one-word substitution: 'A person who studies weather'.",
        "एक शब्द चुनें: 'A person who studies weather'.",
        { en: "Meteorologist", hi: "मौसम वैज्ञानिक" },
        [
          { en: "Biologist", hi: "जीव वैज्ञानिक" },
          { en: "Geologist", hi: "भूविज्ञानी" },
          { en: "Astronomer", hi: "खगोलशास्त्री" },
        ],
        "A weather scientist is called a meteorologist.",
        "मौसम का अध्ययन करने वाले को meteorologist कहते हैं।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-eng-${qNo}`,
        "English",
        "अंग्रेजी",
        "Fill in the blank: Hard work leads ___ success.",
        "रिक्त स्थान भरें: Hard work leads ___ success.",
        { en: "to", hi: "to" },
        [
          { en: "in", hi: "in" },
          { en: "for", hi: "for" },
          { en: "at", hi: "at" },
        ],
        "The correct phrase is 'leads to'.",
        "सही वाक्यांश 'leads to' है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier2-set${setNumber}-eng-${qNo}`,
      "English",
      "अंग्रेजी",
      "Choose the correctly spelt word.",
      "सही वर्तनी वाला शब्द चुनें।",
      { en: "Conscience", hi: "Conscience" },
      [
        { en: "Consciense", hi: "Consciense" },
        { en: "Conscince", hi: "Conscince" },
        { en: "Consience", hi: "Consience" },
      ],
      "'Conscience' is the correct spelling.",
      "'Conscience' सही वर्तनी है।",
      seed
    );
  });
}

function createSscTier2ReasoningQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2200 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      const x = 3 + (qNo % 7);
      const answer = x * 2 + 5;
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        `If f(x) = 2x + 5, then f(${x}) = ?`,
        `यदि f(x) = 2x + 5 है, तो f(${x}) = ?`,
        { en: `${answer}`, hi: `${answer}` },
        [
          { en: `${answer + 2}`, hi: `${answer + 2}` },
          { en: `${answer - 2}`, hi: `${answer - 2}` },
          { en: `${answer + 3}`, hi: `${answer + 3}` },
        ],
        "Substitute x into the expression.",
        "x का मान अभिव्यक्ति में रखें।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "All squares are rectangles. Some rectangles are circles. Then:",
        "सभी वर्ग आयत हैं। कुछ आयत वृत्त हैं। तब:",
        { en: "Some squares may be circles", hi: "कुछ वर्ग वृत्त हो सकते हैं" },
        [
          { en: "All squares are circles", hi: "सभी वर्ग वृत्त हैं" },
          { en: "No square is a circle", hi: "कोई वर्ग वृत्त नहीं है" },
          { en: "All circles are squares", hi: "सभी वृत्त वर्ग हैं" },
        ],
        "Only a possibility can be concluded.",
        "यहां केवल संभावना का निष्कर्ष निकलेगा।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Choose the odd one out: 8, 27, 64, 100, 125",
        "विषम पद चुनें: 8, 27, 64, 100, 125",
        { en: "100", hi: "100" },
        [
          { en: "8", hi: "8" },
          { en: "27", hi: "27" },
          { en: "64", hi: "64" },
        ],
        "8, 27, 64, 125 are cubes; 100 is not.",
        "8, 27, 64, 125 घन हैं; 100 नहीं है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Mirror image type questions mainly test:",
        "Mirror image प्रकार के प्रश्न मुख्यतः किसकी जांच करते हैं?",
        { en: "Spatial ability", hi: "स्थानिक क्षमता" },
        [
          { en: "Vocabulary", hi: "शब्दावली" },
          { en: "Arithmetic", hi: "अंकगणित" },
          { en: "Grammar", hi: "व्याकरण" },
        ],
        "Mirror-image problems assess spatial and visual reasoning.",
        "Mirror-image प्रश्न स्थानिक और दृश्य तर्क क्षमता जांचते हैं।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier2-set${setNumber}-reason-${qNo}`,
      "Reasoning",
      "तर्क",
      "If FRIEND is coded as GSJFOE, then CROWN is coded as:",
      "यदि FRIEND को GSJFOE लिखा जाए, तो CROWN को लिखा जाएगा:",
      { en: "DSPXO", hi: "DSPXO" },
      [
        { en: "CRPWN", hi: "CRPWN" },
        { en: "DQPXO", hi: "DQPXO" },
        { en: "ESQYP", hi: "ESQYP" },
      ],
      "Each letter is shifted one step forward in the alphabet.",
      "प्रत्येक अक्षर वर्णमाला में एक कदम आगे बढ़ता है।",
      seed
    );
  });
}

function createSscTier2GaQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 35 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2300 + qNo;
    const pattern = index % 5;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which Article of the Indian Constitution deals with Equality before Law?",
        "भारतीय संविधान का कौन सा अनुच्छेद कानून के समक्ष समानता से संबंधित है?",
        { en: "Article 14", hi: "अनुच्छेद 14" },
        [
          { en: "Article 19", hi: "अनुच्छेद 19" },
          { en: "Article 21", hi: "अनुच्छेद 21" },
          { en: "Article 32", hi: "अनुच्छेद 32" },
        ],
        "Article 14 guarantees equality before law and equal protection of laws.",
        "अनुच्छेद 14 कानून के समक्ष समानता सुनिश्चित करता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Who gave the call 'Do or Die' during the freedom movement?",
        "स्वतंत्रता आंदोलन में 'करो या मरो' का नारा किसने दिया?",
        { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
        [
          { en: "Subhas Chandra Bose", hi: "सुभाष चंद्र बोस" },
          { en: "Bal Gangadhar Tilak", hi: "बाल गंगाधर तिलक" },
          { en: "Jawaharlal Nehru", hi: "जवाहरलाल नेहरू" },
        ],
        "'Do or Die' was given by Mahatma Gandhi in 1942.",
        "'करो या मरो' का नारा महात्मा गांधी ने 1942 में दिया।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "Which vitamin is mainly produced in the body with sunlight exposure?",
        "सूर्य प्रकाश के संपर्क से शरीर में मुख्य रूप से कौन सा विटामिन बनता है?",
        { en: "Vitamin D", hi: "विटामिन D" },
        [
          { en: "Vitamin A", hi: "विटामिन A" },
          { en: "Vitamin B12", hi: "विटामिन B12" },
          { en: "Vitamin C", hi: "विटामिन C" },
        ],
        "Vitamin D synthesis is linked with sunlight exposure.",
        "विटामिन D का निर्माण सूर्य प्रकाश से जुड़ा है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `ssc-tier2-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य ज्ञान",
        "The SI unit of electric resistance is:",
        "विद्युत प्रतिरोध की SI इकाई है:",
        { en: "Ohm", hi: "ओम" },
        [
          { en: "Ampere", hi: "एम्पियर" },
          { en: "Volt", hi: "वोल्ट" },
          { en: "Watt", hi: "वाट" },
        ],
        "Resistance is measured in ohm.",
        "प्रतिरोध को ओम में मापा जाता है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `ssc-tier2-set${setNumber}-ga-${qNo}`,
      "General Awareness",
      "सामान्य ज्ञान",
      "Which Indian state has the longest coastline?",
      "भारत के किस राज्य की समुद्री तटरेखा सबसे लंबी है?",
      { en: "Gujarat", hi: "गुजरात" },
      [
        { en: "Maharashtra", hi: "महाराष्ट्र" },
        { en: "Tamil Nadu", hi: "तमिलनाडु" },
        { en: "Andhra Pradesh", hi: "आंध्र प्रदेश" },
      ],
      "Gujarat has the longest coastline among Indian states.",
      "भारतीय राज्यों में सबसे लंबी तटरेखा गुजरात की है।",
      seed
    );
  });
}

function generateSscTier2FullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createSscTier2QuantQuestions(setNumber),
      ...createSscTier2EnglishQuestions(setNumber),
      ...createSscTier2ReasoningQuestions(setNumber),
      ...createSscTier2GaQuestions(setNumber),
    ];

    return {
      slug: `ssc-tier-2-full-mock-${setNumber}`,
      title: `SSC Tier II Full Mock Test ${setNumber}`,
      titleHi: `SSC टियर II फुल मॉक टेस्ट ${setNumber}`,
      chapter: "Tier II Pattern (Advanced Quant, English, Reasoning, General Awareness)",
      chapterHi: "टियर II पैटर्न (उन्नत क्वांट, अंग्रेजी, तर्क, सामान्य ज्ञान)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 120,
      questionCount: 150,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

function createComedkQuestion(
  id: string,
  question: string,
  correctText: string,
  distractors: [string, string, string],
  explanation: string,
  topic: string,
  difficulty: "easy" | "medium" | "hard",
  seed: number
): PracticeQuestion {
  const options = [correctText, ...distractors];
  const order: Array<0 | 1 | 2 | 3> = [0, 1, 2, 3];
  const shift = seed % 4;
  const rotated = order.map((_, index) => options[(index + shift) % 4]);
  const answerIds: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];
  const correctIndex = rotated.findIndex((option) => option === correctText);

  return createQuestion(
    id,
    question,
    rotated as [string, string, string, string],
    answerIds[correctIndex],
    explanation,
    topic,
    difficulty
  );
}

function createComedkMathQuestionsLegacy(setNumber: number): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 12;
    // v is unique for each (setNumber, occurrence-of-pattern) pair: 0-24
    const v = Math.floor(index / 12) + (setNumber - 1) * 5;
    const seed = 6100 + setNumber * 100 + qNo;

    if (pattern === 0) {
      // Linear equation — all params vary with v so no two occurrences share same question
      const a = 2 + (v % 7);   // 2–8
      const x = 3 + (v % 10);  // 3–12
      const b = 5 + (v % 9);   // 5–13
      const rhs = a * x + b;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Solve for x: ${a}x + ${b} = ${rhs}.`,
        `${x}`,
        [`${x + 1}`, `${x - 1}`, `${x + 2}`],
        `Subtract ${b} from both sides: ${a}x = ${rhs - b}. Divide by ${a}: x = ${x}.`,
        "algebra", "easy", seed
      );
    }

    if (pattern === 1) {
      const r1 = 3 + (v % 8);           // 3–10
      const r2 = r1 + 2 + (v % 5);      // always > r1
      const sum = r1 + r2;
      const product = r1 * r2;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `One root of x\u00b2 \u2212 ${sum}x + ${product} = 0 is ${r1}. The other root is:`,
        `${r2}`,
        [`${r2 + 1}`, `${r2 - 1}`, `${sum}`],
        `Product of roots = ${product}. Other root = ${product} \u00f7 ${r1} = ${r2}.`,
        "quadratic equations", "medium", seed
      );
    }

    if (pattern === 2) {
      const a = 2 + (v % 10); // 2–11
      const d = 2 + (v % 7);  // 2–8
      const n = 8 + (v % 5);  // 8–12
      const term = a + (n - 1) * d;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `The ${n}th term of an AP with first term ${a} and common difference ${d} is:`,
        `${term}`,
        [`${term - d}`, `${term + d}`, `${term + a + 1}`],
        `a\u2099 = a + (n\u22121)d = ${a} + ${n - 1}\u00d7${d} = ${term}.`,
        "progressions", "medium", seed
      );
    }

    if (pattern === 3) {
      const x1 = 1 + (v % 6);  // 1–6
      const y1 = 2 + (v % 7);  // 2–8
      const m  = 2 + (v % 8);  // 2–9
      const x2 = x1 + 3;
      const y2 = y1 + m * 3;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Slope of the line through (${x1}, ${y1}) and (${x2}, ${y2}) is:`,
        `${m}`,
        [`${m + 1}`, `${m - 1}`, `${m + 2}`],
        `Slope = (${y2}\u2212${y1}) \u00f7 (${x2}\u2212${x1}) = ${y2 - y1} \u00f7 3 = ${m}.`,
        "coordinate geometry", "medium", seed
      );
    }

    if (pattern === 4) {
      // 25-entry pool — v is 0–24 so each call picks a distinct entry
      const trigPool = [
        { q: "sin 0\u00b0",     a: "0",        d: ["1", "1/2", "\u221a3/2"] as [string,string,string],      exp: "sin 0\u00b0 = 0." },
        { q: "cos 0\u00b0",     a: "1",        d: ["0", "\u22121", "1/2"] as [string,string,string],        exp: "cos 0\u00b0 = 1." },
        { q: "sin 30\u00b0",    a: "1/2",      d: ["0", "1", "\u221a3/2"] as [string,string,string],        exp: "sin 30\u00b0 = 1/2." },
        { q: "cos 60\u00b0",    a: "1/2",      d: ["0", "\u221a3/2", "1"] as [string,string,string],        exp: "cos 60\u00b0 = 1/2." },
        { q: "tan 45\u00b0",    a: "1",        d: ["0", "\u221a3", "1/\u221a3"] as [string,string,string],  exp: "tan 45\u00b0 = 1." },
        { q: "sin 90\u00b0",    a: "1",        d: ["0", "\u22121", "1/2"] as [string,string,string],        exp: "sin 90\u00b0 = 1." },
        { q: "cos 90\u00b0",    a: "0",        d: ["1", "\u22121", "1/2"] as [string,string,string],        exp: "cos 90\u00b0 = 0." },
        { q: "sin 45\u00b0",    a: "1/\u221a2",d: ["1/2", "\u221a3/2", "1"] as [string,string,string],     exp: "sin 45\u00b0 = 1/\u221a2." },
        { q: "cos 30\u00b0",    a: "\u221a3/2",d: ["1/2", "1", "1/\u221a2"] as [string,string,string],     exp: "cos 30\u00b0 = \u221a3/2." },
        { q: "cos 45\u00b0",    a: "1/\u221a2",d: ["1/2", "\u221a3/2", "1"] as [string,string,string],     exp: "cos 45\u00b0 = 1/\u221a2." },
        { q: "sin 60\u00b0",    a: "\u221a3/2",d: ["1/2", "1", "1/\u221a2"] as [string,string,string],     exp: "sin 60\u00b0 = \u221a3/2." },
        { q: "tan 30\u00b0",    a: "1/\u221a3",d: ["\u221a3", "1", "1/2"] as [string,string,string],       exp: "tan 30\u00b0 = 1/\u221a3." },
        { q: "tan 60\u00b0",    a: "\u221a3",  d: ["1", "1/\u221a3", "2"] as [string,string,string],       exp: "tan 60\u00b0 = \u221a3." },
        { q: "sin 120\u00b0",   a: "\u221a3/2",d: ["1/2", "\u2212\u221a3/2", "1"] as [string,string,string],exp: "sin 120\u00b0 = sin 60\u00b0 = \u221a3/2." },
        { q: "cos 120\u00b0",   a: "\u22121/2",d: ["1/2", "\u221a3/2", "\u22121"] as [string,string,string],exp: "cos 120\u00b0 = \u2212cos 60\u00b0 = \u22121/2." },
        { q: "sin 150\u00b0",   a: "1/2",      d: ["\u22121/2", "\u221a3/2", "0"] as [string,string,string],exp: "sin 150\u00b0 = sin 30\u00b0 = 1/2." },
        { q: "cos 150\u00b0",   a: "\u2212\u221a3/2",d:["\u221a3/2", "\u22121/2", "0"] as [string,string,string],exp:"cos 150\u00b0 = \u2212\u221a3/2." },
        { q: "sin 180\u00b0",   a: "0",        d: ["1", "\u22121", "1/2"] as [string,string,string],       exp: "sin 180\u00b0 = 0." },
        { q: "cos 180\u00b0",   a: "\u22121",  d: ["0", "1", "\u22121/2"] as [string,string,string],       exp: "cos 180\u00b0 = \u22121." },
        { q: "sin 270\u00b0",   a: "\u22121",  d: ["0", "1", "\u22121/2"] as [string,string,string],       exp: "sin 270\u00b0 = \u22121." },
        { q: "cos 270\u00b0",   a: "0",        d: ["1", "\u22121", "1/2"] as [string,string,string],       exp: "cos 270\u00b0 = 0." },
        { q: "tan 0\u00b0",     a: "0",        d: ["1", "undefined", "1/2"] as [string,string,string],     exp: "tan 0\u00b0 = 0." },
        { q: "sin(\u221230\u00b0)",a:"\u22121/2",d:["1/2", "\u221a3/2", "\u22121"] as [string,string,string],exp:"sin(\u2212\u03b8)=\u2212sin\u03b8, so \u22121/2." },
        { q: "cos(\u221260\u00b0)",a:"1/2",    d:["\u22121/2", "\u221a3/2", "1"] as [string,string,string], exp:"cos(\u2212\u03b8)=cos\u03b8, so 1/2." },
        { q: "cot 45\u00b0",    a: "1",        d: ["0", "\u221a3", "1/\u221a3"] as [string,string,string],  exp: "cot 45\u00b0 = cos45\u00b0/sin45\u00b0 = 1." },
      ] as const;
      const row = trigPool[v % trigPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Value of ${row.q} is:`,
        row.a, row.d, row.exp,
        "trigonometry", "easy", seed
      );
    }

    if (pattern === 5) {
      const red  = 3 + (v % 8);  // 3–10
      const blue = 5 + (v % 9);  // 5–13
      const total = red + blue;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `A bag contains ${red} red and ${blue} blue balls. Probability of drawing a red ball is:`,
        `${red}/${total}`,
        [`${blue}/${total + 1}`, `${red}/${total - 1}`, `${blue + 1}/${total + 1}`],
        `P(red) = ${red}/${total}.`,
        "probability", "easy", seed
      );
    }

    if (pattern === 6) {
      const a = 2 + (v % 7);  // 2–8
      const b = 1 + (v % 5);  // 1–5
      const c = 2 + (v % 4);  // 2–5
      const d = 3 + (v % 8);  // 3–10
      const det = a * d - b * c;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Determinant of matrix [[${a}, ${b}], [${c}, ${d}]] is:`,
        `${det}`,
        [`${det + 5}`, `${det - 3}`, `${a + c + d + 5}`],
        `det = ad \u2212 bc = ${a}\u00d7${d} \u2212 ${b}\u00d7${c} = ${det}.`,
        "matrices", "medium", seed
      );
    }

    if (pattern === 7) {
      const bases = [2, 3, 5, 10] as const;
      const base  = bases[v % 4];
      const power = 2 + (v % 7); // 2–8
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Evaluate: log\u2082\u2090\u2091\u2092\u2093${base}(${base}^${power}) [log base ${base}].`,
        `${power}`,
        [`${power + 1}`, `${power - 1}`, `${base * power}`],
        `log\u2090(a^n) = n, so log_${base}(${base}^${power}) = ${power}.`,
        "logarithms", "easy", seed
      );
    }

    if (pattern === 8) {
      const n = 6 + (v % 8);   // 6–13
      const r = 2 + (v % 3);   // 2–4
      let perm = 1;
      for (let i = 0; i < r; i++) perm *= (n - i);
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Find ${n}P${r}.`,
        `${perm}`,
        [`${Math.floor(perm / r)}`, `${perm + r * 2}`, `${perm - r * 2}`],
        `${n}P${r} = ${n}!/(${n}\u2212${r})! = ${Array.from({length:r},(_,i)=>n-i).join('\u00d7')} = ${perm}.`,
        "permutations", "medium", seed
      );
    }

    if (pattern === 9) {
      const n = 7 + (v % 9);  // 7–15
      const comb = (n * (n - 1)) / 2;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Find ${n}C2.`,
        `${comb}`,
        [`${n * 2}`, `${comb + 3}`, `${comb - 3}`],
        `nC2 = n(n\u22121)/2 = ${n}\u00d7${n - 1}/2 = ${comb}.`,
        "combinations", "medium", seed
      );
    }

    if (pattern === 10) {
      const principal = 500 + v * 200;  // 500–5300
      const rate  = 4 + (v % 9);        // 4–12
      const years = 2 + (v % 4);        // 2–5
      const si = (principal * rate * years) / 100;
      return createComedkQuestion(
        `comedk-set${setNumber}-math-${qNo}`,
        `Simple interest on Rs ${principal} at ${rate}% p.a. for ${years} years is:`,
        `Rs ${si}`,
        [`Rs ${si + rate * years * 10}`, `Rs ${si - rate * years * 5}`, `Rs ${si * 2}`],
        `SI = P\u00d7R\u00d7T/100 = ${principal}\u00d7${rate}\u00d7${years}/100 = Rs ${si}.`,
        "simple interest", "easy", seed
      );
    }

    // pattern 11 (default): area of triangle
    const base = 6 + (v % 10);  // 6–15
    const h    = 4 + (v % 9);   // 4–12
    const area = (base * h) / 2;
    return createComedkQuestion(
      `comedk-set${setNumber}-math-${qNo}`,
      `Area of a triangle with base ${base} cm and height ${h} cm is:`,
      `${area} cm\u00b2`,
      [`${base * h} cm\u00b2`, `${area + 6} cm\u00b2`, `${area - 6} cm\u00b2`],
      `Area = (1/2) \u00d7 base \u00d7 height = (1/2) \u00d7 ${base} \u00d7 ${h} = ${area} cm\u00b2.`,
      "geometry", "easy", seed
    );
  });
}

function createComedkPhysicsQuestionsLegacy(setNumber: number): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 12;
    // v is unique for each (setNumber, occurrence-of-pattern) pair: 0–24
    const v = Math.floor(index / 12) + (setNumber - 1) * 5;
    const seed = 7100 + setNumber * 100 + qNo;

    if (pattern === 0) {
      // v = u + at
      const u  = 2 + (v % 8);  // 2–9
      const ac = 2 + (v % 7);  // 2–8
      const t  = 3 + (v % 5);  // 3–7
      const vf = u + ac * t;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `A body starts with velocity ${u} m/s and has acceleration ${ac} m/s\u00b2. Its velocity after ${t} s is:`,
        `${vf} m/s`,
        [`${vf - ac} m/s`, `${vf + ac} m/s`, `${u + t} m/s`],
        `v = u + at = ${u} + ${ac}\u00d7${t} = ${vf} m/s.`,
        "kinematics", "easy", seed
      );
    }

    if (pattern === 1) {
      // s = ut + \u00bdAt\u00b2
      const u  = 1 + (v % 6);  // 1–6
      const ac = 2 + (v % 5);  // 2–6
      const t  = 4 + (v % 4);  // 4–7
      const s  = u * t + 0.5 * ac * t * t;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `For u = ${u} m/s, a = ${ac} m/s\u00b2, t = ${t} s, displacement is:`,
        `${formatValue(s)} m`,
        [`${u * t} m`, `${formatValue(s + ac * t)} m`, `${formatValue(s - ac)} m`],
        `s = ut + \u00bdAt\u00b2 = ${u}\u00d7${t} + 0.5\u00d7${ac}\u00d7${t}\u00b2 = ${formatValue(s)} m.`,
        "kinematics", "medium", seed
      );
    }

    if (pattern === 2) {
      // F = ma
      const m  = 2 + (v % 8);  // 2–9
      const ac = 3 + (v % 7);  // 3–9
      const f  = m * ac;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Net force needed to give ${m} kg mass an acceleration of ${ac} m/s\u00b2 is:`,
        `${f} N`,
        [`${f + ac} N`, `${f - ac} N`, `${m + ac} N`],
        `F = ma = ${m}\u00d7${ac} = ${f} N.`,
        "laws of motion", "easy", seed
      );
    }

    if (pattern === 3) {
      // W = F\u00d7d
      const force = 10 + (v % 12) * 5;  // 10, 15, 20, …, 65
      const dist  = 3 + (v % 8);        // 3–10
      const work  = force * dist;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Work done when force ${force} N moves a body ${dist} m in its direction is:`,
        `${work} J`,
        [`${work + force} J`, `${work - force} J`, `${force + dist} J`],
        `W = F\u00d7d = ${force}\u00d7${dist} = ${work} J.`,
        "work and energy", "easy", seed
      );
    }

    if (pattern === 4) {
      // P = W/t
      const work = 100 + v * 50;  // 100–1300
      const time = 5 + (v % 6);   // 5–10
      const power = work / time;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `A body does ${work} J of work in ${time} s. Its power is:`,
        `${formatValue(power)} W`,
        [`${formatValue(power * 2)} W`, `${formatValue(power + time)} W`, `${formatValue(power - 5 > 0 ? power - 5 : power + 3)} W`],
        `P = W/t = ${work}/${time} = ${formatValue(power)} W.`,
        "work and energy", "easy", seed
      );
    }

    if (pattern === 5) {
      // p = mv
      const m   = 3 + (v % 8);   // 3–10
      const vel = 4 + (v % 9);   // 4–12
      const p   = m * vel;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `A body of mass ${m} kg moves at ${vel} m/s. Its momentum is:`,
        `${p} kg\u00b7m/s`,
        [`${p + m} kg\u00b7m/s`, `${p - vel} kg\u00b7m/s`, `${m + vel} kg\u00b7m/s`],
        `p = mv = ${m}\u00d7${vel} = ${p} kg\u00b7m/s.`,
        "momentum", "easy", seed
      );
    }

    if (pattern === 6) {
      // KE = \u00bdmv\u00b2
      const m   = 2 + (v % 7);   // 2–8
      const vel = 4 + (v % 8);   // 4–11
      const ke  = 0.5 * m * vel * vel;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Kinetic energy of ${m} kg body moving at ${vel} m/s is:`,
        `${formatValue(ke)} J`,
        [`${m * vel} J`, `${formatValue(ke + m * vel)} J`, `${formatValue(ke - m > 0 ? ke - m : ke + m)} J`],
        `KE = \u00bdmv\u00b2 = 0.5\u00d7${m}\u00d7${vel}\u00b2 = ${formatValue(ke)} J.`,
        "work and energy", "medium", seed
      );
    }

    if (pattern === 7) {
      // V = IR
      const curr = 2 + (v % 8);   // 2–9 A
      const res  = 3 + (v % 9);   // 3–11 \u03a9
      const volt = curr * res;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Voltage across a ${res} \u03a9 resistor carrying ${curr} A current is:`,
        `${volt} V`,
        [`${volt + res} V`, `${volt - curr - 1} V`, `${curr + res + 2} V`],
        `V = IR = ${curr}\u00d7${res} = ${volt} V.`,
        "current electricity", "easy", seed
      );
    }

    if (pattern === 8) {
      // Series resistance
      const r1 = 4 + (v % 8);   // 4–11
      const r2 = 6 + (v % 9);   // 6–14
      const rs = r1 + r2;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Two resistors ${r1} \u03a9 and ${r2} \u03a9 connected in series. Total resistance is:`,
        `${rs} \u03a9`,
        [`${r1 * r2} \u03a9`, `${Math.abs(r1 - r2)} \u03a9`, `${rs + 2} \u03a9`],
        `Series: R = R\u2081 + R\u2082 = ${r1} + ${r2} = ${rs} \u03a9.`,
        "current electricity", "easy", seed
      );
    }

    if (pattern === 9) {
      // Lens power P = 1/f; use focal lengths 20–90 cm (multiples of 10)
      const fCm = 20 + (v % 8) * 10;   // 20, 30, …, 90 cm — 8 unique values
      const fM  = fCm / 100;
      const pw  = formatValue(1 / fM);
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Power of a lens with focal length ${fCm} cm is:`,
        `${pw} D`,
        [`${fCm} D`, `${formatValue(1 / fM + 1)} D`, `${fM} D`],
        `P = 1/f = 1/${fM} m = ${pw} D.`,
        "optics", "medium", seed
      );
    }

    if (pattern === 10) {
      // Wave speed v = f\u03bb
      const freq   = 50 + (v % 10) * 20;  // 50–230 Hz
      const lambda = 2 + (v % 7);         // 2–8 m
      const spd    = freq * lambda;
      return createComedkQuestion(
        `comedk-set${setNumber}-phys-${qNo}`,
        `Wave speed for frequency ${freq} Hz and wavelength ${lambda} m is:`,
        `${spd} m/s`,
        [`${spd + freq} m/s`, `${spd - lambda * 10} m/s`, `${freq + lambda} m/s`],
        `v = f\u03bb = ${freq}\u00d7${lambda} = ${spd} m/s.`,
        "waves", "medium", seed
      );
    }

    // pattern 11 (default): Gravitation pool — 10 unique entries, indexed by v%10
    const gravPool = [
      { q: "Gravitational force doubles when one mass doubles:", a: "doubles", d: ["halves", "quadruples", "unchanged"] as [string,string,string], exp: "F \u221d m\u2081\u00d7m\u2082; doubling one mass doubles F." },
      { q: "Gravitational force when separation is tripled becomes:", a: "1/9 of original", d: ["1/3 of original", "3 times", "9 times"] as [string,string,string], exp: "F \u221d 1/r\u00b2; 3\u00d7 distance \u2192 F/9." },
      { q: "Gravitational force when distance is doubled becomes:", a: "one-fourth", d: ["half", "double", "unchanged"] as [string,string,string], exp: "F \u221d 1/r\u00b2; 2\u00d7 distance \u2192 F/4." },
      { q: "Escape velocity from Earth's surface is approximately:", a: "11.2 km/s", d: ["7.9 km/s", "3.0 km/s", "16.0 km/s"] as [string,string,string], exp: "v\u1d49 = \u221a(2gR) \u2248 11.2 km/s." },
      { q: "Orbital velocity of a satellite near Earth's surface is approximately:", a: "7.9 km/s", d: ["11.2 km/s", "5.0 km/s", "3.0 km/s"] as [string,string,string], exp: "First cosmic velocity \u2248 7.9 km/s." },
      { q: "Standard acceleration due to gravity at Earth's surface is:", a: "9.8 m/s\u00b2", d: ["6.7 m/s\u00b2", "11.2 m/s\u00b2", "3.7 m/s\u00b2"] as [string,string,string], exp: "g \u2248 9.8 m/s\u00b2 at Earth's surface." },
      { q: "Weight of a body in free fall is:", a: "zero (apparent weight)", d: ["equal to mg", "doubled", "equal to mass"] as [string,string,string], exp: "In free fall, normal reaction = 0 \u2192 apparent weight = 0." },
      { q: "If both masses and distance are all doubled, gravitational force:", a: "remains the same", d: ["doubles", "quadruples", "halves"] as [string,string,string], exp: "F \u221d m\u2081m\u2082/r\u00b2. 4m\u2081m\u2082/(4r\u00b2) = original F." },
      { q: "Unit of gravitational constant G is:", a: "N m\u00b2 kg\u207b\u00b2", d: ["N m kg\u207b\u00b9", "N kg\u207b\u00b2", "m\u00b3 kg\u207b\u00b9 s\u207b\u00b2"] as [string,string,string], exp: "From F = Gm\u2081m\u2082/r\u00b2, G = Fr\u00b2/(m\u2081m\u2082)." },
      { q: "Gravitational force between two bodies is independent of:", a: "medium between them", d: ["masses of bodies", "distance between them", "gravitational constant"] as [string,string,string], exp: "Unlike electrostatic force, gravitational force is medium-independent." },
    ] as const;
    const gRow = gravPool[v % gravPool.length];
    return createComedkQuestion(
      `comedk-set${setNumber}-phys-${qNo}`,
      gRow.q, gRow.a, gRow.d, gRow.exp,
      "gravitation", "easy", seed
    );
  });
}

function buildComedkMathBank(): PracticeQuestion[] {
  const rawBank = Array.from({ length: 5 }, (_, index) =>
    createComedkMathQuestionsLegacy(index + 1)
  ).flat();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Math bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_MATH_BANK = buildComedkMathBank();

function createComedkMathQuestions(setNumber: number): PracticeQuestion[] {
  const start = (setNumber - 1) * 60;
  const slice = COMEDK_MATH_BANK.slice(start, start + 60);

  return slice.map((question, index) => ({
    ...question,
    id: `comedk-set${setNumber}-math-${index + 1}`,
  }));
}

function buildComedkPhysicsBank(): PracticeQuestion[] {
  const rawBank = Array.from({ length: 5 }, (_, index) =>
    createComedkPhysicsQuestionsLegacy(index + 1)
  ).flat();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Physics bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_PHYSICS_BANK = buildComedkPhysicsBank();

function createComedkPhysicsQuestions(setNumber: number): PracticeQuestion[] {
  const start = (setNumber - 1) * 60;
  const slice = COMEDK_PHYSICS_BANK.slice(start, start + 60);

  return slice.map((question, index) => ({
    ...question,
    id: `comedk-set${setNumber}-phys-${index + 1}`,
  }));
}

function createComedkChemistryQuestionsLegacy(setNumber: number): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 12;
    // v unique per (setNumber, occurrence-of-pattern): 0–24
    const v = Math.floor(index / 12) + (setNumber - 1) * 5;
    const seed = 8100 + setNumber * 100 + qNo;

    if (pattern === 0) {
      // pH — 13 distinct values via v%13
      const pH = 1 + (v % 13);
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        `If [H\u207a] = 10\u207b${pH} mol/L, the pH of the solution is:`,
        `${pH}`,
        [`${pH + 1}`, `${pH === 7 ? 9 : 14 - pH}`, `${pH - 1 > 0 ? pH - 1 : pH + 2}`],
        `pH = \u2212log[H\u207a] = \u2212log(10\u207b${pH}) = ${pH}.`,
        "physical chemistry", "easy", seed
      );
    }

    if (pattern === 1) {
      // 25-entry molar mass pool
      const molarPool = [
        { f: "H\u2082O",    m: "18",   d: ["16", "20", "22"] as [string,string,string] },
        { f: "CO\u2082",    m: "44",   d: ["40", "46", "48"] as [string,string,string] },
        { f: "NH\u2083",    m: "17",   d: ["14", "16", "18"] as [string,string,string] },
        { f: "NaCl",        m: "58.5", d: ["36.5", "74", "23"] as [string,string,string] },
        { f: "H\u2082SO\u2084", m: "98", d: ["80", "96", "100"] as [string,string,string] },
        { f: "HCl",         m: "36.5", d: ["35.5", "37", "18"] as [string,string,string] },
        { f: "NaOH",        m: "40",   d: ["23", "39", "42"] as [string,string,string] },
        { f: "CH\u2084",    m: "16",   d: ["14", "12", "18"] as [string,string,string] },
        { f: "CaCO\u2083",  m: "100",  d: ["80", "98", "102"] as [string,string,string] },
        { f: "KCl",         m: "74.5", d: ["39", "74", "76"] as [string,string,string] },
        { f: "MgO",         m: "40",   d: ["24", "32", "44"] as [string,string,string] },
        { f: "C\u2082H\u2084", m: "28", d: ["26", "24", "30"] as [string,string,string] },
        { f: "C\u2082H\u2086", m: "30", d: ["28", "26", "32"] as [string,string,string] },
        { f: "HNO\u2083",   m: "63",   d: ["47", "65", "61"] as [string,string,string] },
        { f: "AlCl\u2083",  m: "133.5",d: ["98", "127", "135"] as [string,string,string] },
        { f: "CaCl\u2082",  m: "111",  d: ["75", "95", "113"] as [string,string,string] },
        { f: "O\u2082",     m: "32",   d: ["16", "48", "30"] as [string,string,string] },
        { f: "N\u2082",     m: "28",   d: ["14", "21", "30"] as [string,string,string] },
        { f: "Fe\u2082O\u2083", m: "160", d: ["72", "104", "144"] as [string,string,string] },
        { f: "ZnO",         m: "81",   d: ["65", "80", "83"] as [string,string,string] },
        { f: "Cl\u2082",    m: "71",   d: ["35.5", "70", "72"] as [string,string,string] },
        { f: "SO\u2082",    m: "64",   d: ["48", "80", "66"] as [string,string,string] },
        { f: "NO\u2082",    m: "46",   d: ["30", "44", "48"] as [string,string,string] },
        { f: "KOH",         m: "56",   d: ["39", "55", "58"] as [string,string,string] },
        { f: "Na\u2082CO\u2083", m: "106", d: ["62", "100", "108"] as [string,string,string] },
      ] as const;
      const row = molarPool[v % molarPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        `Molar mass of ${row.f} is:`,
        `${row.m} g/mol`,
        [`${row.d[0]} g/mol`, `${row.d[1]} g/mol`, `${row.d[2]} g/mol`],
        `Add atomic masses: molar mass of ${row.f} = ${row.m} g/mol.`,
        "mole concept", "easy", seed
      );
    }

    if (pattern === 2) {
      // Oxidation states — 25-entry pool
      const oxPool = [
        { q: "Oxidation state of sulfur in H\u2082SO\u2084 is:", a: "+6", d: ["+4", "+2", "\u22122"] as [string,string,string], exp: "S in H\u2082SO\u2084 = +6." },
        { q: "Oxidation state of nitrogen in NH\u2083 is:", a: "\u22123", d: ["+3", "0", "+5"] as [string,string,string], exp: "H is +1 (\u00d73), so N = \u22123." },
        { q: "Oxidation state of carbon in CO\u2082 is:", a: "+4", d: ["+2", "\u22122", "0"] as [string,string,string], exp: "O is \u22122 (\u00d72), so C = +4." },
        { q: "Oxidation state of iron in Fe\u2082O\u2083 is:", a: "+3", d: ["+2", "0", "+4"] as [string,string,string], exp: "O is \u22122 (\u00d73); 2Fe = +6, Fe = +3." },
        { q: "Oxidation state of chlorine in HCl is:", a: "\u22121", d: ["+1", "0", "\u22123"] as [string,string,string], exp: "H is +1, so Cl = \u22121." },
        { q: "Oxidation state of oxygen in H\u2082O is:", a: "\u22122", d: ["+2", "0", "\u22121"] as [string,string,string], exp: "H is +1 (\u00d72), so O = \u22122." },
        { q: "Oxidation state of nitrogen in HNO\u2083 is:", a: "+5", d: ["+3", "\u22123", "+4"] as [string,string,string], exp: "H=+1, O=\u22122(\u00d73), so N=+5." },
        { q: "Oxidation state of Mn in KMnO\u2084 is:", a: "+7", d: ["+2", "+4", "+6"] as [string,string,string], exp: "K=+1, O=\u22122(\u00d74), Mn=+7." },
        { q: "Oxidation state of Cr in K\u2082Cr\u2082O\u2087 is:", a: "+6", d: ["+3", "+4", "+2"] as [string,string,string], exp: "2K(+1)+2Cr+7O(\u22122)=0 \u2192 Cr=+6." },
        { q: "Oxidation state of phosphorus in H\u2083PO\u2084 is:", a: "+5", d: ["+3", "+1", "\u22123"] as [string,string,string], exp: "3H(+1)+P+4O(\u22122)=0 \u2192 P=+5." },
        { q: "Oxidation state of sulfur in SO\u2082 is:", a: "+4", d: ["+6", "+2", "\u22122"] as [string,string,string], exp: "2O(\u22122)+S=0 \u2192 S=+4." },
        { q: "Oxidation state of nitrogen in N\u2082 gas is:", a: "0", d: ["+3", "\u22123", "+5"] as [string,string,string], exp: "Elemental N\u2082 has oxidation state 0." },
        { q: "Oxidation state of copper in CuO is:", a: "+2", d: ["+1", "0", "+3"] as [string,string,string], exp: "O=\u22122, so Cu=+2." },
        { q: "Oxidation state of Cl in Cl\u2082 gas is:", a: "0", d: ["\u22121", "+1", "+7"] as [string,string,string], exp: "Elemental Cl\u2082: oxidation state 0." },
        { q: "Oxidation state of hydrogen in NaH is:", a: "\u22121", d: ["+1", "0", "+2"] as [string,string,string], exp: "In metal hydrides, H is \u22121." },
        { q: "Oxidation state of sulfur in Na\u2082S is:", a: "\u22122", d: ["+2", "0", "+6"] as [string,string,string], exp: "Na=+1 each, so S=\u22122." },
        { q: "Oxidation state of iron in FeCl\u2083 is:", a: "+3", d: ["+2", "0", "+4"] as [string,string,string], exp: "Cl=\u22121 (\u00d73), Fe=+3." },
        { q: "Oxidation state of carbon in CH\u2084 is:", a: "\u22124", d: ["+4", "0", "+2"] as [string,string,string], exp: "H=+1 (\u00d74), C=\u22124." },
        { q: "Oxidation state of nitrogen in NO is:", a: "+2", d: ["\u22122", "+3", "0"] as [string,string,string], exp: "O=\u22122, so N=+2." },
        { q: "Oxidation state of Pb in PbO\u2082 is:", a: "+4", d: ["+2", "0", "+3"] as [string,string,string], exp: "O=\u22122(\u00d72), Pb=+4." },
        { q: "Oxidation state of Zn in ZnSO\u2084 is:", a: "+2", d: ["+1", "0", "+3"] as [string,string,string], exp: "SO\u2084=\u22122, Zn=+2." },
        { q: "Oxidation state of Na in Na\u2082O\u2082 is:", a: "+1", d: ["+2", "0", "\u22121"] as [string,string,string], exp: "Na=+1; peroxide O=\u22121." },
        { q: "Oxidation state of carbon in CO is:", a: "+2", d: ["+4", "\u22122", "0"] as [string,string,string], exp: "O=\u22122, C=+2." },
        { q: "Oxidation state of oxygen in OF\u2082 is:", a: "+2", d: ["\u22122", "0", "+1"] as [string,string,string], exp: "F=\u22121(\u00d72); O is less electronegative \u2192 O=+2." },
        { q: "Oxidation state of Cl in ClO\u2083\u207b is:", a: "+5", d: ["+3", "+7", "\u22121"] as [string,string,string], exp: "O=\u22122(\u00d73)=\u22126; charge=\u22121; Cl=+5." },
      ] as const;
      const row = oxPool[v % oxPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "redox chemistry", "medium", seed
      );
    }

    if (pattern === 3) {
      // Ionic compound formulas — 25-entry pool
      const ionicPool = [
        { q: "Formula of compound formed by Na\u207a and O\u00b2\u207b is:", a: "Na\u2082O", d: ["NaO", "NaO\u2082", "Na\u2082O\u2082"] as [string,string,string], exp: "Na(+1) and O(\u22122): Na\u2082O." },
        { q: "Formula of magnesium chloride is:", a: "MgCl\u2082", d: ["MgCl", "Mg\u2082Cl", "MgCl\u2083"] as [string,string,string], exp: "Mg(+2) needs 2 Cl(\u22121)." },
        { q: "Formula of aluminium oxide is:", a: "Al\u2082O\u2083", d: ["AlO", "Al\u2083O\u2082", "AlO\u2083"] as [string,string,string], exp: "Al(+3) and O(\u22122): Al\u2082O\u2083." },
        { q: "Formula of calcium chloride is:", a: "CaCl\u2082", d: ["CaCl", "Ca\u2082Cl", "CaCl\u2083"] as [string,string,string], exp: "Ca(+2) needs 2 Cl(\u22121)." },
        { q: "Formula of potassium sulfate is:", a: "K\u2082SO\u2084", d: ["KSO\u2084", "K\u2082SO\u2083", "K\u2082S"] as [string,string,string], exp: "K(+1) and SO\u2084\u00b2\u207b: K\u2082SO\u2084." },
        { q: "Formula of iron(III) chloride is:", a: "FeCl\u2083", d: ["FeCl\u2082", "Fe\u2083Cl", "FeCl"] as [string,string,string], exp: "Fe(+3) needs 3 Cl(\u22121)." },
        { q: "Formula of silver nitrate is:", a: "AgNO\u2083", d: ["Ag\u2082NO\u2083", "AgNO\u2082", "AgNO\u2084"] as [string,string,string], exp: "Ag(+1) and NO\u2083\u207b: AgNO\u2083." },
        { q: "Formula of barium sulfate is:", a: "BaSO\u2084", d: ["Ba\u2082SO\u2084", "BaSO\u2083", "Ba(SO\u2084)\u2082"] as [string,string,string], exp: "Ba(+2) and SO\u2084\u00b2\u207b: BaSO\u2084." },
        { q: "Formula of zinc hydroxide is:", a: "Zn(OH)\u2082", d: ["ZnOH", "Zn\u2082OH", "ZnO"] as [string,string,string], exp: "Zn(+2) and OH(\u22121): Zn(OH)\u2082." },
        { q: "Formula of ammonium sulfate is:", a: "(NH\u2084)\u2082SO\u2084", d: ["NH\u2084SO\u2084", "(NH\u2084)SO\u2084", "NH\u2084SO\u2083"] as [string,string,string], exp: "NH\u2084\u207a(+1) and SO\u2084\u00b2\u207b: 2 NH\u2084\u207a needed." },
        { q: "Formula of iron(II) sulfate is:", a: "FeSO\u2084", d: ["Fe\u2082SO\u2084", "Fe(SO\u2084)\u2082", "FeSO\u2083"] as [string,string,string], exp: "Fe(+2) and SO\u2084\u00b2\u207b: FeSO\u2084." },
        { q: "Formula of copper(II) oxide is:", a: "CuO", d: ["Cu\u2082O", "Cu\u2082O\u2083", "CuO\u2082"] as [string,string,string], exp: "Cu(+2) and O(\u22122): CuO." },
        { q: "Formula of magnesium nitrate is:", a: "Mg(NO\u2083)\u2082", d: ["MgNO\u2083", "Mg\u2082NO\u2083", "Mg(NO\u2082)\u2082"] as [string,string,string], exp: "Mg(+2) and NO\u2083\u207b: need 2 NO\u2083\u207b." },
        { q: "Formula of sodium carbonate is:", a: "Na\u2082CO\u2083", d: ["NaCO\u2083", "Na\u2082CO\u2082", "NaHCO\u2083"] as [string,string,string], exp: "Na(+1) and CO\u2083\u00b2\u207b: Na\u2082CO\u2083." },
        { q: "Formula of calcium phosphate is:", a: "Ca\u2083(PO\u2084)\u2082", d: ["CaPO\u2084", "Ca\u2082PO\u2084", "Ca(PO\u2084)\u2082"] as [string,string,string], exp: "Ca(+2) and PO\u2084\u00b3\u207b: Ca\u2083(PO\u2084)\u2082." },
        { q: "Formula of lithium oxide is:", a: "Li\u2082O", d: ["LiO", "Li\u2083O\u2082", "LiO\u2082"] as [string,string,string], exp: "Li(+1) and O(\u22122): Li\u2082O." },
        { q: "Formula of copper(I) chloride is:", a: "CuCl", d: ["CuCl\u2082", "Cu\u2082Cl", "CuCl\u2083"] as [string,string,string], exp: "Cu(+1) and Cl(\u22121): CuCl." },
        { q: "Formula of nickel(II) sulfate is:", a: "NiSO\u2084", d: ["Ni\u2082SO\u2084", "Ni(SO\u2084)\u2082", "NiSO\u2083"] as [string,string,string], exp: "Ni(+2) and SO\u2084\u00b2\u207b: NiSO\u2084." },
        { q: "Formula of lead(II) iodide is:", a: "PbI\u2082", d: ["PbI", "Pb\u2082I", "PbI\u2084"] as [string,string,string], exp: "Pb(+2) needs 2 I(\u22121)." },
        { q: "Formula of silver sulfide is:", a: "Ag\u2082S", d: ["AgS", "Ag\u2082S\u2082", "Ag\u2083S"] as [string,string,string], exp: "Ag(+1) and S(\u22122): Ag\u2082S." },
        { q: "Formula of manganese(II) oxide is:", a: "MnO", d: ["Mn\u2082O\u2083", "MnO\u2082", "Mn\u2083O\u2084"] as [string,string,string], exp: "Mn(+2) and O(\u22122): MnO." },
        { q: "Formula of cobalt(II) chloride is:", a: "CoCl\u2082", d: ["CoCl", "CoCl\u2083", "Co\u2082Cl\u2083"] as [string,string,string], exp: "Co(+2) and Cl(\u22121): CoCl\u2082." },
        { q: "Formula of chromium(III) chloride is:", a: "CrCl\u2083", d: ["CrCl\u2082", "Cr\u2082Cl\u2083", "CrCl"] as [string,string,string], exp: "Cr(+3) needs 3 Cl(\u22121)." },
        { q: "Formula of potassium permanganate is:", a: "KMnO\u2084", d: ["K\u2082MnO\u2084", "KMnO\u2083", "K\u2082Mn\u2082O\u2087"] as [string,string,string], exp: "K(+1) and MnO\u2084\u207b: KMnO\u2084." },
        { q: "Formula of ammonium chloride is:", a: "NH\u2084Cl", d: ["N\u2082H\u2084Cl", "NH\u2083Cl", "(NH\u2084)\u2082Cl"] as [string,string,string], exp: "NH\u2084\u207a(+1) and Cl(\u22121): NH\u2084Cl." },
      ] as const;
      const row = ionicPool[v % ionicPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "chemical bonding", "easy", seed
      );
    }

    if (pattern === 4) {
      // Chemical reactions — 25-entry pool
      const rxnPool = [
        { q: "Gas evolved when zinc reacts with dilute HCl is:", a: "hydrogen", d: ["oxygen", "nitrogen", "carbon dioxide"] as [string,string,string], exp: "Zn + 2HCl \u2192 ZnCl\u2082 + H\u2082\u2191." },
        { q: "Gas evolved when Na\u2082CO\u2083 reacts with HCl is:", a: "carbon dioxide", d: ["hydrogen", "oxygen", "chlorine"] as [string,string,string], exp: "Na\u2082CO\u2083 + 2HCl \u2192 2NaCl + H\u2082O + CO\u2082\u2191." },
        { q: "Gas evolved when NH\u2084Cl reacts with Ca(OH)\u2082 is:", a: "ammonia", d: ["hydrogen", "nitrogen", "HCl"] as [string,string,string], exp: "2NH\u2084Cl + Ca(OH)\u2082 \u2192 CaCl\u2082 + 2H\u2082O + 2NH\u2083\u2191." },
        { q: "Gas evolved when MnO\u2082 reacts with conc. HCl is:", a: "chlorine", d: ["hydrogen", "oxygen", "HCl"] as [string,string,string], exp: "MnO\u2082 + 4HCl \u2192 MnCl\u2082 + 2H\u2082O + Cl\u2082\u2191." },
        { q: "Product when NaOH reacts with HCl is:", a: "NaCl and water", d: ["Na\u2082O and water", "NaCl and H\u2082", "NaHCO\u2083"] as [string,string,string], exp: "NaOH + HCl \u2192 NaCl + H\u2082O." },
        { q: "Gas produced when Na reacts with water is:", a: "hydrogen", d: ["oxygen", "sodium oxide", "hydroxide gas"] as [string,string,string], exp: "2Na + 2H\u2082O \u2192 2NaOH + H\u2082\u2191." },
        { q: "Gas evolved when limestone reacts with dilute HCl is:", a: "carbon dioxide", d: ["hydrogen", "sulfur dioxide", "chlorine"] as [string,string,string], exp: "CaCO\u2083 + 2HCl \u2192 CaCl\u2082 + H\u2082O + CO\u2082\u2191." },
        { q: "Product when CaO (quicklime) reacts with water is:", a: "Ca(OH)\u2082", d: ["CaCO\u2083", "CaCl\u2082", "Ca(HCO\u2083)\u2082"] as [string,string,string], exp: "CaO + H\u2082O \u2192 Ca(OH)\u2082 (slaked lime)." },
        { q: "Substance formed when SO\u2083 dissolves in water is:", a: "H\u2082SO\u2084", d: ["H\u2082SO\u2083", "SO\u2082", "HSO\u2084\u207b"] as [string,string,string], exp: "SO\u2083 + H\u2082O \u2192 H\u2082SO\u2084." },
        { q: "Gas produced when aluminium reacts with NaOH solution is:", a: "hydrogen", d: ["oxygen", "chlorine", "ammonia"] as [string,string,string], exp: "2Al + 2NaOH + 2H\u2082O \u2192 2NaAlO\u2082 + 3H\u2082\u2191." },
        { q: "Gas produced when CaC\u2082 reacts with water is:", a: "acetylene (ethyne)", d: ["methane", "ethane", "propane"] as [string,string,string], exp: "CaC\u2082 + 2H\u2082O \u2192 Ca(OH)\u2082 + C\u2082H\u2082\u2191." },
        { q: "When excess CO\u2082 is passed through Ca(OH)\u2082, precipitate:", a: "dissolves (Ca(HCO\u2083)\u2082 forms)", d: ["remains unchanged", "turns yellow", "turns red"] as [string,string,string], exp: "CaCO\u2083 + CO\u2082 + H\u2082O \u2192 Ca(HCO\u2083)\u2082 (soluble)." },
        { q: "Reaction of K with water produces:", a: "KOH and H\u2082", d: ["K\u2082O and H\u2082O", "K\u2082O\u2082 and H\u2082", "KH and O\u2082"] as [string,string,string], exp: "2K + 2H\u2082O \u2192 2KOH + H\u2082\u2191." },
        { q: "Gas produced when Cu reacts with conc. H\u2082SO\u2084 is:", a: "SO\u2082", d: ["H\u2082", "CO\u2082", "SO\u2083"] as [string,string,string], exp: "Cu + 2H\u2082SO\u2084(conc.) \u2192 CuSO\u2084 + SO\u2082 + 2H\u2082O." },
        { q: "Lime water turns milky when CO\u2082 is passed because:", a: "CaCO\u2083 precipitates", d: ["Ca(OH)\u2082 dissolves", "CaO forms", "CO\u2082 reduces Ca(OH)\u2082"] as [string,string,string], exp: "CO\u2082 + Ca(OH)\u2082 \u2192 CaCO\u2083\u2193 + H\u2082O." },
        { q: "Product when P\u2082O\u2085 reacts with water is:", a: "H\u2083PO\u2084", d: ["H\u2083PO\u2083", "HPO\u2083", "H\u2084P\u2082O\u2087"] as [string,string,string], exp: "P\u2082O\u2085 + 3H\u2082O \u2192 2H\u2083PO\u2084." },
        { q: "White precipitate formed when AgNO\u2083 reacts with HCl is:", a: "AgCl", d: ["AgBr", "Ag\u2082O", "Ag\u2082S"] as [string,string,string], exp: "AgNO\u2083 + HCl \u2192 AgCl\u2193(white) + HNO\u2083." },
        { q: "Brown gas formed when Cu reacts with dil. HNO\u2083 is:", a: "NO", d: ["NO\u2082", "N\u2082O", "N\u2082"] as [string,string,string], exp: "3Cu + 8HNO\u2083(dil.) \u2192 3Cu(NO\u2083)\u2082 + 2NO\u2191 + 4H\u2082O." },
        { q: "Gas produced when iron reacts with steam is:", a: "hydrogen", d: ["oxygen", "CO\u2082", "N\u2082"] as [string,string,string], exp: "3Fe + 4H\u2082O \u2192 Fe\u2083O\u2084 + 4H\u2082." },
        { q: "Product when Na\u2082O\u2082 reacts with water is:", a: "NaOH and O\u2082", d: ["NaOH and H\u2082", "Na\u2082O and H\u2082O\u2082", "NaH and O\u2082"] as [string,string,string], exp: "2Na\u2082O\u2082 + 2H\u2082O \u2192 4NaOH + O\u2082." },
        { q: "Colour of copper sulfate solution is:", a: "blue", d: ["green", "colourless", "pink"] as [string,string,string], exp: "CuSO\u2084 solution is blue due to [Cu(H\u2082O)\u2084]\u00b2\u207a." },
        { q: "PbS precipitate colour with H\u2082S in lead acetate solution is:", a: "black", d: ["white", "yellow", "red"] as [string,string,string], exp: "Pb(CH\u2083COO)\u2082 + H\u2082S \u2192 PbS\u2193(black)." },
        { q: "Gas used to test for presence of unsaturation in organic compound:", a: "Br\u2082 water (bromine water)", d: ["H\u2082S", "NH\u2083", "Cl\u2082"] as [string,string,string], exp: "Bromine water decolourises with alkenes/alkynes." },
        { q: "Product of combustion of methane (complete) is:", a: "CO\u2082 and H\u2082O", d: ["CO and H\u2082O", "CO\u2082 and H\u2082", "C and H\u2082O"] as [string,string,string], exp: "CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O." },
        { q: "Aqua regia dissolves gold because:", a: "it is a powerful oxidising and complexing mixture", d: ["gold is a weak metal", "gold is soluble in HCl alone", "gold reacts with water"] as [string,string,string], exp: "Conc. HNO\u2083 + 3 conc. HCl oxidise and complex gold." },
      ] as const;
      const row = rxnPool[v % rxnPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "chemical reactions", "easy", seed
      );
    }

    if (pattern === 5) {
      // Acids/bases — 25-entry pool
      const acidPool = [
        { q: "Which is a strong acid?", a: "HCl", d: ["CH\u2083COOH", "H\u2082CO\u2083", "HF"] as [string,string,string], exp: "HCl ionises completely in water." },
        { q: "Which is a weak acid?", a: "CH\u2083COOH", d: ["HNO\u2083", "H\u2082SO\u2084", "HCl"] as [string,string,string], exp: "Acetic acid ionises partially." },
        { q: "pH of pure water at 25\u00b0C is:", a: "7", d: ["0", "14", "1"] as [string,string,string], exp: "Pure water [H\u207a]=[OH\u207b]=10\u207b\u2077; pH=7." },
        { q: "A solution with pH < 7 is:", a: "acidic", d: ["basic", "neutral", "amphoteric"] as [string,string,string], exp: "Acidic solutions have pH below 7." },
        { q: "Which is a strong base?", a: "NaOH", d: ["NH\u2084OH", "Cu(OH)\u2082", "Mg(OH)\u2082"] as [string,string,string], exp: "NaOH fully dissociates in water." },
        { q: "Blue litmus paper turns red in:", a: "acid", d: ["base", "neutral salt solution", "distilled water"] as [string,string,string], exp: "Acids turn blue litmus red." },
        { q: "Common name of NaHCO\u2083 is:", a: "baking soda", d: ["washing soda", "common salt", "lime water"] as [string,string,string], exp: "NaHCO\u2083 = baking soda." },
        { q: "Chemical formula of washing soda is:", a: "Na\u2082CO\u2083\u00b710H\u2082O", d: ["NaHCO\u2083", "NaOH", "Na\u2082SO\u2084"] as [string,string,string], exp: "Washing soda = Na\u2082CO\u2083\u00b710H\u2082O." },
        { q: "Which is an amphoteric oxide?", a: "Al\u2082O\u2083", d: ["CaO", "SO\u2082", "Na\u2082O"] as [string,string,string], exp: "Al\u2082O\u2083 reacts with both acids and bases." },
        { q: "Acid present in vinegar is:", a: "acetic acid", d: ["citric acid", "lactic acid", "tartaric acid"] as [string,string,string], exp: "Vinegar is 5\u20138% acetic acid (CH\u2083COOH)." },
        { q: "pH of 0.1 M HCl solution is:", a: "1", d: ["3", "7", "0"] as [string,string,string], exp: "[H\u207a]=0.1=10\u207b\u00b9; pH=1." },
        { q: "Acid that cannot be stored in glass bottles is:", a: "HF", d: ["HCl", "H\u2082SO\u2084", "HNO\u2083"] as [string,string,string], exp: "HF etches glass (SiO\u2082 + 4HF \u2192 SiF\u2084 + 2H\u2082O)." },
        { q: "Common name of Ca(OH)\u2082 is:", a: "slaked lime", d: ["quicklime", "limestone", "marble"] as [string,string,string], exp: "Ca(OH)\u2082 = slaked lime." },
        { q: "Acid rain is caused mainly by:", a: "SO\u2082 and NO\u2082", d: ["CO\u2082 and H\u2082O", "O\u2083 and Cl\u2082", "NH\u2083 and HF"] as [string,string,string], exp: "SO\u2082 and NO\u2082 dissolve in rain \u2192 H\u2082SO\u2084 and HNO\u2083." },
        { q: "Indicator that turns pink in base is:", a: "phenolphthalein", d: ["methyl orange", "litmus", "starch"] as [string,string,string], exp: "Phenolphthalein: colourless in acid, pink in base." },
        { q: "Which salt hydrolyses to give acidic solution?", a: "NH\u2084Cl", d: ["NaCl", "Na\u2082CO\u2083", "CH\u2083COONa"] as [string,string,string], exp: "NH\u2084\u207a hydrolyses: NH\u2084\u207a+H\u2082O \u21cc NH\u2083+H\u2083O\u207a." },
        { q: "Concentrated H\u2082SO\u2084 acts as:", a: "dehydrating agent", d: ["reducing agent", "bleaching agent alone", "weak acid"] as [string,string,string], exp: "Conc. H\u2082SO\u2084 is a powerful dehydrating agent." },
        { q: "Which acid is used in car batteries?", a: "H\u2082SO\u2084", d: ["HCl", "HNO\u2083", "H\u2083PO\u2084"] as [string,string,string], exp: "Lead-acid batteries use dilute H\u2082SO\u2084." },
        { q: "Formula of caustic soda is:", a: "NaOH", d: ["Na\u2082O", "NaHCO\u2083", "Na\u2082CO\u2083"] as [string,string,string], exp: "Caustic soda = NaOH." },
        { q: "Which is a neutral salt?", a: "NaCl", d: ["Na\u2082CO\u2083", "NH\u2084Cl", "CH\u2083COONa"] as [string,string,string], exp: "NaCl (strong acid + strong base) gives neutral solution." },
        { q: "Formula of bleaching powder is:", a: "Ca(OCl)Cl", d: ["CaO", "CaCl\u2082", "Ca(ClO\u2083)\u2082"] as [string,string,string], exp: "Bleaching powder = Ca(OCl)Cl." },
        { q: "Neutralisation of acid with base always produces:", a: "salt and water", d: ["only salt", "only water", "H\u2082 gas"] as [string,string,string], exp: "Acid + Base \u2192 Salt + Water." },
        { q: "A buffer solution resists change in:", a: "pH", d: ["temperature", "colour", "volume"] as [string,string,string], exp: "Buffers maintain nearly constant pH." },
        { q: "Which property increases across a period?", a: "electronegativity", d: ["atomic radius", "metallic character", "ionisation energy decreases"] as [string,string,string], exp: "Electronegativity increases across a period." },
        { q: "Antacid tablets contain:", a: "Mg(OH)\u2082 or Al(OH)\u2083", d: ["HCl", "NaHSO\u2084", "Na\u2082CO\u2083 solution"] as [string,string,string], exp: "Antacids are mild bases that neutralise excess stomach acid." },
      ] as const;
      const row = acidPool[v % acidPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "acids and bases", "easy", seed
      );
    }

    if (pattern === 6) {
      // Organic chemistry — 25-entry pool
      const orgPool = [
        { q: "Functional group in ethanol is:", a: "\u2212OH (hydroxyl)", d: ["\u2212COOH (carboxyl)", "\u2212CHO (aldehyde)", "\u2212CO\u2212 (ketone)"] as [string,string,string], exp: "C\u2082H\u2085OH has a hydroxyl group." },
        { q: "Functional group in ethanoic acid is:", a: "\u2212COOH (carboxyl)", d: ["\u2212OH (hydroxyl)", "\u2212CO\u2212 (ketone)", "\u2212NH\u2082 (amine)"] as [string,string,string], exp: "CH\u2083COOH has a carboxyl group." },
        { q: "Functional group in propanone is:", a: "\u2212CO\u2212 (ketone)", d: ["\u2212CHO (aldehyde)", "\u2212COOH", "\u2212OH"] as [string,string,string], exp: "Propanone (CH\u2083COCH\u2083) is a ketone." },
        { q: "Functional group in methanal is:", a: "\u2212CHO (aldehyde)", d: ["\u2212CO\u2212 (ketone)", "\u2212COOH", "\u2212OH"] as [string,string,string], exp: "HCHO is an aldehyde." },
        { q: "Functional group in methylamine is:", a: "\u2212NH\u2082 (amine)", d: ["\u2212OH", "\u2212NO\u2082 (nitro)", "\u2212COOH"] as [string,string,string], exp: "CH\u2083NH\u2082 has an amine group." },
        { q: "IUPAC name of CH\u2083OH is:", a: "methanol", d: ["ethanol", "propanol", "methanal"] as [string,string,string], exp: "CH\u2083OH is methanol." },
        { q: "IUPAC name of CH\u2083CHO is:", a: "ethanal", d: ["ethanol", "propanone", "methanol"] as [string,string,string], exp: "CH\u2083CHO is ethanal (acetaldehyde)." },
        { q: "IUPAC name of CH\u2083COCH\u2083 is:", a: "propan-2-one", d: ["propan-1-one", "propanal", "propanol"] as [string,string,string], exp: "CH\u2083COCH\u2083 (acetone) = propan-2-one." },
        { q: "Homologous series with formula C\u2099H\u2082\u2099\u208a\u2082 is:", a: "alkanes", d: ["alkenes", "alkynes", "arenes"] as [string,string,string], exp: "Alkanes: C\u2099H\u2082\u2099\u208a\u2082 (fully saturated)." },
        { q: "General formula of alkenes is:", a: "C\u2099H\u2082\u2099", d: ["C\u2099H\u2082\u2099\u208a\u2082", "C\u2099H\u2082\u2099\u208b\u2082", "C\u2099H\u2099"] as [string,string,string], exp: "Alkenes: C\u2099H\u2082\u2099 (one double bond)." },
        { q: "General formula of alkynes is:", a: "C\u2099H\u2082\u2099\u208b\u2082", d: ["C\u2099H\u2082\u2099\u208a\u2082", "C\u2099H\u2082\u2099", "C\u2099H\u2099"] as [string,string,string], exp: "Alkynes: C\u2099H\u2082\u2099\u208b\u2082 (one triple bond)." },
        { q: "Product of fermentation of glucose is:", a: "ethanol and CO\u2082", d: ["acetic acid and H\u2082", "lactic acid", "methanol and CO"] as [string,string,string], exp: "C\u2086H\u2081\u2082O\u2086 \u2192 2C\u2082H\u2085OH + 2CO\u2082 (yeast)." },
        { q: "Reaction of carboxylic acid + alcohol (acid catalyst) gives:", a: "ester", d: ["ether", "aldehyde", "alkene"] as [string,string,string], exp: "RCOOH + R\u2019OH \u21cc RCOOR\u2019 + H\u2082O (esterification)." },
        { q: "Product of dehydration of ethanol at 170\u00b0C is:", a: "ethene", d: ["ethane", "diethyl ether", "acetaldehyde"] as [string,string,string], exp: "C\u2082H\u2085OH \u2192(H\u2082SO\u2084, 170\u00b0C)\u2192 CH\u2082=CH\u2082 + H\u2082O." },
        { q: "Fehling\u2019s solution gives brick-red precipitate with:", a: "aldehydes", d: ["ketones", "carboxylic acids", "esters"] as [string,string,string], exp: "Aldehydes reduce Cu\u00b2\u207a to Cu\u2082O (brick-red)." },
        { q: "Tollens\u2019 reagent (silver mirror test) is given by:", a: "aldehydes", d: ["ketones", "alcohols", "esters"] as [string,string,string], exp: "Aldehydes reduce [Ag(NH\u2083)\u2082]\u207a to silver mirror." },
        { q: "Reagent that converts alkene to alkane is:", a: "H\u2082/Ni (hydrogenation)", d: ["Cl\u2082/h\u03bd", "KMnO\u2084/H\u207a", "HBr alone"] as [string,string,string], exp: "Catalytic hydrogenation: alkene + H\u2082 \u2192 alkane." },
        { q: "Functional group that makes a compound an ester is:", a: "\u2212COO\u2212 (ester linkage)", d: ["\u2212COOH", "\u2212OH", "\u2212CO\u2212"] as [string,string,string], exp: "Esters have \u2212COO\u2212 linkage." },
        { q: "IUPAC name of CH\u2083CH\u2082OH is:", a: "ethanol", d: ["methanol", "propanol", "ethanoic acid"] as [string,string,string], exp: "CH\u2083CH\u2082OH is ethanol." },
        { q: "Aldol condensation requires compounds with:", a: "\u03b1-hydrogen atoms", d: ["no hydrogen atoms", "aromatic rings only", "ester groups only"] as [string,string,string], exp: "Aldol condensation requires \u03b1-H adjacent to carbonyl." },
        { q: "Functional group in nitrobenzene is:", a: "\u2212NO\u2082 (nitro)", d: ["\u2212NH\u2082 (amine)", "\u2212OH", "\u2212COOH"] as [string,string,string], exp: "C\u2086H\u2085NO\u2082 has a nitro group." },
        { q: "Saponification reaction: ester + alkali gives:", a: "alcohol + soap (salt of fatty acid)", d: ["ester + acid \u2192 alcohol", "alcohol + acid \u2192 ester", "alkene + H\u2082O"] as [string,string,string], exp: "RCOOR\u2019 + NaOH \u2192 RCOONa + R\u2019OH." },
        { q: "Product of oxidation of primary alcohol using K\u2082Cr\u2082O\u2087/H\u207a is:", a: "aldehyde (then carboxylic acid)", d: ["ketone", "ester", "ether"] as [string,string,string], exp: "Primary alcohol \u2192 aldehyde \u2192 carboxylic acid on oxidation." },
        { q: "Functional group in chloroethane is:", a: "\u2212Cl (halo)", d: ["\u2212OH", "\u2212NH\u2082", "\u2212COOH"] as [string,string,string], exp: "C\u2082H\u2085Cl is a haloalkane." },
        { q: "Compound formed by treating carboxylic acid with SOCl\u2082 is:", a: "acid chloride", d: ["ester", "anhydride", "amide"] as [string,string,string], exp: "RCOOH + SOCl\u2082 \u2192 RCOCl (acid chloride) + SO\u2082 + HCl." },
      ] as const;
      const row = orgPool[v % orgPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "organic chemistry", "medium", seed
      );
    }

    if (pattern === 7) {
      // Periodic table — 25-entry pool
      const perPool = [
        { q: "Which element belongs to Group 1 (alkali metals)?", a: "Potassium", d: ["Calcium", "Magnesium", "Aluminium"] as [string,string,string], exp: "K is in Group 1." },
        { q: "Atomic number of carbon is:", a: "6", d: ["12", "14", "8"] as [string,string,string], exp: "Carbon has 6 protons." },
        { q: "Which is a noble gas?", a: "Argon", d: ["Nitrogen", "Hydrogen", "Fluorine"] as [string,string,string], exp: "Argon (Group 18) is a noble gas." },
        { q: "Element with symbol Fe is:", a: "iron", d: ["fluorine", "francium", "fermium"] as [string,string,string], exp: "Fe from Latin \u2018ferrum\u2019 (iron)." },
        { q: "Atomic number of sodium is:", a: "11", d: ["23", "12", "10"] as [string,string,string], exp: "Na has 11 protons." },
        { q: "Which element has electronic configuration 2,8,7?", a: "Chlorine", d: ["Fluorine", "Bromine", "Neon"] as [string,string,string], exp: "2+8+7=17 protons \u2192 Cl." },
        { q: "First element of the periodic table is:", a: "Hydrogen", d: ["Helium", "Lithium", "Carbon"] as [string,string,string], exp: "Hydrogen has atomic number 1." },
        { q: "Transition metals belong to which block?", a: "d-block", d: ["s-block", "p-block", "f-block"] as [string,string,string], exp: "Transition elements have partly-filled d orbitals." },
        { q: "Atomic mass of oxygen is approximately:", a: "16", d: ["8", "32", "14"] as [string,string,string], exp: "Oxygen atomic mass \u2248 16 u." },
        { q: "How many periods are in the modern periodic table?", a: "7", d: ["5", "6", "8"] as [string,string,string], exp: "Modern periodic table has 7 periods." },
        { q: "Which is a metalloid?", a: "Silicon", d: ["Sulphur", "Phosphorus", "Selenium"] as [string,string,string], exp: "Silicon is a common metalloid." },
        { q: "Halogens belong to which group?", a: "Group 17", d: ["Group 1", "Group 16", "Group 18"] as [string,string,string], exp: "Halogens are Group 17 elements." },
        { q: "Lanthanides and actinides belong to:", a: "f-block", d: ["d-block", "p-block", "s-block"] as [string,string,string], exp: "f-block elements have partly-filled f orbitals." },
        { q: "Element with symbol Au is:", a: "gold", d: ["aluminium", "argentum (Ag)", "arsenic"] as [string,string,string], exp: "Au from Latin \u2018aurum\u2019 (gold)." },
        { q: "Atomic number of nitrogen is:", a: "7", d: ["14", "8", "6"] as [string,string,string], exp: "N has 7 protons." },
        { q: "Which metal is liquid at room temperature?", a: "Mercury", d: ["Tin", "Lead", "Bismuth"] as [string,string,string], exp: "Mercury (Hg) is liquid at room temperature." },
        { q: "The most abundant element in Earth\u2019s crust is:", a: "Oxygen", d: ["Silicon", "Aluminium", "Iron"] as [string,string,string], exp: "Oxygen (\u223c46%) is most abundant in Earth\u2019s crust." },
        { q: "Element with highest melting point among all elements is:", a: "Tungsten (W)", d: ["Iron", "Carbon", "Osmium"] as [string,string,string], exp: "W has highest melting point (\u223c3422\u00b0C)." },
        { q: "Atomic number of aluminium is:", a: "13", d: ["27", "12", "14"] as [string,string,string], exp: "Al has 13 protons." },
        { q: "Electropositive character increases down a group because:", a: "ionisation energy decreases", d: ["atomic size decreases", "electronegativity increases", "proton number increases"] as [string,string,string], exp: "Lower IE \u2192 easier electron loss \u2192 more electropositive." },
        { q: "Which element in Period 2 has 2 valence electrons?", a: "Beryllium", d: ["Magnesium", "Lithium", "Boron"] as [string,string,string], exp: "Be (Z=4): config 2,2 \u2192 Period 2, Group 2." },
        { q: "Which pair is in the same group of the periodic table?", a: "Na and K", d: ["Na and Mg", "K and Ca", "Li and Be"] as [string,string,string], exp: "Na and K are both in Group 1." },
        { q: "Atomic number of calcium is:", a: "20", d: ["40", "19", "21"] as [string,string,string], exp: "Ca has 20 protons." },
        { q: "Which element has the highest electronegativity?", a: "Fluorine", d: ["Oxygen", "Chlorine", "Nitrogen"] as [string,string,string], exp: "Fluorine has highest electronegativity (Pauling scale: 3.98)." },
        { q: "Symbol of silver is:", a: "Ag", d: ["Si", "Au", "Sr"] as [string,string,string], exp: "Ag from Latin \u2018argentum\u2019 (silver)." },
      ] as const;
      const row = perPool[v % perPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "periodic table", "easy", seed
      );
    }

    if (pattern === 8) {
      // Mole concept — vary both compound and moles using v
      const compounds = ["H\u2082O","CO\u2082","NH\u2083","HCl","H\u2082SO\u2084","NaOH","NaCl","CO","O\u2082","Cl\u2082","CaO","CH\u2084","SO\u2082","NO\u2082","CaCO\u2083"] as const;
      const molarMasses = [18, 44, 17, 36.5, 98, 40, 58.5, 28, 32, 71, 56, 16, 64, 46, 100] as const;
      const molesArr = [1, 2, 3, 4, 5] as const;
      const ci = v % compounds.length;
      const mi = v % molesArr.length;
      const moles = molesArr[mi];
      const mm = molarMasses[ci];
      const mass = mm * moles;
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        `Number of moles in ${mass} g of ${compounds[ci]} (M = ${mm} g/mol) is:`,
        `${moles}`,
        [`${moles + 1}`, `${moles - 1 > 0 ? moles - 1 : moles + 2}`, `${moles + 1.5}`],
        `n = mass/M = ${mass}/${mm} = ${moles} mol.`,
        "mole concept", "medium", seed
      );
    }

    if (pattern === 9) {
      // Atomic structure — 25-entry pool
      const atomPool = [
        { q: "Electronic configuration 2,8,1 corresponds to:", a: "Sodium (Na)", d: ["Potassium (K)", "Magnesium (Mg)", "Lithium (Li)"] as [string,string,string], exp: "2+8+1=11 \u2192 Na." },
        { q: "Electronic configuration 2,8,8 corresponds to:", a: "Argon (Ar)", d: ["Chlorine (Cl)", "Sulphur (S)", "Potassium (K)"] as [string,string,string], exp: "2+8+8=18 \u2192 Ar." },
        { q: "Maximum electrons in d-subshell is:", a: "10", d: ["2", "6", "14"] as [string,string,string], exp: "d has 5 orbitals \u00d7 2 = 10 electrons." },
        { q: "Quantum number describing orbital shape is:", a: "azimuthal (l)", d: ["principal (n)", "magnetic (m)", "spin (s)"] as [string,string,string], exp: "l determines orbital shape." },
        { q: "Number of orbitals in p-subshell is:", a: "3", d: ["1", "5", "7"] as [string,string,string], exp: "p has 3 orbitals: p\u2093, p\u1d67, p\u1d69." },
        { q: "Electron configuration of Na\u207a is:", a: "1s\u00b22s\u00b22p\u2076", d: ["1s\u00b22s\u00b22p\u2076 3s\u00b9", "1s\u00b22s\u00b22p\u2076 3s\u00b2", "1s\u00b22s\u00b22p\u2075"] as [string,string,string], exp: "Na loses 1e\u207b \u2192 10 electrons (Ne config)." },
        { q: "Maximum electrons in shell n=3 is:", a: "18", d: ["8", "6", "32"] as [string,string,string], exp: "Max = 2n\u00b2 = 18." },
        { q: "Electron configuration of Cl\u207b is:", a: "1s\u00b22s\u00b22p\u2076 3s\u00b23p\u2076", d: ["1s\u00b22s\u00b22p\u2076 3s\u00b23p\u2075", "1s\u00b22s\u00b22p\u2076 3s\u00b23p\u2076 3d\u00b9", "1s\u00b22s\u00b22p\u2076 3s\u00b2"] as [string,string,string], exp: "Cl gains 1e\u207b \u2192 18 electrons (Ar config)." },
        { q: "Atomic number of hydrogen is:", a: "1", d: ["2", "0", "3"] as [string,string,string], exp: "H has 1 proton." },
        { q: "Mass number of atom = protons +", a: "neutrons", d: ["electrons", "protons only", "electrons and neutrons"] as [string,string,string], exp: "A = Z + N (neutrons)." },
        { q: "Isotopes are atoms with same:", a: "atomic number but different mass number", d: ["mass number but different Z", "same neutrons", "same A and Z"] as [string,string,string], exp: "Isotopes: same Z, different A." },
        { q: "Shape of s-orbital is:", a: "spherical", d: ["dumbbell", "clover-leaf", "linear"] as [string,string,string], exp: "s-orbital is spherically symmetric." },
        { q: "Aufbau principle: electrons fill orbitals in order of:", a: "increasing energy", d: ["decreasing energy", "random order", "n only"] as [string,string,string], exp: "Electrons fill lowest-energy orbitals first." },
        { q: "Hund\u2019s rule: electrons occupy degenerate orbitals:", a: "one each before pairing", d: ["in pairs first", "randomly", "starting from highest energy"] as [string,string,string], exp: "Maximum spin multiplicity (Hund\u2019s rule)." },
        { q: "Pauli exclusion principle states:", a: "no two electrons in an atom have same four quantum numbers", d: ["electrons repel each other", "orbitals fill in order of energy", "each orbital holds one electron only"] as [string,string,string], exp: "Each electron has unique set of n, l, m, s." },
        { q: "De Broglie wavelength is:", a: "h/mv", d: ["mv/h", "h\u00b7mv", "m/hv"] as [string,string,string], exp: "\u03bb = h/p = h/(mv)." },
        { q: "Photoelectric effect proves light has:", a: "particle nature (photons)", d: ["wave nature only", "both wave and particle simultaneously", "no mass"] as [string,string,string], exp: "Photoelectric effect demonstrated photon (particle) nature." },
        { q: "Electron configuration of O\u00b2\u207b is:", a: "1s\u00b22s\u00b22p\u2076", d: ["1s\u00b22s\u00b22p\u2074", "1s\u00b22s\u00b22p\u2075", "1s\u00b22s\u00b22p\u2076 3s\u00b9"] as [string,string,string], exp: "O gains 2e\u207b \u2192 10 electrons (Ne config)." },
        { q: "Electronic configuration 2,8,2 corresponds to:", a: "Magnesium", d: ["Calcium", "Beryllium", "Zinc"] as [string,string,string], exp: "2+8+2=12 \u2192 Mg." },
        { q: "Radial nodes in 2s orbital:", a: "1", d: ["0", "2", "3"] as [string,string,string], exp: "Radial nodes = n \u2212 l \u2212 1 = 2\u22120\u22121 = 1." },
        { q: "Heisenberg uncertainty principle:", a: "position and momentum cannot both be measured precisely simultaneously", d: ["electrons move in fixed orbits", "energy is conserved", "photons have mass"] as [string,string,string], exp: "\u0394x\u00b7\u0394p \u2265 h/(4\u03c0)." },
        { q: "3d subshell electrons of Fe\u00b2\u207a (Z=26) is:", a: "6", d: ["4", "8", "5"] as [string,string,string], exp: "Fe: [Ar]3d\u2076 4s\u00b2; Fe\u00b2\u207a: [Ar]3d\u2076." },
        { q: "Bohr model accurately explains atomic spectra of:", a: "hydrogen-like atoms", d: ["all atoms", "all metals", "noble gases only"] as [string,string,string], exp: "Bohr model works for H-like (one-electron) atoms." },
        { q: "Electronic configuration 2,8,18,1 corresponds to:", a: "Copper (Cu, Z=29)", d: ["Zinc (Zn)", "Nickel (Ni)", "Iron (Fe)"] as [string,string,string], exp: "2+8+18+1=29 \u2192 Cu." },
        { q: "Electronic configuration 2,2 corresponds to:", a: "Beryllium (Be)", d: ["Lithium (Li)", "Boron (B)", "Helium (He)"] as [string,string,string], exp: "2+2=4 \u2192 Be (Z=4)." },
      ] as const;
      const row = atomPool[v % atomPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "atomic structure", "medium", seed
      );
    }

    if (pattern === 10) {
      // Chemical bonding — 25-entry pool
      const bondPool = [
        { q: "Which is a covalent compound?", a: "Water (H\u2082O)", d: ["NaCl", "MgO", "CaCl\u2082"] as [string,string,string], exp: "Water has covalent O\u2212H bonds." },
        { q: "Bond angle in water molecule is approximately:", a: "104.5\u00b0", d: ["180\u00b0", "120\u00b0", "109.5\u00b0"] as [string,string,string], exp: "Water is V-shaped; bond angle \u2248 104.5\u00b0." },
        { q: "Shape of CO\u2082 molecule is:", a: "linear", d: ["bent", "trigonal planar", "tetrahedral"] as [string,string,string], exp: "CO\u2082 is linear (O=C=O)." },
        { q: "Type of bond in NaCl is:", a: "ionic", d: ["covalent", "metallic", "hydrogen"] as [string,string,string], exp: "NaCl forms by electrostatic attraction (ionic bond)." },
        { q: "Which molecule has a triple bond?", a: "N\u2082", d: ["H\u2082O", "NH\u2083", "O\u2082"] as [string,string,string], exp: "N\u2082 has a triple bond (N\u2261N)." },
        { q: "Hybridisation of carbon in methane (CH\u2084) is:", a: "sp\u00b3", d: ["sp\u00b2", "sp", "dsp\u00b2"] as [string,string,string], exp: "CH\u2084 is tetrahedral; C is sp\u00b3 hybridised." },
        { q: "Shape of BF\u2083 is:", a: "trigonal planar", d: ["tetrahedral", "linear", "pyramidal"] as [string,string,string], exp: "3 bond pairs, no lone pairs \u2192 trigonal planar." },
        { q: "Hybridisation of carbon in ethene (C\u2082H\u2084) is:", a: "sp\u00b2", d: ["sp\u00b3", "sp", "dsp\u00b2"] as [string,string,string], exp: "C=C double bond; each C is sp\u00b2 hybridised." },
        { q: "Shape of NH\u2083 is:", a: "trigonal pyramidal", d: ["tetrahedral", "trigonal planar", "bent"] as [string,string,string], exp: "3 bond pairs + 1 lone pair \u2192 trigonal pyramidal." },
        { q: "Which compound shows hydrogen bonding?", a: "HF", d: ["HCl", "HBr", "HI"] as [string,string,string], exp: "HF has strong H-bonding (high electronegativity of F)." },
        { q: "Electronegativity order: F, O, N, C is:", a: "F > O > N > C", d: ["C > N > O > F", "O > F > N > C", "N > O > C > F"] as [string,string,string], exp: "Electronegativity: F > O > N > C." },
        { q: "Bond order in O\u2082 is:", a: "2", d: ["1", "3", "1.5"] as [string,string,string], exp: "O=O double bond; bond order = 2." },
        { q: "Which molecule is polar?", a: "HCl", d: ["Cl\u2082", "N\u2082", "CO\u2082"] as [string,string,string], exp: "HCl has a net dipole moment \u2192 polar." },
        { q: "Hybridisation of carbon in ethyne (C\u2082H\u2082) is:", a: "sp", d: ["sp\u00b2", "sp\u00b3", "dsp"] as [string,string,string], exp: "C\u2261C triple bond; each C is sp hybridised." },
        { q: "Number of sigma bonds in ethane (C\u2082H\u2086) is:", a: "7", d: ["6", "8", "5"] as [string,string,string], exp: "C\u2013C (1) + 6 C\u2013H = 7 \u03c3 bonds." },
        { q: "Bond angle in methane (CH\u2084) is:", a: "109.5\u00b0", d: ["90\u00b0", "120\u00b0", "180\u00b0"] as [string,string,string], exp: "Tetrahedral CH\u2084: 109.5\u00b0." },
        { q: "Ionic bond typically forms between:", a: "metal and non-metal", d: ["two non-metals", "two metals", "metal and metalloid"] as [string,string,string], exp: "Ionic bonds form between metals (+) and non-metals (\u2212)." },
        { q: "Which molecule is non-polar despite having polar bonds?", a: "CCl\u2084", d: ["HCl", "H\u2082O", "NH\u2083"] as [string,string,string], exp: "CCl\u2084 is symmetric (tetrahedral); dipoles cancel." },
        { q: "Coordinate (dative) bond: both electrons donated by:", a: "one atom", d: ["each atom donates one", "ionic charges", "shared equally"] as [string,string,string], exp: "Dative bond: one atom donates both bonding electrons." },
        { q: "Bond order in N\u2082 is:", a: "3", d: ["2", "1", "2.5"] as [string,string,string], exp: "N\u2261N triple bond; bond order = 3." },
        { q: "London dispersion forces are present in:", a: "all molecules", d: ["polar molecules only", "ionic compounds only", "metals only"] as [string,string,string], exp: "London forces arise from temporary dipoles in all molecules." },
        { q: "Which has the shortest bond length?", a: "triple bond", d: ["single bond", "double bond", "ionic bond"] as [string,string,string], exp: "Bond order \u2191 \u2192 bond length \u2193." },
        { q: "Bond formed by sharing of electrons is:", a: "covalent bond", d: ["ionic bond", "metallic bond", "hydrogen bond"] as [string,string,string], exp: "Covalent bonds involve electron sharing." },
        { q: "Force binding atoms in a metallic lattice is:", a: "metallic bond (electron sea)", d: ["ionic attraction", "covalent bond", "van der Waals"] as [string,string,string], exp: "Delocalised electrons form metallic bonds." },
        { q: "Number of lone pairs on oxygen in H\u2082O is:", a: "2", d: ["0", "1", "3"] as [string,string,string], exp: "O has 6 valence electrons; 2 used in bonds, 4 in 2 lone pairs." },
      ] as const;
      const row = bondPool[v % bondPool.length];
      return createComedkQuestion(
        `comedk-set${setNumber}-chem-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "chemical bonding", "easy", seed
      );
    }

    // pattern 11 (default): common compounds — 25-entry pool
    const compPool = [
      { q: "Common name of NaHCO\u2083 is:", a: "baking soda", d: ["washing soda", "bleaching powder", "quicklime"] as [string,string,string], exp: "NaHCO\u2083 = baking soda." },
      { q: "Chemical name of common salt (NaCl) is:", a: "sodium chloride", d: ["sodium carbonate", "sodium hydroxide", "sodium sulfate"] as [string,string,string], exp: "NaCl = sodium chloride." },
      { q: "Chemical formula of plaster of Paris is:", a: "CaSO\u2084\u00b7\u00bdH\u2082O", d: ["CaSO\u2084\u00b72H\u2082O", "CaSO\u2084", "CaO"] as [string,string,string], exp: "Plaster of Paris = calcium sulfate hemihydrate." },
      { q: "Gas used in fire extinguishers is:", a: "CO\u2082", d: ["N\u2082", "O\u2082", "Cl\u2082"] as [string,string,string], exp: "CO\u2082 smothers fire by displacing oxygen." },
      { q: "Colour of hydrated copper sulfate (CuSO\u2084\u00b75H\u2082O) crystals is:", a: "blue", d: ["green", "white", "yellow"] as [string,string,string], exp: "Hydrated copper sulfate is blue." },
      { q: "Rust is chemically:", a: "Fe\u2082O\u2083\u00b7xH\u2082O", d: ["FeO", "Fe\u2083O\u2084", "FeSO\u2084"] as [string,string,string], exp: "Rust = hydrated iron(III) oxide." },
      { q: "Dry ice is:", a: "solid CO\u2082", d: ["solid N\u2082", "solid H\u2082O (below 0\u00b0C)", "solid SO\u2082"] as [string,string,string], exp: "Dry ice = solid carbon dioxide." },
      { q: "Lime water turns milky when CO\u2082 is passed due to formation of:", a: "CaCO\u2083", d: ["Ca(OH)\u2082 dissolves", "CaO", "Ca(HCO\u2083)\u2082"] as [string,string,string], exp: "CO\u2082 + Ca(OH)\u2082 \u2192 CaCO\u2083\u2193 + H\u2082O." },
      { q: "Galvanisation is coating iron with:", a: "zinc", d: ["tin", "copper", "chromium"] as [string,string,string], exp: "Galvanised iron is coated with Zn to prevent rusting." },
      { q: "Chemical name of marble is:", a: "calcium carbonate", d: ["calcium oxide", "calcium sulfate", "calcium silicate"] as [string,string,string], exp: "Marble = CaCO\u2083." },
      { q: "Colour of anhydrous copper sulfate (CuSO\u2084) is:", a: "white", d: ["blue", "green", "yellow"] as [string,string,string], exp: "Anhydrous CuSO\u2084 is white; turns blue on absorbing water." },
      { q: "Laughing gas is:", a: "N\u2082O", d: ["NO", "NO\u2082", "N\u2082"] as [string,string,string], exp: "Laughing gas = nitrous oxide (N\u2082O)." },
      { q: "Aqua regia is a mixture of:", a: "conc. HCl and conc. HNO\u2083 (3:1)", d: ["conc. H\u2082SO\u2084 and HNO\u2083", "conc. HCl and H\u2082SO\u2084", "dilute HNO\u2083 and HCl"] as [string,string,string], exp: "Aqua regia = 3 parts HCl : 1 part HNO\u2083." },
      { q: "Chemical formula of gypsum is:", a: "CaSO\u2084\u00b72H\u2082O", d: ["CaSO\u2084\u00b7\u00bdH\u2082O", "CaSO\u2084", "CaCO\u2083"] as [string,string,string], exp: "Gypsum = calcium sulfate dihydrate." },
      { q: "Drying agent used in lab is:", a: "anhydrous CaCl\u2082", d: ["NaCl", "KCl", "NH\u2084Cl"] as [string,string,string], exp: "Anhydrous CaCl\u2082 absorbs moisture (desiccant)." },
      { q: "Hypo (sodium thiosulfate) is used in photography to:", a: "fix the image (remove unexposed AgBr)", d: ["develop the image", "wash the film", "sensitise the film"] as [string,string,string], exp: "Na\u2082S\u2082O\u2083 dissolves unreacted AgBr (fixing)." },
      { q: "Philosopher\u2019s wool is:", a: "ZnO (white powder)", d: ["MgO", "Al\u2082O\u2083", "CaO"] as [string,string,string], exp: "Zinc oxide forms white fluffy powder = philosopher\u2019s wool." },
      { q: "Gas used in electric bulbs to prevent filament burning is:", a: "Argon (or N\u2082)", d: ["CO\u2082", "O\u2082", "H\u2082"] as [string,string,string], exp: "Ar or N\u2082 is inert and prevents tungsten oxidation." },
      { q: "Chemical name of quicklime is:", a: "calcium oxide", d: ["calcium carbonate", "calcium hydroxide", "calcium chloride"] as [string,string,string], exp: "Quicklime = CaO." },
      { q: "Compound used as antiseptic:", a: "H\u2082O\u2082 (dilute 3%)", d: ["H\u2082SO\u2084", "HNO\u2083", "conc. HCl"] as [string,string,string], exp: "Dilute H\u2082O\u2082 (3%) is used as an antiseptic." },
      { q: "Greenhouse gas produced mainly from fossil fuel combustion is:", a: "CO\u2082", d: ["O\u2082", "N\u2082", "H\u2082"] as [string,string,string], exp: "CO\u2082 is the primary greenhouse gas from human activity." },
      { q: "Formula of washing soda is:", a: "Na\u2082CO\u2083\u00b710H\u2082O", d: ["NaHCO\u2083", "Na\u2082CO\u2083 (anhydrous)", "NaOH\u00b710H\u2082O"] as [string,string,string], exp: "Washing soda = Na\u2082CO\u2083\u00b710H\u2082O." },
      { q: "Magnesia is:", a: "MgO", d: ["Mg(OH)\u2082", "MgSO\u2084", "MgCO\u2083"] as [string,string,string], exp: "Magnesia = magnesium oxide (MgO)." },
      { q: "Substance used to test for starch is:", a: "iodine solution", d: ["Fehling\u2019s solution", "Tollens\u2019 reagent", "bromine water"] as [string,string,string], exp: "Iodine turns blue-black with starch." },
      { q: "Chemical name of slaked lime is:", a: "calcium hydroxide", d: ["calcium oxide", "calcium carbonate", "calcium sulfate"] as [string,string,string], exp: "Slaked lime = Ca(OH)\u2082." },
    ] as const;
    const row = compPool[v % compPool.length];
    return createComedkQuestion(
      `comedk-set${setNumber}-chem-${qNo}`,
      row.q, row.a, row.d, row.exp,
      "common compounds", "easy", seed
    );
  });
}

function normalizeQuestionKey(question: string): string {
  return question.replace(/\s+/g, " ").trim().toLowerCase();
}

function hasDuplicateOptions(question: PracticeQuestion): boolean {
  const normalized = question.options.map((option) => option.text.trim().toLowerCase());
  return new Set(normalized).size !== normalized.length;
}

function buildComedkChemistryBank(): PracticeQuestion[] {
  const rawBank = Array.from({ length: 5 }, (_, index) =>
    createComedkChemistryQuestionsLegacy(index + 1)
  ).flat();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Chemistry bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_CHEMISTRY_BANK = buildComedkChemistryBank();

function createComedkChemistryQuestions(setNumber: number): PracticeQuestion[] {
  const start = (setNumber - 1) * 60;
  const slice = COMEDK_CHEMISTRY_BANK.slice(start, start + 60);

  return slice.map((question, index) => ({
    ...question,
    id: `comedk-set${setNumber}-chem-${index + 1}`,
  }));
}

function createComedkSet6MathQuestionsLegacy(): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 15;
    const occ = Math.floor(index / 15); // 0–3: occurrence within set
    const seed = 9600 + qNo;

    if (pattern === 0) {
      const r1 = 2 + occ;       // occ: 0-3 → r1 = 2, 3, 4, 5
      const r2 = 3 + occ * 2;   // occ: 0-3 → r2 = 3, 5, 7, 9 (all sums different)
      const sum = r1 + r2;
      const product = r1 * r2;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `If roots of x\u00b2 \u2212 ${sum}x + ${product} = 0 are \u03b1 and \u03b2, value of \u03b1\u00b7\u03b2 is:`,
        `${product}`,
        [`${sum}`, `${product + 2}`, `${product - 2}`],
        `For x\u00b2 \u2212 Sx + P = 0, product of roots is P.`,
        "algebra",
        "medium",
        seed
      );
    }

    if (pattern === 1) {
      const a = 3 + (qNo % 4);
      const d = 2 + occ;  // occ: 0-3 (no repeat)
      const n = 12;
      const sum = (n * (2 * a + (n - 1) * d)) / 2;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Sum of first ${n} terms of AP with a=${a}, d=${d} is:`,
        `${sum}`,
        [`${sum + n}`, `${sum - n}`, `${n * (a + d)}`],
        `Use Sn = n/2 * [2a + (n-1)d].`,
        "progressions",
        "medium",
        seed
      );
    }

    if (pattern === 2) {
      const n = 6 + occ;  // occ: 0-3 (no repeat)
      const r = 2 + (qNo % 2);
      const comb = r === 2 ? (n * (n - 1)) / 2 : (n * (n - 1) * (n - 2)) / 6;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Value of ${n}C${r} is:`,
        `${comb}`,
        [`${comb + 1}`, `${comb - 1}`, `${n * r}`],
        `Use nCr = n!/(r!(n-r)!).`,
        "combinatorics",
        "medium",
        seed
      );
    }

    if (pattern === 3) {
      const p = 3 + occ;  // occ: 0-3 (no repeat)
      const x = 2;
      const val = p * x ** (p - 1);
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `If y = x^${p}, then dy/dx at x=${x} equals:`,
        `${val}`,
        [`${x ** p}`, `${p * x}`, `${val + 2}`],
        `Derivative of x^n is n*x^(n-1).`,
        "differential calculus",
        "medium",
        seed
      );
    }

    if (pattern === 4) {
      const k = 2 + (qNo % 4);
      const upper = 3;
      const val = (k * upper * upper) / 2;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Integral from 0 to ${upper} of ${k}x dx is:`,
        `${val}`,
        [`${val + k}`, `${k * upper}`, `${val - k}`],
        `Integral of kx is (k/2)x^2 and then apply limits.`,
        "integral calculus",
        "medium",
        seed
      );
    }

    if (pattern === 5) {
      const r = 5 + occ;  // occ: 0-3 (no repeat)
      const area = Math.PI * r * r;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Area of circle of radius ${r} is:`,
        `${r * r}pi`,
        [`${2 * r}pi`, `${r}pi`, `${r * (r + 1)}pi`],
        `Area = pi*r^2.`,
        "coordinate geometry",
        "easy",
        seed
      );
    }

    if (pattern === 6) {
      const m1 = 1 + (qNo % 4);
      const m2 = -1 - occ;  // occ: 0-3 (no repeat)
      const prod = m1 * m2;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `If slopes are m1=${m1} and m2=${m2}, then m1*m2 is:`,
        `${prod}`,
        [`${m1 + m2}`, `${m1 - m2}`, `${prod - 2}`],
        `Multiply the two slopes directly.`,
        "straight lines",
        "easy",
        seed
      );
    }

    if (pattern === 7) {
      const a = 2 + (qNo % 4);
      const b = 1 + occ;  // occ: 0-3 (no repeat)
      const c = 1 + (qNo % 2);
      const d = 4 + ((occ + 2) % 4);  // Different from b
      const det = a * d - b * c;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Determinant of matrix [[${a}, ${b}], [${c}, ${d}]] is:`,
        `${det}`,
        [`${a * d + b * c}`, `${a + b + c + d}`, `${det + 3}`],
        `For 2x2 matrix, determinant = ad - bc.`,
        "matrices",
        "medium",
        seed
      );
    }

    if (pattern === 8) {
      const n = 7 + (qNo % 4);
      const r = 3;
      const perm = n * (n - 1) * (n - 2);
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Value of ${n}P${r} is:`,
        `${perm}`,
        [`${perm / 6}`, `${perm + 6}`, `${perm - 6}`],
        `nPr = n!/(n-r)!.`,
        "permutations",
        "medium",
        seed
      );
    }

    if (pattern === 9) {
      const red = 4 + occ;  // occ: 0-3 (no repeat)
      const blue = 5 + (qNo % 4);
      const total = red + blue;
      const num = red * (red - 1);
      const den = total * (total - 1);
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Two balls are drawn without replacement from a bag having ${red} red and ${blue} blue balls. Probability that both are red is:`,
        `${num}/${den}`,
        [`${red}/${total}`, `${num}/${total}`, `${blue * (blue - 1)}/${den}`],
        `Use P(R1 and R2) = (red/total)*((red-1)/(total-1)).`,
        "probability",
        "hard",
        seed
      );
    }

    if (pattern === 10) {
      const a = 3 + (qNo % 4);
      const b = 4 + occ;  // occ: 0-3 (no repeat)
      const mod = Math.sqrt(a * a + b * b);
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Modulus of complex number ${a} + ${b}i is:`,
        `${formatValue(mod)}`,
        [`${a + b}`, `${Math.abs(a - b)}`, `${a * b}`],
        `|a+bi| = sqrt(a^2 + b^2).`,
        "complex numbers",
        "medium",
        seed
      );
    }

    if (pattern === 11) {
      const a1 = 1 + occ;  // occ: 0-3 (no repeat)
      const a2 = 2 + (qNo % 4);
      const b1 = 3 + (qNo % 2);
      const b2 = 1 + ((occ + 2) % 4);  // Different from a1
      const dot = a1 * b1 + a2 * b2;
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `Dot product of vectors (${a1}, ${a2}) and (${b1}, ${b2}) is:`,
        `${dot}`,
        [`${a1 * b1 - a2 * b2}`, `${dot + 2}`, `${dot - 2}`],
        `For 2D vectors, dot product is x1x2 + y1y2.`,
        "vectors",
        "medium",
        seed
      );
    }

    if (pattern === 12) {
      // 4 distinct trig identity questions — occ 0–3 picks a unique one
      const trigIdentPool = [
        { q: "Value of sin\u00b2\u03b8 + cos\u00b2\u03b8 is:", a: "1", d: ["0", "2", "sin 2\u03b8"] as [string,string,string], exp: "Fundamental Pythagorean identity." },
        { q: "Value of 1 + tan\u00b2\u03b8 is:", a: "sec\u00b2\u03b8", d: ["csc\u00b2\u03b8", "1", "cos\u00b2\u03b8"] as [string,string,string], exp: "1 + tan\u00b2\u03b8 = sec\u00b2\u03b8." },
        { q: "Value of 1 + cot\u00b2\u03b8 is:", a: "csc\u00b2\u03b8", d: ["sec\u00b2\u03b8", "1", "sin\u00b2\u03b8"] as [string,string,string], exp: "1 + cot\u00b2\u03b8 = csc\u00b2\u03b8." },
        { q: "Value of sin(90\u00b0 \u2212 \u03b8) is:", a: "cos\u03b8", d: ["sin\u03b8", "\u2212cos\u03b8", "tan\u03b8"] as [string,string,string], exp: "Co-function identity: sin(90\u00b0\u2212\u03b8) = cos\u03b8." },
      ] as const;
      const row = trigIdentPool[occ % trigIdentPool.length];
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        row.q, row.a, row.d, row.exp,
        "trigonometry", "easy", seed
      );
    }

    if (pattern === 13) {
      const p = 2 + (qNo % 4);
      return createComedkQuestion(
        `comedk-set6-math-${qNo}`,
        `If log10(x) = ${p}, then x equals:`,
        `${10 ** p}`,
        [`${p}`, `${p * 10}`, `${10 ** (p - 1)}`],
        `From log10(x)=p, x=10^p.`,
        "logarithms",
        "easy",
        seed
      );
    }

    const n = 1 + (qNo % 4);
    const lim = 2 * n;
    return createComedkQuestion(
      `comedk-set6-math-${qNo}`,
      `Limit of (x^2 - ${n * n})/(x - ${n}) as x tends to ${n} is:`,
      `${lim}`,
      [`${n}`, `${3 * n + 1}`, `${lim + 1}`],
      `Factor numerator: (x-n)(x+n), cancel and substitute x=n.`,
      "limits",
      "hard",
      seed
    );
  });
}

function buildComedkSet6MathBank(): PracticeQuestion[] {
  const rawBank = createComedkSet6MathQuestionsLegacy();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Set6 Math bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_SET6_MATH_BANK = buildComedkSet6MathBank();

function createComedkSet6MathQuestions(): PracticeQuestion[] {
  return COMEDK_SET6_MATH_BANK;
}

function createComedkSet6PhysicsQuestionsLegacy(): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 15;
    const occ = Math.floor(index / 15); // 0–3
    const seed = 10600 + qNo;

    if (pattern === 0) {
      const u = 2 + occ;  // occ: 0-3 (no repeat)
      const a = 3 + (qNo % 4);
      const t = 4;
      const v = u + a * t;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `For uniformly accelerated motion (u=${u} m/s, a=${a} m/s\u00b2, t=${t} s), final velocity is:`,
        `${v} m/s`,
        [`${v - a} m/s`, `${v + a} m/s`, `${u + t} m/s`],
        `Use v = u + at.`,
        "kinematics",
        "easy",
        seed
      );
    }

    if (pattern === 1) {
      const u = 22 + occ * 3;
      const g = 10;
      const h = (u * u) / (2 * g);
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `Maximum height reached by a body projected vertically upward with speed ${u} m/s (g=10 m/s^2) is:`,
        `${formatValue(h)} m`,
        [`${u} m`, `${formatValue(h + 2)} m`, `${formatValue(h - 2)} m`],
        `Use H = u^2/(2g).`,
        "projectile motion",
        "medium",
        seed
      );
    }

    if (pattern === 2) {
      const m = 2 + (qNo % 5);
      const a = 3 + occ;  // occ: 0-3 (no repeat)
      const f = m * a;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `A ${m} kg body has acceleration ${a} m/s^2. Net force is:`,
        `${f} N`,
        [`${f + 2} N`, `${f - 2} N`, `${a} N`],
        `Use F = ma.`,
        "laws of motion",
        "easy",
        seed
      );
    }

    if (pattern === 3) {
      const m = 3 + (qNo % 4);
      const v = 4 + occ;  // occ: 0-3 (no repeat)
      const ke = 0.5 * m * v * v;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `Kinetic energy of mass ${m} kg moving at ${v} m/s is:`,
        `${formatValue(ke)} J`,
        [`${formatValue(ke + 5)} J`, `${formatValue(ke - 5)} J`, `${m * v} J`],
        `Use KE = 1/2 mv^2.`,
        "work and energy",
        "medium",
        seed
      );
    }

    if (pattern === 4) {
      const w = 240 + qNo * 2;
      const t = 8;
      const p = w / t;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `If ${w} J work is done in ${t} s, power is:`,
        `${formatValue(p)} W`,
        [`${formatValue(p + 4)} W`, `${formatValue(p - 4)} W`, `${t} W`],
        `Power = Work/time.`,
        "work and energy",
        "easy",
        seed
      );
    }

    if (pattern === 5) {
      // 4 distinct gravitational force questions — occ 0–3
      const nArr = [2, 3, 4, 5] as const;
      const fracArr = ["1/4", "1/9", "1/16", "1/25"] as const;
      const n   = nArr[occ % nArr.length];
      const frac = fracArr[occ % fracArr.length];
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `If distance between two masses becomes ${n} times its original value, gravitational force becomes:`,
        frac,
        [
          occ === 0 ? "1/2" : "1/4",
          occ === 0 ? "2 times" : "1/2",
          "unchanged"
        ] as [string,string,string],
        `F \u221d 1/r\u00b2. New F = F\u2080/${n}\u00b2 = ${frac} of original.`,
        "gravitation", "easy", seed
      );
    }

    if (pattern === 6) {
      const m = 1 + occ;  // occ: 0-3 (no repeat)
      const k = 100 + 25 * ((occ + 2) % 4);  // Different from m
      const period = 2 * Math.PI * Math.sqrt(m / k);
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `For mass-spring system (m=${m} kg, k=${k} N/m), time period is:`,
        `${formatValue(period)} s`,
        [`${formatValue(period + 0.2)} s`, `${formatValue(period - 0.2)} s`, `${formatValue(Math.sqrt(m / k))} s`],
        `Use T = 2*pi*sqrt(m/k).`,
        "oscillations",
        "hard",
        seed
      );
    }

    if (pattern === 7) {
      const f = 40 + (qNo % 4) * 10;
      const lambda = 2 + occ;  // occ: 0-3 (no repeat)
      const v = f * lambda;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `A wave has frequency ${f} Hz and wavelength ${lambda} m. Speed is:`,
        `${v} m/s`,
        [`${v + 10} m/s`, `${v - 10} m/s`, `${f + lambda} m/s`],
        `Use v = f*lambda.`,
        "waves",
        "medium",
        seed
      );
    }

    if (pattern === 8) {
      const qh = 500 + (qNo % 4) * 50;
      const qc = 200 + occ * 20;  // occ: 0-3 (no repeat)
      const eta = ((qh - qc) / qh) * 100;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `A heat engine absorbs ${qh} J and rejects ${qc} J. Efficiency is:`,
        `${formatValue(eta)}%`,
        [`${formatValue(eta + 5)}%`, `${formatValue(eta - 5)}%`, `${formatValue((qc / qh) * 100)}%`],
        `Efficiency = (Qh-Qc)/Qh.`,
        "thermodynamics",
        "medium",
        seed
      );
    }

    if (pattern === 9) {
      // 4 distinct Coulomb / electrostatics questions — occ 0–3
      const nArr = [2, 3, 4, 5] as const;
      const fracArr = ["1/4", "1/9", "1/16", "1/25"] as const;
      const n    = nArr[occ % nArr.length];
      const frac = fracArr[occ % fracArr.length];
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `If separation between two point charges is made ${n} times its original value, electrostatic force becomes:`,
        frac,
        [
          occ === 0 ? "1/2" : "1/4",
          occ === 0 ? "2 times" : "1/2",
          "unchanged"
        ] as [string,string,string],
        `Coulomb\u2019s law: F \u221d 1/r\u00b2. New F = F\u2080/${n}\u00b2 = ${frac} of original.`,
        "electrostatics", "easy", seed
      );
    }

    if (pattern === 10) {
      const r1 = 2 + (qNo % 4);
      const r2 = 3 + (qNo % 5);
      const req = (r1 * r2) / (r1 + r2);
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `Equivalent resistance of ${r1} ohm and ${r2} ohm in parallel is:`,
        `${formatValue(req)} ohm`,
        [`${r1 + r2} ohm`, `${Math.abs(r1 - r2)} ohm`, `${formatValue(req + 1)} ohm`],
        `For parallel combination, R = R1*R2/(R1+R2).`,
        "current electricity",
        "medium",
        seed
      );
    }

    if (pattern === 11) {
      const i = 2 + (qNo % 4);
      const r = 5 + (qNo % 3);
      const v = i * r;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `Potential difference across ${r} ohm carrying ${i} A current is:`,
        `${v} V`,
        [`${v + 2} V`, `${v - 2} V`, `${i + r} V`],
        `Ohm law: V = IR.`,
        "current electricity",
        "easy",
        seed
      );
    }

    if (pattern === 12) {
      const q = 2 + (qNo % 3);
      const v = 3 + (qNo % 4);
      const b = 4 + (qNo % 2);
      const f = q * v * b;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `A charge ${q} C moves perpendicular to magnetic field ${b} T with speed ${v} m/s. Magnetic force is:`,
        `${f} N`,
        [`${f + 2} N`, `${f - 2} N`, `${q + v + b} N`],
        `Use F = qvB for perpendicular motion.`,
        "magnetism",
        "medium",
        seed
      );
    }

    if (pattern === 13) {
      const n = 20 + (qNo % 5);
      const dPhi = 3 + (qNo % 4);
      const dt = 0.5;
      const emf = (n * dPhi) / dt;
      return createComedkQuestion(
        `comedk-set6-phys-${qNo}`,
        `A ${n}-turn coil has flux change ${dPhi} Wb in ${dt} s. Induced emf magnitude is:`,
        `${formatValue(emf)} V`,
        [`${formatValue(emf + 2)} V`, `${formatValue(emf - 2)} V`, `${dPhi} V`],
        `Faraday law: emf = N*(dPhi/dt).`,
        "electromagnetic induction",
        "hard",
        seed
      );
    }

    // pattern 14 (default): modern physics — 4 unique questions via occ
    const photoPool = [
      { q: "In photoelectric effect, if frequency increases beyond threshold, KE\u2098\u2090\u2093 of emitted electrons:", a: "increases linearly", d: ["decreases", "remains zero", "remains constant"] as [string,string,string], exp: "KE\u2098\u2090\u2093 = h\u03bd \u2212 \u03c6; KE increases linearly with frequency." },
      { q: "In photoelectric effect, threshold frequency is:", a: "minimum frequency to eject an electron", d: ["maximum frequency of light", "frequency of emitted electron", "frequency of X-rays"] as [string,string,string], exp: "Below \u03bd\u2080, no photoelectric effect occurs." },
      { q: "Work function in photoelectric effect is:", a: "minimum energy needed to eject an electron from metal surface", d: ["kinetic energy of emitted electron", "energy of incident photon", "energy of X-rays"] as [string,string,string], exp: "Work function \u03c6 = h\u03bd\u2080." },
      { q: "Stopping potential in photoelectric experiment is voltage needed to:", a: "stop the fastest emitted electrons", d: ["accelerate electrons", "increase photon frequency", "reflect photons"] as [string,string,string], exp: "eV\u209b = KE\u2098\u2090\u2093; stopping potential arrests maximum-energy electrons." },
    ] as const;
    const pRow = photoPool[occ % photoPool.length];
    return createComedkQuestion(
      `comedk-set6-phys-${qNo}`,
      pRow.q, pRow.a, pRow.d, pRow.exp,
      "modern physics", "medium", seed
    );
  });
}

function buildComedkSet6PhysicsBank(): PracticeQuestion[] {
  const rawBank = createComedkSet6PhysicsQuestionsLegacy();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Set6 Physics bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_SET6_PHYSICS_BANK = buildComedkSet6PhysicsBank();

function createComedkSet6PhysicsQuestions(): PracticeQuestion[] {
  return COMEDK_SET6_PHYSICS_BANK;
}

function createComedkSet6ChemistryQuestionsLegacy(): PracticeQuestion[] {
  return Array.from({ length: 60 }, (_, index) => {
    const qNo = index + 1;
    const pattern = index % 15;
    const occ = Math.floor(index / 15); // 0–3
    const seed = 11600 + qNo;

    if (pattern === 0) {
      const mass = 22 + (qNo % 4) * 11;
      const molarMass = 44;
      const moles = mass / molarMass;
      return createComedkQuestion(
        `comedk-set6-chem-${qNo}`,
        `Number of moles in ${mass} g of CO2 is:`,
        `${formatValue(moles)}`,
        [`${formatValue(moles + 0.5)}`, `${formatValue(moles - 0.25)}`, `${formatValue(moles + 1)}`],
        `Moles = mass/molar mass.`,
        "mole concept",
        "easy",
        seed
      );
    }

    if (pattern === 1) {
      // Gas laws pool — 4 unique questions via occ
      const gasPool = [
        { q: "At constant temperature, pressure of a gas is inversely proportional to volume. This is:", a: "Boyle\u2019s law", d: ["Charles\u2019 law", "Gay-Lussac\u2019s law", "Avogadro\u2019s law"] as [string,string,string], exp: "Boyle\u2019s law: P \u221d 1/V at constant T." },
        { q: "At constant pressure, volume of a gas is directly proportional to temperature. This is:", a: "Charles\u2019 law", d: ["Boyle\u2019s law", "Gay-Lussac\u2019s law", "Dalton\u2019s law"] as [string,string,string], exp: "Charles\u2019 law: V \u221d T at constant P." },
        { q: "At constant volume, pressure of a gas is directly proportional to temperature. This is:", a: "Gay-Lussac\u2019s law", d: ["Boyle\u2019s law", "Charles\u2019 law", "Avogadro\u2019s law"] as [string,string,string], exp: "Gay-Lussac\u2019s law: P \u221d T at constant V." },
        { q: "Equal volumes of all gases at same T and P contain equal number of molecules. This is:", a: "Avogadro\u2019s law", d: ["Boyle\u2019s law", "Charles\u2019 law", "Dalton\u2019s law"] as [string,string,string], exp: "Avogadro\u2019s law: V \u221d n at same T and P." },
      ] as const;
      const row = gasPool[occ % gasPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "gas laws", "easy", seed);
    }

    if (pattern === 2) {
      // Thermochemistry pool — 4 unique questions via occ
      const thermoPool = [
        { q: "A reaction that absorbs heat from surroundings is:", a: "endothermic", d: ["exothermic", "isothermal", "adiabatic"] as [string,string,string], exp: "Endothermic reaction absorbs heat (\u0394H > 0)." },
        { q: "A reaction that releases heat to surroundings is:", a: "exothermic", d: ["endothermic", "isothermal", "reversible"] as [string,string,string], exp: "Exothermic reaction releases heat (\u0394H < 0)." },
        { q: "Hess\u2019s law states that enthalpy change is:", a: "independent of path (state function)", d: ["path-dependent", "always positive", "always zero"] as [string,string,string], exp: "Hess\u2019s law: \u0394H is a state function." },
        { q: "Standard enthalpy of formation is defined for:", a: "formation of 1 mol from elements in standard states", d: ["decomposition of 1 mol compound", "combustion of 1 mol fuel", "neutralisation of 1 mol acid"] as [string,string,string], exp: "\u0394\u0192H\u00b0 = enthalpy for forming 1 mol from elements." },
      ] as const;
      const row = thermoPool[occ % thermoPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "thermochemistry", "easy", seed);
    }

    if (pattern === 3) {
      const kp = 4 + occ;  // occ: 0-3 (no repeat)
      const rt = 2;
      const kc = kp / rt;
      return createComedkQuestion(
        `comedk-set6-chem-${qNo}`,
        `For a reaction with \u0394n = 1, if Kp = ${kp} and RT = ${rt}, then Kc is:`,
        `${formatValue(kc)}`,
        [`${formatValue(kp * rt)}`, `${formatValue(kp + rt)}`, `${formatValue(kc + 1.5)}`],
        `Kp = Kc\u00d7(RT)\u1d35\u207f; here Kc = Kp/RT = ${kp}/${rt} = ${formatValue(kc)}.`,
        "chemical equilibrium", "hard", seed
      );
    }

    if (pattern === 4) {
      // Electrochemistry pool — 4 unique questions via occ
      const elecPool = [
        { q: "Anode in a galvanic cell is the electrode where:", a: "oxidation occurs", d: ["reduction occurs", "ions are reduced only", "electrons are consumed"] as [string,string,string], exp: "Oxidation always occurs at anode." },
        { q: "Cathode in an electrolytic cell is where:", a: "reduction occurs", d: ["oxidation occurs", "cations are repelled", "electrons are removed"] as [string,string,string], exp: "Reduction occurs at cathode in both galvanic and electrolytic cells." },
        { q: "EMF of a galvanic cell is given by:", a: "E\u00b0cell = E\u00b0cathode \u2212 E\u00b0anode", d: ["E\u00b0cell = E\u00b0anode \u2212 E\u00b0cathode", "E\u00b0cell = E\u00b0cathode + E\u00b0anode", "E\u00b0cell = E\u00b0anode / E\u00b0cathode"] as [string,string,string], exp: "E\u00b0cell = E\u00b0(reduction at cathode) \u2212 E\u00b0(reduction at anode)." },
        { q: "In electrolysis of CuSO\u2084, metal deposited at cathode is:", a: "copper", d: ["sulfur", "oxygen", "hydrogen"] as [string,string,string], exp: "Cu\u00b2\u207a is reduced at cathode: Cu\u00b2\u207a + 2e\u207b \u2192 Cu." },
      ] as const;
      const row = elecPool[occ % elecPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "electrochemistry", "medium", seed);
    }

    if (pattern === 5) {
      // Chemical kinetics pool — 4 unique questions via occ
      const kineticsPool = [
        { q: "For first-order reaction, unit of rate constant is:", a: "s\u207b\u00b9", d: ["mol L\u207b\u00b9 s\u207b\u00b9", "L mol\u207b\u00b9 s\u207b\u00b9", "mol\u207b\u00b9 s\u207b\u00b9"] as [string,string,string], exp: "For first-order, unit of k is time\u207b\u00b9 (s\u207b\u00b9)." },
        { q: "For second-order reaction, unit of rate constant is:", a: "L mol\u207b\u00b9 s\u207b\u00b9", d: ["s\u207b\u00b9", "mol L\u207b\u00b9 s\u207b\u00b9", "mol\u207b\u00b2 L\u00b2 s\u207b\u00b9"] as [string,string,string], exp: "For second-order, k unit is L mol\u207b\u00b9 s\u207b\u00b9." },
        { q: "Rate of reaction generally increases with temperature because:", a: "more molecules have energy \u2265 activation energy", d: ["activation energy decreases to zero", "all molecules speed up equally", "collision frequency only increases"] as [string,string,string], exp: "Arrhenius: k = Ae\u207b(Ea/RT); higher T \u2192 more molecules exceed Ea." },
        { q: "Half-life of first-order reaction is:", a: "independent of initial concentration", d: ["directly proportional to concentration", "inversely proportional to concentration", "equal to rate constant"] as [string,string,string], exp: "t\u00bd = ln2/k for first-order; does not depend on [A]\u2080." },
      ] as const;
      const row = kineticsPool[occ % kineticsPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "chemical kinetics", "medium", seed);
    }

    if (pattern === 6) {
      // Atomic structure pool — 4 unique questions via occ
      const atomPool = [
        { q: "Maximum number of electrons in p-subshell is:", a: "6", d: ["2", "10", "14"] as [string,string,string], exp: "p has 3 orbitals \u00d7 2 electrons = 6." },
        { q: "Maximum number of electrons in d-subshell is:", a: "10", d: ["2", "6", "14"] as [string,string,string], exp: "d has 5 orbitals \u00d7 2 electrons = 10." },
        { q: "Maximum number of electrons in f-subshell is:", a: "14", d: ["2", "6", "10"] as [string,string,string], exp: "f has 7 orbitals \u00d7 2 electrons = 14." },
        { q: "Maximum number of electrons in s-subshell is:", a: "2", d: ["6", "10", "14"] as [string,string,string], exp: "s has 1 orbital \u00d7 2 electrons = 2." },
      ] as const;
      const row = atomPool[occ % atomPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "atomic structure", "easy", seed);
    }

    if (pattern === 7) {
      // Periodic trends pool — 4 unique questions via occ
      const ptPool = [
        { q: "Element with highest electronegativity is:", a: "Fluorine", d: ["Oxygen", "Chlorine", "Nitrogen"] as [string,string,string], exp: "Fluorine has highest electronegativity (Pauling: 3.98)." },
        { q: "Atomic radius generally increases going:", a: "down a group", d: ["across a period", "from metals to non-metals", "left to right across period"] as [string,string,string], exp: "Atomic radius increases down a group due to additional shells." },
        { q: "Ionisation energy generally decreases going:", a: "down a group", d: ["across a period", "from non-metals to metals", "from right to left in a period"] as [string,string,string], exp: "Ionisation energy decreases down a group; outer electrons are farther." },
        { q: "Electron affinity is generally most negative for:", a: "halogens (especially Cl)", d: ["noble gases", "alkali metals", "alkaline earth metals"] as [string,string,string], exp: "Cl has highest electron affinity among all elements." },
      ] as const;
      const row = ptPool[occ % ptPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "periodic table", "easy", seed);
    }

    if (pattern === 8) {
      // Chemical bonding / VSEPR pool — 4 unique questions via occ
      const vsepPool = [
        { q: "Molecular shape of NH\u2083 is:", a: "trigonal pyramidal", d: ["tetrahedral", "trigonal planar", "linear"] as [string,string,string], exp: "NH\u2083: 3 bond pairs + 1 lone pair \u2192 trigonal pyramidal." },
        { q: "Molecular shape of H\u2082O is:", a: "bent (V-shaped)", d: ["linear", "trigonal planar", "tetrahedral"] as [string,string,string], exp: "H\u2082O: 2 bond pairs + 2 lone pairs \u2192 bent." },
        { q: "Molecular shape of CO\u2082 is:", a: "linear", d: ["bent", "trigonal planar", "tetrahedral"] as [string,string,string], exp: "CO\u2082: 2 double bonds, no lone pairs \u2192 linear." },
        { q: "Molecular shape of BF\u2083 is:", a: "trigonal planar", d: ["pyramidal", "tetrahedral", "linear"] as [string,string,string], exp: "BF\u2083: 3 bond pairs, no lone pairs \u2192 trigonal planar." },
      ] as const;
      const row = vsepPool[occ % vsepPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "chemical bonding", "medium", seed);
    }

    if (pattern === 9) {
      // Coordination compounds pool — 4 unique questions via occ
      const coordPool = [
        { q: "Coordination number of Fe in [Fe(CN)\u2086]\u2074\u207b is:", a: "6", d: ["4", "2", "8"] as [string,string,string], exp: "6 cyanide ligands around Fe \u2192 CN = 6." },
        { q: "Coordination number of Cu in [Cu(NH\u2083)\u2084]\u00b2\u207a is:", a: "4", d: ["2", "6", "8"] as [string,string,string], exp: "4 ammonia ligands around Cu \u2192 CN = 4." },
        { q: "IUPAC name for [Co(NH\u2083)\u2086]\u00b3\u207a is:", a: "hexaamminecobalt(III)", d: ["cobalt hexamine", "cobaltamine", "hexacobaltamine"] as [string,string,string], exp: "6 NH\u2083 ligands = hexaammine; Co is +3 \u2192 cobalt(III)." },
        { q: "A ligand that donates two pairs of electrons is called:", a: "bidentate", d: ["monodentate", "tridentate", "ambidentate"] as [string,string,string], exp: "Bidentate ligands donate 2 electron pairs (e.g. en, oxalate)." },
      ] as const;
      const row = coordPool[occ % coordPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "coordination compounds", "medium", seed);
    }

    if (pattern === 10) {
      // Hydrocarbons pool — 4 unique questions via occ
      const hydroPool = [
        { q: "Main product of addition of H\u2082 to ethene is:", a: "ethane", d: ["ethyne", "ethanol", "methane"] as [string,string,string], exp: "Hydrogenation: CH\u2082=CH\u2082 + H\u2082 \u2192 CH\u2083CH\u2083 (ethane)." },
        { q: "Main product of addition of HBr to propene (Markovnikov) is:", a: "2-bromopropane", d: ["1-bromopropane", "1-bromopropene", "propanol"] as [string,string,string], exp: "Markovnikov: H adds to C with more H\u2019s \u2192 2-bromopropane." },
        { q: "Product of combustion of ethane (complete) is:", a: "CO\u2082 and H\u2082O", d: ["CO and H\u2082O", "C and H\u2082", "CO\u2082 and H\u2082"] as [string,string,string], exp: "2C\u2082H\u2086 + 7O\u2082 \u2192 4CO\u2082 + 6H\u2082O." },
        { q: "Benzene undergoes electrophilic substitution rather than addition because:", a: "it is stabilised by aromaticity", d: ["it has no double bonds", "it is a saturated compound", "it reacts only with metals"] as [string,string,string], exp: "Aromatic stability is maintained by substitution, not addition." },
      ] as const;
      const row = hydroPool[occ % hydroPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "hydrocarbons", "easy", seed);
    }

    if (pattern === 11) {
      // Haloalkanes pool — 4 unique questions via occ
      const haloPool = [
        { q: "Hydrolysis of CH\u2083Cl in aqueous KOH gives:", a: "methanol", d: ["methane", "chloromethane", "formaldehyde"] as [string,string,string], exp: "CH\u2083Cl + KOH(aq) \u2192 CH\u2083OH + KCl." },
        { q: "SN2 reaction is favoured by:", a: "primary haloalkanes in polar aprotic solvent", d: ["tertiary haloalkanes", "polar protic solvents", "bulky substrates"] as [string,string,string], exp: "SN2 needs easy backside attack \u2192 primary haloalkanes are best." },
        { q: "Product of reaction of 2-bromopropane with KOH (alcoholic) is:", a: "propene (elimination)", d: ["propanol (substitution)", "propane", "propanoic acid"] as [string,string,string], exp: "Alcoholic KOH causes elimination: 2-BrC\u2083H\u2087 \u2192 CH\u2083CH=CH\u2082." },
        { q: "In SN1 reaction, intermediate formed is:", a: "carbocation", d: ["carbanion", "free radical", "transition state only"] as [string,string,string], exp: "SN1: ionisation \u2192 carbocation intermediate, then nucleophile attacks." },
      ] as const;
      const row = haloPool[occ % haloPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "haloalkanes", "medium", seed);
    }

    if (pattern === 12) {
      // Alcohols / IUPAC pool — 4 unique questions via occ
      const alcoholPool = [
        { q: "IUPAC name of CH\u2083CH\u2082CH\u2082CH\u2082OH is:", a: "butan-1-ol", d: ["butan-2-ol", "propan-1-ol", "pentan-1-ol"] as [string,string,string], exp: "CH\u2083(CH\u2082)\u2083OH: 4-carbon chain, OH on C1 \u2192 butan-1-ol." },
        { q: "IUPAC name of (CH\u2083)\u2083COH is:", a: "2-methylpropan-2-ol", d: ["propan-2-ol", "butan-2-ol", "propan-1-ol"] as [string,string,string], exp: "(CH\u2083)\u2083COH: 4 carbons, OH on C2, methyl on C2 \u2192 2-methylpropan-2-ol." },
        { q: "IUPAC name of (CH\u2083)\u2082CHOH is:", a: "propan-2-ol", d: ["propan-1-ol", "2-propanol (common only)", "ethanol"] as [string,string,string], exp: "(CH\u2083)\u2082CHOH: 3-carbon chain, OH on C2 \u2192 propan-2-ol." },
        { q: "IUPAC name of CH\u2083CH\u2082CH\u2082OH is:", a: "propan-1-ol", d: ["propan-2-ol", "ethanol", "propanoic acid"] as [string,string,string], exp: "CH\u2083CH\u2082CH\u2082OH: 3-carbon chain, OH on C1 \u2192 propan-1-ol." },
      ] as const;
      const row = alcoholPool[occ % alcoholPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "alcohols phenols ethers", "easy", seed);
    }

    if (pattern === 13) {
      // Aldehydes / ketones / tests pool — 4 unique questions via occ
      const aldPool = [
        { q: "Tollens\u2019 reagent gives silver mirror test with:", a: "aldehydes", d: ["ketones", "alkanes", "ethers"] as [string,string,string], exp: "Aldehydes reduce [Ag(NH\u2083)\u2082]\u207a \u2192 silver mirror." },
        { q: "Iodoform test is positive for:", a: "methyl ketones and acetaldehyde", d: ["all ketones", "carboxylic acids", "esters"] as [string,string,string], exp: "Iodoform (CHI\u2083) forms with compounds containing CH\u2083CO\u2013 group (methyl ketones and acetaldehyde)." },
        { q: "Benedict\u2019s test is positive for:", a: "reducing sugars (glucose, maltose)", d: ["non-reducing sugars (sucrose)", "all carbohydrates", "lipids"] as [string,string,string], exp: "Benedict\u2019s test detects reducing sugars." },
        { q: "Schiff\u2019s reagent is used to distinguish:", a: "aldehydes from ketones", d: ["alcohols from esters", "alkanes from alkenes", "acids from bases"] as [string,string,string], exp: "Schiff\u2019s reagent turns pink/violet with aldehydes, not ketones." },
      ] as const;
      const row = aldPool[occ % aldPool.length];
      return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "aldehydes ketones", "medium", seed);
    }

    // pattern 14 (default): Polymers/biomolecules pool — 4 unique questions via occ
    const polyPool = [
      { q: "Monomer unit of polyethene is:", a: "ethene", d: ["ethane", "ethyne", "benzene"] as [string,string,string], exp: "Polyethene forms by polymerisation of ethene (CH\u2082=CH\u2082)." },
      { q: "Monomer unit of polypropylene is:", a: "propene", d: ["propane", "propyne", "ethene"] as [string,string,string], exp: "Polypropylene forms from propene (CH\u2082=CHCH\u2083)." },
      { q: "Type of polymerisation used to make nylon-6,6 is:", a: "condensation polymerisation", d: ["addition polymerisation", "chain-growth polymerisation", "ring-opening only"] as [string,string,string], exp: "Nylon-6,6 forms by condensation of hexamethylenediamine and adipic acid." },
      { q: "Natural polymer that makes up plant cell walls is:", a: "cellulose", d: ["starch", "glycogen", "chitin"] as [string,string,string], exp: "Cellulose: \u03b2-glucose polymer that forms plant cell walls." },
    ] as const;
    const row = polyPool[occ % polyPool.length];
    return createComedkQuestion(`comedk-set6-chem-${qNo}`, row.q, row.a, row.d, row.exp, "polymers", "easy", seed);
  });
}

function buildComedkSet6ChemistryBank(): PracticeQuestion[] {
  const rawBank = createComedkSet6ChemistryQuestionsLegacy();

  const duplicateQuestionMap = new Map<string, number>();
  let duplicateOptionCount = 0;

  for (const question of rawBank) {
    const key = normalizeQuestionKey(question.question);
    duplicateQuestionMap.set(key, (duplicateQuestionMap.get(key) ?? 0) + 1);

    if (hasDuplicateOptions(question)) {
      duplicateOptionCount += 1;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const duplicateQuestionCount = Array.from(duplicateQuestionMap.values()).filter(
      (count) => count > 1
    ).length;

    if (duplicateQuestionCount > 0 || duplicateOptionCount > 0) {
      console.warn(
        `[COMEDK] Set6 Chemistry bank quality check: duplicate questions=${duplicateQuestionCount}, duplicate-option-questions=${duplicateOptionCount}`
      );
    }
  }

  return rawBank;
}

const COMEDK_SET6_CHEMISTRY_BANK = buildComedkSet6ChemistryBank();

function createComedkSet6ChemistryQuestions(): PracticeQuestion[] {
  return COMEDK_SET6_CHEMISTRY_BANK;
}

function createComedkPracticeSet(setNumber: number): PracticeSet {
  const questions =
    setNumber === 6
      ? [
          ...createComedkSet6MathQuestions(),
          ...createComedkSet6PhysicsQuestions(),
          ...createComedkSet6ChemistryQuestions(),
        ]
      : [
          ...createComedkMathQuestions(setNumber),
          ...createComedkPhysicsQuestions(setNumber),
          ...createComedkChemistryQuestions(setNumber),
        ];

  const level = setNumber === 6 ? "intermediate" : setNumber <= 2 ? "intermediate" : "advanced";

  return {
    id: `comedk-mixed-set-${setNumber}`,
    slug: `comedk-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `COMEDK Practice Set ${setNumber}`,
    description:
      setNumber === 6
        ? "Original COMEDK-style Set 6 (paper-pattern aligned) with 180 questions: 60 Mathematics, 60 Physics, and 60 Chemistry at balanced moderate level."
        : "Original COMEDK-style full-length set with 180 questions: 60 Mathematics, 60 Physics, and 60 Chemistry.",
    examType: "COMEDK",
    examSlug: "comedk",
    examName: "COMEDK",
    sectionLabel: "Full PCM Practice Set",
    level,
    questionCount: questions.length,
    estimatedMinutes: 180,
    seoTitle: `COMEDK Practice Questions - Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      setNumber === 6
        ? "Practice COMEDK Set 6 with original, pattern-aligned 180 PCM questions designed for realistic moderate-level exam practice."
        : "Practice a COMEDK-style 180-question paper with original PCM questions and explanation-based answers.",
    keywords: [
      `COMEDK practice set ${setNumber}`,
      "COMEDK full-length mock",
      "COMEDK PCM practice",
      "COMEDK 180 questions",
      "original COMEDK-style questions",
      ...(setNumber === 6 ? ["COMEDK set 6", "COMEDK moderate level mock"] : []),
    ],
    intro:
      setNumber === 6
        ? "Set 6 follows COMEDK full-paper flow with original questions, same 60-60-60 structure, and moderate difficulty progression for realistic attempt strategy."
        : "Use this full-length COMEDK-style set for realistic timing, balanced subject practice, and targeted error analysis.",
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createKcetMathQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkMathQuestions(setNumber).map((question, index) => ({
    ...question,
    id: `kcet-set${setNumber}-math-${index + 1}`,
  }));
}

function createKcetPhysicsQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkPhysicsQuestions(setNumber).map((question, index) => ({
    ...question,
    id: `kcet-set${setNumber}-phys-${index + 1}`,
  }));
}

function createKcetChemistryQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkChemistryQuestions(setNumber).map((question, index) => ({
    ...question,
    id: `kcet-set${setNumber}-chem-${index + 1}`,
  }));
}

function createKcetPracticeSet(setNumber: number): PracticeSet {
  const questions = [
    ...createKcetMathQuestions(setNumber),
    ...createKcetPhysicsQuestions(setNumber),
    ...createKcetChemistryQuestions(setNumber),
  ];

  const level = setNumber >= 4 ? "advanced" : "intermediate";

  return {
    id: `kcet-mixed-set-${setNumber}`,
    slug: `kcet-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `KCET Practice Set ${setNumber}`,
    description:
      "Original KCET-style full-length set with 180 unique questions: 60 mathematics, 60 physics, and 60 chemistry.",
    examType: "KCET",
    examSlug: "kcet",
    examName: "KCET",
    sectionLabel: "Full PCM Practice Set",
    level,
    questionCount: questions.length,
    estimatedMinutes: 180,
    seoTitle: `KCET Practice Questions - Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      "Practice a full KCET-style set with 180 original questions across mathematics, physics, and chemistry with answers and explanations.",
    keywords: [
      `KCET practice set ${setNumber}`,
      "KCET 180 questions",
      "KCET mathematics physics chemistry",
      "engineering entrance KCET mock",
      "original KCET practice",
    ],
    intro:
      "Use this full-length KCET set for serious exam practice, balanced subject revision, and explanation-based learning.",
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createWbjeeMathQuestions(setNumber: number): PracticeQuestion[] {
  const base = createComedkMathQuestions(setNumber);
  const extra = createComedkMathQuestions(setNumber + 7).slice(0, 15);
  return [...base, ...extra].map((question, index) => ({
    ...question,
    id: `wbjee-set${setNumber}-math-${index + 1}`,
  }));
}

function createWbjeePhysicsQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkPhysicsQuestions(setNumber)
    .slice(0, 40)
    .map((question, index) => ({
      ...question,
      id: `wbjee-set${setNumber}-phys-${index + 1}`,
    }));
}

function createWbjeeChemistryQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkChemistryQuestions(setNumber)
    .slice(0, 40)
    .map((question, index) => ({
      ...question,
      id: `wbjee-set${setNumber}-chem-${index + 1}`,
    }));
}

function createWbjeePracticeSet(setNumber: number): PracticeSet {
  const questions = [
    ...createWbjeeMathQuestions(setNumber),
    ...createWbjeePhysicsQuestions(setNumber),
    ...createWbjeeChemistryQuestions(setNumber),
  ];

  const level = setNumber >= 4 ? "advanced" : "intermediate";

  return {
    id: `wbjee-mixed-set-${setNumber}`,
    slug: `wbjee-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `WBJEE Practice Set ${setNumber}`,
    description:
      "Original WBJEE-style full-length set with 155 unique questions: 75 Mathematics (Paper 1) and 80 Physics/Chemistry (Paper 2).",
    examType: "WBJEE",
    examSlug: "wbjee",
    examName: "WBJEE",
    sectionLabel: "Full WBJEE Paper 1 + Paper 2 Mock",
    level,
    questionCount: questions.length,
    estimatedMinutes: 240,
    seoTitle: `WBJEE Practice Questions - Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      "Practice a full WBJEE-style set with 155 original questions covering Mathematics, Physics, and Chemistry with answers and explanations.",
    keywords: [
      `WBJEE practice set ${setNumber}`,
      "WBJEE 155 questions",
      "WBJEE full mock test",
      "WBJEE mathematics physics chemistry",
      "original WBJEE practice",
    ],
    intro:
      "Use this full-length WBJEE set for realistic paper practice, timing control, and subject-wise error analysis.",
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createJeeAdvancedMathQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkMathQuestions(setNumber)
    .slice(0, 12)
    .map((question, index) => ({
      ...question,
      id: `jee-advanced-set${setNumber}-math-${index + 1}`,
    }));
}

function createJeeAdvancedPhysicsQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkPhysicsQuestions(setNumber)
    .slice(0, 12)
    .map((question, index) => ({
      ...question,
      id: `jee-advanced-set${setNumber}-phys-${index + 1}`,
    }));
}

function createJeeAdvancedChemistryQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkChemistryQuestions(setNumber)
    .slice(0, 12)
    .map((question, index) => ({
      ...question,
      id: `jee-advanced-set${setNumber}-chem-${index + 1}`,
    }));
}

function createJeeAdvancedPracticeSet(setNumber: number): PracticeSet {
  const questions = [
    ...createJeeAdvancedMathQuestions(setNumber),
    ...createJeeAdvancedPhysicsQuestions(setNumber),
    ...createJeeAdvancedChemistryQuestions(setNumber),
  ];

  const level = setNumber >= 4 ? "advanced" : "intermediate";

  return {
    id: `jee-advanced-mixed-set-${setNumber}`,
    slug: `jee-advanced-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `JEE Advanced Practice Set ${setNumber}`,
    description:
      "Original pattern-based JEE Advanced full-length mock with 36 questions: 12 Mathematics, 12 Physics, and 12 Chemistry for practical two-paper strategy practice.",
    examType: "JEE Advanced",
    examSlug: "jee-advanced",
    examName: "JEE Advanced",
    sectionLabel: "Full JEE Advanced Paper 1 + Paper 2 Mock",
    level,
    questionCount: questions.length,
    estimatedMinutes: 240,
    seoTitle: `JEE Advanced Practice Questions - Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      "Practice a full JEE Advanced-style mock with 36 pattern-based questions across Mathematics, Physics, and Chemistry, with answer explanations for strategy-focused revision.",
    keywords: [
      `JEE Advanced practice set ${setNumber}`,
      "JEE Advanced 36 questions",
      "JEE Advanced full mock test",
      "JEE Advanced pattern-based practice",
      "JEE Advanced two-paper strategy",
      "JEE Advanced mathematics physics chemistry",
    ],
    intro:
      "Use this pattern-based JEE Advanced set for comprehensive exam preparation, timing mastery across two papers, and high-difficulty problem solving.",
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createJeeMainMathQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkMathQuestions(setNumber)
    .slice(0, 30)
    .map((question, index) => ({
      ...question,
      id: `jee-main-set${setNumber}-math-${index + 1}`,
    }));
}

function createJeeMainPhysicsQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkPhysicsQuestions(setNumber)
    .slice(0, 30)
    .map((question, index) => ({
      ...question,
      id: `jee-main-set${setNumber}-phys-${index + 1}`,
    }));
}

function createJeeMainChemistryQuestions(setNumber: number): PracticeQuestion[] {
  return createComedkChemistryQuestions(setNumber)
    .slice(0, 30)
    .map((question, index) => ({
      ...question,
      id: `jee-main-set${setNumber}-chem-${index + 1}`,
    }));
}

function createJeeMainPracticeSet(setNumber: number): PracticeSet {
  const questions = [
    ...createJeeMainMathQuestions(setNumber),
    ...createJeeMainPhysicsQuestions(setNumber),
    ...createJeeMainChemistryQuestions(setNumber),
  ];

  const level = setNumber >= 4 ? "advanced" : "intermediate";

  return {
    id: `jee-main-mixed-set-${setNumber}`,
    slug: `jee-main-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `JEE Main Practice Set ${setNumber}`,
    description:
      "Original JEE Main-style full-length set with 90 unique questions: 30 Mathematics, 30 Physics, and 30 Chemistry following the official exam pattern.",
    examType: "JEE Main",
    examSlug: "jee-main",
    examName: "JEE Main",
    sectionLabel: "Full JEE Main Paper Mock",
    level,
    questionCount: questions.length,
    estimatedMinutes: 180,
    seoTitle: `JEE Main Practice Questions - Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      "Practice a full JEE Main-style set with 90 official-pattern questions covering Mathematics, Physics, and Chemistry with answers and explanations.",
    keywords: [
      `JEE Main practice set ${setNumber}`,
      "JEE Main 90 questions",
      "JEE Main full mock test",
      "JEE Main official pattern",
      "JEE Main mathematics physics chemistry",
    ],
    intro:
      "Use this official-pattern JEE Main set for realistic exam practice, speed building, and comprehensive coverage of all three subjects in a single timed session.",
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createIeltsListeningQuestions(setNumber: number): PracticeQuestion[] {
  const scenarios = [
    { place: "student services desk", purpose: "ID collection", keyword: "passport photo", topic: "note completion" },
    { place: "college orientation hall", purpose: "campus tour", keyword: "main reception", topic: "short dialogue" },
    { place: "library help counter", purpose: "membership renewal", keyword: "reference section", topic: "form completion" },
    { place: "language center office", purpose: "course registration", keyword: "placement check", topic: "schedule detail" },
    { place: "conference venue", purpose: "speaker briefing", keyword: "front entrance", topic: "multiple choice" },
    { place: "health clinic reception", purpose: "appointment booking", keyword: "insurance card", topic: "practical information" },
    { place: "training workshop room", purpose: "skills seminar", keyword: "group activity", topic: "summary completion" },
    { place: "travel information desk", purpose: "weekend booking", keyword: "return platform", topic: "table completion" },
    { place: "housing office", purpose: "room inspection", keyword: "maintenance form", topic: "short answer" },
    { place: "community center", purpose: "volunteer induction", keyword: "safety badge", topic: "instruction follow-up" },
  ] as const;

  return scenarios.flatMap((scenario, round) => {
    const seed = setNumber * 200 + round * 10;
    const startHour = 8 + ((round + setNumber) % 4);
    const startMinute = round % 2 === 0 ? "15" : "45";
    const startTime = `${startHour}:${startMinute} AM`;
    const fee = 20 + setNumber * 5 + round * 3;
    const room = 100 + setNumber * 20 + round * 7;
    const limit = 12 + setNumber + round;

    return [
      createGeneratedQuestion(
        `ielts-listening-${setNumber}-${round + 1}`,
        `Transcript: 'The ${scenario.purpose} session at the ${scenario.place} starts at ${startTime}. Please arrive ten minutes early.' What time does the session start?`,
        startTime,
        [`${startHour}:00 AM`, `${startHour}:${startMinute === "15" ? "45" : "15"} AM`, `${startHour + 1}:15 AM`],
        `The speaker directly says the ${scenario.purpose} session starts at ${startTime}.`,
        "listening timing",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `ielts-listening-${setNumber}-${round + 11}`,
        `Transcript: 'For the ${scenario.purpose}, the fee is $${fee}, and you should pay online before you visit the ${scenario.place}.' What is the fee?`,
        `$${fee}`,
        [`$${fee - 5}`, `$${fee + 5}`, `$${fee + 10}`],
        `The amount stated in the transcript is $${fee}.`,
        "listening detail",
        "easy",
        seed + 2
      ),
      createGeneratedQuestion(
        `ielts-listening-${setNumber}-${round + 21}`,
        `Transcript: 'Please wait outside Room ${room} near the ${scenario.keyword}. Staff will call your number when the ${scenario.purpose} begins.' Where should the listener wait?`,
        `Outside Room ${room} near the ${scenario.keyword}`,
        [`Inside Room ${room}`, `Outside Room ${room - 1}`, "At the main exit"],
        `The instruction is to wait outside Room ${room} near the ${scenario.keyword}.`,
        `listening ${scenario.topic}`,
        "medium",
        seed + 3
      ),
      createGeneratedQuestion(
        `ielts-listening-${setNumber}-${round + 31}`,
        `Transcript: 'Only ${limit} people can join each ${scenario.purpose} group, so late arrivals may need to book another date.' What is the group limit?`,
        `${limit} people`,
        [`${limit - 2} people`, `${limit + 2} people`, `${limit + 5} people`],
        `The speaker says only ${limit} people can join each group.`,
        "listening capacity",
        "medium",
        seed + 4
      ),
    ];
  });
}

function createIeltsAcademicReadingQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    { subject: "urban farming", benefit: "local food supply", caution: "high setup cost", keyword: "sustainable", synonym: "long-term" },
    { subject: "sleep research", benefit: "memory consolidation", caution: "screen exposure", keyword: "restore", synonym: "renew" },
    { subject: "museum education", benefit: "visual learning", caution: "limited context", keyword: "engage", synonym: "involve" },
    { subject: "remote teamwork", benefit: "location flexibility", caution: "communication gaps", keyword: "collaborative", synonym: "cooperative" },
    { subject: "public transport planning", benefit: "reduced congestion", caution: "funding delays", keyword: "efficient", synonym: "productive" },
    { subject: "marine conservation", benefit: "biodiversity protection", caution: "illegal fishing", keyword: "fragile", synonym: "delicate" },
    { subject: "language immersion", benefit: "faster fluency", caution: "initial discomfort", keyword: "acquire", synonym: "gain" },
    { subject: "solar energy use", benefit: "lower emissions", caution: "weather dependence", keyword: "generate", synonym: "produce" },
    { subject: "workplace mentoring", benefit: "skill transfer", caution: "time pressure", keyword: "guidance", synonym: "support" },
    { subject: "student budgeting", benefit: "better control of spending", caution: "unplanned purchases", keyword: "allocate", synonym: "distribute" },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 300 + round * 10;
    const sampleSize = 80 + setNumber * 20 + round * 10;
    const improvement = 10 + setNumber * 3 + round;

    return [
      createGeneratedQuestion(
        `ielts-academic-reading-${setNumber}-${round + 1}`,
        `Passage: 'A recent study on ${topic.subject} found that one major advantage is ${topic.benefit}. However, researchers still warn about ${topic.caution}.' What is the main benefit mentioned?`,
        topic.benefit,
        [topic.caution, `${topic.subject} publicity`, "longer holidays"],
        `The passage directly identifies ${topic.benefit} as the main advantage.`,
        "academic reading main idea",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `ielts-academic-reading-${setNumber}-${round + 11}`,
        `In the passage, the word '${topic.keyword}' is closest in meaning to:`,
        topic.synonym,
        ["delay", "ignore", "replace"],
        `In this context, '${topic.keyword}' is closest in meaning to '${topic.synonym}'.`,
        "academic reading vocabulary",
        "medium",
        seed + 2
      ),
      createGeneratedQuestion(
        `ielts-academic-reading-${setNumber}-${round + 21}`,
        `Passage detail: 'The researchers surveyed ${sampleSize} participants, and ${improvement}% reported a positive change after the intervention.' How many participants were surveyed?`,
        `${sampleSize}`,
        [`${sampleSize - 10}`, `${sampleSize + 10}`, `${improvement}`],
        `The passage clearly says the researchers surveyed ${sampleSize} participants.`,
        "academic reading detail",
        "easy",
        seed + 3
      ),
      createGeneratedQuestion(
        `ielts-academic-reading-${setNumber}-${round + 31}`,
        `Based on the passage, what is the writer most likely recommending?`,
        `Use ${topic.subject} carefully while monitoring ${topic.caution}`,
        [
          `Avoid ${topic.subject} completely`,
          `Focus only on advertising ${topic.subject}`,
          "Ignore any limitations in the research",
        ],
        `The passage presents a benefit but also a caution, so the balanced recommendation is to use ${topic.subject} while monitoring ${topic.caution}.`,
        "academic reading inference",
        "hard",
        seed + 4
      ),
    ];
  });
}

function createIeltsGeneralReadingQuestions(setNumber: number): PracticeQuestion[] {
  const notices = [
    { textType: "job advert", action: "submit a CV", condition: "two references", place: "HR desk", keyword: "closing date" },
    { textType: "tenant notice", action: "report repairs online", condition: "include flat number", place: "housing portal", keyword: "urgent issue" },
    { textType: "staff memo", action: "book leave early", condition: "manager approval", place: "internal system", keyword: "peak period" },
    { textType: "community notice", action: "register children in advance", condition: "bring proof of age", place: "reception office", keyword: "limited seats" },
    { textType: "bank message", action: "update address details", condition: "show photo ID", place: "local branch", keyword: "security check" },
    { textType: "travel leaflet", action: "arrive before boarding", condition: "carry printed ticket", place: "platform gate", keyword: "late arrivals" },
    { textType: "training email", action: "confirm attendance", condition: "reply by Friday", place: "course inbox", keyword: "waiting list" },
    { textType: "college notice", action: "renew ID card", condition: "pay the replacement fee", place: "student office", keyword: "lost card" },
    { textType: "clinic reminder", action: "fast before the test", condition: "drink only water", place: "test center", keyword: "morning appointment" },
    { textType: "warehouse instruction", action: "wear safety boots", condition: "sign the shift log", place: "entry station", keyword: "site rules" },
  ] as const;

  return notices.flatMap((notice, round) => {
    const seed = setNumber * 400 + round * 10;
    const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
    const correctDay = dayOptions[(round + setNumber) % dayOptions.length];
    const fee = 15 + setNumber * 4 + round * 2;

    return [
      createGeneratedQuestion(
        `ielts-general-reading-${setNumber}-${round + 1}`,
        `Notice: 'In this ${notice.textType}, applicants must ${notice.action} and provide ${notice.condition}.' What must the reader do?`,
        notice.action,
        [notice.condition, "wait for a phone call only", "bring a family member"],
        `The notice directly tells the reader to ${notice.action}.`,
        "general reading instruction",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `ielts-general-reading-${setNumber}-${round + 11}`,
        `Notice: 'If you need help, visit the ${notice.place}. Staff are available every ${correctDay} afternoon.' When are staff available?`,
        `${correctDay} afternoon`,
        ["Monday morning", `${correctDay} morning`, "Saturday afternoon"],
        `The notice states that staff are available every ${correctDay} afternoon.`,
        "general reading detail",
        "easy",
        seed + 2
      ),
      createGeneratedQuestion(
        `ielts-general-reading-${setNumber}-${round + 21}`,
        `Notice: 'A fee of $${fee} applies, especially in cases involving ${notice.keyword}.' What fee is mentioned?`,
        `$${fee}`,
        [`$${fee - 5}`, `$${fee + 5}`, `$${fee + 10}`],
        `The notice clearly mentions a fee of $${fee}.`,
        "general reading scanning",
        "medium",
        seed + 3
      ),
      createGeneratedQuestion(
        `ielts-general-reading-${setNumber}-${round + 31}`,
        `What is the main purpose of this ${notice.textType}?`,
        `To explain how readers should respond and what condition they must meet`,
        [
          "To tell readers to ignore deadlines",
          "To advertise entertainment options",
          "To compare several unrelated services",
        ],
        `The purpose is practical instruction: it explains the action required and the condition readers must meet.`,
        "general reading purpose",
        "medium",
        seed + 4
      ),
    ];
  });
}

function createIeltsWritingStrategyQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    { focus: "Task 1 overview", rule: "summarize the main trend", mistake: "listing every number", keyword: "overview" },
    { focus: "Task 2 introduction", rule: "state a clear position", mistake: "copying the prompt", keyword: "position" },
    { focus: "coherence", rule: "group related ideas together", mistake: "jumping between points", keyword: "logical flow" },
    { focus: "supporting examples", rule: "use relevant explanation", mistake: "adding unrelated stories", keyword: "development" },
    { focus: "formal tone", rule: "avoid slang", mistake: "using texting language", keyword: "register" },
    { focus: "paragraphing", rule: "give each main idea its own paragraph", mistake: "writing one long block", keyword: "organization" },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 500 + round * 10;
    const minutes = round < 2 ? 20 : 40;

    return [
      createGeneratedQuestion(
        `ielts-writing-${setNumber}-${round + 1}`,
        `In IELTS Writing, what is the strongest approach for ${topic.focus}?`,
        topic.rule,
        [topic.mistake, "memorize one answer for every question", "ignore the task type"],
        `For ${topic.focus}, the stronger approach is to ${topic.rule}.`,
        "writing strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `ielts-writing-${setNumber}-${round + 11}`,
        `Which mistake most often weakens ${topic.focus}?`,
        topic.mistake,
        [topic.rule, "using paragraphs clearly", "planning before writing"],
        `${topic.mistake} is the mistake that weakens ${topic.focus} most directly.`,
        "writing error control",
        "medium",
        seed + 2
      ),
      createGeneratedQuestion(
        `ielts-writing-${setNumber}-${round + 21}`,
        `A student has about ${minutes} minutes for this stage of writing practice. What should the student protect first?`,
        `${topic.keyword} and task focus`,
        ["handwriting speed only", "complex vocabulary without planning", "memorized sentences from social media"],
        `Good IELTS writing starts with ${topic.keyword} and task focus before stylistic detail.`,
        "writing planning",
        "medium",
        seed + 3
      ),
      createGeneratedQuestion(
        `ielts-writing-${setNumber}-${round + 31}`,
        `Which action is most likely to improve band performance for ${topic.focus}?`,
        `Plan quickly, answer the task directly, and review for grammar before finishing`,
        [
          "Spend most of the time copying the prompt",
          "Write without checking whether ideas connect",
          "Use difficult words even when they are inaccurate",
        ],
        `Direct task response, quick planning, and review are more valuable than forced complexity.`,
        "writing band awareness",
        "hard",
        seed + 4
      ),
    ];
  });
}

function createIeltsSpeakingQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    { part: "Part 1", target: "give a direct answer and add one detail", weak: "one-word replies", keyword: "natural extension" },
    { part: "Part 2", target: "cover all cue-card points", weak: "speaking without structure", keyword: "cue-card planning" },
    { part: "Part 3", target: "explain reasons and comparisons", weak: "repeating the same idea", keyword: "deeper answer" },
    { part: "fluency", target: "keep speaking at a steady pace", weak: "long silent pauses", keyword: "flow" },
    { part: "pronunciation", target: "speak clearly and stress key words", weak: "rushing every sentence", keyword: "clarity" },
    { part: "vocabulary range", target: "use familiar varied words accurately", weak: "forcing difficult words incorrectly", keyword: "accurate variety" },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 600 + round * 10;
    const prepSeconds = 60 - round * 5;

    return [
      createGeneratedQuestion(
        `ielts-speaking-${setNumber}-${round + 1}`,
        `For IELTS Speaking ${topic.part}, what is usually the best response habit?`,
        topic.target,
        [topic.weak, "memorize a full script and repeat it exactly", "stop after every sentence to translate mentally"],
        `A stronger speaking score comes from ${topic.target}.`,
        "speaking strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `ielts-speaking-${setNumber}-${round + 11}`,
        `Which habit most often lowers performance in IELTS Speaking ${topic.part}?`,
        topic.weak,
        [topic.target, "using one relevant example", "asking for clarification once when needed"],
        `${topic.weak} often reduces fluency or development.`,
        "speaking mistakes",
        "medium",
        seed + 2
      ),
      createGeneratedQuestion(
        `ielts-speaking-${setNumber}-${round + 21}`,
        `A learner has about ${prepSeconds} seconds to organize an answer. What should the learner focus on first?`,
        topic.keyword,
        ["perfect grammar in every line before speaking", "memorizing advanced idioms", "adding as many long words as possible"],
        `In short prep time, ${topic.keyword} matters more than forced complexity.`,
        "speaking preparation",
        "medium",
        seed + 3
      ),
      createGeneratedQuestion(
        `ielts-speaking-${setNumber}-${round + 31}`,
        `What is the most practical way to improve IELTS Speaking after this practice set?`,
        `Record yourself, check whether your answer is clear, and expand weak ideas`,
        [
          "Read model answers silently without speaking",
          "Memorize ten fixed introductions for every topic",
          "Avoid listening to your own mistakes",
        ],
        `Speaking improves fastest when learners record, review, and expand their own answers.`,
        "speaking review",
        "hard",
        seed + 4
      ),
    ];
  });
}

function createIeltsPracticeSet(
  key: IeltsPracticeGroupKey,
  setNumber: number
): PracticeSet {
  const baseMeta: Record<
    IeltsPracticeGroupKey,
    {
      title: string;
      slug: string;
      description: string;
      minutes: number;
      level: "beginner" | "intermediate" | "advanced";
      intro: string;
      sectionLabel: string;
      keywords: string[];
    }
  > = {
    "ielts-listening": {
      title: `IELTS Listening Mock Test - Set ${setNumber}`,
      slug: `ielts-listening-mock-test-${setNumber}`,
      description:
        "Transcript-based IELTS Listening practice with 40 objective questions designed to improve detail capture, timing, and distractor control.",
      minutes: 40,
      level: setNumber === 1 ? "beginner" : "intermediate",
      intro:
        "Use this set to practice listening-style concentration, fast detail capture, and answer checking without rushing.",
      sectionLabel: "Listening Mock Test",
      keywords: [
        "IELTS listening practice",
        "IELTS listening mock test",
        "IELTS listening answers",
        "IELTS practice for students and immigrants",
        `IELTS listening set ${setNumber}`,
      ],
    },
    "ielts-academic-reading": {
      title: `IELTS Academic Reading Practice Test - Set ${setNumber}`,
      slug: `ielts-academic-reading-practice-test-${setNumber}`,
      description:
        "Academic reading practice with 40 questions for passage analysis, vocabulary in context, inference, and detail tracking under IELTS-style timing.",
      minutes: 60,
      level: setNumber === 1 ? "beginner" : "intermediate",
      intro:
        "Use this set if you need stronger academic reading control for university-focused IELTS preparation.",
      sectionLabel: "Academic Reading Mock Test",
      keywords: [
        "IELTS academic reading practice",
        "IELTS reading mock",
        "IELTS study abroad reading",
        "IELTS academic reading answers",
        `IELTS academic reading set ${setNumber}`,
      ],
    },
    "ielts-general-reading": {
      title: `IELTS General Training Reading Practice Test - Set ${setNumber}`,
      slug: `ielts-general-training-reading-practice-test-${setNumber}`,
      description:
        "General Training reading practice with 40 questions based on notices, emails, work messages, and practical English situations.",
      minutes: 60,
      level: setNumber === 1 ? "beginner" : "intermediate",
      intro:
        "Use this set if you are preparing for work, migration, or general English use cases through IELTS General Training.",
      sectionLabel: "General Training Reading Mock Test",
      keywords: [
        "IELTS general reading practice",
        "IELTS migration reading",
        "IELTS general training mock",
        "IELTS work visa English practice",
        `IELTS general reading set ${setNumber}`,
      ],
    },
    "ielts-writing": {
      title: `IELTS Writing Strategy Practice Test - Set ${setNumber}`,
      slug: `ielts-writing-strategy-practice-test-${setNumber}`,
      description:
        "Objective IELTS Writing preparation with questions on structure, task response, overview writing, coherence, and common band-limiting mistakes.",
      minutes: 45,
      level: "intermediate",
      intro:
        "Use this set before full essay practice if you need a clearer understanding of what good IELTS Writing actually requires.",
      sectionLabel: "Writing Strategy Practice",
      keywords: [
        "IELTS writing strategy",
        "IELTS writing practice questions",
        "IELTS writing task response",
        "IELTS writing band improvement",
        `IELTS writing set ${setNumber}`,
      ],
    },
    "ielts-speaking": {
      title: `IELTS Speaking Confidence Practice Test - Set ${setNumber}`,
      slug: `ielts-speaking-confidence-practice-test-${setNumber}`,
      description:
        "Objective IELTS Speaking preparation with questions on Part 1, cue cards, follow-up answers, fluency habits, and confidence-building strategy.",
      minutes: 35,
      level: "intermediate",
      intro:
        "Use this set to understand what strong IELTS Speaking answers should sound like before live voice practice.",
      sectionLabel: "Speaking Confidence Practice",
      keywords: [
        "IELTS speaking practice",
        "IELTS speaking cue card",
        "IELTS speaking confidence",
        "IELTS speaking improvement",
        `IELTS speaking set ${setNumber}`,
      ],
    },
  };

  const config = baseMeta[key];
  const questions =
    key === "ielts-listening"
      ? createIeltsListeningQuestions(setNumber)
      : key === "ielts-academic-reading"
        ? createIeltsAcademicReadingQuestions(setNumber)
        : key === "ielts-general-reading"
          ? createIeltsGeneralReadingQuestions(setNumber)
          : key === "ielts-writing"
            ? createIeltsWritingStrategyQuestions(setNumber)
            : createIeltsSpeakingQuestions(setNumber);

  return {
    id: `${key}-set-${setNumber}`,
    slug: config.slug,
    category: "ielts",
    practiceGroup: key,
    title: config.title,
    description: config.description,
    examType: "IELTS",
    sectionLabel: config.sectionLabel,
    level: config.level,
    questionCount: questions.length,
    estimatedMinutes: config.minutes,
    seoTitle: `${config.title} | Nishaglobal Education`,
    seoDescription: `${config.description} Use answer explanations and exam-pattern guidance for better IELTS preparation.`,
    keywords: config.keywords,
    intro: config.intro,
    isOriginal: true,
    isLive: true,
    questions,
  };
}

function createToeflReadingQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    {
      skill: "main idea",
      best: "Identify the passage's central claim before checking details",
      weak: "Choose the first familiar sentence",
      keyword: "overall argument",
    },
    {
      skill: "inference",
      best: "Choose the option best supported by the passage evidence",
      weak: "Use outside personal knowledge",
      keyword: "evidence-based inference",
    },
    {
      skill: "vocabulary in context",
      best: "Use surrounding sentence meaning to infer the target word",
      weak: "Pick the shortest option quickly",
      keyword: "context clues",
    },
    {
      skill: "reference questions",
      best: "Find the exact noun phrase that pronouns refer to",
      weak: "Guess from general topic only",
      keyword: "pronoun tracking",
    },
    {
      skill: "paragraph purpose",
      best: "Ask why this paragraph exists in the argument structure",
      weak: "Memorize one line without purpose",
      keyword: "text function",
    },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 710 + round * 10;
    return [
      createGeneratedQuestion(
        `toefl-reading-${setNumber}-${round + 1}`,
        `In TOEFL Reading, what is the best approach for ${topic.skill} questions?`,
        topic.best,
        [topic.weak, "Skip the passage and read options only", "Answer before checking evidence"],
        `For ${topic.skill}, the strongest method is to focus on ${topic.keyword}.`,
        "reading strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `toefl-reading-${setNumber}-${round + 11}`,
        `Which mistake most often lowers accuracy in ${topic.skill} questions?`,
        topic.weak,
        [topic.best, "Marking key evidence lines", "Re-checking final choice against text"],
        `${topic.weak} commonly reduces score consistency in TOEFL reading.`,
        "reading error control",
        "medium",
        seed + 2
      ),
    ];
  });
}

function createToeflListeningQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    {
      skill: "lecture detail",
      best: "Note speaker transitions and supporting examples",
      weak: "Write every word without structure",
      keyword: "organized note-taking",
    },
    {
      skill: "speaker purpose",
      best: "Track why the speaker says each key point",
      weak: "Focus only on isolated vocabulary",
      keyword: "intent recognition",
    },
    {
      skill: "conversation problem-solution",
      best: "Identify the student's problem and recommended next step",
      weak: "Ignore solution details",
      keyword: "problem-solution mapping",
    },
    {
      skill: "attitude and tone",
      best: "Use word choice and emphasis to infer attitude",
      weak: "Assume neutral tone always",
      keyword: "tone inference",
    },
    {
      skill: "listening recall",
      best: "Review notes mentally before selecting answers",
      weak: "Guess immediately without checking notes",
      keyword: "recall verification",
    },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 720 + round * 10;
    return [
      createGeneratedQuestion(
        `toefl-listening-${setNumber}-${round + 1}`,
        `What is the strongest listening habit for TOEFL ${topic.skill} tasks?`,
        topic.best,
        [topic.weak, "Pause frequently and lose context", "Ignore signpost words"],
        `Better TOEFL listening comes from ${topic.keyword} and active structure tracking.`,
        "listening strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `toefl-listening-${setNumber}-${round + 11}`,
        `Which error most often weakens ${topic.skill} performance?`,
        topic.weak,
        [topic.best, "Checking notes before final answer", "Separating main points from examples"],
        `${topic.weak} increases careless mistakes in listening sections.`,
        "listening error control",
        "medium",
        seed + 2
      ),
    ];
  });
}

function createToeflSpeakingQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    {
      task: "independent speaking",
      best: "State your position quickly, then support it with one clear example",
      weak: "Spend all time on background without answering directly",
      keyword: "direct response",
    },
    {
      task: "integrated speaking",
      best: "Summarize both sources accurately before giving conclusion",
      weak: "Ignore one source and give personal opinion only",
      keyword: "source integration",
    },
    {
      task: "timed speaking",
      best: "Use a short template: point, reason, example, close",
      weak: "Start speaking without any structure",
      keyword: "response structure",
    },
    {
      task: "delivery",
      best: "Keep pace steady and pronunciation clear",
      weak: "Rush every line with unclear stress",
      keyword: "speech clarity",
    },
    {
      task: "content quality",
      best: "Use relevant detail instead of generic statements",
      weak: "Repeat the same line in different words",
      keyword: "content development",
    },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 730 + round * 10;
    return [
      createGeneratedQuestion(
        `toefl-speaking-${setNumber}-${round + 1}`,
        `For TOEFL ${topic.task}, what is the strongest answer strategy?`,
        topic.best,
        [topic.weak, "Memorize one answer for all prompts", "Use complex words without control"],
        `Higher speaking scores rely on ${topic.keyword} and relevant support.`,
        "speaking strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `toefl-speaking-${setNumber}-${round + 11}`,
        `Which issue most often lowers score in ${topic.task}?`,
        topic.weak,
        [topic.best, "Planning keywords before speaking", "Reviewing recording after mock"],
        `${topic.weak} usually reduces clarity and score reliability.`,
        "speaking mistakes",
        "medium",
        seed + 2
      ),
    ];
  });
}

function createToeflWritingQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    {
      task: "integrated writing",
      best: "Present how listening points challenge or support reading points",
      weak: "Copy full reading lines without synthesis",
      keyword: "comparison mapping",
    },
    {
      task: "academic discussion task",
      best: "Take one clear stance and support it with specific reasoning",
      weak: "Give vague agreement without support",
      keyword: "clear argument",
    },
    {
      task: "coherence",
      best: "Use logical sequencing and paragraph separation",
      weak: "Jump between unrelated ideas",
      keyword: "logical organization",
    },
    {
      task: "evidence use",
      best: "Use concrete support instead of generic claims",
      weak: "State opinion repeatedly without proof",
      keyword: "supported claims",
    },
    {
      task: "language accuracy",
      best: "Prioritize correct grammar and precise vocabulary",
      weak: "Force advanced words incorrectly",
      keyword: "accuracy first",
    },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 740 + round * 10;
    return [
      createGeneratedQuestion(
        `toefl-writing-${setNumber}-${round + 1}`,
        `In TOEFL ${topic.task}, what should be prioritized first?`,
        topic.best,
        [topic.weak, "Write as long as possible without planning", "Avoid paragraph breaks"],
        `Better writing scores come from ${topic.keyword} and direct task response.`,
        "writing strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `toefl-writing-${setNumber}-${round + 11}`,
        `Which mistake most often harms ${topic.task} quality?`,
        topic.weak,
        [topic.best, "Checking task requirement before finishing", "Using clear transitions"],
        `${topic.weak} commonly lowers writing clarity and coherence.`,
        "writing error control",
        "medium",
        seed + 2
      ),
    ];
  });
}

function createToeflIntegratedSkillQuestions(setNumber: number): PracticeQuestion[] {
  const topics = [
    {
      area: "read-listen synthesis",
      best: "Track agreements and contradictions between sources",
      weak: "Treat each source separately without linkage",
      keyword: "cross-source linking",
    },
    {
      area: "note-to-answer conversion",
      best: "Convert notes into structured points before answering",
      weak: "Read notes randomly while speaking",
      keyword: "structured recall",
    },
    {
      area: "time management",
      best: "Allocate prep, response, and review time deliberately",
      weak: "Use most time on one early question",
      keyword: "time balance",
    },
    {
      area: "accuracy under pressure",
      best: "Confirm claim-source match before final answer",
      weak: "Guess when evidence is available",
      keyword: "evidence check",
    },
    {
      area: "score consistency",
      best: "Practice mixed tasks in one session weekly",
      weak: "Practice only one easy task type repeatedly",
      keyword: "mixed-task routine",
    },
  ] as const;

  return topics.flatMap((topic, round) => {
    const seed = setNumber * 750 + round * 10;
    return [
      createGeneratedQuestion(
        `toefl-integrated-${setNumber}-${round + 1}`,
        `For TOEFL ${topic.area}, which strategy gives the strongest outcome?`,
        topic.best,
        [topic.weak, "Ignore timing and focus only on one skill", "Use one fixed template for all tasks"],
        `${topic.keyword} is essential for stable integrated-task performance.`,
        "integrated strategy",
        "easy",
        seed + 1
      ),
      createGeneratedQuestion(
        `toefl-integrated-${setNumber}-${round + 11}`,
        `What is the most common score-limiting mistake in ${topic.area}?`,
        topic.weak,
        [topic.best, "Linking evidence to claim clearly", "Reviewing weak integrated tasks after mock"],
        `${topic.weak} weakens response quality in integrated TOEFL tasks.`,
        "integrated mistakes",
        "medium",
        seed + 2
      ),
    ];
  });
}

function createToeflPracticeSet(
  key: ToeflPracticeGroupKey,
  setNumber: number
): PracticeSet {
  const baseMeta: Record<
    ToeflPracticeGroupKey,
    {
      title: string;
      slug: string;
      description: string;
      minutes: number;
      level: "beginner" | "intermediate" | "advanced";
      intro: string;
      sectionLabel: string;
      keywords: string[];
    }
  > = {
    "toefl-reading": {
      title: `TOEFL Reading Practice Test - Set ${setNumber}`,
      slug: `toefl-reading-practice-test-${setNumber}`,
      description:
        "TOEFL reading practice with passage logic, inference, vocabulary in context, and evidence-based answer selection.",
      minutes: 30,
      level: "beginner",
      intro:
        "Use this set to strengthen academic reading speed and answer-justification quality for TOEFL preparation.",
      sectionLabel: "Reading Practice",
      keywords: [
        "TOEFL reading practice",
        "TOEFL iBT reading questions",
        "TOEFL passage strategy",
        "TOEFL reading answers",
        `TOEFL reading set ${setNumber}`,
      ],
    },
    "toefl-listening": {
      title: `TOEFL Listening Practice Test - Set ${setNumber}`,
      slug: `toefl-listening-practice-test-${setNumber}`,
      description:
        "TOEFL listening practice for lecture and conversation questions with note-based decision training.",
      minutes: 30,
      level: "beginner",
      intro:
        "Use this set to improve listening focus, note quality, and answer confidence under timed conditions.",
      sectionLabel: "Listening Practice",
      keywords: [
        "TOEFL listening practice",
        "TOEFL iBT listening questions",
        "TOEFL listening mock",
        "TOEFL note taking",
        `TOEFL listening set ${setNumber}`,
      ],
    },
    "toefl-speaking": {
      title: `TOEFL Speaking Practice Test - Set ${setNumber}`,
      slug: `toefl-speaking-practice-test-${setNumber}`,
      description:
        "TOEFL speaking strategy practice for independent and integrated response quality, structure, and delivery.",
      minutes: 20,
      level: "intermediate",
      intro:
        "Use this set to improve response structure, clarity, and timing before live speaking recording rounds.",
      sectionLabel: "Speaking Practice",
      keywords: [
        "TOEFL speaking practice",
        "TOEFL speaking strategy",
        "TOEFL integrated speaking",
        "TOEFL speaking answers",
        `TOEFL speaking set ${setNumber}`,
      ],
    },
    "toefl-writing": {
      title: `TOEFL Writing Practice Test - Set ${setNumber}`,
      slug: `toefl-writing-practice-test-${setNumber}`,
      description:
        "TOEFL writing strategy practice for integrated writing and academic discussion response quality.",
      minutes: 25,
      level: "intermediate",
      intro:
        "Use this set to improve task response, coherence, evidence usage, and grammar control in TOEFL writing tasks.",
      sectionLabel: "Writing Practice",
      keywords: [
        "TOEFL writing practice",
        "TOEFL integrated writing",
        "TOEFL writing strategy",
        "TOEFL writing answers",
        `TOEFL writing set ${setNumber}`,
      ],
    },
    "toefl-integrated": {
      title: `TOEFL Integrated Skills Practice Test - Set ${setNumber}`,
      slug: `toefl-integrated-skills-practice-test-${setNumber}`,
      description:
        "TOEFL integrated-skills practice combining reading, listening, speaking, and writing strategy decisions.",
      minutes: 28,
      level: "intermediate",
      intro:
        "Use this set to build score consistency across mixed TOEFL task types, especially integrated prompts.",
      sectionLabel: "Integrated Skills Practice",
      keywords: [
        "TOEFL integrated skills",
        "TOEFL mixed practice",
        "TOEFL iBT integrated tasks",
        "TOEFL preparation online",
        `TOEFL integrated set ${setNumber}`,
      ],
    },
  };

  const config = baseMeta[key];
  const questions =
    key === "toefl-reading"
      ? createToeflReadingQuestions(setNumber)
      : key === "toefl-listening"
        ? createToeflListeningQuestions(setNumber)
        : key === "toefl-speaking"
          ? createToeflSpeakingQuestions(setNumber)
          : key === "toefl-writing"
            ? createToeflWritingQuestions(setNumber)
            : createToeflIntegratedSkillQuestions(setNumber);

  return {
    id: `${key}-set-${setNumber}`,
    slug: config.slug,
    category: "toefl",
    practiceGroup: key,
    title: config.title,
    description: config.description,
    examType: "TOEFL iBT",
    sectionLabel: config.sectionLabel,
    level: config.level,
    questionCount: questions.length,
    estimatedMinutes: config.minutes,
    seoTitle: `${config.title} | Nishaglobal Education`,
    seoDescription: `${config.description} Practice with explanation-based guidance for stronger TOEFL readiness.`,
    keywords: config.keywords,
    intro: config.intro,
    isOriginal: true,
    isLive: true,
    questions,
  };
}

export const engineeringExamRules: ExamRule[] = [
  {
    examSlug: "comedk",
    examName: "COMEDK",
    shortName: "COMEDK",
    officialBody: "COMEDK",
    officialUrl: "https://www.comedk.org/",
    mode: "Computer Based Test (CBT)",
    duration: "As per admit card slot",
    totalQuestions: 180,
    totalMarks: 180,
    subjects: ["Physics", "Chemistry", "Mathematics"],
    marking: "+1 correct",
    negativeMarking: "No negative marking",
    languages: ["English"],
    note: "60 MCQs each in Physics, Chemistry, and Mathematics.",
    disclaimer:
      "Practice sets here are original and not official COMEDK question papers.",
  },
  {
    examSlug: "kcet",
    examName: "KCET",
    shortName: "KCET",
    officialBody: "Karnataka Examinations Authority (KEA)",
    officialUrl: "https://cetonline.karnataka.gov.in/",
    mode: "Pen-paper based examination",
    duration: "1 hour 20 minutes per subject session",
    totalQuestions: 180,
    totalMarks: 180,
    subjects: ["Mathematics", "Physics", "Chemistry"],
    marking: "+1 correct",
    negativeMarking: "No negative marking",
    languages: ["English", "Kannada"],
    note: "60 questions each in Mathematics, Physics, and Chemistry.",
    disclaimer:
      "Pattern should be rechecked against the latest KEA notice each year.",
  },
  {
    examSlug: "wbjee",
    examName: "WBJEE",
    shortName: "WBJEE",
    officialBody: "WBJEEB",
    officialUrl: "https://wbjeeb.nic.in/wbjee/",
    mode: "Offline OMR",
    duration: "4 hours total (2 hours Paper 1 + 2 hours Paper 2)",
    totalQuestions: 155,
    totalMarks: 200,
    subjects: ["Mathematics", "Physics", "Chemistry"],
    marking: "Category 1: +1, Category 2/3: +2",
    negativeMarking: "Category 1: -0.25, Category 2: -0.5, Category 3: none",
    note: "Paper 1 is Mathematics. Paper 2 is Physics + Chemistry.",
    disclaimer:
      "Use original WBJEE-style questions only. Do not copy official board papers.",
  },
  {
    examSlug: "jee-main",
    examName: "JEE Main",
    shortName: "JEE Main",
    officialBody: "National Testing Agency (NTA)",
    officialUrl: "https://jeemain.nta.nic.in/",
    mode: "Computer Based Test (CBT)",
    duration: "3 hours",
    totalQuestions: 90,
    totalMarks: 300,
    subjects: ["Mathematics", "Physics", "Chemistry"],
    marking: "+4 correct, -1 incorrect, 0 unattempted",
    negativeMarking: "Yes, in Section A and Section B",
    note: "Paper contains 90 questions (30 per subject), with 75 attempted as per the current exam attempt structure.",
    disclaimer:
      "Practice sets on this page are original simulated questions based on the latest public exam pattern. They are not official NTA papers.",
  },
  {
    examSlug: "jee-advanced",
    examName: "JEE Advanced",
    shortName: "JEE Advanced",
    officialBody: "JEE Advanced / Organizing IIT",
    officialUrl: "https://jeeadv.ac.in/",
    mode: "Computer Based Test (CBT)",
    duration: "2 papers of 3 hours each",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    marking: "Varies by question type and year",
    negativeMarking: "May apply for some questions",
    note: "Both papers are compulsory. Pattern is not fixed in the same way as JEE Main.",
    disclaimer:
      "Do not hardcode one fixed official question count for JEE Advanced. Use simulated sets and clearly label them as pattern-based practice.",
  },
];

type RailwayPatternConfig = {
  key: "group-d" | "ntpc-cbt-1" | "alp-technician-cbt-1" | "ticket-clerk-tt";
  slugPrefix: string;
  title: string;
  titleHi: string;
  chapter: string;
  chapterHi: string;
  questionCount: number;
  durationMin: number;
  mathCount: number;
  reasoningCount: number;
  scienceCount: number;
  gaCount: number;
};

function createRailwayMathQuestions(patternKey: string, setNumber: number, count: number): GovPracticeQuestion[] {
  return Array.from({ length: count }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 6000 + qNo;
    const maxPattern = setNumber <= 2 ? 4 : setNumber <= 4 ? 5 : 6;
    const pattern = index % maxPattern;

    if (pattern === 0) {
      const a = 36 + setNumber + qNo;
      const b = 14 + (qNo % 9);
      const ans = a + b;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `Find the value: ${a} + ${b}`,
        `मान ज्ञात करें: ${a} + ${b}`,
        { en: `${ans}`, hi: `${ans}` },
        [
          { en: `${ans - 2}`, hi: `${ans - 2}` },
          { en: `${ans + 2}`, hi: `${ans + 2}` },
          { en: `${ans + 4}`, hi: `${ans + 4}` },
        ],
        "Use direct addition.",
        "सीधा जोड़ करें।",
        seed
      );
    }

    if (pattern === 1) {
      const base = 120 + qNo * 2;
      const percent = 25;
      const ans = (base * percent) / 100;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `What is ${percent}% of ${base}?`,
        `${base} का ${percent}% कितना है?`,
        { en: `${ans}`, hi: `${ans}` },
        [
          { en: `${ans - 3}`, hi: `${ans - 3}` },
          { en: `${ans + 3}`, hi: `${ans + 3}` },
          { en: `${ans + 6}`, hi: `${ans + 6}` },
        ],
        "Percentage = (percent/100) x number.",
        "प्रतिशत = (प्रतिशत/100) x संख्या।",
        seed
      );
    }

    if (pattern === 2) {
      const speed = 36 + (qNo % 10);
      const time = 2 + (setNumber % 3);
      const ans = speed * time;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `A train runs at ${speed} km/h for ${time} hours. Distance is:`,
        `एक ट्रेन ${speed} किमी/घंटा की गति से ${time} घंटे चलती है। दूरी है:`,
        { en: `${ans} km`, hi: `${ans} किमी` },
        [
          { en: `${ans - speed} km`, hi: `${ans - speed} किमी` },
          { en: `${ans + speed} km`, hi: `${ans + speed} किमी` },
          { en: `${ans + 12} km`, hi: `${ans + 12} किमी` },
        ],
        "Distance = Speed x Time.",
        "दूरी = गति x समय।",
        seed
      );
    }

    if (pattern === 3) {
      const cp = 180 + qNo * 4;
      const sp = cp + 36;
      const profit = ((sp - cp) / cp) * 100;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `An item is bought for Rs. ${cp} and sold for Rs. ${sp}. Profit % is:`,
        `एक वस्तु Rs. ${cp} में खरीदी गई और Rs. ${sp} में बेची गई। लाभ % है:`,
        { en: `${formatValue(profit)}%`, hi: `${formatValue(profit)}%` },
        [
          { en: `${formatValue(profit - 5)}%`, hi: `${formatValue(profit - 5)}%` },
          { en: `${formatValue(profit + 5)}%`, hi: `${formatValue(profit + 5)}%` },
          { en: `${formatValue(profit + 10)}%`, hi: `${formatValue(profit + 10)}%` },
        ],
        "Profit% = ((SP - CP) / CP) x 100.",
        "लाभ% = ((विक्रय - लागत) / लागत) x 100।",
        seed
      );
    }

    if (pattern === 4) {
      const p = 1000 + qNo * 20;
      const r = 8;
      const t = 2;
      const si = (p * r * t) / 100;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-math-${qNo}`,
        "Mathematics",
        "गणित",
        `Simple Interest on Rs. ${p} at ${r}% for ${t} years is:`,
        `Rs. ${p} पर ${r}% दर से ${t} वर्षों का साधारण ब्याज है:`,
        { en: `Rs. ${si}`, hi: `Rs. ${si}` },
        [
          { en: `Rs. ${si - 80}`, hi: `Rs. ${si - 80}` },
          { en: `Rs. ${si + 80}`, hi: `Rs. ${si + 80}` },
          { en: `Rs. ${si + 160}`, hi: `Rs. ${si + 160}` },
        ],
        "SI = (P x R x T) / 100.",
        "SI = (मूलधन x दर x समय) / 100।",
        seed
      );
    }

    const a = 48 + qNo;
    const b = 6 + (qNo % 6);
    const ans = a / b;
    return createSeededGovQuestion(
      `${patternKey}-set${setNumber}-math-${qNo}`,
      "Mathematics",
      "गणित",
      `Find: ${a} / ${b}`,
      `ज्ञात करें: ${a} / ${b}`,
      { en: `${formatValue(ans)}`, hi: `${formatValue(ans)}` },
      [
        { en: `${formatValue(ans - 1)}`, hi: `${formatValue(ans - 1)}` },
        { en: `${formatValue(ans + 1)}`, hi: `${formatValue(ans + 1)}` },
        { en: `${formatValue(ans + 2)}`, hi: `${formatValue(ans + 2)}` },
      ],
      "Use standard division.",
      "सामान्य भाग करें।",
      seed
    );
  });
}

function createRailwayReasoningQuestions(patternKey: string, setNumber: number, count: number): GovPracticeQuestion[] {
  return Array.from({ length: count }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 7000 + qNo;
    const maxPattern = setNumber <= 2 ? 4 : setNumber <= 4 ? 5 : 6;
    const pattern = index % maxPattern;

    if (pattern === 0) {
      const start = 4 + setNumber + qNo;
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        `Find the next term: ${start}, ${start + 3}, ${start + 6}, ${start + 9}, ?`,
        `अगला पद ज्ञात करें: ${start}, ${start + 3}, ${start + 6}, ${start + 9}, ?`,
        { en: `${start + 12}`, hi: `${start + 12}` },
        [
          { en: `${start + 11}`, hi: `${start + 11}` },
          { en: `${start + 13}`, hi: `${start + 13}` },
          { en: `${start + 15}`, hi: `${start + 15}` },
        ],
        "The series increases by +3 each step.",
        "श्रृंखला हर बार +3 से बढ़ रही है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "Book : Read :: Food : ?",
        "Book : Read :: Food : ?",
        { en: "Eat", hi: "खाना" },
        [
          { en: "Write", hi: "लिखना" },
          { en: "Cook", hi: "पकाना" },
          { en: "Buy", hi: "खरीदना" },
        ],
        "A book is read, food is eaten.",
        "पुस्तक पढ़ी जाती है, भोजन खाया जाता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "If CAT is coded as DBU, then DOG is coded as:",
        "यदि CAT को DBU लिखा जाए, तो DOG लिखा जाएगा:",
        { en: "EPH", hi: "EPH" },
        [
          { en: "EOG", hi: "EOG" },
          { en: "EOH", hi: "EOH" },
          { en: "FPH", hi: "FPH" },
        ],
        "Each letter is shifted by +1 in alphabet.",
        "हर अक्षर को वर्णमाला में +1 शिफ्ट किया गया है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "A walks 4 km North, then 3 km East. Shortest distance from start is:",
        "A 4 किमी उत्तर और फिर 3 किमी पूर्व चलता है। प्रारंभ बिंदु से न्यूनतम दूरी है:",
        { en: "5 km", hi: "5 किमी" },
        [
          { en: "7 km", hi: "7 किमी" },
          { en: "6 km", hi: "6 किमी" },
          { en: "4 km", hi: "4 किमी" },
        ],
        "Use Pythagoras: sqrt(4^2 + 3^2) = 5.",
        "पाइथागोरस नियम: sqrt(4^2 + 3^2) = 5।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-reason-${qNo}`,
        "Reasoning",
        "तर्क",
        "A is mother of B and B is sister of C. How is A related to C?",
        "A, B की माता है और B, C की बहन है। A, C से कैसे संबंधित है?",
        { en: "Mother", hi: "माता" },
        [
          { en: "Sister", hi: "बहन" },
          { en: "Grandmother", hi: "दादी" },
          { en: "Aunt", hi: "चाची" },
        ],
        "If B and C are siblings and A is B's mother, A is also C's mother.",
        "यदि B और C भाई-बहन हैं और A, B की माता है, तो A, C की भी माता है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `${patternKey}-set${setNumber}-reason-${qNo}`,
      "Reasoning",
      "तर्क",
      "All trains are vehicles. Some vehicles are electric. Therefore:",
      "सभी ट्रेनें वाहन हैं। कुछ वाहन इलेक्ट्रिक हैं। इसलिए:",
      { en: "Some trains may be electric", hi: "कुछ ट्रेनें इलेक्ट्रिक हो सकती हैं" },
      [
        { en: "All trains are electric", hi: "सभी ट्रेनें इलेक्ट्रिक हैं" },
        { en: "No train is electric", hi: "कोई ट्रेन इलेक्ट्रिक नहीं है" },
        { en: "Cannot be determined", hi: "निर्धारित नहीं किया जा सकता" },
      ],
      "Only a possibility can be concluded from the given statements.",
      "दिए गए कथनों से केवल संभावना निकाली जा सकती है।",
      seed
    );
  });
}

function createRailwayScienceQuestions(patternKey: string, setNumber: number, count: number): GovPracticeQuestion[] {
  return Array.from({ length: count }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 8000 + qNo;
    const maxPattern = setNumber <= 2 ? 4 : setNumber <= 4 ? 5 : 6;
    const pattern = index % maxPattern;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-science-${qNo}`,
        "Science",
        "विज्ञान",
        "The SI unit of force is:",
        "बल की SI इकाई है:",
        { en: "Newton", hi: "न्यूटन" },
        [
          { en: "Joule", hi: "जूल" },
          { en: "Watt", hi: "वाट" },
          { en: "Pascal", hi: "पास्कल" },
        ],
        "Force is measured in Newton.",
        "बल को न्यूटन में मापा जाता है।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-science-${qNo}`,
        "Science",
        "विज्ञान",
        "Which gas is most abundant in Earth's atmosphere?",
        "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
        { en: "Nitrogen", hi: "नाइट्रोजन" },
        [
          { en: "Oxygen", hi: "ऑक्सीजन" },
          { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
          { en: "Hydrogen", hi: "हाइड्रोजन" },
        ],
        "Nitrogen is about 78% of atmosphere.",
        "वायुमंडल में नाइट्रोजन लगभग 78% है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-science-${qNo}`,
        "Science",
        "विज्ञान",
        "The boiling point of water at normal pressure is:",
        "सामान्य दाब पर पानी का क्वथनांक है:",
        { en: "100 deg C", hi: "100 डिग्री C" },
        [
          { en: "90 deg C", hi: "90 डिग्री C" },
          { en: "95 deg C", hi: "95 डिग्री C" },
          { en: "110 deg C", hi: "110 डिग्री C" },
        ],
        "Water boils at 100 deg C under standard conditions.",
        "मानक दशाओं में पानी 100 डिग्री C पर उबलता है।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-science-${qNo}`,
        "Science",
        "विज्ञान",
        "Which vitamin is formed in our body with sunlight?",
        "सूर्य के प्रकाश से शरीर में कौन सा विटामिन बनता है?",
        { en: "Vitamin D", hi: "विटामिन D" },
        [
          { en: "Vitamin A", hi: "विटामिन A" },
          { en: "Vitamin B12", hi: "विटामिन B12" },
          { en: "Vitamin C", hi: "विटामिन C" },
        ],
        "Sunlight helps in synthesis of Vitamin D.",
        "सूर्य का प्रकाश विटामिन D के संश्लेषण में सहायक है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-science-${qNo}`,
        "Science",
        "विज्ञान",
        "Which part of human body pumps blood?",
        "मानव शरीर में रक्त पंप करने वाला अंग है:",
        { en: "Heart", hi: "हृदय" },
        [
          { en: "Liver", hi: "यकृत" },
          { en: "Lungs", hi: "फेफड़े" },
          { en: "Kidney", hi: "गुर्दा" },
        ],
        "Heart pumps blood throughout the body.",
        "हृदय पूरे शरीर में रक्त पंप करता है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `${patternKey}-set${setNumber}-science-${qNo}`,
      "Science",
      "विज्ञान",
      "The chemical formula of common salt is:",
      "साधारण नमक का रासायनिक सूत्र है:",
      { en: "NaCl", hi: "NaCl" },
      [
        { en: "H2O", hi: "H2O" },
        { en: "CO2", hi: "CO2" },
        { en: "O2", hi: "O2" },
      ],
      "Common salt is sodium chloride (NaCl).",
      "साधारण नमक सोडियम क्लोराइड (NaCl) है।",
      seed
    );
  });
}

function createRailwayGaQuestions(patternKey: string, setNumber: number, count: number): GovPracticeQuestion[] {
  return Array.from({ length: count }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 9000 + qNo;
    const maxPattern = setNumber <= 2 ? 4 : setNumber <= 4 ? 5 : 6;
    const pattern = index % maxPattern;

    if (pattern === 0) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य जागरूकता",
        "The Constitution of India came into force on:",
        "भारत का संविधान लागू हुआ:",
        { en: "26 January 1950", hi: "26 जनवरी 1950" },
        [
          { en: "15 August 1947", hi: "15 अगस्त 1947" },
          { en: "26 November 1949", hi: "26 नवंबर 1949" },
          { en: "2 October 1950", hi: "2 अक्टूबर 1950" },
        ],
        "Constitution came into effect on 26 January 1950.",
        "संविधान 26 जनवरी 1950 को प्रभावी हुआ।",
        seed
      );
    }

    if (pattern === 1) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य जागरूकता",
        "Indian Railways is governed under which ministry?",
        "भारतीय रेलवे किस मंत्रालय के अंतर्गत आता है?",
        { en: "Ministry of Railways", hi: "रेल मंत्रालय" },
        [
          { en: "Ministry of Transport", hi: "परिवहन मंत्रालय" },
          { en: "Ministry of Home Affairs", hi: "गृह मंत्रालय" },
          { en: "Ministry of Industry", hi: "उद्योग मंत्रालय" },
        ],
        "Indian Railways functions under Ministry of Railways.",
        "भारतीय रेलवे रेल मंत्रालय के अंतर्गत कार्य करता है।",
        seed
      );
    }

    if (pattern === 2) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य जागरूकता",
        "Who is known as the Father of the Indian Constitution?",
        "भारतीय संविधान के जनक किसे कहा जाता है?",
        { en: "Dr. B. R. Ambedkar", hi: "डॉ. बी. आर. अंबेडकर" },
        [
          { en: "Mahatma Gandhi", hi: "महात्मा गांधी" },
          { en: "Jawaharlal Nehru", hi: "जवाहरलाल नेहरू" },
          { en: "Sardar Patel", hi: "सरदार पटेल" },
        ],
        "Dr. B. R. Ambedkar chaired the drafting committee.",
        "डॉ. बी. आर. अंबेडकर मसौदा समिति के अध्यक्ष थे।",
        seed
      );
    }

    if (pattern === 3) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य जागरूकता",
        "The currency of Japan is:",
        "जापान की मुद्रा है:",
        { en: "Yen", hi: "येन" },
        [
          { en: "Won", hi: "वॉन" },
          { en: "Euro", hi: "यूरो" },
          { en: "Peso", hi: "पेसो" },
        ],
        "The official currency of Japan is Yen.",
        "जापान की आधिकारिक मुद्रा येन है।",
        seed
      );
    }

    if (pattern === 4) {
      return createSeededGovQuestion(
        `${patternKey}-set${setNumber}-ga-${qNo}`,
        "General Awareness",
        "सामान्य जागरूकता",
        "Which is the longest river in India?",
        "भारत की सबसे लंबी नदी कौन सी है?",
        { en: "Ganga", hi: "गंगा" },
        [
          { en: "Yamuna", hi: "यमुना" },
          { en: "Godavari", hi: "गोदावरी" },
          { en: "Narmada", hi: "नर्मदा" },
        ],
        "Ganga is considered the longest river in India in standard GK exams.",
        "सामान्य GK में गंगा को भारत की सबसे लंबी नदी माना जाता है।",
        seed
      );
    }

    return createSeededGovQuestion(
      `${patternKey}-set${setNumber}-ga-${qNo}`,
      "General Awareness",
      "सामान्य जागरूकता",
      "Who wrote the national song 'Vande Mataram'?",
      "राष्ट्रीय गीत 'वंदे मातरम्' किसने लिखा?",
      { en: "Bankim Chandra Chattopadhyay", hi: "बंकिम चंद्र चट्टोपाध्याय" },
      [
        { en: "Rabindranath Tagore", hi: "रवींद्रनाथ टैगोर" },
        { en: "Subramania Bharati", hi: "सुब्रमण्यम भारती" },
        { en: "Sarojini Naidu", hi: "सरोजिनी नायडू" },
      ],
      "Vande Mataram was written by Bankim Chandra Chattopadhyay.",
      "वंदे मातरम् बंकिम चंद्र चट्टोपाध्याय ने लिखा था।",
      seed
    );
  });
}

function generateRailwayPatternSets(config: RailwayPatternConfig, totalSets = 5): GovPracticeSet[] {
  return Array.from({ length: totalSets }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createRailwayMathQuestions(config.key, setNumber, config.mathCount),
      ...createRailwayReasoningQuestions(config.key, setNumber, config.reasoningCount),
      ...createRailwayScienceQuestions(config.key, setNumber, config.scienceCount),
      ...createRailwayGaQuestions(config.key, setNumber, config.gaCount),
    ];

    return {
      slug: `${config.slugPrefix}-mock-${setNumber}`,
      title: `${config.title} Mock Test ${setNumber}`,
      titleHi: `${config.titleHi} मॉक टेस्ट ${setNumber}`,
      chapter: config.chapter,
      chapterHi: config.chapterHi,
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: config.durationMin,
      questionCount: config.questionCount,
      bilingual: true,
      isLive: true,
      questions,
    };
  });
}

const railwayGroupDConfig: RailwayPatternConfig = {
  key: "group-d",
  slugPrefix: "rrb-group-d",
  title: "RRB Group D CBT",
  titleHi: "RRB ग्रुप D CBT",
  chapter: "Official-style Group D pattern (Math 25, Reasoning 30, Science 25, GA 20)",
  chapterHi: "ऑफिशियल-स्टाइल ग्रुप D पैटर्न (गणित 25, तर्क 30, विज्ञान 25, GA 20)",
  questionCount: 100,
  durationMin: 90,
  mathCount: 25,
  reasoningCount: 30,
  scienceCount: 25,
  gaCount: 20,
};

const railwayNtpcConfig: RailwayPatternConfig = {
  key: "ntpc-cbt-1",
  slugPrefix: "rrb-ntpc-cbt-1",
  title: "RRB NTPC CBT-1",
  titleHi: "RRB NTPC CBT-1",
  chapter: "Official-style NTPC CBT-1 pattern (Math 30, Reasoning 30, GA 40)",
  chapterHi: "ऑफिशियल-स्टाइल NTPC CBT-1 पैटर्न (गणित 30, तर्क 30, GA 40)",
  questionCount: 100,
  durationMin: 90,
  mathCount: 30,
  reasoningCount: 30,
  scienceCount: 10,
  gaCount: 30,
};

const railwayAlpTechnicianConfig: RailwayPatternConfig = {
  key: "alp-technician-cbt-1",
  slugPrefix: "rrb-alp-technician-cbt-1",
  title: "RRB ALP/Technician CBT-1",
  titleHi: "RRB ALP/टेक्नीशियन CBT-1",
  chapter: "Official-style ALP/Technician CBT-1 pattern (Math, Reasoning, Science, Current Affairs)",
  chapterHi: "ऑफिशियल-स्टाइल ALP/टेक्नीशियन CBT-1 पैटर्न (गणित, तर्क, विज्ञान, करेंट अफेयर्स)",
  questionCount: 75,
  durationMin: 60,
  mathCount: 20,
  reasoningCount: 25,
  scienceCount: 20,
  gaCount: 10,
};

const railwayTicketClerkTtConfig: RailwayPatternConfig = {
  key: "ticket-clerk-tt",
  slugPrefix: "rrb-ticket-clerk-tt",
  title: "RRB Ticket Clerk / TT CBT",
  titleHi: "RRB टिकट क्लर्क / TT CBT",
  chapter: "Official-style Ticket Clerk / TT pattern (Math 30, Reasoning 30, GA 40)",
  chapterHi: "ऑफिशियल-स्टाइल टिकट क्लर्क / TT पैटर्न (गणित 30, तर्क 30, GA 40)",
  questionCount: 100,
  durationMin: 90,
  mathCount: 30,
  reasoningCount: 30,
  scienceCount: 10,
  gaCount: 30,
};

function createNeetPhysicsQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 45 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2600 + qNo;
    const pattern = index % 5;
    const cycleIndex = Math.floor(index / 5);

    if (pattern === 0) {
      const u = 6 + (qNo % 8);
      const a = 2 + (setNumber % 4);
      const t = 3 + (qNo % 5);
      const v = u + a * t;
      return createSeededGovQuestion(
        `neet-phys-set${setNumber}-${qNo}`,
        "Physics",
        "भौतिकी",
        `For u = ${u} m/s, a = ${a} m/s^2 and t = ${t} s, final velocity v is:`,
        `u = ${u} m/s, a = ${a} m/s^2 और t = ${t} s के लिए अंतिम वेग v होगा:`,
        { en: `${v} m/s`, hi: `${v} m/s` },
        [
          { en: `${v - a} m/s`, hi: `${v - a} m/s` },
          { en: `${v + a} m/s`, hi: `${v + a} m/s` },
          { en: `${u + t} m/s`, hi: `${u + t} m/s` },
        ],
        "Use v = u + at.",
        "सूत्र v = u + at का उपयोग करें।",
        seed
      );
    }

    if (pattern === 1) {
      const force = 10 + (qNo % 7) * 5;
      const distance = 3 + (setNumber % 5);
      const work = force * distance;
      return createSeededGovQuestion(
        `neet-phys-set${setNumber}-${qNo}`,
        "Physics",
        "भौतिकी",
        `A force of ${force} N moves a body by ${distance} m in the same direction. Work done is:`,
        `${force} N का बल किसी वस्तु को ${distance} m उसी दिशा में विस्थापित करता है। किया गया कार्य होगा:`,
        { en: `${work} J`, hi: `${work} J` },
        [
          { en: `${work + force} J`, hi: `${work + force} J` },
          { en: `${work - distance} J`, hi: `${work - distance} J` },
          { en: `${force + distance} J`, hi: `${force + distance} J` },
        ],
        "Work done is W = F x s when force and displacement are in the same direction.",
        "जब बल और विस्थापन एक ही दिशा में हों, तब W = F x s होता है।",
        seed
      );
    }

    if (pattern === 2) {
      const current = 2 + (qNo % 6);
      const resistance = 4 + (setNumber % 6);
      const voltage = current * resistance;
      return createSeededGovQuestion(
        `neet-phys-set${setNumber}-${qNo}`,
        "Physics",
        "भौतिकी",
        `If current is ${current} A and resistance is ${resistance} ohm, potential difference is:`,
        `यदि धारा ${current} A और प्रतिरोध ${resistance} ohm है, तो विभवांतर होगा:`,
        { en: `${voltage} V`, hi: `${voltage} V` },
        [
          { en: `${voltage + 2} V`, hi: `${voltage + 2} V` },
          { en: `${voltage - 2} V`, hi: `${voltage - 2} V` },
          { en: `${current + resistance} V`, hi: `${current + resistance} V` },
        ],
        "Use Ohm's law V = IR.",
        "ओम के नियम V = IR का प्रयोग करें।",
        seed
      );
    }

    if (pattern === 3) {
      const siUnitBank = [
        {
          q: "electric charge",
          qHi: "विद्युत आवेश",
          a: "Coulomb",
          aHi: "कूलॉम",
          wrong: ["Ohm", "Tesla", "Watt"],
          wrongHi: ["ओम", "टेस्ला", "वाट"],
        },
        {
          q: "force",
          qHi: "बल",
          a: "Newton",
          aHi: "न्यूटन",
          wrong: ["Joule", "Pascal", "Watt"],
          wrongHi: ["जूल", "पास्कल", "वाट"],
        },
        {
          q: "power",
          qHi: "शक्ति",
          a: "Watt",
          aHi: "वाट",
          wrong: ["Joule", "Volt", "Newton"],
          wrongHi: ["जूल", "वोल्ट", "न्यूटन"],
        },
        {
          q: "pressure",
          qHi: "दाब",
          a: "Pascal",
          aHi: "पास्कल",
          wrong: ["Bar", "Newton", "Joule"],
          wrongHi: ["बार", "न्यूटन", "जूल"],
        },
        {
          q: "frequency",
          qHi: "आवृत्ति",
          a: "Hertz",
          aHi: "हर्ट्ज",
          wrong: ["Weber", "Farad", "Tesla"],
          wrongHi: ["वेबर", "फैराड", "टेस्ला"],
        },
        {
          q: "electric potential difference",
          qHi: "विभवांतर",
          a: "Volt",
          aHi: "वोल्ट",
          wrong: ["Ampere", "Coulomb", "Ohm"],
          wrongHi: ["ऐम्पियर", "कूलॉम", "ओम"],
        },
        {
          q: "resistance",
          qHi: "प्रतिरोध",
          a: "Ohm",
          aHi: "ओम",
          wrong: ["Volt", "Ampere", "Tesla"],
          wrongHi: ["वोल्ट", "ऐम्पियर", "टेस्ला"],
        },
        {
          q: "magnetic flux",
          qHi: "चुंबकीय फ्लक्स",
          a: "Weber",
          aHi: "वेबर",
          wrong: ["Tesla", "Henry", "Farad"],
          wrongHi: ["टेस्ला", "हेनरी", "फैराड"],
        },
        {
          q: "capacitance",
          qHi: "धारिता",
          a: "Farad",
          aHi: "फैराड",
          wrong: ["Henry", "Ohm", "Joule"],
          wrongHi: ["हेनरी", "ओम", "जूल"],
        },
      ];
      const item = siUnitBank[cycleIndex % siUnitBank.length];
      return createSeededGovQuestion(
        `neet-phys-set${setNumber}-${qNo}`,
        "Physics",
        "भौतिकी",
        `The SI unit of ${item.q} is:`,
        `${item.qHi} की SI इकाई है:`,
        { en: item.a, hi: item.aHi },
        [
          { en: item.wrong[0], hi: item.wrongHi[0] },
          { en: item.wrong[1], hi: item.wrongHi[1] },
          { en: item.wrong[2], hi: item.wrongHi[2] },
        ],
        `${item.q} is measured in ${item.a}.`,
        `${item.qHi} को ${item.aHi} में मापा जाता है।`,
        seed
      );
    }

    const constantBank = [
      {
        q: "Speed of light in vacuum is approximately:",
        qHi: "निर्वात में प्रकाश का वेग लगभग होता है:",
        a: "3 x 10^8 m/s",
        wrong: ["3 x 10^6 m/s", "3 x 10^3 m/s", "3 x 10^10 m/s"],
        exp: "The accepted value is approximately 3 x 10^8 m/s.",
        expHi: "स्वीकृत मान लगभग 3 x 10^8 m/s है।",
      },
      {
        q: "Acceleration due to gravity near Earth's surface is approximately:",
        qHi: "पृथ्वी की सतह के पास गुरुत्वजनित त्वरण लगभग होता है:",
        a: "9.8 m/s^2",
        wrong: ["98 m/s^2", "0.98 m/s^2", "4.9 m/s^2"],
        exp: "Near Earth, g is approximately 9.8 m/s^2.",
        expHi: "पृथ्वी के पास g का मान लगभग 9.8 m/s^2 होता है।",
      },
      {
        q: "Absolute zero temperature on Kelvin scale is:",
        qHi: "केल्विन स्केल पर परम शून्य तापमान है:",
        a: "0 K",
        wrong: ["-273 K", "273 K", "-100 K"],
        exp: "Absolute zero is defined as 0 K.",
        expHi: "परम शून्य 0 K पर परिभाषित है।",
      },
      {
        q: "The SI unit of energy is:",
        qHi: "ऊर्जा की SI इकाई है:",
        a: "Joule",
        wrong: ["Watt", "Newton", "Pascal"],
        exp: "Energy is measured in joule (J).",
        expHi: "ऊर्जा को जूल (J) में मापा जाता है।",
      },
      {
        q: "The speed of sound in air at room temperature is closest to:",
        qHi: "कमरे के तापमान पर वायु में ध्वनि का वेग सबसे निकट है:",
        a: "340 m/s",
        wrong: ["34 m/s", "170 m/s", "680 m/s"],
        exp: "At room temperature, sound speed in air is about 340 m/s.",
        expHi: "कमरे के तापमान पर वायु में ध्वनि का वेग लगभग 340 m/s होता है।",
      },
      {
        q: "The SI unit of magnetic field is:",
        qHi: "चुंबकीय क्षेत्र की SI इकाई है:",
        a: "Tesla",
        wrong: ["Weber", "Henry", "Farad"],
        exp: "Magnetic field is measured in tesla (T).",
        expHi: "चुंबकीय क्षेत्र को टेस्ला (T) में मापा जाता है।",
      },
      {
        q: "1 kilowatt is equal to:",
        qHi: "1 किलोवाट बराबर है:",
        a: "1000 watt",
        wrong: ["100 watt", "10 watt", "10000 watt"],
        exp: "Kilo means 10^3, so 1 kW = 1000 W.",
        expHi: "किलो का अर्थ 10^3 है, इसलिए 1 kW = 1000 W।",
      },
      {
        q: "The SI unit of momentum is:",
        qHi: "संवेग की SI इकाई है:",
        a: "kg m/s",
        wrong: ["N/s", "kg/m", "J/s"],
        exp: "Momentum p = mv, so unit is kg m/s.",
        expHi: "संवेग p = mv, इसलिए इकाई kg m/s होती है।",
      },
      {
        q: "Planck constant is denoted by:",
        qHi: "प्लांक स्थिरांक को किससे दर्शाते हैं:",
        a: "h",
        wrong: ["k", "c", "G"],
        exp: "Planck constant is represented by h.",
        expHi: "प्लांक स्थिरांक को h से दर्शाया जाता है।",
      },
    ];
    const constant = constantBank[cycleIndex % constantBank.length];
    return createSeededGovQuestion(
      `neet-phys-set${setNumber}-${qNo}`,
      "Physics",
      "भौतिकी",
      constant.q,
      constant.qHi,
      { en: constant.a, hi: constant.a },
      [
        { en: constant.wrong[0], hi: constant.wrong[0] },
        { en: constant.wrong[1], hi: constant.wrong[1] },
        { en: constant.wrong[2], hi: constant.wrong[2] },
      ],
      constant.exp,
      constant.expHi,
      seed
    );
  });
}

function createNeetChemistryQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 45 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2700 + qNo;
    const pattern = index % 5;
    const cycleIndex = Math.floor(index / 5);

    if (pattern === 0) {
      const moles = 2 + (qNo % 4);
      const molarMass = 18;
      const mass = moles * molarMass;
      return createSeededGovQuestion(
        `neet-chem-set${setNumber}-${qNo}`,
        "Chemistry",
        "रसायन विज्ञान",
        `Number of moles in ${mass} g of water (molar mass 18 g/mol) is:`,
        `पानी के ${mass} g (मोलर द्रव्यमान 18 g/mol) में मोलों की संख्या होगी:`,
        { en: `${moles}`, hi: `${moles}` },
        [
          { en: `${moles + 1}`, hi: `${moles + 1}` },
          { en: `${moles - 1}`, hi: `${moles - 1}` },
          { en: `${moles + 2}`, hi: `${moles + 2}` },
        ],
        "Moles = mass / molar mass.",
        "मोल = द्रव्यमान / मोलर द्रव्यमान।",
        seed
      );
    }

    if (pattern === 1) {
      const ph = 1 + (qNo % 12);
      return createSeededGovQuestion(
        `neet-chem-set${setNumber}-${qNo}`,
        "Chemistry",
        "रसायन विज्ञान",
        `If [H+] = 10^-${ph} mol/L, pH of the solution is:`,
        `यदि [H+] = 10^-${ph} mol/L है, तो विलयन का pH होगा:`,
        { en: `${ph}`, hi: `${ph}` },
        [
          { en: `${ph + 1}`, hi: `${ph + 1}` },
          { en: `${ph - 1 > 0 ? ph - 1 : ph + 2}`, hi: `${ph - 1 > 0 ? ph - 1 : ph + 2}` },
          { en: `${14 - ph}`, hi: `${14 - ph}` },
        ],
        "pH = -log[H+].",
        "pH = -log[H+] होता है।",
        seed
      );
    }

    if (pattern === 2) {
      const atomicNumberBank = [
        { z: 8, element: "Oxygen", elementHi: "ऑक्सीजन" },
        { z: 7, element: "Nitrogen", elementHi: "नाइट्रोजन" },
        { z: 6, element: "Carbon", elementHi: "कार्बन" },
        { z: 11, element: "Sodium", elementHi: "सोडियम" },
        { z: 12, element: "Magnesium", elementHi: "मैग्नीशियम" },
        { z: 13, element: "Aluminium", elementHi: "ऐल्युमिनियम" },
        { z: 14, element: "Silicon", elementHi: "सिलिकॉन" },
        { z: 15, element: "Phosphorus", elementHi: "फॉस्फोरस" },
        { z: 16, element: "Sulfur", elementHi: "सल्फर" },
      ];
      const item = atomicNumberBank[cycleIndex % atomicNumberBank.length];
      const wrong = atomicNumberBank
        .filter((entry) => entry.element !== item.element)
        .slice(0, 3);
      return createSeededGovQuestion(
        `neet-chem-set${setNumber}-${qNo}`,
        "Chemistry",
        "रसायन विज्ञान",
        `Which element has atomic number ${item.z}?`,
        `किस तत्व का परमाणु क्रमांक ${item.z} है?`,
        { en: item.element, hi: item.elementHi },
        [
          { en: wrong[0].element, hi: wrong[0].elementHi },
          { en: wrong[1].element, hi: wrong[1].elementHi },
          { en: wrong[2].element, hi: wrong[2].elementHi },
        ],
        `Atomic number ${item.z} corresponds to ${item.element}.`,
        `परमाणु क्रमांक ${item.z} ${item.elementHi} का होता है।`,
        seed
      );
    }

    if (pattern === 3) {
      const functionalGroupBank = [
        {
          family: "carboxylic acids",
          familyHi: "कार्बोक्सिलिक अम्ल",
          group: "-COOH",
          wrong: ["-CHO", "-OH", "-NH2"],
          exp: "Carboxylic acids contain the -COOH group.",
          expHi: "कार्बोक्सिलिक अम्ल में -COOH समूह होता है।",
        },
        {
          family: "aldehydes",
          familyHi: "ऐल्डिहाइड",
          group: "-CHO",
          wrong: ["-COOH", "-OH", "-CN"],
          exp: "Aldehydes are identified by the -CHO group.",
          expHi: "ऐल्डिहाइड में -CHO समूह होता है।",
        },
        {
          family: "alcohols",
          familyHi: "अल्कोहल",
          group: "-OH",
          wrong: ["-COOH", "-NH2", "-COO-"],
          exp: "Alcohols contain the hydroxyl (-OH) group.",
          expHi: "अल्कोहल में हाइड्रॉक्सिल (-OH) समूह होता है।",
        },
        {
          family: "amines",
          familyHi: "ऐमीन",
          group: "-NH2",
          wrong: ["-COOH", "-OH", "-CHO"],
          exp: "Primary amines contain the -NH2 group.",
          expHi: "प्राथमिक ऐमीन में -NH2 समूह होता है।",
        },
        {
          family: "ketones",
          familyHi: "कीटोन",
          group: ">C=O",
          wrong: ["-CHO", "-COOH", "-OH"],
          exp: "Ketones have a carbonyl group between two carbon atoms.",
          expHi: "कीटोन में दो कार्बन के बीच कार्बोनिल समूह होता है।",
        },
        {
          family: "esters",
          familyHi: "एस्टर",
          group: "-COO-",
          wrong: ["-COOH", "-CHO", "-OH"],
          exp: "Esters are characterized by the -COO- linkage.",
          expHi: "एस्टर में -COO- लिंकज होता है।",
        },
        {
          family: "ethers",
          familyHi: "ईथर",
          group: "-O-",
          wrong: ["-OH", "-COO-", "-NH2"],
          exp: "Ethers contain an oxygen atom between two carbon groups.",
          expHi: "ईथर में दो कार्बन समूहों के बीच ऑक्सीजन होता है।",
        },
        {
          family: "alkenes",
          familyHi: "अल्कीन",
          group: "C=C",
          wrong: ["C-C", "C#C", "C=O"],
          exp: "Alkenes are unsaturated hydrocarbons with C=C bond.",
          expHi: "अल्कीन में C=C डबल बॉन्ड होता है।",
        },
        {
          family: "alkynes",
          familyHi: "अल्काइन",
          group: "C#C",
          wrong: ["C=C", "C-C", "C=O"],
          exp: "Alkynes are characterized by a triple bond C#C.",
          expHi: "अल्काइन में C#C ट्रिपल बॉन्ड होता है।",
        },
      ];
      const item = functionalGroupBank[cycleIndex % functionalGroupBank.length];
      return createSeededGovQuestion(
        `neet-chem-set${setNumber}-${qNo}`,
        "Chemistry",
        "रसायन विज्ञान",
        `Functional group present in ${item.family} is:`,
        `${item.familyHi} में उपस्थित फंक्शनल समूह है:`,
        { en: item.group, hi: item.group },
        [
          { en: item.wrong[0], hi: item.wrong[0] },
          { en: item.wrong[1], hi: item.wrong[1] },
          { en: item.wrong[2], hi: item.wrong[2] },
        ],
        item.exp,
        item.expHi,
        seed
      );
    }

    const reactionBank = [
      {
        reaction: "zinc reacts with dilute HCl",
        reactionHi: "जिंक की dilute HCl से अभिक्रिया",
        gas: "Hydrogen",
        gasHi: "हाइड्रोजन",
        eqn: "Zn + 2HCl gives ZnCl2 + H2 gas.",
        eqnHi: "Zn + 2HCl से ZnCl2 और H2 गैस बनती है।",
      },
      {
        reaction: "calcium carbonate reacts with dilute HCl",
        reactionHi: "कैल्शियम कार्बोनेट की dilute HCl से अभिक्रिया",
        gas: "Carbon dioxide",
        gasHi: "कार्बन डाइऑक्साइड",
        eqn: "CaCO3 + 2HCl gives CaCl2 + CO2 + H2O.",
        eqnHi: "CaCO3 + 2HCl से CaCl2 + CO2 + H2O बनता है।",
      },
      {
        reaction: "ammonium chloride reacts with NaOH on heating",
        reactionHi: "अमोनियम क्लोराइड की NaOH के साथ गरम करने पर अभिक्रिया",
        gas: "Ammonia",
        gasHi: "अमोनिया",
        eqn: "NH4Cl + NaOH gives NH3 + NaCl + H2O.",
        eqnHi: "NH4Cl + NaOH से NH3 + NaCl + H2O बनता है।",
      },
      {
        reaction: "hydrogen peroxide decomposes",
        reactionHi: "हाइड्रोजन पेरॉक्साइड का अपघटन",
        gas: "Oxygen",
        gasHi: "ऑक्सीजन",
        eqn: "2H2O2 decomposes to 2H2O + O2.",
        eqnHi: "2H2O2 के अपघटन से 2H2O + O2 बनता है।",
      },
      {
        reaction: "sodium metal reacts with water",
        reactionHi: "सोडियम धातु की पानी से अभिक्रिया",
        gas: "Hydrogen",
        gasHi: "हाइड्रोजन",
        eqn: "2Na + 2H2O gives 2NaOH + H2.",
        eqnHi: "2Na + 2H2O से 2NaOH + H2 बनता है।",
      },
      {
        reaction: "marble chips react with dilute acid",
        reactionHi: "मार्बल चिप्स की dilute अम्ल से अभिक्रिया",
        gas: "Carbon dioxide",
        gasHi: "कार्बन डाइऑक्साइड",
        eqn: "Carbonates react with acids to release CO2.",
        eqnHi: "कार्बोनेट अम्ल से अभिक्रिया कर CO2 छोड़ते हैं।",
      },
      {
        reaction: "metal sulfide reacts with dilute acid",
        reactionHi: "धातु सल्फाइड की dilute अम्ल से अभिक्रिया",
        gas: "Hydrogen sulfide",
        gasHi: "हाइड्रोजन सल्फाइड",
        eqn: "Metal sulfides with acids release H2S gas.",
        eqnHi: "धातु सल्फाइड अम्ल से H2S गैस छोड़ते हैं।",
      },
      {
        reaction: "baking soda is heated strongly",
        reactionHi: "बेकिंग सोडा को तीव्र गरम करने पर",
        gas: "Carbon dioxide",
        gasHi: "कार्बन डाइऑक्साइड",
        eqn: "2NaHCO3 on heating gives Na2CO3 + CO2 + H2O.",
        eqnHi: "2NaHCO3 गरम करने पर Na2CO3 + CO2 + H2O देता है।",
      },
      {
        reaction: "potassium chlorate decomposes on heating",
        reactionHi: "पोटैशियम क्लोरेट गरम करने पर अपघटित होता है",
        gas: "Oxygen",
        gasHi: "ऑक्सीजन",
        eqn: "2KClO3 gives 2KCl + 3O2 on heating.",
        eqnHi: "2KClO3 गरम करने पर 2KCl + 3O2 देता है।",
      },
    ];
    const reaction = reactionBank[cycleIndex % reactionBank.length];
    return createSeededGovQuestion(
      `neet-chem-set${setNumber}-${qNo}`,
      "Chemistry",
      "रसायन विज्ञान",
      `The gas evolved when ${reaction.reaction} is:`,
      `${reaction.reactionHi} में निकलने वाली गैस है:`,
      { en: reaction.gas, hi: reaction.gasHi },
      [
        { en: "Oxygen", hi: "ऑक्सीजन" },
        { en: "Nitrogen", hi: "नाइट्रोजन" },
        { en: "Chlorine", hi: "क्लोरीन" },
      ],
      reaction.eqn,
      reaction.eqnHi,
      seed
    );
  });
}

function createNeetBiologyQuestions(setNumber: number): GovPracticeQuestion[] {
  return Array.from({ length: 90 }, (_, index) => {
    const qNo = index + 1;
    const seed = setNumber * 2800 + qNo;
    const pattern = index % 6;
    const cycleIndex = Math.floor(index / 6);

    if (pattern === 0) {
      const organelleBank = [
        { f: "powerhouse of the cell", fHi: "कोशिका का पावरहाउस", a: "Mitochondria", aHi: "माइटोकॉन्ड्रिया" },
        { f: "site of protein synthesis", fHi: "प्रोटीन संश्लेषण का स्थल", a: "Ribosome", aHi: "राइबोसोम" },
        { f: "control center of the cell", fHi: "कोशिका का नियंत्रण केंद्र", a: "Nucleus", aHi: "नाभिक" },
        { f: "modification and packaging of proteins", fHi: "प्रोटीन संशोधन व पैकेजिंग", a: "Golgi body", aHi: "गोल्जी बॉडी" },
        { f: "intracellular digestion", fHi: "कोशिकीय पाचन", a: "Lysosome", aHi: "लाइसोसोम" },
        { f: "photosynthesis in plants", fHi: "पौधों में प्रकाश संश्लेषण", a: "Chloroplast", aHi: "क्लोरोप्लास्ट" },
        { f: "storage of cell sap in plant cells", fHi: "पौध कोशिका रस का भंडारण", a: "Vacuole", aHi: "वैक्यूल" },
        { f: "formation of spindle fibers", fHi: "स्पिंडल तंतु निर्माण", a: "Centrosome", aHi: "सेंट्रोसोम" },
        { f: "lipid synthesis and detoxification", fHi: "लिपिड संश्लेषण व डिटॉक्सिफिकेशन", a: "Smooth endoplasmic reticulum", aHi: "स्मूद एंडोप्लाज्मिक रेटिकुलम" },
        { f: "transport of proteins", fHi: "प्रोटीन का परिवहन", a: "Rough endoplasmic reticulum", aHi: "रफ एंडोप्लाज्मिक रेटिकुलम" },
        { f: "cellular respiration", fHi: "कोशिकीय श्वसन", a: "Mitochondria", aHi: "माइटोकॉन्ड्रिया" },
        { f: "contains hydrolytic enzymes", fHi: "हाइड्रोलिटिक एंजाइम वाले", a: "Lysosome", aHi: "लाइसोसोम" },
        { f: "manufacture of ATP", fHi: "ATP निर्माण", a: "Mitochondria", aHi: "माइटोकॉन्ड्रिया" },
        { f: "processing and secretion", fHi: "प्रोसेसिंग और स्राव", a: "Golgi body", aHi: "गोल्जी बॉडी" },
        { f: "storage in mature plant cells", fHi: "परिपक्व पौध कोशिका में भंडारण", a: "Large central vacuole", aHi: "बड़ा केंद्रीय वैक्यूल" },
      ];
      const item = organelleBank[cycleIndex % organelleBank.length];
      return createSeededGovQuestion(
        `neet-bio-set${setNumber}-${qNo}`,
        "Biology",
        "जीवविज्ञान",
        `Which cell organelle is known for ${item.f}?`,
        `${item.fHi} के लिए कौन-सा कोशिकांग जाना जाता है?`,
        { en: item.a, hi: item.aHi },
        [
          { en: "Ribosome", hi: "राइबोसोम" },
          { en: "Golgi body", hi: "गोल्जी बॉडी" },
          { en: "Lysosome", hi: "लाइसोसोम" },
        ],
        `${item.a} is associated with ${item.f}.`,
        `${item.aHi} ${item.fHi} से संबंधित है।`,
        seed
      );
    }

    if (pattern === 1) {
      const basicUnitBank = [
        { q: "life", qHi: "जीवन", a: "Cell", aHi: "कोशिका" },
        { q: "inheritance", qHi: "वंशागति", a: "Gene", aHi: "जीन" },
        { q: "kidney", qHi: "वृक्क", a: "Nephron", aHi: "नेफ्रॉन" },
        { q: "nervous system", qHi: "तंत्रिका तंत्र", a: "Neuron", aHi: "न्यूरॉन" },
        { q: "muscle contraction", qHi: "मांसपेशी संकुचन", a: "Sarcomere", aHi: "सार्कोमियर" },
        { q: "respiration in lungs", qHi: "फेफड़ों में श्वसन", a: "Alveolus", aHi: "एल्विओलस" },
        { q: "leaf structure", qHi: "पत्ती की संरचना", a: "Leaf", aHi: "पत्ती" },
        { q: "structural unit of bone", qHi: "हड्डी की संरचनात्मक इकाई", a: "Osteon", aHi: "ओस्टिऑन" },
        { q: "liver functional work", qHi: "यकृत का कार्य", a: "Hepatocyte", aHi: "हेपेटोसाइट" },
        { q: "testis", qHi: "वृषण", a: "Seminiferous tubule", aHi: "सीमिनिफेरस ट्यूब्यूल" },
        { q: "ovary", qHi: "अंडाशय", a: "Follicle", aHi: "फॉलिकल" },
        { q: "plant water transport", qHi: "पौधों में जल परिवहन", a: "Xylem", aHi: "जाइलम" },
        { q: "food transport in plants", qHi: "पौधों में भोजन परिवहन", a: "Phloem", aHi: "फ्लोएम" },
        { q: "photosynthesis", qHi: "प्रकाश संश्लेषण", a: "Chloroplast", aHi: "क्लोरोप्लास्ट" },
        { q: "hereditary information in chromosome", qHi: "क्रोमोसोम में आनुवंशिक सूचना", a: "DNA", aHi: "डीएनए" },
      ];
      const item = basicUnitBank[cycleIndex % basicUnitBank.length];
      return createSeededGovQuestion(
        `neet-bio-set${setNumber}-${qNo}`,
        "Biology",
        "जीवविज्ञान",
        `The basic structural and functional unit related to ${item.q} is:`,
        `${item.qHi} से संबंधित मूल संरचनात्मक और क्रियात्मक इकाई है:`,
        { en: item.a, hi: item.aHi },
        [
          { en: "Tissue", hi: "ऊतक" },
          { en: "Organ", hi: "अंग" },
          { en: "Organ system", hi: "अंग तंत्र" },
        ],
        `${item.a} is the most appropriate unit for this context.`,
        `इस संदर्भ में ${item.aHi} सबसे उपयुक्त इकाई है।`,
        seed
      );
    }

    if (pattern === 2) {
      const gasExchangeBank = [
        { org: "humans", orgHi: "मनुष्य", place: "Alveoli", placeHi: "एल्विओलाई" },
        { org: "fish", orgHi: "मछली", place: "Gills", placeHi: "गिल्स" },
        { org: "insects", orgHi: "कीट", place: "Tracheal tubes", placeHi: "ट्रेकियल ट्यूब" },
        { org: "earthworm", orgHi: "केंचुआ", place: "Moist skin", placeHi: "नम त्वचा" },
        { org: "frog (on land)", orgHi: "मेंढक (स्थल पर)", place: "Lungs", placeHi: "फेफड़े" },
        { org: "frog (in water)", orgHi: "मेंढक (जल में)", place: "Skin", placeHi: "त्वचा" },
        { org: "plants", orgHi: "पौधे", place: "Stomata", placeHi: "रंध्र" },
        { org: "bird lungs", orgHi: "पक्षी के फेफड़े", place: "Parabronchi", placeHi: "पैराब्रोंकाई" },
        { org: "mammals", orgHi: "स्तनधारी", place: "Alveoli", placeHi: "एल्विओलाई" },
        { org: "reptiles", orgHi: "सरीसृप", place: "Lungs", placeHi: "फेफड़े" },
        { org: "amphibian larvae", orgHi: "उभयचर लार्वा", place: "Gills", placeHi: "गिल्स" },
        { org: "cockroach", orgHi: "तिलचट्टा", place: "Trachea", placeHi: "ट्रेकिया" },
        { org: "rabbit", orgHi: "खरगोश", place: "Alveoli", placeHi: "एल्विओलाई" },
        { org: "snail", orgHi: "घोंघा", place: "Pulmonary sac", placeHi: "पल्मोनरी थैली" },
        { org: "whale", orgHi: "व्हेल", place: "Lungs", placeHi: "फेफड़े" },
      ];
      const item = gasExchangeBank[cycleIndex % gasExchangeBank.length];
      return createSeededGovQuestion(
        `neet-bio-set${setNumber}-${qNo}`,
        "Biology",
        "जीवविज्ञान",
        `In ${item.org}, gas exchange occurs mainly in:`,
        `${item.orgHi} में गैस विनिमय मुख्य रूप से कहाँ होता है?`,
        { en: item.place, hi: item.placeHi },
        [
          { en: "Trachea", hi: "श्वासनली" },
          { en: "Bronchi", hi: "ब्रॉन्काई" },
          { en: "Diaphragm", hi: "डायफ्राम" },
        ],
        `${item.place} is the primary site of gas exchange in this organism/context.`,
        `${item.orgHi} में ${item.placeHi} गैस विनिमय का मुख्य स्थल है।`,
        seed
      );
    }

    if (pattern === 3) {
      const pigmentBank = [
        { process: "photosynthesis in green plants", processHi: "हरे पौधों में प्रकाश संश्लेषण", pigment: "Chlorophyll", pigmentHi: "क्लोरोफिल" },
        { process: "yellow color in ripened leaves", processHi: "पकी पत्तियों का पीला रंग", pigment: "Xanthophyll", pigmentHi: "जैंथोफिल" },
        { process: "orange color in carrots", processHi: "गाजर का नारंगी रंग", pigment: "Carotene", pigmentHi: "कैरोटीन" },
        { process: "red-purple color in flowers", processHi: "फूलों का लाल-बैंगनी रंग", pigment: "Anthocyanin", pigmentHi: "एन्थोसाइनिन" },
        { process: "oxygen transport in blood", processHi: "रक्त में ऑक्सीजन परिवहन", pigment: "Hemoglobin", pigmentHi: "हीमोग्लोबिन" },
        { process: "oxygen storage in muscle", processHi: "मांसपेशियों में ऑक्सीजन भंडारण", pigment: "Myoglobin", pigmentHi: "मायोग्लोबिन" },
        { process: "blue-green algae photosynthesis", processHi: "नील-हरित शैवाल में प्रकाश संश्लेषण", pigment: "Phycocyanin", pigmentHi: "फाइकोसाइनिन" },
        { process: "brown algae color", processHi: "भूरे शैवाल का रंग", pigment: "Fucoxanthin", pigmentHi: "फ्यूकोजैंथिन" },
        { process: "green sulfur bacteria photosystem", processHi: "ग्रीन सल्फर बैक्टीरिया में प्रकाश तंत्र", pigment: "Bacteriochlorophyll", pigmentHi: "बैक्टीरियोक्लोरोफिल" },
        { process: "human skin pigmentation", processHi: "मानव त्वचा का रंगद्रव्य", pigment: "Melanin", pigmentHi: "मेलानिन" },
        { process: "retina low-light vision pigment", processHi: "रेटिना में कम रोशनी का रंगद्रव्य", pigment: "Rhodopsin", pigmentHi: "रhodopsin" },
        { process: "red color in tomatoes", processHi: "टमाटर का लाल रंग", pigment: "Lycopene", pigmentHi: "लाइकोपीन" },
        { process: "green color in leaves", processHi: "पत्तियों का हरा रंग", pigment: "Chlorophyll", pigmentHi: "क्लोरोफिल" },
        { process: "autumn yellow leaf tone", processHi: "पतझड़ में पत्तियों का पीला रंग", pigment: "Xanthophyll", pigmentHi: "जैंथोफिल" },
        { process: "muscle oxygen-binding pigment", processHi: "मांसपेशी में ऑक्सीजन-बाइंडिंग रंगद्रव्य", pigment: "Myoglobin", pigmentHi: "मायोग्लोबिन" },
      ];
      const item = pigmentBank[cycleIndex % pigmentBank.length];
      return createSeededGovQuestion(
        `neet-bio-set${setNumber}-${qNo}`,
        "Biology",
        "जीवविज्ञान",
        `Which pigment is primarily responsible for ${item.process}?`,
        `${item.processHi} के लिए मुख्य पिग्मेंट कौन-सा है?`,
        { en: item.pigment, hi: item.pigmentHi },
        [
          { en: "Carotene", hi: "कैरोटीन" },
          { en: "Xanthophyll", hi: "जैंथोफिल" },
          { en: "Anthocyanin", hi: "एन्थोसाइनिन" },
        ],
        `${item.pigment} is the correct pigment for this context.`,
        `इस संदर्भ में सही पिग्मेंट ${item.pigmentHi} है।`,
        seed
      );
    }

    if (pattern === 4) {
      const geneticsBank = [
        {
          q: "Mendel's law of segregation is related to:",
          qHi: "मेंडल का पृथक्करण का नियम किससे संबंधित है?",
          a: "Separation of allele pairs during gamete formation",
          aHi: "गैमेट बनने के समय एलील युग्म का अलग होना",
        },
        {
          q: "Mendel's law of independent assortment states that:",
          qHi: "मेंडल का स्वतंत्र वर्गीकरण नियम कहता है कि:",
          a: "Alleles of different genes assort independently",
          aHi: "विभिन्न जीनों के एलील स्वतंत्र रूप से वर्गीकृत होते हैं",
        },
        {
          q: "A test cross is used to determine:",
          qHi: "टेस्ट क्रॉस का उपयोग किसे जानने के लिए होता है?",
          a: "Genotype of an individual with dominant phenotype",
          aHi: "प्रभावी गुणधर्म वाले जीव का जीनोटाइप",
        },
        {
          q: "Monohybrid cross phenotypic ratio in F2 generation is:",
          qHi: "मोनोहाइब्रिड क्रॉस में F2 पीढ़ी का फीनोटाइपिक अनुपात है:",
          a: "3:1",
          aHi: "3:1",
        },
        {
          q: "Dihybrid cross phenotypic ratio in F2 generation is:",
          qHi: "डाइहाइब्रिड क्रॉस में F2 पीढ़ी का फीनोटाइपिक अनुपात है:",
          a: "9:3:3:1",
          aHi: "9:3:3:1",
        },
        {
          q: "Law of dominance explains that:",
          qHi: "प्रभाविता का नियम बताता है कि:",
          a: "Dominant allele expresses in heterozygous condition",
          aHi: "हेटेरोजाइगस अवस्था में प्रभावी एलील अभिव्यक्त होता है",
        },
        {
          q: "Incomplete dominance results in F1 phenotype that is:",
          qHi: "अपूर्ण प्रभाविता में F1 गुणधर्म कैसा होता है?",
          a: "Intermediate between both parents",
          aHi: "दोनों अभिभावकों के बीच का",
        },
        {
          q: "Codominance is seen when:",
          qHi: "सह-प्रभाविता कब दिखती है?",
          a: "Both alleles express equally",
          aHi: "दोनों एलील समान रूप से अभिव्यक्त होते हैं",
        },
        {
          q: "ABO blood group inheritance is an example of:",
          qHi: "ABO रक्त समूह वंशागति किसका उदाहरण है?",
          a: "Multiple alleles and codominance",
          aHi: "बहु-एलील और सह-प्रभाविता",
        },
        {
          q: "Chromosomal theory of inheritance was proposed by:",
          qHi: "वंशागति का गुणसूत्र सिद्धांत किसने दिया?",
          a: "Sutton and Boveri",
          aHi: "सटन और बोवेरी",
        },
        {
          q: "Crossing over occurs during which phase of meiosis I?",
          qHi: "मीयोसिस I की किस अवस्था में क्रॉसिंग ओवर होता है?",
          a: "Pachytene",
          aHi: "पैकीटीन",
        },
        {
          q: "Sex-linked inheritance in humans is commonly associated with:",
          qHi: "मनुष्यों में लिंग-संबद्ध वंशागति आमतौर पर किससे जुड़ी है?",
          a: "X chromosome",
          aHi: "X गुणसूत्र",
        },
        {
          q: "A pure line is generally:",
          qHi: "शुद्ध रेखा सामान्यतः कैसी होती है?",
          a: "Homozygous and true-breeding",
          aHi: "होमोजाइगस और ट्रू-ब्रीडिंग",
        },
        {
          q: "Mutation is defined as:",
          qHi: "म्यूटेशन की परिभाषा है:",
          a: "Sudden heritable change in genetic material",
          aHi: "आनुवंशिक पदार्थ में अचानक वंशानुगत परिवर्तन",
        },
        {
          q: "The physical expression of genotype is called:",
          qHi: "जीनोटाइप की भौतिक अभिव्यक्ति को क्या कहते हैं?",
          a: "Phenotype",
          aHi: "फीनोटाइप",
        },
      ];
      const item = geneticsBank[cycleIndex % geneticsBank.length];
      return createSeededGovQuestion(
        `neet-bio-set${setNumber}-${qNo}`,
        "Biology",
        "जीवविज्ञान",
        item.q,
        item.qHi,
        { en: item.a, hi: item.aHi },
        [
          { en: "Linkage of genes on chromosomes", hi: "क्रोमोसोम पर जीन का लिंकिज" },
          { en: "Independent mutation of all genes", hi: "सभी जीन का स्वतंत्र म्यूटेशन" },
          { en: "Crossing over in all cells", hi: "सभी कोशिकाओं में क्रॉसिंग ओवर" },
        ],
        "This is the conceptually correct genetics statement.",
        "यह आनुवंशिकी का सही कथन है।",
        seed
      );
    }

    const bloodBank = [
      { q: "Which component of blood helps in clotting?", qHi: "रक्त का कौन-सा घटक थक्का बनने में मदद करता है?", a: "Platelets", aHi: "प्लेटलेट्स" },
      { q: "Which blood component mainly transports oxygen?", qHi: "रक्त का कौन-सा घटक मुख्यतः ऑक्सीजन ले जाता है?", a: "RBCs", aHi: "RBCs" },
      { q: "Which blood component is mainly responsible for immunity?", qHi: "रक्त का कौन-सा घटक मुख्यतः प्रतिरक्षा के लिए जिम्मेदार है?", a: "WBCs", aHi: "WBCs" },
      { q: "Which plasma protein is key for clot formation?", qHi: "थक्का बनने में मुख्य प्लाज्मा प्रोटीन कौन-सा है?", a: "Fibrinogen", aHi: "फाइब्रिनोजन" },
      { q: "Which blood component carries nutrients and hormones?", qHi: "पोषक तत्व और हार्मोन कौन-सा रक्त घटक ले जाता है?", a: "Plasma", aHi: "प्लाज्मा" },
      { q: "Which cells are called erythrocytes?", qHi: "एरिथ्रोसाइट्स किसे कहते हैं?", a: "RBCs", aHi: "RBCs" },
      { q: "Which cells are called leukocytes?", qHi: "ल्यूकोसाइट्स किसे कहते हैं?", a: "WBCs", aHi: "WBCs" },
      { q: "Deficiency of platelets can directly affect:", qHi: "प्लेटलेट्स की कमी सीधे किसे प्रभावित करती है?", a: "Blood clotting", aHi: "रक्त का थक्का बनना" },
      { q: "Hemoglobin is present in which blood cells?", qHi: "हीमोग्लोबिन किस रक्त कोशिका में होता है?", a: "RBCs", aHi: "RBCs" },
      { q: "Phagocytosis in blood is mainly done by:", qHi: "रक्त में फागोसाइटोसिस मुख्यतः कौन करता है?", a: "WBCs", aHi: "WBCs" },
      { q: "Liquid matrix of blood is called:", qHi: "रक्त का द्रव मैट्रिक्स कहलाता है:", a: "Plasma", aHi: "प्लाज्मा" },
      { q: "Formed elements of blood include:", qHi: "रक्त के निर्मित अवयवों में शामिल हैं:", a: "RBCs, WBCs and platelets", aHi: "RBCs, WBCs और प्लेटलेट्स" },
      { q: "The protein helping oxygen transport in blood is:", qHi: "रक्त में ऑक्सीजन परिवहन में सहायक प्रोटीन है:", a: "Hemoglobin", aHi: "हीमोग्लोबिन" },
      { q: "Main role of neutrophils is:", qHi: "न्यूट्रोफिल्स का मुख्य कार्य है:", a: "Defense against infection", aHi: "संक्रमण से रक्षा" },
      { q: "Major role of platelets is:", qHi: "प्लेटलेट्स की प्रमुख भूमिका है:", a: "Initiating clot formation", aHi: "थक्का निर्माण शुरू करना" },
    ];
    const item = bloodBank[cycleIndex % bloodBank.length];
    return createSeededGovQuestion(
      `neet-bio-set${setNumber}-${qNo}`,
      "Biology",
      "जीवविज्ञान",
      item.q,
      item.qHi,
      { en: item.a, hi: item.aHi },
      [
        { en: "RBCs", hi: "RBCs" },
        { en: "WBCs", hi: "WBCs" },
        { en: "Plasma proteins only", hi: "केवल प्लाज्मा प्रोटीन" },
      ],
      "This blood component/function pair is correct.",
      "यह रक्त घटक/कार्य जोड़ी सही है।",
      seed
    );
  });
}

function generateNeetUgFullLengthSets(): GovPracticeSet[] {
  return Array.from({ length: 5 }, (_, index) => {
    const setNumber = index + 1;
    const questions = [
      ...createNeetPhysicsQuestions(setNumber),
      ...createNeetChemistryQuestions(setNumber),
      ...createNeetBiologyQuestions(setNumber),
    ];

    return {
      slug: `neet-ug-full-mock-${setNumber}`,
      title: `Medical NEET Full Mock Test ${setNumber}`,
      titleHi: `मेडिकल NEET फुल मॉक टेस्ट ${setNumber}`,
      chapter: "Official-style NEET pattern (Physics 45, Chemistry 45, Biology 90)",
      chapterHi: "ऑफिशियल-स्टाइल NEET पैटर्न (भौतिकी 45, रसायन 45, जीवविज्ञान 90)",
      difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
      durationMin: 180,
      questionCount: 180,
      bilingual: false,
      isLive: true,
      questions,
    };
  });
}

function generateNeetSubjectWiseSets(): GovPracticeSet[] {
  const subjectConfigs: Array<{
    slugPrefix: string;
    titlePrefix: string;
    titleHiPrefix: string;
    chapter: string;
    chapterHi: string;
    durationMin: number;
    questionCount: number;
    createQuestions: (setNumber: number) => GovPracticeQuestion[];
  }> = [
    {
      slugPrefix: "neet-physics-practice-set",
      titlePrefix: "NEET Physics Practice Set",
      titleHiPrefix: "NEET भौतिकी प्रैक्टिस सेट",
      chapter: "NEET Physics Chapter-wise Practice",
      chapterHi: "NEET भौतिकी अध्याय-आधारित अभ्यास",
      durationMin: 45,
      questionCount: 45,
      createQuestions: createNeetPhysicsQuestions,
    },
    {
      slugPrefix: "neet-chemistry-practice-set",
      titlePrefix: "NEET Chemistry Practice Set",
      titleHiPrefix: "NEET रसायन विज्ञान प्रैक्टिस सेट",
      chapter: "NEET Chemistry Chapter-wise Practice",
      chapterHi: "NEET रसायन विज्ञान अध्याय-आधारित अभ्यास",
      durationMin: 45,
      questionCount: 45,
      createQuestions: createNeetChemistryQuestions,
    },
    {
      slugPrefix: "neet-biology-practice-set",
      titlePrefix: "NEET Biology Practice Set",
      titleHiPrefix: "NEET जीवविज्ञान प्रैक्टिस सेट",
      chapter: "NEET Biology Chapter-wise Practice",
      chapterHi: "NEET जीवविज्ञान अध्याय-आधारित अभ्यास",
      durationMin: 90,
      questionCount: 90,
      createQuestions: createNeetBiologyQuestions,
    },
  ];

  return subjectConfigs.flatMap((subject) =>
    Array.from({ length: 5 }, (_, index) => {
      const setNumber = index + 1;
      return {
        slug: `${subject.slugPrefix}-${setNumber}`,
        title: `${subject.titlePrefix} ${setNumber}`,
        titleHi: `${subject.titleHiPrefix} ${setNumber}`,
        chapter: subject.chapter,
        chapterHi: subject.chapterHi,
        difficulty: setNumber <= 2 ? "Easy" : setNumber <= 4 ? "Medium" : "Hard",
        durationMin: subject.durationMin,
        questionCount: subject.questionCount,
        bilingual: false,
        isLive: true,
        questions: subject.createQuestions(setNumber),
      };
    })
  );
}

export const practiceCategories: PracticeCategoryMeta[] = [
  {
    slug: "ielts",
    title: "IELTS Practice Tests",
    shortTitle: "IELTS",
    description:
      "Free IELTS practice tests for Listening, Academic Reading, General Training Reading, Writing strategy, and Speaking confidence with answer explanations and exam-pattern guidance.",
    heroTitle: "IELTS Practice Tests with Answers and Explanations",
    heroText:
      "Use these English-only IELTS practice tests to prepare for study abroad, work, and migration goals with section-based practice that is closer to the real exam structure.",
    ctaHref: "/study-abroad",
    ctaLabel: "Explore Study Abroad Guidance",
  },
  {
    slug: "toefl",
    title: "TOEFL Practice Tests",
    shortTitle: "TOEFL",
    description:
      "Free TOEFL iBT practice tests for Reading, Listening, Speaking, Writing, and Integrated Skills with explanation-based guidance and section-focused preparation.",
    heroTitle: "TOEFL Practice Tests with Answers and Explanations",
    heroText:
      "Use these English-only TOEFL practice tests to prepare for study abroad admission goals with section-based practice and integrated task strategy.",
    ctaHref: "/study-abroad",
    ctaLabel: "Explore Study Abroad Guidance",
  },
  {
    slug: "engineering-entrance",
    title: "Engineering Entrance Practice Tests",
    shortTitle: "Engineering Entrance",
    description:
      "Free engineering entrance practice tests with original questions, exam-pattern guidance, and step-by-step preparation support for COMEDK, KCET, WBJEE, JEE Main, and JEE Advanced aspirants.",
    heroTitle: "Engineering Entrance Practice Questions",
    heroText:
      "Practice beginner-friendly entrance questions with original explanations across math, physics, chemistry, and logic.",
    ctaHref: "/tests/engineering",
    ctaLabel: "Take Engineering Career Test",
  },
  {
    slug: "ctet",
    title: "CTET Practice Tests",
    shortTitle: "CTET",
    description:
      "Free CTET bilingual practice sets with answers and explanations in English and Hindi, including full-length Paper I mocks (150 questions) and topic-wise training for CDP, Languages, Mathematics, and EVS.",
    heroTitle: "CTET Practice Tests with Bilingual Support",
    heroText:
      "Practice CTET questions in English and Hindi with instant scoring and detailed explanations for aspiring teachers.",
    ctaHref: "/practice-tests/ctet",
    ctaLabel: "Start CTET Practice",
  },
  {
    slug: "ssc",
    title: "SSC Practice Tests",
    shortTitle: "SSC",
    description:
      "Free SSC bilingual practice sets with answers and explanations in English and Hindi, including 5 full-length Tier I mocks, 5 full-length CHSL mocks, and 5 full-length Tier II mocks, plus topic-wise training for Reasoning, Quantitative Aptitude, English, and General Awareness.",
    heroTitle: "SSC Practice Tests with Bilingual Support",
    heroText:
      "Practice SSC exam questions in English and Hindi with instant scoring, explanations, and official-pattern Tier I, CHSL, and Tier II full mocks.",
    ctaHref: "/practice-tests/ssc",
    ctaLabel: "Start SSC Practice",
  },
  {
    slug: "railway",
    title: "Railway Practice Tests",
    shortTitle: "Railway",
    description:
      "Free Railway bilingual practice tests with answers and explanations in English and Hindi, including official-style RRB Group D CBT, NTPC CBT-1, ALP/Technician CBT-1, and Ticket Clerk/TT patterns with 5 full-length mocks in each track.",
    heroTitle: "Railway Practice Tests with Bilingual Support",
    heroText:
      "Practice Railway recruitment questions in English and Hindi with instant scoring, pattern-based full-length mocks, and practical section-wise exam preparation.",
    ctaHref: "/practice-tests/railway",
    ctaLabel: "Start Railway Practice",
  },
  {
    slug: "medical",
    title: "Medical NEET Practice Tests",
    shortTitle: "Medical NEET",
    description:
      "Free Medical NEET practice tests in English with 5 chapter-wise sets each for Physics, Chemistry, Biology, plus 5 full-length mocks with instant scoring and explanations.",
    heroTitle: "Medical NEET Practice Tests with Answers",
    heroText:
      "Practice chapter-wise NEET sets and full mocks to improve speed, accuracy, and subject balance before exam day.",
    ctaHref: "/practice-tests/medical",
    ctaLabel: "Start NEET Practice",
  },
  {
    slug: "aviation",
    title: "Aviation Career Practice Tests",
    shortTitle: "Aviation",
    description:
      "Free aviation career practice tests and role-based preparation for cabin crew, ground staff, and airport support staff with interview-style and job-readiness guidance.",
    heroTitle: "Aviation Job Preparation Practice",
    heroText:
      "Prepare role-wise for aviation hiring with focused practice sets, interview readiness guidance, and practical application tips.",
    ctaHref: "/practice-tests/aviation",
    ctaLabel: "Start Aviation Practice",
  },
];

export const govPracticeCategories: GovPracticeCategory[] = [
  {
    slug: "ctet",
    title: "CTET Practice Tests",
    titleHi: "CTET अभ्यास परीक्षा",
    icon: "📚",
    description:
      "Free CTET bilingual practice sets with answers and explanations in English and Hindi, including full-length Paper I & Paper II mocks (150 questions each) and topic-wise training for CDP, Languages, Mathematics, EVS, Science, and Social Studies.",
    descriptionHi:
      "अंग्रेजी और हिंदी में उत्तर व स्पष्टीकरण के साथ CTET द्विभाषी अभ्यास सेट, जिनमें पेपर I और पेपर II के फुल-लेंथ मॉक (प्रत्येक 150 प्रश्न) और CDP, भाषाएं, गणित, EVS, विज्ञान व सामाजिक अध्ययन का विषय-वार अभ्यास शामिल है।",
    audience: ["Aspiring teachers", "CTET candidates", "Education students"],
    chapters: [
      { name: "Paper I: Primary (Classes I-V)", hi: "पेपर I: प्राथमिक (कक्षा I-V)" },
      { name: "Child Development and Pedagogy", hi: "बच्चों का विकास और शिक्षाशास्त्र" },
      { name: "Language I (English)", hi: "भाषा I (अंग्रेजी)" },
      { name: "Language II (Hindi)", hi: "भाषा II (हिंदी)" },
      { name: "Mathematics", hi: "गणित" },
      { name: "Environmental Studies", hi: "पर्यावरण अध्ययन" },
      { name: "Paper II: Intermediate (Classes VI-VIII)", hi: "पेपर II: माध्यमिक (कक्षा VI-VIII)" },
      { name: "Science", hi: "विज्ञान" },
      { name: "Social Studies", hi: "सामाजिक अध्ययन" },
    ],
    sets: [
      {
        slug: "cdp-set-1",
        title: "Child Development and Pedagogy Set 1",
        titleHi: "बच्चों के विकास और शिक्षाशास्त्र सेट 1",
        chapter: "Child Development and Pedagogy",
        chapterHi: "बच्चों का विकास और शिक्षाशास्त्र",
        difficulty: "Easy",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetCdpQuestions(11),
      },
      {
        slug: "english-set-1",
        title: "English Language Set 1",
        titleHi: "अंग्रेजी भाषा सेट 1",
        chapter: "Language I (English)",
        chapterHi: "भाषा I (अंग्रेजी)",
        difficulty: "Easy",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetEnglishQuestions(12),
      },
      {
        slug: "maths-set-1",
        title: "Mathematics Set 1",
        titleHi: "गणित सेट 1",
        chapter: "Mathematics",
        chapterHi: "गणित",
        difficulty: "Easy",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetMathQuestions(13),
      },
      {
        slug: "hindi-set-1",
        title: "Hindi Language Set 1",
        titleHi: "हिंदी भाषा सेट 1",
        chapter: "Language II (Hindi)",
        chapterHi: "भाषा II (हिंदी)",
        difficulty: "Easy",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetHindiQuestions(14),
      },
      {
        slug: "science-set-1",
        title: "Environmental Studies Set 1",
        titleHi: "पर्यावरण अध्ययन सेट 1",
        chapter: "Environmental Studies",
        chapterHi: "पर्यावरण अध्ययन",
        difficulty: "Easy",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetEvsQuestions(15),
      },
      ...generateCtetFullLengthSets(),
      
      // ===== PAPER II TOPIC-SPECIFIC SETS =====
      {
        slug: "cdp-paper-2-set-1",
        title: "Paper II Child Development and Pedagogy Set 1",
        titleHi: "पेपर II बच्चों के विकास और शिक्षाशास्त्र सेट 1",
        chapter: "Child Development and Pedagogy",
        chapterHi: "बच्चों का विकास और शिक्षाशास्त्र",
        difficulty: "Medium",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetP2CdpQuestions(21),
      },
      {
        slug: "english-paper-2-set-1",
        title: "Paper II English Language Set 1",
        titleHi: "पेपर II अंग्रेजी भाषा सेट 1",
        chapter: "Language I (English)",
        chapterHi: "भाषा I (अंग्रेजी)",
        difficulty: "Medium",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetP2EnglishQuestions(22),
      },
      {
        slug: "hindi-paper-2-set-1",
        title: "Paper II Hindi Language Set 1",
        titleHi: "पेपर II हिंदी भाषा सेट 1",
        chapter: "Language II (Hindi)",
        chapterHi: "भाषा II (हिंदी)",
        difficulty: "Medium",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetP2HindiQuestions(23),
      },
      {
        slug: "science-paper-2-set-1",
        title: "Paper II Science Set 1",
        titleHi: "पेपर II विज्ञान सेट 1",
        chapter: "Science",
        chapterHi: "विज्ञान",
        difficulty: "Medium",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetP2ScienceQuestions(24),
      },
      {
        slug: "social-studies-paper-2-set-1",
        title: "Paper II Social Studies Set 1",
        titleHi: "पेपर II सामाजिक अध्ययन सेट 1",
        chapter: "Social Studies",
        chapterHi: "सामाजिक अध्ययन",
        difficulty: "Medium",
        durationMin: 30,
        questionCount: 30,
        bilingual: true,
        isLive: true,
        questions: createCtetP2SocialStudiesQuestions(25),
      },
      ...generateCtetP2FullLengthSets(),
    ],
  },

  {
    slug: "ssc",
    title: "SSC Practice Tests",
    titleHi: "SSC अभ्यास परीक्षा",
    icon: "📊",
    description:
      "Free SSC bilingual practice sets with answers and explanations in English and Hindi, including 5 full-length Tier I mocks, 5 full-length CHSL mocks, and 5 full-length Tier II mocks, plus topic-wise training for Reasoning, Quantitative Aptitude, English, and General Awareness.",
    descriptionHi:
      "अंग्रेजी और हिंदी में उत्तर व स्पष्टीकरण के साथ नि:शुल्क SSC द्विभाषी अभ्यास सेट, जिनमें 5 फुल-लेंथ टियर I मॉक, 5 फुल-लेंथ CHSL मॉक और 5 फुल-लेंथ टियर II मॉक, तथा तर्क, मात्रात्मक योग्यता, अंग्रेजी व सामान्य ज्ञान का विषय-वार अभ्यास शामिल है।",
    audience: ["SSC aspirants", "Government job seekers", "Competitive exam students"],
    chapters: [
      { name: "SSC Tier I Full Mock", hi: "SSC टियर I फुल मॉक" },
      { name: "SSC CHSL Full Mock", hi: "SSC CHSL फुल मॉक" },
      { name: "SSC Tier II Full Mock", hi: "SSC टियर II फुल मॉक" },
      { name: "Reasoning", hi: "तर्क" },
      { name: "Quantitative Aptitude", hi: "मात्रात्मक योग्यता" },
      { name: "English", hi: "अंग्रेजी" },
      { name: "General Awareness", hi: "सामान्य ज्ञान" },
    ],
    sets: [
      {
        slug: "reasoning-set-1",
        title: "Reasoning Set 1",
        titleHi: "तर्क सेट 1",
        chapter: "Reasoning",
        chapterHi: "तर्क",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          createGovQuestion(
            "ssc-reason-1",
            "Reasoning",
            "तर्क",
            "Find the next number in the series: 2, 4, 8, 16, ?",
            "श्रृंखला में अगली संख्या ज्ञात करें: 2, 4, 8, 16, ?",
            [
              "18",
              "24",
              "32",
              "36",
              "18",
              "24",
              "32",
              "36",
            ],
            "C",
            "Each number is doubled, so the next number is 32.",
            "प्रत्येक संख्या दोगुनी हो रही है, इसलिए अगली संख्या 32 है।"
          ),
          createGovQuestion(
            "ssc-reason-2",
            "Reasoning",
            "तर्क",
            "Book : Read :: Food : ?",
            "Book : Read :: Food : ?",
            [
              "Write",
              "Eat",
              "Cook",
              "Buy",
              "लिखना",
              "खाना",
              "पकाना",
              "खरीदना",
            ],
            "B",
            "A book is read, and food is eaten.",
            "पुस्तक पढ़ी जाती है और भोजन खाया जाता है।"
          ),
          createGovQuestion(
            "ssc-reason-3",
            "Reasoning",
            "तर्क",
            "Choose the odd one out.",
            "विषम पद चुनें।",
            [
              "Triangle",
              "Square",
              "Circle",
              "Car",
              "त्रिभुज",
              "वर्ग",
              "वृत्त",
              "कार",
            ],
            "D",
            "The first three are shapes, while car is a vehicle.",
            "पहले तीन आकृतियाँ हैं, जबकि कार एक वाहन है।"
          ),
          createGovQuestion(
            "ssc-reason-4",
            "Reasoning",
            "तर्क",
            "If CAT is coded as DBU, then DOG is coded as:",
            "यदि CAT को DBU लिखा जाए, तो DOG को कैसे लिखा जाएगा?",
            [
              "EPH",
              "EOH",
              "FQI",
              "DNG",
              "EPH",
              "EOH",
              "FQI",
              "DNG",
            ],
            "A",
            "Each letter is moved one step forward: D→E, O→P, G→H.",
            "प्रत्येक अक्षर एक स्थान आगे बढ़ता है: D→E, O→P, G→H।"
          ),
          createGovQuestion(
            "ssc-reason-5",
            "Reasoning",
            "तर्क",
            "How many sides does a hexagon have?",
            "षट्भुज की कितनी भुजाएँ होती हैं?",
            [
              "5",
              "6",
              "7",
              "8",
              "5",
              "6",
              "7",
              "8",
            ],
            "B",
            "A hexagon has 6 sides.",
            "षट्भुज की 6 भुजाएँ होती हैं।"
          ),
          createGovQuestion(
            "ssc-reason-6",
            "Reasoning",
            "तर्क",
            "Which word comes first in dictionary order?",
            "शब्दकोश क्रम में कौन सा शब्द पहले आएगा?",
            [
              "Ball",
              "Apple",
              "Cat",
              "Dog",
              "Ball",
              "Apple",
              "Cat",
              "Dog",
            ],
            "B",
            "Apple comes before Ball, Cat, and Dog alphabetically.",
            "Alphabetical order में Apple, Ball, Cat और Dog से पहले आता है।"
          ),
          createGovQuestion(
            "ssc-reason-7",
            "Reasoning",
            "तर्क",
            "A clock shows 9:00. The angle between the hands is:",
            "घड़ी में 9:00 बजे हैं। दोनों सुइयों के बीच कोण कितना होगा?",
            [
              "45°",
              "60°",
              "90°",
              "120°",
              "45°",
              "60°",
              "90°",
              "120°",
            ],
            "C",
            "At 9:00, the hands make a right angle of 90°.",
            "9:00 बजे सुइयाँ 90° का समकोण बनाती हैं।"
          ),
          createGovQuestion(
            "ssc-reason-8",
            "Reasoning",
            "तर्क",
            "Find the missing number: 3, 6, 12, 24, ?",
            "लुप्त संख्या ज्ञात करें: 3, 6, 12, 24, ?",
            [
              "36",
              "42",
              "48",
              "60",
              "36",
              "42",
              "48",
              "60",
            ],
            "C",
            "Each number is multiplied by 2, so the next is 48.",
            "प्रत्येक संख्या 2 से गुणा हो रही है, इसलिए अगली संख्या 48 है।"
          ),
          createGovQuestion(
            "ssc-reason-9",
            "Reasoning",
            "तर्क",
            "Choose the one that is different from the rest.",
            "बाकियों से भिन्न पद चुनें।",
            [
              "January",
              "March",
              "Monday",
              "May",
              "जनवरी",
              "मार्च",
              "सोमवार",
              "मई",
            ],
            "C",
            "Monday is a day, while the others are months.",
            "Monday एक दिन है, जबकि बाकी महीने हैं।"
          ),
          createGovQuestion(
            "ssc-reason-10",
            "Reasoning",
            "तर्क",
            "If all pens are books and some books are tables, then:",
            "यदि सभी पेन पुस्तकें हैं और कुछ पुस्तकें मेज़ हैं, तो:",
            [
              "All pens are tables",
              "Some pens may be tables",
              "No pen is a table",
              "All tables are pens",
              "सभी पेन मेज़ हैं",
              "कुछ पेन मेज़ हो सकते हैं",
              "कोई पेन मेज़ नहीं है",
              "सभी मेज़ पेन हैं",
            ],
            "B",
            "Some pens may be tables, but it is not definite that all are.",
            "कुछ पेन मेज़ हो सकते हैं, लेकिन यह निश्चित नहीं है कि सभी हों।"
          ),
        ],
      },
      {
        slug: "quant-set-1",
        title: "Quantitative Aptitude Set 1",
        titleHi: "मात्रात्मक योग्यता सेट 1",
        chapter: "Quantitative Aptitude",
        chapterHi: "मात्रात्मक योग्यता",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          createGovQuestion(
            "ssc-quant-1",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "What is 15% of 300?",
            "300 का 15% कितना है?",
            [
              "30",
              "45",
              "50",
              "60",
              "30",
              "45",
              "50",
              "60",
            ],
            "B",
            "15% of 300 = 45.",
            "300 का 15% = 45।"
          ),
          createGovQuestion(
            "ssc-quant-2",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "The average of 10, 20 and 30 is:",
            "10, 20 और 30 का औसत है:",
            [
              "15",
              "20",
              "25",
              "30",
              "15",
              "20",
              "25",
              "30",
            ],
            "B",
            "Average = (10 + 20 + 30) / 3 = 20.",
            "औसत = (10 + 20 + 30) / 3 = 20।"
          ),
          createGovQuestion(
            "ssc-quant-3",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "If the cost price is ₹80 and the selling price is ₹100, the profit is:",
            "यदि क्रय मूल्य ₹80 और विक्रय मूल्य ₹100 है, तो लाभ होगा:",
            [
              "₹10",
              "₹15",
              "₹20",
              "₹25",
              "₹10",
              "₹15",
              "₹20",
              "₹25",
            ],
            "C",
            "Profit = Selling Price - Cost Price = ₹20.",
            "लाभ = विक्रय मूल्य - क्रय मूल्य = ₹20।"
          ),
          createGovQuestion(
            "ssc-quant-4",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "Simple interest on ₹1000 at 10% per year for 2 years is:",
            "₹1000 पर 10% वार्षिक दर से 2 वर्ष का साधारण ब्याज है:",
            [
              "₹100",
              "₹150",
              "₹200",
              "₹250",
              "₹100",
              "₹150",
              "₹200",
              "₹250",
            ],
            "C",
            "SI = (P × R × T)/100 = 200.",
            "साधारण ब्याज = (मूलधन × दर × समय)/100 = 200।"
          ),
          createGovQuestion(
            "ssc-quant-5",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "What is 3/5 of 50?",
            "50 का 3/5 कितना है?",
            [
              "20",
              "25",
              "30",
              "35",
              "20",
              "25",
              "30",
              "35",
            ],
            "C",
            "3/5 × 50 = 30.",
            "3/5 × 50 = 30।"
          ),
          createGovQuestion(
            "ssc-quant-6",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "A train covers 120 km in 2 hours. Its speed is:",
            "एक ट्रेन 2 घंटे में 120 किमी चलती है। उसकी गति है:",
            [
              "50 km/h",
              "55 km/h",
              "60 km/h",
              "65 km/h",
              "50 किमी/घंटा",
              "55 किमी/घंटा",
              "60 किमी/घंटा",
              "65 किमी/घंटा",
            ],
            "C",
            "Speed = Distance ÷ Time = 60 km/h.",
            "गति = दूरी ÷ समय = 60 किमी/घंटा।"
          ),
          createGovQuestion(
            "ssc-quant-7",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "40% in fraction form is:",
            "40% को भिन्न रूप में लिखें:",
            [
              "1/5",
              "2/5",
              "3/5",
              "4/5",
              "1/5",
              "2/5",
              "3/5",
              "4/5",
            ],
            "B",
            "40/100 simplifies to 2/5.",
            "40/100 को सरल करने पर 2/5 मिलता है।"
          ),
          createGovQuestion(
            "ssc-quant-8",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "The ratio 20:25 simplifies to:",
            "20:25 का सरल रूप है:",
            [
              "2:5",
              "4:5",
              "5:4",
              "3:4",
              "2:5",
              "4:5",
              "5:4",
              "3:4",
            ],
            "B",
            "Both terms divide by 5, giving 4:5.",
            "दोनों पद 5 से विभाजित होते हैं, इसलिए 4:5 मिलता है।"
          ),
          createGovQuestion(
            "ssc-quant-9",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "If 12 men complete a work in 10 days, total man-days are:",
            "यदि 12 व्यक्ति 10 दिनों में काम पूरा करते हैं, तो कुल man-days होंगे:",
            [
              "100",
              "110",
              "120",
              "130",
              "100",
              "110",
              "120",
              "130",
            ],
            "C",
            "Man-days = 12 × 10 = 120.",
            "Man-days = 12 × 10 = 120।"
          ),
          createGovQuestion(
            "ssc-quant-10",
            "Quantitative Aptitude",
            "मात्रात्मक योग्यता",
            "The square of 12 is:",
            "12 का वर्ग है:",
            [
              "124",
              "132",
              "144",
              "156",
              "124",
              "132",
              "144",
              "156",
            ],
            "C",
            "12 × 12 = 144.",
            "12 × 12 = 144।"
          ),
        ],
      },
      {
        slug: "english-set-1",
        title: "English Set 1",
        titleHi: "अंग्रेजी सेट 1",
        chapter: "English",
        chapterHi: "अंग्रेजी",
        difficulty: "Easy",
        durationMin: 12,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          createGovQuestion(
            "ssc-eng-1",
            "English",
            "अंग्रेजी",
            "Choose the correct spelling.",
            "सही spelling चुनें।",
            [
              "Accomodation",
              "Accommodation",
              "Acommodation",
              "Accommadation",
              "Accomodation",
              "Accommodation",
              "Acommodation",
              "Accommadation",
            ],
            "B",
            "'Accommodation' is the correct spelling.",
            "'Accommodation' सही spelling है।"
          ),
          createGovQuestion(
            "ssc-eng-2",
            "English",
            "अंग्रेजी",
            "Choose the synonym of 'rapid'.",
            "'Rapid' का समानार्थी शब्द चुनें।",
            [
              "Slow",
              "Fast",
              "Late",
              "Calm",
              "धीमा",
              "तेज़",
              "देर",
              "शांत",
            ],
            "B",
            "'Fast' is the synonym of 'rapid'.",
            "'Fast', 'rapid' का समानार्थी शब्द है।"
          ),
          createGovQuestion(
            "ssc-eng-3",
            "English",
            "अंग्रेजी",
            "Choose the antonym of 'increase'.",
            "'Increase' का विलोम शब्द चुनें।",
            [
              "Rise",
              "Grow",
              "Decrease",
              "Expand",
              "बढ़ना",
              "उगना/बढ़ना",
              "घटना",
              "फैलना",
            ],
            "C",
            "'Decrease' is the antonym of 'increase'.",
            "'Decrease', 'increase' का विलोम है।"
          ),
          createGovQuestion(
            "ssc-eng-4",
            "English",
            "अंग्रेजी",
            "One word for 'A person who writes poems' is:",
            "'जो व्यक्ति कविता लिखता है' उसके लिए एक शब्द है:",
            [
              "Author",
              "Poet",
              "Singer",
              "Editor",
              "लेखक",
              "कवि",
              "गायक",
              "संपादक",
            ],
            "B",
            "A person who writes poems is called a poet.",
            "जो व्यक्ति कविता लिखता है उसे कवि कहते हैं।"
          ),
          createGovQuestion(
            "ssc-eng-5",
            "English",
            "अंग्रेजी",
            "Choose the correct passive voice: 'She writes a letter.'",
            "'She writes a letter.' का सही passive voice चुनें।",
            [
              "A letter is written by her.",
              "A letter was written by her.",
              "A letter wrote by her.",
              "A letter has written by her.",
              "A letter is written by her.",
              "A letter was written by her.",
              "A letter wrote by her.",
              "A letter has written by her.",
            ],
            "A",
            "Simple present passive form is 'is written'.",
            "Simple present passive का सही रूप 'is written' है।"
          ),
          createGovQuestion(
            "ssc-eng-6",
            "English",
            "अंग्रेजी",
            "Choose the correct indirect speech: He said, 'I am tired.'",
            "सही indirect speech चुनें: He said, 'I am tired.'",
            [
              "He said that he was tired.",
              "He said that I am tired.",
              "He says that he was tired.",
              "He said he is tired.",
              "He said that he was tired.",
              "He said that I am tired.",
              "He says that he was tired.",
              "He said he is tired.",
            ],
            "A",
            "In indirect speech, 'am' changes to 'was' here.",
            "Indirect speech में यहाँ 'am' बदलकर 'was' हो जाता है।"
          ),
          createGovQuestion(
            "ssc-eng-7",
            "English",
            "अंग्रेजी",
            "Which part of speech is 'quickly'?",
            "'Quickly' किस part of speech का उदाहरण है?",
            [
              "Noun",
              "Adjective",
              "Adverb",
              "Pronoun",
              "संज्ञा",
              "विशेषण",
              "क्रिया विशेषण",
              "सर्वनाम",
            ],
            "C",
            "'Quickly' describes how an action happens, so it is an adverb.",
            "'Quickly' क्रिया के होने का ढंग बताता है, इसलिए यह क्रिया विशेषण है।"
          ),
          createGovQuestion(
            "ssc-eng-8",
            "English",
            "अंग्रेजी",
            "Fill in the blank: He has been working here _____ 2020.",
            "रिक्त स्थान भरें: He has been working here _____ 2020.",
            [
              "for",
              "since",
              "from",
              "at",
              "for",
              "since",
              "from",
              "at",
            ],
            "B",
            "'Since' is used for a point of time.",
            "'Since' का प्रयोग निश्चित समय बिंदु के लिए होता है।"
          ),
          createGovQuestion(
            "ssc-eng-9",
            "English",
            "अंग्रेजी",
            "Choose the correctly punctuated sentence.",
            "सही विराम चिह्न वाला वाक्य चुनें।",
            [
              "Lets eat, children.",
              "Let's eat, children.",
              "Lets eat children.",
              "Let's eat children.",
              "Lets eat, children.",
              "Let's eat, children.",
              "Lets eat children.",
              "Let's eat children.",
            ],
            "B",
            "The apostrophe and comma make the sentence correct.",
            "Apostrophe और comma के कारण यह वाक्य सही है।"
          ),
          createGovQuestion(
            "ssc-eng-10",
            "English",
            "अंग्रेजी",
            "An idiom is:",
            "Idiom क्या होता है?",
            [
              "A punctuation mark",
              "A group of words with special meaning",
              "A type of essay",
              "A grammar rule",
              "विराम चिह्न",
              "विशेष अर्थ वाला शब्द समूह",
              "निबंध का प्रकार",
              "व्याकरण नियम",
            ],
            "B",
            "An idiom has a meaning different from the literal words.",
            "Idiom का अर्थ उसके शब्दों के शाब्दिक अर्थ से अलग होता है।"
          ),
        ],
      },
      {
  slug: "ga-set-1",
  title: "General Awareness Set 1",
  titleHi: "सामान्य ज्ञान सेट 1",
  chapter: "General Awareness",
  chapterHi: "सामान्य ज्ञान",
  difficulty: "Easy",
  durationMin: 15,
  questionCount: 10,
  bilingual: true,
  isLive: true,
  questions: [
    createGovQuestion("ssc-ga-1","GA","GA","Capital of India?","भारत की राजधानी क्या है?",["Delhi","Mumbai","Chennai","Kolkata","दिल्ली","मुंबई","चेन्नई","कोलकाता"],"A","Delhi is capital.","दिल्ली राजधानी है।"),
    createGovQuestion("ssc-ga-2","GA","GA","National animal of India?","भारत का राष्ट्रीय पशु?",["Tiger","Lion","Elephant","Dog","बाघ","शेर","हाथी","कुत्ता"],"A","Tiger is national animal.","बाघ राष्ट्रीय पशु है।"),
    createGovQuestion("ssc-ga-3","GA","GA","Independence Day?","स्वतंत्रता दिवस?",["15 Aug","26 Jan","2 Oct","14 Nov","15 अगस्त","26 जनवरी","2 अक्टूबर","14 नवंबर"],"A","15 Aug is Independence Day.","15 अगस्त स्वतंत्रता दिवस है।"),
    createGovQuestion("ssc-ga-4","GA","GA","Currency of India?","भारत की मुद्रा?",["Rupee","Dollar","Euro","Yen","रुपया","डॉलर","यूरो","येन"],"A","Rupee is currency.","रुपया मुद्रा है।"),
    createGovQuestion("ssc-ga-5","GA","GA","Prime Minister of India?","भारत के प्रधानमंत्री?",["Narendra Modi","Rahul Gandhi","Amit Shah","None","नरेंद्र मोदी","राहुल गांधी","अमित शाह","कोई नहीं"],"A","Current PM Modi.","वर्तमान पीएम मोदी।"),
    createGovQuestion("ssc-ga-6","GA","GA","National bird?","राष्ट्रीय पक्षी?",["Peacock","Crow","Sparrow","Parrot","मोर","कौवा","गौरैया","तोता"],"A","Peacock is national bird.","मोर राष्ट्रीय पक्षी है।"),
    createGovQuestion("ssc-ga-7","GA","GA","Largest planet?","सबसे बड़ा ग्रह?",["Jupiter","Mars","Earth","Venus","बृहस्पति","मंगल","पृथ्वी","शुक्र"],"A","Jupiter largest.","बृहस्पति सबसे बड़ा।"),
    createGovQuestion("ssc-ga-8","GA","GA","Ganga is a:","गंगा क्या है?",["River","Mountain","City","Road","नदी","पर्वत","शहर","सड़क"],"A","Ganga is river.","गंगा नदी है।"),
    createGovQuestion("ssc-ga-9","GA","GA","National flower?","राष्ट्रीय फूल?",["Lotus","Rose","Sunflower","Lily","कमल","गुलाब","सूरजमुखी","लिली"],"A","Lotus is national flower.","कमल राष्ट्रीय फूल है।"),
    createGovQuestion("ssc-ga-10","GA","GA","Who wrote Ramayana?","रामायण किसने लिखी?",["Valmiki","Tulsidas","Kalidas","None","वाल्मीकि","तुलसीदास","कालिदास","कोई नहीं"],"A","Valmiki wrote Ramayana.","वाल्मीकि ने रामायण लिखी।"),
  ],
},
  ...generateSscFullLengthSets(),
  ...generateSscChslFullLengthSets(),
  ...generateSscTier2FullLengthSets(),
    ],
  },

  {
    slug: "railway",
    title: "Railway Practice Tests",
    titleHi: "रेलवे अभ्यास परीक्षा",
    icon: "🚂",
    description:
      "Free Railway bilingual practice tests with answers and explanations in English and Hindi, including official-style full-length mocks for RRB Group D CBT, NTPC CBT-1, ALP/Technician CBT-1, and Ticket Clerk/TT patterns.",
    descriptionHi:
      "अंग्रेजी और हिंदी में उत्तर व स्पष्टीकरण के साथ रेलवे के लिए ऑफिशियल-स्टाइल फुल-लेंथ मॉक: RRB ग्रुप D CBT, NTPC CBT-1, ALP/टेक्नीशियन CBT-1 और टिकट क्लर्क/TT पैटर्न।",
    audience: ["Railway aspirants", "RRB exam candidates", "Government job seekers"],
    chapters: [
      { name: "RRB Group D CBT", hi: "RRB ग्रुप D CBT" },
      { name: "RRB NTPC CBT-1", hi: "RRB NTPC CBT-1" },
      { name: "RRB ALP/Technician CBT-1", hi: "RRB ALP/टेक्नीशियन CBT-1" },
      { name: "RRB Ticket Clerk / TT CBT", hi: "RRB टिकट क्लर्क / TT CBT" },
    ],
    sets: [
      ...generateRailwayPatternSets(railwayGroupDConfig, 5),
      ...generateRailwayPatternSets(railwayNtpcConfig, 5),
      ...generateRailwayPatternSets(railwayAlpTechnicianConfig, 5),
      ...generateRailwayPatternSets(railwayTicketClerkTtConfig, 5),
    ],
  },

  {
    slug: "medical",
    title: "Medical NEET Practice Tests",
    titleHi: "मेडिकल NEET अभ्यास परीक्षा",
    icon: "🩺",
    description:
      "Free Medical NEET English-only practice tests with 5 chapter-wise sets each for Physics, Chemistry, Biology and 5 official-style full mocks (Physics 45, Chemistry 45, Biology 90).",
    descriptionHi:
      "NEET फिजिक्स, केमिस्ट्री, बायोलॉजी के 5-5 अध्याय-आधारित सेट और 5 फुल मॉक के साथ मेडिकल NEET अभ्यास टेस्ट (Physics 45, Chemistry 45, Biology 90)।",
    audience: ["NEET aspirants", "Medical entrance students", "PCB candidates"],
    chapters: [
      { name: "NEET Physics", hi: "NEET भौतिकी" },
      { name: "NEET Chemistry", hi: "NEET रसायन" },
      { name: "NEET Biology", hi: "NEET जीवविज्ञान" },
      { name: "Full-length NEET Mock", hi: "फुल-लेंथ NEET मॉक" },
    ],
    sets: [...generateNeetSubjectWiseSets(), ...generateNeetUgFullLengthSets()],
  },
];

export const practiceSets: PracticeSet[] = [
  {
    id: "aviation-cabin-crew-set-1",
    slug: "aviation-cabin-crew-practice-set-1",
    category: "aviation",
    title: "Cabin Crew Practice Set 1",
    description:
      "Entry-level cabin crew practice for passenger service, safety awareness, communication etiquette, grooming standards, and basic in-flight scenario handling.",
    examType: "Aviation Cabin Crew",
    level: "beginner",
    questionCount: 16,
    estimatedMinutes: 20,
    seoTitle:
      "Cabin Crew Practice Questions with Answers - Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice cabin crew interview-style and aptitude questions with explanations. Learn passenger handling, communication, safety basics, and service etiquette.",
    keywords: [
      "cabin crew practice questions",
      "air hostess preparation",
      "cabin crew interview practice",
      "aviation jobs preparation",
      "flight attendant mock test",
    ],
    intro:
      "This set is for beginners preparing for cabin crew recruitment rounds and communication-heavy interviews.",
    questions: [
      createQuestion(
        "aviation-cc-1",
        "A passenger is anxious during turbulence. Your best first response is:",
        [
          "Ignore and continue service",
          "Calmly reassure and ask them to keep seat belt fastened",
          "Ask them to stand and stretch",
          "Tell them turbulence is not serious and walk away",
        ],
        "B",
        "Cabin crew should reassure passengers calmly and reinforce safety instructions.",
        "passenger handling",
        "easy"
      ),
      createQuestion(
        "aviation-cc-2",
        "Which quality is most critical for cabin crew during boarding?",
        ["Speed only", "Observation and communication", "Silence", "Technical maintenance skills"],
        "B",
        "Boarding requires clear communication, attention to passenger needs, and safety awareness.",
        "service skills",
        "easy"
      ),
      createQuestion(
        "aviation-cc-3",
        "If two passengers argue loudly, what is the best approach?",
        [
          "Publicly scold both passengers",
          "Move one passenger immediately without speaking",
          "Intervene politely, de-escalate, and seek senior support if needed",
          "Wait for the pilot to handle it",
        ],
        "C",
        "Cabin crew should de-escalate conflict professionally and escalate when required.",
        "conflict handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc-4",
        "Professional cabin crew communication should be:",
        ["Informal and casual", "Short and rude", "Clear, polite, and confident", "Only scripted"],
        "C",
        "Recruiters assess clarity, courtesy, and confidence in communication.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-cc-5",
        "Before takeoff, passengers are reminded mainly to:",
        ["Order food", "Turn off reading lights", "Follow safety instructions", "Fill feedback form"],
        "C",
        "Takeoff preparation is safety-focused, including seat belts and compliance instructions.",
        "safety basics",
        "easy"
      ),
      createQuestion(
        "aviation-cc-6",
        "What does strong customer service in cabin crew roles mean?",
        [
          "Serving fast regardless of accuracy",
          "Balancing safety, courtesy, and passenger comfort",
          "Talking continuously with passengers",
          "Avoiding difficult passengers",
        ],
        "B",
        "Cabin crew service is not only hospitality; it must align with safety and professionalism.",
        "customer service",
        "medium"
      ),
      createQuestion(
        "aviation-cc-7",
        "In interview rounds, airlines usually assess grooming because it reflects:",
        ["Fashion trend awareness", "Professional discipline and brand representation", "Only personal style", "Social media influence"],
        "B",
        "Grooming in aviation is linked with professionalism, hygiene, and customer confidence.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-cc-8",
        "When a passenger asks for help in an unfamiliar language, you should:",
        [
          "Ignore the request",
          "Respond respectfully, use simple words/gestures, and seek team help",
          "Argue with the passenger",
          "Tell them to wait until landing",
        ],
        "B",
        "Inclusive communication and teamwork are essential in multicultural cabin environments.",
        "communication",
        "medium"
      ),
      createQuestion(
        "aviation-cc-9",
        "A core cabin crew competency for emergency situations is:",
        ["Panic response", "Calm decision-making", "Loud speaking only", "Avoiding responsibility"],
        "B",
        "Recruiters value composure and procedure-based responses under pressure.",
        "safety basics",
        "medium"
      ),
      createQuestion(
        "aviation-cc-10",
        "If you do not know an answer to a passenger query, best practice is:",
        [
          "Give a random answer",
          "Admit politely and verify with the right source/team member",
          "Ignore and move on",
          "Blame another department",
        ],
        "B",
        "Honest and accurate communication builds trust and avoids service errors.",
        "customer service",
        "easy"
      ),
      createQuestion(
        "aviation-cc-11",
        "Cabin crew interviews often include scenario questions to test:",
        ["Memorization only", "Judgment and communication under pressure", "Typing speed", "Mathematical formulas"],
        "B",
        "Scenario rounds measure behavior, judgment, and teamwork in real service contexts.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-cc-12",
        "Best mindset for cabin crew preparation is:",
        ["Only appearance matters", "Safety and service go together", "No need for communication practice", "Interview preparation is optional"],
        "B",
        "Successful candidates combine service attitude with safety awareness and communication skills.",
        "career strategy",
        "easy"
      ),
      createQuestion(
        "aviation-cc-13",
        "During boarding, a passenger looks confused about seat direction. Best response:",
        [
          "Ignore because boarding is busy",
          "Guide politely with clear directions and calm body language",
          "Tell another passenger to help",
          "Ask them to wait until everyone boards",
        ],
        "B",
        "Small moments of calm guidance improve passenger confidence and boarding flow.",
        "service skills",
        "easy"
      ),
      createQuestion(
        "aviation-cc-14",
        "What makes a self-introduction stronger in cabin crew interviews?",
        [
          "Long personal background only",
          "Short role-fit summary with communication and service strengths",
          "Salary expectations first",
          "Random hobbies only",
        ],
        "B",
        "Interview introductions should be concise, relevant, and professional.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-cc-15",
        "A passenger asks the same question repeatedly because they are nervous. You should:",
        [
          "Show frustration",
          "Repeat the answer calmly and confirm they understood",
          "Walk away after first answer",
          "Ask them not to speak again",
        ],
        "B",
        "Patient repetition with confirmation is part of strong service behavior.",
        "passenger handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc-16",
        "Which habit improves cabin crew interview performance most?",
        [
          "Memorizing one answer only",
          "Practicing common scenarios aloud and improving weak responses",
          "Skipping mock interviews",
          "Only focusing on appearance",
        ],
        "B",
        "Scenario practice improves confidence, clarity, and behavioral consistency.",
        "career strategy",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-ground-staff-set-1",
    slug: "aviation-ground-staff-practice-set-1",
    category: "aviation",
    title: "Ground Staff Practice Set 1",
    description:
      "Ground staff practice for check-in flow, passenger documentation awareness, queue management, baggage basics, and service desk communication.",
    examType: "Aviation Ground Staff",
    level: "beginner",
    questionCount: 16,
    estimatedMinutes: 20,
    seoTitle:
      "Ground Staff Practice Questions with Answers - Set 1 | Nishaglobal Education",
    seoDescription:
      "Prepare for airport ground staff jobs with practical check-in, documentation, baggage, and passenger support questions.",
    keywords: [
      "ground staff practice test",
      "airport ground staff interview",
      "check-in agent questions",
      "aviation ground operations",
      "airport jobs preparation",
    ],
    intro:
      "This set helps beginners prepare for airport front-desk and check-in related ground staff roles.",
    questions: [
      createQuestion(
        "aviation-gs-1",
        "At check-in counters, your first priority is:",
        ["Selling upgrades only", "Passenger verification and smooth processing", "Ignoring queue discipline", "Chatting with team"],
        "B",
        "Ground staff must verify passenger details and process check-in accurately.",
        "check-in operations",
        "easy"
      ),
      createQuestion(
        "aviation-gs-2",
        "If queue length increases sharply, the best immediate action is:",
        [
          "Close the counter",
          "Coordinate support and guide passengers clearly",
          "Stop announcements",
          "Ask passengers to manage themselves",
        ],
        "B",
        "Queue management depends on communication, coordination, and proactive support.",
        "queue management",
        "medium"
      ),
      createQuestion(
        "aviation-gs-3",
        "Ground staff communication should be:",
        ["Fast but unclear", "Clear and respectful", "Strict and harsh", "Very technical for all passengers"],
        "B",
        "Passengers need clear, respectful, and easy-to-follow guidance.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-gs-4",
        "A delayed passenger reaches the counter stressed. You should:",
        [
          "Argue with them",
          "Stay calm, check options quickly, and explain next steps",
          "Ignore urgency",
          "Send them away without checking",
        ],
        "B",
        "Professional calmness and quick problem-solving improve passenger experience.",
        "passenger handling",
        "medium"
      ),
      createQuestion(
        "aviation-gs-5",
        "Why is document verification important in ground roles?",
        ["Only for record keeping", "For operational and regulatory compliance", "Only for VIP passengers", "Not important"],
        "B",
        "Accurate document checks support secure and compliant airport operations.",
        "documentation",
        "easy"
      ),
      createQuestion(
        "aviation-gs-6",
        "In airport service roles, teamwork matters because:",
        ["One person handles everything", "Multiple desks and units must coordinate", "Passengers prefer one person only", "It reduces safety"],
        "B",
        "Ground operations require coordination across counters, security, and gates.",
        "teamwork",
        "easy"
      ),
      createQuestion(
        "aviation-gs-7",
        "A passenger cannot understand your instruction. Best response:",
        ["Repeat louder only", "Use simple wording and confirm understanding", "Ignore and proceed", "Call someone without trying"],
        "B",
        "Effective service communication includes simplification and confirmation.",
        "communication",
        "medium"
      ),
      createQuestion(
        "aviation-gs-8",
        "Baggage handling queries should be addressed with:",
        ["Assumptions", "Policy-based, accurate guidance", "Personal opinions", "No response"],
        "B",
        "Ground staff should use process-based responses and verified information.",
        "baggage awareness",
        "medium"
      ),
      createQuestion(
        "aviation-gs-9",
        "What is a strong interview answer style for ground staff candidates?",
        ["Short and vague", "Specific examples from real situations", "Only theoretical statements", "Memorized one-line replies"],
        "B",
        "Recruiters prefer practical examples showing service and problem-solving.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-gs-10",
        "When systems are slow, a professional ground staff response is:",
        ["Show frustration", "Inform passengers politely and manage flow", "Stop work", "Blame passengers"],
        "B",
        "System delays need calm updates and active queue coordination.",
        "service control",
        "medium"
      ),
      createQuestion(
        "aviation-gs-11",
        "Ground staff roles mainly combine:",
        ["Technical flying skills", "Process discipline and passenger service", "Cabin announcements only", "Pilot-level operations"],
        "B",
        "These roles focus on ground process accuracy and customer-facing support.",
        "career basics",
        "easy"
      ),
      createQuestion(
        "aviation-gs-12",
        "Best preparation before ground staff interviews includes:",
        ["No company research", "Role research, communication drills, and scenario practice", "Only resume printing", "Ignoring airport process basics"],
        "B",
        "Interview success improves with role-wise research and scenario-based practice.",
        "career strategy",
        "easy"
      ),
      createQuestion(
        "aviation-gs-13",
        "If a passenger asks where to go next after check-in, best response is:",
        [
          "Figure it out yourself",
          "Give clear, simple directions to the next process point",
          "Ignore because counter is busy",
          "Ask another passenger to explain",
        ],
        "B",
        "Ground staff service includes guiding passengers clearly through the process.",
        "check-in operations",
        "easy"
      ),
      createQuestion(
        "aviation-gs-14",
        "Why is calm tone important at the check-in counter?",
        [
          "It sounds formal only",
          "It reduces confusion and helps passengers follow instructions",
          "It is needed only for VIPs",
          "It has no impact",
        ],
        "B",
        "A calm tone supports smoother passenger response and lower conflict.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-gs-15",
        "A passenger asks about baggage rules and you are unsure. Best action:",
        [
          "Give an estimate",
          "Verify the correct rule before advising",
          "Ignore the question",
          "Blame airline policy",
        ],
        "B",
        "Verified answers are important for compliance and passenger trust.",
        "baggage awareness",
        "medium"
      ),
      createQuestion(
        "aviation-gs-16",
        "Which quality helps most in front-desk airport roles?",
        [
          "Fast talking",
          "Process clarity with respectful service behavior",
          "Avoiding teamwork",
          "Working without updates",
        ],
        "B",
        "Ground roles require both process discipline and professional customer handling.",
        "career basics",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-support-staff-set-1",
    slug: "aviation-support-staff-practice-set-1",
    category: "aviation",
    title: "Airport Support Staff Practice Set 1",
    description:
      "Support staff practice for airport coordination, shift discipline, safety-first behavior, escalation awareness, and operational teamwork.",
    examType: "Airport Support Staff",
    level: "beginner",
    questionCount: 12,
    estimatedMinutes: 15,
    seoTitle:
      "Airport Support Staff Practice Questions with Answers - Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice airport support staff questions for safety, teamwork, shift discipline, operational reporting, and interview readiness.",
    keywords: [
      "airport support staff practice",
      "aviation support job preparation",
      "airport operations interview questions",
      "aviation safety basics",
      "ground operations staff mock test",
    ],
    intro:
      "This set is for candidates preparing for airport support and operations-assistant style recruitment rounds.",
    questions: [
      createQuestion(
        "aviation-ss-1",
        "In support staff roles, safety-related observations should be:",
        ["Ignored if minor", "Reported through proper channel promptly", "Shared only after shift", "Discussed casually"],
        "B",
        "Operational safety depends on timely reporting through formal channels.",
        "safety culture",
        "easy"
      ),
      createQuestion(
        "aviation-ss-2",
        "Shift discipline in airport roles is important because:",
        ["Flights are occasional", "Operations run on strict timelines", "It is optional", "Only managers need punctuality"],
        "B",
        "Airport processes are time-sensitive and require punctual handovers.",
        "work discipline",
        "easy"
      ),
      createQuestion(
        "aviation-ss-3",
        "If you are unsure about a task instruction, best response is:",
        ["Proceed without clarity", "Seek clarification before execution", "Ask passengers", "Skip the task"],
        "B",
        "Clarification reduces operational errors and safety risks.",
        "task handling",
        "easy"
      ),
      createQuestion(
        "aviation-ss-4",
        "Support staff teamwork mainly helps in:",
        ["Avoiding communication", "Smooth turnaround and coordinated operations", "Reducing accountability", "Replacing all procedures"],
        "B",
        "Coordination across units is essential for airport efficiency.",
        "teamwork",
        "medium"
      ),
      createQuestion(
        "aviation-ss-5",
        "Professional reporting in operations should be:",
        ["Emotional and vague", "Accurate, concise, and timely", "Delayed", "Verbal only without records"],
        "B",
        "Operations depend on clear and timely information flow.",
        "reporting",
        "easy"
      ),
      createQuestion(
        "aviation-ss-6",
        "When workload increases unexpectedly, good practice is:",
        ["Work in isolation", "Prioritize tasks and coordinate with supervisor/team", "Stop reporting", "Leave tasks pending"],
        "B",
        "Prioritization and escalation keep operations stable under pressure.",
        "operations control",
        "medium"
      ),
      createQuestion(
        "aviation-ss-7",
        "Why do recruiters ask situational questions for support staff?",
        ["To test memorization only", "To evaluate judgment and reliability", "To test handwriting", "To avoid technical discussion"],
        "B",
        "Scenario responses reveal practical decision-making and accountability.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-ss-8",
        "In airport operations, escalation means:",
        ["Passing blame", "Informing the right authority for timely resolution", "Ignoring issues", "Public complaints only"],
        "B",
        "Escalation is a formal process to address issues at the right level.",
        "process awareness",
        "medium"
      ),
      createQuestion(
        "aviation-ss-9",
        "A strong support staff candidate demonstrates:",
        ["Carelessness", "Responsibility and process discipline", "Overconfidence without listening", "Role confusion"],
        "B",
        "Employers value reliability, discipline, and process compliance.",
        "career basics",
        "easy"
      ),
      createQuestion(
        "aviation-ss-10",
        "If a co-worker misses a critical step, the safest action is:",
        ["Ignore to avoid conflict", "Address politely and inform supervisor if needed", "Discuss later", "Complain publicly"],
        "B",
        "Safety-first culture requires timely correction and proper escalation.",
        "safety culture",
        "medium"
      ),
      createQuestion(
        "aviation-ss-11",
        "Which interview preparation is most useful for support staff roles?",
        ["Only generic motivation answers", "Role-specific scenarios and process understanding", "No preparation", "Only salary negotiation"],
        "B",
        "Role-specific scenario prep improves interview confidence and accuracy.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-ss-12",
        "Best long-term strategy for airport support staff growth is:",
        ["Avoid learning new tasks", "Build consistency, safety habits, and communication skills", "Depend only on senior staff", "Focus only on one shift"],
        "B",
        "Growth in operations comes from discipline, skill-building, and dependable performance.",
        "career strategy",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-cabin-crew-set-2",
    slug: "aviation-cabin-crew-practice-set-2",
    category: "aviation",
    title: "Cabin Crew Practice Set 2",
    description:
      "Intermediate cabin crew practice with interview scenarios, safety communication, conflict handling, and service language accuracy.",
    examType: "Aviation Cabin Crew",
    level: "intermediate",
    questionCount: 16,
    estimatedMinutes: 22,
    seoTitle:
      "Cabin Crew Interview Practice Questions - Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice intermediate cabin crew interview and scenario questions with sample explanations for service, safety, and communication.",
    keywords: [
      "cabin crew set 2",
      "air hostess interview questions",
      "cabin crew scenario questions",
      "flight attendant communication practice",
      "aviation service interview prep",
    ],
    intro:
      "Use this set after Cabin Crew Set 1 to improve interview-quality responses and service judgment in pressure situations.",
    questions: [
      createQuestion(
        "aviation-cc2-1",
        "A passenger says your tone was rude. What is the best first response?",
        [
          "Defend yourself immediately",
          "Acknowledge politely and clarify with calm service tone",
          "Ignore and continue",
          "Ask another passenger to respond",
        ],
        "B",
        "Professional recovery starts with calm acknowledgement and respectful clarification.",
        "service recovery",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-2",
        "Which answer sounds most professional in an interview?",
        [
          "I can do any role, no need to train me",
          "I stay calm, follow SOP, and support passengers with clear communication",
          "I only like easy routes",
          "I prefer working alone and avoid team tasks",
        ],
        "B",
        "Recruiters value SOP awareness, composure, and teamwork language.",
        "interview language",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-3",
        "During a delay, passengers repeatedly ask for updates. You should:",
        [
          "Stop responding to avoid crowding",
          "Share verified updates at intervals and remain approachable",
          "Give unconfirmed times to calm everyone",
          "Ask passengers to check internet only",
        ],
        "B",
        "Verified, consistent communication reduces anxiety and conflict.",
        "delay handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-4",
        "A strong answer to 'Why cabin crew?' should focus on:",
        [
          "Travel photos",
          "Service mindset, safety responsibility, and teamwork",
          "Uniform only",
          "Celebrity lifestyle",
        ],
        "B",
        "Role-fit answers should combine service values and safety commitment.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-5",
        "If a medical concern is reported onboard, your first principle is:",
        [
          "Panic and make random announcements",
          "Stay calm, follow crew protocol, and escalate correctly",
          "Hide the issue",
          "Wait until landing without informing team",
        ],
        "B",
        "Protocol-driven escalation and calm communication are critical.",
        "safety basics",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-6",
        "Which phrase is best for de-escalation?",
        [
          "Calm down, you are wrong",
          "I understand your concern, let me assist you step by step",
          "This is not my problem",
          "Please complain later",
        ],
        "B",
        "Empathy plus clear action language helps de-escalate conflict.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-7",
        "Cabin crew grooming standards are mainly linked with:",
        [
          "Fashion experimentation",
          "Professional hygiene and brand confidence",
          "Personal social media image",
          "No operational relevance",
        ],
        "B",
        "Grooming standards reflect discipline, hygiene, and trust.",
        "professional standards",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-8",
        "If you make a service error, the best correction approach is:",
        [
          "Hide the mistake",
          "Acknowledge, correct quickly, and inform relevant crew if needed",
          "Blame passenger behavior",
          "Ignore if small",
        ],
        "B",
        "Ownership and timely correction preserve passenger trust and team coordination.",
        "service recovery",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-9",
        "Interviewers ask scenario questions to evaluate:",
        [
          "Only memory",
          "Judgment, communication, and attitude",
          "Typing speed",
          "Geography knowledge only",
        ],
        "B",
        "Scenario answers reveal real behavior under operational pressure.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-10",
        "What is a good closing line in a cabin crew interview?",
        [
          "I need quick promotion",
          "I am ready to learn, serve safely, and grow with discipline",
          "I will work only preferred shifts",
          "I do not need feedback",
        ],
        "B",
        "A growth mindset and safety-service commitment are positive signals.",
        "interview language",
        "easy"
      ),
      createQuestion(
        "aviation-cc2-11",
        "When a child passenger is separated from family briefly, you should:",
        [
          "Announce loudly without process",
          "Follow crew protocol and support reunification calmly",
          "Ignore if boarding is busy",
          "Leave it to others without reporting",
        ],
        "B",
        "Passenger care requires process-based and calm action.",
        "passenger handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-12",
        "The strongest long-term cabin crew habit is:",
        [
          "Memorizing one script",
          "Continuous SOP learning, reflection, and communication practice",
          "Avoiding feedback",
          "Only focusing on appearance",
        ],
        "B",
        "Consistent improvement habits build reliable on-duty performance.",
        "career strategy",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-13",
        "If a passenger complains loudly about delay information, your best language is:",
        [
          "Please stop complaining",
          "I understand the frustration. Let me share the latest verified update",
          "We already told you",
          "Ask someone else",
        ],
        "B",
        "Empathy plus verified communication is the strongest service response.",
        "delay handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-14",
        "A strong answer to 'How do you work in teams?' should include:",
        [
          "I prefer leading only",
          "How you coordinate, support, and communicate during pressure",
          "I avoid team disagreements",
          "I work best alone",
        ],
        "B",
        "Teamwork answers should show communication and role awareness under pressure.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-15",
        "What should you do if passenger instructions are not followed after polite reminder?",
        [
          "Ignore it",
          "Repeat clearly and escalate according to crew protocol if required",
          "Argue with passenger",
          "Delay until landing",
        ],
        "B",
        "Safety compliance requires clear repetition and proper escalation when needed.",
        "safety basics",
        "medium"
      ),
      createQuestion(
        "aviation-cc2-16",
        "Which answer best reflects maturity in service roles?",
        [
          "I try to avoid difficult passengers",
          "I stay respectful, solution-focused, and calm during difficult interactions",
          "I prefer silent service only",
          "I respond based on mood",
        ],
        "B",
        "Recruiters value emotional control and solution-focused service behavior.",
        "customer service",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-ground-staff-set-2",
    slug: "aviation-ground-staff-practice-set-2",
    category: "aviation",
    title: "Ground Staff Practice Set 2",
    description:
      "Intermediate ground staff mock with documentation judgment, service recovery, queue control, and interview communication practice.",
    examType: "Aviation Ground Staff",
    level: "intermediate",
    questionCount: 16,
    estimatedMinutes: 22,
    seoTitle:
      "Ground Staff Interview Questions and Mock Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice intermediate airport ground staff interview and operational scenario questions with detailed explanations.",
    keywords: [
      "ground staff set 2",
      "airport check in interview",
      "ground operations scenario questions",
      "airport customer service practice",
      "ground staff communication test",
    ],
    intro:
      "This set builds stronger interview and process confidence after Ground Staff Set 1.",
    questions: [
      createQuestion(
        "aviation-gs2-1",
        "A passenger reaches wrong counter and becomes upset. Best response:",
        [
          "Tell them to find it themselves",
          "Acknowledge concern, guide clearly, and support quick redirection",
          "Ignore and continue paperwork",
          "Ask them to return later",
        ],
        "B",
        "Professional ground support combines empathy and clear direction.",
        "passenger handling",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-2",
        "When documentation looks inconsistent, you should:",
        [
          "Approve anyway to avoid delay",
          "Follow verification protocol and escalate if needed",
          "Argue publicly with passenger",
          "Discard the booking",
        ],
        "B",
        "Compliance depends on protocol-based checks and proper escalation.",
        "documentation",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-3",
        "A strong interview answer for peak-hour pressure should include:",
        [
          "I panic but finish somehow",
          "I prioritize, communicate updates, and coordinate support desks",
          "I stop taking passengers",
          "I avoid eye contact",
        ],
        "B",
        "Structured pressure handling is key for ground roles.",
        "interview readiness",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-4",
        "Which phrase is best for a delayed boarding update?",
        [
          "No idea, wait",
          "Thank you for your patience. We will share the next verified update shortly",
          "You should have arrived earlier",
          "Please do not ask again",
        ],
        "B",
        "Polite, verified, and time-bound communication is best practice.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-5",
        "Ground staff service quality is strongest when you:",
        [
          "Speed through without checks",
          "Balance accuracy, compliance, and passenger support",
          "Avoid difficult cases",
          "Rely only on memory",
        ],
        "B",
        "Role success requires both operational accuracy and service behavior.",
        "service quality",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-6",
        "If a family has a special assistance request, the best action is:",
        [
          "Ignore because queue is long",
          "Coordinate with designated support process and inform clearly",
          "Give unverified promises",
          "Send them to random desk",
        ],
        "B",
        "Assistance handling must follow process and communication discipline.",
        "special assistance",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-7",
        "Why do recruiters ask about your previous customer conflict?",
        [
          "To judge gossip",
          "To evaluate your de-escalation and accountability",
          "To test personal opinions",
          "To avoid technical rounds",
        ],
        "B",
        "Conflict examples show practical maturity and service recovery skills.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-8",
        "What makes a ground staff update trustworthy?",
        [
          "Speed only",
          "Confirmed information plus clear next step",
          "Personal guess",
          "Aggressive tone",
        ],
        "B",
        "Passengers trust updates that are verified and actionable.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-9",
        "A good answer to 'Why should we hire you?' is:",
        [
          "I need any job quickly",
          "I bring process discipline, service focus, and calm problem-solving",
          "I dislike team work",
          "I do not follow SOP strictly",
        ],
        "B",
        "Role-fit answers should show operational and service strengths.",
        "interview language",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-10",
        "If system issues cause delay, priority should be:",
        [
          "Silence to avoid complaints",
          "Flow control, escalation, and periodic updates",
          "Blaming IT publicly",
          "Closing all counters",
        ],
        "B",
        "Ground teams must stabilize flow while communicating clearly.",
        "operations control",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-11",
        "Role growth in ground operations usually comes from:",
        [
          "Ignoring feedback",
          "Consistency, cross-desk learning, and communication quality",
          "Avoiding difficult shifts",
          "Only speed without accuracy",
        ],
        "B",
        "Sustained performance and learning improve promotion readiness.",
        "career strategy",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-12",
        "Best interview preparation one day before round is:",
        [
          "Cram random answers",
          "Review role basics, 5 scenario stories, and professional self-introduction",
          "Skip company research",
          "Practice only salary discussion",
        ],
        "B",
        "Structured last-day prep builds clarity and confidence.",
        "interview strategy",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-13",
        "If a passenger asks for an exception you cannot approve, best response is:",
        [
          "Say no and move on",
          "Explain the policy politely and offer the next valid option",
          "Promise approval later",
          "Ignore the request",
        ],
        "B",
        "Respectful policy explanation is essential in passenger-facing operations.",
        "service quality",
        "medium"
      ),
      createQuestion(
        "aviation-gs2-14",
        "A strong ground staff candidate usually speaks in interviews with:",
        [
          "Long unclear answers",
          "Clear structure, short examples, and calm tone",
          "Very technical jargon only",
          "One-word replies",
        ],
        "B",
        "Clarity and example-based answers improve interview credibility.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-15",
        "If a passenger misses part of your explanation, you should:",
        [
          "Repeat angrily",
          "Rephrase simply and confirm understanding",
          "Ignore and continue",
          "Call another desk immediately",
        ],
        "B",
        "Simple rephrasing improves comprehension and service quality.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-gs2-16",
        "Which behavior improves ground staff growth most?",
        [
          "Avoiding peak-hour duties",
          "Learning process details and reviewing mistakes regularly",
          "Working without coordination",
          "Giving quick unverified answers",
        ],
        "B",
        "Repeated learning and review improve operational confidence and promotion readiness.",
        "career strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-support-staff-set-2",
    slug: "aviation-support-staff-practice-set-2",
    category: "aviation",
    title: "Airport Support Staff Practice Set 2",
    description:
      "Intermediate support staff preparation with escalation judgment, shift handover discipline, safety reporting, and interview scenario quality.",
    examType: "Airport Support Staff",
    level: "intermediate",
    questionCount: 12,
    estimatedMinutes: 18,
    seoTitle:
      "Airport Support Staff Interview Practice - Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice support staff scenario and interview questions for safety-first operations, reporting discipline, and teamwork.",
    keywords: [
      "support staff set 2",
      "airport support interview questions",
      "aviation safety reporting practice",
      "airport operations support mock",
      "support staff scenario questions",
    ],
    intro:
      "Use this set to deepen operational judgment and interview confidence after Support Staff Set 1.",
    questions: [
      createQuestion(
        "aviation-ss2-1",
        "A recurring safety issue is noticed by multiple shifts. Best action:",
        [
          "Ignore since it is recurring",
          "Document clearly and escalate through formal reporting chain",
          "Discuss only informally",
          "Wait for passenger complaint",
        ],
        "B",
        "Repeated issues require documented escalation and traceable action.",
        "safety reporting",
        "medium"
      ),
      createQuestion(
        "aviation-ss2-2",
        "Good shift handover should include:",
        [
          "Only completed tasks",
          "Pending tasks, risks, and clear ownership",
          "Verbal summary without records",
          "No mention of issues",
        ],
        "B",
        "Effective handover reduces operational gaps and delays.",
        "shift discipline",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-3",
        "If instructions conflict between two team members, you should:",
        [
          "Follow random option",
          "Seek supervisor clarification before execution",
          "Delay all work silently",
          "Argue in public area",
        ],
        "B",
        "Clarification through hierarchy prevents execution errors.",
        "task handling",
        "medium"
      ),
      createQuestion(
        "aviation-ss2-4",
        "Recruiters ask 'Tell me about a pressure situation' to assess:",
        [
          "Memory of definitions",
          "Reliability, judgment, and accountability",
          "Accent only",
          "Personal travel history",
        ],
        "B",
        "Behavioral questions reveal operational maturity and ownership.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-5",
        "In support roles, a professional incident note should be:",
        [
          "Emotional and lengthy",
          "Factual, time-stamped, and action-oriented",
          "Based on assumptions",
          "Written days later",
        ],
        "B",
        "Operational records must be factual, timely, and useful for action.",
        "reporting",
        "medium"
      ),
      createQuestion(
        "aviation-ss2-6",
        "If workload spikes, the best team behavior is:",
        [
          "Hide pending tasks",
          "Prioritize critical steps and coordinate role allocation",
          "Stop communication",
          "Wait for shift end",
        ],
        "B",
        "Coordination and prioritization keep safety and flow stable.",
        "operations control",
        "medium"
      ),
      createQuestion(
        "aviation-ss2-7",
        "Strong answer to 'How do you handle mistakes?' is:",
        [
          "I never make mistakes",
          "I report early, correct fast, and learn to prevent repeat",
          "I hide small mistakes",
          "I wait for others to notice",
        ],
        "B",
        "Ownership and prevention mindset are valued in operations.",
        "interview language",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-8",
        "Escalation is successful when:",
        [
          "Message is vague",
          "Right authority receives clear, timely details",
          "Issue is broadcast everywhere",
          "No follow-up is done",
        ],
        "B",
        "Clarity and correct routing make escalation effective.",
        "process awareness",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-9",
        "A reliable support staff profile usually demonstrates:",
        [
          "High confidence, low discipline",
          "Consistency, punctuality, and team accountability",
          "Only technical jargon",
          "No communication",
        ],
        "B",
        "Reliability is measured by everyday disciplined execution.",
        "career basics",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-10",
        "Before an operations interview, best preparation is:",
        [
          "Memorize one generic answer",
          "Prepare 4-5 real examples using situation-action-result format",
          "Avoid role research",
          "Skip reporting concepts",
        ],
        "B",
        "Structured examples make answers practical and credible.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-ss2-11",
        "If a teammate is overloaded, your best support is:",
        [
          "Ignore until asked",
          "Coordinate priorities and communicate handover clearly",
          "Take over without informing anyone",
          "Complain to others",
        ],
        "B",
        "Proactive coordination improves operational reliability.",
        "teamwork",
        "easy"
      ),
      createQuestion(
        "aviation-ss2-12",
        "Long-term growth in support operations depends most on:",
        [
          "Luck only",
          "Safety discipline, communication, and continuous upskilling",
          "Avoiding feedback",
          "Changing teams frequently",
        ],
        "B",
        "Career growth comes from dependable performance and learning.",
        "career strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-english-set-1",
    slug: "aviation-english-communication-practice-set-1",
    category: "aviation",
    title: "Aviation English Communication Practice Set 1",
    description:
      "English practice for aviation applicants covering spoken clarity, polite service phrases, interview grammar, and role-based communication.",
    examType: "Aviation English",
    level: "beginner",
    questionCount: 16,
    estimatedMinutes: 20,
    seoTitle:
      "Aviation English Practice Questions with Answers | Nishaglobal Education",
    seoDescription:
      "Practice aviation English communication questions for cabin crew, ground staff, and support staff interviews with explanations.",
    keywords: [
      "aviation english practice",
      "cabin crew english questions",
      "ground staff english communication",
      "airport interview english",
      "aviation spoken english mock test",
    ],
    intro:
      "Start here if you want stronger interview English and service communication before role-specific aviation rounds.",
    questions: [
      createQuestion(
        "aviation-eng-1",
        "Choose the most professional opening line for a passenger interaction:",
        [
          "What do you want?",
          "Good morning, how may I assist you today?",
          "Wait there",
          "Say quickly",
        ],
        "B",
        "Polite and clear openings create trust in service roles.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-2",
        "Choose the correct sentence for interview English:",
        [
          "I am working in customer service since two years",
          "I have been working in customer service for two years",
          "I has worked in customer service",
          "I working customer service two years",
        ],
        "B",
        "Present perfect continuous with 'for' is correct for duration.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng-3",
        "Best phrase for handling an upset passenger is:",
        [
          "You are overreacting",
          "I understand your concern. Let me help you with the next step",
          "Not my duty",
          "Ask someone else",
        ],
        "B",
        "Empathy plus action language improves de-escalation.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-4",
        "Choose the strongest self-introduction sentence:",
        [
          "Myself Riya and I want job",
          "My name is Riya. I have customer service experience and I handle pressure calmly",
          "I can do everything no training",
          "I need this job urgently",
        ],
        "B",
        "A strong introduction is clear, role-relevant, and professional.",
        "interview english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-5",
        "Complete the sentence: 'Please keep your seat belt ___ during turbulence.'",
        ["fasten", "fastened", "fastening", "to fasten"],
        "B",
        "'Keep ... fastened' is the correct and standard instruction pattern.",
        "aviation phrases",
        "medium"
      ),
      createQuestion(
        "aviation-eng-6",
        "Which answer is best for 'Why should we hire you?'",
        [
          "Because I need work quickly",
          "I bring disciplined service behavior, clear communication, and team reliability",
          "I only prefer easy duties",
          "I do not like feedback",
        ],
        "B",
        "Interview answers should show value, behavior, and role fit.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng-7",
        "Pick the correct polite request:",
        [
          "Give me your ID now",
          "Could you please share your ID for verification?",
          "Show ID fast",
          "ID, now",
        ],
        "B",
        "Polite requests maintain professionalism and cooperation.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-8",
        "Choose the best closing line in a support role interaction:",
        [
          "Done. Next.",
          "Thank you for your patience. Please contact us if you need further help",
          "That is all, go",
          "No more questions",
        ],
        "B",
        "Professional closings improve service quality and confidence.",
        "communication",
        "easy"
      ),
      createQuestion(
        "aviation-eng-9",
        "Correct sentence for teamwork communication:",
        [
          "I informed my supervisor and coordinated with the desk team",
          "I inform supervisor yesterday",
          "I was coordinate all team",
          "I did not informed",
        ],
        "A",
        "Sentence A is grammatically correct and context-appropriate.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng-10",
        "What is the best replacement for a vague answer in interview?",
        [
          "I can do everything",
          "In my last role, I handled peak queues by prioritizing and giving timely updates",
          "No comments",
          "Depends on mood",
        ],
        "B",
        "Specific examples are stronger than generic statements.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng-11",
        "Best phrase for seeking clarification from supervisor:",
        [
          "I will guess and do",
          "Could you please confirm the correct procedure before I proceed?",
          "Not sure, but I will try",
          "I do not need guidance",
        ],
        "B",
        "Clarity-first language reduces operational errors.",
        "professional english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-12",
        "Choose the best personal improvement line:",
        [
          "I am perfect already",
          "I practice role-based English daily and review feedback to improve interview quality",
          "English is not important",
          "I avoid mock interviews",
        ],
        "B",
        "Growth-oriented language reflects coachability and commitment.",
        "career communication",
        "easy"
      ),
      createQuestion(
        "aviation-eng-13",
        "Which sentence is best for greeting a passenger politely?",
        [
          "Tell me fast",
          "Good evening, how may I help you today?",
          "Say your issue",
          "What happened now?",
        ],
        "B",
        "Polite greeting language is the foundation of passenger-facing English.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng-14",
        "Choose the correct sentence:",
        [
          "I handled many passengers yesterday and remained calm",
          "I handle many passengers yesterday",
          "I had handle many passenger",
          "I am handled many passengers",
        ],
        "A",
        "Sentence A uses the correct past tense and agreement.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng-15",
        "Best phrase for offering assistance is:",
        [
          "Wait there",
          "Let me assist you with that",
          "No idea",
          "Ask later",
        ],
        "B",
        "Simple, polite assistance language sounds professional and confident.",
        "spoken scenario",
        "easy"
      ),
      createQuestion(
        "aviation-eng-16",
        "What improves spoken-English interview answers most?",
        [
          "Reading silently only",
          "Practicing aloud with role-based examples",
          "Memorizing without speaking",
          "Avoiding correction",
        ],
        "B",
        "Spoken performance improves through repeated aloud practice and refinement.",
        "career communication",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-english-set-2",
    slug: "aviation-english-communication-practice-set-2",
    category: "aviation",
    title: "Aviation English Communication Practice Set 2",
    description:
      "Intermediate aviation English practice for interview grammar, spoken clarity, service-recovery phrases, and role-based scenario responses.",
    examType: "Aviation English",
    level: "intermediate",
    questionCount: 16,
    estimatedMinutes: 22,
    seoTitle:
      "Aviation English Intermediate Practice Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice intermediate aviation English questions for cabin crew, ground staff, and support staff communication rounds.",
    keywords: [
      "aviation english set 2",
      "intermediate cabin crew english",
      "ground staff spoken english",
      "airport interview english practice",
      "aviation service communication set",
    ],
    intro:
      "Use Set 2 after Set 1 to improve grammar control and confident spoken responses for interview scenarios.",
    questions: [
      createQuestion(
        "aviation-eng2-1",
        "Choose the most professional line during a delay update:",
        [
          "No update, please wait",
          "Thank you for your patience. We are awaiting confirmation and will update you shortly",
          "We do not know anything",
          "Please stop asking",
        ],
        "B",
        "It is polite, transparent, and gives a clear communication commitment.",
        "spoken scenario",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-2",
        "Correct sentence: 'If a passenger is upset, I ___ calm and listen carefully.'",
        ["stay", "stays", "stayed", "staying"],
        "A",
        "With subject 'I', the base form 'stay' is correct in present tense.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-3",
        "Which answer sounds strongest for 'Tell me about yourself'?",
        [
          "I can do any job",
          "I am a customer-focused candidate with strong communication habits and calm decision-making",
          "I need work urgently",
          "I do not have any weakness",
        ],
        "B",
        "Role-relevant strengths and behavior language improve interview quality.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-4",
        "Best phrase when you need to verify a process before answering:",
        [
          "I will guess",
          "Let me confirm the details and provide you an accurate update",
          "Not sure",
          "Ask someone else",
        ],
        "B",
        "Verification language signals professionalism and accountability.",
        "professional english",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-5",
        "Choose the correct sentence for experience duration:",
        [
          "I have worked in service since three years",
          "I have been working in service for three years",
          "I am working in service for three years ago",
          "I working in service since three year",
        ],
        "B",
        "Use 'for' with duration and present perfect continuous for ongoing experience.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-6",
        "Which statement best shows empathy plus action?",
        [
          "Please wait",
          "I understand your concern, and I will help you with the next available option",
          "This is not my issue",
          "You should have planned better",
        ],
        "B",
        "Good service communication combines empathy with a clear next step.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-7",
        "Best line to close a check-in interaction:",
        [
          "Done",
          "Your process is complete. Please proceed to security, and have a pleasant journey",
          "Next",
          "Move quickly",
        ],
        "B",
        "Professional closure should be courteous and directional.",
        "spoken scenario",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-8",
        "Select the strongest response for a team-coordination interview question:",
        [
          "I work alone",
          "I share clear status updates and coordinate priorities with my team",
          "I avoid reporting",
          "I prefer no feedback",
        ],
        "B",
        "Team communication and priority alignment are core aviation skills.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-9",
        "Correct form: 'The supervisor asked me ___ the updated passenger list.'",
        ["to verify", "verify", "verifying", "verified"],
        "A",
        "After 'asked me', infinitive form 'to verify' is grammatically correct.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-10",
        "Which phrase is most appropriate for handling a complaint?",
        [
          "Calm down",
          "Thank you for sharing this. Let me review it and support you",
          "Not possible",
          "You are wrong",
        ],
        "B",
        "Respectful acknowledgment reduces tension and builds trust.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-11",
        "Best upgrade from a weak answer 'I am hardworking' is:",
        [
          "I am hardworking",
          "In my previous role, I handled peak-hour queues while maintaining accurate updates",
          "I always do my best",
          "I can do everything",
        ],
        "B",
        "Specific evidence is stronger than generic traits.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-12",
        "Best daily spoken-English improvement method is:",
        [
          "Only reading notes",
          "Daily role-based speaking, recording, and self-correction",
          "Memorizing without speaking",
          "Avoiding mock interviews",
        ],
        "B",
        "Fluency improves through consistent speaking practice with feedback.",
        "career communication",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-13",
        "Which answer is strongest for 'How do you handle pressure?'",
        [
          "I just manage somehow",
          "I stay organized, speak clearly, and focus on the next priority",
          "I panic first",
          "I avoid difficult situations",
        ],
        "B",
        "Good interview answers explain a clear method, not just a vague claim.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-14",
        "Correct sentence: 'The passenger requested that I ___ the boarding gate again.'",
        ["explain", "explained", "explaining", "to explain"],
        "A",
        "After 'requested that I', the base form 'explain' is correct here.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng2-15",
        "Best phrase for a respectful apology is:",
        [
          "Sorry, wait",
          "I am sorry for the inconvenience. Let me assist you with the next step",
          "This is not my mistake",
          "Please do not complain",
        ],
        "B",
        "A good apology acknowledges inconvenience and offers support action.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng2-16",
        "Which response sounds most professional in spoken interviews?",
        [
          "I can do everything",
          "I have practiced customer-facing communication and I stay calm under pressure",
          "Any role is okay",
          "I do not like teamwork",
        ],
        "B",
        "Specific, role-relevant confidence sounds stronger than generic claims.",
        "spoken scenario",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-english-set-4",
    slug: "aviation-english-communication-practice-set-4",
    category: "aviation",
    title: "Aviation English Communication Practice Set 4",
    description:
      "Advanced aviation English practice for final interview rounds with multi-step spoken scenarios, policy language, and escalation clarity.",
    examType: "Aviation English",
    level: "advanced",
    questionCount: 12,
    estimatedMinutes: 22,
    seoTitle:
      "Aviation English Advanced Practice Set 4 | Nishaglobal Education",
    seoDescription:
      "Practice advanced aviation English interview and spoken scenario questions for cabin crew, ground staff, and support roles.",
    keywords: [
      "aviation english set 4",
      "advanced airport interview english",
      "spoken scenario english aviation",
      "aviation communication mock set 4",
      "final round english preparation",
    ],
    intro:
      "Set 4 strengthens final-round spoken precision, policy-safe language, and escalation communication quality.",
    questions: [
      createQuestion(
        "aviation-eng4-1",
        "Best opening for a passenger escalation conversation is:",
        [
          "Please calm down first",
          "I understand your concern, and I will help you with the next clear step",
          "This is not my area",
          "Wait until someone comes",
        ],
        "B",
        "Strong openings combine empathy with immediate action language.",
        "spoken scenario",
        "hard"
      ),
      createQuestion(
        "aviation-eng4-2",
        "Choose the most professional escalation update:",
        [
          "Need urgent help",
          "Queue overflow at Counter 4; reroute support requested for immediate flow control",
          "Big problem here",
          "Please come fast",
        ],
        "B",
        "Good escalation messages are factual, specific, and action-oriented.",
        "professional english",
        "hard"
      ),
      createQuestion(
        "aviation-eng4-3",
        "Correct sentence: 'Had we received the update earlier, we ___ passengers sooner.'",
        ["inform", "informed", "would have informed", "had informed"],
        "C",
        "Third conditional needs 'would have + past participle'.",
        "grammar",
        "hard"
      ),
      createQuestion(
        "aviation-eng4-4",
        "Best answer to 'How do you communicate under pressure?'",
        [
          "I speak quickly",
          "I keep messages short, verified, and time-focused so passengers can act clearly",
          "I avoid talking much",
          "I let others communicate",
        ],
        "B",
        "Effective pressure communication is concise, accurate, and actionable.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng4-5",
        "Best policy-clarity phrase is:",
        [
          "This cannot be done",
          "As per policy, this option is unavailable, but I can guide you to these alternatives",
          "No, next",
          "Not allowed, please move",
        ],
        "B",
        "Professional policy communication should include alternatives when possible.",
        "service english",
        "hard"
      ),
      createQuestion(
        "aviation-eng4-6",
        "Which answer is strongest for teamwork communication?",
        [
          "I do my part only",
          "I share status updates, align priorities, and confirm handovers clearly",
          "I work faster alone",
          "I avoid escalations",
        ],
        "B",
        "Operational teamwork requires updates, alignment, and clear handovers.",
        "spoken scenario",
        "medium"
      ),
      createQuestion(
        "aviation-eng4-7",
        "Best phrase for clarifying misunderstanding is:",
        [
          "You are wrong",
          "Let me rephrase this clearly so we are on the same page",
          "Listen carefully",
          "I already explained",
        ],
        "B",
        "Rephrasing politely keeps communication constructive and clear.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-eng4-8",
        "In interview speaking, what is a high-quality close?",
        [
          "That is all",
          "I am ready to contribute with clear communication, discipline, and reliable service behavior",
          "I can do anything",
          "Please select me",
        ],
        "B",
        "A clear value-based close leaves a professional impression.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-eng4-9",
        "Correct sentence: 'The issue was resolved after we ___ the supervisor.'",
        ["inform", "informed", "had inform", "informing"],
        "B",
        "Past narrative here correctly uses 'informed'.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng4-10",
        "Best phrase for service recovery is:",
        [
          "Please wait",
          "I am sorry for the inconvenience. Let me fix this step by step",
          "This happens",
          "Not my responsibility",
        ],
        "B",
        "Recovery language should show ownership and clear action.",
        "spoken scenario",
        "easy"
      ),
      createQuestion(
        "aviation-eng4-11",
        "A mature response to feedback is:",
        [
          "I defend my style",
          "I review feedback, adjust communication, and test improvement in mock rounds",
          "I ignore comments",
          "I only change if required",
        ],
        "B",
        "Growth-focused communication behavior is key in aviation roles.",
        "career communication",
        "medium"
      ),
      createQuestion(
        "aviation-eng4-12",
        "Most effective daily routine for advanced spoken English is:",
        [
          "Read without speaking",
          "Practice 3 role scenarios aloud, record, and correct weak lines",
          "Memorize scripts",
          "Only learn vocabulary lists",
        ],
        "B",
        "Recorded scenario practice gives measurable improvement in fluency.",
        "spoken delivery",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-english-set-5",
    slug: "aviation-english-communication-practice-set-5",
    category: "aviation",
    title: "Aviation English Communication Practice Set 5",
    description:
      "Final advanced aviation English mock for interview mastery with high-pressure scenarios, structured responses, and professional closing quality.",
    examType: "Aviation English",
    level: "advanced",
    questionCount: 12,
    estimatedMinutes: 24,
    seoTitle:
      "Aviation English Final Mock Set 5 | Nishaglobal Education",
    seoDescription:
      "Final advanced aviation English communication set for interview readiness and spoken scenario consistency.",
    keywords: [
      "aviation english set 5",
      "final aviation english mock",
      "advanced spoken interview english",
      "airport communication mastery",
      "aviation english final round",
    ],
    intro:
      "Set 5 is your final language-readiness checkpoint before cabin crew, ground staff, or support-role interviews.",
    questions: [
      createQuestion(
        "aviation-eng5-1",
        "Best opening when multiple passengers demand updates at once:",
        [
          "Please wait silently",
          "Thank you for your patience. I will share the latest verified update and next steps now",
          "We already announced",
          "Check online",
        ],
        "B",
        "A clear group-facing update reduces confusion and tension.",
        "spoken scenario",
        "hard"
      ),
      createQuestion(
        "aviation-eng5-2",
        "Which response best shows accountability language?",
        [
          "Not sure",
          "I will verify this immediately and return with an accurate update",
          "Someone else handles this",
          "Please ask later",
        ],
        "B",
        "Ownership statements build trust in professional settings.",
        "professional english",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-3",
        "Correct sentence: 'By the time I reached the desk, the team ___ the issue.'",
        ["resolved", "had resolved", "resolve", "resolving"],
        "B",
        "Past perfect is correct for an action completed before another past action.",
        "grammar",
        "hard"
      ),
      createQuestion(
        "aviation-eng5-4",
        "Best final-round answer to 'Why should we hire you?'",
        [
          "I work hard",
          "I bring calm communication, process discipline, and reliable service execution under pressure",
          "I need this job",
          "I can do all roles equally",
        ],
        "B",
        "A value-based, role-aligned answer is strongest in final rounds.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-5",
        "Best phrase when policy blocks a request is:",
        [
          "Cannot do",
          "I understand your request. Based on policy, this is not available, but here are valid alternatives",
          "No chance",
          "Do not insist",
        ],
        "B",
        "Policy communication should remain respectful and solution-oriented.",
        "service english",
        "hard"
      ),
      createQuestion(
        "aviation-eng5-6",
        "Best speaking structure for scenario answers is:",
        [
          "Long story first",
          "Situation, action taken, result achieved, learning",
          "Result only",
          "Opinion only",
        ],
        "B",
        "Structured answers improve clarity and evaluation quality.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-7",
        "Which phrase sounds most passenger-friendly?",
        [
          "Next",
          "Please allow me to help you with this step",
          "Wait",
          "Not my task",
        ],
        "B",
        "Passenger-friendly language should be polite, clear, and actionable.",
        "spoken scenario",
        "easy"
      ),
      createQuestion(
        "aviation-eng5-8",
        "In final interviews, what matters most in spoken delivery?",
        [
          "Fast speech",
          "Clarity, control, and relevance of answers",
          "Accent style",
          "Complex vocabulary",
        ],
        "B",
        "Interviewers prioritize understandable, relevant communication.",
        "spoken delivery",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-9",
        "Correct sentence for professional reporting:",
        [
          "I already send update",
          "I have shared the update and logged the action taken",
          "I shared update yesterday now",
          "I am send details",
        ],
        "B",
        "This sentence is grammatically correct and operationally clear.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-10",
        "Best phrase for closing an interview answer:",
        [
          "That is it",
          "This experience strengthened my communication and decision-making under pressure",
          "Anyways",
          "No further comments",
        ],
        "B",
        "Strong closes summarize skill growth and role relevance.",
        "interview english",
        "easy"
      ),
      createQuestion(
        "aviation-eng5-11",
        "Most useful pre-interview language routine is:",
        [
          "Read silently",
          "Run timed mock Q&A and refine weak answers with feedback",
          "Only revise grammar rules",
          "Avoid speaking to conserve energy",
        ],
        "B",
        "Timed speaking drills build confidence and consistency.",
        "career communication",
        "medium"
      ),
      createQuestion(
        "aviation-eng5-12",
        "Final readiness in aviation English is best shown by:",
        [
          "Memorized scripts only",
          "Clear, calm, and consistent responses across varied scenarios",
          "Very long answers",
          "Using difficult words unnecessarily",
        ],
        "B",
        "Consistency across scenarios indicates true interview readiness.",
        "spoken scenario",
        "hard"
      ),
    ],
  },
  {
    id: "aviation-english-set-3",
    slug: "aviation-english-communication-practice-set-3",
    category: "aviation",
    title: "Aviation English Communication Practice Set 3",
    description:
      "Advanced spoken-scenario English practice for final interview rounds, escalation clarity, and high-pressure communication decisions.",
    examType: "Aviation English",
    level: "advanced",
    questionCount: 10,
    estimatedMinutes: 18,
    seoTitle:
      "Aviation English Advanced Practice Set 3 | Nishaglobal Education",
    seoDescription:
      "Advanced aviation English mock questions for spoken scenarios, interview quality, and professional escalation language.",
    keywords: [
      "aviation english set 3",
      "advanced spoken aviation english",
      "cabin crew final interview english",
      "ground staff advanced communication",
      "airport escalation language practice",
    ],
    intro:
      "Set 3 is for final-round readiness where your spoken clarity, judgment language, and composure are tested together.",
    questions: [
      createQuestion(
        "aviation-eng3-1",
        "Best opening in a high-pressure complaint situation is:",
        [
          "You are misunderstanding",
          "I understand this is frustrating. Let me assist you with the next immediate step",
          "Please wait quietly",
          "This is not my fault",
        ],
        "B",
        "It acknowledges emotion and quickly moves to support action.",
        "spoken scenario",
        "hard"
      ),
      createQuestion(
        "aviation-eng3-2",
        "Choose the strongest escalation sentence:",
        [
          "Need help quickly",
          "Issue observed at gate B2, passenger flow blocked, support required for queue diversion",
          "Problem here",
          "Call me now",
        ],
        "B",
        "Advanced escalation language should be specific, factual, and actionable.",
        "professional english",
        "hard"
      ),
      createQuestion(
        "aviation-eng3-3",
        "Correct advanced grammar sentence:",
        [
          "Had I knew earlier, I would inform the team",
          "Had I known earlier, I would have informed the team",
          "If I had knew, I informed team",
          "Had known I earlier, informed team",
        ],
        "B",
        "This is the correct third conditional structure.",
        "grammar",
        "hard"
      ),
      createQuestion(
        "aviation-eng3-4",
        "Best final-round answer to 'How do you stay calm?'",
        [
          "I just stay calm",
          "I prioritize critical tasks, control my pace, and communicate updates clearly",
          "I ignore pressure",
          "I wait for others",
        ],
        "B",
        "Shows method, not just a claim.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng3-5",
        "Choose the best policy-communication line:",
        [
          "Rule is rule",
          "Based on policy, this option is unavailable, but I can offer these alternatives",
          "Cannot help",
          "Ask someone else",
        ],
        "B",
        "Clear policy language with alternatives reduces friction.",
        "service english",
        "hard"
      ),
      createQuestion(
        "aviation-eng3-6",
        "Best replacement for filler-heavy answer is:",
        [
          "Umm... maybe I can do it",
          "In my previous role, I handled documentation checks with 100% process compliance",
          "I think... maybe",
          "Depends",
        ],
        "B",
        "Precise evidence-based language improves professional confidence.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-eng3-7",
        "In spoken interviews, the best pace is:",
        [
          "Very fast",
          "Controlled pace with clear pauses and concise points",
          "Very slow with long silence",
          "Monotone speed",
        ],
        "B",
        "Controlled delivery improves clarity and interviewer understanding.",
        "spoken delivery",
        "easy"
      ),
      createQuestion(
        "aviation-eng3-8",
        "Strong teamwork communication example should include:",
        [
          "Only personal effort",
          "How you coordinated, what action was taken, and the final outcome",
          "General motivation only",
          "No result",
        ],
        "B",
        "Outcome-based team examples are strongest in advanced rounds.",
        "interview english",
        "medium"
      ),
      createQuestion(
        "aviation-eng3-9",
        "Best phrase when you need time to verify data:",
        [
          "I do not know",
          "Allow me one moment to verify this accurately for you",
          "Wait",
          "Check yourself",
        ],
        "B",
        "Professional phrasing preserves confidence while ensuring accuracy.",
        "spoken scenario",
        "easy"
      ),
      createQuestion(
        "aviation-eng3-10",
        "Most effective final-week English prep is:",
        [
          "Only grammar worksheets",
          "Daily mock interview speaking with role-specific scenario correction",
          "Only vocabulary list",
          "No recording practice",
        ],
        "B",
        "Interview performance improves most through repeated spoken simulation.",
        "career communication",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-cabin-crew-set-3",
    slug: "aviation-cabin-crew-practice-set-3",
    category: "aviation",
    title: "Cabin Crew Practice Set 3",
    description:
      "Advanced cabin crew scenario practice for service recovery, escalation judgment, and interview pressure rounds.",
    examType: "Aviation Cabin Crew",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 16,
    seoTitle:
      "Cabin Crew Advanced Practice Questions - Set 3 | Nishaglobal Education",
    seoDescription:
      "Advanced cabin crew mock questions with real interview-style situations and detailed explanations.",
    keywords: [
      "cabin crew set 3",
      "advanced cabin crew interview",
      "cabin crew scenario mock",
      "air hostess advanced preparation",
      "aviation customer handling test",
    ],
    intro:
      "Set 3 focuses on complex passenger situations and decision-making quality under pressure.",
    questions: [
      createQuestion(
        "aviation-cc3-1",
        "A passenger records a conflict on phone and refuses instruction. Best action:",
        [
          "Argue and take phone away",
          "Keep calm, repeat safety instruction clearly, and escalate via protocol",
          "Ignore and move on",
          "Threaten passenger",
        ],
        "B",
        "Safety-first communication and protocol escalation are required in high-tension situations.",
        "conflict handling",
        "hard"
      ),
      createQuestion(
        "aviation-cc3-2",
        "Best interview response to 'How do you handle criticism?'",
        [
          "I do not accept criticism",
          "I clarify feedback, implement changes, and review results",
          "I ignore it",
          "I blame team",
        ],
        "B",
        "Recruiters prefer coachability, accountability, and improvement mindset.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-cc3-3",
        "A passenger demands immediate exception to policy. You should:",
        [
          "Promise exception without confirmation",
          "Explain policy politely and offer valid alternatives",
          "Argue about rules",
          "Walk away",
        ],
        "B",
        "Professional response balances empathy with policy compliance.",
        "policy communication",
        "hard"
      ),
      createQuestion(
        "aviation-cc3-4",
        "In cabin service, the strongest de-escalation technique is:",
        [
          "Raise your voice to control",
          "Use calm tone, active listening, and clear next steps",
          "Avoid eye contact",
          "Ask passenger to wait without updates",
        ],
        "B",
        "Calm acknowledgment with actionable steps reduces conflict intensity.",
        "communication",
        "medium"
      ),
      createQuestion(
        "aviation-cc3-5",
        "What makes a cabin crew answer 'advanced' in interviews?",
        [
          "Generic motivation",
          "Specific scenario example with action and outcome",
          "One-line reply",
          "Only confidence words",
        ],
        "B",
        "Structured examples demonstrate practical readiness.",
        "interview readiness",
        "medium"
      ),
      createQuestion(
        "aviation-cc3-6",
        "If two requests are urgent at once, best approach is:",
        [
          "Handle randomly",
          "Prioritize safety-critical task first and coordinate team support",
          "Delay both",
          "Take help from passenger",
        ],
        "B",
        "Operational prioritization is essential during peak cabin pressure.",
        "decision making",
        "hard"
      ),
      createQuestion(
        "aviation-cc3-7",
        "Strong professional phrase for uncertainty is:",
        [
          "I do not know",
          "Let me verify this for you and return with accurate information",
          "Ask someone else",
          "Not my job",
        ],
        "B",
        "Verification language shows responsibility and service quality.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-cc3-8",
        "A mature cabin crew mindset is best shown by:",
        [
          "Avoiding feedback",
          "Learning from incidents and improving SOP execution",
          "Focusing only on appearance",
          "Choosing easy flights",
        ],
        "B",
        "Continuous improvement is core to advanced role readiness.",
        "career strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-cabin-crew-set-4",
    slug: "aviation-cabin-crew-practice-set-4",
    category: "aviation",
    title: "Cabin Crew Practice Set 4",
    description:
      "Advanced interview-round set with judgment, communication depth, and multi-passenger scenario analysis.",
    examType: "Aviation Cabin Crew",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 17,
    seoTitle:
      "Cabin Crew Advanced Mock Interview Set 4 | Nishaglobal Education",
    seoDescription:
      "Train with advanced cabin crew mock interview questions and high-pressure service scenarios.",
    keywords: [
      "cabin crew set 4",
      "advanced air hostess mock",
      "cabin crew pressure interview",
      "flight attendant scenario set",
      "cabin crew final rounds",
    ],
    intro:
      "Set 4 is designed for candidates entering final interview rounds with tougher communication checks.",
    questions: [
      createQuestion(
        "aviation-cc4-1",
        "If a passenger challenges your instruction publicly, first priority is:",
        [
          "Win argument",
          "Maintain calm authority and reinforce safety requirement",
          "Ignore challenge",
          "Call security immediately for every case",
        ],
        "B",
        "Authority should be calm, clear, and safety-focused.",
        "safety communication",
        "hard"
      ),
      createQuestion(
        "aviation-cc4-2",
        "Best example structure for interview story is:",
        [
          "Long background only",
          "Situation, action, result, and learning",
          "Opinion without example",
          "Outcome without action",
        ],
        "B",
        "Structured storytelling improves clarity and credibility.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-cc4-3",
        "If passenger language barrier persists, you should:",
        [
          "Stop interaction",
          "Use simple phrases, gestures, and request crew support",
          "Raise voice",
          "Skip instruction",
        ],
        "B",
        "Inclusive communication requires simplification and teamwork.",
        "passenger handling",
        "medium"
      ),
      createQuestion(
        "aviation-cc4-4",
        "Interviewers assess your 'safety mindset' mainly through:",
        [
          "Uniform comments",
          "Protocol-based choices in scenario responses",
          "Travel preferences",
          "Social media profile",
        ],
        "B",
        "Scenario choices reveal actual safety thinking.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-cc4-5",
        "A realistic answer to 'biggest weakness' is:",
        [
          "I have no weakness",
          "I used to rush responses; now I pause, verify, and communicate clearly",
          "I cannot work in teams",
          "I dislike SOP",
        ],
        "B",
        "Improvement-oriented weakness answers are more credible.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-cc4-6",
        "What improves final-round cabin crew confidence most?",
        [
          "Memorizing 100 lines",
          "Mock scenarios with feedback and response refinement",
          "Skipping practice",
          "Only appearance preparation",
        ],
        "B",
        "Performance feedback cycles build stable interview confidence.",
        "mock preparation",
        "medium"
      ),
      createQuestion(
        "aviation-cc4-7",
        "Best close for service conversation is:",
        [
          "Done",
          "Thank you. Please let me know if you need further assistance",
          "Next passenger",
          "No further help",
        ],
        "B",
        "Professional closures maintain passenger trust and tone.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-cc4-8",
        "A top candidate usually demonstrates:",
        [
          "Confidence without process",
          "Balanced service empathy, SOP discipline, and teamwork",
          "Solo work preference",
          "Resistance to feedback",
        ],
        "B",
        "Advanced selection favors consistency across behavior and process.",
        "career strategy",
        "hard"
      ),
    ],
  },
  {
    id: "aviation-cabin-crew-set-5",
    slug: "aviation-cabin-crew-practice-set-5",
    category: "aviation",
    title: "Cabin Crew Practice Set 5",
    description:
      "Final advanced cabin crew mock set for interview mastery, communication precision, and difficult scenario readiness.",
    examType: "Aviation Cabin Crew",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 18,
    seoTitle:
      "Cabin Crew Final Mock Set 5 | Nishaglobal Education",
    seoDescription:
      "Final advanced cabin crew mock questions for interview preparation and high-pressure service scenarios.",
    keywords: [
      "cabin crew set 5",
      "final cabin crew mock",
      "advanced cabin interview questions",
      "air hostess final round prep",
      "cabin crew high pressure scenarios",
    ],
    intro:
      "Use Set 5 as your final readiness check before interview day.",
    questions: [
      createQuestion(
        "aviation-cc5-1",
        "What is best when two passengers complain at once?",
        [
          "Handle whichever is louder",
          "Prioritize urgency, assign support, and communicate timelines",
          "Delay both until later",
          "Argue with both",
        ],
        "B",
        "Prioritization plus communication is essential in simultaneous issues.",
        "decision making",
        "hard"
      ),
      createQuestion(
        "aviation-cc5-2",
        "Strong answer to 'Why this airline?' should include:",
        [
          "Any airline is fine",
          "Company values alignment, role fit, and long-term contribution",
          "Only salary expectations",
          "I like travel only",
        ],
        "B",
        "Role-specific company alignment makes interview answers stronger.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-cc5-3",
        "If you receive conflicting passenger requests, best method is:",
        [
          "Decline both",
          "Acknowledge both, clarify constraints, and provide fair resolution",
          "Favor one without reason",
          "Ignore until asked again",
        ],
        "B",
        "Fair communication and boundary clarity support service quality.",
        "service recovery",
        "hard"
      ),
      createQuestion(
        "aviation-cc5-4",
        "Best language to show accountability is:",
        [
          "Not my responsibility",
          "I will take ownership, verify details, and update you promptly",
          "Someone else will handle",
          "Please wait silently",
        ],
        "B",
        "Ownership language reflects professionalism and trust.",
        "service english",
        "easy"
      ),
      createQuestion(
        "aviation-cc5-5",
        "In final rounds, what differentiates candidates most?",
        [
          "Accent only",
          "Consistent judgment across multiple scenarios",
          "Height only",
          "Speed of talking",
        ],
        "B",
        "Final selections emphasize reliable decision quality.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-cc5-6",
        "Best response if you need senior support is:",
        [
          "Hide issue",
          "Escalate early with concise factual summary",
          "Delay escalation",
          "Complain to passenger",
        ],
        "B",
        "Timely factual escalation prevents service and safety breakdowns.",
        "escalation",
        "medium"
      ),
      createQuestion(
        "aviation-cc5-7",
        "Which habit keeps interview English strong?",
        [
          "No speaking practice",
          "Daily role-based speaking with self-review",
          "Only reading notes",
          "Memorizing without feedback",
        ],
        "B",
        "Daily speaking and review improve fluency and response quality.",
        "communication",
        "medium"
      ),
      createQuestion(
        "aviation-cc5-8",
        "Best final preparation plan before cabin interview is:",
        [
          "Practice one question only",
          "Review SOP basics, mock 10 scenarios, refine weak answers",
          "Avoid feedback",
          "Only research salary",
        ],
        "B",
        "Focused final revision increases consistency under pressure.",
        "interview strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-ground-staff-set-3",
    slug: "aviation-ground-staff-practice-set-3",
    category: "aviation",
    title: "Ground Staff Practice Set 3",
    description:
      "Advanced ground staff practice for queue pressure, escalation quality, and interview situation handling.",
    examType: "Aviation Ground Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 16,
    seoTitle:
      "Ground Staff Advanced Practice Set 3 | Nishaglobal Education",
    seoDescription:
      "Advanced airport ground staff scenario and interview practice set with detailed explanations.",
    keywords: [
      "ground staff set 3",
      "advanced airport ground staff",
      "check in scenario questions",
      "ground staff final round mock",
      "airport desk communication test",
    ],
    intro:
      "Set 3 increases complexity in passenger flow, documentation decisions, and escalation communication.",
    questions: [
      createQuestion(
        "aviation-gs3-1",
        "When multiple counters slow down, first operational move is:",
        [
          "Stop announcements",
          "Reallocate support, guide queue lanes, and provide updates",
          "Close one counter",
          "Ask passengers to wait silently",
        ],
        "B",
        "Active flow control and clear communication reduce disruption.",
        "queue management",
        "hard"
      ),
      createQuestion(
        "aviation-gs3-2",
        "Best answer to 'How do you handle angry passengers?' is:",
        [
          "I avoid them",
          "I acknowledge concern, verify facts, and explain actionable options",
          "I debate with them",
          "I call security first in every case",
        ],
        "B",
        "Balanced empathy and process response is expected in interviews.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-gs3-3",
        "If a passenger gives incomplete documents, you should:",
        [
          "Proceed anyway",
          "Explain requirement clearly and follow verification workflow",
          "Reject rudely",
          "Ask passenger to decide",
        ],
        "B",
        "Compliance-friendly communication protects operations and service.",
        "documentation",
        "medium"
      ),
      createQuestion(
        "aviation-gs3-4",
        "Advanced customer update style should be:",
        [
          "Frequent but unverified",
          "Verified, concise, and time-bound",
          "Long technical explanation",
          "No updates",
        ],
        "B",
        "Trustworthy updates require accuracy and timeline clarity.",
        "communication",
        "hard"
      ),
      createQuestion(
        "aviation-gs3-5",
        "Which answer shows strongest role ownership?",
        [
          "I do my part only",
          "I manage desk duties while coordinating with adjacent teams",
          "I prefer no coordination",
          "I avoid difficult shifts",
        ],
        "B",
        "Ground operations performance depends on cross-team coordination.",
        "teamwork",
        "medium"
      ),
      createQuestion(
        "aviation-gs3-6",
        "What should you do when system latency grows?",
        [
          "Hide issue",
          "Escalate, re-sequence queue, and communicate expected delay",
          "Stop accepting passengers",
          "Blame passengers",
        ],
        "B",
        "Combined technical escalation and flow communication is best.",
        "operations control",
        "hard"
      ),
      createQuestion(
        "aviation-gs3-7",
        "A strong ground staff close in interview is:",
        [
          "I can do everything",
          "I am ready to deliver accurate process support and calm passenger service",
          "I need easy shifts",
          "I dislike strict SOP",
        ],
        "B",
        "Role-specific closing statements show readiness and realism.",
        "interview readiness",
        "easy"
      ),
      createQuestion(
        "aviation-gs3-8",
        "Long-term promotion readiness in ground roles is built by:",
        [
          "Speed without quality",
          "Consistency, compliance, communication, and review habits",
          "Ignoring feedback",
          "Working alone",
        ],
        "B",
        "Sustained quality and learning drive role growth.",
        "career strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-ground-staff-set-4",
    slug: "aviation-ground-staff-practice-set-4",
    category: "aviation",
    title: "Ground Staff Practice Set 4",
    description:
      "Advanced mock set for interview finals with complex queue, service, and policy communication decisions.",
    examType: "Aviation Ground Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 17,
    seoTitle:
      "Ground Staff Advanced Mock Interview Set 4 | Nishaglobal Education",
    seoDescription:
      "Final-round style ground staff questions covering passenger handling, policy communication, and escalation.",
    keywords: [
      "ground staff set 4",
      "airport ground staff final interview",
      "check in policy communication",
      "advanced ground operations mock",
      "airport queue handling questions",
    ],
    intro:
      "Set 4 prepares candidates for tougher interview rounds where communication precision is closely tested.",
    questions: [
      createQuestion(
        "aviation-gs4-1",
        "If two passengers dispute queue position loudly, what is best?",
        [
          "Ignore argument",
          "Intervene calmly, re-establish queue order, and continue flow",
          "Stop all counters",
          "Scold both publicly",
        ],
        "B",
        "Conflict control must maintain fairness and queue momentum.",
        "queue management",
        "hard"
      ),
      createQuestion(
        "aviation-gs4-2",
        "Interview answer quality improves most when you:",
        [
          "Use generic claims",
          "Use measurable examples from real customer situations",
          "Speak very fast",
          "Avoid details",
        ],
        "B",
        "Specific outcomes strengthen credibility in interviews.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-gs4-3",
        "Best phrase for policy denial is:",
        [
          "Cannot do. Next.",
          "I understand your request. Based on policy, this option is unavailable, but here is what we can do",
          "Rules are rules",
          "No explanation needed",
        ],
        "B",
        "Respectful policy communication reduces friction.",
        "service english",
        "hard"
      ),
      createQuestion(
        "aviation-gs4-4",
        "Strong escalation note should include:",
        [
          "Opinion only",
          "Issue, actions taken, pending risk, and required support",
          "No timeline",
          "Only passenger name",
        ],
        "B",
        "Structured escalation data improves response speed.",
        "reporting",
        "medium"
      ),
      createQuestion(
        "aviation-gs4-5",
        "What is best during prolonged delay at desk?",
        [
          "One announcement only",
          "Periodic verified updates and clear passenger guidance",
          "No updates",
          "Guess timings",
        ],
        "B",
        "Continuous verified updates reduce stress and repeat conflicts.",
        "delay handling",
        "medium"
      ),
      createQuestion(
        "aviation-gs4-6",
        "Ground staff professionalism is strongest when:",
        [
          "Speed is prioritized over accuracy",
          "Accuracy, courtesy, and compliance stay balanced",
          "Only courtesy matters",
          "Only compliance matters",
        ],
        "B",
        "Balanced service and process execution is the role standard.",
        "service quality",
        "medium"
      ),
      createQuestion(
        "aviation-gs4-7",
        "Final-round candidates usually show:",
        [
          "Inconsistent answers",
          "Stable communication and clear decision logic",
          "Overconfidence without examples",
          "Short one-word responses",
        ],
        "B",
        "Consistency across scenarios is a key selection signal.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-gs4-8",
        "Best pre-interview last-day plan is:",
        [
          "No revision",
          "Review SOP basics, refine 8 scenario answers, and practice tone",
          "Only wardrobe prep",
          "Only resume printing",
        ],
        "B",
        "Focused final practice improves delivery quality.",
        "interview strategy",
        "easy"
      ),
    ],
  },
  {
    id: "aviation-ground-staff-set-5",
    slug: "aviation-ground-staff-practice-set-5",
    category: "aviation",
    title: "Ground Staff Practice Set 5",
    description:
      "Final advanced ground staff readiness set for high-pressure customer scenarios and final interview decision rounds.",
    examType: "Aviation Ground Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 18,
    seoTitle:
      "Ground Staff Final Mock Set 5 | Nishaglobal Education",
    seoDescription:
      "Final advanced ground staff mock with complex communication and operations scenarios.",
    keywords: [
      "ground staff set 5",
      "ground staff final mock",
      "airport operations final prep",
      "advanced check in scenarios",
      "ground staff interview mastery",
    ],
    intro:
      "Set 5 is a final readiness test before your interview and role screening.",
    questions: [
      createQuestion(
        "aviation-gs5-1",
        "What is best when policy and passenger expectation conflict?",
        [
          "Prioritize expectation only",
          "Explain policy respectfully and provide valid alternatives",
          "Reject without explanation",
          "Promise exception",
        ],
        "B",
        "Policy clarity with alternatives supports professional service.",
        "policy communication",
        "hard"
      ),
      createQuestion(
        "aviation-gs5-2",
        "A strong answer to 'Describe teamwork' includes:",
        [
          "General statement",
          "Specific cross-desk coordination example and result",
          "No example",
          "Only personal achievement",
        ],
        "B",
        "Interview quality rises with concrete teamwork evidence.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-gs5-3",
        "When passenger is stressed and confused, first sentence should:",
        [
          "Blame passenger",
          "Acknowledge concern and give one clear next step",
          "Give technical jargon",
          "Ask to wait quietly",
        ],
        "B",
        "Simple, calm action language improves clarity under stress.",
        "service english",
        "medium"
      ),
      createQuestion(
        "aviation-gs5-4",
        "Best response if you are unsure about a process update:",
        [
          "Guess and proceed",
          "Verify with supervisor/system and update passenger accurately",
          "Ignore update",
          "Delay communication",
        ],
        "B",
        "Accuracy and verification are essential in airport operations.",
        "operations control",
        "hard"
      ),
      createQuestion(
        "aviation-gs5-5",
        "What do interviewers test in repeated scenario questions?",
        [
          "Memory",
          "Consistency of judgment under varied context",
          "Typing speed",
          "Math formulas",
        ],
        "B",
        "Repeated scenarios check decision stability, not memorization.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-gs5-6",
        "Ground staff professional growth depends on:",
        [
          "Shortcuts",
          "Process mastery, communication, and accountable behavior",
          "Avoiding difficult tasks",
          "Working without coordination",
        ],
        "B",
        "Growth comes from dependable execution and learning agility.",
        "career strategy",
        "medium"
      ),
      createQuestion(
        "aviation-gs5-7",
        "Best final-interview close is:",
        [
          "I am perfect",
          "I am prepared to deliver accurate, calm, and passenger-focused ground support",
          "I need quick joining only",
          "I prefer no pressure roles",
        ],
        "B",
        "A realistic value statement leaves strong final impression.",
        "interview strategy",
        "easy"
      ),
      createQuestion(
        "aviation-gs5-8",
        "What is best final week practice routine?",
        [
          "Only theory",
          "Daily scenario mock, communication drill, and feedback correction",
          "No speaking practice",
          "Only company reading",
        ],
        "B",
        "Interview performance improves with repeated scenario speaking practice.",
        "mock preparation",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-support-staff-set-3",
    slug: "aviation-support-staff-practice-set-3",
    category: "aviation",
    title: "Airport Support Staff Practice Set 3",
    description:
      "Advanced support-staff scenarios for risk reporting, shift continuity, and accountability-focused interviews.",
    examType: "Airport Support Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 16,
    seoTitle:
      "Airport Support Staff Advanced Set 3 | Nishaglobal Education",
    seoDescription:
      "Advanced support staff practice questions for operational judgment and interview readiness.",
    keywords: [
      "support staff set 3",
      "airport support advanced mock",
      "safety reporting interview",
      "support operations scenario questions",
      "airport support role preparation",
    ],
    intro:
      "Set 3 introduces advanced support-role scenarios requiring disciplined escalation and reporting.",
    questions: [
      createQuestion(
        "aviation-ss3-1",
        "If a hazard repeats across shifts, what is best response?",
        [
          "Treat as normal",
          "Log details with timeline and escalate for corrective action",
          "Discuss casually only",
          "Wait for audit",
        ],
        "B",
        "Pattern-based risks require documented escalation and follow-up.",
        "safety reporting",
        "hard"
      ),
      createQuestion(
        "aviation-ss3-2",
        "Best interview answer to 'How do you manage pressure?'",
        [
          "I work randomly",
          "I prioritize critical tasks, communicate status, and escalate early",
          "I stop work",
          "I wait for instructions only",
        ],
        "B",
        "Prioritization and communication are key operational behaviors.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-ss3-3",
        "Strong shift handover must include:",
        [
          "Only completed work",
          "Pending actions, risks, and owner confirmation",
          "No documentation",
          "General comments",
        ],
        "B",
        "Clear handover prevents task gaps and risk carryover.",
        "shift discipline",
        "medium"
      ),
      createQuestion(
        "aviation-ss3-4",
        "If task instruction is unclear, correct behavior is:",
        [
          "Proceed anyway",
          "Confirm procedure before execution",
          "Skip task",
          "Ask unrelated team",
        ],
        "B",
        "Procedure confirmation prevents avoidable errors.",
        "task handling",
        "easy"
      ),
      createQuestion(
        "aviation-ss3-5",
        "A professional incident update should be:",
        [
          "Emotional",
          "Factual, concise, and action-linked",
          "Delayed",
          "Opinion-based",
        ],
        "B",
        "Operational teams need actionable, factual communication.",
        "reporting",
        "medium"
      ),
      createQuestion(
        "aviation-ss3-6",
        "Interviewers evaluate reliability by checking:",
        [
          "Volume of speech",
          "Consistency of responsible decisions in scenarios",
          "Appearance only",
          "Luck stories",
        ],
        "B",
        "Scenario consistency reflects dependable behavior.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-ss3-7",
        "Best phrase for escalation request is:",
        [
          "Please help",
          "Issue observed at time X, immediate support needed for step Y",
          "Problem here",
          "Urgent call me",
        ],
        "B",
        "Precise escalation wording improves response speed.",
        "professional english",
        "hard"
      ),
      createQuestion(
        "aviation-ss3-8",
        "Long-term support-role growth comes from:",
        [
          "Avoiding accountability",
          "Safety discipline, communication quality, and learning mindset",
          "Working in isolation",
          "Skipping SOP reviews",
        ],
        "B",
        "Career growth aligns with consistency and process maturity.",
        "career strategy",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-support-staff-set-4",
    slug: "aviation-support-staff-practice-set-4",
    category: "aviation",
    title: "Airport Support Staff Practice Set 4",
    description:
      "Advanced support-staff interview mock with high-accountability scenarios and operational communication checks.",
    examType: "Airport Support Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 17,
    seoTitle:
      "Airport Support Staff Advanced Interview Set 4 | Nishaglobal Education",
    seoDescription:
      "Advanced airport support staff final-round style practice with scenario and escalation questions.",
    keywords: [
      "support staff set 4",
      "support role final round",
      "airport operations accountability questions",
      "aviation support escalation practice",
      "advanced support staff interview",
    ],
    intro:
      "Set 4 strengthens final-round interview language and operational responsibility judgment.",
    questions: [
      createQuestion(
        "aviation-ss4-1",
        "If two teams report different status for same task, you should:",
        [
          "Choose one randomly",
          "Verify source, reconcile status, and update supervisor",
          "Ignore mismatch",
          "Delay shift handover",
        ],
        "B",
        "Status reconciliation and timely update prevent downstream errors.",
        "operations control",
        "hard"
      ),
      createQuestion(
        "aviation-ss4-2",
        "Best response to 'Tell us a failure you handled' is:",
        [
          "I never failed",
          "I explain incident, corrective action, and prevention step",
          "I blame team",
          "I avoid details",
        ],
        "B",
        "Ownership and corrective learning are key interview signals.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-ss4-3",
        "Which escalation style is strongest?",
        [
          "Emotion-driven",
          "Fact-driven with timeline and required support",
          "Very long narrative",
          "No follow-up",
        ],
        "B",
        "Action-focused escalation helps fast and accurate resolution.",
        "escalation",
        "hard"
      ),
      createQuestion(
        "aviation-ss4-4",
        "Professional support communication should prioritize:",
        [
          "Speed only",
          "Clarity, relevance, and accountability",
          "Complex vocabulary",
          "Silence",
        ],
        "B",
        "Operational clarity is more valuable than complexity.",
        "communication",
        "medium"
      ),
      createQuestion(
        "aviation-ss4-5",
        "If a risk is unresolved near shift end, best action is:",
        [
          "Leave for next shift without note",
          "Document status, escalate, and confirm handover ownership",
          "Delete report",
          "Handle alone without update",
        ],
        "B",
        "Safe shift continuity requires traceable ownership.",
        "shift discipline",
        "hard"
      ),
      createQuestion(
        "aviation-ss4-6",
        "What makes an advanced interview answer stronger?",
        [
          "General claim",
          "Practical example with measurable result",
          "Very short yes/no",
          "No context",
        ],
        "B",
        "Specific impact improves answer credibility.",
        "interview language",
        "medium"
      ),
      createQuestion(
        "aviation-ss4-7",
        "Most reliable support staff habit is:",
        [
          "Working from memory",
          "Checklist discipline and timely status communication",
          "Avoiding updates",
          "Ignoring minor risks",
        ],
        "B",
        "Checklist and update discipline improve reliability.",
        "career basics",
        "easy"
      ),
      createQuestion(
        "aviation-ss4-8",
        "Best final-week support-role prep is:",
        [
          "Only reading theory",
          "Daily scenario drill, escalation writing, and feedback correction",
          "No speaking practice",
          "Skip SOP review",
        ],
        "B",
        "Combined writing and speaking practice strengthens final readiness.",
        "mock preparation",
        "medium"
      ),
    ],
  },
  {
    id: "aviation-support-staff-set-5",
    slug: "aviation-support-staff-practice-set-5",
    category: "aviation",
    title: "Airport Support Staff Practice Set 5",
    description:
      "Final advanced support-staff mock set for interview readiness and safety-critical reporting judgment.",
    examType: "Airport Support Staff",
    level: "advanced",
    questionCount: 8,
    estimatedMinutes: 18,
    seoTitle:
      "Airport Support Staff Final Mock Set 5 | Nishaglobal Education",
    seoDescription:
      "Final advanced support staff practice questions for airport operations interviews and scenario rounds.",
    keywords: [
      "support staff set 5",
      "support staff final mock",
      "airport support final interview",
      "advanced operations scenario test",
      "aviation support career prep",
    ],
    intro:
      "Set 5 is your final checkpoint before interview rounds for support operations roles.",
    questions: [
      createQuestion(
        "aviation-ss5-1",
        "When escalation is delayed, main risk is:",
        [
          "No impact",
          "Issue expansion and operational disruption",
          "Better team trust",
          "Less reporting need",
        ],
        "B",
        "Delayed escalation can magnify small issues into major disruptions.",
        "escalation",
        "hard"
      ),
      createQuestion(
        "aviation-ss5-2",
        "Best interview reply to 'Why support operations?'",
        [
          "Any role is fine",
          "I value disciplined execution, safety culture, and team reliability",
          "I prefer no responsibility",
          "I only want easy shifts",
        ],
        "B",
        "Role-fit motivation should reflect operations mindset.",
        "interview strategy",
        "medium"
      ),
      createQuestion(
        "aviation-ss5-3",
        "What makes a risk report useful to supervisor?",
        [
          "General wording",
          "Clear issue, timeline, impact, and requested decision",
          "Only complaints",
          "No next step",
        ],
        "B",
        "Decision-makers need structured and actionable reporting.",
        "reporting",
        "hard"
      ),
      createQuestion(
        "aviation-ss5-4",
        "If teammate misses a safety step, best response is:",
        [
          "Ignore",
          "Correct immediately and escalate appropriately if required",
          "Discuss next week",
          "Publicly shame teammate",
        ],
        "B",
        "Immediate correction with proper process protects safety and team trust.",
        "safety culture",
        "medium"
      ),
      createQuestion(
        "aviation-ss5-5",
        "Final-round interviewers prioritize:",
        [
          "Accent",
          "Consistency, accountability, and decision clarity",
          "Length of answers",
          "Memorized scripts",
        ],
        "B",
        "Final rounds evaluate dependable behavior under varied scenarios.",
        "interview readiness",
        "hard"
      ),
      createQuestion(
        "aviation-ss5-6",
        "Best way to improve support-role English quickly is:",
        [
          "Read only",
          "Daily spoken summaries of incidents and handover notes",
          "Avoid speaking",
          "Use slang",
        ],
        "B",
        "Role-specific spoken practice improves operational communication.",
        "professional english",
        "medium"
      ),
      createQuestion(
        "aviation-ss5-7",
        "A mature support-role close in interview is:",
        [
          "I know everything",
          "I am committed to safe, reliable, and accountable operations support",
          "I dislike SOP",
          "I avoid escalation",
        ],
        "B",
        "A focused value statement supports final-round selection.",
        "interview language",
        "easy"
      ),
      createQuestion(
        "aviation-ss5-8",
        "Best final 3-day preparation pattern is:",
        [
          "Random reading",
          "Scenario simulation, report-writing drills, and feedback correction",
          "No revision",
          "Only CV edits",
        ],
        "B",
        "Structured final practice improves response quality and confidence.",
        "mock preparation",
        "medium"
      ),
    ],
  },
  {
    id: "ielts-set-1",
    slug: "ielts-reading-grammar-set-1",
    category: "ielts",
    title: "IELTS Reading & Grammar Practice Test – Set 1",
    description:
      "Beginner IELTS practice focused on grammar correction, vocabulary meaning, articles, connectors, and short reading comprehension.",
    examType: "IELTS",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 12,
    seoTitle:
      "IELTS Practice Questions with Answers – Reading & Grammar Set 1 | Nishaglobal Education",
    seoDescription:
      "Free IELTS reading and grammar practice questions with answers and explanations. Beginner-friendly English-only set for students preparing step by step.",
    keywords: [
      "IELTS practice questions with answers",
      "IELTS reading practice test",
      "IELTS grammar questions",
      "IELTS beginner mock test",
      "free IELTS practice set",
    ],
    intro:
      "This set is ideal for students starting IELTS preparation and wanting short, explanation-based practice.",
    questions: [
      createQuestion(
        "ielts-1-q1",
        "Choose the correct sentence.",
        [
          "She go to school every day.",
          "She goes to school every day.",
          "She going to school every day.",
          "She gone to school every day.",
        ],
        "B",
        "With 'she' in the present simple, the verb takes 's', so 'goes' is correct.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-1-q2",
        "Choose the word closest in meaning to 'rapid'.",
        ["slow", "quick", "weak", "late"],
        "B",
        "'Rapid' means fast or quick.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-1-q3",
        "Which sentence is grammatically correct?",
        [
          "I have lived here since five years.",
          "I am living here since five years.",
          "I have lived here for five years.",
          "I live here for five years.",
        ],
        "C",
        "Use 'for' with a period of time, so 'for five years' is correct.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-1-q4",
        "Read the sentence: 'Many students prefer online learning because it saves travel time.' Why do many students prefer online learning?",
        [
          "It is cheaper than books.",
          "It saves travel time.",
          "It has fewer subjects.",
          "It removes exams.",
        ],
        "B",
        "The sentence directly states that students prefer online learning because it saves travel time.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-1-q5",
        "Choose the correct article: 'He bought ___ umbrella.'",
        ["a", "an", "the", "no article"],
        "B",
        "'Umbrella' begins with a vowel sound, so 'an' is correct.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-1-q6",
        "Choose the best connector: 'She was tired, ___ she finished her homework.'",
        ["but", "because", "although", "so"],
        "A",
        "'But' shows contrast between being tired and still finishing the work.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-1-q7",
        "What is the opposite of 'increase'?",
        ["improve", "reduce", "expand", "develop"],
        "B",
        "'Reduce' is the opposite of 'increase'.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-1-q8",
        "Choose the correct sentence.",
        [
          "There is many books on the table.",
          "There are many books on the table.",
          "There be many books on the table.",
          "There many books are on the table.",
        ],
        "B",
        "Use 'are' with the plural noun 'books'.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-1-q9",
        "Read the sentence: 'The museum opens at 9 AM and closes at 5 PM.' When does the museum close?",
        ["9 AM", "12 PM", "5 PM", "6 PM"],
        "C",
        "The sentence clearly says the museum closes at 5 PM.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-1-q10",
        "Choose the correct word: 'This book is ___ than that one.'",
        ["interesting", "more interesting", "most interesting", "interest"],
        "B",
        "A comparison between two things uses the comparative form: 'more interesting'.",
        "grammar",
        "medium"
      ),
    ],
  },
  {
    id: "ielts-set-2",
    slug: "ielts-vocabulary-reading-set-2",
    category: "ielts",
    title: "IELTS Vocabulary & Reading Practice Test – Set 2",
    description:
      "Second beginner IELTS practice set focused on academic vocabulary, sentence meaning, short reading, and common grammar accuracy.",
    examType: "IELTS",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 12,
    seoTitle:
      "IELTS Vocabulary and Reading Practice Questions – Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice free IELTS vocabulary and reading questions with answers and explanations. English-only beginner set for steady preparation.",
    keywords: [
      "IELTS vocabulary practice",
      "IELTS reading questions with answers",
      "IELTS English practice",
      "IELTS beginner set 2",
      "IELTS mock questions free",
    ],
    intro:
      "Use this second set after Set 1 if you want more confidence in basic IELTS-style English questions.",
    questions: [
      createQuestion(
        "ielts-2-q1",
        "Choose the correct sentence.",
        [
          "He don't like coffee.",
          "He doesn't likes coffee.",
          "He doesn't like coffee.",
          "He not like coffee.",
        ],
        "C",
        "With 'does not', the main verb stays in base form: 'like'.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-2-q2",
        "Choose the word closest in meaning to 'essential'.",
        ["optional", "necessary", "unclear", "difficult"],
        "B",
        "'Essential' means necessary or very important.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-2-q3",
        "Read the sentence: 'Public libraries help students by offering quiet study space and free access to books.' What is one benefit of public libraries?",
        [
          "They replace schools completely.",
          "They provide free access to books.",
          "They remove homework.",
          "They give students paid jobs.",
        ],
        "B",
        "The sentence states that public libraries offer free access to books.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-2-q4",
        "Choose the correct preposition: 'She is interested ___ science.'",
        ["on", "at", "in", "to"],
        "C",
        "The standard phrase is 'interested in'.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-2-q5",
        "Which sentence is correct?",
        [
          "The informations are useful.",
          "The information is useful.",
          "The information are useful.",
          "Informations is useful.",
        ],
        "B",
        "'Information' is an uncountable noun, so it takes 'is'.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-2-q6",
        "Choose the best meaning of 'achieve'.",
        ["to forget", "to fail", "to reach successfully", "to delay"],
        "C",
        "'Achieve' means to reach or accomplish something successfully.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-2-q7",
        "Read the sentence: 'Students who make a weekly study plan often feel less stressed before exams.' Why might a weekly study plan help?",
        [
          "It removes all exams.",
          "It reduces stress before exams.",
          "It shortens the school year.",
          "It changes the exam paper.",
        ],
        "B",
        "The sentence says a weekly study plan often helps students feel less stressed before exams.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-2-q8",
        "Choose the correct form: 'If I ___ more time, I would read more books.'",
        ["have", "had", "having", "has"],
        "B",
        "This is a second conditional sentence, so 'had' is correct.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-2-q9",
        "Which word is the opposite of 'ancient'?",
        ["historic", "modern", "valuable", "famous"],
        "B",
        "'Modern' is the opposite of 'ancient'.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-2-q10",
        "Choose the correct sentence.",
        [
          "Neither of the answers are correct.",
          "Neither of the answers is correct.",
          "Neither of the answer are correct.",
          "Neither of answer is correct.",
        ],
        "B",
        "'Neither' is treated as singular here, so 'is' is correct.",
        "grammar",
        "hard"
      ),
    ],
  },
  {
    id: "engineering-set-1",
    slug: "engineering-entrance-basics-set-1",
    category: "engineering-entrance",
    title: "Engineering Entrance Practice Questions – Set 1",
    description:
      "Foundation set to build confidence in core formulas, units, and beginner-level PCM reasoning before exam-specific preparation.",
    examType: "Engineering Entrance",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 15,
    seoTitle:
      "Engineering Entrance Questions with Answers – Beginner Set 1 | Nishaglobal Education",
    seoDescription:
      "Free engineering entrance practice questions with answers and explanations. Beginner-friendly English-only set covering math, physics, chemistry, and logic.",
    keywords: [
      "engineering entrance questions with answers",
      "JEE beginner practice",
      "engineering aptitude questions",
      "math physics chemistry mock set",
      "free engineering practice test",
    ],
    intro:
      "This set is ideal for students beginning engineering entrance preparation and wanting explanation-first practice.",
    questions: [
      createQuestion(
        "eng-1-q1",
        "What is the value of 12 × 8?",
        ["84", "92", "96", "108"],
        "C",
        "12 multiplied by 8 equals 96.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-1-q2",
        "Which unit is used to measure force?",
        ["Joule", "Newton", "Watt", "Volt"],
        "B",
        "Force is measured in Newtons.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-1-q3",
        "What is the chemical symbol of sodium?",
        ["So", "Sd", "Na", "S"],
        "C",
        "The chemical symbol for sodium is Na.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-1-q4",
        "If x + 5 = 12, what is x?",
        ["5", "6", "7", "8"],
        "C",
        "Subtract 5 from both sides: x = 7.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-1-q5",
        "Which of the following is a non-metal?",
        ["Iron", "Copper", "Oxygen", "Aluminium"],
        "C",
        "Oxygen is a non-metal.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-1-q6",
        "Speed is distance divided by ___?",
        ["mass", "volume", "time", "force"],
        "C",
        "Speed = Distance ÷ Time.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-1-q7",
        "What comes next in the pattern: 2, 4, 8, 16, __ ?",
        ["18", "24", "32", "30"],
        "C",
        "Each number is doubled, so the next number is 32.",
        "logic",
        "easy"
      ),
      createQuestion(
        "eng-1-q8",
        "Which branch of mathematics deals with triangles and angles?",
        ["Algebra", "Geometry", "Statistics", "Arithmetic"],
        "B",
        "Geometry deals with shapes, angles, lines, and triangles.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-1-q9",
        "Which instrument is commonly used to measure electric current?",
        ["Barometer", "Thermometer", "Ammeter", "Hygrometer"],
        "C",
        "An ammeter is used to measure electric current.",
        "physics",
        "medium"
      ),
      createQuestion(
        "eng-1-q10",
        "Water is made up of which two elements?",
        [
          "Hydrogen and Oxygen",
          "Hydrogen and Nitrogen",
          "Oxygen and Carbon",
          "Carbon and Hydrogen",
        ],
        "A",
        "Water is H2O, which means hydrogen and oxygen.",
        "chemistry",
        "easy"
      ),
    ],
  },
  {
    id: "engineering-set-2",
    slug: "engineering-entrance-math-logic-set-2",
    category: "engineering-entrance",
    title: "Engineering Entrance Practice Questions – Set 2",
    description:
      "Speed-building set focused on algebra accuracy, pattern recognition, and quick concept application under short time pressure.",
    examType: "Engineering Entrance",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 15,
    seoTitle:
      "Engineering Entrance Math and Logic Practice Questions – Set 2 | Nishaglobal Education",
    seoDescription:
      "Practice more engineering entrance questions with answers and explanations. English-only beginner set for math, logic, physics, and chemistry basics.",
    keywords: [
      "engineering entrance set 2",
      "JEE basic math practice",
      "physics chemistry aptitude questions",
      "engineering logic questions",
      "free engineering questions with explanations",
    ],
    intro:
      "Use this second set to continue building speed and confidence in basic entrance-style questions.",
    questions: [
      createQuestion(
        "eng-2-q1",
        "If 3x = 21, what is x?",
        ["5", "6", "7", "8"],
        "C",
        "Divide both sides by 3. x = 7.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-2-q2",
        "Which state of matter has a fixed shape and fixed volume?",
        ["gas", "liquid", "plasma", "solid"],
        "D",
        "A solid has both fixed shape and fixed volume.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-2-q3",
        "What is the SI unit of power?",
        ["Joule", "Watt", "Newton", "Ampere"],
        "B",
        "Power is measured in watts.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-2-q4",
        "Which number is a prime number?",
        ["21", "27", "29", "33"],
        "C",
        "29 has exactly two factors: 1 and 29.",
        "mathematics",
        "medium"
      ),
      createQuestion(
        "eng-2-q5",
        "What comes next in the series: 5, 10, 15, 20, __ ?",
        ["25", "30", "35", "40"],
        "A",
        "The pattern increases by 5 each time, so the next number is 25.",
        "logic",
        "easy"
      ),
      createQuestion(
        "eng-2-q6",
        "Which gas is essential for human breathing?",
        ["Carbon dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
        "C",
        "Humans need oxygen for breathing.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-2-q7",
        "A right angle is equal to:",
        ["45°", "90°", "120°", "180°"],
        "B",
        "A right angle measures 90 degrees.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-2-q8",
        "Which law explains action and reaction?",
        [
          "Newton’s First Law",
          "Newton’s Second Law",
          "Newton’s Third Law",
          "Ohm’s Law",
        ],
        "C",
        "Newton’s Third Law states that every action has an equal and opposite reaction.",
        "physics",
        "medium"
      ),
      createQuestion(
        "eng-2-q9",
        "If a train travels 120 km in 2 hours, what is its speed?",
        ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
        "C",
        "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-2-q10",
        "Which of these is commonly used in computer programming to repeat a block of code?",
        ["Loop", "Scale", "Radius", "Molecule"],
        "A",
        "A loop repeats a block of code in programming.",
        "logic",
        "easy"
      ),
    ],
  },

    {
    id: "ielts-set-3",
    slug: "ielts-grammar-vocabulary-set-3",
    category: "ielts",
    title: "IELTS Grammar & Vocabulary Practice Test – Set 3",
    description:
      "Beginner to lower-intermediate IELTS practice with grammar, sentence correction, word meaning, and short reading questions.",
    examType: "IELTS",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 12,
    seoTitle:
      "IELTS Grammar and Vocabulary Practice Questions – Set 3 | Nishaglobal Education",
    seoDescription:
      "Free IELTS grammar and vocabulary practice questions with answers and explanations. English-only Set 3 for step-by-step preparation.",
    keywords: [
      "IELTS grammar practice set 3",
      "IELTS vocabulary questions with answers",
      "IELTS English practice test",
      "IELTS beginner grammar questions",
      "free IELTS online practice",
    ],
    intro:
      "Use this set to strengthen common grammar patterns and word meanings often seen in IELTS preparation.",
    questions: [
      createQuestion(
        "ielts-3-q1",
        "Choose the correct sentence.",
        [
          "She has finished her work yesterday.",
          "She finished her work yesterday.",
          "She had finished her work yesterday now.",
          "She finishing her work yesterday.",
        ],
        "B",
        "With 'yesterday', the simple past is the correct tense: 'finished'.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-3-q2",
        "Choose the word closest in meaning to 'accurate'.",
        ["careless", "exact", "slow", "noisy"],
        "B",
        "'Accurate' means exact or correct.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-3-q3",
        "Choose the correct form: 'Neither the teacher nor the students ___ ready.'",
        ["is", "was", "are", "be"],
        "C",
        "When subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. 'Students' is plural, so 'are' is correct.",
        "grammar",
        "hard"
      ),
      createQuestion(
        "ielts-3-q4",
        "Read the sentence: 'Good time management helps students complete assignments before deadlines.' What does good time management help students do?",
        [
          "Avoid all homework",
          "Complete assignments before deadlines",
          "Take fewer classes",
          "Study only at night",
        ],
        "B",
        "The sentence directly says time management helps students complete assignments before deadlines.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-3-q5",
        "Choose the correct article: 'She wants to become ___ engineer.'",
        ["a", "an", "the", "no article"],
        "B",
        "'Engineer' begins with a vowel sound, so 'an' is correct.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-3-q6",
        "Choose the best meaning of 'brief'.",
        ["short", "expensive", "unclear", "ancient"],
        "A",
        "'Brief' means short in length or duration.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-3-q7",
        "Which sentence is correct?",
        [
          "Each of the students have a notebook.",
          "Each of the students has a notebook.",
          "Each of the student have a notebook.",
          "Each students has a notebook.",
        ],
        "B",
        "'Each' is singular, so it takes 'has'.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-3-q8",
        "Choose the correct preposition: 'They arrived ___ the airport early.'",
        ["in", "on", "at", "for"],
        "C",
        "We say 'arrived at the airport'.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-3-q9",
        "Which word is the opposite of 'generous'?",
        ["kind", "selfish", "polite", "careful"],
        "B",
        "'Selfish' is the opposite of 'generous'.",
        "vocabulary",
        "medium"
      ),
      createQuestion(
        "ielts-3-q10",
        "Choose the correct sentence.",
        [
          "If I will see her, I will tell her.",
          "If I see her, I will tell her.",
          "If I saw her, I will tell her.",
          "If I seen her, I tell her.",
        ],
        "B",
        "In the first conditional, use present simple after 'if' and 'will' in the main clause.",
        "grammar",
        "medium"
      ),
    ],
  },
  {
    id: "ielts-set-4",
    slug: "ielts-reading-accuracy-set-4",
    category: "ielts",
    title: "IELTS Reading Accuracy Practice Test – Set 4",
    description:
      "English-only IELTS practice focused on sentence meaning, grammar accuracy, reading detail, and vocabulary confidence.",
    examType: "IELTS",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 12,
    seoTitle:
      "IELTS Reading Accuracy Practice Questions – Set 4 | Nishaglobal Education",
    seoDescription:
      "Free IELTS reading accuracy and grammar practice with answers and explanations. English-only Set 4 for steady skill building.",
    keywords: [
      "IELTS reading accuracy set 4",
      "IELTS reading and grammar practice",
      "IELTS beginner reading questions",
      "IELTS sentence correction",
      "IELTS online practice questions",
    ],
    intro:
      "This set helps students improve accuracy in reading short statements and choosing correct English forms.",
    questions: [
      createQuestion(
        "ielts-4-q1",
        "Choose the correct sentence.",
        [
          "There were less people at the event than expected.",
          "There were fewer people at the event than expected.",
          "There was fewer people at the event than expected.",
          "There were little people at the event than expected.",
        ],
        "B",
        "Use 'fewer' with countable nouns like 'people'.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-4-q2",
        "Choose the word closest in meaning to 'maintain'.",
        ["ignore", "keep", "break", "remove"],
        "B",
        "'Maintain' means to keep something in a certain condition.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-4-q3",
        "Read the sentence: 'Regular reading improves vocabulary and helps students understand different writing styles.' What is one benefit of regular reading?",
        [
          "It removes grammar rules.",
          "It improves vocabulary.",
          "It shortens books.",
          "It changes exam dates.",
        ],
        "B",
        "The sentence directly states that regular reading improves vocabulary.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-4-q4",
        "Choose the correct form: 'She is one of the best students who ___ always prepared.'",
        ["is", "are", "was", "be"],
        "B",
        "The relative clause refers to 'students', which is plural, so 'are' is correct.",
        "grammar",
        "hard"
      ),
      createQuestion(
        "ielts-4-q5",
        "Choose the correct article: 'He gave me ___ useful suggestion.'",
        ["a", "an", "the", "no article"],
        "A",
        "'Useful' begins with a 'yoo' sound, so 'a' is correct.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-4-q6",
        "Which word is the opposite of 'expand'?",
        ["grow", "increase", "shrink", "develop"],
        "C",
        "'Shrink' is the opposite of 'expand'.",
        "vocabulary",
        "easy"
      ),
      createQuestion(
        "ielts-4-q7",
        "Which sentence is correct?",
        [
          "The news are surprising.",
          "The news is surprising.",
          "The news were surprising.",
          "News are surprising.",
        ],
        "B",
        "'News' is treated as a singular uncountable noun here, so 'is' is correct.",
        "grammar",
        "medium"
      ),
      createQuestion(
        "ielts-4-q8",
        "Read the sentence: 'Students who review mistakes after practice tests often improve faster.' Why do some students improve faster?",
        [
          "They skip practice tests.",
          "They review mistakes after practice tests.",
          "They study only once a month.",
          "They avoid feedback.",
        ],
        "B",
        "The sentence says students improve faster because they review mistakes after practice tests.",
        "reading",
        "easy"
      ),
      createQuestion(
        "ielts-4-q9",
        "Choose the correct preposition: 'He apologized ___ being late.'",
        ["for", "at", "on", "with"],
        "A",
        "The correct phrase is 'apologized for'.",
        "grammar",
        "easy"
      ),
      createQuestion(
        "ielts-4-q10",
        "Choose the correct sentence.",
        [
          "Hardly had I reached the station when the train left.",
          "Hardly I had reached the station when the train left.",
          "Hardly had I reach the station when the train left.",
          "Hardly I reached the station when the train left.",
        ],
        "A",
        "After 'hardly', formal inversion is used: 'Hardly had I reached...'.",
        "grammar",
        "hard"
      ),
    ],
  },
  createIeltsPracticeSet("ielts-listening", 1),
  createIeltsPracticeSet("ielts-listening", 2),
  createIeltsPracticeSet("ielts-academic-reading", 1),
  createIeltsPracticeSet("ielts-academic-reading", 2),
  createIeltsPracticeSet("ielts-general-reading", 1),
  createIeltsPracticeSet("ielts-general-reading", 2),
  createIeltsPracticeSet("ielts-writing", 1),
  createIeltsPracticeSet("ielts-writing", 2),
  createIeltsPracticeSet("ielts-speaking", 1),
  createIeltsPracticeSet("ielts-speaking", 2),
  createToeflPracticeSet("toefl-reading", 1),
  createToeflPracticeSet("toefl-reading", 2),
  createToeflPracticeSet("toefl-reading", 3),
  createToeflPracticeSet("toefl-reading", 4),
  createToeflPracticeSet("toefl-reading", 5),
  createToeflPracticeSet("toefl-listening", 1),
  createToeflPracticeSet("toefl-listening", 2),
  createToeflPracticeSet("toefl-listening", 3),
  createToeflPracticeSet("toefl-listening", 4),
  createToeflPracticeSet("toefl-listening", 5),
  createToeflPracticeSet("toefl-speaking", 1),
  createToeflPracticeSet("toefl-speaking", 2),
  createToeflPracticeSet("toefl-speaking", 3),
  createToeflPracticeSet("toefl-speaking", 4),
  createToeflPracticeSet("toefl-speaking", 5),
  createToeflPracticeSet("toefl-writing", 1),
  createToeflPracticeSet("toefl-writing", 2),
  createToeflPracticeSet("toefl-writing", 3),
  createToeflPracticeSet("toefl-writing", 4),
  createToeflPracticeSet("toefl-writing", 5),
  createToeflPracticeSet("toefl-integrated", 1),
  createToeflPracticeSet("toefl-integrated", 2),
  createToeflPracticeSet("toefl-integrated", 3),
  createToeflPracticeSet("toefl-integrated", 4),
  createToeflPracticeSet("toefl-integrated", 5),
  {
    id: "engineering-set-3",
    slug: "engineering-entrance-physics-math-set-3",
    category: "engineering-entrance",
    title: "Engineering Entrance Practice Questions – Set 3",
    description:
      "Mixed practice set for strengthening physics-math transitions, quick calculations, and topic switching similar to real exam flow.",
    examType: "Engineering Entrance",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 15,
    seoTitle:
      "Engineering Entrance Physics and Math Questions – Set 3 | Nishaglobal Education",
    seoDescription:
      "Free engineering entrance physics and math practice questions with answers and explanations. English-only Set 3 for beginners.",
    keywords: [
      "engineering entrance set 3",
      "physics and math practice questions",
      "JEE beginner question set",
      "engineering aptitude test free",
      "chemistry math logic questions",
    ],
    intro:
      "Use this set to improve speed in core engineering entrance basics with a balanced mix of subjects.",
    questions: [
      createQuestion(
        "eng-3-q1",
        "What is the square of 9?",
        ["18", "27", "81", "72"],
        "C",
        "9 × 9 = 81.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-3-q2",
        "Which of the following is measured in volts?",
        ["current", "resistance", "potential difference", "power"],
        "C",
        "Potential difference, or voltage, is measured in volts.",
        "physics",
        "medium"
      ),
      createQuestion(
        "eng-3-q3",
        "What is the chemical symbol for iron?",
        ["Ir", "Fe", "In", "Fr"],
        "B",
        "The chemical symbol for iron is Fe.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-3-q4",
        "If 2x = 18, what is x?",
        ["7", "8", "9", "10"],
        "C",
        "Divide both sides by 2. x = 9.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-3-q5",
        "Which comes next in the pattern: 3, 6, 12, 24, __ ?",
        ["36", "42", "48", "48"],
        "C",
        "Each number is doubled, so 24 becomes 48.",
        "logic",
        "easy"
      ),
      createQuestion(
        "eng-3-q6",
        "Which type of energy is stored in a stretched spring?",
        ["kinetic energy", "potential energy", "electrical energy", "sound energy"],
        "B",
        "A stretched spring stores potential energy.",
        "physics",
        "medium"
      ),
      createQuestion(
        "eng-3-q7",
        "What is 25% of 200?",
        ["25", "40", "50", "60"],
        "C",
        "25% of 200 = 0.25 × 200 = 50.",
        "mathematics",
        "medium"
      ),
      createQuestion(
        "eng-3-q8",
        "Which of the following is an acid?",
        ["NaOH", "HCl", "CaO", "NH3"],
        "B",
        "HCl, hydrochloric acid, is an acid.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-3-q9",
        "The SI unit of energy is:",
        ["Newton", "Watt", "Joule", "Pascal"],
        "C",
        "Energy is measured in joules.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-3-q10",
        "If all squares are rectangles, then which statement is true?",
        [
          "All rectangles are squares.",
          "Some rectangles are squares.",
          "No square is a rectangle.",
          "All shapes are squares.",
        ],
        "B",
        "Every square is a rectangle, so at least some rectangles are squares.",
        "logic",
        "medium"
      ),
    ],
  },
  {
    id: "engineering-set-4",
    slug: "engineering-entrance-foundation-set-4",
    category: "engineering-entrance",
    title: "Engineering Entrance Practice Questions – Set 4",
    description:
      "Revision-oriented foundation set to identify weak topics early and prepare for timed JEE/CET style question attempts.",
    examType: "Engineering Entrance",
    level: "beginner",
    questionCount: 10,
    estimatedMinutes: 15,
    seoTitle:
      "Engineering Entrance Foundation Questions – Set 4 | Nishaglobal Education",
    seoDescription:
      "Practice free engineering entrance foundation questions with answers and explanations. English-only Set 4 for math, physics, chemistry, and reasoning.",
    keywords: [
      "engineering entrance foundation set 4",
      "engineering practice questions with explanations",
      "math physics chemistry basics test",
      "engineering reasoning questions",
      "JEE beginner foundation practice",
    ],
    intro:
      "Use this set to strengthen foundation concepts before moving to harder entrance questions.",
    questions: [
      createQuestion(
        "eng-4-q1",
        "If y - 4 = 11, what is y?",
        ["13", "14", "15", "16"],
        "C",
        "Add 4 to both sides: y = 15.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-4-q2",
        "Which instrument is used to measure temperature?",
        ["ammeter", "thermometer", "barometer", "voltmeter"],
        "B",
        "A thermometer is used to measure temperature.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-4-q3",
        "Which of the following is a metal?",
        ["oxygen", "sulfur", "copper", "nitrogen"],
        "C",
        "Copper is a metal.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-4-q4",
        "The sum of the angles in a triangle is:",
        ["90°", "180°", "270°", "360°"],
        "B",
        "The interior angles of a triangle always add up to 180 degrees.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-4-q5",
        "Which law is given by V = IR?",
        ["Newton’s law", "Ohm’s law", "Boyle’s law", "Faraday’s law"],
        "B",
        "V = IR is Ohm’s law.",
        "physics",
        "medium"
      ),
      createQuestion(
        "eng-4-q6",
        "What comes next in the pattern: 10, 20, 30, 40, __ ?",
        ["45", "50", "55", "60"],
        "B",
        "The pattern increases by 10, so the next number is 50.",
        "logic",
        "easy"
      ),
      createQuestion(
        "eng-4-q7",
        "What is the formula of carbon dioxide?",
        ["CO", "CO2", "C2O", "O2C"],
        "B",
        "Carbon dioxide is written as CO2.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "eng-4-q8",
        "If the radius of a circle is 5, its diameter is:",
        ["5", "10", "15", "20"],
        "B",
        "Diameter = 2 × radius = 10.",
        "mathematics",
        "easy"
      ),
      createQuestion(
        "eng-4-q9",
        "Which of the following travels fastest?",
        ["sound in air", "light", "a train", "water waves"],
        "B",
        "Light travels much faster than sound or mechanical objects.",
        "physics",
        "easy"
      ),
      createQuestion(
        "eng-4-q10",
        "Which one is the odd one out?",
        ["triangle", "square", "circle", "calculator"],
        "D",
        "Triangle, square, and circle are shapes. Calculator is not a shape.",
        "logic",
        "easy"
      ),
    ],
  },
  {
    id: "jee-main-physics-set-1",
    slug: "jee-main-physics-practice-set-1",
    category: "engineering-entrance",
    title: "JEE Main Physics Practice Set 1",
    description:
      "Original JEE Main style physics practice questions with answer explanations and pattern-based difficulty.",
    examType: "JEE Main",
    examSlug: "jee-main",
    examName: "JEE Main",
    sectionLabel: "Physics Practice Set",
    level: "intermediate",
    questionCount: 6,
    estimatedMinutes: 18,
    seoTitle:
      "JEE Main Physics Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original JEE Main-style physics questions with explanations. This pattern-based set helps build confidence in physics concepts.",
    keywords: [
      "JEE Main physics practice",
      "JEE Main physics questions",
      "physics practice set",
      "engineering entrance physics",
      "original JEE practice",
    ],
    intro:
      "This practice set is designed to help you build JEE Main physics problem solving with original, exam-style questions and clear explanations.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "jee-main-phys-1",
        "A body moves with constant acceleration of 2 m/s². What is its velocity after 5 seconds if initial velocity is 4 m/s?",
        ["10 m/s", "14 m/s", "6 m/s", "12 m/s"],
        "B",
        "Use v = u + at. v = 4 + (2 × 5) = 14 m/s.",
        "kinematics",
        "medium"
      ),
      createQuestion(
        "jee-main-phys-2",
        "Which of the following is the SI unit of electric resistance?",
        ["Ohm", "Ampere", "Volt", "Watt"],
        "A",
        "Resistance is measured in ohms.",
        "electricity",
        "easy"
      ),
      createQuestion(
        "jee-main-phys-3",
        "A ray of light enters water from air. Which quantity remains constant?",
        ["Speed", "Frequency", "Wavelength", "Direction"],
        "B",
        "Frequency remains constant when light moves between media.",
        "optics",
        "medium"
      ),
      createQuestion(
        "jee-main-phys-4",
        "A 2 kg mass is lifted 5 m vertically upward. What is the increase in gravitational potential energy? (g = 10 m/s²)",
        ["50 J", "100 J", "20 J", "10 J"],
        "B",
        "ΔPE = mgh = 2 × 10 × 5 = 100 J.",
        "mechanics",
        "easy"
      ),
      createQuestion(
        "jee-main-phys-5",
        "Which force acts to oppose the relative motion between two surfaces in contact?",
        ["Gravitational force", "Normal force", "Frictional force", "Tension force"],
        "C",
        "Friction opposes relative motion between surfaces.",
        "mechanics",
        "easy"
      ),
      createQuestion(
        "jee-main-phys-6",
        "An object is moving in uniform circular motion. Which statement is true?",
        ["Speed changes constantly", "Velocity is constant", "Centripetal force acts toward the center", "No force acts on the object"],
        "C",
        "In uniform circular motion, centripetal force acts toward the center of the circle.",
        "dynamics",
        "medium"
      ),
    ],
  },
  {
    id: "jee-main-chemistry-set-1",
    slug: "jee-main-chemistry-practice-set-1",
    category: "engineering-entrance",
    title: "JEE Main Chemistry Practice Set 1",
    description:
      "Original JEE Main chemistry questions that focus on basics, reactions, and periodic trends.",
    examType: "JEE Main",
    examSlug: "jee-main",
    examName: "JEE Main",
    sectionLabel: "Chemistry Practice Set",
    level: "intermediate",
    questionCount: 6,
    estimatedMinutes: 18,
    seoTitle:
      "JEE Main Chemistry Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original chemistry questions for JEE Main with answer explanations. This set covers periodic trends, reactions, and physical chemistry basics.",
    keywords: [
      "JEE Main chemistry practice",
      "JEE Main chemistry questions",
      "chemistry practice set",
      "engineering entrance chemistry",
      "original JEE chemistry",
    ],
    intro:
      "Practice this chemistry set to build familiarity with JEE Main-style problems in physical, inorganic, and organic chemistry.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "jee-main-chem-1",
        "Which gas is released when zinc reacts with dilute hydrochloric acid?",
        ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        "B",
        "Zinc and dilute hydrochloric acid produce hydrogen gas.",
        "inorganic chemistry",
        "easy"
      ),
      createQuestion(
        "jee-main-chem-2",
        "What is the pH of a neutral aqueous solution at 25°C?",
        ["7", "1", "14", "4"],
        "A",
        "Neutral water at 25°C has pH 7.",
        "physical chemistry",
        "easy"
      ),
      createQuestion(
        "jee-main-chem-3",
        "Which element has the electronic configuration [Ne] 3s² 3p¹?",
        ["Aluminium", "Magnesium", "Silicon", "Phosphorus"],
        "A",
        "Aluminium has configuration [Ne] 3s² 3p¹.",
        "periodic table",
        "medium"
      ),
      createQuestion(
        "jee-main-chem-4",
        "What is the functional group in ethanol?",
        ["Carboxyl", "Amine", "Hydroxyl", "Aldehyde"],
        "C",
        "Ethanol contains a hydroxyl (–OH) group.",
        "organic chemistry",
        "medium"
      ),
      createQuestion(
        "jee-main-chem-5",
        "Which of these is a strong acid?",
        ["Acetic acid", "Hydrochloric acid", "Ammonia", "Sodium hydroxide"],
        "B",
        "Hydrochloric acid is a strong acid.",
        "physical chemistry",
        "easy"
      ),
      createQuestion(
        "jee-main-chem-6",
        "Which of the following is an alkali metal?",
        ["Calcium", "Lithium", "Aluminium", "Copper"],
        "B",
        "Lithium is an alkali metal in group 1.",
        "periodic trends",
        "medium"
      ),
    ],
  },
  {
    id: "jee-main-math-set-1",
    slug: "jee-main-mathematics-practice-set-1",
    category: "engineering-entrance",
    title: "JEE Main Mathematics Practice Set 1",
    description:
      "Original JEE Main mathematics questions covering algebra, coordinate geometry, and functions.",
    examType: "JEE Main",
    examSlug: "jee-main",
    examName: "JEE Main",
    sectionLabel: "Mathematics Practice Set",
    level: "intermediate",
    questionCount: 6,
    estimatedMinutes: 18,
    seoTitle:
      "JEE Main Mathematics Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original JEE Main-style mathematics questions with step-by-step explanations. This set includes algebra and coordinate geometry problems.",
    keywords: [
      "JEE Main math practice",
      "JEE Main mathematics questions",
      "math practice set",
      "engineering entrance math",
      "original JEE math",
    ],
    intro:
      "Build your JEE Main math skills with original practice questions that help you understand problem-solving techniques.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "jee-main-math-1",
        "What is the solution of the equation 2x − 5 = 9?",
        ["2", "4", "7", "14"],
        "C",
        "Add 5 to both sides and divide by 2: x = 7.",
        "algebra",
        "easy"
      ),
      createQuestion(
        "jee-main-math-2",
        "If the slope of a line is 3 and it passes through (1, 2), what is its equation?",
        ["y = 3x + 1", "y = 3x - 1", "y = 2x + 3", "y = 3x + 2"],
        "A",
        "Use y − 2 = 3(x − 1) to get y = 3x − 1? Wait, check: y = 3x - 1 + 2 = 3x + 1.",
        "coordinate geometry",
        "medium"
      ),
      createQuestion(
        "jee-main-math-3",
        "If x² = 49, what are the possible values of x?",
        ["7 only", "−7 only", "7 or −7", "0"],
        "C",
        "Both 7 and -7 satisfy x² = 49.",
        "quadratic equations",
        "easy"
      ),
      createQuestion(
        "jee-main-math-4",
        "What is the derivative of f(x) = x²?",
        ["2x", "x", "x²", "1"],
        "A",
        "The derivative of x² is 2x.",
        "calculus",
        "medium"
      ),
      createQuestion(
        "jee-main-math-5",
        "The pairs (2, 4) and (5, 10) lie on the same line through the origin. What is the slope of this line?",
        ["2", "3", "4", "5"],
        "A",
        "Slope = rise/run = 4/2 = 2 and also 10/5 = 2.",
        "coordinate geometry",
        "medium"
      ),
      createQuestion(
        "jee-main-math-6",
        "If a = 2 and b = 3, what is the value of a² + b²?",
        ["5", "10", "13", "25"],
        "C",
        "2² + 3² = 4 + 9 = 13.",
        "algebra",
        "easy"
      ),
    ],
  },
  {
    id: "jee-advanced-mixed-set-1",
    slug: "jee-advanced-mixed-practice-set-1",
    category: "engineering-entrance",
    title: "JEE Advanced Mixed Practice Set 1",
    description:
      "Pattern-based JEE Advanced practice with a mix of physics, chemistry, and mathematics questions.",
    examType: "JEE Advanced",
    examSlug: "jee-advanced",
    examName: "JEE Advanced",
    sectionLabel: "Mixed Practice Set",
    level: "advanced",
    questionCount: 6,
    estimatedMinutes: 25,
    seoTitle:
      "JEE Advanced Mixed Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original, pattern-based JEE Advanced questions with answer explanations. This set mixes physics, chemistry, and math problems.",
    keywords: [
      "JEE Advanced practice questions",
      "JEE Advanced mixed set",
      "advanced engineering entrance",
      "physics chemistry math practice",
      "original JEE Advanced practice",
    ],
    intro:
      "Use this set for pattern-based JEE Advanced preparation with a mix of subjects and explanation-driven practice.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "jee-adv-1",
        "If sinθ = 3/5 and θ is acute, what is cosθ?",
        ["4/5", "3/4", "5/3", "1/5"],
        "A",
        "For an acute angle, cosθ = √(1 − sin²θ) = √(1 − 9/25) = 4/5.",
        "trigonometry",
        "hard"
      ),
      createQuestion(
        "jee-adv-2",
        "Which compound is the conjugate base of acetic acid?",
        ["CH3COOH", "CH3COO−", "HCO3−", "CH3CHO"],
        "B",
        "The conjugate base of acetic acid is the acetate ion CH3COO−.",
        "organic chemistry",
        "hard"
      ),
      createQuestion(
        "jee-adv-3",
        "A particle moves with displacement x = 2t² − 5t + 3. What is its acceleration?",
        ["4 m/s²", "−5 m/s²", "4t − 5", "2 m/s²"],
        "A",
        "Acceleration is the second derivative of displacement: d²x/dt² = 4.",
        "mechanics",
        "medium"
      ),
      createQuestion(
        "jee-adv-4",
        "Which of these matrices is singular?",
        ["[[1,0],[0,1]]", "[[1,2],[2,4]]", "[[2,0],[0,2]]", "[[0,1],[1,0]]"],
        "B",
        "The determinant of [[1,2],[2,4]] is 1×4 − 2×2 = 0, so it is singular.",
        "linear algebra",
        "hard"
      ),
      createQuestion(
        "jee-adv-5",
        "If a solution has pH 3, its hydrogen ion concentration is 10⁻³ M. What is its hydroxide ion concentration?",
        ["10⁻¹ M", "10⁻³ M", "10⁻¹¹ M", "10⁻⁷ M"],
        "C",
        "Kw = 10⁻¹⁴, so [OH−] = 10⁻¹¹ M.",
        "physical chemistry",
        "hard"
      ),
      createQuestion(
        "jee-adv-6",
        "A circle has radius 5. What is the length of an arc subtended by a 60° angle?",
        ["(5π)/3", "(π)/3", "(10π)/3", "(5π)/6"],
        "A",
        "Arc length = θ (in radians) × r = (π/3) × 5 = 5π/3.",
        "geometry",
        "medium"
      ),
    ],
  },
  createComedkPracticeSet(1),
  createComedkPracticeSet(2),
  createComedkPracticeSet(3),
  createComedkPracticeSet(4),
  createComedkPracticeSet(5),
  createComedkPracticeSet(6),
  createKcetPracticeSet(1),
  createKcetPracticeSet(2),
  createKcetPracticeSet(3),
  createKcetPracticeSet(4),
  createKcetPracticeSet(5),
  createWbjeePracticeSet(1),
  createWbjeePracticeSet(2),
  createWbjeePracticeSet(3),
  createWbjeePracticeSet(4),
  createWbjeePracticeSet(5),
  createJeeAdvancedPracticeSet(1),
  createJeeAdvancedPracticeSet(2),
  createJeeAdvancedPracticeSet(3),
  createJeeAdvancedPracticeSet(4),
  createJeeAdvancedPracticeSet(5),
    createJeeMainPracticeSet(1),
    createJeeMainPracticeSet(2),
    createJeeMainPracticeSet(3),
    createJeeMainPracticeSet(4),
    createJeeMainPracticeSet(5),
  {
    id: "wbjee-math-set-1",
    slug: "wbjee-mathematics-practice-set-1",
    category: "engineering-entrance",
    title: "WBJEE Mathematics Practice Set 1",
    description:
      "Original WBJEE-style math questions for algebra, functions, and calculation speed.",
    examType: "WBJEE",
    examSlug: "wbjee",
    examName: "WBJEE",
    sectionLabel: "Mathematics Practice Set",
    level: "intermediate",
    questionCount: 6,
    estimatedMinutes: 18,
    seoTitle:
      "WBJEE Mathematics Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original WBJEE mathematics questions with answers and explanations. This set focuses on algebra, geometry, and basic calculation skills.",
    keywords: [
      "WBJEE math practice",
      "WBJEE mathematics questions",
      "math practice set",
      "WBJEE problems",
      "original WBJEE practice",
    ],
    intro:
      "Use this set to strengthen WBJEE mathematics preparation with original questions and solution explanations.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "wbjee-math-1",
        "What is 15% of 200?",
        ["25", "30", "35", "40"],
        "B",
        "15% of 200 is 30.",
        "percentages",
        "easy"
      ),
      createQuestion(
        "wbjee-math-2",
        "If y = 2x + 3 and x = 2, what is y?",
        ["5", "6", "7", "8"],
        "C",
        "Substitute x = 2: y = 2 × 2 + 3 = 7.",
        "algebra",
        "easy"
      ),
      createQuestion(
        "wbjee-math-3",
        "If the perimeter of a square is 20 cm, what is the side length?",
        ["4 cm", "5 cm", "6 cm", "8 cm"],
        "B",
        "Side length = perimeter / 4 = 5 cm.",
        "geometry",
        "medium"
      ),
      createQuestion(
        "wbjee-math-4",
        "Which value is equal to 3² × 3³?",
        ["3⁵", "3⁶", "3⁴", "3⁷"],
        "A",
        "When multiplying powers with same base, add exponents: 3² × 3³ = 3⁵.",
        "algebra",
        "easy"
      ),
      createQuestion(
        "wbjee-math-5",
        "Which of these sets of numbers is in arithmetic progression?",
        ["2, 4, 8", "3, 6, 9", "5, 8, 11", "1, 2, 4"],
        "C",
        "The difference is constant: 8 − 5 = 3 and 11 − 8 = 3.",
        "sequence",
        "medium"
      ),
      createQuestion(
        "wbjee-math-6",
        "What is the product of 4 and 0.25?",
        ["1", "0.5", "0.25", "2"],
        "A",
        "4 × 0.25 = 1.",
        "arithmetic",
        "easy"
      ),
    ],
  },
  {
    id: "wbjee-pc-set-1",
    slug: "wbjee-physics-chemistry-practice-set-1",
    category: "engineering-entrance",
    title: "WBJEE Physics and Chemistry Practice Set 1",
    description:
      "Original WBJEE-style practice set for physics and chemistry with balanced questions and answer explanations.",
    examType: "WBJEE",
    examSlug: "wbjee",
    examName: "WBJEE",
    sectionLabel: "Physics & Chemistry Practice Set",
    level: "intermediate",
    questionCount: 6,
    estimatedMinutes: 18,
    seoTitle:
      "WBJEE Physics and Chemistry Practice Questions – Set 1 | Nishaglobal Education",
    seoDescription:
      "Practice original WBJEE physics and chemistry questions with answers and explanations. This set supports pattern-based preparation for category 2 and 3 questions.",
    keywords: [
      "WBJEE physics practice",
      "WBJEE chemistry practice",
      "WBJEE question set",
      "physics chemistry practice",
      "original WBJEE practice",
    ],
    intro:
      "Practice original WBJEE-style questions in physics and chemistry to develop exam familiarity and conceptual clarity.",
    isOriginal: true,
    isLive: false,
    questions: [
      createQuestion(
        "wbjee-pc-1",
        "In a chemical reaction, which of these is a physical change?",
        ["Rusting of iron", "Melting of ice", "Combustion of petrol", "Formation of salt"],
        "B",
        "Melting of ice is a physical change because the substance remains water.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "wbjee-pc-2",
        "A current of 2 A passes through a conductor for 3 seconds. How much charge flows?",
        ["2 C", "3 C", "5 C", "6 C"],
        "D",
        "Charge = current × time = 2 × 3 = 6 coulombs.",
        "electricity",
        "medium"
      ),
      createQuestion(
        "wbjee-pc-3",
        "Which molecule is polar?",
        ["CO2", "H2", "H2O", "N2"],
        "C",
        "Water is polar because of its bent shape and unequal electron distribution.",
        "chemistry",
        "medium"
      ),
      createQuestion(
        "wbjee-pc-4",
        "Which of these is a vector quantity?",
        ["Mass", "Speed", "Force", "Temperature"],
        "C",
        "Force has both magnitude and direction, so it is a vector.",
        "physics",
        "easy"
      ),
      createQuestion(
        "wbjee-pc-5",
        "What is the chemical formula of water?",
        ["H2", "O2", "H2O", "CO2"],
        "C",
        "Water is H2O.",
        "chemistry",
        "easy"
      ),
      createQuestion(
        "wbjee-pc-6",
        "A body weighing 10 N is held stationary. What is the net force on the body?",
        ["10 N downward", "10 N upward", "0 N", "Cannot say"],
        "C",
        "When the body is stationary, forces balance and net force is 0 N.",
        "mechanics",
        "medium"
      ),
    ],
  },
];

export function getPracticeCategory(slug: string) {
  return practiceCategories.find((item) => item.slug === slug);
}

export function getEngineeringExamRules() {
  return engineeringExamRules;
}

export function getEngineeringExamRuleBySlug(
  examSlug: "jee-main" | "jee-advanced" | "comedk" | "wbjee" | "kcet"
) {
  return engineeringExamRules.find((item) => item.examSlug === examSlug);
}

export function getEngineeringPracticeGroups() {
  const hiddenLegacyEngineeringSlugs = new Set([
    "jee-main-physics-practice-set-1",
    "jee-main-chemistry-practice-set-1",
    "jee-main-mathematics-practice-set-1",
    "jee-advanced-mixed-practice-set-1",
  ]);

  return engineeringExamRules.map((exam) => ({
    ...exam,
    sets: practiceSets.filter(
      (set) =>
        set.category === "engineering-entrance" &&
        set.examSlug === exam.examSlug &&
        set.isLive !== false &&
        !hiddenLegacyEngineeringSlugs.has(set.slug)
    ),
  }));
}

export function getIeltsPracticeGroups() {
  return ieltsPracticeGroupMeta.map((group) => ({
    ...group,
    sets: practiceSets.filter(
      (set) =>
        set.category === "ielts" &&
        set.practiceGroup === group.key &&
        set.isLive !== false
    ),
  }));
}

export function getToeflPracticeGroups() {
  return toeflPracticeGroupMeta.map((group) => ({
    ...group,
    sets: practiceSets.filter(
      (set) =>
        set.category === "toefl" &&
        set.practiceGroup === group.key &&
        set.isLive !== false
    ),
  }));
}

export function getPracticeSetBySlug(slug: string) {
  return practiceSets.find((item) => item.slug === slug);
}

export function getPracticeSet(category: string, setSlug: string) {
  return practiceSets.find(
    (item) => item.category === category && item.slug === setSlug
  );
}

export function getPracticeSetsByCategory(category: string) {
  return practiceSets.filter((item) => item.category === category);
}

export function getGovPracticeCategoryBySlug(slug: string): GovPracticeCategory | undefined {
  return govPracticeCategories.find(c => c.slug === slug);
}

export function getGovPracticeSet(categorySlug: string, setSlug: string): GovPracticeSet | undefined {
  const category = govPracticeCategories.find(c => c.slug === categorySlug);
  return category?.sets.find(s => s.slug === setSlug);
}

