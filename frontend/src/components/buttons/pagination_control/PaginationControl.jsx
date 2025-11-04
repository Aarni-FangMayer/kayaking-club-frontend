import React from 'react'
import './paginationControl.css'
import ArrowNext from '../../../assets/icons/pagination_arrow_next.png'
import ArrowPrev from '../../../assets/icons/pagination_arrow_prev.png'

const PaginationControl = () => {
  return (
    <div className="pagination_buttons">
      <button className="pagination_button pagination_buttons--prev"><img src={ArrowPrev} alt="arrow button previous" /></button>
      <span class="pagination_buttons--text">1 / 5</span>
      <button className="pagination_button pagination_buttons--next"><img src={ArrowNext} alt="arrow button next" /></button>
    </div>
  )
}

export default PaginationControl
