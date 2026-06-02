import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Top 10 High Paying Careers in USA 2026 | Nishaglobal Education",
  description:
    "This article has moved to an updated and expanded USA careers guide.",
  robots: "noindex",
};

export default function LegacyTopCareersUSARedirectPage() {
  permanentRedirect("/blog/top-10-highest-paying-careers-in-usa-2026");
}
