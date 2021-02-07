import Switch from "react-switch";
import React, {Component, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
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
import TTUMap from "./Icons/Tech.svg";
import basketball from "./Icons/basketball.svg";
import football from "./Icons/football.svg";
import library from "./Icons/library.svg";
import rec from "./Icons/rec.svg";
import sub from "./Icons/sub.svg";
import settings from "./Icons/settings.svg";
import locate from "./Icons/locate.svg";
import back from "./Icons/back.svg";
import down from "./Icons/downArrow.svg";
import up from "./Icons/upArrow.svg";
import right from "./Icons/rightArrow.svg";

const SET_WIDTH = 400;

//Slider creation classes
class ThemeSwitch extends Component {
  constructor() { //Creating the slider
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) { //What will happen on state change
    this.setState({ checked });
    var app = document.getElementById("App");
    if(checked){
      app.className = "AppDark";
    }
    else{
      app.className = "AppLight";
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

//Creation of the floating side panels
class SidePanel extends Component{
  constructor(height, width, div){
    super();
    this.height = height;
    this.width = width;
    this.div = div;
    this.tab = {shown: false, side: null};
    this.margin = true;
  }

  show(){
    this.tab = {shown: true, side: this.tab.side};
  }

  hide(){
    this.tab = {shown: false, side: this.tab.side};
  }

  side(side){
    this.tab = {shown: this.tab.shown, side: side};
  }

  setHeight(height){
    this.height = height;
  }

  renderMargin(){
    return(
      <div className="sidePanel" style={{height: this.height, width:this.width}}>
        {this.div}
      </div>
    )
  }

    
  renderNoMargin(){
    return(
      <div className="sidePanel" style={{height: this.height, width:this.width, marginTop: 0, marginLeft: 0, marginRight: 0}}>
        {this.div}
      </div>
    )
  }


}

//creation of the tabs for the floating pide panels
class tab extends Component{
  constructor(direction, extend, colapse){
    super();
    this.img = <img id ="tab" src= {up}/>
    this.state = direction;
    this.min = colapse;
    this.max = extend;
  }

  render(){
    return(
      <div className="tab">
        <button className="searchButton1" style={{marginInline: "0"}} onClick={() => {}
        }>{this.img}</button>
      </div>
    )
  }

}

//Hint mouse over for map buttons
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



//function for settings tab; class adding for animations
function remove(input){
  if(input === true){
    document.getElementById("settingsTab").style.left = 0;
    document.getElementById("settingsTab").classList.remove('horizTranslateInto');
  }
  else{
    document.getElementById("settingsTab").style.left = -350 + 'px';
    document.getElementById("settingsTab").classList.remove('horizTranslateOut');
  }
  
}



//Function to keep the div holding the dots at the same ratio and location as the picture 
window.addEventListener("resize", () => {
  var w = 0; //width
  var h = 0; //height
  var mL = 0; //marginLeft
  var mT = 0; //marginTop

  if(window.innerWidth / window.innerHeight > (5/3)){
    //Wider than it needs to be
    h = window.innerHeight;
    w = (window.innerHeight * (5/3));
    mL = (window.innerWidth - w) / 2;
  }
  else{
    //Taller than it needs to be
    w = window.innerWidth;
    h = (window.innerWidth * .6);
    mT = (window.innerHeight - h) / 2;
  }

  console.log("H: " + h + " W: " + w);
  document.getElementById("dotHolder").style.height = h + "px";
  document.getElementById("dotHolder").style.width = w + "px";
  document.getElementById("dotHolder").style.marginTop = mT + "px";
  document.getElementById("dotHolder").style.marginLeft = mL + "px";
  console.log("H: " + h + " W: " + w + " mT: " + mT + " mL: " + mL);
});


const arrow1 = new tab("up", 150, 50);

//Sidepanel that has settings button, search bar, and find button
const side1 = new SidePanel(50, SET_WIDTH, 
  <div className="sidePanelInside">
    <div style={{float: "left"}}>
      <HTMLTooltip title="Settings" placement="bottom" TransitionComponent={Zoom}>
        <button className="searchButton1" onClick={() => {
          document.getElementById("settingsTab").classList.add('horizTranslateInto');
          setTimeout(() => {
            remove(true)}, 1500); 
        }}>
          <img src={settings} alt="Settings button"/>
        </button>
      </HTMLTooltip>
    </div>
    
    {/*TextField for location finding */}
    <div style={{width: "270px", float: "left"}}>
      <Autocomplete freeSolo  options={Buildings}  renderInput={(parms) => (<TextField {...parms} InputProps={{ ...parms.InputProps, disableUnderline: true, style:{fontSize: 20}}} inputProps={{...parms.inputProps, style:{margin:"-4px"}}} id="textLocator" placeholder="Search a Location..." />)} /> {/* style={{width:"270px"}}   */}
    </div>
    <div style={{float: "left"}}>
      <HTMLTooltip title="Locate" placement="bottom" TransitionComponent={Zoom}>
        <button className="searchButton2" onClick={() => {
          
        }}>
          <img src={locate} alt="Locate location button"/>
        </button>
      </HTMLTooltip>
    </div>
  </div>
);


//Side Panel that holds side panel 1 and common places and locations buttons
const side2 = new SidePanel(250, SET_WIDTH,
  <div id="main1">
    {side1.renderNoMargin()}
    <div className="commonPlacesContainer" style={{float: "left", margin: "10px", marginTop: "20px"}}>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={sub}/></button>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={rec}/></button>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={library}/></button>
    </div>
    <div className="commonPlacesContainer" style={{float: "left", clear: "left", margin: "10px"}}>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={football}/></button>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={basketball}/></button>
      <button style={{height: "50px", width: "50px", borderRadius:"50px", marginInline:"38.3px", border: "none", backgroundColor: "black", outline: "none"}}><img src={sub}/></button>
    </div>
  </div>
);



function App(){
  useEffect(() => {
    for(var i = 0; i < data.Buildings.length; i++){
      Buildings.push(data.Buildings[i][0]);
    }

    var w = 0; //width
    var h = 0; //height
    var mL = 0; //marginLeft
    var mT = 0; //marginTop
  
    if(window.innerWidth / window.innerHeight > (5/3)){
      //Wider than it needs to be
      h = window.innerHeight;
      w = (window.innerHeight * (5/3));
      mL = (window.innerWidth - w) / 2;
    }
    else{
      //Taller than it needs to be
      w = window.innerWidth;
      h = (window.innerWidth * .6);
      mT = (window.innerHeight - h) / 2;
    }

    document.getElementById("dotHolder").style.height = h + "px";
    document.getElementById("dotHolder").style.width = w + "px";
    document.getElementById("dotHolder").style.marginTop = mT + "px";
    document.getElementById("dotHolder").style.marginLeft = mL + "px";
    console.log("H: " + h + " W: " + w + " mT: " + mT + " mL: " + mL);
  }, []);
  
  return (
    <body>
        
      {/*Map*/}
      <div className="map">
        <TransformWrapper wheel={{step:"70"}} defaultScale={1.25}>
          {({
              zoomIn,
              zoomOut,
              resetTransform,
              options: { limitToBounds, transformEnabled, disabled },
              ...rest
            }) => (
              <React.Fragment>
                <TransformComponent >
                  <div className="Container" >
                    <img src={TTUMap} alt="TTU Map" className="mapImage"/> {/*REPLACE demo with TTUMap for final product*/}{/*Image size stays the same as 100vh and 100vw */}
                    <div id="dotHolder"  style={{position: "absolute", top: "0",}}>
                      <div id="locationDot" style={{position: "absolute", height:"1mm", width:"1mm", backgroundColor:"red", top: "45%", left: "30%"}}>
                        {/*Test div for location placing */}
                      </div>
                    </div>
                    
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
                <div className="sidePanelContainer">
                  {side2.renderMargin()}
                </div>
                <div id="settingsTab">
                  <div style={{marginBottom:"16px"}}>Settings</div>
                  <div style={{position:"absolute", top: "8px", right: "8px"}}><button className="searchButton1" onClick={() => {
                    document.getElementById("settingsTab").classList.add('horizTranslateOut');
                    setTimeout(() => {
                      remove(false)}, 1500); 
                    }
                  }><img src={back} alt="Minimize settings screen"/></button></div>
                  <div className="settingsSwitches">
                    <div className="settings">
                      <p style={{marginRight:"10px"}}>Theme:</p>
                      <ThemeSwitch/>
                    </div> 
                    <div className="settings">
                      <p style={{marginRight:"8px"}}>Bathroom:</p>
                      <BathroomSwitch/>
                    </div>
                  </div>
                </div>
              </React.Fragment>
              )}
        </TransformWrapper>
      </div>
    </body>
  );
}

export default App;
