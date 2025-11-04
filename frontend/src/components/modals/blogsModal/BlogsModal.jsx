import React from 'react';
import ReactDOM from "react-dom";
import './blogsModal.css'
import CloseButton from '../../../assets/icons/close_button.png'

const BlogsModal = ({ isModalOpen, closeModal, children}) => {
    if (!isModalOpen) return null;
    // const childWithProps = React.cloneElement(children, { loginAccount, registrationModalOpen, setRegistrationModalOpen, registerUser });

  return (
    <div className="blogs-modal__overlay" onClick={closeModal}>
      <div className="blogs-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="blogs-modal__close" onClick={closeModal}><img src={CloseButton} alt="close button" /></button>
        {/* {childWithProps} */}
        {children}
      </div>
    </div>
  )
}

export default BlogsModal
