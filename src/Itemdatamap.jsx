import React from "react";
import { useParams } from "react-router-dom";
import { Itemdata } from "./Itemdata";
import { data } from "./utils/data";
import "./App.css";
export const Itemdatamap = () => {
  const { slug } = useParams();

  return (
    <div className="App flex">
      <div className="maincontainer">
        {data
          .filter(({ id }) => {
            return id + "i" === slug;
          })
          .map(({ title, image, price, description, rating: { rate } }, i) => {
            return (
              <Itemdata
                key={i}
                title={title}
                price={price}
                rate={rate}
                description={description}
                image={image}
              />
            );
          })}
      </div>
    </div>
  );
};
