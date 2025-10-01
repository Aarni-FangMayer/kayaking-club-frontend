import { useState } from "react";
import Card from "../../cards/card/Card";
import SliderButtons from "../../buttons/slider_buttons/SliderButtons";

import "./sliderBig.css";
import NatureImage1 from "../../../assets/images/nature_img1.jpg";
import NatureImage2 from "../../../assets/images/nature_img2.jpg";
import NatureImage3 from "../../../assets/images/nature_img3.jpg";
import NatureImage4 from "../../../assets/images/nature_img4.jpg";

const SliderBig = () => {
  const initialCards = [
    {
      id: 1,
      subtitle: "difficulty: easy",
      title: "Bow River Serenity",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "950€",
      image: NatureImage1,
    },
    {
      id: 2,
      subtitle: "difficulty: middle",
      title: "Lake Louise Paddle",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "1010€",
      image: NatureImage2,
    },
    {
      id: 3,
      subtitle: "difficulty: easy",
      title: "Algonquin Explorer",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "790€",
      image: NatureImage3,
    },
    {
      id: 4,
      subtitle: "difficulty: hard",
      title: "Yukon Wilderness",
      description:
        "This route offers breathtaking views of untouched nature and wild rivers like the Yukon River. It’s ideal for those seeking adventure and the chance to enjoy solitude in the wild.",
      price: "1150€",
      image: NatureImage4,
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
    <div className="slider-big">
      <h2 className="slider-big__title">Popular Routes</h2>
      <div className="slider-big__carousel">
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id + "-" + index}
              subtitle={card.subtitle}
              title={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
              isActive={index === 0}
            />
          );
        })}
        <div className="slider-big__controls">
          <SliderButtons nextSlide={handleNext} prevSlide={handlePrev} />
          <button className="slider-big__button">Show all directions</button>
        </div>
      </div>
    </div>
  );
};

export default SliderBig;
