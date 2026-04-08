import type { Metadata } from "next";
import SeoBlogArticle from "@/components/SeoBlogArticle";

export const metadata: Metadata = {
  title: "Engineering Entrance Questions with Answers",
  description:
    "Practice engineering entrance questions with answers and explanations for math, physics, chemistry, and logic.",
};

export default function EngineeringQuestionsPage() {
  return (
    <SeoBlogArticle
      badge="Engineering entrance prep"
      title="Engineering Entrance Questions with Answers"
      intro="Engineering entrance preparation becomes easier when students start with simple, explanation-based practice. A strong foundation in math, physics, chemistry, and logic makes harder preparation much easier later."
      sections={[
        {
          heading: "What students should practice first",
          bullets: [
            "Basic algebra and arithmetic",
            "Units and formulas in physics",
            "Chemical symbols and simple concepts in chemistry",
            "Pattern recognition and logical reasoning",
          ],
        },
        {
          heading: "Sample engineering entrance questions",
          qaItems: [
            {
              question: "What is the value of 12 × 8?",
              options: ["A. 84", "B. 92", "C. 96", "D. 108"],
              answer: "C. 96",
              explanation: "12 multiplied by 8 equals 96.",
            },
            {
              question: "Which unit is used to measure force?",
              options: ["A. Joule", "B. Newton", "C. Watt", "D. Volt"],
              answer: "B. Newton",
              explanation: "Force is measured in Newtons.",
            },
            {
              question: "What is the chemical symbol of sodium?",
              options: ["A. So", "B. Sd", "C. Na", "D. S"],
              answer: "C. Na",
              explanation: "The chemical symbol for sodium is Na.",
            },
          ],
        },
        {
          heading: "How beginners should improve faster",
          paragraphs: [
            "Start by solving basic questions accurately before trying speed-based practice. Accuracy builds the right foundation.",
            "After solving a set, review the explanations and notice which subject feels weakest. That is where most improvement usually happens.",
          ],
        },
      ]}
      ctaTitle="Practice full engineering sets"
      ctaText="Once you are comfortable with sample questions, move into the full engineering entrance practice area and then compare your performance with your broader career direction."
      ctaPrimaryHref="/practice-tests/engineering-entrance"
      ctaPrimaryLabel="Practice Engineering Sets"
      ctaSecondaryHref="/tests/engineering"
      ctaSecondaryLabel="Take Engineering Career Test"
    />
  );
}