import React, { useEffect } from "react";
import { useState } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
import { Checkout } from "../checkout";
export const Itemsonsnap = ({ pass, setpass }) => {
  const [data, setdata] = useState([]);
  const [bool, setbool] = useState(true);
  // const ip = useRef();
  // console.log(data);
  // console.log(pass);
  // ip.current = pass.reduce((acc, val) => {
  //   return acc + val;
  // });

  // if (data) {
  //   pass.forEach((el) => {
  //     Object.keys(el).forEach((els) => {
  //       el["price"] = data;
  //     });
  //   });
  // }

  console.log(pass);
  // console.log(a);
  // if (data) {
  //   pass.map((el) => {
  //     //  (Object.values(el)[1] = data);
  //     let a = Object.keys(el);
  //     console.log(a.price);
  //     // console.log(el);
  //   });
  //   // console.log(pass);
  // }

  // console.log(pass);
  // console.log(data);
  const Click = () => {
    setbool(!bool);
  };
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
                    key={i}
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
                {/* {ip.current ? "$" + ip.current.toFixed(2) : ip.current} */}
              </div>
            </button>
          </div>
        </div>
        <Nav />
        {/* {!bool && <Checkout bool={bool} price={ip.current.toFixed(2)} setbool={setbool}/>} */}
      </div>
    </div>
  );
};
