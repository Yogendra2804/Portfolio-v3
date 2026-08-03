"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiCheck } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

// ─────────────────────────────────────────────────────────
//  Web3Forms access key — get your FREE key at:
//  https://web3forms.com  →  enter your email → copy key
//  Then replace the string below with your key.
// ─────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "2eaa876a-8666-4e8a-894c-638a2b9c59ac";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact — Message from ${form.name}`,
          from_name: "Yogendra Portfolio",
          replyto: form.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please email me directly at " + personalInfo.email);
      }
    } catch {
      setError("Network error. Please email me directly at " + personalInfo.email);
    } finally {
      setSending(false);
    }
  };

  // Copy email to clipboard (fallback when no email client configured)
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const socials = [
    {
      icon: <FiGithub size={22} />,
      label: "GitHub",
      handle: "@Yogendra2804",
      href: personalInfo.github,
      color: "#ffffff",
      onClick: undefined as ((e: React.MouseEvent) => void) | undefined,
    },
    {
      icon: <FiLinkedin size={22} />,
      label: "LinkedIn",
      handle: "Yogendra Gupta",
      href: personalInfo.linkedin,
      color: "#0A66C2",
      onClick: undefined as ((e: React.MouseEvent) => void) | undefined,
    },
    {
      icon: copied ? <FiCheck size={22} /> : <FiMail size={22} />,
      label: "Email",
      handle: copied ? "Copied to clipboard!" : personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
      color: "#EA4335",
      onClick: handleEmailClick,
    },
  ];


  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "clamp(60px, 10vw, 120px) 5%",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          top: "10%",
          left: "-15%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          bottom: "10%",
          right: "-10%",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 70 }}
        >
          <p className="section-label" style={{ justifyContent: "center" }}>
            Get In Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: -2,
              color: "white",
              marginBottom: 16,
            }}
          >
            Let&apos;s build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              great together.
            </span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Available for opportunities and collaborations.
          </p>
        </motion.div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
            alignItems: "start",
          }}
        >
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Social links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  onClick={s.onClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`;
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.color,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "white" }}>
                      {s.label}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                      {s.handle}
                    </div>
                  </div>
                  <FiArrowRight
                    size={16}
                    style={{ marginLeft: "auto", color: "var(--text-muted)" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <motion.a
              href={personalInfo.resume}
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 24px",
                background: "var(--purple)",
                color: "white",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <HiOutlineDocumentDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="contact-form-card"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "36px",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ color: "white", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <motion.button
                    onClick={() => setSent(false)}
                    whileHover={{ scale: 1.04 }}
                    style={{
                      marginTop: 20,
                      padding: "10px 20px",
                      background: "transparent",
                      color: "var(--purple-light)",
                      border: "1px solid var(--purple)",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontSize: 13,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Send another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: 18,
                      marginBottom: 24,
                    }}
                  >
                    Send a Message
                  </h3>

                  {[
                    {
                      id: "contact-name",
                      label: "Your Name",
                      type: "text",
                      key: "name",
                      placeholder: "John Doe",
                    },
                    {
                      id: "contact-email",
                      label: "Email Address",
                      type: "email",
                      key: "email",
                      placeholder: "john@example.com",
                    },
                  ].map((field) => (
                    <div key={field.key} style={{ marginBottom: 16 }}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: "block",
                          color: "var(--text-secondary)",
                          fontSize: 13,
                          fontWeight: 500,
                          marginBottom: 6,
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [field.key]: e.target.value })
                        }
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          borderRadius: 8,
                          color: "white",
                          fontSize: 14,
                          fontFamily: "Inter, sans-serif",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--purple)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                        }}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: 24 }}>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        color: "var(--text-secondary)",
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 6,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        color: "white",
                        fontSize: 14,
                        fontFamily: "Inter, sans-serif",
                        outline: "none",
                        resize: "vertical",
                        minHeight: 100,
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--purple)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={!sending ? { scale: 1.03, y: -2 } : {}}
                    whileTap={!sending ? { scale: 0.97 } : {}}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: sending ? "var(--purple-glow)" : "var(--purple)",
                      color: "white",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: sending ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      fontFamily: "Inter, sans-serif",
                      boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
                      transition: "background 0.2s",
                    }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "white",
                            borderRadius: "50%",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get In Touch
                        <FiArrowRight size={16} />
                      </>
                    )}
                  </motion.button>
                  {error && (
                    <p
                      style={{
                        marginTop: 12,
                        padding: "10px 14px",
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        borderRadius: 8,
                        color: "#fca5a5",
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
