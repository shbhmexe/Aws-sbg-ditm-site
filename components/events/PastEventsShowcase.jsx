"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Camera,
  Layers,
  Award
} from "lucide-react";
import "./PastEventsShowcase.css";

const PAST_EVENTS_DATA = [
  {
    id: "cloudlaunch-2",
    edition: "EDITION 02",
    editionBadge: "LATEST WORKSHOP",
    isLatest: true,
    title: "CloudLaunch - 2 | AWS Builder Center Hands-On Workshop",
    category: "Hands-on Lab & Workshop",
    day: "28",
    month: "OCT",
    year: "2026",
    dateLong: "Wednesday, October 28, 2026",
    time: "2:30 PM – 4:30 PM IST",
    venue: "D51 Building, DITM Campus",
    attendees: "120+ Builders",
    eligibility: "B.Tech & BCA Students",
    description:
      "CloudLaunch returned with an intensive hands-on student workshop focused on AWS Builder Center, web app development with AWS Amplify, and real-time student quiz challenges.",
    poster: "/thumbs/poster-cl2.webp",
    detailPath: "/events/cloudlaunch-2",
    meetupUrl:
      "https://www.meetup.com/aws-sbg-at-delhi-institute-of-technology-and-management/events/317061542/?eventOrigin=group_events_list",
    totalPhotos: 116,
    previewPhotos: [
      "/thumbs/cl2-1.webp",
      "/thumbs/cl2-2.webp",
      "/thumbs/cl2-3.webp",
    ],
    speakers: [
      { name: "Anjali Kumari", role: "Builder Center Lead", avatar: "/team/core/ANJALI_CORE.png" },
      { name: "Tarashankar Hazra", role: "Amplify Instructor", avatar: "/team/core/TARASHANKAR_CORE.png" },
      { name: "Vansh Verma", role: "Live Quiz Host", avatar: "/team/core/VANSH_CORE.png" },
    ],
    tags: ["AWS Builder Center", "AWS Amplify", "Live Quiz", "Web App Lab"],
    agendaSummary: [
      { step: "01", title: "AWS Builder Center Exploration", speaker: "Anjali Kumari" },
      { step: "02", title: "Build Full Web App with AWS Amplify", speaker: "Tarashankar Hazra" },
      { step: "03", title: "Live Quiz, Swags & Community Closing", speaker: "Vansh Verma" },
    ],
  },
  {
    id: "cloudlaunch",
    edition: "EDITION 01",
    editionBadge: "INAUGURAL WORKSHOP",
    isLatest: false,
    title: "CloudLaunch | AWS Builder Center Hands-On Workshop",
    category: "Hands-on Lab & Workshop",
    day: "19",
    month: "OCT",
    year: "2026",
    dateLong: "Monday, October 19, 2026",
    time: "12:00 PM – 2:00 PM IST",
    venue: "D51 Building, DITM Campus",
    attendees: "100+ Builders",
    eligibility: "Engineering & Tech Students",
    description:
      "The foundational AWS Builder Center session followed by a practical cloud deployment — learning fundamentals, connecting with fellow builders, and hosting a static website on Amazon S3.",
    poster: "/thumbs/poster-cl1.webp",
    detailPath: "/events/cloudlaunch",
    meetupUrl:
      "https://www.meetup.com/aws-sbg-at-delhi-institute-of-technology-and-management/events/316776675/?eventOrigin=group_events_list",
    totalPhotos: 271,
    previewPhotos: [
      "/thumbs/cl1-1.webp",
      "/thumbs/cl1-2.webp",
      "/thumbs/cl1-3.webp",
    ],
    speakers: [
      { name: "Farman Khan", role: "Student Engagement", avatar: "/team/core/FARMAN_CORE.jpeg" },
      { name: "Shubham Shukla", role: "Chapter Leader", avatar: "/team/core/SHUBHAM_CORE.png" },
      { name: "Aakash Rana", role: "Tech Head", avatar: "/team/core/AAKASH_CORE.png" },
    ],
    tags: ["AWS Builder Center", "Amazon S3", "Static Hosting", "Hands-on Lab"],
    agendaSummary: [
      { step: "01", title: "Discover AWS Builder Center", speaker: "Farman Khan" },
      { step: "02", title: "Host Static Website on Amazon S3", speaker: "Shubham Shukla" },
      { step: "03", title: "Open Q&A, Rewards & Recognition", speaker: "Aakash Rana" },
    ],
  },
];

