// ============================================================
// Portfolio Data — Yogendra Gupta
// All content sourced from resume and GitHub profile
// ============================================================

export const personalInfo = {
  name: "Yogendra Gupta",
  firstName: "Yogendra",
  lastName: "Gupta",
  title: "Software Engineer • Backend Developer • AI Enthusiast",
  tagline:
    "I build scalable backend systems and AI-powered applications that solve real-world problems and create meaningful impact.",
  email: "yogendrag2804@gmail.com",
  github: "https://github.com/Yogendra2804",
  linkedin: "https://www.linkedin.com/in/yogendra-gupta-123b0028a/",
  portfolio: "https://yogendra2804.github.io/Portfolio/",
  resume: "/Yogendra_Gupta_Resume.pdf",
  location: "India",
  initials: "YG",
};

export const aboutText = `Computer Science undergraduate at VIT Vellore with a CGPA of 8.14, graduating in 2027. I have hands-on experience designing and shipping backend services and full-stack applications in Python and JavaScript. My expertise spans REST API design, JWT authentication, ORM-based data modeling, and Linux/Nginx deployment, with a growing focus on system design, computer vision, and applied machine learning. I'm known for turning ambiguous requirements into secure, maintainable, production-ready systems.`;

export const skills = [
  // Languages
  { name: "Python", category: "Languages", level: 90 },
  { name: "JavaScript", category: "Languages", level: 80 },
  { name: "Java", category: "Languages", level: 70 },
  { name: "C++", category: "Languages", level: 70 },
  { name: "SQL", category: "Languages", level: 75 },
  // Backend
  { name: "FastAPI", category: "Backend", level: 88 },
  { name: "REST APIs", category: "Backend", level: 90 },
  { name: "JWT Auth", category: "Backend", level: 85 },
  { name: "SQLAlchemy", category: "Backend", level: 80 },
  // Frontend
  { name: "React", category: "Frontend", level: 70 },
  { name: "Streamlit", category: "Frontend", level: 80 },
  { name: "Tkinter", category: "Frontend", level: 75 },
  // AI/ML
  { name: "OpenCV", category: "AI/ML", level: 80 },
  { name: "NumPy", category: "AI/ML", level: 78 },
  { name: "Pandas", category: "AI/ML", level: 75 },
  // Cloud & DevOps
  { name: "AWS EC2", category: "Cloud", level: 72 },
  { name: "Nginx", category: "Cloud", level: 70 },
  { name: "Linux", category: "Cloud", level: 75 },
  // Tools
  { name: "Git/GitHub", category: "Tools", level: 88 },
  { name: "VS Code", category: "Tools", level: 92 },
];

