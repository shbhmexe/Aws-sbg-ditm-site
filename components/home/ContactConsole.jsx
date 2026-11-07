'use client';

import { useState } from 'react';
import './ContactConsole.css';

const PATHWAYS = [
  {
    id: 'student',
    label: 'Student Builder',
    badge: 'For Students & Emerging Engineers',
    icon: 'student',
    headline: 'Kickstart your cloud journey.',
    description:
      'Join an active community of students at DITM exploring cloud architecture and practical deployments together. From foundational cloud basics to serverless backends and certification cohorts, learn with peers who share your drive.',
    primaryAction: {
      label: 'Join Chapter on Meetup',
      href: 'https://www.meetup.com/aws-sbgl-at-ditm/',
      external: true,
      hint: 'Free RSVP for upcoming hands-on workshops & community meetups.',
    },
    keyPoints: [
      'Hands-on architecture labs & serverless deployments',
      'Peer study cohorts for AWS Cloud Practitioner & Solutions Architect',
      'Team hackathons, AWS cloud credits, and community swags',
    ],
    pillars: [
      {
        icon: 'code',
        title: 'Hands-on Cloud Deployments',
        description:
          'Deploy serverless APIs, Amazon S3 static sites, GenAI workflows on Bedrock, and Amplify full-stack applications.',
      },
      {
        icon: 'badge',
        title: 'Certification Cohorts',
        description:
          'Structured peer study groups, curated question banks, and guidance for AWS Cloud Practitioner and Solutions Architect.',
      },
      {
        icon: 'spark',
        title: 'Hackathons & Builder Days',
        description:
          'Build real portfolio architectures in team sprint challenges, earn official AWS badges, and win community recognition.',
      },
    ],
  },
  {
    id: 'speaker',
    label: 'Guest Speaker',
    badge: 'For Cloud Architects & Mentors',
    icon: 'speaker',
    headline: 'Bring real-world production to the campus stage.',
    description:
      'Inspire the next generation of engineers. Share practical architecture lessons, production outage stories, and industry workflows with 200+ driven student developers at DITM eager to learn what comes next.',
    primaryAction: {
      label: 'Propose a Tech Session',
      href: 'mailto:awssbgl@ditm.ac.in?subject=Speaker%20Collaboration%20Proposal%20-%20AWS%20SBGL%20DITM',
      external: false,
      hint: 'Email our team at awssbgl@ditm.ac.in with your talk topic or workshop proposal.',
    },
    keyPoints: [
      'Interactive keynotes and production architecture teardowns',
      'Direct engagement with 200+ passionate student engineers',
      'Scout and mentor emerging cloud talent before graduation',
    ],
    pillars: [
      {
        icon: 'mic',
        title: 'Keynotes & Interactive AMAs',
        description:
          'Deliver sessions on modern cloud patterns, Kubernetes, site reliability, generative AI, or career roadmaps.',
      },
      {
        icon: 'code',
        title: 'Technical Masterclasses',
        description:
          'Lead practical code-alongs and architectural sessions where students build live alongside your instruction.',
      },
      {
        icon: 'users',
        title: 'Project & Career Mentorship',
        description:
          'Review student cloud architectures, provide portfolio guidance, and connect with promising upcoming talent.',
      },
    ],
  },
  {
    id: 'partner',
    label: 'Partner or Sponsor',
    badge: 'For Tech Companies & Sponsors',
    icon: 'partner',
    headline: 'Build something high-impact with our community.',
    description:
      'Connect directly with ambitious technical talent at DITM. Sponsor student hackathons, launch API developer tracks, or co-host company-led workshops with the AWS Student Builder Group.',
    primaryAction: {
      label: 'Send Partnership Proposal',
      href: 'mailto:awssbgl@ditm.ac.in?subject=Partnership%20Proposal%20-%20AWS%20SBGL%20DITM',
      external: false,
      hint: 'Email awssbgl@ditm.ac.in to discuss customized collaboration and student reach.',
    },
    keyPoints: [
      'Launch sponsored hackathon tracks with your developer tools',
      'Direct campus recruitment from a certified cloud builder pool',
      'Prominent brand presence across DITM technical events & socials',
    ],
    pillars: [
      {
        icon: 'spark',
        title: 'Sponsored Hackathon Tracks',
        description:
          'Set custom developer challenges with your APIs or cloud platforms, judge student solutions, and reward bounties.',
      },
      {
        icon: 'users',
        title: 'Direct Campus Hiring Pipeline',
        description:
          'Engage with project-tested, certified builders who already understand cloud computing and modern deployment.',
      },
      {
        icon: 'badge',
        title: 'Ecosystem & Brand Leadership',
        description:
          'Prominently feature your brand across campus developer events, digital channels, and community sessions.',
      },
    ],
  },
];

