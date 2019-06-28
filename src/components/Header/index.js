import React from "react";
import "./index.css"

const Header = () => {
  return (
    <div>
      <div id="header-text">
        <img id="uw-logo" src={require("./uwlogo.svg")}/>
        <p id="live-united-norcal">United Way of Northern California</p>
      </div>
    </div>
  
  )
};

export default Header;
