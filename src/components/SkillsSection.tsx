"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categories = ["All", "Languages", "Backend", "Frontend", "AI/ML", "Cloud", "Tools"];

const categoryColors: Record<string, string> = {
  Languages: "#7c3aed",
  Backend: "#059669",
  Frontend: "#2563eb",
  "AI/ML": "#d97706",
  Cloud: "#dc2626",
  Tools: "#7c3aed",
};

function SkillCard({
  name,
  category,
  level,
  index,
  inView,
}: {
  name: string;
  category: string;
  level: number;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[category] || "#7c3aed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.04, y: -4 }}
      style={{
        background: hovered
          ? `rgba(${color === "#7c3aed" ? "124,58,237" : color === "#059669" ? "5,150,105" : color === "#2563eb" ? "37,99,235" : color === "#d97706" ? "217,119,6" : "220,38,38"},0.08)`
          : "var(--bg-card)",
        border: hovered
          ? `1px solid ${color}40`
          : "1px solid var(--border)",
        borderRadius: 14,
        padding: "18px 20px",
        cursor: "default",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow on hover */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at top left, ${color}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Category chip */}
      <div
        style={{
          display: "inline-flex",
          padding: "3px 8px",
          borderRadius: 6,
          background: `${color}15`,
          border: `1px solid ${color}30`,
          color: color,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: 0.5,
          marginBottom: 10,
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        {category}
      </div>

      {/* Skill name */}
      <div
        style={{
          color: "white",
          fontWeight: 700,
          fontSize: 15,
          marginBottom: 12,
        }}
      >
        {name}
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: 4,
          background: "var(--border)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.04 + 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={{
            height: "100%",
            background: `linear-gradient(to right, ${color}, ${color}aa)`,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Level text */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
        }}
      >
        <span style={{ color: "var(--text-muted)", fontSize: 11 }}>Proficiency</span>
        <span style={{ color, fontSize: 11, fontWeight: 700 }}>{level}%</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          bottom: "-20%",
          left: "-15%",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <p className="section-label" style={{ justifyContent: "center" }}>
            Technical Arsenal
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              letterSpacing: -1.5,
              color: "white",
              marginBottom: 12,
            }}
          >
            Skills &amp; Technologies
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                border:
                  activeCategory === cat
                    ? "1px solid var(--purple)"
                    : "1px solid var(--border)",
                background:
                  activeCategory === cat
                    ? "var(--purple)"
                    : "transparent",
                color: activeCategory === cat ? "white" : "var(--text-secondary)",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.name}
              {...skill}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
