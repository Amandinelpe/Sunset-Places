import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";
import DataCarousel from "../utils/DataCarousel";

function Slider() {
  return (
    <Carousel className="custom-carousel">
      {DataCarousel.map((slide) => (
        <img key={slide.id} src={slide.image} alt="" />
      ))}
    </Carousel>
  );
}

export default Slider;
