import React from "react";
import '../App.css'
import Singleitem from "../Singleitem";
import {data} from '../utils/data'
export const Electronics = () => {
  return (
   <>
      {data
        .filter(({ category }) => {
            // console.log(category);
          return category === `electronics`;
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