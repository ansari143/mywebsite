export type CountryTopic = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    points: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export type CountryResource = {
  slug: string;
  name: string;
  flag: string;
  description: string;
  heroTitle: string;
  overview: string[];
  highlights: string[];
  popularTopics: {
    slug: string;
    label: string;
    short: string;
  }[];
  topics: CountryTopic[];
};

export const countryResources: CountryResource[] = [
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    heroTitle: "Study, Careers, and Student Planning in the USA",
    description:
      "Country-specific resources for studying in the USA, scholarships, student visas, work options, and career planning.",
    overview: [
      "The USA is one of the most popular destinations for international students because of its university variety, research culture, flexible course structures, and broad career exposure.",
      "Students typically explore undergraduate, master's, certificate, and career-focused programs depending on their academic background and budget.",
      "Planning for the USA should include academic fit, English test readiness, tuition range, city cost, and post-study employment strategy."
    ],
    highlights: [
      "Large university ecosystem",
      "Strong STEM and business pathways",
      "High-value scholarships at selected institutions",
      "Optional Practical Training for eligible graduates"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "Programs, eligibility, and planning routes" },
      { slug: "student-visa-guide", label: "Student Visa Guide", short: "Simple overview of the F-1 journey" },
      { slug: "scholarships", label: "Scholarships", short: "Funding options and practical scholarship tips" },
      { slug: "jobs-and-work-opportunities", label: "Jobs & Work Opportunities", short: "Part-time work, OPT, and career direction" }
    ],
    topics: [
      {
        slug: "study-options",
        title: "Study Options in the USA",
        description: "Understand undergraduate, master's, community college, and certificate pathways in the USA.",
        intro:
          "Students planning to study in the USA should choose a route based on academic level, budget, long-term goals, and readiness for international study.",
        sections: [
          {
            title: "Popular Pathways",
            points: [
              "After 12th, students usually explore bachelor's degrees, community college transfer routes, or selected diploma and certificate pathways depending on institution rules.",
              "After graduation, students often consider master's programs, STEM-focused programs, MBA options, or short professional certificates in high-demand areas.",
              "Some students prefer starting with lower-cost options and then transferring to a larger university later."
            ]
          },
          {
            title: "What to Compare Before Applying",
            points: [
              "Compare tuition, living costs, city affordability, university ranking relevance, internship ecosystem, and scholarship potential.",
              "A strong decision should also consider student support services, class flexibility, and career office outcomes.",
              "It is usually safer to shortlist institutions by budget fit first and prestige second."
            ]
          }
        ],
        faq: [
          {
            question: "Can students study in the USA after 12th?",
            answer:
              "Yes. Many students explore undergraduate programs in the USA after 12th, depending on academic profile, English proficiency, and financial planning."
          },
          {
            question: "Is community college a good option in the USA?",
            answer:
              "It can be a practical lower-cost route for many students, especially when paired with a transfer plan to a four-year university."
          }
        ]
      },
      {
        slug: "student-visa-guide",
        title: "USA Student Visa Guide",
        description: "A simple student-focused overview of visa planning for the USA.",
        intro:
          "Visa planning should start only after students understand their course, institution, financial documents, and academic intent clearly.",
        sections: [
          {
            title: "What Students Should Prepare",
            points: [
              "Students typically prepare admission documents, proof of funds, academic records, identity documents, and institution-issued paperwork as required by official processes.",
              "Consistency across applications, finances, and academic goals is important because students may need to explain their plan clearly.",
              "Students should always review the latest official embassy and government instructions before proceeding."
            ]
          },
          {
            title: "Common Mistakes to Avoid",
            points: [
              "Do not rely only on hearsay, social media clips, or unverified agents for visa preparation.",
              "Avoid unclear academic goals, incomplete financial preparation, and inconsistent supporting documents.",
              "Students should understand why they selected a course, institution, and long-term direction."
            ]
          }
        ],
        faq: [
          {
            question: "Should students verify visa rules from official sources?",
            answer:
              "Yes. Visa rules and document processes can change, so students should always verify current instructions from official government or embassy websites."
          },
          {
            question: "Is financial planning important for a USA visa?",
            answer:
              "Yes. Clear and realistic financial planning is one of the most important parts of international study preparation."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships for the USA",
        description: "Explore common scholarship directions and practical scholarship planning tips for the USA.",
        intro:
          "Scholarships can reduce the financial burden, but students should plan early and understand that scholarships vary by institution, merit level, program, and student profile.",
        sections: [
          {
            title: "Types of Scholarship Support",
            points: [
              "Students may find institution-based merit scholarships, need-aware support, departmental awards, assistantships at higher levels, and external scholarship programs.",
              "Some universities automatically consider students for scholarships, while others require separate applications and documents.",
              "A strong profile often combines academics, English readiness, statement quality, and timely applications."
            ]
          },
          {
            title: "Smart Scholarship Strategy",
            points: [
              "Apply across a mix of ambitious, realistic, and budget-safe institutions.",
              "Keep essays, recommendation planning, and deadline tracking organized.",
              "Do not assume one scholarship result will decide your entire study plan."
            ]
          }
        ],
        faq: [
          {
            question: "Can international students get scholarships in the USA?",
            answer:
              "Yes. Many institutions offer scholarships, but the amount and eligibility differ by university, program, and student profile."
          },
          {
            question: "Should scholarship details be checked on official university pages?",
            answer:
              "Yes. Scholarship terms, amounts, and deadlines should always be verified directly from official university sources."
          }
        ]
      },
      {
        slug: "jobs-and-work-opportunities",
        title: "Jobs and Work Opportunities in the USA",
        description: "Understand part-time work, campus opportunities, and post-study career planning in the USA.",
        intro:
          "Students often choose the USA for both education quality and long-term career exposure, but work opportunities depend on rules, course type, skills, and employer demand.",
        sections: [
          {
            title: "During Study",
            points: [
              "Students should understand official work rules carefully and not assume every work option is automatically available.",
              "Campus jobs, assistant roles, and selected student opportunities may help build confidence, communication skills, and early exposure.",
              "Academic performance should remain the first priority while planning part-time work."
            ]
          },
          {
            title: "After Graduation",
            points: [
              "Post-study work planning often depends on the program, field, and official work pathways available to graduates.",
              "Students should build resumes, internship experience, communication ability, and practical skills well before graduation.",
              "High-demand fields such as software, analytics, healthcare, engineering, and business operations can offer strong long-term value."
            ]
          }
        ],
        faq: [
          {
            question: "Can students work while studying in the USA?",
            answer:
              "Students may have limited work options depending on official rules and institution guidance, so they should verify what is permitted before starting any work."
          },
          {
            question: "Do skills matter for jobs after graduation?",
            answer:
              "Yes. Practical skills, communication, internships, and job readiness are often as important as the degree itself."
          }
        ]
      }
    ]
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    heroTitle: "Study, Careers, and Student Planning in Canada",
    description:
      "Country-specific resources for Canada covering study planning, scholarships, student permits, and work opportunities.",
    overview: [
      "Canada is a strong option for students looking for quality education, comparatively structured immigration pathways, and a welcoming international student environment.",
      "Students often compare university and college options based on cost, location, employability, and long-term settlement goals.",
      "Planning should include tuition, living costs, weather adaptation, city choices, and job-market alignment."
    ],
    highlights: [
      "Popular for international students",
      "Good balance of education and work planning",
      "Wide range of colleges and universities",
      "Career-focused programs in many provinces"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "University, college, and program planning" },
      { slug: "student-visa-guide", label: "Study Permit Guide", short: "Core planning for student permit preparation" },
      { slug: "scholarships", label: "Scholarships", short: "Funding support and scholarship planning tips" },
      { slug: "jobs-and-work-opportunities", label: "Jobs & Work Opportunities", short: "Work planning during and after study" }
    ],
    topics: []
  },
  {
    slug: "uk",
    name: "UK",
    flag: "🇬🇧",
    heroTitle: "Study, Careers, and Student Planning in the UK",
    description:
      "Country-specific resources for the UK covering study routes, scholarships, student visas, and employability planning.",
    overview: [
      "The UK is known for globally recognized universities, shorter course duration in some programs, and strong academic reputation.",
      "Students usually compare the UK based on program quality, city costs, scholarship possibilities, and post-study opportunities.",
      "A good UK plan should combine course fit, affordability, and realistic employment preparation."
    ],
    highlights: [
      "Globally recognized institutions",
      "Shorter master's pathways in many cases",
      "Strong academic brand value",
      "Good option for business, law, and many specialized programs"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "Course planning and education routes" },
      { slug: "student-visa-guide", label: "Student Visa Guide", short: "Simple overview of UK student planning" },
      { slug: "scholarships", label: "Scholarships", short: "Funding and scholarship awareness" },
      { slug: "jobs-and-work-opportunities", label: "Jobs & Work Opportunities", short: "Part-time work and post-study planning" }
    ],
    topics: []
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    heroTitle: "Study, Careers, and Student Planning in Australia",
    description:
      "Country-specific resources for Australia covering study planning, scholarships, visas, and work opportunities.",
    overview: [
      "Australia attracts international students because of quality education, practical learning, and selected post-study career opportunities.",
      "Students often evaluate Australia by tuition, cost of living, city choice, part-time work support, and long-term job potential.",
      "A practical Australia plan should be budget-aware and skill-focused from the beginning."
    ],
    highlights: [
      "Strong practical learning environment",
      "Popular destination for international students",
      "Broad course options",
      "Useful for both academic and vocational planning"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "Universities, colleges, and academic choices" },
      { slug: "student-visa-guide", label: "Student Visa Guide", short: "Core preparation guidance for students" },
      { slug: "scholarships", label: "Scholarships", short: "Funding support and scholarship planning" },
      { slug: "jobs-and-work-opportunities", label: "Jobs & Work Opportunities", short: "Student work and post-study direction" }
    ],
    topics: []
  },
  {
    slug: "europe",
    name: "Europe",
    flag: "🇪🇺",
    heroTitle: "Study, Careers, and Student Planning in Europe",
    description:
      "Country-specific resources for Europe covering study destinations, scholarships, visas, and career planning.",
    overview: [
      "Europe offers diverse study options across multiple countries, so students should compare destination-specific tuition, language environment, and career potential carefully.",
      "Some European destinations are known for affordability, others for prestige, and some for technical or research excellence.",
      "Students should evaluate Europe country by country instead of treating it as one uniform destination."
    ],
    highlights: [
      "Wide variety of countries and systems",
      "Some lower-cost options compared with other destinations",
      "Good value in specialized and research-led programs",
      "Useful for students who compare affordability with quality"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "Compare countries and program types" },
      { slug: "student-visa-guide", label: "Student Visa Guide", short: "Basic visa planning awareness" },
      { slug: "scholarships", label: "Scholarships", short: "Funding support across selected destinations" },
      { slug: "jobs-and-work-opportunities", label: "Jobs & Work Opportunities", short: "Student work and career planning" }
    ],
    topics: []
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    heroTitle: "Study, Careers, and Competitive Planning in India",
    description:
      "Country-specific resources for India including stream selection, exams, scholarships, and career guidance after 10th and 12th.",
    overview: [
      "India remains an important focus for students who want strong local guidance after 10th and 12th, entrance exam direction, scholarship awareness, and practical course comparisons.",
      "Students in India often need help balancing stream choice, exam pressure, affordability, college research, and long-term employability.",
      "A strong India section should connect school choices with real career outcomes and skills."
    ],
    highlights: [
      "Strong alignment with current student audience",
      "Useful for stream selection and entrance planning",
      "High relevance for scholarships and career tests",
      "Supports both traditional and emerging career paths"
    ],
    popularTopics: [
      { slug: "study-options", label: "Study Options", short: "Streams, degrees, diplomas, and career routes" },
      { slug: "competitive-exams", label: "Competitive Exams", short: "Entrance awareness and planning" },
      { slug: "scholarships", label: "Scholarships", short: "Funding and support options" },
      { slug: "jobs-and-career-paths", label: "Jobs & Career Paths", short: "Career direction and practical next steps" }
    ],
    topics: [
      {
        slug: "study-options",
        title: "Study Options in India",
        description: "Compare streams, degrees, diploma routes, and practical choices in India.",
        intro:
          "Students in India need clear guidance after 10th and 12th because stream choice, budget, entrance preparation, and career awareness all affect long-term outcomes.",
        sections: [
          {
            title: "After 10th and 12th",
            points: [
              "After 10th, students usually compare Science, Commerce, Arts, diploma, ITI, and other practical technical routes based on interest and future goals.",
              "After 12th, students often compare degree programs, professional courses, entrance-exam pathways, and skill-based tracks.",
              "The best route should connect subject strengths with affordability and real employability."
            ]
          },
          {
            title: "What Students Should Evaluate",
            points: [
              "Students should compare entrance requirements, fee ranges, college quality, local availability, and long-term salary direction.",
              "Popular choices should not automatically replace personally suitable choices.",
              "Parents and students should think in terms of fit, not social pressure."
            ]
          }
        ],
        faq: [
          {
            question: "Should students only choose traditional degrees in India?",
            answer:
              "No. Depending on the student's goals, diploma, vocational, skill-based, and emerging tech routes can also be valuable."
          },
          {
            question: "Is stream selection important in India?",
            answer:
              "Yes. Stream selection often affects later eligibility, exam routes, and career planning."
          }
        ]
      },
      {
        slug: "competitive-exams",
        title: "Competitive Exams in India",
        description: "Simple guidance on entrance and competitive exam planning in India.",
        intro:
          "Many Indian students need early awareness of entrance exams because preparation strategy often starts well before final applications.",
        sections: [
          {
            title: "Exam Awareness",
            points: [
              "Different careers and colleges may require different entrance exams, so students should identify target pathways early.",
              "Exam planning should include syllabus familiarity, timeline building, and realistic self-assessment.",
              "Students should verify current patterns, eligibility, and schedules from official exam authorities."
            ]
          },
          {
            title: "Practical Planning",
            points: [
              "A good exam plan includes time management, concept revision, mock testing, and backup options.",
              "Students should keep both ambition and practicality in balance.",
              "Career testing and stream alignment can reduce random preparation."
            ]
          }
        ],
        faq: [
          {
            question: "Should students verify exam details from official websites?",
            answer:
              "Yes. Exam dates, patterns, and eligibility can change, so official sources should always be checked."
          },
          {
            question: "Is backup planning important for competitive exams?",
            answer:
              "Yes. Students should keep alternative colleges or career routes in mind while preparing seriously."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships in India",
        description: "Understand common scholarship directions and planning tips for Indian students.",
        intro:
          "Scholarships can support students from different backgrounds, but students should research eligibility, deadlines, and documentation carefully.",
        sections: [
          {
            title: "Where Scholarships May Come From",
            points: [
              "Scholarships may come from government portals, state programs, institutions, private foundations, and category-specific support systems.",
              "Students should gather documents early and avoid missing deadlines.",
              "Eligibility can vary by marks, income, category, region, or course type."
            ]
          },
          {
            title: "Practical Tips",
            points: [
              "Keep academic records, identity documents, bank details, and certificates organized when applying.",
              "Students should not assume one rejection means there are no funding options.",
              "Always verify current criteria from official portals."
            ]
          }
        ],
        faq: [
          {
            question: "Are scholarships in India only for toppers?",
            answer:
              "No. Some scholarships are merit-based, while others may depend on income, category, region, or specific eligibility conditions."
          },
          {
            question: "Should students track scholarship deadlines carefully?",
            answer:
              "Yes. Missing a deadline is one of the most common reasons students lose funding opportunities."
          }
        ]
      },
      {
        slug: "jobs-and-career-paths",
        title: "Jobs and Career Paths in India",
        description: "Practical career planning for students in India across traditional and modern paths.",
        intro:
          "India offers both traditional and emerging career pathways, so students should evaluate their options based on real market demand and skill development, not just public perception.",
        sections: [
          {
            title: "Popular Career Directions",
            points: [
              "Students often compare engineering, medical, teaching, government jobs, commerce careers, banking, design, data, digital work, and entrepreneurship pathways.",
              "The right decision depends on aptitude, effort capacity, budget, and long-term interest.",
              "Career tests can help narrow down broad confusion into practical next steps."
            ]
          },
          {
            title: "Skills Matter More Than Ever",
            points: [
              "Degrees remain valuable, but employers increasingly care about communication, digital literacy, real projects, and problem-solving ability.",
              "Students should combine academic choices with skills that improve employability.",
              "A resource platform should guide both education planning and job readiness."
            ]
          }
        ],
        faq: [
          {
            question: "Do skills matter along with degrees in India?",
            answer:
              "Yes. Many students improve outcomes by combining academic study with practical skills and project-based learning."
          },
          {
            question: "Can career tests help students in India?",
            answer:
              "Yes. Career tests can help students understand their interests and strengths before choosing a stream or career direction."
          }
        ]
      }
    ]
  }
];

