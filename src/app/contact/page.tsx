import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { CONTACT, SERVICE_AREAS } from "@/data/siteData";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact HDZ Revamped | Painting & Drywall Quotes San Diego County",
  description:
    "Get a free quote for painting & drywall services in San Diego County. Call (760) 580-9790 or fill out our form. Licensed contractor #1146147.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    action: "Click to Call",
    id: "contact-call-btn",
    desc: "Available Mon–Sat, 7AM–6PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    action: "Send Email",
    id: "contact-email-btn",
    desc: "We respond within 24 hours",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    action: "View Our Work",
    id: "contact-instagram-btn",
    desc: "See our latest projects",
    external: true,
  },
];

export default function ContactPage() {
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
              Contact
            </span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "1rem" }}>
            Contact HDZ Revamped
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Get your free quote today. Call us, send an email, or fill out the form below — we&apos;ll
            respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ─────────────────────────────────────── */}
      <section style={{ background: "var(--gray-bg)", padding: "3rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  id={card.id}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="card"
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "var(--royal-light)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={24} color="var(--royal)" aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--gray-text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                      {card.label}
                    </div>
                    <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.05rem", marginBottom: "0.25rem", wordBreak: "break-all" }}>
                      {card.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--gray-text)" }}>{card.desc}</div>
                  </div>
                  <span style={{ color: "var(--royal)", fontSize: "0.875rem", fontWeight: 600, marginTop: "auto", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    {card.action} <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </a>
              );
            })}

            {/* Hours Card */}
            <div className="card" style={{ padding: "1.75rem", border: "1px solid var(--gray-border)" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "var(--royal-light)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Clock size={24} color="var(--royal)" aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--gray-text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                  Business Hours
                </div>
                <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                  Mon–Sat: 7:00 AM – 6:00 PM
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--gray-text)" }}>
                  Closed Sundays
                </div>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "var(--royal-light)",
                  borderRadius: "8px",
                  padding: "0.5rem 0.75rem",
                }}
              >
                <Shield size={14} color="var(--royal)" aria-hidden="true" />
                <span style={{ fontSize: "0.8rem", color: "var(--royal)", fontWeight: 600 }}>
                  License {CONTACT.license}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM + INFO ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div style={{ gridColumn: "span 2" }} className="form-col">
              <span className="section-label">Free Quote</span>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
                Request a Free Quote
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-text)", marginBottom: "2rem" }}>
                Fill out the form below and we&apos;ll get back to you within 24 hours with a
                detailed quote for your project.
              </p>

              <div
                style={{
                  background: "var(--gray-bg)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  border: "1px solid var(--gray-border)",
                }}
              >
                <QuoteForm />
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 700px) {
              .form-col { grid-column: span 1 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── SERVICE AREA MAP ──────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Service Area</span>
            <h2 className="section-title">We Serve All of San Diego County</h2>
            <div className="divider" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From coastal cities to inland communities, we come to you.
            </p>
          </div>

          {/* Google Maps Embed */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
              marginBottom: "2rem",
              height: "400px",
              background: "var(--navy)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2752543461!2d-117.64936!3d32.99505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1718000000000"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HDZ Revamped service area - San Diego County, California"
            />
          </div>

          {/* City Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {SERVICE_AREAS.map((city) => (
              <span
                key={city}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  background: "var(--white)",
                  border: "1px solid var(--gray-border)",
                  borderRadius: "100px",
                  padding: "0.35rem 0.875rem",
                  fontSize: "0.8rem",
                  color: "var(--navy)",
                  fontWeight: 500,
                }}
              >
                <MapPin size={12} color="var(--royal)" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Quick Answers</span>
            <h2 className="section-title">Common Questions</h2>
            <div className="divider" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--gray-border)", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--gray-border)" }}>
            {[
              { q: "How soon can you start?", a: "We typically schedule within 1–2 weeks of quote approval, depending on project size and current workload. Emergency repairs may be available sooner — just call us." },
              { q: "Do you provide a written quote?", a: "Yes — all our quotes are provided in writing so you know exactly what's included. No surprise costs." },
              { q: "What payment methods do you accept?", a: "We accept cash, check, and electronic payment. Discuss payment schedule at time of quote." },
              { q: "Do you offer a warranty on your work?", a: "We stand behind our work. Contact us if you have any concerns after project completion and we'll make it right." },
            ].map((faq, i) => (
              <details
                key={i}
                style={{ background: "var(--white)" }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.975rem",
                    color: "var(--navy)",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    userSelect: "none",
                    borderBottom: "1px solid var(--gray-border)",
                  }}
                >
                  {faq.q}
                  <span style={{ color: "var(--royal)", fontSize: "1.25rem", fontWeight: 300, flexShrink: 0, marginLeft: "1rem" }}>+</span>
                </summary>
                <div style={{ padding: "1.25rem 1.5rem", color: "var(--gray-text)", fontSize: "0.925rem", lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--gradient-cta)",
          padding: "5rem 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow eyebrow-light" style={{ justifyContent: "center" }}>Prefer to Call?</div>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Speak with Us Directly</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: 1.75 }}>
            We&apos;re available Mon–Sat, 7AM–6PM. No wait times, no call centers.
          </p>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn btn-gold"
            id="contact-page-final-call-btn"
            style={{ fontSize: "1.15rem", padding: "1rem 2.5rem" }}
          >
            <Phone size={19} aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
