"use client";

import { useState } from "react";

export default function HeroGrid() {
  const [activeChip, setActiveChip] = useState("all");

  const chips = [
    { id: "compute", name: "Compute (EC2 / Lambda)", icon: "⚡" },
    { id: "ai", name: "GenAI & Bedrock", icon: "🧠" },
    { id: "storage", name: "S3 & Databases", icon: "🗄️" },
  ];

  return (
    <div className="hero-visual-wrapper">
      <div className="hero-visual-card">
        {/* Sleek top console status header */}
        <div className="hero-visual-header">
          <div className="console-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="console-title">
            <span className="console-icon">☁</span>
            <span>aws-sbg-ditm-hub // ap-south-1</span>
          </div>
          <div className="console-badge">
            <span className="live-pulse"></span>
            <span>LIVE 99.99%</span>
          </div>
        </div>

        {/* Hero Architecture Graphic */}
        <div className="hero-image-stage">
          <img
            src="/assets/aws-hero-architecture.jpg"
            alt="AWS Cloud Architecture & Student Builder Community"
            className="hero-main-image"
          />
          <div className="image-depth-overlay"></div>

          {/* Floating Pill 1: Top Floating Node */}
          <div className="floating-metric-pill metric-top-right">
            <div className="metric-icon-wrap amber">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div className="metric-text-group">
              <span className="metric-label">Serverless Cloud</span>
              <span className="metric-value">Active & Scalable</span>
            </div>
          </div>

          {/* Floating Pill 2: Bottom Left Node */}
          <div className="floating-metric-pill metric-bottom-left">
            <div className="metric-icon-wrap cyan">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div className="metric-text-group">
              <span className="metric-label">Community Hub</span>
              <span className="metric-value">500+ DITM Builders</span>
            </div>
          </div>

          {/* Floating Pill 3: Bottom Right Node */}
          <div className="floating-metric-pill metric-bottom-right">
            <div className="metric-icon-wrap emerald">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="metric-text-group">
              <span className="metric-label">AWS Certified</span>
              <span className="metric-value">Study Groups Ready</span>
            </div>
          </div>
        </div>

        {/* Footer Tech Chips */}
        <div className="hero-visual-footer">
          <div className="tech-chips-row">
            {chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`tech-chip ${activeChip === chip.id ? "active" : ""}`}
                onClick={() => setActiveChip(chip.id)}
              >
                <span className="tech-chip-icon">{chip.icon}</span>
                <span>{chip.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
