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
  Award,
  Clock,
  Users,
  Sparkles,
  ClipboardList,
  Hammer,
  Search,
  ThumbsUp,
} from "lucide-react";
import { SERVICES, CONTACT, PORTFOLIO } from "@/data/siteData";

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

export const metadata: Metadata = {
  title: "HDZ Revamped | Premium Painting & Drywall San Diego",
  description:
    "San Diego's trusted experts in painting, drywall & home renovation. Licensed contractor serving all of San Diego County. Free quotes — Call (760) 580-9790.",
};

const iconMap: Record<string, React.ElementType> = {
  PaintBucket, Home, LayoutGrid, Wrench, UtensilsCrossed, Building2,
};

/* ─────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        background: "var(--gradient-hero)",
        overflow: "hidden",
      }}
    >
      {/* Decorative layers — aria-hidden */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 65% 50%, rgba(41,93,255,0.16) 0%, transparent 60%)",
          zIndex: 1,
        }}
      />
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="dot-pattern-light"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />
      {/* Animated gold orb — GPU composited only */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "8%",
          right: "26%",
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
          animation: "gradientOrb 14s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      {/* Second subtle orb for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(41,93,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
          animation: "gradientOrb 18s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Main layout grid */}
      <div
        className="container hero-grid"
        style={{ position: "relative", zIndex: 2, padding: "6rem 1.5rem" }}
      >
        {/* LEFT — Content */}
        <div>
          {/* License eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.28)",
              borderRadius: "var(--radius-full)",
              padding: "0.375rem 1rem",
              marginBottom: "2rem",
              animation: "fadeInUp 0.55s ease forwards",
            }}
          >
            <Shield size={12} color="var(--gold)" aria-hidden="true" />
            <span
              style={{
                color: "var(--gold)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Licensed Contractor {CONTACT.license}
            </span>
          </div>

          {/* Headline — left-aligned, editorial */}
          <h1
            style={{
              color: "#ffffff",
              marginBottom: "1.5rem",
              animation: "fadeInUp 0.65s 0.1s ease both",
              opacity: 0,
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.048em",
            }}
            className="text-hero"
          >
            Transforming{" "}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e0c070 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Spaces
            </span>{" "}
            Through
            <br />
            Precision
            <br />
            Craft.
          </h1>

          {/* Sub */}
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.1rem",
              marginBottom: "2.5rem",
              maxWidth: "460px",
              lineHeight: 1.78,
              animation: "fadeInUp 0.65s 0.2s ease both",
              opacity: 0,
            }}
          >
            San Diego&apos;s trusted experts in interior &amp; exterior painting,
            drywall installation, and full home renovation. Every project
            delivered with{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>
              meticulous attention to detail.
            </span>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3.5rem",
              animation: "fadeInUp 0.65s 0.3s ease both",
              opacity: 0,
            }}
          >
            <Link
              href="/contact"
              className="btn btn-gold"
              id="hero-quote-btn"
              style={{ fontSize: "1rem", padding: "0.9rem 2.25rem" }}
            >
              Get a Free Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="btn btn-ghost-white"
              id="hero-call-btn"
              style={{ fontSize: "1rem", padding: "0.9rem 2.25rem" }}
            >
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Stats row — organic numbers */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              animation: "fadeInUp 0.65s 0.4s ease both",
              opacity: 0,
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            {[
              { num: "527+", label: "Projects Completed" },
              { num: "11+", label: "Years Experience" },
              { num: "94.7%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="stat-block">
                <span className="stat-number">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image showcase (hidden on mobile via CSS class) */}
        <div
          className="hero-image-col"
          style={{
            position: "relative",
            animation: "fadeInRight 0.75s 0.25s ease both",
            opacity: 0,
          }}
        >
          {/* Main project image */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              aspectRatio: "4/5",
              boxShadow: "0 32px 80px rgba(8,26,55,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src="/images/portfolio/exterior-painting.jpg"
              alt="Premium exterior painting project by HDZ Revamped San Diego"
              fill
              priority
              sizes="(max-width: 900px) 0vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            {/* Image gradient overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(8,26,55,0.65) 0%, transparent 50%)",
              }}
            />

            {/* Project tag on image */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
              }}
            >
              <div
                className="glass-dark"
                style={{
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.67rem",
                      color: "var(--gold)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    Recent Project
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    Exterior Repaint — La Mesa
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px" }} aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="var(--gold)" color="var(--gold)" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge — Licensed */}
          <div
            className="animate-float"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-16px",
              left: "-24px",
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              padding: "0.875rem 1.125rem",
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              border: "1px solid rgba(201,168,76,0.14)",
              animationDelay: "1s",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Award size={17} color="var(--gold)" aria-hidden="true" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.67rem",
                  color: "var(--gray-text)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                CA Licensed
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--navy)",
                  fontWeight: 800,
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {CONTACT.license}
              </div>
            </div>
          </div>

          {/* Floating badge — Satisfaction */}
          <div
            className="animate-float"
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "7rem",
              right: "-20px",
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              padding: "0.875rem 1.125rem",
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              border: "1px solid rgba(41,93,255,0.09)",
              animationDelay: "1.5s",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, var(--royal) 0%, var(--royal-dark) 100%)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ThumbsUp size={17} color="white" aria-hidden="true" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.67rem",
                  color: "var(--gray-text)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Satisfaction
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--navy)",
                  fontWeight: 800,
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "22px",
            height: "36px",
            border: "1.5px solid rgba(255,255,255,0.18)",
            borderRadius: "11px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "7px",
              background: "rgba(255,255,255,0.45)",
              borderRadius: "2px",
              animation: "scrollDot 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   TRUST BAR
