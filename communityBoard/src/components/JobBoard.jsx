import React from "react";
import Job from "./Job";

const JobBoard = () => {
  return (
    <div className="JobBoard">
      <h2>Available Job Openings</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Manually create rows and pass multiple props */}
          <tr>
            <td>
              <Job
                title="Frontend Developer"
                company="Tech Corp"
                location="Remote"
                type="Full-time"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Job
                title="Backend Developer"
                company="Code Masters"
                location="New York"
                type="Part-time"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Job
                title="UI/UX Designer"
                company="Design Studio"
                location="San Francisco"
                type="Contract"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Job
                title="Data Scientist"
                company="DataX"
                location="Boston"
                type="Full-time"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobBoard;
