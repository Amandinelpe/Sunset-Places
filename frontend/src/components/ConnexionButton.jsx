import React from "react";
import "../styles/ConnexionButton.css";
import { Link } from "react-router-dom";
import loginIcon from "../assets/login.png";

function ConnexionButton() {
  return (
    <Link to="/Connexion">
      <div className="connexion-button" type="text">
        <img src={loginIcon} alt="connexion" className="connexion" />
      </div>
    </Link>
  );
}

export default ConnexionButton;
