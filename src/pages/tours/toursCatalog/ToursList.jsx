import React, { useState } from "react";
import SelectedTour from "./SelectedTour";
import "./toursList.css";
import ImageTour1 from "../../../assets/images/tourImage1.jpg";
import ImageTour2 from "../../../assets/images/tourImage1.jpg";
import ImageTour3 from "../../../assets/images/tourImage3.jpg";
import ImageTour4 from "../../../assets/images/tourImage4.jpg";

const ToursList = ({ selectedTour, handleChangeSelectedTour }) => {
  const allTours = [
    {
      id: 1,
      tourName: "Lake Louise Paddle",
      subtitle:
        "A classic route through one of Canada’s most iconic lakes — short, peaceful, and endlessly photogenic.",
      description:
        "Paddle across the iconic turquoise waters of Lake Louise, surrounded by soaring mountain peaks and glaciers. This short route is one of the most photographed in Canada — and for good reason. With calm waters and minimal effort, you'll glide through breathtaking scenery, perfect for beginners or anyone looking for a peaceful, picture-perfect day on the water.",
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
      images: [ImageTour1, ImageTour2, ImageTour3, ImageTour4],
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
                <div
                  className="tours-catalog__tour"
                  onClick={() => openCurrentTour(tour)}
                  key={tour.id}
                >
                  <img
                    src={tour.images[0]}
                    alt=""
                    className="tours-catalog__tour-image"
                  />
                  <div className="tours-catalog__tour-subtitle">
                    <p className="subtitle">Difficulty: {tour.difficulty}</p>
                    <h4 className="tours-catalog__tour-title">{tour.tourName}</h4>
                    <p className="subtitle">Price: {tour.price} €</p>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ToursList;
