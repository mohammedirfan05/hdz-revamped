import type { Metadata } from "next";
import Link from "next/link";
import {
  PaintBucket,
  Home,
  LayoutGrid,
  Wrench,
  UtensilsCrossed,
  Building2,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
} from "lucide-react";
import { SERVICES, CONTACT } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Painting & Drywall Services San Diego County | HDZ Revamped",
  description:
    "Professional interior/exterior painting & drywall services in San Diego County. Licensed contractor #1146147. Free quotes — Call (760) 580-9790.",
};

const iconMap: Record<string, React.ElementType> = {
  PaintBucket,
  Home,
  LayoutGrid,
  Wrench,
  UtensilsCrossed,
  Building2,
};

const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes! We provide free, no-obligation estimates for all projects. Call us or fill out our quote form and we'll get back to you within 24 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. HDZ Revamped holds California Contractor License #1146147. We carry proper insurance for all projects.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of San Diego County — including San Diego, Escondido, Oceanside, Carlsbad, Vista, San Marcos, Encinitas, Poway, El Cajon, La Mesa, Chula Vista, and more.",
  },
  {
    q: "How long does a typical paint job take?",
    a: "Timeline varies by project size. A standard interior room typically takes 1–2 days. Full exteriors or larger projects may take 3–7 days. We'll give you a specific timeline with your quote.",
  },
  {
    q: "Do I need to move my furniture?",
    a: "For interior projects, we ask that you clear breakables and small items. We'll handle moving larger furniture and will protect everything with drop cloths.",
  },
  {
    q: "What paint brands do you use?",
    a: "We use premium paints from trusted brands including Sherwin-Williams, Benjamin Moore, and Behr. We can match any color or work with paint you've already purchased.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--royal-light)",
              border: "1px solid rgba(41,93,255,0.22)",
              borderRadius: "var(--radius-full)",
              padding: "0.35rem 1rem",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--royal)",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Services
            </span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "1rem" }}>
            Our Painting &amp; Drywall Services
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Interior &amp; exterior painting, drywall installation &amp; repair, kitchen remodeling,
            and concrete work — all by a licensed San Diego County contractor.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon] || PaintBucket;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`card reveal-up stagger-${Math.min(idx + 1, 5)}`}
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    border: "1px solid var(--gray-border)",
                  }}
                >
                  {/* Icon / Color Panel — corrected: var(--royal) not var(--blue) */}
                  <div
                    style={{
                      background: isEven
                        ? "var(--gradient-royal)"
                        : "var(--gradient-hero)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      padding: "2.5rem",
                      minHeight: "240px",
                      order: isEven ? 0 : 1,
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "rgba(255,255,255,0.14)",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Icon size={28} color="#fff" aria-hidden="true" />
                    </div>
                    <h3 style={{ color: "#fff", fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Content Panel */}
                  <div style={{ padding: "2.5rem", order: isEven ? 1 : 0, background: "#ffffff" }}>
                    <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "1.5rem" }}>
                      {service.description}
                    </p>

                    {/* Benefits — corrected: var(--royal) not var(--blue) */}
                    <div style={{ marginBottom: "1.75rem" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--royal)",
                          marginBottom: "0.875rem",
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        What&apos;s Included
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.6rem",
                              fontSize: "0.9rem",
                              color: "var(--navy)",
                            }}
                          >
                            {/* Corrected: var(--royal) not var(--blue) */}
                            <CheckCircle2
                              size={15}
                              color="var(--royal)"
                              style={{ flexShrink: 0, marginTop: "3px" }}
                              aria-hidden="true"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      style={{ fontSize: "0.9rem" }}
                      id={`service-quote-${service.id}`}
                    >
                      Request a Quote <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          {/* Left-aligned header */}
          <div
            className="reveal-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
              marginBottom: "4rem",
            }}
          >
            <div>
              <div className="eyebrow">How We Work</div>
              <h2 style={{ color: "var(--navy)", marginBottom: 0 }}>
                Our Simple{" "}
                <span style={{ color: "var(--royal)" }}>Process</span>
              </h2>
            </div>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.78 }}>
              From first contact to final walkthrough — here&apos;s what to expect
              when you work with HDZ Revamped.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { step: "01", title: "Contact Us", desc: "Call, email, or fill out our quote form. Tell us about your project." },
              { step: "02", title: "Free Estimate", desc: "We visit your property, assess the scope, and provide a detailed written quote." },
              { step: "03", title: "Schedule", desc: "Once approved, we schedule your project at a time that works for you." },
              { step: "04", title: "We Do the Work", desc: "Our team arrives on time, protects your property, and delivers quality results." },
              { step: "05", title: "Final Walkthrough", desc: "We walk through the completed work with you to ensure you're 100% satisfied." },
            ].map((step, i) => (
              <div
                key={step.step}
                className={`reveal-up stagger-${Math.min(i + 1, 5)}`}
                style={{ textAlign: "center", padding: "1.5rem 1rem" }}
              >
                <div
                  className="process-number"
                  style={{ margin: "0 auto 1.25rem" }}
                  aria-label={`Step ${step.step}`}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.6rem", color: "var(--navy)" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--gray-text)", fontSize: "0.875rem", lineHeight: 1.72 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "3rem" }} className="reveal-up">
            <div className="eyebrow">FAQ</div>
            <h2 style={{ color: "var(--navy)", marginBottom: 0 }}>
              Frequently Asked{" "}
              <span style={{ color: "var(--royal)" }}>Questions</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className={`card reveal-up stagger-${Math.min(i + 1, 5)}`}
                style={{ padding: "0", overflow: "hidden", border: "1px solid var(--gray-border)" }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--navy)",
                    listStyle: "none",
                    userSelect: "none",
                    gap: "1rem",
                  }}
                >
                  {faq.q}
                  {/* Corrected: var(--royal) not var(--blue) */}
                  <ChevronDown size={17} color="var(--royal)" style={{ flexShrink: 0 }} aria-hidden="true" />
                </summary>
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "var(--gray-text)",
                    fontSize: "0.95rem",
                    lineHeight: 1.78,
                    borderTop: "1px solid var(--gray-border)",
                    paddingTop: "1rem",
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        style={{
          /* Corrected: var(--gradient-royal) not var(--blue) */
          background: "var(--gradient-cta)",
          padding: "6rem 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow eyebrow-light" style={{ justifyContent: "center" }}>
            Get Started Today
          </div>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2.75rem", maxWidth: "480px", margin: "0 auto 2.75rem", lineHeight: 1.78 }}>
            Call us today or fill out our quote form — we&apos;ll respond within 24 hours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-gold" id="services-cta-quote-btn" style={{ fontSize: "1.05rem" }}>
              Get Free Quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href={`tel:${CONTACT.phone}`} className="btn btn-ghost-white" id="services-cta-call-btn" style={{ fontSize: "1.05rem" }}>
              <Phone size={17} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
