import React from "react";
import ArticleCard from "../../../components/cards/article_card/ArticleCard";
import ImageBlock from "../../../components/shared/ImageBlock";
import CardList from "../../../components/lists/CardList"
import "./allArticlesSectionBlog.css";
import Image7 from "../../../assets/images/blog_page_img7.jpg";
import Image8 from "../../../assets/images/blog_page_img8.jpg";

const AllArticlesSectionBlog = () => {
  return (
    <section className="all-articles">
      <div class="all-blogs-grid__item--row1-col1">
        <ImageBlock image={Image7} alt={"Kayaking instructor"} />
      </div>
      <div class="all-blogs-grid__item--row1-col2">
        <ArticleCard
          subtitle={"Meet Our New Instructors"}
          description={
            "We’re excited to welcome new faces to the River Pulse team. With international kayaking experience, wilderness first aid training, and a deep love for the wild, our new instructors bring both skill and soul."
          }
          btnText={"Read article"}
        />
      </div>
      <div class="all-blogs-grid__item--col3">
        <CardList arr={articles} subtitle={"article"} header={"All Articles And News"} />
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