function PathwayIcon({ name, className = '' }) {
  const common = {
    className,
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'student') {
    return (
      <svg {...common}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }
  if (name === 'speaker' || name === 'mic') {
    return (
      <svg {...common}>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </svg>
    );
  }
  if (name === 'partner' || name === 'users') {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (name === 'code') {
    return (
      <svg {...common}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (name === 'badge') {
    return (
      <svg {...common}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
      </svg>
    );
  }
  return null;
}

export default function ContactConsole() {
  const [activeId, setActiveId] = useState('student');
  const [copied, setCopied] = useState(false);

  const activeIndex = PATHWAYS.findIndex((p) => p.id === activeId);
  const activePathway = PATHWAYS[activeIndex] ?? PATHWAYS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('awssbgl@ditm.ac.in');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleTabKeyDown = (event) => {
    const keyDirections = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key === 'Home') {
      event.preventDefault();
      setActiveId(PATHWAYS[0].id);
      document.getElementById(`collab-tab-${PATHWAYS[0].id}`)?.focus();
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      const last = PATHWAYS[PATHWAYS.length - 1];
      setActiveId(last.id);
      document.getElementById(`collab-tab-${last.id}`)?.focus();
      return;
    }
    const direction = keyDirections[event.key];
    if (!direction) return;
    event.preventDefault();
    const nextIndex = (activeIndex + direction + PATHWAYS.length) % PATHWAYS.length;
    const next = PATHWAYS[nextIndex];
    setActiveId(next.id);
    document.getElementById(`collab-tab-${next.id}`)?.focus();
  };

  return (
    <section className="contact-hub-section" id="contact-hub" aria-labelledby="contact-hub-title">
      <div className="contact-hub-container">
        {/* Subtle, Clean Header */}
        <header className="contact-hub-header" data-reveal>
          <div className="contact-hub-pill">
            <span className="contact-hub-beacon" aria-hidden="true" />
            <span>Collaboration Pathways</span>
          </div>
          <h2 className="contact-hub-title" id="contact-hub-title">
            Connect &amp; <span>Build.</span>
          </h2>
          <p className="contact-hub-subtitle">
            Choose your pathway to participate in the AWS Student Builder Group at Delhi Institute of Technology and Management.
          </p>
        </header>

        {/* Unified Console Card */}
        <div className="collab-unified-card" data-reveal style={{ '--reveal-delay': '.08s' }}>
          {/* Integrated Segmented Tabs Bar */}
          <div className="collab-tabs-bar">
            <div
              className="collab-segmented-deck"
              role="tablist"
              aria-label="Collaboration options"
              onKeyDown={handleTabKeyDown}
            >
              {PATHWAYS.map((pathway) => {
                const isActive = pathway.id === activePathway.id;
                return (
                  <button
                    key={pathway.id}
                    id={`collab-tab-${pathway.id}`}
                    className={`collab-tab-item${isActive ? ' is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="collab-pathway-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(pathway.id)}
                  >
                    <span className="collab-tab-icon">
                      <PathwayIcon name={pathway.icon} />
                    </span>
                    <span>{pathway.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workspace */}
          <div
            className="collab-workspace-grid"
            id="collab-pathway-panel"
            role="tabpanel"
            aria-labelledby={`collab-tab-${activePathway.id}`}
            key={activePathway.id}
          >
            {/* Left Hero Column */}
            <div className="collab-hero-col">
              <div>
                <div className="collab-hero-eyebrow-row">
                  <span className="contact-hub-beacon" aria-hidden="true" />
                  <span className="collab-hero-badge">{activePathway.badge}</span>
                </div>

                <h3 className="collab-hero-heading">{activePathway.headline}</h3>
                <p className="collab-hero-paragraph">{activePathway.description}</p>

                {/* Subtle bullet points */}
                <div className="collab-points-list">
                  {activePathway.keyPoints.map((point) => (
                    <div className="collab-point-item" key={point}>
                      <span className="collab-point-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="collab-actions-container">
                <div className="collab-actions-buttons">
                  <a
                    className="collab-btn-primary"
                    href={activePathway.primaryAction.href}
                    target={activePathway.primaryAction.external ? '_blank' : undefined}
                    rel={activePathway.primaryAction.external ? 'noopener noreferrer' : undefined}
                  >
                    <span>{activePathway.primaryAction.label}</span>
                    <span className="collab-btn-arrow" aria-hidden="true">↗</span>
                  </a>

                  <button
                    className={`collab-btn-secondary${copied ? ' is-copied' : ''}`}
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy official email"
                    aria-label="Copy official email address"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>awssbgl@ditm.ac.in</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="collab-hint-text">{activePathway.primaryAction.hint}</span>
              </div>
            </div>

            {/* Right Pillars Column */}
            <div className="collab-pillars-stack" aria-label="Key features">
              {activePathway.pillars.map((pillar) => (
                <div className="collab-pillar-item" key={pillar.title}>
                  <div className="collab-pillar-icon-box">
                    <PathwayIcon name={pillar.icon} />
                  </div>
                  <div className="collab-pillar-text">
                    <h4 className="collab-pillar-title">{pillar.title}</h4>
                    <p className="collab-pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Verification Footer Bar */}
          <footer className="collab-card-footer">
            <div className="collab-footer-chapter">
              <span className="collab-aws-badge">AWS</span>
              <span>Student Builder Group · DITM Sonipat (Ganaur, Haryana)</span>
            </div>
            <div className="collab-footer-links">
              <a
                className="collab-link"
                href="https://www.meetup.com/aws-sbgl-at-ditm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Meetup Chapter</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
