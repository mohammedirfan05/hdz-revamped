"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Shield } from "lucide-react";
import { CONTACT } from "@/data/siteData";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
        style={{
          background: scrolled
            ? "rgba(8,26,55,0.95)"
            : "linear-gradient(to bottom, rgba(8,26,55,0.85) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 8px 32px rgba(8,26,55,0.3)" : "none",
        }}
      >
        <div className="container">
          <nav
            className="flex items-center justify-between"
            style={{ height: "64px" }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              onClick={() => setIsOpen(false)}
              aria-label="HDZ Revamped - Home"
            >
              <div style={{ position: "relative", width: "44px", height: "44px" }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="HDZ Revamped Logo"
                  fill
                  sizes="44px"
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                  priority
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    display: "block",
                    lineHeight: 1.1,
                  }}
                >
                  HDZ Revamped
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Painting & Drywall
                </span>
              </div>
            </Link>

            {/* Desktop Nav — Pill Container */}
            <div
              className="hidden md:flex items-center"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius-full)",
                padding: "0.375rem",
                gap: "0.25rem",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.45rem 1.1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    transition: "all 0.2s ease",
                    letterSpacing: "-0.01em",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                  className="nav-link-pill"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* License badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "var(--gold-light)",
                  border: "1px solid rgba(212,168,74,0.3)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.35rem 0.875rem",
                }}
              >
                <Shield size={12} color="var(--gold)" />
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Lic. {CONTACT.license}
                </span>
              </div>

              <a
                href={`tel:${CONTACT.phone}`}
                id="navbar-call-btn"
                aria-label={`Call HDZ Revamped at ${CONTACT.phoneDisplay}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "color 0.15s ease",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                className="hover:text-white"
              >
                <Phone size={15} strokeWidth={2.5} />
                {CONTACT.phoneDisplay}
              </a>

              <Link
                href="/contact"
                className="btn btn-gold"
                style={{ padding: "0.55rem 1.35rem", fontSize: "0.875rem", minHeight: "40px" }}
                id="navbar-quote-btn"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="flex md:hidden items-center justify-center"
              style={{
                color: "#ffffff",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                width: "44px",
                height: "44px",
                backdropFilter: "blur(8px)",
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,26,55,0.6)",
            zIndex: 40,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(340px, 92vw)",
          background: "var(--navy)",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-16px 0 64px rgba(8,26,55,0.5)",
          display: "flex",
          flexDirection: "column",
          padding: "6rem 1.75rem 2.5rem",
          overflowY: "auto",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            padding: "0.5rem",
            borderRadius: "10px",
            color: "#ffffff",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        {/* Mobile Brand */}
        <div
          style={{
            position: "absolute",
            top: "1.35rem",
            left: "1.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
          }}
        >
          <div style={{ position: "relative", width: "36px", height: "36px" }}>
            <Image
              src="/images/logo/logo.png"
              alt="HDZ Revamped"
              fill
              sizes="36px"
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <span
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#fff",
              letterSpacing: "-0.025em",
            }}
          >
            HDZ Revamped
          </span>
        </div>

        {/* Mobile Nav Links */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "0.875rem 1.25rem",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.82)",
                  transition: "all 0.2s ease",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  letterSpacing: "-0.02em",
                }}
                className="mobile-nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTAs */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div
            style={{
              background: "rgba(212,168,74,0.08)",
              border: "1px solid rgba(212,168,74,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Shield size={14} color="var(--gold)" />
            <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600 }}>
              CA Licensed Contractor {CONTACT.license}
            </span>
          </div>

          <a
            href={`tel:${CONTACT.phone}`}
            id="mobile-call-btn"
            className="btn btn-ghost-white"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsOpen(false)}
          >
            <Phone size={17} />
            {CONTACT.phoneDisplay}
          </a>

          <Link
            href="/contact"
            className="btn btn-gold"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsOpen(false)}
            id="mobile-quote-btn"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "72px" }} aria-hidden="true" />

      <style>{`
        .nav-link-pill:hover {
          background: rgba(255,255,255,0.12) !important;
          color: #ffffff !important;
        }
        .mobile-nav-link:hover {
          background: rgba(255,255,255,0.07) !important;
          color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
