import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import "../styles/UserNavbarItem.css";
import avatar from "../assets/avatar.png";
import logoutIcon from "../assets/logout.png";

function UserNavbarItem() {
  const { logout } = useContext(authContext);
  return (
    <div className="user-navbar-item">
      <Link to="/Profile">
        <img src={avatar} alt="avatar" className="avatar" />
      </Link>
      <div
        className="logout-container"
        onClick={logout}
        onKeyDown={(e) => e.preventDefault()}
        role="presentation"
      >
        <img src={logoutIcon} alt="logout" className="logout" />
      </div>
    </div>
  );
}

export default UserNavbarItem;
