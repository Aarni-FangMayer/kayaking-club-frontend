import React from 'react'
import './infoSectionBlog.css'
import Image2 from "../../../assets/images/blog_page_img2.jpg"
import Image3 from "../../../assets/images/blog_page_img3.jpg"

const InfoSectionBlog = () => {
  return (
    <section className="info">
      <div className="info__item--with-title">
        <div className="info__image">
          <h2 className="info__title">Welcome To Our Travel Blog</h2>
        </div>
      </div>
      <div className="info__item--image-only-left">
        <img src={Image2} alt="Man paddling kayak" />
      </div>
      <div className="info__item--text">
        <h3>Read stories and find inspiration</h3>
        <p>
          Whether you're planning your first paddle or reminiscing about your last expedition, 
          our blog is your go-to source for everything kayaking. Here, we share stories from the river, 
          expert advice, and behind-the-scenes glimpses into life at River Pulse Club.
        </p>
      </div>
      <div className="info__item--image-only-right">
        <img src={Image3} alt="Kayaking in wild nature" />
      </div>
    </section>
  )
}

export default InfoSectionBlog
