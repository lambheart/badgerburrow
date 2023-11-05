import React, { useEffect, useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Map from './components/MapComponent';

function App() {
  var coords;
  function success(pos) {
    var crd = pos.coords;
    coords = crd;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
      .query({ name: "geolocation"})
      .then(function (result) {
        console.log(result);
        if (result.state === "granted") {
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "prompt") {
          //If prompt then the user will be asked to give permission
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
      });
    } else {
      console.log("Geolocation not supported");
    }
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/studyspots/" element={<Home coords = {coords}/>} />
          <Route path="/studyspots/about" element={<About />} />
          <Route path="/studyspots/map" element={<Map coords = {coords}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
