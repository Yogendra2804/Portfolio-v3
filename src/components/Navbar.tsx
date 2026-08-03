"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          background: scrolled
            ? "rgba(10, 10, 15, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ cursor: "pointer" }}
          onClick={() => scrollTo("#home")}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              color: "white",
              letterSpacing: -0.5,
              boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
            }}
          >
            YG
          </div>
        </motion.div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Desktop Nav Links */}
        <div
          style={{
            alignItems: "center",
            gap: 4,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  position: "relative",
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: isActive
                    ? "rgba(124, 58, 237, 0.12)"
                    : "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: isActive ? "white" : "#d4d4e8",
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  transition: "all 0.2s ease",
                  fontFamily: "Inter, sans-serif",
                  textShadow: isActive ? "none" : "0 1px 4px rgba(0,0,0,0.8)",
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(124, 58, 237, 0.08)",
                      borderRadius: 8,
                      border: "1px solid rgba(124, 58, 237, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "8px",
            cursor: "pointer",
            color: "var(--text-primary)",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "currentColor",
              borderRadius: 1,
              transition: "transform 0.3s",
              transformOrigin: "center",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "currentColor",
              borderRadius: 1,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "currentColor",
              borderRadius: 1,
              transition: "transform 0.3s",
              transformOrigin: "center",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "var(--nav-height)",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(10, 10, 15, 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              padding: "16px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 16px",
                  background:
                    activeSection === link.href.replace("#", "")
                      ? "rgba(124, 58, 237, 0.12)"
                      : "transparent",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "white"
                      : "#d4d4e8",
                  fontSize: 15,
                  fontWeight:
                    activeSection === link.href.replace("#", "") ? 600 : 500,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 4,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
