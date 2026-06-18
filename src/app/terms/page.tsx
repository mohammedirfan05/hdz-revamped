import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | HDZ Revamped",
  description: "Terms of service for HDZ Revamped painting and drywall services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  const updated = "June 18, 2026";
  return (
    <div style={{ paddingTop: "72px" }}>
      <div
        className="container"
        style={{ maxWidth: "780px", padding: "4rem 1.25rem" }}
      >
        <h1 style={{ marginBottom: "0.5rem" }}>Terms of Service</h1>
        <p style={{ color: "var(--gray-text)", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
          Last Updated: {updated}
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using the HDZ Revamped website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
          },
          {
            title: "2. Services",
            content:
              "HDZ Revamped provides professional painting and drywall services in San Diego County, California. Service availability is subject to scheduling and geographic limitations. All services are subject to a separate service agreement.",
          },
          {
            title: "3. Quote Requests",
            content:
              "Submitting a quote request through our website does not constitute a binding contract. Quotes provided after site assessment are valid for 30 days unless otherwise specified.",
          },
          {
            title: "4. Licensing",
            content:
              "HDZ Revamped holds California Contractor License #1146147. All work is performed in compliance with applicable California building codes and regulations.",
          },
          {
            title: "5. Intellectual Property",
            content:
              "All content on this website, including text, images, and graphics, is the property of HDZ Revamped and may not be reproduced without written permission.",
          },
          {
            title: "6. Limitation of Liability",
            content:
              "HDZ Revamped's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from use of this website.",
          },
          {
            title: "7. Privacy",
            content:
              "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms of Service.",
          },
          {
            title: "8. Changes to Terms",
            content:
              "We reserve the right to modify these terms at any time. Changes are effective upon posting to the website. Continued use of the website constitutes acceptance of modified terms.",
          },
          {
            title: "9. Governing Law",
            content:
              "These terms are governed by the laws of the State of California. Any disputes shall be resolved in San Diego County, California.",
          },
          {
            title: "10. Contact",
            content:
              "For questions about these Terms, contact us at hdzrevamped@gmail.com or call (760) 580-9790.",
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{section.title}</h2>
            <p style={{ color: "var(--gray-text)", lineHeight: 1.8 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
