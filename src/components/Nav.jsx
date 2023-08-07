import './Nav.css'
function NavComponent() {
    return(
        <div className="bg-gray-700 p-5 nav-btn">
            <div>
                <button>Introduction</button>
            </div>
            <div>
                <button>Control</button>
            </div>
            <div>
                <button>Template</button>
            </div>
            <div>
                <button>Timeline</button>
            </div>
            <div>
                <button>API</button>
            </div>
        </div>
    )
}
export default NavComponent