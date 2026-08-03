"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import { FiExternalLink } from "react-icons/fi";

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  index,
  inView,
  color = "var(--purple)",
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
  inView: boolean;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
      style={{
        position: "relative",
        paddingLeft: 48,
        paddingBottom: 40,
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 4,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: color,
          border: "3px solid var(--bg-secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 20px ${color}60`,
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "white",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Timeline line */}
      <div
        style={{
          position: "absolute",
          left: 15,
          top: 36,
          bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, var(--purple)40, transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          padding: "20px 24px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${color}10`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div>
            <h3
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 3,
              }}
            >
              {title}
            </h3>
            <p style={{ color, fontSize: 13, fontWeight: 600 }}>{subtitle}</p>
          </div>
          <span
            style={{
              padding: "4px 12px",
              background: `${color}15`,
              border: `1px solid ${color}30`,
              borderRadius: 100,
              fontSize: 11,
              color: color,
              fontWeight: 600,
              fontFamily: "JetBrains Mono, monospace",
              whiteSpace: "nowrap",
            }}
          >
            {period}
          </span>
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: 13.5,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 70 }}
        >
          <p className="section-label" style={{ justifyContent: "center" }}>
            My Journey
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              letterSpacing: -1.5,
              color: "white",
            }}
          >
            Experience &amp; Education
          </h2>
        </motion.div>

        {/* Two columns */}
        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
        >
          {/* Experience column */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              style={{
                color: "var(--text-muted)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Experience &amp; Achievements
            </motion.h3>

            {experience.map((exp, i) => (
              <TimelineItem
                key={exp.id}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                description={exp.description}
                index={i}
                inView={inView}
                color="var(--purple)"
              />
            ))}

            {/* Certifications */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                color: "var(--text-muted)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                marginTop: 8,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Certifications
            </motion.h3>

            {certifications.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (i + 1) * 0.12, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  marginBottom: 12,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}50`;
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                {/* Icon bubble */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: 13,
                      marginBottom: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.title}
                  </p>
                  <p style={{ color: cert.color, fontSize: 11, fontWeight: 600 }}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>

                {/* Link icon */}
                <FiExternalLink
                  size={14}
                  style={{ color: "var(--text-muted)", flexShrink: 0 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Education column */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                color: "var(--text-muted)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 24,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Education
            </motion.h3>

            {education.map((edu, i) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                subtitle={`${edu.institution} · ${edu.location}`}
                period={edu.period}
                description={`${edu.grade}. ${
                  i === 0
                    ? "Specializing in Computer Science Engineering with coursework in DSA, System Design, and Applied ML."
                    : "Completed foundational academic education with strong fundamentals."
                }`}
                index={i}
                inView={inView}
                color="#2563eb"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
