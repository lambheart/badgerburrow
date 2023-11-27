import React, { useState, useEffect } from 'react';
import "../App.css";
import "../stylesheets/SubmissionPage.css";



function SubmissionPage() {
    const [studySpots, setStudySpots] = useState([]);

    useEffect(() => {
        fetch('https://studyspots-0c86b8a5475e.herokuapp.com/api/study_spots/get_all_buildings') 
          .then(response => response.json())
          .then(data => {
            setStudySpots(data);
          })
          .catch(error => {
            console.error('Error fetching buildings:', error);
          });
      }, []);

    return (
       <div className="submission page">
            <h2>submit a study spot!</h2>
            <div className='formdiv'>
                <form action="" id="submitform">
                    <ul>
                        <li>
                            <label> email: 
                                <input type="text" id = "email" name="email" /> 
                            </label>
                        </li>
                        <li>
                            <label>building: 
                                <select name="blding" id="blding" form="submitform">
                                    {studySpots.map((spot) => (
                                        <option value="{spot.building}">{spot.building}</option>
                                    ))}
                                </select>
                            </label>
                        </li>
                        <li>
                            <label> study spot name:
                                <input type="text" id = "spot-name" name= "spot-name" placeholder="floor, room number, room name, etc.."/>
                            </label>
                        </li>
                        <li>
                            <label> image link:
                                <input type="text" id = "image" name= "image" placeholder=""/>
                            </label>
                        </li>
                        <li>
                            <button type="submit">submit</button>
                        </li>

                    </ul>
                </form>
            </div>
       </div>
    );
}

export default SubmissionPage;
