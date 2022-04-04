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
          .map(
            (el, i) => {
              return (
                <Itemdata
                  id={el.id}
                  key={i}
                  title={el.title}
                  price={el.price}
                  rate={el.rating.rate}
                  description={el.description}
                  image={el.image}
                  el={el}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
