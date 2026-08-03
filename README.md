# Portfolio - 3 v.1.0
### Yogendra Gupta — Software Engineer & Backend Developer

A premium, production-ready personal portfolio built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Faithfully recreated from a reference design with all personal content from Yogendra's resume and GitHub.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Strict type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lenis** | Smooth scroll |
| **React Icons** | Icon library |
| **Lucide React** | Additional icons |

---

## 📁 Project Structure

```
portfolio - 3 v.1.0/
├── public/
│   ├── images/
│   │   ├── hero-desk.png        # Hero section desk setup
│   │   ├── hero-code.png        # Laptop screen code screenshot
│   │   ├── profile.png          # Profile photo (on phone in hero)
│   │   ├── project-fastapi.png  # FastAPI project card image
│   │   ├── project-yolo.png     # YOLO project card image
│   │   ├── project-chrome.png   # Chrome Extension card image
│   │   ├── project-inventory.png # Inventory Management card image
│   │   └── project-jumbled.png  # Jumbled Frames card image
│   └── Yogendra_Gupta_Resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, animations, utilities
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main page with Lenis smooth scroll
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky transparent navbar
│   │   ├── HeroSection.tsx      # Full hero with desk setup
│   │   ├── AboutSection.tsx     # About with code image & stats
│   │   ├── ProjectsSection.tsx  # 3D tilt project cards
│   │   ├── SkillsSection.tsx    # Animated skill cards
│   │   ├── ExperienceSection.tsx # Timeline experience/education
│   │   ├── ContactSection.tsx   # Contact form + social links
│   │   └── Footer.tsx           # Branded footer
│   └── lib/
│       └── data.ts              # All portfolio content/data
```

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Navigate to the project folder
cd "portfolio - 3 v.1.0"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 🏗 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this project to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import the repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Your portfolio will be live at `https://your-name.vercel.app`

### Deploy to GitHub Pages (Static Export)

If you want GitHub Pages deployment, add to `next.config.ts`:
```ts
output: "export"
```
Then run `npm run build` and push the `out/` folder.

---

## ✏️ Customization

All content is centralized in [`src/lib/data.ts`](src/lib/data.ts):

- **Personal info** — name, email, GitHub, LinkedIn, resume link
- **Projects** — 5 projects with images, descriptions, tech stack, links
- **Skills** — categorized with proficiency levels
- **Experience** — timeline entries
- **Education** — academic history
- **Certifications** — credentials

To update project images, replace files in `public/images/` with the same filenames.

---

## ✨ Features

- 🎨 **Premium dark theme** with purple accent (#7C3AED)
- 🖥 **Hero desk setup** with floating navigation buttons
- 🃏 **3D tilt project cards** with glowing borders
- 📊 **Animated skill progress bars** with category filters
- 📅 **Timeline** for experience and education
- 📬 **Contact form** with social links
- 🌊 **Lenis smooth scrolling**
- ⚡ **Framer Motion** animations throughout
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔍 **SEO optimized** with Open Graph meta tags
- ⌨️ **TypeScript** strict mode
- 🚀 **Production ready**

---

## 📄 License

© 2024 Yogendra Gupta. All rights reserved.
