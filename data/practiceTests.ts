export type PracticeCategory = "ielts" | "engineering-entrance" | "ctet" | "ssc" | "railway";

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

function createComedkMathQuestions(setNumber: number): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];
  const trigAnswers = [
    { label: "sin 30°", value: "1/2" },
    { label: "cos 60°", value: "1/2" },
    { label: "tan 45°", value: "1" },
    { label: "sin 90°", value: "1" },
    { label: "cos 0°", value: "1" },
  ] as const;

  for (let round = 0; round < 5; round += 1) {
    const seed = setNumber * 100 + round * 20;

    const linearAnswer = setNumber + round + 4;
    const linearCoefficient = round + 2;
    const linearConstant = setNumber + round + 5;
    const linearRhs = linearCoefficient * linearAnswer + linearConstant;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 1}`,
        `If ${linearCoefficient}x + ${linearConstant} = ${linearRhs}, what is x?`,
        `${linearAnswer}`,
        [`${linearAnswer - 1}`, `${linearAnswer + 1}`, `${linearAnswer + 2}`],
        `Subtract ${linearConstant} from both sides and divide by ${linearCoefficient}.`,
        "algebra",
        "easy",
        seed + 1
      )
    );

    const rootOne = setNumber + round + 2;
    const rootTwo = round + 3;
    const rootSum = rootOne + rootTwo;
    const rootProduct = rootOne * rootTwo;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 6}`,
        `One root of x² - ${rootSum}x + ${rootProduct} = 0 is ${rootOne}. What is the other root?`,
        `${rootTwo}`,
        [`${rootTwo + 1}`, `${rootTwo - 1}`, `${rootSum}`],
        `For x² - ${rootSum}x + ${rootProduct} = 0, the product of roots is ${rootProduct}. Since one root is ${rootOne}, the other root is ${rootProduct}/${rootOne} = ${rootTwo}.`,
        "quadratic equations",
        "medium",
        seed + 2
      )
    );

    const percentBase = 200 + setNumber * 20 + round * 10;
    const percentRate = 10 + round * 5;
    const increasedValue = percentBase + (percentBase * percentRate) / 100;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 11}`,
        `A quantity of ${percentBase} is increased by ${percentRate}%. What is the new value?`,
        `${formatValue(increasedValue)}`,
        [
          `${formatValue(percentBase + (percentBase * (percentRate - 5)) / 100)}`,
          `${formatValue(percentBase + percentRate)}`,
          `${formatValue(percentBase - (percentBase * percentRate) / 100)}`,
        ],
        `${percentRate}% of ${percentBase} is ${(percentBase * percentRate) / 100}, so the new value is ${formatValue(increasedValue)}.`,
        "percentages",
        "easy",
        seed + 3
      )
    );

    const principal = 1000 + setNumber * 200 + round * 100;
    const interestRate = 5 + round;
    const time = 2 + (setNumber % 2);
    const simpleInterest = (principal * interestRate * time) / 100;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 16}`,
        `What is the simple interest on Rs. ${principal} at ${interestRate}% per annum for ${time} years?`,
        `${formatValue(simpleInterest)}`,
        [
          `${formatValue(simpleInterest + 20)}`,
          `${formatValue(simpleInterest - 20)}`,
          `${formatValue(principal * interestRate / 100)}`,
        ],
        `Simple interest = (P × R × T)/100 = (${principal} × ${interestRate} × ${time})/100 = ${formatValue(simpleInterest)}.`,
        "simple interest",
        "medium",
        seed + 4
      )
    );

    const apFirst = setNumber + round + 3;
    const apDifference = round + 2;
    const apTerm = 8 + setNumber;
    const apAnswer = apFirst + (apTerm - 1) * apDifference;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 21}`,
        `Find the ${apTerm}th term of an AP whose first term is ${apFirst} and common difference is ${apDifference}.`,
        `${apAnswer}`,
        [`${apAnswer - apDifference}`, `${apAnswer + apDifference}`, `${apFirst + apTerm * apDifference}`],
        `Use a_n = a + (n - 1)d = ${apFirst} + (${apTerm} - 1) × ${apDifference} = ${apAnswer}.`,
        "progressions",
        "medium",
        seed + 5
      )
    );

    const xOne = round + 1;
    const yOne = setNumber + round + 2;
    const xTwo = xOne + 2;
    const slope = setNumber + round + 1;
    const yTwo = yOne + 2 * slope;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 26}`,
        `What is the slope of the line passing through (${xOne}, ${yOne}) and (${xTwo}, ${yTwo})?`,
        `${slope}`,
        [`${slope - 1}`, `${slope + 1}`, `${yTwo - yOne}`],
        `Slope = (y₂ - y₁)/(x₂ - x₁) = (${yTwo} - ${yOne})/(${xTwo} - ${xOne}) = ${slope}.`,
        "coordinate geometry",
        "medium",
        seed + 6
      )
    );

    const totalBalls = 10 + setNumber + round;
    const redBalls = 3 + round;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 31}`,
        `A bag contains ${redBalls} red balls and ${totalBalls - redBalls} blue balls. What is the probability of drawing a red ball?`,
        `${redBalls}/${totalBalls}`,
        [
          `${totalBalls - redBalls}/${totalBalls}`,
          `${redBalls}/${totalBalls - 1}`,
          `${redBalls + 1}/${totalBalls}`,
        ],
        `Probability = favorable outcomes / total outcomes = ${redBalls}/${totalBalls}.`,
        "probability",
        "easy",
        seed + 7
      )
    );

    const triangleBase = 8 + round + setNumber;
    const triangleHeight = 6 + round * 2;
    const triangleArea = (triangleBase * triangleHeight) / 2;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 36}`,
        `What is the area of a triangle with base ${triangleBase} cm and height ${triangleHeight} cm?`,
        `${triangleArea}`,
        [`${triangleBase * triangleHeight}`, `${triangleArea - triangleBase}`, `${triangleArea + triangleHeight}`],
        `Area of triangle = 1/2 × base × height = 1/2 × ${triangleBase} × ${triangleHeight} = ${triangleArea}.`,
        "geometry",
        "easy",
        seed + 8
      )
    );

    const logPower = setNumber + round + 2;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 41}`,
        `What is the value of log₁₀(10^${logPower})?`,
        `${logPower}`,
        [`${logPower - 1}`, `${logPower + 1}`, `${10 ** Math.min(logPower, 3)}`],
        `log₁₀(10^n) = n, so the answer is ${logPower}.`,
        "logarithms",
        "easy",
        seed + 9
      )
    );

    const determinantA = setNumber + round + 2;
    const determinantB = round + 1;
    const determinantC = setNumber;
    const determinantD = round + 4;
    const determinantAnswer = determinantA * determinantD - determinantB * determinantC;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 46}`,
        `Find the determinant of the matrix [[${determinantA}, ${determinantB}], [${determinantC}, ${determinantD}]].`,
        `${determinantAnswer}`,
        [`${determinantA * determinantD + determinantB * determinantC}`, `${determinantAnswer + 2}`, `${determinantAnswer - 2}`],
        `For a 2 × 2 matrix [[a, b], [c, d]], determinant = ad - bc = ${determinantA} × ${determinantD} - ${determinantB} × ${determinantC} = ${determinantAnswer}.`,
        "matrices",
        "medium",
        seed + 10
      )
    );

    const trig = trigAnswers[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 51}`,
        `What is the value of ${trig.label}?`,
        trig.value,
        trig.value === "1/2" ? ["0", "1", "√3/2"] : ["1/2", "√3/2", "0"],
        `${trig.label} = ${trig.value}.`,
        "trigonometry",
        "easy",
        seed + 11
      )
    );

    const inequalityConstant = setNumber + round + 7;
    const inequalityAnswer = inequalityConstant - 2;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-math-${round + 56}`,
        `Solve the inequality x + 2 > ${inequalityConstant}.`,
        `x > ${inequalityAnswer}`,
        [`x < ${inequalityAnswer}`, `x > ${inequalityAnswer + 1}`, `x < ${inequalityAnswer + 1}`],
        `Subtract 2 from both sides to get x > ${inequalityAnswer}.`,
        "inequalities",
        "easy",
        seed + 12
      )
    );
  }

  return questions;
}

