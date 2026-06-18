import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Shield, MapPin, Clock } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { CONTACT, SERVICES, SERVICE_AREAS } from "@/data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.85)" }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: "4rem 1.25rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0 }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="HDZ Revamped Logo"
                  fill
                  sizes="48px"
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>
                  HDZ Revamped
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--blue)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Painting & Drywall
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem", color: "rgba(255,255,255,0.65)" }}>
              Professional painting and drywall services for San Diego County homeowners and businesses. Licensed, insured, and committed to quality.
            </p>

            {/* License Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(43,93,232,0.2)",
                border: "1px solid rgba(43,93,232,0.4)",
                borderRadius: "8px",
                padding: "0.5rem 0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              <Shield size={15} color="var(--blue)" strokeWidth={2.5} />
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
                Licensed Contractor {CONTACT.license}
              </span>
            </div>

            {/* Social */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-instagram-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                transition: "color 0.15s",
              }}
              className="hover:text-white"
            >
              <InstagramIcon />
              {CONTACT.instagramHandle}
            </a>
          </div>

          {/* Services Column */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", fontFamily: "Poppins, sans-serif" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.9rem",
                      transition: "color 0.15s",
                    }}
                    className="hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", fontFamily: "Poppins, sans-serif" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
                  <Link
                    href={link.href}
                    style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", transition: "color 0.15s" }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem", fontFamily: "Poppins, sans-serif" }}>
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={`tel:${CONTACT.phone}`}
                id="footer-call-btn"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", transition: "color 0.15s" }}
                className="hover:text-white"
              >
                <Phone size={16} color="var(--blue)" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                id="footer-email-link"
                style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", transition: "color 0.15s", wordBreak: "break-all" }}
                className="hover:text-white"
              >
                <Mail size={16} color="var(--blue)" style={{ flexShrink: 0 }} />
                {CONTACT.email}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                <MapPin size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                {CONTACT.area}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                <Clock size={16} color="var(--blue)" style={{ flexShrink: 0 }} />
                {CONTACT.hours}
              </div>
            </div>

            {/* Service Areas snippet */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Service Areas
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {SERVICE_AREAS.slice(0, 8).join(" · ")} & more
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem 0" }}>
        <div className="container" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Ready to transform your space?{" "}
            <strong style={{ color: "#fff" }}>Call us for a free quote today.</strong>
          </p>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn btn-primary"
            style={{ fontSize: "0.9rem", padding: "0.6rem 1.4rem" }}
            id="footer-cta-call"
          >
            <Phone size={16} />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.25rem 0" }}>
        <div className="container" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
            © {year} HDZ Revamped. All rights reserved. CA License {CONTACT.license}
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", transition: "color 0.15s" }} className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", transition: "color 0.15s" }} className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
