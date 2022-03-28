import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
export const Orderaccep = () => {
  return (
    <>
      <div className="App flex">
        <div className="cartcontainer">
          <div className="acceptord">
            <div style={{ width: "100%", height: "50vh" }}>
              <div className="acceptimg"></div>
            </div>
            <div></div>
            <p className="orderaccepted">Your Order has been accepted</p>
            <p id="acc">
              Your items has been placcd and is on it’s way to being processed
            </p>
            <div className="btncenter">
              <button className="addbasket accbtn">Track order</button>
            </div>
            <Link to="/">
              {" "}
              <button className="backhomebtn">Back to home</button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
