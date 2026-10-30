"use client";

import { useState, useEffect } from "react";

const LI_PATH =
  "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

const GH_PATH =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const FOUNDING_PAGE_SIZE = 8;

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TEAM_MEMBERS = [
  { id: "abid-ahmed-shaikh", name: "Abid Ahmed Shaikh", type: "leader", initials: "AS", role: "AWS SBGL DITM Leader", description: "Sets overall vision, drives strategic initiatives, and leads the AWS SBGL chapter with clarity and momentum.", quote: "Building a strong community starts with steady execution.", focusAreas: ["Community Vision", "Team Alignment", "Execution"], gradient: "linear-gradient(135deg, #00d26a 0%, #3bb2ff 100%)", github: "https://github.com/InfX2243", linkedin: "https://www.linkedin.com/in/abid-ahmed-shaikh/", profileUrl: "/team/core/ABID_CORE.png" },
  { id: "prem-pagar", name: "Prem Pagar", type: "leader", initials: "PP", role: "AWS SBGL DITM Leader", description: "Co-leads chapter operations, fosters technical growth, and empowers student developers across campus.", quote: "Building a strong community starts with steady execution.", focusAreas: ["Community Vision", "Team Alignment", "Execution"], gradient: "linear-gradient(135deg, #3bb2ff 0%, #a050ff 100%)", github: "https://github.com", linkedin: "https://www.linkedin.com/in/prempagar/", profileUrl: "/team/core/PREM_CORE.png" },
  { id: "mohammed-umar-ansari", name: "Mohammed Umar Ansari", type: "core", initials: "UA", role: "Director of Operations", description: "Sets direction, keeps the team aligned, and makes sure the chapter runs with clarity and momentum.", quote: "Building a strong community starts with steady execution.", focusAreas: ["Community Vision", "Team Alignment", "Execution"], gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)", github: "https://github.com/C0dEr8627", linkedin: "https://www.linkedin.com/in/mohammed-umar-ansari-ab4269353/", profileUrl: "/team/core/UMAR_CORE.png" },
  { id: "tabish-siddiqui", name: "Tabish Siddiqui", type: "core", initials: "TS", role: "Director of Events", description: "Shapes event planning, coordination, and on-ground delivery so every session feels organized and valuable.", quote: "A great event is part planning, part energy, and all follow-through.", focusAreas: ["Workshops", "Panels", "Event Operations"], gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)", github: "https://github.com", linkedin: "https://www.linkedin.com/in/tabish-javed-siddiqui-00945736a/", profileUrl: "/team/core/Tabish_CORE.jpg" },
  { id: "yashfeen-raavi", name: "Yashfeen Raavi", type: "core", initials: "YR", role: "Director of Cloud Technology", description: "Guides technical learning, cloud demos, and hands-on sessions that help members build real AWS confidence.", quote: "Cloud skills grow fastest when theory meets practice.", focusAreas: ["AWS Labs", "Technical Sessions", "Hands-on Learning"], gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", github: "https://github.com/yashfeenraavi09", linkedin: "https://www.linkedin.com/in/yashfeen-r-7720982a2/", profileUrl: "/team/core/YASHFEEN_CORE.jpg" },
  { id: "mohammed-kadiwal", name: "Mohammed Kadiwal", type: "core", initials: "MK", role: "Director of Community & Public", description: "Builds relationships, encourages participation, and strengthens the chapter’s presence across the college.", quote: "Community grows when people feel seen, heard, and invited in.", focusAreas: ["Outreach", "Engagement", "Community Growth"], gradient: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)", github: "https://github.com/umer241419it-hue", linkedin: "https://www.linkedin.com/in/mohammad-kadiwal-7856b927b/", profileUrl: "/team/core/MOHAMMAD_CORE.png" },
  { id: "shifa-shaikh", name: "Shifa Shaikh", type: "core", initials: "SS", role: "Director of Marketing & Branding", description: "Shapes the visual identity, communication, and storytelling that help the chapter stand out with consistency.", quote: "Good branding makes the work feel clear before a single word is read.", focusAreas: ["Brand Voice", "Visual Identity", "Content"], gradient: "linear-gradient(135deg, #ea6297 0%, #a050ff 100%)", github: "https://github.com/shaikhshifa11", linkedin: "https://www.linkedin.com/in/shaikhshifa11/", profileUrl: "/team/core/SHIFA_CORE.png" },
];

const FOUNDING_MEMBERS = [
  { id: "shaikh-fatima-nasiruddin", name: "Shaikh Fatima Nasiruddin", profileUrl: "/team/founding/01_Fatma_FM.jpg", initials: "SF", linkedin: "https://www.linkedin.com/in/fatma-shaikh-15b4963ab/" },
  { id: "mohammed-ismail-khumar", name: "Mohammed Ismail Khumar", profileUrl: "/team/founding/02_Mohammed_FM.png", initials: "MK", linkedin: "https://www.linkedin.com" },
  { id: "sana-rafique-shaikh", name: "Sana Rafique Shaikh", profileUrl: "/team/founding/03_Sana_Rafique_FM.jpeg", initials: "SS", linkedin: "https://www.linkedin.com/in/sana-rafique-shaikh-1a0b26317/" },
  { id: "shohail-shaikh", name: "Shohail Shaikh", profileUrl: "/team/founding/04_SHOHAIL SHAIKH_FM.png", initials: "SS", linkedin: "https://www.linkedin.com" },
  { id: "shaikh-fatima-zahra", name: "Shaikh Fatima Zahra", profileUrl: "/team/founding/05_Fatima_FM.PNG", initials: "FZ", linkedin: "https://www.linkedin.com/in/shaikh-fatima-zahra-mohammed-javed-6524a236a/" },
  { id: "nagdawala-mohammed-bilal", name: "Nagdawala Mohammed Bilal", profileUrl: "/team/founding/06_BILAL_FM.png", initials: "MB", linkedin: "https://www.linkedin.com/in/bilal-nagdawala/" },
  { id: "shaikh-rafiya-asif-iqbal", name: "Shaikh Rafiya Asif Iqbal", profileUrl: "/team/founding/07_RAFIYA_FM.png", initials: "SR", linkedin: "https://www.linkedin.com/in/rafiya-shaikh-66b688380/" },
  { id: "ayra-suthar", name: "Ayra Suthar", profileUrl: "/team/founding/08_Ayra_Suthar.jpg", initials: "AS", linkedin: "https://www.linkedin.com/in/ayra-suthar-1b44b8397/" },
  { id: "shaikh-sarah-samir", name: "Shaikh Sarah Samir", profileUrl: "/team/founding/09_SARAH_FM.png", initials: "SS", linkedin: "https://www.linkedin.com" },
  { id: "ansari-alfiya-nafees-ahmed", name: "Ansari Alfiya Nafees Ahmed", profileUrl: "/team/founding/10_ALFIYA_FM.jpeg", initials: "AA", linkedin: "https://www.linkedin.com" },
  { id: "farea-ansari", name: "Farea Ansari", profileUrl: "/team/founding/12_FAREA_FM.jpg", initials: "FA", linkedin: "https://www.linkedin.com/in/farea-ansari-36a6a4338/" },
  { id: "arshan-attar", name: "Arshan Attar", profileUrl: "/team/founding/13_Arshan_FM.png", initials: "AA", linkedin: "https://www.linkedin.com/in/arshanattar18/" },
  { id: "zainab-borkar", name: "Zainab Borkar", profileUrl: null, initials: "ZB", linkedin: "https://www.linkedin.com/in/zainab-borkar-a36071428/" },
  { id: "idrisi-dhanani", name: "Idrisi Dhanani", profileUrl: "/team/founding/15_IDRIS_FM.png", initials: "ID", linkedin: "https://www.linkedin.com/in/idris-dhanani05/" },
  { id: "zayar", name: "Sayed Zayar", profileUrl: "/team/founding/16_Zayar_FM.jpg", initials: "Z", linkedin: "https://www.linkedin.com/in/syed-zayar-hussain-9563b43b2/" },
];

const LEADERS = TEAM_MEMBERS.filter((member) => member.type === "leader");
const DIRECTORS = TEAM_MEMBERS.filter((member) => member.type === "core");

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d={LI_PATH} />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d={GH_PATH} />
  </svg>
);

