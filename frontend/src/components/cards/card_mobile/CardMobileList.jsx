import React from 'react'
import './cardMobileList.css'

const CardMobileList = ({ id, image, selected, setSelected }) => {
  return (
    <div className={`card-mobile__list--item ${
        id === selected ? "item--active" : "item--inactive"
    }`} >
      <img src={image} alt="" onClick={() => setSelected(id)}/>
    </div>
  )
}

export default CardMobileList
