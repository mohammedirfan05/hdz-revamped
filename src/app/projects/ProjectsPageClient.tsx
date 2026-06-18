"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, ZoomIn } from "lucide-react";
import { PORTFOLIO } from "@/data/siteData";

const CATEGORIES = ["All", "Interior", "Exterior", "Drywall", "Kitchen", "Concrete"];

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeCategory);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : 0));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
    );
  }, [filtered.length]);

  const activeLightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
            Our Work
          </span>
          <h1 style={{ color: "#fff", marginTop: "0.75rem", marginBottom: "1rem" }}>
            Our Projects
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            See the HDZ Revamped difference — before &amp; after painting and drywall
            transformations throughout San Diego County.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", borderBottom: "1px solid var(--gray-border)", position: "sticky", top: "72px", zIndex: 30 }}>
        <div className="container" style={{ padding: "0 1.25rem" }}>
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              overflowX: "auto",
              padding: "0.875rem 0",
              scrollbarWidth: "none",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase()}`}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "100px",
                  border: "1.5px solid",
                  borderColor: activeCategory === cat ? "var(--blue)" : "var(--gray-border)",
                  background: activeCategory === cat ? "var(--blue)" : "transparent",
                  color: activeCategory === cat ? "#fff" : "var(--navy)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <span style={{ marginLeft: "0.4rem", fontSize: "0.75rem", opacity: 0.85 }}>
                    ({filtered.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ──────────────────────────────────────── */}
      <section className="section-padding" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--gray-text)" }}>
              <p>No projects in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  id={`portfolio-item-${item.id}`}
                  aria-label={`View ${item.title} — click to enlarge`}
                  style={{
                    position: "relative",
                    display: "block",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    background: "var(--navy)",
                    cursor: "zoom-in",
                    border: "none",
                    padding: 0,
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <Image
                    src={`/images/portfolio/${item.filename}`}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    className="gallery-img"
                  />

                  {/* Hover overlay */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(26,26,46,0.6)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ZoomIn size={36} color="#fff" strokeWidth={1.5} />
                  </div>

                  {/* Bottom info */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1rem 1.1rem 0.9rem",
                      background: "linear-gradient(to top, rgba(26,26,46,0.85) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "100px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        background: item.label === "Before" ? "rgba(245, 158, 11, 0.9)" : "rgba(43,93,232,0.9)",
                        color: "#fff",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.label}
                    </span>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>
                      {item.title}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem" }}>
                      {item.category}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        button:hover .gallery-img { transform: scale(1.06); }
        button:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>

      {/* ── LIGHTBOX ──────────────────────────────────────────── */}
      {activeLightboxItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            id="lightbox-close-btn"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
            }}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            id="lightbox-prev-btn"
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            id="lightbox-next-btn"
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "80vh",
              aspectRatio: "4/3",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <Image
              src={`/images/portfolio/${activeLightboxItem.filename}`}
              alt={activeLightboxItem.alt}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Caption */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "8px",
              padding: "0.6rem 1.25rem",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.15rem 0.5rem",
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 700,
                background: activeLightboxItem.label === "Before" ? "rgba(245,158,11,0.9)" : "rgba(43,93,232,0.9)",
                marginRight: "0.5rem",
              }}
            >
              {activeLightboxItem.label}
            </span>
            <strong>{activeLightboxItem.title}</strong>
            {" · "}
            <span style={{ opacity: 0.75 }}>{activeLightboxItem.category}</span>
            {lightboxIndex !== null && (
              <span style={{ opacity: 0.5, marginLeft: "0.75rem", fontSize: "0.8rem" }}>
                {lightboxIndex + 1} / {filtered.length}
              </span>
            )}
          </div>
        </div>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%)",
          padding: "5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Get in touch today for a free quote. We&apos;d love to bring the same quality
            results to your home or business.
          </p>
          <Link href="/contact" className="btn btn-white" id="projects-cta-btn" style={{ fontSize: "1.05rem" }}>
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
