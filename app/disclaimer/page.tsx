export const metadata = {
  title: "Disclaimer | Nishaglobal Education",
  description: "Disclaimer for Nishaglobal Education website.",
};

export default function DisclaimerPage() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Disclaimer
      </h1>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
        <p>
          The quizzes, resources, and skill guides provided on this website are
          intended for general educational and informational purposes only.
          Results from career tests are indicative and should not be considered
          definitive career advice.
        </p>

        <p>
          While we aim to present accurate and helpful information, educational
          policies, course requirements, career opportunities, exam patterns,
          and technology tools may change over time.
        </p>

        <p>
          Users should verify important details from official sources and
          consult parents, teachers, or qualified career counselors before
          making final academic or career decisions.
        </p>

        <p>
          Nishaglobal Education is an independent guidance platform and is not
          affiliated with any government body, examination authority,
          university, or training institute unless explicitly stated.
        </p>
      </div>
    </div>
  );
}