"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
        style={{
          background: scrolled
            ? "rgba(8,26,55,0.96)"
            : "linear-gradient(to bottom, rgba(8,26,55,0.9) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(6px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(6px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(8,26,55,0.25)" : "none",
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px" }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="HDZ Revamped Logo"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  priority
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
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
                    fontSize: "0.62rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Painting &amp; Drywall
                </span>
              </div>
            </Link>

            {/* Desktop Nav — Pill Container */}
            <nav
              aria-label="Site navigation"
              className="hidden md:flex items-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "var(--radius-full)",
                padding: "0.35rem",
                gap: "0.2rem",
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link-pill"
                    aria-current={active ? "page" : undefined}
                    style={
                      active
                        ? {
                            background: "rgba(255,255,255,0.13)",
                            color: "#ffffff",
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* License badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.3rem 0.85rem",
                }}
              >
                <Shield size={11} color="var(--gold)" aria-hidden="true" />
                <span
                  style={{
                    fontSize: "0.67rem",
                    color: "var(--gold)",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "Outfit, sans-serif",
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
                  color: "rgba(255,255,255,0.82)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "color 0.15s ease",
                  fontFamily: "Outfit, sans-serif",
                }}
                className="hover:text-white"
              >
                <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>

              <Link
                href="/contact"
                className="btn btn-gold"
                style={{ padding: "0.5rem 1.3rem", fontSize: "0.875rem", minHeight: "40px" }}
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
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: "10px",
                width: "44px",
                height: "44px",
                backdropFilter: "blur(8px)",
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(8,26,55,0.55)",
            zIndex: 40,
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(340px, 92vw)",
          background: "var(--navy)",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-20px 0 80px rgba(8,26,55,0.5)",
          display: "flex",
          flexDirection: "column",
          padding: "5.5rem 1.75rem 2.5rem",
          overflowY: "auto",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}
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
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
          aria-label="Close menu"
        >
          <X size={18} aria-hidden="true" />
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px" }}>
            <Image
              src="/images/logo/logo.png"
              alt="HDZ Revamped"
              width={34}
              height={34}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <span
            style={{
              fontFamily: "Outfit, sans-serif",
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
        <nav aria-label="Mobile navigation">
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link, idx) => (
              <li
                key={link.href}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "none" : "translateX(20px)",
                  transition: `opacity 0.3s ease ${idx * 0.05 + 0.1}s, transform 0.3s ease ${idx * 0.05 + 0.1}s`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTAs */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "var(--radius-md)",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Shield size={13} color="var(--gold)" aria-hidden="true" />
            <span style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600, fontFamily: "Outfit, sans-serif" }}>
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
            <Phone size={16} aria-hidden="true" />
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

      {/* Navbar height spacer */}
      <div style={{ height: "var(--navbar-h)" }} aria-hidden="true" />
    </>
  );
}
