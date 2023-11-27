import React from 'react';
import "../App.css";
import "../stylesheets/About.css";
import large_logo from "../assets/large_logo.png";


const About = () => {
    return(
        <div class = "about page">
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>

            <h2>why badger burrow?!</h2>

            <p>
                We are a group of underclassmen that created badger burrow to help fellow UW-Madison students
                find cute study spots. As our school grows, it becomes harder and harder to find a spot of your own.
                We're here to help!
            </p>

            <h2>how it works</h2>

            <p>
                badger burrow will recommend a few nearby study spots for you on UW-campus! you can click map markers to look at specific locations within a building
                Ideally, badger burrow will one day be able to ask you for your current location, find study spots based on your preferences in location or vibe, and take study spot submissions!
            </p>

            <h2>credits</h2>

            <p>
                We would like to give credit to dancingbannana on Reddit and their dedication to making education accessible to all Badgers. Without their inital <a href = "https://buckygrades.com/study/">website</a> and <a href= "https://www.reddit.com/r/UWMadison/comments/11wrmr3/i_walked_4648_miles_through_every_building_on/">Reddit post</a>, our project would not have been possible.
            </p>
        </div>
    )
}

export default About;