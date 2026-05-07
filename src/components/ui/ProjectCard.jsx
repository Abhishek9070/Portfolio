function ProjectCard({
  title,
  description,
  techStack,
  href,
  iconClass = "fa-solid fa-diagram-project",
  previewLabel = "Open Project",
  className = "",
  imageUrl,
}) {
  return (
    <div className={`group ${className}`}>
      <article
        className="relative overflow-hidden rounded-2xl p-5 
                   bg-[#0f172a] border border-blue-500/20
                   shadow-lg shadow-blue-500/10
                   transition-all duration-300
                   hover:-translate-y-2 hover:shadow-blue-500/30"
      >
     
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                        transition duration-300 -z-10
                        bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-500/10 blur-xl" />

        
        <div
          className="relative h-44 w-full mb-4 rounded-xl overflow-hidden 
                     bg-[#020617] flex items-center justify-center"
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center text-blue-400">
              <i className={`${iconClass} text-3xl mb-2`} />
              <span className="text-xs opacity-70">{previewLabel}</span>
            </div>
          )}
        </div>

      
        <h4 className="text-lg font-semibold text-white mb-2">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={`${title}-${tech}`}
              className="text-xs px-2 py-1 rounded-md 
                         bg-blue-500/10 text-blue-400 
                         border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
                     text-white rounded-lg 
                     bg-gradient-to-r from-blue-500 to-cyan-400
                     shadow-md shadow-blue-500/30
                     transition-all duration-300
                     hover:scale-105 hover:shadow-blue-500/50 hover:-translate-y-0.5
                     active:scale-95"
        >
          Live Demo ↗
        </a>
      </article>
    </div>
  );
}

export default ProjectCard;