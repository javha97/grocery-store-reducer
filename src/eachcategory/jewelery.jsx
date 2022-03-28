import React from "react";
import "../App.css";
import Singleitem from "../Singleitem";
import {data} from '../utils/data'
export const Jewelery = () => {
  return (
    <>
      {data
        .filter(({ category }) => {
          return category === `jewelery`;
        })
        .map(({ id, title, price, description, category, image }, i) => {
          return (
            <Singleitem
              key={i}
              id={id}
              title={title}
              category={category}
              image={image}
              description={description}
              price={price}
            />
          );
        })}
    </>
  );
};
