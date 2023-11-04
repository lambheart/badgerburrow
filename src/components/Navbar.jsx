import React, { useContext, useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Navbar.css";


const Navbar = () => {
    return(
        <div class = "navigate">
            <nav>
                <i>
                    <Link className = "text-link" to = "/">
                        HOME
                    </Link>
                </i>
                <i>
                    <Link className = "text-link" to = "/about">
                        ABOUT
                    </Link>
                </i>
            </nav>
        </div>
    )
}

export default Navbar;