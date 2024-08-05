import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>"I'm Dilsha Rameshi Wijesinghe"</h2>
        <p>
          Passionate Web Developer | Intern full stack developer | Undergraduate
          at Faculty of Technology, South Eastern University of Sri Lanka.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./images/img1.png" alt=""></img>
          </div>

          <img src="./images/profile.png" alt=""></img>
        </div>
        <div>
          <div className="tech-icon">
            <img src="./images/img2.png" alt=""></img>
          </div>

          <div className="tech-icon">
            <img src="./images/img3.png" alt=""></img>
          </div>

          <div className="tech-icon">
            <img src="./images/img4.png" alt=""></img>
          </div>
          <div className="tech-icon">
            <img src="./images/img5.jpg" alt=""></img>
          </div>
          <div className="tech-icon">
            <img src="./images/img6.png" alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
