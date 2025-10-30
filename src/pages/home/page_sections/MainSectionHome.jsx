import React, { useState } from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import SliderSmall from "../../../components/sliders/slider_small/SliderSmall";
import Modal from "../../../components/modals/modalLayout/Modal";
import UserAuthModal from "../../../components/modals/userAuthModal/UserAuthModal";
import SuccessRegistrationModal from "../../../components/modals/successRegistrationModal/SuccessRegistrationModal";
import './mainSectionHome.css'

const MainSectionHome = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [newUserRegistered, setNewUserregistered] = useState(false);
  const closeAllModals = () => {
      setLoginModalOpen(false);
      setRegistrationModalOpen(false);
      setNewUserregistered(false);
  }

  const loginAccount = () => {
    console.log('welcome to ypur account');
    setLoginModalOpen(false);
  }

  const registerUser = () => {
    console.log("user has been added to database");
    setRegistrationModalOpen(false);
    setNewUserregistered(true);
  }
  return (
    <section id="sectionOne" className="home-main">
      <div className="home-content">
        <div className="home-content__image">
          <SliderSmall />
        </div>
        <div className="home-content__text">
          <h1 className="home-content__title">
            <span>kayaking </span>club
          </h1>
          <p className="home-content__description">
            Our tours are designed to fit your pace, your passion, <br />
            and adventure.
          </p>
          <ArrowBlueButton clickEvent={() => setLoginModalOpen(true)} text={"Join us here"} />
        </div>
      </div>
      <Modal closeModal={closeAllModals} isModalOpen={loginModalOpen} loginAccount={loginAccount} registrationModalOpen={registrationModalOpen} setRegistrationModalOpen={setRegistrationModalOpen} registerUser={registerUser}>
        {newUserRegistered ? <SuccessRegistrationModal loginAccount={loginAccount} /> : <UserAuthModal />}
      </Modal>
    </section>
  );
};

export default MainSectionHome;
