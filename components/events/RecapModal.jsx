"use client";

import { useEffect, useState } from "react";

const RECAP_LOGO = "/assets/program-icon-BAvjs2YY.png";

const RECAP_PHOTOS = [
  {
    id: 1,
    url: "/events/inauguration/speaker-session.png",
    title: "Starting Your Cloud Career",
    speakerName: "Ms. Prajakta Kale",
    designation: "Data Engineering Consultant @ AWS",
    tag: "Chief Guest",
    caption:
      'Interactive session on "Starting Your Cloud Career: 3 Things Every Student Should Focus On" by Chief Guest Ms. Prajakta Kale, Data Engineering Consultant at AWS.',
    isSpeaker: true,
  },
  {
    id: 2,
    url: "/events/inauguration/attendees.png",
    title: "Event Attendees",
    tag: "Event Attendees",
    caption:
      "Students and faculty members gathered at the MHSSCE Seminar Hall for the official chapter launch.",
  },
  {
    id: 3,
    url: "/events/inauguration/awssbgteam.png",
    title: "AWS SBG Team",
    tag: "AWS SBG Team",
    caption:
      "The founding leadership and board of directors of the AWS Student Builder Group chapter at MHSSCE.",
  },
  {
    id: 4,
    url: "/events/inauguration/awssbgteam-pose.png",
    title: "AWS SBG Team",
    tag: "AWS SBG Team",
    caption:
      "Student organizers, core team members, and volunteers celebrating the official kickoff.",
  },
  {
    id: 5,
    url: "/events/inauguration/official-inauguration-poster.png",
    title: "Official Inauguration Poster",
    tag: "Launch Poster",
    caption:
      "Official announcement banner for the AWS SBG MHSSCE Grand Inauguration.",
  },
];

export default function RecapModal({ isOpen, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape") {
        if (lightbox === null) {
          if (isOpen) onClose();
        } else {
          setLightbox(null);
        }
      } else if (lightbox !== null) {
        if (ev.key === "ArrowRight") {
          setLightbox((v) => (v + 1) % RECAP_PHOTOS.length);
        } else if (ev.key === "ArrowLeft") {
          setLightbox((v) => (v - 1 + RECAP_PHOTOS.length) % RECAP_PHOTOS.length);
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, lightbox, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="recap-modal-backdrop"
      onClick={(e) => e.target.classList.contains("recap-modal-backdrop") && onClose()}
    >
      <div className="recap-modal-orb-1"></div>
      <div className="recap-modal-orb-2"></div>
      <div className="recap-modal-card" role="dialog" aria-modal="true" aria-labelledby="recap-title">
        <button className="recap-modal-close" onClick={onClose} aria-label="Close recap modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="recap-top-accent"></div>
        <div className="recap-header-bar">
          <div className="recap-event-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>EVENT RECAP • 03 SEP 2026</span>
          </div>
          <div className="recap-brand-tag">
            <img src={RECAP_LOGO} alt="AWS SBG" className="recap-mini-brand" />
            <span>AWS SBG • MHSSCE</span>
          </div>
        </div>
        <div className="recap-content-body">
          <div className="recap-title-block">
            <h2 id="recap-title" className="recap-main-title">
              Grand <span className="recap-green-glow">Inauguration</span>{" '26 Recap"}
            </h2>
            <p className="recap-subtitle">
              On <strong>September 3, 2026</strong>, the AWS Student Builder Group at MHSSCE celebrated its official launch at the MHSSCE Seminar Hall with an inspiring session by Chief Guest <strong>Ms. Prajakta Kale</strong> (Data Engineering Consultant @ AWS) and the unveiling of our 2026-27 technical roadmap.
            </p>
          </div>
          <div className="recap-speaker-spotlight">
            <div className="recap-speaker-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
              <span>CHIEF GUEST</span>
            </div>
            <div className="recap-speaker-info">
              <h3 className="recap-speaker-name">Ms. Prajakta Kale</h3>
              <p className="recap-speaker-role">Data Engineering Consultant @ AWS</p>
              <div className="recap-session-box">
                <h4 className="recap-session-title">Starting Your Cloud Career: 3 Things Every Student Should Focus On</h4>
                <p className="recap-speaker-summary">As part of the inauguration of AWS Student Builder Group – MHSSCE, we had the privilege of hosting an insightful session by Prajakta Kale, Data Engineering Consultant at AWS. Through her talk, she shared practical guidance on building the right skills, exploring opportunities, and taking meaningful steps towards a career in cloud and technology.</p>
              </div>
            </div>
          </div>
          <div className="recap-gallery-section">
            <div className="recap-section-header">
              <h3 className="recap-section-title">Photo Gallery</h3>
              <span className="recap-hint">Click any photo to expand full-screen</span>
            </div>
            <div className="recap-photos-grid">
              {RECAP_PHOTOS.map((photo, i) => (
                <div
                  className="recap-photo-card"
                  onClick={() => setLightbox(i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${photo.title}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
                  key={photo.id}
                >
                  <img src={photo.url} alt={photo.title} className="recap-photo-img" loading="lazy" />
                  <div className="recap-photo-overlay">
                    <span className="recap-photo-tag">{photo.tag}</span>
                    <span className="recap-expand-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <polyline points="9 21 3 21 3 15"></polyline>
                        <line x1="21" y1="3" x2="14" y2="10"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                      </svg>
                    </span>
                    <div className="recap-photo-text-block">
                      {photo.isSpeaker && (
                        <span className="recap-speaker-chip">
                          {photo.speakerName}{" • "}{photo.designation}
                        </span>
                      )}
                      <p className="recap-photo-title-text">{photo.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {lightbox !== null && (
        <div className="recap-lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="recap-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close fullscreen image">×</button>
          <button
            className="recap-lightbox-nav recap-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) => (v - 1 + RECAP_PHOTOS.length) % RECAP_PHOTOS.length);
            }}
            aria-label="Previous photo"
          >‹</button>
          <div className="recap-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={RECAP_PHOTOS[lightbox].url} alt={RECAP_PHOTOS[lightbox].title} className="recap-lightbox-img" />
            <div className="recap-lightbox-caption">
              {RECAP_PHOTOS[lightbox].isSpeaker && (
                <div className="recap-lightbox-speaker-badge">
                  {RECAP_PHOTOS[lightbox].speakerName}{" • "}{RECAP_PHOTOS[lightbox].designation}
                </div>
              )}
              <h3>{RECAP_PHOTOS[lightbox].title}</h3>
              <p>{RECAP_PHOTOS[lightbox].caption}</p>
              <span className="recap-lightbox-counter">{lightbox + 1}{" / "}{RECAP_PHOTOS.length}</span>
            </div>
          </div>
          <button
            className="recap-lightbox-nav recap-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) => (v + 1) % RECAP_PHOTOS.length);
            }}
            aria-label="Next photo"
          >›</button>
        </div>
      )}
    </div>
  );
}
