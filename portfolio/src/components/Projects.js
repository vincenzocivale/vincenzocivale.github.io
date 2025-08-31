import React from 'react';
import './../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">
        <span className="projects-number">02.</span> My Projects
      </h2>

      {/* Project Card */}
      <div className="project-card">
        <div className="project-image-container">
          <img src="/assets/images/project-1.jpg" alt="A screenshot of Project 1" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">Project Title Here</h3>
          <p className="project-description">
            A concise description of the project. Explain its goal, the problem it solves, and the key technologies used. For example, "A machine learning model to classify medical images, built with Python and TensorFlow."
          </p>
          <ul className="project-tech-list">
            <li>Python</li>
            <li>TensorFlow</li>
            <li>scikit-learn</li>
            <li>Pandas</li>
          </ul>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.svg" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/link.svg" alt="External Link" />
            </a>
          </div>
        </div>
      </div>
      {/* End of Project Card. Duplica questo blocco per ogni progetto */}
      
    </section>
  );
};

export default Projects;