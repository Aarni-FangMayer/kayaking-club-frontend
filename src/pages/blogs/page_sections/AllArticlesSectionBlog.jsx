import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import "./allArticlesSectionBlog.css";
import PaginationControl from '../../../components/buttons/pagination_control/PaginationControl'

const AllArticlesSectionBlog = () => {
  return (
    <section className="all-articles">
      <div className="all-articles__item all-articles__item--image-left">
        <div className="image-left"></div>
      </div>
      <div className="all-articles__item all-articles__item--text-top">
        <div className="all-articles__content">
          <h3 className="all-articles__title">Meet Our New Instructors</h3>
          <p className="all-articles__description">
            We’re excited to welcome new faces to the River Pulse team. With
            international kayaking experience, wilderness first aid training,
            and a deep love for the wild, our new instructors bring both skill
            and soul.
          </p>
        </div>
        <ArrowBlueButton text={"Read article"} />
      </div>
      <div className="all-articles__item all-articles__item--text-bottom">
        <div className="all-articles__content">
          <h3 className="all-articles__title">New Routes Coming </h3>
          <p className="all-articles__description">
            We’re expanding our adventure map! This fall, River Pulse Club will
            introduce three new multi-day routes across British Columbia and
            Alberta. From alpine lakes to remote forest rivers, each trip is
            crafted to deliver a deeper connection with nature — with our
            signature gear, guides, and comfort included.
          </p>
        </div>
        <ArrowBlueButton text={"Read article"} />
      </div>
      <div className="all-articles__item all-articles__item--image-right">
        <div className="image-right"></div>
      </div>
      <div className="all-articles__item all-articles__featured">
        <div className="all-articles__featured-content">
          <h3 className="all-articles__featured-header">
            All Articles And News
          </h3>
          <div className="all-articles__featured-info">
            <p class="all-articles__featured-subtitle subtitle">article</p>
            <h4 className="all-articles__featured-title">
              Meet Our New Instructors
            </h4>
            <p class="all-articles__featured-subtitle subtitle">
              August 27, 2025
            </p>
          </div>
          <div className="all-articles__featured-info">
            <p class="all-articles__featured-subtitle subtitle">article</p>
            <h4 className="all-articles__featured-title">
              Meet Our New Instructors
            </h4>
            <p class="all-articles__featured-subtitle subtitle">
              August 27, 2025
            </p>
          </div>
          <div className="all-articles__featured-info">
            <p class="all-articles__featured-subtitle subtitle">article</p>
            <h4 className="all-articles__featured-title">
              Meet Our New Instructors
            </h4>
            <p class="all-articles__featured-subtitle subtitle">
              August 27, 2025
            </p>
          </div>
        </div>
        <div className="all-articles__controls">
          <PaginationControl />
        </div>
        
      </div>
      
    </section>
  );
};

export default AllArticlesSectionBlog;
