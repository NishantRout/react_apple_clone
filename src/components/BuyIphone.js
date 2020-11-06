import React, { useState } from "react";
import "./css/BuyIphone.css";

function BuyIphone({ Id }) {
  const [tradeIn, setTradeIn] = useState("");
  console.log(tradeIn);
  return (
    <div className="buyIphone">
      <div className="buyIphone__header">
        <span className="buyIphone__headerTitle">iPhone 12 Pro</span>
        <span className="buyIphone__headerPrice">
          From ₹14,111/mo. with EMI,** or ₹1,19,900
        </span>
      </div>
      <div className="buyIphone__ribbon">
        <p>
          See all the flexible ways to pay and save on your new iPhone.&nbsp;
          <span className="buyIphone__more">Learn more &#62;</span>
        </p>
      </div>
      <div className="buyIphone__selection">
        <div className="buyIphone__selectionImage">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000"
            alt=""
          />
        </div>
        <div className="buyIphone__selectionOptions">
          <p>New</p>
          <h1>Shop iPhone 12 Pro</h1>
          <span>Get up to ₹34,000 off with Apple trade-in*</span>

          <h2>Do you have a smartphone to trade in?</h2>
          <span className="buyIphone__spanBlue">
            See how Apple trade-in works
          </span>
          <div className="buyIphone__tradeIn">
            <div
              onClick={() => setTradeIn(true)}
              className={`buyIphone__tradeInBox ${
                tradeIn && "buyIphone__tradeInSelect"
              }`}
            >
              <span className="buyIphone__tradeInYN">Yes</span>
              <span className="buyIphone__tradeInPrice">
                From ₹10,110/mo. or ₹85,900*
              </span>
            </div>
            <div
              onClick={() => setTradeIn(false)}
              className={`buyIphone__tradeInBox ${
                tradeIn === false && "buyIphone__tradeInSelect"
              }`}
            >
              <span className="buyIphone__tradeInYN">No</span>
              <span className="buyIphone__tradeInPrice">
                From ₹14,111/mo.** or ₹1,19,900
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyIphone;
