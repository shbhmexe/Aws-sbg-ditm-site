"use client";

const hero = {
  eyebrow: "About Us",
  titleLine1: "We don't just learn cloud.",
  titleLine2: "We build on it.",
  subtitle:
    "AWS Student Builder Group at DITM is a student-led cloud community that turns curiosity into certifications, and certifications into careers.",
};

const pillars = [
  {
    id: "mission",
    number: "01",
    label: "Mission",
    headingLine1: "Democratise cloud education",
    headingLine2: "for every student.",
    body: "AWS certifications cost money. AWS knowledge takes time. SBGL eliminates both barriers — giving every student at DITM, regardless of year or background, access to mentors, study resources, exam vouchers, and hands-on labs. Cloud should not be a privilege.",
    pill: '"Cloud is not optional — we make it accessible."',
    tags: [],
    stats: [],
  },
  {
    id: "vision",
    number: "02",
    label: "Vision",
    headingLine1: "India's most impactful",
    headingLine2: "AWS student community.",
    body: "A future where every engineer who walks out of DITM is cloud-ready on day one — certified, project-experienced, and connected to a network of professionals who have walked the same path. We want to set the standard for what a student cloud community can achieve in India.",
    pill: "",
    tags: ["Cloud-Ready Graduates", "Industry Connected", "National Recognition"],
    stats: [],
  },
  {
    id: "objective",
    number: "03",
    label: "Objective",
    headingLine1: "Concrete goals.",
    headingLine2: "Measurable impact.",
    body: "We don't deal in vague ambitions. Everything we do is tied to a target we can track and a student whose life we can change.",
    pill: "",
    tags: [],
    stats: [
      {
        value: "100+",
        label: "Certifications annually",
        desc: "Facilitate at least 100 AWS certifications per academic year through prep camps, vouchers, and group study.",
      },
      {
        value: "10+",
        label: "Workshops per year",
        desc: "Deliver 40+ hands-on technical sessions covering every major AWS service domain.",
      },
      {
        value: "1:1",
        label: "Mentorship model",
        desc: "Pair every new member with a certified mentor who guides their certification and career path.",
      },
      {
        value: "∞",
        label: "Alumni network that gives back",
        desc: "Build a self-sustaining ecosystem where SBG alumni return to mentor the next batch.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">{hero.eyebrow}</span>
        <h1 className="about-hero__title">
          <span className="about-hero__line1">{hero.titleLine1}</span>
          <br />
          <span className="text-green">{hero.titleLine2}</span>
        </h1>
        <p className="about-hero__subtitle">{hero.subtitle}</p>
      </section>
      {pillars.map((pillar, index) => (
        <section
          key={pillar.id}
          className={`about-pillar ${
            index % 2 === 0 ? "about-pillar--right" : "about-pillar--left"
          }`}
        >
          <div className="about-pillar__number" aria-hidden="true">
            {pillar.number}
          </div>
          <div className="about-pillar__content">
            <span className="about-pillar__label">{pillar.label}</span>
            <h2 className="about-pillar__heading">
              {pillar.headingLine1}
              <br />
              <span className="text-green">{pillar.headingLine2}</span>
            </h2>
            <p className="about-pillar__body">{pillar.body}</p>
            {pillar.pill && <div className="about-pill">{pillar.pill}</div>}
            {pillar.tags.length > 0 && (
              <div className="about-vision-tags">
                {pillar.tags.map((tag) => (
                  <span key={tag} className="about-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {pillar.stats.length > 0 && (
              <div className="about-stats">
                {pillar.stats.map((stat) => (
                  <div key={stat.label} className="about-stat">
                    <span className="about-stat__value">{stat.value}</span>
                    <span className="about-stat__label">{stat.label}</span>
                    <span className="about-stat__desc">{stat.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
