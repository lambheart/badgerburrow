import React, { Component, useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";
import MapComponent from "./MapComponent";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useHistory } from 'react-router-dom';

const history = useHistory();

function goToBuildingPage(name) {
    history.push(`/study_spots/building/${name}`);
}

export class Home extends Component {

state = {
        study_spots: []
    };

    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/study_spots')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    study_spots: data
                });
            })
            .catch(error => {
                console.error('Error fetching study spots:', error);
            });
    }

    renderMarkers() {
            return this.state.study_spots.map((spot, index) => (
                <Marker
                    key={index}
                    position={{ lat: spot.lat, lng: spot.long }}
                    name={spot.name}
                    onClick={() => goToBuildingPage(spot.building)}
                />
            ));
        }

    render() {
        const initcrd = {lat:43.0766, lng: -89.4125}
        return(
        <div class = "home page">
            <h1></h1>
            <img id = 'large-logo' src = {large_logo} alt = "badger burrow"/>

            <Map 
                google = {this.props.google}
                zoom = {16} 
                initialCenter = {initcrd}
                
            >
                 {this.renderMarkers()}
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
