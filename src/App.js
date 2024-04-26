import React from "react";
import "./App.css";
import RDHomepage from "./RDHomepage";
import TopBar from "./components/TopBar/TopBar";
import AboutRND from "./components/MainPage/Header/Aboutus/AboutRND/AboutRND";
import VisionMission from "./components/MainPage/Header/Aboutus/VisionMission/VisionMission";
import Researchpolicy from "./components/MainPage/Header/Aboutus/Researchpolicy/Researchpolicy";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor/Chancellor";
import ViceChancellor from "./components/MainPage/Header/Administration/ViceChancellor/ViceChancellor";
import Registrar from "./components/MainPage/Header/Administration/Registrar/Registrar";
import Director from "./components/MainPage/Header/Administration/Director/Director";
import BOSList from "./components/MainPage/Header/Administration/BOSList/BOSList";
import HODList from "./components/MainPage/Header/Administration/HODList/HODList";

import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/MainPage/Header/Contact-Us/ContactUs";
import AboutusMain from "./components/MainPage/Header/Aboutus/AboutusMain";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";
import AdministrationMain from "./components/MainPage/Header/Administration/AdministrationMain";
import Grievance from "./components/GrievanceForm/GrievanceForm";
import Chairpersons from "./components/MainPage/Header/Administration/Chairpersons/Chairpersons";
import Programs from "./components/MainPage/Header/Programs/Programs";
import Programsoffered from "./components/MainPage/Header/Programs/Programsoffered/Programsoffered";
import CodeofConduct from "./components/MainPage/Header/Academics/CodeofConduct/CodeofConduct";
import CompleteGallery from "./components/Gallery/CompleteGallery";
import AcademicRegulations from "./components/MainPage/Header/Academics/AcademicRegulations/AcademicRegulations";
import RDHeader from "./components/MainPage/Header/RDHeader";
import Coordinator from "./components/MainPage/Header/Administration/Coordinator/Coordinator";




function App() {
  return (
    <div>
      <TopBar />
      <RDHeader />
      <Routes>
        <Route path="/" element={<RDHomepage />} />   
        
        <Route path="/about-us" element={<AboutusMain />}>
          <Route path="AboutRND" element={<AboutRND />} />
          <Route path="VisionMission" element={<VisionMission />} />
          <Route path="Researchpolicy" element={<Researchpolicy />} />
        </Route>
        <Route path="/academics" element={<AcademicsMain />}>
          <Route path="academic-regulations" element={<AcademicRegulations />} />
          <Route path="codeofconduct" element={<CodeofConduct />} />
        </Route>
        <Route path="/administration" element={<AdministrationMain />}>
          <Route path="chancellor" element={<Chancellor />} />{" "}
          <Route path="vice-chancellor" element={<ViceChancellor />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="Director" element={<Director />} />
          <Route path="coordinator" element={<Coordinator />} />
          <Route path="BOSList" element={<BOSList />} />
          <Route path="HODList" element={<HODList />} />
          <Route path="chairpersons" element={<Chairpersons />} />

        </Route>      
        <Route path="/programs" element={<Programs />}>
          <Route path="programs-offered" element={<Programsoffered />} />
          
        </Route>
          <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/grievance-form" element={<Grievance />} />
        <Route path="/gallery" element={<CompleteGallery />} />

      </Routes>
    </div>
  );
}

export default App;
