import React from "react";
import {Marker, Popup} from "react-leaflet";
// import {LocationIcon} from "./LocationIcon";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const MarkerPopup = (props) => {
    const { number } =  props;

    return (<Popup>
        <div>{number}</div>
    </Popup>);
}

const Markers = (props) => {
    const { dataPoints } = props;

    const markers = [];

    for(let i = 0; i < dataPoints ; i++){
       var marker =  <Marker 
            key={i} 
            position={[(Math.random() * (54.8738 - 51.0212) + 51.0212).toFixed(4), (Math.random() * (1.2343 - 0.9112) + 0.8112).toFixed(4) ]} 
            icon={new Icon({iconUrl: markerIcon, iconSize: [25, 41], iconAnchor: [12, 41]})}
            >
            <MarkerPopup number={i} />
        </Marker>
        markers.push(marker);
    }
    return <>{markers}</>
};

export default Markers;
