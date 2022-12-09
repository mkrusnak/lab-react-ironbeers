
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return(
        <nav className="navbar">
            <NavLink to="/">
               <button>Home</button>
            </NavLink>
        </nav>
    )
}

export default Navbar;