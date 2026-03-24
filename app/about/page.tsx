export const metadata = {
  title: "About Us | Nishaglobal Education",
  description:
  "Learn about Nishaglobal Education, a career guidance platform helping students after 10th and 12th with stream selection, career tests, resources, and high-demand skills like AI, Python, and future-ready careers.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/about",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nishaglobal Education",
    url: "https://nishaglobaleducation.com/about",
    description:
      "Nishaglobal Education is an educational guidance platform for students after 10th and 12th, offering career tests, stream guidance, resources, and skill-learning content.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
      logo: "https://nishaglobaleducation.com/logo.png",
      email: "nishaglobaleducation@gmail.com",
       sameAs: [
      "https://www.facebook.com/global.nisha",
      "https://instagram.com/nisha.global",
      "https://www.youtube.com/@NishaglobalEducation",
      "https://www.facebook.com/profile.php?id=61588627138300",
      "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
    ],
    },
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            About Nishaglobal Education
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Helping students choose the right direction after 10th and 12th
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Nishaglobal Education is an education and career guidance platform
            created to make stream selection and future planning easier for
            students, parents, and learners. Our goal is to simplify confusing
            choices by offering clear, practical, and beginner-friendly
            guidance.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "What we do",
            desc: "We publish career tests, stream guidance, educational resources, and skill-based learning content to help students understand possible paths after 10th and 12th.",
          },
          {
            title: "Who this is for",
            desc: "Students exploring Engineering, Medical, Government Jobs, Teacher, Aviation, Nursing, BCom, AI and other future-ready paths, along with parents looking for simple guidance.",
          },
          {
            title: "Our approach",
            desc: "We focus on practical, easy-to-understand information. We try to present useful guidance clearly, while encouraging users to verify final details from official sources.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">What you can find on this website</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Free career tests and score-based guidance",
            "Career and stream comparison resources",
            "Information about eligibility, age limits, entrance exams, and fee ranges",
            "Skill-learning content for future-ready careers",
            "Contact and enquiry support for general guidance",
            "Educational articles created for planning and awareness",
          ].map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700"
            >
              {point}
            </div>
          ))}
        </div>
      </section>
<section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
  <h2 className="text-2xl font-bold text-slate-900">
    🚀 Future Skills & AI Learning
  </h2>

  <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
    Along with traditional career guidance, Nishaglobal Education also focuses on
    high-demand and future-ready skills. In today’s fast-changing world, students
    need more than just a degree — they need practical skills that align with modern industries.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    {[
      "AI Agent Development (beginner to advanced level)",
      "Prompt Engineering and real-world AI usage",
      "Python, automation, and technical skills",
      "Step-by-step learning paths for beginners",
      "Project-based learning approach for skill building",
      "Guidance for global career opportunities (USA, Canada, UK)",
    ].map((point) => (
      <div
        key={point}
        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700"
      >
        {point}
      </div>
    ))}
  </div>

  <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
    Our goal is to help students not only choose the right stream after 10th or 12th,
    but also build strong, future-proof careers with the right skills.
  </p>
</section>
      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important note</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Nishaglobal Education provides educational and informational guidance.
          We are not a government body, university, college, airline, hospital,
          recruiter, or official counselling authority unless explicitly stated.
          Final decisions related to admissions, fees, jobs, eligibility,
          scholarships, visas, licensing, or institutions should always be
          verified through official sources.
        </p>
      </section>
    </div>
  );
}
