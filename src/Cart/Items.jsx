import React from "react";
import { useState } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
export const Itemsonsnap = ({ arrofcart, Increment, Decrement, Del }) => {
  const [bool, setbool] = useState(true);
  const click = () => {
    for (let price of arrofcart.cart) {
      if (price.price > 0) {
        setbool(!bool)
      }
    }
  }
  let a = arrofcart.cart.reduce((ac, cur) => {
    return ac + cur.num * cur.price
  }, 0)
  return (
    <div className="App flex">
      <div className="cartcontainer">
        <div className="btnplace">
          <div>
            <div className="mycart">My cart</div>
            {arrofcart.cart &&
              arrofcart.cart.map(
                ({ data: { price, title, image }, id, num }, i) => {
                  return (
                    <EachItem
                      Del={Del}
                      Decrement={Decrement}
                      Increment={Increment}
                      key={i}
                      price={price}
                      id={id}
                      image={image}
                      title={title}
                      num={num}
                    />
                  );
                }
              )}
          </div>
          <div className="flex center absolute">
            <button className="addbasket flex" onClick={click}>
              Go to checkout
              <div className="checkoutbtn">${a.toFixed(2)}</div>
            </button>
          </div>
        </div>
        <Nav />
        {!bool && (
          <Checkout bool={bool} price={a.toFixed(2)} setbool={setbool} />
        )}
      </div>
    </div>
  );
};
