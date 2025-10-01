import React from "react";
import TextBlock from "../../../components/shared/TextBlock";

import "./chooseRouteSection.css";
import KayakerImage1 from "../../../assets/images/routes_page_img1.jpg";

const ChooseRouteSection = () => {
  return (
    <section className="choose-route-section">
      <div className="choose-route-section__wrapper">
        <TextBlock
            title={"Select Route"}
            subtitle={"How To Choose A Tour"}
            description={
              "Choosing the right tour means matching your pace and interests. Our tours vary in difficulty and duration, from short day trips to multi-day journeys, so you’ll find the perfect fit. Every option is designed with comfort, safety, and expert guidance for a memorable, worry-free adventure."
            }
            btnText={"Learn more"}
          />
        <div className="choose-route-section__image">
          <img src={KayakerImage1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChooseRouteSection;
