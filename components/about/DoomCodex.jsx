'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './DoomCodex.css';

const INSTAGRAM_URL = 'https://www.instagram.com/awssbg.ditm?mdxt=dGVubWNxd3Y2OHE3';

const DIRECTIVES = {
  mission: {
    id: 'mission',
    number: '01',
    label: 'Mission',
    codename: 'THE FORGE',
    title: 'Democratizing Cloud Mastery at DITM',
    tagline: 'Zero intimidation. Complete accessibility. Hands-on from day one.',
    metrics: [
      { label: 'Access Barrier', value: '0%', status: 'UNLOCKED' },
      { label: 'Student Cost', value: 'FREE', status: 'OPEN SOURCE' },
      { label: 'Lab Format', value: 'LIVE CLI', status: 'CONSOLE-FIRST' },
    ],
    capabilities: [
      { icon: '⚡', name: 'Hands-on Labs', desc: 'Deploying real EC2, S3, IAM, and Lambda instances' },
      { icon: '🛡️', name: 'Universal Access', desc: 'Open to all years and engineering branches' },
      { icon: '👥', name: 'Peer Support', desc: 'Senior student builders mentoring newer cohorts' },
    ],
    telemetry: {
      load: '100% OPEN',
      mode: 'ACTIVE PEDAGOGY',
      protocol: 'BUILDER_FIRST_v2.6',
    },
  },
  vision: {
    id: 'vision',
    number: '02',
    label: 'Vision',
    codename: 'THE CITADEL',
    title: 'A Campus of Sovereign Cloud Architects',
    tagline: 'Moving past isolated theory into production code, live apps, and shared hegemony.',
    metrics: [
      { label: 'Builder Focus', value: 'PROD', status: 'DEPLOYED' },
      { label: 'Mentorship', value: 'PEER', status: 'CONTINUOUS' },
      { label: 'Campus Rank', value: 'APEX', status: 'HEGEMONY' },
    ],
    capabilities: [
      { icon: '👑', name: 'Production Builds', desc: 'Portfolio-ready full-stack applications on cloud' },
      { icon: '🌐', name: 'Ecosystem Scale', desc: 'Transforming DITM into a recognized cloud hub' },
      { icon: '🚀', name: 'Industry Ready', desc: 'Architectural patterns matching top tech standards' },
    ],
    telemetry: {
      load: 'EXPANDING',
      mode: 'AUTONOMOUS ARCHITECTURE',
      protocol: 'SOVEREIGN_CITADEL_v4.1',
    },
  },
  arsenal: {
    id: 'arsenal',
    number: '03',
    label: 'Arsenal',
    codename: 'TECH-SORCERY',
    title: 'Full-Stack Serverless & GenAI Stack',
    tagline: 'Mastering the industry standard AWS ecosystem through intensive build sprints.',
    metrics: [
      { label: 'Primary Core', value: 'AMPLIFY', status: 'FULLSTACK' },
      { label: 'Compute Engine', value: 'LAMBDA', status: 'SERVERLESS' },
      { label: 'Intelligence', value: 'BEDROCK', status: 'GENAI READY' },
    ],
    capabilities: [
      { icon: '☁️', name: 'AWS Amplify', desc: 'Full-stack Next.js/React CI/CD cloud deployments' },
      { icon: 'λ', name: 'Lambda Arcana', desc: 'Event-driven microservices with zero idle cost' },
      { icon: '🧠', name: 'Amazon Bedrock', desc: 'Foundation models, RAG architectures & AI agents' },
    ],
    telemetry: {
      load: 'OPTIMAL',
      mode: 'SERVERLESS COMPUTATION',
      protocol: 'AMPLIFY_BEDROCK_v3.9',
    },
  },
  trajectory: {
    id: 'trajectory',
    number: '04',
    label: 'Trajectory',
    codename: 'MILESTONES',
    title: 'High-Impact Academic Objectives',
    tagline: 'Steady execution, measurable participant outcomes, and verified builder credentials.',
    metrics: [
      { label: 'Enrolled Builders', value: '220+', status: 'CONFIRMED' },
      { label: 'Hands-on Labs', value: '12+', status: 'SCHEDULED' },
      { label: 'Certification Path', value: 'AWS CCP', status: 'STUDY GROUPS' },
    ],
    capabilities: [
      { icon: '📜', name: 'Study Circles', desc: 'Collaborative peer prep for foundational AWS exams' },
      { icon: '🏆', name: 'Hackathons', desc: 'Rapid prototype sprints solving real campus problems' },
      { icon: '🔗', name: 'Open Repos', desc: 'All workshop codebases open-sourced for review' },
    ],
    telemetry: {
      load: 'ACCELERATING',
      mode: 'ANNUAL STRATEGY',
      protocol: 'EXECUTION_VECTOR_2026',
    },
  },
};

