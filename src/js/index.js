//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home";

//render your react application

let seconds = 0;
setInterval(() => {
	ReactDOM.render(<Home seconds={seconds} />, document.querySelector("#app"));
	seconds = seconds + 1;
}, 1000);
