import StudyPageTemplate from "@/components/StudyPageTemplate";
import { getCountryGuide } from "@/data/studyAbroad";

const guide = getCountryGuide("usa")!;

export const metadata = {
  title: "Study in USA | Nishaglobal Education",
  description: guide.description,
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-in-usa",
  },
};

export default function StudyInUSAPage() {
  return <StudyPageTemplate guide={guide} />;
}
