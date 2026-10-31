"use client";

import { useState } from "react";
import RecapModal from "@/components/events/RecapModal";

const EVENTS = [
  {
    id: 1,
    featured: true,
    status: "past",
    title: "Inauguration & Community Kickoff",
    category: "Community Launch",
    day: "03",
    month: "SEP",
    year: "2026",
    description:
      'Official launch of the AWS Student Builder Group at DITM featuring Chief Guest Ms. Prajakta Kale (Data Engineering Consultant @ AWS) on "Starting Your Cloud Career", chapter roadmap release, and community networking.',
    time: "11:00 AM - 01:00 PM",
    venue: "DITM Seminar Hall, Sonipat",
    seats: "DITM Seminar Hall",
    tags: ["Community Launch", "Chief Guest Session", "AWS SBGL Team", "Chapter Roadmap"],
    image: "/events/inauguration/attendees.png",
    attendees: 100,
    ctaText: "View Event Recap",
    rsvpLink: "https://www.linkedin.com/company/aws-sbgl-at-ditm/",
  },
  {
    id: 2,
    featured: true,
    status: "upcoming",
    title: "AWS FROM CLICKS TO CODE",
    category: "Workshop",
    day: "24",
    month: "SEP",
    year: "2026",
    description: "Automating EC2: From Manual Clicks to Automated Infrastructure.",
    time: "09:30 AM - 12:00 PM",
    venue: "DITM Seminar Hall, Sonipat",
    seats: "100 seats",
    tags: ["AWS Essentials", "Hands-on Lab", "EC2 & S3", "Deployment"],
    image: "/events/event2-from-clicks-to-code/Event2-poster.png",
    attendees: 100,
    ctaText: "Register Now",
    rsvpLink: "https://clickstocode.awssbg-mhssce.in/",
  },
  {
    id: 3,
    featured: false,
    status: "upcoming",
    title: "Cloud Architecture Challenge - Mini Hackathon",
    category: "Hackathon",
    day: "30",
    month: "SEP",
    year: "2026",
    description:
      "Architect the Cloud: Design. Build. Scale. Team-based mini hackathon to design scalable, cost-effective cloud architectures for real-world problems.",
    time: "10:00 AM - 6:00 PM",
    venue: "DITM Campus, Sonipat",
    seats: "100+ Participants",
    tags: ["Cloud Architecture", "Hackathon", "Team Challenge", "Swag & Prizes"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    attendees: 100,
    rsvpLink: "#",
  },
  {
    id: 4,
    featured: false,
    status: "upcoming",
    title: "AWS Community Day DITM",
    category: "Conference",
    day: "14",
    month: "JAN",
    year: "2027",
    description:
      "Connect. Learn. Build. A premier student community conference bringing AWS Community Builders, industry experts, and student cloud enthusiasts together.",
    time: "9:30 AM - 5:00 PM",
    venue: "DITM Campus, Sonipat",
    seats: "300+ Seats",
    tags: ["Community Day", "Industry Speakers", "Technical Tracks", "Exhibits"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    attendees: 300,
    rsvpLink: "#",
  },
  {
    id: 5,
    featured: false,
    status: "upcoming",
    title: "Serverless Deepdive Workshop",
    category: "Workshop",
    day: "16",
    month: "MAR",
    year: "2027",
    description:
      "Beyond Servers: Building with AWS Serverless. Advanced hands-on session exploring AWS Lambda, API Gateway, DynamoDB, and EventBridge architectures.",
    time: "2:00 PM - 5:30 PM",
    venue: "DITM Campus, Sonipat",
    seats: "50 Seats",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "EventBridge"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    attendees: 50,
    rsvpLink: "#",
  },
  {
    id: 6,
    featured: false,
    status: "upcoming",
    title: "CloudCon DITM 2027",
    category: "Conference",
    day: "08",
    month: "APR",
    year: "2027",
    description:
      "Build the Future on AWS. The annual flagship cloud conference of DITM featuring innovation showcases, certification recognitions, and career panels.",
    time: "9:00 AM - 6:00 PM",
    venue: "DITM Campus, Sonipat",
    seats: "500+ Attendees",
    tags: ["Annual Flagship", "Cloud Innovation", "Certifications", "Networking"],
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    attendees: 500,
    rsvpLink: "#",
  },
];

const MONTHS = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

function getLiveStatus(e) {
  if (!e.day || !e.month || !e.year) return null;
  const m = MONTHS[e.month.toUpperCase()];
  if (m === undefined) return null;
  const eventDate = new Date(parseInt(e.year, 10), m, parseInt(e.day, 10));
  const now = new Date();
  const eventMid = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()).getTime();
  const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const days = Math.ceil((eventMid - nowMid) / (1000 * 60 * 60 * 24));
  if (days === 0) return { label: "LIVE TODAY", type: "live" };
  if (days > 0 && days <= 7) return { label: days === 1 ? "LIVE TOMORROW" : `LIVE IN ${days} DAYS`, type: "urgent" };
  if (days > 7 && days <= 14) return { label: `IN ${days} DAYS`, type: "soon" };
  return null;
}

export default function EventsPage() {
  const [tab, setTab] = useState("upcoming");
  const [recapOpen, setRecapOpen] = useState(false);

  const filtered = EVENTS.filter((e) => e.status === tab);
  const featured = filtered.find((e) => e.featured);
  const rest = filtered.filter((e) => !e.featured);
  const featuredLive = featured ? getLiveStatus(featured) : null;

  return (
    <div className="events-page">
      <section className="events-hero" data-reveal="fade">
        <div className="events-tag">WORKSHOPS • CONFERENCES • PANELS</div>
        <h1>
          Where the community<br />
          <span>comes together.</span>
        </h1>
        <p>From hands-on labs and certification bootcamps to industry panels and hackathons every SBG event is designed to move you forward.</p>
      </section>
      <section className="events-section" data-reveal>
        <div className="events-toggle">
          <div className="toggle-buttons">
            <button className={tab === "upcoming" ? "active" : ""} onClick={() => setTab("upcoming")}>Upcoming</button>
            <button className={tab === "past" ? "active" : ""} onClick={() => setTab("past")}>Past Events</button>
          </div>
          <span>{filtered.length} Events</span>
        </div>
        {featured && (
          <div className="featured-card">
            <div className="featured-date">
              <h1>{featured.day}</h1>
              <h3>{featured.month}</h3>
              <p>{featured.year}</p>
              <span>{featured.category}</span>
            </div>
            <div className="featured-content">
              <div className="event-badge-row">
                {featuredLive && (
                  <div className={`event-live-pill event-live-pill-${featuredLive.type}`}>
                    <span className="event-live-beacon"></span>
                    <span>{featuredLive.label}</span>
                  </div>
                )}
                <div className="event-badge">{featured.status === "past" ? "Completed" : featured.status}</div>
              </div>
              <h2>
                {featured.rsvpLink && featured.rsvpLink !== "#" ? (
                  <a href={featured.rsvpLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                    {featured.title}
                  </a>
                ) : (
                  featured.title
                )}
              </h2>
              <p>{featured.description}</p>
              <div className="event-meta">
                <span>{featured.time}</span>
                <span>{featured.venue}</span>
                <span>{featured.seats}</span>
              </div>
              <div className="event-tags">
                {featured.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              {featured.status === "past" ? (
                <button type="button" className="rsvp-btn" onClick={() => setRecapOpen(true)}>
                  {featured.ctaText || "View Event Recap"}
                </button>
              ) : (
                <a href={featured.rsvpLink} target="_blank" rel="noopener noreferrer" className="rsvp-btn">
                  {featured.ctaText || "RSVP on Meetup"}
                </a>
              )}
            </div>
          </div>
        )}
        {rest.length > 0 && (
          <>
            <h3 className="also-upcoming">{tab === "past" ? "MORE PAST EVENTS" : "ALSO UPCOMING"}</h3>
            <div className="events-grid">
              {rest.map((e) => {
                const live = getLiveStatus(e);
                return (
                  <div className="event-card" key={e.id}>
                    <div className="small-date">
                      <h2>{e.day}</h2>
                      <span>{e.month}</span>
                    </div>
                    <div className="card-content">
                      <div className="card-top-badges">
                        <span className="event-category">{e.category}</span>
                        {live && (
                          <span className={`event-mini-live-pill event-mini-${live.type}`}>
                            <span className="event-live-beacon"></span>
                            {live.label}
                          </span>
                        )}
                      </div>
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>
                      <div className="card-meta">
                        <p>{e.time}</p>
                        <p>{e.venue}</p>
                        <p>{e.seats}</p>
                      </div>
                      {e.status === "past" ? (
                        <button type="button" className="rsvp-btn-link" onClick={() => setRecapOpen(true)}>
                          {e.ctaText || "View Event Recap"}
                        </button>
                      ) : (
                        <a href={e.rsvpLink} target="_blank" rel="noopener noreferrer">
                          {e.ctaText || "RSVP on Meetup"}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        <div className="meetup-banner">
          <span className="meetup-arrow">→</span>
          <p>
            {tab === "past"
              ? "All event recaps, keynote decks, and photo highlights are shared on our official LinkedIn & Instagram pages."
              : "All events are listed on our Meetup page. RSVP there to secure your spot and get reminders."}
          </p>
        </div>
      </section>
      <RecapModal isOpen={recapOpen} onClose={() => setRecapOpen(false)} />
    </div>
  );
}
