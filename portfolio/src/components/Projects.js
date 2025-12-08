import React from 'react';
import './../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">
        <span className="projects-number">02.</span> <span className="gradient-text">My Projects</span>
      </h2>


      <div className="project-card">
        <div className="project-image-container">
          <img src="/assets/images/single-cell-annotation_cover.png" alt="A screenshot of Single Cell Classification Tool" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">Single Cell Classification Tool</h3>
          <p className="project-description">
            A tool that automatically identifies and classifies different types of cells from single-cell data. The aim is to make heterogeneous biological data easier to interpret, helping researchers to quickly discover patterns and differences between cell types.
          </p>
          <ul className="project-tech-list">
            <li>Pytorch</li>
            <li>Scanpy</li>
            <li>Transformers</li>
          </ul>
          {/* <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.svg" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/link.svg" alt="External Link" />
            </a>
          </div> */}
        </div>
      </div>

      <div className="project-card">
        <div className="project-image-container">
          <img src="/assets/images/IGTLInk Plugin_cover.png" alt="Cover image Plugin" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">AR Medical Imaging Plugin</h3>
          <p className="project-description">
            This Unity plugin enables real-time visualization of 3D volumes, meshes, and surfaces from medical imaging software, connecting Unity AR applications with surgical planning tools via the widely adopted IGTLink protocol.
          </p>
          <ul className="project-tech-list">
            <li>Unity</li>
            <li>Hololens2</li>
            <li>IGTLink</li>
          </ul>
          {/* <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/github.svg" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/link.svg" alt="External Link" />
            </a>
          </div> */}
        </div>
      </div>

      
    </section>
  );
};

export default Projects;
