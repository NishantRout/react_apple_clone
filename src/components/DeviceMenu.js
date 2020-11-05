import React, { useState } from "react";
import "./css/DeviceMenu.css";

function DeviceMenu() {
  const [iphones, setIphone] = useState([
    {
      label: "iPhone 12 pro",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_12_pro_dark__c1xodf0hb1w2_large.svg",
      newDevice: true,
      width: 37,
      bsh: 37,
      bsv: 54,
    },
    {
      label: "iPhone 12",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_12_dark__d7asodlag7e6_large.svg",
      newDevice: true,
      width: 36,
      bsh: 36,
      bsv: 54,
    },
    {
      label: "iPhone SE",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_se_dark__b1b8q1iya5o2_large.svg",
      newDevice: false,
      width: 19,
      bsh: 19,
      bsv: 54,
    },
    {
      label: "iPhone 11",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_11_dark__di5n0jory1me_large.svg",
      newDevice: false,
      width: 22,
      bsh: 22,
      bsv: 54,
    },
    {
      label: "iPhone XR",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_xr_dark__ft3blnh7c6q2_large.svg",
      newDevice: false,
      width: 22,
      bsh: 22,
      bsv: 54,
    },
    {
      label: "Compare",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_comp_dark__yooc623t6cii_large.svg",
      newDevice: false,
      width: 51,
      bsh: 51,
      bsv: 54,
    },
    {
      label: "Airpods",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_airpods_dark__7rlhc1y4jc2m_large.svg",
      newDevice: false,
      width: 27,
      bsh: 27,
      bsv: 54,
    },
    {
      label: "Accessories",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_acc_dark__g5kvwtvsk2qa_large.svg",
      newDevice: false,
      width: 35,
      bsh: 35,
      bsv: 54,
    },
    {
      label: "iOS 14",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/chapternav/iphone_ios_dark__bx23cu2kt8mu_large.svg",
      newDevice: false,
      width: 32,
      bsh: 32,
      bsv: 54,
    },
  ]);

  return (
    <div className="deviceMenu">
      {console.log(iphones)}
      {iphones.map(({ id, label, image, newDevice, width, bsh, bsv }) => (
        <div className="deviceMenu__item">
          <img
            src={image}
            alt={id}
            style={{ width: `${width}px`, backgroundSize: `${bsh}px ${bsv}px` }}
          />
          <span className="deviceMenu__label">{label}</span>
          {newDevice ? (
            <span className="deviceMenu__new">New</span>
          ) : (
            <p>hello</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default DeviceMenu;
