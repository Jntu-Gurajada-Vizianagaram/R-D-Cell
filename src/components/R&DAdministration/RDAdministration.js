import React, {useState} from "react";
import "./RDAdministration.css";
const RDAdministration = () => {
    const [showAboutUs, setShowAboutUs] = useState(false);

  const handleKnowMoreClick = () => {
    setShowAboutUs(!showAboutUs);
  };

    return (
        <div className="RD-Admin">
            <div className="RD-text"><h4>ADMINISTRATION</h4>
            </div>
            <div>
            <div className="RD-row">
                <div className="RD-Chancellor">
                    <img src="https://jntugv.edu.in/static/media/chancellor.2ed91f57067384cddd59.jpeg" alt="Image1" className="RD-img" />
                    <div className="RD-data">
                    <p className="RD-name">Shri Justice(Retd.) S. Abdul Nazeer </p>
                    <p className="RD-designation">Hon'ble Chancelor</p>
                    <button onClick={handleKnowMoreClick} className="more-info">
                <a href="/administration/chancellor" className="RDbutton">
                    <h6>More Info
                </h6>
                </a>
                </button>    
                </div>
                </div>
                <div className="RD-ViceChancellor">
                <img src="https://jntugv.edu.in/static/media/vc.7d966e8f318af509ad8e.png" alt="Image2" className="RD-img" /> 
                <div className="RD-data">
                <p className="RD-name">Prof. K. Venkatasubbaiah </p>
                <p className="RD-designation">Hon'ble Vice Chancelor</p>
                <button onClick={handleKnowMoreClick} className="more-info">
                <a href="/administration/vice-chancellor" className="RDbutton">
                    <h6>More Info
                </h6>
                </a>
                </button>
                </div>
                </div>
                <div className="RD-Registrar">
                <img src="https://jntugv.edu.in/static/media/registrar.25e0843f00d08ee20077.jpeg" alt="Image2" className="RD-img"  /> 
                <div className="RD-data">
                <p className="RD-name">Prof. G. Jaya Suma </p>
                <p className="RD-designation">Registrar</p> 
                <button onClick={handleKnowMoreClick} className="more-info">
                <a href="/administration/registrar" className="RDbutton">
                    <h6>More Info
                </h6>
                </a>
                </button>
                </div>
                </div>
                </div>
                <div className="RD-row1">
                <div className="RD-Director">
                <img src="http://localhost:3000/static/media/da.f3afa046b9ee84a0df12.jpg" alt="Image2" className="RD-img"  /> 
                <div className="RD-data">
                <p className="RD-name">Dr. K. Babulu </p>
                <p className="RD-designation">Director of Research & Development</p> 
                <button onClick={handleKnowMoreClick} className="more-info">
                <a href="/administration/Director" className="RDbutton">
                    <h6>More Info
                </h6>
                </a>
                </button>
                </div>
                </div>
                <div className="RD-coordinator">
                <img src="https://jntugvcev.edu.in/wp-content/uploads/2020/08/9-M-HEMA-JNTUK-UCEV.jpg" alt="Image2" className="RD-img"  /> 
                <div className="RD-data">
                <p className="RD-name">Dr. M. Hema </p>
                <p className="RD-designation">Co-ordinator of Research & Development</p> 
                <button onClick={handleKnowMoreClick} className="more-info">
                <a href="/administration/coordinator" className="RDbutton">
                    <h6>More Info
                </h6>
                </a>
                </button>
                </div>
                </div>
                </div>
                
                </div>
                </div>
    );
}

export default RDAdministration;