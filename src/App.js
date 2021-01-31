import Switch from "react-switch";
import React, {Component}from 'react';
import TextField from "@material-ui/core/TextField"
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';
import swap from './Icons/swap.svg';
import go from './Icons/go.svg';
import bathroom from './Icons/bathroom.svg';
import food from './Icons/food.svg';
import zoom_in from './Icons/ZoomIn.svg';
import zoom_out from './Icons/ZoomOut.svg';
import zoom_reset from './Icons/Reset.svg';
import Zoom from '@material-ui/core/Zoom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TTUMap from "./Icons/Icon.svg";
import basketball from "./Icons/basketball.svg";
import football from "./Icons/football.svg";
import library from "./Icons/library.svg";
import rec from "./Icons/rec.svg";
import sub from "./Icons/sub.svg";
import demo from "./Icons/demo.svg";



//Slider creation classes
class ThemeSwitch extends Component {
  constructor() { //Creating the slider
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) { //What will happen on state change
    this.setState({ checked });
    var sidePanel = document.getElementById("SidePanel");
    console.log(sidePanel);
    if(checked){
      document.body.style = 'background: #2B2D2F';
      sidePanel.className = "SidePanelDark"
    }
    else{
      document.body.style = 'background: #FFFFFF';
      sidePanel.className = "SidePanel"
    }
  }
  render() { //What the slider will look like
    return (
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#4B4D4F"
            onHandleColor="#2B2D2F"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="Switch"
          />
    )
  }
}
class BathroomSwitch extends Component {
  constructor() { //Creating the slider
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) { //What will happen on state change
    this.setState({ checked });
    if(checked){
      console.log("Male");
    }
    else{
      console.log("Female");
    }
  }
  render() { //What the slider will look like
    return (
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            offColor='#B85887'
            onColor="#2768A4"
            offHandleColor="#CC6594"
            onHandleColor="#347DC1"
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20
                }}
              >
                F
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 20
                }}
              >
                M
              </div>
            }
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="Switch"
          />
    )
  }
}

const HTMLTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: theme.typography.pxToRem(20),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


const data = require('./locations.json');
var Buildings = [];
let Rooms = new Map();

for(var i = 0; i < data.Buildings.length; i++){
  Buildings.push(data.Buildings[i][0]);
  Rooms.set(data.Buildings[i][0], data.Buildings[i][2].Rooms);
}

//Get building from From building side
function getInputTop(){
  var current_building = document.getElementById("fromBuilding").value;
  console.log(current_building);
  document.getElementById("fromRoom").disabled = false;
}

//Get building from To building side
function getInputBottom(){
  var current_building = document.getElementById("toBuilding").value;
  console.log(current_building);
  document.getElementById("toRoom").disabled = false;
}

//Map render Class
class mapArea extends Component{

  render() {
    return (
      <TransformWrapper defaultScale={1} marginRight="0" style={{float: "right"}}>
        {({
            zoomIn,
            zoomOut,
            resetTransform,
            options: { limitToBounds, transformEnabled, disabled },
            ...rest
          }) => (
            <React.Fragment>
              <TransformComponent>
                <div className="Container">
                  <img src={demo} alt="TTU Map" className="mapImage"/> {/*REPLACE demo with TTUMap for final product*/}
                </div>
              </TransformComponent>

              {/*Map Buttons */}
              <div className="mapButtonsContainer">
                    <HTMLTooltip title="Zoom In" placement="left" TransitionComponent={Zoom}>
                      <button
                        onClick={zoomIn}
                        className="mapButtons"
                      >
                        <img src={zoom_in} alt="" />
                      </button>
                    </HTMLTooltip>
                    <HTMLTooltip title="Zoom Out" placement="left" TransitionComponent={Zoom}>
                    <button
                      onClick={zoomOut}
                      className="mapButtons"
                    >
                      <img src={zoom_out} alt="" />
                    </button>
                    </HTMLTooltip>
                    <HTMLTooltip title="Zoom Reset" placement="left" TransitionComponent={Zoom}>
                    <button
                      onClick={resetTransform}
                      className="mapButtons"
                    >
                      <img src={zoom_reset} alt="" />
                    </button>
                    </HTMLTooltip>
                  </div>
            </React.Fragment>
            )}
      </TransformWrapper>
    );
  }
}

const mapView = new mapArea();

