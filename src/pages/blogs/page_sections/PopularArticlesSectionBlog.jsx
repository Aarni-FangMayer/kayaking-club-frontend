import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import "./popularArticlesSectionBlog.css";
import Image5 from "../../../assets/images/blog_page_img5.jpg";
import Image6 from "../../../assets/images/blog_page_img6.jpg";

const PopularArticlesSectionBlog = () => {
  return (
    <section className="popular-blogs">
      <div className="popular-blogs__item popular-blogs__item--text">
        <div className="popular-blogs__content">
          <h3 className="popular-blogs__subtitle">
            Tips for Your First Kayaking Trip
          </h3>
          <p className="popular-blogs__description">
            Your first kayaking trip can feel both exciting and a little
            intimidating. With the right attitude and some simple preparation,
            it soon becomes one of the most enjoyable and rewarding outdoor
            adventures.
          </p>
        </div>
        <ArrowBlueButton text={"Read article"} />
      </div>
      <div className="popular-blogs__item popular-blogs__item--title">
        <div className="popular-blogs__image block-image">
          <h2 className="popular-blogs__title">Popular Articles</h2>
        </div>
      </div>
      <div className="popular-blogs__item popular-blogs__item--text-image">
        <div className="popular-blogs__cta">
          <div className="popular-blogs__content">
            <h3 className="popular-blogs__subtitle">Three Days in the Wild</h3>
            <p className="popular-blogs__description">
              Multi-day kayaking offers unforgettable moments — from misty
              mornings on the water to nights by the fire under the stars. Our
              three-day route in British Columbia captures that magic and more.
            </p>
          </div>
          <ArrowBlueButton text={"Read article"} />
        </div>
      </div>
      <div className="popular-blogs__item popular-blogs__item--image-only">
        <div className="popular-blogs__image-right"></div>
      </div>
      <div className="popular-blogs__item popular-blogs__item--image-only-left">
        <div className="popular-blogs__image-left">
        </div>
      </div>
      <div className="popular-blogs__item popular-blogs__item--image-text">
        <div className="popular-blogs__content-bottom">
          <div className="text-content">
            <h3 className="popular-blogs__subtitle">
              How to Choose the Kayak{" "}
            </h3>
            <p className="popular-blogs__description">
              With so many kayaks available, choosing the right one can feel
              tricky. This guide breaks down the main types and helps you match
              your kayak to your goals — from calm lakes to long expeditions or
              coastal trips.
            </p>
          </div>
          <ArrowBlueButton text={"Read article"} />
        </div>
      </div>
    </section>
  );
};

export default PopularArticlesSectionBlog;
