"use client";

import { useState } from "react";
import Link from "next/link";

const MAPS_SRC =
  "https://maps.google.com/maps?q=Delhi+Institute+of+Technology+and+Management+Ganaur+Sonipat+Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: data.message || "Thanks for reaching out! We'll get back to you soon.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <p>awssbgditm@gmail.com</p>
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
              <a href="https://www.meetup.com/aws-sbg-at-delhi-institute-of-technology-and-management/" target="_blank" rel="noopener noreferrer">Meetup</a>
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
                required
                value={form.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </label>
            <label>
              Email Address
              <input
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                placeholder="Subject of your message"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
                value={form.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </label>

            {status.type === "success" && (
              <p
                className="contact-success"
                role="status"
                style={{ color: "var(--aws-green)", margin: 0, fontWeight: 600 }}
              >
                {status.message}
              </p>
            )}

            {status.type === "error" && (
              <p
                className="contact-error"
                role="alert"
                style={{ margin: 0, fontWeight: 600 }}
              >
                {status.message}
              </p>
            )}

            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
