"use client";

import {
  Crown,
  Shield,
  Layers,
  ExternalLink,
} from "lucide-react";
import "./DoomSovereignLeader.css";

const LI_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const GH_PATH =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

export default function DoomSovereignLeader({ member }) {
  return (
    <div className="doom-sovereign-matrix">
      {/* 1. Hardware-Accelerated Ambient Field & Matrix Grid */}
      <div className="doom-static-glow" aria-hidden="true" />
      <div className="doom-circuit-lines" aria-hidden="true" />

      {/* Cyber-Armor Faceted Corner Brackets */}
      <span className="doom-armor-bolt bolt-top-left" aria-hidden="true" />
      <span className="doom-armor-bolt bolt-top-right" aria-hidden="true" />
      <span className="doom-armor-bolt bolt-bottom-left" aria-hidden="true" />
      <span className="doom-armor-bolt bolt-bottom-right" aria-hidden="true" />

      {/* 2. The Sovereign Armor Monolith Body */}
      <div className="doom-chassis-content">
        {/* Left Column: The Sovereign Throne Avatar Aperture */}
        <div className="doom-avatar-throne">
          <div className="doom-portal-pod">
            {/* Emerald Mystic Ambient Aura */}
            <div className="doom-portal-aura" aria-hidden="true" />

            {/* Dual Arcane Sorcery Rune Rings (GPU-accelerated counter-orbit) */}
            <div className="doom-arcane-rune-ring" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="rune-svg">
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  fill="none"
                  stroke="rgba(0, 245, 132, 0.42)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8 16 6"
                />
              </svg>
            </div>
            <div className="doom-arcane-rune-ring-inner" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="rune-svg">
                <circle
                  cx="100"
                  cy="100"
                  r="83"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.45)"
                  strokeWidth="1.2"
                  strokeDasharray="3 7 20 5"
                />
              </svg>
            </div>

            {/* Faceted Titanium Bezel Frame */}
            <div className="doom-titanium-bezel">
              <div className="doom-inner-viewport">
                <img
                  src={member.profileUrl}
                  alt={member.name}
                  className="doom-avatar-portrait"
                  loading="eager"
                  decoding="async"
                />
                <div className="doom-hologram-scanlines" aria-hidden="true" />
                <div className="doom-plasma-sheen" aria-hidden="true" />
              </div>
            </div>

            {/* Floating Monarch Crest Diadem */}
            <div className="doom-floating-diadem">
              <Crown size={15} className="diadem-crown" />
              <span>SOVEREIGN APEX</span>
            </div>

            {/* Status Beacon Tags */}
            <div className="doom-pod-tag tag-lower-left">
              <span className="dot-green" />
              <span>AWS SBGL LEADER</span>
            </div>
            <div className="doom-pod-tag tag-lower-right">
              <Shield size={11} className="text-gold" />
              <span>TITANIUM MK-VII</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sovereign Dossier */}
        <div className="doom-command-dossier">
          {/* Header Titleplate */}
          <div className="doom-titleplate">
            <div className="doom-eyebrow-row">
              <span className="doom-royal-badge">
                <Crown size={12} />
                <span>AWS CHAPTER LEADER</span>
              </span>
            </div>

            <h3 className="doom-leader-name">{member.name}</h3>

            <p className="doom-leader-station">
              <span className="station-role">{member.role}</span>
              <span className="station-sep">·</span>
              <span className="station-chapter">{member.chapter}</span>
            </p>
          </div>

          {/* The Monarch's Imperial Decree (Quote) */}
          <div className="doom-imperial-decree">
            <div className="decree-sigil-bar">
              <div className="sigil-glow-line" />
              <div className="sigil-emblem">
                <Crown size={14} />
              </div>
            </div>
            <div className="decree-body">
              <p className="decree-text">&ldquo;{member.quote}&rdquo;</p>
            </div>
          </div>

          {/* Mission Bio */}
          <p className="doom-mission-narrative">{member.description}</p>

          {/* Pillars of Dominion (Interactive Focus Armor Cells) */}
          <div className="doom-pillars-section">
            <span className="pillars-label">
              <Layers size={12} />
              <span>PILLARS OF DOMINION:</span>
            </span>

            <div className="pillars-cells-row">
              {member.focusAreas.map((area, i) => (
                <div key={area} className="pillar-armor-chip">
                  <span className="pillar-idx">0{i + 1}</span>
                  <span className="pillar-name">{area}</span>
                  <span className="pillar-status" />
                </div>
              ))}
            </div>
          </div>

          {/* Sovereign Comms & Official Links */}
          <div className="doom-footer-bar">
            <div className="doom-social-buttons">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doom-cyber-btn"
                  aria-label={`${member.name} on GitHub`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={GH_PATH} />
                  </svg>
                  <span className="btn-label">GitHub // @shbhmexe</span>
                  <ExternalLink size={11} className="btn-ext" />
                </a>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doom-cyber-btn btn-gold"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={LI_PATH} />
                  </svg>
                  <span className="btn-label">LinkedIn // Connect</span>
                  <ExternalLink size={11} className="btn-ext" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
