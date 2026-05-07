import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../components/ui/ProjectCard";
import FooterSection from "../components/layout/FooterSection";
import emailjs from "emailjs-com";

const sendEmail = (event) => {
  event.preventDefault();

  emailjs
    .sendForm(
       import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY  
    )
    .then(
      () => {
        alert("Message sent successfully!");
        event.target.reset();
      },
      (error) => {
        console.error(error);
        alert("Failed to send message");
      }
    );
};
export default function HomePage({ onSectionChange }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hashTarget = location.hash ? location.hash.replace("#", "") : "";
    const queryTarget = new URLSearchParams(location.search).get("section") || "";
    const target = queryTarget || hashTarget;

    if (!target) {
      return;
    }

    const section = document.getElementById(target);
    if (section) {
      window.setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    }

    if (queryTarget) {
      navigate("/", { replace: true });
    }
  }, [location.hash, location.search, navigate]);

  useEffect(() => {
    const sections = ["home", "projects", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: "-72px 0px -25% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [onSectionChange]);

  return (
    <>
      <HeroSection />
      <div id="projects" className="home-anchor">
        <ProjectsSection />
      </div>
      <div id="skills" className="home-anchor">
        <SkillsSection />
      </div>
      <div id="contact" className="home-anchor">
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="aurora-bg">
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
        <div className="beam beam-4" />
        <div className="beam beam-5" />
        <div className="beam beam-6" />
        <div className="radial-overlay" />
      </div>

      <div className="grid-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to opportunities · 6th Semester CSE
        </div>

        <h1 className="hero-heading">
          Building the Next Era
          <br />
          <span className="heading-gradient">Digital Experiences</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer and DSA Educator from Kolkata.
          <br />
          I craft web interfaces, solve algorithmic problems in C++,
          <br />
          and teach coding through
          <a
            href="https://www.youtube.com/@neural_cipher"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
          >
            {" "}
            Neural Cipher
          </a>
          .
        </p>

        <div className="hero-ctas">
          <a href="#skills" className="cta-primary">
            Explore My Work
            <span className="cta-arrow">-&gt;</span>
          </a>
          <a href="#contact" className="cta-ghost">
            Contact Me
          </a>
        </div>
      </div>

      <div className="floating-cards">
        <div className="float-card float-left" data-float="1">
          <div className="card-dot green" />
          <div className="card-body">
            <span className="card-label">LeetCode</span>
            <span className="card-value">
              100+ <span className="card-sub">solved</span>
            </span>
          </div>
          <i className="fa-solid fa-code card-icon" />
        </div>

        <div className="float-card float-center" data-float="2">
          <div className="card-header-row">
            <span className="card-title-main">Neural Cipher</span>
            <div className="card-badge-pill">YouTube</div>
          </div>
          <div className="card-stats-row">
            <div className="card-stat">
              <span className="stat-big">50K+</span>
              <span className="stat-tiny">Views</span>
            </div>
            <div className="card-stat">
              <span className="stat-big">2K+</span>
              <span className="stat-tiny">Subscribers</span>
            </div>
            <div className="card-stat">
              <span className="stat-big">100+</span>
              <span className="stat-tiny">Videos</span>
            </div>
          </div>
          <div className="card-progress-bar">
            <div className="progress-fill" style={{ width: "72%" }} />
          </div>
          <span className="card-caption">DSA · Web Dev · AI and Tech</span>
        </div>

        <div className="float-card float-right" data-float="3">
          <div className="card-dot blue" />
          <div className="card-body">
            <span className="card-label">Tech Stack</span>
            <span className="card-value">
              Full Stack <span className="card-sub">Developer</span>
            </span>
          </div>
          <i className="fa-solid fa-layer-group card-icon" />
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Smart Board",
      description:
        "Online smartboard for taking notes with save as image or PDF, sharing notes, login/logout, register, and Google sign-up.",
      techStack: ["React","Express","Mongo DB","Versal", "Notes", "PDF Export", "Google Auth"],
      href: "https://smart-board-mishra.vercel.app",
      iconClass: "fa-solid fa-chalkboard",
      previewLabel: "Open Smart Board",
      className: "project-card-small",
      imageUrl: "/images/smartboardHome.png",
    },
    {
      title: "Mishra Blog",
      description:
        "A blog platform with Appwrite backend, React frontend, React Router for navigation, Redux for state management, and CORS handling.",
      techStack: ["React", "Appwrite", "React Router", "Redux", "CORS"],
      href: "https://mishra-blog.vercel.app",
      iconClass: "fa-solid fa-blog",
      previewLabel: "Open Blog",
      className: "project-card-small",
      imageUrl: "/images/blogHome.png",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Here are some of my featured work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} style={{ zIndex: 10 }}>
            <ProjectCard
              
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              href={project.href}
              iconClass={project.iconClass}
              previewLabel={project.previewLabel}
              className={project.className}
              imageUrl={project.imageUrl}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const wrapperRef = useRef(null);
  const innerRefs = useRef([]);
  const outerRefs = useRef([]);

  const innerSkills = [
    { label: "HTML5", angle: 0, iconClass: "fa-brands fa-html5 html" },
    { label: "CSS3", angle: 120, iconClass: "fa-brands fa-css3-alt css" },
    { label: "JavaScript", angle: 240, iconClass: "fa-brands fa-js js" },
  ];

  const outerSkills = [
    { label: "React", angle: 30, iconClass: "fa-brands fa-react react" },
    { label: "C++", angle: 102, iconClass: "fa-solid fa-code cpp" },
    { label: "DSA", angle: 174, iconClass: "fa-solid fa-diagram-project dsa" },
    {
      label: "YouTube",
      angle: 246,
      iconClass: "fa-brands fa-youtube youtube",
    },
    { label: "Git", angle: 318, iconClass: "fa-brands fa-git-alt git" },
  ];

  useEffect(() => {
    let innerAngle = 0;
    let outerAngle = 0;
    let paused = false;
    let frameId;

    const animate = () => {
      if (!paused) {
        innerAngle += 0.4;
        outerAngle -= 0.25;
      }

      innerRefs.current.forEach((element) => {
        if (!element) {
          return;
        }

        const baseAngle = Number(element.dataset.angle) || 0;
        const radians = ((innerAngle + baseAngle) * Math.PI) / 180;
        const x = Math.cos(radians) * 130;
        const y = Math.sin(radians) * 130;
        element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      });

      outerRefs.current.forEach((element) => {
        if (!element) {
          return;
        }

        const baseAngle = Number(element.dataset.angle) || 0;
        const radians = ((outerAngle + baseAngle) * Math.PI) / 180;
        const x = Math.cos(radians) * 230;
        const y = Math.sin(radians) * 230;
        element.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      });

      frameId = window.requestAnimationFrame(animate);
    };

    const wrapper = wrapperRef.current;
    const onMouseEnter = () => {
      paused = true;
    };
    const onMouseLeave = () => {
      paused = false;
    };

    if (wrapper) {
      wrapper.addEventListener("mouseenter", onMouseEnter);
      wrapper.addEventListener("mouseleave", onMouseLeave);
    }

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (wrapper) {
        wrapper.removeEventListener("mouseenter", onMouseEnter);
        wrapper.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <section className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills and Expertise</h2>
          <p>Technologies I work with</p>
        </div>

        <div className="orbit-wrapper" ref={wrapperRef}>
          <div className="orbit-hub">
            <div className="hub-glow" />
            <div className="hub-inner">
              <span className="hub-icon">&lt;/&gt;</span>
              <span className="hub-label">Skills</span>
            </div>
            <div className="hub-pulse p1" />
            <div className="hub-pulse p2" />
          </div>

          <div className="orbit-ring ring-inner" id="ringInner">
            {innerSkills.map((skill, index) => (
              <div
                className="orbit-item"
                key={skill.label}
                data-label={skill.label}
                data-angle={skill.angle}
                ref={(element) => {
                  innerRefs.current[index] = element;
                }}
              >
                <div className="orbit-icon-card">
                  <i className={skill.iconClass} />
                </div>
              </div>
            ))}
          </div>

          <div className="orbit-ring ring-outer" id="ringOuter">
            {outerSkills.map((skill, index) => (
              <div
                className="orbit-item"
                key={skill.label}
                data-label={skill.label}
                data-angle={skill.angle}
                ref={(element) => {
                  outerRefs.current[index] = element;
                }}
              >
                <div className="orbit-icon-card">
                  <i className={skill.iconClass} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-legend">
          <div className="legend-group">
            <span className="legend-tag primary">Full Stack Developer</span>
            <span className="legend-tag primary">MERN Stack</span>
            <span className="legend-tag primary">Data Structures and Algorithms</span>
            <span className="legend-tag primary">C++</span>
            <span className="legend-tag primary">Java</span>
            <span className="legend-tag primary">Python</span>
            <span className="legend-tag primary">C</span>
            <span className="legend-tag primary">HTML5</span>
            <span className="legend-tag primary">CSS3</span>
            <span className="legend-tag primary">JavaScript</span>
            <span className="legend-tag primary">React.js</span>
            <span className="legend-tag primary">Backend Development</span>
            <span className="legend-tag primary">MongoDB</span>
            <span className="legend-tag primary">Appwrite</span>
            <span className="legend-tag content">YouTube Teaching</span>

            <Link
              to="/educational-content"
              className="legend-tag content showcase-link"
            >
              Educational Content <em>Showcase -&gt;</em>
            </Link>
            <span className="legend-tag content">Thumbnail Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let&apos;s connect and discuss opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <h3>Email</h3>
              <p>abhishekmishra051028@gmail.com</p>
              <a href="mailto:abhishekmishra051028@gmail.com" className="contact-link">
                Send Email
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa-brands fa-linkedin" />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
              <a
                href="https://www.linkedin.com/in/abhishek-mishra0510"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                View Profile
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa-brands fa-github" />
              </div>
              <h3>GitHub</h3>
              <p>Check out my code repositories</p>
              <a
                href="https://github.com/Abhishek9070"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                View Projects
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa-brands fa-youtube" />
              </div>
              <h3>YouTube</h3>
              <p>Neural Cipher - Educational Content</p>
              <a
                href="https://www.youtube.com/@neural_cipher"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a topic</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                <i className="fa-solid fa-paper-plane" />
                Send Message
              </button>
            </form>
        </div>
      </div>

      <div className="contact-stats">
        <div className="stat-item">
          <span className="stat-number">24h</span>
          <span className="stat-label">Response Time</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">Problems Solved</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">Videos Created</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Open</span>
          <span className="stat-label">To Opportunities</span>
        </div>
      </div>
    </div>
    </section >
  );
}
