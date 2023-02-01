import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { authContext } from "../context/AuthContext";
import sunset from "../assets/logo.png";
import "../styles/NavBar.css";
import UserNavbarItem from "./UserNavbarItem";
import ConnexionButton from "./ConnexionButton";

function NavBar() {
  const { auth } = useContext(authContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={sunset} alt="logo" className="logo" />
      </Link>
      <div className="items_navbar">
        <button type="button" className="input">
          Category
        </button>
        {auth.data && <UserNavbarItem />}
        {!auth.data && <ConnexionButton />}
      </div>
    </div>
  );
}

export default NavBar;
