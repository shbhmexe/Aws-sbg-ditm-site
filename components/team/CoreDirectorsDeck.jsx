"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Camera,
  Users,
  Share2,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Layers
} from "lucide-react";
import "./CoreDirectorsDeck.css";

const LI_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const GH_PATH =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const DIRECTORS_DATA = [
  {
    id: "aakash-rana",
    code: "DOM_01 // IT-INFRA",
    domainNum: "01",
    shortName: "Aakash",
    name: "Aakash Rana",
    domainTitle: "IT & Infrastructure",
    role: "Head of IT Support and Management",
    icon: Terminal,
    quote: "Reliable infrastructure is the backbone of every successful workshop.",
    description:
      "Architects workshop computing sandboxes, keeps cloud lab environments resilient, and eliminates operational friction so every student can deploy with total confidence.",
    focusAreas: ["Cloud Infrastructure", "Lab Provisioning", "Compute Operations"],
    metric: "100+ Cloud Labs Supported",
    badgeLabel: "CORE ARCHITECT",
    gradient: "linear-gradient(135deg, #00d26a 0%, #00f2fe 100%)",
    profileUrl: "/team/core/AAKASH_CORE.png",
    linkedin: "https://www.linkedin.com/in/aakash-rana-98054b342",
    github: "https://github.com/aakashrana7422-tech",
  },
  {
    id: "anjali-kumari",
    code: "DOM_02 // MEDIA-ARTS",
    domainNum: "02",
    shortName: "Anjali",
    name: "Anjali Kumari",
    domainTitle: "Photography & Visuals",
    role: "Photography and Graphics Manager",
    icon: Camera,
    quote: "Every frame captures our builders' curiosity and genuine moments of creation.",
    description:
      "Directs the chapter's visual identity, event photography archives, and digital media design — turning workshop breakthroughs into compelling community stories.",
    focusAreas: ["Visual Identity", "Media Archives", "Event Storytelling"],
    metric: "380+ Moments Documented",
    badgeLabel: "CREATIVE LEAD",
    gradient: "linear-gradient(135deg, #ea6297 0%, #00d26a 100%)",
    profileUrl: "/team/core/ANJALI_CORE.png",
    linkedin: "https://www.linkedin.com/in/anjali-kumari-71a39b385",
    github: "https://github.com/anjalisah4823",
  },
  {
    id: "farman-khan",
    code: "DOM_03 // COMMUNITY",
    domainNum: "03",
    shortName: "Farman",
    name: "Farman Khan",
    domainTitle: "Student Engagement",
    role: "Student Engagement Manager",
    icon: Users,
    quote: "Community is built when every student feels heard, welcome, and inspired to build.",
    description:
      "Champions student inclusion, orchestrates builder onboarding, and bridges newcomers with hands-on AWS Builder Center challenges and collaborative student networks.",
    focusAreas: ["Builder Outreach", "Student Onboarding", "Peer Mentorship"],
    metric: "220+ Builders Engaged",
    badgeLabel: "COMMUNITY ENGAGEMENT",
    gradient: "linear-gradient(135deg, #00f2fe 0%, #00d26a 100%)",
    profileUrl: "/team/core/FARMAN_CORE.jpeg",
    linkedin: "https://www.linkedin.com/in/farman-khan-73b63a380",
    github: "https://github.com/farmanfk0404",
  },
  {
    id: "vansh-verma",
    code: "DOM_04 // DIGITAL-VOICE",
    domainNum: "04",
    shortName: "Vansh",
    name: "Vansh Verma",
    domainTitle: "Social & Digital Voice",
    role: "Social Media Manager",
    icon: Share2,
    quote: "Amplifying our builders' achievements and sharing the cloud excitement across platforms.",
    description:
      "Leads multi-channel digital communications, hosts interactive event quizzes, and broadcasts chapter milestones across Instagram, LinkedIn, and developer hubs.",
    focusAreas: ["Digital Outreach", "Live Quizzes", "Community Broadcasts"],
    metric: "Multi-Platform Coverage",
    badgeLabel: "DIGITAL STRATEGIST",
    gradient: "linear-gradient(135deg, #3f51b5 0%, #00d26a 100%)",
    profileUrl: "/team/core/VANSH_CORE.png",
    linkedin: "https://www.linkedin.com/in/vansh-verma-510b3b364/",
    github: "https://github.com/vanshverma20",
  },
  {
    id: "tarashankar-hazra",
    code: "DOM_05 // ECOSYSTEM",
    domainNum: "05",
    shortName: "Tarashankar",
    name: "Tarashankar Hazra",
    domainTitle: "Marketing & Ecosystem",
    role: "Marketing Director",
    icon: TrendingUp,
    quote: "Connecting ambitious student developers with real-world cloud opportunities.",
    description:
      "Drives event marketing, industry alliances, and technical sessions — expanding chapter reach and delivering real AWS Amplify hands-on experiences directly to students.",
    focusAreas: ["Event Marketing", "Amplify Workshops", "Growth Alliances"],
    metric: "Campus-Wide Reach",
    badgeLabel: "ECOSYSTEM DIRECTOR",
    gradient: "linear-gradient(135deg, #ff9966 0%, #00d26a 100%)",
    profileUrl: "/team/core/TARASHANKAR_CORE.png",
    linkedin: "https://www.linkedin.com/in/tarashankar-hazra-522a8a398",
    github: "https://github.com/TarashankarHazra",
  },
];

