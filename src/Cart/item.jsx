import React from "react";
import "../App.css";
import { data } from "../utils/data";
import { db } from "../firebase";
export const EachItem = ({ price, count, title }) => {
  const a = data.filter((el) => {
    return el.title === title;
  });
  if (count === 0) {
    db.collection("hi").doc(title).delete();
  }
  const decrement = () => {
    db.collection("hi")
      .doc(title)
      .update({
        count: count - 1,
      });
  };
  const increment = () => {
    db.collection("hi")
      .doc(title)
      .update({
        count: count + 1,
      });
  };
  const del = () => {
    db.collection("hi").doc(title).delete();
  };
  return (
    <div className="cartcont">
      <div className="flex cartitem">
        <img src={a[0].image} alt="#"></img>
        <div className="gg">
          <p>{title}</p>
          <div className="flex style">
            <button className="minus" onClick={decrement}>
              <div className="minusicon"></div>
            </button>
            <div  className="margin-top">{count}</div>
            <button className="plus" onClick={increment}>
              <div className="plusicon"></div>
            </button>
          </div>
        </div>
        <div className="delprice">
          <div className="x" onClick={del}></div>
          <div>${(count * price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
