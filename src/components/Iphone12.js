import React from "react";
import { useHistory } from "react-router-dom";
import "./css/Iphone12.css";

function Iphone12() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/shop/iphone12");
  };
  return (
    <div className="iphone12">
      <h2>iPhone 12</h2>

      <p className="iphone12__tagline">Blast past fast.</p>

      <p className="iphone12__description">
        A14 Bionic. All‑new design. Ceramic Shield.
        <br />
        Edge‑to‑edge OLED display. Night mode on every camera.
        <br />
        All in two perfect sizes — including the new iPhone 12 mini.
      </p>

      <button onClick={handleClick} className="iphone12__shopbutton">
        Shop
      </button>

      <span>Learn more &#62;</span>

      <img
        className="iphone12__imageDesktop"
        src="https://www.apple.com/in/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_large_2x.jpg"
        alt=""
      />
      <img
        className="iphone12__imageMob"
        src="https://www.apple.com/in/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_large_2x.jpg"
        alt=""
      />
      <p className="iphone12__save">Save the dates.</p>

      <div className="iphone12__preorder">
        <p className="iphone12__preorderTitle">iPhone 12 mini</p>
        <p className="iphone12__preorderDate">
          <span>
            Pre‑order starting from <br /> 6:30 PM IST on <br /> 6 November
          </span>
        </p>
        <p className="iphone12__preorderAvail">
          <span>Available 13 November</span>
        </p>
      </div>
    </div>
  );
}

export default Iphone12;
