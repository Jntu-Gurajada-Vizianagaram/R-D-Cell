import { Link, Outlet, useLocation } from "react-router-dom";
import "./Aboutus.css"; 
const AboutusMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="aboutRND"
          className={`menuButton ${
            location.pathname === "/about-us/aboutRND" ? "active" : ""
          }`}
        >
          About R&D Cell
        </Link>
        <Link
          to="VisionMission"
          className={`menuButton ${
            location.pathname === "/about-us/VisionMission" ? "active" : ""
          }`}
        >
          Vision & Mission
        </Link>
        <Link
          to="Researchpolicy"
          className={`menuButton ${
            location.pathname === "/about-us/Researchpolicy" ? "active" : ""
          }`}
        >
          Research Policy
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutusMain;