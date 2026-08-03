"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";

// ─── Role tags rendered individually with bullet prefix ───────────────────────
const ROLES = ["Software Engineer", "Backend Developer", "AI Enthusiast"];

// ─── Social links ─────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
    icon: FiMail,
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — disabled when prefers-reduced-motion
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "18%"]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "25%"]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Shared animation variants
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  });

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#050508",
      }}
    >
      {/* ── Background desk image with parallax ─────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          y: imageY,
          // slightly oversized so parallax doesn't expose edges
          top: "-8%",
          bottom: "-8%",
        }}
      >
        <Image
          src="/images/hero-desk.png"
          alt="Developer desk setup with warm lamp, laptop and coffee mug"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        {/* Dark cinematic bottom gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,5,8,0.15) 0%, rgba(5,5,8,0.55) 45%, rgba(5,5,8,0.88) 70%, #050508 92%)",
          }}
        />

        {/* Strong left gradient — text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(5,5,8,0.93) 0%, rgba(5,5,8,0.72) 30%, rgba(5,5,8,0.3) 55%, transparent 72%)",
          }}
        />

        {/* Warm lamp glow — top right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 38% 40% at 88% 12%, rgba(255,175,60,0.13) 0%, transparent 70%)",
          }}
        />

        {/* Purple ambient glow — mid center-left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 45% at 25% 65%, rgba(124,58,237,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Corner vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </motion.div>

      {/* ── Right side: Laptop + Portrait Frame ─────────────────────────── */}
      {/* This column sits absolutely on the right, centred vertically      */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        style={{
          position: "absolute",
          // Centre vertically, offset slightly upward from midpoint
          top: "50%",
          right: "clamp(2%, 4vw, 6%)",
          transform: "translateY(-52%)",
          zIndex: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 20,
          // hide on small screens to avoid overlap with text
          // (handled via inline media — CSS class added below)
          pointerEvents: "none",
        }}
        className="hero-right-col"
      >
        {/* Portrait frame — top right */}
        <motion.div
          whileHover={
            shouldReduceMotion ? {} : { scale: 1.03, y: -4 }
          }
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          style={{
            width: 135,
            height: 175,
            borderRadius: 6,
            border: "3.5px solid #111118",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.75), 0 2px 8px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04)",
            background: "#0f0a1e",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/profile.png"
            alt="Yogendra Gupta — professional portrait"
            fill
            sizes="135px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Purple tint overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(76,29,149,0.18) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* CSS Laptop frame */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -6, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "clamp(300px, 36vw, 520px)",
            flexShrink: 0,
          }}
        >
          {/* Laptop lid */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16/10",
              borderRadius: "12px 12px 0 0",
              background: "linear-gradient(160deg, #1c1c24, #111118)",
              border: "2px solid #2a2a38",
              borderBottom: "none",
              overflow: "hidden",
              position: "relative",
              boxShadow:
                "0 -4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
              // Subtle perspective tilt
              transform: "perspective(900px) rotateY(-6deg) rotateX(1deg) rotate(-1deg)",
              transformOrigin: "bottom center",
            }}
          >
            {/* Webcam dot */}
            <div
              style={{
                position: "absolute",
                top: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#222230",
                border: "1px solid #333344",
                zIndex: 2,
              }}
            />

            {/* Screen — code screenshot */}
            <div style={{ position: "absolute", inset: 0, top: 20 }}>
              <Image
                src="/images/hero-code.png"
                alt="Code editor showing FastAPI project"
                fill
                sizes="clamp(300px, 36vw, 520px)"
                style={{ objectFit: "cover", objectPosition: "left top" }}
              />
            </div>

            {/* Screen reflection */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />

            {/* Purple screen glow at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background:
                  "linear-gradient(to top, rgba(124,58,237,0.18) 0%, transparent 100%)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />
          </div>

          {/* Laptop base / hinge */}
          <div
            style={{
              width: "100%",
              height: 16,
              background: "linear-gradient(180deg, #252530, #1a1a22)",
              borderRadius: "0 0 4px 4px",
              border: "2px solid #2a2a38",
              borderTop: "1px solid #333344",
              transform: "perspective(900px) rotateX(-8deg) rotate(-1deg)",
              transformOrigin: "top center",
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            }}
          />

          {/* Keyboard deck shadow */}
          <div
            style={{
              width: "90%",
              height: 6,
              margin: "0 auto",
              borderRadius: "0 0 8px 8px",
              background: "rgba(0,0,0,0.5)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── Contact Me sticky note ───────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 3, y: -3 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => scrollToSection("contact")}
        aria-label="Go to Contact section"
        style={{
          position: "absolute",
          bottom: "clamp(10%, 18%, 22%)",
          right: "clamp(12px, 2.5%, 4%)",
          zIndex: 20,
          cursor: "pointer",
          width: 90,
          height: 90,
          background: "#E8C84A",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          boxShadow:
            "4px 4px 18px rgba(0,0,0,0.6), inset 0 -3px 0 rgba(0,0,0,0.15)",
          padding: 12,
          border: "none",
        }}
      >
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            color: "#1a1208",
            textAlign: "center",
            lineHeight: 1.3,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Contact Me
        </span>
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="#1a1208"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
        </svg>
      </motion.button>

      {/* ── Main left-side content ───────────────────────────────────────── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          // Responsive horizontal padding
          padding: "clamp(80px, 10vh, 120px) clamp(20px, 5vw, 72px)",
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div style={{ maxWidth: "clamp(300px, 90%, 520px)" }}>

          {/* Mobile-only avatar */}
          {isMobile && (
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 24 }}>
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  border: "3px solid #7c3aed",
                  boxShadow: "0 0 0 4px rgba(124,58,237,0.2), 0 8px 30px rgba(0,0,0,0.6)",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Yogendra Gupta"
                  fill
                  sizes="96px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
          )}

          {/* Hi, I'm */}
          <motion.p
            {...fadeUp(0.25)}
            style={{
              color: "#a78bfa",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              fontWeight: 500,
              marginBottom: 8,
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: 0.5,
            }}
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name — staggered */}
          <motion.div {...fadeUp(0.35)}>
            <h1
              style={{
                fontSize: "clamp(44px, 8vw, 96px)",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: 2,
                letterSpacing: "clamp(-1px, -0.3vw, -3px)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {personalInfo.firstName}
            </h1>
            <h1
              style={{
                fontSize: "clamp(44px, 8vw, 96px)",
                fontWeight: 900,
                lineHeight: 0.95,
                marginBottom: 28,
                letterSpacing: "clamp(-1px, -0.3vw, -3px)",
                background:
                  "linear-gradient(130deg, #7c3aed 0%, #a78bfa 55%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {personalInfo.lastName}
            </h1>
          </motion.div>

          {/* Roles — bullet-prefixed flex row */}
          <motion.div
            {...fadeUp(0.5)}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "6px 12px",
              marginBottom: 18,
            }}
            role="list"
            aria-label="Professional roles"
          >
            {ROLES.map((role) => (
              <span
                key={role}
                role="listitem"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  color: "#d4d4e8",
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#7c3aed",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                {role}
              </span>
            ))}
          </motion.div>

          {/* Tagline / description */}
          <motion.p
            {...fadeUp(0.62)}
            style={{
              color: "#9898ad",
              fontSize: "clamp(13px, 1.05vw, 15px)",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 400,
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.75)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 36,
              flexWrap: "wrap",
            }}
          >
            {/* Primary — Explore My Work */}
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.04,
                      y: -3,
                      boxShadow: "0 8px 32px rgba(124,58,237,0.55)",
                    }
              }
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "13px 26px",
                background: "#7c3aed",
                color: "#ffffff",
                borderRadius: 10,
                fontSize: "clamp(13px, 1.05vw, 14px)",
                fontWeight: 650,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 22px rgba(124,58,237,0.42)",
                fontFamily: "Inter, sans-serif",
                transition: "box-shadow 0.25s ease",
              }}
            >
              Explore My Work
              <FiArrowRight size={16} aria-hidden="true" />
            </motion.button>

            {/* Secondary — View Resume */}
            <motion.a
              href={personalInfo.resume}
              download
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.04,
                      y: -3,
                      borderColor: "rgba(255,255,255,0.35)",
                    }
              }
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "12px 22px",
                background: "transparent",
                color: "#e2e2ee",
                borderRadius: 10,
                fontSize: "clamp(13px, 1.05vw, 14px)",
                fontWeight: 600,
                border: "1.5px solid rgba(255,255,255,0.18)",
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                transition: "border-color 0.25s ease",
              }}
            >
              View Resume
              <FiDownload size={15} aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Social Icons — circular outlined */}
          <motion.div
            {...fadeUp(0.9)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
            aria-label="Social links"
          >
            {SOCIALS.map(({ label, href, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.12,
                        y: -3,
                        borderColor: "#7c3aed",
                        color: "#a78bfa",
                        boxShadow: "0 0 18px rgba(124,58,237,0.5)",
                      }
                }
                whileTap={{ scale: 0.92 }}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9898ad",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Icon size={20} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator — purple glowing dot ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.7 }}
        style={{
          position: "absolute",
          bottom: "clamp(28px, 5%, 48px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            color: "#6b7280",
            fontSize: 11,
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
        {/* Glowing purple dot */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.45, 1],
                  opacity: [0.8, 1, 0.8],
                  boxShadow: [
                    "0 0 0 0 rgba(124,58,237,0.5)",
                    "0 0 0 6px rgba(124,58,237,0)",
                    "0 0 0 0 rgba(124,58,237,0)",
                  ],
                }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#7c3aed",
            boxShadow: "0 0 10px rgba(124,58,237,0.7)",
          }}
        />
      </motion.div>

      {/* ── Responsive rules ──────────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-right-col { display: none !important; }
          .hero-mobile-avatar { display: flex !important; }
        }
        @media (min-width: 901px) {
          .hero-mobile-avatar { display: none !important; }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .hero-right-col { right: 1% !important; }
        }
        @media (max-width: 480px) {
          .hero-contact-note { width: 80px !important; height: 80px !important; }
        }
      `}</style>
    </section>
  );
}
