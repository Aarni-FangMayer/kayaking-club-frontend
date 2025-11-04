import React from "react";
import "./imageWithTitleBlock.css";

const ImageWithTitleBlock = ({ image, title }) => {
  return (
      <div
        className="imageWithTitle--image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="imageWithTitle--title">{title}</h2>
      </div>
  );
};

export default ImageWithTitleBlock;
