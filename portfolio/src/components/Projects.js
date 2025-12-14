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
          <img src="/assets/images/cell_classification_cover.png" alt="A screenshot of Single Cell Classification Tool" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">Single Cell Annotation Tool</h3>
          <p className="project-description">
            An automated single-cell annotation tool designed to identify and classify cell populations from high-dimensional datasets. By decoding biological heterogeneity, the system simplifies data interpretation, allowing researchers to swiftly identify latent patterns and distinct cellular phenotypes.
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
          <img src="/assets/images/igtlink_cover.png" alt="Cover image Plugin" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">AR Medical Imaging Plugin</h3>
          <p className="project-description">
            A custom Unity plugin designed for real-time medical interoperability. It uses the OpenIGTLink protocol to establish a seamless bridge between surgical planning software and AR environments, enabling the low-latency streaming and visualisation of complex 3D volumes.
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

      <div className="project-card">
        <div className="project-image-container">
          <img src="/assets/images/histological_image_pruning_cover.png" alt="Cover image" className="project-image" />
        </div>
        <div className="project-content">
          <p className="project-label">Featured Project</p>
          <h3 className="project-title">HistoFocus</h3>
          <p className="project-description">
            An optimised Vision Transformer (ViT) framework for histopathological tumour diagnosis, which uses Upper Confidence Bound (UCB) scores to dynamically prune redundant tokens. This approach accelerates cancer detection workflows by 5x while maintaining state-of-the-art accuracy
          </p>
          <ul className="project-tech-list">
            <li>Pytorch</li>
            <li>Transformers</li>
            <li>Reinforcement Learning</li>
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
