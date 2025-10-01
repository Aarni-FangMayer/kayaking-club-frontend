import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMobileActive from "../../cards/card_mobile/CardMobileActive";
import CardMobileList from "../../cards/card_mobile/CardMobileList";

import "./sliderBigMobile.css";

const SliderBigMobile = ({ cards }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  return (
    <div className="slider-big-mobile">
      {cards
        .filter((card) => card.id === selected)
        .map((card) => {
          return (
            <CardMobileActive
              key={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
            />
          );
        })}
      <div className="card-mobile__list">
        <button
          className="card-mobile__button"
          onClick={() => navigate("/tours")}
        >
          Show all directions
        </button>
        {cards.map((card) => {
          return (
            <CardMobileList
              key={card.id}
              id={card.id}
              image={card.image}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SliderBigMobile;
