import React from "react";
import { useParams } from "react-router-dom";
import BuyIphone from "./BuyIphone";

function Shop() {
  const { Id } = useParams();

  return (
    <div className="shop">
      {(Id == "iphone12pro" || Id == "iphone12") && <BuyIphone Id={Id} />}
    </div>
  );
}

export default Shop;
