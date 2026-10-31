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
  { name: "Shubham Shukla", role: "Chapter Leader", initials: "SS", img: "/team/core/SHUBHAM_CORE.png", gradient: "linear-gradient(135deg, #FF9900 0%, #00A4E4 100%)", gh: "https://github.com/shbhmexe", li: "https://www.linkedin.com/in/shubham-shukla-62095032a/" },
];

const CORE = [
  { name: "Aakash Rana", role: "IT Support and Management", initials: "AR", img: "/team/core/AAKASH_CORE.png", gradient: "linear-gradient(135deg, #FF9900 0%, #ff5e62 100%)", gh: "https://github.com/aakashrana7422-tech", li: "https://www.linkedin.com/in/aakash-rana-98054b342" },
  { name: "Anjali Kumari", role: "Photography and Graphics Manager", initials: "AK", img: "/team/core/ANJALI_CORE.png", gradient: "linear-gradient(135deg, #ea6297 0%, #a050ff 100%)", gh: "https://github.com/anjalisah4823", li: "https://www.linkedin.com/in/anjali-kumari-71a39b385" },
  { name: "Farman Khan", role: "Student Engagement Manager", initials: "FK", img: "/team/core/FARMAN_CORE.jpeg", gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", gh: "https://github.com/farmanfk0404", li: "https://www.linkedin.com/in/farman-khan-73b63a380" },
  { name: "Vansh Verma", role: "Social Media Manager", initials: "VV", img: "/team/core/VANSH_CORE.png", gradient: "linear-gradient(135deg, #3f51b5 0%, #00bcd4 100%)", gh: "https://github.com/vanshverma20", li: "https://www.linkedin.com/in/vansh-verma-510b3b364/" },
  { name: "Tarashankar Hazra", role: "Marketing Director", initials: "TH", img: "/team/core/TARASHANKAR_CORE.png", gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)", gh: "https://github.com/TarashankarHazra", li: "https://www.linkedin.com/in/tarashankar-hazra-522a8a398" },
];

const ARTICLES = [
  { title: "Crafting Autonomous Agents: Building Intelligent Workflows with Python and AWS Bedrock", badge: "AI & Bedrock", date: "Feb 2025", read: "8 min read", excerpt: "Explore how to design and build autonomous AI agents and intelligent multi-step orchestration workflows using Python and Amazon Bedrock models.", href: "https://builder.aws.com/content/37Zj5QyUSLE4S9ajtjV2UMkclrY/crafting-autonomous-agents-building-intelligent-workflows-with-python-and-aws-bedrock", gradient: "linear-gradient(135deg, rgb(0, 210, 106) 0%, rgb(0, 112, 243) 100%)" },
  { title: "Auto-Rickshaw Oracle: Building a City-Aware Fair Fare Estimator Using Kiro", badge: "Kiro & Automation", date: "Feb 2025", read: "6 min read", excerpt: "A practical walk-through of building a city-aware fair fare estimation app using Kiro spec-driven development methodology.", href: "https://builder.aws.com/content/37U6TrLjvcE9VGxGJjXXkBwO8yE/auto-rickshaw-oracle-building-a-city-aware-fair-fare-estimator-using-kiro", gradient: "linear-gradient(135deg, rgb(255, 153, 102) 0%, rgb(255, 94, 98) 100%)" },
  { title: "Building a Knowledge-Driven AI Agent Using Amazon Bedrock and Strands Agents on AWS", badge: "AI & Bedrock", date: "Feb 2025", read: "7 min read", excerpt: "Leverage Amazon Bedrock and Strands Agents framework to construct intelligent, knowledge-powered conversational agents.", href: "https://builder.aws.com/content/37FuqPKbTyeDEviALJjHzbmMbQ8/building-a-knowledge-driven-ai-agent-using-amazon-bedrock-and-strands-agents-on-aws", gradient: "linear-gradient(135deg, rgb(160, 80, 255) 0%, rgb(0, 210, 106) 100%)" },
];

function MemberCard({ m, variant }) {
  const hasSocials = Boolean(m.gh || m.li);

  return (
    <div className={`team-card ${variant}-card`}>
      {m.img ? (
        <img alt={m.name} className={`team-avatar ${variant}-avatar`} src={m.img} />
      ) : (
        <div
          className={`team-avatar team-avatar-initials ${variant}-avatar`}
          style={{ background: m.gradient }}
          aria-hidden="true"
        >
          {m.initials}
        </div>
      )}
      <div className="team-info">
        <h4 className="member-name">{m.name}</h4>
        <p className="member-role">{m.role}</p>
        {hasSocials && (
          <div className="team-socials">
            {m.gh && (
              <a href={m.gh} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${m.name} Github`}>
                <GithubIcon />
              </a>
            )}
            {m.li && (
              <a href={m.li} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={`${m.name} LinkedIn`}>
                <LinkedinIcon />
              </a>
            )}
          </div>
        )}
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
          <div className="hero-content">
            <div className="hero-tag" aria-label="Official AWS-affiliated student community at DITM, Sonipat">
              <span className="hero-tag-status">
                <span className="hero-tag-status-dot" aria-hidden="true"></span>
                Official
              </span>
              <span className="hero-tag-text">AWS Student Community</span>
              <span className="hero-tag-location">DITM · Sonipat</span>
            </div>
            
            <h1 className="hero-title">
              AWS Student<br />
              <span className="hero-title-highlight">Builder Group</span><br />
              <span className="hero-title-sub">DITM Chapter</span>
            </h1>
            
            <div className="hero-description">
              <p>
                Fostering future cloud leaders through deep hands-on AWS architecture,
                serverless workshops, hackathons, and generative AI innovation.
              </p>
            </div>
            
            <div className="hero-cta-group">
              <a href="https://www.meetup.com/aws-sbgl-at-ditm/" target="_blank" rel="noopener noreferrer" className="hero-cta-primary">
                <span>Browse Events</span>
                <img alt="Meetup" src="/assets/meetupicon-C5hscCD3.png" style={{ width: "18px", height: "18px" }} />
              </a>
              <Link href="/events" className="hero-cta-secondary">
                <span>Explore Workshops</span>
                <ArrowIcon className="hero-cta-arrow" />
              </Link>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-box">
                <span className="stat-value">500+</span>
                <span className="stat-desc">Active Builders</span>
              </div>
              <div className="stat-separator"></div>
              <div className="hero-stat-box">
                <span className="stat-value">15+</span>
                <span className="stat-desc">Hands-on Labs</span>
              </div>
              <div className="stat-separator"></div>
              <div className="hero-stat-box">
                <span className="stat-value">100%</span>
                <span className="stat-desc">Student-Driven</span>
              </div>
            </div>
          </div>

          <HeroGrid />
        </div>
      </section>

      <MilestoneSection />

      <section className="featured-events-section" id="featured-events">
        <div className="featured-events-container">
          <div className="featured-events-header" data-reveal>
            <div className="header-titles">
              <span className="featured-tag">FEATURED EVENTS</span>
              <h2 className="featured-title">Upcoming Highlights</h2>
            </div>
            <Link href="/events" className="all-events-link" aria-label="View all events">
              All events<ChevronIcon />
            </Link>
          </div>
          <div className="featured-events-grid" data-reveal style={{ "--reveal-delay": ".08s" }}>
            {FEATURED_EVENTS.map((ev, i) => (
              <EventCard key={i} ev={ev} />
            ))}
          </div>
        </div>
      </section>
      <section className="team-section" id="team">
        <div className="team-container">
          <div className="team-header" data-reveal>
            <span className="team-tag">LEADERSHIP</span>
            <h2 className="team-title">Meet the Builders</h2>
            <Link href="/team" className="team-view-all">
              View full team <ChevronIcon />
            </Link>
          </div>
          <div className="team-subsection" data-reveal>
            <h3 className="subsection-title">Leader</h3>
            <div className="leaders-grid">
              {LEADERS.map((m, i) => (
                <MemberCard key={i} m={m} variant="leader" />
              ))}
            </div>
          </div>
          <div className="team-subsection" data-reveal>
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
          <div className="featured-articles-header" data-reveal>
            <div className="header-titles">
              <span className="articles-tag">KNOWLEDGE HUB</span>
              <h2 className="articles-title">Latest Insights</h2>
            </div>
            <Link href="/articles" className="all-articles-link">
              All articles<ChevronIcon />
            </Link>
          </div>
          <div className="featured-articles-grid" data-reveal style={{ "--reveal-delay": ".08s" }}>
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
