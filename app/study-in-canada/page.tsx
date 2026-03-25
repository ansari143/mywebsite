import StudyPageTemplate from "@/components/StudyPageTemplate";
import { getCountryGuide } from "@/data/studyAbroad";

const guide = getCountryGuide("canada")!;

export const metadata = {
  title: "Study in Canada | Nishaglobal Education",
  description: guide.description,
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-in-canada",
  },
};

export default function StudyInCanadaPage() {
  return <StudyPageTemplate guide={guide} />;
}
