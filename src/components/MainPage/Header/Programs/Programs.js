import { Link, Outlet, useLocation } from "react-router-dom";
// import "./Aboutus.css"; 
const Programs = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="programs-offered"
          className={`menuButton ${
            location.pathname === "/programs/programs-offered" ? "active" : ""
          }`}
        >
          Programs Offered
        </Link>
       
      </div>
      <Outlet />
    </div>
  );
};

export default Programs;