import React from "react";
import ArrowBlueButton from "../../buttons/arrow_blue/ArrowBlueButton";
import "./card.css";

const Card = ({ subtitle, title, description, price, image, isActive }) => {
  return (
    <>
      {isActive ? (
        <div className="card card--active">
          <div className="card__content--active">
            <div className="card__info">
              <div className="subtitle">{subtitle}</div>
              <h3 className="card__title">{title}</h3>
              <p className="card__description">{description}</p>
            </div>
            <div className="card__footer">
              <div className="card__price">{price}</div>
              <ArrowBlueButton text={"Learn more"} />
            </div>
          </div>
          <div className="card__image--active">
            <img src={image} alt="Route" />
          </div>
        </div>
      ) : (
        <div className="card card--inactive">
          <img className="card__image" src={image} alt="Route" />
          <div className="card__content--inactive">
            <span className="subtitle">{subtitle}</span>
            <h4 className="card__title card__title--small">{title}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
