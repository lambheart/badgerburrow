import React, { useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";


const Home = () => {
    return(
        <div>
            <h1>Study Haven</h1>
            <img id = 'large-logo' src = {large_logo} />
        </div>
    )
}

export default Home;