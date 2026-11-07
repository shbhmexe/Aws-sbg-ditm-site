"use client";

import { useRef, useEffect, useState } from "react";
import "./DoomArtifact.css";

const ACTIONS = ["mouth", "laser", "overcharge"];

export default function DoomArtifact() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const lastActionRef = useRef(null);
  const timerRef = useRef(null);

  const [activeAction, setActiveAction] = useState(null);

  // Trigger random protocol: open mouth, laser throw, or God-Emperor overcharge
  const triggerRandomProtocol = () => {
    if (activeAction) return; // Prevent double-trigger during active animation

    const available = ACTIONS.filter((a) => a !== lastActionRef.current);
    const next = available[Math.floor(Math.random() * available.length)];
    lastActionRef.current = next;
    setActiveAction(next);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveAction(null);
    }, 2400);
  };

  // Global cursor tracking across the ENTIRE viewport
  useEffect(() => {
    const handleGlobalPointerMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const maskCenterX = rect.left + rect.width / 2;
      const maskCenterY = rect.top + rect.height / 2;

      // Delta vector from mask center to cursor position anywhere on screen
      const dx = e.clientX - maskCenterX;
      const dy = e.clientY - maskCenterY;

      // Angle and distance to cursor
      const angle = Math.atan2(dy, dx);
      const dist = Math.hypot(dx, dy);

      // Eyeball travel range: 13px horizontal, 5.5px vertical
      const maxEyeX = 13;
      const maxEyeY = 5.5;

      // Smooth engagement factor: fully activates as cursor moves away from center
      const factor = Math.min(1, Math.max(0.15, dist / 180));

      const eyeX = (Math.cos(angle) * maxEyeX * factor).toFixed(2);
      const eyeY = (Math.sin(angle) * maxEyeY * factor).toFixed(2);

      // 3D head rotation: normalized across window dimensions
      const winW = window.innerWidth || 1920;
      const winH = window.innerHeight || 1080;

      const normX = Math.max(-1.1, Math.min(1.1, dx / (winW * 0.45)));
      const normY = Math.max(-1.1, Math.min(1.1, dy / (winH * 0.45)));

      // Invert Y for natural perspective tilt: cursor up = face tilts up
      const rx = (-normY * 16).toFixed(2);
      const ry = (normX * 18).toFixed(2);

      const glowX = Math.round(50 + normX * 30);
      const glowY = Math.round(50 + normY * 30);

      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (el) {
          el.style.setProperty("--tilt-rx", `${rx}deg`);
          el.style.setProperty("--tilt-ry", `${ry}deg`);
          el.style.setProperty("--eye-x", `${eyeX}px`);
          el.style.setProperty("--eye-y", `${eyeY}px`);
          el.style.setProperty("--glow-x", `${glowX}%`);
          el.style.setProperty("--glow-y", `${glowY}%`);
        }
      });
    };

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`doom-artifact-container ${activeAction ? `action-${activeAction}` : ""}`}
      aria-label="Doctor Doom Sovereign Visage with Living Cursor Tracking Eyes"
      onClick={triggerRandomProtocol}
    >
      {/* 3D Transform Stage */}
      <div className="doom-3d-stage">
        {/* Background Arcane Energy Fog */}
        <div className="doom-arcane-fog" aria-hidden="true" />

        {/* Outer Sacred Geometry Ring SVG (Orbiting Counter-Clockwise) */}
        <svg
          className="doom-svg-canvas doom-ring-outer"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="doomRadialAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f584" stopOpacity="0.32" />
              <stop offset="55%" stopColor="#00d26a" stopOpacity="0.10" />
              <stop offset="85%" stopColor="#0a1812" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="doomGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>

            <linearGradient id="doomTitaniumPlate" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="40%" stopColor="#1e293b" />
              <stop offset="80%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <filter id="doomGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Plasma Blast Gradient for Mouth */}
            <radialGradient id="mouthPlasmaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#00f584" />
              <stop offset="70%" stopColor="#00a844" />
              <stop offset="100%" stopColor="#011408" />
            </radialGradient>

            {/* Laser Beam Gradients */}
            <linearGradient id="laserBeamLeftGrad" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#00f584" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00d26a" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="laserBeamRightGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#00f584" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00d26a" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="laserCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
          </defs>

          {/* Core Ambient Aura */}
          <circle cx="300" cy="300" r="265" fill="url(#doomRadialAura)" />

          {/* Outer Runic Track Rings */}
          <circle
            cx="300"
            cy="300"
            r="254"
            fill="none"
            stroke="rgba(0, 245, 132, 0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle
            cx="300"
            cy="300"
            r="242"
            fill="none"
            stroke="rgba(255, 215, 0, 0.45)"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="300"
            r="230"
            fill="none"
            stroke="rgba(0, 245, 132, 0.15)"
            strokeWidth="1"
            strokeDasharray="2 10"
          />

          {/* 32 Outer Arcane Calibration Tick Marks */}
          {Array.from({ length: 32 }).map((_, i) => {
            const angle = (i * 360) / 32;
            const rad = (angle * Math.PI) / 180;
            const isMajor = i % 4 === 0;
            const r1 = 236;
            const r2 = isMajor ? 248 : 242;
            return (
              <line
                key={i}
                x1={300 + Math.cos(rad) * r1}
                y1={300 + Math.sin(rad) * r1}
                x2={300 + Math.cos(rad) * r2}
                y2={300 + Math.sin(rad) * r2}
                stroke={isMajor ? "#ffd700" : "rgba(0, 245, 132, 0.5)"}
                strokeWidth={isMajor ? "2" : "1"}
              />
            );
          })}

          {/* 8 Cardinal / Intercardinal Orbit Nodes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={i}
                cx={300 + Math.cos(rad) * 242}
                cy={300 + Math.sin(rad) * 242}
                r={i % 2 === 0 ? "5" : "3.5"}
                fill={i % 2 === 0 ? "#ffd700" : "#00f584"}
                filter="url(#doomGlowFilter)"
              />
            );
          })}
        </svg>

        {/* Middle Tech-Calibration Dial (Rotates Clockwise) */}
        <svg
          className="doom-svg-canvas doom-ring-middle"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          <circle
            cx="300"
            cy="300"
            r="200"
            fill="none"
            stroke="rgba(0, 245, 132, 0.45)"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="300"
            r="192"
            fill="none"
            stroke="rgba(0, 245, 132, 0.2)"
            strokeWidth="1"
            strokeDasharray="3 12"
          />

          {/* 16 Radial Tech Tick Marks & Axis Crosshairs */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const x1 = 300 + Math.cos(rad) * 192;
            const y1 = 300 + Math.sin(rad) * 192;
            const x2 = 300 + Math.cos(rad) * (i % 4 === 0 ? 212 : 202);
            const y2 = 300 + Math.sin(rad) * (i % 4 === 0 ? 212 : 202);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i % 4 === 0 ? "#ffd700" : "rgba(0, 245, 132, 0.6)"}
                strokeWidth={i % 4 === 0 ? "2.5" : "1.5"}
              />
            );
          })}

          {/* 4 Cardinal Crosshair Extensions */}
          <line x1="300" y1="80" x2="300" y2="105" stroke="#ffd700" strokeWidth="2" />
          <line x1="300" y1="495" x2="300" y2="520" stroke="#ffd700" strokeWidth="2" />
          <line x1="80" y1="300" x2="105" y2="300" stroke="#ffd700" strokeWidth="2" />
          <line x1="495" y1="300" x2="520" y2="300" stroke="#ffd700" strokeWidth="2" />
        </svg>

        {/* Inner Octagram Arcane Geometry (Pulsing Resonance) */}
        <svg
          className="doom-svg-canvas doom-ring-inner"
          viewBox="0 0 600 600"
          aria-hidden="true"
        >
          {/* Concentric Octagonal Sacred Geometry */}
          <polygon
            points="300,140 413,187 460,300 413,413 300,460 187,413 140,300 187,187"
            fill="none"
            stroke="rgba(0, 245, 132, 0.4)"
            strokeWidth="1.5"
          />
          <polygon
            points="300,160 399,201 440,300 399,399 300,440 201,399 160,300 201,201"
            fill="rgba(0, 245, 132, 0.03)"
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />

          {/* Corner Node Dots */}
          {[
            [300, 140], [413, 187], [460, 300], [413, 413],
            [300, 460], [187, 413], [140, 300], [187, 187]
          ].map(([nx, ny], idx) => (
            <circle
              key={idx}
              cx={nx}
              cy={ny}
              r="4"
              fill={idx % 2 === 0 ? "#ffd700" : "#00f584"}
              filter="url(#doomGlowFilter)"
            />
          ))}
        </svg>

        {/* ============================================================
            THE MASK OF DOCTOR DOOM — WITH CURSOR-TRACKING EYEBALLS
            ============================================================ */}
        <div
          className="doom-central-mask-stage"
          title="Click to activate random Doctor Doom protocol"
          onClick={(e) => {
            e.stopPropagation();
            triggerRandomProtocol();
          }}
        >
          <svg
            className="doom-mask-svg"
            viewBox="0 0 340 380"
            filter="drop-shadow(0 20px 48px rgba(0, 0, 0, 0.96))"
            aria-hidden="true"
          >
            <defs>
              {/* Metallic Titanium Shader */}
              <linearGradient id="maskTitaniumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="25%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="75%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#09111c" />
              </linearGradient>

              {/* Edge Specular Light */}
              <linearGradient id="maskEdgeLight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#00f584" />
              </linearGradient>

              {/* Latverian Emerald Cowl / Hood */}
              <linearGradient id="hoodGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#042f1a" />
                <stop offset="40%" stopColor="#021f11" />
                <stop offset="80%" stopColor="#01140b" />
                <stop offset="100%" stopColor="#000905" />
              </linearGradient>

              {/* Eye Socket Sclera / Backdrop */}
              <radialGradient id="eyeSocketBackdrop" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#072213" />
                <stop offset="65%" stopColor="#020e06" />
                <stop offset="100%" stopColor="#000402" />
              </radialGradient>

              {/* Eyeball Glowing Iris Gradient */}
              <radialGradient id="eyeballIrisGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#00f584" />
                <stop offset="75%" stopColor="#00c853" />
                <stop offset="100%" stopColor="#011c0c" />
              </radialGradient>

              {/* Precise ClipPaths for Eye Sockets */}
              <clipPath id="doomLeftEyeClip">
                <polygon points="106,192 148,198 142,212 112,208" />
              </clipPath>

              <clipPath id="doomRightEyeClip">
                <polygon points="234,192 192,198 198,212 228,208" />
              </clipPath>

              {/* Anamorphic Lens Flare Gradient */}
              <linearGradient id="anamorphicFlareGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#00f584" stopOpacity="0" />
                <stop offset="25%" stopColor="#00f584" stopOpacity="0.4" />
                <stop offset="45%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="55%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="75%" stopColor="#00f584" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00f584" stopOpacity="0" />
              </linearGradient>

              {/* Realistic Recessed Throat Combustion Void Gradient */}
              <radialGradient id="throatCavityGrad" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="22%" stopColor="#00f584" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#047857" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#022c22" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#01140e" stopOpacity="1" />
              </radialGradient>

              {/* Chrome Hydraulic Piston Shaft Shader */}
              <linearGradient id="pistonChromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="35%" stopColor="#cbd5e1" />
                <stop offset="60%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Piston Outer Sleeve Cylinder */}
              <linearGradient id="pistonCylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#09111c" />
              </linearGradient>

              {/* Arcane Mystic Halo Radial Gold Glow */}
              <radialGradient id="arcaneHaloGold" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#ffd700" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#d4af37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00f584" stopOpacity="0" />
              </radialGradient>

              {/* Ionized Cinematic Laser Beams */}
              <linearGradient id="laserBeamLeftNew" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="18%" stopColor="#a7f3d0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#00f584" stopOpacity="0.65" />
                <stop offset="85%" stopColor="#00d26a" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#00d26a" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="laserBeamRightNew" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="18%" stopColor="#a7f3d0" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#00f584" stopOpacity="0.65" />
                <stop offset="85%" stopColor="#00d26a" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#00d26a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* --- DOOM HOOD / COWL SILHOUETTE --- */}
            <path
              d="M 170 12 
                 C 250 12, 310 65, 316 160
                 C 322 255, 290 340, 275 365
                 C 255 350, 250 310, 245 280
                 C 240 230, 240 180, 235 150
                 C 210 110, 185 95, 170 95
                 C 155 95, 130 110, 105 150
                 C 100 180, 100 230, 95 280
                 C 90 310, 85 350, 65 365
                 C 50 340, 18 255, 24 160
                 C 30 65, 90 12, 170 12 Z"
              fill="url(#hoodGreenGrad)"
              stroke="rgba(0, 245, 132, 0.45)"
              strokeWidth="2.5"
            />

            {/* Inner Hood Shadow Vignette */}
            <path
              d="M 170 35 
                 C 235 35, 280 80, 285 165
                 C 290 240, 260 300, 245 320
                 C 230 250, 225 160, 170 125
                 C 115 160, 110 250, 95 320
                 C 80 300, 50 240, 55 165
                 C 60 80, 105 35, 170 35 Z"
              fill="#020905"
              opacity="0.85"
            />

            {/* --- TITANIUM HELMET BROW & FOREHEAD --- */}
            <path
              d="M 85 150 
                 C 90 110, 120 75, 170 75 
                 C 220 75, 250 110, 255 150 
                 L 255 185 
                 C 235 180, 205 178, 170 178
                 C 135 178, 105 180, 85 185 Z"
              fill="url(#maskTitaniumGrad)"
              stroke="url(#maskEdgeLight)"
              strokeWidth="2"
            />

            {/* Central Sovereign Crest / Diadem (Gold Crown Medallion) */}
            <polygon
              points="170,70 184,86 170,102 156,86"
              fill="url(#doomGoldTrim)"
              stroke="#ffd700"
              strokeWidth="1.5"
            />
            <circle cx="170" cy="86" r="3.5" fill="#00f584" filter="url(#doomGlowFilter)" />

            {/* Forehead Armor Suture Rivets */}
            <circle cx="115" cy="115" r="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="140" cy="100" r="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="200" cy="100" r="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="225" cy="115" r="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />

            {/* --- MENACING BROW RIDGE --- */}
            <path
              d="M 85 185
                 C 105 180, 135 178, 170 178
                 C 205 178, 235 180, 255 185
                 L 250 205
                 C 230 200, 200 198, 170 200
                 C 140 198, 110 200, 90 205 Z"
              fill="#0f172a"
              stroke="rgba(0, 245, 132, 0.4)"
              strokeWidth="1.5"
            />

            {/* ============================================================
                LEFT EYE ASSEMBLY — CLIPPED EYEBALL & PUPIL TRACKING CURSOR
                ============================================================ */}
            <g className="doom-eye-assembly">
              {/* Deep Void Socket Backdrop */}
              <polygon
                points="106,192 148,198 142,212 112,208"
                fill="url(#eyeSocketBackdrop)"
              />

              {/* Eyeball Clipped to Socket Slit */}
              <g clipPath="url(#doomLeftEyeClip)">
                {/* Socket Ambient Green Glow */}
                <ellipse cx="127" cy="202.5" rx="16" ry="7" fill="rgba(0, 245, 132, 0.28)" filter="url(#doomGlowFilter)" />
                
                {/* Dynamically Translated Eyeball & Slit Pupil */}
                <g className="doom-eyeball-left">
                  {/* Glowing Iris Sphere */}
                  <circle cx="127" cy="202.5" r="8.5" fill="url(#eyeballIrisGrad)" filter="url(#doomGlowFilter)" />
                  {/* Iris Ring Definition */}
                  <circle cx="127" cy="202.5" r="6" fill="#00f584" />
                  {/* Doctor Doom Menacing Slit Pupil */}
                  <ellipse cx="127" cy="202.5" rx="2.2" ry="5.5" fill="#010d06" stroke="#ffffff" strokeWidth="0.75" />
                  {/* White-Hot Laser Glint */}
                  <circle cx="125.8" cy="200.5" r="1.3" fill="#ffffff" />
                </g>
              </g>

              {/* Titanium Outer Socket Bezel Stroke */}
              <polygon
                points="106,192 148,198 142,212 112,208"
                fill="none"
                stroke="rgba(0, 245, 132, 0.85)"
                strokeWidth="1.6"
              />
            </g>

            {/* ============================================================
                RIGHT EYE ASSEMBLY — CLIPPED EYEBALL & PUPIL TRACKING CURSOR
                ============================================================ */}
            <g className="doom-eye-assembly">
              {/* Deep Void Socket Backdrop */}
              <polygon
                points="234,192 192,198 198,212 228,208"
                fill="url(#eyeSocketBackdrop)"
              />

              {/* Eyeball Clipped to Socket Slit */}
              <g clipPath="url(#doomRightEyeClip)">
                {/* Socket Ambient Green Glow */}
                <ellipse cx="213" cy="202.5" rx="16" ry="7" fill="rgba(0, 245, 132, 0.28)" filter="url(#doomGlowFilter)" />

                {/* Dynamically Translated Eyeball & Slit Pupil */}
                <g className="doom-eyeball-right">
                  {/* Glowing Iris Sphere */}
                  <circle cx="213" cy="202.5" r="8.5" fill="url(#eyeballIrisGrad)" filter="url(#doomGlowFilter)" />
                  {/* Iris Ring Definition */}
                  <circle cx="213" cy="202.5" r="6" fill="#00f584" />
                  {/* Doctor Doom Menacing Slit Pupil */}
                  <ellipse cx="213" cy="202.5" rx="2.2" ry="5.5" fill="#010d06" stroke="#ffffff" strokeWidth="0.75" />
                  {/* White-Hot Laser Glint */}
                  <circle cx="211.8" cy="200.5" r="1.3" fill="#ffffff" />
                </g>
              </g>

              {/* Titanium Outer Socket Bezel Stroke */}
              <polygon
                points="234,192 192,198 198,212 228,208"
                fill="none"
                stroke="rgba(0, 245, 132, 0.85)"
                strokeWidth="1.6"
              />
            </g>

            {/* --- NOSE RIDGE & ANGULAR CHEEK GUARDS --- */}
            <polygon
              points="170,198 180,245 170,252 160,245"
              fill="#334155"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            {/* Left Cheek Plate */}
            <path
              d="M 90 205
                 L 155 220
                 L 158 275
                 L 115 305
                 L 82 250 Z"
              fill="url(#maskTitaniumGrad)"
              stroke="url(#maskEdgeLight)"
              strokeWidth="1.5"
            />
            {/* Right Cheek Plate */}
            <path
              d="M 250 205
                 L 185 220
                 L 182 275
                 L 225 305
                 L 258 250 Z"
              fill="url(#maskTitaniumGrad)"
              stroke="url(#maskEdgeLight)"
              strokeWidth="1.5"
            />

            {/* Cheek Hydraulic Piston Sleeves & Bolt Hinges (Fixed Anchor) */}
            <g className="doom-cheek-hinges">
              {/* Left Piston Cylinder Sleeve */}
              <rect x="113" y="278" width="7" height="22" rx="2" fill="url(#pistonCylinderGrad)" stroke="#334155" strokeWidth="0.8" />
              {/* Left Hinge Bolt */}
              <circle cx="106" cy="285" r="14" fill="#0f172a" stroke="url(#doomGoldTrim)" strokeWidth="1.8" />
              <circle cx="106" cy="285" r="8" fill="#020617" stroke="#00f584" strokeWidth="1.2" />
              <circle cx="106" cy="285" r="3" fill="#ffd700" />

              {/* Right Piston Cylinder Sleeve */}
              <rect x="220" y="278" width="7" height="22" rx="2" fill="url(#pistonCylinderGrad)" stroke="#334155" strokeWidth="0.8" />
              {/* Right Hinge Bolt */}
              <circle cx="234" cy="285" r="14" fill="#0f172a" stroke="url(#doomGoldTrim)" strokeWidth="1.8" />
              <circle cx="234" cy="285" r="8" fill="#020617" stroke="#00f584" strokeWidth="1.2" />
              <circle cx="234" cy="285" r="3" fill="#ffd700" />
            </g>

            {/* ============================================================
                FEATURE 1: REALISTIC INTERNAL PLASMA THROAT CAVITY
                ============================================================ */}
            <g className="mouth-plasma-furnace">
              {/* Deep Recessed Steel Void Cavity */}
              <rect x="136" y="261" width="68" height="34" rx="4" fill="#030805" stroke="#10b981" strokeWidth="1.2" />
              
              {/* Upper Internal Metallic Intake Baffle */}
              <rect x="139" y="262" width="62" height="4" fill="#1e293b" />
              <line x1="142" y1="265" x2="198" y2="265" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />

              {/* Deep Atmospheric Plasma Gradient */}
              <ellipse cx="170" cy="276" rx="28" ry="11" fill="url(#throatCavityGrad)" filter="url(#doomGlowFilter)" />
              
              {/* White-Hot Fusion Core */}
              <ellipse cx="170" cy="276" rx="14" ry="5" fill="#ffffff" />

              {/* Harmonic Plasma Wave Filaments */}
              <path
                d="M 148 276 Q 159 268, 170 270 Q 181 272, 192 276"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
                className="mouth-core-arc"
              />
              <path
                d="M 140 278 Q 155 264, 170 264 Q 185 264, 200 278"
                stroke="#00f584"
                strokeWidth="2"
                fill="none"
                className="mouth-energy-arc"
                filter="url(#doomGlowFilter)"
              />

              {/* Subtle Plasma Thermal Glow */}
              <circle cx="152" cy="272" r="1.5" fill="#ffffff" opacity="0.8" />
              <circle cx="188" cy="272" r="1.5" fill="#ffffff" opacity="0.8" />
              <circle cx="170" cy="283" r="1.8" fill="#a7f3d0" opacity="0.7" />
            </g>

            {/* ============================================================
                THE LOWER JAW ASSEMBLY (SLIDES DOWN 30PX WITH HYDRAULIC PISTONS)
                ============================================================ */}
            <g className="doom-jaw-assembly">
              {/* Chrome Hydraulic Piston Shafts */}
              <rect x="115" y="270" width="3" height="26" rx="1" fill="url(#pistonChromeGrad)" />
              <rect x="222" y="270" width="3" height="26" rx="1" fill="url(#pistonChromeGrad)" />

              {/* Grille Outer Housing */}
              <rect
                x="135"
                y="262"
                width="70"
                height="58"
                rx="4"
                fill="#060c14"
                stroke="url(#doomGoldTrim)"
                strokeWidth="1.8"
              />

              {/* Grille Vertical Slits */}
              {[-22, -14, -6, 2, 10, 18].map((offset, idx) => (
                <line
                  key={idx}
                  x1={170 + offset}
                  y1="268"
                  x2={170 + offset}
                  y2="314"
                  stroke="rgba(0, 245, 132, 0.75)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              ))}

              {/* Center Grille Crossbeam Bar */}
              <line x1="135" y1="291" x2="205" y2="291" stroke="#334155" strokeWidth="2" />

              {/* --- CHISELED TITANIUM CHIN PLATE --- */}
              <polygon
                points="140,320 200,320 185,355 155,355"
                fill="url(#maskTitaniumGrad)"
                stroke="rgba(0, 245, 132, 0.5)"
                strokeWidth="1.8"
              />
              {/* Chin Accent Gold Node */}
              <circle cx="170" cy="338" r="3.5" fill="#ffd700" filter="url(#doomGlowFilter)" />
            </g>

            {/* ============================================================
                FEATURE 2: CINEMATIC OPTIC DEATH LASERS
                ============================================================ */}
            {activeAction === "laser" && (
              <g className="optic-lasers-active">
                {/* Blinding Anamorphic Horizontal Flare Streak Across Both Eyes */}
                <line
                  x1="-120"
                  y1="202.5"
                  x2="460"
                  y2="202.5"
                  stroke="url(#anamorphicFlareGrad)"
                  strokeWidth="4"
                  className="anamorphic-streak-wide"
                />
                <line
                  x1="60"
                  y1="202.5"
                  x2="280"
                  y2="202.5"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="anamorphic-streak-core"
                />

                {/* Left Optic Death Beam (Emanating from 127, 202.5) */}
                <g className="optic-beam-left">
                  {/* Wide Volumetric Ionized Plasma Cone */}
                  <polygon
                    points="127,202.5 -380,350 -380,55"
                    fill="url(#laserBeamLeftNew)"
                    filter="url(#doomGlowFilter)"
                  />
                  {/* Concentrated White-Hot Beam Core */}
                  <polygon
                    points="127,202.5 -380,230 -380,175"
                    fill="url(#laserCoreGrad)"
                  />
                  {/* High-Velocity Razor Core Beam */}
                  <line
                    x1="127"
                    y1="202.5"
                    x2="-380"
                    y2="202.5"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    className="core-laser-line"
                  />
                  {/* Muzzle Explosive Rings */}
                  <circle cx="127" cy="202.5" r="14" fill="none" stroke="#ffffff" strokeWidth="2.5" className="muzzle-ring" />
                  <circle cx="127" cy="202.5" r="28" fill="none" stroke="#00f584" strokeWidth="2" className="muzzle-ring-outer" />
                  {/* Pupil Diamond Star Flare */}
                  <polygon
                    points="127,184 131,198 145,202.5 131,207 127,221 123,207 109,202.5 123,198"
                    fill="#ffffff"
                    filter="url(#doomGlowFilter)"
                    className="pupil-star-flare"
                  />
                  <circle cx="127" cy="202.5" r="4.5" fill="#ffffff" />
                </g>

                {/* Right Optic Death Beam (Emanating from 213, 202.5) */}
                <g className="optic-beam-right">
                  {/* Wide Volumetric Ionized Plasma Cone */}
                  <polygon
                    points="213,202.5 720,350 720,55"
                    fill="url(#laserBeamRightNew)"
                    filter="url(#doomGlowFilter)"
                  />
                  {/* Concentrated White-Hot Beam Core */}
                  <polygon
                    points="213,202.5 720,230 720,175"
                    fill="url(#laserCoreGrad)"
                  />
                  {/* High-Velocity Razor Core Beam */}
                  <line
                    x1="213"
                    y1="202.5"
                    x2="720"
                    y2="202.5"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    className="core-laser-line"
                  />
                  {/* Muzzle Explosive Rings */}
                  <circle cx="213" cy="202.5" r="14" fill="none" stroke="#ffffff" strokeWidth="2.5" className="muzzle-ring" />
                  <circle cx="213" cy="202.5" r="28" fill="none" stroke="#00f584" strokeWidth="2" className="muzzle-ring-outer" />
                  {/* Pupil Diamond Star Flare */}
                  <polygon
                    points="213,184 217,198 231,202.5 217,207 213,221 209,207 195,202.5 209,198"
                    fill="#ffffff"
                    filter="url(#doomGlowFilter)"
                    className="pupil-star-flare"
                  />
                  <circle cx="213" cy="202.5" r="4.5" fill="#ffffff" />
                </g>
              </g>
            )}

            {/* ============================================================
                FEATURE 3: LATVERIAN ARCANE HEGEMONY (REALISTIC MYSTIC MATRIX)
                ============================================================ */}
            {activeAction === "overcharge" && (
              <g className="overcharge-elements">
                {/* Holographic Arcane Sacred Geometry Mandala (Behind Forehead) */}
                <g className="arcane-mandala">
                  {/* Outer Mystic Rune Circle */}
                  <circle
                    cx="170"
                    cy="86"
                    r="92"
                    fill="none"
                    stroke="rgba(255, 215, 0, 0.45)"
                    strokeWidth="1.4"
                    strokeDasharray="4 8"
                    className="mandala-ring-outer"
                  />
                  <circle
                    cx="170"
                    cy="86"
                    r="78"
                    fill="none"
                    stroke="rgba(0, 245, 132, 0.55)"
                    strokeWidth="1.2"
                    strokeDasharray="6 4"
                    className="mandala-ring-middle"
                  />
                  <circle
                    cx="170"
                    cy="86"
                    r="62"
                    fill="none"
                    stroke="rgba(255, 215, 0, 0.75)"
                    strokeWidth="1.5"
                  />
                  {/* 12 Runic Calibration Ticks */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const rad = (i * 30 * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1={170 + Math.cos(rad) * 78}
                        y1={86 + Math.sin(rad) * 78}
                        x2={170 + Math.cos(rad) * 92}
                        y2={86 + Math.sin(rad) * 92}
                        stroke={i % 3 === 0 ? "#ffd700" : "rgba(0, 245, 132, 0.6)"}
                        strokeWidth={i % 3 === 0 ? "1.8" : "1"}
                      />
                    );
                  })}
                  {/* Sacred Geometry 8-Point Star Mandala */}
                  <polygon
                    points="170,18 184,68 238,86 184,104 170,154 156,104 102,86 156,68"
                    fill="none"
                    stroke="rgba(255, 215, 0, 0.5)"
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="218,38 198,72 218,134 170,114 122,134 142,72 122,38 170,58"
                    fill="none"
                    stroke="rgba(0, 245, 132, 0.4)"
                    strokeWidth="1"
                  />
                </g>

                {/* Integrated Titanium Forehead Sovereign Tiara (Flush on brow) */}
                <path
                  d="M 120 86 
                     C 138 72, 170 68, 170 68 
                     C 170 68, 202 72, 220 86 
                     L 210 98 
                     C 195 88, 170 85, 170 85 
                     C 170 85, 145 88, 130 98 Z"
                  fill="url(#doomGoldTrim)"
                  stroke="#ffd700"
                  strokeWidth="1.5"
                  filter="url(#doomGlowFilter)"
                  className="sovereign-tiara"
                />

                {/* Realistic Organic Lightning Filaments (Hugging Armor Seams) */}
                <g className="organic-lightning-group">
                  {/* Tendril 1: Center Gem -> Left Brow -> Cheek */}
                  <path
                    d="M 170 86 Q 152 110, 140 128 Q 148 145, 134 170 Q 118 188, 127 202 Q 108 235, 92 265"
                    className="lightning-path-glow"
                  />
                  <path
                    d="M 170 86 Q 152 110, 140 128 Q 148 145, 134 170 Q 118 188, 127 202 Q 108 235, 92 265"
                    className="lightning-path-core"
                  />

                  {/* Tendril 2: Center Gem -> Right Brow -> Cheek */}
                  <path
                    d="M 170 86 Q 188 110, 200 128 Q 192 145, 206 170 Q 222 188, 213 202 Q 232 235, 248 265"
                    className="lightning-path-glow"
                  />
                  <path
                    d="M 170 86 Q 188 110, 200 128 Q 192 145, 206 170 Q 222 188, 213 202 Q 232 235, 248 265"
                    className="lightning-path-core"
                  />

                  {/* Tendril 3: Brow Cross-Arc */}
                  <path
                    d="M 112 150 Q 138 138, 170 142 Q 202 138, 228 150"
                    className="lightning-path-glow"
                  />
                  <path
                    d="M 112 150 Q 138 138, 170 142 Q 202 138, 228 150"
                    className="lightning-path-core"
                  />

                  {/* Tendril 4: Jaw Link Arcs */}
                  <path
                    d="M 106 285 Q 130 272, 150 278 Q 170 270, 190 278 Q 210 272, 234 285"
                    className="lightning-path-glow"
                  />
                  <path
                    d="M 106 285 Q 130 272, 150 278 Q 170 270, 190 278 Q 210 272, 234 285"
                    className="lightning-path-core"
                  />
                </g>

                {/* Blinding Forehead Diadem Solar Beacon */}
                <polygon
                  points="170,52 173,81 199,86 173,91 170,120 167,91 141,86 167,81"
                  fill="#ffffff"
                  filter="url(#doomGlowFilter)"
                  className="beacon-star"
                />
                <circle cx="170" cy="86" r="16" fill="url(#arcaneHaloGold)" filter="url(#doomGlowFilter)" />
                <circle cx="170" cy="86" r="6" fill="#ffffff" />
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
