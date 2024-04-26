 import myImage from "./jntugvcev.jpg";
import ss from "./JntuGvUnit/SS.png";
import "./RDHeader.css";
import { Link, useNavigate } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import DraftsIcon from "@mui/icons-material/Drafts";
const RDHeader = () => {
    const navigate = useNavigate();

    const [menuState, setMenuState] = useState(false);
  
    const homeHandler = () => {
      navigate("/");
    };
    const contactHandler = () => {
        navigate("/contact-us");
      };
  return (
    <div className="nav-bar">
      <div >
        <div className="container1" >
          <img src={myImage} alt="JNTUV_LOGO" className="logo" style={{marginLeft:0,paddingLeft:0,heigth:110,width:100}} />
          <img src={ss} alt="JNTUV_LOGO1" className="name" style={{width:500,marginLeft:0}}/>
           
    <nav className="top-nav">
      
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        <div class="dropdown">
          <div class="dropbtn" onClick={homeHandler}>
            <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
              <h6><HomeIcon /> HOME</h6>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <h6><ApartmentIcon /> ABOUT US</h6>
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-us/aboutRND">
                About R&D Cell
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/VisionMission">
                Vision & Mission
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/Researchpolicy">
                Research Policy
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
           <h6> <GroupsIcon /> ADMINISTRATION</h6>
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/chancellor"
                target="_self"
              >
                Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/vice-chancellor"
                target="_self"
              >
                Vice Chancellor
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/registrar"
                target="_self"
              >
                Registrar
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/Director"
                target="_self"
              >
                Director
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/coordinator"
                target="_self"
              >
                Co-ordinator
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/BOSList"
                target="_self"
              >
                List of BOS's
              </Link>
            </button>
            <button>
              {" "}
              <Link
                className="link-btn"
                to="/administration/HODList"
                target="_self"
              >
                List of HOD's
              </Link>
            </button>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <h6><SchoolIcon /> PROGRAMS</h6>
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >
            <button>
              {" "}
              <Link className="link-btn" to="/programs/programs-offered">
                {" "}
                Programs Offered (Ph.D)
              </Link>
            </button>
            
          </div>
        </div>
        <div class="dropdown">
          <div class="dropbtn">
            <h6><SchoolIcon /> ACADEMICS</h6>
          </div>
          <div
            class="dropdown-content"
            onClick={() => setMenuState(!menuState)}
          >

            <button>
              {" "}
              <Link className="link-btn" to="/academics/academic-regulations">
                {" "}
                Academic Regulations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/academics/codeofconduct">
                {" "}
                Code of Conduct
              </Link>
            </button>
          </div>
        </div>
        {/* <div class="dropdown">
        <div className="dropbtn" onClick={contactHandler}>
          <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
            <h6> NOTIFICATIONS</h6>
          </div>
        </div>
      </div> */}
      <div class="dropdown">
        <div className="dropbtn" onClick={contactHandler}>
          <div className="drop-icon" onClick={() => setMenuState(!menuState)}>
            <h6> <DraftsIcon /> CONTACT US</h6>
          </div>
        </div>
      </div>
      
      </div>
    </nav>
    </div>
    </div>
  </div> 
        );
};
export default RDHeader;
