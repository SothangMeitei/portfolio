import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-view">
      {/* The Hero Section */}
      <header className="hero-section">
        <h1>Sothang Meitei.</h1>
        <p className="hero-subtitle">
          Computer Science Engineering undergraduate bridging theoretical computer science with real-world applications. Experienced in rapid prototyping, hardware integration, and high-performance architectural design.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            View Architecture Projects
          </Link>
          <a 
            href="https://github.com/SothangMeitei" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            GitHub Profile
          </a>
        </div>
      </header>

      {/* The Technical Matrix */}
      <section className="skills-section">
        <h2>Technical Matrix</h2>
        <div className="skills-grid">
          
          <article className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>C / C++</li>
              <li>Python</li>
              <li>Lua (Scripting)</li>
            </ul>
          </article>

          <article className="skill-category">
            <h3>Systems & Frameworks</h3>
            <ul>
              <li>Vulkan / SDL3</li>
              <li>Data-Oriented Design (ECS)</li>
              <li>Automata / Compiler Theory</li>
              <li>IoT / Hardware Integration</li>
            </ul>
          </article>

          <article className="skill-category">
            <h3>Linguistics & Communication</h3>
            <ul>
              <li>Meiteilon (Native)</li>
              <li>English (Professional)</li>
              <li>Hindi (Professional)</li>
              <li>Technical Vision Communication</li>
            </ul>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Home;