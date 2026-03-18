export type StreamResourceKey =
  | "engineering"
  | "medical"
  | "government"
  | "teacher"
  | "aviation"
  | "nursing"
  | "bcom";

export type StreamResourceDetail = {
  label: string;
  quickFacts: { label: string; value: string }[];
  eligibility: string[];
  percentageGuidance: string[];
  ageLimit: string[];
  entranceExams: string[];
  courseLength: string[];
  feeStructure: string[];
  topColleges: string[];
  onlineOffline: string[];
  abroadOpportunities: string[];
  placementPreparation: string[];
  jobSuggestions: string[];
  advertisementNote: string[];
  officialNote: string;
};

export const streamResourceDetails: Record<StreamResourceKey, StreamResourceDetail> = {
  engineering: {
    label: "Engineering",
    quickFacts: [
      { label: "Best after", value: "12th with PCM" },
      { label: "Main route", value: "B.Tech / B.E." },
      { label: "Course length", value: "4 years" },
      { label: "Popular exams", value: "JEE Main, JEE Advanced, state CETs" },
    ],
    eligibility: [
      "For most B.Tech / B.E. admissions, students should have completed 10+2 with Physics and Mathematics, along with Chemistry, Biology, Biotechnology, Computer Science, or a technical vocational subject depending on the college.",
      "JEE Main currently has no age limit, but institute-specific rules can still apply. JEE Main year-of-passing rules change by cycle, so students should verify the current bulletin before applying.",
      "For IIT admission through JEE Advanced, students first need to qualify JEE Main and then meet the current JEE Advanced eligibility conditions for age, attempts, and Class 12 performance."
    ],
    percentageGuidance: [
      "A practical website-friendly guidance range is 50% to 75%+ in Class 12, because many colleges allow around 45% to 50% while competitive institutes usually need much stronger board marks plus entrance performance.",
      "For safer planning, students targeting strong placements should try to keep Class 12 scores above 60% and prepare seriously for entrance exams, because many companies later use 60% or 65% cutoffs in academics."
    ],
    ageLimit: [
      "JEE Main: no age limit under current NTA-style eligibility, though current year-passing rules apply.",
      "JEE Advanced: age and attempt limits apply and must be checked for the exact admission year."
    ],
    entranceExams: [
      "National: JEE Main and JEE Advanced.",
      "State-level examples: MHT-CET, WBJEE, KCET, TS EAMCET, AP EAMCET, KEAM.",
      "Private university examples: BITSAT, VITEEE, SRMJEEE, Manipal entrance routes."
    ],
    courseLength: [
      "B.Tech / B.E. is usually 4 years.",
      "Diploma after 10th is usually 3 years, and some students later move into lateral-entry engineering."
    ],
    feeStructure: [
      "Government / public colleges: often around ₹40,000 to ₹2.5 lakh total for tuition, though hostel and living costs are extra.",
      "Top central institutes and NIT/IIT-style campuses may cost more overall once hostel, mess, and other fees are included.",
      "Private engineering colleges: roughly ₹4 lakh to ₹18 lakh+ total depending on branch, brand, and location."
    ],
    topColleges: [
      "Top government suggestions: IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur, NIT Trichy, NIT Surathkal, NIT Warangal.",
      "Strong private suggestions: BITS Pilani, VIT Vellore, SRM IST, Manipal Institute of Technology, Thapar Institute of Engineering and Technology.",
      "Budget-minded students should also shortlist strong state government engineering colleges in their home state because ROI can be better than many expensive private colleges."
    ],
    onlineOffline: [
      "The degree itself is usually strongest in offline mode because labs, peer learning, internships, and campus placements matter a lot.",
      "Online learning works very well for coding, AI, cloud, web development, DSA, aptitude, and interview preparation, but it should support the degree rather than replace it for freshers."
    ],
    abroadOpportunities: [
      "Common destinations include the USA, Canada, the UK, Ireland, Germany, and Australia for MS, project-based work, or skilled jobs.",
      "High-demand areas abroad often include software engineering, AI, data engineering, cybersecurity, embedded systems, cloud, and robotics.",
      "Students targeting abroad should build coding projects, internships, English communication, and a strong academic record early."
    ],
    placementPreparation: [
      "Start DSA, aptitude, communication, and resume work from first or second year instead of waiting until the final semester.",
      "Create 2 to 4 serious projects on GitHub, complete at least one internship, and practice coding rounds and mock interviews.",
      "For non-CS branches, add software, analytics, CAD, core tools, or domain certifications based on your target role."
    ],
    jobSuggestions: [
      "For IT jobs: learn DSA, Java or Python, SQL, web basics, Git, and one cloud platform.",
      "For core jobs: focus on subject fundamentals, mini-projects, industrial training, and relevant software tools.",
      "For the best first job chances, prioritize skill-building, internships, LinkedIn profile quality, and off-campus applications in addition to campus placement."
    ],
    advertisementNote: [
      "Institutes, colleges, coaching centers, and edtech partners can connect through the Contact section for listing, collaboration, or sponsored placement-support content.",
      "Any promotional or partner content should be clearly labeled as advertisement, sponsored, or featured."
    ],
    officialNote: "Engineering admission rules, age policies, and exam conditions can change by year and institute. Students should verify the current NTA, JoSAA, state counselling, and college admission pages before applying.",
  },
  medical: {
    label: "Medical",
    quickFacts: [
      { label: "Best after", value: "12th with PCB + English" },
      { label: "Main route", value: "MBBS / BDS / allied medical" },
      { label: "Course length", value: "MBBS usually 5.5 years" },
      { label: "Main exam", value: "NEET-UG" },
    ],
    eligibility: [
      "For MBBS and many medical courses in India, the key route is 10+2 with Physics, Chemistry, Biology or Biotechnology, and English, along with NEET-UG qualification.",
      "Under the current NEET pattern, the minimum age is 17 years by 31 December of the admission year, and there is presently no upper age limit under the current rules.",
      "For MBBS-level planning, students should treat NEET as the central gateway and verify category-specific rules in the current information bulletin."
    ],
    percentageGuidance: [
      "A commonly followed eligibility benchmark is 50% aggregate in PCB for General category, 40% for SC/ST/OBC, and 45% for PwD candidates in the qualifying examination, subject to the current NEET bulletin.",
      "For real competition planning, students should target much stronger board performance because actual admission depends far more on NEET rank than only board percentage."
    ],
    ageLimit: [
      "Minimum age: 17 years by 31 December of the year of admission.",
      "Upper age: no upper age limit under current NEET-UG rules, but students should still re-check the current NTA bulletin every year."
    ],
    entranceExams: [
      "NEET-UG is the main entrance exam for MBBS, BDS, and many allied undergraduate medical admissions in India.",
      "Counselling then usually happens through All India Quota and state-level counselling systems."
    ],
    courseLength: [
      "MBBS is usually 4.5 years of academic study plus 1 year of compulsory internship, which is generally described as 5.5 years total.",
      "BDS is commonly 5 years including internship.",
      "Students not targeting MBBS can also explore BAMS, BHMS, BPT, B.Sc. allied health, radiology, lab science, optometry, and related healthcare pathways."
    ],
    feeStructure: [
      "Government medical colleges can be far more affordable and may range from roughly ₹50,000 to ₹5 lakh+ for the full course depending on the state and institution.",
      "Private MBBS colleges can be very expensive and may range from about ₹25 lakh to well above ₹1 crore overall.",
      "Students should always verify tuition, hostel, caution deposit, university charges, and internship-related rules separately."
    ],
    topColleges: [
      "Top government suggestions: AIIMS Delhi and other AIIMS campuses, JIPMER, Maulana Azad Medical College, VMMC, CMC Vellore, King George's Medical University, and strong state government medical colleges.",
      "Students should prefer colleges with strong hospital exposure, patient volume, recognized internship systems, and good PG preparation culture."
    ],
    onlineOffline: [
      "The professional degree is offline because labs, anatomy, clinical postings, and internship are essential.",
      "Online learning is useful mainly for NEET preparation, revision, mock tests, and concept strengthening."
    ],
    abroadOpportunities: [
      "Doctors often target the USA, Canada, the UK, Australia, Ireland, or Gulf countries after clearing the relevant licensing route.",
      "Typical examples include USMLE for the USA and PLAB or the newer UK pathways depending on current GMC rules.",
      "Students planning abroad should understand that a degree alone is not enough; exams, licensing, observerships, and documentation matter."
    ],
    placementPreparation: [
      "For MBBS, the immediate focus is not corporate-style placement but strong academic performance, internship quality, patient handling, and later PG entrance preparation.",
      "Keep records of clinical postings, build discipline during internship, and decide early whether you want PG, government service, hospital work, or the abroad route."
    ],
    jobSuggestions: [
      "Do not choose medical only for status; choose it only if you are ready for long-term study, discipline, and patient-centered work.",
      "Track NEET rank trends, state quota, bond rules, stipend policies, and internship conditions before joining a college."
    ],
    advertisementNote: [
      "Coaching institutes, counselling partners, and academic collaborators can connect through the Contact section for transparent featured listings or sponsored guidance content.",
      "Any paid promotion should be clearly disclosed and should never be shown as guaranteed admission or guaranteed rank."
    ],
    officialNote: "Medical admission, reservation, qualifying marks, counselling, and fee structures can change. Students should verify the current NTA NEET bulletin, MCC counselling, state counselling authorities, and the official college website.",
  },
  government: {
    label: "Government Jobs",
    quickFacts: [
      { label: "Best after", value: "10th / 12th / graduation depending on exam" },
      { label: "Main route", value: "Exam-specific" },
      { label: "Preparation length", value: "6 months to 3 years" },
      { label: "Popular exams", value: "UPSC, SSC, Banking, Railways, State PSC" },
    ],
    eligibility: [
      "Government jobs do not have one single eligibility rule. The exact requirement depends on the exam and the post.",
      "Some exams are open after 10th or 12th, while many high-demand jobs require graduation.",
      "Examples: UPSC Civil Services typically requires a bachelor's degree; SSC CHSL is for 12th pass level; SSC CGL is for graduates; many railways and state jobs have their own post-wise rules."
    ],
    percentageGuidance: [
      "Many government exams do not require a high percentage in Class 10, 12, or graduation, but a recognized qualification is mandatory.",
      "Students should still maintain good marks because some interviews, document checks, or alternative career routes benefit from a stronger academic record."
    ],
    ageLimit: [
      "Age limit is exam-specific. For example, UPSC Civil Services for the General category is commonly 21 to 32 years with category-wise relaxation under the current rules.",
      "Other exams may start at 18 years, 20 years, or 21 years depending on the post. Always check the current official notification."
    ],
    entranceExams: [
      "Civil Services: UPSC CSE.",
      "Staff Selection: SSC CHSL, CGL, CPO, MTS and others.",
      "Banking: IBPS PO, IBPS Clerk, SBI PO, RBI Assistant and similar exams.",
      "Other major routes: Railways, State PSC, teaching recruitment, defence, and departmental recruitments."
    ],
    courseLength: [
      "There is no single course length because this is an exam path rather than one degree path.",
      "Serious preparation often takes 6 to 24 months depending on the exam, competition level, and the student's base."
    ],
    feeStructure: [
      "Self-study route can be low-cost with books, test series, and free online content.",
      "Coaching-based preparation may range from roughly ₹10,000 to ₹2 lakh+ depending on exam type, city, and duration.",
      "Students should avoid very expensive coaching unless the exam strategy, mentorship, and test quality are genuinely strong."
    ],
    topColleges: [
      "For government jobs, the institution matters less than the exam strategy, but popular coaching hubs include Delhi, Prayagraj, Jaipur, Patna, Hyderabad, and strong online ecosystems.",
      "Well-known preparation brands vary by exam, so students should choose based on results transparency, faculty quality, test series, and affordability rather than only marketing."
    ],
    onlineOffline: [
      "Both modes work well. Online is often enough for many exams if the student is disciplined.",
      "Offline can help students who need classroom structure, peer competition, and schedule control."
    ],
    abroadOpportunities: [
      "Government jobs in this section are mainly India-focused, so abroad opportunities are not the main goal here.",
      "However, the discipline, aptitude, English, and writing skills built during preparation can still help in international study or alternate career plans later."
    ],
    placementPreparation: [
      "Create a realistic exam shortlist instead of preparing randomly for every exam.",
      "Build a timetable around syllabus completion, previous-year papers, mock tests, current affairs, and revision cycles.",
      "For descriptive exams, answer writing and time management are essential."
    ],
    jobSuggestions: [
      "Pick 1 primary exam track and 1 backup track based on your age, qualification, and time left.",
      "Stay alert for notifications, document validity, category certificates, and exam calendar changes.",
      "A backup skill like Excel, typing, communication, or digital tools can protect you if the exam cycle becomes long."
    ],
    advertisementNote: [
      "Coaching centers, test-series providers, and mentoring partners can connect through the Contact section for sponsored listings or collaboration.",
      "Any promotional material should clearly state that selection is based on merit and official recruitment rules, not on guaranteed placement claims."
    ],
    officialNote: "Every government recruitment has its own eligibility, age relaxation, syllabus, and post rules. Students must read the latest official notification before paying any fee or joining any coaching.",
  },
  teacher: {
    label: "Teacher",
    quickFacts: [
      { label: "Best after", value: "12th or graduation depending on level" },
      { label: "Main route", value: "D.El.Ed / B.Ed / integrated teacher education" },
      { label: "Main exams", value: "CTET, State TET, recruitment exams" },
      { label: "Work setting", value: "School, coaching, edtech, special education" },
    ],
    eligibility: [
      "The teaching pathway depends on the school level you want to teach. Primary, upper-primary, secondary, and senior-secondary roles can follow different academic routes.",
      "For many school teaching routes, students commonly complete graduation plus B.Ed, or a 4-year integrated teacher education program, or elementary education pathways depending on the target level and current NCTE rules.",
      "CTET eligibility follows the current NCTE qualification framework, so students should always verify the exact current bulletin before applying."
    ],
    percentageGuidance: [
      "A common planning benchmark is 50% in Senior Secondary or graduation for many teacher education routes, though exact rules vary by pathway, category, and regulations in force.",
      "Some B.Ed and teacher-education routes may accept 45% in specific situations under the applicable regulations."
    ],
    ageLimit: [
      "CTET itself does not generally work like a narrow age-limited exam in the way many jobs do, but recruitment age limits can apply when applying to actual teaching posts.",
      "State and central teacher recruitments often have post-wise age rules, usually beginning from 18 years or above, with category relaxation where applicable."
    ],
    entranceExams: [
      "Eligibility-style exams: CTET and State TET / STET.",
      "Admission-side exams may include university B.Ed entrances, integrated teacher education admissions, and state-specific entrance systems."
    ],
    courseLength: [
      "D.El.Ed is often around 2 years for elementary teaching routes.",
      "B.Ed is commonly 2 years after graduation.",
      "Integrated teacher education programs can be around 4 years."
    ],
    feeStructure: [
      "Government teacher-education colleges may be relatively affordable, often around ₹20,000 to ₹1.2 lakh+ overall depending on state and university.",
      "Private institutes can range from about ₹60,000 to ₹3 lakh or more depending on brand and city."
    ],
    topColleges: [
      "Good options include reputed central universities, state universities, NCERT-linked institutions, Regional Institutes of Education, and recognized government B.Ed colleges.",
      "Students should focus on NCTE recognition, practice teaching exposure, placement support, and real classroom training rather than only advertisement claims."
    ],
    onlineOffline: [
      "The formal degree is usually strongest offline or blended because practice teaching and internships matter.",
      "Online learning is excellent for CTET, pedagogy revision, child development, English, reasoning, and mock tests."
    ],
    abroadOpportunities: [
      "Teaching opportunities can exist in the UAE, the UK, Canada, and other countries, but students usually need strong English, degree recognition, experience, and sometimes licensing or local teaching credentials.",
      "International schools also value communication, classroom management, and curriculum familiarity."
    ],
    placementPreparation: [
      "Build teaching demos, lesson plans, classroom confidence, board work, communication, and child-handling skills.",
      "Prepare separately for school interviews, CTET or TET, and demo classes because each stage tests different strengths."
    ],
    jobSuggestions: [
      "Students who genuinely enjoy explaining concepts and working with children usually do better long term than students choosing teaching only for job security.",
      "Add digital teaching tools, spoken English, and content-creation skills to open school, edtech, tutoring, and online teaching opportunities."
    ],
    advertisementNote: [
      "Teacher-training institutes, schools, and edtech partners can connect through the Contact section for featured listings or training collaborations.",
      "Any promotional content should be transparent and must not mislead students about recognition, placement, or eligibility."
    ],
    officialNote: "Teacher education and CTET/TET eligibility change with regulations and notifications. Students should verify the latest NCTE, CTET, state education board, and university admission pages before applying.",
  },
  aviation: {
    label: "Aviation",
    quickFacts: [
      { label: "Best after", value: "12th; stream depends on role" },
      { label: "Main routes", value: "Pilot, cabin crew, ground staff, management" },
      { label: "Course length", value: "6 months to 3+ years depending on role" },
      { label: "Major filter", value: "Communication, medical fitness, grooming, discipline" },
    ],
    eligibility: [
      "Aviation eligibility depends heavily on the role. Cabin crew and many airport service roles can be explored after 12th in any stream, while pilot training usually needs 10+2 with Physics and Mathematics or an accepted equivalent path.",
      "For a Commercial Pilot Licence in India, DGCA rules require the student to be at least 18 years old on the date of application and to have passed 10+2 with Physics and Mathematics or an accepted equivalent qualification.",
      "Airline and institute-specific grooming, communication, eyesight, medical, and personality requirements can apply in addition to academic eligibility."
    ],
    percentageGuidance: [
      "Many cabin crew or airport service institutes do not set very high board-percentage cutoffs, but stronger English and communication matter more than marks.",
      "For pilot training planning, students should still keep 50%+ in 12th as a practical benchmark and ensure their Physics and Mathematics base is clear."
    ],
    ageLimit: [
      "Commercial Pilot Licence route: minimum 18 years for application under current DGCA rules.",
      "Cabin crew age usually depends on airline or institute; a practical planning range is often 18 to 27 years for fresher entry, but exact airline recruitment notices should be checked."
    ],
    entranceExams: [
      "Pilot pathway: DGCA exams, medical fitness, flight training milestones, and institute assessments.",
      "Government or premium pilot academies may have their own admission tests, interviews, and aptitude stages.",
      "Cabin crew and airport jobs often rely more on screening, communication rounds, grooming checks, and interviews than on one national exam."
    ],
    courseLength: [
      "Cabin crew or airport operations courses are commonly around 6 to 12 months.",
      "Commercial pilot training can take around 18 months to 3 years depending on flying hours, weather, exams, and training pace."
    ],
    feeStructure: [
      "Cabin crew / airport operations training may range from about ₹1 lakh to ₹3.5 lakh+ depending on institute and city.",
      "Commercial pilot training is expensive and can range roughly from ₹35 lakh to ₹70 lakh+ depending on flying hours, academy, aircraft, and location."
    ],
    topColleges: [
      "Pilot route suggestions: IGRUA and reputed DGCA-compliant flying schools with transparent fleet, instructor, and placement record.",
      "Cabin crew / airport operations suggestions should be chosen only after checking credibility, trainer quality, airline linkage transparency, and student outcomes rather than only marketing."
    ],
    onlineOffline: [
      "Aviation career training is mostly offline because grooming, drills, simulator exposure, airport processes, and practical training matter.",
      "Online classes can support interview prep, English, customer service, and aviation theory, but practical training still matters most."
    ],
    abroadOpportunities: [
      "Examples include the UAE, Qatar, Canada, the UK, and other international airline or aviation ecosystems depending on the role.",
      "Cabin crew and airport service candidates need polished communication, customer-handling ability, and interview readiness.",
      "Pilot pathways abroad usually involve separate licensing, conversion, and regulatory compliance."
    ],
    placementPreparation: [
      "For cabin crew and ground staff, focus on spoken English, confidence, grooming, body language, interview practice, and customer-service scenarios.",
      "For pilot aspirants, plan financing, DGCA medical fitness, theory exams, flying-hour strategy, and long-term airline entry pathways carefully."
    ],
    jobSuggestions: [
      "Never join an aviation institute without checking recognition, real student reviews, hidden fees, refund rules, and actual placement support.",
      "A strong profile photo, resume, communication practice, and mock HR rounds can improve fresher hiring chances significantly."
    ],
    advertisementNote: [
      "Aviation institutes, airline-support training centers, grooming partners, and interview-prep providers can connect through the Contact section for transparent promotional listings.",
      "All paid promotions should clearly say advertisement or sponsored and must avoid guaranteed-job claims."
    ],
    officialNote: "Aviation rules, licensing, and institute claims must always be verified from DGCA, airline notices, and the official academy website before payment or enrolment.",
  },
  nursing: {
    label: "Nursing",
    quickFacts: [
      { label: "Best after", value: "12th with PCB + English" },
      { label: "Main route", value: "B.Sc Nursing" },
      { label: "Course length", value: "4 years" },
      { label: "Demand", value: "High in India and abroad" },
    ],
    eligibility: [
      "For B.Sc Nursing, students generally need 10+2 with Physics, Chemistry, Biology, and English from a recognized board.",
      "A practical current benchmark under Indian Nursing Council-linked guidance is that the candidate should pass PCB and English individually and secure at least 45% marks together in PCB for many B.Sc Nursing admissions, though some institutes or entrance systems may use higher thresholds.",
      "Candidates should be medically fit, and some entrance systems may add more conditions in the current bulletin."
    ],
    percentageGuidance: [
      "A practical website-safe guidance range is 45% to 55%+ in PCB depending on the institute and category.",
      "Students targeting top nursing colleges should aim for stronger board marks plus entrance preparation because better institutes are more competitive."
    ],
    ageLimit: [
      "Minimum age is generally 17 years on or before 31 December of the admission year.",
      "Some nursing guidance pages show an upper age limit in certain contexts, but students should verify the exact current rule in the official entrance or institute prospectus."
    ],
    entranceExams: [
      "College- or university-based nursing entrance exams.",
      "Examples include AIIMS B.Sc Nursing and other institutional or state-level nursing admissions where applicable."
    ],
    courseLength: [
      "B.Sc Nursing is generally 4 years.",
      "GNM and ANM routes have different durations and are separate pathways."
    ],
    feeStructure: [
      "Government colleges can be relatively affordable and may range from around ₹20,000 to ₹2 lakh+ overall depending on the state and institution.",
      "Private colleges may range roughly from ₹2 lakh to ₹8 lakh+ overall depending on city, infrastructure, and hospital attachment."
    ],
    topColleges: [
      "Suggestions include AIIMS nursing institutions, CMC Vellore, top state government nursing colleges, and reputed universities with strong hospital training.",
      "The best nursing college is usually one with strong clinical exposure, hospital tie-ups, hostel safety, and a good licensing / placement support system."
    ],
    onlineOffline: [
      "The degree is primarily offline because labs, practical skills, community postings, and hospital training are essential.",
      "Online support is useful for entrance prep, theory revision, English, and NCLEX-style future preparation."
    ],
    abroadOpportunities: [
      "Nursing has strong international demand in countries such as the USA, Canada, the UK, Ireland, Australia, and Gulf countries.",
      "Students usually need language testing, licensing, credential verification, and country-specific registration to work abroad."
    ],
    placementPreparation: [
      "Build clinical discipline, communication, patient care confidence, and documentation skills during training.",
      "Choose internships and hospital postings seriously because bedside skills matter a lot for employability."
    ],
    jobSuggestions: [
      "Nursing is a strong choice for students who want healthcare service, stability, and global mobility.",
      "Students interested in abroad placement should start improving English, documentation habits, and licensing awareness early."
    ],
    advertisementNote: [
      "Nursing colleges, hospital-training partners, and exam-prep providers can connect through the Contact section for transparent featured listings or collaboration.",
      "Promotional material should be clearly marked and should never imply guaranteed registration, guaranteed visa, or guaranteed job."
    ],
    officialNote: "Nursing admissions, entrance patterns, and institute-specific criteria vary. Students should verify the latest Indian Nursing Council guidance, exam bulletin, and the official college admission page.",
  },
  bcom: {
    label: "BCom",
    quickFacts: [
      { label: "Best after", value: "12th; Commerce preferred but not always mandatory" },
      { label: "Main route", value: "B.Com / B.Com (Hons.)" },
      { label: "Course length", value: "3 years in most universities" },
      { label: "Career mix", value: "Accounts, finance, tax, banking, business" },
    ],
    eligibility: [
      "Most B.Com and B.Com (Hons.) routes require passing 10+2 from a recognized board. Commerce is preferred, but exact subject combinations depend on the university.",
      "In central-university style admissions such as Delhi University, CUET subject combinations matter and can differ for B.Com and B.Com (Hons.), so students should always verify the current bulletin of the target university.",
      "Students interested in finance-heavy colleges should be ready with accountancy, mathematics or applied mathematics where relevant, plus the required language and test components."
    ],
    percentageGuidance: [
      "Many universities accept 45% to 60%+ depending on category and institution, but stronger colleges are much more competitive and rely heavily on entrance / CUET performance.",
      "For better options, students should target strong Class 12 scores and a good CUET strategy if the university uses CUET-based admission."
    ],
    ageLimit: [
      "There is usually no major age barrier for B.Com admission in the same way as recruitment exams, but institute-specific rules may apply.",
      "Students should still check the latest university prospectus for age-related or gap-year documentation requirements."
    ],
    entranceExams: [
      "CUET-UG is important for many central universities.",
      "Private universities may have their own entrance or merit-based admissions.",
      "For top colleges, admission policy can change, so students should verify the latest university bulletin each year."
    ],
    courseLength: [
      "B.Com / B.Com (Hons.) is generally 3 years under the current undergraduate structure in many universities.",
      "Students can later add CA, CMA, CS, CFA, MBA, banking exams, data analytics, or taxation specialization."
    ],
    feeStructure: [
      "Government and public colleges can be highly affordable, often around ₹20,000 to ₹1.5 lakh+ overall depending on the university.",
      "Private colleges may range from around ₹1.5 lakh to ₹6 lakh+ overall depending on brand, city, and add-on facilities."
    ],
    topColleges: [
      "Popular suggestions include Shri Ram College of Commerce, Hindu College, Hansraj College, Lady Shri Ram College, Loyola College, Christ University, St. Xavier's colleges, Narsee Monjee-linked commerce options, and other strong regional universities.",
      "Students should compare faculty quality, internships, commerce society culture, professional-course support, and ROI before deciding."
    ],
    onlineOffline: [
      "Offline college works best for peer learning, internships, societies, and placement exposure.",
      "Online learning is very useful for Excel, Tally, financial modelling, accounting software, taxation, communication, and interview readiness."
    ],
    abroadOpportunities: [
      "B.Com students often move abroad for master's programs in finance, business analytics, management, accounting, or international business in places like the USA, Canada, the UK, Ireland, and Australia.",
      "Global mobility improves when students add internships, strong academics, communication, and finance tools."
    ],
    placementPreparation: [
      "Learn Excel, PowerPoint, business communication, accounting basics, and internship discipline from first year.",
      "Students targeting finance jobs should add accounting tools, data handling, aptitude, and interview preparation early."
    ],
    jobSuggestions: [
      "B.Com becomes much stronger when combined with CA, CMA, CS, MBA, banking prep, digital finance tools, or analytics skills.",
      "For faster job readiness, build a resume with internships, Excel, Tally, GST basics, and communication skills."
    ],
    advertisementNote: [
      "Commerce colleges, coaching institutes, finance-skill academies, and internship partners can connect through the Contact section for featured listings or sponsored educational content.",
      "Any paid feature should be disclosed clearly and should not be presented as guaranteed admission or guaranteed placement."
    ],
    officialNote: "B.Com admission rules, CUET combinations, and fee structures vary by university and year. Students should verify the latest official bulletin and college website before applying.",
  },
};
