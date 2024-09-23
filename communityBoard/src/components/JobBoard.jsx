import React from "react";
import Job from "./Job"; // Import the Job component

import logo1 from "../images/DuoLingo.png";
import logo2 from "../images/Nvidia.png";
import logo3 from "../images/Pinterest.png";
import logo4 from "../images/SimpleStore.png";
import logo5 from "../images/Splunk.png";
import logo6 from "../images/Visa.png";
import logo7 from "../images/Chime.png";
import logo8 from "../images/Salesforce.png";

const JobBoard = () => {
  return (
    <div className="JobBoard">
      <h2>Available Job Openings</h2>
      <div className="job-list">
        {/* Render Job components for each job */}
        <Job
          title="Associate Product Manager"
          company="Duolingo"
          location="Pittsburgh, PA"
          type="Internship"
          image={logo1}
          link="https://simplify.jobs/p/f2ba688c-a519-4084-af71-f04690289654/Associate-Product-Manager--Intern"
        />
        <Job
          title="Software Engineering Intern"
          company="NVIDIA"
          location="Remote"
          type="Internship"
          image={logo2}
          link="https://simplify.jobs/p/b9b4e75e-9aa8-4526-aac7-15efa7ae7c97/NVIDIA-2025-Internships-Software-Engineering"
        />
        <Job
          title="Software Engineering Intern"
          company="Pinterest"
          location="Remote"
          type="Internship"
          image={logo3}
          link="https://simplify.jobs/p/331c43ba-bc0e-462e-a6e1-1d492a4fc36c/Software-Engineering-Intern-2025"
        />
        <Job
          title="DB Engine Intern"
          company="SingleStore"
          location="Seattle, WA"
          type="Internship"
          image={logo4}
          link="https://simplify.jobs/p/ffd9baf1-9c2e-4e5e-b9e3-dc99837c02dd/Software-Engineer--DB-Engine-Intern"
        />
        <Job
          title="Software Engineer Intern"
          company="Splunk"
          location="Remote"
          type="Internship"
          image={logo5}
          link="https://simplify.jobs/p/d5a5310b-26e4-4ebc-94ba-e2993a74b066/Software-Engineer-Intern"
        />
        <Job
          title="Software Engineer Intern"
          company="Visa"
          location="Atlanta, GA"
          type="Internship"
          image={logo6}
          link="https://simplify.jobs/p/b6989823-e07a-43f3-9929-68dc5f78d100/Software-Engineer-Intern"
        />
        <Job
          title="Security Operations Engineer"
          company="Chime"
          location="United States"
          type="Full-time"
          image={logo7}
          link="https://simplify.jobs/p/3580f915-abb2-454e-98e6-0f8bf19addce/Security-Operations-Engineer"
        />
        <Job
          title="Systems Engineer Intern"
          company="Salesforce"
          location="Cambridge, MA"
          type="Internship"
          image={logo8}
          link="https://simplify.jobs/p/5debd07e-1734-459b-b9f1-d45f840f95d2/Summer-2025-Intern"
        />
        {/* Add more jobs here */}
      </div>
    </div>
  );
};

export default JobBoard;
