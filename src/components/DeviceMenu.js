import React from "react";
import "./css/DeviceMenu.css";

function DeviceMenu() {
  const iphones = [
    {
      label: "iPhone 12 pro",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_12_pro_dark__c1xodf0hb1w2_large.svg",
      new: "true",
    },
    {
      label: "iPhone 12",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_12_dark__d7asodlag7e6_large.svg",
      new: "false",
    },
  ];

  return (
    <div className="deviceMenu">
      {iphones.map(({ label, image }) => (
        <div className="deviceMenu__item">
          <img src={image} alt="iPhone 12 pro" />
          <span className="deviceMenu__label">{label}</span>
          <span className="deviceMenu__new">New</span>
        </div>
      ))}
    </div>
  );
}

export default DeviceMenu;
