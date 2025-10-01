import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import Decorationicon from "../../../components/ui/decorationIcon/DecorationIcon";

import "./customRouteSection.css";
import KayakerImage2 from "../../../assets/images/routes_page_img2.jpg";
import Icon2 from "../../../assets/icons/icon_2.png";
import Icon3 from "../../../assets/icons/icon_3.png";
import Icon5 from "../../../assets/icons/icon_5.png";
import Icon6 from "../../../assets/icons/icon_6.png";

const CustomRouteSection = () => {
  return (
    <section className="custom-routes">
      <div className="custom-routes__intro">
        <div className="custom-routes__content">
          <div className="custom-routes__text-content">
            <h2 className="custom-routes__title">Custom Rotes</h2>
            <h3 className="custom-routes__subtitle">
              Experiences for every occasion
            </h3>
            <p className="custom-routes__text">
              Whether it’s a team-building day, a birthday celebration, or a
              special getaway, our personalized tours let you design every
              detail. Choose your pace, style, and activities to create an
              unforgettable experience that perfectly matches your group’s needs
              and interests.
            </p>
          </div>
          <ArrowBlueButton text={"Contact us"} />
        </div>
        <div className="custom-routes__image">
          <img src={KayakerImage2} alt="" />
        </div>
      </div>
      <div className="custom-routes__features">
        <Decorationicon
          icon={Icon5}
          text={"Pick the date and duration that work best for you"}
        />
        <Decorationicon
          icon={Icon2}
          text={"Tailor experiences to your group’s preferences"}
        />
        <Decorationicon
          icon={Icon3}
          text={"Our team helps craft every detail for a smooth adventure"}
        />
        <Decorationicon
          icon={Icon6}
          text={"Create experiences your group will never forget"}
        />
      </div>
    </section>
  );
};

export default CustomRouteSection;
