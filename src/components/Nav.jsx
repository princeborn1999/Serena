import './Nav.css'
import { Link } from "react-router-dom";
function NavComponent() {
    return(
        <div className="bg-gray-700 p-5 nav-btn">
            <div>
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
                <button><Link to="/timeline">Timeline</Link></button>
            </div>
            <div>
                <button><Link to="/api">API</Link></button>
            </div>
        </div>
    )
}
export default NavComponent