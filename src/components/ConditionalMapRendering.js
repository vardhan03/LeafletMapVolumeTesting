import React from "react";
import LeafletMapComponent from "./LeafletMapComponent";
import PixiOverlayMapComponent from "./PixiOverlayMapComponent";
import CircleMarkersMapComponent from "./CircleMarkersMapComponent";
import MarkerClusterMapComponent from "./MarkerClusterMapComponent";
import RoutingMapComponent from "./RoutingMapComponent";
import LinesAndMarkersMapComponent from "./LinesAndMarkersMapComponent";

const ConditionalMapRendering = (dataPoints, selectedValue) => {
    switch(selectedValue){
        case 'leafletmap':
            return <LeafletMapComponent dataPoints = {dataPoints}/>
        case 'pixioverlay':
            return <PixiOverlayMapComponent dataPoints = {dataPoints}/>
        case 'circlemarkers':
            return <CircleMarkersMapComponent dataPoints = {dataPoints} />
        case 'markersclusters':
            return <MarkerClusterMapComponent dataPoints = {dataPoints}/>
        case 'lines':
            return <RoutingMapComponent dataPoints = {dataPoints} />
        case 'linesandmarkers':
            return <LinesAndMarkersMapComponent dataPoints = {dataPoints} />
        default:
            <h2>These are another maps!!</h2>    
    }              
}

export default ConditionalMapRendering;