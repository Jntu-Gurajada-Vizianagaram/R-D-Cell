import React from "react";
import "./ContactUs.css";

import { Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <div className="contact-page">
      <h2>Contact Details:</h2>
      {/* College Section */}
      <div className="Contact-details">
        <Paper elevation={4} className="member">

        

    <div>
      <img 
        src="http://localhost:3000/static/media/da.f3afa046b9ee84a0df12.jpg" alt="Image2"
        
        style={{ maxWidth: '10%', height: 'auto' }}
      />
    </div>

        <Typography variant="h6" >
        <strong>Dr. K. BABULU</strong>
          </Typography>
          <Typography variant="h6" >
            Director of Research & Development
          </Typography>
          <Typography variant="h6">
            JNTU-GV, Vizianagaram
          </Typography>
          <Typography variant="h6">
            Email: dr@jntugv.edu.in
          </Typography>
        </Paper>
        
      </div>
    </div>
  );
}

export default ContactUs;