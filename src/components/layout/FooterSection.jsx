import { Link, useLocation, useNavigate } from "react-router-dom";

export default function FooterSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const jumpToSection = (event, sectionId) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>General</h4>
          <a href="#home" onClick={(event) => jumpToSection(event, "home")}>
            Home
          </a>
          <a href="#projects" onClick={(event) => jumpToSection(event, "projects")}>
            Projects
          </a>
          <a href="#skills" onClick={(event) => jumpToSection(event, "skills")}>
            Skills
          </a>
        </div>

        <div className="footer-col">
          <h4>Work</h4>
          <a href="#skills" onClick={(event) => jumpToSection(event, "skills")}>
            Skills
          </a>
          <Link to="/educational-content">Educational Content</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <div className="connect-icons">
            <a href="mailto:abhishekmishra051028@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
            <a
              href="https://github.com/Abhishek9070"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-mishra0510"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://www.youtube.com/@neural_cipher"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              href="https://www.instagram.com/mishra_abhi05_10"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Abhishek Kumar Mishra</p>
      </div>
    </footer>
  );
}
