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
      <section className="page-hero">
        <div className="container">
          <span
            className="section-label"
            style={{
              color: "var(--blue)",
              background: "rgba(43,93,232,0.2)",
              border: "1px solid rgba(43,93,232,0.4)",
            }}
          >
            Services
          </span>
          <h1 style={{ color: "#fff", marginTop: "0.75rem", marginBottom: "1rem" }}>
            Our Painting &amp; Drywall Services
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
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
                  className="card"
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  }}
                >
                  {/* Icon / Color Panel */}
                  <div
                    style={{
                      background: isEven
                        ? "linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)"
                        : "linear-gradient(135deg, var(--navy) 0%, #16213e 100%)",
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
                        background: "rgba(255,255,255,0.15)",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <Icon size={30} color="#fff" />
                    </div>
                    <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Content Panel */}
                  <div style={{ padding: "2.5rem", order: isEven ? 1 : 0 }}>
                    <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>
                        What&apos;s Included
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {service.benefits.map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--navy)" }}>
                            <CheckCircle2 size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: "0.9rem" }} id={`service-quote-${service.id}`}>
                      Request a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Simple Process</h2>
            <div className="divider" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From first contact to final walkthrough — here&apos;s what to expect when you work with HDZ Revamped.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { step: "01", title: "Contact Us", desc: "Call, email, or fill out our quote form. Tell us about your project." },
              { step: "02", title: "Free Estimate", desc: "We visit your property, assess the scope, and provide a detailed written quote." },
              { step: "03", title: "Schedule", desc: "Once approved, we schedule your project at a time that works for you." },
              { step: "04", title: "We Do the Work", desc: "Our team arrives on time, protects your property, and delivers quality results." },
              { step: "05", title: "Final Walkthrough", desc: "We walk through the completed work with you to ensure you're 100% satisfied." },
            ].map((step) => (
              <div
                key={step.step}
                style={{
                  textAlign: "center",
                  padding: "2rem 1.25rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    color: "#fff",
                    fontWeight: 800,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1rem",
                    boxShadow: "0 4px 14px rgba(43,93,232,0.35)",
                  }}
                >
                  {step.step}
                </div>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.6rem" }}>{step.title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="card"
                style={{ padding: "0", overflow: "hidden" }}
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
                  }}
                >
                  {faq.q}
                  <ChevronDown size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                </summary>
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                    color: "var(--gray-text)",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
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
          background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Ready to Get Started?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Call us today or fill out our quote form — we&apos;ll respond within 24 hours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-white" id="services-cta-quote-btn" style={{ fontSize: "1.05rem" }}>
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a href={`tel:${CONTACT.phone}`} className="btn btn-outline-white" id="services-cta-call-btn" style={{ fontSize: "1.05rem" }}>
              <Phone size={18} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
