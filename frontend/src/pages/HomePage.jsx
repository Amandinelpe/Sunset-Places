import React from "react";
import Carousel from "../components/Carousel";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home_page">
      <div className="title">
        <h1>Welcome to the Sunset Places</h1>
      </div>
      <div className="content">
        <Carousel />
      </div>
    </div>
  );
}

export default HomePage;
