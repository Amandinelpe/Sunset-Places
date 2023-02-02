import React from "react";
import PropTypes from "prop-types";
import "../styles/FicheDescription.css";

function FicheDescription({ title, image, description }) {
  return (
    <div className="fiche_content">
      <div className="fiche_title">
        <h1>{title}</h1>
      </div>
      <div>
        <img src={image} alt="pic" className="fiche_image" />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FicheDescription;

FicheDescription.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
