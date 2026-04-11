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
    description:
      "Free CTET practice sets with answers and explanations in English and Hindi for Child Development and Pedagogy, Languages, Mathematics, Science, and Social Studies.",
    descriptionHi:
      "बच्चों के विकास और शिक्षाशास्त्र, भाषाएं, गणित, विज्ञान और सामाजिक अध्ययन के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क CTET अभ्यास सेट।",
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
            "Children in the concrete operational stage can understand conservation.",
            "ठोस संक्रियात्मक चरण में बच्चे संरक्षण की अवधारणा को समझ सकते हैं।"
          ),
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
            "Vygotsky's socio-cultural theory highlights the role of social interaction.",
            "वाइगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत सामाजिक संपर्क की भूमिका पर जोर देता है।"
          ),
          createGovQuestion(
            "ctet-cdp-3",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What is the term for a child's ability to understand that others have different beliefs and thoughts?",
            "एक बच्चे की वह क्षमता क्या कहलाती है जिसमें वह समझता है कि दूसरों के विचार और विश्वास अलग हो सकते हैं?",
            [
              "Empathy",
              "Theory of mind",
              "Moral reasoning",
              "Conditioning",
              "सहानुभूति",
              "मन का सिद्धांत",
              "नैतिक तर्क",
              "अनुबंधन",
            ],
            "B",
            "Theory of mind means understanding that others may think differently.",
            "मन का सिद्धांत का अर्थ है यह समझना कि दूसरे अलग तरह से सोच सकते हैं।"
          ),
          createGovQuestion(
            "ctet-cdp-4",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which of the following best represents play-based learning?",
            "निम्नलिखित में से कौन सा खेल-आधारित अधिगम को सबसे अच्छे ढंग से दर्शाता है?",
            [
              "Rote memorization",
              "Exploration and discovery",
              "Only written testing",
              "Silent copying",
              "रटकर याद करना",
              "अन्वेषण और खोज",
              "केवल लिखित परीक्षा",
              "चुपचाप नकल करना",
            ],
            "B",
            "Play-based learning encourages exploration and discovery.",
            "खेल-आधारित अधिगम अन्वेषण और खोज को बढ़ावा देता है।"
          ),
          createGovQuestion(
            "ctet-cdp-5",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What does scaffolding in teaching mean?",
            "शिक्षण में स्कैफोल्डिंग का क्या अर्थ है?",
            [
              "Punishing weak learners",
              "Temporary support for learning",
              "Permanent classroom decoration",
              "Homework checking only",
              "कमजोर विद्यार्थियों को दंड देना",
              "सीखने के लिए अस्थायी सहारा देना",
              "स्थायी कक्षा सजावट",
              "केवल गृहकार्य जाँचना",
            ],
            "B",
            "Scaffolding means giving temporary guidance until learners can perform independently.",
            "स्कैफोल्डिंग का अर्थ है विद्यार्थियों को तब तक अस्थायी सहायता देना जब तक वे स्वयं कार्य न कर सकें।"
          ),
          createGovQuestion(
            "ctet-cdp-6",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "In which stage do children begin to use symbols and language rapidly?",
            "किस चरण में बच्चे प्रतीकों और भाषा का तेजी से उपयोग करना शुरू करते हैं?",
            [
              "Sensorimotor stage",
              "Preoperational stage",
              "Concrete operational stage",
              "Formal operational stage",
              "संवेदी-प्रेरक चरण",
              "पूर्व-संक्रियात्मक चरण",
              "ठोस संक्रियात्मक चरण",
              "औपचारिक संक्रियात्मक चरण",
            ],
            "B",
            "In the preoperational stage, language and symbolic thinking develop quickly.",
            "पूर्व-संक्रियात्मक चरण में भाषा और प्रतीकात्मक सोच का तेजी से विकास होता है।"
          ),
          createGovQuestion(
            "ctet-cdp-7",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "What is the main aim of inclusive education?",
            "समावेशी शिक्षा का मुख्य उद्देश्य क्या है?",
            [
              "Separate children by ability",
              "Equal opportunities for all learners",
              "Teach only gifted students",
              "Increase competition",
              "क्षमता के आधार पर बच्चों को अलग करना",
              "सभी शिक्षार्थियों को समान अवसर देना",
              "केवल प्रतिभाशाली छात्रों को पढ़ाना",
              "प्रतिस्पर्धा बढ़ाना",
            ],
            "B",
            "Inclusive education ensures equal educational opportunities for all learners.",
            "समावेशी शिक्षा सभी शिक्षार्थियों को समान शैक्षिक अवसर प्रदान करती है।"
          ),
          createGovQuestion(
            "ctet-cdp-8",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which psychologist is associated with operant conditioning?",
            "ऑपरेंट कंडीशनिंग किस मनोवैज्ञानिक से जुड़ी है?",
            [
              "Piaget",
              "Skinner",
              "Vygotsky",
              "Erikson",
              "पियाजेट",
              "स्किनर",
              "वाइगोत्स्की",
              "एरिक्सन",
            ],
            "B",
            "B.F. Skinner is known for operant conditioning.",
            "बी. एफ. स्किनर ऑपरेंट कंडीशनिंग के लिए प्रसिद्ध हैं।"
          ),
          createGovQuestion(
            "ctet-cdp-9",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Learning by watching and imitating others is called:",
            "दूसरों को देखकर और उनका अनुकरण करके सीखना क्या कहलाता है?",
            [
              "Classical conditioning",
              "Trial and error",
              "Observational learning",
              "Punishment learning",
              "शास्त्रीय अनुबंधन",
              "प्रयास और त्रुटि",
              "अवलोकनात्मक अधिगम",
              "दंड आधारित अधिगम",
            ],
            "C",
            "Observational learning happens through watching others.",
            "अवलोकनात्मक अधिगम दूसरों को देखकर होता है।"
          ),
          createGovQuestion(
            "ctet-cdp-10",
            "Child Development and Pedagogy",
            "बच्चों का विकास और शिक्षाशास्त्र",
            "Which of the following is an example of divergent thinking?",
            "निम्नलिखित में से कौन सा विचलनात्मक सोच का उदाहरण है?",
            [
              "Remembering a definition",
              "Brainstorming many story ideas",
              "Repeating one correct answer",
              "Copying from the board",
              "परिभाषा याद करना",
              "कहानी के कई विचार सोचना",
              "एक सही उत्तर को दोहराना",
              "बोर्ड से नकल करना",
            ],
            "B",
            "Divergent thinking means generating many possible ideas or answers.",
            "विचलनात्मक सोच का अर्थ है कई संभावित विचार या उत्तर उत्पन्न करना।"
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
              "go",
              "goes",
              "going",
              "gone",
            ],
            "B",
            "With 'she', the present simple verb is 'goes'.",
            "'She' के साथ present simple में 'goes' का प्रयोग होता है।"
          ),
          createGovQuestion(
            "ctet-eng-2",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Identify the noun in the sentence: 'The quick brown fox jumps over the lazy dog.'",
            "वाक्य में संज्ञा पहचानें: 'The quick brown fox jumps over the lazy dog.'",
            [
              "quick",
              "brown",
              "fox",
              "jumps",
              "तेज",
              "भूरा",
              "लोमड़ी",
              "कूदता है",
            ],
            "C",
            "'Fox' is a noun because it names an animal.",
            "'Fox' एक संज्ञा है क्योंकि यह एक जीव का नाम है।"
          ),
          createGovQuestion(
            "ctet-eng-3",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the correct article: '_____ umbrella is on the table.'",
            "सही article चुनें: '_____ umbrella is on the table.'",
            [
              "A",
              "An",
              "The",
              "No article",
              "A",
              "An",
              "The",
              "कोई article नहीं",
            ],
            "B",
            "'Umbrella' starts with a vowel sound, so 'An' is correct.",
            "'Umbrella' स्वर ध्वनि से शुरू होता है, इसलिए 'An' सही है।"
          ),
          createGovQuestion(
            "ctet-eng-4",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the antonym of 'happy'.",
            "'Happy' का विलोम शब्द चुनें।",
            [
              "glad",
              "cheerful",
              "sad",
              "bright",
              "प्रसन्न",
              "खुश",
              "दुखी",
              "उज्ज्वल",
            ],
            "C",
            "'Sad' is the opposite of 'happy'.",
            "'Sad', 'happy' का विलोम है।"
          ),
          createGovQuestion(
            "ctet-eng-5",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the synonym of 'begin'.",
            "'Begin' का समानार्थी शब्द चुनें।",
            [
              "start",
              "stop",
              "end",
              "close",
              "शुरू करना",
              "रोकना",
              "समाप्त करना",
              "बंद करना",
            ],
            "A",
            "'Start' is a synonym of 'begin'.",
            "'Start', 'begin' का समानार्थी शब्द है।"
          ),
          createGovQuestion(
            "ctet-eng-6",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the correct sentence.",
            "सही वाक्य चुनें।",
            [
              "He do his work.",
              "He does his work.",
              "He doing his work.",
              "He done his work.",
              "He do his work.",
              "He does his work.",
              "He doing his work.",
              "He done his work.",
            ],
            "B",
            "With 'He', the correct form is 'does'.",
            "'He' के साथ सही रूप 'does' होता है।"
          ),
          createGovQuestion(
            "ctet-eng-7",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Fill in the blank: 'The cat is _____ the chair.'",
            "रिक्त स्थान भरें: 'The cat is _____ the chair.'",
            [
              "in",
              "on",
              "at",
              "for",
              "में",
              "पर",
              "पर/पास",
              "के लिए",
            ],
            "B",
            "'On the chair' is the correct phrase here.",
            "यहाँ 'on the chair' सही phrase है।"
          ),
          createGovQuestion(
            "ctet-eng-8",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Which word is an adjective?",
            "कौन सा शब्द विशेषण है?",
            [
              "beautiful",
              "run",
              "quickly",
              "book",
              "सुंदर",
              "दौड़ना",
              "तेजी से",
              "पुस्तक",
            ],
            "A",
            "'Beautiful' describes a noun, so it is an adjective.",
            "'Beautiful' किसी संज्ञा का वर्णन करता है, इसलिए यह विशेषण है।"
          ),
          createGovQuestion(
            "ctet-eng-9",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Choose the correct tense: 'They _____ football now.'",
            "सही tense चुनें: 'They _____ football now.'",
            [
              "play",
              "plays",
              "are playing",
              "played",
              "खेलते हैं",
              "खेलता है",
              "खेल रहे हैं",
              "खेले",
            ],
            "C",
            "'Now' shows present continuous tense, so 'are playing' is correct.",
            "'Now' वर्तमान निरंतर काल दिखाता है, इसलिए 'are playing' सही है।"
          ),
          createGovQuestion(
            "ctet-eng-10",
            "Language I (English)",
            "भाषा I (अंग्रेजी)",
            "Read the sentence: 'Ravi is taller than Mohan.' Who is shorter?",
            "वाक्य पढ़ें: 'Ravi is taller than Mohan.' कौन छोटा है?",
            [
              "Ravi",
              "Mohan",
              "Both",
              "Cannot say",
              "रवि",
              "मोहन",
              "दोनों",
              "नहीं कह सकते",
            ],
            "B",
            "If Ravi is taller, then Mohan is shorter.",
            "यदि Ravi लंबा है, तो Mohan छोटा है।"
          ),
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
            "15 + 27 = 42.",
            "15 + 27 = 42।"
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
            "A triangle with one 90° angle is a right-angled triangle.",
            "जिस त्रिभुज का एक कोण 90° हो वह समकोण त्रिभुज होता है।"
          ),
          createGovQuestion(
            "ctet-math-3",
            "Mathematics",
            "गणित",
            "What is 36 ÷ 6?",
            "36 ÷ 6 क्या है?",
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
            "36 divided by 6 equals 6.",
            "36 को 6 से भाग देने पर 6 मिलता है।"
          ),
          createGovQuestion(
            "ctet-math-4",
            "Mathematics",
            "गणित",
            "Which fraction is equal to one-half?",
            "कौन सा भिन्न एक-आध के बराबर है?",
            [
              "1/3",
              "2/4",
              "3/5",
              "4/5",
              "1/3",
              "2/4",
              "3/5",
              "4/5",
            ],
            "B",
            "2/4 simplifies to 1/2.",
            "2/4 को सरल करने पर 1/2 मिलता है।"
          ),
          createGovQuestion(
            "ctet-math-5",
            "Mathematics",
            "गणित",
            "What is 0.5 as a fraction?",
            "0.5 को भिन्न में क्या लिखेंगे?",
            [
              "1/2",
              "1/3",
              "2/3",
              "3/4",
              "1/2",
              "1/3",
              "2/3",
              "3/4",
            ],
            "A",
            "0.5 equals 1/2.",
            "0.5, 1/2 के बराबर है।"
          ),
          createGovQuestion(
            "ctet-math-6",
            "Mathematics",
            "गणित",
            "A rectangle has length 8 cm and breadth 3 cm. What is its area?",
            "एक आयत की लंबाई 8 सेमी और चौड़ाई 3 सेमी है। उसका क्षेत्रफल कितना है?",
            [
              "11 sq cm",
              "16 sq cm",
              "24 sq cm",
              "32 sq cm",
              "11 वर्ग सेमी",
              "16 वर्ग सेमी",
              "24 वर्ग सेमी",
              "32 वर्ग सेमी",
            ],
            "C",
            "Area of rectangle = length × breadth = 8 × 3 = 24.",
            "आयत का क्षेत्रफल = लंबाई × चौड़ाई = 8 × 3 = 24।"
          ),
          createGovQuestion(
            "ctet-math-7",
            "Mathematics",
            "गणित",
            "The perimeter of a square of side 5 cm is:",
            "5 सेमी भुजा वाले वर्ग का परिमाप है:",
            [
              "10 cm",
              "15 cm",
              "20 cm",
              "25 cm",
              "10 सेमी",
              "15 सेमी",
              "20 सेमी",
              "25 सेमी",
            ],
            "C",
            "Perimeter of square = 4 × side = 20 cm.",
            "वर्ग का परिमाप = 4 × भुजा = 20 सेमी।"
          ),
          createGovQuestion(
            "ctet-math-8",
            "Mathematics",
            "गणित",
            "What time is 2 hours after 3:30 PM?",
            "3:30 PM के 2 घंटे बाद क्या समय होगा?",
            [
              "4:30 PM",
              "5:00 PM",
              "5:30 PM",
              "6:30 PM",
              "4:30 PM",
              "5:00 PM",
              "5:30 PM",
              "6:30 PM",
            ],
            "C",
            "Adding 2 hours to 3:30 PM gives 5:30 PM.",
            "3:30 PM में 2 घंटे जोड़ने पर 5:30 PM होता है।"
          ),
          createGovQuestion(
            "ctet-math-9",
            "Mathematics",
            "गणित",
            "What is 75 - 29?",
            "75 - 29 क्या है?",
            [
              "44",
              "45",
              "46",
              "47",
              "44",
              "45",
              "46",
              "47",
            ],
            "C",
            "75 - 29 = 46.",
            "75 - 29 = 46।"
          ),
          createGovQuestion(
            "ctet-math-10",
            "Mathematics",
            "गणित",
            "What is 9 × 4?",
            "9 × 4 क्या है?",
            [
              "32",
              "34",
              "36",
              "38",
              "32",
              "34",
              "36",
              "38",
            ],
            "C",
            "9 multiplied by 4 equals 36.",
            "9 को 4 से गुणा करने पर 36 मिलता है।"
          ),
        ],
      },
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
  isLive: true,
  questions: [
    createGovQuestion(
      "ctet-hindi-1",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "‘राम स्कूल जाता है’ वाक्य में क्रिया कौन सी है?",
      "‘राम स्कूल जाता है’ वाक्य में क्रिया कौन सी है?",
      ["राम","स्कूल","जाता है","है","राम","स्कूल","जाता है","है"],
      "C",
      "'जाता है' क्रिया है।",
      "'जाता है' क्रिया है।"
    ),
    createGovQuestion(
      "ctet-hindi-2",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "संज्ञा क्या होती है?",
      "संज्ञा क्या होती है?",
      ["क्रिया बताने वाला शब्द","नाम बताने वाला शब्द","विशेषण","सर्वनाम","क्रिया","नाम","विशेषण","सर्वनाम"],
      "B",
      "नाम बताने वाले शब्द को संज्ञा कहते हैं।",
      "नाम बताने वाले शब्द को संज्ञा कहते हैं।"
    ),
    createGovQuestion(
      "ctet-hindi-3",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'सुंदर' शब्द किस प्रकार का है?",
      "'सुंदर' शब्द किस प्रकार का है?",
      ["संज्ञा","विशेषण","क्रिया","सर्वनाम","संज्ञा","विशेषण","क्रिया","सर्वनाम"],
      "B",
      "'सुंदर' विशेषण है।",
      "'सुंदर' विशेषण है।"
    ),
    createGovQuestion(
      "ctet-hindi-4",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'मैं' किस प्रकार का शब्द है?",
      "'मैं' किस प्रकार का शब्द है?",
      ["संज्ञा","सर्वनाम","क्रिया","विशेषण","संज्ञा","सर्वनाम","क्रिया","विशेषण"],
      "B",
      "'मैं' सर्वनाम है।",
      "'मैं' सर्वनाम है।"
    ),
    createGovQuestion(
      "ctet-hindi-5",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'खेलना' किस प्रकार का शब्द है?",
      "'खेलना' किस प्रकार का शब्द है?",
      ["क्रिया","संज्ञा","विशेषण","सर्वनाम","क्रिया","संज्ञा","विशेषण","सर्वनाम"],
      "A",
      "'खेलना' क्रिया है।",
      "'खेलना' क्रिया है।"
    ),
    createGovQuestion(
      "ctet-hindi-6",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'जल' का पर्यायवाची क्या है?",
      "'जल' का पर्यायवाची क्या है?",
      ["पानी","आग","वायु","धरती","पानी","आग","वायु","धरती"],
      "A",
      "'जल' का पर्यायवाची 'पानी' है।",
      "'जल' का पर्यायवाची 'पानी' है।"
    ),
    createGovQuestion(
      "ctet-hindi-7",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'अच्छा' का विलोम क्या है?",
      "'अच्छा' का विलोम क्या है?",
      ["बुरा","सुंदर","तेज","धीमा","बुरा","सुंदर","तेज","धीमा"],
      "A",
      "'अच्छा' का विलोम 'बुरा' है।",
      "'अच्छा' का विलोम 'बुरा' है।"
    ),
    createGovQuestion(
      "ctet-hindi-8",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "वाक्य में कितने शब्द हैं: 'राम घर गया'?",
      "वाक्य में कितने शब्द हैं: 'राम घर गया'?",
      ["2","3","4","5","2","3","4","5"],
      "B",
      "इस वाक्य में 3 शब्द हैं।",
      "इस वाक्य में 3 शब्द हैं।"
    ),
    createGovQuestion(
      "ctet-hindi-9",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "'विद्यालय' का अर्थ क्या है?",
      "'विद्यालय' का अर्थ क्या है?",
      ["घर","स्कूल","बाजार","मंदिर","घर","स्कूल","बाजार","मंदिर"],
      "B",
      "'विद्यालय' का अर्थ स्कूल है।",
      "'विद्यालय' का अर्थ स्कूल है।"
    ),
    createGovQuestion(
      "ctet-hindi-10",
      "Language II (Hindi)",
      "भाषा II (हिंदी)",
      "सही वाक्य चुनें:",
      "सही वाक्य चुनें:",
      ["राम खेलते हैं","राम खेलता है","राम खेलते है","राम खेलते हूं","राम खेलते हैं","राम खेलता है","राम खेलते है","राम खेलते हूं"],
      "B",
      "'राम खेलता है' सही वाक्य है।",
      "'राम खेलता है' सही वाक्य है।"
    ),
  ],
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
  isLive: true,
  questions: [
    createGovQuestion("ctet-evs-1","EVS","EVS","Plants need sunlight for:","पौधों को सूर्य प्रकाश की आवश्यकता क्यों होती है?",["Photosynthesis","Sleeping","Moving","Breathing","प्रकाश संश्लेषण","सोना","चलना","सांस लेना"],"A","Plants make food.","पौधे भोजन बनाते हैं।"),
    createGovQuestion("ctet-evs-2","EVS","EVS","Which is a water source?","जल का स्रोत कौन सा है?",["River","Car","Road","Chair","नदी","कार","सड़क","कुर्सी"],"A","River is a source of water.","नदी जल का स्रोत है।"),
    createGovQuestion("ctet-evs-3","EVS","EVS","Which animal gives milk?","कौन सा जानवर दूध देता है?",["Cow","Lion","Tiger","Dog","गाय","शेर","बाघ","कुत्ता"],"A","Cow gives milk.","गाय दूध देती है।"),
    createGovQuestion("ctet-evs-4","EVS","EVS","Which organ helps us breathe?","कौन सा अंग हमें सांस लेने में मदद करता है?",["Heart","Lungs","Brain","Liver","हृदय","फेफड़े","मस्तिष्क","यकृत"],"B","Lungs help breathing.","फेफड़े सांस लेने में मदद करते हैं।"),
    createGovQuestion("ctet-evs-5","EVS","EVS","Sun rises in the:","सूर्य कहाँ से निकलता है?",["East","West","North","South","पूर्व","पश्चिम","उत्तर","दक्षिण"],"A","Sun rises in east.","सूर्य पूर्व से निकलता है।"),
    createGovQuestion("ctet-evs-6","EVS","EVS","Which is a bird?","कौन सा पक्षी है?",["Crow","Tiger","Dog","Lion","कौवा","बाघ","कुत्ता","शेर"],"A","Crow is a bird.","कौवा पक्षी है।"),
    createGovQuestion("ctet-evs-7","EVS","EVS","Water is:","पानी क्या है?",["Solid","Liquid","Gas","None","ठोस","द्रव","गैस","कोई नहीं"],"B","Water is liquid.","पानी द्रव है।"),
    createGovQuestion("ctet-evs-8","EVS","EVS","Which is a plant part?","पौधे का भाग कौन सा है?",["Leaf","Car","Chair","Table","पत्ता","कार","कुर्सी","मेज"],"A","Leaf is plant part.","पत्ता पौधे का भाग है।"),
    createGovQuestion("ctet-evs-9","EVS","EVS","Which is a natural resource?","प्राकृतिक संसाधन कौन सा है?",["Air","Plastic","Car","Road","वायु","प्लास्टिक","कार","सड़क"],"A","Air is natural resource.","वायु प्राकृतिक संसाधन है।"),
    createGovQuestion("ctet-evs-10","EVS","EVS","We drink:","हम क्या पीते हैं?",["Water","Stone","Iron","Wood","पानी","पत्थर","लोहा","लकड़ी"],"A","We drink water.","हम पानी पीते हैं।"),
  ],
}
    ],
  },

  {
    slug: "ssc",
    title: "SSC Practice Tests",
    titleHi: "SSC अभ्यास परीक्षा",
    icon: "📊",
    description:
      "Free SSC practice sets with answers and explanations in English and Hindi covering Reasoning, Quantitative Aptitude, English, and General Awareness.",
    descriptionHi:
      "तर्क, मात्रात्मक योग्यता, अंग्रेजी और सामान्य ज्ञान को कवर करने के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क SSC अभ्यास सेट।",
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
}
    ],
  },

  {
    slug: "railway",
    title: "Railway Practice Tests",
    titleHi: "रेलवे अभ्यास परीक्षा",
    icon: "🚂",
    description:
      "Free Railway exam practice sets with answers and explanations in English and Hindi covering Mathematics, Reasoning, Science, and General Knowledge.",
    descriptionHi:
      "गणित, तर्क, विज्ञान और सामान्य ज्ञान को कवर करने के लिए अंग्रेजी और हिंदी में उत्तरों और स्पष्टीकरण के साथ नि:शुल्क रेलवे परीक्षा अभ्यास सेट।",
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
        questions: [
          createGovQuestion(
            "rail-math-1",
            "Mathematics",
            "गणित",
            "What is 18 + 27?",
            "18 + 27 क्या है?",
            [
              "35",
              "45",
              "55",
              "65",
              "35",
              "45",
              "55",
              "65",
            ],
            "B",
            "18 + 27 = 45.",
            "18 + 27 = 45।"
          ),
          createGovQuestion(
            "rail-math-2",
            "Mathematics",
            "गणित",
            "What is 9 × 7?",
            "9 × 7 क्या है?",
            [
              "56",
              "63",
              "72",
              "81",
              "56",
              "63",
              "72",
              "81",
            ],
            "B",
            "9 × 7 = 63.",
            "9 × 7 = 63।"
          ),
          createGovQuestion(
            "rail-math-3",
            "Mathematics",
            "गणित",
            "What is 144 ÷ 12?",
            "144 ÷ 12 क्या है?",
            [
              "10",
              "11",
              "12",
              "13",
              "10",
              "11",
              "12",
              "13",
            ],
            "C",
            "144 ÷ 12 = 12.",
            "144 ÷ 12 = 12।"
          ),
          createGovQuestion(
            "rail-math-4",
            "Mathematics",
            "गणित",
            "What is one-fourth of 80?",
            "80 का एक-चौथाई क्या है?",
            [
              "10",
              "20",
              "30",
              "40",
              "10",
              "20",
              "30",
              "40",
            ],
            "B",
            "80 ÷ 4 = 20.",
            "80 ÷ 4 = 20।"
          ),
          createGovQuestion(
            "rail-math-5",
            "Mathematics",
            "गणित",
            "The value of 2² + 3² is:",
            "2² + 3² का मान है:",
            [
              "10",
              "11",
              "12",
              "13",
              "10",
              "11",
              "12",
              "13",
            ],
            "D",
            "2² = 4 and 3² = 9, so total is 13.",
            "2² = 4 और 3² = 9, इसलिए कुल 13 है।"
          ),
          createGovQuestion(
            "rail-math-6",
            "Mathematics",
            "गणित",
            "If one pen costs ₹12, then 5 pens cost:",
            "यदि एक पेन की कीमत ₹12 है, तो 5 पेन की कीमत होगी:",
            [
              "₹50",
              "₹55",
              "₹60",
              "₹65",
              "₹50",
              "₹55",
              "₹60",
              "₹65",
            ],
            "C",
            "12 × 5 = 60.",
            "12 × 5 = 60।"
          ),
          createGovQuestion(
            "rail-math-7",
            "Mathematics",
            "गणित",
            "What is 30% of 90?",
            "90 का 30% कितना है?",
            [
              "18",
              "24",
              "27",
              "30",
              "18",
              "24",
              "27",
              "30",
            ],
            "C",
            "30% of 90 = 27.",
            "90 का 30% = 27।"
          ),
          createGovQuestion(
            "rail-math-8",
            "Mathematics",
            "गणित",
            "The HCF of 12 and 18 is:",
            "12 और 18 का HCF है:",
            [
              "3",
              "6",
              "9",
              "12",
              "3",
              "6",
              "9",
              "12",
            ],
            "B",
            "The HCF of 12 and 18 is 6.",
            "12 और 18 का HCF 6 है।"
          ),
          createGovQuestion(
            "rail-math-9",
            "Mathematics",
            "गणित",
            "A shopkeeper gives ₹5 discount on ₹50. Final price is:",
            "एक दुकानदार ₹50 पर ₹5 की छूट देता है। अंतिम कीमत है:",
            [
              "₹40",
              "₹45",
              "₹50",
              "₹55",
              "₹40",
              "₹45",
              "₹50",
              "₹55",
            ],
            "B",
            "₹50 - ₹5 = ₹45.",
            "₹50 - ₹5 = ₹45।"
          ),
          createGovQuestion(
            "rail-math-10",
            "Mathematics",
            "गणित",
            "Find the next number: 5, 10, 15, 20, ?",
            "अगली संख्या ज्ञात करें: 5, 10, 15, 20, ?",
            [
              "21",
              "24",
              "25",
              "30",
              "21",
              "24",
              "25",
              "30",
            ],
            "C",
            "The pattern increases by 5, so the next number is 25.",
            "यह क्रम 5-5 से बढ़ रहा है, इसलिए अगली संख्या 25 है।"
          ),
        ],
      },
      {
        slug: "reasoning-set-1",
        title: "Reasoning Set 1",
        titleHi: "तर्क सेट 1",
        chapter: "Reasoning",
        chapterHi: "तर्क",
        difficulty: "Easy",
        durationMin: 15,
        bilingual: true,
        questionCount: 10,
        isLive: true,
        questions: [
          createGovQuestion(
            "rail-reason-1",
            "Reasoning",
            "तर्क",
            "Choose the odd one out: Rose, Lotus, Tulip, Mango",
            "विषम पद चुनें: Rose, Lotus, Tulip, Mango",
            [
              "Rose",
              "Lotus",
              "Tulip",
              "Mango",
              "Rose",
              "Lotus",
              "Tulip",
              "Mango",
            ],
            "D",
            "Mango is a fruit, while the others are flowers.",
            "Mango एक फल है, जबकि बाकी फूल हैं।"
          ),
          createGovQuestion(
            "rail-reason-2",
            "Reasoning",
            "तर्क",
            "Complete the series: A, C, E, G, ?",
            "श्रृंखला पूरी करें: A, C, E, G, ?",
            [
              "H",
              "I",
              "J",
              "K",
              "H",
              "I",
              "J",
              "K",
            ],
            "B",
            "The letters increase by skipping one each time: A, C, E, G, I.",
            "प्रत्येक बार एक अक्षर छोड़कर अगला अक्षर लिया गया है: A, C, E, G, I।"
          ),
          createGovQuestion(
            "rail-reason-3",
            "Reasoning",
            "तर्क",
            "If 5 + 3 = 16 and 4 + 2 = 12, then 6 + 1 = ?",
            "यदि 5 + 3 = 16 और 4 + 2 = 12, तो 6 + 1 = ?",
            [
              "12",
              "14",
              "16",
              "18",
              "12",
              "14",
              "16",
              "18",
            ],
            "B",
            "The rule is 2 × (sum), so 2 × (6 + 1) = 14.",
            "नियम है 2 × (योग), इसलिए 2 × (6 + 1) = 14।"
          ),
          createGovQuestion(
            "rail-reason-4",
            "Reasoning",
            "तर्क",
            "Mirror image questions mostly test:",
            "Mirror image प्रश्न मुख्य रूप से किसका परीक्षण करते हैं?",
            [
              "Language",
              "Spatial understanding",
              "Essay writing",
              "Science facts",
              "भाषा",
              "स्थानिक समझ",
              "निबंध लेखन",
              "विज्ञान तथ्य",
            ],
            "B",
            "Mirror image questions test spatial understanding.",
            "Mirror image प्रश्न स्थानिक समझ की जाँच करते हैं।"
          ),
          createGovQuestion(
            "rail-reason-5",
            "Reasoning",
            "तर्क",
            "Find the missing number: 7, 14, 21, __, 35",
            "लुप्त संख्या ज्ञात करें: 7, 14, 21, __, 35",
            [
              "24",
              "27",
              "28",
              "30",
              "24",
              "27",
              "28",
              "30",
            ],
            "C",
            "The pattern is multiples of 7, so the missing number is 28.",
            "यह 7 के गुणजों की श्रृंखला है, इसलिए लुप्त संख्या 28 है।"
          ),
          createGovQuestion(
            "rail-reason-6",
            "Reasoning",
            "तर्क",
            "Choose the different one: Monday, Tuesday, January, Friday",
            "भिन्न पद चुनें: Monday, Tuesday, January, Friday",
            [
              "Monday",
              "Tuesday",
              "January",
              "Friday",
              "Monday",
              "Tuesday",
              "January",
              "Friday",
            ],
            "C",
            "January is a month, the others are weekdays.",
            "January एक महीना है, बाकी सप्ताह के दिन हैं।"
          ),
          createGovQuestion(
            "rail-reason-7",
            "Reasoning",
            "तर्क",
            "Find the next term: 1, 4, 9, 16, ?",
            "अगला पद ज्ञात करें: 1, 4, 9, 16, ?",
            [
              "20",
              "25",
              "36",
              "49",
              "20",
              "25",
              "36",
              "49",
            ],
            "B",
            "These are square numbers: 1², 2², 3², 4², so next is 5² = 25.",
            "ये वर्ग संख्याएँ हैं: 1², 2², 3², 4², इसलिए अगला 5² = 25 होगा।"
          ),
          createGovQuestion(
            "rail-reason-8",
            "Reasoning",
            "तर्क",
            "Book : Read :: Food : ?",
            "Book : Read :: Food : ?",
            [
              "Cook",
              "Eat",
              "Write",
              "Buy",
              "पकाना",
              "खाना",
              "लिखना",
              "खरीदना",
            ],
            "B",
            "A book is read, food is eaten.",
            "पुस्तक पढ़ी जाती है, भोजन खाया जाता है।"
          ),
          createGovQuestion(
            "rail-reason-9",
            "Reasoning",
            "तर्क",
            "How many letters are there between A and F in the English alphabet?",
            "अंग्रेजी वर्णमाला में A और F के बीच कितने अक्षर हैं?",
            [
              "3",
              "4",
              "5",
              "6",
              "3",
              "4",
              "5",
              "6",
            ],
            "B",
            "B, C, D and E come between A and F, so there are 4 letters.",
            "A और F के बीच B, C, D और E आते हैं, इसलिए 4 अक्षर हैं।"
          ),
          createGovQuestion(
            "rail-reason-10",
            "Reasoning",
            "तर्क",
            "Which shape has 3 sides?",
            "किस आकृति की 3 भुजाएँ होती हैं?",
            [
              "Square",
              "Circle",
              "Triangle",
              "Rectangle",
              "वर्ग",
              "वृत्त",
              "त्रिभुज",
              "आयत",
            ],
            "C",
            "A triangle has 3 sides.",
            "त्रिभुज की 3 भुजाएँ होती हैं।"
          ),
        ],
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
        questions: [
          createGovQuestion(
            "rail-sci-1",
            "Science",
            "विज्ञान",
            "The boiling point of water at normal pressure is:",
            "सामान्य दाब पर पानी का क्वथनांक है:",
            [
              "90°C",
              "95°C",
              "100°C",
              "110°C",
              "90°C",
              "95°C",
              "100°C",
              "110°C",
            ],
            "C",
            "Water boils at 100°C at normal atmospheric pressure.",
            "सामान्य वायुदाब पर पानी 100°C पर उबलता है।"
          ),
          createGovQuestion(
            "rail-sci-2",
            "Science",
            "विज्ञान",
            "Plants prepare food by the process of:",
            "पौधे भोजन किस प्रक्रिया से बनाते हैं?",
            [
              "Respiration",
              "Photosynthesis",
              "Digestion",
              "Transpiration",
              "श्वसन",
              "प्रकाश संश्लेषण",
              "पाचन",
              "वाष्पोत्सर्जन",
            ],
            "B",
            "Plants prepare food through photosynthesis.",
            "पौधे प्रकाश संश्लेषण द्वारा भोजन बनाते हैं।"
          ),
          createGovQuestion(
            "rail-sci-3",
            "Science",
            "विज्ञान",
            "The largest organ in the human body is:",
            "मानव शरीर का सबसे बड़ा अंग है:",
            [
              "Heart",
              "Liver",
              "Skin",
              "Lungs",
              "हृदय",
              "यकृत",
              "त्वचा",
              "फेफड़े",
            ],
            "C",
            "Skin is the largest organ in the human body.",
            "त्वचा मानव शरीर का सबसे बड़ा अंग है।"
          ),
          createGovQuestion(
            "rail-sci-4",
            "Science",
            "विज्ञान",
            "Which gas is most abundant in Earth's atmosphere?",
            "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
            [
              "Oxygen",
              "Nitrogen",
              "Carbon dioxide",
              "Hydrogen",
              "ऑक्सीजन",
              "नाइट्रोजन",
              "कार्बन डाइऑक्साइड",
              "हाइड्रोजन",
            ],
            "B",
            "Nitrogen is the most abundant gas in the atmosphere.",
            "वायुमंडल में नाइट्रोजन सबसे अधिक मात्रा में पाई जाती है।"
          ),
          createGovQuestion(
            "rail-sci-5",
            "Science",
            "विज्ञान",
            "The SI unit of force is:",
            "बल की SI इकाई है:",
            [
              "Joule",
              "Watt",
              "Newton",
              "Pascal",
              "जूल",
              "वाट",
              "न्यूटन",
              "पास्कल",
            ],
            "C",
            "The SI unit of force is Newton.",
            "बल की SI इकाई न्यूटन है।"
          ),
          createGovQuestion(
            "rail-sci-6",
            "Science",
            "विज्ञान",
            "Which part of a plant conducts water?",
            "पौधे का कौन सा भाग जल का परिवहन करता है?",
            [
              "Phloem",
              "Xylem",
              "Leaf",
              "Petal",
              "फ्लोएम",
              "जाइलम",
              "पत्ता",
              "पंखुड़ी",
            ],
            "B",
            "Xylem carries water from roots to other parts.",
            "जाइलम जड़ों से जल को अन्य भागों तक पहुँचाता है।"
          ),
          createGovQuestion(
            "rail-sci-7",
            "Science",
            "विज्ञान",
            "Which vitamin is mainly obtained from sunlight?",
            "मुख्य रूप से सूर्य के प्रकाश से कौन सा विटामिन प्राप्त होता है?",
            [
              "Vitamin A",
              "Vitamin B",
              "Vitamin C",
              "Vitamin D",
              "विटामिन A",
              "विटामिन B",
              "विटामिन C",
              "विटामिन D",
            ],
            "D",
            "Vitamin D is formed in the body with the help of sunlight.",
            "सूर्य के प्रकाश की सहायता से शरीर में विटामिन D बनता है।"
          ),
          createGovQuestion(
            "rail-sci-8",
            "Science",
            "विज्ञान",
            "The chemical formula of water is:",
            "पानी का रासायनिक सूत्र है:",
            [
              "CO2",
              "H2O",
              "O2",
              "NaCl",
              "CO2",
              "H2O",
              "O2",
              "NaCl",
            ],
            "B",
            "Water is represented by H2O.",
            "पानी को H2O द्वारा दर्शाया जाता है।"
          ),
          createGovQuestion(
            "rail-sci-9",
            "Science",
            "विज्ञान",
            "The nearest star to Earth is:",
            "पृथ्वी के सबसे निकट स्थित तारा है:",
            [
              "Moon",
              "Mars",
              "Sun",
              "Venus",
              "चंद्रमा",
              "मंगल",
              "सूर्य",
              "शुक्र",
            ],
            "C",
            "The Sun is the nearest star to Earth.",
            "सूर्य पृथ्वी का सबसे निकट स्थित तारा है।"
          ),
          createGovQuestion(
            "rail-sci-10",
            "Science",
            "विज्ञान",
            "Which organ pumps blood in the human body?",
            "मानव शरीर में रक्त कौन सा अंग पंप करता है?",
            [
              "Brain",
              "Liver",
              "Heart",
              "Kidney",
              "मस्तिष्क",
              "यकृत",
              "हृदय",
              "गुर्दा",
            ],
            "C",
            "The heart pumps blood throughout the body.",
            "हृदय पूरे शरीर में रक्त पंप करता है।"
          ),
        ],
      },
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
  isLive: true,
  questions: [
    createGovQuestion("rail-gk-1","GK","GK","Capital of India?","भारत की राजधानी?",["Delhi","Mumbai","Chennai","Kolkata","दिल्ली","मुंबई","चेन्नई","कोलकाता"],"A","Delhi capital.","दिल्ली राजधानी।"),
    createGovQuestion("rail-gk-2","GK","GK","Currency of India?","भारत की मुद्रा?",["Rupee","Dollar","Euro","Yen","रुपया","डॉलर","यूरो","येन"],"A","Rupee currency.","रुपया मुद्रा।"),
    createGovQuestion("rail-gk-3","GK","GK","National animal?","राष्ट्रीय पशु?",["Tiger","Lion","Dog","Elephant","बाघ","शेर","कुत्ता","हाथी"],"A","Tiger national animal.","बाघ राष्ट्रीय पशु।"),
    createGovQuestion("rail-gk-4","GK","GK","National bird?","राष्ट्रीय पक्षी?",["Peacock","Crow","Parrot","Sparrow","मोर","कौवा","तोता","गौरैया"],"A","Peacock bird.","मोर पक्षी।"),
    createGovQuestion("rail-gk-5","GK","GK","India independence year?","भारत स्वतंत्रता वर्ष?",["1947","1950","1945","1960","1947","1950","1945","1960"],"A","India independent 1947.","भारत 1947 में स्वतंत्र हुआ।"),
    createGovQuestion("rail-gk-6","GK","GK","Largest ocean?","सबसे बड़ा महासागर?",["Pacific","Atlantic","Indian","Arctic","प्रशांत","अटलांटिक","हिंद","आर्कटिक"],"A","Pacific largest.","प्रशांत सबसे बड़ा।"),
    createGovQuestion("rail-gk-7","GK","GK","Earth shape?","पृथ्वी का आकार?",["Round","Flat","Square","Triangle","गोल","समतल","चौकोर","त्रिकोण"],"A","Earth is round.","पृथ्वी गोल है।"),
    createGovQuestion("rail-gk-8","GK","GK","Sun is a:","सूर्य क्या है?",["Star","Planet","Moon","None","तारा","ग्रह","चंद्रमा","कोई नहीं"],"A","Sun is star.","सूर्य तारा है।"),
    createGovQuestion("rail-gk-9","GK","GK","National flower?","राष्ट्रीय फूल?",["Lotus","Rose","Lily","Sunflower","कमल","गुलाब","लिली","सूरजमुखी"],"A","Lotus flower.","कमल फूल।"),
    createGovQuestion("rail-gk-10","GK","GK","Which is a festival?","कौन सा त्योहार है?",["Diwali","Table","Chair","Pen","दीवाली","मेज","कुर्सी","पेन"],"A","Diwali festival.","दीवाली त्योहार।"),
  ],
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