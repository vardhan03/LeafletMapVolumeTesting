import { useLeafletContext } from "@react-leaflet/core";
import L, { polyline } from "leaflet";
import { useMap } from "react-leaflet";


function giveTempPolyLines(linesToDraw){
    var tempPolyLines = [];

    console.log("Number of lines requested are : ", linesToDraw);

    for( let i = 1; i <= linesToDraw; i++){
        let aPoint = [(Math.random() * (52.8738 - 51.0212) + 51.0212).toFixed(4), (Math.random() * (4.2343 - 0.9112) + 0.9112).toFixed(4)]
        console.log("aPoint:", aPoint);
        let bPoint = [ (Math.random() * (57.8738 - 53.0212) + 53.0212).toFixed(4),  (Math.random() * (6.2343 - 2.9112) + 2.9112).toFixed(4)]
        console.log("bPoint: ", bPoint);

        console.log("formedLine", [aPoint,bPoint]);    

        tempPolyLines.push([aPoint, bPoint]);
    }
    console.log("Temp polyLines:", tempPolyLines);

    return tempPolyLines;
}

const Routing = (props) => {
    const { numberOfLines } = props;
    const map = useMap();

    const context = useLeafletContext();

    let retrievedPolyLines = giveTempPolyLines(numberOfLines); 

    retrievedPolyLines.map((item, index) => {

        console.log(`Line ${index}:`, item);
      
        let polyLine = new L.polyline(item, { color: 'green'});
        const container = context.layerContainer || context.map;
        container.addLayer(polyLine);
    })

//     console.log("tempPolyLines[0]: ", tempPolyLines[0]);

//     L.polyline(tempPolyLines[0]).addTo(map);

//     let atempLine = [
//         [45.51, -122.68],
//         [37.77, -122.43]
//    ];
//    console.log(" a TempLine :", atempLine);
//    L.polyline(atempLine).addTo(map);   

    return null
}

export default Routing;