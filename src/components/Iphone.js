import React from "react";
import DeviceMenu from "./DeviceMenu";
import "./css/Iphone.css";
import Iphone12pro from "./Iphone12pro";
import Iphone12 from "./Iphone12";

function Iphone() {
  return (
    <div className="iphone">
      <DeviceMenu />

      <div className="iphone__ribbon">
        <p>
          Shop now at the Apple Store online with many great ways to buy. Get
          free, no-contact delivery, Specialist help and{" "}
          <span className="iphoneRibbon__more">more &#62;</span>
        </p>
      </div>

      <Iphone12pro />
      <Iphone12 />
    </div>
  );
}

export default Iphone;
