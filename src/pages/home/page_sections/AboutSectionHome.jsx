import React from "react";
import TextBlock from "../../../components/shared/TextBlock";
import DecorationIcon from "../../../components/ui/decorationIcon/DecorationIcon";
import "./aboutSectionHome.css";
import DogImage from "/manwithdog_img.jpg";
import Icon1 from "../../../assets/icons/icon_1.png";
import Icon2 from "../../../assets/icons/icon_2.png";
import Icon3 from "../../../assets/icons/icon_3.png";
import Icon4 from "../../../assets/icons/icon_4.png";

const AboutSectionHome = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__body">
          <TextBlock
            title={"About Us"}
            subtitle={"Our Philosophy"}
            description={
              "We believe that adventure should be accessible to everyone. That’s why we focus on comfort, safety, and expert guidance, allowing you to fully immerse yourself in the moment."
            }
            btnText={"Learn more"}
          />
          <div className="about__image">
            <img src={DogImage} alt="Man with dog on kayak photo" />
          </div>
        </div>

        <div className="about__decor">
          <DecorationIcon
            icon={Icon1}
            text={"80% of first-time customers return to us every season"}
          />
          <DecorationIcon
            icon={Icon2}
            text={"A lot of unique routes through Canada's nature reserves"}
          />
          <DecorationIcon
            icon={Icon3}
            text={"More than kayakers have already joined our club"}
          />
          <DecorationIcon
            icon={Icon4}
            text={"At least three new locations exploring every year"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome;
