import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Choose the Right Stream After 10th — with Smart Career Tests
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Engineering, Medical, Government Jobs, Teacher, Aviation, Nursing, BCom and more.
          Take a 50-question test and get score-based guidance + action plan.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/tests"
            className="w-full sm:w-auto rounded-xl bg-blue-600 px-5 py-3 text-center text-white hover:bg-blue-700"
          >
            Start Career Test
          </Link>
          <Link
            href="/tests"
            className="w-full sm:w-auto rounded-xl border px-5 py-3 text-center hover:bg-gray-50"
          >
            Explore Streams
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "1) Choose Test", desc: "Pick your stream test from the hub." },
          { title: "2) Answer 50 Questions", desc: "Simple MCQs, mobile-friendly quiz." },
          { title: "3) Get Guidance", desc: "Score + recommendation + next steps." },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="font-semibold">{x.title}</p>
            <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
