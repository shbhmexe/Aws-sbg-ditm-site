"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Articles", href: "/articles", disabled: true },
  { label: "Contact", href: "/contact" },
];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const hasEventWallpaper = pathname.startsWith("/events/");
  const isFeaturedEventDetail = pathname === "/events/cloudlaunch" || pathname === "/events/cloudlaunch-2";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 20);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(currentY / max, 1) : 0);

      if (menuOpen) {
        setHidden(false);
      } else if (currentY <= 80) {
        setHidden(false);
      } else if (delta > 5) {
        setHidden(true);
      } else if (delta < -5) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) setHidden(false);

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}${hidden ? " navbar-hidden" : ""}${hasEventWallpaper ? " event-wallpaper-navbar" : ""}`}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true"></div>
        <div className="navbar-container">
          <Link className="navbar-logo" href="/">
            <img alt="AWS SBG Program Icon" className="navbar-logo-icon" src="/assets/program-icon-BAvjs2YY.png" />
            <div className="navbar-logo-text">
              <span className="navbar-logo-title">AWS SBGL</span>
              <span className="navbar-logo-subtitle">DITM</span>
            </div>
          </Link>
          <ul className="navbar-menu">
            {NAV_ITEMS.map((item) => (
              <li className={`navbar-item ${item.disabled ? "navbar-item-disabled" : ""}`} key={item.href}>
                {item.disabled ? (
                  <span
                    className="navbar-link disabled"
                    title="Articles Access Restricted"
                    aria-disabled="true"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    className={`navbar-link ${isActive(item.href) ? "active" : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              type="button"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="mobile-overlay-backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation</span>
            <button className="mobile-close-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)} type="button">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="mobile-menu">
            {NAV_ITEMS.map((item, i) => (
              <li className={`mobile-menu-item ${item.disabled ? "mobile-item-disabled" : ""}`} style={{ animationDelay: `${0.1 + i * 0.06}s` }} key={item.href}>
                {item.disabled ? (
                  <span
                    className="mobile-menu-link disabled"
                    title="Articles Access Restricted"
                    aria-disabled="true"
                  >
                    <span>{item.label}</span>
                    <span className="nav-disabled-badge">ARCHIVED</span>
                  </span>
                ) : (
                  <Link
                    className={`mobile-menu-link ${isActive(item.href) ? "active" : ""}`}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ArrowIcon />
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <p className="mobile-footer-text">Official AWS-Affiliated Student Community</p>
            <span className="mobile-footer-tag">DITM, Sonipat</span>
          </div>
        </div>
      </div>
    </>
  );
}
