(this.webpackJsonpraidermaps=this.webpackJsonpraidermaps||[]).push([[0],{69:function(e,o,t){},71:function(e,o,t){},76:function(e){e.exports=JSON.parse('{"Buildings":[["Biology",{"Floors":null},{"Rooms":[]}],["Biology Auditorium",{"Floors":null},{"Rooms":[]}],["Chemistry",{"Floors":null},{"Rooms":[]}],["Civil Engineering",{"Floors":null},{"Rooms":[]}],["Computer Science",{"Floors":null},{"Rooms":[]}],["Electrical Engineering",{"Floors":null},{"Rooms":[]}],["Engineering Center",{"Floors":null},{"Rooms":[]}],["Engineering and Technology Lab",{"Floors":null},{"Rooms":[]}],["English",{"Floors":null},{"Rooms":[]}],["Holden",{"Floors":null},{"Rooms":[]}],["Human Sciences",{"Floors":null},{"Rooms":[]}],["Industrial, System, and Manufacturing Engineering",{"Floors":null},{"Rooms":[]}],["Library",{"Floors":null},{"Rooms":[]}],["Math",{"Floors":null},{"Rooms":[]}],["Mechanical Engineering",{"Floors":null},{"Rooms":[]}],["Media & Communications",{"Floors":null},{"Rooms":[]}],["Music",{"Floors":null},{"Rooms":[]}],["Petroleum Engineering",{"Floors":null},{"Rooms":[]}],["Science",{"Floors":null},{"Rooms":[]}],["Student Union",{"Floors":null},{"Rooms":[]}],["Lot Z1",{"Floors":null},{"Rooms":[]}],["Lot Z2",{"Floors":null},{"Rooms":[]}],["Lot Z3",{"Floors":null},{"Rooms":[]}],["Lot Z4",{"Floors":null},{"Rooms":[]}],["Lot Z5",{"Floors":null},{"Rooms":[]}],["Lot Z6",{"Floors":null},{"Rooms":[]}],["Lot Z7",{"Floors":null},{"Rooms":[]}]]}')},77:function(e,o,t){"use strict";t.r(o);for(var n=t(5),l=t(0),i=t.n(l),s=t(11),a=t.n(s),r=(t(69),t(29)),c=t(40),d=t(41),m=t(32),u=t(43),g=t(42),h=t(48),b=t.n(h),j=t(118),p=t(4),x=t(115),F=(t(71),t.p+"static/media/swap.45aab458.svg"),f=t.p+"static/media/go.9e77b85e.svg",O=t.p+"static/media/bathroom.06acaf55.svg",R=t.p+"static/media/food.1f184b37.svg",B=t.p+"static/media/phone.c49b9f85.svg",v=t(117),y=t(119),C=t(28),L=t.p+"static/media/Map.7ef6b47b.png",k=function(e){Object(u.a)(t,e);var o=Object(g.a)(t);function t(){var e;return Object(c.a)(this,t),(e=o.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(d.a)(t,[{key:"handleChange",value:function(e){(this.setState({checked:e}),e)?document.getElementById("background").className="AppDark":document.getElementById("background").className="AppLight"}},{key:"render",value:function(){return Object(n.jsx)(b.a,{checked:this.state.checked,onChange:this.handleChange,onColor:"#4B4D4F",onHandleColor:"#2B2D2F",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"Switch"})}}]),t}(l.Component),S=Object(p.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.5)",fontSize:e.typography.pxToRem(20),border:"1px solid #dadde9"}}}))(x.a),E=t(76),w=[],N=new Map,T=0;T<E.Buildings.length;T++)w.push(E.Buildings[T][0]),N.set(E.Buildings[T][0],E.Buildings[T][2].Rooms);function I(){var e=document.getElementById("fromBuilding").value;console.log(e)}function M(){var e=document.getElementById("toBuilding").value;console.log(e)}l.Component;var A=function(){return Object(n.jsxs)("body",{className:"AppLight",id:"background",children:[Object(n.jsxs)("div",{className:"SidePanel",style:{float:"left"},children:[Object(n.jsx)("h1",{style:{marginBottom:"64px"},children:"Raider Maps"})," ",Object(n.jsx)("p",{style:{textAlign:"left",marginLeft:"8px",fontSize:"larger"},children:"From: "}),Object(n.jsxs)("div",{style:{minHeight:"5vh"},children:[Object(n.jsx)(y.a,{id:"fromBuilding",onChange:function(){return setTimeout(I,500)},options:w,renderInput:function(e){return Object(n.jsx)(j.a,Object(r.a)(Object(r.a)({},e),{},{label:"Building",variant:"filled",style:{backgroundColor:"#FFFFFF",float:"left",maxWidth:"55%",marginLeft:"2.5%",marginRight:"auto",marginBottom:"32px",clear:"left"}}))}}),Object(n.jsx)(j.a,{label:"Room",variant:"filled",style:{backgroundColor:"#FFFFFF",float:"right",maxWidth:"40%",marginRight:"2.5%",marginBottom:"32px"}})]}),Object(n.jsx)("button",{className:"SwapButton",children:Object(n.jsx)("img",{src:F,alt:"Swap 'From' and 'To' Locations"})}),Object(n.jsx)("p",{style:{textAlign:"left",marginLeft:"8px",fontSize:"larger"},children:"To: "}),Object(n.jsx)(y.a,{id:"toBuilding",onChange:function(){return setTimeout(M,500)},options:w,getOptionLabel:function(e){return e},renderInput:function(e){return Object(n.jsx)(j.a,Object(r.a)(Object(r.a)({},e),{},{label:"Building",variant:"filled",style:{backgroundColor:"#FFFFFF",float:"left",maxWidth:"55%",marginLeft:"2.5%",marginBottom:"8px"}}))}}),Object(n.jsx)(j.a,{label:"Room",variant:"filled",style:{backgroundColor:"#FFFFFF",float:"right",maxWidth:"40%",marginRight:"2.5%",marginBottom:"5%"}}),Object(n.jsxs)("div",{className:"buttonHolder",children:[Object(n.jsx)("button",{className:"GoButton",children:Object(n.jsx)("img",{src:f,alt:"Calculate directions and start journey"})}),Object(n.jsx)(S,{title:"Closest Bathroom Location",placement:"right",TransitionComponent:v.a,children:Object(n.jsx)("button",{className:"midButtons",children:Object(n.jsx)("img",{style:{verticalAlign:"middle"},src:O,alt:"Route to the closest Bathroom"})})}),Object(n.jsx)(S,{title:"Closest Food Location",placement:"right",TransitionComponent:v.a,children:Object(n.jsx)("button",{className:"midButtons",children:Object(n.jsx)("img",{style:{verticalAlign:"middle"},src:R,alt:"Route to the closest food location"})})}),Object(n.jsx)(S,{title:"Closest Blue Light Phone Location",placement:"right",TransitionComponent:v.a,children:Object(n.jsx)("button",{className:"midButtons",children:Object(n.jsx)("img",{style:{verticalAlign:"middle"},src:B,alt:"Route to the closest Blue Phone"})})})]}),Object(n.jsxs)("div",{id:"ThemeSwitch",children:[Object(n.jsx)("span",{style:{marginRight:"5%"},children:"Theme:"}),Object(n.jsx)(k,{})]})]}),Object(n.jsx)("div",{className:"map",children:Object(n.jsx)(C.b,{defaultScale:1,marginRight:"0",children:Object(n.jsx)(C.a,{children:Object(n.jsx)("img",{src:L,alt:"TTU Map",style:{objectFit:"contain",width:"80vw",height:"100vh"}})})})})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.e86271f8.chunk.js.map