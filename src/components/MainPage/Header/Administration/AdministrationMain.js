import { Link, Outlet, useLocation } from "react-router-dom";
import "./AdminandDirectorates.css"
const AdministrationMain = () => {
  const location = useLocation();

  return (
    <div className="AD-Main">
      <div className="ADallLeftMenu">
         {/* Navigation links for Chancellor, Vice Chancellor, and Registrar */}
         <Link
          to="chancellor"
          className={`menuButton ${
            location.pathname === "/administration/chancellor" ? "active" : ""
          }`}
        >
          Chancellor
        </Link>
        <Link
          to="vice-chancellor"
          className={`menuButton ${
            location.pathname === "/administration/vice-chancellor" ? "active" : ""
          }`}
        >
          Vice Chancellor
        </Link>
        <Link
          to="registrar"
          className={`menuButton ${
            location.pathname === "/administration/registrar" ? "active" : ""
          }`}
        >
          Registrar
        </Link>
        <Link
          to="Director"
          className={`menuButton ${
            location.pathname === "/administration/Director" ? "active" : ""
          }`}
        >
          Director
        </Link>
        <Link
          to="coordinator"
          className={`menuButton ${
            location.pathname === "/administration/coordinator" ? "active" : ""
          }`}
        >
          Co-ordinator
        </Link>
        <Link
          to="BOSList"
          className={`menuButton ${
            location.pathname === "/administration/BOSList" ? "active" : ""
          }`}
        >
          List of BOS's
        </Link>
        <Link
          to="HODList"
          className={`menuButton ${
            location.pathname === "/administration/HODList" ? "active" : ""
          }`}
        >
          List of HOD's
        </Link>
        {/* <Link
          to="chairpersons"
          className={`menuButton ${
            location.pathname === "/administration/chairpersons" ? "active" : ""
          }`}
        >
          Chairpersons
        </Link> */}
      </div>
      <Outlet />
    </div>
  );
};

export default AdministrationMain;