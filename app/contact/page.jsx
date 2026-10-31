"use client";

import { useState } from "react";
import Link from "next/link";

const MAPS_SRC =
  "https://maps.google.com/maps?q=Delhi+Institute+of+Technology+and+Management+Ganaur+Sonipat+Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero" data-reveal="fade">
        <p className="contact-eyebrow">CONTACT</p>
        <h1>Get in Touch</h1>
        <p className="contact-hero-copy">
          Have questions about SBG? Want to collaborate? We&apos;d love to hear from you.
        </p>
      </section>
      <section className="contact-content" data-reveal>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  className="contact-svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--aws-green)" }}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <p>awssbgl@ditm.ac.in</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  className="contact-svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--aws-green)" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  className="contact-svg-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--aws-green)" }}
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className="contact-label">Address</span>
                <p>
                  Delhi Institute of Technology and Management,<br />GT Road, NH-1, Ganaur,<br />Sonipat, Haryana 131101
                </p>
              </div>
            </div>
          </div>
          <div className="contact-socials">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.meetup.com/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer">Meetup</a>
              <a href="https://www.instagram.com/awssbg.ditm?mdxt=dGVubWNxd3Y2OHE3" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="contact-map-card">
            <iframe
              src={MAPS_SRC}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delhi Institute of Technology and Management Map"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
        <div className="contact-form-card">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                name="name"
                placeholder="Enter your name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email Address
              <input
                name="email"
                placeholder="Enter your email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                placeholder="Subject of your message"
                type="text"
                value={form.subject}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
              />
            </label>
            {submitted && (
              <p
                className="contact-success"
                role="status"
                style={{ color: "var(--aws-green)", margin: 0, fontWeight: 600 }}
              >
                Thanks for reaching out! We&apos;ll get back to you soon.
              </p>
            )}
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