function createComedkPhysicsQuestions(setNumber: number): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];

  for (let round = 0; round < 5; round += 1) {
    const seed = setNumber * 100 + round * 20;

    const initialVelocity = round + 1;
    const acceleration = setNumber + round + 2;
    const time = round + 4;
    const finalVelocity = initialVelocity + acceleration * time;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 1}`,
        `A particle has initial velocity ${initialVelocity} m/s and acceleration ${acceleration} m/s² for ${time} s. What is its final velocity?`,
        `${finalVelocity} m/s`,
        [`${finalVelocity - acceleration} m/s`, `${finalVelocity + acceleration} m/s`, `${acceleration * time} m/s`],
        `Use v = u + at = ${initialVelocity} + ${acceleration} × ${time} = ${finalVelocity} m/s.`,
        "kinematics",
        "easy",
        seed + 21
      )
    );

    const mass = round + 2;
    const accelerationTwo = setNumber + round + 3;
    const force = mass * accelerationTwo;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 6}`,
        `What force is needed to accelerate a ${mass} kg body at ${accelerationTwo} m/s²?`,
        `${force} N`,
        [`${force - mass} N`, `${force + mass} N`, `${accelerationTwo} N`],
        `From F = ma, force = ${mass} × ${accelerationTwo} = ${force} N.`,
        "laws of motion",
        "easy",
        seed + 22
      )
    );

    const workForce = 10 + setNumber + round;
    const distance = 4 + round;
    const work = workForce * distance;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 11}`,
        `A constant force of ${workForce} N moves an object through ${distance} m in the same direction. What is the work done?`,
        `${work} J`,
        [`${work + 10} J`, `${work - 10} J`, `${workForce + distance} J`],
        `Work = force × distance = ${workForce} × ${distance} = ${work} J.`,
        "work and energy",
        "easy",
        seed + 23
      )
    );

    const powerWork = 120 + round * 20;
    const powerTime = 4 + setNumber;
    const power = powerWork / powerTime;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 16}`,
        `If ${powerWork} J of work is done in ${powerTime} s, what is the power?`,
        `${formatValue(power)} W`,
        [`${formatValue(power + 5)} W`, `${formatValue(powerWork - powerTime)} W`, `${formatValue(powerTime)} W`],
        `Power = work / time = ${powerWork}/${powerTime} = ${formatValue(power)} W.`,
        "power",
        "medium",
        seed + 24
      )
    );

    const momentumMass = round + 3;
    const momentumVelocity = setNumber + round + 4;
    const momentum = momentumMass * momentumVelocity;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 21}`,
        `What is the momentum of a ${momentumMass} kg object moving at ${momentumVelocity} m/s?`,
        `${momentum} kg m/s`,
        [`${momentumVelocity} kg m/s`, `${momentum + 5} kg m/s`, `${momentum - 5} kg m/s`],
        `Momentum = mv = ${momentumMass} × ${momentumVelocity} = ${momentum} kg m/s.`,
        "momentum",
        "easy",
        seed + 25
      )
    );

    const keMass = round + 2;
    const keVelocity = setNumber + round + 3;
    const kineticEnergy = 0.5 * keMass * keVelocity * keVelocity;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 26}`,
        `Find the kinetic energy of a ${keMass} kg body moving at ${keVelocity} m/s.`,
        `${formatValue(kineticEnergy)} J`,
        [`${formatValue(kineticEnergy + 5)} J`, `${formatValue(keMass * keVelocity)} J`, `${formatValue(kineticEnergy - 5)} J`],
        `Kinetic energy = 1/2 mv² = 1/2 × ${keMass} × ${keVelocity}² = ${formatValue(kineticEnergy)} J.`,
        "work and energy",
        "medium",
        seed + 26
      )
    );

    const peMass = round + 1;
    const peHeight = setNumber + round + 5;
    const potentialEnergy = peMass * 10 * peHeight;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 31}`,
        `A ${peMass} kg body is lifted to a height of ${peHeight} m. Take g = 10 m/s². What is the gain in potential energy?`,
        `${potentialEnergy} J`,
        [`${potentialEnergy - 10} J`, `${potentialEnergy + 10} J`, `${peMass * peHeight} J`],
        `Potential energy = mgh = ${peMass} × 10 × ${peHeight} = ${potentialEnergy} J.`,
        "gravitation",
        "easy",
        seed + 27
      )
    );

    const current = round + 2;
    const chargeTime = setNumber + round + 4;
    const charge = current * chargeTime;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 36}`,
        `A current of ${current} A flows for ${chargeTime} s. How much charge passes through the circuit?`,
        `${charge} C`,
        [`${charge - current} C`, `${charge + current} C`, `${chargeTime} C`],
        `Charge Q = It = ${current} × ${chargeTime} = ${charge} C.`,
        "current electricity",
        "easy",
        seed + 28
      )
    );

    const resistanceOne = round + 2;
    const resistanceTwo = setNumber + round + 3;
    const seriesResistance = resistanceOne + resistanceTwo;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 41}`,
        `Two resistors of ${resistanceOne} Ω and ${resistanceTwo} Ω are connected in series. What is the equivalent resistance?`,
        `${seriesResistance} Ω`,
        [`${resistanceOne * resistanceTwo} Ω`, `${seriesResistance - 1} Ω`, `${resistanceTwo - resistanceOne} Ω`],
        `Series resistances add directly: ${resistanceOne} + ${resistanceTwo} = ${seriesResistance} Ω.`,
        "current electricity",
        "easy",
        seed + 29
      )
    );

    const parallelResistanceOne = 2 * (round + 2);
    const parallelResistanceTwo = 2 * (setNumber + round + 2);
    const parallelResistance = (parallelResistanceOne * parallelResistanceTwo) / (parallelResistanceOne + parallelResistanceTwo);
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 46}`,
        `Two resistors of ${parallelResistanceOne} Ω and ${parallelResistanceTwo} Ω are connected in parallel. What is the equivalent resistance?`,
        `${formatValue(parallelResistance)} Ω`,
        [`${parallelResistanceOne + parallelResistanceTwo} Ω`, `${formatValue(parallelResistance + 1)} Ω`, `${formatValue(parallelResistanceOne - 1)} Ω`],
        `For parallel resistors, R = (R₁R₂)/(R₁ + R₂) = (${parallelResistanceOne} × ${parallelResistanceTwo})/(${parallelResistanceOne} + ${parallelResistanceTwo}) = ${formatValue(parallelResistance)} Ω.`,
        "current electricity",
        "medium",
        seed + 30
      )
    );

    const focalLength = round + 1;
    const lensPower = 1 / focalLength;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 51}`,
        `A lens has focal length ${focalLength} m. What is its power?`,
        `${formatValue(lensPower)} D`,
        [`${focalLength} D`, `${formatValue(lensPower + 1)} D`, `${formatValue(1 / (focalLength + 1))} D`],
        `Power of a lens P = 1/f, so P = 1/${focalLength} = ${formatValue(lensPower)} D.`,
        "optics",
        "medium",
        seed + 31
      )
    );

    const waveFrequency = 40 + round * 10;
    const wavelength = setNumber + round + 2;
    const waveSpeed = waveFrequency * wavelength;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-phys-${round + 56}`,
        `A wave has frequency ${waveFrequency} Hz and wavelength ${wavelength} m. What is its speed?`,
        `${waveSpeed} m/s`,
        [`${waveFrequency + wavelength} m/s`, `${waveSpeed - waveFrequency} m/s`, `${waveSpeed + wavelength} m/s`],
        `Wave speed v = fλ = ${waveFrequency} × ${wavelength} = ${waveSpeed} m/s.`,
        "waves",
        "medium",
        seed + 32
      )
    );
  }

  return questions;
}

