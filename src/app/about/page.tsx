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
      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: "var(--blue)", background: "rgba(43,93,232,0.2)", border: "1px solid rgba(43,93,232,0.4)" }}>
            About Us
          </span>
          <h1 style={{ color: "#fff", marginTop: "0.75rem", marginBottom: "1rem" }}>About HDZ Revamped</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Licensed &amp; trusted painting and drywall professionals serving San Diego County with quality craftsmanship and honest service.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  background: "var(--gray-bg)",
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
              {/* Credential card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  right: "-1rem",
                  background: "var(--blue)",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "var(--shadow-lg)",
                  minWidth: "200px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <Shield size={18} />
                  <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>Licensed Contractor</span>
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Poppins, sans-serif" }}>
                  {CONTACT.license}
                </div>
                <div style={{ fontSize: "0.75rem", opacity: 0.85, marginTop: "0.1rem" }}>
                  State of California
                </div>
              </div>
            </div>

            {/* Story */}
            <div style={{ paddingBottom: "2rem" }}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Built on Quality, Driven by Pride</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                HDZ Revamped was founded with a simple mission: deliver professional-grade painting
                and drywall services that San Diego County homeowners and businesses can rely on.
                Every project we take on reflects our commitment to quality, cleanliness, and
                customer satisfaction.
              </p>
              <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                As a licensed California contractor (#1146147), we hold ourselves to the highest
                standards. Whether you need a single room refreshed or a complete exterior painted,
                we approach every job with the same level of professionalism and craftsmanship.
              </p>
              <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We&apos;re proud to serve our local community throughout San Diego County — from
                coastal communities like Carlsbad and Del Mar, to inland areas like Escondido,
                El Cajon, and Ramona.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/contact" className="btn btn-primary" id="about-quote-btn">
                  Get a Free Quote <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn btn-secondary" id="about-services-btn">
                  Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <div className="divider" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              These principles guide every project we take on and every interaction we have with our clients.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="card" style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--blue-light)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} color="var(--blue)" />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>{val.title}</h3>
                  <p style={{ color: "var(--gray-text)", fontSize: "0.9rem", lineHeight: 1.7 }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LICENSE & CREDENTIALS ─────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            <div>
              <span className="section-label">Credentials</span>
              <h2 className="section-title">Licensed &amp; Insured</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                When you hire HDZ Revamped, you&apos;re hiring a properly licensed California
                contractor. Our license ensures our work meets California&apos;s quality and
                safety standards — giving you peace of mind.
              </p>

              {/* Credential boxes */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "CA Contractor License", value: "#1146147", icon: Shield },
                  { label: "Service Area", value: "San Diego County, CA", icon: MapPin },
                  { label: "Business Hours", value: "Mon–Sat: 7:00 AM – 6:00 PM", icon: Briefcase },
                ].map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={cred.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem 1.25rem",
                        background: "var(--blue-light)",
                        borderRadius: "10px",
                        border: "1px solid rgba(43,93,232,0.15)",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "var(--blue)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={18} color="#fff" />
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
            <div>
              <span className="section-label">Coverage</span>
              <h2 className="section-title">We Serve All of San Diego County</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-text)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                From coastal communities to inland neighborhoods, we proudly serve homeowners and businesses across San Diego County.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    style={{
                      background: "var(--gray-bg)",
                      border: "1px solid var(--gray-border)",
                      borderRadius: "100px",
                      padding: "0.3rem 0.85rem",
                      fontSize: "0.8rem",
                      color: "var(--navy)",
                      fontWeight: 500,
                    }}
                  >
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
          background: "linear-gradient(135deg, var(--navy) 0%, #16213e 100%)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Contact us today for a free, no-obligation quote. We&apos;ll assess your project and provide a detailed estimate.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary" id="about-cta-quote-btn" style={{ fontSize: "1.05rem" }}>
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a href={`tel:${CONTACT.phone}`} className="btn btn-outline-white" id="about-cta-call-btn" style={{ fontSize: "1.05rem" }}>
              <Phone size={18} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
