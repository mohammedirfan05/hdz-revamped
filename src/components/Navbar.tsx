"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
        )}
        style={{ borderBottom: scrolled ? "none" : undefined }}
      >
        <div className="container">
          <nav
            className="flex items-center justify-between"
            style={{ height: "72px" }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              onClick={() => setIsOpen(false)}
              aria-label="HDZ Revamped - Home"
            >
              <div style={{ position: "relative", width: "48px", height: "48px" }}>
                <Image
                  src="/images/logo/logo.png"
                  alt="HDZ Revamped Logo"
                  fill
                  sizes="48px"
                  style={{ objectFit: "contain" }}
                  priority
                  onError={(e) => {
                    // fallback if logo not found yet
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "var(--navy)",
                    letterSpacing: "-0.02em",
                    display: "block",
                    lineHeight: 1.1,
                  }}
                >
                  HDZ Revamped
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--blue)",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Painting & Drywall
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul
              className="hidden md:flex items-center gap-1"
              style={{ listStyle: "none" }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      padding: "0.5rem 0.85rem",
                      borderRadius: "8px",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--navy)",
                      transition: "all 0.15s ease",
                      display: "block",
                    }}
                    className="hover:text-blue-600 hover:bg-blue-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${CONTACT.phone}`}
                id="navbar-call-btn"
                aria-label={`Call HDZ Revamped at ${CONTACT.phoneDisplay}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--navy)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "8px",
                  transition: "all 0.15s ease",
                }}
                className="hover:text-blue-600 hover:bg-blue-50"
              >
                <Phone size={16} strokeWidth={2.5} />
                {CONTACT.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: "0.6rem 1.25rem", fontSize: "0.9rem" }}
                id="navbar-quote-btn"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex md:hidden items-center justify-center p-2 rounded-lg"
              style={{
                color: "var(--navy)",
                border: "1.5px solid var(--gray-border)",
                width: "44px",
                height: "44px",
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(26,26,46,0.4)",
            zIndex: 40,
            backdropFilter: "blur(2px)",
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
          width: "min(320px, 90vw)",
          background: "var(--white)",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          padding: "5.5rem 1.5rem 2rem",
          overflowY: "auto",
        }}
        aria-hidden={!isOpen}
      >
        {/* Close Button inside drawer */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            padding: "0.5rem",
            borderRadius: "8px",
            color: "var(--navy)",
            border: "1.5px solid var(--gray-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Mobile Nav Links */}
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "var(--navy)",
                  transition: "all 0.15s ease",
                }}
                className="hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <a
            href={`tel:${CONTACT.phone}`}
            id="mobile-call-btn"
            className="btn btn-secondary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() => setIsOpen(false)}
            id="mobile-quote-btn"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: "72px" }} aria-hidden="true" />
    </>
  );
}
