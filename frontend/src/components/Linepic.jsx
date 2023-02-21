import React from "react";
// import PropTypes from "prop-types";
import "../styles/Linepic.css";
import Dune from "../assets/Dune.png";
import Sunset from "../assets/sunset.jpg";
import Cassis from "../assets/Cassis.png";
import Mont from "../assets/mont_blanc.jpg";
import Paris from "../assets/pont_paris.jpg";

function Linepic() {
  return (
    <div>
      <div className="gallery">
        <img src={Dune} alt="Dune" />
        <img src={Sunset} alt="plage" />
        <img src={Cassis} alt="plage" />
        <img src={Mont} alt="plage" />
        <img src={Paris} alt="plage" />
      </div>
    </div>
  );
}

export default Linepic;
