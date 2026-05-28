const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3>{project.title}</h3>
      </div>
      
      <div className="project-body">
        <p>{project.description}</p>
        
        {/* Nested mapping for the technologies array */}
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        {/* GitHub link is expected to always exist */}
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View Source
        </a>
        
        {/* Conditionally render the live demo button only if the URL is provided */}
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;