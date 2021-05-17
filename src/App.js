import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

import './App.css';
import ConditionalMapRendering from "./components/ConditionalMapRendering";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }

})
);

const App = () => {

  const classes = useStyles();

  const [inputValue, setInputValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmit(true);
    setInputValue(inputValue);
    e.preventDefault();
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsSubmit(false);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
    setInputValue('');
    // console.log("Selected value", selectedValue);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
              <form onSubmit={handleSubmit}>
                <label>
                  Enter the number of datapoints/ lines to plot on the map:
                  <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} />
                </label>
                <input type="submit" value="Enter the value" />
              </form>
          </div>
          <div className="col">
            <FormControl className={classes.formControl}>
                <InputLabel>Select the map </InputLabel>
                <Select 
                  value={selectedValue}
                  onChange={handleChange} 
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="leafletmap">Leaflet Map</MenuItem>
                    <MenuItem value="pixioverlay">PixiOverlay Map</MenuItem>
                    <MenuItem value="circlemarkers">CircleMarkers Map</MenuItem>
                    <MenuItem value="markersclusters">Marker Clusters Map</MenuItem>
                    <MenuItem value="lines">Map with lines</MenuItem>
                    <MenuItem value="linesandmarkers">Map with lines and markers</MenuItem>
                </Select>
              </FormControl>
          </div>
        </div>
      </div>
      <hr/>
      <div>
        {
          selectedValue === "" && (
          <h3>Please select the map </h3> 
          )
        }
        {isSubmit && (
          ConditionalMapRendering(inputValue, selectedValue)
          )
        }
      </div>
    </div>
  );
}

export default App;
