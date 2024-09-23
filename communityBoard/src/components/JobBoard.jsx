import React from "react";
import Job from "./Job"; // Import the Job component

const JobBoard = () => {
  return (
    <div className="JobBoard">
      <h2>Available Job Openings</h2>
      <div className="job-list">
        {/* Render Job components for each job */}
        <Job
          title="Frontend Developer"
          company="Tech Corp"
          location="Remote"
          type="Full-time"
        />
        <Job
          title="Backend Developer"
          company="Code Masters"
          location="New York"
          type="Part-time"
        />
        <Job
          title="UI/UX Designer"
          company="Design Studio"
          location="San Francisco"
          type="Contract"
        />
        <Job
          title="Data Scientist"
          company="DataX"
          location="Boston"
          type="Full-time"
        />
        {/* Add more jobs here */}
      </div>
    </div>
  );
};

export default JobBoard;
