import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yogendra Gupta — Software Engineer & Backend Developer",
  description:
    "Portfolio of Yogendra Gupta — Software Engineer, Backend Developer, and AI Enthusiast. Building scalable systems and AI-powered applications at VIT Vellore.",
  keywords: [
    "Yogendra Gupta",
    "Software Engineer",
    "Backend Developer",
    "FastAPI",
    "Python",
    "AI",
    "Portfolio",
    "VIT Vellore",
  ],
  authors: [{ name: "Yogendra Gupta" }],
  creator: "Yogendra Gupta",
  openGraph: {
    type: "website",
    title: "Yogendra Gupta — Software Engineer & Backend Developer",
    description:
      "Portfolio of Yogendra Gupta — Software Engineer, Backend Developer, and AI Enthusiast.",
    siteName: "Yogendra Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogendra Gupta — Software Engineer & Backend Developer",
    description: "Portfolio of Yogendra Gupta — Backend Developer & AI Enthusiast",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
