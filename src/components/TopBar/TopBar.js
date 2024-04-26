import React from 'react';
import './TopBar.css';
import MailIcon from "@mui/icons-material/Mail";

const TopBar = () => {
  return (
    <section className="RDslide-content">
        <div className="RDrow">
          <div className='Marq'>                      
            <a href="mailto:contact@example.com" class="marquee-email">
              <MailIcon />  dr@jntugv.edu.in
            </a>
          </div>
        </div>
    </section>
  );
};

export default TopBar;
