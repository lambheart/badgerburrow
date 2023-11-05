import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/BuildingDetail.css';

function BuildingDetail() {
  const [studySpots, setStudySpots] = useState([]);
  let { buildingName } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/study_spots/building/${buildingName}`)
      .then((response) => response.json())
      .then((data) => {
         setStudySpots(data);
              })
      .catch((error) => {
        console.error('Error fetching study spots:', error);
      });
  }, [buildingName]);

    return (
        <div class= "building">
          <h2>Study Spots in {buildingName}</h2>
          <div class = "gallery">
            {studySpots.map((spot) => (
            <div class = 'box'>
              <h3>{spot.name}</h3>
                          <img src={spot.url} />
            </div>
            ))}
          </div>
        </div>
    );
  }

export default BuildingDetail;
