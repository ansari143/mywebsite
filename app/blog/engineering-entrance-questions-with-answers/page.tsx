import type { Metadata } from "next";
import SeoBlogArticle from "@/components/SeoBlogArticle";

export const metadata: Metadata = {
  title: "Engineering Entrance Questions with Answers | Nishaglobal Education",
  description:
    "Practice engineering entrance questions with answers and explanations for math, physics, chemistry, and logical reasoning. Build your foundation for JEE Main, JEE Advanced, COMEDK, and state CETs.",
  alternates: {
    canonical: "https://nishaglobaleducation.com/blog/engineering-entrance-questions-with-answers",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

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
      faqs={[
        { question: "Which subjects are most important for engineering entrance exams?", answer: "Mathematics is the most consistently weighted subject across JEE Main, JEE Advanced, COMEDK, WBJEE, and KCET. Physics follows closely. Chemistry tends to be more factual and can be improved faster with focused revision. Starting with math and physics fundamentals gives the strongest overall foundation." },
        { question: "How many hours per day should I practice for JEE Main preparation?", answer: "Quality matters more than hours. 4 to 6 hours of focused daily study with regular breaks is more effective than longer but unfocused sessions. Include at least one subject-specific set per day, an error review session, and one mixed set per week to build exam pattern familiarity." },
        { question: "Is it possible to crack JEE Main in 6 months from scratch?", answer: "Yes, with disciplined preparation, especially if you have strong math basics. Focus on NCERT concepts first, then practice previous-year-style questions, then move to mock tests. Six months is achievable for JEE Main qualifying scores if you start from Class 11 level fundamentals." },
        { question: "What is the difference between JEE Main and JEE Advanced?", answer: "JEE Main is the national qualifying exam for NITs, IIITs, and GFTIs, and also the gateway to sit for JEE Advanced. JEE Advanced is for IIT admissions only and is significantly harder with more complex question formats. You must qualify JEE Main first before attempting JEE Advanced." },
        { question: "Should I attempt all questions in engineering entrance exams?", answer: "Not always. JEE Main has negative marking, so skipping questions you're unsure about is often smarter than guessing. COMEDK and KCET have no negative marking, so attempting all questions makes sense there. Understand the marking scheme of your specific target exam before setting your attempt strategy." },
      ]}
      trustInfo={{
        author: "Nishaglobal Education editorial team",
        reviewedBy: "Engineering entrance preparation specialists",
        lastUpdated: "April 2026",
        disclaimer: "These practice questions are original and for educational self-assessment only. They are not official NTA, COMEDK, WBJEEB, or KEA question papers. Always verify exam patterns from official exam websites.",
      }}
    />
  );
}