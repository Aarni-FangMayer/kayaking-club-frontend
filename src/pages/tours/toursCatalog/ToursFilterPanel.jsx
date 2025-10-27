import React from 'react'
import './toursFilterPanel.css'

const ToursFilterPanel = ({ selectedTour, handleChangeSelectedTour }) => {
  return (
<div className="tours-catalog__filters">
        {selectedTour ? (
          <button onClick={handleChangeSelectedTour}>--- Show All Routes</button>
        ) : (
          <>
            <div className="tours-catalog__title-with-decor">
              <div className="tours-catalog__decor"></div>
              <h3 className="tours-catalog__heading">Find your perfect trip</h3>
              <div className="tours-catalog__decor"></div>
            </div>
            <div className="tours-catalog__filter-groups">
              <div className="tours-catalog__filter tours-catalog__filter--price">
                <h4 className="tours-catalog__subtitle">Sort by price:</h4>
                <div className="tours-catalog__filter-buttons">
                  <button className="tours-catalog__button">
                    Price: High to Low
                  </button>
                  <button className="tours-catalog__button">
                    Price: Low to High
                  </button>
                </div>
              </div>
              <div className="tours-catalog__filter tours-catalog__filter--duration">
                <h4 className="tours-catalog__subtitle">Sort by duration:</h4>
                <div className="tours-catalog__filter-buttons">
                  <button className="tours-catalog__button">
                    Single-Day Trips
                  </button>
                  <button className="tours-catalog__button">
                    Multi-Day Trips
                  </button>
                  <button className="tours-catalog__button">Show All</button>
                </div>
              </div>
              <div className="tours-catalog__filter tours-catalog__filter--difficulty">
                <h4 className="tours-catalog__subtitle">Sort by difficulty:</h4>
                <div className="tours-catalog__filter-buttons">
                  <button className="tours-catalog__button">
                    Level: Hard to Easy
                  </button>
                  <button className="tours-catalog__button">
                    Level: Easy to Hard
                  </button>
                  <button className="tours-catalog__button">
                    Beginners friendly
                  </button>
                  <button className="tours-catalog__button">Show All</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
  )
}

export default ToursFilterPanel
