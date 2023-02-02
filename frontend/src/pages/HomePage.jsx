import CategoriesList from "@components/CategoriesList";
import React from "react";
import Carousel from "../components/Carousel";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <Carousel />
      <NavBar />
      <CategoriesList />
    </div>
  );
}

export default HomePage;
