import TrustComponent from "@/components/TrustComponent";

export const metadata = {
  title: "About Us | Nishaglobal Education",
  description:
    "Learn about Nishaglobal Education, a global career guidance platform helping students with career tests, study abroad planning, educational resources, and future-ready skills.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/about",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Nishaglobal Education",
    url: "https://nishaglobaleducation.com/about",
    description:
      "Nishaglobal Education is an educational guidance platform for students worldwide, offering career tests, global career guidance, study abroad content, resources, and future-ready skills learning.",
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
            Helping students make better academic and career decisions worldwide
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Nishaglobal Education is a student-focused guidance platform designed to make career planning easier,
            clearer, and more practical. We aim to simplify confusing choices by offering accessible career tests,
            educational resources, study abroad content, and future-ready skills guidance in a format students and families can understand.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900">Trusted guidance for students and parents</h2>
          <p className="mt-3 text-slate-600">
            We review content with education specialists, focus on verified sources, and update our guidance regularly so students and families can make confident decisions.
          </p>
          <TrustComponent
            author="Nishaglobal Education editorial team"
            reviewedBy="Education advisors and student support specialists"
            lastUpdated="April 2026"
            disclaimer="Our guidance is educational and practical, but not a substitute for official admissions, visa, or financial advice."
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "What we do",
            desc: "We publish career tests, stream guidance, study abroad pages, educational resources, and skill-based learning content to support planning after school and beyond.",
          },
          {
            title: "Who this is for",
            desc: "Students exploring engineering, medical, government jobs, teaching, aviation, nursing, business, AI, and other future-ready paths, along with parents seeking simple guidance.",
          },
          {
            title: "Our approach",
            desc: "We focus on practical, easy-to-understand information. We aim to guide users responsibly while encouraging them to verify final details from official sources.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">What you can find on this website</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Free career tests and score-based guidance",
            "Global career planning and study abroad content",
            "Country guides for the USA, Canada, UK, Australia, and Europe",
            "Resources covering eligibility, exams, and planning basics",
            "Skill-learning content for AI and future-ready careers",
            "Simple educational guidance designed for students and families",
          ].map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Future-ready skills and global direction</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Today’s students need more than subject knowledge. They also need practical, modern skills that align with changing industries and global opportunities.
          That is why Nishaglobal Education combines traditional career guidance with skill-focused learning in areas such as AI, automation, Python, prompt engineering,
          and digital career growth.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "AI agents, automation, and real-world AI usage",
            "Prompt engineering and practical technical learning",
            "Python and beginner-friendly digital skill pathways",
            "Project-based learning mindset for long-term growth",
            "Awareness of global education and international career opportunities",
            "A clear bridge between career choice and skill building",
          ].map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Important note</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          Nishaglobal Education provides educational and informational guidance. We are not a government body,
          university, college, recruiter, immigration authority, or official counselling agency unless explicitly stated.
          Final decisions related to admissions, fees, visas, scholarships, jobs, licensing, and institutions should always be verified through official sources.
        </p>
      </section>
    </div>
  );
}
