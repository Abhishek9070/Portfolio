function ProjectCard({
  title,
  description,
  techStack,
  href,
  iconClass = "fa-solid fa-diagram-project",
  previewLabel = "Open Project",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="project-card-link"
      aria-label={`Open ${title}`}
    >
      <article className="project-item card-interactive">
        <div className="project-placeholder">
          <i className={iconClass} />
          <span>{previewLabel}</span>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-tech">
          {techStack.map((tech) => (
            <span className="tech-tag" key={`${title}-${tech}`}>
              {tech}
            </span>
          ))}
        </div>
      </article>
    </a>
  );
}

export default ProjectCard;
