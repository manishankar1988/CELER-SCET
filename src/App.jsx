import React, { useState, useEffect } from "react";

const products = [
  {
    number: "01",
    iconClass: "icon-lms",
    iconSymbol: "🎓",
    title: "Smart Campus Platform",
    subtitle: "Complete Academic Institution Management Suite",
    description:
      "An advanced integrated ecosystem combining LMS, CMS, and ERP into a unified intelligent platform for universities and colleges. Designed with a futuristic vision for the next decade of smart education — featuring AI-enabled learning analytics, digital campuses, academic automation, and intelligent management.",
    features: [
      "Learning Management System",
      "Campus ERP Automation",
      "Content Management System",
      "AI-Powered Academic Analytics",
      "Student & Faculty Management",
      "Smart Assessment & Accreditation",
    ],
  },
  {
    number: "02",
    iconClass: "icon-dt",
    iconSymbol: "🔮",
    title: "TwinSphere CPS",
    subtitle: "Digital Twins for Cyber-Physical Systems",
    description:
      "A next-generation digital twin ecosystem for modeling, simulation, monitoring, and optimization of cyber-physical systems — spanning smart industries, healthcare, transportation, and IoT infrastructures.",
    features: [
      "Real-Time IoT Integration",
      "Predictive Analytics",
      "Simulation & Monitoring",
      "Industry 4.0 Ready",
      "Edge Intelligence",
      "Cloud-Native Infrastructure",
    ],
  },
  {
    number: "03",
    iconClass: "icon-agent",
    iconSymbol: "🤖",
    title: "RealWorld AI Agents",
    subtitle: "Autonomous Intelligent Agent Ecosystem",
    description:
      "Advanced AI agent framework for enterprise automation, intelligent education systems, workflow orchestration, research environments, and real-world AI deployments.",
    features: [
      "Multi-Agent Systems",
      "Conversational AI",
      "Workflow Automation",
      "Enterprise Intelligence",
      "Decision Support Systems",
      "Human-AI Collaboration",
    ],
  },
];

const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  return `${base}${path}`.replace(/\/+/g, '/');
};

const team = [
  {
    name: "Livya George",
    role: "Full Stack Developer",
    image: getAssetPath("developers/livya_george.webp"),
  },
  {
    name: "Aleena Varghese",
    role: "Frontend Developer",
    image: getAssetPath("developers/aleena.jpg"),
  },
  {
    name: "Nicy Johnson",
    role: "Backend Developer",
    image: getAssetPath("developers/nicy.jpg"),
  },
  {
    name: "Anusree K",
    role: "UI/UX Engineer",
    image: getAssetPath("developers/anusree.jpg"),
  },
  {
    name: "Anugraha K R",
    role: "AI Systems Developer",
    image: getAssetPath("developers/anugraha.jpg"),
  },
];

const mentors = [
  {
    name: "Dr. Ramkumar S",
    role: "Technical Advisor & Mentor",
    image: getAssetPath("developers/dr_ramkumar.jpg"),
  },
  {
    name: "Dr. Manishankar S",
    role: "Technical Advisor & Mentor",
    image: getAssetPath("developers/dr_manishankar.jpg"),
  },
  {
    name: "Dr. G.R. Gnana King",
    role: "Technical Advisor & Mentor",
    image: getAssetPath("developers/dr_gnanaking.jpg"),
  },
];

