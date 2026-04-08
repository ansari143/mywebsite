import type { Metadata } from "next";
import SeoBlogArticle from "@/components/SeoBlogArticle";

export const metadata: Metadata = {
  title: "Beginner Math Physics Chemistry Practice for Engineering",
  description:
    "Beginner engineering practice for math, physics, and chemistry with answers and explanations.",
};

export default function BeginnerEngineeringPracticePage() {
  return (
    <SeoBlogArticle
      badge="Engineering foundation practice"
      title="Beginner Math Physics Chemistry Practice for Engineering"
      intro="Students preparing for engineering often ask where they should begin. The best answer is simple: start with math, physics, and chemistry basics, solve short questions, and review every explanation carefully."
      sections={[
        {
          heading: "Math basics students should know",
          bullets: [
            "Simple equations",
            "Percentages",
            "Geometry basics",
            "Patterns and number logic",
          ],
        },
        {
          heading: "Physics and chemistry basics students should know",
          bullets: [
            "Units such as force, power, and energy",
            "Motion basics such as speed and time",
            "Common chemical symbols",
            "Acids, metals, and states of matter",
          ],
        },
        {
          heading: "Mixed beginner practice questions",
          qaItems: [
            {
              question: "If x + 5 = 12, what is x?",
              options: ["A. 5", "B. 6", "C. 7", "D. 8"],
              answer: "C. 7",
              explanation: "Subtract 5 from both sides to get x = 7.",
            },
            {
              question: "What is the SI unit of power?",
              options: ["A. Joule", "B. Watt", "C. Newton", "D. Ampere"],
              answer: "B. Watt",
              explanation: "Power is measured in watts.",
            },
            {
              question: "Which of the following is a metal?",
              options: ["A. oxygen", "B. sulfur", "C. copper", "D. nitrogen"],
              answer: "C. copper",
              explanation: "Copper is a metal.",
            },
          ],
        },
        {
          heading: "A better way to prepare",
          paragraphs: [
            "The smartest preparation style is not random memorization. It is solving small sets, checking mistakes, and repeating weak areas until confidence improves.",
            "This approach is especially useful for students who are still deciding whether engineering is the right fit for them.",
          ],
        },
      ]}
      ctaTitle="Build confidence with full practice"
      ctaText="Continue with full engineering entrance practice sets and then compare your performance with your broader career direction."
      ctaPrimaryHref="/practice-tests/engineering-entrance"
      ctaPrimaryLabel="Open Engineering Practice"
      ctaSecondaryHref="/tests/engineering"
      ctaSecondaryLabel="Take Career Test"
    />
  );
}