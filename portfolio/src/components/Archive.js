import React, { useState, useEffect } from 'react';
import projectsData from '../data/projectsData'; // Import project data
import './../styles/Archive.css';

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extract all unique tags from projectsData
    const tags = new Set();
    projectsData.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    setAllTags(Array.from(tags));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTagClick = (tag) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag) // Remove tag if already selected
        : [...prevTags, tag] // Add tag if not selected
    );
  };

  const handleCardClick = (project) => {
    let targetLink = '';
    if (project.detailLink) {
      targetLink = project.detailLink;
    } else if (project.paperLink) {
      targetLink = project.paperLink;
    } else if (project.repoLink) { // Fallback to repoLink if no paper or detail link
      targetLink = project.repoLink;
    }

    if (targetLink) {
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.every(tag => project.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="archive-page">
      <div className="content-wrapper">
        <h1 className="archive-title">All Projects</h1>
        <p className="archive-description">A comprehensive archive of all my work, categorized for easy browsing.</p>

        <div className="archive-filters">
          <input
            type="text"
            placeholder="Search projects..."
            className="search-bar"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="tag-filters">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div 
                className="archive-project-card" 
                key={project.id} 
                onClick={() => handleCardClick(project)}
                style={{ cursor: (project.detailLink || project.paperLink || project.repoLink) ? 'pointer' : 'default' }}
              >
                <h3 className="archive-project-title">{project.title}</h3>
                <p className="archive-project-meta">
                  {project.tags.map((tag, index) => (
                    <span key={tag}>{tag}{index < project.tags.length - 1 ? ', ' : ''}</span>
                  ))}
                </p>
                <p className="archive-project-summary">{project.description}</p>
                {/* No explicit links rendered here, entire card is clickable */}
              </div>
            ))
          ) : (
            <p className="no-results">No projects found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;