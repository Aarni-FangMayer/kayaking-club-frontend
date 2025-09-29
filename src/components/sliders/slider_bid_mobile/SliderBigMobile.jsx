import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardMobileActive from "../../cards/card_mobile/CardMobileActive";
import CardMobileList from "../../cards/card_mobile/CardMobileList";

import "./sliderBigMobile.css";
import NatureImage1 from "../../../assets/images/nature_img1.jpg";
import NatureImage2 from "../../../assets/images/nature_img2.jpg";
import NatureImage3 from "../../../assets/images/nature_img3.jpg";
import NatureImage4 from "../../../assets/images/nature_img4.jpg";

const SliderBigMobile = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);
  const cards = [
    {
      id: 1,
      subtitle: "difficulty: easy",
      title: "Bow River Serenity",
      description:
        "This route includes the scenic Lake Louise and Bow River, known for their crystal-clear waters and beautiful landscapes. It’s perfect for beginners and those looking to enjoy a peaceful kayaking experience.",
      price: "950€",
      image: NatureImage1,
    },
    {
      id: 2,
      subtitle: "difficulty: middle",
      title: "Gros Morne National Park",
      description:
        "Here, you can explore fjords, lakes, and rivers in one of the most picturesque corners of Newfoundland. This route is suited for nature lovers and those wanting to experience diverse landscapes and ecosystems.",
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