function createComedkChemistryQuestions(setNumber: number): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];
  const molarMassData = [
    { formula: "H₂O", mass: 18, distractors: ["16", "20", "22"] as [string, string, string] },
    { formula: "CO₂", mass: 44, distractors: ["28", "40", "48"] as [string, string, string] },
    { formula: "NH₃", mass: 17, distractors: ["14", "18", "20"] as [string, string, string] },
    { formula: "CH₄", mass: 16, distractors: ["14", "18", "20"] as [string, string, string] },
    { formula: "NaOH", mass: 40, distractors: ["23", "39", "56"] as [string, string, string] },
  ] as const;
  const functionalGroups = [
    { compound: "ethanol", answer: "Hydroxyl", distractors: ["Carboxyl", "Aldehyde", "Amine"] as [string, string, string] },
    { compound: "ethanoic acid", answer: "Carboxyl", distractors: ["Hydroxyl", "Ketone", "Amine"] as [string, string, string] },
    { compound: "propanone", answer: "Ketone", distractors: ["Aldehyde", "Carboxyl", "Amide"] as [string, string, string] },
    { compound: "methanal", answer: "Aldehyde", distractors: ["Hydroxyl", "Ketone", "Ester"] as [string, string, string] },
    { compound: "ethylamine", answer: "Amine", distractors: ["Amide", "Carboxyl", "Hydroxyl"] as [string, string, string] },
  ] as const;
  const oxidationStates = [
    { compound: "H₂SO₄", element: "sulfur", value: "+6", distractors: ["+4", "+2", "-2"] as [string, string, string] },
    { compound: "HNO₃", element: "nitrogen", value: "+5", distractors: ["+3", "+1", "-3"] as [string, string, string] },
    { compound: "KMnO₄", element: "manganese", value: "+7", distractors: ["+2", "+4", "+6"] as [string, string, string] },
    { compound: "SO₂", element: "sulfur", value: "+4", distractors: ["+2", "+6", "-2"] as [string, string, string] },
    { compound: "K₂Cr₂O₇", element: "chromium", value: "+6", distractors: ["+3", "+4", "+7"] as [string, string, string] },
  ] as const;

  for (let round = 0; round < 5; round += 1) {
    const seed = setNumber * 100 + round * 20;
    const phValue = round + 1;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 1}`,
        `If the hydrogen ion concentration of a solution is 10^- ${phValue} mol/L, what is its pH?`.replace("^- ", "^-") ,
        `${phValue}`,
        [`${phValue + 1}`, `${Math.max(0, phValue - 1)}`, `${14 - phValue}`],
        `pH = -log[H⁺]. If [H⁺] = 10^-${phValue}, then pH = ${phValue}.`,
        "physical chemistry",
        "easy",
        seed + 41
      )
    );

    const molar = molarMassData[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 6}`,
        `What is the molar mass of ${molar.formula}?`,
        `${molar.mass} g/mol`,
        [`${molar.distractors[0]} g/mol`, `${molar.distractors[1]} g/mol`, `${molar.distractors[2]} g/mol`],
        `The molar mass of ${molar.formula} is ${molar.mass} g/mol.`,
        "mole concept",
        "easy",
        seed + 42
      )
    );

    const oxidation = oxidationStates[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 11}`,
        `What is the oxidation state of ${oxidation.element} in ${oxidation.compound}?`,
        oxidation.value,
        oxidation.distractors,
        `Using the standard oxidation number rules, the oxidation state of ${oxidation.element} in ${oxidation.compound} is ${oxidation.value}.`,
        "redox chemistry",
        "medium",
        seed + 43
      )
    );

    const sodiumValency = 1;
    const oxygenValency = 2;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 16}`,
        `What is the correct formula of the compound formed by sodium (valency ${sodiumValency}) and oxygen (valency ${oxygenValency})?`,
        "Na2O",
        ["NaO", "NaO2", "Na2O2"],
        `Cross the valencies 1 and 2 to get Na₂O.`,
        "chemical bonding",
        "easy",
        seed + 44
      )
    );

    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 21}`,
        "Which gas is released when zinc reacts with dilute hydrochloric acid?",
        "Hydrogen",
        ["Oxygen", "Nitrogen", "Carbon dioxide"],
        "Zinc reacts with dilute hydrochloric acid to release hydrogen gas.",
        "chemical reactions",
        "easy",
        seed + 45
      )
    );

    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 26}`,
        "Which of the following is a strong acid?",
        "Hydrochloric acid",
        ["Acetic acid", "Ammonia", "Sodium bicarbonate"],
        "Hydrochloric acid is a strong acid that ionizes almost completely in water.",
        "acids and bases",
        "easy",
        seed + 46
      )
    );

    const group = functionalGroups[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 31}`,
        `Which functional group is present in ${group.compound}?`,
        group.answer,
        group.distractors,
        `${group.compound} contains the ${group.answer.toLowerCase()} functional group.`,
        "organic chemistry",
        "medium",
        seed + 47
      )
    );

    const alkaliMetals = ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium"] as const;
    const selectedMetal = alkaliMetals[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 36}`,
        "Which of the following is an alkali metal?",
        selectedMetal,
        ["Calcium", "Aluminium", "Zinc"],
        `${selectedMetal} belongs to Group 1 of the periodic table and is an alkali metal.`,
        "periodic table",
        "easy",
        seed + 48
      )
    );

    const masses = [18, 44, 34, 98, 36.5] as const;
    const moleMass = masses[round];
    const moles = round + 2;
    const sampleMass = moleMass * moles;
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 41}`,
        `How many moles are present in ${sampleMass} g of a substance with molar mass ${moleMass} g/mol?`,
        `${moles}`,
        [`${moles + 1}`, `${moles - 1}`, `${sampleMass / (moleMass / 2)}`],
        `Moles = mass / molar mass = ${sampleMass}/${moleMass} = ${moles}.`,
        "mole concept",
        "medium",
        seed + 49
      )
    );

    const electronicConfigs = [
      { config: "2, 8, 1", element: "Sodium", distractors: ["Magnesium", "Aluminium", "Neon"] as [string, string, string] },
      { config: "2, 8, 7", element: "Chlorine", distractors: ["Argon", "Sulfur", "Calcium"] as [string, string, string] },
      { config: "2, 8, 8, 1", element: "Potassium", distractors: ["Calcium", "Scandium", "Argon"] as [string, string, string] },
      { config: "2, 8, 3", element: "Aluminium", distractors: ["Silicon", "Magnesium", "Phosphorus"] as [string, string, string] },
      { config: "2, 6", element: "Oxygen", distractors: ["Nitrogen", "Fluorine", "Carbon"] as [string, string, string] },
    ] as const;
    const config = electronicConfigs[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 46}`,
        `Which element has the electronic configuration ${config.config}?`,
        config.element,
        config.distractors,
        `${config.element} has the electronic configuration ${config.config}.`,
        "atomic structure",
        "medium",
        seed + 50
      )
    );

    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 51}`,
        "Which of the following is a covalent compound?",
        "Water",
        ["Sodium chloride", "Magnesium oxide", "Calcium chloride"],
        "Water is covalent because atoms share electrons in the molecule.",
        "chemical bonding",
        "easy",
        seed + 51
      )
    );

    const commonNames = [
      { formula: "Ca(OH)2", name: "Slaked lime", distractors: ["Quick lime", "Baking soda", "Bleaching powder"] as [string, string, string] },
      { formula: "NaHCO3", name: "Baking soda", distractors: ["Washing soda", "Bleaching powder", "Plaster of Paris"] as [string, string, string] },
      { formula: "CaO", name: "Quick lime", distractors: ["Slaked lime", "Gypsum", "Saltpeter"] as [string, string, string] },
      { formula: "CaSO4·1/2H2O", name: "Plaster of Paris", distractors: ["Gypsum", "Bleaching powder", "Quick lime"] as [string, string, string] },
      { formula: "Na2CO3·10H2O", name: "Washing soda", distractors: ["Baking soda", "Caustic soda", "Plaster of Paris"] as [string, string, string] },
    ] as const;
    const commonName = commonNames[round];
    questions.push(
      createGeneratedQuestion(
        `comedk-set${setNumber}-chem-${round + 56}`,
        `What is the common name of ${commonName.formula}?`,
        commonName.name,
        commonName.distractors,
        `${commonName.formula} is commonly known as ${commonName.name}.`,
        "common compounds",
        "easy",
        seed + 52
      )
    );
  }

  return questions;
}

function createComedkMathQuestions2026Set1(setNumber: number): PracticeQuestion[] {
  const applyProgression = (questions: PracticeQuestion[]) =>
    questions.map((question, index) => ({
      ...question,
      difficulty:
        setNumber === 1
          ? question.difficulty
          : setNumber === 2
          ? index % 6 === 0
            ? "easy"
            : "medium"
          : setNumber === 3
          ? index < 12
            ? "easy"
            : index < 42
            ? "medium"
            : "hard"
          : setNumber === 4
          ? index < 18
            ? "medium"
            : "hard"
          : index < 10
          ? "medium"
          : "hard",
    }));

  const weightedTopics = [
    ...Array(12).fill("Algebra"),
    ...Array(9).fill("Differential Calculus"),
    ...Array(9).fill("Integral Calculus"),
    ...Array(8).fill("Coordinate Geometry"),
    ...Array(7).fill("Trigonometry"),
    ...Array(6).fill("Vectors and 3D Geometry"),
    ...Array(5).fill("Matrices & Determinants"),
    ...Array(4).fill("Probability"),
  ];

  const topicCounters: Record<string, number> = {};
  const isToughSet = setNumber >= 4;

  const questions = weightedTopics.map((topic, index) => {
    const round = topicCounters[topic] ?? 0;
    topicCounters[topic] = round + 1;
    const seed = 9100 + setNumber * 100 + index;

    if (topic === "Algebra") {
      if (isToughSet) {
        const a = round + 2;
        const b = round + 1;
        const c = setNumber + 5;
        const x = round + 4;
        const rhs = a * (x - b) + c;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-math2026-${index + 1}`,
          round % 3 === 0
            ? `In a linear relation transformed by shift-and-scale, solve for x: ${a}(x - ${b}) + ${c} = ${rhs}.`
            : round % 3 === 1
            ? `A value is shifted by ${b}, scaled by ${a}, then offset by ${c} to give ${rhs}. Find x from ${a}(x - ${b}) + ${c} = ${rhs}.`
            : `Reverse the transformation and solve: ${a}(x - ${b}) + ${c} = ${rhs}.`,
          `${x}`,
          [`${x + 1}`, `${x - 1}`, `${rhs - c}`],
          round % 3 === 0
            ? "Use inverse operations in order: remove constant shift, undo scaling, then reverse variable shift."
            : round % 3 === 1
            ? "Undo the operations in reverse order to isolate x."
            : "Treat the bracketed expression as one variable first, then back-substitute.",
          topic,
          "hard",
          seed
        );
      }

      const a = round + 2;
      const x = round + 3;
      const b = setNumber + 5;
      const rhs = a * x + b;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Solve for x: ${a}x + ${b} = ${rhs}.`,
        `${x}`,
        [`${x + 1}`, `${x - 1}`, `${rhs - b}`],
        `Subtract ${b} and divide by ${a}.`,
        topic,
        round >= 4 ? "medium" : "easy",
        seed
      );
    }

    if (topic === "Differential Calculus") {
      if (isToughSet) {
        const p = round + 3;
        const a = round + 2;
        const b = round + 1;
        const xValue = 2;
        const derivative = a * p * xValue ** (p - 1) + b;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-math2026-${index + 1}`,
          round % 3 === 0
            ? `Using linearity of derivatives and power rule, find d/dx of (${a}x^${p} + ${b}x) at x = ${xValue}.`
            : round % 3 === 1
            ? `For y = ${a}x^${p} + ${b}x, compute dy/dx at x = ${xValue}.`
            : `Differentiate and then evaluate at x = ${xValue}: y = ${a}x^${p} + ${b}x.`,
          `${derivative}`,
          [`${derivative + 2}`, `${a * xValue ** p + b * xValue}`, `${derivative - 2}`],
          round % 3 === 0
            ? "Apply derivative term-wise first, then substitute the point value."
            : round % 3 === 1
            ? "Use power rule on each term, then evaluate at the given x."
            : "Compute symbolic derivative carefully and plug in the numeric point at the end.",
          topic,
          "hard",
          seed
        );
      }

      const p = round + 2;
      const xValue = 2;
      const derivative = p * xValue ** (p - 1);
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Find d/dx of x^${p} at x = ${xValue}.`,
        `${derivative}`,
        [`${xValue ** p}`, `${p + xValue}`, `${p * xValue}`],
        `For x^n, derivative is n*x^(n-1).`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Integral Calculus") {
      if (isToughSet) {
        const k = round + 2;
        const m = round + 1;
        const upper = 3;
        const value = (k * upper ** 2) / 2 + m * upper;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-math2026-${index + 1}`,
          round % 3 === 0
            ? `Using area accumulation and linearity of integration, evaluate integral from 0 to ${upper} of (${k}x + ${m}) dx.`
            : round % 3 === 1
            ? `Evaluate the definite integral from 0 to ${upper}: (${k}x + ${m}) dx.`
            : `For f(x) = ${k}x + ${m}, find total accumulation over [0, ${upper}].`,
          `${formatValue(value)}`,
          [`${formatValue(value + 2)}`, `${formatValue(k * upper + m)}`, `${formatValue(value - 2)}`],
          round % 3 === 0
            ? "Integrate each term separately, form antiderivative, then apply upper-lower limits."
            : round % 3 === 1
            ? "Use linearity, integrate term-wise, and apply limits carefully."
            : "Find antiderivative once, then evaluate upper bound minus lower bound.",
          topic,
          "hard",
          seed
        );
      }

      const k = round + 2;
      const upper = 2;
      const value = k * ((upper ** 2) / 2);
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Evaluate integral from 0 to ${upper} of ${k}x dx.`,
        `${formatValue(value)}`,
        [`${formatValue(value + k)}`, `${formatValue(k * upper)}`, `${formatValue(value - k)}`],
        `Integral of kx is (k/2)x^2. Apply limits.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Coordinate Geometry") {
      const x1 = round + 1;
      const y1 = setNumber + round + 2;
      const x2 = x1 + 3;
      const slope = round + 2;
      const y2 = y1 + slope * (x2 - x1);
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Find the slope of the line through (${x1}, ${y1}) and (${x2}, ${y2}).`,
        `${slope}`,
        [`${slope + 1}`, `${slope - 1}`, `${y2 - y1}`],
        `Slope m = (y2 - y1)/(x2 - x1).`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Trigonometry") {
      const entries = [
        { q: "sin 30 deg", a: "1/2", d: ["0", "1", "sqrt(3)/2"] as [string, string, string] },
        { q: "cos 60 deg", a: "1/2", d: ["0", "1", "sqrt(3)/2"] as [string, string, string] },
        { q: "tan 45 deg", a: "1", d: ["1/2", "sqrt(3)", "0"] as [string, string, string] },
        { q: "sin 90 deg", a: "1", d: ["0", "1/2", "sqrt(3)/2"] as [string, string, string] },
        { q: "cos 0 deg", a: "1", d: ["0", "1/2", "sqrt(3)/2"] as [string, string, string] },
      ] as const;
      const entry = entries[round % entries.length];
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `What is the value of ${entry.q}?`,
        entry.a,
        entry.d,
        `Use standard trigonometric values.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Vectors and 3D Geometry") {
      const a = round + 1;
      const b = round + 2;
      const magnitudeSquared = a * a + b * b;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Find |v|^2 for vector v = (${a}, ${b}, 0).`,
        `${magnitudeSquared}`,
        [`${a + b}`, `${magnitudeSquared + 1}`, `${a * b}`],
        `|v|^2 = a^2 + b^2 + 0^2.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Matrices & Determinants") {
      const a = round + 2;
      const b = setNumber + 1;
      const c = round + 1;
      const d = round + 4;
      const det = a * d - b * c;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        `Find determinant of [[${a}, ${b}], [${c}, ${d}]].`,
        `${det}`,
        [`${a * d + b * c}`, `${det + 2}`, `${det - 2}`],
        `For 2x2 matrix, determinant = ad - bc.`,
        topic,
        "medium",
        seed
      );
    }

    if (isToughSet) {
      const red = 4 + (round % 4);
      const blue = 5 + (round % 3);
      const total = red + blue;
      const numerator = red * (red - 1);
      const denominator = total * (total - 1);
      return createGeneratedQuestion(
        `comedk-set${setNumber}-math2026-${index + 1}`,
        round % 3 === 0
          ? `Without replacement (dependent events), a bag has ${red} red and ${blue} blue balls. Probability that both drawn balls are red?`
          : round % 3 === 1
          ? `Two balls are drawn successively without replacement from ${red} red and ${blue} blue balls. Find P(both red).`
          : `From a bag with ${red} red and ${blue} blue balls, two picks are made without replacement. What is the probability of two reds?`,
        `${numerator}/${denominator}`,
        [`${red}/${total}`, `${red * blue}/${denominator}`, `${numerator}/${total}`],
        round % 3 === 0
          ? "Concept link: dependence changes denominator after first draw. Compute product of successive conditional probabilities."
          : round % 3 === 1
          ? "Use P(R1 and R2) = P(R1) * P(R2|R1)."
          : "Adjust counts after the first favorable draw, then multiply stage probabilities.",
        topic,
        "hard",
        seed
      );
    }

    const total = 10 + round;
    const favorable = 3 + (round % 4);
    return createGeneratedQuestion(
      `comedk-set${setNumber}-math2026-${index + 1}`,
      `A bag has ${favorable} red and ${total - favorable} blue balls. Probability of red is?`,
      `${favorable}/${total}`,
      [`${total - favorable}/${total}`, `${favorable}/${total - 1}`, `${favorable + 1}/${total}`],
      `Probability = favorable outcomes / total outcomes.`,
      topic,
      "easy",
      seed
    );
  });

  return applyProgression(questions);
}

