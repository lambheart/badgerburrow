import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";


const Home = () => {
    return(
        <div class = "home page">
            <h1></h1>
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>
        </div>
    )
}

export default Home;