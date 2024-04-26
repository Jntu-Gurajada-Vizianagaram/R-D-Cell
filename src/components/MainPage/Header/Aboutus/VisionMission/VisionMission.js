import React from "react";
import Typography from "@mui/material/Typography";

function VisionMission() {  
  return (
    <div className="ABOUTmainContainer">
      <div className="allRightContent">
        <div className="textContainer">
          <h4 style={{ fontWeight: "bold" }}>
            Vision
          </h4>
          <li>To provide a sturdy platform to amplify value and versatile research aligned with the provisions of NEP-2020.
          </li>
          <br />
          <h4 style={{ fontWeight: "bold" }}>
            Mission
          </h4>
          <Typography>
              <ul>
                <li>To create a healthy environment for enhanced research potency.</li>
                <li>To promote synergetic research.</li>
                <li>To support startup and entrepreneurship ventures through Centre for Innovation and Incubation.</li>
              </ul>
            </Typography>
          
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
