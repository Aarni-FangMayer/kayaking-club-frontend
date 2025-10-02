import React from "react";
import TextBlock from "./TextBlock";
import "./textWithImgSection.css";

const TextWithImgSection = ({
  title,
  subtitle,
  description,
  btnText,
  img,
  alt,
}) => {
  return (
    <div className="text__block">
      <TextBlock
        title={title}
        subtitle={subtitle}
        description={description}
        btnText={btnText}
      />
      <div className="image__block">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default TextWithImgSection;