export const projects = [
  {
    id: 1,
    title: "FastAPI Backend Service",
    description:
      "Production-ready REST APIs with JWT auth, SQLAlchemy ORM and AWS deployment. Layered architecture isolating auth, business logic, and persistence.",
    longDescription:
      "Engineered a production-grade REST backend that authenticates users and serves modular business logic on a live cloud deployment. Architected a layered FastAPI service with JWT-based authentication and AWS EC2/Nginx deployment.",
    image: "/images/project-fastapi.png",
    tags: ["FastAPI", "AWS", "SQLite"],
    techStack: ["Python", "FastAPI", "SQLAlchemy", "JWT", "AWS EC2", "Nginx", "SQLite"],
    github: "https://github.com/Yogendra2804/Python-Backend-Service-using-FastAPI",
    live: "https://python-backend-service-using-fastapi.onrender.com/docs",
    liveLabel: "API Docs",
    featured: true,
    color: "#00D2AA",
  },
  {
    id: 6,
    title: "Manual JWT Notes App",
    description:
      "Full-stack notes application with manually implemented JWT authentication, secure token handling and a clean REST API backend.",
    longDescription:
      "Built a full-stack notes application implementing JWT authentication from scratch — manual token signing, verification and refresh flow — backed by a FastAPI REST API and persistent storage.",
    image: "/images/project-jwt-notes.jpg",
    tags: ["FastAPI", "JWT", "REST API"],
    techStack: ["Python", "FastAPI", "JWT", "SQLAlchemy", "SQLite"],
    github: "https://github.com/Yogendra2804/Manual-JWT-Notes-App",
    live: "https://manual-jwt-notes-app.onrender.com/",
    liveLabel: "Live Demo",
    featured: true,
    color: "#7C3AED",
  },
  {
    id: 2,
    title: "YOLO Playground",
    description:
      "Real-time object detection system with YOLOv8, OpenCV and Streamlit interface. End-to-end computer vision pipeline.",
    longDescription:
      "Built an end-to-end computer vision pipeline that turns raw images into real-time, confidence-scored detections using YOLO + OpenCV with a Streamlit interface.",
    image: "/images/project-yolo.png",
    tags: ["YOLO", "OpenCV", "Streamlit"],
    techStack: ["Python", "YOLO", "OpenCV", "Streamlit", "NumPy"],
    github: "https://github.com/Yogendra2804/YOLO_Playground-",
    live: null,
    liveLabel: "Live Demo",
    featured: true,
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Chrome Extension",
    description:
      "Highlight and save content with Google Sheets integration via Apps Script. Serverless capture and sync flow.",
    longDescription:
      "Shipped a lightweight browser extension that captures and syncs highlighted web content to Google Sheets without a dedicated backend, using asynchronous capture-and-sync flow.",
    image: "/images/project-chrome.png",
    tags: ["JavaScript", "Apps Script", "API"],
    techStack: ["JavaScript", "Chrome Extension API", "Google Apps Script", "Google Sheets"],
    github: "https://github.com/Yogendra2804/Chrome-Highlight-Extension-",
    live: null,
    liveLabel: "Live Demo",
    featured: true,
    color: "#4285F4",
  },
  {
    id: 4,
    title: "Inventory Management",
    description:
      "CLI and Tkinter based system with full CRUD operations and data persistence. Decoupled frontend architecture.",
    longDescription:
      "Designed an extensible inventory platform with decoupled front ends — CLI and Tkinter GUI sharing a single codebase, with full CRUD and structured error handling.",
    image: "/images/project-inventory.png",
    tags: ["Python", "Tkinter", "SQLite"],
    techStack: ["Python", "Tkinter", "SQLite", "CLI"],
    github: "https://github.com/Yogendra2804/Inventory-Management-System",
    live: null,
    liveLabel: "Live Demo",
    featured: true,
    color: "#10B981",
  },
  {
    id: 5,
    title: "Jumbled Frame Constructor",
    description:
      "Reconstructs jumbled video frames using similarity metrics and parallel processing. SSIM + Histogram optimization.",
    longDescription:
      "Jumbled Video Frame Reconstruction — SSIM + Histogram + Window Optimization. Reconstructs video frame sequence from scrambled frames using computer vision techniques.",
    image: "/images/project-jumbled.png",
    tags: ["Python", "OpenCV", "Multiprocessing"],
    techStack: ["Python", "OpenCV", "SSIM", "NumPy", "Multiprocessing"],
    github: "https://github.com/Yogendra2804/Jumbled-Frames-Reconstruction-Challenge",
    live: "https://drive.google.com/drive/folders/16sAugEmChvkVtMbp52JPm1ZRHERbBkdd?usp=drive_link",
    liveLabel: "Watch Demo",
    featured: false,
    color: "#F59E0B",
  },
];

export const experience = [
  {
    id: 1,
    role: "Hackathon Participant",
    company: "VIT Vellore",
    location: "Vellore, India",
    period: "2024",
    description:
      "Contributed to rapid prototyping and frontend development, collaborating with a cross-functional team to design and present a functional prototype under time constraints.",
    type: "hackathon",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science Engineering",
    institution: "VIT Vellore",
    location: "Vellore, India",
    period: "2023 – 2027",
    grade: "CGPA: 8.14 / 10",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Class XII — CBSE",
    institution: "Kendriya Vidyalaya, Indore",
    location: "Indore, India",
    period: "2023",
    grade: "75.2%",
    icon: "🏫",
  },
  {
    id: 3,
    degree: "Class X — CBSE",
    institution: "Kendriya Vidyalaya, Indore",
    location: "Indore, India",
    period: "2021",
    grade: "81.4%",
    icon: "🏫",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle",
    year: "2024",
    icon: "☁️",
    color: "#F80000",
    link: "https://drive.google.com/file/d/19Z3iA68EOA76hR-hWGxqQ3Z_qUqu0F57/view?usp=sharing",
  },
  {
    id: 2,
    title: "Introduction to Data Science",
    issuer: "Infosys",
    year: "2024",
    icon: "📊",
    color: "#007CC3",
    link: "https://drive.google.com/file/d/115fpwDZ6_ZOnfwoyFnra9t6r85uXHT1l/view?usp=sharing",
  },
  {
    id: 3,
    title: "Generative AI Advanced Certificate",
    issuer: "IBM",
    year: "2024",
    icon: "🤖",
    color: "#1F70C1",
    link: "https://drive.google.com/file/d/1Jm8wcLczhYDvdBBPtFisWX5nsdt5_xzm/view?usp=sharing",
  },
  {
    id: 4,
    title: "Machine Design with Fusion 360",
    issuer: "Robovitics",
    year: "2024",
    icon: "⚙️",
    color: "#FF6B00",
    link: "https://drive.google.com/file/d/1WTKrkJhPvvM267KGMJ-5z518O61l5v44/view?usp=sharing",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stickyNotes = [
  { text: "Build scalable\nbackend APIs", color: "#FFE066", rotation: -3 },
  { text: "Ship to\nproduction", color: "#FFA94D", rotation: 2 },
  { text: "Learn\nsystem design", color: "#FFE066", rotation: -1 },
];
