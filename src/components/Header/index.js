import React from "react";
import "./index.css";
import { ReactComponent } from "./uwlogo.svg";

const Header = () => {
  return (
    <div>
      <div id="header-text">
        <ReactComponent id="uw-logo" />
        <p id="live-united-norcal">United Way of Northern California</p>
      </div>
    </div>
  );
};

export default Header;
