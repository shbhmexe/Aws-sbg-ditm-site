'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '@/app/styles/not-found.css';

export default function NotFound() {
  const [lightning, setLightning] = useState(false);
  const [recalibrated, setRecalibrated] = useState(false);
  const maskRef = useRef(null);

  // 3D Parallax tilt on Doctor Doom mask
  useEffect(() => {
    const el = maskRef.current;
    if (!el) return;

    const handlePointerMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -14;
      const tiltY = (x / (rect.width / 2)) * 14;

      el.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      el.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    };

    const handlePointerLeave = () => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };

    window.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (el) el.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  const triggerRecalibrate = () => {
    setLightning(true);
    setRecalibrated(true);

    setTimeout(() => {
      setLightning(false);
    }, 700);

    setTimeout(() => {
      setRecalibrated(false);
    }, 4500);
  };

  return (
    <main className="doom-404-page">
      {/* Lightning Storm Flash Effect */}
      {lightning && <div className="doom-lightning-flash" aria-hidden="true" />}

      <div className="doom-404-container">
        {/* Marvel Comics & Latverian Top Clearance Strip */}
        <div className="doom-404-badge-row">
          <div className="marvel-stamp-badge" title="Marvel Universe Classification">
            <span>MARVEL COMICS</span>
            <span aria-hidden="true">•</span>
            <span>EARTH-616</span>
          </div>

          <div className="doom-sector-badge">
            <span className="doom-404-beacon" aria-hidden="true" />
            <span>SECTOR 404 // VOID OF LATVERIA</span>
          </div>
        </div>

        {/* 3D Visual Centerpiece: Monolithic 404 with Doctor Doom Mask */}
        <div className="doom-404-hero-visual">
          <div className="doom-404-stencil-wrap">
            <span className="doom-404-stencil-text" aria-hidden="true">
              404
            </span>
          </div>

          {/* Doctor Doom Titanium Mask Component with Glowing Emerald Eyes */}
          <div className="doom-404-mask-box" ref={maskRef} title="Lord Victor Von Doom — Monarch of Latveria">
            <svg
              className="doom-mask-svg"
              viewBox="0 0 200 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Doctor Doom Titanium Mask"
            >
              <defs>
                <filter id="eyeGreenGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="titaniumSheen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="hoodGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0a2a1a" />
                  <stop offset="100%" stopColor="#04140c" />
                </linearGradient>
              </defs>

              {/* Hood Outer Cowl */}
              <path
                d="M 100 8 C 45 8, 25 50, 22 130 C 20 185, 45 212, 55 215 C 65 215, 68 185, 75 160 C 85 130, 115 130, 125 160 C 132 185, 135 215, 145 215 C 155 212, 180 185, 178 130 C 175 50, 155 8, 100 8 Z"
                fill="url(#hoodGreen)"
                stroke="#00f584"
                strokeWidth="1.5"
                opacity="0.85"
              />

              {/* Titanium Skull Helm */}
              <path
                d="M 52 75 C 52 45, 148 45, 148 75 C 148 105, 154 135, 142 165 L 100 190 L 58 165 C 46 135, 52 105, 52 75 Z"
                fill="url(#titaniumSheen)"
                stroke="#64748b"
                strokeWidth="2"
              />

              {/* Brow Ridge Band & Golden Forehead Jewel */}
              <path d="M 50 82 Q 100 92 150 82" stroke="#0f172a" strokeWidth="4" />
              <polygon points="100,56 108,68 100,80 92,68" fill="#ffd700" stroke="#00f584" strokeWidth="1" />

              {/* Eye Sockets (Deep Shadows) */}
              <polygon points="62,96 92,100 88,114 66,110" fill="#030806" />
              <polygon points="138,96 108,100 112,114 134,110" fill="#030806" />

              {/* Piercing Glowing Emerald Eyes */}
              <g className="doom-eye-glow">
                <ellipse cx="76" cy="105" rx="9" ry="3.5" fill="#00f584" filter="url(#eyeGreenGlow)" />
                <ellipse cx="76" cy="105" rx="3.5" ry="3" fill="#ffffff" />
                <ellipse cx="124" cy="105" rx="9" ry="3.5" fill="#00f584" filter="url(#eyeGreenGlow)" />
                <ellipse cx="124" cy="105" rx="3.5" ry="3" fill="#ffffff" />
              </g>

              {/* Angular Nose Bridge */}
              <polygon points="100,98 94,136 106,136" fill="#334155" stroke="#1e293b" strokeWidth="1" />

              {/* Titanium Speaker Grille (Mouthplate) */}
              <rect x="78" y="142" width="44" height="26" rx="4" fill="#0f172a" stroke="#ffd700" strokeWidth="1.2" />
              <line x1="84" y1="145" x2="84" y2="165" stroke="#00f584" strokeWidth="1.5" />
              <line x1="90" y1="145" x2="90" y2="165" stroke="#00f584" strokeWidth="1.5" />
              <line x1="96" y1="145" x2="96" y2="165" stroke="#00f584" strokeWidth="1.5" />
              <line x1="104" y1="145" x2="104" y2="165" stroke="#00f584" strokeWidth="1.5" />
              <line x1="110" y1="145" x2="110" y2="165" stroke="#00f584" strokeWidth="1.5" />
              <line x1="116" y1="145" x2="116" y2="165" stroke="#00f584" strokeWidth="1.5" />

              {/* Cheek Rivets */}
              <circle cx="64" cy="144" r="3" fill="#ffd700" />
              <circle cx="136" cy="144" r="3" fill="#ffd700" />
            </svg>

            {/* Arcane Orbit Ring */}
            <div className="doom-mask-orbit" aria-hidden="true" />
          </div>

          {/* Comic Dialogue Caption */}
          <div className="doom-comic-caption">
            <span>&ldquo;NONE MAY DARE REQUEST A MISSING ROUTE IN DOOM&rsquo;S PRESENCE!&rdquo;</span>
          </div>
        </div>

        {/* Doctor Doom's Sovereign Decree */}
        <h1 className="doom-404-decree">
          FOOL! YOU TRESPASS INTO <span>OBLIVION.</span>
        </h1>

        <p className="doom-404-explain">
          The dimension you seek has been purged from reality by decree of Lord Victor Von Doom.
          Even Reed Richards and the Fantastic Four cannot locate non-existent coordinates in this sovereign cloud realm.
        </p>

        {/* Live Multiverse Telemetry Grid */}
        <div className="doom-404-telemetry-grid">
          <div className="doom-telemetry-box">
            <span className="telemetry-tag">MULTIVERSE SECTOR</span>
            <span className="telemetry-status">EARTH-616 // LATVERIA</span>
          </div>
          <div className="doom-telemetry-box">
            <span className="telemetry-tag">INCIDENT TYPE</span>
            <span className="telemetry-status text-emerald">REALITY BREACH (404)</span>
          </div>
          <div className="doom-telemetry-box">
            <span className="telemetry-tag">DEFENSE MATRIX</span>
            <span className="telemetry-status text-gold">DOOMBOTS ENGAGED</span>
          </div>
          <div className="doom-telemetry-box">
            <span className="telemetry-tag">CHAPTER SOVEREIGNTY</span>
            <span className="telemetry-status text-emerald">AWS SBGL DITM</span>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="doom-404-actions">
          <Link href="/" className="doom-btn-primary">
            <span aria-hidden="true">👑</span>
            <span>RETURN TO SOVEREIGN REALM</span>
          </Link>

          <Link href="/about" className="doom-btn-secondary">
            <span aria-hidden="true">📜</span>
            <span>SOVEREIGN CODEX</span>
          </Link>

          <Link href="/team" className="doom-btn-secondary">
            <span aria-hidden="true">⚡</span>
            <span>CHAPTER ARCHITECTS</span>
          </Link>

          <button
            type="button"
            className={`doom-recalibrate-btn ${recalibrated ? 'recalibrate-active' : ''}`}
            onClick={triggerRecalibrate}
          >
            <span aria-hidden="true">⚡</span>
            <span>{recalibrated ? 'CHRONOMETER ALIGNED' : 'RECALIBRATE CHRONOMETER'}</span>
          </button>
        </div>

        {/* Recalibration Status Alert */}
        {recalibrated && (
          <div className="doom-recalibrate-alert" role="status">
            <span>●</span>
            <span>[DOOM CHRONOMETER OVERCLOCKED // REALITY STABILIZED ON DITM CLUSTER]</span>
          </div>
        )}

        {/* Footnote Signature */}
        <p className="doom-404-signature">
          VICTOR VON DOOM // SUPREME SOVEREIGN OF LATVERIA &amp; AWS SBGL DITM
        </p>
      </div>
    </main>
  );
}

