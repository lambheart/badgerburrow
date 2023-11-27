import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Navbar.css";
import logo_icon from "../assets/logo_icon.png";
import about_icon from "../assets/about_icon.png";


const Navbar = () => {
    return(
        <div class = "navigate">
            <nav>
                <i>
                    <Link className = "nav-link" to = "/">
                        <img id = "logo-icon" src = {logo_icon} alt = "logo icon"/>
                    </Link>
                </i>
                <i>
                    <Link className = "nav-link" to = "/about">
                        <img id = "about-icon" src = {about_icon} alt = "about icon"/>
                    </Link>
                </i>
                <i>
                    <Link className = "nav-link" to = "/submit">
                        <img id = "about-icon" src = {about_icon} alt = "about icon"/>
                    </Link>
                </i>
            </nav>
        </div>
    )
}

export default Navbar;