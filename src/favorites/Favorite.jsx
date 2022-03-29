import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export const Favorite = ({ image, id, title, rate, price }) => {
  return (
    <div className="cartcont">
      <div className="cartitem flex">
        <img alt="#" src={image}></img>
        <div className="gg">
          <p>{title}</p>
          <div>
            Rate:
            {rate}
          </div>
        </div>
        <div className="flex align">
          <div className="flex">
            <div className="margin"> ${price}</div>
            <Link to={id + "i"}>
              <div className="rightarrow"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
