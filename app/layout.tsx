import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nishaglobal Education",
  description:
    "Career guidance, educational resources, career tests, and high-demand skills learning for students after 10th and 12th.",
  alternates: {
    canonical: "https://nishaglobaleducation.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    logo: "https://nishaglobaleducation.com/logo.png",
    description:
      "Nishaglobal Education provides career guidance, educational resources, career tests, and high-demand skills learning for students after 10th and 12th.",
    sameAs: [
      // Add official social profile links here later if available
       "https://www.facebook.com/global.nisha",
      "https://instagram.com/nisha.global",
       "https://www.youtube.com/@NishaglobalEducation",
       "https://www.facebook.com/profile.php?id=61588627138300",
       "https://www.linkedin.com/in/nishaglobal-education-9818713b7/"
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    description:
      "Career guidance, educational resources, career tests, and high-demand skills learning for students after 10th and 12th.",
    publisher: {
      "@type": "EducationalOrganization",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nishaglobaleducation.com/logo.png",
      },
    },
  };

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Navbar />

        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}