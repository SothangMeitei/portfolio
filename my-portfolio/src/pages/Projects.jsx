// Import the static JSON data directly
import projectsData from '../data/projects.json';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  return (
    <section className="projects-view">
      <header className="view-header">
        <h2>Systems & Architecture Projects</h2>
        <p>A technical breakdown of core engineering implementations.</p>
      </header>

      {/* The layout grid that will contain the cards */}
      <div className="projects-grid">
        {/* Map over the array. 
          For every object in projectsData, return a ProjectCard component.
        */}
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;