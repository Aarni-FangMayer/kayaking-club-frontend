import React, { useState } from 'react'
import SliderBigMobile from '../../../components/sliders/slider_bid_mobile/SliderBigMobile'
import SliderBig from '../../../components/sliders/slider_big/SliderBig'
import RoutesModal from '../../../components/modals/routesModal/RoutesModal'
import ToursCatalog from '../../tours/toursCatalog/ToursCatalog'

import './routesSectionHome.css'
import NatureImage1 from "../../../assets/images/nature_img1.jpg";
import NatureImage2 from "../../../assets/images/nature_img2.jpg";
import NatureImage3 from "../../../assets/images/nature_img3.jpg";
import NatureImage4 from "../../../assets/images/nature_img4.jpg";

const RoutesSectionHome = ({ setModalOpen }) => {
    const [routesModalOpen, setRoutesModalOpen] = useState(false);
  
    const closeRoutesModal = () => {
      setRoutesModalOpen(false);
      setModalOpen(false);
    };

    const initialCards = [
    {
      id: 1,
      subtitle: "difficulty: easy",
      title: "Bow River Serenity",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "950€",
      image: NatureImage1,
    },
    {
      id: 2,
      subtitle: "difficulty: middle",
      title: "Lake Louise Paddle",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "1010€",
      image: NatureImage2,
    },
    {
      id: 3,
      subtitle: "difficulty: easy",
      title: "Algonquin Explorer",
      description:
        "Ideal for beginners, this calm and scenic route winds through the heart of Banff National Park, offering crystal-clear waters and mountain views.",
      price: "790€",
      image: NatureImage3,
    },
    {
      id: 4,
      subtitle: "difficulty: hard",
      title: "Yukon Wilderness",
      description:
        "This route offers breathtaking views of untouched nature and wild rivers like the Yukon River. It’s ideal for those seeking adventure and the chance to enjoy solitude in the wild.",
      price: "1150€",
      image: NatureImage4,
    },
  ];
  return (
    <section id="sectionThree" className="routes" >
      <SliderBigMobile cards={initialCards} blockTitle={"Popular Routes"} setRoutesModalOpen={setRoutesModalOpen} setModalOpen={setModalOpen} />
      <SliderBig initialCards={initialCards} title={"Popular Routes"} setRoutesModalOpen={setRoutesModalOpen} setModalOpen={setModalOpen} />
      <RoutesModal isModalOpen={routesModalOpen} closeModal={closeRoutesModal}>
        <ToursCatalog singleDayTitle={""} multiDayTitle={""} />
      </RoutesModal>
    </section>
  )
}

export default RoutesSectionHome
