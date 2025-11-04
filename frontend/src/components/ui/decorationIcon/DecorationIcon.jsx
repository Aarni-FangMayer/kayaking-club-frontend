import React from 'react'
import './decorationIcon.css'

const DecorationIcon = ( {icon, text} ) => {
  return (
    <div className='decoration-icon'>
      <div className="decoration-icon__icon"><img src={icon} alt="" /></div>
      <div className="decoration-icon__text">{text}</div>
    </div>
  )
}

export default DecorationIcon
