import React from "react";

const Job = ({ title, company, location, type }) => {
  return (
    <div className="Job">
      {/* Display job details */}
      <h3>{title}</h3>
      <p>Company: {company}</p>
      <p>Location: {location}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default Job;