function App(){

  return (
    <body>
      <div className="SidePanel" id="SidePanel">
        <h1 style={{marginBottom:"64px"}}>Raider Maps</h1> {/*Heading*/}
        
        {/*From TextField*/}
        <p style={{textAlign:"left", marginLeft:"8px", fontSize: "larger", minHeight: "32px",}}>From: </p>
        <div style={{minHeight:"5vh"}}> 
          <Autocomplete id="fromBuilding" onChange={() => setTimeout(getInputTop, 500)}  options={Buildings}  renderInput={(params) => <TextField {...params} label="Building" variant="filled" style={{backgroundColor: "#FFFFFF", float: "left", maxWidth: "55%", marginLeft: "2.5%", marginRight: "auto", marginBottom: "32px", clear:"left",}}/>}/>
          <Autocomplete id="fromRoom" disabled= {true} options={Buildings} renderInput={(params) => <TextField {...params}  label="Room" variant="filled" style={{backgroundColor: "#FFFFFF", float: "right", maxWidth: "40%", marginRight: "2.5%", marginBottom: "32px",}}/>}/>
        </div>
        
        
        {/*Swap 'From' and 'To' TextFields */}
        <button className="SwapButton"><img src={swap} alt="Swap 'From' and 'To' Locations"/></button>
        
        {/*To TextField */}
        <p style={{textAlign:"left", marginLeft:"8px", fontSize: "larger", minHeight: "32px",}}>To: </p>
        <div style={{minHeight:"5vh"}}> 
          <Autocomplete id="toBuilding" onChange={() => setTimeout(getInputBottom, 500)} options={Buildings} getOptionLabel={(option) => option} renderInput={(params) => <TextField {...params} label="Building" variant="filled" style={{backgroundColor: "#FFFFFF", maxWidth: "55%", float: "left",  marginLeft: "2.5%", marginBottom: "8px", }}/>}/>
          <Autocomplete id="toRoom" disabled= {true} options={Buildings} renderInput={(params) => <TextField {...params}  label="Room" variant="filled" style={{backgroundColor: "#FFFFFF", maxWidth: "40%", float: "right", marginRight: "2.5%", marginBottom: "32px",}}/>}/>
        </div>

        {/*Navigate button to give the path from the 'From' TextField to the 'To' TextField */}
        <div className="buttonHolder">
          <button className="GoButton"><img src={go} alt="Calculate directions and start journey"/></button>

          {/*Middle buttons below 'Navigate" Button */}
          {/*Bathroom*/}
          <button className="midButtons"><img style={{verticalAlign:"middle",}} src={bathroom} alt="Route to the closest Bathroom"/> Closest Bathroom</button>
          
          {/*Food*/}
          <button className="midButtons"><img style={{verticalAlign:"middle",}} src={food} alt="Route to the closest food location"/> Closest Food Place</button>
        </div>
        
        {/*Extra location buttons for bigger monitors*/}
        <div className="extraButtonsContainer">
          <h2 style={{margin: "8px"}}>Extra Locations</h2>
          <div className="extraButtonsLeft">
              <button className="extraButtons"><img style={{verticalAlign:"middle",}} src={library}/>Library</button>
              <button className="extraButtons"><img style={{verticalAlign:"middle",}} src={sub}/> The SUB</button>
              <button className="extraButtons"><img style={{verticalAlign:"middle",}}src={rec}/>The Rec</button>
          </div>
          <div className="extraButtonsRight">
            <button className="extraButtons"><img style={{verticalAlign:"middle",}}src={basketball}/>US Arena</button>
            <button className="extraButtons"><img style={{verticalAlign:"middle",}}src={football}/>Jones AT&T Stadium</button>
            <button className="extraButtons"><img style={{verticalAlign:"middle",}}src={football}/> filler</button>
          </div>
        </div>

        {/*Theme and bathroom switching slider*/}
        <div id="ThemeSwitch">
          <span style={{marginRight:"2%"}}>
            Theme: 
          </span> 
          <ThemeSwitch/>
          <span style={{marginRight:"2%", marginLeft:"4%"}}>
            Bathroom: 
          </span> 
          <BathroomSwitch/>
        </div>
      </div>


      {/*Map*/}
      <div className="map">
        {mapView.render()}
      </div>
    </body>
  );
}

export default App;
