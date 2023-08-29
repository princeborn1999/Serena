import './Nav.css'
import { Link } from "react-router-dom";
import React,{ useState } from 'react';

function NavComponent() {
    const [active,setActive] = useState('intro');
    let btnClass = 'bg-blue-400 rounded text-white';
    function changeActive(navName) {
        setActive(navName)
    }
    function setClass(navName){
        if(navName === active) return btnClass
        return null
    }
    return(
        <div className="m-5 nav-btn w-40">
            <div label="title">
                <p className='text-lg font-bold'>GET STARTED</p>
            </div>
            <Link to="/">
                <div className={`${setClass('intro')} p-2`}
                    onClick={() => changeActive('intro')} >
                    Introduction
                </div>
            </Link>
            <Link to="/control">
                <div className={`${setClass('control')} p-2`} onClick={() => changeActive('control')} >
                    Control
                </div>
            </Link>
            <Link to="/template">
                <div className={`${setClass('temp')} p-2`}  onClick={() => changeActive('temp')}>
                    Template
                </div>
            </Link>
            <div className='text-gray-400 p-2' onClick={() => changeActive('api')}>
                {'Api(Pending)'}
            </div>
        </div>
    )
}
export default NavComponent