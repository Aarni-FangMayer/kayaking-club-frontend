import React from "react";
import "./imageBlock.css";

const ImageBlock = ({ image, alt }) => {
  return (
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        aria-label={alt}
      ></div>
  );
};

export default ImageBlock;
