import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HDZ Revamped",
  description: "Privacy policy for HDZ Revamped painting and drywall services.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const updated = "June 18, 2026";
  return (
    <div style={{ paddingTop: "72px" }}>
      <div
        className="container"
        style={{ maxWidth: "780px", padding: "4rem 1.25rem" }}
      >
        <h1 style={{ marginBottom: "0.5rem" }}>Privacy Policy</h1>
        <p style={{ color: "var(--gray-text)", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
          Last Updated: {updated}
        </p>

        {[
          {
            title: "1. Information We Collect",
            content:
              "We collect information you provide directly to us, such as when you fill out our contact or quote request form. This includes your name, phone number, email address, and project details. We do not collect payment information through this website.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "We use the information we collect to: respond to your quote requests and inquiries, provide painting and drywall services, send you updates about your project, and improve our services.",
          },
          {
            title: "3. Information Sharing",
            content:
              "We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our business, subject to confidentiality agreements.",
          },
          {
            title: "4. Data Retention",
            content:
              "We retain your personal information for as long as necessary to provide services and comply with legal obligations. Contact information from quote requests is retained for 2 years.",
          },
          {
            title: "5. Cookies",
            content:
              "Our website may use cookies to enhance your browsing experience. You can set your browser to refuse cookies, though some features may not function properly.",
          },
          {
            title: "6. Google Analytics",
            content:
              "We use Google Analytics to understand how visitors use our website. This collects anonymous usage data. You can opt out using Google's browser add-on.",
          },
          {
            title: "7. California Privacy Rights (CCPA)",
            content:
              "California residents have the right to know what personal information we collect, request deletion of personal information, and opt out of any sale of personal information. To exercise these rights, contact us at hdzrevamped@gmail.com.",
          },
          {
            title: "8. Security",
            content:
              "We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.",
          },
          {
            title: "9. Contact Us",
            content:
              "If you have questions about this Privacy Policy, contact us at: hdzrevamped@gmail.com or call (760) 580-9790.",
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
              {section.title}
            </h2>
            <p style={{ color: "var(--gray-text)", lineHeight: 1.8 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
