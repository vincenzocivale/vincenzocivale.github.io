import React from 'react';
import publications from './../data/publicationsData';
import './../styles/Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <h2 className="publications-heading">
        <span className="publications-number">02.</span> Publications
      </h2>

      <div className="publications-list">
        {publications.map((publication) => (
          <article
            className="publication-row"
            key={`${publication.year}-${publication.title}`}
          >
            <div className="publication-year">{publication.year}</div>

            <div className="publication-main">
              <h3 className="publication-title">{publication.title}</h3>

              <p className="publication-authors">
                {publication.authors.map((author, index) => (
                  <React.Fragment key={author.name}>
                    {index > 0 && ', '}
                    <span className={author.self ? 'publication-author-self' : undefined}>
                      {author.name}
                    </span>
                  </React.Fragment>
                ))}
              </p>

              <p className="publication-venue">{publication.venue}</p>
            </div>

            <div className="publication-links" aria-label={`Links for ${publication.title}`}>
              {publication.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="publications-footer">
        <a
          href="https://scholar.google.com/citations?user=a6eFtBoAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Publications;
