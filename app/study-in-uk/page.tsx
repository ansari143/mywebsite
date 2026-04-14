import StudyPageTemplate from "@/components/StudyPageTemplate";
import { getCountryGuide } from "@/data/studyAbroad";

const guide = getCountryGuide("uk")!;

export const metadata = {
  title: "Study in UK | Nishaglobal Education",
  description: guide.description,
  alternates: {
    canonical: "https://nishaglobaleducation.com/study-in-uk",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function StudyInUKPage() {
  return <StudyPageTemplate guide={guide} />;
}
