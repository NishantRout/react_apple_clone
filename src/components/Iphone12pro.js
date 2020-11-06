import React from "react";
import { useHistory } from "react-router-dom";
import "./css/Iphone12pro.css";

function Iphone12pro() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/shop/iphone12pro");
  };
  return (
    <div className="iphone12pro">
      <h2>iPhone 12 Pro</h2>

      <p className="iphone12pro__tagline">It’s a leap year.</p>

      <p className="iphone12pro__description">
        A14 Bionic. All‑new design. Ceramic Shield.
        <br />
        LiDAR Scanner. A Pro camera system optimised for
        <br />
        low light — and pushed even further on iPhone 12 Pro Max.
      </p>

      <button onClick={handleClick} className="iphone12pro__shopbutton">
        Shop
      </button>

      <span>Learn more &#62;</span>

      <img
        className="iphone12pro__imageDesktop"
        src="https://www.apple.com/v/iphone/home/ap/images/overview/hero/iphone_12_pro__f7wokw1n4lm6_large.jpg"
        alt=""
      />
      <img
        className="iphone12pro__imageMob"
        src="https://www.apple.com/v/iphone/home/ap/images/overview/hero/iphone_12_pro__f7wokw1n4lm6_small_2x.jpg"
        alt=""
      />
      <p className="iphone12pro__save">Save the dates.</p>

      <div className="iphone12pro__preorder">
        <p className="iphone12pro__preorderTitle">iPhone 12 Pro Max</p>
        <p className="iphone12pro__preorderDate">
          <span>
            Pre‑order starting from <br /> 6:30 PM IST on <br /> 6 November
          </span>
        </p>
        <p className="iphone12pro__preorderAvail">
          <span>Available 13 November</span>
        </p>
      </div>
    </div>
  );
}

export default Iphone12pro;
