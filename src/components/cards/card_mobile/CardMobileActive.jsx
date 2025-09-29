import React from "react";
import ArrowBlueButton from "../../buttons/arrow_blue/ArrowBlueButton";
import "./cardMobileActive.css";

const CardMobileActive = ({ title, description, price, image }) => {
  return (
      <div className="card-mobile__active">
        <div className="card-mobile__active-image">
          <img src={image} alt="Route" />
        </div>
        <div className="card-mobile__active-info">
          <div className="textwrapper">
            <h2 className="card-mobile__active-title card-mobile__active-title--big">
              Popular Routes
            </h2>
            <h3 className="card-mobile__active-subtitle">{title}</h3>
            <p className="card-mobile__active-description">{description}</p>
          </div>
          <div className="card-mobile__active-footer">
            <div className="card-mobile__active-price">{price}</div>
            <ArrowBlueButton text={"Learn more"} />
          </div>
        </div>
      </div>
  );
};

export default CardMobileActive;
