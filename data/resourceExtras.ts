export type ResourceExtra = {
  whoShouldChoose?: string[];
  quickFacts?: {
    eligibility?: string;
    ageLimit?: string;
    minimumPercentage?: string;
    feeStructure?: string;
    availability?: string;
    duration?: string;
  };
  recommendedColleges?: {
    title: string;
    items: string[];
    note?: string;
  }[];
  advertisement?: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  contactNote?: string;
};

export const resourceExtras: Record<string, ResourceExtra> = {
  "after-10th": {
    whoShouldChoose: [
      "Students who want a structured comparison before selecting Science, Commerce, Arts, Diploma, or ITI.",
      "Parents looking for a simple starting point to discuss stream and career direction.",
      "Learners who want to balance interest, marks, future goals, and affordability before choosing a path.",
    ],
    quickFacts: {
      eligibility: "Pass in Class 10 from a recognised board. Specific schools or boards may add their own admission criteria.",
      ageLimit: "Usually no fixed age limit for Class 11 admission, but school-specific rules can apply.",
      minimumPercentage: "Varies by school and stream. Some schools may prefer stronger marks for Science or high-demand combinations.",
      feeStructure: "Government school fees are usually lower, while private school, diploma, and coaching costs can vary widely by city and institution.",
      availability: "Offline school programs are common. Some diploma, ITI, and skill programs also have blended or online support modules.",
      duration: "Class 11–12 usually takes 2 years. Diploma and vocational programs may vary by course.",
    },
    contactNote:
      "Still confused after 10th? Use the Contact section and mention your marks, favourite subjects, and future goal for personalised guidance.",
    advertisement: {
      title: "Advertise Your School, Institute, or Skill Program",
      description:
        "If you run a coaching centre, school, college, or student-focused training program, you can connect with Nisha Global Education for promotional opportunities.",
      ctaLabel: "Enquire via Contact",
      ctaHref: "/contact",
    },
  },
  "science-vs-commerce-vs-arts": {
    whoShouldChoose: [
      "Students deciding between the three major streams after Class 10.",
      "Families comparing subject difficulty, future scope, and flexibility.",
      "Learners who want to choose a stream based on fit instead of pressure or trends.",
    ],
    quickFacts: {
      eligibility: "Pass in Class 10. School-level stream allotment rules may differ.",
      ageLimit: "Usually no standard national age limit for Science, Commerce, or Arts in school admission.",
      minimumPercentage: "Some schools may ask for stronger Class 10 scores for Science, especially when PCM or PCB seats are limited.",
      feeStructure: "School fees vary by board, school type, city, and added coaching or lab requirements.",
      availability: "Science, Commerce, and Arts are mainly offline school streams, though digital learning support and online coaching are widely available.",
      duration: "Normally 2 academic years for Class 11 and 12.",
    },
    contactNote:
      "Not sure which stream matches your strengths? Take the career test and then contact us with your result for next-step guidance.",
  },
  "aviation-careers": {
    whoShouldChoose: [
      "Students interested in airline, airport, hospitality, operations, customer service, or flying-related careers.",
      "Learners with good communication, discipline, confidence, and a professional attitude.",
      "Students ready to compare training quality, placement support, and role-specific eligibility carefully.",
    ],
    quickFacts: {
      eligibility: "Varies by role. Many ground, customer service, and cabin-crew pathways are explored after Class 12, while pilot training and technical roles have additional role-specific requirements.",
      ageLimit: "Age limits vary by airline, academy, and job role. Always verify the latest role-specific criteria before applying.",
      minimumPercentage: "Class 12 requirements vary by role and institute. Some institutes accept pass-level eligibility, while others may expect stronger academic performance.",
      feeStructure: "Short aviation support or cabin-service courses may be lower cost than pilot training, while commercial pilot training is usually high-cost and should be researched very carefully.",
      availability: "Many aviation-support programs are offered offline. Some theory modules, interview training, and spoken-English support may also be available online.",
      duration: "Can range from a few months for some support courses to multiple years for advanced flying or technical pathways.",
    },
    recommendedColleges: [
      {
        title: "Examples students often research",
        items: [
          "DGCA-approved Flying Training Organisations for pilot pathways",
          "DGCA-listed aviation training options for cabin safety, technical, or flying-related pathways",
          "Airline-linked or airport-service institutes with strong interview preparation and placement support",
        ],
        note:
          "Always verify current approval status, placement claims, refund policy, and medical or English requirements directly from the institute and relevant official authority before paying fees.",
      },
    ],
    contactNote:
      "Before joining any aviation course, connect through the Contact section and ask about role fit, budget, medical requirements, and interview preparation.",
    advertisement: {
      title: "Aviation Institute Promotion",
      description:
        "Aviation academies, interview-preparation centres, English trainers, and airport-service institutes can connect with us for student-focused advertising opportunities.",
      ctaLabel: "Contact for Ads",
      ctaHref: "/contact",
    },
  },
  "best-stream-after-10th": {
    whoShouldChoose: [
      "Students asking 'Which stream is best for me?' rather than following others.",
      "Parents who want a practical checklist before final admission.",
      "Learners who want to compare interest, marks, future path, and affordability together.",
    ],
    quickFacts: {
      eligibility: "Pass in Class 10 from a recognised board.",
      ageLimit: "Usually school-based, with no single national limit across all institutions.",
      minimumPercentage: "Depends on school and chosen stream. Higher-demand combinations may require stronger marks.",
      feeStructure: "Varies by school type, city, stream, board, and added coaching requirements.",
      availability: "School streams are usually offline, supported by online test prep, doubt-solving, and counselling resources.",
      duration: "Normally 2 years for higher secondary study.",
    },
    contactNote:
      "Use the Contact section if you want help matching your marks and interests with the most suitable stream.",
  },
  "diploma-after-10th": {
    whoShouldChoose: [
      "Students who prefer practical, technical, and skill-focused learning after Class 10.",
      "Learners who want earlier exposure to engineering, design, electronics, computers, or applied trades.",
      "Families comparing diploma with Class 11–12 for affordability, speed, and career direction.",
    ],
    quickFacts: {
      eligibility: "Pass in Class 10. Polytechnic admission requirements vary by state and institution.",
      ageLimit: "Usually institution or state specific. Many diploma admissions focus more on eligibility than on a strict upper age limit.",
      minimumPercentage: "Some diploma programs accept pass eligibility, while competitive institutes may consider stronger Class 10 performance.",
      feeStructure: "Government polytechnics are generally more affordable than private diploma colleges. Fees vary by state, branch, and hostel options.",
      availability: "Diploma programs are usually offline because they include labs and practical work. Some theory support may be available online.",
      duration: "Commonly 3 years after Class 10, depending on program structure.",
    },
    recommendedColleges: [
      {
        title: "What to shortlist",
        items: [
          "Government polytechnic institutes with strong labs and placement support",
          "State-approved diploma colleges in relevant branches such as civil, mechanical, electrical, computer, or electronics",
          "Institutes with transparent fee structure, internship support, and industry-linked practical training",
        ],
      },
    ],
    contactNote:
      "Before choosing a diploma, contact us with your Class 10 score, preferred branch, and budget range for guidance.",
  },
  "iti-after-10th": {
    whoShouldChoose: [
      "Students looking for fast, skill-based, job-oriented training after Class 10.",
      "Learners interested in electrician, fitter, welder, COPA, mechanic, technician, and other vocational trades.",
      "Families looking for lower-cost, practical pathways with strong employability value.",
    ],
    quickFacts: {
      eligibility: "Many ITI trades start after Class 10, though some trades may have different subject or pass requirements.",
      ageLimit: "Age requirements can vary by trade, state, category, and admission authority.",
      minimumPercentage: "Often pass-based, but exact criteria depend on the trade and state admission process.",
      feeStructure: "Government ITIs are generally more affordable than private ITIs. Total cost can vary by trade, location, and equipment needs.",
      availability: "ITI learning is mostly offline because it depends heavily on workshop and hands-on trade practice.",
      duration: "Usually 6 months to 2 years depending on the trade.",
    },
    recommendedColleges: [
      {
        title: "What to verify before admission",
        items: [
          "Trade availability and workshop quality",
          "NCVT or SCVT alignment where applicable",
          "Apprenticeship, placement, and local employer connections",
        ],
      },
    ],
    contactNote:
      "Not sure which ITI trade fits you? Reach out through the Contact section and mention your interests and nearby city.",
  },
  "scholarships-for-students-in-india": {
    whoShouldChoose: [
      "Students and parents looking for financial support options for school, college, or skill education.",
      "Learners who want to understand scholarship basics before filling forms.",
    ],
    quickFacts: {
      eligibility: "Varies by scholarship and may depend on income, category, merit, gender, disability status, course, or state.",
      ageLimit: "Scholarship-specific. Read the current official notification carefully.",
      minimumPercentage: "Many merit-based scholarships use academic cut-offs, but the required percentage is not the same across all schemes.",
      feeStructure: "Application cost may be free in many cases, but documentation and verification requirements can still apply.",
      availability: "Mostly online application with document upload, though some institutions may also support offline help desks.",
      duration: "Depends on the scholarship scheme and renewal rules.",
    },
    contactNote:
      "Need help understanding scholarship documents or eligibility? Send your question through the Contact section.",
  },
  "entrance-exams-after-12th": {
    whoShouldChoose: [
      "Students preparing for college admissions after Class 12 across engineering, medical, law, design, hotel management, and other fields.",
      "Families comparing exam routes before applying to colleges.",
    ],
    quickFacts: {
      eligibility: "Depends on the exam and the course you want to pursue.",
      ageLimit: "Exam-specific. Some exams and professional pathways may include age conditions or attempt rules.",
      minimumPercentage: "Class 12 marks criteria differ across exams and counselling systems.",
      feeStructure: "Exam application fees and coaching costs vary by exam body, category, and test mode.",
      availability: "Applications are usually online; exam mode may be CBT or pen-and-paper depending on the authority.",
      duration: "Preparation time differs widely based on exam difficulty and student background.",
    },
    contactNote:
      "Unsure which entrance exam matters for your career goal? Contact us with your stream and target field.",
  },
  "career-options-after-12th-science": {
    whoShouldChoose: [
      "Science students deciding among engineering, medicine, pharmacy, pure sciences, data, research, design, or emerging tech paths.",
      "Families comparing PCM, PCB, and PCMB career options.",
      "Students who want to balance interest, entrance exams, and budget before applying.",
    ],
    quickFacts: {
      eligibility: "Class 12 in Science, with exact subject requirements depending on the course.",
      ageLimit: "Course and entrance-exam specific.",
      minimumPercentage: "Varies by college, counselling route, and course type.",
      feeStructure: "Government colleges are usually more affordable than private institutions; fees vary widely across medicine, engineering, and allied programs.",
      availability: "Degree programs are mainly offline, though some foundational and certification learning can be taken online.",
      duration: "Usually 3 to 5.5 years depending on the course.",
    },
    recommendedColleges: [
      {
        title: "Examples students commonly research",
        items: [
          "IITs and NITs for engineering-related pathways",
          "AIIMS and recognised medical institutions for medical pathways",
          "UGC-recognised universities and specialised institutes for science, research, and allied programs",
        ],
        note:
          "Always verify current admission route, approval, recognition, seat matrix, and total cost directly from the official institute and counselling authority.",
      },
    ],
    contactNote:
      "Share whether you are from PCM, PCB, or PCMB through the Contact section so we can guide you better.",
    advertisement: {
      title: "Promote Science Coaching or Colleges",
      description:
        "Engineering, medical, science, and skill institutes can connect with us for educational advertising opportunities for students after Class 12.",
      ctaLabel: "Advertise with Us",
      ctaHref: "/contact",
    },
  },
  "career-options-after-12th-commerce": {
    whoShouldChoose: [
      "Commerce students exploring B.Com, BBA, CA, CS, CMA, economics, finance, banking, management, and entrepreneurship routes.",
      "Students who enjoy accounts, business thinking, practical finance, or management-oriented learning.",
    ],
    quickFacts: {
      eligibility: "Class 12 pass. Some colleges may prefer Commerce background for certain programs.",
      ageLimit: "Usually college-specific for most undergraduate commerce pathways.",
      minimumPercentage: "Varies by institution and entrance route.",
      feeStructure: "Government colleges may be lower-cost, while private business and management programs can be significantly higher.",
      availability: "Many undergraduate programs are offline. Some foundational commerce, finance, and digital-business courses are also available online.",
      duration: "Usually 3 years for most undergraduate pathways.",
    },
    recommendedColleges: [
      {
        title: "What to check",
        items: [
          "UGC-recognised universities and colleges",
          "Strong placement and internship support for commerce and management students",
          "Transparent total fee, exam support, and outcome-focused curriculum",
        ],
      },
    ],
    contactNote:
      "Need help choosing between B.Com, BBA, CA route, or skill-based finance learning? Contact us with your goal and budget.",
  },
  "career-options-after-12th-arts": {
    whoShouldChoose: [
      "Arts and humanities students exploring law, psychology, teaching, design, journalism, social sciences, public policy, and civil-services-aligned study paths.",
      "Students who are strong in communication, writing, analysis, and people-focused subjects.",
    ],
    quickFacts: {
      eligibility: "Class 12 pass. Course-specific subject preferences may apply in some colleges.",
      ageLimit: "Usually institution-specific for undergraduate admission.",
      minimumPercentage: "Depends on the college and program.",
      feeStructure: "Fees vary by public or private institution, course type, and city.",
      availability: "Many degree options are offline, while several humanities, language, design, and communication certifications are also available online.",
      duration: "Usually 3 years for most undergraduate courses, with some professional programs following different structures.",
    },
    recommendedColleges: [
      {
        title: "What to shortlist",
        items: [
          "UGC-recognised universities with strong humanities departments",
          "Specialised institutes for law, design, psychology, communication, or teaching pathways",
          "Colleges with internships, language labs, writing support, or public-speaking opportunities",
        ],
      },
    ],
    contactNote:
      "If people around you say Arts has fewer options, contact us and we will help you explore realistic career paths in detail.",
  },
  "career-planning-tips-for-students": {
    whoShouldChoose: [
      "Students who want to make smarter academic decisions with less confusion.",
      "Parents who want a simple framework for supporting career planning at home.",
    ],
    quickFacts: {
      eligibility: "Useful for students from school level onward.",
      ageLimit: "No age limit. Career planning is relevant at multiple stages.",
      minimumPercentage: "Not applicable. These tips are planning tools, not an admission rule.",
      feeStructure: "Planning guidance can be free, low-cost, or premium depending on the service used.",
      availability: "Available through articles, counselling, school support, and online platforms.",
      duration: "Career planning is ongoing and should be reviewed at major academic decision points.",
    },
    contactNote:
      "For personalised planning help, use the Contact section and mention your current class, stream, and goals.",
  },
};
