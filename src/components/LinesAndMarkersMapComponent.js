import React, { useState } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import giveLines from "../utils/giveLines";
import giveMarkers from "../utils/giveMarkers";
import PixiOverlay from "./PixiOverlay";

const LinesAndMarkersMapComponent = (props) => {

    const [ center] = useState([52.4862, -1.8904]);
    const { dataPoints } = props;

    const polyLines = giveLines(dataPoints);
    const markers = giveMarkers(dataPoints);

    return (
        <>
            <MapContainer 
                center={center} 
                zoom={6} 
                preferCanvas={true}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
               {
                   polyLines.map((polyline, idx) => 
                    <Polyline
                        key = {idx}
                        positions = {polyline}
                        color = { idx%2 === 0 ? 'green' : 'blue'}
                        />
                    )
               }
                <PixiOverlay markers={markers}/>
            </MapContainer>
        </>
    )

}

export default LinesAndMarkersMapComponent;