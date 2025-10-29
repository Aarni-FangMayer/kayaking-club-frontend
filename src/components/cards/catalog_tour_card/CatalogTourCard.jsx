import React from 'react'
import './catalogTourCard.css'

const CatalogTourCard = ({ clickEvent, arr }) => {
  return (
    <div className="catalog-tour__card" onClick={clickEvent} key={arr.id} >
      <img src={arr.images} alt="" className="catalog-tour__card-image" />
      <div className="catalog-tour__card-subtitle">
        <p className="subtitle">Difficulty: {arr.difficulty}</p>
        <h4 className="catalog-tour__tour-title">{arr.tourName}</h4>
        <p className="subtitle">Price: {arr.price} €</p>
      </div>
    </div>
  )
}

export default CatalogTourCard
