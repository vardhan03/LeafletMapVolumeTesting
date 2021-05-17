import L from "leaflet";

//Creates the leaflet icon (custom marker icon) that renders on the map
export const LocationIcon = new L.Icon({
    iconUrl: require('../assets/location-icon.svg'),
    iconRetinaUrl: require('../assets/location-icon.svg'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    iconSize: [35,35],
    className: 'leaflet-venue-icon'
});