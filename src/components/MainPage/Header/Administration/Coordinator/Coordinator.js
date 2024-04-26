import React from "react";
import coordinator from "../../../../../assets/AdminDirectoratesImages/coordinator.jpg";
import "../AdminandDirectorates.css"; // Import your CSS file here

function Coordinator() {
  return (
    <div className="ADmainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Co-ordinator</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
            <div className="ADimg">
              <img src={coordinator} alt="Profile" />
            </div>
            <div className="profileName">
              <h3 className="ADh3">Dr. M. Hema</h3>
              <h3 className="ADh3">Co-ordinator of Research & Development</h3>
            </div>
            <div className="profileDesignation">
              <h4 className="ADh4">
              Assistant Professor of Dept. of Electronics and Communications Engineering
              </h4>
            </div>
          </center>
          <hr />
          {/* Profile description */}
          <p>Email: dr@jntugv.edu.in</p>
          <hr></hr>
          
          <p className="ADsub">Educational Qualifications:</p>
          <p>❖ AMIE 1998 to 2002 Electronics and Communication Engineering (ECE).</p>
          <p>❖ Master of Technology 2007 to 2009 Digital Systems and Computer Electronics,Jawaharlal Nehru Technological University Anantapur.</p>
          <p>❖ Doctor of Philosophy (PhD)-2021 Signal Processing and Embedded Systems,Jawaharlal Nehru Technological University Kakinada.</p>
        </div>
      </div>
      </div>
  );
}

export default Coordinator;
