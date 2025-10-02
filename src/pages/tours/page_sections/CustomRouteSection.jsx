import React from "react";
import TextWithImgSection from "../../../components/shared/TextWithImgSection";
import ContactForm from "../../../components/forms/ContactForm"
import Decorationicon from "../../../components/ui/decorationIcon/DecorationIcon";

import "./customRouteSection.css";
import KayakerImage2 from "../../../assets/images/routes_page_img2.jpg";

const CustomRouteSection = () => {
  return (
    <section className="custom-routes">
      <TextWithImgSection
        title={"Custom Routes"}
        subtitle={"Experiences for every occasion"}
        description={
          "Whether it’s a team-building day, a birthday celebration, or a special getaway, our personalized tours let you design every detail. Choose your pace, style, and activities to create an unforgettable experience that perfectly matches your group’s needs and interests."
        }
        btnText={"Contact us"}
        img={KayakerImage2}
        alt={"Man on kayak in wild river photo"}
      />
      <div className="custom-routes__contacts">
        <ContactForm title={"Need a custom route?"} className="custom-route-form" />
      </div>
    </section>
  );
};

export default CustomRouteSection;
