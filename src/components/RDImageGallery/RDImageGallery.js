import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RDImageGallery.css";
import RD from "../../assets/R&D/RD.png";
import RD1 from "../../assets/R&D/RD1.png";
//import RD2 from "../../assets/R&D/RD2.png";

const images = [
  RD,
  RD1,
];

function RDImageGallery() {
  return (
    <div className="mianDivIG">
      <div className="mainImageGallery">
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="image" src={image} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <div className="carouselText">
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default RDImageGallery;
