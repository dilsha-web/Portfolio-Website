import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>

      <ul>
        <li>{details.responsibilities} </li>
      </ul>
    </div>
  );
};

export default ExperienceCard;
