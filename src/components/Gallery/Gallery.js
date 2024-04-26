import React from 'react';
import './Gallery.css';
import RD from "../../assets/R&D/RD.png";
import RD1 from "../../assets/R&D/RD1.png";
import RD2 from "../../assets/R&D/RD2.png";

const Gallery = () => {
 
  const images = [
    RD,
    RD1,
    RD2,
    // Add more image URLs as needed
  ];


  return (
    <div className="gallery-container">
      <h1>GALLERY</h1>
      <div className={`image-scroll`}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${index + 1}`} />
        ))}
      </div>
      
    </div>
  );
};

export default Gallery;
