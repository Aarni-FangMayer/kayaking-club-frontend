import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import DecorationIcon from "../../../components/ui/decorationIcon/DecorationIcon";
import "./aboutSectionHome.css";
import DogImage from '/manwithdog_img.jpg'
import Icon1 from '../../../assets/icons/icon_1.png'
import Icon2 from '../../../assets/icons/icon_2.png'
import Icon3 from '../../../assets/icons/icon_3.png'
import Icon4 from '../../../assets/icons/icon_4.png'

const AboutSectionHome = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__body">
          <div className="about__text">
            <h2 className="about__title">About Us</h2>
            <h3 className="about__subtitle">Our Philosophy</h3>
            <p className="about__description">
                We believe that adventure should be accessible to everyone. 
                That’s why we focus on comfort, safety, and expert guidance, 
                allowing you to fully immerse yourself in the moment. 
            </p>
            <ArrowBlueButton text={"Learn more"} />
          </div>
          <div className="about__image"><img src={ DogImage } alt="Man with dog on kayak photo" /></div>
        </div>

        <div className="about__decor">
           <DecorationIcon icon={Icon1} text={"80% of first-time customers return to us every season"} />
           <DecorationIcon icon={Icon2} text={"A lot of unique routes through Canada's nature reserves"} />
           <DecorationIcon icon={Icon3} text={"More than kayakers have already joined our club"} />
           <DecorationIcon icon={Icon4} text={"At least three new locations exploring every year"} />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHome;
