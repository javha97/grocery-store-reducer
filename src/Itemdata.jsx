import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Itemdata = ({
  image,
  price,
  id,
  description,
  rate,
  title,
  love,
  setlove,
  Increment,
  arrofcart,
  Decrement,
  Addtobasket,
}) => {
  const [bool, setbool] = useState(true);
  // const changebool = () => {
  //   setbool(!bool);
  // };
  // useEffect(() => {
  //   if (!bool) {
  //     setlove([
  //       ...love,
  //       { price: price, title: title, id: id, image: image, rate: { rate } },
  //     ]);
  //   }
  //   // console.log("hasagdlaa : ", bool);
  //   // const a = love.filter(({ id }) => {
  //   //   return id !== idk;
  //   // });
  //   // setlove(a);
  // }, [bool]);
  // console.log(arrofcart);
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
          {/* <div onClick={changebool} className="heartlogo"></div> */}
        </div>
        <div className="flex space-around itemdecinc center2">
          <div className="flex center1 a">
            <button onClick={Decrement} className="minusn"></button>
            {/* <div className="num font">{arrofcart.count}</div> */}
            <button onClick={()=> Increment()} className="plusn"></button>
          </div>
          <div className="font" style={{ lineHeight: "98px" }}>
            {/* $ {(arrofcart.count * price).toFixed(2)} */}
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
        <button className="addbasket" onClick={() => Addtobasket(id)}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};
