'use client';

import Link from 'next/link';
import './TeamTree.css';

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ShieldLeaderIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
  </svg>
);

// 5 branches from Leader (500, 0) to the 5 core member columns
// All 5 signals shoot simultaneously from Leader, travel together, and merge into the 5 cards at the exact same instant
const BRANCHES = [
  { id: 1, endX: 100, color: '#00f584', path: 'M 500 0 C 500 50, 100 58, 100 116', delay: 0 },
  { id: 2, endX: 300, color: '#ea6297', path: 'M 500 0 C 500 54, 300 60, 300 116', delay: 0 },
  { id: 3, endX: 500, color: '#00f2fe', path: 'M 500 0 L 500 116', delay: 0 },
  { id: 4, endX: 700, color: '#00bcd4', path: 'M 500 0 C 500 54, 700 60, 700 116', delay: 0 },
  { id: 5, endX: 900, color: '#00f584', path: 'M 500 0 C 500 50, 900 58, 900 116', delay: 0 },
];

export default function TeamTree({ leaders = [], core = [] }) {
  const leader = leaders[0];

  return (
    <section className="team-tree-section" id="team" aria-labelledby="team-title">
      <div className="team-tree-container">
        {/* Section Header */}
        <header className="team-tree-header" data-reveal>
          <div className="team-tree-tag">
            <span className="team-tree-beacon" aria-hidden="true" />
            <span>Leadership &amp; Core Team</span>
          </div>
          <h2 className="team-tree-title" id="team-title">
            Meet the <span>Builders.</span>
          </h2>
          <p className="team-tree-subtitle">
            Student leaders and core organizers driving the AWS Student Builder Group at Delhi Institute of Technology and Management.
          </p>
          <Link href="/team" className="team-tree-view-all">
            <span>Explore full chapter directory</span>
            <ChevronIcon />
          </Link>
        </header>

        {/* Tree Network Deck */}
        <div className="team-tree-deck" data-reveal style={{ '--reveal-delay': '.08s' }}>
          {/* Top Leader Node */}
          {leader && (
            <div className="team-leader-stage">
              <span className="team-leader-label">Chapter Leader</span>
              <div className="team-leader-card">
                <div className="team-avatar-wrap">
                  <img
                    className="team-leader-avatar"
                    src={leader.img}
                    alt={leader.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="team-avatar-badge" title="Lead Organizer" aria-hidden="true">
                    <ShieldLeaderIcon />
                  </span>
                </div>
                <h3 className="team-leader-name">{leader.name}</h3>
                <p className="team-leader-role">{leader.role}</p>

                <div className="team-socials-row">
                  {leader.gh && (
                    <a
                      className="team-social-btn"
                      href={leader.gh}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {leader.li && (
                    <a
                      className="team-social-btn"
                      href={leader.li}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                </div>

                {/* Root Connection Node */}
                <span className="team-leader-port" aria-hidden="true" />
              </div>
            </div>
          )}

          {/* SVG Tree Connector Lines with Simultaneously Traveling Light Pulses */}
          <div className="team-tree-svg-wrap" aria-hidden="true">
            <svg
              className="team-tree-svg"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="treePulseGlow" x="-50" y="-20" width="1100" height="160" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Base Circuit Guide Paths */}
              {BRANCHES.map((b) => (
                <path
                  key={`base-${b.id}`}
                  className="tree-base-path"
                  d={b.path}
                />
              ))}

              {/* 2. Traveling Light Beams (Simultaneous via CSS stroke-dashoffset) */}
              {BRANCHES.map((b) => (
                <path
                  key={`pulse-${b.id}`}
                  className={`tree-pulse-path tree-pulse-${b.id}`}
                  d={b.path}
                  pathLength="100"
                  filter="url(#treePulseGlow)"
                />
              ))}

              {/* 3. Traveling Photon Light Balls (Native SVG animateMotion - All 5 synced together) */}
              {BRANCHES.map((b) => (
                <g key={`photon-${b.id}`}>
                  {/* Outer glowing aura */}
                  <circle r="4.5" fill={b.color} opacity="0" filter="url(#treePulseGlow)">
                    <animateMotion
                      path={b.path}
                      begin="0s"
                      dur="2.8s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keyPoints="0;1;1"
                      keyTimes="0;0.48;1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0;0"
                      keyTimes="0;0.02;0.48;0.54;1"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Inner white-hot photon core */}
                  <circle r="2.2" fill="#ffffff" opacity="0">
                    <animateMotion
                      path={b.path}
                      begin="0s"
                      dur="2.8s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keyPoints="0;1;1"
                      keyTimes="0;0.48;1"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0;0"
                      keyTimes="0;0.02;0.48;0.54;1"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}

              {/* 4. Branch Destination Anchor Nodes & Simultaneous Arrival Ripples */}
              {BRANCHES.map((b) => (
                <g key={`node-group-${b.id}`}>
                  {/* Ripple pulse ring expanding at arrival moment (0.48 = 1.34s) */}
                  <circle
                    cx={b.endX}
                    cy="116"
                    r="4.5"
                    fill="none"
                    stroke={b.color}
                    strokeWidth="1.6"
                    opacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="4.5;4.5;16;4.5"
                      keyTimes="0;0.48;0.64;1"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;0.9;0;0"
                      keyTimes="0;0.48;0.64;1"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Destination anchor node */}
                  <circle
                    className={`tree-target-node tree-node-${b.id}`}
                    cx={b.endX}
                    cy="116"
                    r="4.5"
                    filter="url(#treePulseGlow)"
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Core Team Nodes (5 Columns) */}
          <div className="team-core-stage">
            <div className="team-core-grid">
              {core.map((member) => {
                const memberKey = member.name.toLowerCase().replace(/\s+/g, '-');
                return (
                  <article
                    className="team-core-card"
                    key={member.name}
                    data-member={memberKey}
                  >
                    <img
                      className="team-core-avatar"
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                    />

                    <h4 className="team-core-name">{member.name}</h4>
                    <p className="team-core-role">{member.role}</p>

                    <div className="team-socials-row">
                      {member.gh && (
                        <a
                          className="team-social-btn"
                          href={member.gh}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} GitHub`}
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {member.li && (
                        <a
                          className="team-social-btn"
                          href={member.li}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <LinkedinIcon />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
