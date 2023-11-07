import React, { Component, useContext, useState, useEffect } from 'react';
import { Navigate, redirect, useNavigate, Link } from 'react-router-dom';
import "../App.css";
import "../stylesheets/Home.css";
import large_logo from "../assets/large_logo.png";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import BuildingDetail from './BuildingDetail'



function Home({ google }) {
  const [studySpots, setStudySpots] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for navigation

    useEffect(() => {
        fetch('https://studyspots-0c86b8a5475e.herokuapp.com/api/study_spots')
          .then(response => response.json())
          .then(data => {
            setStudySpots(data);
          })
          .catch(error => {
            console.error('Error fetching study spots:', error);
          });
      }, []);

    const onMarkerClick = (spot) => {
        navigate(`/${encodeURIComponent(spot.building)}`);
      };

    const renderMarkers = () => {
        return studySpots.map((spot, index) => (
          <Marker
            key={index}
            position={{ lat: spot.lat, lng: spot.long }}
            name={spot.name}
            onClick={() => onMarkerClick(spot)}
          />
        ));
      };

   const initialCenter = { lat: 43.0766, lng: -89.4125 };

     return (
       <div className="home page">
         <img id='large-logo' src={large_logo} alt="badger burrow" />
         <Map
           google={google}
           zoom={16}
           initialCenter={initialCenter}
         >
           {renderMarkers()}
           <Marker onClick={() => navigate('/current-location')} name={'Current location'} />
         </Map>
       </div>
     );
   }

   export default GoogleApiWrapper({
     apiKey: 'AIzaSyB0DSQyxeTXhJzRNEVwQ3khFG7QHX53Yxo'
   })(Home);
