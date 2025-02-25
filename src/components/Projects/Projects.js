import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects_parent_div">
      <h2>Proects</h2>

      <p>
        We have successfully completed numerous projects, collaborating with
        both private and government entities. Our past clients include:
      </p>
      <ul>
        <li>
          MRT Lane 5, Hemayetpur, Savar, Dhaka by Earthmoving Solution Limited,
          Spectra Limited - Earth filling by dredging. (Project Ongoing)
        </li>
        <li>
          ATI Institute at Adarshanagar, Mohonganj, Netrokona by UCCL - Earth
          filling. (Project Ongoing)
        </li>
        <li>
          Kawla to Banani Bangladesh Railway Project by AFCONS-KPTL JV - Sand
          Filling
        </li>
      </ul>
      {/* <p>Ongoing & Completed Projects</p>
      <p>Client List & Testimonials</p>
      <p> Work Orders (Active & In-Progress)</p>
      <p> Corporate Social Responsibility</p>
      <p> Environmental responsibility</p>
      <p> Community contributions</p> */}
    </div>
  );
};

export default Projects;
