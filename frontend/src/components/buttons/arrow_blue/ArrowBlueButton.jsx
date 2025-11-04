import React from "react";
import "./arrowBlueButton.css";
import ArrowBlue from "../../../assets/icons/arrow_blue.png";

const ArrowBlueButton = ( { clickEvent, text } ) => {
  return (
    <button onClick={clickEvent} className="arrow-blue-button">
      {text}
      <img src={ArrowBlue} alt="" />
    </button>
  );
};

export default ArrowBlueButton;
