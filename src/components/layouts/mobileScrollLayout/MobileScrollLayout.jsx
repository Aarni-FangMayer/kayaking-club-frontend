import React from "react";
import "./mobileScrollLayout.css";

const MobileScrollLayout = ({
  sectionOne,
  sectionTwo,
  sectionThree,
  sectionFour,
}) => {
  return (
    <div className="scroll-container-mobile">
      {sectionOne}
      {sectionTwo}
      {sectionThree}
      {sectionFour}
    </div>
  );
};

export default MobileScrollLayout;
