import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Shield, MapPin, Clock, ArrowRight } from "lucide-react";
import { CONTACT, SERVICES, SERVICE_AREAS } from "@/data/siteData";

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--navy)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Site footer"
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />
      {/* Dot texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      {/* Glow orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(41,93,255,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Main Footer Grid ─────────────────────── */}
      <div
        className="container"
        style={{ padding: "5rem 1.5rem 3rem", position: "relative", zIndex: 1 }}
      >
        <div className="footer-grid">
          {/* ── Brand Column ─────────────────── */}
          <div>
            {/* Logo & Name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ position: "relative", width: "44px", height: "44px", flexShrink: 0 }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="HDZ Revamped Logo"
                  fill
                  sizes="44px"
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  HDZ Revamped
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Painting &amp; Drywall
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                marginBottom: "1.75rem",
                color: "rgba(255,255,255,0.75)",
                maxWidth: "280px",
              }}
            >
              Premium painting and drywall services for San Diego County homeowners
              and businesses. Licensed, insured, and committed to craftsmanship.
            </p>

            {/* License Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.22)",
                borderRadius: "var(--radius-md)",
                padding: "0.65rem 1rem",
                marginBottom: "1.75rem",
              }}
            >
              <Shield size={14} color="var(--gold)" strokeWidth={2.5} aria-hidden="true" />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Licensed Contractor {CONTACT.license}
              </span>
            </div>

            {/* Social */}
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Follow Our Work
              </div>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                aria-label={`Follow HDZ Revamped on Instagram (opens in new tab)`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  transition: "color 0.2s ease",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                }}
                className="hover:text-white"
              >
                <InstagramIcon />
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>

          {/* ── Services Column ───────────────── */}
          <nav aria-label="Services navigation">
            <h5
              style={{
                color: "#fff",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Our Services
            </h5>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="footer-link"
                  >
                    <ArrowRight size={11} style={{ flexShrink: 0, opacity: 0.5 }} aria-hidden="true" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Quick Links ───────────────────── */}
          <nav aria-label="Company navigation">
            <h5
              style={{
                color: "#fff",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Company
            </h5>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    <ArrowRight size={11} style={{ flexShrink: 0, opacity: 0.5 }} aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact Column ────────────────── */}
          <div>
            <h5
              style={{
                color: "#fff",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                letterSpacing: "-0.01em",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              Contact Us
            </h5>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <a
                href={`tel:${CONTACT.phone}`}
                id="footer-call-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  fontWeight: 500,
                }}
                className="hover:text-white"
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    background: "rgba(41,93,255,0.15)",
                    border: "1px solid rgba(41,93,255,0.25)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Phone size={14} color="var(--royal)" />
                </div>
                {CONTACT.phoneDisplay}
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                id="footer-email-link"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  fontWeight: 500,
                  wordBreak: "break-all",
                }}
                className="hover:text-white"
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    background: "rgba(41,93,255,0.15)",
                    border: "1px solid rgba(41,93,255,0.25)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                  aria-hidden="true"
                >
                  <Mail size={14} color="var(--royal)" />
                </div>
                {CONTACT.email}
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    background: "rgba(41,93,255,0.15)",
                    border: "1px solid rgba(41,93,255,0.25)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                  aria-hidden="true"
                >
                  <MapPin size={14} color="var(--royal)" />
                </div>
                {CONTACT.area}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    background: "rgba(41,93,255,0.15)",
                    border: "1px solid rgba(41,93,255,0.25)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Clock size={14} color="var(--royal)" />
                </div>
                {CONTACT.hours}
              </div>
            </div>

            {/* Service areas */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.625rem",
                }}
              >
                Service Areas
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.65,
                }}
              >
                {SERVICE_AREAS.slice(0, 8).join(" · ")} &amp; more
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Separator ──────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* ── Bottom Bar ─────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="container"
          style={{
            padding: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
            &copy; {year} HDZ Revamped. All rights reserved.{" "}
            <span style={{ color: "rgba(255,255,255,0.45)" }}>
              CA License {CONTACT.license}
            </span>
          </p>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link
              href="/privacy"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.8rem",
                transition: "color 0.2s ease",
              }}
              className="hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.8rem",
                transition: "color 0.2s ease",
              }}
              className="hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
