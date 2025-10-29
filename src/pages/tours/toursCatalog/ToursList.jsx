import React, { useState } from "react";
import SelectedTour from "./SelectedTour";
import ToursFilterPanel from "./ToursFilterPanel";
import CatalogTourCard from "../../../components/cards/catalog_tour_card/CatalogTourCard";
import "./toursList.css";
import ImageTour1 from "../../../assets/images/tourImage1.jpg";
import ImageTour2 from "../../../assets/images/tourImage2.jpg";
import ImageTour3 from "../../../assets/images/tourImage3.jpg";
import ImageTour4 from "../../../assets/images/tourImage4.jpg";
import ImageTour5 from "../../../assets/images/tourImage5.jpg";
import ImageTour6 from "../../../assets/images/tourImage6.jpg";
import ImageTour7 from "../../../assets/images/tourImage7.jpg";
import ImageTour8 from "../../../assets/images/tourImage8.jpg";

const ToursList = ({ selectedTour, handleChangeSelectedTour }) => {
  const allTours = [
    {
      id: 1,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour1,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },

    {
      id: 2,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour2,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 3,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour3,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 4,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour4,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 5,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour5,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },

    {
      id: 6,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour6,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 7,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour7,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 8,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour8,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 5,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour1,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },

    {
      id: 6,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour2,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 7,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour3,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
    {
      id: 8,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: ImageTour4,
      difficulty: "easy",
      dateOfTrip: "28 august",
      included: "guide, photography",
      level: "yes",
      duration: "1 day",
      price: "1050",
    },
  ];

  const [currentTour, setCurrentTour] = useState({});

  const openCurrentTour = (tour) => {
    setCurrentTour(tour);
    handleChangeSelectedTour();
  };

  return (
    <div className="tours-catalog__tours-list">
      {selectedTour ? (
        <>
          <SelectedTour currentTour={currentTour} />
        </>
      ) : (
        <>
          <h2 className="tours-catalog__tours-heading">Select Route</h2>
          <div className="tours-catalog__tours">
            {allTours.map((tour) => {
              return (
                <CatalogTourCard clickEvent={() => openCurrentTour(tour)} arr={tour} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ToursList;