// React Bits High-Performance Spotlight Showcase Card (Zero React Re-renders on mousemove)
function SpotlightShowcaseCard({ event, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`past-event-bento-card ${event.isLatest ? "latest-edition" : ""}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* React Bits dynamic spotlight glow (CSS variable driven, zero CPU re-renders) */}
      <div className="spotlight-radial-glow" aria-hidden="true" />

      {/* Top Header Bar (Shadcn style pill badges) */}
      <div className="card-header-bar">
        <div className="header-badge-group">
          <span className="edition-badge">
            <Sparkles size={13} className="text-green" />
            <span>{event.edition}</span>
          </span>
          <span className={`status-pill ${event.isLatest ? "status-latest" : ""}`}>
            <CheckCircle2 size={13} />
            <span>Completed</span>
          </span>
          <span className="category-pill">{event.category}</span>
        </div>

        <div className="event-date-chip">
          <Calendar size={13} />
          <span>{event.dateLong}</span>
        </div>
      </div>

      {/* Main Grid: Info on left, Poster & Photo Strip on right */}
      <div className="card-main-layout">
        {/* Left Column: Details */}
        <div className="card-info-col">
          <Link href={event.detailPath} className="card-title-link">
            <h2 className="card-event-title">{event.title}</h2>
          </Link>
          <p className="card-event-desc">{event.description}</p>

          {/* Quick Meta Row */}
          <div className="card-meta-chips">
            <div className="meta-chip">
              <Clock size={13} />
              <span>{event.time}</span>
            </div>
            <div className="meta-chip">
              <MapPin size={13} />
              <span>{event.venue}</span>
            </div>
            <div className="meta-chip">
              <Users size={13} />
              <span>{event.attendees}</span>
            </div>
            <div className="meta-chip">
              <Award size={13} />
              <span>{event.eligibility}</span>
            </div>
          </div>

          {/* Agenda Outline */}
          <div className="card-agenda-block">
            <div className="agenda-block-label">
              <Layers size={13} />
              <span>WORKSHOP BREAKDOWN</span>
            </div>
            <div className="agenda-items-list">
              {event.agendaSummary.map((item) => (
                <div className="agenda-mini-item" key={item.step}>
                  <span className="agenda-num">{item.step}</span>
                  <div className="agenda-info">
                    <span className="agenda-name">{item.title}</span>
                    <span className="agenda-speaker">Led by {item.speaker}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="card-tags-row">
            {event.tags.map((tag) => (
              <span className="card-tag" key={tag}>
                #{tag}
              </span>
            ))}
          </div>

          {/* CTAs (Shadcn UI style buttons) */}
          <div className="card-action-bar">
            <Link href={event.detailPath} className="btn-primary-glow">
              <span>View Full Highlights & Gallery</span>
              <ArrowRight size={15} className="arrow-shift" />
            </Link>

            <a
              href={event.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-outline"
            >
              <span>Meetup Archive</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase (Poster + Live Photo Strip) */}
        <div className="card-visual-col">
          <Link href={event.detailPath} className="poster-preview-wrapper" aria-label={`View ${event.title}`}>
            <img
              src={event.poster}
              alt={event.title}
              className="poster-image"
              loading="lazy"
              decoding="async"
              width={900}
              height={506}
            />
            <div className="poster-overlay-glow">
              <span className="poster-zoom-pill">
                <Sparkles size={12} />
                <span>Explore Recap</span>
              </span>
            </div>
          </Link>

          {/* Real Photo Strip Preview */}
          <div className="gallery-strip-container">
            <div className="gallery-strip-header">
              <div className="strip-label">
                <Camera size={13} />
                <span>Live Moments & Attendees</span>
              </div>
              <span className="photos-counter">{event.totalPhotos} Photos</span>
            </div>

            <div className="photo-thumbnails-row">
              {event.previewPhotos.map((photoUrl, pIndex) => (
                <Link
                  href={event.detailPath}
                  key={pIndex}
                  className="photo-thumb-card"
                  aria-label={`Workshop snapshot ${pIndex + 1}`}
                >
                  <img
                    src={photoUrl}
                    alt="Workshop moment"
                    className="thumb-img"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                  />
                  <div className="thumb-hover-overlay">
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}

              <Link href={event.detailPath} className="photo-thumb-card more-photos-card">
                <div className="more-photos-inner">
                  <span className="more-count">+{event.totalPhotos - 3}</span>
                  <span className="more-text">View All</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function PastEventsShowcase() {
  return (
    <div className="past-events-showcase">
      {/* Sub-header Banner */}
      <div className="showcase-banner">
        <div className="banner-glow-orb" aria-hidden="true" />
        <div className="banner-content">
          <div className="banner-tag">
            <Sparkles size={13} />
            <span>ARCHIVE OF EXCELLENCE</span>
          </div>
          <h2 className="banner-heading">
            Relive our latest <span>hands-on chapters.</span>
          </h2>
          <p className="banner-subtext">
            Every session brought student cloud architects, hands-on labs, and real deployment workflows directly to the DITM campus. Dive into complete recaps, step-by-step agendas, and live event photo archives.
          </p>
        </div>
      </div>

      {/* List of Bento Showcase Cards */}
      <div className="showcase-cards-stack">
        {PAST_EVENTS_DATA.map((event, index) => (
          <SpotlightShowcaseCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
