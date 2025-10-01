import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";

import "./chooseRouteSection.css";
import KayakerImage1 from "../../../assets/images/routes_page_img1.jpg";

const ChooseRouteSection = () => {
  return (
    <section className="choose-route-section">
      <div className="choose-route-section__wrapper">
        <div className="choose-route-section__content">
          <h2 className="choose-route-section__title">Select Route</h2>
          <div className="choose-route-section__text-content">
            <h3 className="choose-route-section__subtitle">
              How To Choose A Tour
            </h3>
            <p className="choose-route-section__text">
              Choosing the right tour is all about matching your pace and
              interests.
              <span className="choose-route-section__highlight">
                {" "}
                Our tours are designed with different difficulty levels,{" "}
              </span>
              so whether you’re looking for a leisurely experience or a more
              challenging adventure, you’ll find the perfect fit.
            </p>
            <p className="choose-route-section__text">
              <span className="choose-route-section__highlight">
                {" "}
                We also organize tours by duration,{" "}
              </span>
              allowing you to select an experience that suits your schedule.
              From short day trips to multi-day journeys, every option is
              crafted with comfort, safety, and expert guidance in mind,
              ensuring a memorable and worry-free adventure.
            </p>
          </div>
          <ArrowBlueButton
            className="choose-route-section__button"
            text={"Show rotes"}
          />
        </div>
        <div className="choose-route-section__image">
          <img src={KayakerImage1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChooseRouteSection;
