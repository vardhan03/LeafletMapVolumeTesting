import React from "react";
import {CircleMarker, Popup} from "react-leaflet";

const MarkerPopup = (props) => {
    const { number } =  props;

    return (<Popup>
        <div>{number}</div>
    </Popup>);
}

const CircleMarkers = (props) => {
    const { dataPoints } = props;

    const markers = [];

    for(let i = 0; i < dataPoints ; i++){
       var marker =  <CircleMarker 
            key={i} 
            center={[(Math.random() * (54.8738 - 51.0212) + 51.0212).toFixed(4), (Math.random() * (1.2343 - 0.9112) + 0.8112).toFixed(4) ]} 
            radius={3}
            >
            <MarkerPopup number={i} />
        </CircleMarker>
        markers.push(marker);
    }
    return <>{markers}</>
};

export default CircleMarkers;
