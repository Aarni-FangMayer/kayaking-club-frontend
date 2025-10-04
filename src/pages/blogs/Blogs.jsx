import React from 'react'
import StaticLayout from '../../components/layouts/staticLayout/StaticLayout'
import InfoSectionBlog from './page_sections/InfoSectionBlog'
import PopularArticlesSectionBlog from './page_sections/PopularArticlesSectionBlog'
import AllArticlesSectionBlog from './page_sections/AllArticlesSectionBlog'
import PromoSectionBlog from './page_sections/PromoSectionBlog'
import './blogs.css'

const Blogs = () => {
  return (
    <StaticLayout>
      <InfoSectionBlog />
      <PopularArticlesSectionBlog />
      <AllArticlesSectionBlog />
      <PromoSectionBlog />
    </StaticLayout>
  )
}

export default Blogs