const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cyber-Physical Systems",
  "Cloud Computing",
  "Digital Twins",
  "React & MERN Stack",
  "IoT & Embedded Systems",
  "DevOps & Kubernetes",
  "Edge AI",
  "Quantum Computing",
  "Data Engineering",
  "Enterprise ERP Solutions",
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    // ─── Intersection Observer for Scroll Reveals ───
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* ─── Navigation ─── */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            CELER<span>SCET</span>
          </a>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg-orb hero-bg-orb-1" />
        <div className="hero-bg-orb hero-bg-orb-2" />
        <div className="hero-grid-overlay" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in-up">
              <span className="hero-badge-dot" />
              Future Technologies · Smart Education · AI
            </div>

            <h1 className="animate-fade-in-up delay-100">
              Engineering the{" "}
              <span className="gradient-text">Future</span> of Intelligent
              Digital Ecosystems
            </h1>

            <p className="hero-description animate-fade-in-up delay-200">
              CelerSCET develops next-generation intelligent platforms, AI
              ecosystems, cyber-physical systems, and futuristic digital
              transformation solutions for universities, enterprises, and
              research ecosystems.
            </p>

            <div className="hero-actions animate-fade-in-up delay-300">
              <a href="#products" className="btn-primary">
                Explore Solutions
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Team
              </a>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-metrics">
                <div className="metric-item reveal" style={{ transitionDelay: '0.1s' }}>
                  <div className="metric-label">AI Systems</div>
                  <div className="metric-value cyan">AI</div>
                  <div className="metric-sub">Intelligent Platforms</div>
                </div>
                <div className="metric-item reveal" style={{ transitionDelay: '0.2s' }}>
                  <div className="metric-label">Digital Twins</div>
                  <div className="metric-value purple">DT</div>
                  <div className="metric-sub">Cyber-Physical</div>
                </div>
                <div className="metric-item reveal" style={{ transitionDelay: '0.3s' }}>
                  <div className="metric-label">Enterprise</div>
                  <div className="metric-value blue">ERP</div>
                  <div className="metric-sub">Smart Campuses</div>
                </div>
                <div className="metric-item reveal" style={{ transitionDelay: '0.4s' }}>
                  <div className="metric-label">Infrastructure</div>
                  <div className="metric-value emerald">CPS</div>
                  <div className="metric-sub">Edge Computing</div>
                </div>
              </div>
              <div className="hero-status-bar reveal" style={{ transitionDelay: '0.5s' }}>
                <div className="status-header">
                  <span className="status-label">
                    Intelligent Platform Index
                  </span>
                  <span className="status-value">96%</span>
                </div>
                <div className="status-track">
                  <div className="status-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products ─── */}
      <section className="section" id="products">
        <div className="section-decor section-decor-1" />
        <div className="section-inner">
          <div className="section-header-center reveal">
            <div className="section-label">Our Solutions</div>
            <h2 className="section-title">Intelligent Product Ecosystem</h2>
            <p className="section-subtitle centered">
              Enterprise-grade digital platforms designed to transform
              education, cyber-physical infrastructure, and intelligent
              automation.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, i) => (
              <div className="product-card reveal" key={i} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
                <div className="product-number">{product.number}</div>
                <div className={`product-icon ${product.iconClass}`}>
                  {product.iconSymbol}
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-subtitle">{product.subtitle}</div>
                <p className="product-desc">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="section team-section" id="team">
        <div className="section-decor section-decor-2" />
        <div className="section-inner">
          <div className="section-header-center reveal">
            <div className="section-label">Our Team</div>
            <h2 className="section-title">Developers & Mentors</h2>
            <p className="section-subtitle centered">
              A multidisciplinary team focused on futuristic software
              engineering, AI systems, and intelligent digital transformation.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card reveal" key={i} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
                <img
                  className="team-card-img"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="team-card-info">
                  <div className="team-card-name">{member.name}</div>
                  <div className="team-card-role">{member.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mentors-label reveal">
            <h3>Technical Advisors & Mentors</h3>
          </div>

          <div className="mentors-grid">
            {mentors.map((mentor, i) => (
              <div className="mentor-card reveal" key={i} style={{ transitionDelay: `${(i + 1) * 0.2}s` }}>
                <img
                  className="mentor-img"
                  src={mentor.image}
                  alt={mentor.name}
                  loading="lazy"
                />
                <div>
                  <div className="mentor-name">{mentor.name}</div>
                  <div className="mentor-role">{mentor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technologies ─── */}
      <section className="section" id="expertise">
        <div className="section-decor section-decor-3" />
        <div className="section-inner">
          <div className="section-header-center reveal">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">Technology Domains</h2>
            <p className="section-subtitle centered">
              Advanced engineering expertise spanning intelligent systems,
              enterprise platforms, cyber-physical systems, and futuristic
              computing technologies.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((tech, i) => (
              <div className="tech-tag reveal" key={i} style={{ transitionDelay: `${(i + 1) * 0.05}s` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="cta-card reveal">
          <h2 className="cta-title">Engineering the Intelligent Future</h2>
          <p className="cta-desc">
            Partner with CelerSCET to build transformative digital platforms,
            AI ecosystems, and next-generation intelligent applications.
          </p>
          <a href="#contact" className="btn-primary">
            Connect With Us
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-brand reveal">
            <a href="#" className="nav-logo">
              CELER<span>SCET</span>
            </a>
            <p>
              Building intelligent ecosystems for education, AI systems,
              cyber-physical systems, enterprise platforms, and digital
              transformation.
            </p>
          </div>
          <div className="footer-contact reveal">
            <div className="footer-label">Registered Address</div>
            <div className="footer-address">
              CelerSCET,
              <br />
              Sahrdaya College of Engineering and Technology (Autonomous),
              <br />
              Pb No. 17, College Road, Kodakara,
              <br />
              Thrissur-680684, Kerala, India
            </div>
            <div className="footer-phone">
              <span>Contact:</span> +91 8867568963
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} CelerSCET. All rights reserved.
        </div>
      </footer>
    </>
  );
}