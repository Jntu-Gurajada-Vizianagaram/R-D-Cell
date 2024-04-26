import React from "react";
import "./RDVisionMission.css";
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
const RDVisionMission = () => {
    return (
        <div className="RD-main">
        <div className="RD-container">
            <div className="RD-vision">
                <h5> <FaEye /> Vision</h5>
                <li>To provide a sturdy platform to amplify value and versatile research aligned with the provisions of NEP-2022</li>
            </div>
            <div className="RD-mission">
                <h5> <FaBullseye /> Mission</h5>
                <li>To create healthy environment for enhanced research potency</li>
                    <li>To promote synergetic research</li>
            </div>
        </div>
        </div>
    );
}

export default RDVisionMission;