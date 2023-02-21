import React from "react";
import "../styles/Linepic.css";
import Dune from "../assets/Dune.png";
import Sunset from "../assets/sunset.jpg";
import Nice from "../assets/Nice.jpg";
import Mont from "../assets/mont_blanc.jpg";
import Paris from "../assets/pont_paris.jpg";

function Linepic() {
  return (
    <div>
      <div className="gallery">
        <img src={Dune} alt="Dune" />
        <img src={Sunset} alt="plage" />
        <img src={Nice} alt="plage" />
        <img src={Mont} alt="plage" />
        <img src={Paris} alt="plage" />
      </div>
    </div>
  );
}

export default Linepic;
