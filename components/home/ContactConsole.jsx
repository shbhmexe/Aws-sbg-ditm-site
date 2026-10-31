"use client";

import { useState } from "react";

const TABS = [
  { id: "student", title: "Student Builder", desc: "Join the community & learn", paths: ["M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", "M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"] },
  { id: "speaker", title: "Guest Speaker", desc: "Share insights & mentor", mic: true },
  { id: "partner", title: "Partner & Sponsor", desc: "Collaborate on hackathons", users: true },
];

function TabIcon({ tab }) {
  return (
    <svg className="tab-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {tab.mic ? (
        <>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </>
      ) : tab.users ? (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </>
      ) : (
        tab.paths.map((d, i) => <path key={i} d={d}></path>)
      )}
    </svg>
  );
}

export default function ContactConsole() {
  const [tab, setTab] = useState("student");

  const mailto = (subject) => (e) => {
    e.preventDefault();
    window.location.href = `mailto:awssbgl@ditm.ac.in?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <section className="contact-hub-section" id="contact-hub">
      <div className="contact-hub-container">
        <div className="contact-hub-header" data-reveal>
          <span className="contact-tag">COLLABORATION</span>
          <h2 className="contact-title">Connect &amp; Build</h2>
        </div>
        <div className="console-wrapper" data-reveal style={{ "--reveal-delay": ".08s" }}>
          <div className="console-tabs">
            {TABS.map((t) => (
              <button key={t.id} className={`tab-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)} type="button">
                <span className="tab-icon-wrapper">
                  <TabIcon tab={t} />
                </span>
                <div className="tab-text">
                  <span className="tab-title">{t.title}</span>
                  <span className="tab-desc">{t.desc}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="console-content">
            {tab === "student" && (
              <div className="console-panel animate-fade-in">
                <div className="panel-layout">
                  <div className="panel-info">
                    <h3>Kickstart Your Cloud Journey</h3>
                    <p>Join a network of student builders learning cloud computing, getting hands-on with AWS services, and preparing for global industry certifications.</p>
                    <div className="action-links">
                      <a href="https://www.meetup.com/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer" className="btn-link btn-meetup">
                        <svg className="link-svg-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        Join on Meetup
                      </a>
                    </div>
                  </div>
                  <div className="panel-features">
                    <div className="feature-item-box">
                      <div className="feature-item-header">
                        <span className="feature-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        </span>
                        <h4>Hands-on Labs</h4>
                      </div>
                      <p>Build serverless architectures, DevOps pipelines, and explore AI on AWS.</p>
                    </div>
                    <div className="feature-item-box">
                      <div className="feature-item-header">
                        <span className="feature-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                          </svg>
                        </span>
                        <h4>Certification Prep</h4>
                      </div>
                      <p>Access peer study groups for AWS Certified Cloud Practitioner &amp; Solutions Architect exams.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "speaker" && (
              <div className="console-panel animate-fade-in">
                <div className="panel-info full-width">
                  <h3>Mentor the Next Generation</h3>
                  <p>Share your cloud insights, industry experiences, or technical expertise with enthusiastic student builders. We host technical talks, panels, and deep-dive hands-on workshops.</p>
                  <div className="speaker-email-box">
                    <span className="email-label">Interested in speaking? Reach out to us at:</span>
                    <a href="mailto:awssbgl@ditm.ac.in" onClick={mailto("Speaker Collaboration Proposal")} className="email-link">
                      <svg className="email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      awssbgl@ditm.ac.in
                    </a>
                  </div>
                </div>
              </div>
            )}

            {tab === "partner" && (
              <div className="console-panel animate-fade-in">
                <div className="panel-layout">
                  <div className="panel-info">
                    <h3>Sponsor or Collaborate</h3>
                    <p>Connect with top tech talent at DITM. By partnering with the AWS Student Builder Group, you can support hackathons, sponsor learning tracks, or host company-led workshops.</p>
                    <div className="partner-pillars">
                      <div className="pillar-item">
                        <span className="pillar-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="6" x2="10" y1="12" y2="12"></line>
                            <line x1="8" x2="8" y1="10" y2="14"></line>
                            <line x1="14" x2="18" y1="12" y2="12"></line>
                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                          </svg>
                        </span>
                        <div>
                          <h4>Hackathon Tracks</h4>
                          <p>Launch custom developer challenges for cloud builders.</p>
                        </div>
                      </div>
                      <div className="pillar-item">
                        <span className="pillar-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </span>
                        <div>
                          <h4>Technical Mentorship</h4>
                          <p>Bring your engineers as mentors or session hosts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-widget">
                    <div className="metrics-card bg-card">
                      <h4>Start Collaboration</h4>
                      <p className="metrics-intro">Connect with the student lead team directly to arrange proposals:</p>
                      <div className="widget-actions">
                        <a href="mailto:awssbgl@ditm.ac.in" onClick={mailto("Partnership Proposal - AWS SBGL DITM")} className="widget-btn-action btn-proposal">
                          <svg className="link-svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          Send Partnership Request
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
