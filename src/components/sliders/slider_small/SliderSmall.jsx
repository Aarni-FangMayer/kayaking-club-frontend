import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "./ProductService";
import ArrowWhiteButton from "../../buttons/arrow_white/ArrowWhiteButton";

import "./sliderSmall.css";

const SliderSmall = () => {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        
          <h4 className="mb-1">{product.subtitle}</h4>
          <h6 className="mt-0 mb-3">{product.title}</h6>
          <ArrowWhiteButton text={"Book a tour"} />
      </div>
    );
  };

  return (
    <>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </>
  );
};

export default SliderSmall;
