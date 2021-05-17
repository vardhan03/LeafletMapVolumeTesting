function giveLines(linesToDraw){

    var tempPolyLines = [];

    console.log("Number of lines requested are : ", linesToDraw);

    for( let i = 1; i <= linesToDraw; i++){
        let aPoint = [(Math.random() * (52.8738 - 51.0212) + 51.0212).toFixed(4), -(Math.random() * (4.2343 - 0.9112) + 0.9112).toFixed(4)]
        // console.log("aPoint:", aPoint);
        let bPoint = [ (Math.random() * (57.8738 - 53.0212) + 53.0212).toFixed(4), -(Math.random() * (6.2343 - 2.9112) + 2.9112).toFixed(4)]
        // console.log("bPoint: ", bPoint);

        console.log("formedLine", [aPoint,bPoint]);    

        tempPolyLines.push([aPoint, bPoint]);
    }
    console.log("Temp polyLines:", tempPolyLines);

    return tempPolyLines;
}

export default giveLines;