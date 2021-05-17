import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import Markers from "../utils/Markers";

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

const MarkerClusterMapComponent = (props) => {

    const [position] = useState([52.4862, -1.8904]);
    const { dataPoints } = props;

    return(
        <>
        <MapContainer center={position} zoom={6}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup>
                <Markers dataPoints = {dataPoints} />
            </MarkerClusterGroup>
        </MapContainer>
        </>
    )
}

export default MarkerClusterMapComponent;