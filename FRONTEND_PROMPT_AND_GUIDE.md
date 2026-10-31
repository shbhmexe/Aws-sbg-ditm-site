# ☁️ AWS Student Builder Group (DITM) — Frontend System & Design Guide

> **Official Student Community Website for Amazon Web Services at Delhi Institute of Technology & Management (DITM, Sonipat).**

---

## 📋 Table of Contents
1. [Executive Summary & Concept](#executive-summary--concept)
2. [The Full Frontend Prompt (Copy & Paste)](#the-full-frontend-prompt-copy--paste)
3. [Design System & Tokens](#design-system--tokens)
4. [Component Architecture](#component-architecture)
5. [Asset & Photography Customization](#asset--photography-customization)
6. [How to Run & Develop Locally](#how-to-run--develop-locally)

---

## 1. Executive Summary & Concept

The previous version utilized a retro arcade snake game with harsh fluorescent lime green styling. To represent an **official AWS student community**, the frontend has been re-architected into a **mature, modern enterprise cloud design system**:

* **Color Palette**: Shifted from radioactive green to **AWS Signature Amber (`#FF9900`)**, **AWS Cloud Cyan (`#00A4E4`)**, and **Deep Midnight Slate (`#090e17` / `#0f172a`)**.
* **Hero Visual**: Replaced the arcade grid with a **3D AWS Cloud Architecture Interactive Showcase** featuring Amazon EC2, AWS Lambda, S3, and Bedrock AI nodes with live telemetry metrics.
* **Layout**: Left-to-right natural reading flow (Title + Badges + CTAs on the left, interactive 3D architecture visual on the right).
* **Card Aesthetics**: Sleek dark glassmorphism (`backdrop-filter: blur(16px)`), crisp 1px borders (`rgba(255, 255, 255, 0.08)`), and subtle ambient lighting.

---

## 2. The Full Frontend Prompt (Copy & Paste)

You can copy and reuse this master prompt whenever you want an AI assistant or designer to maintain or build upon this design:

```markdown
### SYSTEM / DESIGN PROMPT: AWS Student Builder Group (DITM Chapter)

Build a high-end, mature, and professional university community web portal for the "AWS Student Builder Group DITM" (affiliated with Amazon Web Services at Delhi Institute of Technology & Management).

#### 1. Brand Identity & Visual Language
- Aesthetics: Sleek, high-tech enterprise cloud platform (inspired by AWS Console, AWS re:Invent, and modern developer hubs like Vercel and Stripe).
- Background: Deep space / slate navy (#090e17, #0f172a) with subtle ambient volumetric lighting and soft radial glow meshes.
- Primary Accent: AWS Signature Orange / Amber (#FF9900, #FFAC33).
- Secondary Accent: AWS Cloud Blue / Tech Cyan (#00A4E4, #38BDF8) and refined emerald for live status (#10B981).
- Typography: Amazon Ember Display (headings/body) with system fallbacks, coupled with clean monospace accents for telemetry chips and badges.
- Cards & Surfaces: Modern glassmorphic panels (rgba(15, 23, 42, 0.75), 1px subtle borders rgba(255, 255, 255, 0.08), 16px backdrop blur, soft elevation shadows).

#### 2. Hero Section Requirements
- Left Column (Content):
  - Eyebrow tag: Pill badge with pulsing live green dot: "OFFICIAL · AWS STUDENT COMMUNITY · DITM · SONIPAT".
  - Headline: "AWS Student Builder Group — DITM Chapter" with subtle warm gradient on "Builder Group".
  - Subtitle: Clear, inspiring mission statement on hands-on cloud labs, serverless architectures, and generative AI.
  - Action CTAs: Dual buttons ("Browse Events" in primary AWS orange gradient + "Explore Workshops" in glass outline).
  - Trust Strip: Key community metrics ("500+ Active Builders", "15+ Cloud Labs", "100% Student-Driven").
- Right Column (Hero Visual):
  - High-resolution 3D digital visualization of cloud infrastructure (connected nodes for Amazon EC2, AWS Lambda, S3 storage, and Bedrock AI).
  - Framed inside a sleek simulated console terminal window with control dots (red/yellow/green) and live cloud region ping (`ap-south-1 // LIVE 99.99%`).
  - Floating interactive telemetry pills:
    - Top Right: "Serverless Cloud · Active & Scalable"
    - Bottom Left: "Community Hub · 500+ DITM Builders"
    - Bottom Right: "AWS Certified · Study Groups Ready"
  - Interactive category selector chips (Compute, GenAI & Bedrock, S3 & DB).

#### 3. Core Sections & Pages
1. Featured Events: Upcoming workshops ("AWS From Clicks to Code", "Cloud Architecture Challenge Hackathon", "AWS Community Day DITM") with calendar icons, category badges, and registration links.
2. Milestones & Inauguration Recap: High-resolution photo gallery showcasing guest speakers (e.g. AWS Data Engineering Consultants) and core team kickoffs.
3. Leadership & Core Team: Director cards with avatars, roles (Director of Cloud Tech, Director of Operations, Director of Events), and LinkedIn/GitHub links.
4. Technical Articles & Insights: Curated guides on Amazon Bedrock AI agents, serverless automation, and cloud architecture patterns.
5. Interactive Contact Console: Terminal-style inquiry console and college location information.
```

---

## 3. Design System & Tokens

All tokens are centralized in [`app/styles/tokens.css`](file:///c:/Users/ranaa/Desktop/AWS%20PROJECT/Aws-sbg-ditm-site/app/styles/tokens.css):

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `--bg` | `#090e17` | Primary deep space dark background |
| `--bg-2` | `#0f172a` | Secondary slate container background |
| `--panel` | `#0d1527` | Surface card background |
| `--panel-2` | `rgba(15, 23, 42, 0.75)` | Glassmorphism card surface |
| `--neon` | `#FF9900` | Official AWS Amber / Orange accent |
| `--neon-2` | `#FFAC33` | Warm gold highlight |
| `--aws-cyan` | `#00A4E4` | Cloud tech cyan accent |
| `--emerald` | `#10B981` | Real-time live status beacon |
| `--ink` | `#F8FAFC` | Primary clean white text |
| `--ink-soft` | `#CBD5E1` | Secondary readable text |
| `--muted` | `#94A3B8` | Subdued metadata text |
| `--line` | `rgba(255, 255, 255, 0.08)` | Crisp glass card border |

---

## 4. Component Architecture

```
Aws-sbg-ditm-site/
├── app/
│   ├── layout.jsx               # Global layout, metadata, Navbar, Footer
│   ├── page.jsx                 # Main homepage (Hero, Featured Events, Team, Articles)
│   ├── about/                   # About DITM chapter & AWS mission
│   ├── events/                  # Full event list & workshops
│   ├── team/                    # Board of directors & core team
│   ├── articles/                # Technical cloud publications
│   ├── contact/                 # Contact console & location map
│   └── styles/
│       ├── tokens.css           # Design tokens, color palette, fonts
│       ├── base.css             # Background gradient mesh, keyframes, shared cards
│       ├── chrome.css           # Navbar, drawer, footer styling
│       └── home.css             # Hero layout, visual card, telemetry pills
├── components/
│   ├── Navbar.jsx               # Floating glass header with active link indicators
│   ├── Footer.jsx               # Community footer with AWS badges & socials
│   └── home/
│       ├── HeroGrid.jsx         # 3D AWS Cloud Architecture Hero Visual
│       ├── MilestoneSection.jsx # Photo showcase modal with zoom
│       └── ContactConsole.jsx   # Interactive message console
└── public/
    └── assets/
        ├── aws-hero-architecture.jpg  # Generated 3D AWS Cloud hero asset
        ├── aws-logo.svg               # AWS Smile vector logo
        └── meetupicon-C5hscCD3.png    # Meetup platform icon
```

---

## 5. Asset & Photography Customization

To swap photos or customize images:

1. **Hero Architecture Photo**:
   - Location: `public/assets/aws-hero-architecture.jpg`
   - Recommended resolution: `1024x1024` or `1200x1200` PNG/JPG.
   - You can replace this file anytime, or update the `src` attribute in `components/home/HeroGrid.jsx`.

2. **Event Posters**:
   - Location: `public/events/<event-name>/...`
   - Linked in `app/page.jsx` under `FEATURED_EVENTS`.

3. **Core Team Avatars**:
   - Location: `public/team/core/<NAME>_CORE.png`
   - Configured in `app/page.jsx` under `LEADERS` and `CORE`.

4. **Inauguration Photos**:
   - Location: `public/events/inauguration/...`
   - Configured in `components/home/MilestoneSection.jsx`.

---

## 6. How to Run & Develop Locally

When running in your terminal:

```powershell
# 1. Always navigate into the project directory first:
cd Aws-sbg-ditm-site

# 2. Run the development server:
npm run dev
```

Then visit:
👉 **[http://localhost:3000](http://localhost:3000)**
