import CategoriesList from "@components/CategoriesList";
import React from "react";
import Linepic from "../components/Linepic";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div>
      <Linepic />
      <NavBar />
      <CategoriesList />
    </div>
  );
}

export default HomePage;
