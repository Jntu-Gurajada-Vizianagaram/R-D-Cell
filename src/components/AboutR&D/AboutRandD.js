import React from "react";
import './AboutRandD.css';
import { useState } from 'react';

const AboutRandD = () => {
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleKnowMoreClick = () => {
    setShowAboutUs(!showAboutUs);
  };
  return (
    <div className="About-rnd">
        <div className="RD-Content">
            <div className="RDtext-content">
          <div className="RD-imageContainer">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.dDIMxEvxbrLRaygJDaEsTwHaEc&pid=Api&P=0&h=180"
              alt="JNTUGV Logo"
              className="RDimage-Left" />
          </div>
          <h4 className="RD-heading"><b>Welcome To
                <br />
                RESEARCH AND DEVELOPMENT CELL</b>
                </h4>
          <div className="RDtext-Container"> 
                <h5>
              Jawaharlal Nehru Technological University Gurajada, Vizianagaram (JNTU-GV) is focusing on research programmes 
              on need-based technology and solutions for societal problems. Accordingly, an independent Research
               and Development Cell was established in the year 2022 to promote and monitor the research programmes
                offered inthe University. The administers Ph.D. programme in external and full- time modes.
              </h5>
              <br />
              <button onClick={handleKnowMoreClick} className="RD-button1">
                <a href="/about-us/aboutRND" className="RD-button">
                    <h6>Know More
                </h6>
                </a>
                </button>         
          </div>
          </div>
        </div>
      </div>
  );
}


export default AboutRandD;
