import React from "react";
import "../App.css";
export const EachItem = ({
  index,
  price,
  count,
  ids,
  title,
  setpass,
  pass,
  image,
}) => {
  const decrement = () => {
    const b = pass.filter(({ id }) => {
      return id !== ids;
    });
    setpass([
      ...b,
      {
        count: pass[index].count - 1,
        price: price,
        title: title,
        id: ids,
        image: image,
      },
    ]);

    if (count === 1) {
      const b = pass.filter(({ id }) => {
        return id !== ids;
      });
      setpass(b);
    }
  };

  const increment = () => {
    const b = pass.filter(({ id }) => {
      return id !== ids;
    });
    setpass([
      ...b,
      {
        count: pass[index].count + 1,
        price: price,
        title: title,
        id: ids,
        image: image,
      },
    ]);
    // console.log(pass);
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
            <div className="margin-top">{count}</div>
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
