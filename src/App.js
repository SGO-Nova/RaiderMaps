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
import baseball from "./Icons/baseball.svg";
import library from "./Icons/library.svg";
import rec from "./Icons/rec.svg";
import sub from "./Icons/sub.svg";
import settings from "./Icons/settings.svg";
import locate from "./Icons/locate.svg";
import back from "./Icons/back.svg";
import down from "./Icons/downArrow.svg";
import up from "./Icons/upArrow.svg";
import right from "./Icons/rightArrow.svg";
import logo from "./Icons/Icon.svg"
import x from "./Icons/x.svg";

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
  constructor(height, width, div, name){
    super();
    this.height = height;
    this.width = width;
    this.div = div;
    this.tab = {shown: false, side: null};
    this.margin = true;
    this.name = name;
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
      <div className="sidePanel" id={this.name} style={{height: this.height, width:this.width}}>
        {this.div}
      </div>
    )
  }

    
  renderNoMargin(){
    return(
      <div className="sidePanel" id={this.name} style={{height: this.height, width:this.width, marginTop: 0, marginLeft: 0, marginRight: 0}}>
        {this.div}
      </div>
    )
  }

  remove(){
    document.getElementById(this.name).remove();
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

//Common place button creation
class common extends Component{
  constructor(text, icon){
    super();
    this.text = text;
    this.icon = icon;
  }

  setColor(color){
    this.color = color;
  }

  render(){
    return(
      <div style={{width:"130px", position:"relative", float: "left", textAlign:"center", marginTop:"20px"}}>
        <div>
          <button className="commonButtons" style={{borderRadius:"25px",minWidth:"50px",minHeight:"50px", border: "none", outline: "none", textAlign: "center", cursor:"pointer"}}><img src={this.icon}/></button>
        </div>
        <div style={{width:"90%", margin: "auto", whiteSpace:"nowrap", textAlign:"center", marginTop:"5px", }}><strong>{this.text}</strong></div>
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
function remove(input, id){
  if(input === true){
    document.getElementById(id).style.left = 0;
    document.getElementById(id).classList.remove('horizTranslateInto');
  }
  else{
    document.getElementById(id).style.left = -350 + 'px';
    document.getElementById(id).classList.remove('horizTranslateOut');
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


const common1 = new common("Student Union", sub);
const common2 = new common("The Rec", rec);
const common3 = new common("The Library", library);
const common4 = new common("Jones AT&T", football);
const common5 = new common("US Arena", basketball);
const common6 = new common("Dan Law Field", baseball);


const arrow1 = new tab("up", 150, 50);

var myRefs = {location1: "",
              location2: ""};

//Sidepanel that has settings button, search bar, and find button
const side1 = new SidePanel(50, SET_WIDTH, 
  <div className="sidePanelInside">
    <div style={{float: "left"}}>
      <HTMLTooltip title="Settings" placement="bottom" TransitionComponent={Zoom}>
        <button className="searchButton1" onClick={() => {
          document.getElementById("settingsTab").classList.add('horizTranslateInto');
          setTimeout(() => {
            remove(true, "settingsTab")}, 1500); 
        }}>
          <img src={settings} alt="Settings button"/>
        </button>
      </HTMLTooltip>
    </div>
    
    {/*TextField for location finding */}
    <div style={{width: "270px", float: "left"}}>
      <Autocomplete freeSolo options={Buildings} renderInput={(parms) => (<TextField {...parms} InputProps={{ ...parms.InputProps, disableUnderline: true, style:{fontSize: 20}}} inputProps={{...parms.inputProps, style:{margin:"-4px"}}} inputRef={(c) => {myRefs.location1 = c}} placeholder="Search a Location..." />)} /> {/* style={{width:"270px"}}   */}
    </div>
    <div style={{float: "left"}}>
      <HTMLTooltip title="Locate" placement="bottom" TransitionComponent={Zoom}>
        <button className="searchButton2" onClick={() => {
          console.log(myRefs.location1.value);
          for(var i = 0; i < data.Buildings.length; i++){
            if(data.Buildings[i][0] == myRefs.location1.value){
              console.log("Description: " + data.Buildings[i][3].Description);
              document.getElementById("locationName").innerHTML = data.Buildings[i][0];
              document.getElementById("locationFloors").innerHTML = data.Buildings[i][1].Floors;
              document.getElementById("locationDescription").innerHTML = data.Buildings[i][3].Description;
            }
          }
          if(myRefs.location1.value != ""){
            document.getElementById("locationTab").classList.add('horizTranslateInto');
            setTimeout(() => {remove(true, "locationTab")}, 1500);
            document.getElementById("side").classList.add('horizTranslateOut');
            setTimeout(() => {
              remove(false, "side")}, 1500);     
          }
        }}>
          <img src={locate} alt="Locate location button"/>
        </button>
      </HTMLTooltip>
    </div>
  </div>, "small"
);

const side3 = new SidePanel(100, SET_WIDTH,
  <div className="sidePanelInside" id="messageBox"> 
    <button className="searchButton1" style={{float:"right"}} onClick={() => {
      side3.remove();
    }}><img src={x} alt="close button"/></button>
    <div style={{margin:"8px", clear:"right"}}>
      This is a demo of my website to replace the <a href="https://www.ttu.edu/map/" target="_blank">current TTU map.</a>
    </div>
  </div>,
  "messageBox"
)

//Side Panel that holds side panel 1 and common places and locations buttons
const side2 = new SidePanel(250, SET_WIDTH,
  <div id="main1">
    {side1.renderNoMargin()}
    {common1.render()}
    {common2.render()}
    {common3.render()}
    {common4.render()}
    {common5.render()}
    {common6.render()}
  </div>,
  "big"
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
    <body >
        
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
                      {/*Test div for location placing */}
                      {/*<div id="locationDot" style={{position: "absolute", height:"1mm", width:"1mm", backgroundColor:"red", top: "45%", left: "30%"}}></div>*/}
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
                <div className="sidePanelContainer" id="side">
                  {side2.renderMargin()}
                  {side3.renderMargin()}
                </div>

                {/*Settings side bar */}
                <div id="settingsTab">
                  <div className="settingsTop" style={{top: "8px", marginBottom:"32px", position:"absolute"}}>
                    <img src={logo} style={{height:"32px", float: "left"}}/>
                    <p style={{fontSize:"28px", float: "left", margin:"0px", marginInline:"8px"}}>Raider Maps</p>
                    <hr style={{float:"left",clear:"left", width:"280px", height:"2px", backgroundColor:"#D0D0D055"}}></hr>
                  </div>
                  <div style={{marginBottom:"16px", marginTop:"64px", fontSize:"24px"}}>Settings</div>
                  <div style={{position:"absolute", top: "16px", right: "8px"}}><button className="searchButton1" onClick={() => {
                    document.getElementById("settingsTab").classList.add('horizTranslateOut');
                    setTimeout(() => {
                      remove(false, "settingsTab")}, 1500); 
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

                {/*Location tab to come out when search is pressed */}
                <div id="locationTab">
                  <div className="settingsTop" style={{top: "8px", marginBottom:"32px", position:"absolute"}}>
                    <img src={logo} style={{height:"32px", float: "left"}}/>
                    <p style={{fontSize:"28px", float: "left", margin:"0px", marginInline:"8px"}}>Raider Maps</p>
                    <hr style={{float:"left",clear:"left", width:"280px", height:"2px", backgroundColor:"#D0D0D055"}}></hr>
                  </div>
                  <div style={{marginBottom:"16px", marginTop:"64px", fontSize:"24px"}}>Location</div>
                  <div style={{position:"absolute", top: "16px", right: "8px"}}><button className="searchButton1" onClick={() => {
                    
                    document.getElementById("locationTab").classList.add('horizTranslateOut');
                    document.getElementById("side").classList.add('horizTranslateInto');
                    setTimeout(() => {
                      remove(false, "locationTab");
                      remove(true, "side");}, 1500); 
                    }
                    
                  }><img src={back} alt="Minimize settings screen"/></button></div>
                  <br/>
                  <p id ="locationName"></p>
                  <p>There will be a picture here at some point</p>
                  <p id ="locationFloors"></p>
                  <p id ="locationDescription"></p>
                </div>
              </React.Fragment>
              )}
        </TransformWrapper>
      </div>
    </body>
  );
}

export default App;
