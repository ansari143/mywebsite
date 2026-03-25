import StudyPageTemplate from "@/components/StudyPageTemplate";
import { getCountryGuide } from "@/data/studyAbroad";

const guide = getCountryGuide("australia")!;

export const metadata = {
  title: "Study in Australia | Nishaglobal Education",
  description: guide.description,
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-in-australia",
  },
};

export default function StudyInAustraliaPage() {
  return <StudyPageTemplate guide={guide} />;
}
