import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card2({ imageSource }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img" />
      </div>
      
    </div>
  );
}

Card2.propTypes = {
  imageSource: PropTypes.string
};

export default Card2;