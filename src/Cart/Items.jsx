import React, { useRef } from "react";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { EachItem } from "./item";
import { Nav } from "../Navigation";
export const Itemsonsnap = () => {
  const [data, setdata] = useState([]);
  const [itemprice, setitemprice] = useState([]);
  const ip = useRef();
  useEffect(() => {
    db.collection("hi").onSnapshot((onSnapshot) => {
      setdata([]);
      onSnapshot.forEach((doc) => {
        setdata((data) => [
          ...data,
          {
            price: doc.data().price,
            title: doc.data().title,
            count: doc.data().count,
          },
        ]);
      });
    });
    db.collection("hi").onSnapshot((onSnapshot) => {
      setitemprice([]);
      onSnapshot.forEach((doc) => {
        setitemprice((itemprice) => [
          ...itemprice,
          doc.data().count * doc.data().price,
        ]);
      });
    });
  }, []);
  if (itemprice[0]) {
    ip.current = itemprice.reduce((acc, val) => {
      return acc + val;
    });
  }
  return (
    <div className="App flex">
      <div className="cartcontainer">
        <div className="btnplace">
          <div>
            <div className="mycart">My cart</div>
            {data.map(({ price, title, count }, i) => {
              return (
                <EachItem key={i} price={price} title={title} count={count} />
              );
            })}
          </div>
          <div className="flex center absolute">
            <button className="addbasket flex">
              Go to checkout
              <div className="checkoutbtn">
               {ip.current ? '$'+(ip.current).toFixed(2) : ip.current}
              </div>
            </button>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