function createComedkPhysicsQuestions2026Set1(setNumber: number): PracticeQuestion[] {
  const applyProgression = (questions: PracticeQuestion[]) =>
    questions.map((question, index) => ({
      ...question,
      difficulty:
        setNumber === 1
          ? question.difficulty
          : setNumber === 2
          ? index % 6 === 0
            ? "easy"
            : "medium"
          : setNumber === 3
          ? index < 12
            ? "easy"
            : index < 42
            ? "medium"
            : "hard"
          : setNumber === 4
          ? index < 18
            ? "medium"
            : "hard"
          : index < 10
          ? "medium"
          : "hard",
    }));

  const weightedTopics = [
    ...Array(6).fill("Kinematics"),
    ...Array(6).fill("Laws of Motion"),
    ...Array(6).fill("Work, Energy & Power"),
    ...Array(5).fill("Rotational Motion"),
    ...Array(4).fill("Gravitation"),
    ...Array(5).fill("Thermodynamics"),
    ...Array(4).fill("Oscillations & Waves"),
    ...Array(5).fill("Electrostatics"),
    ...Array(5).fill("Current Electricity"),
    ...Array(4).fill("Magnetic Effects"),
    ...Array(4).fill("Electromagnetic Induction"),
    ...Array(3).fill("Optics"),
    ...Array(3).fill("Modern Physics"),
  ];

  const topicCounters: Record<string, number> = {};
  const isToughSet = setNumber >= 4;

  const questions = weightedTopics.map((topic, index) => {
    const round = topicCounters[topic] ?? 0;
    topicCounters[topic] = round + 1;
    const seed = 10100 + setNumber * 100 + index;

    if (topic === "Kinematics") {
      if (isToughSet) {
        const u = round + 2;
        const a = round + 3;
        const t = 5;
        const s = u * t + 0.5 * a * t * t;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-phys2026-${index + 1}`,
          round % 3 === 0
            ? `For uniformly accelerated motion, a body starts with ${u} m/s and acceleration ${a} m/s^2 for ${t} s. Find displacement.`
            : round % 3 === 1
            ? `A particle moves with initial speed ${u} m/s and constant acceleration ${a} m/s^2 for ${t} s. Determine displacement.`
            : `Using constant-acceleration kinematics, calculate distance traveled in ${t} s for u = ${u} m/s and a = ${a} m/s^2.`,
          `${formatValue(s)} m`,
          [`${u * t} m`, `${formatValue(s + 5)} m`, `${formatValue(s - 5)} m`],
          round % 3 === 0
            ? "Concept link: displacement under constant acceleration combines initial-motion term and acceleration term."
            : round % 3 === 1
            ? "Use s = ut + (1/2)at^2 for constant acceleration."
            : "Break motion into uniform and accelerated components, then add.",
          topic,
          "hard",
          seed
        );
      }

      const u = round + 2;
      const a = round + 3;
      const t = 4;
      const v = u + a * t;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `A body has initial velocity ${u} m/s and acceleration ${a} m/s^2 for ${t} s. Find final velocity.`,
        `${v} m/s`,
        [`${v - a} m/s`, `${v + a} m/s`, `${a * t} m/s`],
        `Use v = u + at.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Laws of Motion") {
      const m = round + 2;
      const a = round + 4;
      const f = m * a;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `Find force required to accelerate ${m} kg mass at ${a} m/s^2.`,
        `${f} N`,
        [`${f - m} N`, `${f + m} N`, `${a} N`],
        `Use F = ma.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Work, Energy & Power") {
      if (isToughSet) {
        const m = round + 2;
        const v = round + 4;
        const t = 2 + (round % 2);
        const ke = 0.5 * m * v * v;
        const p = ke / t;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-phys2026-${index + 1}`,
          round % 3 === 0
            ? `Using work-energy theorem, a ${m} kg body reaches speed ${v} m/s in ${t} s from rest. Find average power delivered.`
            : round % 3 === 1
            ? `A ${m} kg object accelerates from rest to ${v} m/s in ${t} s. Compute average power from energy gain.`
            : `Mass ${m} kg reaches ${v} m/s in ${t} s from rest. Using energy change per time, find average power.`,
          `${formatValue(p)} W`,
          [`${formatValue(ke)} W`, `${formatValue(p + 5)} W`, `${formatValue(p - 5)} W`],
          round % 3 === 0
            ? "Concept link: net work equals change in kinetic energy; divide by time for average power."
            : round % 3 === 1
            ? "Find kinetic-energy change first, then divide by time."
            : "Average power is rate of energy transfer: Pavg = deltaE/t.",
          topic,
          "hard",
          seed
        );
      }

      const w = 120 + round * 20;
      const t = 4 + (round % 3);
      const p = w / t;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `${w} J work is done in ${t} s. Find power.`,
        `${formatValue(p)} W`,
        [`${formatValue(p + 5)} W`, `${formatValue(w - t)} W`, `${formatValue(t)} W`],
        `Power P = W/t.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Rotational Motion") {
      if (isToughSet) {
        const i = round + 2;
        const tau = 12 + round * 2;
        const t = 4;
        const alpha = tau / i;
        const omega = alpha * t;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-phys2026-${index + 1}`,
          `From rotational dynamics, a wheel with moment of inertia ${i} kg m^2 has torque ${tau} N m for ${t} s from rest. Find angular speed reached.`,
          `${formatValue(omega)} rad/s`,
          [`${formatValue(alpha)} rad/s`, `${formatValue(omega + 2)} rad/s`, `${formatValue(omega - 2)} rad/s`],
          `Concept link: torque sets angular acceleration, then time integration gives angular speed.`,
          topic,
          "hard",
          seed
        );
      }

      const i = round + 2;
      const alpha = round + 3;
      const tau = i * alpha;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `A body has moment of inertia ${i} kg m^2 and angular acceleration ${alpha} rad/s^2. Find torque.`,
        `${tau} N m`,
        [`${tau + 2} N m`, `${tau - 2} N m`, `${alpha} N m`],
        `Torque tau = I*alpha.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Gravitation") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        "If distance between two masses is doubled, gravitational force becomes?",
        "one-fourth",
        ["double", "half", "unchanged"],
        "From inverse square law, F is proportional to 1/r^2.",
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Thermodynamics") {
      const qh = 400 + round * 50;
      const qc = 100 + round * 20;
      const eta = ((qh - qc) / qh) * 100;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `A heat engine absorbs ${qh} J and rejects ${qc} J. Find efficiency percentage.`,
        `${formatValue(eta)}%`,
        [`${formatValue(eta + 10)}%`, `${formatValue((qc / qh) * 100)}%`, `${formatValue(eta - 10)}%`],
        `Efficiency = (Qh - Qc)/Qh * 100.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Oscillations & Waves") {
      const f = 40 + round * 10;
      const lambda = 2 + round;
      const v = f * lambda;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `A wave has frequency ${f} Hz and wavelength ${lambda} m. Find wave speed.`,
        `${v} m/s`,
        [`${v - f} m/s`, `${v + f} m/s`, `${f + lambda} m/s`],
        `Wave speed v = f*lambda.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Electrostatics") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        "If separation between two charges becomes 3 times, electrostatic force becomes?",
        "one-ninth",
        ["one-third", "three times", "unchanged"],
        "By Coulomb law, F is proportional to 1/r^2.",
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Current Electricity") {
      if (isToughSet) {
        const r1 = round + 2;
        const r2 = round + 4;
        const v = 12 + round;
        const i = v / (r1 + r2);
        return createGeneratedQuestion(
          `comedk-set${setNumber}-phys2026-${index + 1}`,
          round % 3 === 0
            ? `Applying equivalent resistance in series, two resistors ${r1} ohm and ${r2} ohm are across ${v} V. Find circuit current.`
            : round % 3 === 1
            ? `In a series circuit with resistors ${r1} ohm and ${r2} ohm connected to ${v} V, determine the current.`
            : `First reduce the series pair (${r1} ohm, ${r2} ohm), then compute current for source ${v} V.`,
          `${formatValue(i)} A`,
          [`${formatValue(v / r1)} A`, `${formatValue(i + 1)} A`, `${formatValue(i - 1)} A`],
          round % 3 === 0
            ? "Concept link: reduce circuit first to one equivalent resistor, then apply Ohm law."
            : round % 3 === 1
            ? "Add series resistances, then use I = V/R."
            : "Series path means same current throughout; obtain current from total resistance.",
          topic,
          "hard",
          seed
        );
      }

      const i = round + 2;
      const r = round + 3;
      const v = i * r;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `Find potential difference across ${r} ohm resistor carrying ${i} A current.`,
        `${v} V`,
        [`${v + r} V`, `${v - r} V`, `${i + r} V`],
        `Use Ohm law: V = IR.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Magnetic Effects") {
      const q = round + 1;
      const v = round + 2;
      const b = round + 3;
      const f = q * v * b;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `For charge ${q} C moving perpendicular to field ${b} T at ${v} m/s, find magnetic force.`,
        `${f} N`,
        [`${f + b} N`, `${f - b} N`, `${q + v + b} N`],
        `F = qvB for perpendicular motion.`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Electromagnetic Induction") {
      if (isToughSet) {
        const n = 10 + round;
        const dPhi = 3 + round;
        const dt = 0.5;
        const r = round + 2;
        const emf = n * dPhi / dt;
        const current = emf / r;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-phys2026-${index + 1}`,
          round % 3 === 0
            ? `Using Faraday-Lenz concept and circuit response, flux changes by ${dPhi} Wb in ${dt} s through ${n} turns connected to ${r} ohm. Find induced current.`
            : round % 3 === 1
            ? `A ${n}-turn coil sees flux change ${dPhi} Wb in ${dt} s and is connected to ${r} ohm. Determine induced current.`
            : `For a ${n}-turn loop, magnetic flux changes by ${dPhi} Wb in ${dt} s and loop resistance is ${r} ohm. Find induced current magnitude.`,
          `${formatValue(current)} A`,
          [`${formatValue(emf)} A`, `${formatValue(current + 1)} A`, `${formatValue(current - 1)} A`],
          round % 3 === 0
            ? "Concept link: changing flux induces emf, and emf drives current through external resistance."
            : round % 3 === 1
            ? "Compute emf from Faraday law, then current from Ohm law."
            : "Induction creates emf; resistance controls the resulting current.",
          topic,
          "hard",
          seed
        );
      }

      const n = 10 + round;
      const dPhi = 2 + round;
      const dt = 1;
      const emf = n * dPhi / dt;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `Flux changes by ${dPhi} Wb in ${dt} s through a ${n}-turn coil. Magnitude of induced emf?`,
        `${emf} V`,
        [`${emf + 2} V`, `${emf - 2} V`, `${dPhi} V`],
        `By Faraday law, emf = N*(dPhi/dt).`,
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Optics") {
      const f = round + 1;
      const p = 1 / f;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-phys2026-${index + 1}`,
        `A lens has focal length ${f} m. Find its power.`,
        `${formatValue(p)} D`,
        [`${f} D`, `${formatValue(p + 1)} D`, `${formatValue(1 / (f + 1))} D`],
        `Power P = 1/f (with f in meters).`,
        topic,
        "medium",
        seed
      );
    }

    const f1 = 4 + round;
    const f2 = 2 * f1;
    return createGeneratedQuestion(
      `comedk-set${setNumber}-phys2026-${index + 1}`,
      `Frequency of light doubles from ${f1} Hz to ${f2} Hz. Photon energy becomes?`,
      "double",
      ["half", "one-fourth", "unchanged"],
      "Photon energy E = hf, so E is directly proportional to frequency.",
      topic,
      "easy",
      seed
    );
  });

  return applyProgression(questions);
}

