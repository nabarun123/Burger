import React from "react";
import "./Burger.css";
import Petty from "./Petty";

export default function Burger(props) {
  return (
    <>
      <div className="upperBun"></div>
      <div className="burgerVeggie"></div>
      <div className="bergerPetty">
        <Petty />
        <Petty />
      </div>
      <div className="burgerCheese"></div>
      <div className="burgerVeggie"></div>
      <div className="bergerPetty">
        <Petty />
        <Petty />
      </div>
      <div className="bergerPetty">
        <Petty />
        <Petty />
      </div>
      <div className="lowerBun"></div>
    </>
  );
}
