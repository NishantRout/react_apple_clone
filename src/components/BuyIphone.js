import { FavoriteBorder } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./css/BuyIphone.css";
import delivery from "./image/delivery.png";

function BuyIphone({ Id }) {
  const [tradeIn, setTradeIn] = useState("");
  const [model, setModel] = useState("iPhone 12 Pro");
  const [finish, setFinish] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState(
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000"
  );

  useEffect(() => {
    if (model === "iPhone 12 Pro" && finish !== "") {
      if (finish === "Graphite") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000"
        );
      } else if (finish === "Gold") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021659000"
        );
      } else if (finish === "Silver") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-silver-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
        );
      } else {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
        );
      }
    } else if (model === "iPhone 12 Pro Max" && finish !== "") {
      if (finish === "Graphite") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000"
        );
      } else if (finish === "Gold") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000"
        );
      } else if (finish === "Silver") {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000"
        );
      } else {
        setImage(
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000"
        );
      }
    } else if (model === "iPhone 12 Pro" && finish === "") {
      setImage(
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero-all?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021662000"
      );
    } else if (model === "iPhone 12 Pro Max" && finish === "") {
      setImage(
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-family-hero-all?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021663000"
      );
    } else {
      setImage(
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000"
      );
    }
  }, [finish, model]);

  console.log(tradeIn);
  console.log(model);

  const totalPrice = () => {
    if (model === "iPhone 12 Pro") {
      if (capacity === "128") {
        return "From ₹14,111/mo.** or ₹1,19,900";
      } else if (capacity === "256") {
        return "From ₹15,288/mo.** or ₹1,29,900";
      } else if (capacity === "512") {
        return "From ₹17,642/mo.** or ₹1,49,900";
      } else {
        return "From ₹14,111/mo. with EMI,** or ₹1,19,900";
      }
    } else {
      if (capacity === "128") {
        return "From ₹15,288/mo.** or ₹1,29,900";
      } else if (capacity === "256") {
        return "From ₹16,465/mo.** or ₹1,39,900";
      } else if (capacity === "512") {
        return "From ₹18,819/mo.** or ₹1,59,900";
      } else {
        return "From ₹15,288/mo. with EMI,** or ₹1,29,900";
      }
    }
  };

  return (
    <div className="buyIphone">
      <div className="buyIphone__header">
        <span className="buyIphone__headerTitle">iPhone 12 Pro</span>
        <span className="buyIphone__headerPrice">{totalPrice()}</span>
      </div>
      <div className="buyIphone__ribbon">
        <p>
          See all the flexible ways to pay and save on your new iPhone.&nbsp;
          <span className="buyIphone__more">Learn more &#62;</span>
        </p>
      </div>
      <div className="buyIphone__selection">
        <div className="buyIphone__selectionImage">
          <img src={image} alt="" />
          <div className="buyIphone__selectionDelivery">
            <img src={delivery} alt="" />
            <p>Free contactless delivery</p>
            <div className="buyIphone__selectionHelp">
              <p>
                Need some help? <span>Chat with an iPhone specialist</span>
              </p>
            </div>
          </div>
        </div>
        <div className="buyIphone__selectionOptions">
          <p>New</p>
          <h1>Buy iPhone 12 Pro</h1>
          <span>Get up to ₹34,000 off with Apple trade-in*</span>

          {/* Trade-in section start */}
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
          {/* Trade-in section end */}

          <hr
            style={{
              height: "1px",
              backgroundColor: "lightgray",
              border: "none",
              marginTop: "25px",
              marginBottom: "-20px",
            }}
          />

          {/* Choose model section start */}
          <h2>Choose your model.</h2>
          <span className="buyIphone__spanBlue">
            Which model is right for you?
          </span>
          <div className="buyIphone__model">
            <div
              onClick={() => setModel("iPhone 12 Pro")}
              className={`buyIphone__modelBox ${
                model === "iPhone 12 Pro" && "buyIphone__modelSelect"
              }`}
            >
              <p className="buyIphone__modelDetails">
                <span className="buyIphone__modelName">iPhone 12 Pro</span>
                <span className="buyIphone__modelDisplay">
                  6.1-inch display
                </span>
              </p>

              <span className="buyIphone__modelPrice">
                From ₹14,111/mo.** or ₹1,19,900
              </span>
            </div>
            <div
              onClick={() => setModel("iPhone 12 Pro Max")}
              className={`buyIphone__modelBox ${
                model === "iPhone 12 Pro Max" && "buyIphone__modelSelect"
              }`}
            >
              <p className="buyIphone__modelDetails">
                <span className="buyIphone__modelPreorder">Pre-order now</span>
                <span
                  style={{ maxWidth: "100px" }}
                  className="buyIphone__modelName"
                >
                  iPhone 12 Pro Max
                </span>
                <span className="buyIphone__modelDisplay">
                  6.7-inch display
                </span>
              </p>
              <span className="buyIphone__modelPrice">
                From ₹15,288/mo.** or ₹1,29,900
              </span>
            </div>
          </div>
          {/* Choose model section end */}

          <hr
            style={{
              height: "1px",
              backgroundColor: "lightgray",
              border: "none",
              marginTop: "25px",
              marginBottom: "-20px",
            }}
          />

          {/* Choose finish section start */}
          <h2>Choose your finish.</h2>

          <div className="buyIphone__finish">
            <div className="buyIphone__finishLeft">
              <div
                onClick={() => setFinish("Graphite")}
                className={`buyIphone__finishBox ${
                  finish === "Graphite" && "buyIphone__finishSelect"
                }`}
              >
                <img
                  className="buyIphone__finishImage"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-finish-graphite-2020?wid=204&hei=204&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601054548000"
                  alt=""
                />
                <span className="buyIphone__finishName">Graphite</span>
              </div>
              <div
                onClick={() => setFinish("Gold")}
                className={`buyIphone__finishBox ${
                  finish === "Gold" && "buyIphone__finishSelect"
                }`}
              >
                <img
                  className="buyIphone__finishImage"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-finish-gold-2020?wid=204&hei=204&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601054548000"
                  alt=""
                />
                <span className="buyIphone__finishName">Gold</span>
              </div>
            </div>
            <div className="buyIphone__finishRight">
              <div
                onClick={() => setFinish("Silver")}
                className={`buyIphone__finishBox ${
                  finish === "Silver" && "buyIphone__finishSelect"
                }`}
              >
                <img
                  className="buyIphone__finishImage"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-finish-silver-2020?wid=204&hei=204&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601054548000"
                  alt=""
                />
                <span className="buyIphone__finishName">Silver</span>
              </div>
              <div
                onClick={() => setFinish("Pacific Blue")}
                className={`buyIphone__finishBox ${
                  finish === "Pacific Blue" && "buyIphone__finishSelect"
                }`}
              >
                <img
                  className="buyIphone__finishImage"
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-finish-blue-2020?wid=204&hei=204&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601054547000"
                  alt=""
                />
                <span className="buyIphone__finishName">Pacific Blue</span>
              </div>
            </div>
          </div>
          {/* Choose finish section end */}

          <hr
            style={{
              height: "1px",
              backgroundColor: "lightgray",
              border: "none",
              marginTop: "25px",
              marginBottom: "-20px",
            }}
          />

          {/* Choose capacity section start */}
          <h2>Choose your capacity.</h2>
          <span className="buyIphone__spanBlue">
            How much capacity is right for you?
          </span>
          <div className="buyIphone__finish">
            <div className="buyIphone__finishLeft">
              <div
                onClick={() => setCapacity("128")}
                className={`buyIphone__finishBox ${
                  capacity === "128" && "buyIphone__finishSelect"
                }`}
              >
                <span className="buyIphone__capacity">
                  128<small>GB</small>
                </span>
                {model === "iPhone 12 Pro" ? (
                  <span className="buyIphone__capacityPrice">
                    From ₹14,111/mo.** or ₹1,19,900
                  </span>
                ) : (
                  <span className="buyIphone__capacityPrice">
                    From ₹15,288/mo.** or ₹1,29,900
                  </span>
                )}
              </div>
              <div
                onClick={() => setCapacity("512")}
                className={`buyIphone__finishBox ${
                  capacity === "512" && "buyIphone__finishSelect"
                }`}
              >
                <span className="buyIphone__capacity">
                  512<small>GB</small>
                </span>
                {model === "iPhone 12 Pro" ? (
                  <span className="buyIphone__capacityPrice">
                    From ₹17,642/mo.** or ₹1,49,900
                  </span>
                ) : (
                  <span className="buyIphone__capacityPrice">
                    From ₹18,819/mo.** or ₹1,59,900
                  </span>
                )}
              </div>
            </div>
            <div className="buyIphone__finishRight">
              <div
                onClick={() => setCapacity("256")}
                className={`buyIphone__finishBox ${
                  capacity === "256" && "buyIphone__finishSelect"
                }`}
              >
                <span className="buyIphone__capacity">
                  256<small>GB</small>
                </span>
                {model === "iPhone 12 Pro" ? (
                  <span className="buyIphone__capacityPrice">
                    From ₹15,288/mo.** or ₹1,29,900
                  </span>
                ) : (
                  <span className="buyIphone__capacityPrice">
                    From ₹16,465/mo.** or ₹1,39,900
                  </span>
                )}
              </div>
              <div
                style={{ borderColor: "white" }}
                className={`buyIphone__finishBox ${
                  tradeIn === false && "buyIphone__finishSelect"
                }`}
              >
                <span
                  style={{ color: "white" }}
                  className="buyIphone__capacity"
                >
                  1<small>TB</small>
                </span>
                <span
                  style={{ color: "white" }}
                  className="buyIphone__capacityPrice"
                >
                  From ₹16,465/mo.** or ₹1,39,900
                </span>
              </div>
            </div>
          </div>
          {/* Choose capacity section end */}

          <hr
            style={{
              height: "1px",
              backgroundColor: "lightgray",
              border: "none",
              marginTop: "25px",
              marginBottom: "-20px",
            }}
          />

          <div className="buyIphone__addToBag">
            <span>
              From ₹15,288/mo.
              <br /> with EMI,** or ₹1,29,900
            </span>
            <hr
              style={{
                height: "1px",
                backgroundColor: "lightgray",
                border: "none",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <div className="buyIphone__addToBagSelect">
              <button className="buyIphone__addToBagButton">Add to Bag</button>
              <FavoriteBorder />
            </div>
            <div className="buyIphone__addToBagShip">
              <p>Ships:</p>
              <span>3-4 weeks</span>
              <span>Free Delivery</span>
              <span class="buyIphone__addToBagShipDates">
                Get delivery dates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyIphone;
