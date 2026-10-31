"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LI_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const GH_PATH =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const FOUNDING_PAGE_SIZE = 8;
const ROTATE_MS = 6000;

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TEAM_MEMBERS = [
  { id: "shubham-shukla", name: "Shubham Shukla", type: "leader", initials: "SS", role: "Chapter Leader", description: "Leads the AWS Student Builder Group at DITM with clarity, purpose, and momentum for the academic year 2026-27.", quote: "Building a strong community starts with steady execution.", focusAreas: ["Community Vision", "Team Alignment", "Execution"], gradient: "linear-gradient(135deg, #FF9900 0%, #00A4E4 100%)", github: "https://github.com/shbhmexe", linkedin: "https://www.linkedin.com/in/shubham-shukla-62095032a/", profileUrl: "/team/core/SHUBHAM_CORE.png" },
  { id: "aakash-rana", name: "Aakash Rana", type: "core", initials: "AR", role: "IT Support and Management", description: "Keeps the group’s technology and operations organized so events and projects run smoothly.", domain: "IT Support", gradient: "linear-gradient(135deg, #FF9900 0%, #ff5e62 100%)", profileUrl: "/team/core/AAKASH_CORE.png", linkedin: "https://www.linkedin.com/in/aakash-rana-98054b342", github: "https://github.com/aakashrana7422-tech" },
  { id: "anjali-kumari", name: "Anjali Kumari", type: "core", initials: "AK", role: "Photography and Graphics Manager", description: "Captures the group’s moments and creates visuals that bring its events and activities to life.", domain: "Photography & Graphics", gradient: "linear-gradient(135deg, #ea6297 0%, #a050ff 100%)", profileUrl: "/team/core/ANJALI_CORE.png", linkedin: "https://www.linkedin.com/in/anjali-kumari-71a39b385", github: "https://github.com/anjalisah4823" },
  { id: "farman-khan", name: "Farman Khan", type: "core", initials: "FK", role: "Student Engagement Manager", description: "Helps students feel welcome, get involved, and stay connected with the community.", domain: "Student Engagement", gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", profileUrl: "/team/core/FARMAN_CORE.jpeg", linkedin: "https://www.linkedin.com/in/farman-khan-73b63a380", github: "https://github.com/farmanfk0404" },
  { id: "vansh-verma", name: "Vansh Verma", type: "core", initials: "VV", role: "Social Media Manager", description: "Shares the group’s events, projects, and updates with the student community.", domain: "Social Media", gradient: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)", profileUrl: "/team/core/VANSH_CORE.png", linkedin: "https://www.linkedin.com/in/vansh-verma-510b3b364/", github: "https://github.com/vanshverma20" },
  { id: "tarashankar-hazra", name: "Tarashankar Hazra", type: "core", initials: "TH", role: "Marketing Director", description: "Promotes the group’s events and opportunities to help more students discover and join in.", domain: "Marketing", gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)", profileUrl: "/team/core/TARASHANKAR_CORE.png", linkedin: "https://www.linkedin.com/in/tarashankar-hazra-522a8a398", github: "https://github.com/TarashankarHazra" },
];

const FOUNDING_MEMBERS = [
  { id: "khusi-sinha", name: "Khusi Sinha", profileUrl: "/team/founding/01_KHUSHI_FM.png", initials: "KS", linkedin: "https://www.linkedin.com/in/khushi-sinha-436a68384" },
  { id: "nandini-shukla", name: "Nandini Shukla", profileUrl: "/team/founding/02_NANDINI_FM.png", initials: "NS", linkedin: "https://www.linkedin.com/in/nandini-shukla-9263bb381" },
  { id: "raghav-kathuria", name: "Raghav Kathuria", profileUrl: "/team/founding/03_RAGHAV_FM.png", initials: "RK", linkedin: "https://www.linkedin.com/in/raghavkathuria0" },
  { id: "rishab-aggarwal", name: "Rishab Aggarwal", profileUrl: "/team/founding/04_RISHAB_FM.png", initials: "RA", linkedin: "https://www.linkedin.com/in/rishabh-aggarwal-301135306" },
  { id: "hitesh-aggarwal", name: "Hitesh Aggarwal", profileUrl: "/team/founding/05_HITESH_FM.png", initials: "HA", linkedin: "https://www.linkedin.com/in/hitesh-aggarwal-2469a2385" },
  { id: "navneet-barnwal", name: "Navneet Barnwal", profileUrl: "/team/founding/12_NAVNEET_FM.png", initials: "NB", linkedin: "https://www.linkedin.com/in/nawneet-barnwal-39098b368" },
  { id: "mohammad-yasir", name: "Mohammad-Yasir", profileUrl: "/team/founding/06_YASIR_FM.png", initials: "MY", linkedin: "https://www.linkedin.com/in/mohammad-yasir-337729338" },
  { id: "sachin-kumar", name: "Sachin Kumar", profileUrl: "/team/founding/07_SACHIN_FM.png", initials: "SK", linkedin: "https://www.linkedin.com/in/sachinkumar1701" },
  { id: "pushkar-kadian", name: "Pushkar Kadian", profileUrl: "/team/founding/08_PUSHKAR_FM.png", initials: "PK", linkedin: "https://www.linkedin.com/in/dev-pushkar-kadian" },
  { id: "paras-choudhary", name: "Paras Choudhary", profileUrl: "/team/founding/09_PARAS_FM.png", initials: "PC", linkedin: "https://www.linkedin.com/in/paras-choudhary-747a36320" },
  { id: "ayush-kushwaha", name: "Ayush Kushwaha", profileUrl: "/team/founding/10_AYUSH_FM.png", initials: "AK", linkedin: "https://www.linkedin.com/in/ayush-kushwaha-204b97381" },
  { id: "abhay-maurya", name: "Abhay Maurya", profileUrl: "/team/founding/11_ABHAY_FM.png", initials: "AM", linkedin: "https://www.linkedin.com/in/abhay-maurya-1b10382a6" },
];

const LEADERS = TEAM_MEMBERS.filter((member) => member.type === "leader");
const CORE_MEMBERS = TEAM_MEMBERS.filter((member) => member.type === "core");

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={LI_PATH} />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={GH_PATH} />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function ProfileAvatar({ member, className, fallbackClassName, loading = "lazy" }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(member.profileUrl) && !member.profileUrl.endsWith("/") && !imgError;

  if (hasImage) {
    return (
      <img
        src={member.profileUrl}
        alt={member.name}
        className={className}
        onError={() => setImgError(true)}
        loading={loading}
      />
    );
  }

  return (
    <div className={fallbackClassName || className} style={{ background: member.gradient }} aria-hidden="true">
      {getInitials(member.name)}
    </div>
  );
}

function FeaturedLeaderCard({ leader }) {
  return (
    <article className="leader-featured-card">
      <div className="leader-card-top">
        <div className="leader-avatar-wrapper">
          <ProfileAvatar
            member={leader}
            className="leader-avatar-img"
            fallbackClassName="leader-avatar-initials"
            loading="eager"
          />
        </div>
        <div className="leader-title-box">
          <span className="leader-badge-pill">Chapter Leader</span>
          <h3 className="leader-name">{leader.name}</h3>
          <p className="leader-role">AWS Student Builder Group · DITM</p>
        </div>
      </div>
      <blockquote className="leader-quote">&ldquo;{leader.quote}&rdquo;</blockquote>
      <p className="leader-bio">{leader.description}</p>
      <div className="leader-card-footer">
        <div className="leader-focus-tags">
          {leader.focusAreas.map((tag) => (
            <span className="leader-focus-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="leader-social-row">
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="team-social-link"
              aria-label={`${leader.name} on LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          )}
          {leader.github && (
            <a
              href={leader.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-social-link"
              aria-label={`${leader.name} on GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function FoundingCard({ member, index }) {
  const [imgError, setImgError] = useState(false);
  const showImage = member.profileUrl && !imgError;
  const linkedinHref = member.linkedin || "https://www.linkedin.com";

  return (
    <article className="founding-card">
      <span className="founding-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <div className="founding-avatar-ring">
        {showImage ? (
          <img
            src={member.profileUrl}
            alt={member.name}
            className="founding-avatar-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="founding-avatar-fallback">
            <svg
              className="founding-fallback-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="founding-initials">{member.initials}</span>
          </div>
        )}
      </div>
      <div className="founding-info">
        <span className="founding-role-badge">Founding Member</span>
        <h3 className="founding-name">{member.name}</h3>
      </div>
      <div className="founding-action">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="founding-linkedin-btn"
          aria-label={`Connect with ${member.name} on LinkedIn`}
        >
          <svg className="founding-linkedin-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={LI_PATH} />
          </svg>
          <span className="founding-btn-text">Connect</span>
          <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}

export default function TeamPage() {
  const [activeId, setActiveId] = useState(CORE_MEMBERS[0]?.id || "aakash-rana");
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const totalPages = Math.ceil(FOUNDING_MEMBERS.length / FOUNDING_PAGE_SIZE);
  const pageStart = (page - 1) * FOUNDING_PAGE_SIZE;
  const pageMembers = FOUNDING_MEMBERS.slice(pageStart, pageStart + FOUNDING_PAGE_SIZE);
  const firstVisible = pageStart + 1;
  const lastVisible = Math.min(pageStart + FOUNDING_PAGE_SIZE, FOUNDING_MEMBERS.length);

  const rawIndex = CORE_MEMBERS.findIndex((member) => member.id === activeId);
  const activeIndex = rawIndex >= 0 ? rawIndex : 0;
  const activeDirector = CORE_MEMBERS[activeIndex] ?? CORE_MEMBERS[0];
  const stepLabel = `${String(activeIndex + 1).padStart(2, "0")} / ${String(CORE_MEMBERS.length).padStart(2, "0")}`;

  const metrics = [
    { value: String(CORE_MEMBERS.length).padStart(2, "0"), label: "Core Team" },
    { value: String(FOUNDING_MEMBERS.length).padStart(2, "0"), label: "Founding Members" },
    { value: "DITM", label: "Campus Chapter" },
  ];

  useEffect(() => {
    if (!autoRotate || isInteracting || CORE_MEMBERS.length === 0) return;
    const timer = setInterval(() => {
      setActiveId((current) => {
        const idx = CORE_MEMBERS.findIndex((member) => member.id === current);
        return CORE_MEMBERS[(idx + 1) % CORE_MEMBERS.length].id;
      });
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [autoRotate, isInteracting]);

  const selectDirector = (id) => {
    setActiveId(id);
    setAutoRotate(false);
  };

  const moveDirector = (direction) => {
    if (CORE_MEMBERS.length === 0) return;
    const nextIndex = (activeIndex + direction + CORE_MEMBERS.length) % CORE_MEMBERS.length;
    selectDirector(CORE_MEMBERS[nextIndex].id);
  };

  const handleListKeyDown = (event) => {
    if (CORE_MEMBERS.length === 0) return;
    const isHandled = ["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key);
    if (!isHandled) return;

    event.preventDefault();

    let nextIndex = activeIndex;
    if (event.key === "ArrowDown") nextIndex = (activeIndex + 1) % CORE_MEMBERS.length;
    if (event.key === "ArrowUp") nextIndex = (activeIndex - 1 + CORE_MEMBERS.length) % CORE_MEMBERS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = CORE_MEMBERS.length - 1;

    selectDirector(CORE_MEMBERS[nextIndex].id);

    requestAnimationFrame(() => {
      const buttons = listRef.current?.querySelectorAll(".team-list-item");
      buttons?.[nextIndex]?.focus();
    });
  };

  const pauseInteraction = () => setIsInteracting(true);
  const resumeInteraction = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsInteracting(false);
    }
  };

  return (
    <div className="team-page">
      <header className="team-hero" data-reveal="fade">
        <p className="team-eyebrow">Core Team — AY 2026-27</p>
        <h1>
          Leadership that <span>drives impact.</span>
        </h1>
        <p className="team-hero-copy">
          From strategy and operations to cloud labs and branding, meet the students building a stronger AWS
          community at DITM.
        </p>
        <div className="team-hero-metrics">
          {metrics.map((metric) => (
            <div className="team-metric" key={metric.label}>
              <span className="team-metric-value">{metric.value}</span>
              <span className="team-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
        <nav className="team-jump-nav" aria-label="Jump to a team section">
          <a className="team-jump-link" href="#leaders">
            Leadership
          </a>
          <a className="team-jump-link" href="#directors">
            Core Team
          </a>
          <a className="team-jump-link" href="#founding">
            Founding Team
          </a>
        </nav>
      </header>

      <section id="leaders" className="leaders-section" aria-labelledby="leaders-section-title">
        <div className="leaders-container">
          <div className="leaders-header" data-reveal>
            <span className="leaders-eyebrow">Chapter Leadership</span>
            <h2 id="leaders-section-title" className="leaders-title">
              The people setting <span>the direction.</span>
            </h2>
            <p className="leaders-description">
              The chapter leader sets the vision, keeps every team aligned, and turns ideas into consistent execution.
            </p>
          </div>
          <div className="leaders-grid" data-reveal style={{ "--reveal-delay": ".08s" }}>
            {LEADERS.map((leader) => (
              <FeaturedLeaderCard leader={leader} key={leader.id} />
            ))}
          </div>
        </div>
      </section>

      <section id="directors" className="directors-section" aria-labelledby="directors-title">
        <div className="directors-header" data-reveal>
          <span className="directors-eyebrow">Core Members</span>
          <h2 id="directors-title" className="directors-title">
            Our Core Team. <span>One Mission.</span>
          </h2>
          <p className="directors-description">
            Five members, one shared direction — from IT support and photography to student engagement, social media,
            and marketing. Select a member to get to know them.
          </p>
          <div className="directors-meta">
            <span className="directors-count">{String(CORE_MEMBERS.length).padStart(2, "0")} members</span>
            <span className="directors-meta-note">One shared mission</span>
          </div>
        </div>
        <div
          className="team-showcase"
          data-reveal style={{ "--reveal-delay": ".08s" }}
          onMouseEnter={pauseInteraction}
          onMouseLeave={() => setIsInteracting(false)}
          onFocusCapture={pauseInteraction}
          onBlurCapture={resumeInteraction}
        >
          <div className="team-list-panel">
            <div className="team-list-head">
              <div>
                <h3 className="team-list-heading" id="team-showcase-title">
                  Core Members
                </h3>
                <p className="team-list-sub">Select a member to see their role.</p>
              </div>
              <button
                type="button"
                className="team-rotate-toggle"
                onClick={() => setAutoRotate((current) => !current)}
                aria-label={autoRotate ? "Pause core member auto-rotation" : "Resume core member auto-rotation"}
              >
                <span className={`team-rotate-dot ${autoRotate ? "is-live" : ""}`} aria-hidden="true" />
                {autoRotate ? "Live" : "Paused"}
              </button>
            </div>
            <div
              className="team-list"
              ref={listRef}
              onKeyDown={handleListKeyDown}
              role="group"
              aria-labelledby="team-showcase-title"
            >
              {CORE_MEMBERS.map((director, index) => {
                const isActive = director.id === activeDirector.id;
                return (
                  <button
                    className={`team-list-item ${isActive ? "team-list-item-active" : ""}`}
                    type="button"
                    onClick={() => selectDirector(director.id)}
                    aria-pressed={isActive}
                    aria-label={`${director.role} — ${director.name}`}
                    key={director.id}
                  >
                    <span className="team-list-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ProfileAvatar
                      member={director}
                      className="team-list-avatar"
                      fallbackClassName="team-list-avatar team-list-avatar-fallback"
                    />
                    <span className="team-list-text">
                      <span className="team-list-name">{director.name}</span>
                      <span className="team-list-role">{director.role}</span>
                    </span>
                    <span className="team-list-arrow" aria-hidden="true">
                      <ChevronRightIcon />
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="team-list-hint">
              <kbd aria-hidden="true">↑↓</kbd> Use arrow keys to browse
            </p>
          </div>
          <article className="team-detail-panel">
            <p className="sr-only" aria-live="polite">
              {activeDirector.name}, {activeDirector.role}
            </p>
            {autoRotate && !isInteracting && (
              <div className="team-detail-progress" aria-hidden="true">
                <span key={activeDirector.id} />
              </div>
            )}
            <div className="team-detail-content" key={activeDirector.id}>
              <div className="team-detail-header">
                <div className="team-detail-avatar-ring">
                  <ProfileAvatar
                    member={activeDirector}
                    className="team-detail-avatar-img"
                    fallbackClassName="team-detail-avatar-img team-detail-avatar-fallback"
                    loading="eager"
                  />
                </div>
                <div className="team-detail-copy">
                  <div className="team-detail-topline">
                    <span className="team-detail-step">Member {stepLabel}</span>
                    <span className="team-detail-badge">Core Team</span>
                  </div>
                  <p className="team-detail-role">{activeDirector.role}</p>
                  <h3 className="team-detail-name">{activeDirector.name}</h3>
                </div>
              </div>
              <p className="team-detail-description">{activeDirector.description}</p>
            </div>
            <div className="team-detail-footer">
              {activeDirector.linkedin || activeDirector.github ? (
                <div className="team-detail-socials">
                  {activeDirector.linkedin && (
                    <a
                      href={activeDirector.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${activeDirector.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {activeDirector.github && (
                    <a
                      href={activeDirector.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-link"
                      aria-label={`${activeDirector.name} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              ) : (
                <span className="team-detail-browse">Browse the team</span>
              )}
              <div className="team-detail-controls">
                <button
                  type="button"
                  className="team-nav-btn team-nav-btn-prev"
                  onClick={() => moveDirector(-1)}
                  aria-label="Previous core member"
                >
                  <span className="team-nav-icon" aria-hidden="true">
                    ←
                  </span>
                  <span className="team-nav-label">Prev</span>
                </button>
                <div className="team-pagination" role="group" aria-label="Choose a core member">
                  {CORE_MEMBERS.map((director) => (
                    <button
                      className={`team-dot ${director.id === activeDirector.id ? "team-dot-active" : ""}`}
                      type="button"
                      aria-label={`View ${director.name}`}
                      aria-current={director.id === activeDirector.id ? "true" : undefined}
                      onClick={() => selectDirector(director.id)}
                      key={director.id}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="team-nav-btn team-nav-btn-next"
                  onClick={() => moveDirector(1)}
                  aria-label="Next core member"
                >
                  <span className="team-nav-label">Next</span>
                  <span className="team-nav-icon" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="founding" className="founding-section" aria-labelledby="founding-section-title">
        <div className="founding-container">
          <div className="founding-header" data-reveal>
            <span className="founding-eyebrow">Founding Team</span>
            <h2 id="founding-section-title" className="founding-title">
              The builders who <span>started it all.</span>
            </h2>
            <p className="founding-description">
              The founding members who turned the idea into a running community and continue to support events,
              technical initiatives, and everyday chapter growth.
            </p>
            <div className="founding-meta">
              <span className="founding-count">{FOUNDING_MEMBERS.length} founding builders</span>
              <span className="founding-range">
                Showing {firstVisible}–{lastVisible} of {FOUNDING_MEMBERS.length}
              </span>
            </div>
          </div>
          <div className="founding-grid" data-reveal style={{ "--reveal-delay": ".08s" }}>
            {pageMembers.map((member, index) => (
              <FoundingCard member={member} index={pageStart + index + 1} key={member.id} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="founding-pagination">
              <button
                type="button"
                className="founding-page-btn"
                onClick={() => setPage((current) => Math.max(current - 1, 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                ← Prev
              </button>
              <div className="founding-page-numbers">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    type="button"
                    className={`founding-page-num ${page === pageNumber ? "active" : ""}`}
                    onClick={() => setPage(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    aria-current={page === pageNumber ? "page" : undefined}
                    key={pageNumber}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="founding-page-btn"
                onClick={() => setPage((current) => Math.min(current + 1, totalPages))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                Next →
              </button>
            </div>
          )}
          {totalPages > 1 && (
            <p className="founding-page-status" aria-live="polite">
              Page {page} of {totalPages}
            </p>
          )}
        </div>
      </section>

      <section className="team-cta-section" aria-labelledby="team-cta-title">
        <div className="team-cta-card" data-reveal="zoom">
          <span className="team-cta-eyebrow">Build with us</span>
          <h2 id="team-cta-title">
            Want to help shape the <span>next chapter?</span>
          </h2>
          <p>
            Join the AWS Student Builder Group at DITM to learn cloud skills, collaborate on real projects, and grow
            with a community that builds together.
          </p>
          <div className="team-cta-actions">
            <Link href="/contact" className="team-cta-primary">
              Get in touch <ArrowUpRight />
            </Link>
            <Link href="/events" className="team-cta-secondary">
              Explore events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
