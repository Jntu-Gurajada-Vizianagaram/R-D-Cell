import React from "react";
import "./App.css";
 
import RDImageGallery from "./components/RDImageGallery/RDImageGallery";
import AboutRandD from "./components/AboutR&D/AboutRandD";
import RDVisionMission from "./components/R&DVisionMission/RDVisionMission"
import RDAdministration from "./components/R&DAdministration/RDAdministration"
import Footer from "./components/MainPage/Footer/Footer";

function RDHomepage() {
  return (
    <div>
      <RDImageGallery />
      <AboutRandD />   
      <RDVisionMission />
      <RDAdministration />
      <br />
      <Footer />
    </div>
  );
}

export default RDHomepage;
