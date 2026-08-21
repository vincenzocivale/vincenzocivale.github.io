import React, { useState } from 'react';
import './../styles/Experiences.css';

const experiencesData = [
  {
    company: 'University of Siena',
    title: 'PhD Student',
    duration: '09/2025 - Present',
    details: [
      'Researching machine learning methods for biomedical data, with a focus on multimodal representation learning across imaging and omics.',
      'Developing and evaluating models for genomics, single-cell data, and computational pathology.',
      'Working on efficient and reproducible pipelines for biomedical representation learning and model evaluation.',
    ],
  },
  {
    company: 'University of Florence',
    title: 'Research Fellow',
    duration: '09/2023 - 06/2025',
    details: [
      'Developed deep learning pipelines for medical image segmentation, with performance evaluated in collaboration with radiologists.',
      'Conducted research on neurological behavioral differences between digital natives and immigrants as part of a PRIN project.',
      'Contributed to medical image volume visualization and interoperability tools for HoloLens 2.',
    ],
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiencesData[0]);

  return (
    <section id="experiences" className="experiences-section">
      <h2 className="experiences-heading">
        <span className="experiences-number">04.</span> Experience
      </h2>

      <div className="experiences-tab">
        <div className="tab-list" role="tablist" aria-label="Professional experience">
          {experiencesData.map((experience) => (
            <button
              key={experience.company}
              className={`tab-button ${selectedExperience.company === experience.company ? 'active' : ''}`}
              onClick={() => setSelectedExperience(experience)}
              role="tab"
              aria-selected={selectedExperience.company === experience.company}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h3 className="job-title">
            {selectedExperience.title}{' '}
            <span className="company-name">@ {selectedExperience.company}</span>
          </h3>
          <p className="job-duration">{selectedExperience.duration}</p>
          <ul className="job-details">
            {selectedExperience.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
