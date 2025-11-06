import React, { useState, useEffect } from "react";
import toursService from "../../../services/tours";
import SelectedTour from "./SelectedTour";
import ToursFilterPanel from "./ToursFilterPanel";
import CatalogTourCard from "../../../components/cards/catalog_tour_card/CatalogTourCard";
import "./toursList.css";

const ToursList = ({
  selectedTour,
  handleChangeSelectedTour,
  singleDayTitle,
  multiDayTitle,
}) => {
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    toursService.getAll().then((response) => {
      setTourList(response.data);
    });
  }, []);

  console.log("render", tourList, "tourList");

  const [currentTour, setCurrentTour] = useState({});

  const openCurrentTour = (tour) => {
    setCurrentTour(tour);
    handleChangeSelectedTour();
  };

  return (
    <div className="tours-catalog__tours-list">
      {selectedTour ? (
        <>
          <SelectedTour
            currentTour={currentTour}
            handleChangeSelectedTour={handleChangeSelectedTour}
          />
        </>
      ) : (
        <>
          <h2 className="tours-catalog__tours-heading">
            Select Route {singleDayTitle}
            {multiDayTitle}
          </h2>
          <ToursFilterPanel
            selectedTour={selectedTour}
            handleChangeSelectedTour={handleChangeSelectedTour}
          />
          <div className="tours-catalog__tours">
            {tourList.map((tour) => {
              return (
                <CatalogTourCard
                  clickEvent={() => openCurrentTour(tour)}
                  arr={tour}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ToursList;
