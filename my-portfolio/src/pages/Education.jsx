const Education = () => {
  return (
    <section className="education-view">
      <header className="view-header">
        <h2>My Academic Background</h2>
        <p>A chronological order of my formal education and foundational training.</p>
      </header>

      <div className="timeline">
        
        {/* B.Tech */}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>National Institute of Technology, Manipur</h3>
            <span className="timeline-date">July 2024 — Present</span>
            <ul className="timeline-details">
              <li><strong>Degree:</strong> Bachelor of Technology in Computer Science and Engineering</li>
              <li><strong>Current CGPA:</strong> 9.23</li>
            </ul>
          </div>
        </article>

        {/* Class XII */}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>Millenium Institute of Science</h3>
            <span className="timeline-date">July 2022 — July 2024</span>
            <ul className="timeline-details">
              <li><strong>Degree:</strong> Higher Secondary Examination XII</li>
              <li><strong>Percentage:</strong> 87.6%</li>
            </ul>
          </div>
        </article>

        {/* Class X */}
        <article className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content skill-category">
            <h3>St. George High School</h3>
            <span className="timeline-date">February 2014 — July 2022</span>
            <ul className="timeline-details">
              <li><strong>Degree:</strong> High School Leaving Certificate Examination X</li>
              <li><strong>Percentage:</strong> 89.5%</li>
            </ul>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Education;