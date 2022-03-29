import React from "react";
import { useState } from "react";
import { Orderaccep } from "./Orderaccept";
import { Link } from "react-router-dom";
export const Checkout = ({ setbool, bool, price }) => {
  const [acceptbool, setacceptbool] = useState(true);
  const del = () => {
    setbool(!bool);
    // console.log(bool);
  };
  const accept = () => {
    setacceptbool(!acceptbool);
  };
  return (
    <>
      <div className="containercheckout ">
        <div className="blur"></div>
        <div className="subcheckout">
          <div className="flex space-around checkoutcenter btm">
            <div className="font">Checkout</div>
            <div onClick={del} className="checkfont2">
              X
            </div>
          </div>
          <div className="flex space-around checkoutcenter btm1">
            <div className="checkfont">Delivery</div>
            <div className="checkfont2 flex">
              Select Method
              <div className="rightarr"></div>
            </div>
          </div>
          <div className="flex space-around checkoutcenter btm1">
            <div className="checkfont">Payment</div>
            <div className="checkfont2 flex">
              img
              <div className="rightarr"></div>
            </div>
          </div>
          <div className="flex space-around checkoutcenter btm1">
            <div className="checkfont">Promo code</div>
            <div className="checkfont2 flex">
              Pick discount
              <div className="rightarr"></div>
            </div>
          </div>
          <div className="flex space-around checkoutcenter btm1">
            <div className="checkfont">Total Cost</div>
            <div className="checkfont2"> ${price}</div>
          </div>
          <div
            className="checkfont checkoutcenter"
            style={{ marginTop: "10px" }}
          >
            By placing an order you agree to our Terms And Conditions
          </div>
          <div
            className="flex space-around checkoutcenter"
            style={{ marginTop: "10px" }}
          >
            <div>Home</div>
            <div>Profile</div>
          </div>
          <div className="flex center">
            <Link to="/cart/acceptorder">
              <button onClick={accept} className="placeorderbtn">
                Place Order
              </button>{" "}
            </Link>
          </div>

          {!acceptbool && <Orderaccep />}
        </div>
      </div>
    </>
  );
};
