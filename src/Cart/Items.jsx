import React, { useEffect } from "react";
import { useState } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
export const Itemsonsnap = ({ pass, setpass }) => {
  const [bool, setbool] = useState(true);
  const [newob, setnewob] = useState([]);
  const [minus, setminus] = useState([]);
  const [addprice, setaddprice] = useState(0);
  // console.log(minus);
  const Click = () => {
    if (pass.length !== 0) {
      setbool(!bool);
    }
  };
  useEffect(() => {
    let b = 0;
    for (let i = 0; i < pass.length; i++) {
      b += pass[i].count * pass[i].price;
    }
    setaddprice(b);
  }, [pass, newob, minus]);
  // console.log(pass);
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
              <div className="checkoutbtn">${addprice.toFixed(2)}</div>
            </button>
          </div>
        </div>
        <Nav />
        {!bool && (
          <Checkout bool={bool} price={addprice.toFixed(2)} setbool={setbool} />
        )}
      </div>
    </div>
  );
};
