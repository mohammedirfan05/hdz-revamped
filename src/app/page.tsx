import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Shield,
  MapPin,
  Star,
  PaintBucket,
  Home,
  Wrench,
  UtensilsCrossed,
  Building2,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { SERVICES, CONTACT, PORTFOLIO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "HDZ Revamped | Professional Painting & Drywall San Diego",
  description:
    "Licensed painter & drywall contractor serving San Diego County. Interior/exterior painting, drywall installation & repair. Free quotes — Call (760) 580-9790.",
};

const iconMap: Record<string, React.ElementType> = {
  PaintBucket,
  Home,
  LayoutGrid,
  Wrench,
  UtensilsCrossed,
  Building2,
};

export default function HomePage() {
  const portfolioPreview = PORTFOLIO.filter((p) => p.label === "After").slice(0, 6);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, var(--navy) 0%, #16213e 60%, #0f3460 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/portfolio/exterior-painting.jpg"
            alt="Professional painting project by HDZ Revamped San Diego"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.25 }}
          />
        </div>

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(15,52,96,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "4rem 1.25rem" }}>
          <div style={{ maxWidth: "720px" }}>
            {/* Label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(43,93,232,0.2)",
                border: "1px solid rgba(43,93,232,0.5)",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                marginBottom: "1.5rem",
              }}
            >
              <Shield size={14} color="var(--blue)" />
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                Licensed Contractor {CONTACT.license}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1.25rem",
                lineHeight: 1.1,
              }}
            >
              Professional Painting &{" "}
              <span style={{ color: "var(--blue)" }}>Drywall Services</span>
            </h1>

            {/* Sub */}
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.2rem",
                marginBottom: "2rem",
                maxWidth: "580px",
                lineHeight: 1.6,
              }}
            >
              Licensed &amp; trusted painting and drywall contractor serving all of{" "}
              <strong style={{ color: "#fff" }}>San Diego County</strong>. Interior, exterior,
              drywall installation, repair, and more.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <Link href="/contact" className="btn btn-primary" id="hero-quote-btn" style={{ fontSize: "1.05rem", padding: "0.875rem 2rem" }}>
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${CONTACT.phone}`}
                className="btn btn-outline-white"
                id="hero-call-btn"
                style={{ fontSize: "1.05rem", padding: "0.875rem 2rem" }}
              >
                <Phone size={18} />
                Call {CONTACT.phoneDisplay}
              </a>
            </div>

            {/* Trust chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              {[
                { icon: <Shield size={14} />, label: "Licensed & Insured" },
                { icon: <MapPin size={14} />, label: "San Diego County" },
                { icon: <Star size={14} />, label: "Free Estimates" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ color: "var(--blue)" }}>{chip.icon}</span>
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "40px",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: "2px",
                animation: "scrollDot 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(12px); opacity: 0.3; }
          }
        `}</style>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <div className="trust-bar">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {[
              { icon: <Shield size={18} />, text: "CA License #1146147" },
              { icon: <MapPin size={18} />, text: "Serving All San Diego County" },
              { icon: <CheckCircle2 size={18} />, text: "Licensed & Insured" },
              { icon: <Star size={18} />, text: "Free Quotes" },
              { icon: <Phone size={18} />, text: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "var(--blue)" }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{ color: "rgba(255,255,255,0.85)", transition: "color 0.15s" }} className="hover:text-white">
                    {item.text}
                  </a>
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.85)" }}>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
      <section id="services" className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <div className="divider" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From a single room repaint to a full exterior makeover — we handle it all with professional precision.
            </p>
          </div>

          {/* Service Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || PaintBucket;
              return (
                <div key={service.id} className="card" style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "var(--blue-light)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={24} color="var(--blue)" />
                  </div>
                  <h3 style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>{service.title}</h3>
                  <p style={{ color: "var(--gray-text)", fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                    {service.shortDesc}
                  </p>
                  <Link
                    href="/services"
                    style={{
                      color: "var(--blue)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      transition: "gap 0.2s",
                    }}
                    className="hover:underline"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* View all */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-secondary" id="home-view-services-btn">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────── */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem" }}>
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Recent Projects</h2>
              <div className="divider" style={{ marginBottom: 0 }} />
            </div>
            <Link href="/projects" className="btn btn-secondary" style={{ fontSize: "0.9rem" }} id="home-view-all-projects-btn">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {portfolioPreview.map((item, i) => (
              <Link
                href="/projects"
                key={item.id}
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: i === 0 ? "16/10" : "4/3",
                  background: "var(--gray-bg)",
                  gridColumn: i === 0 ? "span 2" : undefined,
                }}
                id={`home-portfolio-${item.id}`}
              >
                <Image
                  src={`/images/portfolio/${item.filename}`}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", transition: "transform 0.35s ease" }}
                  className="portfolio-img"
                />
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(26,26,46,0.75) 0%, transparent 50%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1.25rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "var(--blue)",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "100px",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.category}
                    </span>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>
                      {item.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            .portfolio-img { object-fit: cover; transition: transform 0.35s ease; }
            a:hover .portfolio-img { transform: scale(1.04); }
          `}</style>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ─────────────────────────────────────── */}
      <section id="about-snippet" className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "4/3",
                background: "var(--navy)",
              }}
            >
              <Image
                src="/images/portfolio/bedroom-after.jpg"
                alt="HDZ Revamped professional painting work in San Diego"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  background: "var(--white)",
                  borderRadius: "10px",
                  padding: "0.75rem 1rem",
                  boxShadow: "var(--shadow-lg)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Shield size={18} color="var(--blue)" />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray-text)", fontWeight: 500 }}>Licensed Contractor</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--navy)", fontWeight: 700 }}>{CONTACT.license}</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-label">About Us</span>
              <h2 className="section-title">Your Trusted Local Painting Experts</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                HDZ Revamped is a licensed painting and drywall contractor proudly serving homeowners
                and businesses throughout San Diego County. We combine skilled craftsmanship with
                reliable service to deliver results you&apos;ll love.
              </p>
              <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                From interior repaints to full exterior makeovers, drywall repairs to kitchen remodels
                — every project receives the same level of care and attention to detail.
              </p>

              {/* Checkmarks */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
                {[
                  "CA Licensed Contractor #1146147",
                  "Serving all of San Diego County",
                  "Licensed & Insured",
                  "Free quotes on every project",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.95rem", color: "var(--navy)" }}>
                    <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn btn-primary" id="home-about-btn">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PLACEHOLDER ─────────────────────────── */}
      <section id="testimonials" className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider" style={{ margin: "0 auto 2rem" }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: "2rem",
                  textAlign: "left",
                  background: "linear-gradient(135deg, var(--blue-light) 0%, #fff 100%)",
                  border: "1px solid rgba(43,93,232,0.1)",
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} fill="var(--blue)" color="var(--blue)" />
                  ))}
                </div>
                <p style={{ color: "var(--gray-text)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>
                  &ldquo;Reviews from our satisfied San Diego customers coming soon. Check our Instagram @hdzrevamped to see our latest work!&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                    }}
                  >
                    {["SD", "RC", "CV"][i - 1]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy)" }}>
                      {["San Diego Homeowner", "Rancho Santa Fe Client", "Chula Vista Resident"][i - 1]}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--gray-text)" }}>San Diego County</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            id="home-instagram-btn"
          >
            <InstagramIcon />
            See Our Work on Instagram
          </a>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section
        id="cta-banner"
        style={{
          background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)",
          padding: "5rem 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Ready to Transform Your Space?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Get your free quote today. We serve all of San Diego County — no job is too big or too small.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-white" id="cta-quote-btn" style={{ fontSize: "1.05rem", padding: "0.875rem 2rem" }}>
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="btn btn-outline-white"
              id="cta-call-btn"
              style={{ fontSize: "1.05rem", padding: "0.875rem 2rem" }}
            >
              <Phone size={18} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
