"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PORTFOLIO } from "@/data/siteData";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const CATEGORIES = ["All", "Interior", "Exterior", "Drywall", "Kitchen", "Concrete"];

const PAIRS_CONFIG = [
  { after: 1, before: 2 },
];

type PortfolioItem = typeof PORTFOLIO[0];

interface PairedProject {
  type: "paired";
  id: string;
  category: string;
  after: PortfolioItem;
  before: PortfolioItem;
}

interface SingleProject {
  type: "single";
  id: string;
  category: string;
  item: PortfolioItem;
}

type ProjectDisplay = PairedProject | SingleProject;

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  // Group portfolio items into paired and single
  const processedProjects = useMemo(() => {
    const projects: ProjectDisplay[] = [];
    const processedIds = new Set<number>();

    // First process pairs
    PAIRS_CONFIG.forEach((pair) => {
      const afterItem = PORTFOLIO.find((p) => p.id === pair.after);
      const beforeItem = PORTFOLIO.find((p) => p.id === pair.before);
      if (afterItem && beforeItem) {
        projects.push({
          type: "paired",
          id: `pair-${afterItem.id}-${beforeItem.id}`,
          category: afterItem.category,
          after: afterItem,
          before: beforeItem,
        });
        processedIds.add(afterItem.id);
        processedIds.add(beforeItem.id);
      }
    });

    // Then add the rest
    PORTFOLIO.forEach((item) => {
      if (!processedIds.has(item.id)) {
        projects.push({
          type: "single",
          id: `single-${item.id}`,
          category: item.category,
          item,
        });
      }
    });

    return projects;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return processedProjects;
    return processedProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory, processedProjects]);

  const openLightbox = useCallback((item: PortfolioItem) => {
    setLightboxItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
    document.body.style.overflow = "";
  }, []);

  const getImageUrl = (src: string) => {
    if (src.startsWith("http")) return src;
    return `/images/portfolio/${src}`;
  };

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero pb-20 pt-32 lg:pt-40 text-center">
        <div className="container relative z-10">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              color: "var(--gold)",
              background: "rgba(212,168,74,0.15)",
              border: "1px solid rgba(212,168,74,0.3)",
            }}
          >
            Portfolio
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Our Masterpieces
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the HDZ Revamped difference. Drag the sliders to see our stunning before &amp; after transformations across San Diego County.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────── */}
      <div className="projects-filter-bar">
        <div className="container px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none items-center justify-start md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase()}`}
                className={`projects-filter-btn ${
                  activeCategory === cat ? "projects-filter-btn--active" : ""
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="projects-filter-count">
                    ({filtered.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID ──────────────────────────────────────── */}
      <section className="projects-gallery-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filtered.map((project) => {
                if (project.type === "paired") {
                  return (
                    <div
                      key={project.id}
                      className="projects-card projects-card--paired"
                    >
                      {/* Before/After Slider fills the image zone */}
                      <div className="projects-card__media">
                        <BeforeAfterSlider
                          beforeImage={project.before.filename}
                          afterImage={project.after.filename}
                          beforeAlt={project.before.alt}
                          afterAlt={project.after.alt}
                        />
                      </div>
                      {/* Info overlay — lives outside the media box */}
                      <div className="projects-card__info">
                        <span className="projects-card__badge projects-card__badge--gold">
                          {project.category} Transformation
                        </span>
                        <h3 className="projects-card__title">
                          {project.after.title}
                        </h3>
                      </div>
                    </div>
                  );
                }

                // Single Project
                return (
                  <button
                    key={project.id}
                    onClick={() => openLightbox(project.item)}
                    className="projects-card projects-card--single"
                    aria-label={`View ${project.item.title}`}
                  >
                    {/* Image zone */}
                    <div className="projects-card__media">
                      <Image
                        src={getImageUrl(project.item.filename)}
                        alt={project.item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="projects-card__overlay" />
                      {/* Zoom icon */}
                      <div className="projects-card__zoom-icon">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                          <ZoomIn size={24} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    {/* Info — below image, not overlapping */}
                    <div className="projects-card__info">
                      <span className="projects-card__badge">
                        {project.category}
                      </span>
                      <h3 className="projects-card__title">
                        {project.item.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="projects-cta-section">
        <div className="container mx-auto px-4">
          <div className="projects-cta-box">
            {/* Decorative radial glow — pointer-events-none, behind everything */}
            <div className="projects-cta-glow" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="projects-cta-heading">
                Impressed by the results?
              </h2>
              <p className="projects-cta-subtext">
                Let&apos;s create the next stunning transformation together. Get in touch for a free, no-pressure quote.
              </p>
              <Link
                href="/contact"
                className="projects-cta-btn"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX (Only for Single Projects) ─────────────── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          style={{ animation: "fadeIn 0.3s ease" }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl px-4 md:px-12 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              style={{ aspectRatio: "16/9" }}>
              <Image
                src={getImageUrl(lightboxItem.filename)}
                alt={lightboxItem.alt}
                fill
                sizes="100vw"
                className="object-contain bg-black/50"
                priority
              />
            </div>

            <div className="text-center text-white px-4">
              <h3 className="text-xl md:text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-1">{lightboxItem.title}</h3>
              <p className="text-white/60 tracking-wider text-sm uppercase">{lightboxItem.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE-SCOPED STYLES ─────────────────────────────── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Filter Bar ─────────────────────── */
        .projects-filter-bar {
          position: sticky;
          top: 72px;
          z-index: 30;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 12px rgba(8,26,55,0.07);
        }

        .projects-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.25s ease;
          cursor: pointer;
          border: 1.5px solid #e2e8f0;
          background: transparent;
          color: #475569;
          font-family: inherit;
        }

        .projects-filter-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          color: #1e293b;
        }

        .projects-filter-btn--active {
          background: #295DFF !important;
          color: #ffffff !important;
          border-color: #295DFF !important;
          box-shadow: 0 4px 14px rgba(41,93,255,0.35);
          transform: scale(1.04);
        }

        .projects-filter-count {
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0.85;
        }

        /* ── Gallery Section ────────────────── */
        .projects-gallery-section {
          padding: 4rem 0 5rem;
          background: #f4f6fb;
        }

        /* ── Bento Grid ─────────────────────── */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        /* ── Cards ──────────────────────────── */
        .projects-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(8,26,55,0.08);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          text-align: left;
          cursor: default;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .projects-card--single {
          cursor: zoom-in;
        }

        .projects-card:hover {
          box-shadow: 0 12px 36px rgba(8,26,55,0.14);
          transform: translateY(-3px);
        }

        /* Paired card spans 2 cols on md+ */
        .projects-card--paired {
          grid-column: 1 / -1;
        }

        @media (min-width: 640px) {
          .projects-card--paired {
            grid-column: span 2;
          }
        }

        @media (min-width: 1024px) {
          .projects-card--paired {
            grid-column: span 2;
          }
        }

        /* ── Card media zone ────────────────── */
        .projects-card__media {
          position: relative;
          width: 100%;
          /* 4:3 — much friendlier to portrait/near-square photos than 16:9 */
          aspect-ratio: 4 / 3;
          overflow: hidden;
          flex-shrink: 0;
          background: #e2e8f0;
        }

        /* Paired slider gets a slightly taller box (3:2) so both portrait
           bedroom images align better with less aggressive cropping */
        .projects-card--paired .projects-card__media {
          aspect-ratio: 3 / 2;
        }

        /* Overlay gradient on single cards */
        .projects-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,26,55,0.55) 0%, rgba(8,26,55,0.15) 55%, transparent 100%);
          opacity: 0.7;
          transition: opacity 0.3s ease;
          z-index: 1;
          pointer-events: none;
        }

        .projects-card--single:hover .projects-card__overlay {
          opacity: 0.9;
        }

        /* Zoom icon hover reveal */
        .projects-card__zoom-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
          pointer-events: none;
        }

        .projects-card--single:hover .projects-card__zoom-icon {
          opacity: 1;
        }

        /* ── Card info zone ─────────────────── */
        .projects-card__info {
          padding: 1rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        /* ── Badge pill ─────────────────────── */
        .projects-card__badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(41,93,255,0.1);
          color: #295DFF;
          border: 1px solid rgba(41,93,255,0.2);
        }

        .projects-card__badge--gold {
          background: rgba(212,168,74,0.12);
          color: #a07820;
          border-color: rgba(212,168,74,0.35);
        }

        /* ── Card title ─────────────────────── */
        .projects-card__title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0d1b2e;
          line-height: 1.35;
          margin: 0;
          letter-spacing: -0.015em;
        }

        @media (min-width: 1024px) {
          .projects-card__info {
            padding: 1.1rem 1.5rem 1.4rem;
          }
          .projects-card__title {
            font-size: 1.05rem;
          }
        }

        /* ── CTA Section ────────────────────── */
        .projects-cta-section {
          padding: 5rem 0 6rem;
          background: #f4f6fb;
        }

        .projects-cta-box {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          background: #081A37;
          padding: 4rem 2rem;
          text-align: center;
          box-shadow: 0 24px 80px rgba(8,26,55,0.25);
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .projects-cta-box {
            padding: 5.5rem 4rem;
          }
        }

        .projects-cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 20%, rgba(41,93,255,0.25) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }

        .projects-cta-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.75rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.25rem;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .projects-cta-subtext {
          font-size: 1rem;
          color: rgba(255,255,255,0.78);
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
        }

        @media (min-width: 768px) {
          .projects-cta-subtext {
            font-size: 1.1rem;
          }
        }

        .projects-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.25rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #D4A84A 0%, #e8c56e 100%);
          color: #081A37;
          font-weight: 800;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(212,168,74,0.35);
          text-decoration: none;
        }

        .projects-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(212,168,74,0.45);
        }
      `}</style>
    </>
  );
}
