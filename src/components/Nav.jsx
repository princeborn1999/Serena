import './Nav.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
function NavComponent() {
    const [active,setActive] = useState('')
    return(
        <div className="m-5 nav-btn w-40">
            <div label="title">
                <p className='text-lg font-bold'>GET STARTED</p>
            </div>
            <div className='bg-teal-100 rounded'>
                <button>
                    <Link to="/">Introduction</Link>
                </button>
            </div>
            <div>
                <button><Link to="/control">Control</Link></button>
            </div>
            <div>
                <button><Link to="/template">Template</Link></button>
            </div>
            <div>
                <button><Link to="/game">Game</Link></button>
            </div>
            <div>
                <button><Link to="/api">API</Link></button>
            </div>
        </div>
    )
}
export default NavComponent