"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PAGE_SIZE = 6;

const ARTICLES = [
  {
    id: "crafting-autonomous-agents-python-aws-bedrock",
    title: "Crafting Autonomous Agents: Building Intelligent Workflows with Python and AWS Bedrock",
    excerpt: "Explore how to design and build autonomous AI agents and intelligent multi-step orchestration workflows using Python and Amazon Bedrock models.",
    author: "AWS Community", date: "Feb 2025", publishedAt: "2025-02-05", readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Agentic Workflows"], tags: ["AWS Bedrock", "Python", "AI Agents"],
    featured: true, category: "AI & Bedrock",
    gradient: "linear-gradient(135deg, #00d26a 0%, #0070f3 100%)",
    link: "https://builder.aws.com/content/37Zj5QyUSLE4S9ajtjV2UMkclrY/crafting-autonomous-agents-building-intelligent-workflows-with-python-and-aws-bedrock",
  },
  {
    id: "auto-rickshaw-oracle-fair-fare-estimator-kiro",
    title: "Auto-Rickshaw Oracle: Building a City-Aware Fair Fare Estimator Using Kiro",
    excerpt: "A practical walk-through of building a city-aware fair fare estimation app using Kiro spec-driven development methodology.",
    author: "AWS Community", date: "Feb 2025", publishedAt: "2025-02-04", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    domains: ["Kiro & Automation", "Serverless & Cloud"], tags: ["Kiro", "Spec-Driven", "Fair Fare"],
    featured: true, category: "Kiro & Automation",
    gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
    link: "https://builder.aws.com/content/37U6TrLjvcE9VGxGJjXXkBwO8yE/auto-rickshaw-oracle-building-a-city-aware-fair-fare-estimator-using-kiro",
  },
  {
    id: "knowledge-driven-ai-agent-bedrock-strands",
    title: "Building a Knowledge-Driven AI Agent Using Amazon Bedrock and Strands Agents on AWS",
    excerpt: "Leverage Amazon Bedrock and Strands Agents framework to construct intelligent, knowledge-powered conversational agents.",
    author: "AWS Community", date: "Feb 2025", publishedAt: "2025-02-03", readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Agentic Workflows"], tags: ["Strands", "Bedrock", "Knowledge Agent"],
    featured: true, category: "AI & Bedrock",
    gradient: "linear-gradient(135deg, #a050ff 0%, #00d26a 100%)",
    link: "https://builder.aws.com/content/37FuqPKbTyeDEviALJjHzbmMbQ8/building-a-knowledge-driven-ai-agent-using-amazon-bedrock-and-strands-agents-on-aws",
  },
  {
    id: "scalable-ai-image-editing-aws-lambda-bedrock",
    title: "Building Scalable AI Image Editing Solutions Using AWS Lambda and Bedrock",
    excerpt: "Scale generative AI image editing pipelines seamlessly using serverless AWS Lambda and Amazon Bedrock foundation models.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-28", readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Serverless & Cloud"], tags: ["Lambda", "Bedrock", "Image Editing"],
    featured: false, category: "Serverless & Cloud",
    gradient: "linear-gradient(135deg, #3bb2ff 0%, #a050ff 100%)",
    link: "https://builder.aws.com/content/36qU2SdmVuNpD8h0lWUKpSiekOD/building-scalable-ai-image-editing-solutions-using-aws-lambda-and-bedrock",
  },
  {
    id: "coffee-prices-developer-productivity-data-dashboard",
    title: "How Coffee Prices and Developer Productivity Inspired a Fun Data Dashboard",
    excerpt: "Discover how caffeine trends and developer workflows led to an insightful, interactive real-time data dashboard project.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-25", readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    domains: ["Data & Analytics"], tags: ["Data Dashboard", "Productivity", "Analytics"],
    featured: false, category: "Data & Analytics",
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    link: "https://builder.aws.com/content/36bHmehQd57ZrBVPl7h6TzAISVU/how-coffee-prices-and-developer-productivity-inspired-a-fun-data-dashboard",
  },
  {
    id: "context-aware-ai-rag-application-bedrock-knowledge-bases",
    title: "My Journey into Context-Aware AI: Building a RAG-Powered Application with Amazon Bedrock Knowledge Bases",
    excerpt: "Step-by-step walk-through of creating a context-aware Retrieval-Augmented Generation application using Bedrock Knowledge Bases.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-20", readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "RAG & Search"], tags: ["RAG", "Bedrock", "Knowledge Bases"],
    featured: false, category: "RAG & Search",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    link: "https://builder.aws.com/content/36X1irCwNiv7PAvSqE33QI5iA9r/my-journey-into-context-aware-ai-building-a-rag-powered-application-with-amazon-bedrock-knowledge-bases",
  },
  {
    id: "screenshot-to-pdf-pipeline-kiro-spec-driven",
    title: "How My Laziness Turned into Automation: Building a Screenshot to PDF Pipeline with Kiro",
    excerpt: "Automate screenshot capture and PDF compilation using Kiro spec-driven development workflows.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-15", readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    domains: ["Kiro & Automation"], tags: ["Automation", "Kiro", "PDF Pipeline"],
    featured: false, category: "Kiro & Automation",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    link: "https://builder.aws.com/content/365fJNtcZaaOv47AUwvDGLZ9VAN/how-my-laziness-turned-into-automation-building-a-screenshot-to-pdf-pipeline-with-kiro-and-spec-driven-development",
  },
  {
    id: "text-to-markdown-cleaner-spec-first-kiro",
    title: "Building a Lightweight Text-to-Markdown Cleaner Using a Spec-First Workflow with Kiro",
    excerpt: "Learn how to quickly build and iterate on a text-to-markdown cleaning utility using a spec-first methodology.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-12", readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    domains: ["Kiro & Automation"], tags: ["Markdown", "Kiro", "Spec-First"],
    featured: false, category: "Kiro & Automation",
    gradient: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
    link: "https://builder.aws.com/content/364SL6PDCvM0ZJZU4l1mdlbEToi/building-a-lightweight-text-to-markdown-cleaner-using-a-spec-first-workflow-with-kiro",
  },
  {
    id: "enhancing-rag-amazon-bedrock-knowledge-bases",
    title: "Enhancing Retrieval-Augmented Generation (RAG) with Amazon Bedrock Knowledge Bases",
    excerpt: "Deep dive into chunking strategies, vector search optimization, and prompt engineering for enterprise RAG with Bedrock.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-08", readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "RAG & Search"], tags: ["RAG", "Vector Search", "Bedrock"],
    featured: false, category: "RAG & Search",
    gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
    link: "https://builder.aws.com/content/36N2rFzXcLUTUWbkZUBkY5vOkMs/enhancing-retrieval-augmented-generation-rag-with-amazon-bedrock-knowledge-bases",
  },
  {
    id: "secure-scalable-image-editing-app-aws-cognito-bedrock",
    title: "Building a Secure and Scalable Image Editing App with AWS: From Authentication to Advanced Generation",
    excerpt: "Comprehensive architecture guide for building full-stack AI image generation apps using AWS Cognito, Lambda, and Bedrock.",
    author: "AWS Community", date: "Jan 2025", publishedAt: "2025-01-05", readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Serverless & Cloud"], tags: ["Authentication", "Cognito", "GenAI"],
    featured: false, category: "Serverless & Cloud",
    gradient: "linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)",
    link: "https://builder.aws.com/content/36fYIvrvlMIeyyfN9lJEPcfKNkq/building-a-secure-and-scalable-image-editing-app-with-aws-from-authentication-to-advanced-image-generation",
  },
  {
    id: "building-intelligent-ai-agents-strands-aws",
    title: "Building Intelligent AI Agents with Strands and AWS",
    excerpt: "Harness the power of Strands SDK on AWS to compose autonomous multi-agent systems and task planners.",
    author: "AWS Community", date: "Dec 2024", publishedAt: "2024-12-28", readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Agentic Workflows"], tags: ["Strands", "Agents", "AWS"],
    featured: false, category: "Agentic Workflows",
    gradient: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)",
    link: "https://builder.aws.com/content/373lHUykV7vtn3fQ0mSamL8ZiAh/building-intelligent-ai-agents-with-strands-and-aws",
  },
  {
    id: "scalable-slang-translator-tool-kiro",
    title: "Building a Scalable Slang Translator Tool with Kiro",
    excerpt: "Create an engaging multi-lingual slang translator using Kiro rapid prototyping and spec-driven tools.",
    author: "AWS Community", date: "Dec 2024", publishedAt: "2024-12-20", readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
    domains: ["Kiro & Automation"], tags: ["Slang Translator", "Kiro", "NLP"],
    featured: false, category: "Kiro & Automation",
    gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
    link: "https://builder.aws.com/content/37SwDZuqBngkZibX2BjbajSRYLf/building-a-scalable-slang-translator-tool-with-kiro",
  },
  {
    id: "agentic-workflows-python-deep-dive-workshop-5",
    title: "Building Agentic Workflows in Python: A Deep Dive into Workshop 5",
    excerpt: "Practical hands-on breakdown of constructing resilient Python agentic workflows from Workshop 5.",
    author: "AWS Community", date: "Dec 2024", publishedAt: "2024-12-15", readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    domains: ["AI & Bedrock", "Agentic Workflows"], tags: ["Python", "Agentic Workflows", "AWS"],
    featured: false, category: "Agentic Workflows",
    gradient: "linear-gradient(135deg, #00d26a 0%, #a050ff 100%)",
    link: "https://builder.aws.com/content/37ZgJ667N1tOgu2pjHJf4GRX4ld/building-agentic-workflows-in-python-a-deep-dive-into-workshop-5",
  },
];

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const contentRef = useRef(null);

  const categories = ["All", ...new Set(ARTICLES.flatMap((a) => a.domains || []))];

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, debouncedSearch]);

  const filtered = useMemo(
    () =>
      ARTICLES.filter((a) => {
        const textMatch =
          debouncedSearch.length === 0 ||
          [a.title, a.excerpt, a.author, ...(a.domains || []), ...(a.tags || [])]
            .join(" ")
            .toLowerCase()
            .includes(debouncedSearch);
        const catMatch =
          category === "All" ||
          (a.domains || []).some((d) => d.toLowerCase() === category.toLowerCase());
        return textMatch && catMatch;
      }),
    [category, debouncedSearch]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const goToPage = (n) => {
    if (n >= 1 && n <= totalPages) {
      setCurrentPage(n);
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="articles-page">
      <header className="articles-hero">
        <div className="articles-hero-container">
          <span className="articles-eyebrow">Knowledge Hub</span>
          <h1>Cloud &amp; AI Articles</h1>
          <p className="articles-hero-copy">
            Explore deep dives, tutorials, and agentic AI guides published on AWS Builder.
          </p>
          <div className="articles-search-row">
            <label className="articles-search">
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                placeholder="Search by topic, keyword, or tool..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search.length > 0 && (
                <button
                  className="articles-search-clear"
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  ✕
                </button>
              )}
            </label>
            <button
              className={`articles-filter-toggle ${filterOpen ? "active" : ""}`}
              type="button"
              aria-label="Toggle filters"
              onClick={() => setFilterOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              <span>Filter</span>
            </button>
          </div>
          {filterOpen && (
            <div className="articles-category-list" aria-label="Article domains">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`articles-category ${cat === category ? "articles-category-active" : ""}`}
                  type="button"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>
      <div ref={contentRef} className="articles-content-container">
        {filtered.length > 0 ? (
          <section className="articles-section" data-reveal aria-labelledby="articles-title">
            <div className="articles-section-heading">
              <span className="articles-section-icon" aria-hidden="true" />
              <h2 id="articles-title">
                {category === "All" ? "All Articles" : category}
                <span className="articles-count">{` (${filtered.length})`}</span>
              </h2>
            </div>
            <div className="articles-grid">
              {pageItems.map((a) => (
                <article className="article-card" key={a.id}>
                  <div className="article-card-image-wrap">
                    <a href={a.link} target="_blank" rel="noopener noreferrer" aria-label={a.title}>
                      <img src={a.image} alt="" className="article-card-image" loading="lazy" />
                    </a>
                    {a.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="article-card-content">
                    <div className="article-card-meta-row">
                      <div className="article-tags" aria-label="Article tags">
                        {(a.tags || []).map((tag) => (
                          <span className="article-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="article-read-time">
                        <span className="article-clock" aria-hidden="true" />
                        {a.readTime}
                      </span>
                    </div>
                    <h3 className="article-card-title">
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="article-title-link">
                        {a.title}
                      </a>
                    </h3>
                    <p className="article-card-excerpt">{a.excerpt}</p>
                    <div className="article-card-footer">
                      <span className="article-author-date">{`${a.author} · ${a.date}`}</span>
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="article-read-button">
                        Read
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="articles-pagination">
                <button
                  className="pagination-btn pagination-prev"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                >
                  ← Previous
                </button>
                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((n) => (
                    <button
                      key={n}
                      className={`pagination-number ${n === currentPage ? "active" : ""}`}
                      onClick={() => goToPage(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button
                  className="pagination-btn pagination-next"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                >
                  Next →
                </button>
              </div>
            )}
          </section>
        ) : (
          <section className="articles-empty" aria-live="polite">
            <h2>No articles found</h2>
            <p>Try searching for a different keyword or selecting another filter category.</p>
          </section>
        )}
      </div>
    </div>
  );
}
