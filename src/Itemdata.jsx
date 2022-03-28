import React from "react";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { db } from "./firebase";
import { Link } from "react-router-dom";
export const Itemdata = ({ image, price, description, rate, title }) => {
  const [count, setcount] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const increment = () => {
    setcount(count + 1);
  };

  const bool = () => {
    // Storage.setItem(title, title)
    db.collection("hi").doc(title).update({
      bool: !true,
    });
  };
  const Addtobasket = () => {
    db.collection('hi').doc(title).set({
      price,
      count: count,
      title,
      bool: true,
    })
    alert('Таны сагсанд нэмэгдлээ!')
  };
  return (
    <div>
      <div style={{ width: "100%", height: "820px", overflow: "scroll" }}>
        <div>
          <div className="flex title">
            <Link to="../">
              {" "}
              <div className="leftarrow"></div>
            </Link>
            {/* <div className="font">Women's clothing</div> */}
            <div className="idk"></div>
          </div>
        </div>
        <div className="imgcontainer">
          <img className="image" src={image} alt="#"></img>
        </div>
        <div  className="flex space-around font iteminfo">
          <div style={{width: '95%'}}> {title}</div>
          <div onClick={bool} className="heartlogo"></div>
        </div>
        <div className="flex space-around itemdecinc center2">
          <div className="flex center1 a">
            <button onClick={decrement} className="minusn"></button>
            <div className="num font">{count}</div>
            <button onClick={increment} className="plusn"></button>
          </div>
          <div className="font" style={{ lineHeight: "98px" }}>
            ${" "}
           { (count*price).toFixed(2)}
          </div>
        </div>
        <div className="center2">
          <div className="descfont">Description</div>
          <div className="description ">{description}</div>
        </div>
        <div className="flex space-around center2 b">
          <div className="avfont">Available</div>
          <div className="yes">Yes</div>
        </div>
        <div>
          <div className="center2 b avfont">Rating: {rate}</div>
          {/* <div>{rate}</div> */}
        </div>
      </div>

      <div className="flex center">
        <button className="addbasket" onClick={Addtobasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};
