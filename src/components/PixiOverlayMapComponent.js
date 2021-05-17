import React, { useState } from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import PixiOverlay from "./PixiOverlay";
import 'leaflet/dist/leaflet.css';
//import { renderToString } from 'react-dom/server';
import giveMarkers from "../utils/giveMarkers";

// const MarkerPopup = (props) => {
//     const { number } =  props;

//     return (<Popup>
//         <div>{number}</div>
//     </Popup>);
// }

const PixiOverlayMapComponent = (props) => {

    const [position, setCenter] = useState([52.4862, -1.8904]);
    const { dataPoints } = props;
    
    const markers = giveMarkers(dataPoints);

    return(
        <>
        <MapContainer 
            center={position} 
            zoom={6} 
            preferCanvas={true}
            minZoom={3}
            maxZoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <PixiOverlay markers={markers} />
        </MapContainer>
        </>
    )
}

export default PixiOverlayMapComponent;