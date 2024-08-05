import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstName" placeholder="First Name"></input>
          <input type="text" name="lastName" placeholder="Last Name"></input>
        </div>
        <input type="email" name="email" placeholder="Email"></input>
        <textarea type="text" name="message" placeholder="Message"></textarea>

        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
