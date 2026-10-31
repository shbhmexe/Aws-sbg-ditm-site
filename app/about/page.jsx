"use client";

const hero = {
  eyebrow: "About Us",
  titleLine1: "AWS Student Builder Group",
  titleLine2: "at DITM",
  subtitle:
    "A welcoming, student-led technical community helping students explore Amazon Web Services, develop practical cloud skills, build real projects, and learn together through hands-on workshops and peer collaboration.",
};

const pillars = [
  {
    id: "mission",
    number: "01",
    label: "Mission",
    headingLine1: "Making cloud learning",
    headingLine2: "accessible to all.",
    body: "Getting started with cloud computing should not feel intimidating. Our mission is to lower the barrier for every student at DITM—regardless of branch, year, or previous experience. Through guided walkthroughs, supportive peer study, and practical labs, we provide a welcoming space to take your first steps in AWS with confidence.",
    pill: '"Demystifying cloud architecture through hands-on peer learning."',
    tags: [
      "Beginner Friendly",
      "Hands-On Labs",
      "Peer Support",
      "Open to All",
    ],
    stats: [],
  },
  {
    id: "vision",
    number: "02",
    label: "Vision",
    headingLine1: "A campus community",
    headingLine2: "that builds together.",
    body: "We envision a vibrant student hub at DITM where learning is active, collaborative, and ongoing. Rather than studying theory in isolation, students experiment with cloud services, deploy live projects, and share knowledge with peers—building practical confidence for future engineering careers.",
    pill: "",
    tags: [
      "Campus Community",
      "Project-Driven Learning",
      "Continuous Growth",
      "Cloud Readiness",
    ],
    stats: [],
  },
  {
    id: "what-we-do",
    number: "03",
    label: "What We Do",
    headingLine1: "Workshops, builds,",
    headingLine2: "and community events.",
    body: "We organize interactive sessions focused on real-world practice. Students get hands-on with core AWS services, learn to deploy full-stack applications with AWS Amplify, and explore official learning resources such as the AWS Builder Center (builder.aws.com) and AWS Skill Builder for self-paced study.",
    pill: "",
    tags: [
      "Hands-on Workshops",
      "AWS Amplify Builds",
      "AWS Builder Center",
      "Community Meetups",
    ],
    stats: [],
  },
  {
    id: "goals",
    number: "04",
    label: "Goals",
    headingLine1: "Concrete activities.",
    headingLine2: "Meaningful outcomes.",
    body: "Our activities focus on steady student participation and practical skill-building across semesters:",
    pill: "",
    tags: [],
    stats: [
      {
        value: "01",
        label: "Hands-on Workshops",
        desc: "Regular technical sessions covering core AWS services like EC2, S3, IAM, and Lambda with live guided labs.",
      },
      {
        value: "02",
        label: "Project Deployments",
        desc: "Build and deploy portfolio-ready web apps using AWS Amplify, serverless backends, and cloud databases.",
      },
      {
        value: "03",
        label: "Certification Circles",
        desc: "Collaborative peer study groups for foundational AWS certifications. (Vouchers, if available, follow AWS program rules).",
      },
      {
        value: "04",
        label: "Peer Knowledge Sharing",
        desc: "A self-sustaining community where senior student builders mentor newer batches through project reviews and meetups.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" data-reveal="fade">
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
          data-reveal="fade"
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
            {pillar.tags && pillar.tags.length > 0 && (
              <div className="about-vision-tags">
                {pillar.tags.map((tag) => (
                  <span key={tag} className="about-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {pillar.stats && pillar.stats.length > 0 && (
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