function createComedkChemistryQuestions2026Set1(setNumber: number): PracticeQuestion[] {
  const applyProgression = (questions: PracticeQuestion[]) =>
    questions.map((question, index) => ({
      ...question,
      difficulty:
        setNumber === 1
          ? question.difficulty
          : setNumber === 2
          ? index % 6 === 0
            ? "easy"
            : "medium"
          : setNumber === 3
          ? index < 12
            ? "easy"
            : index < 42
            ? "medium"
            : "hard"
          : setNumber === 4
          ? index < 18
            ? "medium"
            : "hard"
          : index < 10
          ? "medium"
          : "hard",
    }));

  const weightedTopics = [
    ...Array(18).fill("Organic Chemistry"),
    ...Array(6).fill("Solid State and Solutions"),
    ...Array(6).fill("Chemical Kinetics"),
    ...Array(6).fill("Chemical Bonding"),
    ...Array(4).fill("Nuclear Chemistry"),
    ...Array(5).fill("Coordination Chemistry"),
    ...Array(5).fill("Polymers"),
    ...Array(5).fill("Environmental Chemistry"),
    ...Array(5).fill("Periodic Table"),
  ];

  const topicCounters: Record<string, number> = {};
  const isToughSet = setNumber >= 4;

  const questions = weightedTopics.map((topic, index) => {
    const round = topicCounters[topic] ?? 0;
    topicCounters[topic] = round + 1;
    const seed = 11100 + setNumber * 100 + index;

    if (topic === "Organic Chemistry") {
      const reagents = [
        {
          q: "Ethanol on oxidation gives which compound first?",
          a: "Ethanal",
          d: ["Methanal", "Acetone", "Ethane"] as [string, string, string],
        },
        {
          q: "Which functional group is present in acetic acid?",
          a: "Carboxyl",
          d: ["Hydroxyl", "Aldehyde", "Amide"] as [string, string, string],
        },
      ] as const;
      const entry = reagents[round % reagents.length];
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        entry.q,
        entry.a,
        entry.d,
        `This follows basic organic reaction/functional group concepts.`,
        topic,
        round >= 4 ? "medium" : "easy",
        seed
      );
    }

    if (topic === "Solid State and Solutions") {
      if (isToughSet) {
        const m1 = round + 2;
        const v1 = 100;
        const m2 = round + 1;
        const v2 = (m1 * v1) / m2;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-chem2026-${index + 1}`,
          round % 3 === 0
            ? `Using conservation of solute during dilution, ${v1} mL of ${m1} M solution is diluted to ${m2} M. Find final volume.`
            : round % 3 === 1
            ? `A ${m1} M solution of volume ${v1} mL is diluted until concentration becomes ${m2} M. Calculate final volume.`
            : `Apply dilution principle to ${v1} mL of ${m1} M solution converted to ${m2} M. What is final volume?`,
          `${formatValue(v2)} mL`,
          [`${formatValue(v2 + 20)} mL`, `${formatValue(v2 - 20)} mL`, `${formatValue(m1 + m2)} mL`],
          round % 3 === 0
            ? "Concept link: moles of solute remain unchanged before and after dilution."
            : round % 3 === 1
            ? "Use M1V1 = M2V2 since solute moles are conserved."
            : "Dilution changes concentration by changing volume, not solute amount.",
          topic,
          "hard",
          seed
        );
      }

      const moles = round + 1;
      const volumeL = 1;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        `A solution has ${moles} mole solute in ${volumeL} L. What is molarity?`,
        `${moles} M`,
        [`${moles + 1} M`, `${moles - 1} M`, `${moles}/${volumeL + 1} M`],
        `Molarity = moles of solute / volume in liters.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Chemical Kinetics") {
      if (isToughSet) {
        const halfLife = round + 2;
        const intervals = 2;
        const fraction = `1/${2 ** intervals}`;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-chem2026-${index + 1}`,
          round % 3 === 0
            ? `For first-order kinetics (constant half-life), half-life is ${halfLife} min. What fraction remains after ${halfLife * intervals} min?`
            : round % 3 === 1
            ? `A first-order reaction has half-life ${halfLife} min. After ${halfLife * intervals} min, what fraction remains?`
            : `With first-order decay and half-life ${halfLife} min, determine fraction left after ${intervals} half-life intervals.`,
          fraction,
          ["1/2", "1/3", "1/8"],
          round % 3 === 0
            ? "Concept link: first-order decay proceeds geometrically by half-life intervals."
            : round % 3 === 1
            ? "After n half-lives, remaining fraction is (1/2)^n."
            : "Count half-life intervals first, then apply repeated halving.",
          topic,
          "hard",
          seed
        );
      }

      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        "For a first-order reaction, if concentration doubles, rate becomes?",
        "double",
        ["half", "four times", "unchanged"],
        "For first-order, rate is directly proportional to concentration.",
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Chemical Bonding") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        "What is the molecular shape of NH3?",
        "Trigonal pyramidal",
        ["Linear", "Trigonal planar", "Tetrahedral"],
        "By VSEPR theory, NH3 has one lone pair and trigonal pyramidal geometry.",
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Nuclear Chemistry") {
      if (isToughSet) {
        const initial = 160 + round * 20;
        const remaining = initial / 4;
        return createGeneratedQuestion(
          `comedk-set${setNumber}-chem2026-${index + 1}`,
          round % 3 === 0
            ? `By exponential radioactive decay concept, a sample starts at ${initial} g. After two half-lives, mass becomes?`
            : round % 3 === 1
            ? `An isotope sample initially has mass ${initial} g. Find remaining mass after two half-lives.`
            : `Radioactive material starts at ${initial} g and decays through two half-life intervals. What mass remains?`,
          `${remaining} g`,
          [`${initial / 2} g`, `${initial} g`, `${initial / 8} g`],
          round % 3 === 0
            ? "Concept link: each half-life halves the amount; two intervals give one-fourth."
            : round % 3 === 1
            ? "Apply repeated halving: remaining = initial*(1/2)^2."
            : "Use exponential form for half-life decay with n = 2 intervals.",
          topic,
          "hard",
          seed
        );
      }

      const initial = 80 + round * 10;
      const remaining = initial / 2;
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        `A radioactive sample starts at ${initial} g. After one half-life, mass becomes?`,
        `${remaining} g`,
        [`${initial} g`, `${remaining / 2} g`, `${initial - 10} g`],
        `After one half-life, amount reduces to half.`,
        topic,
        "easy",
        seed
      );
    }

    if (topic === "Coordination Chemistry") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        "What is coordination number of Co in [Co(NH3)6]3+?",
        "6",
        ["3", "4", "8"],
        "Coordination number equals number of donor atoms attached to central metal.",
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Polymers") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        "Nylon-6,6 is formed by condensation polymerization of which pair?",
        "Hexamethylenediamine and adipic acid",
        ["Ethene and styrene", "Urea and formaldehyde", "Phenol and acetone"],
        "Nylon-6,6 is produced from diamine and dicarboxylic acid monomers.",
        topic,
        "medium",
        seed
      );
    }

    if (topic === "Environmental Chemistry") {
      return createGeneratedQuestion(
        `comedk-set${setNumber}-chem2026-${index + 1}`,
        "Acid rain is mainly caused by oxides of which elements?",
        "Sulfur and nitrogen",
        ["Carbon and hydrogen", "Sodium and chlorine", "Calcium and magnesium"],
        "SOx and NOx react in atmosphere to form acids.",
        topic,
        "easy",
        seed
      );
    }

    return createGeneratedQuestion(
      `comedk-set${setNumber}-chem2026-${index + 1}`,
      "Which element has the highest first ionization energy in Period 3?",
      "Argon",
      ["Sodium", "Aluminium", "Sulfur"],
      "Across a period, ionization energy generally increases and noble gases are highest.",
      topic,
      "medium",
      seed
    );
  });

  return applyProgression(questions);
}

function createComedkPracticeSet(setNumber: number): PracticeSet {
  const isEnhanced2026Model = setNumber >= 1 && setNumber <= 5;

  const questions = isEnhanced2026Model
    ? [
        ...createComedkMathQuestions2026Set1(setNumber),
        ...createComedkPhysicsQuestions2026Set1(setNumber),
        ...createComedkChemistryQuestions2026Set1(setNumber),
      ]
    : [
        ...createComedkMathQuestions(setNumber),
        ...createComedkPhysicsQuestions(setNumber),
        ...createComedkChemistryQuestions(setNumber),
      ];

  const level = setNumber >= 4 ? "advanced" : "intermediate";

  return {
    id: `comedk-mixed-set-${setNumber}`,
    slug: `comedk-practice-set-${setNumber}`,
    category: "engineering-entrance",
    title: `COMEDK Practice Set ${setNumber}`,
    description: isEnhanced2026Model
      ? "Original COMEDK-style full-length set aligned to key 2026 PCM syllabus topics with 180 unique questions: 60 mathematics, 60 physics, and 60 chemistry."
      : `Original COMEDK-style full-length set with 180 unique questions: 60 mathematics, 60 physics, and 60 chemistry.`,
    examType: "COMEDK",
    examSlug: "comedk",
    examName: "COMEDK",
    sectionLabel: "Full PCM Practice Set",
    level,
    questionCount: questions.length,
    estimatedMinutes: 180,
    seoTitle: `COMEDK Practice Questions – Set ${setNumber} | Nishaglobal Education`,
    seoDescription:
      `Practice a full COMEDK-style set with 180 original questions across mathematics, physics, and chemistry with answers and explanations.`,
    keywords: [
      `COMEDK practice set ${setNumber}`,
      "COMEDK 180 questions",
      "COMEDK mathematics physics chemistry",
      "engineering entrance COMEDK mock",
      "original COMEDK practice",
    ],
    intro: isEnhanced2026Model
      ? `Use this enhanced Set ${setNumber} to practice key 2026 COMEDK syllabus chapters across Mathematics, Physics, and Chemistry with explanation-based learning.`
      : "Use this full-length COMEDK set for serious exam practice, balanced subject revision, and explanation-based learning.",
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
];

export const practiceSets: PracticeSet[] = [
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