function FoundingCard({ member }) {
  const [imgError, setImgError] = useState(false);
  const showImage = member.profileUrl && !imgError;
  const linkedinHref = member.linkedin || "https://www.linkedin.com";

  return (
    <div className="founding-card">
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
          aria-label={`${member.name} on LinkedIn`}
        >
          <svg className="founding-linkedin-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d={LI_PATH} />
          </svg>
          <span className="founding-btn-text">Connect</span>
          <svg
            className="founding-arrow-icon"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [activeId, setActiveId] = useState(DIRECTORS[0]?.id || "mohammed-umar-ansari");
  const [autoRotate, setAutoRotate] = useState(true);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(FOUNDING_MEMBERS.length / FOUNDING_PAGE_SIZE);
  const pageMembers = FOUNDING_MEMBERS.slice((page - 1) * FOUNDING_PAGE_SIZE, page * FOUNDING_PAGE_SIZE);

  const rawIndex = DIRECTORS.findIndex((member) => member.id === activeId);
  const activeIndex = rawIndex >= 0 ? rawIndex : 0;
  const activeDirector = DIRECTORS[activeIndex] ?? DIRECTORS[0];
  const stepLabel = `${String(activeIndex + 1).padStart(2, "0")} / ${String(DIRECTORS.length).padStart(2, "0")}`;

  useEffect(() => {
    if (!autoRotate || DIRECTORS.length === 0) return;
    const timer = setInterval(() => {
      setActiveId((current) => {
        const idx = DIRECTORS.findIndex((member) => member.id === current);
        return DIRECTORS[(idx + 1) % DIRECTORS.length].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const selectDirector = (id) => {
    setActiveId(id);
    setAutoRotate(false);
  };

  return (
    <div className="team-page">
      <header className="team-hero">
        <p className="team-eyebrow">Core Team — AY 2026-27</p>
        <h1>
          Leadership that <span>drives impact.</span>
        </h1>
        <p className="team-hero-copy">
          A unified team committed to building a stronger <br />
          AWS community on campus.
        </p>
      </header>

      <section className="leaders-section" aria-labelledby="leaders-section-title">
        <div className="leaders-container">
          <div className="leaders-header">
            <span className="leaders-eyebrow">AWS SBG LEADERS</span>
            <h2 id="leaders-section-title" className="leaders-title">
              Chapter <span>Leadership</span>
            </h2>
            <p className="leaders-description">
              Guiding vision, steering operations, and building momentum for the AWS Student Building Group.
            </p>
          </div>
          <div className="leaders-grid">
            {LEADERS.map((leader) => (
              <div className="leader-featured-card" key={leader.id}>
                <div className="leader-badge-pill">AWS SBG MHSSCE LEADER</div>
                <div className="leader-card-header">
                  <div className="leader-avatar-wrapper">
                    {leader.profileUrl && !leader.profileUrl.endsWith("/") ? (
                      <img src={leader.profileUrl} alt={leader.name} className="leader-avatar-img" />
                    ) : (
                      <div className="leader-avatar-initials" style={{ background: leader.gradient }}>
                        {getInitials(leader.name)}
                      </div>
                    )}
                  </div>
                  <div className="leader-title-box">
                    <h3 className="leader-name">{leader.name}</h3>
                    <p className="leader-designation">AWS SBG MHSSCE Leader</p>
                  </div>
                </div>
                <blockquote className="leader-quote">“{leader.quote}”</blockquote>
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
                        aria-label="LinkedIn"
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
                        aria-label="GitHub"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="directors-section" aria-labelledby="directors-title">
        <div className="directors-header">
          <span className="directors-eyebrow">CORE DIRECTORS</span>
          <h2 id="directors-title" className="directors-title">
            Five Directors. <span>One Mission.</span>
          </h2>
          <p className="directors-description">
            Each director leads a critical domain to ensure seamless chapter execution across all initiatives.
          </p>
        </div>
        <div className="team-showcase" aria-labelledby="team-showcase-title">
          <div className="team-list-panel" aria-label="Team directors">
            <h3 className="team-list-heading" id="team-showcase-title">
              Board of Directors
            </h3>
            {DIRECTORS.map((director, index) => (
              <button
                className={`team-list-item ${director.id === activeDirector.id ? "team-list-item-active" : ""}`}
                type="button"
                onClick={() => selectDirector(director.id)}
                key={director.id}
              >
                <span className="team-list-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="team-list-text">
                  <span className="team-list-role">{director.role}</span>
                  <span className="team-list-name">{director.name}</span>
                </span>
                <span className="team-list-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>
          <article className="team-detail-panel">
            <div className="team-detail-header">
              {activeDirector.profileUrl && !activeDirector.profileUrl.endsWith("/") ? (
                <img
                  src={activeDirector.profileUrl}
                  alt={activeDirector.name}
                  className="team-detail-avatar"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="team-detail-avatar" style={{ background: activeDirector.gradient }} aria-hidden="true">
                  {getInitials(activeDirector.name)}
                </div>
              )}
              <div className="team-detail-copy">
                <span className="team-detail-step">{stepLabel}</span>
                <h3>{activeDirector.role}</h3>
                <h4 className="team-detail-director-name">{activeDirector.name}</h4>
                <p>{activeDirector.description}</p>
              </div>
            </div>
            <blockquote className="team-detail-quote">“{activeDirector.quote}”</blockquote>
            <div className="team-focus">
              <p className="team-focus-label">Focus areas</p>
              <div className="team-focus-list">
                {activeDirector.focusAreas.map((tag) => (
                  <span className="team-focus-badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="team-detail-socials">
              {activeDirector.linkedin && (
                <a
                  href={activeDirector.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              )}
              <a
                href={
                  activeDirector.github && activeDirector.github !== "https://github.com"
                    ? activeDirector.github
                    : "https://github.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="team-social-link"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="team-detail-footer">
              <div className="team-pagination" aria-label="Director pagination">
                {DIRECTORS.map((director) => (
                  <button
                    className={`team-dot ${director.id === activeDirector.id ? "team-dot-active" : ""}`}
                    type="button"
                    aria-label={`View ${director.name}`}
                    onClick={() => selectDirector(director.id)}
                    key={director.id}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="founding-section" aria-labelledby="founding-section-title">
        <div className="founding-container">
          <div className="founding-header">
            <span className="founding-eyebrow">FOUNDING TEAM</span>
            <h2 id="founding-section-title" className="founding-title">
              Founding <span>Team Members</span>
            </h2>
            <p className="founding-description">
              The passionate team members supporting event execution, technical initiatives, and overall community
              growth.
            </p>
          </div>
          <div className="founding-grid">
            {pageMembers.map((member) => (
              <FoundingCard member={member} key={member.id} />
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
        </div>
      </section>
    </div>
  );
}



