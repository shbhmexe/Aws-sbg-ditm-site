import Link from "next/link";
import HeroGrid from "@/components/home/HeroGrid";
import MilestoneSection from "@/components/home/MilestoneSection";
import ContactConsole from "@/components/home/ContactConsole";

const CalendarIcon = () => (
  <svg className="fe-event-icon-calendar" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChevronIcon = () => (
  <svg className="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ReadArrowIcon = () => (
  <svg className="read-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg className="meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const GH_PATH = "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22";
const LI_PATH = "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <path d={GH_PATH}></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
    <path d={LI_PATH}></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FEATURED_EVENTS = [
  {
    title: "AWS FROM CLICKS TO CODE",
    badge: "Workshop",
    badgeClass: "badge-workshop",
    date: "24 SEP 2026",
    desc: "Automating EC2: From Manual Clicks to Automated Infrastructure.",
    image: "/events/event2-from-clicks-to-code/Event2-poster.png",
    href: "https://clickstocode.awssbg-mhssce.in/",
    external: true,
    cta: "Register Now",
  },
  {
    title: "Cloud Architecture Challenge - Mini Hackathon",
    badge: "Hackathon",
    badgeClass: "badge-hackathon",
    date: "30 SEP 2026",
    desc: "Architect the Cloud: Design. Build. Scale. Team-based mini hackathon to design scalable, cost-effective cloud architectures for real-world problems.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    href: "/events",
    external: false,
    cta: "Learn more",
    live: { text: "LIVE IN 3 DAYS", cls: "fe-live-tag-urgent" },
  },
  {
    title: "AWS Community Day DITM",
    badge: "Conference",
    badgeClass: "badge-conference",
    date: "14 JAN 2027",
    desc: "Connect. Learn. Build. A premier student community conference bringing AWS Community Builders, industry experts, and student cloud enthusiasts together.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    href: "/events",
    external: false,
    cta: "Learn more",
  },
];

const LEADERS = [
  { name: "Abid Ahmed Shaikh", role: "AWS SBGL DITM Leader", img: "/team/core/ABID_CORE.png", gh: "https://github.com/InfX2243", li: "https://www.linkedin.com/in/abid-ahmed-shaikh/" },
  { name: "Prem Pagar", role: "AWS SBGL DITM Leader", img: "/team/core/PREM_CORE.png", gh: "https://github.com", li: "https://www.linkedin.com/in/prempagar/" },
];

const CORE = [
  { name: "Mohammed Umar Ansari", role: "Director of Operations", img: "/team/core/UMAR_CORE.png", gh: "https://github.com/C0dEr8627", li: "https://www.linkedin.com/in/mohammed-umar-ansari-ab4269353/" },
  { name: "Tabish Siddiqui", role: "Director of Events", img: "/team/core/Tabish_CORE.jpg", gh: "https://github.com", li: "https://www.linkedin.com/in/tabish-javed-siddiqui-00945736a/" },
  { name: "Yashfeen Raavi", role: "Director of Cloud Technology", img: "/team/core/YASHFEEN_CORE.jpg", gh: "https://github.com/yashfeenraavi09", li: "https://www.linkedin.com/in/yashfeen-r-7720982a2/" },
  { name: "Mohammed Kadiwal", role: "Director of Community & Public", img: "/team/core/MOHAMMAD_CORE.png", gh: "https://github.com/umer241419it-hue", li: "https://www.linkedin.com/in/mohammad-kadiwal-7856b927b/" },
  { name: "Shifa Shaikh", role: "Director of Marketing & Branding", img: "/team/core/SHIFA_CORE.png", gh: "https://github.com/shaikhshifa11", li: "https://www.linkedin.com/in/shaikhshifa11/" },
];

const ARTICLES = [
  { title: "Crafting Autonomous Agents: Building Intelligent Workflows with Python and AWS Bedrock", badge: "AI & Bedrock", date: "Feb 2025", read: "8 min read", excerpt: "Explore how to design and build autonomous AI agents and intelligent multi-step orchestration workflows using Python and Amazon Bedrock models.", href: "https://builder.aws.com/content/37Zj5QyUSLE4S9ajtjV2UMkclrY/crafting-autonomous-agents-building-intelligent-workflows-with-python-and-aws-bedrock", gradient: "linear-gradient(135deg, rgb(0, 210, 106) 0%, rgb(0, 112, 243) 100%)" },
  { title: "Auto-Rickshaw Oracle: Building a City-Aware Fair Fare Estimator Using Kiro", badge: "Kiro & Automation", date: "Feb 2025", read: "6 min read", excerpt: "A practical walk-through of building a city-aware fair fare estimation app using Kiro spec-driven development methodology.", href: "https://builder.aws.com/content/37U6TrLjvcE9VGxGJjXXkBwO8yE/auto-rickshaw-oracle-building-a-city-aware-fair-fare-estimator-using-kiro", gradient: "linear-gradient(135deg, rgb(255, 153, 102) 0%, rgb(255, 94, 98) 100%)" },
  { title: "Building a Knowledge-Driven AI Agent Using Amazon Bedrock and Strands Agents on AWS", badge: "AI & Bedrock", date: "Feb 2025", read: "7 min read", excerpt: "Leverage Amazon Bedrock and Strands Agents framework to construct intelligent, knowledge-powered conversational agents.", href: "https://builder.aws.com/content/37FuqPKbTyeDEviALJjHzbmMbQ8/building-a-knowledge-driven-ai-agent-using-amazon-bedrock-and-strands-agents-on-aws", gradient: "linear-gradient(135deg, rgb(160, 80, 255) 0%, rgb(0, 210, 106) 100%)" },
];

function MemberCard({ m, variant }) {
  return (
    <div className={`team-card ${variant}-card`}>
      <img alt={m.name} className={`team-avatar ${variant}-avatar`} src={m.img} />
      <div className="team-info">
        <h4 className="member-name">{m.name}</h4>
        <p className="member-role">{m.role}</p>
        <div className="team-socials">
          <a href={m.gh} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${m.name} Github`}>
            <GithubIcon />
          </a>
          <a href={m.li} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${m.name} LinkedIn`}>
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function EventCard({ ev }) {
  const ImgTag = ev.external
    ? ({ children }) => <a href={ev.href} target="_blank" rel="noopener noreferrer" className="fe-event-image-link" aria-label={ev.title}>{children}</a>
    : ({ children }) => <Link href={ev.href} className="fe-event-image-link" aria-label={ev.title}>{children}</Link>;
  const TitleTag = ev.external
    ? ({ children }) => <a href={ev.href} target="_blank" rel="noopener noreferrer" className="fe-event-title-link">{children}</a>
    : ({ children }) => <Link href={ev.href} className="fe-event-title-link">{children}</Link>;
  const MoreTag = ev.external
    ? ({ children }) => <a href={ev.href} target="_blank" rel="noopener noreferrer" className="fe-event-learn-more" aria-label={`${ev.cta} about ${ev.title}`}>{children}</a>
    : ({ children }) => <Link href={ev.href} className="fe-event-learn-more" aria-label={`${ev.cta} about ${ev.title}`}>{children}</Link>;
  return (
    <div className="fe-event-card">
      <div className="fe-event-image-container">
        <ImgTag><img alt={ev.title} className="fe-event-image" src={ev.image} /></ImgTag>
        {ev.live && (
          <div className={`fe-live-tag ${ev.live.cls}`}>
            <span className="fe-live-beacon"></span>
            <span>{ev.live.text}</span>
          </div>
        )}
        <span className={`fe-event-badge ${ev.badgeClass}`}>{ev.badge}</span>
      </div>
      <div className="fe-event-info">
        <div className="fe-event-date-row">
          <CalendarIcon />
          <span className="fe-event-date-text">{ev.date}</span>
        </div>
        <h3 className="fe-event-title"><TitleTag>{ev.title}</TitleTag></h3>
        <p className="fe-event-desc">{ev.desc}</p>
        <MoreTag>{ev.cta}<ArrowIcon className="fe-event-arrow-icon" /></MoreTag>
      </div>
    </div>
  );
}

function ArticleCard({ a }) {
  return (
    <div className="article-card">
      <div className="article-cover" style={{ background: a.gradient }}>
        <span className="article-category-badge">{a.badge}</span>
        <div className="cover-grid-overlay"></div>
      </div>
      <div className="article-info">
        <div className="article-meta">
          <span className="article-date">{a.date}</span>
          <span className="meta-separator">•</span>
          <div className="article-read-time">
            <ClockIcon />
            <span>{a.read}</span>
          </div>
        </div>
        <a href={a.href} target="_blank" rel="noopener noreferrer" className="article-title-link">
          <h3 className="article-card-title">{a.title}</h3>
        </a>
        <p className="article-excerpt">{a.excerpt}</p>
        <div className="article-footer">
          <span className="article-author">By AWS Community</span>
          <a href={a.href} target="_blank" rel="noopener noreferrer" className="read-article-link">Read article<ReadArrowIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-page-wrapper">
        <div className="home-page-container">
          <HeroGrid />
          <div className="mobile-bg-glow"></div>
          <div className="hero-content">
            <div className="hero-tag" aria-label="Official AWS-affiliated student community at DITM, Sonipat">
              <span className="hero-tag-status">
                <span className="hero-tag-status-dot" aria-hidden="true"></span>
                Official
              </span>
              <span className="hero-tag-text">AWS-affiliated student community</span>
              <span className="hero-tag-location">DITM <span aria-hidden="true">·</span> Sonipat</span>
            </div>
            <h1 className="hero-title">
              AWS Student<br />
              <span className="text-green-highlight">Builder Group</span><br />
              <span className="text-green-highlight">DITM</span>
            </h1>
            <div className="hero-description">
              <p>Fostering future cloud leaders through learning, collaboration, and innovation.</p>
            </div>
            <a href="https://www.meetup.com/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer" className="hero-cta">
              Browse events
              <img alt="Meetup" src="/assets/meetupicon-C5hscCD3.png" style={{ width: "20px", height: "20px", marginLeft: "4px" }} />
            </a>
          </div>
        </div>
      </section>

      <MilestoneSection />

      <section className="featured-events-section" id="featured-events">
        <div className="featured-events-container">
          <div className="featured-events-header">
            <div className="header-titles">
              <span className="featured-tag">FEATURED EVENTS</span>
              <h2 className="featured-title">Upcoming Highlights</h2>
            </div>
            <Link href="/events" className="all-events-link" aria-label="View all events">
              All events<ChevronIcon />
            </Link>
          </div>
          <div className="featured-events-grid">
            {FEATURED_EVENTS.map((ev, i) => (
              <EventCard key={i} ev={ev} />
            ))}
          </div>
        </div>
      </section>
      <section className="team-section" id="team">
        <div className="team-container">
          <div className="team-header">
            <span className="team-tag">LEADERSHIP</span>
            <h2 className="team-title">Meet the Builders</h2>
          </div>
          <div className="team-subsection">
            <h3 className="subsection-title">Co-Leaders</h3>
            <div className="leaders-grid">
              {LEADERS.map((m, i) => (
                <MemberCard key={i} m={m} variant="leader" />
              ))}
            </div>
          </div>
          <div className="team-subsection">
            <h3 className="subsection-title">Core Team</h3>
            <div className="core-grid">
              {CORE.map((m, i) => (
                <MemberCard key={i} m={m} variant="core" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-articles-section" id="featured-articles">
        <div className="featured-articles-container">
          <div className="featured-articles-header">
            <div className="header-titles">
              <span className="articles-tag">KNOWLEDGE HUB</span>
              <h2 className="articles-title">Latest Insights</h2>
            </div>
            <Link href="/articles" className="all-articles-link">
              All articles<ChevronIcon />
            </Link>
          </div>
          <div className="featured-articles-grid">
            {ARTICLES.map((a, i) => (
              <ArticleCard key={i} a={a} />
            ))}
          </div>
        </div>
      </section>

      <ContactConsole />
    </>
  );
}
