import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../stylesheets/BuildingDetail.css";

function BuildingDetail() {
  const [studySpots, setStudySpots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let { buildingName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://studyspots-0c86b8a5475e.herokuapp.com/api/study_spots/building/${buildingName}`)
      .then((response) => response.json())
      .then((data) => {
         setStudySpots(data);
         setIsLoading(false);
              })
      .catch((error) => {
        console.error('Error fetching study spots:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [buildingName]);

    if (isLoading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
      <div class = "building">
        <h2>Study Spots in {buildingName}</h2>
        <div class = "gallery">
          {studySpots.map((spot) => (
          <div class="box">
            <h3>{spot.name}</h3>
            <img src={spot.url} />
          </div>
          ))}
        </div>
      </div>
    );
  }

export default BuildingDetail;
