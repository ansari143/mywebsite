import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nishaglobaleducation.com"),
  title: {
    default: "Nishaglobal Education",
    template: "%s | Nishaglobal Education",
  },
  description:
    "Career guidance for students worldwide, including free career tests, study abroad guides, educational resources, and future-ready skills learning.",
  alternates: {
    canonical: "https://nishaglobaleducation.com",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Nishaglobal Education",
    description:
      "Helping students choose careers in India and abroad through free career tests, global education guides, resources, and future-ready skills.",
    url: "https://nishaglobaleducation.com",
    siteName: "Nishaglobal Education",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nishaglobal Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishaglobal Education",
    description:
      "Career guidance for students worldwide, including free career tests, study abroad guides, educational resources, and future-ready skills learning.",
    images: ["/logo.png"],
  },
  verification: {
    google: "ca-pub-8565540588287869",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    logo: "https://nishaglobaleducation.com/logo.png",
    image: "https://nishaglobaleducation.com/logo.png",
    email: "nishaglobaleducation@gmail.com",
    description:
      "Nishaglobal Education provides career guidance, educational resources, study abroad guidance, free career tests, and future-ready skills learning for students worldwide.",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Hindi"],
    sameAs: [
      "https://www.facebook.com/global.nisha",
      "https://instagram.com/nisha.global",
      "https://www.youtube.com/@NishaglobalEducation",
      "https://www.facebook.com/profile.php?id=61588627138300",
      "https://www.linkedin.com/in/nishaglobal-education-9818713b7/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "nishaglobaleducation@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nishaglobal Education",
    url: "https://nishaglobaleducation.com",
    description:
      "Career guidance for students worldwide, including study abroad guides, free career tests, educational resources, and future-ready skills.",
    publisher: {
      "@type": "EducationalOrganization",
      name: "Nishaglobal Education",
      url: "https://nishaglobaleducation.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nishaglobaleducation.com/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://nishaglobaleducation.com/resources?query={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8565540588287869"
          crossOrigin="anonymous"
        ></script>
      </head>
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
