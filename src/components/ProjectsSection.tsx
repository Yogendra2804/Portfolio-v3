"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/data";
import { FiGithub, FiExternalLink, FiArrowRight, FiPlay } from "react-icons/fi";

// 3D tilt card
function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX: hovered ? rotateX : 0,
          rotateY: hovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          background: "var(--bg-card)",
          borderRadius: 16,
          overflow: "hidden",
          border: hovered
            ? `1px solid ${project.color}50`
            : "1px solid var(--border)",
          boxShadow: hovered
            ? `0 30px 70px rgba(0,0,0,0.5), 0 0 40px ${project.color}20`
            : "0 10px 30px rgba(0,0,0,0.3)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Project image */}
        <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
          <motion.div
            animate={hovered ? { scale: 1.06 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ height: "100%", position: "relative" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Image overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.95) 100%)`,
            }}
          />

          {/* Color accent top border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: project.color,
              boxShadow: `0 0 20px ${project.color}80`,
            }}
          />

          {/* GitHub link overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              display: "flex",
              gap: 8,
            }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                background: "rgba(10,10,15,0.85)",
                backdropFilter: "blur(10px)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FiGithub size={16} />
            </a>
          </motion.div>
        </div>

        {/* Card content */}
        <div style={{ padding: "20px 22px 22px" }}>
          <h3
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 13,
              lineHeight: 1.65,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 18,
            }}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                flex: 1,
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = project.color;
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              <FiGithub size={14} />
              GitHub
            </motion.a>

            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 14px",
                  background: project.color,
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {project.liveLabel === "Watch Demo"
                  ? <FiPlay size={14} />
                  : <FiExternalLink size={14} />}
                {project.liveLabel ?? "Live Demo"}
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          top: "20%",
          right: "-20%",
        }}
      />

      {/* Transition indicator from hero — matching the reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{
          textAlign: "center",
          marginBottom: 80,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            background: "var(--glass)",
            border: "1px solid var(--border)",
            borderRadius: 100,
            marginBottom: 40,
            backdropFilter: "blur(16px)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--purple)",
              boxShadow: "0 0 12px var(--purple)",
            }}
          />
          <span
            style={{
              color: "var(--text-secondary)",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Featured Projects
          </span>
        </div>
      </motion.div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p className="section-label">Selected Work</p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: -1.5,
                color: "white",
              }}
            >
              Projects I&apos;m proud of
            </h2>
          </div>

          <motion.a
            href="https://github.com/Yogendra2804"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--text-secondary)",
              fontSize: 13,
              fontWeight: 500,
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
            View all projects
            <FiArrowRight size={15} />
          </motion.a>
        </motion.div>

        {/* Projects grid — 5 cards matching reference */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
