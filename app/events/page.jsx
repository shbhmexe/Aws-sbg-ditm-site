"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PastEventsShowcase from "@/components/events/PastEventsShowcase";
import UpcomingEventShowcase from "@/components/events/UpcomingEventShowcase";

const EVENTS = [
  {
    id: "agentforge-2026",
    featured: true,
    status: "upcoming",
    title: "AgentForge – Build Beyond Bots | Inter-College Agentic AI Build Day",
    category: "Inter-College Build Day",
    day: "23",
    month: "NOV",
    year: "2026",
    dateLong: "Monday, November 23, 2026",
    description:
      "An offline inter-college build day by AWS Student Builder Groups at DITM × IITM College of Engineering. Explore how agentic systems reason and make decisions, build your first AI agent, and see a live student verification demo through AWS Builder Center (SheerID).",
    time: "10:30 AM – 1:30 PM IST",
    duration: "3 Hours Intensive",
    venue: "D51 Building, IITM Campus",
    venueAddress: "IITM Btech Branch, Pocket D 1A, Janakpuri, New Delhi 110058",
    seats: "Limited seats",
    hosts: "Nandini Shukla (IITM College of Engineering) and Shubham Shukla (DITM)",
    highlights: "Swags, certificates, and refreshments; three winners from each session receive exclusive swags.",
    registrationNote:
      "Registration is first-come, first-served. A registration does not guarantee a seat; attendance depends on confirmation and availability.",
    tags: ["Offline Event", "Agentic AI", "Multi-agent Workflows", "AWS Builder Center"],
    image: "/events/agentforge/agentforge-poster.png",
    ctaText: "RSVP on Meetup",
    rsvpLink:
      "https://www.meetup.com/aws-sbg-at-delhi-institute-of-technology-and-management/events/317369758/?eventOrigin=group_upcoming_events",
  },
];

/* Previous upcoming event cards, kept commented out until those events are confirmed again.
const PREVIOUS_UPCOMING_EVENTS = [
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
*/

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tab") === "past" || window.location.hash === "#past") {
        setTab("past");
      }
    }
  }, []);

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
          <span>{tab === "past" ? "2 Events" : `${filtered.length} Events`}</span>
        </div>

        <AnimatePresence mode="wait">
          {tab === "past" ? (
            <motion.div
              key="past-showcase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <PastEventsShowcase />
            </motion.div>
          ) : (
            <motion.div
              key="upcoming-list"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {filtered.length > 0 ? (
                <>
                  <UpcomingEventShowcase event={featured || filtered[0]} />

                  {((featured ? rest : filtered.slice(1)) || []).length > 0 && (
                    <div className="additional-upcoming-section">
                      <h3 className="also-upcoming">ADDITIONAL UPCOMING SESSIONS</h3>
                      <div className="events-grid">
                        {(featured ? rest : filtered.slice(1)).map((e) => {
                          const live = getLiveStatus(e);
                          return (
                            <div className="event-card" key={e.id}>
                              <a
                                className="event-thumbnail-link"
                                href={e.rsvpLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${e.title} on Meetup`}
                              >
                                <img src={e.image} alt={`${e.title} event poster`} />
                              </a>
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
                                <a href={e.rsvpLink} target="_blank" rel="noopener noreferrer">
                                  {e.ctaText || "RSVP on Meetup"}
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="no-events-placeholder">
                  <p>No upcoming events currently scheduled. Check back soon or explore past workshops!</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
