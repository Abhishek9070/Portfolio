import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SiteNavbar({ activeSection }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const jumpToSection = (event, sectionId) => {
    event.preventDefault();

    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", `/#${sectionId}`);
      return;
    }

    navigate(`/?section=${sectionId}`);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo logo-link">
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">Abhishek Kumar Mishra</span>
        </Link>

        <ul className="nav-links">
          <li>
            <button
              className={`nav-link-btn ${
                isHome && activeSection === "home" ? "active" : ""
              }`}
              onClick={(event) => jumpToSection(event, "home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${
                isHome && activeSection === "projects" ? "active" : ""
              }`}
              onClick={(event) => jumpToSection(event, "projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${
                isHome && activeSection === "skills" ? "active" : ""
              }`}
              onClick={(event) => jumpToSection(event, "skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${
                isHome && activeSection === "contact" ? "active" : ""
              }`}
              onClick={(event) => jumpToSection(event, "contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        <a
          href="#contact"
          className="nav-cta"
          onClick={(event) => jumpToSection(event, "contact")}
        >
          Let&apos;s Connect -&gt;
        </a>
      </div>
    </nav>
  );
}
