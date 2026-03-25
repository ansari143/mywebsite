import StudyPageTemplate from "@/components/StudyPageTemplate";
import { getCountryGuide } from "@/data/studyAbroad";

const guide = getCountryGuide("europe")!;

export const metadata = {
  title: "Study in Europe | Nishaglobal Education",
  description: guide.description,
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-in-europe",
  },
};

export default function StudyInEuropePage() {
  return <StudyPageTemplate guide={guide} />;
}
