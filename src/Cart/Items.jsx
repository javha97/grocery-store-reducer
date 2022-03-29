import React, { useEffect } from "react";
import { useState } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
import { useRef } from "react";
export const Itemsonsnap = ({ pass, setpass }) => {
  const [data, setdata] = useState([]);
  const [bool, setbool] = useState(true);
  const [newob, setnewob] = useState([]);
  const [minus, setminus] = useState([]);
  const additionalprice = useRef();
  const Click = () => {
    setbool(!bool);
  };
  useEffect(() => {
    additionalprice.current = pass.reduce((acc, ival) => {
      return acc.price * acc.count + ival.price * ival.count;
    });
  }, [pass, newob, minus]);
  return (
    <div className="App flex">
      <div className="cartcontainer">
        <div className="btnplace">
          <div>
            <div className="mycart">My cart</div>
            {pass &&
              pass.map(({ price, id, title, image, count }, i) => {
                return (
                  <EachItem
                    minus={minus}
                    setminus={setminus}
                    setnewob={setnewob}
                    newob={newob}
                    key={i}
                    index={i}
                    price={price}
                    ids={id}
                    data={data}
                    setdata={setdata}
                    image={image}
                    pass={pass}
                    setpass={setpass}
                    title={title}
                    count={count}
                  />
                );
              })}
          </div>
          <div className="flex center absolute">
            <button className="addbasket flex" onClick={Click}>
              Go to checkout
              <div className="checkoutbtn">
                {pass.length === 1
                  ? '$'+ pass[0].count * pass[0].price
                  : additionalprice.current
                  ? "$" + additionalprice.current.toFixed(2)
                  : additionalprice.current}
              </div>
            </button>
          </div>
        </div>
        <Nav />
        {bool && pass.length !== 1 ? ( 
          additionalprice.current && !bool&&
          <Checkout
            bool={bool}
            price={additionalprice.current.toFixed(2)}
            setbool={setbool}
          />
        ) 
        
        : !bool &&  (
          <Checkout
            bool={bool}
            price={pass[0].count * pass[0].price.toFixed(2)}
            setbool={setbool}
          />
        )}
      </div>
    </div>
  );
};
