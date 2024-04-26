// ShowAll.js

import React from 'react';
import './ShowAll.css';
//import Image from "../../assets/R&D/Image.png";
//import pic from "../../assets/R&D/pic.png";
//import pic1 from "../../assets/R&D/pic1.png";

const ShowAll = () => {
  // List of all images (adjust these URLs based on your images)
  const allImages = [
    process.env.PUBLIC_URL + "/R&D/Image.png",
    process.env.PUBLIC_URL + "/R&D/pic.png",
    process.env.PUBLIC_URL + "/R&D/pic1.png",
    // Add more image URLs as needed
  ];

  console.log('Rendering ShowAll component');
  console.log('allImages:', allImages);

  return (
    <div className="show-all-container">
      <h1>Show All Images</h1>
      <div className="all-images">
        {allImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
