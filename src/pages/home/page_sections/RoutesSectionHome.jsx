import React from 'react'
import SliderBigMobile from '../../../components/sliders/slider_bid_mobile/SliderBigMobile'
import SliderBig from '../../../components/sliders/slider_big/SliderBig'
import './routesSectionHome.css'

const RoutesSectionHome = () => {
  return (
    <section id="routes" className="routes" >
      <SliderBigMobile />
      <SliderBig />
    </section>
  )
}

export default RoutesSectionHome