const commonTopics = [
  {
    slug: "study-options",
    titlePrefix: "Study Options in",
    descriptionPrefix: "Compare study pathways, program types, and practical planning in",
    introPrefix:
      "Students planning for",
    sections: [
      {
        title: "How to Compare Your Options",
        points: [
          "Students should compare universities, colleges, course structures, affordability, location, and long-term employability before deciding.",
          "The right option should balance ambition with budget and practical readiness.",
          "A country choice should never be made only because it is currently trending online."
        ]
      },
      {
        title: "Planning Mindset",
        points: [
          "Students should shortlist options that fit academic level, finances, and career goals.",
          "Language, city environment, work culture, and support systems should also be part of the decision.",
          "Official institution websites should always be checked before applying."
        ]
      }
    ],
    faq: [
      {
        question: "Should students compare cost and course quality together?",
        answer:
          "Yes. A good study destination is not only about prestige. It should also be realistic, affordable, and aligned with long-term goals."
      },
      {
        question: "Should students verify institutions directly?",
        answer:
          "Yes. Students should always verify course details, eligibility, and application rules directly from official institution websites."
      }
    ]
  },
  {
    slug: "student-visa-guide",
    titlePrefix: "Student Visa Guide for",
    descriptionPrefix: "Simple visa-planning guidance for students targeting",
    introPrefix:
      "Students preparing for",
    sections: [
      {
        title: "Documents and Preparation",
        points: [
          "Students should organize admission records, finances, identity documents, and other required paperwork well before deadlines.",
          "Consistency in course choice, finances, and academic intent is important during preparation.",
          "Rules may change, so current government or embassy guidance should always be checked."
        ]
      },
      {
        title: "Avoid These Errors",
        points: [
          "Do not depend on unverified shortcuts, rumors, or promises that sound too easy.",
          "Incomplete documentation and unclear planning often create unnecessary risk.",
          "Students should understand their own application clearly instead of depending entirely on others."
        ]
      }
    ],
    faq: [
      {
        question: "Should students verify visa requirements from official sources?",
        answer:
          "Yes. Visa procedures can change, so official embassy or government websites should always be used as the final reference."
      },
      {
        question: "Is clear planning important for student visas?",
        answer:
          "Yes. Strong planning across academics, finances, and documents supports a more confident application process."
      }
    ]
  },
  {
    slug: "scholarships",
    titlePrefix: "Scholarships in",
    descriptionPrefix: "Scholarship guidance and funding awareness for students targeting",
    introPrefix:
      "Students interested in",
    sections: [
      {
        title: "Scholarship Direction",
        points: [
          "Scholarship support may come from universities, colleges, foundations, selected government-linked programs, or external organizations.",
          "Eligibility often depends on academics, profile strength, need, timing, and program type.",
          "Students should keep all applications organized and deadline-aware."
        ]
      },
      {
        title: "How to Improve Scholarship Chances",
        points: [
          "Research multiple institutions and do not rely on one option only.",
          "Prepare academic documents, statements, and recommendations carefully where needed.",
          "Always verify scholarship terms and updates from official sources."
        ]
      }
    ],
    faq: [
      {
        question: "Can international students find scholarships?",
        answer:
          "Yes. Many destinations and institutions provide scholarship support, but availability and eligibility vary widely."
      },
      {
        question: "Should students check scholarship deadlines directly?",
        answer:
          "Yes. Official scholarship pages should always be checked for current deadlines and requirements."
      }
    ]
  },
  {
    slug: "jobs-and-work-opportunities",
    titlePrefix: "Jobs and Work Opportunities in",
    descriptionPrefix: "Student and post-study work planning in",
    introPrefix:
      "Students choosing",
    sections: [
      {
        title: "During Study",
        points: [
          "Students should understand permitted work rules and keep academics as the first priority.",
          "Early work exposure may help with confidence, communication, and adaptation.",
          "All work-related decisions should be checked against official rules."
        ]
      },
      {
        title: "After Study",
        points: [
          "Post-study opportunities depend on field, local demand, rules, and the student's skill profile.",
          "Students should build job-ready skills, strong resumes, and practical projects before graduating.",
          "Choosing a country should include employability planning, not only admission planning."
        ]
      }
    ],
    faq: [
      {
        question: "Do students need skills as well as degrees?",
        answer:
          "Yes. Employers often value communication, practical ability, and readiness along with formal qualifications."
      },
      {
        question: "Should work rules be verified officially?",
        answer:
          "Yes. Students should verify current work rights and conditions from official sources before taking up any work."
      }
    ]
  }
] as const;

function buildDefaultTopics(countryName: string): CountryTopic[] {
  return commonTopics.map((topic) => ({
    slug: topic.slug,
    title: `${topic.titlePrefix} ${countryName}`,
    description: `${topic.descriptionPrefix} ${countryName}.`,
    intro: `${topic.introPrefix} ${countryName} should compare costs, timelines, official rules, and long-term career value before making a final decision.`,
    sections: topic.sections.map((section) => ({
      title: section.title,
      points: [...section.points],
    })),
    faq: topic.faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  }));
}

export const countryResourcesWithTopics = countryResources.map((country) => ({
  ...country,
  topics: country.topics.length ? country.topics : buildDefaultTopics(country.name)
}));

export function getCountryResource(slug: string) {
  return countryResourcesWithTopics.find((country) => country.slug === slug);
}

export function getCountryTopic(countrySlug: string, topicSlug: string) {
  const country = getCountryResource(countrySlug);
  if (!country) return null;

  const topic = country.topics.find((item) => item.slug === topicSlug);
  if (!topic) return null;

  return { country, topic };
}
