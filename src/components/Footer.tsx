"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        padding: "56px 5% 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
            alignItems: "start",
          }}
        >
          {/* Logo & tagline */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 18,
                color: "white",
                marginBottom: 12,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(124,58,237,0.4)",
              }}
              onClick={() => scrollTo("#home")}
            >
              YG
            </motion.div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 12,
                lineHeight: 1.6,
                maxWidth: 160,
              }}
            >
              © {year} Yogendra Gupta.{" "}
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
              }}
            >
              Navigate
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.slice(0, 3).map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ x: 4 }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* More nav */}
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
                opacity: 0,
              }}
            >
              _
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.slice(3).map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ x: 4 }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    fontFamily: "Inter, sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 14,
                marginBottom: 16,
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <FiGithub size={14} />, label: "GitHub", href: personalInfo.github },
                { icon: <FiLinkedin size={14} />, label: "LinkedIn", href: personalInfo.linkedin },
                {
                  icon: <FiMail size={14} />,
                  label: "Email",
                  href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--border)",
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            Built with Next.js, TypeScript &amp; Framer Motion
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            Available for opportunities and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
}
