import React, { useState, useRef, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });
    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  const { animation, image, title, description, projectDetails, repoUrl, url } = project;
  const { keyFeatures, technologies } = projectDetails;

  return (
    <div className={`project-card ${animation} ${isVisible ? 'visible' : ''}`} ref={cardRef}>
      {/* Company Image */}
      <img src={image} alt={title} />
      {/* Company Name */}
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {keyFeatures.map((keyFeature, index) => (
          <li key={index}>{keyFeature}</li>
        ))}
      </ul>
      <h4>Technologies Used</h4>
      <ul>
        <li><strong>Front-End:</strong> {technologies.frontEnd.join(', ')}</li>
        <li><strong>Back-End:</strong> {technologies.backEnd.join(', ')}</li>
        <li><strong>CI/CD:</strong> {technologies.ciCD.join(', ')}</li>
        <li><strong>SaaS:</strong> {technologies.saas.join(', ')}</li>
      </ul>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">Code Repository</a>
      <a href={url} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
};

export default ProjectCard;
