"use client";

import { useEffect, useState } from "react";

export default function HeroGrid() {
  const [activeChip, setActiveChip] = useState("all");
  const [activityIndex, setActivityIndex] = useState(0);

  const chips = [
    { id: "compute", name: "Compute (EC2 / Lambda)", icon: "⚡" },
    { id: "ai", name: "GenAI & Bedrock", icon: "🧠" },
    { id: "storage", name: "S3 & Databases", icon: "🗄️" },
  ];
  const activeChipName = chips.find((chip) => chip.id === activeChip)?.name || "All systems";
  const liveStreams = {
    all: [
      { glyph: "EC2", title: "Compute node scaled", detail: "ap-south-1 / instance healthy", value: "98.4%", progress: 84 },
      { glyph: "AI", title: "Bedrock inference complete", detail: "community-lab / response ready", value: "42ms", progress: 72 },
      { glyph: "S3", title: "Learning assets synced", detail: "ditm-workshops / 128 objects", value: "100%", progress: 96 },
    ],
    compute: [
      { glyph: "EC2", title: "EC2 lab environment ready", detail: "sandbox / 2 instances online", value: "2/2", progress: 92 },
      { glyph: "λ", title: "Lambda function invoked", detail: "event-router / 14ms runtime", value: "14ms", progress: 78 },
      { glyph: "EC2", title: "Auto Scaling policy checked", detail: "target utilization stable", value: "64%", progress: 64 },
    ],
    ai: [
      { glyph: "AI", title: "Prompt lab is running", detail: "Bedrock / student sandbox", value: "07", progress: 58 },
      { glyph: "AI", title: "Model response evaluated", detail: "quality gate / passed", value: "PASS", progress: 88 },
      { glyph: "AI", title: "Knowledge base refreshed", detail: "embeddings / 240 chunks", value: "240", progress: 76 },
    ],
    storage: [
      { glyph: "S3", title: "Workshop assets synced", detail: "S3 / 128 objects checked", value: "100%", progress: 96 },
      { glyph: "DB", title: "DynamoDB read capacity stable", detail: "community-data / low latency", value: "12ms", progress: 81 },
      { glyph: "S3", title: "Archive lifecycle completed", detail: "event-media / policy applied", value: "DONE", progress: 100 },
    ],
  };
  const activeStream = liveStreams[activeChip] || liveStreams.all;
  const currentActivity = activeStream[activityIndex % activeStream.length];

  useEffect(() => {
    const id = window.setInterval(() => setActivityIndex((index) => index + 1), 2600);
    return () => window.clearInterval(id);
  }, [activeChip]);

  useEffect(() => {
    setActivityIndex(0);
  }, [activeChip]);

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
        <div className="hero-image-stage" data-active={activeChip}>
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

        <div className="hero-live-console" aria-live="polite">
          <div className="hero-live-console-header">
            <div className="hero-live-console-title">
              <span className="hero-live-status-dot" aria-hidden="true"></span>
              <span>Cloud Ops Live</span>
              <span className="hero-live-running">RUNNING</span>
            </div>
            <span className="hero-live-mission">MISSION 04 / 12</span>
          </div>
          <div className="hero-live-console-body" key={`${activeChip}-${activityIndex}`}>
            <span className="hero-live-glyph">{currentActivity.glyph}</span>
            <div className="hero-live-copy">
              <strong>{currentActivity.title}</strong>
              <span>{currentActivity.detail}</span>
            </div>
            <div className="hero-live-value">
              <strong>{currentActivity.value}</strong>
              <span>HEALTH</span>
            </div>
          </div>
          <div className="hero-live-progress" aria-label={`${currentActivity.progress}% complete`}>
            <span style={{ width: `${currentActivity.progress}%` }}></span>
          </div>
          <div className="hero-live-console-footer">
            <span><i></i> STREAMING EVENTS</span>
            <span>{activeChipName.toUpperCase()}</span>
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
                aria-pressed={activeChip === chip.id}
                onClick={() => setActiveChip(chip.id)}
              >
                <span className="tech-chip-icon">{chip.icon}</span>
                <span>{chip.name}</span>
              </button>
            ))}
          </div>
          <div className="hero-visual-footer-meta">
            <span>Focus area</span>
            <strong>{activeChipName}</strong>
            <span className="hero-footer-status"><span className="live-pulse"></span> Learning live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
