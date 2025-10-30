import React from 'react'
import SliderBig from '../../../components/sliders/slider_big/SliderBig'
import SliderBigMobile from "../../../components/sliders/slider_bid_mobile/SliderBigMobile"

import './multiDayRouteSection.css'
import NatureImage5 from "../../../assets/images/nature_img5.jpg";
import NatureImage6 from "../../../assets/images/nature_img6.jpg";
import NatureImage7 from "../../../assets/images/nature_img7.jpg";
import NatureImage8 from "../../../assets/images/nature_img8.jpg";

const MultiDayRouteSection = () => {
   const initialCards = [
        {
          id: 1,
          subtitle: "difficulty: middle",
          title: "Thousand Islands Voyage",
          description:
            "Paddle among over 1,800 scenic islands on the St. Lawrence River, exploring hidden coves and historic landmarks. Perfect for intermediate kayakers who enjoy calm waters with plenty to discover.",
          price: "880",
          image: NatureImage5,
        },
        {
          id: 2,
          subtitle: "difficulty: hard",
          title: "Nahanni River Expedition",
          description:
            "A true wilderness adventure through the remote Northwest Territories. This challenging route offers towering canyons, powerful rapids, and the thrill of venturing into one of Canada’s wildest rivers.",
          price: "1490€",
          image: NatureImage6,
        },
        {
          id: 3,
          subtitle: "difficulty: easy",
          title: "Georgian Bay Escape",
          description:
            "Crystal-clear waters and rugged coastlines make this route on Lake Huron perfect for beginners and families. Enjoy sandy beaches, wildlife sightings, and gentle paddling in sheltered bays.",
          price: "790€",
          image: NatureImage7,
        },
        {
          id: 4,
          subtitle: "difficulty: middle",
          title: "Haida Gwaii Coastal Journey",
          description:
            "Explore the mystical islands of Haida Gwaii, rich with Indigenous culture, old-growth rainforests, and dramatic coastlines. A multi-day adventure for paddlers seeking both beauty and history.",
          price: "1250€",
          image: NatureImage8,
        },
      ];
  return (
    <section id="sectionThree">
      <SliderBig initialCards={initialCards} title={"Multi-day expeditions"} />
      <SliderBigMobile cards={initialCards} blockTitle={"Multi-day expeditions"} />
    </section>
  )
}

export default MultiDayRouteSection
