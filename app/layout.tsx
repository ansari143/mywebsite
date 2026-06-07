import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://www.nishaglobaleducation.com"),
  title: {
    default: "Nishaglobal Education",
    template: "%s",
  },
  description:
    "Learn AI skills for every career role with career guidance for students worldwide, including free career tests, study abroad guides, educational resources, and future-ready skills learning.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Nishaglobal Education",
    description:
      "Learn AI skills for every career role with career guidance for students worldwide through free career tests, global education guides, resources, and future-ready skills.",
    url: "https://www.nishaglobaleducation.com",
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
      "Learn AI skills for every career role with career guidance for students worldwide, including free career tests, study abroad guides, educational resources, and future-ready skills learning.",
    images: ["/logo.png"],
  },
  verification: {
    google: "ca-pub-8565540588287869",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nishaglobal Education",
  url: "https://www.nishaglobaleducation.com",
  logo: "https://www.nishaglobaleducation.com/logo.png",
  image: "https://www.nishaglobaleducation.com/logo.png",
  email: "nishaglobaleducation@gmail.com",
  description:
    "Nishaglobal Education helps learners build AI skills for every career role with career guidance for students worldwide, educational resources, study abroad guidance, free career tests, and future-ready skills learning.",
  areaServed: "Worldwide",
  availableLanguage: ["English", "Hindi"],
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
  url: "https://www.nishaglobaleducation.com",
  description:
    "Learn AI skills for every career role with career guidance for students worldwide, including study abroad guides, free career tests, educational resources, and future-ready skills.",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Nishaglobal Education",
    url: "https://www.nishaglobaleducation.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.nishaglobaleducation.com/logo.png",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.nishaglobaleducation.com/resources?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8565540588287869"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="site-shell min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Navbar />

        <main className="site-container py-6">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
