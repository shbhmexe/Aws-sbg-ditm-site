"use client";

import { useState } from "react";
import Link from "next/link";
import CoreDirectorsDeck from "@/components/team/CoreDirectorsDeck";
import DoomSovereignLeader from "@/components/team/DoomSovereignLeader";

const LI_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const GH_PATH =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const FOUNDING_PAGE_SIZE = 8;

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const LEADER = {
  id: "shubham-shukla",
  name: "Shubham Shukla",
  role: "Chapter Leader",
  chapter: "AWS Student Builder Group · DITM",
  tag: "AWS SBGL LEADER",
  description:
    "Sets overall vision, drives strategic initiatives, and leads the AWS SBG chapter at DITM with clarity, purpose, and momentum for the academic year 2026-27.",
  quote: "Building a strong community starts with steady execution.",
  focusAreas: ["Community Vision", "Team Alignment", "Cloud Architecture", "Execution"],
  gradient: "linear-gradient(135deg, #00d26a 0%, #00A4E4 100%)",
  github: "https://github.com/shbhmexe",
  linkedin: "https://www.linkedin.com/in/shubham-shukla-62095032a/",
  profileUrl: "/team/core/SHUBHAM_CORE.png",
};

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
        decoding="async"
      />
    );
  }

  return (
    <div className={fallbackClassName || className} style={{ background: member.gradient }} aria-hidden="true">
      {getInitials(member.name)}
    </div>
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
            decoding="async"
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
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(FOUNDING_MEMBERS.length / FOUNDING_PAGE_SIZE);
  const pageStart = (page - 1) * FOUNDING_PAGE_SIZE;
  const pageMembers = FOUNDING_MEMBERS.slice(pageStart, pageStart + FOUNDING_PAGE_SIZE);
  const firstVisible = pageStart + 1;
  const lastVisible = Math.min(pageStart + FOUNDING_PAGE_SIZE, FOUNDING_MEMBERS.length);

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero" data-reveal="fade">
        <div className="hero-tag team-eyebrow">
          <span>CORE TEAM — AY 2026-27</span>
        </div>
        <h1>
          Leadership that<br />
          <span>drives impact.</span>
        </h1>
        <p className="team-hero-copy">
          A unified team committed to building a stronger AWS cloud community at Delhi Institute of Technology and Management.
        </p>

        <div className="team-hero-metrics">
          <div className="team-metric">
            <span className="team-metric-value">01</span>
            <span className="team-metric-label">Chapter Leader</span>
          </div>
          <div className="team-metric">
            <span className="team-metric-value">05</span>
            <span className="team-metric-label">Core Directors</span>
          </div>
          <div className="team-metric">
            <span className="team-metric-value">12</span>
            <span className="team-metric-label">Founding Builders</span>
          </div>
        </div>

        <nav className="team-jump-nav" aria-label="Section navigation">
          <a href="#leaders" className="team-jump-link">Leadership</a>
          <a href="#directors" className="team-jump-link">Five Directors</a>
          <a href="#founding" className="team-jump-link">Founding Team</a>
        </nav>
      </section>

      {/* Chapter Leadership Section */}
      <section id="leaders" className="leaders-section" aria-labelledby="team-leader-heading">
        <div className="leaders-container">
          <header className="leaders-header" data-reveal>
            <div className="hero-tag leaders-eyebrow">
              <span>AWS SBG LEADERSHIP</span>
            </div>
            <h2 id="team-leader-heading" className="leaders-title">
              Chapter <span>Leadership</span>
            </h2>
            <p className="leaders-description">
              Guiding vision, steering operations, and building momentum for the AWS Student Builder Group.
            </p>
          </header>

          <div className="leaders-sovereign-wrapper" data-reveal>
            <DoomSovereignLeader member={LEADER} />
          </div>
        </div>
      </section>

      {/* Five Directors: Futuristic Quantum Command Deck */}
      <section id="directors" className="directors-section" aria-labelledby="team-directors-heading">
        <div className="directors-container">
          <div className="directors-header" data-reveal>
            <div className="hero-tag directors-eyebrow">
              <span>CORE DIRECTORS // QUANTUM DECK</span>
            </div>
            <h2 id="team-directors-heading" className="directors-title">
              Five Directors. <span>One Mission.</span>
            </h2>
            <p className="directors-description">
              Each director commands a critical domain to ensure seamless chapter execution across all initiatives.
            </p>
          </div>

          {/* Futuristic Quantum Command Deck */}
          <CoreDirectorsDeck />
        </div>
      </section>

      {/* Founding Team Section */}
      <section id="founding" className="founding-section" aria-labelledby="founding-section-title">
        <div className="founding-container">
          <div className="founding-header" data-reveal>
            <div className="hero-tag founding-eyebrow">
              <span>FOUNDING TEAM</span>
            </div>
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

      {/* Community CTA Section */}
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
