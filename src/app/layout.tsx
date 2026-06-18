import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";

export const metadata: Metadata = {
  title: {
    default: "HDZ Revamped | Premium Painting & Drywall San Diego",
    template: "%s | HDZ Revamped",
  },
  description:
    "San Diego's trusted experts in premium painting, drywall & home renovation. Licensed contractor — CA #1146147. Free quotes — Call (760) 580-9790.",
  keywords: [
    "painting contractor san diego",
    "drywall repair san diego",
    "interior painting san diego county",
    "exterior painting san diego",
    "drywall installation san diego",
    "kitchen remodeling san diego",
    "HDZ Revamped",
    "licensed painter san diego",
  ],
  authors: [{ name: "HDZ Revamped" }],
  creator: "HDZ Revamped",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hdzrevamped.com",
    siteName: "HDZ Revamped",
    title: "HDZ Revamped | Professional Painting & Drywall San Diego",
    description:
      "Licensed painting & drywall contractor serving San Diego County. Interior/exterior painting, drywall installation & repair. Free quotes!",
  },
  twitter: {
    card: "summary_large_image",
    title: "HDZ Revamped | Professional Painting & Drywall San Diego",
    description:
      "Licensed painting & drywall contractor serving San Diego County. Free quotes — Call (760) 580-9790.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#081A37" },
  ],
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HDZ Revamped",
  description:
    "Professional painting and drywall contractor serving San Diego County. Interior/exterior painting, drywall installation and repair.",
  telephone: "+17605809790",
  email: "hdzrevamped@gmail.com",
  url: "https://hdzrevamped.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "San Diego County, California",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Contractor License",
    name: "California Contractor License #1146147",
  },
  sameAs: ["https://www.instagram.com/hdzrevamped"],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-18:00",
  serviceType: [
    "Interior Painting",
    "Exterior Painting",
    "Drywall Installation",
    "Drywall Repair",
    "Kitchen Remodeling",
    "Concrete Work",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* Scroll progress indicator — 2px gold bar at top */}
        <div className="scroll-progress-bar" aria-hidden="true" />
        {/* Global IntersectionObserver + progress bar wiring */}
        <GlobalEffects />
        {/* Skip to content — visible on focus for keyboard/AT users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
