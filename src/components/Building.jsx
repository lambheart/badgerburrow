import React from 'react';

const Building = ({name}) => {
    
    const new_name = name.replace(/ /g, "%20").replace(/,/g, "%2C");
    var spots = []
    fetch('http://127.0.0.1:5000/api/study_spots/building/'+new_name)
        .then(response => response.json())
        .then(data => {
            spots = data
        })

    return (
        <div>
            {spots.map((spot) => (
                <div>
                    <img src={spot.img} />
                    <h1>{spot.name}</h1>
                </div>
            ))}
        </div>
    )

};

export default Building;
