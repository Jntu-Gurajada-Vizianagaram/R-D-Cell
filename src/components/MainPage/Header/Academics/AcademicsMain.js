import { Link, Outlet, useLocation } from "react-router-dom";
import './Academics.css'

const AcademicsMain = () => {
  const location = useLocation();

  return (
    <div className="Academicmain-Main">
      <div className="allLeftMenuAOP">
        <Link
          to="academic-regulations"
          className={`menubutton ${
            location.pathname === "/academics/academic-regulations" ? "active" : ""
          }`}
        >
          Academic Regulations
        </Link>
        <Link
          to="codeofconduct"
          className={`menubutton ${
            location.pathname === "/academics/codeofconduct" ? "active" : ""
          }`}
        >
          Code of Conduct
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicsMain;
