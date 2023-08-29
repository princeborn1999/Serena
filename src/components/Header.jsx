import { useState } from 'react';
import Modal from 'react-modal'
import React from 'react';
import ReactDOM from 'react-dom';
// import  SignInModal from './SignInModal'
function HeaderComponent() {
    const [modalState, setModalState] = useState(false);
    const customStyles = {
        content: {
            width: '50%',
            maxHeight: '80vh',
            margin: 'auto'
        }
    };
    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }

    return(
        <div className="relative">
            <div className="fixed sticky top-0 left-0 right-0 p-2 shadow-sm bg-blue-400">
                <header className="flex">
                    <div className="flex pl-5 ">
                        <h1 className="text-white font-bold text-3xl 
                                       drop-shadow-2xl shadow-white-400/50">ZONE</h1>
                    </div>
                    <div className="flex w-full justify-end pr-5">
                        <button className="text-white font-semibold" onClick={openModal}>sign in</button>
                    </div>
                    <Modal 
                        isOpen={modalState} 
                        onRequestClose={closeModal}
                        style={customStyles}>
                        <div className='flex justify-center'>
                            <div>
                                <div className='m-1'>
                                    <label htmlFor="account">Account</label><input type="text" />
                                </div>
                                <div className='m-1'>
                                <label htmlFor="password">Password</label><input type="text" />
                                </div>
                                <div className='p-5'>
                                    <button className='m-1' onClick={closeModal}>Login</button>
                                    <button className='m-1' onClick={closeModal}>Sign up</button>
                                    <button className='m-1' onClick={closeModal}>Cancel</button>
                                </div>
                            </div>
                        </div>    
                    </Modal>
                </header>
            </div>
        </div>
    )
}
export default HeaderComponent

