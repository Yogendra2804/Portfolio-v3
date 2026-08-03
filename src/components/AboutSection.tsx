"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { aboutText, education, certifications } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "8.14", label: "CGPA", suffix: "/10" },
    { value: "5+", label: "Projects", suffix: "" },
    { value: "2+", label: "Certifications", suffix: "" },
    { value: "2027", label: "Graduation", suffix: "" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left — Code snippet / visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
            style={{ position: "relative" }}
          >
            {/* Code image */}
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px var(--purple-glow-soft)",
              }}
            >
              <Image
                src="/images/hero-code.png"
                alt="Code screenshot"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* Code overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(10,10,15,0.8) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Editor toolbar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 36,
                  background: "rgba(15,15,22,0.9)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 14px",
                  gap: 8,
                }}
              >
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating stats cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 16,
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "16px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                    <span style={{ fontSize: 14 }}>{stat.suffix}</span>
                  </div>
                  <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 2 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
          >
            {/* Section label */}
            <p className="section-label">Dive in</p>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 46px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: -1.5,
                marginBottom: 16,
                color: "white",
              }}
            >
              Building solutions{" "}
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, white, var(--text-secondary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                line by line.
              </span>
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 14.5,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              {aboutText}
            </p>

            {/* Education */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 12,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Education
              </p>
              {education.slice(0, 2).map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 16px",
                    background: "var(--glass-light)",
                    borderRadius: 10,
                    marginBottom: 8,
                    border: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: 18, lineHeight: 1 }}>{edu.icon}</span>
                  <div>
                    <p style={{ color: "white", fontWeight: 600, fontSize: 13 }}>
                      {edu.institution}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
                      {edu.degree} · {edu.period}
                    </p>
                    <p style={{ color: "var(--purple-light)", fontSize: 12, fontWeight: 600 }}>
                      {edu.grade}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 12,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Certifications
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      fontSize: 12,
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span>{cert.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, color: "white", fontSize: 11 }}>
                        {cert.title}
                      </div>
                      <div style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {cert.issuer} · {cert.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
