import React from "react";
import "./routesModal.css";
import CloseButton from '../../../assets/icons/close_button.png'

const RoutesModal = ({ isModalOpen, closeModal, children }) => {
  if (!isModalOpen) return null;
  return (
    <div className="routes-modal__overlay" onClick={closeModal}>
      <div
        className="routes-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="routes-modal__close" onClick={closeModal}>
          <img src={CloseButton} alt="close button" />
        </button>
        {/* {childWithProps} */}
        {children}
      </div>
    </div>
  );
};

export default RoutesModal;
