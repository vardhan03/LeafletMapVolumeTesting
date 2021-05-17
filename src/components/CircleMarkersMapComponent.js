import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CircleMarkers from "../utils/CircleMarkers";

import 'leaflet/dist/leaflet.css';

const CircleMarkersMapComponent = (props) => {

    const [position] = useState([52.4862, -1.8904]);
    const { dataPoints } = props;

    return(
        <>
        <MapContainer 
            center={position} 
            zoom={6} 
            preferCanvas={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <CircleMarkers dataPoints={dataPoints} />
        </MapContainer>
        </>
    )
}

export default CircleMarkersMapComponent;