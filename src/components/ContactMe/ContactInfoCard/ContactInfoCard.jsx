import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconurl, email, linkedin }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconurl} alt="{text}"></img>
      </div>

      <a href="mailto:rameshi.wijesinghe@gmail.com">{email}</a>
      <a href="{linkedin}" target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
};

export default ContactInfoCard;
