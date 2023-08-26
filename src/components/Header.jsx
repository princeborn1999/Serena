import { useState } from 'react';
// import { Modal } from 'react-modal'
// import  SignInModal from './SignInModal'
function HeaderComponent() {
    const [ signInModal, setSignInModal ] = useState(false)
    function signIn(){

    }
    return(
        <div className="relative">
            <div className="fixed sticky top-0 left-0 right-0 p-2 shadow-sm bg-blue-400">
                <header className="flex">
                    <div className="flex justify-starts pl-5 ">
                        <h1 className="text-white font-bold text-3xl drop-shadow-lg shadow-white-400/50">ZONE</h1>
                    </div>
                    <div className="flex justify-end">
                        <button className="text-white" onClick={signIn()}>sign in</button>
                    </div>
                    {/* <Modal
                        isOpen={true}
                    >
                        <p>請輸入帳號密碼</p>
                    </Modal> */}
                </header>
            </div>
        </div>
    )
}
export default HeaderComponent

