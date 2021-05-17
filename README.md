
# Introduction
The application is written to test the leaflet maps responsiveness when one try to renders tons of markers using different libraries.

This application is react application created using create-react-app. All the libraries used for map, markers, lines rendering are react-leaflet and other react-leaflet libraries.

If you want to test and play with it, please access the demo here, https://vardhan03.github.io/LeafletMapVolumeTesting/

# Working of Demo
The demo works like this,

You need to select the map you want to render, then

-> Need to provides the input value with the number of datapoints for markers (if selected marker maps) / number of lines (line maps) and click the button **Enter the value** then corresponding map will render with the entered value.

-> Every time you change the input value in the text box, the map will unmounts, then again you need to provide the another desired value and submit via button.

-> This way we can know how much time the map is taking to re render the map component.

-> Every time you select the different map in the dropdown list, the value will be cleared in the text box(if there is any).

**_Hope you will have a good play with the demo app_** :) 
