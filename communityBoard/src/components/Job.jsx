import React from "react";

// Job component to display job information in a card
const Job = ({ title, company, location, type }) => {
  return (
    <div className="job-card">
      <h3>{title}</h3>
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
