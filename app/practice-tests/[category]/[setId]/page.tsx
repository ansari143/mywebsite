import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PracticeTestClient from "@/components/PracticeTestClient";
import { getPracticeSet } from "@/data/practiceTests";

type Props = {
  params: Promise<{ category: string; setId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, setId } = await params;
  const set = getPracticeSet(category, setId);

  if (!set) {
    return {
      title: "Practice Test",
    };
  }

  return {
    title: set.seoTitle,
    description: set.seoDescription,
    keywords: set.keywords,
  };
}

export default async function PracticeSetPage({ params }: Props) {
  const { category, setId } = await params;
  const set = getPracticeSet(category, setId);

  if (!set) return notFound();

  return <PracticeTestClient set={set} />;
}