import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Jobs That Will Stay Strong Even in the AI Era | Nishaglobal Education",
  description:
    "This article has moved to an updated and expanded AI-resilient careers guide.",
  robots: "noindex",
};

export default function LegacyFutureProofJobsRedirectPage() {
  permanentRedirect("/blog/best-careers-that-will-survive-ai");
}