───────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: <Shield size={16} aria-hidden="true" />, label: "CA License #1146147", sub: "Verified Contractor" },
    { icon: <CheckCircle2 size={16} aria-hidden="true" />, label: "Licensed & Insured", sub: "Full Coverage" },
    { icon: <MapPin size={16} aria-hidden="true" />, label: "San Diego County", sub: "All Areas Served" },
    { icon: <Star size={16} aria-hidden="true" />, label: "Free Estimates", sub: "No Obligation" },
    { icon: <Clock size={16} aria-hidden="true" />, label: "Mon–Sat 7AM–6PM", sub: "Available Now" },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderBottom: "1px solid var(--gray-border)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="trust-bar-grid">
          {items.map((item) => (
            <div
              key={item.label}
              className="trust-bar-item"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1.25rem 1.75rem",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%", maxWidth: "220px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "var(--royal-light)",
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--royal)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      fontFamily: "Outfit, sans-serif",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--gray-text)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SERVICES SECTION — 2-column asymmetric (editorial)
   Anti-pattern fix: replaces the forbidden 3-equal-card grid
───────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "var(--surface)",
        padding: "var(--section-py) 0",
        position: "relative",
      }}
    >
      <div
        aria-hidden="true"
        className="dot-pattern"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header — asymmetric split, left-aligned */}
        <div className="services-header-grid reveal-up">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 style={{ color: "var(--navy)", marginBottom: 0 }}>
              Expert Services
              <br />
              <span style={{ color: "var(--royal)" }}>Built to Last</span>
            </h2>
          </div>
          <div>
            <p style={{ color: "var(--gray-text)", fontSize: "1.05rem", lineHeight: 1.78, marginBottom: "1.5rem" }}>
              From a single-room repaint to a complete exterior makeover — we handle
              every project with professional precision and premium materials.
            </p>
            <Link href="/services" className="btn btn-outline" id="home-view-services-btn">
              View All Services
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Service panels — 2-column zigzag (editorial layout) */}
        <div className="services-zigzag">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || PaintBucket;
            const isFeatured = i === 0 || i === 1;

            return (
              <Link
                key={service.id}
                href="/services"
                className={`service-panel reveal-up stagger-${Math.min(i + 1, 6)}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  borderRadius: "var(--radius-card)",
                  padding: "2rem 2.25rem",
                  border: "1px solid var(--gray-border)",
                  boxShadow: "var(--shadow-sm)",
                  textDecoration: "none",
                  /* Make first service span 2 rows for editorial depth */
                  ...(i === 0 ? { gridRow: "span 2" } : {}),
                }}
                id={`service-${service.id}`}
                aria-label={`${service.title} — ${service.shortDesc}`}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: isFeatured ? "var(--gradient-hero)" : "var(--royal-light)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "all 0.3s var(--ease-out-expo)",
                  }}
                >
                  <Icon
                    size={21}
                    color={isFeatured ? "#ffffff" : "var(--royal)"}
                    aria-hidden="true"
                  />
                </div>

                {/* Category */}
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--gold-muted)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {service.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    fontSize: i === 0 ? "1.45rem" : "1.25rem",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--gray-text)",
                    fontSize: "0.9rem",
                    lineHeight: 1.72,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {service.shortDesc}
                </p>

                {/* Benefits preview */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.75rem" }}>
                  {service.benefits.slice(0, i === 0 ? 4 : 3).map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.82rem",
                        color: "var(--gray-text)",
                      }}
                    >
                      <CheckCircle2
                        size={13}
                        color="var(--royal)"
                        style={{ flexShrink: 0, marginTop: "3px" }}
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "var(--royal)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    fontFamily: "Outfit, sans-serif",
                    marginTop: "auto",
                  }}
                >
                  Learn More <ArrowRight size={14} aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PORTFOLIO SECTION
───────────────────────────────────────────────────────── */
function PortfolioSection({ portfolioPreview }: { portfolioPreview: typeof PORTFOLIO }) {
  return (
    <section
      id="portfolio"
      style={{
        background: "var(--navy)",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 70%, rgba(41,93,255,0.1) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div
          className="reveal-up"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            gap: "1.5rem",
          }}
        >
          <div>
            <div className="eyebrow eyebrow-light">Our Work</div>
            <h2 style={{ color: "#ffffff" }}>
              Recent{" "}
              <span className="text-gradient-gold">Projects</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.58)", marginTop: "0.75rem", maxWidth: "460px", fontSize: "1rem" }}>
              A selection of our finest work across San Diego County.
              Every project tells a story of precision craftsmanship.
            </p>
          </div>
          <Link
            href="/projects"
            className="btn btn-ghost-white"
            style={{ fontSize: "0.9rem" }}
            id="home-view-all-projects-btn"
          >
            View All Projects <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Masonry portfolio grid */}
        <div className="portfolio-masonry reveal-up stagger-2">
          {portfolioPreview.map((item, i) => {
            const isTall = i === 0 || i === 3;
            const isWide = i === 1;

            return (
              <Link
                href="/projects"
                key={item.id}
                className={`portfolio-item${isWide ? " portfolio-wide" : ""}`}
                style={{
                  display: "block",
                  aspectRatio: isTall ? "3/4" : isWide ? "16/9" : "4/3",
                  background: "var(--navy-mid)",
                  gridColumn: isWide ? "span 2" : undefined,
                  gridRow: isTall ? "span 2" : undefined,
                }}
                id={`home-portfolio-${item.id}`}
                aria-label={`${item.title} — ${item.category} project. View all projects.`}
              >
                <Image
                  src={item.filename.startsWith("http") ? item.filename : `/images/portfolio/${item.filename}`}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="portfolio-overlay" aria-hidden="true" />
                {/* Project info */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem",
                    zIndex: 2,
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.38)",
                      color: "var(--gold)",
                      fontSize: "0.63rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      marginBottom: "0.35rem",
                      backdropFilter: "blur(8px)",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      fontFamily: "Outfit, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   ABOUT SNIPPET
───────────────────────────────────────────────────────── */
function AboutSnippet() {
  return (
    <section
      id="about-snippet"
      style={{
        background: "#ffffff",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Right-side tinted panel */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "38%",
          background: "var(--surface)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="about-grid">
          {/* Left — Stacked Images */}
          <div className="about-image-wrapper reveal-left">
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/5",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <Image
                src="/images/portfolio/bedroom-after.jpg"
                alt="HDZ Revamped professional painting work in San Diego"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Secondary image offset */}
            <div className="about-image-secondary">
              <Image
                src="/images/portfolio/kitchen-remodel.jpg"
                alt="Kitchen remodel by HDZ Revamped San Diego"
                fill
                sizes="30vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Stats badge */}
            <div
              className="about-badge-float"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "-1.5rem",
                background: "var(--navy)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem 1.5rem",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--gold)",
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.045em",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                11+
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Years of
                <br />
                Excellence
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div style={{ paddingBottom: "2rem" }} className="reveal-right">
            <div className="eyebrow">About Us</div>
            <h2 style={{ color: "var(--navy)", marginBottom: "1.5rem" }}>
              San Diego&apos;s Trusted
              <br />
              <span style={{ color: "var(--royal)" }}>Painting Experts</span>
            </h2>

            <p style={{ color: "var(--gray-text)", fontSize: "1.05rem", lineHeight: 1.82, marginBottom: "1.25rem" }}>
              HDZ Revamped is a licensed painting and drywall contractor proudly
              serving homeowners and businesses throughout San Diego County. We
              combine skilled craftsmanship with reliable service to deliver results
              you&apos;ll love for years.
            </p>

            <p style={{ color: "var(--gray-text)", fontSize: "1.05rem", lineHeight: 1.82, marginBottom: "2.5rem" }}>
              From interior repaints to full exterior makeovers, drywall repairs to
              kitchen remodels — every project receives the same level of meticulous
              care and attention to detail.
            </p>

            {/* Credential list */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
              {[
                "CA Licensed Contractor #1146147",
                "Fully Licensed & Insured",
                "Serving all of San Diego County",
                "Free estimates on every project",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.95rem",
                    color: "var(--navy)",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "var(--royal-light)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={13} color="var(--royal)" aria-hidden="true" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginBottom: "2.5rem",
                padding: "1.5rem",
                background: "var(--surface)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--gray-border)",
              }}
            >
              {[
                { num: "527+", label: "Projects" },
                { num: "11+", label: "Years" },
                { num: "94.7%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.65rem",
                      fontWeight: 800,
                      color: "var(--navy)",
                      fontFamily: "Outfit, sans-serif",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--gray-text)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary" id="home-about-btn">
              Our Full Story
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PROCESS SECTION — left-aligned header (anti-centered bias)
───────────────────────────────────────────────────────── */
function ProcessSection() {
  const steps = [
    {
      icon: <Search size={21} aria-hidden="true" />,
      step: "01",
      title: "Consultation",
      desc: "We visit your property, assess the scope, and discuss your vision. No pressure, just expertise.",
    },
    {
      icon: <ClipboardList size={21} aria-hidden="true" />,
      step: "02",
      title: "Planning",
      desc: "Receive a detailed written quote, material selections, timeline, and a clear project plan.",
    },
    {
      icon: <Hammer size={21} aria-hidden="true" />,
      step: "03",
      title: "Execution",
      desc: "Our skilled crew executes the work with precision. Your home is protected throughout.",
    },
    {
      icon: <ThumbsUp size={21} aria-hidden="true" />,
      step: "04",
      title: "Final Walkthrough",
      desc: "We walk through every detail with you. We don't leave until you're completely satisfied.",
    },
  ];

  return (
    <section
      id="process"
      style={{
        background: "var(--surface)",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        className="dot-pattern"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header — LEFT aligned (not centered — anti-pattern fix) */}
        <div
          className="reveal-up"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
        >
          <div>
            <div className="eyebrow">How It Works</div>
            <h2 style={{ color: "var(--navy)" }}>
              Our Proven
              <br />
              <span style={{ color: "var(--royal)" }}>4-Step Process</span>
            </h2>
          </div>
          <p style={{ color: "var(--gray-text)", fontSize: "1.05rem", lineHeight: 1.78 }}>
            We make every project seamless from first contact to final walkthrough.
            Here&apos;s how easy it is to work with us.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps-grid">
          {/* Connecting line — decorative */}
          <div className="process-connector" aria-hidden="true" />

          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`process-step reveal-up stagger-${i + 1}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "0 1.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                className="process-number"
                aria-label={`Step ${item.step}`}
              >
                {item.icon}
              </div>

              <div
                style={{
                  fontSize: "0.63rem",
                  fontWeight: 700,
                  color: "var(--gold-muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                  fontFamily: "Outfit, sans-serif",
                }}
                aria-hidden="true"
              >
                Step {item.step}
              </div>

              <h4 style={{ color: "var(--navy)", marginBottom: "0.75rem" }}>
                {item.title}
              </h4>

              <p style={{ color: "var(--gray-text)", fontSize: "0.875rem", lineHeight: 1.72 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "4rem" }} className="reveal-up stagger-5">
          <Link href="/contact" className="btn btn-primary" id="process-cta-btn">
            Start Your Project Today
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      initials: "MR",
      name: "Maria Rodriguez",
      location: "Escondido, CA",
      project: "Full Interior Repaint",
      text: "HDZ Revamped transformed our entire home interior in just 4 days. The crew was professional, the prep work was meticulous, and the finish is absolutely flawless. We've already referred them to our neighbors.",
      hue: "215",
    },
    {
      initials: "JT",
      name: "James & Sarah Thompson",
      location: "Carlsbad, CA",
      project: "Exterior Painting + Drywall Repair",
      text: "From the free estimate to the final walkthrough, every step exceeded our expectations. They matched our stucco texture perfectly on the repairs — you genuinely can't tell there was ever any damage.",
      hue: "42",
    },
    {
      initials: "KC",
      name: "Kevin Chen",
      location: "Chula Vista, CA",
      project: "Kitchen Cabinet Refinishing",
      text: "Our kitchen looks like a complete renovation at a fraction of the cost. The cabinet painting is factory-smooth quality. David and his team were on time every day and left the place spotless.",
      hue: "145",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        background: "#ffffff",
        padding: "var(--section-py) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top half tinted */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "var(--surface)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }} className="reveal-up">
          <div className="eyebrow">Testimonials</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
            <h2 style={{ color: "var(--navy)", marginBottom: 0 }}>
              What Our{" "}
              <span style={{ color: "var(--royal)" }}>Clients Say</span>
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem", maxWidth: "400px", lineHeight: 1.72 }}>
              Real results, real satisfaction. Our work speaks for itself —
              but our clients speak louder.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`testimonial-card reveal-up stagger-${i + 1}`}
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }} aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="var(--gold)" color="var(--gold)" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <blockquote
                style={{
                  color: "#374151",
                  fontSize: "0.95rem",
                  lineHeight: 1.78,
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                  quotes: "none",
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Project badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  background: "var(--surface)",
                  border: "1px solid var(--gray-border)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--gray-text)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {t.project}
              </div>

              {/* Author */}
              <footer style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: `hsl(${t.hue}, 48%, 36%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    fontFamily: "Outfit, sans-serif",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--navy)", fontFamily: "Outfit, sans-serif", letterSpacing: "-0.01em" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.77rem", color: "var(--gray-text)", display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.1rem" }}>
                    <MapPin size={10} aria-hidden="true" />
                    {t.location}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: "center" }} className="reveal-up stagger-4">
          <p style={{ color: "var(--gray-text)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
            Reviews from our satisfied San Diego customers. See our latest work on Instagram.
          </p>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="home-instagram-btn"
            aria-label="Follow HDZ Revamped on Instagram (opens in new tab)"
          >
            <InstagramIcon />
            Follow {CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   CTA BANNER — High-Converting
───────────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section
      id="cta-banner"
      style={{
        background: "var(--gradient-cta)",
        padding: "7rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.13) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        className="dot-pattern-light"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "10%",
          width: "280px",
          height: "280px",
          background: "radial-gradient(circle, rgba(41,93,255,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div
          className="reveal-scale"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.22)",
            borderRadius: "var(--radius-full)",
            padding: "0.375rem 1.125rem",
            marginBottom: "2rem",
          }}
        >
          <Sparkles size={12} color="var(--gold)" aria-hidden="true" />
          <span
            style={{
              color: "var(--gold)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Free Consultation
          </span>
        </div>

        <h2
          className="reveal-up"
          style={{
            color: "#ffffff",
            maxWidth: "640px",
            margin: "0 auto 1.25rem",
          }}
        >
          Ready to Love{" "}
          <span className="text-gradient-gold">Your Home</span>{" "}
          Again?
        </h2>

        <p
          className="reveal-up stagger-1"
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.1rem",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            lineHeight: 1.78,
          }}
        >
          Get a free consultation and discover how our craftsmanship can
          transform your space. No obligation, no pressure — just exceptional
          results.
        </p>

        <div
          className="reveal-up stagger-2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Link
            href="/contact"
            className="btn btn-gold"
            id="cta-quote-btn"
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
          >
            Get a Free Quote
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn btn-ghost-white"
            id="cta-call-btn"
            style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
          >
            <Phone size={17} aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="reveal-up stagger-3"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.75rem",
          }}
        >
          {[
            { icon: <Shield size={13} aria-hidden="true" />, label: "Licensed & Insured" },
            { icon: <MapPin size={13} aria-hidden="true" />, label: "San Diego County" },
            { icon: <Users size={13} aria-hidden="true" />, label: "527+ Happy Clients" },
            { icon: <Award size={13} aria-hidden="true" />, label: "11+ Years Experience" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "rgba(255,255,255,0.62)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}
            >
              <span style={{ color: "rgba(201,168,76,0.82)" }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE ASSEMBLY
───────────────────────────────────────────────────────── */
export default function HomePage() {
  const portfolioPreview = PORTFOLIO.filter((p) => p.label === "After").slice(0, 6);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <PortfolioSection portfolioPreview={portfolioPreview} />
      <AboutSnippet />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
