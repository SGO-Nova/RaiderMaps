import Switch from "react-switch";
import {Component}from 'react';
import TextField from "@material-ui/core/TextField"
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';
import swap from './Icons/swap.svg';
import go from './Icons/go.svg';
import bathroom from './Icons/bathroom.svg';
import food from './Icons/food.svg';
import BluePhone from './Icons/phone.svg';
import Zoom from '@material-ui/core/Zoom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import TTUMap from "./Icons/Map.png";


//Slider creation class
class ThemeSwitch extends Component {
  constructor() { //Creating the slider
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) { //What will happen on state change
    this.setState({ checked });
    if(checked){
      var div = document.getElementById("background");
      div.className = "AppDark"
    }
    else{
      var div = document.getElementById("background");
      div.className = "AppLight"
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
}

//Get building from To building side
function getInputBottom(){
  var current_building = document.getElementById("toBuilding").value;
  console.log(current_building);
}

class mapArea extends Component{
  render() {
    return (
      <TransformWrapper>
        <TransformComponent>
          <img src="./Icons/Guard6.png"/>
        </TransformComponent>
      </TransformWrapper>
    );
  }
}


function App(){

  return (
    <body className="AppLight" id="background">
      <div className="SidePanel" style={{float:"left",}}>
        <h1 style={{marginBottom:"64px"}}>Raider Maps</h1> {/*Heading*/}
        
        {/*From TextField*/}
        <p style={{textAlign:"left", marginLeft:"8px", fontSize: "larger",}}>From: </p>
        <div style={{minHeight:"5vh"}}> 
          <Autocomplete id="fromBuilding" onChange={() => setTimeout(getInputTop, 500)}  options={Buildings}  renderInput={(params) => <TextField {...params} label="Building" variant="filled" style={{backgroundColor: "#FFFFFF", float: "left", maxWidth: "55%", marginLeft: "2.5%", marginRight: "auto", marginBottom: "32px", clear:"left",}}/>}/>
          <TextField label="Room" variant="filled" style={{backgroundColor: "#FFFFFF", float: "right", maxWidth: "40%", marginRight: "2.5%", marginBottom: "32px",}}/>
        </div>
        
        
        {/*Swap 'From' and 'To' TextFields */}
        <button className="SwapButton"><img src={swap} alt="Swap 'From' and 'To' Locations"/></button>
        
        {/*To TextField */}
        <p style={{textAlign:"left", marginLeft:"8px", fontSize: "larger",}}>To: </p>
        <Autocomplete id="toBuilding" onChange={() => setTimeout(getInputBottom, 500)} options={Buildings} getOptionLabel={(option) => option} renderInput={(params) => <TextField {...params} label="Building" variant="filled" style={{backgroundColor: "#FFFFFF", float: "left", maxWidth: "55%", marginLeft: "2.5%", marginBottom: "8px", }}/>}/>
        <TextField label="Room" variant="filled" style={{backgroundColor: "#FFFFFF", float: "right", maxWidth: "40%", marginRight: "2.5%", marginBottom: "5%",}}/>
        

        {/*Navigate button to give the path from the 'From' TextField to the 'To' TextField */}
        <div className="buttonHolder">
          <button className="GoButton"><img src={go} alt="Calculate directions and start journey"/></button>

          {/*Middle buttons below 'Navigate" Button */}
          {/*Bathroom*/}
          <HTMLTooltip title="Closest Bathroom Location" placement="right" TransitionComponent={Zoom}>
            <button className="midButtons"><img style={{verticalAlign:"middle",}} src={bathroom} alt="Route to the closest Bathroom"/></button>
          </HTMLTooltip>
          
          {/*Food*/}
          <HTMLTooltip title="Closest Food Location" placement="right" TransitionComponent={Zoom}>
            <button className="midButtons"><img style={{verticalAlign:"middle",}} src={food} alt="Route to the closest food location"/></button>
          </HTMLTooltip>

          {/*Blue Light Phone*/}
          <HTMLTooltip title="Closest Blue Light Phone Location" placement="right" TransitionComponent={Zoom}>
            <button className="midButtons"><img style={{verticalAlign:"middle",}} src={BluePhone} alt="Route to the closest Blue Phone"/></button>
          </HTMLTooltip>
        </div>
        
        {/*Theme switching slider*/}
        <div id="ThemeSwitch" >
          <span>
            Theme: 
          </span> 
          <ThemeSwitch/>
        </div>

      </div>


      {/*Map*/}
      <div className="map">
        <TransformWrapper defaultScale={1} marginRight="0">
          <TransformComponent>
              <img src={TTUMap} alt="TTU Map" style={{objectFit: "contain", width: "80vw", height: "100vh"}}/>
            </TransformComponent>
            
        </TransformWrapper>
      </div>
    </body>
  );
}

export default App;
