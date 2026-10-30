import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img alt="AWS SBG Program Icon" className="footer-logo-icon" src="/assets/program-icon-BAvjs2YY.png" />
              <div className="footer-logo-text">
                <span className="footer-logo-title">AWS SBGL</span>
                <span className="footer-logo-subtitle">DITM</span>
              </div>
            </div>
            <p className="footer-description">
              AWS Student Builder Group at <br />Delhi Institute of Technology and Management
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn">
                <img alt="LinkedIn" className="social-favicon" src="https://www.google.com/s2/favicons?domain=linkedin.com&sz=40" />
              </a>
              <a href="https://www.meetup.com/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Meetup">
                <img alt="Meetup" className="social-favicon" src="https://www.google.com/s2/favicons?domain=meetup.com&sz=40" />
              </a>
              <a href="https://www.instagram.com/awssbgl_ditm/" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Instagram">
                <img alt="Instagram" className="social-favicon" src="https://www.google.com/s2/favicons?domain=instagram.com&sz=40" />
              </a>
            </div>
          </div>
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/articles">Articles</Link></li>
            </ul>
          </div>
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <svg className="contact-svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="contact-text">DITM, GT Road, NH-1, Ganaur, Sonipat, Haryana 131101</span>
              </li>
              <li className="contact-item">
                <svg className="contact-svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href="mailto:awssbgl@ditm.ac.in" className="contact-text contact-link">awssbgl@ditm.ac.in</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="copyright-text">© 2026 AWS Student Builder Group, DITM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
