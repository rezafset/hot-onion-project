import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {        
        height: "65vh",
        width: "100%"
    };
          
    const defaultCenter = {
        lat: 23.6850, 
        lng: 90.3563
    }
    return(
        <LoadScript
            googleMapsApiKey='AIzaSyCFt8gpIQ7Dry4mST7Gfgl_1cB0DPa64XA'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={11}
                center={defaultCenter}
            />       
        </LoadScript>
    )
}

export default MapContainer;