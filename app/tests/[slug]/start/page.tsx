import Link from "next/link";
import { getTestBySlug } from "@/data/tests";
import { notFound } from "next/navigation";


export default async function StartPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const test = getTestBySlug(slug);

  if (!test) return notFound();

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl font-bold">Instructions</h1>
      <p className="mt-2 text-gray-600">{test.title}</p>

      <ul className="mt-5 list-disc pl-5 text-gray-700">
        <li>Total questions: {test.questions.length}</li>
        <li>Choose the best answer (A/B/C/D)</li>
        <li>Answer honestly for best recommendation</li>
        <li>Result will show score + guidance</li>
      </ul>

      <Link
        href={`/tests/${test.slug}/quiz`}
        className="mt-6 inline-block w-full sm:w-auto rounded-xl bg-blue-600 px-5 py-3 text-center text-white hover:bg-blue-700"
      >
        Begin Test
      </Link>
    </div>
  );
}
