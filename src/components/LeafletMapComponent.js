import React, { useState } from "react";
import {MapContainer, TileLayer } from "react-leaflet";
//import useSwr from "swr";

import Markers from "../utils/Markers";

import 'leaflet/dist/leaflet.css';

//const fetcher = (...args) => fetch(...args).then(response => response.json());

const LeafletMapComponent = (props) => {

    const [position] = useState([52.4862, -1.8904]);
    const { dataPoints } = props;

    // const url = "https://data.police.uk/api/crimes-street/all-crime?poly=50.268,2.543:52.794,0.238:50.130,1.478";

    // const { data, error } = useSwr(url, { fetcher });

    // const dataLength = data && data.length;
    // console.log(dataLength);

    // const crimes = data && !error ? data.slice(0,inputValue) : [];
    //setMarkerData(crimes);

    //console.log(crimes);

    // const markers = {};

    // for(let i=0 ; i< 10; i++){
    //     markers.append({
    //         "latitude" : (Math.random() * (52.8738 - 51.0212) + 51.0212).toFixed(4),
    //         "longitude" : (Math.random() * (1.6343 - 0.8112) + 0.8112).toFixed(4)
    //     })
    // }

    // console.log(markers);
    // var tempMarkers = JSON.stringify(markers);
    // console.log("Temp markers: ",tempMarkers);

    return(
        <>
        <MapContainer center={position} zoom={6}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers dataPoints = {dataPoints} />
        </MapContainer>
        </>
    )
}

export default LeafletMapComponent;