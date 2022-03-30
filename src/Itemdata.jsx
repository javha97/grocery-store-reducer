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
  setpass,
  love,
  setlove,
  pass,
}) => {
  const [bool, setbool] = useState(true);
  const [count2, setcount] = useState(1);
  const changebool = () => {
    setbool(!bool);
  };
  useEffect(() => {
    if (!bool) {
      setlove([
        ...love,
        { price: price, title: title, id: id, image: image, rate: { rate } },
      ]);
    }
    // console.log("hasagdlaa : ", bool);
    // const a = love.filter(({ id }) => {
    //   return id !== idk;
    // });
    // setlove(a);
  }, [bool]);

  const decrement = () => {
    if (count2 > 0) {
      setcount(count2 - 1);
    }
  };
  const increment = () => {
    setcount(count2 + 1);
  };
  const Addtobasket = () => {
    if (pass.length !== 0) {
      let a = pass.filter((el) => {
        return el.id === id;
      });
      if (a.length !== 0) {
        const b = pass.filter((el) => {
          return el.id !== id;
        });
        setpass([
          ...b,
          {
            count: count2 + a[0].count,
            price: price,
            title: title,
            id: id,
            image: image,
          },
        ]);
        alert("item already added to your cart");
      } else {
        setpass([
          ...pass,
          { count: count2, price: price, title: title, id: id, image: image },
        ]);
      }
    } else {
      setpass([
        ...pass,
        { count: count2, price: price, title: title, id: id, image: image },
      ]);
    }
    alert("Таны сагсанд нэмэгдлээ!");
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
            <div className="idk"></div>
          </div>
        </div>
        <div className="imgcontainer">
          <img className="image" src={image} alt="#"></img>
        </div>
        <div className="flex space-around font iteminfo">
          <div style={{ width: "90%" }}> {title}</div>
          <div onClick={changebool} className="heartlogo"></div>
        </div>
        <div className="flex space-around itemdecinc center2">
          <div className="flex center1 a">
            <button onClick={decrement} className="minusn"></button>
            <div className="num font">{count2}</div>
            <button onClick={increment} className="plusn"></button>
          </div>
          <div className="font" style={{ lineHeight: "98px" }}>
            $ {(count2 * price).toFixed(2)}
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
        <button className="addbasket" onClick={Addtobasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};
