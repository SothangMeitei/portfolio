const Experience = () => {
  return (
    <section className="education-view"> {/* Reusing the container width from Education */}
      <header className="view-header">
        <h2>Professional Experience & Engagements</h2>
        <p>A chronological timeline of internships, hackathons, summits, and technical workshops.</p>
      </header>

      <div className="timeline">
        
        {/*Internship*/}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>Research Intern, Image Processing</h3>
            <span className="timeline-date">June 2026 — Present | Manipur University</span>
            <ul className="timeline-details">
              <li>Engaging in foundational and applied research within the field of image processing.</li>
            </ul>
          </div>
        </article>

        {/* IISc Quantum Workshop */}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>National Quantum Mission Workshop</h3>
            <span className="timeline-date">February 2026 | Indian Institute of Science</span>
            <ul className="timeline-details">
              <li>Virtually attended the familiarization workshop focused on the fundamentals and future applications of quantum computing.</li>
            </ul>
          </div>
        </article>

        {/* Regen Hackathon */}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>IoT & ML Developer, Regen Hackathon</h3>
            <span className="timeline-date">January 2026 — February 2026</span>
            <ul className="timeline-details">
              <li>Architected a smart fertilizer recommendation system.</li>
              <li>Integrated low-level hardware sensor data acquisition with high-level machine learning models for real-time agricultural analytics.</li>
            </ul>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Experience;