"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "2026", label: "Degree Completed" },
  { value: "161", label: "Credits Earned" },
  { value: "635", label: "TOEIC Score" },
];

const skillChips = [
  "Machine Learning",
  "Load Forecasting",
  "BESS & ESS",
  "Distributed Generation",
  "MATLAB / Simulink",
  "AutoCAD Electrical",
];

const services = [
  {
    title: "AI & Data Analytics",
    text: "Developing load forecasting models with TensorFlow and applying data analytics to support reliable power system planning.",
  },
  {
    title: "Power System Analysis",
    text: "Using MATLAB/Simulink, PSIM, and power system concepts to analyze AVR simulation, distributed generation, and energy systems.",
  },
  {
    title: "Electrical Design",
    text: "Creating electrical and control system designs with AutoCAD Electrical, single-line diagrams, and riser diagrams.",
  },
];

const projects = [
  {
    title: "AI Load Forecasting",
    category: "Machine Learning · TensorFlow",
    blurb: "Developed machine learning models for load forecasting to support power system reliability and better planning decisions.",
  },
  {
    title: "Generation Scheduling Optimization",
    category: "PSO · GWO · ACO · WOA",
    blurb: "Applied metaheuristic optimization algorithms to generation scheduling and energy conservation problems.",
  },
  {
    title: "DG & BESS Smart Grid Integration",
    category: "Distributed Generation · ESS",
    blurb: "Explored the integration of distributed generation and battery energy storage systems into smart-grid solutions.",
  },
];

const expertise = [
  {
    title: "AI & Optimization",
    text: "Machine Learning (TensorFlow), metaheuristics (PSO, GWO, ACO, WOA), and load forecasting.",
  },
  {
    title: "Power System Analysis",
    text: "MATLAB/Simulink, AVR simulation, PSIM, and distributed generation design.",
  },
  {
    title: "Electrical Design",
    text: "AutoCAD Electrical, single-line diagrams (SLD), and riser diagrams.",
  },
];

const transcriptHighlights = [
  "Battery Technology and Energy Storage — A",
  "Project in Electrical Engineering — A",
  "Digital Signal Processing — A",
  "Advanced Topics in General Electrical Engineering — A",
  "Electrical Safety Engineering — A",
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const nextTheme = saved === "light" ? "light" : "dark";
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme;
    document.body.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`page-shell ${theme}`}>
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Go to home page">
          SAKDINUN <span>THEWANA</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          aria-label="Toggle light and dark theme"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Electrical Engineering Graduate · Class of 2026</p>
            <h1>
              Building smarter energy systems with power engineering and AI.
            </h1>
            <p className="lead">
              I am an Electrical Engineering graduate focused on power systems, energy storage, distributed generation, load forecasting, and AI-based optimization. I am currently building practical experience through focused self-learning.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>
              <a href="#contact" className="secondary-btn">
                Let&apos;s Talk
              </a>
            </div>

            <div className="chip-row" aria-label="Core engineering skills">
              {skillChips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="stats-row" aria-label="Portfolio statistics">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="status-pill">Open to opportunities · Self-learning</div>

            <div className="profile-card">
              <div className="avatar">ST</div>
                <div>
                  <h3>Sakdinun Thewana</h3>
                  <p>Electrical Engineering Graduate</p>
                </div>
              </div>

            <div className="panel-grid">
              <div>
                <span>Based in</span>
                <strong>Thailand · Open to opportunities</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Power Systems & AI</strong>
              </div>
              <div>
                <span>Email</span>
                <strong className="panel-email">sakdinun.thewana@gmail.com</strong>
              </div>
              <div>
                <span>Specialty</span>
                <strong>ESS, DG & Optimization</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Electrical engineering graduate working at the intersection of power and data.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am an innovative Electrical Engineering graduate from Chiang Mai University. I completed my Bachelor of Engineering in Electrical Engineering in June 2026 and am currently using this transition period to deepen my practical skills through self-learning.
              </p>
              <p>
                My academic work combines machine learning for load forecasting, metaheuristic optimization for generation planning, and electrical design for smart, energy-efficient infrastructure.
              </p>
            </div>

            <ul className="info-list">
              <li>
                <span>01</span>
                Power systems & energy storage
              </li>
              <li>
                <span>02</span>
                AI-based load forecasting
              </li>
              <li>
                <span>03</span>
                Smart-grid design
              </li>
            </ul>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Core expertise</p>
            <h2>Technical foundations prepared for the energy industry.</h2>
          </div>

          <div className="card-grid three-up">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <div className="card-dot" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading inline-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Academic projects connecting power systems, data, and optimization.</h2>
            </div>
            <a href="#contact" className="text-link">
              Discuss a project →
            </a>
          </div>

          <div className="card-grid project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual">
                  <span>{project.category}</span>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="eyebrow">Education & leadership</p>
            <h2>Degree completed, with focused self-learning for the next step.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-period">Jun 2022 — Jun 2026</span>
              <div className="timeline-content">
                <h3>Bachelor of Engineering in Electrical Engineering</h3>
                <p className="company-name">Chiang Mai University</p>
                <p>Degree completed June 8, 2026 and official certificate issued July 8, 2026. Final GPA 2.57 across 161 earned credits.</p>
                <div className="highlight-list">
                  <strong>Transcript highlights</strong>
                  {transcriptHighlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-period">2024 — 2026</span>
              <div className="timeline-content">
                <h3>President, Academic Club of Engineering Student Society</h3>
                <p className="company-name">ACESS</p>
                <p>Participated in the engineering student society and was promoted to club president, developing leadership and collaboration experience.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-period">Jul 2026 — Present</span>
              <div className="timeline-content">
                <h3>Independent Self-learning</h3>
                <p className="company-name">Post-graduation development</p>
                <p>Currently strengthening practical skills in power system analysis, Python and machine learning workflows, energy storage, distributed generation, and engineering documentation while exploring opportunities to begin my professional career.</p>
              </div>
            </article>
            <article className="timeline-item">
              <span className="timeline-period">Expertise</span>
              <div className="timeline-content">
                {expertise.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <p className="eyebrow">Let&apos;s work together</p>
              <h2>Open to graduate roles, internships, and projects in electrical power and energy systems.</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:sakdinun.thewana@gmail.com" className="primary-btn">
                Contact me
              </a>
              <a href="tel:+66655419303" className="contact-link">
                065-541-9303
              </a>
              <a href="https://github.com/daniel-sakdinun" className="contact-link" target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Sakdinun Thewana. Electrical Engineering Graduate.</p>
      </footer>
    </div>
  );
}
