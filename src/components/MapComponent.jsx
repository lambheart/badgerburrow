import React from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";

const Map = ({coords}) => {
    const {isLoaded, loadError} = useLoadScript ({
        googleMapsApiKey: 'AIzaSyB0DSQyxeTXhJzRNEVwQ3khFG7QHX53Yxo',
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback(map => {
        mapRef.current = map;
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Maps";
    
    return (
        <div>
            <GoogleMap 
             mapContainerStyle = {{
                height:"800px",
             }}
             center = {{lat: coords.latitude, lng: coords.longitude}}
             defaultZoom = {8}
             onLoad={onMapLoad}
            ></GoogleMap>
        
        </div>
    )
}

export default Map;
