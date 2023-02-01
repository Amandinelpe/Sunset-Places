import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import DataCarousel from "../utils/DataCarousel";

function Slider() {
  return (
    <Carousel className="carousel">
      {DataCarousel.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
