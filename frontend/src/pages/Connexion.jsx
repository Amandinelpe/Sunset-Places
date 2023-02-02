import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authContext } from "../context/AuthContext";
import NavBar from "../components/NavBar";

import "../styles/Connexion.css";

function Connexion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, auth } = useContext(authContext);

  useEffect(() => {
    if (auth.data) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    axios
      .post(
        `${apiUrl}/user/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          login(res.data);
        }
      })
      .catch((err) => setError(err.response.data.message));
    event.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <div className="connexion">
        <div className="title">
          <h3>Your Space</h3>
        </div>
        <form
          name="connexion"
          method="post"
          className="connexion-form"
          onSubmit={handleSubmit}
        >
          <div className="connexion-input">
            <label htmlFor="Email">Adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p className="error-message">{error}</p>
          <button className="connexion-form-button" type="submit">
            Je me connecte
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
