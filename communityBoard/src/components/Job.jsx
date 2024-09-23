import React from "react";

// Job component to display job information in a card
const Job = ({ title, company, location, type, image, link }) => {
  return (
    <div className="job-card">
      <img src={image} alt={title} className="job-image" />
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
    </div>
  );
};

export default Job;
