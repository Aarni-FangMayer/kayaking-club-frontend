import React, { useState } from "react";
import ToursFilterPanel from "./ToursFilterPanel";
import ToursList from "./ToursList";
import "./toursCatalog.css";

const ToursCatalog = ({ singleDayTitle, multiDayTitle }) => {
  const [selectedTour, setSelectedTour] = useState(false);

  const handleChangeSelectedTour = () => {
    setSelectedTour(!selectedTour);
  }

  return (
    <div className="tours-catalog">
        <ToursList selectedTour={selectedTour} handleChangeSelectedTour={handleChangeSelectedTour} singleDayTitle={singleDayTitle} multiDayTitle={multiDayTitle} />
    </div>
  );
};

export default ToursCatalog;
