import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "List of Engineering Entrance Exams in India 2026 | Official Links",
  description:
    "Complete SEO guide to engineering entrance exams in India 2026 with national, state, private university, lateral entry, comparison tables, FAQs, official links, and preparation strategy.",
  alternates: {
    canonical:
      "https://nishaglobaleducation.com/blog/list-of-engineering-entrance-exams-india",
  },
  openGraph: {
    title: "List of Engineering Entrance Exams in India 2026",
    description:
      "Complete list of engineering entrance exams in India with official links, comparison tables, FAQs, and preparation strategy.",
    url: "https://nishaglobaleducation.com/blog/list-of-engineering-entrance-exams-india",
    type: "article",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const officialExamLinks = [
  {
    name: "JEE Main",
    level: "National",
    authority: "National Testing Agency",
    bestFor: "NITs, IIITs, GFTIs and JEE Advanced eligibility",
    website: "https://jeemain.nta.nic.in",
    difficulty: "High",
  },
  {
    name: "JEE Advanced",
    level: "National",
    authority: "IITs on rotational basis",
    bestFor: "IIT admission",
    website: "https://jeeadv.ac.in",
    difficulty: "Very High",
  },
  {
    name: "BITSAT",
    level: "University",
    authority: "BITS Pilani",
    bestFor: "BITS Pilani, Goa and Hyderabad campuses",
    website: "https://www.bitsadmission.com",
    difficulty: "High",
  },
  {
    name: "COMEDK UGET",
    level: "State / Consortium",
    authority: "COMEDK",
    bestFor: "Private engineering colleges in Karnataka",
    website: "https://www.comedk.org",
    difficulty: "Moderate to High",
  },
  {
    name: "KCET",
    level: "State",
    authority: "Karnataka Examinations Authority",
    bestFor: "Engineering colleges in Karnataka",
    website: "https://cetonline.karnataka.gov.in",
    difficulty: "Moderate",
  },
  {
    name: "MHT CET",
    level: "State",
    authority: "State CET Cell Maharashtra",
    bestFor: "Engineering colleges in Maharashtra",
    website: "https://cetcell.mahacet.org",
    difficulty: "Moderate to High",
  },
  {
    name: "WBJEE",
    level: "State",
    authority: "West Bengal Joint Entrance Examinations Board",
    bestFor: "Engineering colleges in West Bengal",
    website: "https://wbjeeb.nic.in",
    difficulty: "Moderate to High",
  },
  {
    name: "AP EAPCET",
    level: "State",
    authority: "APSCHE",
    bestFor: "Engineering colleges in Andhra Pradesh",
    website: "https://cets.apsche.ap.gov.in",
    difficulty: "Moderate",
  },
  {
    name: "TG EAPCET / TS EAMCET",
    level: "State",
    authority: "TSCHE",
    bestFor: "Engineering colleges in Telangana",
    website: "https://eapcet.tsche.ac.in",
    difficulty: "Moderate",
  },
  {
    name: "GUJCET",
    level: "State",
    authority: "GSEB / ACPC Gujarat",
    bestFor: "Engineering colleges in Gujarat",
    website: "https://gujcet.gseb.org",
    difficulty: "Moderate",
  },
  {
    name: "KEAM",
    level: "State",
    authority: "Commissioner for Entrance Examinations Kerala",
    bestFor: "Engineering colleges in Kerala",
    website: "https://cee.kerala.gov.in",
    difficulty: "Moderate",
  },
  {
    name: "OJEE",
    level: "State",
    authority: "Odisha Joint Entrance Examination Committee",
    bestFor: "Odisha engineering admissions and lateral entry routes",
    website: "https://ojee.nic.in",
    difficulty: "Moderate",
  },
  {
    name: "VITEEE",
    level: "University",
    authority: "VIT",
    bestFor: "VIT campuses",
    website: "https://viteee.vit.ac.in",
    difficulty: "Moderate",
  },
  {
    name: "SRMJEEE",
    level: "University",
    authority: "SRM Institute of Science and Technology",
    bestFor: "SRM campuses",
    website: "https://www.srmist.edu.in",
    difficulty: "Moderate",
  },
  {
    name: "MET",
    level: "University",
    authority: "Manipal Academy of Higher Education",
    bestFor: "Manipal engineering programs",
    website: "https://manipal.edu",
    difficulty: "Moderate",
  },
  {
    name: "AEEE",
    level: "University",
    authority: "Amrita Vishwa Vidyapeetham",
    bestFor: "Amrita engineering campuses",
    website: "https://www.amrita.edu/admissions/btech",
    difficulty: "Moderate",
  },
];

const stateExams = [
  ["Karnataka", "KCET, COMEDK UGET", "https://cetonline.karnataka.gov.in, https://www.comedk.org"],
  ["Maharashtra", "MHT CET", "https://cetcell.mahacet.org"],
  ["West Bengal", "WBJEE", "https://wbjeeb.nic.in"],
  ["Andhra Pradesh", "AP EAPCET, AP ECET", "https://cets.apsche.ap.gov.in"],
  ["Telangana", "TG EAPCET / TS EAMCET, TS ECET", "https://eapcet.tsche.ac.in"],
  ["Gujarat", "GUJCET", "https://gujcet.gseb.org"],
  ["Kerala", "KEAM", "https://cee.kerala.gov.in"],
  ["Odisha", "OJEE", "https://ojee.nic.in"],
  ["Tamil Nadu", "TNEA admission process", "https://www.tneaonline.org"],
  ["Bihar", "BCECE / engineering counselling routes", "https://bceceboard.bihar.gov.in"],
  ["Jharkhand", "JCECEB counselling routes", "https://jceceb.jharkhand.gov.in"],
  ["Haryana", "HSTES counselling", "https://hstes.org.in"],
  ["Rajasthan", "REAP counselling", "https://reapbtech24.com"],
  ["Madhya Pradesh", "DTE MP counselling", "https://dte.mponline.gov.in"],
  ["Uttar Pradesh", "AKTU / UPTAC counselling", "https://uptac.admissions.nic.in"],
];

const universityExams = [
  ["BITSAT", "BITS Pilani", "https://www.bitsadmission.com"],
  ["VITEEE", "VIT", "https://viteee.vit.ac.in"],
  ["SRMJEEE", "SRM Institute of Science and Technology", "https://www.srmist.edu.in"],
  ["MET", "Manipal Academy of Higher Education", "https://manipal.edu"],
  ["AEEE", "Amrita Vishwa Vidyapeetham", "https://www.amrita.edu/admissions/btech"],
  ["KIITEE", "KIIT University", "https://kiitee.kiit.ac.in"],
  ["LPUNEST", "Lovely Professional University", "https://nest.lpu.in"],
  ["CUET UG", "Central and participating universities", "https://cuet.nta.nic.in"],
  ["IPU CET / IPU counselling", "Guru Gobind Singh Indraprastha University", "https://ipu.ac.in"],
  ["AMUEEE", "Aligarh Muslim University", "https://amucontrollerexams.com"],
  ["JMI Engineering Admission", "Jamia Millia Islamia", "https://jmicoe.in"],
  ["CUET / CUCET style university admissions", "Private and central universities", "https://cuet.nta.nic.in"],
];

const faqs = [
  {
    q: "Which is the most important engineering entrance exam in India?",
    a: "JEE Main is the most important engineering entrance exam for most students because it is used for admission to NITs, IIITs, GFTIs, and also works as the qualifying exam for JEE Advanced.",
  },
  {
    q: "Which exam is required for IIT admission?",
    a: "Students need to qualify JEE Main first and then perform well in JEE Advanced for IIT admission. JEE Advanced is the direct entrance exam for IIT undergraduate engineering seats.",
  },
  {
    q: "Can I apply for engineering without JEE Main?",
    a: "Yes. Many state exams, private university exams, and counselling processes allow engineering admission without JEE Main. Examples include KCET, MHT CET, WBJEE, COMEDK, VITEEE, SRMJEEE, MET, and BITSAT.",
  },
  {
    q: "How many engineering entrance exams should a student attempt?",
    a: "Most students should focus on 3 to 5 carefully selected exams. Too many exams can create confusion, extra fees, travel pressure, and scattered preparation.",
  },
  {
    q: "Which engineering entrance exams are best after Class 12?",
    a: "JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE, MET, COMEDK, KCET, MHT CET, WBJEE, AP EAPCET, TG EAPCET, GUJCET, and KEAM are among the major options after Class 12 science with mathematics.",
  },
  {
    q: "Are official links important for engineering exam preparation?",
    a: "Yes. Students should use official websites for application dates, eligibility, admit cards, syllabus, results, counselling, and fee details because third-party websites may be outdated or incorrect.",
  },
];

export default function EngineeringEntranceExamsIndiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "List of Engineering Entrance Exams in India 2026 With Official Links",
        description:
          "Complete list of engineering entrance exams in India with official links, comparison tables, FAQs, and preparation strategy.",
        url: "https://nishaglobaleducation.com/blog/list-of-engineering-entrance-exams-india",
        author: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
        publisher: {
          "@type": "Organization",
          name: "Nishaglobal Education",
        },
        mainEntityOfPage:
          "https://nishaglobaleducation.com/blog/list-of-engineering-entrance-exams-india",
        keywords:
          "engineering entrance exams in India, JEE Main, JEE Advanced, COMEDK, KCET, MHT CET, WBJEE, BITSAT, VITEEE, SRMJEEE",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Engineering entrance exams in India",
        itemListElement: officialExamLinks.map((exam, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: exam.name,
          url: exam.website,
        })),
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-700">
          Engineering entrance exams guide 2026
        </div>
        <h1 className="mt-4 max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          List of Engineering Entrance Exams in India 2026 With Official Links
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
          Engineering is one of the most searched career paths after Class 12 science in India. But students often prepare only for JEE and miss other strong opportunities such as state CETs, private university exams, lateral entry exams, and counselling-based admissions. This complete guide gives you a practical list of major engineering entrance exams in India, official websites, comparison tables, and a smart exam selection strategy.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/practice-tests/engineering-entrance"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
          >
            Start Engineering Practice Tests
          </Link>
          <Link
            href="/tests/engineering"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Take Free Engineering Career Test
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Why students should know all engineering exams</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            Many students believe that engineering admission means only JEE Main and JEE Advanced. These exams are extremely important, especially for NITs, IIITs and IITs, but they are not the only path. India has national-level exams, state-level exams, university-level exams, and diploma lateral entry exams. A student who understands all options can create a safer admission plan instead of depending on only one result.
          </p>
          <p>
            For example, a student targeting IITs should prepare for JEE Main and JEE Advanced. A Karnataka student may also consider KCET and COMEDK. A Maharashtra student should consider MHT CET. A student interested in private universities may consider BITSAT, VITEEE, SRMJEEE, MET, AEEE or KIITEE. A diploma student may need ECET or lateral entry routes instead of regular Class 12 entrance exams.
          </p>
          <p>
            The best strategy is not to apply for every exam. The smart strategy is to shortlist exams based on location, budget, college preference, academic level, backup options and application deadlines. This blog is designed to help students and parents compare options quickly and use official links safely.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-950">Who should use this guide?</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li>Class 11 and 12 science students planning engineering admission.</li>
            <li>Parents comparing JEE, state CETs and private university exams.</li>
            <li>Students who want backup options beyond IIT and NIT admissions.</li>
            <li>Diploma students checking lateral entry possibilities.</li>
            <li>Students building a 3 to 5 exam shortlist for better admission safety.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-xl font-bold text-rose-950">Who should avoid applying randomly?</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
            <li>Students who are already overloaded with board exam preparation.</li>
            <li>Students applying to exams without checking fees, location and eligibility.</li>
            <li>Students choosing colleges only by advertisements, not outcomes.</li>
            <li>Students who cannot travel to far exam centres or counselling locations.</li>
            <li>Students who have not verified dates from official exam websites.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Major Engineering Entrance Exams in India: Quick Comparison</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Use this table as a fast starting point. Always open the official website before applying because dates, eligibility, syllabus and counselling rules may change every year.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Exam</th>
                <th className="px-4 py-3 font-semibold">Level</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
                <th className="px-4 py-3 font-semibold">Difficulty</th>
                <th className="px-4 py-3 font-semibold">Official Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {officialExamLinks.map((exam) => (
                <tr key={exam.name}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{exam.name}</td>
                  <td className="px-4 py-3 text-slate-600">{exam.level}</td>
                  <td className="px-4 py-3 text-slate-600">{exam.bestFor}</td>
                  <td className="px-4 py-3 text-slate-600">{exam.difficulty}</td>
                  <td className="px-4 py-3">
                    <a
                      href={exam.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-700 hover:underline"
                    >
                      Visit official site
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">1. National-Level Engineering Entrance Exams</h2>
        <div className="mt-4 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            National-level exams are important because they are accepted by multiple institutions across India. For most engineering aspirants, JEE Main is the foundation exam. It is used for NIT, IIIT and GFTI admissions and is also the screening exam for JEE Advanced. Students who want IIT admission must treat JEE Main and JEE Advanced as the primary route.
          </p>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">JEE Main</h3>
            <p className="mt-2">
              JEE Main is conducted by the National Testing Agency. It is suitable for students targeting NITs, IIITs, GFTIs and several other engineering institutions. Students should check the official website for information bulletin, application form, admit card, answer key and result updates.
            </p>
            <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
              Official JEE Main website
            </a>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">JEE Advanced</h3>
            <p className="mt-2">
              JEE Advanced is required for IIT undergraduate engineering admission. Only eligible JEE Main qualifiers can appear. This exam needs strong conceptual clarity, advanced problem-solving and consistent mock test practice.
            </p>
            <a href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
              Official JEE Advanced website
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">2. State-Level Engineering Entrance Exams and Counselling</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          State-level exams are very important for students who want admission in their home state or nearby colleges. They may provide better cost control, local reservation benefits, familiar locations and more practical backup options.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">State</th>
                <th className="px-4 py-3 font-semibold">Exam / Admission Route</th>
                <th className="px-4 py-3 font-semibold">Official Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {stateExams.map(([state, exam, site]) => (
                <tr key={state}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{state}</td>
                  <td className="px-4 py-3 text-slate-600">{exam}</td>
                  <td className="px-4 py-3 text-slate-600">{site}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Some states conduct a dedicated engineering entrance exam, while some use JEE Main scores or centralised counselling. Tamil Nadu Engineering Admissions, for example, is generally a counselling-based admission process rather than a separate entrance exam. Students must read the latest official notification before deciding.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">3. Private University Engineering Entrance Exams</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Private university exams can be useful backup options for students who want more admission choices. However, students should compare total fees, scholarship rules, placement records, branch availability, campus location and refund policies before paying admission fees.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Exam</th>
                <th className="px-4 py-3 font-semibold">University / Institution</th>
                <th className="px-4 py-3 font-semibold">Official Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {universityExams.map(([exam, university, site]) => (
                <tr key={exam}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{exam}</td>
                  <td className="px-4 py-3 text-slate-600">{university}</td>
                  <td className="px-4 py-3 text-slate-600">{site}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">4. Lateral Entry Engineering Exams for Diploma Students</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            Diploma students often follow a different path from Class 12 students. Many states conduct lateral entry exams or counselling for admission directly into the second year of B.Tech or B.E. Examples include AP ECET, TS ECET, JELET in West Bengal and other state-specific lateral entry routes.
          </p>
          <p>
            Diploma students should not blindly follow Class 12 exam advice. They should check whether the exam accepts diploma candidates, what branch mapping is allowed, whether second-year admission is available, and how counselling is conducted.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Best Exam Combination Strategy for Students</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For IIT / NIT target students</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Focus mainly on JEE Main and JEE Advanced. Add one or two backup exams such as BITSAT, state CET, COMEDK, VITEEE or MET depending on budget and location.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For state college target students</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Prioritize your state exam or state counselling route. Also attempt JEE Main if it is accepted in your state or useful for backup colleges.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For private university target students</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Consider BITSAT, VITEEE, SRMJEEE, MET, AEEE, KIITEE and university-specific exams. Compare fee structure and scholarship conditions before final selection.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">For confused students</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Start with JEE Main plus one state exam and one private university exam. This gives a balanced mix of ambition, safety and practical admission options.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">How to Prepare for Engineering Entrance Exams</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
          <p>
            Engineering entrance preparation needs three things: concept clarity, regular problem practice and exam temperament. Students should not only read theory. They must solve questions, review mistakes and improve speed. Physics requires conceptual understanding and numerical practice. Chemistry needs NCERT, reactions, formulas and repeated revision. Mathematics needs daily problem-solving and accuracy control.
          </p>
          <p>
            Start with the syllabus of your main exam. If you are preparing for JEE Main, use JEE Main syllabus and previous year questions as your foundation. If you are preparing for a state CET, check whether state board topics carry more weight. If you are preparing for BITSAT or private university exams, also practice speed-based questions, English, reasoning or aptitude if included.
          </p>
          <p>
            Mock tests are important, but analysis is more important than simply taking many tests. After every test, write down weak chapters, silly mistakes, time-consuming topics and questions you guessed. This habit improves rank faster than random study.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-950">Practice on Nishaglobal Education</h3>
          <p className="mt-2 text-sm leading-7 text-blue-900">
            Nishaglobal Education provides engineering entrance practice support for students who want to improve speed, accuracy and subject confidence before exams.
          </p>
          <Link href="/practice-tests/engineering-entrance" className="mt-3 inline-block font-semibold text-blue-700 hover:underline">
            Open engineering entrance practice tests →
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-amber-950">Important Safety Note for Students</h2>
        <p className="mt-3 text-sm leading-7 text-amber-900 sm:text-base">
          Always use official websites for application forms, admit cards, answer keys, results and counselling. Avoid WhatsApp groups, Telegram paper-leak claims, fake application links and unofficial payment pages. If a website asks for money or personal details, first confirm that it is the official portal of the exam authority or university.
        </p>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900 sm:text-base">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-blue-950">Final Advice</h2>
        <p className="mt-3 text-sm leading-7 text-blue-900 sm:text-base">
          Engineering admission in India is not about one exam only. JEE Main and JEE Advanced are powerful routes, but state exams, private university exams, lateral entry routes and counselling-based admissions also matter. Choose exams based on your goal, location, budget, preparation level and backup plan. A student who prepares smartly and applies carefully has more chances than a student who follows random advice.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/tests/engineering" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
            Take Free Engineering Career Test
          </Link>
          <Link href="/blog" className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center text-sm font-semibold text-blue-700 hover:bg-blue-50">
            Read More Career Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
