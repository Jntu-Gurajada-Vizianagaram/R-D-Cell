import React from "react";
import Typography from "@mui/material/Typography";
import "../Aboutus.css";

function AboutRandDCell() {
  return (
    <div className="ABOUTmainContainer">
      {/* Blue box with organization structure heading */}
      <div className="AboutusBox">
        <h4 style={{ fontWeight: "bold" }}>
          ABOUT R&D CELL
        </h4>
      </div>
      <div className="allRightContent">
        <div className="allRightContentProfile">
          <div className="imageContainer">
            <img src="https://globalsmtasia.com/wp-content/uploads/2017/05/China-XD-sees-global-RD-as-key-to-diversifying.png"
              alt="JNTUGV Logo" 
              className="imageMiddle"
              style={{  maxWidth: "300px", margin: "0 20px 20px 0"}}
            />
          </div>
          <div className="textContainer">
            <Typography>
            Jawaharlal Nehru Technological University-Gurajada Vizianagaram (JNTU-GV) is focusing on research programmes on need-based technology and solutions for societal problems. Accordingly, an independent Research and Development Cell was established in the year 2005 to promote and monitor the research programmes offered in the University. The R & D Cell administers Ph.D. programme in external and full-time modes.
            </Typography>
            <br />
            <Typography>
              Research and Development Cell coordinates with the Directorate of Admissions for selection and admission of research scholars, and also interacts with Director of Evaluation for evaluation of Thesis. Further, R&D Cell interacts with the Constituent Units of University for academic activities of research and also with Directorate of University Foreign Relations (DUFR) for the admission of foreign national students. R&D Cell conducts Research Review Meetings (RRMs) once in every six months to evaluate and monitor the research work progress of the scholars. R&D Cell conducts viva-voce examinations for the award of the Ph.D. degree in the Faculties of Engineering, Science & Technology, Pharmacy, Management, Humanities and Social Sciences.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutRandDCell;
