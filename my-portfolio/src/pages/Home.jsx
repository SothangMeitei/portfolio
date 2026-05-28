import { Link } from 'react-router-dom';
import resumePDF from '../assets/resume_Sothang_Meitei.pdf';
import Typewriter from '../components/ui/Typewriter';

const Home = () => {
  return (
    <div className="home-view">
      {/* The Hero Section */}
      <header className="hero-section">
        <h1>
          <Typewriter text="Hi, I am Sothang Meitei." delay={85} />
        </h1>
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
            <span className="terminal-title">bash — ~sothang/profile</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-text">
              <span className="prompt-arrow">❯</span> 
              Computer Science Engineering undergraduate bridging theoretical computer science with real-world applications.
            </p>
            <p className="terminal-text">
              <span className="prompt-arrow">❯</span> 
              Gaining experience in rapid prototyping, hardware integration, and high-performance architectural design.
            </p>
            <p className="terminal-text">
              <span className="prompt-arrow">❯</span> 
              Currently strengthening my ability to communicate technical vision and looking to apply strong algorithmic problem-solving skills to tech innovations.
            </p>
          </div>
        </div>
        
        {/* Social Contacts Row */}
        <div className="hero-contacts">
          
          {/* GitHub */}
          <a href="https://github.com/SothangMeitei" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub" aria-label="GitHub" className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
              <path d="M12 18h.01"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/sothang-meitei" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn" aria-label="LinkedIn" className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/Sothang_Meitei" target="_blank" rel="noopener noreferrer" data-tooltip="LeetCode" aria-label="LeetCode" className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:sothangmeitei@gmail.com" data-tooltip="Email" aria-label="Email" className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>

          {/* Download Resume */}
          <a 
            href={resumePDF} 
            download="Sothang_Meitei_Resume.pdf" 
            data-tooltip="Download Resume"
            aria-label="Download Resume" 
            className="contact-icon resume-download"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M12 18v-6"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
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
            <h3>Communication Languages</h3>
            <ul>
              <li>English (Fluent)</li>
              <li>Hindi (Beginner)</li>
              <li>Meiteilon (Native)</li>
            </ul>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Home;