export type TestInsight = {
  whyItFits: string[];
  schoolFocus: string[];
  careers: string[];
  next90Days: string[];
  indiaPathway: string[];
  globalPathway: string[];
  resources: { label: string; href: string }[];
  blogs: { label: string; href: string }[];
  backupSlugs: string[];
};

export const testInsights: Record<string, TestInsight> = {
  engineering: {
    whyItFits: [
      "You are likely comfortable with analytical thinking, structured problem solving, and learning technical concepts step by step.",
      "This direction fits students who enjoy mathematics, logic, systems, machines, computers, or building things that solve real problems.",
      "Engineering rewards consistency. Strong performance usually comes from daily practice, concept clarity, and project-based learning.",
    ],
    schoolFocus: ["Mathematics", "Physics", "Problem solving", "Computer basics", "Logical reasoning"],
    careers: ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Electronics Engineer", "Data Analyst", "AI / Robotics roles"],
    next90Days: [
      "Strengthen Math and Physics fundamentals with a fixed weekly practice routine.",
      "Explore one branch at a time such as CSE, Mechanical, Civil, Electronics, or AI-related fields.",
      "Start one mini project or practical activity to see whether you enjoy applied learning.",
      "Compare Indian entrance pathways with international undergraduate options if you are considering study abroad.",
    ],
    indiaPathway: [
      "After 10th: choose a science pathway with strong Math support if engineering is your target.",
      "After 12th: compare JEE-focused routes, state-level entrance options, private college choices, and diploma-to-degree pathways.",
      "Research branch quality, placement data, faculty, labs, and internship exposure before choosing a college.",
    ],
    globalPathway: [
      "For study abroad, compare foundation requirements, English proficiency tests, tuition range, internship options, and post-study work rules.",
      "Countries like the USA, Canada, UK, Australia, and parts of Europe may be useful depending on budget and long-term goals.",
      "Look for engineering programs with co-op, applied labs, or industry placements rather than only brand name.",
    ],
    resources: [
      { label: "Engineering resource guide", href: "/resources/engineering-careers" },
      { label: "Skills roadmap", href: "/skills/ai-roadmap" },
      { label: "Study abroad hub", href: "/study-abroad" },
    ],
    blogs: [
      { label: "Top careers in the USA", href: "/blog/top-careers-usa-2026" },
      { label: "Future-proof jobs in the AI era", href: "/blog/future-proof-jobs-ai-era" },
    ],
    backupSlugs: ["bcom", "aviation", "government"],
  },
  medical: {
    whyItFits: [
      "This direction often suits students who are interested in biology, healthcare, discipline, and helping people in high-responsibility environments.",
      "Medical pathways need patience, long-term focus, and emotional steadiness because the training period is usually longer and more demanding.",
      "Students who like science with a human impact often find medical and healthcare fields meaningful over time.",
    ],
    schoolFocus: ["Biology", "Chemistry", "Discipline", "Observation", "Communication"],
    careers: ["Doctor", "Dentist", "Pharmacist", "Public Health roles", "Lab-based healthcare careers", "Allied healthcare pathways"],
    next90Days: [
      "Review your Biology and Chemistry comfort level honestly and identify where you need more support.",
      "Compare MBBS, BDS, BPT, Pharmacy, Allied Health, and related pathways instead of focusing on only one option.",
      "Create a science revision schedule with concept tracking and mock questions.",
      "Discuss time commitment, cost, and long-term expectations with family before finalizing a path.",
    ],
    indiaPathway: [
      "After 10th: build a strong science base and check which healthcare routes require Biology in 11th and 12th.",
      "After 12th: compare entrance-based routes, private institutions, allied healthcare, nursing, pharmacy, and public health options.",
      "Use official eligibility and admission criteria before making a final decision.",
    ],
    globalPathway: [
      "International medical and healthcare education often differs by licensing, entry route, and post-study clinical rules.",
      "For global students, compare healthcare degrees that have clearer post-study pathways, such as nursing, allied health, or public health.",
      "Always verify country-specific licensing and work eligibility from official sources.",
    ],
    resources: [
      { label: "Medical resource guide", href: "/resources/medical-careers" },
      { label: "International students guide", href: "/international-students" },
      { label: "Study in the USA", href: "/study-in-usa" },
    ],
    blogs: [
      { label: "Best courses in the UK for global jobs", href: "/blog/best-courses-uk-global-jobs" },
      { label: "Top careers in Canada", href: "/blog/top-careers-canada-2026" },
    ],
    backupSlugs: ["nursing", "teacher", "government"],
  },
  government: {
    whyItFits: [
      "This result suggests you may do well in structured preparation, general awareness, consistency, and disciplined routines.",
      "Government job preparation suits students who can stay patient over time and improve through repeated practice.",
      "It also helps if you are comfortable with reasoning, current affairs, and reading-based preparation.",
    ],
    schoolFocus: ["Reasoning", "General awareness", "Consistency", "Reading habits", "Time management"],
    careers: ["Civil services preparation", "SSC-related roles", "Banking exams", "Railway opportunities", "State government roles", "Public sector support roles"],
    next90Days: [
      "Build a steady timetable for GK, reasoning, English, and quantitative basics.",
      "Choose one exam family first instead of preparing randomly for everything.",
      "Track official notifications, eligibility, and syllabus changes carefully.",
      "Use weekly mock tests to improve speed, accuracy, and revision quality.",
    ],
    indiaPathway: [
      "Government exam planning is highly India-specific, so official portals and updated notifications matter a lot.",
      "Focus on eligibility, age limit, language requirements, and attempt limits before preparing seriously.",
      "Keep one backup academic or skill pathway active while preparing.",
    ],
    globalPathway: [
      "For students outside India, use this result more as a signal for structured careers like compliance, administration, operations, or policy-focused study options.",
      "You may also explore public administration, law-related support roles, or business operations depending on your location.",
      "Compare local public sector requirements in your country separately.",
    ],
    resources: [
      { label: "Government job resource guide", href: "/resources/government-jobs-guide" },
      { label: "High paying jobs guide", href: "/high-paying-jobs" },
      { label: "Career resources hub", href: "/resources" },
    ],
    blogs: [
      { label: "Future-proof jobs in the AI era", href: "/blog/future-proof-jobs-ai-era" },
      { label: "Top careers in Canada", href: "/blog/top-careers-canada-2026" },
    ],
    backupSlugs: ["teacher", "bcom", "aviation"],
  },
  teacher: {
    whyItFits: [
      "This result aligns with students who enjoy explaining, guiding, mentoring, and helping others understand concepts clearly.",
      "Teaching careers fit people with patience, communication, empathy, and consistency.",
      "A strong teaching path can grow into education leadership, training, counseling, curriculum work, or online education.",
    ],
    schoolFocus: ["Communication", "Explanation", "Patience", "Subject depth", "Confidence"],
    careers: ["School Teacher", "Subject Tutor", "Academic Coordinator", "Educational Content Creator", "Trainer", "Education Support roles"],
    next90Days: [
      "Identify which subject or age group you enjoy teaching the most.",
      "Practice explaining one topic per week in simple language.",
      "Explore teaching qualifications, B.Ed pathways, and modern online teaching opportunities.",
      "Build speaking confidence and classroom-style communication gradually.",
    ],
    indiaPathway: [
      "Check subject requirements, graduation paths, B.Ed planning, and teaching eligibility rules.",
      "Understand differences between school teaching, coaching, online tutoring, and training roles.",
      "Research state and institution-specific qualifications before choosing the route.",
    ],
    globalPathway: [
      "Teaching abroad often depends on degree recognition, licensing, age-group specialization, and language requirements.",
      "Students can also explore education studies, child development, training, instructional design, or edtech roles globally.",
      "For cross-border careers, verify teacher licensing and credential recognition from official bodies.",
    ],
    resources: [
      { label: "Teaching resource guide", href: "/resources/teacher-careers" },
      { label: "Skills hub", href: "/skills" },
      { label: "Contact guidance page", href: "/contact" },
    ],
    blogs: [
      { label: "Best courses in the UK for global jobs", href: "/blog/best-courses-uk-global-jobs" },
      { label: "Top careers in the USA", href: "/blog/top-careers-usa-2026" },
    ],
    backupSlugs: ["government", "medical", "bcom"],
  },
  aviation: {
    whyItFits: [
      "This route fits students who enjoy travel, communication, service quality, presentation, and dynamic work environments.",
      "Aviation careers often reward confidence, discipline, teamwork, and customer-facing professionalism.",
      "The field is broader than cabin crew alone and may include airport operations, ground services, customer support, and training roles.",
    ],
    schoolFocus: ["Communication", "Confidence", "Presentation", "Service mindset", "English improvement"],
    careers: ["Cabin Crew", "Ground Staff", "Airport Operations", "Customer Service roles", "Travel and aviation support roles", "Training-related pathways"],
    next90Days: [
      "Build spoken English, grooming, communication, and interview confidence.",
      "Research eligibility, physical requirements, and realistic role types within aviation.",
      "Practice customer service scenarios and group interaction skills.",
      "Keep one academic or business backup path active while exploring aviation.",
    ],
    indiaPathway: [
      "Compare airline-specific hiring, private aviation training institutes, communication training, and airport role options.",
      "Understand that recruitment standards differ by airline and role.",
      "Use verified company and training information rather than only social media promises.",
    ],
    globalPathway: [
      "International aviation pathways depend on work authorization, local hiring criteria, and airline-specific rules.",
      "Some students may be better served by tourism, hospitality, business, or customer operations degrees that keep options open.",
      "Always verify employer and visa rules directly from official sources.",
    ],
    resources: [
      { label: "Aviation resource guide", href: "/resources/aviation-careers" },
      { label: "International students guide", href: "/international-students" },
      { label: "Study abroad hub", href: "/study-abroad" },
    ],
    blogs: [
      { label: "Top careers in the USA", href: "/blog/top-careers-usa-2026" },
      { label: "Australia vs Canada study guide", href: "/blog/australia-vs-canada-study-guide" },
    ],
    backupSlugs: ["teacher", "bcom", "government"],
  },
  nursing: {
    whyItFits: [
      "This route often fits students who want a healthcare career with care, empathy, patience, and hands-on service.",
      "Nursing can be a strong option for students who want a practical and globally relevant healthcare pathway.",
      "It rewards discipline, communication, teamwork, and emotional steadiness.",
    ],
    schoolFocus: ["Biology", "Patient care mindset", "Communication", "Discipline", "Practical learning"],
    careers: ["Registered Nursing pathway", "Clinical support roles", "Community health roles", "Elder care and patient support", "Specialized nursing tracks"],
    next90Days: [
      "Review Biology basics and compare nursing with other healthcare pathways.",
      "Research course structure, clinical exposure, and long-term growth options.",
      "Talk to current students or verified institution sources about workload and placements.",
      "Start improving English and communication if you are considering global pathways.",
    ],
    indiaPathway: [
      "Compare BSc Nursing, GNM, and related healthcare support programs carefully.",
      "Use official institution information for seats, eligibility, and practical training expectations.",
      "Check registration and licensing rules from official bodies before enrolling.",
    ],
    globalPathway: [
      "Nursing is one of the clearer internationally relevant healthcare directions, but licensing rules differ by country.",
      "Compare destination countries for education cost, registration, post-study options, and work pathways.",
      "Verify every step through official nursing councils, regulators, and institutions.",
    ],
    resources: [
      { label: "Nursing resource guide", href: "/resources/nursing-careers" },
      { label: "Study in Canada", href: "/study-in-canada" },
      { label: "Study in the UK", href: "/study-in-uk" },
    ],
    blogs: [
      { label: "Top careers in Canada", href: "/blog/top-careers-canada-2026" },
      { label: "Best courses in the UK for global jobs", href: "/blog/best-courses-uk-global-jobs" },
    ],
    backupSlugs: ["medical", "teacher", "government"],
  },
  bcom: {
    whyItFits: [
      "This result aligns with students who are interested in accounts, business, finance, economics, or structured office-based work.",
      "Commerce-related directions can stay flexible and can later connect to accounting, banking, management, analytics, entrepreneurship, or business operations.",
      "It is a strong option for students who want a practical degree with multiple future branches.",
    ],
    schoolFocus: ["Accounts", "Business awareness", "Economics", "Communication", "Excel / digital tools"],
    careers: ["Accountant", "Banking roles", "Business Operations", "Finance Support", "Tax and audit support", "Commerce + analytics pathways"],
    next90Days: [
      "Build stronger basics in accounts, business studies, and spreadsheet use.",
      "Explore BCom with CA, CMA, CS, banking, business analytics, or management pathways.",
      "Start learning Excel, business communication, and basic digital tools early.",
      "Compare local degree options with global business and commerce programs.",
    ],
    indiaPathway: [
      "Commerce in India offers strong flexibility across accounting, finance, taxation, banking, and business-related preparation.",
      "Compare degree quality, practical exposure, internships, and certification add-ons before choosing a college.",
      "Keep long-term specialization in mind while selecting your early academic path.",
    ],
    globalPathway: [
      "Business and commerce programs are widely available internationally and can support careers in finance, operations, marketing, and management.",
      "Compare tuition, internship opportunities, co-op structure, and post-study work rules country by country.",
      "Look for programs with practical learning, analytics exposure, and industry links.",
    ],
    resources: [
      { label: "Commerce resource guide", href: "/resources/bcom-careers" },
      { label: "Skills hub", href: "/skills" },
      { label: "Study in Australia", href: "/study-in-australia" },
    ],
    blogs: [
      { label: "Australia vs Canada study guide", href: "/blog/australia-vs-canada-study-guide" },
      { label: "Top careers in the USA", href: "/blog/top-careers-usa-2026" },
    ],
    backupSlugs: ["government", "aviation", "teacher"],
  },
};
