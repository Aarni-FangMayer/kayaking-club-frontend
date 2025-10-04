import React from 'react'
import TextWithImgSection from '../../../components/shared/TextWithImgSection'
import RegistrationForm from '../../../components/forms/RegistrationForm'
import './promoSectionBlog.css'
import PromoImage from '../../../assets/images/promo_img.jpg'

const PromoSectionBlog = () => {
  return (
    <section className="promo_wrapper">
      <TextWithImgSection
        title={"Get involved"}
        subtitle={"You can join our club"}
        description={"Becoming a member means more than just kayaking. You’ll connect with people who share your passion for nature and adventure, while enjoying exclusive routes, events, and benefits. Our community welcomes everyone who wants to paddle, explore, and create lasting memories on the water."}
        btnText={"Choose a route"}
        img={PromoImage}
        alt={"Kayak paddles, camping equipment"}
      />
      <RegistrationForm title={"Quick registration"} />
    </section>
  )
}

export default PromoSectionBlog
