import React from "react";
import StaticLayout from "../../components/layouts/staticLayout/StaticLayout";
import MainSectionHome from "./page_sections/MainSectionHome";
import AboutSectionHome from "./page_sections/AboutSectionHome";
import RoutesSectionHome from "./page_sections/RoutesSectionHome";
import ContactsSectionHome from "./page_sections/ContactsSectionHome";
import "./home.css";

const Home = () => {
  return (
    <StaticLayout>
      <MainSectionHome />
      <AboutSectionHome />
      <RoutesSectionHome />
      <ContactsSectionHome />
    </StaticLayout>
  );
};

export default Home;
