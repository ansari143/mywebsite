export type CountryGuide = {
  slug: string;
  country: string;
  flag: string;
  title: string;
  description: string;
  intro: string;
  steps?: string[];
  eligibility: string[];
  exams: string[];
  visa?: {
    title: string;
    intro?: string;
    points: string[];
    note?: string;
  };
  tuition: string;
  living: string;
  topCourses: string[];
  work: string[];
  settlement: string[];
  universities: string[];
  scholarships: string[];
  faqs: { question: string; answer: string }[];
   relatedBlogs?: {
    title: string;
    link: string;
  }[];
};

export const countryGuides: CountryGuide[] = [
  {
    slug: "usa",
    country: "USA",
    flag: "🇺🇸",
    title: "Study in USA for International Students",
    description:
      "Explore studying in the USA with a clear guide to eligibility, exams, tuition, living costs, scholarships, work opportunities, student visa basics, and post-study pathways.",
    intro:
      "The United States remains one of the most popular destinations for international students because of its wide program selection, flexible academic system, strong research ecosystem, and global job opportunities across technology, healthcare, business, media, and engineering.",
    steps: [
      "Choose your course, degree level, and preferred universities based on your career goals, academic profile, and budget.",
      "Review entry requirements such as academic transcripts, English proficiency, test scores, and supporting documents.",
      "Prepare for IELTS, TOEFL, SAT, ACT, GRE, or GMAT if required by your chosen institutions.",
      "Shortlist universities and submit applications with SOP, recommendation letters, resume, and academic records.",
      "Compare admission offers based on tuition, scholarships, ranking, city, and career opportunities before accepting one.",
      "Receive the required admission documents from the university, including the I-20 form where applicable.",
      "Arrange financial proof, accommodation planning, health insurance, and travel budgeting.",
      "Apply for the student visa, attend the interview if required, and complete your final pre-departure preparations.",
    ],
    eligibility: [
      "After 12th for undergraduate programs at colleges and universities.",
      "After graduation for master's, MBA, and other postgraduate programs.",
      "Strong academic transcripts, statement of purpose, and supporting documents are commonly required.",
      "English-language proficiency is usually required unless a waiver applies.",
    ],
    exams: [
      "IELTS or TOEFL for English proficiency.",
      "SAT or ACT may be required or optional for some undergraduate admissions.",
      "GRE or GMAT may be required depending on graduate program and university.",
      "Some programs also ask for portfolio, interview, or prerequisite subjects.",
    ],
    visa: {
      title: "USA Student Visa Basics",
      intro:
        "Most international students study in the USA through the F-1 student visa route after receiving admission from an approved institution.",
      points: [
        "Receive admission from a SEVP-approved institution.",
        "Obtain your Form I-20 from the university or college.",
        "Pay the SEVIS fee as required.",
        "Complete the DS-160 visa application form.",
        "Schedule your biometrics and visa interview if applicable.",
        "Attend the visa interview with identity, academic, and financial documents.",
        "Wait for the official decision and finalize travel plans after approval.",
      ],
      note:
        "Visa approval is not guaranteed and depends on official review, documentation, interview performance, and current immigration rules.",
    },
    tuition:
      "$15,000 to $55,000+ per year depending on institution and program.",
    living:
      "$12,000 to $25,000 per year depending on city, housing style, and lifestyle.",
    topCourses: [
      "Computer Science, Data Science, AI, and Software Engineering",
      "Business, Finance, Analytics, and MBA-related pathways",
      "Public Health, Nursing, and Healthcare Administration",
      "Mechanical, Electrical, Civil, and Biomedical Engineering",
      "Media, Design, Communications, and Film",
    ],
    work: [
      "Students on valid study status can usually work limited hours on campus during study periods.",
      "Practical training pathways such as OPT can support work experience after graduation, subject to eligibility.",
      "STEM graduates may have longer work authorization options under applicable rules.",
    ],
    settlement: [
      "The USA can offer strong career growth, but long-term settlement depends on employment-based immigration pathways and current visa rules.",
      "Students should review official post-study work and employer-sponsored visa options before choosing a program.",
    ],
    universities: [
      "University of California system",
      "Arizona State University",
      "Purdue University",
      "Northeastern University",
      "University of Texas system",
    ],
    scholarships: [
      "University merit scholarships",
      "Department-based assistantships for graduate students",
      "Need-based support where available",
      "External scholarships from governments and private organizations",
    ],
    faqs: [
      {
        question: "Can students study in the USA after 12th?",
        answer:
          "Yes. Students can apply to undergraduate programs after completing 12th grade, provided they meet academic and English-language requirements.",
      },
      {
        question: "Is the USA expensive for international students?",
        answer:
          "Costs can be high, but they vary widely by state, university, and lifestyle. Scholarships and assistantships can reduce the total burden.",
      },
      {
        question: "Can students work while studying in the USA?",
        answer:
          "Limited work options may be available depending on visa status and institutional rules. Always verify current regulations from official sources.",
      },
      {
        question: "Which visa is generally used for studying in the USA?",
        answer:
          "Most international students use the F-1 student visa, though the final process should always be verified from official government sources and the admitting institution.",
      },
      {
        question: "Is IELTS mandatory for studying in the USA?",
        answer:
          "Many universities require proof of English proficiency through IELTS, TOEFL, or similar tests, though some institutions may offer waivers or alternatives.",
      },
      {
        question: "Can scholarships reduce study costs in the USA?",
        answer:
          "Yes. Merit scholarships, assistantships, and external funding opportunities can reduce total cost depending on your profile and institution.",
      },
      {
        question: "Can international students stay in the USA after graduation?",
        answer:
          "Some students may qualify for post-study work opportunities such as OPT, and longer-term stay depends on employment pathways and immigration rules at that time.",
      },
      {
        question: "What documents are usually needed for USA admission?",
        answer:
          "Common requirements include transcripts, passport, statement of purpose, recommendation letters, English test scores, and entrance exam scores where applicable.",
      },
    ],
    relatedBlogs: [
  {
    title: "Top 10 High Paying Careers in USA 2026",
    link: "/blog/top-careers-usa-2026",
  },
],
  },

  {
    slug: "canada",
    country: "Canada",
    flag: "🇨🇦",
    title: "Study in Canada for International Students",
    description:
      "Understand studying in Canada with details on eligibility, English tests, tuition, living costs, scholarships, work options, study permit basics, and post-study pathways.",
    intro:
      "Canada is a strong destination for students seeking quality education, multicultural campuses, practical learning, and relatively clear post-study work and immigration pathways in many cases.",
    steps: [
      "Choose your preferred course, province, and institution based on budget, career goals, and long-term plans.",
      "Review academic eligibility, English test requirements, and institution-specific admission criteria.",
      "Prepare IELTS, TOEFL, or other accepted tests along with academic and financial documents.",
      "Apply to universities or colleges and submit all required supporting materials.",
      "Compare offers based on tuition, scholarship options, city, and future work opportunities.",
      "Accept admission and collect documents needed for your study permit application.",
      "Prepare financial proof, tuition payment records, passport, and accommodation planning.",
      "Apply for your Canadian study permit and complete biometrics or other required steps.",
    ],
    eligibility: [
      "After 12th for diploma and bachelor's options.",
      "After graduation for postgraduate diplomas, master's, and selected professional programs.",
      "Academic records, passport, financial documents, and statement of purpose are commonly needed.",
      "English-language proficiency is usually required, and some institutions may also accept other tests.",
    ],
    exams: [
      "IELTS, TOEFL, or other accepted English tests depending on institution.",
      "Some programs may ask for GRE, GMAT, portfolio, or prerequisite coursework.",
    ],
    visa: {
      title: "Canada Study Permit Basics",
      intro:
        "International students generally require a Canadian study permit after receiving admission from a designated learning institution.",
      points: [
        "Receive admission from a designated learning institution.",
        "Collect required documents including passport, admission letter, and financial proof.",
        "Prepare proof of tuition payment where required.",
        "Submit the study permit application online or through the official process.",
        "Complete biometrics and additional documentation if requested.",
        "Wait for official review and final decision before travel planning.",
      ],
      note:
        "Rules, proof requirements, and processing practices can change, so always verify from official Canadian government sources.",
    },
    tuition:
      "CAD 15,000 to CAD 40,000+ per year depending on program and province.",
    living:
      "CAD 10,000 to CAD 20,000+ per year depending on city and accommodation.",
    topCourses: [
      "Data Analytics, AI, and Computer Science",
      "Business, Supply Chain, and Project Management",
      "Healthcare, Nursing, and Public Health",
      "Engineering and Applied Technology",
      "Hospitality and Early Childhood Education",
    ],
    work: [
      "Many students choose Canada because work opportunities during study are often a major advantage.",
      "Post-graduation work options can support valuable Canadian experience after completing an eligible program.",
    ],
    settlement: [
      "Canada is widely known for structured immigration pathways, but rules change. Students should review current federal and provincial options carefully.",
      "Province, occupation, language ability, and work experience can influence long-term options.",
    ],
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
      "York University",
    ],
    scholarships: [
      "Institutional entrance scholarships",
      "Graduate funding and assistantships",
      "Provincial and federal opportunities where eligible",
      "Private and nonprofit scholarships",
    ],
    faqs: [
      {
        question: "Is Canada good after 12th for international students?",
        answer:
          "Yes. Canada offers diploma, certificate, and degree options after 12th across many fields with strong student support systems.",
      },
      {
        question: "Does Canada offer post-study work opportunities?",
        answer:
          "Eligible graduates may access post-study work routes depending on the program and current rules. Always confirm on official government websites.",
      },
      {
        question: "Is Canada better for PR than many other countries?",
        answer:
          "Canada is often considered attractive for long-term settlement, but outcomes depend on current policy, province, work experience, and individual profile.",
      },
      {
        question: "Do students need IELTS to study in Canada?",
        answer:
          "Many institutions require IELTS or another accepted English test, though some colleges and universities may accept alternatives depending on the program.",
      },
      {
        question: "What is a study permit in Canada?",
        answer:
          "A study permit is the official authorization that allows eligible international students to study in Canada after receiving admission from an approved institution.",
      },
      {
        question: "Can scholarships help lower Canadian study costs?",
        answer:
          "Yes. Entrance scholarships, assistantships, and selected external awards can reduce tuition or overall study expenses.",
      },
    ],
    relatedBlogs: [
  {
    title: "Top Careers in Canada for International Students",
    link: "/blog/top-careers-canada-2026",
  },
  {
    title: "Study in Australia vs Canada for International Students",
    link: "/blog/australia-vs-canada-study-guide",
  },
],
  },

  {
    slug: "uk",
    country: "UK",
    flag: "🇬🇧",
    title: "Study in UK for International Students",
    description:
      "A clear study in UK guide covering admissions, English tests, tuition, living expenses, scholarships, student visa basics, top courses, work options, and career pathways after graduation.",
    intro:
      "The United Kingdom is known for globally recognized universities, shorter program durations for many degrees, strong business and research reputation, and a well-established international student environment.",
    steps: [
      "Choose your course, university, and degree level based on career plans, location, and budget.",
      "Review academic criteria, English requirements, and any course-specific conditions.",
      "Prepare IELTS, TOEFL, portfolio, interview materials, or additional entrance requirements where needed.",
      "Apply through the official university route or UCAS where applicable.",
      "Compare offers based on tuition, city, scholarships, and course duration before making your decision.",
      "Accept your offer and obtain the documents needed for your student visa application.",
      "Arrange finances, accommodation, travel planning, and health surcharge requirements where applicable.",
      "Submit your student visa application and complete biometrics or any requested formalities.",
    ],
    eligibility: [
      "After 12th for foundation, pathway, and undergraduate entry depending on the institution.",
      "After graduation for master's and professional study.",
      "Academic documents, references, and statement of purpose are commonly required.",
      "English proficiency proof is usually necessary.",
    ],
    exams: [
      "IELTS, TOEFL, or accepted alternatives depending on institution.",
      "UCAS-related requirements may apply for undergraduate applications.",
      "GMAT, GRE, interview, portfolio, or work experience may be needed for some programs.",
    ],
    visa: {
      title: "UK Student Visa Basics",
      intro:
        "International students generally need a UK student visa after receiving an offer and required documents from an approved institution.",
      points: [
        "Obtain admission from a licensed student sponsor.",
        "Receive your Confirmation of Acceptance for Studies (CAS) where applicable.",
        "Prepare passport, financial documents, and supporting academic documents.",
        "Submit the student visa application through the official process.",
        "Pay required visa-related fees and complete biometrics if requested.",
        "Wait for the decision before finalizing travel plans.",
      ],
      note:
        "Always confirm the latest UK government rules because visa processes and financial requirements can change.",
    },
    tuition:
      "£12,000 to £35,000+ per year depending on institution and course.",
    living:
      "£10,000 to £18,000+ per year depending on city and housing choice.",
    topCourses: [
      "Business, Finance, and Management",
      "Computer Science, AI, and Cybersecurity",
      "Law and International Relations",
      "Design, Media, and Creative Arts",
      "Public Health and Biomedical Sciences",
    ],
    work: [
      "Part-time work options can help students gain experience during studies, subject to visa rules.",
      "Graduate work routes can support job search and early career progression after completion.",
    ],
    settlement: [
      "Long-term residence in the UK depends on work opportunities and visa pathways after study.",
      "Students should examine post-study and employer-sponsored options before planning settlement.",
    ],
    universities: [
      "University of Birmingham",
      "University of Leeds",
      "University of Manchester",
      "University of Nottingham",
      "King's College London",
    ],
    scholarships: [
      "University scholarships and bursaries",
      "Chevening and related merit-based opportunities",
      "Departmental scholarships for selected programs",
      "Private funding bodies and educational trusts",
    ],
    faqs: [
      {
        question: "How long are courses in the UK?",
        answer:
          "Many undergraduate degrees are three years and many master's degrees are one year, though this varies by subject and institution.",
      },
      {
        question: "Is the UK good for business and finance studies?",
        answer:
          "Yes. The UK has a strong global reputation in business, finance, law, management, and creative industries.",
      },
      {
        question: "Can international students work in the UK?",
        answer:
          "Many students have limited work rights during study and there may be post-study routes after graduation, depending on current rules.",
      },
      {
        question: "Is IELTS required for the UK?",
        answer:
          "Many institutions require IELTS or another accepted English-language test, though accepted alternatives vary by university and course.",
      },
      {
        question: "What is the student visa process like in the UK?",
        answer:
          "Students usually need an offer from an approved institution, supporting documents, financial proof, and an official visa application under current UK rules.",
      },
      {
        question: "Can scholarships reduce UK tuition costs?",
        answer:
          "Yes. University scholarships, external awards, and merit-based funding can help reduce the total financial burden for eligible students.",
      },
    ],
    relatedBlogs: [
  {
    title: "Best Courses in UK for Global Job Opportunities",
    link: "/blog/best-courses-uk-global-jobs",
  },
],
  },

  {
    slug: "australia",
    country: "Australia",
    flag: "🇦🇺",
    title: "Study in Australia for International Students",
    description:
      "Learn about studying in Australia, including entry requirements, accepted tests, tuition and living costs, scholarships, student visa basics, work rights, and future pathways.",
    intro:
      "Australia is a popular choice for international students who want English-language education, practical teaching style, good campus life, and strong demand in healthcare, trades, hospitality, business, and technology.",
    steps: [
      "Choose your course, institution, and city based on your budget, career goals, and lifestyle preferences.",
      "Check academic eligibility, English-language requirements, and any field-specific entry conditions.",
      "Prepare IELTS, TOEFL, PTE, or other accepted tests along with required academic documents.",
      "Apply to universities or approved education providers and submit all required materials.",
      "Review admission offers and compare tuition, scholarships, city costs, and graduate opportunities.",
      "Accept your offer and collect the documents needed for your student visa application.",
      "Arrange finances, accommodation, health insurance, and travel planning before departure.",
      "Apply for the student visa and complete any biometrics, health, or supporting documentation steps if required.",
    ],
    eligibility: [
      "After 12th for undergraduate programs and pathway options.",
      "After graduation for master's and postgraduate study.",
      "Institutions generally review academic history, English proficiency, and financial evidence.",
      "Some regulated programs may have added requirements.",
    ],
    exams: [
      "IELTS, TOEFL, PTE, or accepted English alternatives.",
      "Some postgraduate programs may ask for GMAT, GRE, portfolio, or related background.",
    ],
    visa: {
      title: "Australia Student Visa Basics",
      intro:
        "International students generally require a valid student visa after receiving admission from an approved Australian education provider.",
      points: [
        "Receive an offer and complete the steps needed for enrollment confirmation.",
        "Collect academic, identity, and financial documents.",
        "Arrange overseas student health cover where required.",
        "Submit the official student visa application.",
        "Complete health checks, biometrics, or additional evidence if requested.",
        "Wait for the final visa decision before booking travel.",
      ],
      note:
        "Australian visa rules can change, so students should always review the latest official government guidance.",
    },
    tuition:
      "AUD 20,000 to AUD 45,000+ per year depending on the course and institution.",
    living:
      "AUD 12,000 to AUD 25,000+ per year depending on city, rent, and lifestyle.",
    topCourses: [
      "Nursing, Public Health, and Allied Health",
      "Information Technology, Cybersecurity, and Data",
      "Business, Accounting, and Marketing",
      "Engineering and Environmental Sciences",
      "Hospitality, Tourism, and Education",
    ],
    work: [
      "Students often value Australia for its work opportunities during study and after graduation, subject to current visa rules.",
      "Job demand can vary by region and by occupation shortlist.",
    ],
    settlement: [
      "Australia may offer long-term opportunities in selected occupations, but pathways depend on changing immigration settings, state nominations, and occupation demand.",
      "Planning should include both education fit and occupation strategy.",
    ],
    universities: [
      "University of Melbourne",
      "Monash University",
      "University of Sydney",
      "University of Queensland",
      "RMIT University",
    ],
    scholarships: [
      "University scholarships",
      "Research scholarships and assistantships",
      "Government and destination-specific student funding",
      "Merit-based international student awards",
    ],
    faqs: [
      {
        question: "Is Australia good for healthcare and nursing careers?",
        answer:
          "Australia is often considered attractive for healthcare-related study, but students should review licensing and registration requirements carefully.",
      },
      {
        question: "Can students work while studying in Australia?",
        answer:
          "Work rights can be available under current visa rules, but limits and conditions should always be verified from official sources.",
      },
      {
        question: "Is Australia expensive for students?",
        answer:
          "Costs vary by city and program. Planning for tuition, rent, insurance, transport, and daily expenses is important before applying.",
      },
      {
        question: "What English tests are accepted in Australia?",
        answer:
          "Many institutions accept IELTS, TOEFL, PTE, or other approved English-language tests depending on the course and provider.",
      },
      {
        question: "Do students need health insurance in Australia?",
        answer:
          "Many international students are required to maintain overseas student health cover or other required insurance arrangements under current rules.",
      },
      {
        question: "Can scholarships help international students in Australia?",
        answer:
          "Yes. Universities, research bodies, and some government-linked programs may offer funding opportunities for eligible applicants.",
      },
    ],
    relatedBlogs: [
  {
    title: "Study in Australia vs Canada for International Students",
    link: "/blog/australia-vs-canada-study-guide",
  },
],
  },

  {
    slug: "europe",
    country: "Europe",
    flag: "🇪🇺",
    title: "Study in Europe for International Students",
    description:
      "A practical study in Europe guide covering admission basics, language tests, tuition options, scholarships, affordable destinations, work opportunities, and country-based lifestyle factors.",
    intro:
      "Europe offers wide variety. Students can choose from English-taught and local-language programs, strong research universities, affordable public education in some countries, and access to diverse cultures and industries.",
    steps: [
      "Choose the country first, because Europe is made up of many different education and immigration systems.",
      "Shortlist programs based on language, tuition cost, career opportunities, and living expenses.",
      "Review institution-level and country-level admission requirements carefully.",
      "Prepare English or local-language test results if needed, along with academic and financial documents.",
      "Apply to universities according to each country's process and timeline.",
      "Compare offers based on tuition, scholarships, language fit, and future work options.",
      "Prepare your visa or residence permit application after receiving admission.",
      "Plan accommodation, finances, insurance, and travel after official approval steps are complete.",
    ],
    eligibility: [
      "After 12th or graduation depending on country, institution, and program structure.",
      "Admission documents often include transcripts, passport, SOP, CV, recommendations, and proof of funds.",
      "Some countries may require language proof in English or the local language.",
    ],
    exams: [
      "IELTS, TOEFL, or accepted English-language tests for English-taught programs.",
      "Local-language certifications may be needed for selected courses or countries.",
      "Specific programs may ask for entrance exams, portfolio, or academic prerequisites.",
    ],
    visa: {
      title: "Europe Student Visa Basics",
      intro:
        "Europe is not a single visa system. Student visa or residence permit rules vary from country to country.",
      points: [
        "Choose your destination country and review its official student visa or residence permit rules.",
        "Receive admission from a recognized institution.",
        "Prepare passport, admission letter, proof of funds, insurance, and housing details if required.",
        "Submit the correct visa or permit application through the official embassy or immigration process.",
        "Complete biometrics, interview, or additional formalities where applicable.",
        "Wait for the final decision before travel.",
      ],
      note:
        "Students should research the exact country they plan to study in rather than assuming one Europe-wide process.",
    },
    tuition:
      "Ranges from low-cost public options in some countries to premium private and specialized programs in others.",
    living:
      "Living costs depend heavily on country and city, from budget-friendly student towns to high-cost capitals.",
    topCourses: [
      "Engineering, Renewable Energy, and Robotics",
      "Business, International Trade, and Economics",
      "Design, Architecture, and Fine Arts",
      "Data, AI, and Computer Science",
      "Hospitality, Tourism, and Social Sciences",
    ],
    work: [
      "Many European countries allow some level of part-time work for students, subject to their immigration rules.",
      "Post-study work pathways vary significantly by country and should be researched in advance.",
    ],
    settlement: [
      "Europe is not one single immigration system. Every country has its own policies for residence, work, and long-term stay.",
      "Students should compare destination countries before choosing where to apply.",
    ],
    universities: [
      "TU Munich",
      "KU Leuven",
      "University of Amsterdam",
      "Politecnico di Milano",
      "University of Helsinki",
    ],
    scholarships: [
      "Country-specific public scholarships",
      "University tuition waivers",
      "Research funding and Erasmus-related opportunities",
      "Program-specific grants and mobility support",
    ],
    faqs: [
      {
        question: "Is Europe affordable for international students?",
        answer:
          "In some countries, yes. Tuition can be lower than in other destinations, but total affordability depends on city, language, and living costs.",
      },
      {
        question: "Can students study in English in Europe?",
        answer:
          "Yes. Many universities offer English-taught programs, especially at master's level and increasingly at bachelor's level.",
      },
      {
        question: "Should students pick Europe as one destination?",
        answer:
          "Students should compare individual countries because costs, rules, language expectations, and job markets differ a lot across Europe.",
      },
      {
        question: "Do all European countries have the same visa rules?",
        answer:
          "No. Each country has its own visa, residence permit, tuition, and post-study work policies, so country-specific research is essential.",
      },
      {
        question: "Can scholarships make Europe more affordable?",
        answer:
          "Yes. Public funding, Erasmus-related opportunities, tuition waivers, and institutional grants can help reduce costs depending on the country and program.",
      },
      {
        question: "Is local language always required in Europe?",
        answer:
          "Not always. Many programs are taught in English, but local language skills can still be valuable for part-time work, social life, and long-term career growth.",
      },
    ],
    relatedBlogs: [
  {
    title: "Jobs That Will Stay Strong Even in the AI Era",
    link: "/blog/future-proof-jobs-ai-era",
  },
],
  },
];

export function getCountryGuide(slug: string) {
  return countryGuides.find((guide) => guide.slug === slug);
}