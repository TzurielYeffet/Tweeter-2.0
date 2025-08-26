import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"
export function NavBar(){
    const location = useLocation()
    return(
        <>
        <nav>
            <div className="navbar-container">
            <div className="navbar-links">
                <Link to="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}>
                Home
                </Link>
                <Link to="/profile" className={`navbar-link ${location.pathname === "/profile" ? "active" : ""}`}>
                    Profile
                </Link>

            </div>
            </div>
        </nav>
        </>
    )

}