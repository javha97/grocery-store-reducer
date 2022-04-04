import React from "react";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mycontext } from "./Apps";
import { useContext } from "react";
export const Itemdata = ({
  image,
  price,
  id,
  description,
  rate,
  title,
  el,
}) => {
  const minus = () => {
    if (num > 1) {
      setnum(num - 1)
    }
  }
  const myval=useContext(mycontext)
  const [num, setnum] = useState(1)
  return (
    <div>
      <div style={{ width: "100%", height: "820px", overflow: "scroll" }}>
        <div>
          <div className="flex title">
            <Link to="../">
              {" "}
              <div className="leftarrow"></div>
            </Link>
            <div className="idk"></div>
          </div>
        </div>
        <div className="imgcontainer">
          <img className="image" src={image} alt="#"></img>
        </div>
        <div className="flex space-around font iteminfo">
          <div style={{ width: "90%" }}> {title}</div>
          <div onClick={() => myval.fav(id, image, price, rate, title)} className="heartlogo"></div>
        </div>
        <div className="flex space-around itemdecinc center2">
          <div className="flex center1 a">
            <button onClick={minus} className="minusn"></button>
            <div className="num font">{num}</div>
            <button onClick={() => setnum(num + 1)} className="plusn"></button>
          </div>
          <div className="font" style={{ lineHeight: "98px" }}>
            $ {(num * price).toFixed(2)}
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
        </div>
      </div>
      <div className="flex center">
        <button className="addbasket" onClick={() => myval.Addtobasket(id, num, el, price)}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};
