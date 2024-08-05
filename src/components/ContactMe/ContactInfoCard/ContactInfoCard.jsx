import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconurl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconurl} alt="{text}"></img>
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
