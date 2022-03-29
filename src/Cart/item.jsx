import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
export const EachItem = ({
  index,
  price,
  count,
  ids,
  title,
  setpass,
  pass,
  setdata,
  image,
  setnewob,
  setminus,
}) => {
  const [count1, setcount1] = useState(0);
  useEffect(() => {
    setcount1(count);
  }, [count]);
  useEffect(() => {
    setdata(count1 * price);
  }, [count1]);

  const decrement = () => {
    setminus((pass[index].count = count1 - 1));
    setcount1(count1 - 1);

    if (count1 === 1) {
      const b = pass.filter(({ id }) => {
        return id !== ids;
      });
      setpass(b);
    }
  };
  const increment = () => {
    setnewob((pass[index].count = count1 + 1));
    setcount1(count1 + 1);
  };
  const del = () => {
    const b = pass.filter(({ id }) => {
      return id !== ids;
    });
    setpass(b);
  };
  return (
    <div className="cartcont">
      <div className="flex cartitem">
        <img src={image} alt="#"></img>
        <div className="gg">
          <p>{title}</p>
          <div className="flex style">
            <button className="minus" onClick={decrement}>
              <div className="minusicon"></div>
            </button>
            <div className="margin-top">{count1}</div>
            <button className="plus" onClick={increment}>
              <div className="plusicon"></div>
            </button>
          </div>
        </div>
        <div className="delprice">
          <div className="x" onClick={del}></div>
          <div>${(count1 * price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