const DIAGNOSTIC_STEPS = [
  '[INITIALIZE] Latverian Cloud Synapse v4.8 :: Handshake OK',
  '[PROBE] AWS DITM Student Builder Node :: 220+ peers linked',
  '[TELEMETRY] Serverless Amplify & Lambda Arcana :: 99.999% uptime',
  '[SECURITY] IAM Sovereign Diadem :: Omega-level access verified',
  '[AI CORE] Amazon Bedrock Foundation :: Neural weights synced',
  '[DOMINION] Delhi Institute of Technology & Management :: Apex chapter status confirmed',
];

export default function DoomCodex() {
  const [activeTab, setActiveTab] = useState('mission');
  const [overclocked, setOverclocked] = useState(false);
  const [overclockCount, setOverclockCount] = useState(0);
  const [diagnosticsRunning, setDiagnosticsRunning] = useState(false);
  const [diagnosticLogs, setDiagnosticLogs] = useState([]);
  const holocronRef = useRef(null);

  const activeData = DIRECTIVES[activeTab];

  // 3D Parallax Tilt for the Reactor Sphere based on mouse pointer
  useEffect(() => {
    const handleMove = (e) => {
      if (!holocronRef.current) return;
      const rect = holocronRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -12;
      const tiltY = (x / (rect.width / 2)) * 12;

      holocronRef.current.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      holocronRef.current.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
      holocronRef.current.style.setProperty('--glow-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      holocronRef.current.style.setProperty('--glow-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    };

    const handleLeave = () => {
      if (!holocronRef.current) return;
      holocronRef.current.style.setProperty('--tilt-x', '0deg');
      holocronRef.current.style.setProperty('--tilt-y', '0deg');
    };

    const el = holocronRef.current;
    if (el) {
      el.addEventListener('pointermove', handleMove);
      el.addEventListener('pointerleave', handleLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener('pointermove', handleMove);
        el.removeEventListener('pointerleave', handleLeave);
      }
    };
  }, []);

  // Overclock Trigger
  const triggerOverclock = () => {
    setOverclocked(true);
    setOverclockCount((prev) => prev + 1);
    setTimeout(() => {
      setOverclocked(false);
    }, 2800);
  };

  // Run Real-Time Diagnostic Stream
  const runDiagnostics = () => {
    if (diagnosticsRunning) return;
    setDiagnosticsRunning(true);
    setDiagnosticLogs([]);

    DIAGNOSTIC_STEPS.forEach((log, index) => {
      setTimeout(() => {
        setDiagnosticLogs((prev) => [...prev, log]);
        if (index === DIAGNOSTIC_STEPS.length - 1) {
          setTimeout(() => setDiagnosticsRunning(false), 800);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="doom-codex-wrapper">
      {/* ---------- HEADER TELEMETRY STRIP ---------- */}
      <header className="doom-codex-header">
        <div className="doom-codex-badge">
          <span className="doom-codex-beacon" aria-hidden="true" />
          <span>SOVEREIGN ARCHIVE // CLASSIFIED OMEGA</span>
          <span className="doom-codex-badge-sep" aria-hidden="true">|</span>
          <span className="doom-codex-badge-gold">AY 2026-27</span>
        </div>

        <h1 className="doom-codex-title">
          Architecting the <span>Cloud Realm.</span>
        </h1>

        <p className="doom-codex-subtitle">
          Democratizing Amazon Web Services for 220+ student builders at Delhi Institute of Technology &amp; Management.
          Zero barriers, production-grade builds, and peer-driven tech-sorcery.
        </p>

        {/* Global Quick Telemetry Meter */}
        <div className="doom-telemetry-ribbon">
          <div className="doom-telemetry-chip">
            <span className="telemetry-lbl">CHAPTER</span>
            <span className="telemetry-val">AWS SBGL DITM</span>
          </div>
          <div className="doom-telemetry-chip">
            <span className="telemetry-lbl">DIRECTIVE</span>
            <span className="telemetry-val text-emerald">BUILDER FIRST</span>
          </div>
          <div className="doom-telemetry-chip">
            <span className="telemetry-lbl">ENGINE</span>
            <span className="telemetry-val text-gold">SERVERLESS &amp; AI</span>
          </div>
          <div className="doom-telemetry-chip">
            <span className="telemetry-lbl">STATUS</span>
            <span className="telemetry-val text-emerald">IMPENETRABLE</span>
          </div>
        </div>
      </header>

      {/* ---------- THE INTERACTIVE LATVERIAN CORE INSTRUMENT ---------- */}
      <div className={`doom-codex-deck ${overclocked ? 'is-overclocked' : ''}`}>
        {/* LEFT: 3D Holographic Cloud Reactor (Interactive Instrument) */}
        <div className="doom-holocron-panel" ref={holocronRef}>
          <div className="doom-holocron-viewport">
            {/* Holographic Arcane Chamber */}
            <div className="doom-reactor-sphere">
              {/* Outer Cybernetic Calibration Ring */}
              <div className="reactor-ring ring-outer">
                <span className="ring-tick tick-0">0°</span>
                <span className="ring-tick tick-90">90°</span>
                <span className="ring-tick tick-180">180°</span>
                <span className="ring-tick tick-270">270°</span>
              </div>

              {/* Middle Latverian Arcane Glyph Ring */}
              <div className="reactor-ring ring-glyphs">
                <span className="glyph-rune glyph-1" title="Lambda Arcana">λ</span>
                <span className="glyph-rune glyph-2" title="S3 Storage Vault">⬡</span>
                <span className="glyph-rune glyph-3" title="Bedrock Foundation AI">◈</span>
                <span className="glyph-rune glyph-4" title="Sovereign Diadem">👑</span>
              </div>

              {/* Inner Gyro Gyroscopic Ring */}
              <div className="reactor-ring ring-inner" />

              {/* Central Pulsing Titanium Emerald Quantum Core */}
              <div className="reactor-core">
                <div className="core-faceted-gem" />
                <div className="core-plasma-pulse" />
                <div className="core-photon-center" />
              </div>

              {/* Interactive Orbital Beacons (4 Pillars) */}
              <div className="reactor-orbitals">
                {Object.keys(DIRECTIVES).map((key, idx) => {
                  const dir = DIRECTIVES[key];
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={dir.id}
                      type="button"
                      className={`orbital-node orbital-node-${idx + 1} ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveTab(key)}
                      title={`Select ${dir.label}`}
                      aria-label={`Select ${dir.label}`}
                    >
                      <span className="orbital-num">{dir.number}</span>
                      <span className="orbital-label">{dir.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Overclock Shockwave Ring */}
              {overclocked && <div className="reactor-shockwave" />}
            </div>

            {/* Overclock Interactive Trigger */}
            <div className="reactor-controls">
              <button
                type="button"
                className={`overclock-btn ${overclocked ? 'btn-active' : ''}`}
                onClick={triggerOverclock}
                aria-label="Overclock Arcana Reactor"
              >
                <span className="overclock-icon" aria-hidden="true">⚡</span>
                <span>{overclocked ? 'OVERCLOCK ACTIVE [999 THz]' : 'OVERCLOCK ARCANA'}</span>
                {overclockCount > 0 && <span className="overclock-counter">+{overclockCount}</span>}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Clear State Sovereign Command Terminal (Zero Fluff, High Impact) */}
        <div className="doom-terminal-panel">
          {/* Directive State Selector Tabs */}
          <div className="terminal-tabs" role="tablist" aria-label="Codex Directives">
            {Object.keys(DIRECTIVES).map((key) => {
              const dir = DIRECTIVES[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={dir.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`terminal-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <span className="tab-idx">{dir.number}</span>
                  <span className="tab-name">{dir.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Directive Display Card */}
          <article className="terminal-card" key={activeData.id}>
            <h2 className="terminal-card-title">{activeData.title}</h2>
            <p className="terminal-card-tagline">{activeData.tagline}</p>

            {/* High-Impact Visual Metric Badges */}
            <div className="terminal-metrics-row">
              {activeData.metrics.map((m) => (
                <div className="metric-badge" key={m.label}>
                  <span className="metric-badge-val">{m.value}</span>
                  <span className="metric-badge-lbl">{m.label}</span>
                  <span className="metric-badge-status">{m.status}</span>
                </div>
              ))}
            </div>

            {/* Structured Capability Matrix */}
            <div className="terminal-capabilities-grid">
              {activeData.capabilities.map((c) => (
                <div className="capability-card" key={c.name}>
                  <div className="capability-icon" aria-hidden="true">{c.icon}</div>
                  <div className="capability-info">
                    <h3 className="capability-name">{c.name}</h3>
                    <p className="capability-desc">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnostics Interactive Action Strip */}
            <div className="terminal-actions-row">
              <button
                type="button"
                className={`terminal-diag-btn ${diagnosticsRunning ? 'is-running' : ''}`}
                onClick={runDiagnostics}
              >
                <span className="diag-pulse" aria-hidden="true" />
                <span>{diagnosticsRunning ? 'STREAMING TELEMETRY...' : 'RUN NODE DIAGNOSTICS'}</span>
              </button>

              {/* Official Instagram Sovereign Link */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-social-link"
                title="Connect with AWS SBGL DITM on Instagram"
              >
                <span className="social-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
                <span>@awssbg.ditm</span>
              </a>
            </div>

            {/* Real-time Diagnostics Terminal Console Window */}
            {diagnosticLogs.length > 0 && (
              <div className="terminal-console-window" aria-live="polite">
                <div className="console-titlebar">
                  <span className="console-dot dot-red" />
                  <span className="console-dot dot-yellow" />
                  <span className="console-dot dot-green" />
                  <span className="console-caption">LATVERIAN_NODE_MONITOR // DITM CAMPUS</span>
                </div>
                <div className="console-body">
                  {diagnosticLogs.map((log, i) => (
                    <div key={i} className="console-line">
                      <span className="console-prompt">&gt;</span>
                      <span className="console-text">{log}</span>
                    </div>
                  ))}
                  {diagnosticsRunning && (
                    <div className="console-line line-cursor">
                      <span className="console-prompt">&gt;</span>
                      <span className="console-blinker">_</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* ---------- 4 PILLARS OF DOMINION (Interactive Slabs, Zero Essay Text) ---------- */}
      <section className="doom-monoliths-section" aria-labelledby="monoliths-title">
        <div className="monoliths-header">
          <span className="monoliths-tag">AWS ARCHITECTURE PILLARS</span>
          <h2 id="monoliths-title" className="monoliths-title">
            Engineered for <span>Sovereign Mastery.</span>
          </h2>
        </div>

        <div className="monoliths-grid">
          <div className="monolith-card" data-service="amplify">
            <div className="monolith-corner">01</div>
            <div className="monolith-icon-wrap">
              <span className="monolith-glyph">☁️</span>
              <span className="monolith-badge">FRONTEND &amp; CI/CD</span>
            </div>
            <h3 className="monolith-name">AWS Amplify Forge</h3>
            <p className="monolith-tagline">
              Instant full-stack hosting, Git-connected pipelines, serverless authentication, and managed API integration.
            </p>
            <div className="monolith-tags">
              <span>Next.js 15</span>
              <span>Cognito Auth</span>
              <span>GraphQL / REST</span>
            </div>
          </div>

          <div className="monolith-card" data-service="lambda">
            <div className="monolith-corner">02</div>
            <div className="monolith-icon-wrap">
              <span className="monolith-glyph">λ</span>
              <span className="monolith-badge">SERVERLESS COMPUTE</span>
            </div>
            <h3 className="monolith-name">Lambda Arcana</h3>
            <p className="monolith-tagline">
              Zero idle infrastructure. Event-driven code execution scaling from zero to thousands of concurrent requests.
            </p>
            <div className="monolith-tags">
              <span>Zero Cold Starts</span>
              <span>Node / Python</span>
              <span>API Gateway</span>
            </div>
          </div>

          <div className="monolith-card" data-service="bedrock">
            <div className="monolith-corner">03</div>
            <div className="monolith-icon-wrap">
              <span className="monolith-glyph">🧠</span>
              <span className="monolith-badge">GENERATIVE AI</span>
            </div>
            <h3 className="monolith-name">Amazon Bedrock Core</h3>
            <p className="monolith-tagline">
              High-performance foundation models (Claude, Titan) orchestrating intelligent RAG agents and student AI workflows.
            </p>
            <div className="monolith-tags">
              <span>Knowledge Bases</span>
              <span>Vector Embeddings</span>
              <span>Agentic Workflows</span>
            </div>
          </div>

          <div className="monolith-card" data-service="builder">
            <div className="monolith-corner">04</div>
            <div className="monolith-icon-wrap">
              <span className="monolith-glyph">📜</span>
              <span className="monolith-badge">OFFICIAL PATHWAYS</span>
            </div>
            <h3 className="monolith-name">Skill Builder Citadel</h3>
            <p className="monolith-tagline">
              Guided self-paced courses, Cloud Practitioner preparation circles, and builder badges recognized worldwide.
            </p>
            <div className="monolith-tags">
              <span>builder.aws.com</span>
              <span>Study Groups</span>
              <span>Official Badges</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

