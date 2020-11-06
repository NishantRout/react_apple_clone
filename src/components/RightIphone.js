import React, { useState } from "react";
import "./css/RightIphone.css";

function RightIphone() {
  const [iphonesNew, setIphonesNew] = useState([
    {
      title: "iPhone 12 pro",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large_2x.jpg",
      price: "1,19,900",
      screenSize: "6.1” or 6.7”",
      screenType: "Super Retina XDR display",
      connectivity: "5G capable",
      processor: "A14 Bionic chip",
      camera: "Pro camera system",
      lens: "(Ultra Wide, Wide, Telephoto)",
      lidar: "LiDAR Scanner for Night mode portraits and next‑level AR",
      magsafe: "Compatible with MagSafe accessories",
    },
    {
      title: "iPhone 12",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/overview/compare/compare_iphone_12__btq63lk8td7m_large_2x.jpg",
      price: "69,900",
      screenSize: "5.4” or 6.1”",
      screenType: "Super Retina XDR display",
      connectivity: "5G capable",
      processor: "A14 Bionic chip",
      camera: "Advanced dual‑camera system",
      lens: "(Ultra Wide, Wide)",
      lidar: "N/A",
      magsafe: "Compatible with MagSafe accessories",
    },
  ]);

  const [iphonesOld, setIphonesOld] = useState([
    {
      title: "iPhone 11",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large_2x.jpg",
      price: "54,900",
      screenSize: "6.1”",
      screenType: "Liquid Retina HD display",
      connectivity: "4G LTE cellular",
      processor: "A13 Bionic chip",
      camera: "Dual‑camera system",
      lens: "(Ultra Wide, Wide)",
      lidar: "N/A",
      magsafe: "N/A",
    },
    {
      title: "iPhone SE",
      image:
        "https://www.apple.com/v/iphone/home/ap/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large_2x.jpg",
      price: "39,900",
      screenSize: "4.7”",
      screenType: "Retina HD display",
      connectivity: "4G LTE cellular",
      processor: "A13 Bionic chip",
      camera: "Single-camera system",
      lens: "(Wide)",
      lidar: "N/A",
      magsafe: "N/A",
    },
  ]);

  return (
    <div className="rightIphone">
      <h2>Which iPhone is right for you?</h2>
      <span>Compare all iPhone models &#62;</span>
      <div className="rightIphone__cards">
        <div className="rightIphone__cardsNew">
          {iphonesNew.map(
            ({
              image,
              title,
              price,
              screenSize,
              screenType,
              connectivity,
              processor,
              camera,
              lens,
              lidar,
              magsafe,
            }) => (
              <div className="rightIphone__card">
                <img src={image} alt="" />
                <h3 className="rightIphone__title">{title}</h3>
                <p className="rightIphone__price">From ₹{price}</p>
                <ul className="rightIphone__specs">
                  <li>
                    {screenSize} <br /> {screenType}
                  </li>
                  <li>{connectivity}</li>
                  <li>{processor}</li>
                  <li>
                    {camera} <br /> {lens}
                  </li>
                  {lidar == "N/A" ? (
                    <li>
                      &mdash;
                      <br />
                      <br />
                      {title == "iPhone 12" && <br class="mob" />}
                    </li>
                  ) : (
                    <li>{lidar}</li>
                  )}
                  {magsafe == "N/A" ? (
                    <li style={{ maxWidth: "150px" }}>
                      &mdash;
                      <br />
                      <br />
                    </li>
                  ) : (
                    <li style={{ maxWidth: "150px" }}>{magsafe}</li>
                  )}
                </ul>
                <button className="rightIphone__shopbutton">Shop</button>
                <p className="rightIphone__learn">Learn more &#62;</p>
              </div>
            )
          )}
        </div>
        <div className="rightIphone__cardsOld">
          {iphonesOld.map(
            ({
              image,
              title,
              price,
              screenSize,
              screenType,
              connectivity,
              processor,
              camera,
              lens,
              lidar,
              magsafe,
            }) => (
              <div className="rightIphone__card">
                <img src={image} alt="" />
                <h3 className="rightIphone__title">{title}</h3>
                <p className="rightIphone__price">From ₹{price}</p>
                <ul className="rightIphone__specs">
                  <li>
                    {screenSize} <br /> {screenType}
                    {title == "iPhone SE" && <br class="mob" />}
                    {title == "iPhone SE" && <br class="mob" />}
                  </li>
                  <li>{connectivity}</li>
                  <li>{processor}</li>
                  <li>
                    {camera} <br /> {lens}
                  </li>
                  {lidar == "N/A" ? (
                    <li>
                      &mdash;
                      <br />
                      <br />
                    </li>
                  ) : (
                    <li>{lidar}</li>
                  )}
                  {magsafe == "N/A" ? (
                    <li>
                      &mdash;
                      <br />
                      <br />
                    </li>
                  ) : (
                    <li style={{ maxWidth: "150px" }}>{magsafe}</li>
                  )}
                </ul>
                <button className="rightIphone__shopbutton">Shop</button>
                <p className="rightIphone__learn">Learn more &#62;</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RightIphone;
