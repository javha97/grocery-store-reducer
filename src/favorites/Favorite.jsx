import React from "react";
import { data } from "../utils/data";
import { Eitem } from "./Eitem";
import "../App.css";
export const Favorite = ({ etitle, bool, rate, price }) => {
  const a = data.filter(({ title }) => {
    return title === etitle;
  });
  return (
    <div className="cartcont">
      {a.map(({ image, price, title, id, rating: { rate } }, i) => {
        return (
          <Eitem
            id={id}
            key={i}
            image={image}
            rate={rate}
            price={price}
            title={title}
          />
        );
      })}
    </div>
  );
};
