"use client";

import { useEffect, useState } from "react";

const CHIPS = [
  { id: "compute", name: "Compute (EC2 / Lambda)", icon: "EC2" },
  { id: "ai", name: "GenAI & Bedrock", icon: "AI" },
  { id: "storage", name: "S3 & Databases", icon: "S3" },
];

const SERVICES = [
  { id: "ec2", glyph: "EC2", name: "Compute", detail: "2 nodes online", color: "amber" },
  { id: "lambda", glyph: "λ", name: "Serverless", detail: "14ms runtime", color: "cyan" },
  { id: "bedrock", glyph: "AI", name: "Bedrock", detail: "Model ready", color: "violet" },
  { id: "s3", glyph: "S3", name: "Storage", detail: "128 objects", color: "emerald" },
];

function FloatingMetric({ className, tone, icon, label, value }) {
  return (
    <div className={`floating-metric-pill ${className}`}>
      <div className={`metric-icon-wrap ${tone}`}>{icon}</div>
      <div className="metric-text-group">
        <span className="metric-label">{label}</span>
        <span className="metric-value">{value}</span>
      </div>
    </div>
  );
}

export default function HeroGrid() {
  const [activeChip, setActiveChip] = useState("compute");
  const [activeService, setActiveService] = useState("ec2");
  const [missionStep, setMissionStep] = useState(2);
  const [isDeploying, setIsDeploying] = useState(true);

  const activeChipName = CHIPS.find((chip) => chip.id === activeChip)?.name || "All systems";

  useEffect(() => {
    if (!isDeploying) return undefined;

    const id = window.setInterval(() => {
      setMissionStep((step) => (step >= SERVICES.length ? 1 : step + 1));
    }, 2200);

    return () => window.clearInterval(id);
  }, [isDeploying]);

  useEffect(() => {
    const nextService = SERVICES[Math.max(0, missionStep - 1)];
    if (nextService) setActiveService(nextService.id);
  }, [missionStep]);

  return (
    <div className="hero-visual-wrapper">
      <div className="hero-visual-card">
        <div className="hero-visual-header">
          <div className="console-dots" aria-hidden="true">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="console-title">
            <span className="console-icon">AWS</span>
            <span>aws-sbg-ditm-hub // ap-south-1</span>
          </div>
          <div className="console-badge">
            <span className="live-pulse"></span>
            <span>LIVE 99.99%</span>
          </div>
        </div>

        <div className="hero-image-stage" data-active={activeChip}>
          <img
            src="/assets/aws-hero-architecture.jpg"
            alt="AWS Cloud Architecture and Student Builder Community"
            className="hero-main-image"
          />
          <div className="image-depth-overlay"></div>

          <FloatingMetric
            className="metric-top-right"
            tone="amber"
            icon="⚡"
            label="Serverless Cloud"
            value="Active & Scalable"
          />
          <FloatingMetric
            className="metric-bottom-left"
            tone="cyan"
            icon="+"
            label="Community Hub"
            value="500+ DITM Builders"
          />
          <FloatingMetric
            className="metric-bottom-right"
            tone="emerald"
            icon="✓"
            label="AWS Certified"
            value="Study Groups Ready"
          />
        </div>

        <section className="hero-mission-panel" aria-label="Live cloud mission control">
          <div className="hero-mission-header">
            <div>
              <div className="hero-mission-kicker">
                <span className="hero-mission-live-dot" aria-hidden="true"></span>
                <span>Cloud mission control</span>
                <span className="hero-mission-running">LIVE</span>
              </div>
              <strong className="hero-mission-title">Build the stack</strong>
            </div>
            <button
              className="hero-mission-toggle"
              type="button"
              onClick={() => setIsDeploying((running) => !running)}
              aria-label={isDeploying ? "Pause cloud mission" : "Resume cloud mission"}
              aria-pressed={isDeploying}
            >
              <span>{isDeploying ? "||" : "▶"}</span>
              <small>{isDeploying ? "RUNNING" : "PAUSED"}</small>
            </button>
          </div>

          <div className="hero-mission-meta">
            <span><b>DEPLOYMENT RUN</b> 04</span>
            <span>{missionStep} / {SERVICES.length} ONLINE</span>
          </div>
          <div className="hero-mission-progress" aria-label={`${Math.round((missionStep / SERVICES.length) * 100)} percent deployed`}>
            <span style={{ width: `${(missionStep / SERVICES.length) * 100}%` }}></span>
          </div>

          <div className="hero-service-grid">
            {SERVICES.map((service, index) => {
              const isOnline = index < missionStep;
              const isActive = service.id === activeService;

              return (
                <button
                  className={`hero-service-node ${isActive ? "active" : ""} ${isOnline ? "online" : ""}`}
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service.id)}
                  aria-pressed={isActive}
                >
                  <span className={`hero-service-glyph ${service.color}`}>{service.glyph}</span>
                  <span className="hero-service-copy">
                    <strong>{service.name}</strong>
                    <small>{service.detail}</small>
                  </span>
                  <span className="hero-service-state">{isOnline ? "READY" : "QUEUED"}</span>
                </button>
              );
            })}
          </div>

          <div className="hero-mission-footer">
            <span><i></i> handshake complete</span>
            <strong>{Math.round((missionStep / SERVICES.length) * 100)}%</strong>
          </div>
        </section>

        <div className="hero-visual-footer">
          <div className="tech-chips-row">
            {CHIPS.map((chip) => (
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