export default function CoreDirectorsDeck() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stageRef = useRef(null);

  const activeDirector = DIRECTORS_DATA[activeIdx];
  const IconComponent = activeDirector.icon;

  // Automatically cycle every 30 seconds (resets timer when user clicks to give full 30s)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % DIRECTORS_DATA.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [activeIdx]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((prev) => (prev + 1) % DIRECTORS_DATA.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => (prev - 1 + DIRECTORS_DATA.length) % DIRECTORS_DATA.length);
    }
  };

  return (
    <div
      className="quantum-directors-deck"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive Core Directors Deck"
    >
      {/* 1. Futuristic Orbital Selector Dock */}
      <div className="quantum-dock-wrapper">
        <div className="quantum-dock-container" role="tablist">
          {DIRECTORS_DATA.map((director, index) => {
            const isActive = index === activeIdx;
            const ItemIcon = director.icon;
            return (
              <button
                key={director.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`quantum-dock-tile ${isActive ? "tile-active" : ""}`}
                onClick={() => setActiveIdx(index)}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDockGlow"
                    className="tile-active-backdrop"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="tile-content">
                  <div className="tile-avatar-frame">
                    <img
                      src={director.profileUrl}
                      alt={director.name}
                      className="tile-avatar-img"
                      loading="eager"
                      decoding="async"
                    />
                    <span className="tile-status-beacon" />
                  </div>

                  <div className="tile-text-col">
                    <div className="tile-top-row">
                      <span className="tile-code">{director.domainNum}</span>
                      <ItemIcon size={12} className="tile-icon" />
                    </div>
                    <span className="tile-name">{director.shortName}</span>
                    <span className="tile-domain">{director.domainTitle}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. The Holographic Command Deck Stage */}
      <div
        className="quantum-stage-card"
      >
        {/* Dynamic Spotlight Glow */}
        <div className="deck-spotlight-layer" aria-hidden="true" />

        {/* Matrix Dot Grid Background */}
        <div className="deck-matrix-grid" aria-hidden="true" />

        {/* Giant Floating Index Watermark */}
        <div className="deck-watermark-number" aria-hidden="true">
          {activeDirector.domainNum}
        </div>

        {/* Cyber HUD Corner Brackets */}
        <span className="hud-corner hud-top-left" aria-hidden="true" />
        <span className="hud-corner hud-top-right" aria-hidden="true" />
        <span className="hud-corner hud-bottom-left" aria-hidden="true" />
        <span className="hud-corner hud-bottom-right" aria-hidden="true" />

        {/* Animated Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDirector.id}
            className="deck-stage-inner"
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left Column: Intelligence Dossier */}
            <div className="deck-info-column">
              {/* Title & Role */}
              <div className="deck-heading-group">
                <h3 className="deck-director-name">{activeDirector.name}</h3>
                <p className="deck-director-role">
                  <IconComponent size={14} className="role-icon" />
                  <span>{activeDirector.role}</span>
                </p>
              </div>

              {/* Quote Capsule */}
              <div className="deck-quote-capsule">
                <div className="quote-accent-bar" />
                <p className="deck-quote-text">
                  &ldquo;{activeDirector.quote}&rdquo;
                </p>
              </div>

              {/* Bio / Description */}
              <p className="deck-director-desc">
                {activeDirector.description}
              </p>

              {/* Focus Areas & Capabilities */}
              <div className="deck-focus-section">
                <span className="deck-section-label">
                  <Layers size={11} />
                  <span>CORE FOCUS AREAS</span>
                </span>
                <div className="deck-focus-chips">
                  {activeDirector.focusAreas.map((tag) => (
                    <span className="focus-cyber-chip" key={tag}>
                      <span className="chip-dot" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Row: Social Links + Track Stats */}
              <div className="deck-info-footer">
                <div className="deck-social-links">
                  {activeDirector.linkedin && (
                    <a
                      href={activeDirector.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deck-social-btn"
                      aria-label={`${activeDirector.name} on LinkedIn`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d={LI_PATH} />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {activeDirector.github && (
                    <a
                      href={activeDirector.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deck-social-btn"
                      aria-label={`${activeDirector.name} on GitHub`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d={GH_PATH} />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Holographic Avatar & Stage Controls */}
            <div className="deck-visual-column">
              <div className="hologram-avatar-pod">
                {/* Radiant Ambient Aura */}
                <div className="hologram-aura-glow" aria-hidden="true" />

                {/* Decorative Cyber Rings */}
                <div className="hologram-cyber-ring" aria-hidden="true" />
                <div className="hologram-cyber-ring-outer" aria-hidden="true" />

                {/* Director Avatar Image */}
                <div className="hologram-avatar-viewport">
                  <img
                    src={activeDirector.profileUrl}
                    alt={activeDirector.name}
                    className="hologram-avatar-img"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="hologram-scanline-fx" aria-hidden="true" />
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="deck-stage-nav">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() =>
                    setActiveIdx((prev) => (prev - 1 + DIRECTORS_DATA.length) % DIRECTORS_DATA.length)
                  }
                  aria-label="Previous domain"
                >
                  <ArrowLeft size={14} />
                  <span>PREV</span>
                </button>

                {/* Track Dots */}
                <div className="deck-nav-track">
                  {DIRECTORS_DATA.map((d, i) => (
                    <button
                      key={d.id}
                      type="button"
                      className={`nav-track-dot ${i === activeIdx ? "active-track-dot" : ""}`}
                      onClick={() => setActiveIdx(i)}
                      aria-label={`Switch to ${d.name}`}
                    >
                      {i === activeIdx && (
                        <motion.span
                          layoutId="activeTrackPill"
                          className="track-glow-pill"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() =>
                    setActiveIdx((prev) => (prev + 1) % DIRECTORS_DATA.length)
                  }
                  aria-label="Next domain"
                >
                  <span>NEXT</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

