import React, { useEffect } from "react";
import { useState } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
import { data } from "../utils/data";
export const Itemsonsnap = ({ arrofcart }) => {
  // console.log(arrofcart.cart);
  const [bool, setbool] = useState(true);
  const [addprice, setaddprice] = useState(0);
  return (
    <div className="App flex">
      <div className="cartcontainer">
        <div className="btnplace">
          <div>
            <div className="mycart">My cart</div>
            
            {arrofcart.cart &&
              data
                .filter(({ id }) => {
                  return id === (arrofcart.cart).filter({ id });
                })
                .map(({ price, id, title, image, count }, i) => {
                  return (
                    <EachItem
                      key={i}
                      index={i}
                      price={price}
                      ids={id}
                      image={image}
                      title={title}
                      count={count}
                    />
                  );
                })}
          </div>
          <div className="flex center absolute">
            {/* <button className="addbasket flex" onClick={Click}>
              Go to checkout
              <div className="checkoutbtn">${addprice.toFixed(2)}</div>
            </button> */}
          </div>
        </div>
        <Nav />
        {/* {!bool && (
          <Checkout bool={bool} price={addprice.toFixed(2)} setbool={setbool} />
        )} */}
      </div>
    </div>
  );
};
