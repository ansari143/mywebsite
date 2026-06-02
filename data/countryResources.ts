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
    topics: [
      {
        slug: "study-options",
        title: "Study Options in Canada",
        description: "Understand university, college, PG diploma, and transfer pathways in Canada with practical planning points.",
        intro:
          "Canada offers multiple study routes, and the best choice depends on your budget, target career, and preferred province. Students should choose a pathway that is both affordable and employability-focused.",
        sections: [
          {
            title: "Main Study Pathways",
            points: [
              "Students after 12th usually compare bachelor's programs at universities with diploma or advanced diploma routes at colleges.",
              "Graduates often choose between master's programs and applied PG diplomas based on budget, profile strength, and job goals.",
              "Transfer routes can work well when students start in a cost-effective college and move to a university with clear articulation rules."
            ]
          },
          {
            title: "How to Choose Province and Institution",
            points: [
              "Province selection matters because tuition, rent, weather, and local job markets vary significantly across Canada.",
              "Students should compare not just rank, but also co-op availability, internship ecosystem, and graduate employment outcomes.",
              "A balanced shortlist usually includes one aspirational option, two realistic options, and one budget-safe option."
            ]
          }
        ],
        faq: [
          {
            question: "Should students choose university or college in Canada?",
            answer:
              "It depends on career goals and budget. Universities are often stronger for academic and research pathways, while colleges can provide practical and affordable job-focused training."
          },
          {
            question: "Is province choice important in Canada?",
            answer:
              "Yes. Province choice affects tuition, living cost, part-time opportunities, weather adaptation, and long-term career planning."
          }
        ]
      },
      {
        slug: "student-visa-guide",
        title: "Canada Study Permit Guide",
        description: "A practical student-first overview of study permit preparation for Canada.",
        intro:
          "A strong Canada study permit file is built through early document planning, transparent finances, and clear academic intent. Students should avoid last-minute preparation and unclear explanation of goals.",
        sections: [
          {
            title: "What to Prepare Before Applying",
            points: [
              "Keep admission records, financial documents, identity proof, and academic records ready in a structured checklist.",
              "Students should clearly explain why the chosen course in Canada makes sense for their previous education and future career path.",
              "Any gap period should be explained honestly with timeline clarity and supporting records."
            ]
          },
          {
            title: "Frequent Permit Mistakes",
            points: [
              "Generic statements with no clear career objective can weaken the file quality.",
              "Insufficient financial explanation or inconsistent documents often create avoidable risk.",
              "Students should never rely on unofficial shortcuts and must verify latest rules from official Canadian sources."
            ]
          }
        ],
        faq: [
          {
            question: "How early should students start Canada study permit planning?",
            answer:
              "Start as soon as admission planning begins. Early preparation improves document consistency and reduces last-minute errors."
          },
          {
            question: "Is financial clarity important in permit applications?",
            answer:
              "Yes. Clear, credible, and well-documented finances are one of the most important parts of a strong study permit file."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships in Canada",
        description: "Explore scholarship directions in Canada and practical strategies for international students.",
        intro:
          "Canada scholarships can reduce costs, but students should plan realistically and start early. Funding depends on profile strength, institution type, and program level.",
        sections: [
          {
            title: "Common Scholarship Paths",
            points: [
              "Students may find entrance scholarships, merit awards, department-based scholarships, and limited external funding options.",
              "Graduate students may have stronger opportunities through assistantships or research-related support in selected programs.",
              "Scholarship availability differs by institution, so always check official university pages for updated details."
            ]
          },
          {
            title: "How to Improve Scholarship Chances",
            points: [
              "Build a focused profile that shows academic consistency, practical achievements, and a clear career direction.",
              "Prepare a strong statement that explains fit between your background, chosen program, and future goals.",
              "Do not depend on one scholarship outcome; apply across a realistic mix of institutions."
            ]
          }
        ],
        faq: [
          {
            question: "Can international students get scholarships in Canada?",
            answer:
              "Yes. Many institutions offer scholarships, but amounts and eligibility vary by course, level, and profile quality."
          },
          {
            question: "Should scholarship planning start before applications?",
            answer:
              "Yes. Early planning helps with profile building, essay quality, and deadline management."
          }
        ]
      },
      {
        slug: "jobs-and-work-opportunities",
        title: "Jobs and Work Opportunities in Canada",
        description: "Understand student work planning and post-study career preparation in Canada.",
        intro:
          "Students should treat work planning as part of their full education strategy. Good outcomes depend on program fit, skill-building, communication ability, and local job readiness.",
        sections: [
          {
            title: "During Study",
            points: [
              "Students should understand official work limits and ensure studies remain the primary priority.",
              "Part-time work helps with confidence and local exposure, but it should not be treated as the main funding plan.",
              "Campus roles and structured internships often provide stronger resume value than random low-skill work."
            ]
          },
          {
            title: "After Graduation",
            points: [
              "Post-study opportunities improve when students build local experience through co-op, internships, and networking before graduation.",
              "Students should prepare role-specific resumes and communication skills early rather than waiting for final semester.",
              "Job outcomes are usually stronger when course selection is aligned with demand in the chosen province."
            ]
          }
        ],
        faq: [
          {
            question: "Can students work while studying in Canada?",
            answer:
              "Students may have work options depending on official conditions and permit status. Always verify current rules from official government sources."
          },
          {
            question: "What improves job outcomes after study in Canada?",
            answer:
              "Practical skills, local internship exposure, communication strength, and targeted job applications improve outcomes significantly."
          }
        ]
      }
    ]
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
    topics: [
      {
        slug: "study-options",
        title: "Study Options in the UK",
        description: "Compare undergraduate, taught master's, foundation, and specialized pathways in the UK.",
        intro:
          "The UK offers multiple formats including shorter master's programs, but students should evaluate total value beyond duration. Course quality, city cost, and career support remain critical.",
        sections: [
          {
            title: "Popular UK Pathways",
            points: [
              "Students after 12th commonly choose bachelor's degrees or foundation-to-degree routes depending on profile readiness.",
              "Graduates often choose one-year taught master's programs, especially in business, data, management, and engineering tracks.",
              "Program accreditation and industry relevance should be checked before finalizing shortlists."
            ]
          },
          {
            title: "Choosing the Right UK Option",
            points: [
              "One-year course length can save time, but students must ensure job readiness and internship planning are not ignored.",
              "City choice matters because London and non-London living costs can differ heavily.",
              "Students should compare module structure, career office support, and alumni outcomes by specific program."
            ]
          }
        ],
        faq: [
          {
            question: "Are one-year master's programs in the UK worth it?",
            answer:
              "They can be high value when students choose a strong program with practical outcomes and prepare job strategy from the start."
          },
          {
            question: "Should students prioritize ranking only in the UK?",
            answer:
              "No. Students should balance ranking with affordability, course fit, and employability support."
          }
        ]
      },
      {
        slug: "student-visa-guide",
        title: "UK Student Visa Guide",
        description: "A practical overview of UK student visa planning for international students.",
        intro:
          "A strong UK student visa process depends on clear academic purpose, clean documentation, and realistic financial planning. Students should avoid rushed and unverified preparation.",
        sections: [
          {
            title: "Core Preparation Points",
            points: [
              "Organize admission, finance, identity, and academic records in advance to avoid mistakes near deadlines.",
              "Students should be ready to explain program choice and post-study direction clearly and confidently.",
              "Any inconsistent timeline or unclear educational intent should be corrected before submission."
            ]
          },
          {
            title: "Avoidable Errors",
            points: [
              "Do not depend on unofficial advice over official UK visa guidance.",
              "Late document preparation can create avoidable rejection risk.",
              "Students should verify current policy updates from official UK government channels."
            ]
          }
        ],
        faq: [
          {
            question: "Should students verify UK visa rules from official sources?",
            answer:
              "Yes. Visa policies can change, so official UK government websites should always be your final reference."
          },
          {
            question: "Is financial planning essential for UK visa applications?",
            answer:
              "Yes. Clear, documented funding is a key part of visa preparation and reduces avoidable uncertainty."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships in the UK",
        description: "Understand scholarship opportunities and practical planning strategies for UK study pathways.",
        intro:
          "Scholarships in the UK vary by university, course, and student profile. Students should plan with realistic expectations and apply across multiple funding options.",
        sections: [
          {
            title: "Where Scholarship Support Comes From",
            points: [
              "Students may find institution-specific scholarships, regional awards, and selected external funding programs.",
              "Some scholarships are automatically considered, while others require separate applications and statements.",
              "Scholarship conditions often differ between undergraduate and postgraduate levels."
            ]
          },
          {
            title: "Practical Scholarship Strategy",
            points: [
              "Start early and maintain a deadline tracker for each target institution.",
              "Use clear evidence in statements instead of generic motivational content.",
              "Keep a balanced university list so scholarship uncertainty does not break your complete plan."
            ]
          }
        ],
        faq: [
          {
            question: "Can international students get scholarships in the UK?",
            answer:
              "Yes. Many UK institutions provide scholarships, but amount and eligibility vary significantly by program and profile."
          },
          {
            question: "Are scholarships enough to fund everything?",
            answer:
              "Sometimes, but often not fully. Students should combine scholarships with realistic financial planning."
          }
        ]
      },
      {
        slug: "jobs-and-work-opportunities",
        title: "Jobs and Work Opportunities in the UK",
        description: "Plan part-time work and post-study employability strategy in the UK with practical student guidance.",
        intro:
          "Students should connect UK education planning with employability from the first semester. Work outcomes improve when students build practical skills and communication strength early.",
        sections: [
          {
            title: "During Study",
            points: [
              "Part-time work can help with exposure and confidence, but academics and skill growth should remain the main priority.",
              "Students should verify official work conditions and avoid non-compliant arrangements.",
              "Roles that improve communication and professional habits can add resume value beyond income support."
            ]
          },
          {
            title: "After Graduation",
            points: [
              "Graduation outcomes improve when students build networking, internship, and portfolio evidence before the final term.",
              "Program choice should be linked to sectors with real hiring activity and skill demand.",
              "Students should prepare UK-style CVs and interview readiness early, not after course completion."
            ]
          }
        ],
        faq: [
          {
            question: "Can students work while studying in the UK?",
            answer:
              "Students may have work options depending on visa conditions and official rules. Always verify current guidance from official UK sources."
          },
          {
            question: "What helps post-study job outcomes in the UK?",
            answer:
              "Strong communication, internship exposure, employer-facing projects, and program-market alignment improve job outcomes."
          }
        ]
      }
    ]
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
    topics: [
      {
        slug: "study-options",
        title: "Study Options in Australia",
        description: "Compare university degrees, pathway programs, and vocational options in Australia.",
        intro:
          "Australia offers both university and vocational pathways, so students should choose by long-term job direction, budget, and learning style rather than popularity alone.",
        sections: [
          {
            title: "Main Academic Routes",
            points: [
              "After 12th, students often choose bachelor's programs or pathway/foundation routes depending on profile and institution requirements.",
              "Graduates commonly compare master's programs with practical specializations in business, IT, engineering, and healthcare-related areas.",
              "Vocational and practical tracks can also be valuable for students targeting skill-focused outcomes."
            ]
          },
          {
            title: "Planning the Right Australian Path",
            points: [
              "City-level cost differences are important, especially for accommodation and transport.",
              "Students should compare industry links, internship scope, and practical learning format before committing.",
              "A good shortlist includes both academic-fit and budget-fit options to reduce decision risk."
            ]
          }
        ],
        faq: [
          {
            question: "Is Australia suitable for practical career-focused study?",
            answer:
              "Yes. Many programs are designed with practical orientation, but students should still verify quality and outcomes at institution level."
          },
          {
            question: "Should students choose city based on cost and opportunities together?",
            answer:
              "Yes. Cost alone or prestige alone is not enough. Students should evaluate affordability with career exposure."
          }
        ]
      },
      {
        slug: "student-visa-guide",
        title: "Australia Student Visa Guide",
        description: "A clear student-focused guide for planning Australian visa preparation responsibly.",
        intro:
          "Visa preparation should start with clean documentation, clear academic goals, and realistic financial planning. Students should avoid incomplete or rushed submissions.",
        sections: [
          {
            title: "Preparation Essentials",
            points: [
              "Keep admission records, financial statements, identity proof, and academic documents organized and consistent.",
              "Students should clearly explain why the selected Australian course aligns with background and future career plans.",
              "Any education gap or profile transition should be addressed with clarity and supporting context."
            ]
          },
          {
            title: "Common Visa Planning Issues",
            points: [
              "Relying on outdated information can cause major mistakes in submission.",
              "Weak financial clarity or contradictory statements can reduce application quality.",
              "Always verify policy updates from official Australian government sources."
            ]
          }
        ],
        faq: [
          {
            question: "Is early visa preparation useful for Australia applications?",
            answer:
              "Yes. Early planning improves consistency and reduces last-minute documentation errors."
          },
          {
            question: "Should students depend on unofficial visa shortcuts?",
            answer:
              "No. Students should always follow official processes and verified guidance only."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships in Australia",
        description: "Explore practical scholarship planning in Australia for international students.",
        intro:
          "Australia scholarships can reduce cost pressure, but students should evaluate realistic funding chances and prepare application quality early.",
        sections: [
          {
            title: "Scholarship Directions",
            points: [
              "Students can find institution-level merit support and selected externally funded programs depending on profile and course.",
              "Scholarship competitiveness usually increases for high-demand programs and top institutions.",
              "Eligibility and award size vary, so official course pages should always be checked."
            ]
          },
          {
            title: "How to Improve Funding Outcomes",
            points: [
              "Build a clear profile story with academic consistency and practical achievements.",
              "Submit complete and specific statements instead of generic essay content.",
              "Apply to a balanced set of institutions instead of relying on one scholarship outcome."
            ]
          }
        ],
        faq: [
          {
            question: "Do Australian universities offer scholarships for international students?",
            answer:
              "Yes. Many institutions offer scholarship support, but eligibility and award amounts vary by course and profile."
          },
          {
            question: "Can scholarships fully cover costs in Australia?",
            answer:
              "Sometimes, but many awards are partial. Students should combine scholarships with realistic financial planning."
          }
        ]
      },
      {
        slug: "jobs-and-work-opportunities",
        title: "Jobs and Work Opportunities in Australia",
        description: "Plan student work strategy and post-study employability in Australia with practical guidance.",
        intro:
          "Work outcomes in Australia depend on skill-building and planning, not just destination choice. Students should build employability while studying, not after graduation.",
        sections: [
          {
            title: "During Study",
            points: [
              "Students should follow official work rules and keep academic performance as primary focus.",
              "Part-time roles can improve communication and workplace confidence if chosen thoughtfully.",
              "Resume quality improves when students combine study with relevant projects and practical exposure."
            ]
          },
          {
            title: "After Graduation",
            points: [
              "Post-study outcomes improve when students align course choice with sector demand and regional opportunities.",
              "Students should develop interview readiness and local networking before final semester.",
              "Career planning should include backup pathways and skill-upgrade milestones."
            ]
          }
        ],
        faq: [
          {
            question: "Can students work while studying in Australia?",
            answer:
              "Students may have work options under official conditions. Always verify current rules from official sources before starting work."
          },
          {
            question: "What improves employability in Australia after study?",
            answer:
              "Practical skills, communication confidence, internship-like exposure, and targeted applications improve post-study outcomes."
          }
        ]
      }
    ]
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
    topics: [
      {
        slug: "study-options",
        title: "Study Options in Europe",
        description: "Compare European study pathways by country, cost, language, and employability context.",
        intro:
          "Europe should not be treated as one destination. Students need country-by-country comparison because tuition, language environment, and post-study pathways vary significantly.",
        sections: [
          {
            title: "How Europe Differs by Country",
            points: [
              "Some countries are known for affordability, while others are known for prestige or specialization in selected sectors.",
              "English-taught options are available in many destinations, but students should verify language requirements carefully.",
              "Institution quality, city cost, and program format should be evaluated at destination level, not region level."
            ]
          },
          {
            title: "Building a Smart Europe Shortlist",
            points: [
              "Shortlist by country clusters: cost-focused, quality-focused, and balanced options.",
              "Compare visa timelines, housing availability, and internship opportunities before finalizing choices.",
              "Students should keep backup destinations in case policy or admission timelines shift."
            ]
          }
        ],
        faq: [
          {
            question: "Is Europe affordable for international students?",
            answer:
              "It can be, depending on country and city. Some destinations are more affordable than common study-abroad options, but costs still vary by lifestyle and institution."
          },
          {
            question: "Should students compare Europe country by country?",
            answer:
              "Yes. This is essential because tuition, language rules, and career opportunities are not uniform across Europe."
          }
        ]
      },
      {
        slug: "student-visa-guide",
        title: "Europe Student Visa Guide",
        description: "A practical overview of student visa preparation across popular European destinations.",
        intro:
          "Visa planning for Europe requires country-specific preparation because document processes and timelines differ. Students should avoid treating all European destinations as one visa process.",
        sections: [
          {
            title: "Country-Specific Preparation",
            points: [
              "Students should build destination-specific document checklists based on official embassy and government guidance.",
              "Financial proof, admission documents, and housing readiness often play a key role in visa planning.",
              "Timelines can vary, so students should begin preparation early to avoid intake delays."
            ]
          },
          {
            title: "Common Mistakes in Europe Visa Planning",
            points: [
              "Using one generic checklist for all countries can create missing-document issues.",
              "Students should not rely on outdated social media visa advice.",
              "Always verify final requirements from official destination-country sources."
            ]
          }
        ],
        faq: [
          {
            question: "Are visa requirements same across all Europe countries?",
            answer:
              "No. Requirements differ by country, so students must follow official destination-specific guidance."
          },
          {
            question: "How early should students start visa planning for Europe?",
            answer:
              "Start early after shortlisting countries to manage documentation, timelines, and intake schedules smoothly."
          }
        ]
      },
      {
        slug: "scholarships",
        title: "Scholarships in Europe",
        description: "Understand scholarship pathways across European study destinations with realistic planning tips.",
        intro:
          "Scholarship opportunities in Europe vary by country, institution, and program level. Students should combine scholarship exploration with affordable-country strategy.",
        sections: [
          {
            title: "Where Funding Opportunities Appear",
            points: [
              "Students may find country-level scholarships, institution scholarships, and selected external funding opportunities.",
              "Program level and academic profile can influence scholarship competitiveness significantly.",
              "Some lower-cost countries may provide better total value even with smaller scholarship amounts."
            ]
          },
          {
            title: "Practical Scholarship Planning",
            points: [
              "Track deadlines country-wise and avoid combining everything into one generic list.",
              "Prepare clear statements that explain course-country fit and long-term goals.",
              "Use scholarship strategy with budget-safe destination choices for a stable overall plan."
            ]
          }
        ],
        faq: [
          {
            question: "Can students find scholarships across Europe?",
            answer:
              "Yes, but opportunities vary widely by destination and institution. Students should research country and university pages carefully."
          },
          {
            question: "Should students rely only on scholarships to fund Europe study?",
            answer:
              "No. A stable plan combines scholarship opportunities with realistic cost-focused destination selection."
          }
        ]
      },
      {
        slug: "jobs-and-work-opportunities",
        title: "Jobs and Work Opportunities in Europe",
        description: "A practical guide to student work planning and post-study employability across Europe.",
        intro:
          "Europe career outcomes vary by country, language environment, and sector demand. Students should build employability strategy with destination-specific context from the beginning.",
        sections: [
          {
            title: "During Study",
            points: [
              "Students should verify country-specific work permissions and remain compliant with official student conditions.",
              "Part-time roles can support communication growth and local exposure when chosen carefully.",
              "Language learning can become a major employability advantage in many European destinations."
            ]
          },
          {
            title: "After Graduation",
            points: [
              "Post-study planning should include visa pathway understanding, sector demand mapping, and location flexibility.",
              "Students should prepare local-style CVs and interview approaches based on destination expectations.",
              "Career strength improves when academic learning is combined with practical projects and language adaptation."
            ]
          }
        ],
        faq: [
          {
            question: "Is language important for jobs in Europe?",
            answer:
              "In many destinations, yes. English may be enough in some sectors, but local language ability can improve employability significantly."
          },
          {
            question: "Can students work while studying in Europe?",
            answer:
              "Many countries offer student work options under official rules, but conditions differ by destination and should be verified carefully."
          }
        ]
      }
    ]
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

export function isCountryUsingDefaultTopics(countrySlug: string) {
  const originalCountry = countryResources.find((country) => country.slug === countrySlug);
  if (!originalCountry) return false;
  return originalCountry.topics.length === 0;
}
