import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="layout__sidebar">
      <div className="layout__sidebar-nav">
        <div className="layout__sidebar-nav__line">
          <div className="layout__sidebar-nav__dot layout__sidebar-nav__dot--active" />
          <div className="layout__sidebar-nav__dot" />
          <div className="layout__sidebar-nav__dot" />
          <div className="layout__sidebar-nav__dot" />
        </div>
        <div className="layout__sidebar-nav__slide-numbers">
          <div className="layout__sidebar-nav__number layout__sidebar-nav__number--active">1</div>
          <div className="layout__sidebar-nav__number">2</div>
          <div className="layout__sidebar-nav__number">3</div>
          <div className="layout__sidebar-nav__number">4</div>
        </div>
      </div>
      <button className="layout__sidebar-to-top">
        <img src="/public/arrow_btn.png" alt="" />
        contacts
      </button>
    </div>
  )
}

export default Sidebar
