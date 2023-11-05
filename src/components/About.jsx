import React, { useContext, useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/About.css";
import large_logo from "../assets/large_logo.png";


const About = () => {
    return(
        <div class = "about page">
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>

            <h3>why badger burrow?!</h3>

            <p>
                we are a group of underclassmen that created badger burrow to help fellow UW-Madison students
                find cute study spots. as our school grows, it becomes harder and harder to find a spot of your own.
                we're here to help!
            </p>

            <h3>how it works</h3>

            <p>
                badger burrow will ask you for your current location. upon receiving your location, it will then recommend a few nearby study spots for you!
                ideally, badger burrow will one day be able to find study spots based on your preferences in location or vibe!
            </p>
        </div>
    )
}

export default About;