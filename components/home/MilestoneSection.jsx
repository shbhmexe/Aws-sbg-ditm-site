"use client";

import { useEffect, useState } from "react";

const PHOTOS = [
  {
    url: "/events/inauguration/awssbgteam.png",
    tag: "AWS SBG Team",
    title: "Steering chapter operations & community vision",
    caption: "The founding leadership and board of directors of the AWS Student Builder Group chapter at DITM.",
    isSpeaker: false,
  },
  {
    url: "/events/inauguration/speaker-session.png",
    tag: "Chief Guest",
    speakerCard: true,
    speakerName: "Ms. Prajakta Kale",
    designation: "Data Engineering Consultant @ AWS",
    title: "Starting Your Cloud Career",
    caption:
      'Interactive session on "Starting Your Cloud Career: 3 Things Every Student Should Focus On" by Chief Guest Ms. Prajakta Kale, Data Engineering Consultant at AWS.',
    isSpeaker: true,
  },
  {
    url: "/events/inauguration/awssbgteam-pose.png",
    tag: "AWS SBG Team",
    title: "United to learn, build & grow together",
    caption: "Student organizers, core team members, and volunteers celebrating the official kickoff.",
    isSpeaker: false,
  },
];

const ZoomIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

export default function MilestoneSection() {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (index === null) return;
      if (e.key === "Escape") setIndex(null);
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % PHOTOS.length);
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
    };
    if (index !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index]);

  const active = index !== null ? PHOTOS[index] : null;

  return (
    <section className="milestone-section" id="inauguration-recap">
      <div className="milestone-container">
        <div className="milestone-header">
          <div className="milestone-header-top">
            <div className="milestone-tag">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="milestone-sparkle-icon">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>CHAPTER MILESTONE • 03 SEP 2026</span>
            </div>
          </div>
          <h2 className="milestone-title">
            Grand <span className="milestone-gradient-text">Inauguration &apos;26</span> Highlights
          </h2>
          <p className="milestone-desc">
            On September 3, 2026, students and faculty gathered at the DITM Seminar Hall to officially launch the AWS Student Builder Group chapter with an inspiring session by Chief Guest Ms. Prajakta Kale and the unveiling of our 2026-27 roadmap.
          </p>
        </div>
        <div className="milestone-photos-grid">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className={`milestone-photo-tile ${p.speakerCard ? "milestone-speaker-card" : ""}`}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${p.title}`}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
            >
              <img alt={p.title} className="milestone-img" loading="lazy" src={p.url} />
              <div className="milestone-tile-overlay">
                <div className="milestone-tile-top-row">
                  <span className={`milestone-tile-tag ${p.speakerCard ? "milestone-tag-speaker" : ""}`}>{p.tag}</span>
                  <span className="milestone-tile-zoom-icon" aria-hidden="true">
                    <ZoomIcon />
                  </span>
                </div>
                <div className="milestone-tile-bottom">
                  {p.isSpeaker ? (
                    <div className="milestone-speaker-overlay-info">
                      <span className="milestone-speaker-name">{p.speakerName}</span>
                      <span className="milestone-speaker-role">{p.designation}</span>
                      <h4 className="milestone-tile-title">{p.title}</h4>
                    </div>
                  ) : (
                    <div className="milestone-team-overlay-info">
                      <h4 className="milestone-tile-title">{p.title}</h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="recap-lightbox-overlay" onClick={() => setIndex(null)}>
          <button className="recap-lightbox-close" onClick={() => setIndex(null)} aria-label="Close fullscreen image">×</button>
          <button
            className="recap-lightbox-nav recap-nav-prev"
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length); }}
            aria-label="Previous photo"
          >‹</button>
          <div className="recap-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={active.url} alt={active.title} className="recap-lightbox-img" />
            <div className="recap-lightbox-caption">
              {active.isSpeaker && (
                <div className="recap-lightbox-speaker-badge">
                  {active.speakerName} • {active.designation}
                </div>
              )}
              <h3>{active.title}</h3>
              <p>{active.caption}</p>
              <span className="recap-lightbox-counter">{index + 1} / {PHOTOS.length}</span>
            </div>
          </div>
          <button
            className="recap-lightbox-nav recap-nav-next"
            onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % PHOTOS.length); }}
            aria-label="Next photo"
          >›</button>
        </div>
      )}
    </section>
  );
}
