import React from 'react'
import ArrowBlueButton from '../../buttons/arrow_blue/ArrowBlueButton'
import './articleCard.css'

const ArticleCard = ({ subtitle, description, btnText }) => {
  return (
    <div className="article-card">
        <div className="article-card__content">
            <h3 className="article-card__subtitle">{subtitle}</h3>
            <p className="article-card__description">{description}</p>
        </div>
        <ArrowBlueButton text={btnText} />
    </div>
  )
}

export default ArticleCard
