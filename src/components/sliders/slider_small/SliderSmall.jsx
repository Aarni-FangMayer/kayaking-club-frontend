import React, { useState } from "react";
import SliderButtons from "../../buttons/slider_buttons/SliderButtons";
import CardsSmall from "../../cards/cards_small/CardsSmall";
import "./sliderSmall.css";

const SliderSmall = () => {
  const initialCards = [
    {
      id: 1,
      subtitle: "difficulty: easy",
      title: "Three-day expeditions for everyone",
    },
    {
      id: 2,
      subtitle: "difficulty: hard",
      title: "Multi-day expeditions with camping",
    },
    {
      id: 3,
      subtitle: "difficulty: middle",
      title: "Abroad routes beyond Canada’s borders",
    },
    {
      id: 4,
      subtitle: "difficulty: middle",
      title: "Abroad routes beyond Canada’s borders",
    },
    {
      id: 1,
      subtitle: "difficulty: easy",
      title: "Three-day expeditions for everyone",
    },
    {
      id: 2,
      subtitle: "difficulty: hard",
      title: "Multi-day expeditions with camping",
    },
    {
      id: 3,
      subtitle: "difficulty: middle",
      title: "Abroad routes beyond Canada’s borders",
    },
    {
      id: 4,
      subtitle: "difficulty: middle",
      title: "Abroad routes beyond Canada’s borders",
    },
  ];

  const [cards, setCards] = useState(initialCards);

  const handleNext = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      newCards.push(first);
      return newCards;
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const last = newCards.pop();
      newCards.unshift(last);
      return newCards;
    });
  };

  return (
    <>
      <div className="slider-small__controls">
        <SliderButtons
          btnType={"vertical"}
          nextSlide={handleNext}
          prevSlide={handlePrev}
        />
      </div>
      <div className="slider-small">
        <div
          className="slider-small__track"
        >
          {cards.map((card) => (
            <CardsSmall
              subtitle={card.subtitle}
              title={card.title}
              btnText={"Book a tour"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderSmall;
