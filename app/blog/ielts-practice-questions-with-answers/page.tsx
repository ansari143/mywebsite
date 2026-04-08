import type { Metadata } from "next";
import SeoBlogArticle from "@/components/SeoBlogArticle";

export const metadata: Metadata = {
  title: "Free IELTS Practice Questions with Answers",
  description:
    "Practice free IELTS questions with answers and explanations. Improve grammar, vocabulary, and reading skills step by step.",
};

export default function IELTSPracticeQuestionsPage() {
  return (
    <SeoBlogArticle
      badge="IELTS practice guide"
      title="Free IELTS Practice Questions with Answers"
      intro="Preparing for IELTS can feel confusing when you do not know where to begin. One of the best ways to improve is to practice short questions regularly, review the correct answers carefully, and understand why each answer is right."
      sections={[
        {
          heading: "Why IELTS practice matters",
          bullets: [
            "It improves grammar and sentence accuracy.",
            "It helps students build reading confidence step by step.",
            "It reduces exam fear with regular practice.",
            "It shows weak areas early so students can improve faster.",
          ],
        },
        {
          heading: "Sample IELTS practice questions",
          qaItems: [
            {
              question: "Choose the correct sentence.",
              options: [
                "A. She go to school every day.",
                "B. She goes to school every day.",
                "C. She going to school every day.",
                "D. She gone to school every day.",
              ],
              answer: "B. She goes to school every day.",
              explanation:
                "With 'she' in the present simple, the verb takes 's', so 'goes' is correct.",
            },
            {
              question: "Choose the word closest in meaning to 'rapid'.",
              options: [
                "A. slow",
                "B. quick",
                "C. weak",
                "D. late",
              ],
              answer: "B. quick",
              explanation: "'Rapid' means fast or quick.",
            },
            {
              question:
                "Read the sentence: 'Many students prefer online learning because it saves travel time.' Why do many students prefer online learning?",
              options: [
                "A. It is cheaper than books.",
                "B. It saves travel time.",
                "C. It has fewer subjects.",
                "D. It removes exams.",
              ],
              answer: "B. It saves travel time.",
              explanation:
                "The sentence directly states the reason: it saves travel time.",
            },
          ],
        },
        {
          heading: "Common IELTS mistakes beginners make",
          bullets: [
            "Using the wrong article such as 'a' instead of 'an'",
            "Choosing the wrong verb form with he, she, or it",
            "Misreading short passages and missing direct clues",
            "Checking answers without reading the explanation",
          ],
        },
      ]}
      ctaTitle="Take the next step"
      ctaText="After reading sample questions, move into the full IELTS practice area to improve grammar, reading, and vocabulary with instant scoring."
      ctaPrimaryHref="/practice-tests/ielts"
      ctaPrimaryLabel="Practice Full IELTS Sets"
      ctaSecondaryHref="/study-abroad"
      ctaSecondaryLabel="Explore Study Abroad"
    />
  );
}