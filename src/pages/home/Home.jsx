import React from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import ScrollLayout from "../../components/layouts/scrollLayout/ScrollLayout";
import MobileScrollLayout from "../../components/layouts/mobileScrollLayout/MobileScrollLayout";
import useIsMobile from "../../hooks/useIsMobile";
import MainSectionHome from "./page_sections/MainSectionHome";
import AboutSectionHome from "./page_sections/AboutSectionHome";
import RoutesSectionHome from "./page_sections/RoutesSectionHome";
import ContactsSectionHome from "./page_sections/ContactsSectionHome";
import "./home.css";

const Home = () => {
  const isMobile = useIsMobile(1024);

  return (
    <StaticLayout>
        {isMobile ? (
        <MobileScrollLayout
          sectionOne={<MainSectionHome />}
          sectionTwo={<AboutSectionHome />}
          sectionThree={<RoutesSectionHome />}
          sectionFour={<ContactsSectionHome />}
        />
      ) : (
        <ScrollLayout
          sectionOne={<MainSectionHome />}
          sectionTwo={<AboutSectionHome />}
          sectionThree={<RoutesSectionHome />}
          sectionFour={<ContactsSectionHome />}
        />
      )}
    </StaticLayout>
  );
};

export default Home;
