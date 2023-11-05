import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";
import Map from "./Map";


const Home = ({coords}) => {
    return(
        <div>
            <h1></h1>
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>

            <Map coords = {coords} />
        </div>
    )
}

export default Home;