import React, { useState } from "react";
import Modal from "react-modal";

import Authform from "./Authform";
import Signupform from "./Signupform";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
};

Modal.setAppElement("#root");

const AuthModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  let [signUpOrin, setSignUpOrIn] = useState(0);
  return (
    <div>
      <button style={{ position: "relative", top: "4px" }} onClick={openModal}>
        Login/Signup
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {signUpOrin ? <Signupform setModal={setIsOpen} /> : <Authform />}
        <button
          onClick={() => {
            setSignUpOrIn(!signUpOrin);
          }}
        >
          {signUpOrin ? "Log in" : "Sign up"}
        </button>
      </Modal>
    </div>
  );
};

export default AuthModal;
