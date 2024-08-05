import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./images/logo.png" className="logo" alt="" />
          <ul>
            <li>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/experience" className="menu-item">
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
