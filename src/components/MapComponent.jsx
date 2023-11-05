import React from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";

const Map = ({coords}) => {
    const {isLoaded, loadError} = useLoadScript ({
        googleMapsApiKey: 'AIzaSyB0DSQyxeTXhJzRNEVwQ3khFG7QHX53Yxo',
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback(map => {
        mapRef.current = map;
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Maps";
    
    return (
        <div>
            <GoogleMap 
             mapContainerStyle = {{
                height:"800px",
             }}
             defaultCenter= {{lat: 43.07283406752125, lng: -89.4015819593820}}
             // center = {{lat: coords.latitude, lng: coords.longitude}}
             defaultZoom = {8}
             onLoad={onMapLoad}
            ></GoogleMap>
        
        </div>
    )
}

export default Map;
