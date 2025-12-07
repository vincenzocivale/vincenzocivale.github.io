import React, { useState } from 'react';
import './../styles/Experiences.css';

// Dati fittizi delle esperienze
const experiencesData = [
  {
    company: 'University of Siena',
    title: 'PhD Student',
    duration: '09/2025 - Present',
    details: [
      'Detail about your role and responsibilities. What did you do here?',
      'Highlight a key achievement or project you worked on.',
      'Mention technologies or skills you used in this role (e.g., Python, ML pipelines, etc.).',
    ],
  },
  {
    company: 'BioImaging Lab',
    title: 'Research Fellow',
    duration: '09/2023 - 06/2025',
    details: [
      'Detail about your role and responsibilities for this second job.',
      'A different key achievement or project you worked on.',
      'Mention technologies or skills used in this new role.',
    ],
  },
  // Duplica questo blocco per ogni tua esperienza
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiencesData[0]);

  return (
    <section id="experiences" className="experiences-section">
      <h2 className="experiences-heading">
        <span className="experiences-number">03.</span> Experience
      </h2>

      <div className="experiences-tab">
        {/* Tab sinistro (elenco aziende) */}
        <div className="tab-list">
          {experiencesData.map((experience, index) => (
            <button
              key={index}
              className={`tab-button ${selectedExperience.company === experience.company ? 'active' : ''}`}
              onClick={() => setSelectedExperience(experience)}
            >
              {experience.company}
            </button>
          ))}
        </div>

        {/* Tab destro (dettagli dell'esperienza) */}
        <div className="tab-content">
          <h3 className="job-title">{selectedExperience.title} <span className="company-name">@ {selectedExperience.company}</span></h3>
          <p className="job-duration">{selectedExperience.duration}</p>
          <ul className="job-details">
            {selectedExperience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiences;