import React, { useEffect, useRef, useState } from "react";
import "./scrollLayout.css";

const ScrollLayout = ({ sectionOne, sectionTwo, sectionThree, sectionFour, modalOpen }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    let isScrolling = false;

    if (modalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    const handleWheel = (e) => {
      if (modalOpen) return;

      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;

      setActiveSection((prev) => {
        return e.deltaY > 0
          ? Math.min(prev + 1, sectionsRef.current.length - 1)
          : Math.max(prev - 1, 0);
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    sectionsRef.current[activeSection]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeSection]);

  return (
    <div className="home-scroll-container">
      <section ref={(el) => (sectionsRef.current[0] = el)}>{sectionOne}</section>
      <section ref={(el) => (sectionsRef.current[1] = el)}>{sectionTwo}</section>
      <section ref={(el) => (sectionsRef.current[2] = el)}>{sectionThree}</section>
      <section ref={(el) => (sectionsRef.current[3] = el)}>{sectionFour}</section>
    </div>
  );
};

export default ScrollLayout;
