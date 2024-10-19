import React from "react";
import "./Hero.css";

const techIcons = [
  { src: "./images/img1.png", alt: "HTML logo" },
  { src: "./images/img2.png", alt: "CSS logo" },
  { src: "./images/img3.png", alt: "JavaScript logo" },
  { src: "./images/img4.png", alt: "React logo" },
  { src: "./images/img5.png", alt: "Node.js logo" },
  { src: "./images/img6.png", alt: "Database logo" },
];

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <header className="hero-content">
        <h2>"I'm Dilsha Rameshi Wijesinghe"</h2>
        <p>
          Passionate Web Developer | Intern full stack developer | Undergraduate
          at Faculty of Technology, South Eastern University of Sri Lanka.
        </p>
      </header>

      <div className="hero-images-container">
        <div className="profile-image">
          <img
            src="./images/profile.png"
            alt="Profile of Dilsha"
            loading="lazy"
          />
        </div>

        <div className="tech-icons">
          {techIcons.map((icon, index) => (
            <div className="tech-icon" key={index}>
              <img src={icon.src} alt={icon.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
