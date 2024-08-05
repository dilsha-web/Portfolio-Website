import React, { useState } from "react";
import "./Navbar.css";

import MenuIcon from "@mui/icons-material/Menu";
import MobileNav from "./MobileNav/MobileNav";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <CloseOutlinedIcon
                sx={{
                  fontSize: "1.9rem",
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  fontSize: "1.9rem",
                }}
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
