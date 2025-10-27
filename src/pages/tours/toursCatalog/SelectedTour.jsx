import React from "react";
import "./selectedTour.css";

const SelectedTour = ({ currentTour }) => {
    if (!currentTour) return null;

  return (
    <div className="selected-tour">
      <h2 className="selected-tour__title">{currentTour.tourName}</h2>
      <h3 className="selected-tour__subtitle">
        {currentTour.subtitle}
      </h3>
      <div className="selected-tour__images">
        <img src={currentTour.images[0]} alt="" className="selected-tour__image" />
        <img src={currentTour.images[1]} alt="" className="selected-tour__image" />
        <img src={currentTour.images[2]} alt="" className="selected-tour__image" />
        <img src={currentTour.images[3]} alt="" className="selected-tour__image" />
      </div>
      <div className="selected-tour__details">
        <div className="subtitile selected-tour__detail">difficulty: {currentTour.difficulty}</div>
        <div className="subtitile selected-tour__detail">date of trip: {currentTour.dateOfTrip}</div>
        <div className="subtitile selected-tour__detail">included: {currentTour.included}</div>
        <div className="subtitile selected-tour__detail">beginners friendly: {currentTour.level}</div>
        <div className="subtitile selected-tour__detail">duration: {currentTour.duration}</div>
        <div className="selected-tour__price">Price: {currentTour.price} €</div>
      </div>
      <div className="selected-tour__description">
        {currentTour.description}
      </div>
      <div className="selected-tour__actions">
        <button className="selected-tour__button selected-tour__button--white">Book this route</button>
        <button className="selected-tour__button">Contact Us</button>
      </div>
    </div>
  );
};

export default SelectedTour;
