import type { Metadata } from "next";
import SeoBlogArticle from "@/components/SeoBlogArticle";

export const metadata: Metadata = {
  title: "IELTS Grammar Practice for Beginners",
  description:
    "IELTS grammar practice for beginners with answers and explanations. Improve sentence accuracy, articles, tenses, and prepositions.",
};

export default function IELTSGrammarPracticePage() {
  return (
    <SeoBlogArticle
      badge="Beginner IELTS grammar"
      title="IELTS Grammar Practice for Beginners"
      intro="Grammar is one of the most important foundations for IELTS success. Even when vocabulary is good, weak grammar can reduce accuracy and confidence."
      sections={[
        {
          heading: "Grammar topics beginners should master first",
          bullets: [
            "Present simple and past simple tense",
            "Articles: a, an, the",
            "Common prepositions such as in, on, at, and for",
            "Subject-verb agreement",
            "Comparatives such as better, faster, and more useful",
          ],
        },
        {
          heading: "Beginner grammar practice questions",
          qaItems: [
            {
              question: "Choose the correct article: 'He bought ___ umbrella.'",
              options: ["A. a", "B. an", "C. the", "D. no article"],
              answer: "B. an",
              explanation:
                "'Umbrella' begins with a vowel sound, so 'an' is correct.",
            },
            {
              question: "Choose the correct preposition: 'She is interested ___ science.'",
              options: ["A. on", "B. at", "C. in", "D. to"],
              answer: "C. in",
              explanation:
                "The standard phrase is 'interested in'.",
            },
            {
              question: "Which sentence is correct?",
              options: [
                "A. The information are useful.",
                "B. The information is useful.",
                "C. Informations is useful.",
                "D. The informations are useful.",
              ],
              answer: "B. The information is useful.",
              explanation:
                "'Information' is an uncountable noun, so it takes 'is'.",
            },
          ],
        },
        {
          heading: "Why grammar practice improves IELTS performance",
          paragraphs: [
            "Grammar affects writing, reading understanding, and speaking clarity. When students feel comfortable with sentence patterns, they answer faster and make fewer mistakes.",
            "The goal is not to memorize every rule at once. The goal is to build confidence with common patterns that appear again and again.",
          ],
        },
      ]}
      ctaTitle="Keep building your IELTS basics"
      ctaText="After grammar practice, continue with full IELTS question sets and improve your weak areas with explanation-based learning."
      ctaPrimaryHref="/practice-tests/ielts"
      ctaPrimaryLabel="Open IELTS Practice Tests"
      ctaSecondaryHref="/blog/ielts-practice-questions-with-answers"
      ctaSecondaryLabel="Read More IELTS Questions"
    />
  );
}