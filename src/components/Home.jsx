import React, { Component, useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";
import MapComponent from "./MapComponent";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



export class Home extends Component {
    render() {
        const initcrd = {lat:43.0766, lng: -89.4125}
        return(
        <div class = "home page">
            <h1></h1>
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>

            <Map 
                google = {window.google} 
                zoom = {16} 
                initialCenter = {initcrd}
                
            >
                <Marker onClick = {this.onMarkerClick}
                    name = {'Current location'} />
            </Map>
        </div>
        );
        }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB0DSQyxeTXhJzRNEVwQ3khFG7QHX53Yxo')
})(Home);