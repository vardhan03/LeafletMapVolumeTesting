function giveMarkers(dataPoints) {
    const markers = [];
    
    for(let i = 1; i <= dataPoints ; i++)
    {
        var marker = 
        {
            id: i,
            iconColor: i%2 === 0 ? 'blue' : 'red',
            position: [(Math.random() * (52.8738 - 51.0212) + 51.0212).toFixed(4), -(Math.random() * (4.2343 - 0.9112) + 0.8112).toFixed(4) ],
            // popup: renderToString(
            //     <MarkerPopup number={i} />
            // ),
            tooltip: 'marker'
        }
        markers.push(marker);
    }

    console.log("Rendered markers", markers);
    console.log("Markers count: ", markers.length);

    return markers;
}

export default giveMarkers;