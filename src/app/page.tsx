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
  ChevronRight,
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default function HomePage() {
  const portfolioPreview = PORTFOLIO.filter((p) => p.label === "After").slice(0, 6);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — World-Class Split Layout
      ══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "var(--gradient-hero)",
          overflow: "hidden",
        }}
      >
        {/* Background subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 65% 50%, rgba(41,93,255,0.18) 0%, transparent 60%)",
            zIndex: 1,
          }}
        />

        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            zIndex: 1,
          }}
        />

        {/* Gold accent orb */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "28%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212,168,74,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Main layout grid */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "6rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — Content */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(212,168,74,0.12)",
                border: "1px solid rgba(212,168,74,0.3)",
                borderRadius: "var(--radius-full)",
                padding: "0.4rem 1rem",
                marginBottom: "2rem",
                animation: "fadeInUp 0.6s ease forwards",
              }}
            >
              <Shield size={13} color="var(--gold)" />
              <span
                style={{
                  color: "var(--gold)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Licensed Contractor {CONTACT.license}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1.5rem",
                animation: "fadeInUp 0.65s 0.1s ease both",
                opacity: 0,
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.045em",
              }}
              className="text-hero"
            >
              Transforming{" "}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #D4A84A 0%, #e8c56e 50%, #D4A84A 100%)",
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
              Craftsmanship.
            </h1>

            {/* Sub */}
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.125rem",
                marginBottom: "2.5rem",
                maxWidth: "460px",
                lineHeight: 1.75,
                animation: "fadeInUp 0.65s 0.2s ease both",
                opacity: 0,
              }}
            >
              San Diego&apos;s trusted experts in interior & exterior painting,
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
                <ArrowRight size={17} />
              </Link>
              <a
                href={`tel:${CONTACT.phone}`}
                className="btn btn-ghost-white"
                id="hero-call-btn"
                style={{ fontSize: "1rem", padding: "0.9rem 2.25rem" }}
              >
                <Phone size={17} />
                {CONTACT.phoneDisplay}
              </a>
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                animation: "fadeInUp 0.65s 0.4s ease both",
                opacity: 0,
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {[
                { num: "500+", label: "Projects Completed" },
                { num: "10+", label: "Years Experience" },
                { num: "100%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label} className="stat-block">
                  <span className="stat-number">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image showcase */}
          <div
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
                alt="Premium painting project by HDZ Revamped San Diego"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* Image overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,26,55,0.6) 0%, transparent 50%)",
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
                  style={{
                    background: "rgba(8,26,55,0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.1)",
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
                        fontSize: "0.7rem",
                        color: "var(--gold)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Recent Project
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      }}
                    >
                      Exterior Repaint — La Mesa
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "2px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="var(--gold)" color="var(--gold)" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — Licensed */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                top: "-16px",
                left: "-24px",
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem 1.25rem",
                boxShadow: "var(--shadow-xl)",
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                border: "1px solid rgba(212,168,74,0.15)",
                animationDelay: "1s",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={18} color="var(--gold)" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
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
                    fontSize: "0.875rem",
                    color: "var(--navy)",
                    fontWeight: 800,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  {CONTACT.license}
                </div>
              </div>
            </div>

            {/* Floating badge — Satisfaction */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: "7rem",
                right: "-20px",
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: "1rem 1.25rem",
                boxShadow: "var(--shadow-xl)",
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                border: "1px solid rgba(41,93,255,0.1)",
                animationDelay: "1.5s",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, var(--royal) 0%, var(--royal-dark) 100%)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ThumbsUp size={18} color="white" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
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
                    fontSize: "0.875rem",
                    color: "var(--navy)",
                    fontWeight: 800,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
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
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em",
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
              border: "1.5px solid rgba(255,255,255,0.2)",
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
                background: "rgba(255,255,255,0.5)",
                borderRadius: "2px",
                animation: "scrollDot 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #hero > .container {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
              padding-top: 4rem !important;
            }
            #hero > .container > div:last-child {
              display: none;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST BAR — Premium Credentials Strip
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid var(--gray-border)",
          padding: "0",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="trust-bar-grid">
            {[
              { icon: <Shield size={17} />, label: "CA License #1146147", sub: "Verified Contractor" },
              { icon: <CheckCircle2 size={17} />, label: "Licensed & Insured", sub: "Full Coverage" },
              { icon: <MapPin size={17} />, label: "San Diego County", sub: "All Areas Served" },
              { icon: <Star size={17} />, label: "Free Estimates", sub: "No Obligation" },
              { icon: <Clock size={17} />, label: "Mon–Sat 7AM–6PM", sub: "Available" },
            ].map((item) => (
              <div
                key={item.label}
                className="trust-bar-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1.25rem 2rem",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%", maxWidth: "230px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      background: "var(--royal-light)",
                      borderRadius: "10px",
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
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
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

      {/* ══════════════════════════════════════════════════════
          SERVICES — Large Interactive Magazine Panels
      ══════════════════════════════════════════════════════ */}
      <section
        id="services"
        style={{
          background: "var(--surface)",
          padding: "var(--section-py) 0",
          position: "relative",
        }}
      >
        {/* Background dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(8,26,55,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Header — Left aligned asymmetric */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "end",
              marginBottom: "4rem",
            }}
          >
            <div>
              <div className="eyebrow">What We Do</div>
              <h2
                style={{
                  color: "var(--navy)",
                  marginBottom: 0,
                }}
              >
                Expert Services
                <br />
                <span style={{ color: "var(--royal)" }}>Built to Last</span>
              </h2>
            </div>
            <div>
              <p style={{ color: "var(--gray-text)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                From a single-room repaint to a complete exterior makeover — we handle
                every project with professional precision and premium materials.
              </p>
              <Link href="/services" className="btn btn-outline" id="home-view-services-btn">
                View All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Service Panels — Asymmetric magazine layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
          >
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || PaintBucket;
              const isFeatured = i === 0;
              return (
                <Link
                  key={service.id}
                  href="/services"
                  className="service-panel"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#ffffff",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    border: "1px solid var(--gray-border)",
                    boxShadow: "var(--shadow-sm)",
                    gridColumn: isFeatured ? "span 1" : undefined,
                    textDecoration: "none",
                  }}
                  id={`service-${service.id}`}
                >
                  {/* Service icon */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: isFeatured
                        ? "var(--gradient-hero)"
                        : "var(--royal-light)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon
                      size={22}
                      color={isFeatured ? "#ffffff" : "var(--royal)"}
                    />
                  </div>

                  {/* Category */}
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      color: "var(--navy)",
                      marginBottom: "0.75rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p
                    style={{
                      color: "var(--gray-text)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Benefits preview */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.75rem" }}>
                    {service.benefits.slice(0, 3).map((b) => (
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
                          size={14}
                          color="var(--royal)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
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
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                  >
                    Learn More <ChevronRight size={15} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #services .container > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            #services .container > div:last-child {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 600px) {
            #services .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          PORTFOLIO — Luxury Showcase
      ══════════════════════════════════════════════════════ */}
      <section
        id="portfolio"
        style={{
          background: "var(--navy)",
          padding: "var(--section-py) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at 30% 70%, rgba(41,93,255,0.12) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Section header */}
          <div
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
                <span
                  style={{
                    background: "var(--gradient-gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Projects
                </span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", marginTop: "0.75rem", maxWidth: "480px" }}>
                A selection of our finest work across San Diego County. Every project
                tells a story of precision craftsmanship.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn btn-ghost-white"
              style={{ fontSize: "0.9rem" }}
              id="home-view-all-projects-btn"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Masonry-style portfolio grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto",
              gap: "1rem",
            }}
          >
            {portfolioPreview.map((item, i) => {
              // Custom sizing for masonry feel
              const isTall = i === 0 || i === 3;
              const isWide = i === 1;

              return (
                <Link
                  href="/projects"
                  key={item.id}
                  className="portfolio-item"
                  style={{
                    display: "block",
                    aspectRatio: isTall ? "3/4" : isWide ? "16/9" : "4/3",
                    background: "var(--navy-mid)",
                    gridColumn: isWide ? "span 2" : undefined,
                    gridRow: isTall ? "span 2" : undefined,
                  }}
                  id={`home-portfolio-${item.id}`}
                >
                  <Image
                    src={item.filename.startsWith("http") ? item.filename : `/images/portfolio/${item.filename}`}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="portfolio-overlay" />
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
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: "var(--gold-light)",
                        border: "1px solid rgba(212,168,74,0.4)",
                        color: "var(--gold)",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        marginBottom: "0.35rem",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {item.category}
                    </div>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
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

        <style>{`
          @media (max-width: 900px) {
            #portfolio .container > div:last-child {
              grid-template-columns: 1fr 1fr !important;
            }
            #portfolio .container > div:last-child a[style*="span 2"] {
              grid-column: span 2 !important;
            }
          }
          @media (max-width: 600px) {
            #portfolio .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
            #portfolio .container > div:last-child a {
              grid-column: span 1 !important;
              grid-row: span 1 !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT — Storytelling Layout
      ══════════════════════════════════════════════════════ */}
      <section
        id="about-snippet"
        style={{
          background: "#ffffff",
          padding: "var(--section-py) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Right-side accent */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            background: "var(--surface)",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Left — Stacked Images */}
            <div style={{ position: "relative" }}>
              {/* Main image */}
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Secondary image offset */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-2rem",
                  right: "-2rem",
                  width: "55%",
                  aspectRatio: "4/3",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-xl)",
                  border: "4px solid white",
                }}
              >
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
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.55)",
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
            <div style={{ paddingBottom: "2rem" }}>
              <div className="eyebrow">About Us</div>
              <h2
                style={{
                  color: "var(--navy)",
                  marginBottom: "1.5rem",
                }}
              >
                San Diego&apos;s Trusted
                <br />
                <span style={{ color: "var(--royal)" }}>Painting Experts</span>
              </h2>

              <p
                style={{
                  color: "var(--gray-text)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                HDZ Revamped is a licensed painting and drywall contractor proudly
                serving homeowners and businesses throughout San Diego County. We
                combine skilled craftsmanship with reliable service to deliver results
                you&apos;ll love for years.
              </p>

              <p
                style={{
                  color: "var(--gray-text)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                From interior repaints to full exterior makeovers, drywall repairs to
                kitchen remodels — every project receives the same level of meticulous
                care and attention to detail.
              </p>

              {/* Credential list */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  marginBottom: "2.5rem",
                }}
              >
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
                    >
                      <CheckCircle2 size={13} color="var(--royal)" />
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
                  { num: "500+", label: "Projects" },
                  { num: "10+", label: "Years" },
                  { num: "100%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "1.65rem",
                        fontWeight: 800,
                        color: "var(--navy)",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
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
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #about-snippet .container > div {
              grid-template-columns: 1fr !important;
              gap: 4rem !important;
            }
            #about-snippet .container > div > div:first-child {
              max-width: 520px;
              margin: 0 auto;
            }
          }
          @media (max-width: 600px) {
            #about-snippet .container > div > div:first-child {
              max-width: 100%;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS — New Section: Proven 4-Step Timeline
      ══════════════════════════════════════════════════════ */}
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
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(8,26,55,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              How It Works
            </div>
            <h2 style={{ color: "var(--navy)", marginBottom: "1.25rem" }}>
              Our Proven Process
            </h2>
            <p
              style={{
                color: "var(--gray-text)",
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              We make every project seamless from first contact to final walkthrough.
              Here&apos;s how easy it is to work with us.
            </p>
          </div>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "27px",
                left: "12.5%",
                right: "12.5%",
                height: "2px",
                background: "linear-gradient(to right, var(--royal-light), var(--royal), var(--gold), var(--royal-light))",
                zIndex: 0,
              }}
            />

            {[
              {
                icon: <Search size={22} />,
                step: "01",
                title: "Consultation",
                desc: "We visit your property, assess the scope, and discuss your vision. No pressure, just expertise.",
              },
              {
                icon: <ClipboardList size={22} />,
                step: "02",
                title: "Planning",
                desc: "Receive a detailed written quote, material selections, timeline, and a clear project plan.",
              },
              {
                icon: <Hammer size={22} />,
                step: "03",
                title: "Execution",
                desc: "Our skilled crew executes the work with precision. Your home is protected throughout.",
              },
              {
                icon: <ThumbsUp size={22} />,
                step: "04",
                title: "Final Walkthrough",
                desc: "We walk through every detail with you. We don't leave until you're completely satisfied.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="process-step"
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
                {/* Number circle */}
                <div className="process-number">
                  {item.icon}
                </div>

                {/* Step label */}
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Step {item.step}
                </div>

                <h4
                  style={{
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "var(--gray-text)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="/contact" className="btn btn-primary" id="process-cta-btn">
              Start Your Project Today
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #process .container > div:last-of-type {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2.5rem !important;
            }
            #process .container > div:last-of-type > div::after {
              display: none !important;
            }
          }
          @media (max-width: 600px) {
            #process .container > div:last-of-type {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS — Premium Customer Stories
      ══════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{
          background: "#ffffff",
          padding: "var(--section-py) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background */}
        <div
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
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Testimonials
            </div>
            <h2 style={{ color: "var(--navy)", marginBottom: "1rem" }}>
              What Our Clients Say
            </h2>
            <p
              style={{
                color: "var(--gray-text)",
                fontSize: "1.05rem",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              Real results, real satisfaction. Our work speaks for itself — but
              our clients speak louder.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="testimonials-grid">
            {[
              {
                initials: "MR",
                name: "Maria Rodriguez",
                location: "Escondido, CA",
                project: "Full Interior Repaint",
                text: "HDZ Revamped transformed our entire home interior in just 4 days. The crew was professional, the prep work was meticulous, and the finish is absolutely flawless. We've already referred them to our neighbors.",
                color: "#295DFF",
              },
              {
                initials: "JT",
                name: "James & Sarah Thompson",
                location: "Carlsbad, CA",
                project: "Exterior Painting + Drywall Repair",
                text: "From the free estimate to the final walkthrough, every step exceeded our expectations. They matched our stucco texture perfectly on the repairs — you genuinely can't tell there was ever any damage.",
                color: "#D4A84A",
              },
              {
                initials: "KC",
                name: "Kevin Chen",
                location: "Chula Vista, CA",
                project: "Kitchen Cabinet Refinishing",
                text: "Our kitchen looks like a complete renovation at a fraction of the cost. The cabinet painting is factory-smooth quality. David and his team were on time every day and left the place spotless.",
                color: "#4a7c59",
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "3px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={15}
                      fill="var(--gold)"
                      color="var(--gold)"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p
                  style={{
                    color: "#374151",
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    marginBottom: "1.75rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Project badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    background: "var(--surface)",
                    border: "1px solid var(--gray-border)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--gray-text)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                  }}
                >
                  {t.project}
                </div>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginTop: "auto" }}>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.925rem",
                        color: "var(--navy)",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--gray-text)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        marginTop: "0.1rem",
                      }}
                    >
                      <MapPin size={10} />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "var(--gray-text)",
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
              }}
            >
              Reviews from our satisfied San Diego customers. See our latest work
              on Instagram.
            </p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="home-instagram-btn"
            >
              <InstagramIcon />
              Follow {CONTACT.instagramHandle}
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #testimonials .container > div:nth-child(3) {
              grid-template-columns: 1fr !important;
              max-width: 520px;
              margin: 0 auto 3rem;
            }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER — High-Converting Premium Section
      ══════════════════════════════════════════════════════ */}
      <section
        id="cta-banner"
        style={{
          background: "var(--gradient-hero)",
          padding: "7rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 100%, rgba(212,168,74,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* Floating accent circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(41,93,255,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(212,168,74,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Sparkle eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(212,168,74,0.12)",
              border: "1px solid rgba(212,168,74,0.25)",
              borderRadius: "var(--radius-full)",
              padding: "0.4rem 1.125rem",
              marginBottom: "2rem",
            }}
          >
            <Sparkles size={13} color="var(--gold)" />
            <span
              style={{
                color: "var(--gold)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Plus Jakarta Sans, sans-serif",
              }}
            >
              Free Consultation
            </span>
          </div>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "1.25rem",
              maxWidth: "640px",
              margin: "0 auto 1.25rem",
            }}
          >
            Ready to Love{" "}
            <span
              style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Home
            </span>{" "}
            Again?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "1.1rem",
              marginBottom: "3rem",
              maxWidth: "520px",
              margin: "0 auto 3rem",
              lineHeight: 1.75,
            }}
          >
            Get a free consultation and discover how our craftsmanship can
            transform your space. No obligation, no pressure — just exceptional
            results.
          </p>

          <div
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
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="btn btn-ghost-white"
              id="cta-call-btn"
              style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
            >
              <Phone size={18} />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.75rem",
            }}
          >
            {[
              { icon: <Shield size={14} />, label: "Licensed & Insured" },
              { icon: <MapPin size={14} />, label: "San Diego County" },
              { icon: <Users size={14} />, label: "500+ Happy Clients" },
              { icon: <Award size={14} />, label: "10+ Years Experience" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "rgba(212,168,74,0.8)" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
