import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Star,
  Users,
  Briefcase,
  Heart,
} from "lucide-react";
import { CONTACT, SERVICE_AREAS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About HDZ Revamped | Licensed Painting & Drywall San Diego County",
  description:
    "Learn about HDZ Revamped — licensed painting & drywall contractor #1146147 serving San Diego County. Professional, reliable, quality workmanship.",
};

const values = [
  {
    icon: Star,
    title: "Quality Workmanship",
    desc: "Every project is completed to the highest standard, from careful surface prep to the final coat of paint.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "CA Contractor License #1146147. You can trust that our work meets all California standards and regulations.",
  },
  {
    icon: Heart,
    title: "Local Community",
    desc: "We're proud San Diego County locals. Supporting our neighbors with reliable, honest service is at our core.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "We listen to your needs, communicate clearly, and don't rest until you're fully satisfied with the results.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    desc: "We show up on time, keep your home clean and protected, and treat your property with respect.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    desc: "Free quotes with no hidden fees. You always know exactly what you're paying for before we begin.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="container">
          {/* Corrected: using var(--royal) and var(--royal-light), not var(--blue) */}
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
              About Us
            </span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "1rem" }}>About HDZ Revamped</h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Licensed &amp; trusted painting and drywall professionals serving San Diego County
            with quality craftsmanship and honest service.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }} className="reveal-left">
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  background: "var(--gray-bg)",
                  boxShadow: "var(--shadow-xl)",
                }}
              >
                <Image
                  src="/images/portfolio/exterior-painting.jpg"
                  alt="HDZ Revamped team working on a painting project in San Diego"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Credential card — using var(--royal), not var(--blue) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1rem",
                  background: "var(--royal)",
                  color: "#fff",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "var(--shadow-royal)",
                  minWidth: "200px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <Shield size={17} aria-hidden="true" />
                  <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>Licensed Contractor</span>
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Outfit, sans-serif", letterSpacing: "-0.04em" }}>
                  {CONTACT.license}
                </div>
                <div style={{ fontSize: "0.75rem", opacity: 0.82, marginTop: "0.1rem" }}>
                  State of California
                </div>
              </div>
            </div>

            {/* Story */}
            <div style={{ paddingBottom: "2rem" }} className="reveal-right">
              <div className="eyebrow">Our Story</div>
              <h2 style={{ color: "var(--navy)", marginBottom: "0.75rem" }}>
                Built on Quality,
                <br />
                <span style={{ color: "var(--royal)" }}>Driven by Pride</span>
              </h2>
              <div className="accent-line" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "1.25rem" }}>
                HDZ Revamped was founded with a simple mission: deliver professional-grade painting
                and drywall services that San Diego County homeowners and businesses can rely on.
                Every project we take on reflects our commitment to quality, cleanliness, and
                customer satisfaction.
              </p>
              <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "1.25rem" }}>
                As a licensed California contractor (#1146147), we hold ourselves to the highest
                standards. Whether you need a single room refreshed or a complete exterior painted,
                we approach every job with the same level of professionalism and craftsmanship.
              </p>
              <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "2.25rem" }}>
                We&apos;re proud to serve our local community throughout San Diego County — from
                coastal communities like Carlsbad and Del Mar, to inland areas like Escondido,
                El Cajon, and Ramona.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/contact" className="btn btn-primary" id="about-quote-btn">
                  Get a Free Quote <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/services" className="btn btn-secondary" id="about-services-btn">
                  Our Services <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ marginBottom: "3.5rem" }} className="reveal-up">
            <div className="eyebrow">Our Values</div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
              <h2 style={{ color: "var(--navy)", marginBottom: 0 }}>
                What We{" "}
                <span style={{ color: "var(--royal)" }}>Stand For</span>
              </h2>
              <p className="section-subtitle">
                These principles guide every project we take on and every interaction with our clients.
              </p>
            </div>
          </div>

          {/* 2-column grid (not 3-col auto-fit) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.25rem",
            }}
          >
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className={`card service-panel reveal-up stagger-${Math.min(i + 1, 6)}`}
                  style={{ padding: "2rem 2.25rem", border: "1px solid var(--gray-border)" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      /* Corrected: var(--royal-light) not var(--blue-light) */
                      background: "var(--royal-light)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {/* Corrected: var(--royal) not var(--blue) */}
                    <Icon size={21} color="var(--royal)" aria-hidden="true" />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem", color: "var(--navy)" }}>
                    {val.title}
                  </h3>
                  <p style={{ color: "var(--gray-text)", fontSize: "0.9rem", lineHeight: 1.72 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LICENSE & CREDENTIALS ─────────────────────────────── */}
      <section className="section-padding" style={{ background: "#ffffff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            <div className="reveal-left">
              <div className="eyebrow">Credentials</div>
              <h2 style={{ color: "var(--navy)", marginBottom: "0.75rem" }}>
                Licensed &amp; <span style={{ color: "var(--royal)" }}>Insured</span>
              </h2>
              <div className="accent-line" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "1.75rem" }}>
                When you hire HDZ Revamped, you&apos;re hiring a properly licensed California
                contractor. Our license ensures our work meets California&apos;s quality and
                safety standards — giving you peace of mind.
              </p>

              {/* Credential boxes — corrected tokens */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "CA Contractor License", value: "#1146147", icon: Shield },
                  { label: "Service Area", value: "San Diego County, CA", icon: MapPin },
                  { label: "Business Hours", value: "Mon–Sat: 7:00 AM – 6:00 PM", icon: Briefcase },
                ].map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div key={cred.label} className="cred-block">
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          /* Corrected: var(--royal) not var(--blue) */
                          background: "var(--royal)",
                          borderRadius: "9px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} color="#fff" aria-hidden="true" />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", color: "var(--gray-text)", fontWeight: 500 }}>
                          {cred.label}
                        </div>
                        <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>
                          {cred.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Service Area */}
            <div className="reveal-right">
              <div className="eyebrow">Coverage</div>
              <h2 style={{ color: "var(--navy)", marginBottom: "0.75rem" }}>
                We Serve All of{" "}
                <span style={{ color: "var(--royal)" }}>San Diego County</span>
              </h2>
              <div className="accent-line" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.82, marginBottom: "1.75rem" }}>
                From coastal communities to inland neighborhoods, we proudly serve homeowners
                and businesses across San Diego County.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {SERVICE_AREAS.map((city) => (
                  <span key={city} className="area-tag">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        style={{
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
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", marginBottom: "2.75rem", maxWidth: "480px", margin: "0 auto 2.75rem", lineHeight: 1.78 }}>
            Contact us today for a free, no-obligation quote. We&apos;ll assess your project
            and provide a detailed estimate.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-gold" id="about-cta-quote-btn" style={{ fontSize: "1.05rem" }}>
              Get Free Quote <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href={`tel:${CONTACT.phone}`} className="btn btn-ghost-white" id="about-cta-call-btn" style={{ fontSize: "1.05rem" }}>
              <Phone size={17} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
