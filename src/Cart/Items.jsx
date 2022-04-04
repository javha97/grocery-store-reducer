import React from "react";
import { useState , useContext} from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
import { mycontext } from "../Apps";
export const Itemsonsnap = () => {
  const [bool, setbool] = useState(true);
  const myval=useContext(mycontext)
  const click = () => {
    for (let price of myval.arrofcart.cart) {
      if (price.price > 0) {
        setbool(!bool)
      }
    }
  }
  let a = myval.arrofcart.cart.reduce((ac, cur) => {
    return ac + cur.num * cur.price
  }, 0)
  return (
    <div className="App flex">
      <div className="cartcontainer">
        <div className="btnplace">
          <div>
            <div className="mycart">My cart</div>
            {myval.arrofcart.cart &&
              myval.arrofcart.cart.map(
                ({ data: { price, title, image }, id, num }, i) => {
                  return (
                    <EachItem
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
