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
  title: string;
  description: string;
  examType: string;
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
  isLive?: boolean;
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

export const practiceCategories: PracticeCategoryMeta[] = [
  {
    slug: "ielts",
    title: "IELTS Practice Tests",
    shortTitle: "IELTS",
    description:
      "Free IELTS practice sets with answers and explanations for grammar, vocabulary, reading, sentence correction, and academic English basics.",
    heroTitle: "IELTS Practice Tests with Answers and Explanations",
    heroText:
      "Use these English-only IELTS practice sets to build grammar accuracy, reading confidence, and vocabulary step by step.",
    ctaHref: "/study-abroad",
    ctaLabel: "Explore Study Abroad Guidance",
  },
  {
    slug: "engineering-entrance",
    title: "Engineering Entrance Practice Tests",
    shortTitle: "Engineering Entrance",
    description:
      "Free engineering entrance practice sets covering math, physics, chemistry, logical reasoning, and beginner aptitude.",
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
      "Free CTET practice sets with answers and explanations in English and Hindi for Child Development and Pedagogy, Languages, Mathematics, Science, and Social Studies.",
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
      "Free SSC practice sets with answers and explanations in English and Hindi covering Reasoning, Quantitative Aptitude, English, and General Awareness.",
    heroTitle: "SSC Practice Tests with Bilingual Support",
    heroText:
      "Practice SSC exam questions in English and Hindi with instant scoring and explanations for government job aspirants.",
    ctaHref: "/practice-tests/ssc",
    ctaLabel: "Start SSC Practice",
  },
  {
    slug: "railway",
    title: "Railway Practice Tests",
    shortTitle: "Railway",
    description:
      "Free Railway exam practice sets with answers and explanations in English and Hindi covering Mathematics, Reasoning, Science, and General Knowledge.",
    heroTitle: "Railway Practice Tests with Bilingual Support",
    heroText:
      "Practice Railway recruitment questions in English and Hindi with instant scoring and explanations for railway job aspirants.",
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
    description: "Free CTET practice sets with answers and explanations in English and Hindi for Child Development and Pedagogy, Languages, Mathematics, Science, and Social Studies.",
    descriptionHi: "बच्चों के विकास और शिक्षाशास्त्र, भाषाएं, गणित, विज्ञान और सामाजिक अध्ययन के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क CTET अभ्यास सेट।",
    audience: ["Aspiring teachers", "CTET candidates", "Education students"],
    chapters: [
      { name: "Child Development and Pedagogy", hi: "बच्चों का विकास और शिक्षाशास्त्र" },
      { name: "Language I (English)", hi: "भाषा I (अंग्रेजी)" },
      { name: "Language II (Hindi)", hi: "भाषा II (हिंदी)" },
      { name: "Mathematics", hi: "गणित" },
      { name: "Environmental Studies", hi: "पर्यावरण अध्ययन" },
    ],
    sets: [
      {
        slug: "cdp-set-1",
        title: "Child Development and Pedagogy Set 1",
        titleHi: "बच्चों के विकास और शिक्षाशास्त्र सेट 1",
        chapter: "Child Development and Pedagogy",
        chapterHi: "बच्चों का विकास और शिक्षाशास्त्र",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          createGovQuestion(
            "ctet-cdp-1",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "According to Piaget, children in the concrete operational stage can perform which of the following?",
            "पियाजेट के अनुसार, ठोस संक्रियात्मक चरण में बच्चे निम्नलिखित में से कौन सा कर सकते हैं?",
            [
              "Conservation tasks",
              "Abstract thinking",
              "Symbolic play",
              "Egocentric thinking",
              "संरक्षण कार्य",
              "अमूर्त सोच",
              "प्रतीकात्मक खेल",
              "अहंकेन्द्रित सोच",
            ],
            "A",
            "Children in concrete operational stage (7-11 years) can perform conservation tasks, understanding that quantity remains the same despite changes in shape.",
            "ठोस संक्रियात्मक चरण (7-11 साल) में बच्चे संरक्षण कार्य कर सकते हैं, यह समझते हुए कि मात्रा आकार में बदलाव के बावजूद समान रहती है।"
          ),
          // Add 9 more questions
          createGovQuestion(
            "ctet-cdp-2",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which theory emphasizes the role of social interaction in cognitive development?",
            "कौन सी सिद्धांत संज्ञानात्मक विकास में सामाजिक संपर्क की भूमिका पर जोर देती है?",
            [
              "Behaviorism",
              "Constructivism",
              "Socio-cultural theory",
              "Maturation theory",
              "व्यवहारवाद",
              "रचनावाद",
              "सामाजिक-सांस्कृतिक सिद्धांत",
              "परिपक्वता सिद्धांत",
            ],
            "C",
            "Vygotsky's socio-cultural theory emphasizes that cognitive development occurs through social interactions and cultural tools.",
            "वाइगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत पर जोर देता है कि संज्ञानात्मक विकास सामाजिक संपर्क और सांस्कृतिक उपकरणों के माध्यम से होता है।"
          ),
          // I'll add more later, for now placeholder
          createGovQuestion(
            "ctet-cdp-3",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What is the term for a child's ability to understand that others have different perspectives?",
            "एक बच्चे की क्षमता को समझने के लिए क्या शब्द है कि दूसरों के पास अलग दृष्टिकोण हैं?",
            [
              "Empathy",
              "Theory of mind",
              "Emotional intelligence",
              "Social cognition",
              "सहानुभूति",
              "मन की सिद्धांत",
              "भावनात्मक बुद्धिमत्ता",
              "सामाजिक संज्ञान",
            ],
            "B",
            "Theory of mind refers to the ability to understand that others have beliefs, desires, and intentions different from one's own.",
            "मन की सिद्धांत एक बच्चे की क्षमता को संदर्भित करता है कि दूसरों के पास अपनी से अलग विश्वास, इच्छाएं और इरादे हैं।"
          ),
          createGovQuestion(
            "ctet-cdp-4",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which of the following is a characteristic of play-based learning?",
            "निम्नलिखित में से कौन सी खेल-आधारित सीखने की विशेषता है?",
            [
              "Memorization of facts",
              "Structured drills",
              "Exploration and discovery",
              "Competitive assessment",
              "तथ्यों का स्मरण",
              "संरचित अभ्यास",
              "अन्वेषण और खोज",
              "प्रतिस्पर्धी मूल्यांकन",
            ],
            "C",
            "Play-based learning encourages children to explore, experiment, and discover concepts through hands-on activities.",
            "खेल-आधारित सीखने से बच्चों को हाथों से गतिविधियों के माध्यम से अवधारणाओं का अन्वेषण, प्रयोग और खोज करने के लिए प्रोत्साहित किया जाता है।"
          ),
          createGovQuestion(
            "ctet-cdp-5",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What does 'scaffolding' in teaching refer to?",
            "'शिक्षण में 'स्कैफोल्डिंग' क्या संदर्भित करता है?",
            [
              "Providing physical support",
              "Temporary guidance to help learning",
              "Permanent classroom structure",
              "Assessment framework",
              "शारीरिक सहायता प्रदान करना",
              "सीखने में मदद के लिए अस्थायी मार्गदर्शन",
              "स्थायी कक्षा संरचना",
              "मूल्यांकन ढांचा",
            ],
            "B",
            "Scaffolding involves providing temporary support and guidance to help students achieve tasks they couldn't do alone.",
            "स्कैफोल्डिंग में अस्थायी सहायता और मार्गदर्शन प्रदान करना शामिल है ताकि छात्र उन कार्यों को प्राप्त कर सकें जिन्हें वे अकेले नहीं कर सकते।"
          ),
          createGovQuestion(
            "ctet-cdp-6",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which stage of development is characterized by the ability to use symbols?",
            "विकास के किस चरण की विशेषता प्रतीकों का उपयोग करने की क्षमता है?",
            [
              "Sensorimotor",
              "Preoperational",
              "Concrete operational",
              "Formal operational",
              "सेंसरिमोटर",
              "पूर्व संक्रियात्मक",
              "ठोस संक्रियात्मक",
              "औपचारिक संक्रियात्मक",
            ],
            "B",
            "In the preoperational stage (2-7 years), children begin to use symbols, language, and pretend play.",
            "पूर्व संक्रियात्मक चरण (2-7 साल) में, बच्चे प्रतीकों, भाषा और नकली खेल का उपयोग करना शुरू करते हैं।"
          ),
          createGovQuestion(
            "ctet-cdp-7",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What is the primary goal of inclusive education?",
            "समावेशी शिक्षा का प्राथमिक लक्ष्य क्या है?",
            [
              "Segregation of students",
              "Equal opportunities for all",
              "Specialized teaching only",
              "Competitive learning",
              "छात्रों का पृथक्करण",
              "सभी के लिए समान अवसर",
              "केवल विशेषीकृत शिक्षण",
              "प्रतिस्पर्धी सीखना",
            ],
            "B",
            "Inclusive education aims to provide equal educational opportunities to all students, regardless of their abilities or disabilities.",
            "समावेशी शिक्षा का उद्देश्य सभी छात्रों को उनकी क्षमताओं या विकलांगताओं की परवाह किए बिना समान शैक्षिक अवसर प्रदान करना है।"
          ),
          createGovQuestion(
            "ctet-cdp-8",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which learning theory is associated with operant conditioning?",
            "कौन सी सीखने की सिद्धांत ऑपरेंट कंडीशनिंग से जुड़ी है?",
            [
              "Piaget's theory",
              "Skinner's theory",
              "Vygotsky's theory",
              "Erikson's theory",
              "पियाजेट की सिद्धांत",
              "स्किनर की सिद्धांत",
              "वाइगोत्स्की की सिद्धांत",
              "एरिकसन की सिद्धांत",
            ],
            "B",
            "B.F. Skinner's operant conditioning theory explains learning through consequences of behavior.",
            "बी.एफ. स्किनर की ऑपरेंट कंडीशनिंग सिद्धांत व्यवहार के परिणामों के माध्यम से सीखने की व्याख्या करती है।"
          ),
          createGovQuestion(
            "ctet-cdp-9",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What is the term for learning that occurs through observation?",
            "अवलोकन के माध्यम से होने वाले सीखने के लिए क्या शब्द है?",
            [
              "Classical conditioning",
              "Operant conditioning",
              "Modeling",
              "Reinforcement",
              "क्लासिकल कंडीशनिंग",
              "ऑपरेंट कंडीशनिंग",
              "मॉडलिंग",
              "सुदृढीकरण",
            ],
            "C",
            "Modeling or observational learning occurs when individuals learn by watching others.",
            "मॉडलिंग या अवलोकनात्मक सीखना तब होता है जब व्यक्ति दूसरों को देखकर सीखते हैं।"
          ),
          createGovQuestion(
            "ctet-cdp-10",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which of the following is an example of divergent thinking?",
            "निम्नलिखित में से कौन सी विचलनात्मक सोच का उदाहरण है?",
            [
              "Memorizing multiplication tables",
              "Brainstorming ideas for a story",
              "Following step-by-step instructions",
              "Solving a math problem",
              "गुणा सारणी याद करना",
              "कहानी के लिए विचारों का तूफान",
              "चरण-दर-चरण निर्देशों का पालन करना",
              "गणित की समस्या हल करना",
            ],
            "B",
            "Divergent thinking involves generating multiple solutions or ideas, as in brainstorming.",
            "विचलनात्मक सोच में कई समाधान या विचार उत्पन्न करना शामिल है, जैसे कि विचारों का तूफान।"
          ),
        ],
      },
      {
        slug: "english-set-1",
        title: "English Language Set 1",
        titleHi: "अंग्रेजी भाषा सेट 1",
        chapter: "Language I (English)",
        chapterHi: "भाषा I (अंग्रेजी)",
        difficulty: "Easy",
        durationMin: 12,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          // Add 10 questions for English
          createGovQuestion(
            "ctet-eng-1",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the correct form of the verb: 'She _____ to school every day.'",
            "सही क्रिया रूप चुनें: 'वह हर दिन स्कूल _____।'",
            [
              "go",
              "goes",
              "going",
              "gone",
              "जाता है",
              "जाती है",
              "जा रहा है",
              "गया है",
            ],
            "B",
            "With 'she' as the subject, the verb 'go' takes 'es' in the present simple tense.",
            "'वह' विषय के साथ, क्रिया 'जाना' वर्तमान सरल काल में 'es' लेती है।"
          ),
          createGovQuestion(
            "ctet-eng-2",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Identify the noun in this sentence: 'The quick brown fox jumps over the lazy dog.'",
            "इस वाक्य में संज्ञा की पहचान करें: 'तेज भूरी लोमड़ी आलसी कुत्ते के ऊपर कूदती है।'",
            [
              "quick",
              "brown",
              "fox",
              "jumps",
              "तेज",
              "भूरी",
              "लोमड़ी",
              "कूदती है",
            ],
            "C",
            "'Fox' is a noun as it names a person, place, thing, or idea.",
            "'लोमड़ी' एक संज्ञा है क्योंकि यह व्यक्ति, स्थान, वस्तु या विचार का नाम देती है।"
          ),
          // Add more questions as needed
        ],
      },
      {
        slug: "maths-set-1",
        title: "Mathematics Set 1",
        titleHi: "गणित सेट 1",
        chapter: "Mathematics",
        chapterHi: "गणित",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [
          // Add 10 questions for Maths
          createGovQuestion(
            "ctet-math-1",
            "Mathematics",
            "गणित",
            "What is 15 + 27?",
            "15 + 27 क्या है?",
            [
              "32",
              "42",
              "52",
              "62",
              "32",
              "42",
              "52",
              "62",
            ],
            "B",
            "15 + 27 = 42",
            "15 + 27 = 42"
          ),
          createGovQuestion(
            "ctet-math-2",
            "Mathematics",
            "गणित",
            "If a triangle has angles 30°, 60°, and 90°, what type of triangle is it?",
            "यदि एक त्रिभुज में कोण 30°, 60°, और 90° हैं, तो यह किस प्रकार का त्रिभुज है?",
            [
              "Equilateral",
              "Isosceles",
              "Scalene",
              "Right-angled",
              "समबाहु",
              "समद्विबाहु",
              "विषमबाहु",
              "समकोण",
            ],
            "D",
            "A triangle with a 90° angle is a right-angled triangle.",
            "90° कोण वाला त्रिभुज एक समकोण त्रिभुज है।"
          ),
          // Add more
        ],
      },
      // Add planned sets
      {
        slug: "hindi-set-1",
        title: "Hindi Language Set 1",
        titleHi: "हिंदी भाषा सेट 1",
        chapter: "Language II (Hindi)",
        chapterHi: "भाषा II (हिंदी)",
        difficulty: "Easy",
        durationMin: 12,
        questionCount: 10,
        bilingual: true,
        isLive: false,
      },
      {
        slug: "science-set-1",
        title: "Environmental Studies Set 1",
        titleHi: "पर्यावरण अध्ययन सेट 1",
        chapter: "Environmental Studies",
        chapterHi: "पर्यावरण अध्ययन",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: false,
      },
    ],
  },
  {
    slug: "ssc",
    title: "SSC Practice Tests",
    titleHi: "SSC अभ्यास परीक्षा",
    icon: "📊",
    description: "Free SSC practice sets with answers and explanations in English and Hindi covering Reasoning, Quantitative Aptitude, English, and General Awareness.",
    descriptionHi: "तर्क, मात्रात्मक योग्यता, अंग्रेजी और सामान्य ज्ञान को कवर करने के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क SSC अभ्यास सेट।",
    audience: ["SSC aspirants", "Government job seekers", "Competitive exam students"],
    chapters: [
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
          // Add questions
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
        questions: [],
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
        questions: [],
      },
      // Planned
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
        isLive: false,
      },
    ],
  },
  {
    slug: "railway",
    title: "Railway Practice Tests",
    titleHi: "रेलवे अभ्यास परीक्षा",
    icon: "🚂",
    description: "Free Railway exam practice sets with answers and explanations in English and Hindi covering Mathematics, Reasoning, Science, and General Knowledge.",
    descriptionHi: "गणित, तर्क, विज्ञान और सामान्य ज्ञान को कवर करने के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क रेलवे परीक्षा अभ्यास सेट।",
    audience: ["Railway aspirants", "RRB exam candidates", "Government job seekers"],
    chapters: [
      { name: "Mathematics", hi: "गणित" },
      { name: "Reasoning", hi: "तर्क" },
      { name: "Science", hi: "विज्ञान" },
      { name: "General Knowledge", hi: "सामान्य ज्ञान" },
    ],
    sets: [
      {
        slug: "maths-set-1",
        title: "Mathematics Set 1",
        titleHi: "गणित सेट 1",
        chapter: "Mathematics",
        chapterHi: "गणित",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [],
      },
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
        questions: [],
      },
      {
        slug: "science-set-1",
        title: "Science Set 1",
        titleHi: "विज्ञान सेट 1",
        chapter: "Science",
        chapterHi: "विज्ञान",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: true,
        questions: [],
      },
      // Planned
      {
        slug: "gk-set-1",
        title: "General Knowledge Set 1",
        titleHi: "सामान्य ज्ञान सेट 1",
        chapter: "General Knowledge",
        chapterHi: "सामान्य ज्ञान",
        difficulty: "Easy",
        durationMin: 15,
        questionCount: 10,
        bilingual: true,
        isLive: false,
      },
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
      "Beginner engineering entrance practice with math, physics, chemistry, and basic logical reasoning.",
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
      "Second beginner engineering entrance set focused on algebra, units, patterns, motion, and core science basics.",
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
  {
    id: "engineering-set-3",
    slug: "engineering-entrance-physics-math-set-3",
    category: "engineering-entrance",
    title: "Engineering Entrance Practice Questions – Set 3",
    description:
      "English-only engineering entrance practice focused on math basics, physics concepts, chemistry symbols, and logical thinking.",
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
      "English-only beginner engineering practice with equations, units, chemistry basics, geometry, and reasoning patterns.",
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
];

export function getPracticeCategory(slug: string) {
  return practiceCategories.find((item) => item.slug === slug);
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