import style from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return <ul>
        <li><NavLink to="/">Homepage</NavLink></li>
        <li><NavLink to="/Products">Products</NavLink></li>
        <li><NavLink to="/AboutUs">About us</NavLink></li>
    </ul>
}

export default Navbar