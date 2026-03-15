export type ResourcePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: {
    title: string;
    content: string[];
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export const resourcePages: ResourcePage[] = [
  {
    slug: "after-10th",
    title: "Career Options After 10th for Indian Students",
    description:
      "Explore career options after 10th including Science, Commerce, Arts, Diploma, ITI, and skill-based paths for Indian students.",
    intro:
      "After Class 10, students often feel confused about which path to choose. This guide explains the main options available after 10th in a simple and practical way so students and parents can make better decisions.",
    sections: [
      {
        title: "Main Options After 10th",
        content: [
          "After passing Class 10, students usually choose between Science, Commerce, Arts, Diploma courses, ITI programs, and other skill-based options.",
          "The right choice depends on interest, academic strengths, learning style, long-term goals, and family circumstances.",
          "Students should avoid choosing a stream only because of social pressure or because friends are taking the same path."
        ]
      },
      {
        title: "Science, Commerce, and Arts",
        content: [
          "Science is commonly chosen by students interested in engineering, medicine, research, and technical fields.",
          "Commerce is suitable for students interested in finance, business, management, economics, and accounting.",
          "Arts is a strong option for students interested in humanities, law, psychology, teaching, social sciences, design, and civil services."
        ]
      },
      {
        title: "Diploma and ITI Options",
        content: [
          "Diploma programs can be useful for students who want technical knowledge and practical learning after 10th.",
          "ITI programs are job-oriented and focus on vocational skills in trades and technical work.",
          "These paths can be valuable for students who prefer practical education over purely academic study."
        ]
      },
      {
        title: "How to Choose the Right Path",
        content: [
          "Students should think about which subjects they enjoy most and where they perform best.",
          "Parents should support a realistic and skill-based decision rather than only focusing on prestige.",
          "A good decision after 10th can make future education and career planning much smoother."
        ]
      }
    ],
    faq: [
      {
        question: "Which stream is best after 10th?",
        answer:
          "There is no single best stream for everyone. The right stream depends on your interests, strengths, and future goals."
      },
      {
        question: "Can I choose Diploma or ITI after 10th?",
        answer:
          "Yes. Diploma and ITI are valid options after 10th, especially for students who prefer technical or practical learning."
      },
      {
        question: "Should I choose the same stream as my friends?",
        answer:
          "No. Your stream should be based on your own strengths, interests, and career goals."
      }
    ]
  },
  {
    slug: "science-vs-commerce-vs-arts",
    title: "Science vs Commerce vs Arts After 10th",
    description:
      "Compare Science, Commerce, and Arts after 10th for Indian students. Understand subjects, future scope, and career opportunities.",
    intro:
      "Choosing between Science, Commerce, and Arts is one of the biggest decisions after Class 10. This comparison helps students understand the difference between these streams in a clear and simple way.",
    sections: [
      {
        title: "Science Stream",
        content: [
          "Science is a popular choice for students interested in Mathematics, Biology, Physics, Chemistry, and technical subjects.",
          "It can lead to fields such as engineering, medicine, research, pharmacy, data-related careers, and other professional pathways.",
          "Science can offer broad academic flexibility, but students should be prepared for a demanding workload."
        ]
      },
      {
        title: "Commerce Stream",
        content: [
          "Commerce is a strong option for students interested in business, economics, accounting, finance, banking, and entrepreneurship.",
          "It can lead to careers in finance, taxation, management, accounting, corporate work, and business studies.",
          "Students who enjoy numerical reasoning and practical business knowledge often do well in Commerce."
        ]
      },
      {
        title: "Arts Stream",
        content: [
          "Arts is a valuable stream for students interested in society, history, language, politics, psychology, education, law, and communication.",
          "It can open opportunities in civil services, journalism, law, teaching, design, social sciences, and public-facing roles.",
          "Arts should not be seen as a weak stream because it offers many respected and meaningful career paths."
        ]
      },
      {
        title: "How to Compare the Streams",
        content: [
          "Students should compare streams based on subject interest, difficulty comfort, and future direction.",
          "The best stream is the one that matches your abilities and keeps you motivated to study consistently.",
          "Parents and students should focus on fit, not only on popularity."
        ]
      }
    ],
    faq: [
      {
        question: "Is Science better than Commerce or Arts?",
        answer:
          "Not necessarily. Each stream has different strengths and future pathways. The best choice depends on the student."
      },
      {
        question: "Is Arts a weak stream?",
        answer:
          "No. Arts offers strong opportunities in law, civil services, psychology, teaching, journalism, design, and more."
      },
      {
        question: "Can Commerce lead to high-paying careers?",
        answer:
          "Yes. Commerce can lead to careers in finance, accounting, management, business, and entrepreneurship."
      }
    ]
  },{
  slug: "aviation-careers",
  title: "Aviation Career Guide for Students After 12th",
  description:
    "Explore aviation career options for students after 12th including pilot, cabin crew, airport ground staff, customer service, and aviation management roles.",
  intro:
    "Aviation offers exciting career opportunities for students who are interested in travel, communication, discipline, customer service, and airport operations. This guide helps students understand the broad aviation career landscape after 12th in a simple and practical way.",
  sections: [
    {
      title: "What Aviation Careers Include",
      content: [
        "Aviation is a broad field that includes flying-related roles, airport operations, passenger service, ground support, safety-related work, and management pathways.",
        "Many students think aviation only means becoming a pilot or cabin crew member, but the field also includes customer service, airport ground staff, operations support, and administration roles.",
        "Students should explore aviation as a full career ecosystem rather than focusing on only one popular role."
      ]
    },
    {
      title: "Who Should Consider Aviation",
      content: [
        "Aviation may suit students who have good communication skills, discipline, confidence, professionalism, and interest in airport or airline environments.",
        "Students who enjoy dynamic work settings, teamwork, travel-related environments, and structured processes may find aviation attractive.",
        "Before choosing this path, students should think carefully about their strengths, personality, and long-term expectations."
      ]
    },
    {
      title: "Popular Aviation Career Paths",
      content: [
        "Popular aviation-related roles may include pilot pathways, cabin crew, airport ground staff, customer support, passenger handling, and aviation management-oriented roles.",
        "Different roles require different qualifications, training routes, medical fitness standards, communication ability, and personal suitability.",
        "Students should research each path separately before making a final decision."
      ]
    },
    {
      title: "How Students Should Plan",
      content: [
        "Students should first understand which aviation role interests them most and then learn about the required education, training, and skills.",
        "Good spoken communication, grooming, discipline, confidence, and customer-handling ability can be especially useful in many aviation-related careers.",
        "Students should always verify course quality, institute credibility, and career pathway details from official and trusted sources before enrolling."
      ]
    }
  ],
  faq: [
    {
      question: "Is aviation only about becoming a pilot?",
      answer:
        "No. Aviation includes many roles such as cabin crew, airport ground staff, customer service, operations support, and management-related pathways."
    },
    {
      question: "Can students join aviation careers after 12th?",
      answer:
        "Yes. Many aviation-related career paths are explored after 12th, depending on the role, required training, and eligibility."
    },
    {
      question: "Is communication skill important in aviation?",
      answer:
        "Yes. Communication skill, confidence, professionalism, and discipline are important in many aviation-related roles."
    }
  ]
},

  {
    slug: "best-stream-after-10th",
    title: "Which Stream Is Best After 10th?",
    description:
      "Learn how to choose the best stream after 10th based on your interests, subject strengths, goals, and learning style.",
    intro:
      "Many students ask which stream is best after 10th. The truth is that the best stream is not the same for everyone. This guide helps students choose the right stream using practical decision points.",
    sections: [
      {
        title: "There Is No One Best Stream",
        content: [
          "Science, Commerce, and Arts all have strong value when chosen for the right reasons.",
          "A student who enjoys Biology and problem solving may do well in Science, while another who likes economics and business may grow faster in Commerce.",
          "A student who enjoys humanities, social understanding, language, and communication may succeed in Arts."
        ]
      },
      {
        title: "Choose Based on Strength",
        content: [
          "Your marks and subject understanding can give useful clues about the stream that may suit you best.",
          "If you regularly do well in certain subjects and enjoy studying them, that is often a strong sign.",
          "Choosing a stream that matches your ability can improve confidence and performance."
        ]
      },
      {
        title: "Choose Based on Future Goals",
        content: [
          "Students should also think about the kind of careers they may want in the future.",
          "Some careers need specific subject backgrounds, while others allow more flexibility.",
          "Even if a final career goal is not clear, choosing a stream aligned with your interest is usually a smart starting point."
        ]
      },
      {
        title: "Avoid Common Mistakes",
        content: [
          "Do not choose a stream only because relatives say it has more respect.",
          "Do not choose a stream only because your friends selected it.",
          "A thoughtful decision is better than a rushed decision influenced by pressure."
        ]
      }
    ],
    faq: [
      {
        question: "Which stream is best after 10th for future success?",
        answer:
          "The best stream is the one that matches your strengths, interest, and long-term direction."
      },
      {
        question: "Can I succeed in Arts or Commerce?",
        answer:
          "Yes. All three major streams can lead to successful and respected careers."
      },
      {
        question: "Should marks decide my stream completely?",
        answer:
          "Marks are important, but interest, aptitude, and career goals also matter."
      }
    ]
  },
  {
    slug: "diploma-after-10th",
    title: "Diploma Courses After 10th",
    description:
      "Understand diploma options after 10th, who should choose them, and how diploma education can support technical careers.",
    intro:
      "Diploma courses after 10th can be a practical option for students who want technical knowledge, job-oriented learning, and an alternative to traditional 11th and 12th pathways.",
    sections: [
      {
        title: "What Is a Diploma Course?",
        content: [
          "A diploma course is usually a practical and career-focused program that helps students build technical understanding in a specific area.",
          "Diploma education is often chosen by students who want more applied learning rather than only theory-based academic study.",
          "These programs can be useful in technical and industry-related career pathways."
        ]
      },
      {
        title: "Who Should Consider Diploma After 10th",
        content: [
          "Students who enjoy practical learning, technical subjects, or hands-on work may consider diploma pathways.",
          "It can also be suitable for students who want a more focused route into technical fields.",
          "Before choosing a diploma, students should understand the course structure, progression options, and future study plans."
        ]
      },
      {
        title: "Benefits of Diploma Programs",
        content: [
          "Diploma courses often focus on specific skills and technical foundations.",
          "They can help students become familiar with industry-oriented concepts at an earlier stage.",
          "For many students, diploma education can create an efficient bridge between school education and professional learning."
        ]
      },
      {
        title: "Things to Check Before Choosing",
        content: [
          "Always check the institution quality, course relevance, recognition, and future progression possibilities.",
          "Students should understand whether they want immediate skill development, long-term technical education, or both.",
          "A diploma should be chosen only after comparing it with regular senior secondary options."
        ]
      }
    ],
    faq: [
      {
        question: "Is diploma after 10th a good option?",
        answer:
          "It can be a good option for students who prefer practical, technical, and career-focused learning."
      },
      {
        question: "Is diploma better than 11th and 12th for everyone?",
        answer:
          "No. It depends on the student’s goals, interests, and preferred learning style."
      },
      {
        question: "Should I compare diploma with stream options first?",
        answer:
          "Yes. Students should compare diploma pathways with Science, Commerce, and Arts before making a final decision."
      }
    ]
  },
  {
    slug: "iti-after-10th",
    title: "ITI Courses After 10th",
    description:
      "Learn about ITI after 10th, vocational education, practical skill development, and job-oriented learning paths for students.",
    intro:
      "ITI after 10th is a popular option for students who want skill-based and vocational education. It is especially useful for students who prefer practical training and trade-oriented learning.",
    sections: [
      {
        title: "What Is ITI?",
        content: [
          "ITI stands for Industrial Training Institute and is generally associated with vocational and trade-based education.",
          "These programs are designed to build practical skills and job-focused training in specific technical or non-technical trades.",
          "ITI can be a meaningful option for students who want employable skills and hands-on learning."
        ]
      },
      {
        title: "Who Should Choose ITI",
        content: [
          "Students who are more comfortable with practical training than purely academic study may consider ITI.",
          "ITI can also suit students who want to start building trade-specific expertise early.",
          "Before choosing ITI, students should understand the trade, learning method, and future path clearly."
        ]
      },
      {
        title: "Benefits of ITI Pathways",
        content: [
          "ITI focuses strongly on practical development and work-related skills.",
          "It can support students in becoming job-ready in selected trades and vocational areas.",
          "This path can be valuable for students who want training that connects directly with skill-based work."
        ]
      },
      {
        title: "Things Students Should Evaluate",
        content: [
          "Students should check whether the trade matches their ability and long-term interest.",
          "The quality of training and institution matters a lot in vocational education.",
          "It is important to think about both immediate skills and future growth before making a final choice."
        ]
      }
    ],
    faq: [
      {
        question: "Is ITI a good option after 10th?",
        answer:
          "Yes, for students who prefer vocational and practical learning, ITI can be a strong option."
      },
      {
        question: "Is ITI only for weak students?",
        answer:
          "No. ITI is a skill-based path and can be a smart choice for students interested in practical careers."
      },
      {
        question: "Should I choose ITI only because it is job-oriented?",
        answer:
          "You should choose it only if it matches your interest, learning style, and long-term plans."
      }
    ]
  },
  {
    slug: "scholarships-for-students-in-india",
    title: "Scholarships for Students in India",
    description:
      "Learn about scholarship opportunities for students in India and how scholarships can support school and higher education journeys.",
    intro:
      "Scholarships can help students continue their education with financial support and recognition. This guide explains the basic idea of scholarships and how students should approach scholarship research.",
    sections: [
      {
        title: "Why Scholarships Matter",
        content: [
          "Scholarships can reduce financial pressure on students and families and help learners continue education with greater confidence.",
          "They can support meritorious students, economically deserving students, and students from specific categories depending on the scholarship rules.",
          "Scholarships also encourage academic consistency and future planning."
        ]
      },
      {
        title: "Types of Scholarships",
        content: [
          "Some scholarships are merit-based, some are need-based, and some are linked to specific categories, institutions, or academic achievements.",
          "Students may also find scholarships related to school education, higher education, technical education, or special talent areas.",
          "Every scholarship has its own eligibility and application process."
        ]
      },
      {
        title: "How Students Should Search",
        content: [
          "Students should look carefully at official eligibility criteria, required documents, and deadlines.",
          "Parents and students should avoid relying only on informal claims or unverified online information.",
          "It is always wise to verify scholarship details from official portals and institutional notices."
        ]
      },
      {
        title: "Common Student Mistakes",
        content: [
          "Many students miss opportunities because they start searching too late or do not keep documents ready.",
          "Some students apply without reading the full eligibility conditions.",
          "Careful planning and verification can improve the chances of making good use of scholarship opportunities."
        ]
      }
    ],
    faq: [
      {
        question: "Can scholarships help after 10th and 12th?",
        answer:
          "Yes. Different scholarship opportunities may be available for school and higher education stages depending on eligibility."
      },
      {
        question: "Should I trust every scholarship post on social media?",
        answer:
          "No. Always verify scholarship details from official sources before applying."
      },
      {
        question: "Do all scholarships have the same rules?",
        answer:
          "No. Every scholarship can have different eligibility, deadlines, and document requirements."
      }
    ]
  },
  {
    slug: "entrance-exams-after-12th",
    title: "Entrance Exams After 12th in India",
    description:
      "Understand the basics of entrance exams after 12th including why they matter and how students should prepare for exam-oriented career paths.",
    intro:
      "Many careers after 12th involve entrance exams. Students often hear names like JEE, NEET, CUET, NDA, and others, but feel confused about where to begin. This guide explains the overall idea clearly.",
    sections: [
      {
        title: "Why Entrance Exams Matter",
        content: [
          "Entrance exams are used by many institutions and career pathways to assess academic readiness, aptitude, or subject knowledge.",
          "For students aiming for competitive courses, early awareness of entrance exams can help with better planning.",
          "Students should understand that different exams serve different academic and professional paths."
        ]
      },
      {
        title: "Different Exams for Different Goals",
        content: [
          "Some exams are associated with engineering pathways, some with medical pathways, and others with broader undergraduate admission or career-specific selection.",
          "Students should first decide what type of academic direction they want before focusing deeply on an exam.",
          "Choosing an exam without understanding your actual career direction can create confusion."
        ]
      },
      {
        title: "How to Prepare Smartly",
        content: [
          "Preparation becomes easier when students build strong subject foundations rather than only memorizing patterns.",
          "Time management, consistency, and realistic planning matter more than random study pressure.",
          "Students should avoid comparing their pace with others and instead focus on structured progress."
        ]
      },
      {
        title: "Role of Guidance",
        content: [
          "Students should seek reliable guidance from official information sources, trusted teachers, and well-structured resources.",
          "Understanding eligibility, syllabus direction, and exam purpose is important before starting serious preparation.",
          "A clear preparation plan can help reduce stress and improve confidence."
        ]
      }
    ],
    faq: [
      {
        question: "Are entrance exams necessary after 12th?",
        answer:
          "Some courses and institutions require entrance exams, while others may use different admission methods."
      },
      {
        question: "Should I prepare for an exam before choosing a career direction?",
        answer:
          "It is better to first understand your intended path and then focus on the relevant exam."
      },
      {
        question: "Can early planning help in entrance exam preparation?",
        answer:
          "Yes. Early clarity can help students prepare more effectively and reduce confusion."
      }
    ]
  },
  {
    slug: "career-options-after-12th-science",
    title: "Career Options After 12th Science",
    description:
      "Explore career options after 12th Science including technical, healthcare, research, and interdisciplinary pathways for students.",
    intro:
      "Students from the Science stream often have many future possibilities, but too many options can also create confusion. This guide helps students understand broad career directions after 12th Science.",
    sections: [
      {
        title: "Why Science Offers Flexibility",
        content: [
          "Science is often seen as a flexible stream because it can connect to multiple academic and professional pathways.",
          "Students may explore technical, healthcare, research, analytical, or interdisciplinary directions depending on their interests.",
          "However, flexibility is useful only when paired with clarity and planning."
        ]
      },
      {
        title: "Choosing Based on Subject Interest",
        content: [
          "Students who enjoy Mathematics may feel more comfortable in quantitative and technical directions.",
          "Students who enjoy Biology may feel more aligned with healthcare, life science, or other related fields.",
          "Subject preference and confidence level should guide the decision more than outside pressure."
        ]
      },
      {
        title: "Think Beyond Popular Labels",
        content: [
          "Many students only hear about a few common paths and ignore other meaningful possibilities.",
          "Science students should explore roles that match their strengths, curiosity, and work style.",
          "A broad stream should be explored with an open mind rather than a narrow assumption."
        ]
      },
      {
        title: "How to Make a Better Decision",
        content: [
          "Students should think about what kind of work they can imagine doing consistently in the future.",
          "It is helpful to compare different paths on the basis of study demands, interest, and long-term growth.",
          "A well-informed decision after 12th can save time and reduce confusion later."
        ]
      }
    ],
    faq: [
      {
        question: "Do Science students only have engineering and medical options?",
        answer:
          "No. Science students can explore many different academic and career directions depending on their interests."
      },
      {
        question: "Should I choose a career only because Science is considered flexible?",
        answer:
          "No. Flexibility is useful only when the choice also fits your strengths and future goals."
      },
      {
        question: "Is interest important after 12th Science?",
        answer:
          "Yes. Interest is very important because it affects motivation, consistency, and long-term success."
      }
    ]
  },
  {
    slug: "career-options-after-12th-commerce",
    title: "Career Options After 12th Commerce",
    description:
      "Explore career options after 12th Commerce for students interested in finance, management, business, economics, and related fields.",
    intro:
      "Commerce students often have strong opportunities in business, finance, management, economics, and professional development paths. This guide gives students a practical understanding of how to think about their future after 12th Commerce.",
    sections: [
      {
        title: "Why Commerce Is a Strong Stream",
        content: [
          "Commerce helps students understand how money, markets, organizations, and business systems work.",
          "It is a valuable stream for students who like structured thinking, business concepts, and financial topics.",
          "Commerce can support both academic growth and entrepreneurial thinking."
        ]
      },
      {
        title: "Common Areas of Interest",
        content: [
          "Students interested in accounting, business studies, finance, economics, management, and commerce-related subjects often feel comfortable in this stream.",
          "Commerce can support students who want practical understanding of the business world.",
          "It can also be useful for students who want to build strong foundations before moving into professional or business-focused education."
        ]
      },
      {
        title: "Career Planning After 12th Commerce",
        content: [
          "Students should think carefully about whether they prefer finance-oriented, management-oriented, analytical, or entrepreneurial directions.",
          "Future planning becomes easier when students identify what kind of work style they enjoy.",
          "Good planning after 12th can help students move confidently into the next academic stage."
        ]
      },
      {
        title: "Mistakes to Avoid",
        content: [
          "Students should not assume Commerce is only about one type of job or one professional path.",
          "They should also avoid choosing a direction only because someone else calls it safe.",
          "Exploration, comparison, and self-awareness are important before making final decisions."
        ]
      }
    ],
    faq: [
      {
        question: "Can Commerce students build a strong career?",
        answer:
          "Yes. Commerce students can move into business, finance, management, accounting, economics, and many related pathways."
      },
      {
        question: "Is Commerce only for students weak in Science?",
        answer:
          "No. Commerce is an independent and valuable stream with its own strong career possibilities."
      },
      {
        question: "Should I think about interest after 12th Commerce?",
        answer:
          "Yes. Interest and aptitude help students choose a more suitable future direction."
      }
    ]
  },
  {
    slug: "career-options-after-12th-arts",
    title: "Career Options After 12th Arts",
    description:
      "Explore career options after 12th Arts including humanities, communication, law, design, public service, and social science pathways.",
    intro:
      "Arts students have many valuable and respected career possibilities. This guide helps students understand the strength of the Arts stream and how to think about future planning after 12th.",
    sections: [
      {
        title: "Why Arts Has Strong Scope",
        content: [
          "Arts is a broad stream connected with humanities, social understanding, language, communication, creativity, and public thought.",
          "It can support students interested in society, policy, psychology, literature, law, media, teaching, and many other fields.",
          "Arts should be seen as a serious academic and professional pathway."
        ]
      },
      {
        title: "Who Usually Does Well in Arts",
        content: [
          "Students who enjoy reading, writing, social understanding, analysis, language, communication, and conceptual thinking often do well in Arts.",
          "It can also suit students who want careers connected with people, ideas, culture, public systems, or communication.",
          "The stream becomes more rewarding when students genuinely enjoy the subjects they study."
        ]
      },
      {
        title: "Planning the Future After 12th Arts",
        content: [
          "Students should think about whether they feel more interested in public service, social sciences, communication, law-related studies, design, or teaching-oriented paths.",
          "A good future plan starts with identifying subject strength and preferred work style.",
          "Arts offers both creative and serious professional directions for motivated students."
        ]
      },
      {
        title: "Changing the Wrong Mindset",
        content: [
          "Many students hear that Arts has less value, but this is not true.",
          "Success in Arts depends on clarity, effort, and choosing the right direction.",
          "Students should focus on quality preparation and self-awareness instead of comparing streams negatively."
        ]
      }
    ],
    faq: [
      {
        question: "Is Arts a good stream after 12th?",
        answer:
          "Yes. Arts is a strong and meaningful stream with many academic and professional directions."
      },
      {
        question: "Can Arts students prepare for serious careers?",
        answer:
          "Yes. Arts can support careers in law, teaching, civil services, media, design, psychology, communication, and more."
      },
      {
        question: "Should Arts students feel inferior to other streams?",
        answer:
          "No. Every stream has its own value, and Arts can lead to strong long-term success."
      }
    ]
  },
  {
    slug: "career-planning-tips-for-students",
    title: "Career Planning Tips for Students",
    description:
      "Practical career planning tips for students to choose the right stream, course, and future direction with confidence.",
    intro:
      "Career planning is not only about choosing a stream or course. It is about understanding yourself, your strengths, your interests, and the path that fits you best. These tips can help students make smarter decisions.",
    sections: [
      {
        title: "Know Your Strengths",
        content: [
          "A good career plan starts with knowing which subjects, activities, and environments suit you best.",
          "Students should look at both performance and interest because both matter for long-term success.",
          "When students know themselves better, decision-making becomes easier."
        ]
      },
      {
        title: "Do Proper Research",
        content: [
          "Students should learn about different streams, courses, and pathways before making decisions.",
          "It is important to understand what a path really involves rather than only hearing its name.",
          "Research helps students replace confusion with clarity."
        ]
      },
      {
        title: "Think Long Term",
        content: [
          "A good decision today should support growth tomorrow.",
          "Students do not need to know everything about the future, but they should think about what kind of direction they want to move toward.",
          "A future-focused mindset helps avoid random choices."
        ]
      },
      {
        title: "Take Guidance but Think Independently",
        content: [
          "Advice from parents, teachers, and mentors can be useful, but the final path should fit the student’s own reality.",
          "Blindly following pressure can create regret later.",
          "Balanced guidance and self-understanding lead to better outcomes."
        ]
      }
    ],
    faq: [
      {
        question: "When should students start career planning?",
        answer:
          "Students should begin thinking seriously before important academic decision points such as after 10th and after 12th."
      },
      {
        question: "Is career planning only for toppers?",
        answer:
          "No. Career planning is useful for every student."
      },
      {
        question: "Can proper planning reduce confusion?",
        answer:
          "Yes. Planning helps students make decisions with more confidence and clarity."
      }
    ]
  }
];