"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Share2,
  Ticket,
  Building2,
  ArrowRight,
  Gift,
  Compass,
  ShieldCheck,
  X,
  Maximize2
} from "lucide-react";
import "./UpcomingEventShowcase.css";

const MEETUP_EVENT_URL =
  "https://www.meetup.com/aws-sbg-at-delhi-institute-of-technology-and-management/events/317369758/?eventOrigin=group_upcoming_events";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=D51+Building,+IITM+Janakpuri,+New+Delhi+110058";

export default function UpcomingEventShowcase({ event }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const ev = event || {
    id: "agentforge-2026",
    title: "AgentForge – Build Beyond Bots | Inter-College Agentic AI Build Day",
    category: "Inter-College Agentic Build Day",
    day: "23",
    month: "NOV",
    year: "2026",
    dateLong: "Sunday, November 23, 2026",
    time: "10:30 AM – 1:30 PM IST",
    duration: "3 Hours Hands-On",
    venue: "D51 Building, IITM Campus",
    venueAddress: "Pocket D 1A, Janakpuri, New Delhi",
    seats: "Limited Seats",
    image: "/events/agentforge/agentforge-poster.png",
    rsvpLink: MEETUP_EVENT_URL,
  };

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(ev.rsvpLink || MEETUP_EVENT_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback
    }
  };

  return (
    <div className="upcoming-showcase-wrapper">
      {/* ---------- MASTER BENTO CARD (FITS WITHIN SCREEN VIEW) ---------- */}
      <article className="upcoming-screen-card" aria-label="Upcoming Event: AgentForge">
        {/* Subtle top hairline highlight */}
        <div className="screen-card-hairline" aria-hidden="true" />

        {/* TOP STATUS BAR (Slim & Compact) */}
        <div className="screen-card-topbar">
          <div className="topbar-left-chips">
            <div className="live-status-pill">
              <span className="live-status-dot" aria-hidden="true" />
              <span>LIVE IN 11 DAYS · RSVP OPEN</span>
            </div>
            <div className="builder-center-pill">
              <Sparkles size={13} className="text-amber" />
              <span>AWS BUILDER CENTER PRESENTS</span>
            </div>
          </div>

          <div className="topbar-right-chips">
            <span className="format-pill">OFFLINE IN-PERSON BUILD</span>
            <span className="seats-pill">LIMITED SEATS</span>
          </div>
        </div>

        {/* 2-COLUMN BALANCED SCREEN GRID */}
        <div className="screen-card-grid">
          {/* LEFT COLUMN: Visual Poster Stage & Secondary Logistics */}
          <div className="grid-left-visual">
            <div className="poster-stage-container">
              {/* College Partnership Header */}
              <div className="poster-partner-bar">
                <div className="partner-institutions">
                  <span className="inst-badge ditm">
                    <Building2 size={11} />
                    <span>DITM Sonipat</span>
                  </span>
                  <span className="inst-sep">×</span>
                  <span className="inst-badge iitm">
                    <Building2 size={11} />
                    <span>IITM Janakpuri</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="expand-poster-btn"
                  onClick={() => setLightboxOpen(true)}
                  title="Expand flyer poster"
                  aria-label="Expand flyer poster"
                >
                  <Maximize2 size={13} />
                  <span>Expand</span>
                </button>
              </div>

              {/* Poster Viewport with Zoom Overlay */}
              <div
                className="poster-viewport-box"
                onClick={() => setLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
                aria-label="Click to enlarge flyer poster"
              >
                <img
                  src={ev.image || "/events/agentforge/agentforge-poster.png"}
                  alt="AgentForge – Build Beyond Bots Inter-College Agentic Build Day Event Poster"
                  className="poster-render-img"
                  loading="eager"
                />
                <div className="poster-glass-overlay">
                  <div className="glass-badge">
                    <Maximize2 size={15} />
                    <span>Click to View Full Poster</span>
                  </div>
                </div>
              </div>

              {/* Utility Action Bar */}
              <div className="poster-utility-bar">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="util-btn"
                  title="Open venue in Google Maps"
                >
                  <Compass size={13} />
                  <span>Google Maps</span>
                  <ExternalLink size={11} className="util-ext" />
                </a>

                <button
                  type="button"
                  className="util-btn"
                  onClick={handleCopyLink}
                  title="Copy registration link to clipboard"
                >
                  <Share2 size={13} />
                  <span>{copied ? "Link Copied!" : "Share Event"}</span>
                </button>
              </div>
            </div>

            {/* Compact Allocation Note */}
            <div className="allocation-notice-box">
              <ShieldCheck size={16} className="notice-icon text-emerald" />
              <div className="notice-content">
                <strong>First-Come, First-Served Entry</strong>
                <p>RSVP on Meetup required. Confirmed attendees receive confirmation email.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Event Intelligence, Tracks, Hosts & Primary CTA */}
          <div className="grid-right-content">
            {/* Header: Title & Subtitle */}
            <div className="event-title-block">
              <h2 className="event-headline">
                AgentForge <span>— Build Beyond Bots</span>
              </h2>
              <p className="event-tagline">
                The inter-college agentic AI build day co-hosted by AWS Student Builder Groups at{" "}
                <strong>DITM</strong> × <strong>IITM College of Engineering</strong>.
              </p>
            </div>

            {/* 4-Item Compact Logistics Matrix */}
            <div className="logistics-compact-matrix">
              <div className="logistics-cell cell-date">
                <div className="cell-icon-wrap">
                  <Calendar size={16} />
                </div>
                <div className="cell-data">
                  <span className="cell-lbl">DATE</span>
                  <span className="cell-val">Sun, 23 Nov 2026</span>
                </div>
              </div>

              <div className="logistics-cell cell-time">
                <div className="cell-icon-wrap">
                  <Clock size={16} />
                </div>
                <div className="cell-data">
                  <span className="cell-lbl">TIME &amp; DURATION</span>
                  <span className="cell-val">10:30 AM – 1:30 PM IST</span>
                  <span className="cell-sub">3 Hours Hands-On</span>
                </div>
              </div>

              <div className="logistics-cell cell-venue">
                <div className="cell-icon-wrap">
                  <MapPin size={16} />
                </div>
                <div className="cell-data">
                  <span className="cell-lbl">VENUE</span>
                  <span className="cell-val">D51 Building, IITM Campus</span>
                  <span className="cell-sub">Janakpuri, New Delhi</span>
                </div>
              </div>

              <div className="logistics-cell cell-access">
                <div className="cell-icon-wrap">
                  <Ticket size={16} />
                </div>
                <div className="cell-data">
                  <span className="cell-lbl">ADMISSION</span>
                  <span className="cell-val">Free Entry (RSVP Required)</span>
                  <span className="cell-sub">Open to Tech Students</span>
                </div>
              </div>
            </div>

            {/* 3 Build Day Curriculum Tracks (Crisp & Scannable) */}
            <div className="tracks-condensed-section">
              <div className="tracks-header-row">
                <span className="tracks-header-tag">WHAT YOU WILL BUILD &amp; MASTER</span>
              </div>

              <div className="tracks-condensed-grid">
                <div className="track-mini-card">
                  <span className="track-num">01</span>
                  <div className="track-text">
                    <strong>Understand Agentic Systems</strong>
                    <p>How LLM agents reason, iteratively plan workflows, and use tools autonomously.</p>
                  </div>
                </div>

                <div className="track-mini-card">
                  <span className="track-num">02</span>
                  <div className="track-text">
                    <strong>Build Your First AI Agent</strong>
                    <p>Hands-on development connecting multi-agent frameworks, API tools, and cloud execution.</p>
                  </div>
                </div>

                <div className="track-mini-card">
                  <span className="track-num">03</span>
                  <div className="track-text">
                    <strong>Verify with AWS Builder Center</strong>
                    <p>Live SheerID student verification demo, unlocking official badges and builder rewards.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-Leads & Perks Bottom Bar */}
            <div className="bottom-meta-row">
              {/* Co-Leads Avatars */}
              <div className="leads-group">
                <span className="meta-row-label">CO-HOSTS:</span>
                <div className="leads-avatars-row">
                  <div className="lead-chip" title="Nandini Shukla · AWS SBG Lead, IITM College of Engineering">
                    <img
                      src="/team/founding/02_NANDINI_FM.png"
                      alt="Nandini Shukla"
                      className="lead-img"
                    />
                    <div className="lead-info">
                      <span className="lead-name">Nandini Shukla</span>
                      <span className="lead-role">AWS SBG Lead, IITM</span>
                    </div>
                  </div>

                  <div className="lead-chip" title="Shubham Shukla · Chapter Leader, AWS SBGL DITM">
                    <img
                      src="/team/core/SHUBHAM_CORE.png"
                      alt="Shubham Shukla"
                      className="lead-img"
                    />
                    <div className="lead-info">
                      <span className="lead-name">Shubham Shukla</span>
                      <span className="lead-role">Chapter Leader, DITM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Perks Chips */}
              <div className="perks-group">
                <span className="meta-row-label">PERKS:</span>
                <div className="perks-chips-list">
                  <span className="perk-tag">
                    <Gift size={12} className="text-amber" />
                    <span>Exclusive Swags</span>
                  </span>
                  <span className="perk-tag">
                    <Award size={12} className="text-cyan" />
                    <span>Certificates</span>
                  </span>
                  <span className="perk-tag">
                    <CheckCircle2 size={12} className="text-emerald" />
                    <span>Refreshments</span>
                  </span>
                  <span className="perk-tag">
                    <Sparkles size={12} className="text-gold" />
                    <span>Top 3 Prizes</span>
                  </span>
                </div>
              </div>
            </div>

            {/* High-Impact RSVP Command Bar */}
            <div className="action-command-bar">
              <a
                href={ev.rsvpLink || MEETUP_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="command-rsvp-btn"
                aria-label="RSVP for AgentForge on Meetup"
              >
                <img
                  src="/assets/meetupicon-C5hscCD3.png"
                  alt="Meetup"
                  className="meetup-icon-img"
                />
                <span>RSVP on Meetup</span>
                <ArrowRight size={17} className="arrow-icon" />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="command-maps-btn"
                title="Get venue directions on Google Maps"
              >
                <MapPin size={14} />
                <span>Get Directions</span>
                <ExternalLink size={11} className="ext-icon" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ---------- LIGHTBOX POSTER PREVIEW MODAL ---------- */}
      {lightboxOpen && (
        <div
          className="poster-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Event Poster Lightbox"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-info">
                <h3>AgentForge – Build Beyond Bots</h3>
                <span>AWS Student Builder Groups · DITM × IITM Janakpuri</span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close poster view"
              >
                <X size={19} />
              </button>
            </div>
            <div className="lightbox-image-wrap">
              <img
                src={ev.image || "/events/agentforge/agentforge-poster.png"}
                alt="AgentForge High Resolution Flyer"
                className="lightbox-full-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
