import { useState } from "react";
import Modal from "react-modal";
import React from "react";
import SignInModalComponent from "./SignInModal";
function HeaderComponent() {
  const [modalState, setModalState] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(44, 76, 96, 0.75)',
    },
    content: {
      width: "40%",
      maxHeight: "60vh",
      margin: "auto",
      padding: '0',
      border: 'none'
    },
  };
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="relative">
      <div className="fixed sticky top-0 left-0 right-0 p-2 shadow-sm bg-arduinoReact">
        <header className="flex">
          <div className="flex pl-5 ">
            <h1
              className="text-white font-bold text-3xl 
                                       drop-shadow-2xl shadow-white-400/50"
            >
              ZONO
            </h1>
          </div>
          <div className="flex w-full justify-end pr-5">
            <button className="text-white font-semibold" onClick={openModal}>
              sign in
            </button>
          </div>
          <Modal
            isOpen={modalState}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="flex h-full">
              <div className="w-2/5 bg-arduinoReact min-h-full">
                {/* 這邊要放手繪Arduino React */}
              </div>
              <div className="flex h-full">
                <div className="">
                  <div className="m-1">
                    <label htmlFor="account">Account</label>
                    <input className="border pl-2" type="text" />
                  </div>
                  <div className="m-1">
                    <label htmlFor="password">Password</label>
                    <input className="border pl-2" type="text" />
                  </div>
                  <div className="p-5">
                    <button className="m-1" onClick={closeModal}>
                      Login
                    </button>
                    <button className="m-1" onClick={closeModal}>
                      Sign up
                    </button>
                    <button className="m-1" onClick={closeModal}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </header>
      </div>
    </div>
  );
}
export default HeaderComponent;
