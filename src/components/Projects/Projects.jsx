import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h5>Projects</h5>

      <div className="projects-container">
        <div className="project-card">
          <div className="project-title">
            <p>Bascic laravel CRUD</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img5.png" />
            <a href="">git@github.com:dilsha-web/laravel_CRUD.git</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <p>Food Website</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img3.png" />
            <a>git@github.com:dilsha-web/Responsive-Food-Website.git</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <p>E-commerce</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img2.png" />
            <a>git@github.com:dilsha-web/E-commerce-website.git</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <p>Portfolio Website</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img1.png" />
            <a>git@github.com:dilsha-web/Portfolio-Website.git</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <p>Student Management</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img4.png" />
            <a>git@github.com:dilsha-web/student_management.git</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">
            <p>E-ticketing System</p>
          </div>
          <div className="project-link">
            <img className="project-image" src="./images/img5.png" />
            <a>git@github.com:dilsha-web/laravel_CRUD.git</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
